/* eslint-disable react/prop-types */
import './ResultsTable.css';
import * as Investment from '../../util/investment.js';

function ResultsTable({ investment }) {

    console.log(Investment.calculateInvestmentResults(investment))

    return (
        <table>
            <tbody>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>

                {/* <tr>
                    <td>1</td>
                    <td>$11,800</td>
                    <td>$60</td>
                    <td>$600</td>
                    <td>$11,200</td>
                </tr> */}

{Investment.calculateInvestmentResults(investment).map((arr, index) => {
    const totalInterest = Investment.calculateInvestmentResults(investment)
      .slice(0, index + 1)
      .reduce((sum, data) => sum + data.interest, 0);

    const investedCapital = investment.initialInvestment + arr.annualInvestment * (index + 1);

    return (
      <tr key={arr.year}>
        <td>{arr.year}</td>
        <td>{Investment.formatter.format(arr.valueEndOfYear)}</td>
        <td>{Investment.formatter.format(arr.interest)}</td>
        <td>{Investment.formatter.format(totalInterest)}</td>
        <td>{Investment.formatter.format(investedCapital)}</td>
      </tr>
    );
    })}

            </tbody>
        </table>
    );
}

export default ResultsTable;
