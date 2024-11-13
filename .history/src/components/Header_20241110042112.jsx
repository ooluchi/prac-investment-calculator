import logo from "../assets/investment-calculator-logo.png"

export default function Header() {
    return (
        <div>
        <img src={logo} alt="money-bag-image" />
        <h1>React Investment Calculator</h1>
        </div>
    )
}