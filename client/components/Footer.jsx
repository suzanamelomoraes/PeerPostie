import React from "react";

const Footer = () => {
  return (
    <footer class='footer bg-transparent'>
      <div class='container'>
        <div className='row'>
          <div className='col md-6 flex-column' >
            <img
              src='-peer-postie-logo-.png'
              className='img-fluid img-footer'
              alt='Peer Postie logo'
            />
            <ul class='list-inline'>
                <li className='list-inline-item'><img
              src='facebook.png'
              className='img-fluid logo'
              alt='Facebook logo'
            /></li>
                <li className='list-inline-item'><img
              src='linkedin.png'
              className='img-fluid logo'
              alt='Linkedin logo'
            /></li>
                <li className='list-inline-item'><img
              src='instagram.png'
              className='img-fluid logo'
              alt='Instagram logo'
            /></li>
            </ul>
          </div>

          <div className='col md-6'>
            <ul class='list-inline'>
              <li>
                <span class='text-muted list-inline-item small'>About us</span>
              </li>
              <li>
                <span class='text-muted list-inline-item small'>Contact Us</span>
              </li>
              <li>
                <span class='text-muted list-inline-item small'>Terms & Conditions</span>
              </li>
              <li>
                <span class='text-muted list-inline-item small'>Privacy Policy</span>
              </li>
            </ul>
            <div className='col md-12'>
            <span class='primary list-inline-item small'>© Copyright PeerPostie 2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
