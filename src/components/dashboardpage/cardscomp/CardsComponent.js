import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import CardOne from "../../../assets/images/card-one.jpg"
import CardTwo from "../../../assets/images/card-two.jpg"
import CardThree from "../../../assets/images/card-three.jpg"

import './styles.scss';

export default function CardsComponent() {
  return (
    <>
      <div className='three-panel-main-title'>
        <Typography gutterBottom variant="h5" component="div">
                Latest developments in Epilepsy:
        </Typography>
      </div>

      <div className='cardsContainer'>       
       
        <Card sx={{ maxWidth: 345 }} className='card'>
            {/* <CardActionArea> */}
                <CardMedia
                component="img"
                height="140"
                src={CardOne}            
                alt="Card One"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                Second-line immunotherapy in new-onset refractory status epilepticus: Systematic review
                </Typography>
                <Typography variant="body2" color="text.secondary" className='card_text'>
                     When treatments were initiated in the acute phase, seizures had been controlled in up to 73% of patients with anakinra, 70% with tocilizumab, and 50% with intrathecal dexamethasone. However, they had no clear effect on the emergence of post-NORSE epilepsy or long-term functional outcomes.
                </Typography>
                </CardContent>
            {/* </CardActionArea> */}
        </Card>
        <Card sx={{ maxWidth: 345 }} className='card'>
            {/* <CardActionArea> */}
            <CardMedia
                component="img"
                height="140"
                src={CardTwo}        
                alt="Card Two"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Lacosamide and pregnancy: Data from spontaneous and solicited reports
                </Typography>
                <Typography variant="body2" color="text.secondary" className='card_text'>
                    The preliminary data do not raise major concerns on the use of LCM during pregnancy. Most pregnancies with LCM exposure resulted in healthy live births, and no new safety issues were identified.
                </Typography>
            </CardContent>
            {/* </CardActionArea> */}
        </Card>
        <Card sx={{ maxWidth: 345 }} className='card'>
            {/* <CardActionArea> */}
                <CardMedia
                component="img"
                height="140"
                src={CardThree}           
                alt="Card Three"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                     Focal electroclinical features in generalized tonic–clonic seizures: Decision flowchart for a diagnostic challenge
                </Typography>
                <Typography variant="body2" color="text.secondary" className='card_text'>
                     Focal  semiology  and  interictal  EEG  are  com-mon  in  generalized  tonic–clonic  seizures  and  should not exclude IGE diagnosis.   Focal ictal EEG onset of tonic–clonic seizures is rare in IGE, and when present, it points to dif-ferent location than the IEDs.
                </Typography>
                </CardContent>
            {/* </CardActionArea> */}
        </Card>
      </div>
    </>
  
  );
}