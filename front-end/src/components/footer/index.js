import React, {Component} from 'react';
import './styles.css';

class Footer extends Component {
    render() {
        return (
            <footer className="pt-3 my-md-3 pt-md-3">
                <div className="row" style={{'margin': 0}}>
                    <div className="col-3 col-md">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Android app</a></li>
                            <li><a className="text-muted" href="#">IOS app</a></li>
                        </ul>
                    </div>
                    <div className="col-3 col-md">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Team</a></li>
                            <li><a className="text-muted" href="#">Locations</a></li>
                            <li><a className="text-muted" href="#">Privacy</a></li>
                            <li><a className="text-muted" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
                © 2017-2018
            </footer>
        );
    }
}

export default Footer;
