export const getLocalStorage = (key) => {
  const getValueLocal = localStorage.getItem(key);
  return getValueLocal !== null ? JSON.parse(getValueLocal) : undefined;
};

export const setLocalStorage = (key, value) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
