import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; 
import { deleteEmployee } from '../../services/Action/Action';
import { useNavigate } from 'react-router-dom';

const ViewData = () => {
  const { employees } = useSelector(state => state.reduceremployee);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleEdit = (employee) => {
    navigate(`/Updatedata/${employee.id}`, { state: { employee } }); 
  };

  return (
    <div className='bg-gray-800 p-6 shadow-md'>
      <h2 className='text-2xl font-bold text-center mb-4 text-white'>Employee Data</h2>
      <table className='min-w-full bg-gray-900 border border-gray-700'>
        <thead className='bg-gray-700 text-white'>
          <tr>
            <th className='py-2 px-4 border-b border-gray-600'>#</th>
            <th className='py-2 px-4 border-b border-gray-600'>Employee Name</th>
            <th className='py-2 px-4 border-b border-gray-600'>Email</th>
            <th className='py-2 px-4 border-b border-gray-600'>Phone Number</th>
            <th className='py-2 px-4 border-b border-gray-600'>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr>
              <td className='py-2 px-4 border-b border-gray-600'>{index + 1}</td>
              <td className='py-2 px-4 border-b border-gray-600 text-white'>{employee.name}</td>
              <td className='py-2 px-4 border-b border-gray-600 text-white'>{employee.email}</td>
              <td className='py-2 px-4 border-b border-gray-600 text-white'>{employee.phone}</td>
              <td className='py-2 px-4 border-b border-gray-600 flex space-x-2'>
                <button className='bg-black-600 p-2 text-white rounded hover:bg-gray-700' onClick={() => handleEdit(employee)}>
                  <FaEdit />
                </button>
                <button className='bg-black-600 p-2 text-white rounded hover:bg-gray-700' onClick={() => handleDelete(employee.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewData;
