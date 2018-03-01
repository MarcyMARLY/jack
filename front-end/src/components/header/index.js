import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import Registration from '../registration/RegistrationModal'
import Login from '../Login/LoginModal'

class Header extends React.Component {



    render () {
        return (

          <div class = "main">
            <div className="navigation-container">
                <nav className="navbar navbar-expand-lg navigation-container">
                                    <h3 class="masthead-brand-jack">JACK</h3>
                    <div className="collapse navbar-collapse justify-content-end navigation-container" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Organization</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Help</a>
                            </li>
                            <li className="nav-item" onClick = {this.props.onRegistrationOpen}>
                                <a className="nav-link btn-like" href="#">Registration</a>
                            </li>
                            <li className="nav-item" onClick = {this.props.onLoginOpen}>
                                <a className="nav-link btn-like" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
          </div>
        )
    }
}

export default Header
