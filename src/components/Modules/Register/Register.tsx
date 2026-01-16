import React, { useState } from "react"
import { Link } from "react-router-dom"


const Register = () => {

    const [selection, setSelection]: any = useState('hospital')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelection(e.target.value)
    }

    return (
        <div className=" bg-gray-300 min-h-screen flex items-center max-w-full">
            <div className=" bg-white mx-auto py-6 rounded-md shadow-lg hover:shadow-xl px-10 ">
                <h2 className="text-center text-5xl py-5 font-bold text-green-700">Registration</h2>

                <select
                    value={selection}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md mb-5 border"
                >
                    <option className="p-3 rounded" value="" disabled>Select an option</option>
                    <option className="p-3 rounded" value="hospital">Hospital</option>
                    <option className="p-3" value="diagnostic">Diagnostic</option>
                    <option className="p-3" value="doctor">Doctor</option>
                    <option className="p-3" value="patient">Patient</option>
                </select>

                {selection === 'hospital' && (
                    <div>
                        <form className=" max-w-full flex flex-col ">
                            <div className="flex flex-col overflow-y-scroll h-96 my-2">
                                <input type="text" name="di" id="" placeholder="Diagnostic Name" className="p-3 rounded-md border mb-2" />
                                <select name="" id="" className="w-full p-3 rounded-md mb-2 border">
                                    <option className="p-3 rounded" value="" disabled selected>Select Division</option>
                                    <option value="type1">Dhaka</option>
                                    <option value="type2">Rajshahi</option>
                                </select>
                                <select name="" id="" className="w-full p-3 rounded-md mb-2 border">
                                    <option className="p-3 rounded" value="" disabled selected>Select District</option>
                                    <option value="type1">Rajshahi</option>
                                    <option value="type2">Dhaka</option>
                                    <option value="type2">Chapainawabganj</option>
                                </select>
                                <select name="" id="" className="w-full p-3 rounded-md mb-2 border">
                                    <option className="p-3 rounded" value="" disabled selected>Select Upozilla</option>
                                    <option value="type1">Dhaka UPO</option>
                                    <option value="type2">Rajshahi UPO</option>
                                    <option value="type2">Chapainawabganj Sadar</option>
                                    <option value="type2">Shibganj</option>
                                </select>
                                <input type="text" name="village" id="" placeholder="Type Village" className="p-3 rounded-md border mb-2" />
                                <input type="text" name="service" id="" placeholder="Type Service" className="p-3 rounded-md border mb-2" />
                                <input type="time" name="" id="" className="w-full p-3 rounded-md mb-2 border" placeholder="Time set" />
                                <input type="time" name="" id="" className="w-full p-3 rounded-md mb-2 border" placeholder="Time set" />
                                <input type="text" name="village" id="" placeholder="Email Address" className="p-3 rounded-md border mb-2" />
                                <input type="number" name="service" id="" placeholder="Mobile Number" className="p-3 rounded-md border mb-2" />
                                <input type="password" name="service" id="" placeholder="Password" className="p-3 rounded-md border mb-2" />
                                <input type="file" name="" id="" className=" p-3 rounded-md border border-dashed hover:border-gray-400 mb-2" />

                            </div>
                            <div className="flex justify-center items-center gap-3   ">
                                <Link to="/" className="bg-gray-500 w-full text-white p-3 rounded-md mt-2 text-center">Login</Link>
                                <button type="submit" className="bg-green-500 w-full text-white p-3 rounded-md mt-2">Register</button>
                            </div>
                        </form>
                        {/* Hospital registration form fields */}
                    </div>
                )}
                {selection === 'diagnostic' && (
                    <div>
                        <form className=" flex flex-col ">
                            <div className="flex flex-col overflow-y-scroll h-96 my-2">
                                <input type="text" name="di" id="" placeholder="Diagnostic Name" className="p-3 rounded-md border mb-2" />
                                <select name="" id="" className="w-full p-3 rounded-md mb-2 border">
                                    <option className="p-3 rounded" value="" disabled selected>Select Division</option>
                                    <option value="type1">Dhaka</option>
                                    <option value="type2">Rajshahi</option>
                                </select>
                                <select name="" id="" className="w-full p-3 rounded-md mb-2 border">
                                    <option className="p-3 rounded" value="" disabled selected>Select District</option>
                                    <option value="type1">Rajshahi</option>
                                    <option value="type2">Dhaka</option>
                                    <option value="type2">Chapainawabganj</option>
                                </select>
                                <select name="" id="" className="w-full p-3 rounded-md mb-2 border">
                                    <option className="p-3 rounded" value="" disabled selected>Select Upozilla</option>
                                    <option value="type1">Dhaka UPO</option>
                                    <option value="type2">Rajshahi UPO</option>
                                    <option value="type2">Chapainawabganj Sadar</option>
                                    <option value="type2">Shibganj</option>
                                </select>
                                <input type="text" name="village" id="" placeholder="Type Village" className="p-3 rounded-md border mb-2" />
                                <input type="text" name="service" id="" placeholder="Type Service" className="p-3 rounded-md border mb-2" />
                                <input type="time" name="" id="" className="w-full p-3 rounded-md mb-2 border" placeholder="Time set" />
                                <input type="time" name="" id="" className="w-full p-3 rounded-md mb-2 border" placeholder="Time set" />
                                <input type="text" name="village" id="" placeholder="Email Address" className="p-3 rounded-md border mb-2" />
                                <input type="number" name="service" id="" placeholder="Mobile Number" className="p-3 rounded-md border mb-2" />
                                <input type="password" name="service" id="" placeholder="Password" className="p-3 rounded-md border mb-2" />
                                <input type="file" name="" id="" className=" p-3 rounded-md border border-dashed hover:border-gray-400 mb-2" />

                            </div>
                            <div className="flex justify-center items-center gap-3   ">
                                <Link to="/" className="bg-gray-500 w-full text-white p-3 rounded-md mt-2 text-center">Login</Link>
                                <button type="submit" className="bg-green-500 w-full text-white p-3 rounded-md mt-2">Register</button>
                            </div>
                        </form>
                        {/* Hospital registration form fields */}
                    </div>
                )}
                {selection === 'doctor' && (
                    <div>
                        <form className=" flex flex-col ">
                            <div className="flex flex-col overflow-y-scroll max-h-96 my-2">
                                <input type="text" name="village" id="" placeholder="Email Address" className="p-3 rounded-md border mb-2" />
                                <input type="number" name="service" id="" placeholder="Mobile Number" className="p-3 rounded-md border mb-2" />
                                <input type="password" name="service" id="" placeholder="Password" className="p-3 rounded-md border mb-2" />
                            </div>
                            <div className="flex justify-center items-center gap-3   ">
                                <Link to="/" className="bg-gray-500 w-full text-white p-3 rounded-md mt-2 text-center">Login</Link>
                                <button type="submit" className="bg-green-500 w-full text-white p-3 rounded-md mt-2">Register</button>
                            </div>
                        </form>
                        {/* Hospital registration form fields */}
                    </div>
                )}
                {selection === 'patient' && (
                    <div>
                        <form className=" flex flex-col ">
                            <div className="flex flex-col overflow-y-scroll max-h-96 my-2">
                                <input type="number" name="service" id="" placeholder="Mobile Number" className="p-3 rounded-md border mb-2" />
                                <input type="password" name="service" id="" placeholder="Password" className="p-3 rounded-md border mb-2" />
                            </div>
                            <div className="flex justify-center items-center gap-3   ">
                                <Link to="/" className="bg-gray-500 w-full text-white p-3 rounded-md mt-2 text-center">Login</Link>
                                <button type="submit" className="bg-green-500 w-full text-white p-3 rounded-md mt-2">Register</button>
                            </div>
                        </form>
                        {/* Hospital registration form fields */}
                    </div>
                )}


            </div>


        </div>
    )
}

export default Register
