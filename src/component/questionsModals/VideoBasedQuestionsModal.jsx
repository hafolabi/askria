/** @format */

import { Input, Select } from 'antd';
import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import Search from 'antd/es/input/Search';
import TextArea from 'antd/es/input/TextArea';

function VideoBasedQuestionsModal({setSelectedOption}) {
    const [inputText, setInputText] = useState("");
    const [vText, setVText] = useState("");
    const [duration, setDuration] = useState("");
    const [sec, setSec] = useState("");

        const handleChange = (selected) => {
    setSec(selected.value);
  };

    const handleVideo = () => {
       console.log(
        "question", inputText,
        vText,
        duration,
        sec
       );
    }


	return (
		<div className='fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-800'>
			<div className='bg-white w-2/5 mt-4 shadow flex flex-col pb-6 rounded-lg overflow-hidden'>
				<div className='bg-[#D0F7FA] p-3 py-4'>
					<b>Questions</b>
				</div>
				<div className='px-6 py-4'>
					<span className='text-gray-400'>4 minute</span>
					<br />
					<label
						className='font-semibold border-b text-xl flex justify-between items-center'
						htmlFor=''>
						Tell us about yourself? <FiEdit2  onClick={() => setInputText("Tell us about yourself?")}/>
					</label>
					<br />
					<label
						className='font-semibold  text-xl flex justify-between items-center'
						htmlFor=''>
						Why did you apply for this program? <FiEdit2 onClick={() => setInputText("Why did you apply for this program? ")}/>
					</label>
					<br />
					<Input
						addonBefore='Q:'
						placeholder=''
						allowClear
						enterButton=''
                        value={inputText}
					/>
					<br />
					<TextArea rows={4} className='mt-4' value={vText} onChange={(e) => setVText(e.target.value)}/>
					<div className='flex gap-4 mt-3'>
						<Input placeholder='Max duration of video' value={duration} onChange={(e) => setDuration(e.target.value)}/>
						<Select
							labelInValue
							defaultValue={{
								value: 'in (sec/min)',
								label: 'in (sec/min)',
							}}
							className='w-full  '
							options={[
								{
									value: '1s',
									label: '1s ',
								},
                                {
									value: '2s',
									label: '2s ',
								},
                                {
									value: '3s',
									label: '3s ',
								},
							]}
                            onChange={handleChange}
						/>
					</div>
					<div className='flex justify-between items-center mt-3 mb-6'>
						<button className='text-[#A80000] flex items-center p-3' onClick={()=>setSelectedOption('')}>
							<RiCloseFill className='font-bold text-2xl ' />
							Delete question
						</button>
						<button onClick={() => handleVideo()} className='bg-[#087B2F] px-4 py-2 text-white rounded-md'>
							save
						</button>
					</div>

                    <span className='text-[#A220CF] text-base font-semibold '>+ Add video interview questions</span>
				</div>
			</div>
		</div>
	);
}

export default VideoBasedQuestionsModal;
