import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

function Progress({ type, value }) {
  const unit = type === 't' ? '°C' : 'PPT';
  const name = type === 't' ? 'Temp' : 'Salinity';

  return (
    <div style={{ width: 200, height: 200, marginRight: 60 }}>
      <CircularProgressbarWithChildren
        maxValue={type === 't' ? 100 : 200}
        value={value}
        text={`${value.toFixed(1)}${unit}`}
        strokeWidth={14}
        styles={{
          trail: {
            stroke: '#16202B',
          },
          path: {
            stroke: '#39B897',
            strokeLinecap: 'butt',
          },
          text: {
            fontWeight: 'bold',
            fill: '#16202B',
            fontSize: 16,
          },
        }}
      >
        <p
          style={{
            marginTop: '5rem',
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          {name}
        </p>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default Progress;
