import * as yup from 'yup';

export const makeReadableDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

export const getEvents = async () => {
  const URL = 'https://next-js-f6bc0-default-rtdb.europe-west1.firebasedatabase.app/events.json';
  const res = await fetch(URL);
  const data = await res.json();
  const events = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
  return events;
};

export const getFilteredEvents = async (year, month) => {
  const events = await getEvents();
  return events.filter(({ date }) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;
    return currentYear === Number(year) && currentMonth === Number(month);
  });
};

export const getEventById = async (eventId) => {
  const events = await getEvents();
  return events.find(({ id }) => id === eventId);
};

export const validation = async (data) => {
  const schema = yup.object().shape({
    email: yup.string().email().required()
  });

  try {
    await schema.validate({ email: data }, { abortEarly: false });
    return { isValid: true, errors: null };
  } catch (error) {
    const { errors } = error;
    return { isValid: false, errors };
  }
};
