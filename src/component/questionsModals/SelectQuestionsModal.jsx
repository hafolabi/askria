import { Input, Select } from 'antd'
import React from 'react'

function SelectQuestionsModal({handleChange, setSelectQmodal}) {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-800'>
			<div className='bg-white w-2/5 mt-4 shadow flex flex-col pb-6 rounded-lg overflow-hidden'>
				<div className='bg-[#D0F7FA] p-3 py-4 flex justify-between'>
					<b>Questions</b>
					<b className='cursor-pointer' onClick={()=>setSelectQmodal(false)}>x</b>
				</div>
				<div className='px-6 py-4'>
					<label className='font-bold text-xl' htmlFor=''>
						Type
					</label>
					<br />
					<Select
						labelInValue
						defaultValue={{
							value: '',
							label: '',
						}}
						className='w-full mt-4'
						options={[
							{
								value: 'Paragraph',
								label: 'Paragraph ',
							},
                            	{
								value: 'Short answer',
								label: 'Short answer ',
							},
                            	{
								value: 'Yes/No',
								label: 'Yes/No ',
							},
                            	{
								value: 'Dropdown',
								label: 'Dropdown ',
							},
                            	{
								value: 'Date',
								label: 'Date ',
							},
                            	{
								value: 'File upload',
								label: 'File upload ',
							},
                            	{
								value: 'Video question',
								label: 'Video question ',
							},
						]}
                        onChange={handleChange}
					/>
			
				</div>
			</div>
		</div>
  )
}

export default SelectQuestionsModal