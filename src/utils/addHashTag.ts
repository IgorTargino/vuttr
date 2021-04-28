export default function addHashTag(element: string) {
  const NewElement = element.split('');
  for (let i = NewElement.length; i >= 0; i -= 1) {
    NewElement[i] = NewElement[i - 1];
  }
  NewElement[0] = '#';

  return NewElement.join('');
}
