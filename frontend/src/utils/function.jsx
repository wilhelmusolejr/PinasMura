export function stringCutter(str, maxLength = 30) {
  // If the string is longer than 30 characters, cut it and add "..."
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }

  return str;
}
