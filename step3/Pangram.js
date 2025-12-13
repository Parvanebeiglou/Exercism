 export const isPangram = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lower = text.toLowerCase();

  for (const letter of alphabet) {
    if (!lower.includes(letter)) {
      return false;
    }
  }

  return true;
};