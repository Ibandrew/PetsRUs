import React from 'react';
import "./index.css";

import { Link } from 'react-router-dom';


function About() {

  return (

    <div className="AddPetSection">
      <div className="AboutContainer">
        <div className="OuterContainer">
          <div className="AboutInnerContainer">
            <div className="AboutInfo">
              <div className="AboutDescription">
                A Petter Life is a Progressive Web Application that uses React.js and MongoDB to give undesired pets "a petter life."
              </div>
            </div>

            <div className="CreatorInfo">
              <div className="CreatorContainers">
                <div className="CreatorRow">
                  <div className="CreatorContainer">
                    <img clasName="CreatorPic" alt=""></img>
                    <div className="CreatorDescription">
                      <div className="CreatorName">Andrew Lopez</div>
                      <div className="CreatorBio">Full-Stack Web Developer</div>
                     
                    </div>
                  </div>

                  <div className="CreatorContainer">
                    <img clasName="CreatorPic" alt=""></img>
                    <div className="CreatorDescription">
                      <div className="CreatorName">Kiel Ashram</div>
                      <div className="CreatorBio">Full-Stack Web Developer</div>
                      
                    </div>
                  </div>
                </div>

                <div className="CreatorRow">
                  <div className="CreatorContainer">
                    <img clasName="CreatorPic" alt=""></img>
                    <div className="CreatorDescription">
                      <div className="CreatorName">Jay Chen</div>
                      <div className="CreatorBio">Full-Stack Web Developer</div>
                      
                    </div>
                  </div>

                  <div className="CreatorContainer">
                    <img clasName="CreatorPic" alt=""></img>
                    <div className="CreatorDescription">
                      <div className="CreatorName"></div>
                      <div className="CreatorRole"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/" className="BackToHomepageBtn">Home</Link>
      </div>
    </div>
  )
}

export default About;
