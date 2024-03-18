import React, { Component } from 'react';
class Benefit extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className="benefit">
                    <div className="container">
                        <h1 className="abtus text-white">Key Benefits</h1>
                        <div className="row mt-5 d-flex align-items-center">
                            <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
                                <img src="images/benefit1..PNG" alt="feature-img" width="180px" className="img-fluid rounded" />
                                <h3 className="text-white mt-4">24X7 English Tutor</h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
                                <img src="images/benefit2.PNG" alt="feature-img" width="180px" className="img-fluid rounded" />
                                <h3 className="text-white mt-4">Ask Questions Any Time</h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
                                <img src="images/benefit3.PNG" alt="feature-img" width="180px" className="img-fluid rounded" />
                                <h3 className="text-white mt-4">Progress Tracking</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Benefit;