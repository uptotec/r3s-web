import './App.css';
import Warning from './Warning';
import R3S from "./r3s.jpg"
import Table from './Table';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
function App() {
  const [active, setActive] = useState("growth")
  return (
    <div className="col">
      <div className='nav'>
        <img className='img' src={R3S} />
        <div className='buttons'>
          <button value="growth" onClick={(e) => setActive(e.target.value)} className={active === "growth" ? "active" : null}>Growth rate</button>
          <button value="leaf" onClick={(e) => setActive(e.target.value)} className={active === "leaf" ? "active" : null}>Leaf Area</button>
        </div>
        {console.log(active)}
      </div>
      <div className='row'>
        <div className="columnData">
          {active === "growth" ?
            <div className='titleRow'>
              <h1>Growth rate 7 Dec 2022</h1>
              <div className='buttons1'>
                from:
                <div>7 Dec 2022 <ArrowDropDownIcon /></div>
                to:
                <div>7 Dec 2022 <ArrowDropDownIcon /></div>
              </div>
            </div> : <div className='titleRow'>
              <h1>Leaf Area 7 Dec 2022</h1>
              <div className='buttons1'>
                from:
                <div>7 Dec 2022 <ArrowDropDownIcon /></div>
                to:
                <div>7 Dec 2022 <ArrowDropDownIcon /></div>
              </div>
            </div>
          }
          <div className='columnDataRow'>
            <div>
              <h1>Live Readings</h1>
            </div>
            <div>
              <h1>past days</h1>
              <Table />
            </div>
          </div>
        </div>
        <div className="columnAlert">
          <h1>Alert</h1>
          <Warning time={"9"} data={"The temperature has been in the 28–30-degree range for the last five days. If it lasted for another 9–14 days, the grass will grow at a slower rate of 8.9 - 7.8 mm per week."} />
          <Warning time={"9"} data={"The temperature has been in the 28–30-degree range for the last five days. If it lasted for another 9–14 days, the grass will grow at a slower rate of 8.9 - 7.8 mm per week."} />
        </div>
      </div>
    </div>
  );
}

export default App;
