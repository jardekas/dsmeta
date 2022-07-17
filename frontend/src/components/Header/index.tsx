import logo from '../../assets/img/logo.svg';

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DsMeta</h1>
                    <p>
                        <a href="https://github.com/jardekas">Jardel Medeiros</a>
                    </p>
            </div>
        </header>
    )

}

export default Header
