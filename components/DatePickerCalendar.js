import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import useDatePickerStore from './store';

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const addMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

const addYears = (date, years) => {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
};

const DatePickerCalendar = () => {
  const { startDate, endDate, recurrencePattern, customRecurrence } = useDatePickerStore();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const calculateDates = () => {
      const start = new Date(startDate);
      const end = endDate ? new Date(endDate) : null;
      let current = start;
      const recurringDates = [];

      switch (recurrencePattern) {
        case 'daily': {
          const interval = customRecurrence.interval || 1; 
          while (!end || current <= end) {
            recurringDates.push(new Date(current));
            current = addDays(current, interval);
          }
          break;
        }
        case 'weekly': {
          const daysOfWeek = customRecurrence.days || []; // array of [0(Sunday) to 6(Saturday)]
          const interval = customRecurrence.interval || 1; // every X weeks
          while (!end || current <= end) {
            if (daysOfWeek.includes(current.getDay())) {
              recurringDates.push(new Date(current));
            }
            current = addDays(current, 1);
            if (current.getDay() === 0 && daysOfWeek.includes(0)) {
              current = addDays(current, (interval - 1) * 7);
            }
          }
          break;
        }
        case 'monthly': {
          const dayOfMonth = customRecurrence.day || start.getDate(); // e.g., 2nd day of the month
          const interval = customRecurrence.interval || 1; // every X months
          while (!end || current <= end) {
            current.setDate(dayOfMonth);
            recurringDates.push(new Date(current));
            current = addMonths(current, interval);
          }
          break;
        }
        case 'yearly': {
          const dayOfMonth = customRecurrence.day || start.getDate(); // e.g., 2nd day of a specific month
          const month = customRecurrence.month || start.getMonth(); // e.g., 5th month (June)
          const interval = customRecurrence.interval || 1; // every X years
          while (!end || current <= end) {
            current.setMonth(month);
            current.setDate(dayOfMonth);
            recurringDates.push(new Date(current));
            current = addYears(current, interval);
          }
          break;
        }
        default:
          break;
      }

      setDates(recurringDates);
    };

    if (startDate) {
      calculateDates();
    }
  }, [startDate, endDate, recurrencePattern, customRecurrence]);

  return <Calendar value={dates.length ? dates : [new Date(startDate)]} />;
};

export default DatePickerCalendar;
