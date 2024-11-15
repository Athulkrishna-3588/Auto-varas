

const Banner = () => {
  return (
    <div className=" flex items-center justify-center mx-10 p-4">
    <div className="container mx-auto ">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="mx-14">
          <h1 className="text-5xl  font-bold text-gray-900 ">
            Get Around{' '}
            <span className="text-yellow-500">Valanchery</span>{' '}
            with Ease
          </h1>
          <p className="text-2xl text-gray-600 my-4">
            Experience the convenience of auto rickshaw booking at your fingertips!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
          <button       className=" border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-6 text-lg rounded-full"
           >Book A Ride</button>
            <button       className=" border-gray-900 text-gray-900 hover:bg-yellow-300 hover:text-black font-semibold px-8 py-6 text-lg rounded-full"
           >Learn More</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
            <img
              src="../images/auto.png"
              className="w-full h-auto"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-yellow-200 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute -top-6 -left-6 w-72 h-72 bg-yellow-100 rounded-full filter blur-3xl opacity-50"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner