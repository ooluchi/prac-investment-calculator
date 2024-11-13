import { calculateInvestmentResults } from '../util/investment'

export default function Results ({ input }) {
    const resultsData = calculateInvestmentResults(input);
    
    return(
        <table id="results">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th></th>
                </tr>
            </thead>
        </table>
    )
}