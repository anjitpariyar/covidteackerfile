import React from 'react';
import './App.css';
import { Cards, Chart, Country } from './component'
import Footer from './component/Footer'
import {fetchData} from './component/api'
import styles from './App.module.css'
import { Container } from '@material-ui/core'




class App extends React.Component{
  state = {
    data:{ },
    country:{ },
  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({ data });
  }
  
  handleCountryChange =async(country)=>{

    const data = await fetchData(country);
    this.setState({data: data, country: country}); 
    if(country===' '){
      this.setState({country: null})
    }
    else
    console.log('hello')

  }
  
  
  
  render(){
    const {data, country} =this.state;
    return (
      <div className="App">
      <main className={styles.main_part}> 
      <Container>
        <Country handleCountryChange={this.handleCountryChange} />
        <Cards data={data}/>
        
        <Chart data={data} country={country} value={0}/>
        <Footer />
      </Container>
      
      
      </main>
      
      </div>
      );
    }
  }
  
  
  
  export default App;
  