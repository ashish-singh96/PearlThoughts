import useDatePickerStore from './store';

const Customization = () => {
  const { recurrencePattern, customRecurrence, setCustomRecurrence } = useDatePickerStore();

  const handleChange = (e) => {
    setCustomRecurrence({ ...customRecurrence, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-4">
      {recurrencePattern === 'weekly' && (
        <div>
          <label>Select Days: </label>
          <select multiple name="days" onChange={handleChange} className="ml-2 p-2 border rounded">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Customization;
