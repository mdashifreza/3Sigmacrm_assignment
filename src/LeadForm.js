import React, { useState } from 'react';
import sigma from '../src/assets/sigma.png';
import person from '../src/assets/person.png';
import email from '../src/assets/email.png';
import phone from '../src/assets/phone.png';
import date from '../src/assets/date.png';
import rupee from '../src/assets/rupee.png';
import world from '../src/assets/world.png';
import option from '../src/assets/option.png';
import time from '../src/assets/time.png';


const LeadForm = () => {
    const [formData, setFormData] = useState({
        leadName: '',
        email: '',
        address: '',
        saleValue: '',
        phoneNumber: '',
        date: '',
        time: '',
        options: '',
        products: '',
        note: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='3signaCRmPage ml-10 mr-10 mb-10 bg-slate-200'>
            <div className="HeroBanner flex flex-col sm:flex-row justify-between items-center pl-5 pr-5">
                <p className='font-extrabold text-2xl sm:text-3xl'>Magnabox Private Limited</p>
                <img src={sigma} alt="sigma.png" className='mt-5 sm:mt-0' />
            </div>
            <div className="HeroBanner flex justify-between items-center pl-5 pr-5 mt-10">
                <p className='font-bold'>Add new lead form</p>
                <button className='p-2 text-red-400 font-semibold border-2 border-red-200 rounded-md'>Cancel</button>
            </div>
            <form className="pl-5 pr-5 mt-5 sm:mt-10" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700">
                            Lead name{" "}<span className='text-red-400'>*</span>
                        </label>
                        <div className="mt-1 sm:mr-5 flex items-center">
                            <img src={person} alt="person.png" className='bg-white p-2 rounded-l-md' />
                            <input
                                type="text"
                                placeholder='Md Ashif Reza'
                                name="leadName"
                                id="leadName"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-r-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700 mt-1">
                            Email ID{" "}<span className='text-red-400'>*</span>
                        </label>
                        <div className="mt-1 mr-5 flex items-center">
                            <div>
                                <img src={email} alt="email.png" className='bg-white p-2 rounded-l-md' />
                            </div>
                            <input
                                type="text"
                                name="leadName"
                                id="leadName"
                                placeholder='ashif.cse.1723@iiitbh.ac.in'
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-r-md p-2"
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700 mt-1">
                            Phone number<span className='text-red-400'>*</span>
                        </label>
                        <div className="mt-1 mr-5 flex items-center">
                            <img src={phone} alt="person.png" className='bg-white p-2 rounded-l-md h-10' />
                            <input
                                type="text"
                                placeholder='+91 6209155727'
                                name="leadName"
                                id="leadName"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-r-md p-2 h-10"
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700 mt-1">
                            Address
                        </label>
                        <div className="mt-1 mr-5 flex items-center">
                            <div>
                                <img src={world} alt="person.png" className='bg-white p-2 rounded-l-md' />
                            </div>
                            <input
                                type="text"
                                placeholder='Sultanpur, New Delhi 110030'
                                name="leadName"
                                id="leadName"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-r-md p-2 h-10"
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700 mt-1">
                            Sale Value
                        </label>
                        <div className="mt-1 mr-5 flex items-center">
                            <img src={rupee} alt="person.png" className='bg-white p-2 rounded-l-md h-10' />
                            <input
                                type="text"
                                placeholder='50, 0000'
                                name="leadName"
                                id="leadName"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-r-md p-2 h-10"
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700 mt-1">
                            Date
                        </label>
                        <div className="mt-1 mr-5 flex items-center">
                            <img src={date} alt="person.png" className='bg-white p-2 rounded-l-md h-10' />
                            <input
                                type="date"
                                name="leadName"
                                id="leadName"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-r-md p-2 h-10 text-gray-400"
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="leadTime" className="block text-sm font-medium text-gray-700 mt-1">
                            Time
                        </label>
                        <div className="mt-1 mr-5 flex items-center">
                            <img src={time} alt="clock.png" className="bg-white p-2 rounded-l-md h-10" />
                            <div className="">
                                <select
                                    name="leadTime"
                                    id="leadTime"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full bg-white sm:text-sm border-gray-300 rounded-r-md p-2 h-10 appearance-none cursor-pointer bg-transparent text-gray-400"
                                    onChange={handleChange}
                                >
                                    <option value="" disabled selected hidden>Select Time</option>
                                    {Array.from({ length: 24 }, (_, hour) => (
                                        <option key={hour} value={hour}>{`${hour.toString().padStart(2, '0')}:00`}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700 mt-1">
                            Options
                        </label>
                        <div className="mt-1 mr-5 flex items-center">
                            <img src={option} alt="person.png" className='bg-white p-2 rounded-l-md h-10' />
                            <select
                                name="leadOptions"
                                id="leadOptions"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-r-md p-2 h-10 text-gray-400"
                                onChange={handleChange}
                            >
                                <option value="" disabled selected hidden>Select an     Option</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700 mt-1">
                            Products
                        </label>
                        <div className="mt-1 mr-5 flex items-center">
                            <img src={option} alt="person.png" className='bg-white p-2 rounded-l-md h-10' />
                            <select
                                name="leadOptions"
                                id="leadOptions"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-r-md p-2 h-10 text-gray-400"
                                onChange={handleChange}
                            >
                                <option value="" disabled selected hidden></option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700 mt-1">
                            Note
                        </label>
                        <div className="mt-1 mr-5">
                            <textarea
                                type="text"
                                name="leadName"
                                id="leadName"
                                placeholder='Enter note'
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 h-28"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            <div className="button sm:mr-5 mt-5 sm:mt-12">
            <button className='bg-blue-500 text-white font-bold w-full p-2 rounded-md '>Add lead</button>
            </div>
            </form>
        </div>
    );
};

export default LeadForm;