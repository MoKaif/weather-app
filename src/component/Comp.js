import React from "react";
import "./comp.css";

function Comp() {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>Github Details</h4>
              <ul>
                <li>
                  <a href="https://github.com/MoKaif">Profile</a>
                </li>
                <li>
                  <a href="https://github.com/MoKaif?tab=repositories">
                    Repositories
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MoKaif/weather-app/tree/master">
                    Source code
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <a href="https://openweathermap.org/guide">API</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Address</h4>
              <ul>
                <li>
                  <a>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate adipisci quia ab omnis id ipsum quae inventore{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow me</h4>
              <div class="social-links">
                <a>
                  <i class="fab fa-google"></i>
                </a>
                <a href="https://www.linkedin.com/in/mokaif/">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/MoKaif">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/_kaifsiddique">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Comp;
