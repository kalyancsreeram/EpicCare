import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './styles.scss';

export default function MediaControlCard(props) {

  return (
    <Card sx={{ display: 'flex' }} className='media_control_card'>
        <CardMedia
            component="img"
            sx={{ width: 151 }}
            src={props.source}
            alt={props.title}
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }} className='service_card'>
          <Typography component="div" variant="h6">
            {props.title}
          </Typography>
          <Typography variant="p" color="text.secondary" component="div">
            {props.desc}
          </Typography>
        </CardContent>       
      </Box>
     
    </Card>
  );
}