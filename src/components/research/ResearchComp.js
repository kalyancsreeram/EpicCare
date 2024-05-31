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
               <br></br> <br></br><span className='research_notes_text_title'>Some potential areas of investigation include:</span>
               <div className='researchPointsContainer'>              
                  <ul className='researchPointsNotes'>
                      <li><b>Etiology and Pathophysiology: </b>Uncovering the underlying causes, mechanisms, and neural circuits involved in epilepsy.</li>
                      <li><b>Genomics and Epigenomics:</b> Exploring the genetic and epigenetic factors contributing to epilepsy, including gene expression and regulation.</li>
                      <li><b>Biomarkers and Diagnosis: </b>Developing novel biomarkers and diagnostic tools for accurate and early detection of epilepsy.</li>
                      <li><b>Therapeutics and Treatment:</b> Investigating innovative pharmacological, surgical, and alternative approaches to manage and treat epilepsy.</li>
                      <li><b>Personalized Medicine:</b> Identifying individualized treatment strategies based on patient-specific characteristics, genetics, and brain function.</li>
                      <li><b>Neurostimulation and Neuromodulation:</b> Examining the efficacy of techniques like deep brain stimulation, transcranial magnetic stimulation, and transcranial direct current stimulation.</li>
                      <li><b>Cognitive and Behavioral Comorbidities:</b> Understanding the relationships between epilepsy, cognitive impairment, and psychiatric disorders.</li>
                      <li><b>Epilepsy Surgery and Neuroimaging:</b> Refining surgical techniques and utilizing advanced neuroimaging modalities like MRI, EEG, and magnetoencephalography.</li>
                      <li><b>Pediatric and Developmental Epilepsy:</b> Investigating the unique aspects of epilepsy in children, including developmental and epileptic encephalopathies.</li>
                      <li><b>Comorbidities and Co-occurring Conditions:</b> Examining the interplay between epilepsy and other conditions like autism, ADHD, and migraines.</li>
                      <li><b>Epilepsy in Special Populations:</b> Addressing the distinct challenges and needs of epilepsy care in vulnerable populations, such as older adults, pregnant women, and underserved communities.</li>
                      <li><b>Basic and Translational Research:</b> Conducting fundamental studies on epilepsy mechanisms and translating findings into clinical applications.</li>
                      <li><b>Clinical Trials and Outcomes Research:</b> Evaluating the efficacy and safety of novel treatments and assessing patient outcomes.</li>
                      <li><b>Epilepsy Advocacy and Stigma Reduction:</b> Promoting awareness, education, and support to combat stigma and improve quality of life for individuals with epilepsy.</li>                 
                  </ul>                
                {/* <div className='researchPointsNotesMedia'>
                  <img alt='Research Media' src={ResearchMediaOne}/>
                </div> */}
               </div>
              
           </Typography>
           {/* <Typography variant="body2" color="text.primary" className='research_notes_text'>
               
           </Typography> */}
           <Typography variant="body2" color="text.primary" className='research_notes_text'>
                This comprehensive scope encompasses various disciplines, from basic science to clinical practice, aiming to advance our understanding and management of epilepsy.
           </Typography>
           <Typography variant="body2" color="text.primary" className='research_notes_text'>
               <b> SeizureCare website will be regularly updated to feature ongoing active projects and annual publications related to above disciplines, showcasing our commitment to innovation, research, and knowledge sharing.</b>
           </Typography>          
        </div>             
    </div>
  )
}

export default ResearchComp