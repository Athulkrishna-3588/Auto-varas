import { Link } from "react-router-dom"

const DriverRegister = () => {
  return (
    <>
    <div className="driver-section">
        <div className="driver-register text-center">
            <h1 className="text-3xl my-10">Welcome, Athul</h1>
            <p className="text-gray-400">Here what you need to do to set up your account</p>
            <h1 className='my-10 '>Driving Licence-Front</h1>
            <p className='text-blue-400'>Recommended next step</p>
            <h1>Profile Photo</h1> 
          
            <h1>Adhar Card</h1>
            
            <h1>PAN Card</h1>
            
            <h1>Vehicle Insurance</h1>
            
            <h1>Vehicle Permit</h1>
            <Link to={"/to-drive"} className=" text-black text-center bg-gray-300 my-10 rounded-lg h-[200xpx] w-[300px]">Submit</Link>
        </div>
        
    </div>
    </>
  )
}

export default DriverRegister