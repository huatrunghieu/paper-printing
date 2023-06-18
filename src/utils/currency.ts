
const reverse = (str: string) => {
  return str.split('').reverse().join('')
}

const currencyFormat = (amount: string | number) => {
  const amountStr = (amount || 0) + ''
  const reverseStr = reverse(amountStr)
  const subStringsEachThreeChars = (reverseStr.match(/.{1,3}/g) || []).reverse()

  return subStringsEachThreeChars.map(str => reverse(str)).join(',')
}

export { currencyFormat }
