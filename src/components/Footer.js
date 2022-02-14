import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure newletter to receive our best vaction deals
            </p>
            <p className='footer-subscription-text'>
                You can unsuscribe at any time
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" name='email' placeholder='Your Email' className='footer-input' />
                    <Button
                    buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to="/" className='social-logo'>
                    TRVL <i className="fa-brands fa-500px"></i>
                </Link>
            </div>
            <small className='website-rights'>TRVL</small>
            <div className='social-icons'>
                <Link to="/" className='social-icon-link facebook'>
                <i className="fab fa-facebook-f" target="_blank" aria-label='Facebook'/>
                </Link>
                <Link to="/" className='social-icon-link instagram'>
                <i className="fab fa-instagram" target="_blank" aria-label='Instagram'/>
                </Link>
                <Link to="/" className='social-icon-link youtube'>
                <i className="fab fa-youtube" target="_blank" aria-label='Youtube'/>
                </Link>
                <Link to="/" className='social-icon-link twitter'>
                <i className="fab fa-twitter" target="_blank" aria-label='Twitter'/>
                </Link>
                <Link to="/" className='social-icon-link linkedin'>
                <i className="fab fa-linkedin" target="_blank" aria-label='Linkedin'/>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default footer