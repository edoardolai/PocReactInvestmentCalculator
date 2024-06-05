export default function UserInput({userInput, onChange,}){

    const {initialInvestment,annualInvestment,expectedReturn,duration} = userInput
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input onChange={(event) => onChange('initialInvestment', event.target.value)} value={initialInvestment} type="number" />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input onChange={(event) => onChange('annualInvestment', event.target.value)} value={annualInvestment} type="number" />
                </p>
                <p>
                    <label>Expected Return</label>
                    <input onChange={(event) => onChange('expectedReturn', event.target.value)} value={expectedReturn} type="number" />
                </p>
                <p>
                    <label>Duration</label>
                    <input onChange={(event) => onChange('duration', event.target.value)} value={duration} type="number" />
                </p>
            </div>
        </section>
    )
}