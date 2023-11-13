export default function randomArray<T>(array: T[]): T[] {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function getThreeRandomItems<T>(array: T[]) {
  if (array.length < 3) {
    return null;
  }
  const arrayCopy = array.slice();
  const result = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    const selectedItem = arrayCopy.splice(randomIndex, 1)[0];
    result.push(selectedItem);
  }
  return result;
}
