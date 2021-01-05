import React from "react";
import "../App.css";
//import "../port.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Here Are a Few Website I have Created
                    </h3>
                    </div>
                    <div className="pictures">
                     <div class="container-fluid"> 
                        <div class="row">

                            <div className="col-md-4">
                                <a href="https://pabloivanjuarez.github.io/project1_week7-8/">
                                    <img src="https://raw.githubusercontent.com/pabloivanjuarez/project1_week7-8/master/assets/images/example1.png"
                                        className="card-img-top" alt="img-one" /></a>
                                <p className="card-text">Project 1:Adventure Builders</p>
                            </div>

                            <div className="col-md-4">
                                <a href="https://project-2-fsbc.herokuapp.com/">
                                    <img src="https://raw.githubusercontent.com/dannyhoover/Project-2/main/picture/pexels-ella-olsson-1640773.jpg"
                                        className="card-img-top" alt="img-one" /></a>
                                <p className="card-text">Project 2: What's In Your Pantry</p>
                            </div>

                            <div className="col-md-4">
                                <a href="https://github.com/AndyMMunro/ShirtsAnMore.io">
                                    <img src="https://raw.githubusercontent.com/AndyMMunro/ShirtsAnMore.io/main/client/public/images/shopping1.jpg"
                                        className="card-img-top" alt="img-one" /></a>
                                <p className="card-text">Project 3: ShirtsAnMore</p>
                            </div>
                          </div>
                        </div> 

                        <div class="container-fluid"> 
                        <div class="row">

                            <div className="col-md-4">
                                <a href="https://github.com/dmagana1/Day_Planner">
                                    <img src="https://raw.githubusercontent.com/dmagana1/Day_Planner/master/Pictures/pic2.JPG"
                                        className="card-img-top" alt="img-one" /></a>
                                <p className="card-text">Work Day Planner</p>
                            </div>

                            <div className="col-md-4">
                                <a href="https://dmagana1.github.io/Weather-Dashboard/">
                                    <img src="https://raw.githubusercontent.com/dmagana1/Weather-Dashboard/master/Assets/06-server-side-apis-homework-demo.png"
                                        className="card-img-top" alt="img-one" /></a>
                                <p className="card-text">Weather Dashboard</p>
                            </div>

                            <div className="col-md-4">
                                <a href="https://limitless-garden-40130.herokuapp.com//">
                                    <img src="https://raw.githubusercontent.com/dmagana1/EATDABURGER/main/projectpictures/Burger1.JPG"
                                        className="card-img-top" alt="img-one" /></a>
                                <p className="card-text">Eat Da Burger</p>
                            </div>
                          </div>
                        </div> 


                
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/dmagana1">
                            https://github.com/dmagana1</a> </p>
                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/diane-magana-b1b1b611b/">
                                https://www.linkedin.com/in/diane-magana-b1b1b611b/</a></p>
                            <p>Email: <a href="outlook.com">
                            diane_101@hotmail.com</a> </p>
                            <a href="https://docs.google.com/document/d/1PTQ-Qf9_OhHOLgXE1bIUfBZ9cC3QLcw4fWg7HrHlKBQ/edit?usp=sharing">
                            Resume</a>

                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio