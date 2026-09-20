import { type FC, useEffect, useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export const AnimatedCounter: FC<AnimatedCounterProps> = ({
  value,
  className = '',
  duration = 1800,
}) => {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.2, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState<string>('0');
  const animationStarted = useRef(false);

  useEffect(() => {
    if (!isInView || animationStarted.current) return;

    // Parse the value string: e.g. "25+", "05", "100%", "$5.2M+", "Multi-Site"
    const match = value.match(/^([^0-9.]*)(\d+(?:\.\d+)?)(.*)$/);

    if (!match) {
      // Non-numeric value (like "Multi-Site")
      setDisplayValue(value);
      animationStarted.current = true;
      return;
    }

    animationStarted.current = true;
    const prefix = match[1] || '';
    const rawNumber = match[2];
    const suffix = match[3] || '';

    const targetNumber = parseFloat(rawNumber);
    const hasLeadingZero = rawNumber.length > 1 && rawNumber.startsWith('0');
    const decimalPlaces = rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out expo curve for an elegant, snappy mechanical stop
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNumber = easeProgress * targetNumber;

      let formattedNumber: string;
      if (decimalPlaces > 0) {
        formattedNumber = currentNumber.toFixed(decimalPlaces);
      } else {
        const rounded = Math.floor(currentNumber);
        formattedNumber = hasLeadingZero && rounded < 10 ? `0${rounded}` : `${rounded}`;
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Ensure exact final string
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  // Check if non-numeric
  const isNonNumeric = !/\d/.test(value);

  if (isNonNumeric) {
    return (
      <span
        ref={ref}
        className={`inline-block transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } ${className}`}
      >
        {value}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={`inline-block font-variant-numeric tabular-nums transition-opacity duration-300 ${
        isInView ? 'opacity-100' : 'opacity-80'
      } ${className}`}
      aria-label={value}
    >
      {isInView ? displayValue : '0'}
    </span>
  );
};
