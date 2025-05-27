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
      <h1>OTP Generator</h1>
      <div className='setLength-btn'>
        <button onClick={() => setOtpLength(4)}>4 Digit</button>
        <button onClick={() => setOtpLength(6)} style={{ marginLeft: '10px' }}>
          6 Digit
        </button>
      </div>

      <button onClick={() => generateOtp(otpLength)} style={{ marginTop: '20px' }}>
        Generate OTP
      </button>

      {otp && (
        <div style={{ marginTop: '20px' }}>
          <h2>{otp}</h2>
          <button onClick={handleCopyOtp}>Copy OTP</button>
        </div>
      )}
     
      <footer>
            A simple project by <a href="https://github.com/lalitpatil891" target="_blank">Lalit Patil </a>– OTP Generator! &#10084;
          </footer>
    </div>
     
  );
}

export default OtpGenerator;
