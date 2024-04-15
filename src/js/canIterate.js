export default function canIterate(data) {
  if (Symbol.iterator in Object(data)) {
    return true;
  } else {
    return false;
  }
}