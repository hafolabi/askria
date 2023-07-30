import { Input, Select } from 'antd'
import React from 'react'

function SelectQuestion({handleChange, setSelect}) {
  return (
    <div className="bg-white w-full mt-4 shadow rounded-lg overflow-hidden mb-0">
    <div className="bg-[#D0F7FA] p-3 py-4 flex justify-between">
      <b>Questions</b>
      <b className="cursor-pointer" onClick={() => setSelect(false)}>
        x
      </b>
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
  )
}

export default SelectQuestion