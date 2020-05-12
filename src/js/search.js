export default function findBy(key, text) {
  return (obj) => obj[key] === text;
}
