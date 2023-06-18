import { currencyFormat } from '@/utils/currency'

describe('Currency Format', () => {
  it('Should work by zero', () => {
    expect(currencyFormat(0)).toEqual('0')
  })

  it('Should work with less than 4 characters', () => {
    expect(currencyFormat(100)).toEqual('100')
  })

  it('Should work with 4 characters', () => {
    expect(currencyFormat(1000)).toEqual('1,000')
  })

  it('Should work with string and 7 characters', () => {
    expect(currencyFormat('1000000')).toEqual('1,000,000')
  })
})
