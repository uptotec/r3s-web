import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function datePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  disabled,
}) {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="datePicker" onClick={onClick} ref={ref}>
      {value} <ArrowDropDownIcon />
    </button>
  ));

  return (
    <div className="buttons1">
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<CustomInput />}
        dateFormat="d MMM yyyy"
        disabled={disabled}
        todayButton
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
        }}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        customInput={<CustomInput />}
        dateFormat="d MMM yyyy"
        disabled={disabled}
        todayButton
      />
    </div>
  );
}

export default datePicker;
