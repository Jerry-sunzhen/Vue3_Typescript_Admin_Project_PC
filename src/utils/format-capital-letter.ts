export default function formatCapitalLetter(word: string): string {
  return word.substr(0, 1).toUpperCase() + word.substr(1)
}
