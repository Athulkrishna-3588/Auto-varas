
import Banner from "./Banner"
import Bannerform from "./Bannerform"
import Drivehompage from "./Drivehompage"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Rentcar from "./Rentcar"
import Suggestions from "./Suggestions"
import Valanbusiness from "./Valanbusiness"


function Home() {
  return (
    <div>
        {/* <Navbar/> */}
   
    <Banner/>
    <Bannerform/>
     <Suggestions/>
     <Drivehompage/>
     <Valanbusiness/>
     <Rentcar/>
     {/* <Footer/> */}
    </div>
  )
}

export default Home
