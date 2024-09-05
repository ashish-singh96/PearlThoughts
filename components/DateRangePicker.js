import useDatePickerStore from './store';

const DateRangePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDatePickerStore();

  return (
    <div className="flex space-x-4 mb-4">
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate || ''} onChange={(e) => setStartDate(e.target.value)} className="ml-2 p-2 border rounded" />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" value={endDate || ''} onChange={(e) => setEndDate(e.target.value)} className="ml-2 p-2 border rounded" />
      </div>
    </div>
  );
};

export default DateRangePicker;
