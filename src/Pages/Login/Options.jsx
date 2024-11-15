import { Link } from "react-router-dom"


const Options = () => {
  return (
    <div className="options-section my-14">
        <div className="options flex justify-evenly">
            <Link to={"/to-driver"} className="text-5xl">Sign up to drive & deliver</Link>
            <Link to={"/to-rider"} className="text-5xl">Create a rider account</Link>
        </div>
    </div>
  )
}

export default Options