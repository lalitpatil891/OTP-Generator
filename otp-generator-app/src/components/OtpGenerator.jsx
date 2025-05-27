// src/components/OtpGenerator.jsx
import { useState } from 'react';

function OtpGenerator() {
  const [otpLength, setOtpLength] = useState(4);
  const [otp, setOtp] = useState('');

  const generateOtp = (length) => {
    let newOtp = '';
    for (let i = 0; i < length; i++) {
      newOtp += Math.floor(Math.random() * 10); // Random digit (0–9)
    }
    setOtp(newOtp);
  };

  const handleCopyOtp = () => {
    if (otp) {
      navigator.clipboard.writeText(otp);
      alert('OTP copied to clipboard!');
    }
  };

  return (
    <div className='main-container'>
    <img className='background-glow' src="/grid.png" alt="" />
      <h2>OTP Generator</h2>
      <p> Generate secure 4 or 6-digit OTPs instantly with one click.</p>
      <div className='setLength-btn'>
        <button className={`btn-grad ${otpLength === 4 ? "active" : ""}`} onClick={() => setOtpLength(4)}>4 Digit</button>
        <button className={`btn-grad ${otpLength === 6 ? "active" : ""}`} onClick={() => setOtpLength(6)}>6 Digit</button>
      </div>

     

      {otp && (
        <div style={{ marginTop: '20px' }}>
          <h1>{otp}</h1>

           
            <button className='copy-btn' onClick={handleCopyOtp}>Copy OTP</button>
        </div>
      )}
     <button className='main-btn' onClick={() => generateOtp(otpLength)}>Generate OTP</button>
     
      <footer>
            A simple project by <a href="https://github.com/lalitpatil891" target="_blank">Lalit Patil </a>– OTP Generator! &#10084;
          </footer>
    </div>
     
  );
}

export default OtpGenerator;
