import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/Crist04/Open-world-chat" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/06.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Open Chat App</h3>
                      <p>App that helps people chat with each other. It allows user to modify their profiles and send and recieve friend requests.Once someone becomes your friend,You can call them too.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        
                        <li><a href="https://github.com/Crist04/Open-world-chat" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-django-plain-wordmark technology"></i>
                        <i className="devicon-python-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/Crist04/Rent-It" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/08.png" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Rent It</h3>
                      <p>A small mock e-commerce website.The idea is to post a car to be rented and some other user can rent it.The nearest car is selected as per the user's location.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        
                        <li><a href="https://github.com/Crist04/Rent-It" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-php-plain technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="luci04.github.io/sorting-visualizer/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/07.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Sorting visualizer</h3>
                      <p>React Based Application Where You Can see what happen Over an Array when a Sorting Algo. is Applied</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        
                        <li><a href="https://github.com/Luci04/Sorting-Visualizer" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
             

              
              
              
              
              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/Crist04" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Full Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
