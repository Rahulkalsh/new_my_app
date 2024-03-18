import React, { Component } from 'react'
class CaseStudy extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className="casestudy">
                    <div className="container mt-5">
                        <h1 className="abtus mt-4">Case Study</h1>
                        <div className="row mt-5 mb-3">
                            <div className="col-md-12">
                                <div id="news-slider" className="owl-carousel">
                                    <div className="">
                                        <div className="col-sm-12 d-flex">
                                            <div className="">
                                                <img src="images/craft.PNG" alt="" className={"card-img-top img-fluid"} />
                                                <div className="card-body">
                                                    <h5 className="card-text">Craft A+ Essays: Elevate your grades with Simply English's
                                                        writing
                                                        expertise.</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="col-sm-12 d-flex">
                                            <div className="">
                                                <img className="card-img-top" src="images/communication.PNG" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5>From Lines of Code to Lines of Communication: Simply English Unleashes Your
                                                        Potentia</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="col-sm-12 d-flex">
                                            <div className="">
                                                <img className="card-img-top" src="images/speak.PNG" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5>Speak with Heart: Simply English—Moms, speaking the language of their
                                                        children with ease
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="col-sm-12 d-flex">
                                            <div className="">
                                                <img className="card-img-top" src="images/powerful.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="">Powerful Vision, Persuasive Words: Simply English for Business
                                                        Leaders.</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default CaseStudy;