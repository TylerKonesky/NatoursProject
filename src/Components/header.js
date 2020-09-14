import React, {Component} from 'react';
import Feather from '../images/feather.svg';

class Header extends Component {
    render(){
        return(
            <header className="header">
                <div className="logo-box">
                    <img className="logo" src={Feather} alt="feather" />    
                </div>

                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Outdoors</span>
                        <span className="heading-primary-sub">is where life happens</span>
                    </h1>

                    <a href="#" className="btn btn-white btn-animated">Discover our tours</a>
                </div>

                
                
            </header>
        )
    }
}

export default Header