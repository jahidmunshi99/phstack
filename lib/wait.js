export const wait = async (min) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, min);
  });
};
