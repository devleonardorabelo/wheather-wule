export const handleTreatDate = (date: string): string => date.slice(11);
export const handleTreatImage = (image: string): string => {
  const re = /64/gi;
  var newImage = image.replace(re, '128');
  return `https://${newImage.slice(2)}`;
};
