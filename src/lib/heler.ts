export const getRandomNumber = (min: number, max: number) => {
  if (min >= max) {
    throw new Error('최소값은 최대값보다 작아야 합니다.');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
