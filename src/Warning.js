import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RemoveIcon from '@mui/icons-material/Remove';

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
                    <small>{time}h ago</small>
                </div>
                <div className='body'>
                    {data}
                    <div className='showData'> <RemoveRedEyeIcon sx={{ mr: "0.5rem" }} /> View Data</div>
                </div>
            </div>

        </div>
    )
}

export default Warning