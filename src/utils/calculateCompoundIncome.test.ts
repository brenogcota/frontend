import { expect, test } from 'vitest'
import { calculateCompoundIncome } from './calculateCompoundIncome'
import { TAX_ARCA, TAX_SELIC } from '../config/constants'

test('should return an income', () => {
  const initalInvestment = 200
  const investmentTimeMonth = 24
  const monthlyInvestment = 200
  expect(calculateCompoundIncome(initalInvestment, TAX_SELIC, investmentTimeMonth, monthlyInvestment).toFixed(2)).toBe('6048.76')
  expect(calculateCompoundIncome(initalInvestment, TAX_ARCA, investmentTimeMonth, monthlyInvestment).toFixed(2)).toBe('7313.43')
})