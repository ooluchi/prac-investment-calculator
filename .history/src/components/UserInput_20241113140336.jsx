
export default function UserInput ( onChange ) {
    

    

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) =>
                            onChange("initialInvestment", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) =>
                            onChange("annualInvestment", event.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) =>
                            function handleChange(inputIdentifier, newValue) {
        setUserInput((previousInput) => ({
            ...previousInput,
            [inputIdentifier]: newValue,
        }));
    }("expectedReturn", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => handleChange("duration", event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}
