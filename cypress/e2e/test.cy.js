import { firstFunction, secondFunction } from '../../index'

describe('firstFunction', () => {
  it('adds two numbers', () => {
    expect(firstFunction(1, 2)).to.eq(3)
  })

  it('adds two strings', () => {
    expect(firstFunction('1', '2')).to.eq('12')
  })
})

describe('secondFunction', () => {
  it('Subtract two numbers', () => {
    expect(secondFunction(3, 1)).to.eq(2)
  })

  it('Subtract two strings', () => {
    expect(secondFunction('1', '2')).to.eq(-1)
  })
})