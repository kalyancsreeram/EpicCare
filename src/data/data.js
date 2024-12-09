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
    image: "services1.png",
  },
  {
    title: "Epilepsy Management",
    desc: "Supporting day-to-day treatment decisions for outpatient and inpatient settings, empowering clinicians with up-to-date knowledge.",
    image: "services2.jpg",
  },
  {
    title: "Epilepsy Monitoring Unit (EMU) Services",
    desc: "For patients with drug-resistant epilepsy, providing specialized tailored plans (Video EEG, MEG, SPM-PET, interictal and ictal SPECT,functional MRI, TMS, etc) to better understand epileptogenic networks.",
    image: "services3.jpg",
  },
  {
    title: "Epilepsy Surgery Consultation",
    desc: "Offering expert guidance for epilepsy surgery decision-making, including personalized stereo EEG plans, and comprehensive post-operative care, empowering clinical management with epilepsy devices such as VNS, RNS, DBS, etc.",
    image: "services4.jpg",
  },
  {
    title: "Educational Webinars and Knowledge Dissemination",
    desc: "Advancing the field of epilepsy through regular webinars and the distribution of expert knowledge, enhancing the skills of healthcare professionals globally.",
    image: "services5.jpg",
  },
  {
    title: "Research and Collaboration",
    desc: "Promoting and participating in epilepsy research, collaborating with multiple centers worldwide to drive innovations and improve patient outcomes.",
    image: "services6.jpg",
  },
];

function createTableData(features) {
  return [
    {
      feature: "Seizure calendar",
      product1: features.seizureCalendar ? "✔" : "✘",
    },
    {
      feature: "Video documentation of seizure",
      product1: features.videoDocumentation ? "✔" : "✘",
    },
    {
      feature: "Reminder for medication/appointment",
      product1: features.medicationReminder ? "✔" : "✘",
    },
    {
      feature: "First Aid/Medication information",
      product1: features.firstAid ? "✔" : "✘",
    },
    { feature: "VNS alarms", product1: features.vnsAlarms ? "✔" : "✘" },
    { feature: "Communication with Team", product1: features.communication },
    { feature: "Graphic option", product1: features.graphicOption ? "✔" : "✘" },
    { feature: "Lifestyle", product1: features.lifestyle ? "✔" : "✘" },
    { feature: "Diet", product1: features.diet ? "✔" : "✘" },
    { feature: "Mood", product1: features.mood ? "✔" : "✘" },
    { feature: "Triggers", product1: features.triggers ? "✔" : "✘" },
    { feature: "Free to Use", product1: features.freeToUse ? "✔" : "✘" },
    { feature: "iOS & Android", product1: features.platforms },
  ];
}

const seizureLogFeatures = {
  seizureCalendar: true,
  videoDocumentation: true,
  medicationReminder: true,
  firstAid: false,
  vnsAlarms: true,
  communication: "Sync with website",
  graphicOption: true,
  lifestyle: true,
  diet: true,
  mood: true,
  triggers: true,
  freeToUse: true,
  platforms: "Both",
};

const epilepsyToolkitFeatures = {
  seizureCalendar: true,
  videoDocumentation: false,
  medicationReminder: true,
  firstAid: true,
  vnsAlarms: false,
  communication: "Export to email",
  graphicOption: true,
  lifestyle: false,
  diet: false,
  mood: false,
  triggers: false,
  freeToUse: true,
  platforms: "Both",
};

function combineTableData(product1Data, product2Data) {
  return product1Data.map((row, index) => ({
    feature: row.feature,
    product1: row.product1,
    product2: product2Data[index] ? product2Data[index].product1 : "",
  }));
}

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

  featuresTableData: combineTableData(
    createTableData(seizureLogFeatures),
    createTableData(epilepsyToolkitFeatures)
  ),
};

const homePageData = {
  companyInfo: {
    headline: "Empowering Lives through SeizureCare",

    intro: `SeizureCare is a pioneering American healthcare company focused on transforming remote epilepsy care. With a dedicated team of esteemed American board-certified epileptologists, SeizureCare has built a reputation of trust and respect among healthcare professionals worldwide. Our mission is to deliver exceptional patient care and life-changing outcomes for those living with epilepsy, leveraging the latest advancements in medical technology.`,

    mission: `To provide professional support and innovative resources to individuals affected by seizures, ensuring they receive exceptional care and life-changing outcomes, all while leveraging the latest advancements in medical technology.`,

    values: `Integrity, empathy, quality, innovation, and refinement shape every aspect of our approach. These values guide us in redefining epilepsy treatment and ensuring privacy and confidentiality in patient care.`,

    vision: `We aim to set new standards in epilepsy care by reshaping the patient experience, fostering success, and transforming the future of epilepsy treatment for patients worldwide.`,
  },

  services: [
    {
      title: "Effortless EEG Test Requests",
      description: [
        "24/7 test ordering via platform or WhatsApp",
        "On-location technician service",
        "Instant cloud uploads",
        "Real-time expert reporting",
      ],
    },
    {
      title: "Comprehensive Cloud Solutions",
      description: [
        "Centralized secure platform",
        "Instant report delivery",
        "Multi-stakeholder collaboration",
        "User-friendly interface",
      ],
    },
    {
      title: "Advanced Video and EEG Monitoring",
      description: [
        "Real-time video EEG",
        "Dual-camera capabilities",
        "Industry-best guidelines",
        "Actionable physician insights",
      ],
    },
  ],

  articlesData: [
    // {
    //   title:
    //     "Second-line immunotherapy in new-onset refractory status epilepticus: Systematic review",
    //   description:
    //     "When treatments were initiated in the acute phase, seizures had been controlled in up to 73% of patients with anakinra, 70% with tocilizumab, and 50% with intrathecal dexamethasone. However, they had no clear effect on the emergence of post-NORSE epilepsy or long-term functional outcomes.",
    //   image: "card-1.jpg",
    //   altText: "Card One",
    // },
    // {
    //   title:
    //     "Lacosamide and pregnancy: Data from spontaneous and solicited reports",
    //   description:
    //     "The preliminary data does not raise major concerns on the use of LCM during pregnancy. Most pregnancies with LCM exposure resulted in healthy live births, and no new safety issues were identified.",
    //   image: "card-2.jpg",
    //   altText: "Card Two",
    // },
    {
      title:
        "A critical review of Nocturnal paroxysmal dystonia to sleep-related hypermotor epilepsy",
      simplifiedTitle: "Understanding Sleep-Related Hypermotor Epilepsy",
      description: `Pragmatic classification scheme for sleep‐related paroxysmal motor episodes (SPMEs). (A) Four‐dimensional classification system. Dimension  is the semiology of the episode, dimension II is the epileptogenic zone (only applies to epileptic paroxysmal episodes), dimension III is the etiology, and dimension IV pertains to medical comorbidities. (B) Classification of SPMEs into epileptic, nonepileptic, and undifferentiated categories and their characteristics. EEG, electroencephalographic.`,
      doi: "DOI: 10.1111/epi.18067",
      image: "card-4.png",
      altText: "Card Four",
    },
    {
      title:
        "Risk of breakthrough seizures depends on type and etiology of epilepsy",
      simplifiedTitle:
        "Breakthrough Seizures: Impact of Epilepsy Type and Cause",
      description: `Approximately 30% of patients with antiseizure medication who had been seizure-free for atleast 12 months had a breakthrough seizure. When adjusting for clinically relevant covariates, an association between breakthrough seizures and four variables was found. There was an inverse association between breakthrough seizures and post-ischemic stroke epilepsy as well as genetic generalized epilepsy. Breakthrough seizures were associated positively with intellectual disability and with the number of antiseizure medications tried before seizure remission.`,
      doi: "DOI: 10.1111/epi.18048",
      image: "card-5.png",
      altText: "Card Five",
    },
    {
      title:
        "Focal electroclinical features in generalized tonic–clonic seizures: Decision flowchart for a diagnostic challenge",
      simplifiedTitle:
        "Diagnosing Generalized Tonic-Clonic Seizures: A Simple Guide",
      description:
        "Focal semiology and interictal EEG are com-mon in generalized tonic–clonic seizures and should not exclude IGE diagnosis. Focal ictal EEG onset of tonic–clonic seizures is rare in IGE, and when present, it points to dif-ferent location than the IEDs.",
      image: "card-3.jpg",
      altText: "Card Three",
    },
  ],

  testimonials: [
    {
      name: "Yuneli",
      testimony: `I am an assistant professor of neurology at a hospital in North
              Carolina. We were previously unfamiliar with critical care
              long-term EEGs, relying on 30-minute EEGs to screen patients
              suspected of having seizures. However, after collaborating with
              the SeizureCare team, we made a surprising discovery: many
              patients with persistent altered sensorium were actually
              experiencing nonconvulsive seizures which would often go
              undetected by short term EEGs. The team's suggestions were vital
              in effectively treating these cases and facilitating timely
              discharges. Furthermore, their monthly webinar sessions have been
              invaluable in enhancing our expertise in managing critically ill
              patients, enabling us to provide better care and improve patient
              outcomes.`,
    },
    {
      name: "Marco",
      testimony: `I am a neurologist from Florida. I was Initially struggling to
              effectively manage drug-resistant epilepsy cases, particularly
              when it came to selecting the most suitable surgical options.
              However, since subscribing to SeizureCare, I have received
              invaluable support from Epileptologists every step of the way.
              Their expertise has been instrumental in guiding my
              decision-making process. Moreover, the post-operative guidance
              provided, especially regarding RNS and DBS devices, has been truly
              exceptional.`,
    },
    {
      name: "Priya",
      testimony: `As part of my seizure evaluation, my physician had ordered a
              24-hour diagnostic EEG. However, I was hesitant to undergo the
              test in a hospital setting, which made me uncomfortable.
              Fortunately, the SeizureCare team stepped in and offered a
              solution. I was thrilled to have the option of an ambulatory EEG
              test in the comfort of my own home. The technicians who conducted
              the test were not only knowledgeable but also respectful and
              considerate, making the entire process smooth and stress-free.
              This convenience greatly reduced my anxiety and expedited my
              diagnosis and treatment, which was a huge relief.`,
    },
  ],
};

const orderPageData = {
  services: [
    {
      value: "EEG",
      title: "EEG Services",
    },
    {
      value: "EpilepsyCare",
      title: "Epilepsy Care",
    },
    {
      value: "EMU",
      title: "EMU Services",
    },
    {
      value: "EpilepsySurgicalEvaluation",
      title: "Epilepsy Surgical Evaluation",
    },
  ],
};

export {
  navLinks,
  researchPageData,
  aboutPageData,
  servicesPageData,
  resourcesPageData,
  homePageData,
  orderPageData,
};
