import { useState } from "react"

export default function UserInput() {

    const [] = useState ({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        
    })
    return (
        <section id="user-input">
            <div class="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required/> 
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required/> 
                </p>
            </div>
            <div class="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required/> 
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required/> 
                </p>
            </div>
        </section>
    )
}