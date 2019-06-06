export default function uid(len?: number) {
  return Math.random().toString(35).substr(2, len || 7)
}