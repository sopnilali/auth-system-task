import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex items-center">
        <div className="max-w-xl bg-white mx-auto p-5 rounded-md shadow-lg hover:shadow-xl w-96">
          <h2 className="text-center text-2xl py-5 font-bold text-green-700 uppercase">Login</h2>
          <form className=" flex flex-col ">
            <div className="flex flex-col  max-h-96 my-2">
              <input type="number" name="service" id="" placeholder="Mobile Number" className="p-2 rounded-md border mb-2" />
              <input type="password" name="service" id="" placeholder="Password" className="p-2 rounded-md border mb-2" />
            </div>
            <div className="flex justify-center items-center gap-3   ">

              <Link to="/register" className="bg-gray-500 w-full text-white p-3 rounded-md mt-2 text-center">Register</Link>
              <button type="submit" className="bg-green-600  w-full text-white p-3 rounded-md mt-2">Login</button>
            </div>
          </form>
          {/* Hospital registration form fields */}
        </div>
      </div>
    </>
  )
}

export default App
