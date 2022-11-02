import selfie from '../Images/selfie.png'
import LinkedInLogo from '../Images/LinkedInLogo.webp'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-master-container">
      <div className="footer-inner-container">
        <div className="footer-header">Connect with the Developer</div>
        <div className="dev-links">
          <a href='https://github.com/codewjm' target="_blank" title="Will's GitHub">
            <img className='will-GitHub' src={selfie}></img>
          </a>
          <a href='https://www.linkedin.com/in/will-marett-a0b4b3188/' target="_blank" title="Will's LinkedIn">
            <img className='will-LinkedIn' src={LinkedInLogo}></img>
          </a>
        </div>
        {/* <div className="footer-footer">ArtMarts was devloped by Willard Marett and inspired by Etsy</div> */}
      </div>
    </div>
  )
}

export default Footer;
