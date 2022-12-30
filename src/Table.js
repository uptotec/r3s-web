import React from 'react'


function Table({ temperature, salinity, day }) {
    return (
        <div>
            <table>
                <tr className='coloredAndRounded'>
                    <th className='leftTop'>Temperature</th>
                    <th>Salinity</th>
                    <th className='rightTop'>day</th>
                </tr>

                {/* {temperature.map((index) => (
                    <tr>
                        <th>{index}</th>
                    </tr>
                ))} */}

                <tr>
                    <th>{temperature}</th>
                </tr>

                {/* {salinity.map((index) => (
                    <tr>
                        <th>{index}</th>
                    </tr>
                ))} */}

                <tr>
                    <th>{salinity}</th>
                </tr>


                {/* {day.map((index) => (
                    <tr>
                        <th>{index}</th>
                    </tr>
                ))} */}

                <tr>
                    <th>{day}</th>
                </tr>

            </table>
        </div>
    )
}

export default Table