import React from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import Tag0 from '../../assets/tag.png'
import Tag2 from '../../assets/tag2.png'
import Tag3 from '../../assets/tag3.png'
import Tag4 from '../../assets/tag4.png'
import Tag5 from '../../assets/tag5.png'
import Btn from '../../assets/btn.png'

const Header = () => {

const items = [
  {
    label: 'Applied',
    key: '1',
    count: '1745'
  },
  {
    label: 'Shortlisted',
    key: '2',
    count: '453',
  },
  {
    label: 'Technical Interview',
    key: '3',
    count: '453',
  },
  {
    label: 'Video Interview I',
    key: '4',
    count: '25',
  },
  {
    label: 'Video Interview II',
    key: '5',
    count: '25',
  },
  {
    label: 'Video Interview III',
    key: '6',
    count: '25',
  },
  {
    label: 'Offer',
    key: '7',
    count: '25',
  },
  {
    label: 'Withdrawn',
    key: '8',
    count: '25',
  },

  
];

  return (
    <main className="bg-[#F9FAFF] sticky top-0 z-[10] fit">
        <div className=" mx-auto py-2">
        <div className="flex justify-between w-full mt-4">
           
          <div className="flex w-[60%] flex-col px-8">
            <h1 className='text-[24px] font-bold text-blue-700 '>London Internship Program</h1>
            <p>London</p>
          </div>
          <div className="flex w-[50%] items-center mb-3">
            <div className='dropdown'>
                <Button style={{height:'40px', width:'250px'}} className='dropbtn'>
                    <Space size={23}>
                    <span className='font-semibold text-blue-600'>Opportunity Browsing</span>
                    <DownOutlined />
                    </Space>
                </Button>
                <div className="dropdown-content">
                    {items.map(item=>(
                         <Link to="/" className='border border-b-1 hover:text-blue-600 hover:font-medium '> 
                        <div className=' flex hover:bg-[#EDF2FF] my-1 hover:!text-blue-600 cursor-pointer justify-between items-center'>
                           
                             <div className='text-sm '>
                              {item.label}  
                             </div>
                            <div className='bg-gray-100 hover:[#D1DDFF]  rounded-md h-5 w-10 flex items-center font-medium justify-center mr-4 text-xs'> 
                            {item.count}
                            </div>
                        </div>
                        </Link>
                    ))}
                    
                </div>
            </div>
          </div>
          <div className="flex w-full items-center mb-3">
            <div className='flex'>
            <img src={Tag0} alt='tag' className='h-16 w-16' />
            <img src={Tag2} alt='tag' className='h-16 w-16'/>
            <img src={Tag3} alt='tag' className='h-16 w-16'/>
            <img src={Tag4} alt='tag' className='h-16 w-16'/>
            <img src={Tag5} alt='tag' className='h-16 w-16'/>
            </div>
            <div>
            {/* <img src={Btn} alt='btn' /> */}
            <Button style={{height:'40px', width:'250px'}} className='dropbtn bg-[#1D5ECD]'>
                    <Space size={23}>
                    <span className=' text-white'>Move To Video Interview I</span>
                    <DownOutlined />
                    </Space>
                </Button>
            </div>
          </div>
          </div>
        </div>
    </main>
  )
}

export default Header