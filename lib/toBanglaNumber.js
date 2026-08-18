export const toBanglaNumber = (number) => {
  if (number === null || number === undefined) return "-";

  return String(number).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);
};
