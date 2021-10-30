import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import nav from '../../Assets/navigation.svg'


const useStyles = makeStyles({

    city_ib: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: '#fff'
    },

    city_ibnav: {
        display: "flex",
        flexDirection: "row",
        marginTop: "0",
        backgroundColor: "#fff",
        width: "100%",
        height: "20%",
        color: "#fff",
        fontSize: "1.3rem",
        borderTopRightRadius: '1rem',
        borderTopLeftRadius: '1rem',
        boxShadow: '-5px 8px 21px rgba(0, 0, 0, 0.09)',
    },
    textbox: {
        width: "90%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
    },
    on: {
        border: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: '0.5rem',
        width: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

})


function CityInfoBox() {

    const [toggle, setToggle] = React.useState(true)

    const classes = useStyles()
    return (
        <div className={classes.city_ib}>
            <div className={classes.city_ibnav}>
                <Typography style={{
                    color: '#000',
                    margin: '1rem 1rem',
                    cursor: 'pointer',
                    width: '5rem',
                }} className={toggle ? classes.on : null} onClick={() => setToggle(true)}>
                    About</Typography>
                <Typography style={{
                    color: '#000',
                    margin: '1rem 1rem',
                    cursor: 'pointer',
                    width: '5rem',
                }} className={!toggle ? classes.on : null} onClick={() => setToggle(false)}>Event</Typography>
            </div>
            <div className={classes.textbox}>
                {!toggle &&
                    <div style={{
                        width: '90%',
                        backgroundColor: '#efefef',
                        padding: '1rem',
                        borderRadius: '1rem'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Typography>November 01, 2021</Typography>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img src={nav} alt="nav" />
                                <Typography style={{
                                    lineHeight: '1rem',
                                    marginLeft: '0.2rem'
                                }}>Viraj Nagar</Typography>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <Typography>Trekking Event</Typography>
                            <div style={{
                                backgroundColor: '#ACFFAA',
                                width: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10rem',
                                padding: '0.2rem',
                                marginLeft: '1rem'
                            }}>
                                <Typography style={{
                                    fontSize: '0.8rem',
                                    color: '#027B00'
                                }}>2 days</Typography>
                            </div>
                        </div>
                        <div style={{
                            marginTop: '0.5rem'
                        }}>
                            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida odio purus nec lectus aliquet. Quam sapien, mus in velit non. Tortor tellus vitae rutrum.</Typography>
                        </div>
                    </div>}
                {toggle &&
                    <div>
                        <Typography>
                            About
                        </Typography>
                    </div>}
            </div>
        </div>
    )
}

export default CityInfoBox;
