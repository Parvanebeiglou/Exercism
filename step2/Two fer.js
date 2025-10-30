export const twoFer = (name) => {
  if (name === '' || name === undefined) {
    return 'One for you, one for me.';
  } else {
    return `One for ${name}, one for me.`;
  }
};