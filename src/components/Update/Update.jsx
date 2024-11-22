import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../../services/Action/Action';
const Update = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const employee = location.state?.employee;
    const dispatch = useDispatch(); 

    const [updateInput, setUpdateInput] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    useEffect(() => {
       
            setUpdateInput(employee);
        
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateEmployee(updateInput)); 
        navigate('/view-data');
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Update Employee</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Employee Name</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full"
                        type="text"
                        id="name"
                        name="name"
                        value={updateInput.name}
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
                        value={updateInput.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">Phone Number</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={updateInput.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-600  text-white font-semibold py-2 rounded"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;
