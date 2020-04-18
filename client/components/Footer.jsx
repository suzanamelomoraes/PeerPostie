import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col md-6'>
            <a href='#'>
              <img
                src='-peer-postie-icon.png'
                className='img-fluid img-footer'
                alt='Peer Postie logo'
              />
            </a>

            <ul className='list-inline'>
              <li className='list-inline-item'>
                <a href='#facebook' class='fa fa-facebook'></a>
              </li>
              <li className='list-inline-item'>
                <a href='#twitter' class='fa fa-twitter'></a>
              </li>
              <li className='list-inline-item'>
                <a href='#instagram' class='fa fa-instagram'></a>
              </li>
              <li className='list-inline-item'>
                <a href='#linkedin' class='fa fa-linkedin'></a>
              </li>
            </ul>
          </div>

          <div className='navbar col md-6'>
            <a href='#about'>
              <span className='text-white small'>About us</span>
            </a>

            <a href='#contact'>
              <span className='text-white small'>Contact Us</span>
            </a>

            <a href='#term'>
              <span className='text-white small'>Terms & Conditions</span>
            </a>

            <a href='#policy'>
              <span className='text-white small'>Privacy Policy</span>
            </a>
          </div>
        </div>
        <div className='row text-center'>
          <div className='col md-12'>
            <span className='list-inline-item small text-white'>
              © Copyright PeerPostie 2020
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
