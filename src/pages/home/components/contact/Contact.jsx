import './contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const isEmailValid = (email) => /.+@.+/i.test(email);

  const handleJoinClick = () => {
    if (isEmailValid(email)) {
      setShowSuccess(true);
      setEmail('');

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="contact">
      <div className="wrapper">
        <h2>Contact us: </h2>
        <div className="mail">
          <input
            type="text"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleJoinClick}>Join</button>
        </div>
        {showSuccess && (
          <div className="success-popup">
            <p>Email sent successfully!</p>
          </div>
        )}
        {/* <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <PinterestIcon />
            </div> */}
      </div>
    </div>
  )
}

export default Contact
