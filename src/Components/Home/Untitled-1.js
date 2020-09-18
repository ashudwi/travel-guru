// import React from 'react';
// import './Home.css'
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import image from '../../images/place/Rectangle 28.png';

// import { Link } from 'react-router-dom';
// import Header from '../Header/Header';
// import { Grid } from '@material-ui/core';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     float:"left",
//     margin: "10px"
//   },
//   media: {
//     height: 140,
//   },
// });



// const Home = (props) => {
 
//   const classes = useStyles();
//   const fakeData = props.data
//   return (
   
//     <div className="cover">
//       <Header></Header>
//       <Grid container>
//       {
//           fakeData.map(data =>
//                 <Card  className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image={data.img}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {data.name}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//            {data.subtitle}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//             <Link to={"/place/"+data.name}>
//             <Button size="small" color="primary">
//             Booking
//           </Button>
//             </Link>
//         </CardActions>
//             </Card>           

//           )
//         } 
  
//         </Grid>

//       </div>
      
//   );
// };

// export default Home;