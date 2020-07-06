import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    backgroundColor:'#757575',
    alignItems:'center',
    height: '95vh',

  },
  root1: {
    marginLeft:'100vh',
    marginTop:'40vh'
  },
  
}));

const theme = createMuiTheme({
    palette: {
      primary: {
        main:'#ffff00',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });
  

 const Spinner=(props)=>{
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
            <Container maxWidth="xl" className={classes.root}>
                <CircularProgress color='primary' className={classes.root1}/>
                <h1>
                    <div  className={classes.root1} >
                        {props.message}
                    </div>
                </h1> 
            </Container>
      </ThemeProvider>

  );
};

Spinner.defaultProps={
    message:'Loading.....'
};
export default Spinner;
