import create from 'zustand';

const useDatePickerStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrencePattern: 'daily',
  customRecurrence: {},
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setCustomRecurrence: (custom) => set({ customRecurrence: custom }),
}));

export default useDatePickerStore;
