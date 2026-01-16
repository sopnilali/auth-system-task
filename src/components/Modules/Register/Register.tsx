import React, { useState } from "react"
import { Link } from "react-router-dom"


const Register = () => {

    const [selection, setSelection]: any = useState('hospital')
    const [formData, setFormData] = useState({
        division: '',
        district: '',
        upozilla: ''
    })

    // Division to District mapping
    const divisionDistricts: { [key: string]: string[] } = {
        'dhaka': ['Dhaka', 'Gazipur', 'Narayanganj', 'Tangail'],
        'rajshahi': ['Rajshahi', 'Chapainawabganj', 'Naogaon', 'Natore']
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelection(e.target.value)
    }

    const handleDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const division = e.target.value
        setFormData({
            division: division,
            district: '', // Reset district when division changes
            upozilla: '' // Reset upozilla when division changes
        })
    }

    const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            district: e.target.value,
            upozilla: '' // Reset upozilla when district changes
        })
    }

    const handleUpozillaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            upozilla: e.target.value
        })
    }

    // Check if district dropdown should be enabled
    const isDistrictEnabled = formData.division.toLowerCase() === 'dhaka' || formData.division.toLowerCase() === 'rajshahi'

    return (
        <div className="bg-gray-300 min-h-screen flex items-center max-w-full px-4 py-4 sm:px-6 md:px-8">
            <div className="bg-white mx-auto w-full max-w-xl py-4 sm:py-6 rounded-md shadow-lg hover:shadow-xl px-4 sm:px-6 md:px-10">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-3 sm:py-4 md:py-5 font-bold text-green-700">Registration</h2>

                <select
                    value={selection}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 rounded-md mb-4 sm:mb-5 border text-sm sm:text-base"
                >
                    <option className="p-3 rounded" value="" disabled>Select an option</option>
                    <option className="p-3 rounded" value="hospital">Hospital</option>
                    <option className="p-3" value="diagnostic">Diagnostic</option>
                    <option className="p-3" value="doctor">Doctor</option>
                    <option className="p-3" value="patient">Patient</option>
                </select>

                {selection === 'hospital' && (
                    <div>
                        <form className="max-w-full flex flex-col">
                            <div className="flex flex-col overflow-y-scroll scrollbar-hide h-64 sm:h-80 md:h-96 my-2">
                                <input type="text" name="di" id="" placeholder="Diagnostic Name" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <select 
                                    name="division" 
                                    id="division" 
                                    value={formData.division}
                                    onChange={handleDivisionChange}
                                    className="w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base"
                                >
                                    <option className="p-3 rounded" value="" disabled>Select Division</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="rajshahi">Rajshahi</option>
                                </select>
                                <select 
                                    name="district" 
                                    id="district" 
                                    value={formData.district}
                                    onChange={handleDistrictChange}
                                    disabled={!isDistrictEnabled}
                                    className={`w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base ${!isDistrictEnabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                >
                                    <option className="p-3 rounded" value="" disabled>Select District</option>
                                    {formData.division && divisionDistricts[formData.division.toLowerCase()]?.map((district, index) => (
                                        <option key={index} value={district.toLowerCase()}>{district}</option>
                                    ))}
                                </select>
                                <select 
                                    name="upozilla" 
                                    id="upozilla" 
                                    value={formData.upozilla}
                                    onChange={handleUpozillaChange}
                                    disabled={!formData.district}
                                    className={`w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base ${!formData.district ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                >
                                    <option className="p-3 rounded" value="" disabled>Select Upozilla</option>
                                    <option value="dhaka-upo">Dhaka UPO</option>
                                    <option value="rajshahi-upo">Rajshahi UPO</option>
                                    <option value="chapainawabganj-sadar">Chapainawabganj Sadar</option>
                                    <option value="shibganj">Shibganj</option>
                                </select>
                                <input type="text" name="village" id="" placeholder="Type Village" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="text" name="service" id="" placeholder="Type Service" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="time" name="" id="" className="w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base" placeholder="Time set" />
                                <input type="time" name="" id="" className="w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base" placeholder="Time set" />
                                <input type="text" name="village" id="" placeholder="Email Address" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="number" name="service" id="" placeholder="Mobile Number" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="password" name="service" id="" placeholder="Password" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="file" name="" id="" className="p-2 sm:p-3 rounded-md border border-dashed hover:border-gray-400 mb-2 text-xs sm:text-sm" />

                            </div>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
                                <Link to="/" className="bg-gray-500 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-center text-sm sm:text-base">Login</Link>
                                <button type="submit" className="bg-green-500 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-sm sm:text-base">Register</button>
                            </div>
                        </form>
                        {/* Hospital registration form fields */}
                    </div>
                )}
                {selection === 'diagnostic' && (
                    <div>
                        <form className="flex flex-col">
                            <div className="flex flex-col overflow-y-scroll scrollbar-hide h-64 sm:h-80 md:h-96 my-2">
                                <input type="text" name="di" id="" placeholder="Diagnostic Name" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <select 
                                    name="division" 
                                    id="division-diagnostic" 
                                    value={formData.division}
                                    onChange={handleDivisionChange}
                                    className="w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base"
                                >
                                    <option className="p-3 rounded" value="" disabled>Select Division</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="rajshahi">Rajshahi</option>
                                </select>
                                <select 
                                    name="district" 
                                    id="district-diagnostic" 
                                    value={formData.district}
                                    onChange={handleDistrictChange}
                                    disabled={!isDistrictEnabled}
                                    className={`w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base ${!isDistrictEnabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                >
                                    <option className="p-3 rounded" value="" disabled>Select District</option>
                                    {formData.division && divisionDistricts[formData.division.toLowerCase()]?.map((district, index) => (
                                        <option key={index} value={district.toLowerCase()}>{district}</option>
                                    ))}
                                </select>
                                <select 
                                    name="upozilla" 
                                    id="upozilla-diagnostic" 
                                    value={formData.upozilla}
                                    onChange={handleUpozillaChange}
                                    disabled={!formData.district}
                                    className={`w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base ${!formData.district ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                >
                                    <option className="p-3 rounded" value="" disabled>Select Upozilla</option>
                                    <option value="dhaka-upo">Dhaka UPO</option>
                                    <option value="rajshahi-upo">Rajshahi UPO</option>
                                    <option value="chapainawabganj-sadar">Chapainawabganj Sadar</option>
                                    <option value="shibganj">Shibganj</option>
                                </select>
                                <input type="text" name="village" id="" placeholder="Type Village" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="text" name="service" id="" placeholder="Type Service" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="time" name="" id="" className="w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base" placeholder="Time set" />
                                <input type="time" name="" id="" className="w-full p-2 sm:p-3 rounded-md mb-2 border text-sm sm:text-base" placeholder="Time set" />
                                <input type="text" name="village" id="" placeholder="Email Address" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="number" name="service" id="" placeholder="Mobile Number" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="password" name="service" id="" placeholder="Password" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="file" name="" id="" className="p-2 sm:p-3 rounded-md border border-dashed hover:border-gray-400 mb-2 text-xs sm:text-sm" />

                            </div>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
                                <Link to="/" className="bg-gray-500 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-center text-sm sm:text-base">Login</Link>
                                <button type="submit" className="bg-green-500 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-sm sm:text-base">Register</button>
                            </div>
                        </form>
                        {/* Hospital registration form fields */}
                    </div>
                )}
                {selection === 'doctor' && (
                    <div>
                        <form className="flex flex-col">
                            <div className="flex flex-col overflow-y-scroll scrollbar-hide max-h-64 sm:max-h-80 md:max-h-96 my-2">
                                <input type="text" name="village" id="" placeholder="Email Address" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="number" name="service" id="" placeholder="Mobile Number" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="password" name="service" id="" placeholder="Password" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
                                <Link to="/" className="bg-gray-500 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-center text-sm sm:text-base">Login</Link>
                                <button type="submit" className="bg-green-500 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-sm sm:text-base">Register</button>
                            </div>
                        </form>
                        {/* Hospital registration form fields */}
                    </div>
                )}
                {selection === 'patient' && (
                    <div>
                        <form className="flex flex-col">
                            <div className="flex flex-col overflow-y-scroll scrollbar-hide max-h-64 sm:max-h-80 md:max-h-96 my-2">
                                <input type="number" name="service" id="" placeholder="Mobile Number" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                                <input type="password" name="service" id="" placeholder="Password" className="p-2 sm:p-3 rounded-md border mb-2 text-sm sm:text-base" />
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
                                <Link to="/" className="bg-gray-500 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-center text-sm sm:text-base">Login</Link>
                                <button type="submit" className="bg-green-500 w-full text-white p-2 sm:p-3 rounded-md mt-2 text-sm sm:text-base">Register</button>
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
