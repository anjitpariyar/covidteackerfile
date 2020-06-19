import React, {useState, useEffect}  from 'react'
import { fetchCountry } from '../api'
import { FormControl, NativeSelect, InputLabel} from '@material-ui/core';
import styles from './Country-module.css'


const Country = ({ handleCountryChange }) => {
     // const  =props
     
     const [fetchCountries, setFetchCountries] = useState([]);
     
     useEffect(() => {
          const fetchCountries__func=  async ()=>{
               setFetchCountries(await fetchCountry());
          }
          
          fetchCountries__func();
          
          
     }, []);
     
     return (
          <div>  
          <h1 className={'covid--header'}>Covid-19 Tracker</h1>
          <article className={'form-group'}>
          
          <FormControl >
          <InputLabel htmlFor="age-native-simple">Select Country</InputLabel>
          <NativeSelect
          labelid="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e)=>handleCountryChange(e.target.value)}
          >  
          <option value="" defaultValue>Global</option>
          {fetchCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
         
          </NativeSelect>
           <span className="material-icons">
          unfold_more
          </span>
          </FormControl>
          </article>
          </div>
          
          );
     }
     
     export default Country;