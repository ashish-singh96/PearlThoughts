import RecurrenceOptions from './RecurrenceOptions';
import Customization from './Customization';
import DateRangePicker from './DateRangePicker';
import DatePickerCalendar from './DatePickerCalendar';

const DatePicker = () => {
  return (
    <div className="p-4 border rounded-md shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Select Recurring Dates</h2>
      <RecurrenceOptions />
      <Customization />
      <DateRangePicker />
      <DatePickerCalendar />
    </div>
  );
};

export default DatePicker;
