import { format } from 'date-fns';
import React from 'react';

function Table({ data }) {
  if (data.isLoading) return <p>loading</p>;
  return (
    <table className="pastTable">
      <tbody>
        <tr className="coloredAndRounded">
          <th className="leftTop">Temperature</th>
          <th>Salinity</th>
          <th className="rightTop">day</th>
        </tr>
      </tbody>
      {data.data.map((index) => (
        <tbody key={Math.random()}>
          <tr>
            <th>{index.temp.toFixed(2)}</th>
            <th>{index.salinity.toFixed(2)}</th>
            <th>{format(new Date(index.createdAt), 'd MMM yyyy')}</th>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;
