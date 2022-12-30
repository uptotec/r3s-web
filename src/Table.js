import React from 'react'


function Table({ data }) {
    return (
        <table>
            <tr className='coloredAndRounded'>
                <th className='leftTop'>Temperature</th>
                <th>Salinity</th>
                <th className='rightTop'>day</th>
            </tr>
            {data.map((index) => (
                <tr>
                    <th>{index.temperature}</th>
                    <th>{index.salinity}</th>
                    <th>{index.day}</th>
                </tr>
            ))}
        </table>
    )
}

export default Table