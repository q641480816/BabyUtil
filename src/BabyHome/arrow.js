import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import './babyHome.css';

const styles = {
    disabled: { border: '3px solid #B2B2B2', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'},
    enabled: { border: '3px solid #FFC85D', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', cursor: 'pointer' }
}

function Arrow(props) {
    if (props.direction === 'right') {
        return (
            <div>
                <div style={props.disabled ? styles.disabled : styles.enabled}>
                    <ArrowForwardIosIcon style={props.disabled ? { fill: '#B2B2B2', fontSize: '30px' } : { fill: '#FFC85D', fontSize: '30px' }} />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div style={props.disabled ? styles.disabled : styles.enabled}>
                    <ArrowBackIosNewIcon style={props.disabled ? { fill: '#B2B2B2', fontSize: '30px' } : { fill: '#FFC85D', fontSize: '30px' }} />
                </div>
            </div>
        )
    }
}

export default Arrow;