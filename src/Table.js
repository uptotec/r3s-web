import React from 'react'

function Table() {
    return (
        <div>
            <table>
                <tr className='coloredAndRounded'>
                    <th className='leftTop'>Firstname</th>
                    <th>Lastname</th>
                    <th className='rightTop'>Firstname</th>
                </tr>
                <tr>
                    <th>Peter</th>
                    <th>Griffin</th>
                    <th>Firstname</th>
                </tr>
                <tr>
                    <th>Lois</th>
                    <th>Griffin</th>
                    <th>Firstname</th>
                </tr>
                <tr >
                    <th >hi</th>
                    <th>Griffin</th>
                    <th >hi</th>
                </tr>
                <tr >
                    <th className='leftBottom'>hi</th>
                    <th>Griffin</th>
                    <th className='rightBottom'>hi</th>
                </tr>
            </table>
        </div>
    )
}

export default Table