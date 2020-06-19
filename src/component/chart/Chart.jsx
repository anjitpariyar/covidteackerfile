
import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../api';

import styles from './Chart-module.css';

const Chart = ({ data: { confirmed, recovered, deaths} , country, value}) => {

     const [dailyData, setDailyData] = useState({});
     useEffect(() => {
          const fetchMyAPI = async () => {
               setDailyData(await fetchDailyData());
          };  
          fetchMyAPI();
     }, [ ] );
    
     
     const lineChart = (

          dailyData[0] ? (
               <Line
                    data={{
                         labels: dailyData.map(({ date }) => date),
                         datasets: [ {
                              data: dailyData.map((data) => data.deaths),
                              label: 'Deaths',
                                   borderColor: '#9e4a4a',
                                   backgroundColor: 'rgba(158, 74, 74, 0.42)',
                              fill: true,
                         },
                              {
                                   data: dailyData.map((data) => data.confirmed),
                                   label: 'Infected',
                                   borderColor: '#4a8b9e',
                                   backgroundColor: 'rgba(74, 139, 158, 0.3)',
                                   color: '#fff',
                                   fill: true,
                              },
                         ],
                    }}
               />
          ) : null
     );

     const barChart= (
          confirmed ? (
               <Bar 
               data={ {
               labels:['Infected', ' Recovered', 'Deaths'],
               datasets:[{
                    label:'People',
                    backgroundColor: ['#4a8b9e', '#559e4a', '#9e4a4a'],
                    data: [confirmed.value, recovered.value, deaths.value ]
               }]
          } }
          option={{
               title: { display: true, text:`Current state in ${country}`}
          }}
          
          /> ) : null
     )
     if ({ country }== null){
          // console.log('hello');
          
     }
     // console.log(({country}));
     return (
          <div className={'contaier'}>
               {/* {barChart} */}
               {country ? barChart : lineChart}
              
          </div>
          
     );
};

export default Chart;