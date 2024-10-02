const navLinks = [
  "Home",
  "Services",
  "Order",
  "Research",
  "Resources",
  "About",
  "Contact",
  "Login",
];

const researchPageData = [
  {
    title: "Etiology and Pathophysiology",
    content:
      "Uncovering the underlying causes, mechanisms, and neural circuits involved in epilepsy.",
  },
  {
    title: "Genomics and Epigenomics",
    content:
      "Exploring the genetic and epigenetic factors contributing to epilepsy, including gene expression and regulation.",
  },
  {
    title: "Biomarkers and Diagnosis",
    content:
      "Developing novel biomarkers and diagnostic tools for accurate and early detection of epilepsy.",
  },
  {
    title: "Therapeutics and Treatment",
    content:
      "Investigating innovative pharmacological, surgical, and alternative approaches to manage and treat epilepsy.",
  },
  {
    title: "Personalized Medicine",
    content:
      "Identifying individualized treatment strategies based on patient-specific characteristics, genetics, and brain function.",
  },
  {
    title: "Neurostimulation and Neuromodulation",
    content:
      "Examining the efficacy of techniques like deep brain stimulation, transcranial magnetic stimulation, and transcranial direct current stimulation.",
  },
  {
    title: "Cognitive and Behavioral Comorbidities",
    content:
      "Understanding the relationships between epilepsy, cognitive impairment, and psychiatric disorders.",
  },
  {
    title: "Epilepsy Surgery and Neuroimaging",
    content:
      "Refining surgical techniques and utilizing advanced neuroimaging modalities like MRI, EEG, and magnetoencephalography.",
  },
  {
    title: "Pediatric and Developmental Epilepsy",
    content:
      "Investigating the unique aspects of epilepsy in children, including developmental and epileptic encephalopathies.",
  },
  {
    title: "Comorbidities and Co-occurring Conditions",
    content:
      "Examining the interplay between epilepsy and other conditions like autism, ADHD, and migraines.",
  },
  {
    title: "Epilepsy in Special Populations",
    content:
      "Addressing the distinct challenges and needs of epilepsy care in vulnerable populations, such as older adults, pregnant women, and underserved communities.",
  },
  {
    title: "Basic and Translational Research",
    content:
      "Conducting fundamental studies on epilepsy mechanisms and translating findings into clinical applications.",
  },
  {
    title: "Clinical Trials and Outcomes Research",
    content:
      "Evaluating the efficacy and safety of novel treatments and assessing patient outcomes.",
  },
  {
    title: "Epilepsy Advocacy and Stigma Reduction",
    content:
      "Promoting awareness, education, and support to combat stigma and improve quality of life for individuals with epilepsy.",
  },
];

const aboutPageData = {
  coreValues: [
    {
      value: "Integrity",
      content: `We uphold the highest standards of professionalism, ethics,
                  and honesty in all our actions, fostering a culture of
                  confidentiality, trust, respect, and transparency.`,
    },
    {
      value: "Empathy",
      content: `Our commitment to excellence is reflected in our dedication to
                  understanding and addressing the needs of our client
                  physicians every day.`,
    },
    {
      value: "Integrity",
      content: `We uphold the highest standards of professionalism, ethics,
                  and honesty in all our actions, fostering a culture of
                  confidentiality, trust, respect, and transparency.`,
    },
    {
      value: "Quality and Innovation",
      content: `We constantly seek innovative solutions that enhance safety
                  and efficiency, striving to implement the most effective
                  practices for superior outcomes.`,
    },
    {
      value: "Collaboration",
      content: `We are resolute in forming robust partnerships with hospitals
                  and organizations, particularly those concerning financially
                  disadvantaged patients, to extend our reach and impact. Our
                  collaborative efforts ensure that all stakeholders experience
                  exceptional support.`,
    },
  ],
};

const servicesPageData = [
  {
    title: "Monitored Video EEG Services",
    desc: "Short-term and long-term video EEG monitoring, adhering to established acquisition guidelines. Providing real-time, actionable insights to physicians based on EEG analysis to expedite treatment decisions and patient care.",
    image: "services1.jpg",
  },
  {
    title: "Epilepsy Management",
    desc: "Supporting day-to-day treatment decisions for outpatient and inpatient settings, empowering clinicians with up-to-date knowledge.",
    image: "services2.png",
  },
  {
    title: "Epilepsy Monitoring Unit (EMU) Services",
    desc: "For patients with drug-resistant epilepsy, providing specialized tailored plans (Video EEG, MEG, SPM-PET, interictal and ictal SPECT,functional MRI, TMS, etc) to better understand epileptogenic networks.",
    image: "services3.png",
  },
  {
    title: "Epilepsy Surgery Consultation",
    desc: "Offering expert guidance for epilepsy surgery decision-making, including personalized stereo EEG plans, and comprehensive post-operative care, empowering clinical management with epilepsy devices such as VNS, RNS, DBS, etc.",
    image: "services4.png",
  },
  {
    title: "Educational Webinars and Knowledge Dissemination",
    desc: "Advancing the field of epilepsy through regular webinars and the distribution of expert knowledge, enhancing the skills of healthcare professionals globally.",
    image: "services5.jpg",
  },
  {
    title: "Research and Collaboration",
    desc: "Promoting and participating in epilepsy research, collaborating with multiple centers worldwide to drive innovations and improve patient outcomes.",
    image: "services6.png",
  },
];

const resourcesPageData = {
  articles: [
    {
      title: `Epilepsy and management`,
      list: [
        `Fisher RS. Operational classification of seizure types by the International League Against Epilepsy: Position Paper of the ILAE Commission for Classification and Terminology. Epilepsia. 2017.`,
        `Fisher RS. Instruction manual for the ILAE 2017 operational classification of seizure types. Epilepsia. 2017`,
        `Kwan P. Definition of drug-resistant epilepsy: consensus proposal by the ad hoc Task Force of the ILAE Commission on Therapeutic Strategies. Epilepsia. 2010`,
        `Pellock's Pediatric Epilepsy: Diagnosis and therapy. 4th Edition. 2017`,
        `Wyllie's Treatment of Epilepsy: Principles and Practice. 7th Edition. 2021`,
        `Handbook of ICU EEG Monitoring. Second Edition. 2018`,
        `Sheikh Z. A practical approach to in-hospital management of new-onset refractory status epilepticus/febrile infection-related epilepsy syndrome. Front Neurol. 2023`,
        `Simon Shorvon. The treatment of super-refractory status epilepticus: a critical review of available therapies and a clinical treatment protocol. Brain. October 2011.`,
      ],
    },
    {
      title: `EEG`,
      list: [
        `Hirsch LJ. American Clinical Neurophysiology Society's Standardized Critical Care EEG Terminology: 2021 Version. J Clin Neurophysiol. 2021.`,
        `Tsuchida TN. American Clinical Neurophysiology Society standardized EEG terminology and categorization for the description of continuous EEG monitoring in neonates: report of the American Clinical Neurophysiology Society critical care monitoring committee. J Clin Neurophysiol. 2013.`,
        `Shellhaas RA. The American Clinical Neurophysiology Society's Guideline on Continuous Electroencephalography Monitoring in Neonates. J Clin Neurophysiol. 2011.`,
        `Herman ST. Critical Care Continuous EEG Task Force of the American Clinical Neurophysiology Society. Consensus statement on continuous EEG in critically ill adults and children, part I: indications. J Clin Neurophysiol. 2015.`,
        `Herman ST. Critical Care Continuous EEG Task Force of the American Clinical Neurophysiology Society. Consensus statement on continuous EEG in critically ill adults and children, part II: personnel, technical specifications, and clinical practice. J Clin Neurophysiol. 2015.`,
        `Current practice of clinical encephalography. 4th Edition. 2014.`,
        `Hirsch and Brenner's Atlas of EEG in Critical Care. Second Edition. 2013.`,
        `Atlas of Neonatal Encephalography. 4th Edition. 2015.`,
      ],
    },
    {
      title: `Epilepsy surgery`,
      list: [
        `Jayakar P. Task Force for Paediatric Epilepsy Surgery, Commission for Paediatrics, and the Diagnostic Commission of the International League Against Epilepsy. Diagnostic test utilization in evaluation for resective epilepsy surgery in children. Epilepsia. 2014.`,
        `Gonzalez-Martinez J. Stereoelectroencephalography in the "difficult to localize" refractory focal epilepsy: early experience from a North American epilepsy center. Epilepsia. 2013.`,
        `Kalamangalam GP. Stereo-EEG Implantation Strategy. J Clin Neurophysiol. 2016.`,
        `A Practical Approach to Stereo EEG. First Edition. 2021.`,
        `Invasive Studies of the Human Epileptic Brains: Principles and practice. First Edition. 2019.`,
        `Current practice of clinical encephalography. 4th Edition. 2014.`,
        `Hirsch and Brenner's Atlas of EEG in Critical Care. Second Edition. 2013.`,
        `Textbook of Epilepsy Surgery. First Edition. 2008.`,
      ],
    },
  ],
  websites: [
    {
      link: "https://www.epilepsy.com",
      title: "National Epilepsy Foundation",
      description: [
        "Include an overview of epilepsy, discussions of treatments including medications",
        "Special sections for kids, teens, and families",
        "Community section with discussion forums and blogs about living with epilepsy",
      ],
    },
    {
      link: "https://www.cdc.gov/epilepsy",
      title:
        "Epilepsy information from the Centers for Disease Control and Prevention",
      description: [
        "Fast facts about epilepsy",
        "Link to videos and resources for teens, friends, and parents",
        "Research discoveries",
      ],
    },
    {
      link: "https://www.seizuretracker.com",
      title: "Downloadable logs, spreadsheets, and smartphone apps",
      description: ["Track seizure activity and medication"],
    },
    // {
    //   link: "https://www.coping-with-navigator.com",
    //   title: "Forum for patients and families coping with epilepsy",
    // },
  ],
};

export {
  navLinks,
  researchPageData,
  aboutPageData,
  servicesPageData,
  resourcesPageData,
};
