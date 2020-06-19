import axios from 'axios';
import { NativeSelect, FormControl } from '@material-ui/core'
const URL = "https://covid19.mathdro.id/api";

const fetchData = async (country)=>{
     let changeUrl = URL;
     if(country)
          changeUrl= `${URL}/countries/${country}`
         
     try{
          const { data: {confirmed, recovered, deaths, lastUpdate} }= await axios.get(changeUrl);
          return { confirmed, recovered, deaths, lastUpdate }
     }catch(error){
          console.log('fetch api isnot working')
     }
}

const fetchDailyData = async()=>{
     try{
          const { data } = await axios.get(`${URL}/daily`)
          const modifyData = data.map((dailyData) => ({
               confirmed:dailyData.confirmed.total,
               deaths: dailyData.deaths.total,
               date: dailyData.reportDate,
          }))
          // console.log(modifyData)
          return modifyData;
     }
     catch(error){
          console.log("not working bruh");
     }
}

const fetchCountry = async()=>{
     try{
          const {data:{countries} }= await axios.get(`${URL}/countries`)
          // console.log(countries)
          return (countries.map((country)=>country.name))
     }
     catch{
          console.log('bruh!!');
     }
}


export {
     fetchData,
     fetchDailyData,
     fetchCountry
}

 
//  export default fetchDataDaily 

