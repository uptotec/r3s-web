import './App.css';
import Warning from './Warning';
import R3S from './r3s.jpg';
import Table from './Table';
import { useEffect, useState } from 'react';
import Progress from './Progress';
import LineChart from './Chart';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from './DatePicker';
import { format, startOfDay, subDays } from 'date-fns';
import { useQuery } from './../node_modules/react-query/es/react/useQuery';
import getReadings, { wsURL } from './api';
import useWebSocket from 'react-use-websocket';
import Switch from './Switch';

function App() {
  const [view, setView] = useState('growth');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const graphTitle = `${
    view === 'growth' ? 'Growth rate' : 'Leaf Area'
  } ${format(new Date(startDate), 'd MMM yyyy')} - ${format(
    new Date(endDate),
    'd MMM yyyy'
  )}`;

  const { data, isLoading, refetch, isError } = useQuery('getReadings', () =>
    getReadings(startDate, endDate)
  );

  const tableData = useQuery('tableData', () =>
    getReadings(subDays(new Date(), 4), startOfDay(new Date()))
  );

  useEffect(() => {
    refetch();
  }, [startDate, endDate, refetch]);

  const { lastJsonMessage } = useWebSocket(wsURL);

  return (
    <div className="col">
      <div className="nav">
        <img className="img" src={R3S} alt="logo" />
        <Switch view={view} setView={setView} />
      </div>
      <div className="row">
        <div className="columnData">
          <div className="titleRow">
            <h1>{graphTitle}</h1>
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              disabled={isLoading}
            />
          </div>
          <div className="chartContainer">
            <LineChart
              type={view === 'growth' ? 't' : 's'}
              data={data}
              isLoading={isLoading || isError}
            />
          </div>
          <div className="columnDataRow">
            <div>
              <h1>Live Readings</h1>
              <div className="rowDonut">
                <Progress
                  type={'t'}
                  value={lastJsonMessage ? lastJsonMessage.temp : 0}
                />
                <Progress
                  type={'s'}
                  value={lastJsonMessage ? lastJsonMessage.salinity : 0}
                />
              </div>
            </div>
            <div>
              <h1>past days</h1>
              <Table data={tableData} />
            </div>
          </div>
        </div>
        <div className="columnAlert">
          <h1>Alerts</h1>
          <Warning
            time={'9'}
            data={
              'The temperature has been in the 28–30-degree range for the last five days. If it lasted for another 9–14 days, the grass will grow at a slower rate of 8.9 - 7.8 mm per week.'
            }
          />
          <Warning
            time={'9'}
            data={
              'The temperature has been in the 28–30-degree range for the last five days. If it lasted for another 9–14 days, the grass will grow at a slower rate of 8.9 - 7.8 mm per week.'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
