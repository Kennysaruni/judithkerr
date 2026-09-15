export interface Initiative {
  number: string;
  title: string;
  role: string;
  focus: string;
  description: string;
  pillars: string[];
  impactNotes: string;
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
    bioLong: "Judith Kerr is a recognized humanitarian leader, executive director, and strategist with over two decades of transformative experience spanning public health, high-acuity crisis mediation, emergency shelter governance, and global non-governmental development. Through strategic cross-sector partnerships with municipal agencies, faith networks, and international NGOs, she champions sustainable social enterprise models that move communities from vulnerability to enduring economic and social independence.",
  },

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
      title: "Women Fe Woman Organization",
      role: "Founder & Executive Director",
      focus: "International Equity, Capacity Building & Cross-Cultural Advocacy",
      description: "An international advocacy and empowerment engine designed to build scalable support systems for women facing institutional, economic, and social disenfranchisement across the diaspora and global south.",
      pillars: [
        "Cross-border maternal health, vocational education, and micro-grant networks",
        "Direct community capacity building across Jamaica, Kenya, Uganda, Nigeria, and India",
        "Policy advocacy bridging grassroots realities with institutional funding frameworks"
      ],
      impactNotes: "Established sustainable international grassroots networks fostering economic resilience and community-led governance."
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
      impactNotes: "Nurturing resilient global congregations and empowering local leaders to serve vulnerable populations."
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
      impactNotes: "Proven transition of non-profit programs toward recurring revenue independence and local wealth creation."
    }
  ] as Initiative[],

  leadershipExperience: [
    {
      organization: "Scarborough Centre for Healthy Communities (SCHC)",
      role: "LEPP Hub Coordinator",
      period: "June 2018 – Present",
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
      yearOrStatus: "2024",
      type: "honor",
      note: "Recognized for enduring community leadership, frontline empowerment, and civic advocacy."
    },
    {
      degreeOrTitle: "Domestic Violence Christian Advocate Chaplain",
      institution: "Certified Chaplaincy Designation",
      yearOrStatus: "2024 Designation",
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
  ]
};
