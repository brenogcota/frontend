export const calculateCompoundIncome = (principal: number, tax: number, time: number, monthly: number) => {
    const decimalRate = tax / 12 / 100;
    let amount = principal;

    for (let i = 0; i < time; i++) {
        amount *= (1 + decimalRate);
        amount += monthly;
    }
    
    return amount;
}
