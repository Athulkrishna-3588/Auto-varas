import { Link } from "react-router-dom"




const RiderRegister = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form  className="bg-white p-8 rounded-lg shadow-lg w-80">
        

        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Number
        </label>
        <input
          type="number"
          name="number"
          id="number"
          
          placeholder="Mobile Number"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

      
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
          OTP
        </label>
        <input
          type="number"
          name="number"
          id="number"
          
          placeholder="your otp"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        
      
      
        <Link to={"/to-ride"}
          type="submit"
          className="w-full py-2  text-black font-semibold rounded-md  focus:outline-none focus:ring-2 focus:ring-black-400"
        >
         Submit
        </Link>
      </form>
    </div>
    </div>
  )
}

export default RiderRegister