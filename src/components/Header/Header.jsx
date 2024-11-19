import logo from '../../assets/investment-calculator-logo.png';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="logo" className="header__logo" />
            <h1 className="header__title">Investment Calculator</h1>
        </header>
    );
}

export default Header;
