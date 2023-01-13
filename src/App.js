import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import 'react-datepicker/dist/react-datepicker.css';
import { format, startOfDay, subDays } from 'date-fns';
import { useQuery } from 'react-query';
import useWebSocket from 'react-use-websocket';

import Progress from './Progress';
import LineChart from './Chart';
import DatePicker from './DatePicker';
import { wsURL, getReadings, getWarnings, dismissWarning } from './api';
import Switch from './Switch';
import WarningsList from './Warning';
import './App.css';
import R3S from './r3s.jpg';
import Table from './Table';

function removeObjectWithId(arr, id) {
  console.log(arr);
  const objWithIdIndex = arr.findIndex((obj) => obj._id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

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

  const pointTitle = `the average predicted ${
    view === 'growth' ? 'growth rate' : 'leaf area'
  } for ${view === 'growth' ? 'temperature' : 'salinity'}`;

  const queryClient = useQueryClient();

  const deleteWarning = async (id) => {
    await queryClient.cancelQueries('warnings');
    queryClient.setQueryData('warnings', (oldData) => {
      return removeObjectWithId(oldData, id);
    });
  };

  const { data, isLoading, refetch, isError } = useQuery('getReadings', () =>
    getReadings(startDate, endDate)
  );

  const tableData = useQuery('tableData', () =>
    getReadings(subDays(new Date(), 4), startOfDay(new Date()))
  );

  const warnings = useQuery('warnings', getWarnings);

  const dismiss = useMutation(dismissWarning, {
    onMutate: deleteWarning,
  });

  useEffect(() => {
    refetch();
  }, [startDate, endDate, refetch]);

  const { lastJsonMessage } = useWebSocket(wsURL);

  const viewWarning = (start, end, view) => {
    setStartDate(new Date(start));
    setEndDate(new Date(end));
    setView(view === 't' ? 'growth' : 'leaf');
  };

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
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'end',
              display: 'flex',
            }}
          >
            <FiberManualRecordIcon fontSize="15" style={{ color: '#5C1D63' }} />
            <p style={{ fontWeight: 'bold' }}>{pointTitle}</p>
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
          {!warnings.isLoading && (
            <WarningsList
              warnings={warnings.data}
              mutate={dismiss.mutate}
              viewWarning={viewWarning}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
