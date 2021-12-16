import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import drive from '../images/mask-group@2x.svg';
// import drive from 'src\\images\\mask-group@2x.svg';
import { Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import Carousel from 'react-material-ui-carousel';
import { Avatar } from '@mui/material';
// import Carousell from './Carousell';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import GridTile from 'material-ui/GridList/GridTile';



const useStyles = makeStyles({
    margin: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cover: {
        backgroundImage: `url(https://user-images.githubusercontent.com/52281814/143464039-fcedcbb5-e565-42e0-8d43-bd384a51a72e.png)`,
        backgroundPosition: "center",
        minHeight:'100vh',
        width:'100%'
    },
    // driveicon :{
    //     marginTop: '60px',
    //     marginLeft : '128px',
    //     height: 'auto',
    //     width: 'auto',
    // },
    organgeicon :{
        height: 'auto',
        // width: 'auto',
        marginTop: '100px',
        marginLeft: '-250px',
    },
    youtubeicon :{
        marginTop: '40px',
        height: 'auto',
        width: 'auto',
        marginLeft: '-220px',
    },
    biggogleicon: {
       marginTop:'-390px',
        height: '100px',
        width: '119px',
        marginLeft: '690px',
      
    },
    yellowcircle: {
        height: 'auto',
        width: '25px',
        marginLeft: '950px',
        marginTop: '176px',
    },
    skybluecircle: {
        height: 'auto',
        width: '25px',
        marginLeft: '850px',
        marginBottom: '-160px',
    },
    learntext: {
       paddingLeft: '50px',
       marginTop: '-60px',
       width: 'auto',
       height: 'auto',
    },
    vector :{
        height: 'auto',
        width: '119px',
        marginLeft: '640px',
        marginTop:'64px',
        transform: 'rotate(-10deg)',
    },
    vector1: {
        height: 'auto',
        width: 'auto',
        marginLeft: '360px',
        marginTop: '-30px',
        transform: 'rotate(-78.6deg)',
    },
    greencircle: {
        height: 'auto',
        width: '25px',
        marginLeft: '55px',
        marginTop:'130px',
    },
    bluestar: {
        height: 'auto',
        width: '36px',
        // marginBottom: '00px',
        marginTop:'-400px',
        marginLeft: '-300px', 
    },
    zoom: {
        height: 'auto',
        width: 'auto',
        marginTop: '-47px',
        marginLeft:'-950px',
    },
    bluebox: {
        height: 'auto',
        Width: 'auto',
       
    },
    bluebox1: {
        height: '250px',
        Width: '250px',
        marginLeft: '70px',
    },
    textsupport: {
         justifyContent: 'center',
         marginLeft: '50px',
         marginRight: 'auto',
         marginTop:'50px',
    },
    // frame: {
    //     align-items: 'flex-start',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     minHeight: '462px',
    //     width: '540px',
    // }, 
    frame2: {
        backgroundColor: 'var(--cerulean)',
        borderRadius: '9.03px',
        background: 'linear - gradient(97.47deg, #2C296C 3.64 %, #040142 100 %)',
        width: '100%',
        

    },
    frame3: {
        // backgroundImage: `url(https://user-images.githubusercontent.com/52281814/143670402-7a6f3a7c-d7b0-49e8-8128-bdd5e33dcbdc.png)`,
        backgroundColor:'#F7F7F7',
        // borderRadius: '20px',
        height: '500px',
        width: "1440px",
        // marginLeft:'120px',
        marginRight:'230px',
        marginTop:'120px',
        // marginLeft:'px',
    },

    frame4:{
        backgroundColor:'#F7F7F7',
        borderRadius: '20px',
        height: '500px',
        width: "500px",
        // marginLeft:'120px',
        // marginRight:'230px',
        marginTop:'120px',
    },

    property:{
        
        letterSpacing: '0px',
        lineHeight: '64px',
        minHeight: '64px',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        width: '886px',
        fontFamily:"Montserrat",
    },

     property1:{
        letterSpacing: '0px',
        lineHeight: '32px',
        minHeight: '160px',
        textAlign: 'center',
        width:'988px',
     },
    
    cardd :{
        // background: 'color: var(--white',
        // borderRadius: '20px',
        // boxShadow: '0px 4px 60px #0000001c',
        backgroundColor:'blue',
         border:'0px',
        marginTop:'-100px',
    },
    cardd1: {
        background:'color: var(--mist - gray)',
        borderRadius: '10px',
        height: '363px',
        width: '260px',
        justifyItems:'center',
    },
   
    leftend : {
        alignItems: 'flex-end',
        height: '300px',
        Width: '300px',
    },
    projects : {
        height: '117px',
        letterSpacing: '0',
        width: '940px' 
    },
   text1:{
    letterSpacing:'0px',
    lineHeight:' 26px',
    marginTop: '4px',
    minHeight:' 52px',
    width: '255px',
   },
   drive1icon:{
    height: '100px',
    width: '70px',
    marginLeft:'-200px',
    marginTop:'150px',
   },
   text2:{
    left: '750px',
    letterSpacing: '0px',
    lineHeight: '32px',
    position: 'absolute',
//   top:' 112px',
    width: '512px',
//   fontFamily: 'Montserrat',
    fontSize: '20px',
   },
        
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(3, 3, 3, 3),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(5em + ${theme.spacing(6)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));
    

const About = () => { 
     const classes = useStyles();

    return ( 
        <div className={classes.cover}>
          <Container>
            <Grid paddingLeft={3} container spacing={4} columns={12}>
                <Grid item xs={3}>
                     {/* <img src="https://user-images.githubusercontent.com/52281814/143473213-651e5378-8948-4f80-82bd-fef0b93ef50a.png" className={classes.driveicon}/> */}
                     <img src="https://user-images.githubusercontent.com/52281814/143477414-ba8f9952-c5a8-4069-94da-fe06e433a295.png" className={classes.yellowcircle} />
                </Grid>
                <Grid item xs={3}>
                     <img src="https://user-images.githubusercontent.com/52281814/143472136-e812bb34-f546-4a3b-aa54-8a29bd72059f.png" width={27} className={classes.organgeicon} />
                </Grid>
                <Grid item xs={3}>
                     <img src={drive}className={classes.youtubeicon} />
                </Grid>
                <Grid item xs={3}>
                     <img src="https://user-images.githubusercontent.com/56605853/146369267-e3babaf4-fdec-4939-b373-b6e47ca92d3e.png"className={classes.drive1icon} />
                </Grid>
                {/* <Grid item xs={3}>
                     <img src="https://user-images.githubusercontent.com/56605853/146371410-911c299d-0dfd-49a2-9820-dc2be4925661.png"className={classes.youtube1icon} />
                </Grid> */}
                <Grid item xs={3}>
                     <img src="https://user-images.githubusercontent.com/52281814/143471959-769cd9f3-8374-4ca8-a1c6-c3c245c2d6d9.png"  className={classes.biggogleicon}/>
                     <img src="https://user-images.githubusercontent.com/52281814/143477449-a965344c-0c74-483c-9946-d83310938ae6.png" className={classes.skybluecircle} />
                </Grid>
            </Grid>
            <Grid container spacing={4} columns={12}>
                <Grid item xs={2.6}>
                    
                </Grid>
                <Grid item xs={8}>
                     
                        <Typography  className={classes.learntext} fontWeight={600}  marginTop={-11}    marginLeft={1} variant="h2" component="h3">
                          Services we provide
                        </Typography>
                   
                </Grid>
                <Grid item xs={2.6}>
                   
                </Grid>
            </Grid>
                <Grid container spacing={4} columns={12}>
                    <Grid item  xs={1}>
                         <img src="https://user-images.githubusercontent.com/52281814/143528246-dee026ce-182c-4df7-b86e-1029c328eba4.png" className={classes.vector} />
                     </Grid>
                    <Grid item xs={2}>
                        <img src="https://user-images.githubusercontent.com/52281814/143528351-dda28f98-520f-4657-89ef-4f523c34fc54.png" className={classes.vector1} />
                    </Grid>
                    <Grid item xs={6} >
                        <img src="https://user-images.githubusercontent.com/52281814/143528748-943297e0-26fa-4190-8eb8-bce564f9c305.png" className={classes.greencircle} />
                    </Grid>
                    <Grid item xs={2}>
                        <img src="https://user-images.githubusercontent.com/52281814/143528403-cbca69e0-9731-42ab-8318-0438c5d3a558.png"  className={classes.bluestar}/>
                     </Grid>
                    <Grid item xs={1} >
                       <img src="https://user-images.githubusercontent.com/52281814/143539808-22b651a5-3cf6-416b-b720-6198061f0925.png" className={classes.zoom}/>
                     </Grid>
                </Grid > 
{/* placing tick */}
                
            <Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    <Grid item xs={5}>
                          <Grid container  wrap="nowrap" spacing={2}>
                                    <Grid item  marginLeft={25} marginTop={7.8}>
                                        <Avatar  sx={{ bgcolor:'#CAB8FF' }} variant="rounded"><img  src="https://user-images.githubusercontent.com/56605853/145779219-3e7416db-5053-4aa7-8835-6f4e72452df0.png" /></Avatar>
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column' paddingLeft={3} spacing={1}>
                                    <Grid item xs>
                                        <Typography fontWeight={500} marginTop={10} fontSize={25} variant="h2" component="h3">Lorem Ipsum</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={3}>
                          <Grid container  wrap="nowrap" spacing={2}>
                                    <Grid item  marginTop={7.4}>
                                        <Avatar  sx={{ bgcolor:'#CAB8FF' }} variant="rounded"><img  src="https://user-images.githubusercontent.com/56605853/145779219-3e7416db-5053-4aa7-8835-6f4e72452df0.png" /></Avatar>
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column' paddingLeft={3} >
                                    <Grid item xs>
                                        <Typography fontWeight={500} marginTop={10} fontSize={25} variant="h2" component="h3">Lorem Ipsum</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={4}>
                          <Grid container  wrap="nowrap" spacing={2}>
                                    <Grid item  marginTop={7.4}>
                                        <Avatar  sx={{ bgcolor:'#CAB8FF' }} variant="rounded"><img  src="https://user-images.githubusercontent.com/56605853/145779219-3e7416db-5053-4aa7-8835-6f4e72452df0.png" /></Avatar>
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column' paddingLeft={3} >
                                    <Grid item xs>
                                        <Typography fontWeight={500} marginTop={10} fontSize={25} variant="h2" component="h3">Lorem Ipsum</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
    </Container>
            
{/* placing left and right frames */}
                        <Grid container columns={12} className={classes.frame3} >
                        <Grid  item xs={6}  marginLeft={23.6} columns={12}  >
                          <Typography className={classes.property}  fontWeight={500} marginLeft={5.6}  fontSize={45}  marginTop={10} variant="h2" component="h3">
                              What we do
                           </Typography>
                                <Typography className={classes.property1} lineHeight={2.0} fontWeight={500}  marginTop={5} fontSize={20} variant="h2" component="h3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat
                                cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non
                                commodo volutpat, pharetra, vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam
                                orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi,
                                risus in suscipit non. Non commodo volutpat, pharetra, vel.
                                </Typography>
                            </Grid>
                         </Grid>
                        {/* <div>
                          <Grid container spacing={2} columns={12} className={classes.frame3}>
                             <Grid marginLeft='10px' marginTop='-140px' item xs={3} backgroundColor='#F7F7F7'>
                                 <Paper  backgroundColor='#F7F7F7' ><img src="https://user-images.githubusercontent.com/56605853/146042529-6068149a-b7b1-4562-b89c-084fd04564d5.png" width={200}></img></Paper>
                            </Grid>
                          <Grid item xs={6}>
                                <Paper>vefgerg</Paper>
                          </Grid>
                          <Grid marginLeft='-80px'item xs={3}>
                               <Paper ><img src="https://user-images.githubusercontent.com/56605853/145765357-4681ae17-7620-48c5-b6c3-553048a56dca.png" width={200}></img></Paper>
                          </Grid>
                    </Grid>
                    </div>       */}
{/* lorem ipsum 4 times */}
<div >
            <Grid container backgroundColor="#FFF" >
                <Grid container backgroundColor="#FFF" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    
                    <Grid container backgroundColor="#FFF" item xs={3}>
                        
                          <Grid container  wrap="nowrap" spacing={2}>
                                    {/* <Grid item  marginLeft={25} marginTop={7.8}>
                                        <Avatar  sx={{ bgcolor:'#CAB8FF' }} variant="rounded"><img  src="https://user-images.githubusercontent.com/56605853/145779219-3e7416db-5053-4aa7-8835-6f4e72452df0.png" /></Avatar>
                                    </Grid>
                                    <br></br> */}
                                    <Grid container  marginLeft={19} direction='column'  spacing={1}>
                                    <Grid item xs color='blue'>
                                        <Typography fontWeight={500} marginTop={13.3} fontSize={25} variant="h2" component="h3">Lorem Ipsum
                                        </Typography>
                                    </Grid>
                                    <Grid item xs  >
                                        <img  src="https://user-images.githubusercontent.com/56605853/146257427-04c02ff7-df5b-41f4-bf3e-d9a80173ca1d.png"></img>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid  container backgroundColor="#FFF"item xs={3}>
                          <Grid container  wrap="nowrap" spacing={2}>
                                    <Grid item  marginTop={11.2} marginLeft={2}>
                                        <img  src="https://user-images.githubusercontent.com/56605853/146064295-e9c89572-0881-492e-be80-aae9fd3b55a2.png" />
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column' marginLeft={7} >
                                    <Grid item xs>
                                        <Typography fontWeight={500} marginTop={13.3} fontSize={25} variant="h2" component="h3">Lorem Ipsum</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={3}>
                          <Grid container  wrap="nowrap" spacing={2}>
                                    <Grid item  marginTop={11.2} marginLeft={2}>
                                        <img  src="https://user-images.githubusercontent.com/56605853/146064295-e9c89572-0881-492e-be80-aae9fd3b55a2.png" />
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column' marginLeft={7} >
                                    <Grid item xs>
                                        <Typography fontWeight={500} marginTop={13.3} fontSize={25} variant="h2" component="h3">Lorem Ipsum</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={3}>
                          <Grid container  wrap="nowrap" spacing={2}>
                                    <Grid item  marginTop={11.2} marginLeft={2}>
                                        <img  src="https://user-images.githubusercontent.com/56605853/146064295-e9c89572-0881-492e-be80-aae9fd3b55a2.png" />
                                    </Grid>
                                    <br></br>
                                    <Grid container direction='column' marginLeft={7} >
                                    <Grid item xs>
                                        <Typography fontWeight={500} marginTop={13.3} fontSize={25} variant="h2" component="h3">Lorem Ipsum</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            </div>
{/* empty frame */}

{/* <div>
                          <Grid container spacing={2} columns={12} className={classes.frame3}>
                             <Grid marginLeft='10px' marginTop='-140px' item xs={3} backgroundColor='#F7F7F7'>
                                 <Paper  backgroundColor='#F7F7F7' ><img src="https://user-images.githubusercontent.com/56605853/146042529-6068149a-b7b1-4562-b89c-084fd04564d5.png" width={200}></img></Paper>
                            </Grid>
                          <Grid item xs={6}>
                                <Paper>vefgerg</Paper>
                          </Grid>
                          <Grid marginLeft='-80px'item xs={3}>
                               <Paper ><img src="https://user-images.githubusercontent.com/56605853/145765357-4681ae17-7620-48c5-b6c3-553048a56dca.png" width={200}></img></Paper>
                          </Grid>
                    </Grid>
                    </div>       */}

<Container backgroundColor="#FFF">
                  
                   <Grid container  columns={12} className={classes.frame4} >
                        <Grid  item xs={4} className={classes.frame4}  >
                            </Grid>
                            <Grid item xs={4} marginLeft={-47}>
                                <img width={550}  src="https://user-images.githubusercontent.com/56605853/146071290-dbce88c9-6320-4b2a-82a1-35a9e7b63b3b.png"></img>
                            </Grid>
                          <Grid className={classes.text2} marginLeft='-80px'item xs={4}>
                              <Typography lineHeight={2.0} fontWeight={500}  marginTop={5} fontSize={20} variant="h2" component="h3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat
                                cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non
                                commodo volutpat, pharetra, vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam
                                orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi,
                                risus in suscipit non. Non commodo volutpat, pharetra, vel.
                               </Typography> 
                            </Grid>
                        </Grid>
                      
</Container>

{/* learn for cause life cycle */}
    <div>
        <Grid container bgcolor="#FFF" columns={12}>
                <Grid item xs={3} ></Grid>
                <Grid item xs={6}>
                  <Typography
                  marginTop='160px'
                  width='804px'
                  height='117px'
                //   fontFamily='Montserrat'
                  fontWeight='700'
                //   align='center'
                  fontSize='50px'
                  marginLeft={1.6}
                   >
                  Learn For Cause's Life Cycle
                  </Typography>
                </Grid>
            <Grid item xs={3} ></Grid>
        </Grid>
    </div>

{/* rules */}
           
        <div>
            <Grid container bgcolor="#FFF">
                <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    <Grid item xs={4}>
                          <Grid container  spacing={2}>
                                    <Grid  item paddingRight={3} marginLeft={19} marginTop={7.8}>
                                    <img src="https://user-images.githubusercontent.com/52281814/143477449-a965344c-0c74-483c-9946-d83310938ae6.png" width={20} />
                                    </Grid>
                                    <br></br>
                                    
                                    <Grid item  marginTop={7.8} marginLeft={-2}>
                                       <img src="https://user-images.githubusercontent.com/56605853/146197170-0805ab44-29e0-45c0-be4b-faa0937dd39b.png"/>
                                    </Grid>
                                    <Grid container direction='column' marginLeft={20} >
                                        <Grid >
                                             <Typography fontWeight={500}  marginTop={2} fontSize={25} variant="h2" component="h3">Ideate</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5}container direction='column' marginLeft={17.5} >
                                        <Grid className={classes.text1}>
                                             <Typography fontWeight={300}  marginTop={-1} fontSize={20} variant="h2" component="h3">Turn your idea from concept to MVP</Typography>
                                        </Grid>
                                    </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={4}>
                          <Grid container spacing={2}>
                                    <Grid  item  direction='column' marginLeft={-3} marginTop={7.8}>
                                    <img src="https://user-images.githubusercontent.com/52281814/143477449-a965344c-0c74-483c-9946-d83310938ae6.png" width={20}/>
                                    </Grid>
                                    <br></br>
                                    
                                    <Grid item marginTop={7.8}>
                                       <img src="https://user-images.githubusercontent.com/56605853/146197170-0805ab44-29e0-45c0-be4b-faa0937dd39b.png"/>
                                    </Grid>
                                    <Grid container direction='column' marginLeft={-1.8} >
                                        <Grid >
                                             <Typography fontWeight={500}  marginTop={2} fontSize={25} variant="h2" component="h3">Design</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}container direction='column' marginLeft={-4} >
                                        <Grid className={classes.text1} >
                                             <Typography fontWeight={300}  marginTop={-1} fontSize={20} variant="h2" component="h3">Sketch out the product to align the user needs</Typography>
                                        </Grid>
                                    </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={3}>
                          <Grid container spacing={2}>
                                    <Grid  item  direction='column' marginLeft={-25} marginTop={7.8}>
                                    <img src="https://user-images.githubusercontent.com/52281814/143477449-a965344c-0c74-483c-9946-d83310938ae6.png" width={20}/>
                                    </Grid>
                                    <br></br>
                                    
                                    <Grid item marginTop={7.8}>
                                       <img src="https://user-images.githubusercontent.com/56605853/146197170-0805ab44-29e0-45c0-be4b-faa0937dd39b.png"/>
                                    </Grid>
                                    <Grid container direction='column' marginLeft={-27} >
                                        <Grid >
                                             <Typography fontWeight={500}  marginTop={14} fontSize={25} variant="h2" component="h3">Devlop</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={7}container direction='column' marginLeft={-46} >
                                        <Grid className={classes.text1} >
                                             <Typography fontWeight={300}  marginTop={17} fontSize={20} variant="h2" component="h3">Convert the designs into a live application</Typography>
                                        </Grid>
                                    </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={3}>
                          <Grid container spacing={2}>
                                    <Grid  item  direction='column' marginLeft={123.6} marginTop={-17.9} >
                                    <img src="https://user-images.githubusercontent.com/52281814/143477449-a965344c-0c74-483c-9946-d83310938ae6.png" width={20}/>
                                    </Grid>
                                    <br></br>
                                    
                                    {/* <Grid item marginTop={7.8}>
                                       <img src="https://user-images.githubusercontent.com/56605853/146197170-0805ab44-29e0-45c0-be4b-faa0937dd39b.png"/>
                                    </Grid> */}
                                    <Grid container direction='column'  marginLeft={126} marginTop={-14.6} >
                                        <Grid >
                                             <Typography fontWeight={500}  fontSize={25} variant="h2" component="h3">Deploy</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={13}container direction='column' marginLeft={123.9}  >
                                        <Grid className={classes.text1}>
                                             <Typography fontWeight={300}  marginTop={-11.6} fontSize={20} variant="h2" component="h3">Launching the application to the market</Typography>
                                        </Grid>
                                    </Grid>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
{/* cards section */}
            <div>
                <Grid container bgcolor="#FFF" columns={12}>
                    <Grid item xs={2} ></Grid>
                    <Grid item xs={8}>
                        <Typography className={classes.projects}
                            marginTop='100px'
                            variant="h6" component="h5"
                            fontFamily='Montserrat'
                            fontWeight='bold'
                            marginLeft={33}
                            fontSize='50px'
                          > Our Projects
                        </Typography>
                    </Grid>
                    <Grid item xs={2} ></Grid>
                </Grid>
            </div>
            <br></br>
            <br></br>

      
            <Grid container backgroundColor='#FFF' spacing={2} columns={12}>
                <Grid xs={1.6}>
                </Grid>
                <Grid  marginLeft={-4.3} xs={4}>
                     <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={540} height={380}/>
                   <Typography paddingLeft={1.1}  fontWeight={500} marginTop={1.5} fontSize={23} variant="h2" component="h3">
                    Project Title
                    </Typography>
                    <Typography paddingLeft={1.1}  fontWeight={300} marginTop={0.5} fontSize={20} variant="h2" component="h3">
                    iOS,IoT
                    </Typography>
                </Grid>
                
                <Grid marginLeft={13} xs={4}>
                     <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={540} height={380}/>   
                     <Typography marginLeft={1}  fontWeight={500} marginTop={1.5} fontSize={23} variant="h2" component="h3">
                      Project Title
                    </Typography>
                    <Typography marginLeft={1}  fontWeight={300} marginTop={0.5} fontSize={20} variant="h2" component="h3">
                      Android,IoT
                    </Typography>
                </Grid>
                
              
                <Grid marginTop={5} marginLeft={18.9} xs={4}>
                        <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={540} height={380}/>
                        <Typography paddingLeft={1.1}  fontWeight={500} marginTop={1.5} fontSize={23} variant="h2" component="h3">
                           Project Title
                        </Typography>
                        <Typography marginLeft={1}  fontWeight={300} marginTop={0.5} fontSize={20} variant="h2" component="h3">
                         Web app
                         </Typography>
                </Grid>

                <Grid  marginTop={5} marginLeft={13} xs={4}>
                        <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={540} height={380}/>
                        <Typography marginLeft={1}  fontWeight={500} marginTop={1.5} fontSize={23} variant="h2" component="h3">
                          Project Title
                         </Typography>
                         <Typography marginLeft={1}  fontWeight={300} marginTop={0.5} fontSize={20} variant="h2" component="h3">
                          Web app
                          </Typography>
                </Grid>
                
                <Grid xs={1.9}>
                  </Grid>
                </Grid>

            
           
              
           
        </div>
     );
}
 
export default About;