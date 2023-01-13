import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { formatDistance } from 'date-fns';

const messageGrowth = (range) =>
  `The temperature has been in the ${range[0].toFixed(2)} – ${range[1].toFixed(
    2
  )}-degree range for the last five days. If it lasted for another 9 - 14 days, the grass will grow at a slower rate of ${range[2].toFixed(
    2
  )} – ${range[3].toFixed(2)} mm per week.`;

const messageArea = (range) =>
  `Salinity is above ${range[0].toFixed(
    2
  )} (ppt, psu). If the salinity continued for 21- 30 days, the leaf area will decrease to ${range[2].toFixed(
    2
  )} cm^2.`;

function Warning({ type, date, range, days, viewWarning, id, mutate }) {
  const timeAgo = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="warningControw">
      <span className="remove">
        <RemoveIcon sx={{ fontSize: 12, m: '0.5rem' }} />
      </span>
      <div className="warningCont">
        <div className="title">
          <span className="warning">Warning</span>
          <div className="secondryTitle">
            <small>{timeAgo}</small>
            <span className="close" onClick={() => mutate(id)}>
              <CloseIcon sx={{ fontSize: 18 }} />
            </span>
          </div>
        </div>
        <div className="body">
          <p>{type === 't' ? messageGrowth(range) : messageArea(range)}</p>
          <button
            className="showData"
            onClick={() => viewWarning(days[0], days[1], type)}
          >
            {' '}
            <RemoveRedEyeIcon sx={{ mr: '0.5rem' }} /> View Data
          </button>
        </div>
      </div>
    </div>
  );
}

const WarningsList = ({ warnings, viewWarning, mutate }) => {
  if (warnings.length === 0) return <p>no warnings</p>;
  return warnings.map((warning) => (
    <Warning
      type={warning.type}
      date={warning.createdAt}
      range={warning.range}
      key={warning._id}
      id={warning._id}
      days={warning.days}
      viewWarning={viewWarning}
      mutate={mutate}
    />
  ));
};

export default WarningsList;
