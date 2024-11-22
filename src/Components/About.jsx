
 
 const About = () => {
   return (
   <div className="about-container">
    <div className="about-section">
        <div className="signup">
            <h1>Sign up today</h1>
            <p>Ready to experience Uber for yourself? Take your first trip as a rider, or get on the road to earning as <br />
             a driver.</p>
             <div className="signup-button flex">
                <button>Sign up to ride</button>
                <button>Sign up to drive</button>
             </div>
        </div>
        <div className="move flex">
            <div className="move-img flex">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_384,w_576/v1600423778/assets/5a/eb49b9-5a81-41fd-92b5-99a5cb8900ef/original/womanWithPhone_03.svg" alt="" />
                <div className="move-text">
                    <h1>Ways people move around , <br />
                     the world</h1>
                     <p>The Uber app gives you the power to get where you want to go  <br />
                     with access to different types of rides across more than <br />
                      10,000 cities.</p>
                      <button>View ride options</button>
                </div>
            </div>
        </div>
        <div className="app">
            
        </div>
    </div>
   </div>
   )
 }
 
 export default About