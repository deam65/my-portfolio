import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div>
          <nav className="navbar fixed-top navbar-light bg-light">
            <a className="navbar-brand mr-auto" href="#"><u>[Darren-Eam]</u></a>
            <a className="navbar-nav" target="_blank" href="https://www.linkedin.com/in/darren-eam/">
              <img src="%PUBLIC_URL%/logos/linkedin-blk.png" width={32} height="auto" alt="" />
            </a>
            <a className="navbar-nav" target="_blank" href="https://github.com/deam65">
              <img src="%PUBLIC_URL%/logos/github-blk.png" width={32} height="auto" alt="" />
            </a>
            &nbsp;
            <a className="navbar-nav" target="_blank" href="https://docs.google.com/document/d/1P9dpZj94SdFqdILef7h1pYmn4vm88escUbBHYoLg9sQ/edit?usp=sharing">
              <img src="%PUBLIC_URL%/logos/paper.png" width={20} height="auto" alt="" />
            </a>
          </nav>
          <div className="container">
            <div className="row div_margins">
              <div className="col-7" style={{margin: 'auto'}}>
                <img src="%PUBLIC_URL%/images/me.jpg" width="100%" height="auto" />
              </div>
              <div data-aos="fade-left" data-aos-delay={200} className="col-3" style={{margin: 'auto'}}>
                <p style={{fontSize: '2vw'}}><b>Hello, I'm Darren!</b></p>
                <p style={{fontSize: '1.3vw'}}>Thanks for checking me out!</p>
              </div>
            </div>
            <div className="row div_margins">
              <div className="col-6">
                <div data-aos="fade-up">
                  <b style={{fontSize: '1.75vw'}}>I am many things, but ultimately, I am...</b> <br />
                </div>
              </div>
              <div className="col-5" style={{margin: 'auto'}}>
                <br /> <br /> <br /> 
                <div data-aos="fade-left" data-aos-delay={200}>
                  <i style={{fontSize: '2vw'}}>an aspiring software engineer</i> <br />
                </div>
                <div data-aos="fade-left" data-aos-delay={300}>
                  <i style={{fontSize: '2vw'}}>an explorative photographer</i> <br />
                </div>
                <div data-aos="fade-left" data-aos-delay={400}>
                  <i style={{fontSize: '2vw'}}>an intermediate musician</i> <br />
                </div>
                <div data-aos="fade-left" data-aos-delay={500}>
                  <i style={{fontSize: '2vw'}}>and a lover (not a fighter)</i> <br />
                </div>
                <br /> 
              </div>
            </div>
            <div className="row div-margins">
              <b data-aos="fade-up" data-aos-delay={200} style={{fontSize: '2vw', marginLeft: '7vw'}}>Some projects that I'm proud of: </b>
            </div>
            <div className="row div_margins">
              <div className="card-deck" style={{margin: 'auto'}}>
                <div data-aos="fade-right" data-aos-delay={200} className="card bg-light mb-3" style={{maxWidth: '18rem'}}>
                  <div className="card-header"><a target="_blank" href="https://github.com/deam65/Multithreaded-httpserver-loadbalancer">Multithreaded HTTP Server</a></div>
                  <div className="card-body">
                    <p className="card-text">Developed an HTTP server that responded to GET, PUT, and HEAD requests, using POSIX threads to ensure that simultaneous requests could be processed with no busy waiting</p>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay={200} className="card bg-light mb-3" style={{maxWidth: '18rem'}}>
                  <div className="card-header"><a target="_blank" href="https://colab.research.google.com/drive/1d_NfIlehHV-9pAhnsilTw-eN35vAGKT7?usp=sharing">Metastatic Region Analysis</a></div>
                  <div className="card-body">
                    <p className="card-text">Collaborated with peers to develop a convoluted neural network (CNN) that could identify metastatic regions in lymph node tissue cells relatively accurately (up to 87%)</p>
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-delay={200} className="card bg-light mb-3" style={{maxWidth: '18rem'}}>
                  <div className="card-header"><a target="_blank" href="https://github.com/deam65/FiTrak-Web">FiTrak</a></div>
                  <div className="card-body">
                    <p className="card-text">Collaborated with peers to develop a Web + Android fitness application, aimed at connecting trainers with trainees. Project was developed in a Scrum environment!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{marginBottom: '2vh'}}>
              <p style={{margin: 'auto'}}>Have a question about me/my projects? Need some life advice? Slide into my LinkedIn DMs and I'll be sure to give you my very best answer!</p>
            </div>
            <div className="row ">
              <i style={{margin: 'auto'}}>[This website was made with React.js!]</i>
            </div>
            <br />
          </div>
        </div>
      );
  }
}