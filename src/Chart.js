import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import ClipLoader from 'react-spinners/ClipLoader';

import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-adapter-date-fns';

Chart.register(ChartDataLabels);

const LineChart = ({ data, type, isLoading }) => {
  const chartRef = useRef();
  const chartData = {
    datasets: [
      {
        data,
        backgroundColor: '#39B897',
        borderColor: '#39B897',
        borderWidth: 4,
        parsing: {
          xAxisKey: 'createdAt',
          yAxisKey: 'temp',
        },
        hidden: type === 't' ? false : true,
      },
      {
        data,
        backgroundColor: '#39B897',
        borderColor: '#39B897',
        borderWidth: 4,
        parsing: {
          xAxisKey: 'createdAt',
          yAxisKey: 'salinity',
        },
        hidden: type === 't' ? true : false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grace: '10%',
        type: 'time',
        grid: {
          display: false,
        },
      },
      y: {
        grace: '5%',
      },
    },
    plugins: {
      datalabels: {
        color: '#5C1D63',
        font: {
          size: 16,
          weight: 'bold',
        },
        align: 'top',
        formatter: function (value, context) {
          return type === 't'
            ? context.chart.data.datasets[0].data[
                context.dataIndex
              ].growthRate.toFixed(2)
            : context.chart.data.datasets[0].data[
                context.dataIndex
              ].leafArea.toFixed(2);
        },
      },
      legend: {
        display: false,
      },
    },
  };

  if (isLoading) return <ClipLoader />;

  return (
    <Line
      data={chartData}
      options={options}
      plugins={[ChartDataLabels]}
      ref={chartRef}
    />
  );
};

export default LineChart;
