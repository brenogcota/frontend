export const calculateCompoundIncome = (principal: number, tax: number, time: number, monthly: number) => {
    const decimalRate = tax / 12 / 100;
    let amount = principal;
    const t = (time / 12)

    for (let i = 0; i < time; i++) {
        amount *= Math.pow(1 + decimalRate, t)
        amount += monthly
    }
    
    return amount;
}