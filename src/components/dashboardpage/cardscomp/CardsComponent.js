import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import CardOne from "../../../assets/images/card-one.jpeg"
import CardTwo from "../../../assets/images/card-two.jpeg"
import CardThree from "../../../assets/images/card-three.jpeg"

import './styles.scss';

export default function CardsComponent() {
  return (
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
                <Typography gutterBottom variant="h5" component="div">
                    Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
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
                <Typography gutterBottom variant="h5" component="div">
                Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
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
                <Typography gutterBottom variant="h5" component="div">
                    Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            {/* </CardActionArea> */}
        </Card>
    </div>
  );
}