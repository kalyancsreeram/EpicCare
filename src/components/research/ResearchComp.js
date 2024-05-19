import React from 'react'

import './styles.scss';

import Typography from '@mui/material/Typography';

const ResearchComp = () => {
  return (
    <div className='researchContainer'>
        <div className='researchNotes'>
            <Typography className='main-title' gutterBottom variant="h4" component="div">
               Research
            </Typography>
           
            <Typography variant="body2" color="text.primary" className='research_notes_text'>
               The research scope in epilepsy is vast and multidisciplinary, encompassing various aspects of this complex condition.
               <br></br> <br></br>Some potential areas of investigation include:
               <ul>
                    <li>Etiology and Pathophysiology: Uncovering the underlying causes, mechanisms, and neural circuits involved in epilepsy.</li>
                    <li>Genomics and Epigenomics: Exploring the genetic and epigenetic factors contributing to epilepsy, including gene expression and regulation.</li>
                    <li>Biomarkers and Diagnosis: Developing novel biomarkers and diagnostic tools for accurate and early detection of epilepsy.</li>
                    <li>Therapeutics and Treatment: Investigating innovative pharmacological, surgical, and alternative approaches to manage and treat epilepsy.</li>
                    <li>Personalized Medicine: Identifying individualized treatment strategies based on patient-specific characteristics, genetics, and brain function.</li>
                    <li>Neurostimulation and Neuromodulation: Examining the efficacy of techniques like deep brain stimulation, transcranial magnetic stimulation, and transcranial direct current stimulation.</li>
                    <li>Cognitive and Behavioral Comorbidities: Understanding the relationships between epilepsy, cognitive impairment, and psychiatric disorders.</li>
                    <li>Epilepsy Surgery and Neuroimaging: Refining surgical techniques and utilizing advanced neuroimaging modalities like MRI, EEG, and magnetoencephalography.</li>
                    <li>Pediatric and Developmental Epilepsy: Investigating the unique aspects of epilepsy in children, including developmental and epileptic encephalopathies.</li>
                    <li>Comorbidities and Co-occurring Conditions: Examining the interplay between epilepsy and other conditions like autism, ADHD, and migraines.</li>
                    <li>Epilepsy in Special Populations: Addressing the distinct challenges and needs of epilepsy care in vulnerable populations, such as older adults, pregnant women, and underserved communities.</li>
                    <li>Basic and Translational Research: Conducting fundamental studies on epilepsy mechanisms and translating findings into clinical applications.</li>
                    <li>Clinical Trials and Outcomes Research: Evaluating the efficacy and safety of novel treatments and assessing patient outcomes.</li>
                    <li>Epilepsy Advocacy and Stigma Reduction: Promoting awareness, education, and support to combat stigma and improve quality of life for individuals with epilepsy.</li>                 
               </ul> 
           </Typography>
           {/* <Typography variant="body2" color="text.primary" className='research_notes_text'>
               
           </Typography> */}
           <Typography variant="body2" color="text.primary" className='research_notes_text'>
                This comprehensive scope encompasses various disciplines, from basic science to clinical practice, aiming to advance our understanding and management of epilepsy.
           </Typography>
           <Typography variant="body2" color="text.primary" className='research_notes_text'>
                SeizureCare website will be regularly updated to feature ongoing active projects and annual publications related to above disciplines, showcasing our commitment to innovation, research, and knowledge sharing.
           </Typography>          
        </div>             
    </div>
  )
}

export default ResearchComp