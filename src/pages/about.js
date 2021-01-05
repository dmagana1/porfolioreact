import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPage = () => {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
  </h3>
 </div>
     <div className="card-body">
       <blockquote className="blockquote mb-0">
         <div className="row">
          <div className="col-md-3">
             <img id="pic" src="https://avatars2.githubusercontent.com/u/67727055?s=60&v=4" alt="profile pic" width="100%" height="auto%" />
              </div>

              <div className="col-md-8">

              <p>My name is Diane Magana, and I am 26 years old. I have a bachelor's degree in Emerging Media and digital arts; in less "fancy" terms it mean Graphic Design. I have two dogs, a large brownish-red Husky named Milo, and a small Chihuahua named Mama. When I am not at work I like to hangout with my friends, and before the pandemic we would mainly travel to different parts of Oregon and Northern Califorina and go on mini adventures, but we have travel to New York City to see the Macy's Thanksgiving Day Parade, Indianapolis Indiana to see the Indy 500, Los Angeles, and to Mexico a few times. Other things I like to do is paint and draw, and I am also a coffee addict and I love going to different coffee shops and trying there coffees.</p>
   </div>
    </div>
       </blockquote>
    </div>
</div>
</div>

        </div>
    )
}
export default mainPage