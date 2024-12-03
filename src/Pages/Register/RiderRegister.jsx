import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';




const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      
      <div className="w-full max-w-md my-20 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">What's your phone number or email?</h2>
        
     
        <input
          type="text"
          placeholder="Enter phone number or email"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition">
        <Link to={"/to-chooseride"} className='px-36'>
          Continue
        </Link>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        
        <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md mb-3 hover:bg-gray-100 transition">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaPNaAB2vQMNU55tG5ZXY_-CWp18ubIQrfV2ngLnNkiYrNdHDvpgEhq3oTVswZ_KO4SM&usqp=CAU"
            alt="Google"
            className="w-10 h-10 mr-3"
          />
          Continue with Google
        </button>
        <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md mb-3 hover:bg-gray-100 transition">
          <i className="fab fa-apple text-2xl mr-3"></i> 
          Continue with Apple
        </button>

        
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        
        <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md mb-3 hover:bg-gray-100 transition">
          <i className="fas fa-search mr-3"></i> Find my account
        </button>
        <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition">
          <i className="fas fa-qrcode mr-3"></i> Log in with QR code
        </button>

        
        <p className="text-sm text-gray-500 text-center mt-6">
          By proceeding, you consent to get calls, WhatsApp, or SMS/RCS messages,
          including by automated means, from Uber and its affiliates to the number provided.
        </p>
      </div>
      
    </div>
  );
};

export default LoginForm;
