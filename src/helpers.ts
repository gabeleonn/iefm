export function isObjectEmpty(obj: any) {
  if (!obj) return true;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}
