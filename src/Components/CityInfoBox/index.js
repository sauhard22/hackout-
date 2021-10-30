import React from 'react'
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({

    city_ib : {
        display:"flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
    },

    city_ibnav: {
        display: "flex",
        flexDirection:"row",
        marginTop: "0",
        backgroundColor: "#000",
        width:"100%",
        height: "20%",
        color: "#fff",
        fontSize: "1.3rem",
    },
    textbox:{
        width: "90%",
    }
    
})


function CityInfoBox() {
    const classes = useStyles()
    return (
        <div className={classes.city_ib}>
            <div className={classes.city_ibnav}>
                <p style={{margin:"1rem", backgroundColor:"#fff", color:"rgba(0, 133, 255, 1)",padding:"0.25rem 0.4rem 0.25rem 0.4rem",
                           border: "0.3px solid #000",borderRadius: "5px",
                }}>
                    About</p>
                <p style={{margin:"1.3rem",
                }}>Event</p>
            </div>
            <div className={classes.textbox}>
                <h4>Info</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pulvinar proin magna ullamcorper posuere augue lacus. Aliquet tortor aliquam sed porttitor auctor vitae aliquet orci ut. At mauris, mattis sit imperdiet maecenas ullamcorper luctus. Amet nulla facilisis aliquet habitasse nascetur. Sed suspendisse lorem tristique accumsan euismod ut risus, gravida. Tempus convallis vestibulum, orci morbi magna sagittis, pretium tortor. Rhoncus quam enim tempus, nisi ornare. Donec egestas sit at nulla. In bibendum cursus porta interdum orci. Aliquam purus purus, elit eget ornare </p>
            </div>
        </div>
    )
}

export default CityInfoBox;
