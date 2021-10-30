import React from 'react'
import { makeStyles } from '@material-ui/core'

function WEBBtn(props) {

    const { backgroundColor, height, borderRadius, color, style, label } = props

    const useStyles = makeStyles({
        button: {
            backgroundColor: backgroundColor,
            padding: 10,
            border: 'none',
            cursor: 'pointer',
            height: height,
            borderRadius: borderRadius,
            color: color,
            fontFamily: 'poppins',
            fontWeight: 500,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            whiteSpace: 'nowrap'
        }
    })

    const classes = useStyles()

    return (
        <div style={{
            marginLeft: '0.5rem',
            marginRight: '0.5rem'
        }}>
            <button className={classes.button} style={style}>
                {label}
            </button>
        </div>
    )
}

export default WEBBtn
