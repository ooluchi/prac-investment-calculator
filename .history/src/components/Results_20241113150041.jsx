import { calculateInvestmentResults } from '../util/investment'

export default function Results ({ input }) {
    const resultsData = calculateInvestmentResults(input);
    
    return(
        <table id="results">
            <thead>
                <tr>
                    <th>Y</th>
                </tr>
            </thead>
        </table>
    )
}