import useDatePickerStore from "./store";

const RecurrenceOptions = () => {
  const { recurrencePattern, setRecurrencePattern } = useDatePickerStore();

  return (
    <div className="flex space-x-2 mb-4">
      {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((pattern) => (
        <button
          key={pattern}
          className={`px-4 py-2 rounded ${recurrencePattern === pattern.toLowerCase() ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setRecurrencePattern(pattern.toLowerCase())}
        >
          {pattern}
        </button>
      ))}
    </div>
  );
};

export default RecurrenceOptions;
