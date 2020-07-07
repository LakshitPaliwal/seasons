import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './Seasons.css';


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
  

class Spinner extends React.Component{
  constructor(props) {
    super(props);
    this.state = {loadingText: 'LOADING.....'};
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({loadingText: '<== please accept Location request'})
    }, 3000)
  }

  render(){
  return (
      <div className='root'>
             <div className='root1'>
                <CircularProgress />
              </div>
          <h1 >
            {this.state.loadingText}
          </h1>    
      </div> 
 
  );
}
}


// Spinner.defaultProps={
//     message:'Loading.....'
// };
export default Spinner;
