// const productCard = (props) => {
//   const { titulo, img, precio, descripcion } = props;
//   return (
//     <div>
//       <h2>{titulo}</h2>
//       {img}
//       <p>{descripcion}</p>
//       <h3>{precio}</h3>
//     </div>
//   );
// };
// export default productCard;


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  const {titulo, img, descripcion, precio} = props
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className='card-content'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>{titulo}</h1>
        </Typography>
          <img src={img} alt="" srcset="" className="product_image"/>
        {/* <Typography variant="h5" component="div">
          
        </Typography> */}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {descripcion}
        </Typography>
        <Typography variant="body2">
          {precio}
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}