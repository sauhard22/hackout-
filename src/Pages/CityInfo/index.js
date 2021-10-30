import {
    Grid,
    Grow,
    makeStyles,
    Breadcrumbs,
    Typography,
} from "@material-ui/core";
import React from "react";
import CityInfoBox from "../../Components/CityInfoBox";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import WEBBtn from '../../Components/WEBBtn';
import calendar from '../../Assets/calendar.svg'
import group from '../../Assets/group.svg'


const useStyles = makeStyles({
    cityPage: {
        // backgroundColor: "#B9FFA0",
        minHeight: "100vh",
        // width: "100vw",
    },
    headBox: {
        // height: "15vh",
        // border: "1px solid #000000",
        // borderRadius: "10px",
        width: '26rem',
        marginLeft: "7vw",
        margin: "1rem",
    },
    imgcont: {
        display: "flex",
        height: "40vh",
        width: "100%",
        justifyContent: "center",
    },

    i1: {
        height: "100%",
        width: "30%",
        backgroundImage: `url("https://source.unsplash.com/1600x1200/?city ")`,
        margin: "0 0.7rem",
        borderRadius: "10px",
    },

    i2_i3: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "17%",
        justifyContent: "space-between",
        alignItems: "flexEnd",
        margin: "0 0.7rem",
    },

    i2: {
        height: "47%",
        width: "100%",
        backgroundColor: "#B9FFA0",
        borderRadius: "10px",
        backgroundImage: `url("https://source.unsplash.com/1600x1200/?plant ")`,
    },

    i3: {
        height: "47%",
        width: "100%",
        backgroundColor: "#B9FFA0",
        borderRadius: "10px",
        backgroundImage: `url("https://source.unsplash.com/1600x1200/?nature ")`,
    },

    i4: {
        height: "100%",
        width: "35%",
        backgroundColor: "#B9FFA0",
        margin: "0 0.7rem",
        borderRadius: "10px",
        backgroundImage: `url("https://source.unsplash.com/1600x1200/?people ")`,
    },

    contentBox: {
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "2rem",
    },
    leftBox: {
        width: "49%",
        height: "20rem",
        backgroundColor: "#D5E0FF",
        marginRight: "0.7rem",
        borderRadius: "10px",
    },
    rightBox: {
        width: "36%",
        height: "20rem",
        // backgroundColor: "#B9FFA0",
        marginLeft: "0.7rem",
        borderRadius: "10px",
    },
    exploreBox: {
        width: "100%",
        height: "20%",
        backgroundColor: "#D5E0FF",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "7px",

    }
});

function City() {
    const classes = useStyles();

    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }

    return (
        <>
            <div className={classes.cityPage}>
                <div className={classes.headBox}>
                    <div>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            <Link style={{
                                color: "#0085FF",
                                fontSize: '1.5rem',
                                fontWeight: 500
                            }} href="/" onClick={handleClick}>
                                Recommended cities
                            </Link>
                            <Typography style={{
                                fontSize: '1.5rem'
                            }} color="textPrimary">Nanded, India</Typography>
                        </Breadcrumbs>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: ' row',
                            alignItems: 'center'
                        }}>
                            <img style={{
                                width: '0.8rem'
                            }} src={calendar} alt="calendar" />
                            <Typography style={{
                                fontSize: '0.8rem',
                                lineHeight: '0.8rem',
                                marginLeft: '0.5rem',
                                marginTop: 1
                            }}>5 August 2021 <span>to</span> 12 November 2021</Typography>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: ' row',
                            alignItems: 'center'
                        }}>
                            <img style={{
                                width: '0.8rem'
                            }} src={group} alt="group" />
                            <Typography style={{
                                fontSize: '0.8rem',
                                lineHeight: '0.8rem',
                                marginLeft: '0.5rem',
                                marginTop: 1
                            }}>21 Active Groups</Typography>
                        </div>
                    </div>
                </div>

                <div className={classes.imgcont}>
                    <div className={classes.i1}></div>
                    <div className={classes.i2_i3}>
                        <div className={classes.i2}></div>
                        <div className={classes.i3}></div>
                    </div>
                    <div className={classes.i4}></div>
                </div>
                <div className={classes.contentBox}>
                    <div className={classes.leftBox}>
                        <CityInfoBox />
                    </div>
                    <div className={classes.rightBox}>
                        <div className={classes.exploreBox}>
                            <h3>New city ! New people to meet :)</h3>
                            <WEBBtn
                                label="Explore"
                                backgroundColor="#0085FF"
                                height='2rem'
                                borderRadius={7}
                                color="#fff"
                                style={{
                                    marginLeft: '1rem',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default City;
