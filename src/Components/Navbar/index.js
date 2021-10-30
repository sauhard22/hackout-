import React from 'react'
import { AppBar, makeStyles, Typography, Toolbar, TextField, IconButton } from '@material-ui/core'
import '../../Components/GlobalStyles.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useViewport from '../../viewport/useViewport'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';



function Navbar() {

    const [toggle, setToggle] = React.useState(false)

    const { width } = useViewport()

    const useStyles = makeStyles({
        nav: {
            backgroundColor: '#fff',
            boxShadow: "0px 0px 5px #0000003B",
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        },
        subNav: {
            width: '80%'
        },
        navContent: {
            display: 'flex',
            flexDirection: 'row',
            width: '30rem',
            justifyContent: 'space-between'
        },
        navContent2: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center'
        },
        navInput: {
            height: '2rem',
            borderStyle: 'solid',
            borderColor: '#F2F2F2',
            borderWidth: 1,
            borderRadius: '3rem',
            width: '20rem',
            padding: '0.3rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FBB03B',
            marginLeft: '3rem'
        },
        input: {
            height: '1.5rem',
            width: '18rem',
            border: 'none',
            outline: 'none',
            marginLeft: '0.5rem',
            backgroundColor: '#FBB03B',
            color: '#ffffff'
        },
        navInput2: {
            height: '2rem',
            borderStyle: 'solid',
            borderColor: '#F2F2F2',
            borderWidth: 1,
            borderRadius: '3rem',
            width: '15rem',
            padding: '0.3rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FBB03B',
            marginLeft: '3rem'
        },

        input2: {
            height: '1.5rem',
            width: '13rem',
            border: 'none',
            outline: 'none',
            marginLeft: '0.5rem',
            backgroundColor: '#FBB03B',
            color: '#ffffff'
        },
        navProfile2: {
            backgroundColor: "#F7931E",
            height: '2rem',
            padding: '0.3rem',
            borderRadius: '1.5rem',
            marginLeft: '1rem',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
        },
        navProfile: {
            backgroundColor: "#F7931E",
            height: '2rem',
            padding: '0.3rem',
            borderRadius: '1.5rem',
            marginLeft: '3rem',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
        },
    })

    const classes = useStyles()

    return (
        <div>
            <AppBar className={classes.nav} position="static">
                <Toolbar className={classes.subNav}>

                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h1 className="navTitle" style={{ color: '#FBB03B', fontSize: '1rem', lineHeight: '1rem', width: 80 }}>LOREM <span className="navTitle" style={{ color: "#FB553B", fontSize: "1.15rem" }}>ISPUM</span></h1>
                    </div>
                    {width > 1400 ?
                        <React.Fragment>
                            <div className={classes.navContent}>
                                <Typography style={{ color: '#333333', fontFamily: 'poppins' }}>About Us</Typography>
                                <Typography style={{ color: '#333333', fontFamily: 'poppins' }}>Contact Us</Typography>
                                <Typography style={{ color: '#333333', fontFamily: 'poppins' }}>Courses</Typography>
                                <Typography style={{ color: '#333333', fontFamily: 'poppins' }}>Mentors</Typography>
                            </div>
                            <div className={classes.navInput}>
                                <input type="text" className={classes.input} placeholder="Search" />
                                <SearchIcon style={{ color: "#fff" }} />
                            </div>
                            <div className={classes.navProfile}>
                                <PersonOutlineIcon style={{ color: '#fff', width: '1.5rem', height: '1.5rem' }} />
                            </div>
                        </React.Fragment> :
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <IconButton onClick={() => setToggle(!toggle)}>
                                {!toggle ? <MenuIcon style={{
                                    color: "#FBB03B"
                                }} /> : <CloseIcon />
                                }
                            </IconButton>
                            {toggle &&
                                <div style={{
                                    position: 'absolute',
                                    top: width > 600 ? '64px' : '56px',
                                    right: 0,
                                    left: 0,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: '#efefef',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '15rem',
                                    boxShadow: '-1px 55px 59px -44px rgba(0,0,0,0.29)',
                                    borderRadius: '0px 0px 25px 25px'
                                }}>
                                    <div style={{
                                        width: '20rem'
                                    }}>
                                        <div className={classes.navContent2}>
                                            <Typography style={{ color: '#333333', fontFamily: 'poppins', height: '2.5rem' }}>About Us</Typography>
                                            <Typography style={{ color: '#333333', fontFamily: 'poppins', height: '2.5rem' }}>Contact Us</Typography>
                                            <Typography style={{ color: '#333333', fontFamily: 'poppins', height: '2.5rem' }}>Courses</Typography>
                                            <Typography style={{ color: '#333333', fontFamily: 'poppins', height: '2.5rem' }}>Mentors</Typography>
                                        </div>
                                        <div style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div className={classes.navInput2} style={{
                                                marginLeft: 0,
                                            }}>
                                                <input type="text" className={classes.input2} placeholder="Search" />
                                                <SearchIcon style={{ color: "#fff" }} />

                                            </div>
                                            <div className={classes.navProfile} style={{
                                                marginLeft: 0
                                            }}>
                                                <PersonOutlineIcon style={{ color: '#fff', width: '1.5rem', height: '1.5rem', marginLeft: 0 }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
