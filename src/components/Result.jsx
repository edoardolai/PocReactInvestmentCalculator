import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Result({ input }) {
    const resultData = calculateInvestmentResults(input)
    const initialInvestment = resultData[0].valueEndOfYear -
                    resultData[0].interest -
                    resultData[0].annualInvestment
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((row, rowIndex) => {
                    // <tr key={rowIndex}>
                    //     {Object.values(row).map((col,colIndex) => <td key={colIndex}>{col}</td>)}
                    // </tr>
                    const {valueEndOfYear, annualInvestment, year,interest} = row
                    const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment
                    const totalAmountInvested = valueEndOfYear - totalInterest
                    return <tr key={rowIndex}>
                        <td>{row.year}</td>
                        <td>{formatter.format(valueEndOfYear)}</td>
                        <td>{formatter.format(interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}