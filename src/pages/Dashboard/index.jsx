/** @format */

import React from 'react';
import Sidebar from '../../component/Sidebar';
import Header from '../../component/Header';
import { FiAlertCircle, FiSearch } from 'react-icons/fi';
import { Checkbox } from 'antd';

const Dashboard = () => {
	return (
		<main>
			<div className='flex bg-[#F9FAFF]'>
				<Sidebar />
				<main className='flex-1 h-screen overflow-x-hidden overflow-y-scroll'>
					<Header />

					<section className='flex gap-6 px-6'>
						<div className='w-[30%]'>
							<div className='flex border items-center p-4 rounded-xl bg-white w-full'>
								<FiSearch />
								<input
									className='w-full px-4 outline-none'
									type='text'
									placeholder='Serach by name, edu, exp or #taga'
								/>
								<FiAlertCircle />
							</div>
							<div className='bg-white mt-3 py-6 rounded-lg'>
								<div className='flex justify-between px-5'>
									<span className='font-medium text-sm'>Filters</span>
									<p>0 Selected</p>
								</div>

								<div className='flex justify-between px-5'>
									<div className='flex gap-2 border-b w-full mt-2 py-3 '>
										<img src='/Vector.svg' alt='file' />
										<span className='font-medium text-sm'>Personal Information</span>
									</div>
									<img src='/file.svg' alt='file' />
								</div>
								<div className='flex justify-between px-5'>
									<div className='flex gap-2 border-b w-full mt-2 py-3 '>
										<img src='/Vector.svg' alt='file' />
										<span className='font-medium text-sm'>Education</span>
									</div>
									<img src='/file.svg' alt='file' />
								</div>
								<div className='flex justify-between px-5'>
									<div className='flex gap-2 border-b w-full mt-2 py-3 '>
										<img src='/Vector.svg' alt='file' />
										<span className='font-medium text-sm'>Work Experience</span>
									</div>
									<img src='/file.svg' alt='file' />
								</div>
								<div className='flex justify-between px-5'>
									<div className='flex gap-2 border-b w-full mt-2 py-3 '>
										<img src='/Vector.svg' alt='file' />
										<span className='font-medium text-sm'>Activity Filter</span>
									</div>
									<img src='/file.svg' alt='file' />
								</div>
								<div className='flex justify-between px-5'>
									<div className='flex gap-2 w-full mt-2 py-3 '>
										<img src='/Vector.svg' alt='file' />
										<span className='font-medium text-sm'>Advanced Filter</span>
									</div>
									<img src='/file.svg' alt='file' />
								</div>
							</div>
						</div>

						<div className='  bg-white items-center w-3/4 px-6 p-5 rounded-md h-screen'>
							<div className='border-b pb-5 flex justify-between w-full'>
								<div className='flex gap-4'>
									{' '}
									<Checkbox></Checkbox>{' '}
									<span className='text-[#1D4ED8] font-medium'>
										247 Candidates
									</span>
								</div>
								<div className='flex gap-5'>
									{' '}
									<div className='text-[#1D4ED8] font-medium'>
										Qualified
									</div>{' '}
									<div className=''>
										Task{' '}
										<span className='text-xs bg-[#F7F8FD] p-1 rounded-full'>
											25
										</span>
									</div>
									<div className=''>
										Disqualified{' '}
										<span className='text-xs bg-[#F7F8FD] p-1 rounded-full'>
											78
										</span>
									</div>{' '}
								</div>
							</div>

							<div className='flex gap-4 py-6 border-b items-center'>
								<Checkbox></Checkbox>
								<div className='h-20 w-20 rounded-full flex text-2xl font-bold justify-center items-center bg-[#EDF4FF]'>
									AS
								</div>
								<div className=''>
									<h3 className='font-bold text-sm mb-3'>
										Aaliyah Sanderson
									</h3>
									<p className='font-medium text-xs'>
										Riyadh, Saudi Arabia
									</p>
									<p className='font-light text-[10px]'>
										Bachelor - Cambridge University (2023 -
										2023)
									</p>
									<span className='text-[#1D4ED8] text-[8px] mr-3'>
										#top_candidate
									</span>
									<span className='text-[#1D4ED8] text-[8px]'>
										#top_candidate
									</span>
									<div className='mt-2'>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											New York
										</span>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											Marketing
										</span>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											London
										</span>
									</div>
								</div>
							</div>

							<div className='flex gap-4 py-6 border-b items-center'>
								<Checkbox></Checkbox>
								<div className='h-20 w-20 rounded-full flex text-2xl font-bold justify-center items-center bg-[#EDF4FF]'>
									AS
								</div>
								<div className=''>
									<h3 className='font-bold text-sm mb-3'>
										Aaliyah Sanderson
									</h3>
									<p className='font-medium text-xs'>
										Riyadh, Saudi Arabia
									</p>
									<p className='font-light text-[10px]'>
										Bachelor - Cambridge University (2023 -
										2023)
									</p>
									<span className='text-[#1D4ED8] text-[8px] mr-3'>
										#top_candidate
									</span>
									<span className='text-[#1D4ED8] text-[8px]'>
										#top_candidate
									</span>
									<div className='mt-2'>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											New York
										</span>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											Marketing
										</span>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											London
										</span>
									</div>
								</div>
							</div>

							<div className='flex gap-4 py-6 border-b items-center'>
								<Checkbox></Checkbox>
								<div className='h-20 w-20 rounded-full flex text-2xl font-bold justify-center items-center bg-[#EDF4FF]'>
									AS
								</div>
								<div className=''>
									<h3 className='font-bold text-sm mb-3'>
										Aaliyah Sanderson
									</h3>
									<p className='font-medium text-xs'>
										Riyadh, Saudi Arabia
									</p>
									<p className='font-light text-[10px]'>
										Bachelor - Cambridge University (2023 -
										2023)
									</p>
									<span className='text-[#1D4ED8] text-[8px] mr-3'>
										#top_candidate
									</span>
									<span className='text-[#1D4ED8] text-[8px]'>
										#top_candidate
									</span>
									<div className='mt-2'>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											New York
										</span>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											Marketing
										</span>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											London
										</span>
									</div>
								</div>
							</div>

							<div className='flex gap-4 py-6 border-b items-center'>
								<Checkbox></Checkbox>
								<div className='h-20 w-20 rounded-full flex text-2xl font-bold justify-center items-center bg-[#EDF4FF]'>
									AS
								</div>
								<div className=''>
									<h3 className='font-bold text-sm mb-3'>
										Aaliyah Sanderson
									</h3>
									<p className='font-medium text-xs'>
										Riyadh, Saudi Arabia
									</p>
									<p className='font-light text-[10px]'>
										Bachelor - Cambridge University (2023 -
										2023)
									</p>
									<span className='text-[#1D4ED8] text-[8px] mr-3'>
										#top_candidate
									</span>
									<span className='text-[#1D4ED8] text-[8px]'>
										#top_candidate
									</span>
									<div className='mt-2'>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											New York
										</span>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											Marketing
										</span>
										<span className='bg-[#F3FAFC] text-[#037092] text-[8px] mr-2 py-1 px-4 rounded-2xl'>
											London
										</span>
									</div>
								</div>
							</div>

							
						</div>
					</section>
				</main>
			</div>
		</main>
	);
};

export default Dashboard;
