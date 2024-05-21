import React from 'react'
import './styles.scss';

import Typography from '@mui/material/Typography';
import ResourcesTable from './ResourcesTable';

function ResourcesComp() {
  return (
    <div className='resourcesContainer'>
       <Typography className='resourcesMainHeading'gutterBottom variant="h4" component="div">
            Resources
        </Typography>

        <Typography className='boldHeading secondaryTitle' gutterBottom variant="h5" component="div">
            Articles and book references:
        </Typography>

        <br></br>

        <Typography className='boldHeading' gutterBottom variant="h6" component="div">
            Epilepsy and management
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
            <ul>
              <li>Fisher RS. Operational classification of seizure types by the International League Against Epilepsy: Position Paper of the ILAE Commission for Classification and Terminology. Epilepsia. 2017.</li>
              <li>Fisher RS. Instruction manual for the ILAE 2017 operational classification of seizure types. Epilepsia. 2017</li>
              <li>Kwan P. Definition of drug-resistant epilepsy: consensus proposal by the ad hoc Task Force of the ILAE Commission on Therapeutic Strategies. Epilepsia. 2010</li>
              <li>Pellock's Pediatric Epilepsy: Diagnosis and therapy. 4th Edition. 2017</li>
              <li>Wyllie's Treatment of Epilepsy: Principles and Practice. 7th Edition. 2021</li>
              <li>Handbook of ICU EEG Monitoring. Second Edition. 2018</li>
              <li>Sheikh Z. A practical approach to in-hospital management of new-onset refractory status epilepticus/febrile infection-related epilepsy syndrome. Front Neurol. 2023</li>
              <li>Simon Shorvon. The treatment of super-refractory status epilepticus: a critical review of available therapies and a clinical treatment protocol. Brain. October 2011.</li>
            </ul>
        </Typography>

        <Typography className='boldHeading' gutterBottom variant="h6" component="div">
            EEG
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
            <ul>              
              <li>Hirsch LJ. American Clinical Neurophysiology Society's Standardized Critical Care EEG Terminology: 2021 Version. J Clin Neurophysiol. 2021</li>
              <li>Tsuchida TN. American Clinical Neurophysiology Society standardized EEG terminology and categorization for the description of continuous EEG monitoring in neonates: report of the American Clinical Neurophysiology Society critical care monitoring committee. J Clin Neurophysiol. 2013</li>
              <li>Shellhaas RA. The American Clinical Neurophysiology Society's Guideline on Continuous Electroencephalography Monitoring in Neonates.J Clin Neurophysiol. 2011</li>
              <li>Herman ST. Critical Care Continuous EEG Task Force of the American Clinical Neurophysiology Society. Consensus statement on continuous EEG in critically ill adults and children, part I: indications. J Clin Neurophysiol. 2015</li>
              <li>Herman ST. Critical Care Continuous EEG Task Force of the American Clinical Neurophysiology Society. Consensus statement on continuous EEG in critically ill adults and children, part II: personnel, technical specifications, and clinical practice. J Clin Neurophysiol. 2015</li>
              <li>Current practice of clinical encephalography. 4th Edition. 2014</li>
              <li>Hirsch and Brenner's Atlas of EEG in Critical Care. Second Edition. 2013</li>
              <li>Atlas of Neonatal Encephalography. 4th Edition. 2015</li>
            </ul>
        </Typography> 

        <Typography className='boldHeading' gutterBottom variant="h6" component="div">
           Epilepsy surgery
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
            <ul>              
              <li>Jayakar P. Task Force for Paediatric Epilepsy Surgery, Commission for Paediatrics, and the Diagnostic Commission of the International League Against Epilepsy. Diagnostic test utilization in evaluation for resective epilepsy surgery in children. Epilepsia. 2014</li>
              <li>Gonzalez-Martinez J. Stereoelectroencephalography in the "difficult to localize" refractory focal epilepsy: early experience from a North American epilepsy center. Epilepsia. 2013</li>
              <li>Kalamangalam GP. Stereo-EEG Implantation Strategy. J Clin Neurophysiol. 2016</li>
              <li>A Practical Approach to Stereo EEG. First Edition. 2021</li>
              
              <li>Invasive Studies of the Human Epileptic Brains: Principles and practice. First Edition. 2019</li>
              <li>Current practice of clinical encephalography. 4th Edition. 2014</li>
              <li>Hirsch and Brenner's Atlas of EEG in Critical Care. Second Edition. 2013</li>
              <li>Textbook of Epilepsy Surgery. First Edition. 2008</li>
            </ul>
        </Typography> 

        <Typography className='boldHeading secondaryTitle' gutterBottom variant="h6" component="div">
           Websites:
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
          <span>1.</span><a href='www.epilepsy.com'>www.epilepsy.com</a>
        </Typography>

        <Typography className='boldHeading addPadding' gutterBottom variant="h6" component="div">
            National Epilepsy foundation
        </Typography>

        <Typography className='addPadding' gutterBottom variant="h6" component="div">
            <ul>              
              <li>Include an overview of epilepsy, discussions of treatments including medications</li>
              <li>Special sections for kids, teens, and families</li>
              <li>Community section with discussion forums and blogs about living with epilepsy</li>              
            </ul>
        </Typography> 

        <Typography gutterBottom variant="h6" component="div">
        <span>2.</span><a href='www.cdc.gov/epilepsy'>www.cdc.gov/epilepsy</a>
        </Typography>

        <Typography className='boldHeading addPadding' gutterBottom variant="h6" component="div">
           Epilepsy information from the Centers for Disease Control and Prevention
        </Typography>

        <Typography className='addPadding' gutterBottom variant="h6" component="div">
            <ul>              
              <li>Fast facts about epilepsy</li>
              <li>Link to videos and resources for teens, friends, and parents</li>
              <li>Research discoveries</li>              
            </ul>
        </Typography> 

        <Typography gutterBottom variant="h6" component="div">
        <span>3.</span><a href='www.seizuretracker.com'>www.seizuretracker.com</a>
        </Typography>

        <Typography className='boldHeading addPadding' gutterBottom variant="h6" component="div">
           Downloadable logs, spreadsheets, and smartphone apps
        </Typography>

        <Typography className='addPadding' gutterBottom variant="h6" component="div">
            <ul>              
              <li>Track seizure activity and medication</li>                       
            </ul>
        </Typography> 

        <Typography gutterBottom variant="h6" component="div">
        <span>4.</span><a href='www.coping-with-navigator.com'>www.coping-with-navigator.com</a>
        </Typography>

        <Typography className='boldHeading addPadding' gutterBottom variant="h6" component="div">
         Forum for patients and families coping with epilepsy
        </Typography>

        <Typography className='boldHeading tableHeading' gutterBottom variant="h5" component="div">
          Epilepsy smartphone applications:
        </Typography>
  
        <ResourcesTable />   
    </div>
  )
}

export default ResourcesComp