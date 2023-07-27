/** @format */

import { Checkbox, Input, Select } from 'antd';
import React from 'react';
import { FiList } from 'react-icons/fi';
import { RiAddFill, RiCloseFill } from 'react-icons/ri';

function DropdownQuestionModal({setSelectedOption}) {
	return (
		<div className='fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-800'>
			<div className='bg-white w-2/5 mt-4 shadow flex flex-col pb-6 rounded-lg overflow-hidden'>
				<div className='bg-[#D0F7FA] p-3 py-4'>
					<b>Questions</b>
				</div>
				<div className='px-6 py-4'>
					<label className='font-bold text-xl' htmlFor=''>
						Type
					</label>
					<br />
					<Select
						labelInValue
						defaultValue={{
							value: 'Dropdown',
							label: 'Dropdown',
						}}
						className='w-full  my-4'
						options={[
							{
								value: 'Dropdown',
								label: 'Dropdown ',
							},
						]}
					/>
					<label className='font-bold text-xl' htmlFor=''>
						Question
					</label>
					<br />
					<Input placeholder='Type here' className=' my-4' />
					<label className='font-bold text-xl' htmlFor=''>
						Choice
					</label>
					<div className='flex items-center my-4'>
						<FiList className='text-2xl font-bold' />
						<Input
							placeholder=''
							
						/>
						<RiAddFill className='text-2xl font-bold'/>
					</div>
                    <Checkbox>Enable “Other” option </Checkbox>
					<div className='flex justify-between items-center mt-3'>
						<button className='text-[#A80000] flex items-center p-3' onClick={()=>setSelectedOption('')}>
							<RiCloseFill className='font-bold text-2xl ' />
							Delete question
						</button>
						<button className='bg-[#087B2F] px-4 py-2 text-white rounded-md'>
							save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DropdownQuestionModal;
