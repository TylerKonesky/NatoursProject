import React, {Component} from 'react';

class About extends Component{
    render(){
        return(
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-8">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        Text Content
                    </div>
                    <div className="col-1-of-2">
                        Image Comp
                    </div>
                </div>
                
            </section>
        )
    }
}

export default About