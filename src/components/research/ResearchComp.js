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
                In ICU settings, patients, especially those with acute neurological conditions and brain injuries, are prone to seizures, which may not have obvious symptoms. These include Electrographic or EEG-only seizures (ESz) and electroclinical seizures (ECSz), commonly seen in patients with a history of seizures, brain injuries, or conditions like stroke and encephalitis. Accurate diagnosis is critical, as seizures can indicate severe brain damage and impact recovery. Video-assisted EEG is pivotal for differentiating between actual seizures and other non-epileptic symptoms, which, if misdiagnosed, can extend ICU stays and affect patient outcomes negatively.
           </Typography>
           <Typography variant="body2" color="text.primary" className='research_notes_text'>
                Routine video-EEG is generally sufficient for diagnosing and assessing risk, but for less frequent seizures, continuous video EEG (cEEG) is recommended. cEEG helps in monitoring seizure activity, disease progression, and treatment efficacy, and is crucial in conditions like subarachnoid haemorrhage or when managing severe intracranial pressure.
           </Typography>
           <Typography variant="body2" color="text.primary" className='research_notes_text'>
                In neonatal ICUs, seizure management is challenging due to the subtlety of clinical signs and the high incidence of seizures, particularly in those with severe conditions. Amplitude integrated EEG (aEEG) is commonly used for its prognostic value, though its sensitivity for detecting seizures is limited. A significant study in Australian NICUs indicated no difference in long-term outcomes between neonates managed with aEEG-detected seizures versus those managed based on clinical signs alone, suggesting the need for more accurate diagnostic tools.
           </Typography>
           <Typography variant="body2" color="text.primary" className='research_notes_text'>
           Our research and clinical practices aim to refine the use of EEG and cEEG in both adult and neonatal ICUs across Australia and New Zealand, addressing challenges such as resource demands, training needs, and cost-effectiveness to improve patient care and outcomes.
           </Typography>
        </div>             
    </div>
  )
}

export default ResearchComp