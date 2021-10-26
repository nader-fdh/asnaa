import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class CommingSoon extends Component {

  componentDidMount() {
      const countdown = document.querySelector(".countdown");

      //Set Launch Date
      const launchDate = new Date("May 28, 2021 13:00:00").getTime();

      //Update every second
      const intvl = setInterval(function() {
          //Get todays date and time (ms)
          const now = new Date().getTime();

          //Distance from now to the launch date
          const distance = launchDate - now;

          //Time calculation
          const days = Math.floor(distance / (8000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const sec = Math.floor((distance % (1000 * 60)) / 1000);

          //Display Result
          countdown.innerHTML = `
              <div class="countdown-item"><h2 class="countdown-number">${days}</h2><span class="countdown-text">Days</span></div>
              <div class="countdown-item"><h2 class="countdown-number">${mins}</h2><span class="countdown-text">Minutes</span></div>
              <div class="countdown-item"><h2 class="countdown-number">${sec}</h2><span class="countdown-text">Seconds</span></div>
          `;

          //If launch date passed
          if (distance < 0) {
              //Stop countdown
              clearInterval(intvl);
              //Style and ouput text
              countdown.style.color = "#17a2b8";
              countdown.innerHTML = "Launched!";
          }
      }, 1000);
  }
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'


    return <div>
              <div className="comming-soon-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <h2 className="comming-soon-title">Coming Soon</h2>
                      <div className="comming-soon-wrap">
                        <div className="countdown countdown--alt" />
                      </div>
                      <div className="newsletter-subcribe text-center">
                        <p>Notify me when we lauch</p>
                        <form id="news-subcribeform" className="subcribe-form">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your E-mail..." name="mail" required />
                            <button type="submit" className="btn-blue subcribe-submit">submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-6 offset-xl-1 text-center">
                      <div className="comming-soon-thumb">
                        <img src={publicUrl+"assets/img/comming-soon.png"} alt={404} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    }
}

export default CommingSoon