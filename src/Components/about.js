import React, {Component} from 'react';
import Pine from '../images/pine.jpg';
import Snow from '../images/snow.jpg';
import Fall from '../images/fall.jpg';

class About extends Component{
    render(){
        return(
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-large">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature!</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href="" className="btn-text">Learn More &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={Pine} alt="Pine Tree" className="photo p1"></img>
                            <img src={Snow} alt="Snowy Mountains" className="photo p2"></img>
                            <img src={Fall} alt="Fall Forest" className="photo p3"></img>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default About