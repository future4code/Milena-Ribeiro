import React from 'react';
import {useHistory} from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';



// const images = [
//   {
//     url: 'https://exame.com/wp-content/uploads/2019/09/planetas.gif',
//     title: 'VIAGENS',
//     width: '30%',
//   },
//   {
//     url: 'https://i2.wp.com/www.deviante.com.br/wp-content/uploads/2016/01/s3uiclwoufxzpbrysqmo.jpg?fit=1992%2C1000',
//     title: 'ADMINISTRAÇÃO',
//     width: '30%',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     minWidth: 300,
//     width: '100%',
//     justifyContent: 'center',
//     marginTop: 150,
//     // backgroundColor: 'black',
//   },
//   image: {
//     position: 'relative',
//     height: 200,
//     [theme.breakpoints.down('xs')]: {
//       width: '100% !important',
//       height: 100,
//     },
//     '&:hover, &$focusVisible': {
//       zIndex: 1,
//       '& $imageBackdrop': {
//         opacity: 0.15,
//       },
//       '& $imageMarked': {
//         opacity: 0,
//       },
//       '& $imageTitle': {
//         border: '4px solid currentColor',
//       },
//     },
//   },
//   focusVisible: {},
//   imageButton: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   },
//   imageSrc: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%',
//   },
//   imageBackdrop: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.4,
//     transition: theme.transitions.create('opacity'),
//   },
//   imageTitle: {
//     position: 'relative',
//     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
//   },
//   imageMarked: {
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)',
//     transition: theme.transitions.create('opacity'),
//   },
// }));

// export default function ButtonBases() {
//   const classes = useStyles()
//   const history = useHistory()

//   return (
//     <div className={classes.root}>
//       {images.map((image) => (
//         <ButtonBase
//           focusRipple
//           key={image.title}
//           className={classes.image}
//           focusVisibleClassName={classes.focusVisible}
//           style={{
//             width: image.width,
//           }}
//         >
//           <span
//             className={classes.imageSrc}
//             style={{
//               backgroundImage: `url(${image.url})`,
//             }}
//           />
//           <span className={classes.imageBackdrop} />
//           <span className={classes.imageButton}>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               className={classes.imageTitle}
//             >
//               {image.title}
//               <span className={classes.imageMarked} />
//             </Typography>
//           </span>
//         </ButtonBase>
//       ))}
//     </div>
//   );
// }

const HomePage = () => {
    const history = useHistory()
    return (
        <div>
            <p>HomePage</p>
            <button onClick={() => goToListTripsPage(history)}>Ver viagens</button>
            <button onClick={() => goToLoginPage(history)}>Área de admin</button>
        </div>
    )
}

export default HomePage