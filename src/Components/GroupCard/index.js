import React from 'react'
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    card:{
        width: '100%',
        height: '4rem',
        backgroundColor: '#E5E5E5;',
        display: 'flex',
        alignItems: 'center',
        margin: '0.5rem 0',
    },
    pimages:{
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        backgroundColor: '#000',
        marginLeft:"1.5rem",

    },
    text:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft:"1rem",

    },
    gname: {
        margin: '0.1rem',
    },
    gdesc: {
        margin: '0.1rem',
        fontSize: '0.9rem',
    },
    row1: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    tags: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft:"1rem",
        alignItems: "center",

    },
    tag1:{
        backgroundColor: '#FFAAAA',
        margin: ' 0 0.5rem',
        color: '#7B0000',
        borderRadius: "5px",
        padding: '3px',

    },
    tag2:{
        backgroundColor: '#ACFFAA',
        margin: '0 0.5rem',
        color: "#027B00",
        borderRadius: "5px",
        padding: '3px',
    }
})


function GroupCard() {

    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div className={classes.pimages}></div>
            <div className={classes.text}>
                <div className={classes.row1}>
                    <h4 className={classes.gname}>The Wolf Pack</h4>
                    <div className={classes.tags}>
                        <p className={classes.tag1}>trekking</p>
                        <p className={classes.tag2}>trekking</p>
                    </div>
                </div>
                
                <p className={classes.gdesc}>We the glourious Trekers</p>
            </div>

        </div>
    )
}

export default GroupCard
