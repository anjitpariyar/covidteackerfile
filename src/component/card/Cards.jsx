import React,{ useState, useEffect }from 'react'
import { Card, CardContent, Typography , Grid } from '@material-ui/core'
import styles from './Cards-module.css'
import CountUp from 'react-countup'
import cx from 'classnames/bind'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
     if (!confirmed) {
          return 'Loading...';
     }

     return (
          <div className={"container"}>
               <Grid container spacing={3} justify="flex-start" >
                    <Grid item xs={4} md={3} component={Card} className={cx("card")} >
                         <CardContent>
                              <Typography color="textSecondary" gutterBottom className={cx("card__title", "card__infected")}>
                                   Infected
                               </Typography>
                              <Typography variant="h5">
                                   <CountUp end={confirmed.value}
                                        separator=","
                                        decimal=","
                                        duration={3}
                                   />
                              </Typography>
                              <Typography color="textSecondary">
                                   {  new Date(lastUpdate).toDateString()}
                              </Typography>
                              <Typography variant="body2" component="p">
                                   Number of active cases of COVID-19.
                              </Typography>
                         </CardContent>
                    </Grid>
                    <Grid item xs={4} md={3} component={Card} className={cx("card")} >
                         <CardContent>
                              <Typography color="textSecondary" gutterBottom className={cx("card__title", "card__recovered")}>
                                   Recovered
                              </Typography>
                              <Typography variant="h5">
                                   <CountUp end={recovered.value}
                                        separator=","
                                        decimal=","
                                        duration={2}
                                   />     
                              </Typography>
                              <Typography color="textSecondary"> 
                                   {new Date(lastUpdate).toDateString()}     
                              </Typography>
                              <Typography variant="body2" component="p">
                                   Number of recoveries from COVID-19.
                              </Typography>
                         </CardContent>
                    </Grid>
                    <Grid item xs={4} md={3} component={Card} className={cx("card")}  >
                         <CardContent>
                              <Typography color="textSecondary" gutterBottom className={cx("card__title", "card__death")}>
                                   Deaths
                              </Typography>
                              <Typography variant="h5">
                                   <CountUp end={deaths.value}
                                        separator=","
                                        decimal=","
                                        duration={1}
                                   />
                                   
                              </Typography>
                              <Typography color="textSecondary">   
                                   {new Date(lastUpdate).toDateString()}
                              </Typography>
                              <Typography variant="body2" component="p">
                                   Number of deaths caused by COVID-19.
                              </Typography>
                         </CardContent>
                    </Grid>
               </Grid>
          </div>
     );
};

export default Cards;