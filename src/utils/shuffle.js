export const shuffle = (arr, length) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, length);
};
