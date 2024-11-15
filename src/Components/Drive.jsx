

const Drive = () => {
  return (
    <div className="drive-section">
        <div className="drive-banner text-left px-20 flex my-10">
            <div className="banner-text">
            <h1 className="text-3xl
            ">Drive when you <br />
                want, make what <br />
                 you need</h1>
                 <p>Earn your own schedule</p>
                <div className="flex-button flex">
                    
                 <button className="bg-black text-white rounded-lg h-12 w-[100px] mx-4">Get Started</button>
                 <h1>Already have an account ? Sign in</h1>
                </div>
                
                 
            </div>
            
            <div className="banner-img">
                    <img className="h-[300px] w-[300px]" src="../images/driver.png
                    " alt="" />
                 </div>
        </div>

        <div className="for-drivers">
            <h1>Why drive with us</h1>
            <img className=" items-center mx-80 justify-center w-[600px] h-[350px]" src="../images/driving.png" alt="" />
        </div>

        <div className="driver-details flex mx-auto justify-evenly my-16">
            <div className="work bg-gray-200 rounded-lg h-[150px] p-10 text-left">
                <img src="" alt="" />
                <h1>Set your own hours</h1>
                <p>You decide when and how often you drive</p>
            </div>
            <div className="work bg-gray-200 rounded-lg h-[150px] p-10 text-left">
                <img src="" alt="" />
                <h1>Set your own hours</h1>
                <p>You decide when and how often you drive</p>
            </div>
            <div className="work bg-gray-200 rounded-lg h-[150px] p-10 text-left">
                <img src="" alt="" />
                <h1>Set your own hours</h1>
                <p>You decide when and how often you drive</p>
            </div>
        </div>

        <div className="for-signup flex justify-evenly ">
        <div className="work bg-gray-200 rounded-lg h-[200px] p-10 text-left">
                <img src="" alt="" />
                <h1>Set your own hours</h1>
                <p>You decide when and how often you drive</p>
            </div>
            <div className="work bg-gray-200 rounded-lg h-[150px] p-10 text-left">
                <img src="" alt="" />
                <h1>Set your own hours</h1>
                <p>You decide when and how often you drive</p>
            </div>
            <div className="work bg-gray-200 rounded-lg h-[150px] p-10 text-left">
                <img src="" alt="" />
                <h1>Set your own hours</h1>
                <p>You decide when and how often you drive</p>
            </div>
        </div>

        <div className="fleet-partners flex text-left gap-11 my-5 justify-evenly ">
            <div className="first-fleet">
                <img className="h-[250x] w-[500px] rounded-lg" src="../images/partner.png" alt="" />
                <h1>Join a fleet</h1>
                <p>Find and join a fleet partner and start driving for  them using <br /> the Uber app</p>
            </div>
            <div className="second-fleet">
                <img  className="h-[250x] w-[500px] rounded-lg" src="../images/anotherpartner.png" alt="" />
                <h1>Become a fleet</h1>
                <p>Start making money. Connect your drivers and upload the <br /> required documents to your profile.</p>
            </div>
        </div>

        <div className="to-drive my-5">
            <h1 className="text-left">Sign up to drive </h1>
            <hr />
        </div>

   
    </div>
  )
}

export default Drive