import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { employeedata } from '../../services/Action/Action';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const dispatch = useDispatch();

    const navigate = useNavigate() ;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with data:", formInput);

        dispatch(employeedata(formInput));

        navigate('/view-data');
        
        setFormInput({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };
    

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Employee Form</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Employee Name</label>
                    <input
                        className="border border-gray-200 p-2 rounded w-full"
                        type="text"
                        id="name"
                        name="name"
                        value={formInput.name}
                        onChange={handleChange}
                        placeholder="Enter employee name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full"
                        type="email"
                        id="email"
                        name="email"
                        value={formInput.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">Mobile Number</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formInput.phone}
                        onChange={handleChange}
                        placeholder="Enter Mobile Number"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EmployeeForm;
