import React from 'react'
import { Paper, Typography } from '@material-ui/core'

function Card({ title1, title2,subTitle1, subTitle2,city , activeGroups}) {
    return (
        <div style={{
            margin: '1rem',
        }}>
            <Paper elevation={10} style={{
                width: '18rem',
                height: '18rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '1.5rem'
            }}>
                <Typography style={{
                    textAlign: 'center',
                    letterSpacing: 5
                }}>{title1}<br /> {title2}</Typography>
                <Typography style={{
                    textAlign: 'center',
                    fontSize: '0.5rem',
                    marginTop: '0.8rem'
                }}>{subTitle1}<br /> {subTitle2}</Typography>
            </Paper>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginLeft: '1rem',
                marginRight: '1rem',
                marginTop: '0.5rem'
            }}>
                <Typography style={{
                    fontSize: '1.5rem'
                }}>{city}</Typography>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Typography style={{
                        fontSize: '1.5rem'
                    }}>{activeGroups}</Typography>
                    <div style={{
                        width: '1rem',
                        height: '1rem',
                        backgroundColor: '#05E800',
                        borderRadius: '0.75rem',
                        marginLeft: '0.2rem'
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Card
