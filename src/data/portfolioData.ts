export interface InitiativeImage {
  src: string;
  alt: string;
  badge: string;
  caption: string;
  objectPosition?: string;
  aspectRatio?: string;
}

export interface Initiative {
  number: string;
  title: string;
  role: string;
  focus: string;
  description: string;
  pillars: string[];
  impactNotes: string;
  purpose?: string;
  mandate?: string;
  image?: InitiativeImage;
  gallery?: InitiativeImage[];
}

export interface LeadershipRole {
  organization: string;
  role: string;
  period: string;
  location: string;
  scope: string;
  responsibilities: string[];
}

export interface GovernanceAppointment {
  organization: string;
  role: string;
  body: string;
  scope: string;
  description: string;
}

export interface Credential {
  degreeOrTitle: string;
  institution: string;
  yearOrStatus: string;
  type: 'academic' | 'designation' | 'honor';
  note?: string;
}

export interface SocialLink {
  platform: 'LinkedIn' | 'Instagram' | 'Facebook' | 'TikTok';
  handle: string;
  url: string;
  category: string;
}

export interface LeadershipProfileData {
  title: string;
  personalityProfile: string[];
  experienceSummary: string[];
  thesisTitle: string;
  thesisDescription: string;
  areasOfExperience: string[];
  mission: string;
}

export const portfolioData = {
  profile: {
    name: "Judith Kerr",
    postNominals: "BASc, M.C.C., Dr-C.",
    title: "Global Humanitarian Executive, NGO Founder & Social Impact Strategist",
    heroStatement: "Advancing systemic equity, sustainable social enterprise, and community restoration across Canada and globally.",
    subStatement: "Synthesizing 25+ years of institutional governance, frontline crisis stabilization, and international grassroots development to build self-sustaining community ecosystems.",
    email: "judith.kerr@alumni.utoronto.ca",
    phone: "(416) 918-3177",
    location: "Toronto, Ontario, Canada & International",
    bioLong: "Judith E. Kerr is a resilient, compassionate, purpose-driven, and reflective leader with a strong commitment to helping individuals and communities move from adversity toward healing, restoration, empowerment, and purposeful transformation. Her leadership reflects strong competencies in communication, advocacy, counselling, teaching, mentoring, research, and community development. Her professional approach integrates Christian faith, psychology, counselling, education, trauma-informed care, and lived experience, providing a holistic perspective that recognizes the interconnectedness of the mind, body, spirit, and soul.",
  },

  leadershipProfile: {
    title: "Professional Personality and Leadership Profile",
    personalityProfile: [
      "Judith E. Kerr is a resilient, compassionate, purpose-driven, and reflective leader with a strong commitment to helping individuals and communities move from adversity toward healing, restoration, empowerment, and purposeful transformation.",
      "Her leadership reflects strong competencies in communication, advocacy, counselling, teaching, mentoring, research, and community development. Her professional approach integrates Christian faith, psychology, counselling, education, trauma-informed care, and lived experience, providing a holistic perspective that recognizes the interconnectedness of the mind, body, spirit, and soul.",
      "Kerr demonstrates intellectual curiosity and a commitment to lifelong learning through ongoing academic development, research, writing, teaching, and the creation of educational and ministry resources. Her work is characterized by compassion, integrity, perseverance, relational engagement, and a commitment to empowering others to understand their experiences, reclaim their identity, develop resilience, and pursue meaningful and purposeful lives."
    ],
    experienceSummary: [
      "Judith E. Kerr brings a multidisciplinary background encompassing Christian counselling, ministry leadership, education, research, advocacy, women's empowerment, mentoring, and community development.",
      "As Founder and Executive Director of Judith Kerr Ministries International (JKMI) and Women FE Woman Ministry, Kerr has provided leadership in the development and delivery of educational programs, workshops, seminars, conferences, teaching initiatives, prayer and family programs, and community outreach activities.",
      "Her professional work addresses a broad range of issues, including trauma and its long-term effects, emotional healing, personal development, women's empowerment, relationships, family life, spiritual development, resilience, identity, and transformational growth."
    ],
    thesisTitle: "The Long-Term Effects of Childhood Sexual Abuse: Christian Counselling Implications",
    thesisDescription: "Her academic research has contributed to her understanding of trauma and its psychological, relational, and spiritual implications. Her master's thesis reflects her interest in integrating psychological understanding with Christian counselling and spiritual care. Additional research interests include Adverse Childhood Experiences (ACEs), religion and spirituality, trauma, and whole-person healing.",
    areasOfExperience: [
      "Christian counselling and spiritual care",
      "Trauma-informed education and support",
      "Counselling and psychosocial development",
      "Women's empowerment and leadership development",
      "Teaching, facilitation, and public speaking",
      "Research and academic writing",
      "Mentoring and personal development",
      "Community outreach and advocacy",
      "Ministry and organizational leadership",
      "Family and relationship education",
      "Program and event development",
      "Fundraising and charitable initiatives",
      "Development of devotional, educational, and ministry resources"
    ],
    mission: "The overarching focus of Kerr's professional and ministry work is the integration of faith, psychological understanding, education, and whole-person development to equip individuals, families, leaders, churches, and communities to think biblically, live victoriously, and contribute meaningfully to the transformation of their communities."
  } as LeadershipProfileData,

  impactMetrics: [
    {
      metric: "25+",
      label: "Years of Leadership",
      description: "Executive governance, multi-site housing, and social services leadership.",
    },
    {
      metric: "05",
      label: "Focus Nations",
      description: "International initiatives in Kenya, Uganda, Nigeria, India, and Jamaica.",
    },
    {
      metric: "Multi-Site",
      label: "Housing & Hub Operations",
      description: "Directing high-density community hubs and emergency shelter stabilization.",
    },
    {
      metric: "100%",
      label: "Financial Turnaround",
      description: "Restructuring non-profit operations to total fiscal stability in year one.",
    },
  ],

  strategicInitiatives: [
    {
      number: "01",
      title: "Women FE Woman",
      role: "Founder & Executive Director",
      focus: "Empowerment, Self-Worth & Community Resource Development",
      description: "Founded on the principle that the combined energy of people focusing together is far greater than individual effort, Women FE Woman empowers all women—particularly marginalized women—to recognize their intrinsic self-worth through self-knowledge individually and collectively (Together Each Achieve More). Grounded in the truth that there is more than enough for everyone, when we assist others to realize their dreams and successes, abundance naturally flows back to strengthen the entire community.\n\nOur mandate and purpose are to serve the social and economic needs of women in our communities by providing vital services, supports, and direction to help them achieve their life goals and uphold their rights. Through our commitment to strengthening community foundations, we equip members to develop and share sustainable resources for lasting empowerment.",
      pillars: [
        "Individual & Collective Self-Worth: Empowering marginalized women to recognize their value through self-knowledge.",
        "Goal & Dream Realization: Providing services, supports, and direction to fulfill personal and economic life purposes.",
        "Advocacy & Rights Protection: Promoting equitable opportunities and ensuring women's rights are upheld.",
        "Community Foundation Building: Serving social and economic needs by developing and sharing collaborative resources."
      ],
      impactNotes: "Together Each Achieve More (TEAM) — Assisting others to realize their dreams and successes naturally flows back to empower the collective.",
      image: {
        src: "/IMG-20260917-WA0008.jpg",
        alt: "Women FE Woman Community School & Education Initiative",
        badge: "Community Education Hub & Outreach",
        caption: "Judith Kerr alongside students, educators, and community organizers at an educational hub supported by Women FE Woman.",
        objectPosition: "center 30%",
        aspectRatio: "aspect-[16/11]"
      },
      gallery: [
        {
          src: "/IMG-20260917-WA0008.jpg",
          alt: "Judith Kerr with students and teachers in Women FE Woman blue shirts",
          badge: "Judith Kerr & Student Cohort",
          caption: "Judith Kerr alongside students, educators, and community organizers at an educational hub supported by Women FE Woman.",
          objectPosition: "center 30%",
          aspectRatio: "aspect-[16/11]"
        },
        {
          src: "/IMG-20260917-WA0009.jpg",
          alt: "School facility and student assembly supported by Women FE Woman",
          badge: "Campus & Assembly Overview",
          caption: "Assembled student body and community educational campus established through Women FE Woman foundational support.",
          objectPosition: "center 35%",
          aspectRatio: "aspect-[16/11]"
        }
      ]
    },
    {
      number: "02",
      title: "Judith Kerr Ministries International",
      role: "Founder & General Overseer",
      focus: "Global Pastoral Care, Church Planting & Restorative Leadership",
      description: "A faith-centered global outreach organization providing transformative pastoral leadership, holistic family counselling, community restoration, and cross-denominational leadership mentoring.",
      pillars: [
        "International church planting and spiritual leadership mentorship programs",
        "Faith-based trauma healing and family crisis counselling frameworks",
        "Community food security and emergency relief mobilization"
      ],
      impactNotes: "Nurturing resilient global congregations and empowering local leaders to serve vulnerable populations.",
      image: {
        src: "/IMG-20260917-WA0016.jpg",
        alt: "Judith Kerr Ministries International Pastoral Assembly",
        badge: "Pastoral Outreach & Restorative Ministry",
        caption: "Judith Kerr ministering and delivering keynote restorative guidance at an assembled community gathering.",
        objectPosition: "center 22%",
        aspectRatio: "aspect-[4/5]"
      }
    },
    {
      number: "03",
      title: "Sustainable Social Entrepreneurship",
      role: "Lead Strategist & Architect",
      focus: "Self-Sustaining Economic Models & Community Funding",
      description: "Architecting revenue-generating community enterprises that eliminate donor dependency, generate local employment, and self-fund vital frontline health and education programming.",
      pillars: [
        "Designing regenerative enterprise models for non-profit organizations",
        "Financial literacy and micro-enterprise incubation for marginalized groups",
        "Strategic public-private social impact partnerships"
      ],
      impactNotes: "Proven transition of non-profit programs toward recurring revenue independence and local wealth creation.",
      image: {
        src: "/IMG-20260917-WA0019.jpg",
        alt: "Sustainable Social Entrepreneurship & Micro-Enterprise Review",
        badge: "Regenerative Micro-Enterprise & Food Systems",
        caption: "Judith Kerr on site reviewing local grain logistics, food supply distributions, and self-sustaining community micro-enterprise models.",
        objectPosition: "center 30%",
        aspectRatio: "aspect-[4/5]"
      }
    }
  ] as Initiative[],

  leadershipExperience: [
    {
      organization: "Scarborough Centre for Healthy Communities (SCHC)",
      role: "LEPP Hub Coordinator",
      period: "Current Executive Appointment",
      location: "Scarborough, ON",
      scope: "High-density community hub management & inter-agency crisis coordination",
      responsibilities: [
        "Direct daily operational governance across high-density community hubs serving marginalized populations.",
        "Lead frontline crisis mediation, high-acuity conflict de-escalation, and client stabilization protocols.",
        "Facilitate seamless operational integration between Toronto Community Housing (TCHC) and Toronto Police Service (TPS).",
        "Manage inter-disciplinary frontline staff, community outreach programs, and emergency support services."
      ]
    },
    {
      organization: "Elisa House",
      role: "Executive Director",
      period: "Executive Tenure",
      location: "Toronto, ON",
      scope: "Multi-site shelter operations, organizational restructuring & fiscal turnaround",
      responsibilities: [
        "Exercised executive oversight of multi-site transitional and emergency housing facilities for women.",
        "Executed comprehensive organizational restructuring, achieving total financial stability and balanced operational budgets within year one.",
        "Spearheaded donor acquisition strategies, capital allocation, and governmental compliance audits.",
        "Fostered a trauma-informed organizational culture and elevated frontline staff retention rates."
      ]
    },
    {
      organization: "Homeward Family Shelter",
      role: "Interim Executive Director / Executive Assistant",
      period: "Executive Tenure",
      location: "Toronto, ON",
      scope: "Executive transition management & board governance",
      responsibilities: [
        "Steered organization through pivotal leadership transitions while maintaining uninterrupted 24/7 shelter operations.",
        "Acted as primary liaison between executive management, the Board of Directors, and municipal funders.",
        "Streamlined operational reporting, human resource frameworks, and board governance documentation."
      ]
    }
  ] as LeadershipRole[],

  priorLeadershipEngagements: [
    {
      organization: "Durham Mental Health Services",
      role: "Crisis Support & Mental Health Case Specialist",
      domain: "Mental Health Stabilization"
    },
    {
      organization: "Herizon House",
      role: "Crisis Intervention & Residential Counselor",
      domain: "Violence Against Women (VAW)"
    },
    {
      organization: "Amelie House",
      role: "Transitional Housing & Women's Advocate",
      domain: "Supportive Housing"
    },
    {
      organization: "Dixon Hall",
      role: "Community Services & Housing Engagement Specialist",
      domain: "Frontline Community Integration"
    }
  ],

  civicAppointments: [
    {
      organization: "City of Toronto",
      body: "Toronto Youth Equity Strategy (TYES)",
      role: "External Panel Member",
      scope: "Municipal Policy & Youth Equity",
      description: "Provided strategic oversight and community accountability on municipal policy implementation addressing structural inequities impacting youth in high-priority Toronto neighbourhoods."
    },
    {
      organization: "Black Coalition for AIDS Prevention (Black CAP)",
      body: "Board of Directors",
      role: "Board Member",
      scope: "Governance, Public Health & Advocacy",
      description: "Guided governance, fiduciary oversight, and community outreach strategies for Canada's largest organization dedicated to responding to HIV/AIDS in Black, African, and Caribbean communities."
    },
    {
      organization: "MTHA - Greenbrae Tenant Association",
      body: "Executive Governance Committee",
      role: "Vice-President & Board Member",
      scope: "Tenant Rights, Safety & Infrastructure",
      description: "Advocated for tenant equity, property safety improvements, community cohesion initiatives, and direct representation before public housing authorities."
    }
  ] as GovernanceAppointment[],

  educationAndHonors: [
    {
      degreeOrTitle: "Doctoral Candidate (Dr-C.)",
      institution: "School of Graduate Studies",
      yearOrStatus: "In Progress",
      type: "academic",
      note: "Advanced theological, systemic leadership, and community restoration research."
    },
    {
      degreeOrTitle: "Master of Arts in Family Counselling (M.C.C.)",
      institution: "Canada Christian College & School of Graduate Studies",
      yearOrStatus: "Conferred",
      type: "academic",
      note: "Specialization in family systems, high-trauma restoration, and cross-cultural mediation."
    },
    {
      degreeOrTitle: "Bachelor of Arts (BASc)",
      institution: "University of Toronto",
      yearOrStatus: "Conferred",
      type: "academic",
      note: "Concentrations in Women’s Studies, Sociology, and Caribbean Studies."
    },
    {
      degreeOrTitle: "Black History Continues Award",
      institution: "Certificate of Recognition",
      yearOrStatus: "Conferred",
      type: "honor",
      note: "Recognized for enduring community leadership, frontline empowerment, and civic advocacy."
    },
    {
      degreeOrTitle: "Domestic Violence Christian Advocate Chaplain",
      institution: "Certified Chaplaincy Designation",
      yearOrStatus: "Certified Designation",
      type: "designation",
      note: "Certified specialized chaplaincy in intimate partner violence crisis intervention."
    }
  ] as Credential[],

  advisoryAreas: [
    "Executive Non-Profit Turnaround & Governance",
    "High-Density Community Hub & Housing Operations",
    "International NGO Partnerships & Diaspora Advocacy",
    "Trauma-Informed Crisis Stabilization Protocols",
    "Keynote Speaking & Executive Pastoral Guidance",
    "Social Enterprise Design & Economic Independence"
  ],

  socials: [
    {
      platform: "LinkedIn",
      handle: "judith-kerr-64abb4332",
      url: "https://www.linkedin.com/in/judith-kerr-64abb4332",
      category: "Professional & Thought Leadership"
    },
    {
      platform: "Instagram",
      handle: "@judithekerr",
      url: "https://www.instagram.com/judithekerr?utm_source=qr&stkn=cW5jaXczN3B5cjkx",
      category: "Field Advocacy & Missions"
    },
    {
      platform: "Facebook",
      handle: "Judith Kerr",
      url: "https://www.facebook.com/share/1FKSwRJb6g/",
      category: "Community & Civic Outreach"
    },
    {
      platform: "TikTok",
      handle: "@judith.kerr77",
      url: "https://tiktok.com/@judith.kerr77",
      category: "Public Perspectives & Empowerment"
    }
  ] as SocialLink[]
};
