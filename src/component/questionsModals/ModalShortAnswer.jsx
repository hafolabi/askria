/** @format */

import { Input, Select } from 'antd';
import React from 'react';
import { RiCloseFill } from 'react-icons/ri';

function ModalShortAnswer({setSelectedOption}) {
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
							value: 'yes or no',
						}}
						className='w-full my-4'
						options={[
							{
								value: 'yes',
								label: 'yes ',
							},
							{
								value: 'no',
								label: 'no ',
							},
						]}
					/>
					<label className='font-bold text-xl' htmlFor=''>
						Question
					</label>
					<br />
					<Input placeholder='Type here' className='mt-4' />
					<div className='flex justify-between items-center mt-3'>
						<button
							className='text-[#A80000] flex items-center p-3' onClick={()=>setSelectedOption('')}>
							<RiCloseFill className='font-bold text-2xl ' />
							Delete question
						</button>
                        <button className='bg-[#087B2F] px-4 py-2 text-white rounded-md'>save</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalShortAnswer;
