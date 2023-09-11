import React, { useState } from 'react';

const OTPVerification = () => {
  const [otp, setOTP] = useState(['', '', '', '']); // Initialize with four empty strings
  const inputRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];

  const handleOTPChange = (e, index) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = e.target.value;
    setOTP(updatedOTP);

    // Move to the next input field when a digit is entered
    if (e.target.value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your OTP verification logic here using the otp array
    const enteredOTP = otp.join('');
    console.log('Entered OTP:', enteredOTP);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white  p-8 rounded-lg w-full max-w-md flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4">OTP Verification</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <div className="mb-4 flex justify-between gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                name={`digit-${index}`}
                value={digit}
                onChange={(e) => handleOTPChange(e, index)}
                className="border border-gray-300 rounded-md p-3 w-1/4 text-center outline-none"
                placeholder="0"
                maxLength="1"
                required
                ref={inputRefs[index]}
              />
            ))}
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-md"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
