import React from 'react'

import './styles.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AboutComp = () => {
  return (
    <div className='aboutContainer'>
        <div className='intro'>
            <h2 className='main-title'>About US</h2>
            <p>
                <b>SeizureCare is an American Healthcare Company</b> with a team of professionals who provide EEG and expert assistance services 24X7. Critical care, long-term, and ambulatory EEG have now become the standard of care for patients with epilepsy and those admitted to the ICU in the USA and some developed countries. In many other developing countries, these services are not widely available and are costly. We are here to bridge the gap and bring high quality EEG and expert assistance services accessible to everyone.
                The team of SeizureCare is equipped with an epileptologist trained in the USA and certified by the American board. SeizureCare provides high-quality, affordable long-term EEG services and expert EEG reports along with expert assistance in the field of Neurology & Epileptology to people at different parts of the globe. We will also collaborate with various NGO groups to extend our reach to the needy. 
                SeizureCare strive to establish an efficient coordinating human organization with technological support, collaborate with various EEG companies and supportive groups to further reduce service costs, and conduct CMEs and educational sessions to highlight the benefits of our services in enhancing patient care standards in different states and countries to aid those in need.
            </p>
            <div>
                <h3 className='about_title'>Our Mission</h3>
                <p>To Provide Quality & Expert EEG services at affordable cost to enhance the clinical outcomes.</p>
            </div>
            <div>
                <h3 className='about_title'>Our Vision</h3>
                <p>
                To spread the Quality & Expert EEG services across the globe in the next 5 years, thereby marking a new dimension in the treating the Neurological conditions. 
                </p>
            </div>
        </div>
        <div className='core-values-container'>
                <h3 className='core_values_title'>Our Core Values</h3>
                <div className='cards-container'>
                    <div className='first_row'>
                        <Card sx={{ maxWidth: 345 }} className='card'> 
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Integrity
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                As individuals and together, we adhere to the highest professional, moral, and ethical standards built on a foundation of honesty, confidentiality, trust, respect, and transparency.
                            </Typography>
                            </CardContent>           
                        </Card>
                        <Card sx={{ maxWidth: 345 }} className='card'>           
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Empathy
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                We strive to be the best in all we do through our daily commitment to understand and care for our members and each other.
                                </Typography>
                            </CardContent>               
                        </Card>
                        <Card sx={{ maxWidth: 345 }} className='card'>           
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Quality and Innovation
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                We seek new and creative interventions that provide for more effective, safe, and efficient practices to bring the best of the outcome.
                                </Typography>
                                </CardContent>                
                        </Card>
                    </div>
                    <div className='second_row'>
                        <Card sx={{ maxWidth: 345 }} className='card'>           
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Collaboration
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                We are committed to building strong partnerships with hospitals to put our expertise to the task and with organizations that helps us to reach to the patients who are financially compromised. We work closely with all stakeholders to ensure our members are provided with a superior experience of care.
                                </Typography>
                                </CardContent>               
                        </Card>
                        <Card sx={{ maxWidth: 345 }} className='card'>           
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Continuous Improvement
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                We, at SeizureCare strive to continuously learn and upgrade ourselves and integrate technology advancements to achieve quicker, better and accurate clinical outcome.
                                </Typography>
                                </CardContent>                
                        </Card>
                    </div>
                </div>
               
            </div>
    </div>
  )
}

export default AboutComp