import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

function Warning({ data, time }) {
    return (
        <div className='warningControw'>
            <span className='remove'>
                <RemoveIcon sx={{ fontSize: 12, m: "0.5rem" }} />
            </span>
            <div className='warningCont'>
                <div className='title'>
                    <span className='warning'>
                        Warning
                    </span>
                    <div className='secondryTitle'>
                        <small>{time}h ago</small>
                        <span className='close'>
                            <CloseIcon sx={{ fontSize: 18 }} />
                        </span>
                    </div>
                </div>
                <div className='body'>
                    <p>{data}</p>
                    <div className='showData'> <RemoveRedEyeIcon sx={{ mr: "0.5rem" }} /> View Data</div>
                </div>
            </div>

        </div>
    )
}

export default Warning