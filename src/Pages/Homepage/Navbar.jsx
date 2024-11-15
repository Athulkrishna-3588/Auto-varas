import { Link } from "react-router-dom"


const Navbar = () => {
    return (
      <div className="mx-20 my-9 m">
          <nav className="bg-white text-black">
        <div className="container  px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <span className="font-bold text-xl"><span className="text-black font-bold text-2xl">V</span >alan<span className="text-yellow-500"><span className="font-bold text-2xl">P</span>ulse</span></span>
              <div className="space-x-4">
                <Link to="/" className="hover:opacity-75">Home</Link>
                <Link to="#" className="hover:opacity-75">About</Link>
                <Link to="#" className="hover:opacity-75">Meet Our Team</Link>
                <Link to="#" className="hover:opacity-75">Contact</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:opacity-75">EN</button>
              <button className="hover:opacity-75">Help</button>
              <Link to={"login"} className="hover:opacity-75">Log in</Link>
              <Link to={"signup"} className="bg-yellow-300 text-black px-4 py-2 rounded-full hover:bg-gray-100">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      </div>
    )
  }
  
  export default Navbar