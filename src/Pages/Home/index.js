import { Grid, Grow, makeStyles } from '@material-ui/core';
import React from 'react'
import Card from '../../Components/Card';
import WEBBtn from '../../Components/WEBBtn'

const useStyles = makeStyles({
    cityPage: {
        backgroundColor: "#B9FFA0",
        // height: '100vh'
    },
    cityBox: {
        backgroundColor: "#FBFEFF",
        borderTopRightRadius: "2rem",
        borderTopLeftRadius: "2rem",
        display: "flex",
        width: "100%",
        // height: '100%',
        flexDirection: "row",
        minHeight: "75vh",

    },
    formBox: {
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    formBut: {
        padding: "1rem",
        marginLeft: "1rem",
        backgroundColor: "#0085FF",
        color: "#ffffff",
    },
    hrline: {
        width: "10%",
        height: "3%",
        backgroundColor: "#474747",

    }

})

function Home() {

    const classes = useStyles()

    return (
        <div style={{

        }}>
            <div className={classes.cityPage}>
                <div className={classes.formBox}>
                    <h2 >Amigo! We know whats’ right for you check these locations out</h2>
                    <WEBBtn
                        label="Review Form"
                        backgroundColor="#0085FF"
                        height='2rem'
                        borderRadius={10}
                        color="#fff"
                        style={{
                            marginLeft: '1rem',
                            fontSize: '1rem'
                        }}
                    />
                </div>
                <div className={classes.cityBox} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <div style={{
                        width: '10rem',
                        height: '0.3rem',
                        borderRadius: '0.15rem',
                        backgroundColor: '#4A4A4A',
                        marginTop: '1rem'
                    }} />
                    <div style={{
                        marginTop: '2rem'
                    }}>
                        <Grid style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }} container>
                            <Grid item style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Card
                                    title1="ONE FINDS LIMITS"
                                    title2="BY PUSHING THEM"
                                    subTitle1="KEEP UPGRADING YOURSEL, KEEP"
                                    subTitle2="HUSTLING AND FOCUS"
                                    city="Mumbai"
                                    activeGroups={26}
                                />
                            </Grid>
                            <Grid item style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Card
                                    title1="ONE FINDS LIMITS"
                                    title2="BY PUSHING THEM"
                                    subTitle1="KEEP UPGRADING YOURSEL, KEEP"
                                    subTitle2="HUSTLING AND FOCUS"
                                    city="Mumbai"
                                    activeGroups={26}
                                />
                            </Grid>
                            <Grid item style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Card
                                    title1="ONE FINDS LIMITS"
                                    title2="BY PUSHING THEM"
                                    subTitle1="KEEP UPGRADING YOURSEL, KEEP"
                                    subTitle2="HUSTLING AND FOCUS"
                                    city="Mumbai"
                                    activeGroups={26}
                                />
                            </Grid>
                            <Grid item style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Card
                                    title1="ONE FINDS LIMITS"
                                    title2="BY PUSHING THEM"
                                    subTitle1="KEEP UPGRADING YOURSEL, KEEP"
                                    subTitle2="HUSTLING AND FOCUS"
                                    city="Mumbai"
                                    activeGroups={26}
                                />
                            </Grid>
                            <Grid item style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Card
                                    title1="ONE FINDS LIMITS"
                                    title2="BY PUSHING THEM"
                                    subTitle1="KEEP UPGRADING YOURSEL, KEEP"
                                    subTitle2="HUSTLING AND FOCUS"
                                    city="Mumbai"
                                    activeGroups={26}
                                />
                            </Grid>
                            <Grid item style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Card
                                    title1="ONE FINDS LIMITS"
                                    title2="BY PUSHING THEM"
                                    subTitle1="KEEP UPGRADING YOURSEL, KEEP"
                                    subTitle2="HUSTLING AND FOCUS"
                                    city="Mumbai"
                                    activeGroups={26}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Home
