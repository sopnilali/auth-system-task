import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex items-center px-4 py-4 sm:px-6 md:px-8">
        <div className="bg-white mx-auto w-full max-w-md p-4 sm:p-5 md:p-6 rounded-md shadow-lg hover:shadow-xl">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl py-3 sm:py-4 md:py-5 font-bold text-green-700 uppercase">Login</h2>
          <form className="flex flex-col">
            <div className="flex flex-col my-2">
              <input type="number" name="service" id="" placeholder="Mobile Number" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
              <input type="password" name="service" id="" placeholder="Password" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
              <Link to="/register" className="bg-gray-500 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-center text-sm sm:text-base">Register</Link>
              <button type="submit" className="bg-green-600 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-sm sm:text-base">Login</button>
            </div>
          </form>
          {/* Hospital registration form fields */}
        </div>
      </div>
    </>
  )
}

export default App
