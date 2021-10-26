import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact_Form extends Component {
  render() {
    let anchor = '#';
    let imgalt = 'image';
    let publicUrl = process.env.PUBLIC_URL + '/';
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm('asnaasssssssssssssssssss', 'template_gfxqtrq', e.target, 'user_5ZQpF4x4Yvau6JfrzM3JW')

        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
    return (
      <div>
        <div className="contact-form-area pd-top-112">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center w-100">
                  <h2 className="title">
                    Contactez <span>nous</span>
                  </h2>
                  <p>
                    Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French
                    owt to do with me up the kyver matie boy.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5">
                <img src={publicUrl + 'assets/img/others/21.png'} alt={imgalt} />
              </div>
              <div className="col-lg-7 offset-xl-1">
                <form className="riyaqas-form-wrap mt-5 mt-lg-0" onSubmit={sendEmail}>
                  <div className="row custom-gutters-16">
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input type="text" className="single-input" name="name" placeholder="Name" required />
                        <label style={{ color: 'black' }}>Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input type="email" className="single-input" name="email" placeholder="E-mail" required />
                        <label style={{ color: 'black' }}>E-mail</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="text" className="single-input" name="subject" placeholder="Sujet" required />
                        <label style={{ color: 'black' }}>Sujet</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <textarea className="single-input textarea" cols="20" name="message" required placeholder="Message"></textarea>
                        <label className="single-input-label" style={{ color: 'black' }}>
                          Message
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <input className="btn btn-red mt-0" type="submit" placeholder="" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact_Form;
