// https://preview.themeforest.net/item/astron-
//astronomy-elementor-template-kit/full_screen_preview/44113556?_ga=2.29278334.33628818.1693227699-1533764322.1678290230

import React, { useState, useEffect } from "react";
import "./Home.css";
function Home() {
  const [clipPercentage, setClipPercentage] = useState(0);

  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX;
    const percentage = (x / e.currentTarget.offsetWidth) * 100;
    setClipPercentage(percentage);
  };
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="body">
        <div className="section1">
          <div className="title ">
            <div className="top-title">
              <h1>EXPL</h1>
              <img
                src="https://kitpro.site/astron/wp-content/uploads/sites/146/2023/02/solar-eclipse-2022-11-16-16-41-01-utc-copy.jpg"
                alt=""
              />
              <h1>RE</h1>
            </div>
            <div className="bottom-title">
              <h1>ASTRONOMY</h1>
            </div>
          </div>
          <div className="moon-img">
            <img
              src="https://kitpro.site/astron/wp-content/uploads/sites/146/2023/02/silhouette-of-crescent-moon-2022-07-18-19-56-24-utc-copy2-1024x573.jpg"
              alt=""
            />
          </div>

          <div className="div"></div>
          <div className="planets">
            <div className="planets-title ">
              <p>Astronomy Discovery</p>
              <p>Planets and their most important features</p>
              <p>
                At a glance, you will see the planets wandering among the
                shining stars. Each one is a character who keeps a secret and
                does his own unique dance in the universe.
              </p>
            </div>
            <div className="planets-img">
              <div className="planet">
                <div className="planet-img">
                  <img
                    src="https://kitpro.site/astron/wp-content/uploads/sites/146/2023/02/mercury-1.png"
                    alt=""
                  />
                </div>
                <div className="planet-text">
                  <h1>Mercury</h1>
                  <p>
                    The smallest planet located in the solar system and the
                    closest planet to the Sun
                  </p>
                </div>
              </div>

              <div className="planet">
                <div className="planet-img">
                  <img
                    src="https://kitpro.site/astron/wp-content/uploads/sites/146/2023/02/venus-2.png"
                    alt=""
                  />
                </div>
                <div className="planet-text">
                  <h1>Venus</h1>
                  <p>The hottest planet in the entire solar system.</p>
                </div>
              </div>

              <div className="planet">
                <div className="planet-img">
                  <img
                    src="https://kitpro.site/astron/wp-content/uploads/sites/146/2023/02/mars-red-planet-in-space-2021-08-27-09-27-01-utc-copy-1-1-1.png"
                    alt=""
                  />
                </div>
                <div className="planet-text">
                  <h1>Mars</h1>
                  <p>Mars is the closest planet to Earth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
