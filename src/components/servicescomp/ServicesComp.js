import React from 'react'

import './styles.scss';

const ServicesComp = () => {
  return (
    <div className='servicesContainer'>
        <div className='intro'>
            <h2 className='main-title'>Services</h2>
            <p>
                 We offer High-quality long-term EEG services following established EEG acquisition guidelines with Expert EEG reports and guidance for neurologists in day-to-day practice.
            </p>
            <p>
                Additionally, we also provide awareness about epilepsy and its treatment options, including surgeries, by conducting regular teaching sessions and guiding neurologists and neurosurgeons to enhance their interactions with expert epileptologists from the USA.
            </p>
            <div>
                <h3 className='services_title'>Types of EEG tests</h3>
                <p>We offer different EEG tests depending on the medical issue. EEG test types include:</p>
                <p>
                    <span className='services_secondary_title'><b>Routine EEG:</b></span> Routine EEG scans may involve looking at flashing lights or taking breaths at different times during the test. This type of EEG test may take 20 to 30 minutes.
                </p>
                <p>
                 <span className='services_secondary_title'><b>Prolonged EEG:</b></span> This test gives your provider more information than a routine EEG. Your provider may order a prolonged EEG test to determine if certain symptoms, like a memory lapse, happen because you have seizures. Prolonged EEGs may take about an hour or longer to complete.
                </p>
                <p>
                 <span className='services_secondary_title'><b>Ambulatory EEG:</b></span> In this test, you’re able to go about your day while an EEG machine tracks your brain activity. Ambulatory EEGs involve wearing a small EEG recorder that you wear for one or more days.
                </p>
                <p>
                  <span className='services_secondary_title'><b>Video EEG:</b></span> If you’re having an EEG because your provider wants to record seizures, they may ask you to have a video EEG so they can see and hear what you’re doing. They may call this test EEG monitoring, EEG telemetry or video EEG monitoring.
                </p>
                <p>
                    <span className='services_secondary_title'><b>Sleep EEG:</b> </span> Your provider may order a sleep EEG along with a sleep study (polysomnogram) to obtain more information than a sleep study alone provides. They may order this test if you have a sleep disorder that could be a result of an epileptic condition.
                </p> 
            </div>
        </div>       
        {/* <div className='intro-content'>                     
            <div>
                <h3 className='services_title'>Types of EEG tests</h3>
                <p>We offer different EEG tests depending on the medical issue. EEG test types include:</p>
                <p>
                    <span className='services_secondary_title'><b>Routine EEG:</b></span> Routine EEG scans may involve looking at flashing lights or taking breaths at different times during the test. This type of EEG test may take 20 to 30 minutes.
                </p>
                <p>
                 <span className='services_secondary_title'><b>Prolonged EEG:</b></span> This test gives your provider more information than a routine EEG. Your provider may order a prolonged EEG test to determine if certain symptoms, like a memory lapse, happen because you have seizures. Prolonged EEGs may take about an hour or longer to complete.
                </p>
                <p>
                 <span className='services_secondary_title'><b>Ambulatory EEG:</b></span> In this test, you’re able to go about your day while an EEG machine tracks your brain activity. Ambulatory EEGs involve wearing a small EEG recorder that you wear for one or more days.
                </p>
                <p>
                  <span className='services_secondary_title'><b>Video EEG:</b></span> If you’re having an EEG because your provider wants to record seizures, they may ask you to have a video EEG so they can see and hear what you’re doing. They may call this test EEG monitoring, EEG telemetry or video EEG monitoring.
                </p>
                <p>
                    <span className='services_secondary_title'><b>Sleep EEG:</b> </span> Your provider may order a sleep EEG along with a sleep study (polysomnogram) to obtain more information than a sleep study alone provides. They may order this test if you have a sleep disorder that could be a result of an epileptic condition.
                </p> 
            </div>
        </div>   */}
    </div>
  )
}

export default ServicesComp