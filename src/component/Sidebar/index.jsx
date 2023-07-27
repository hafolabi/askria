import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Frame3 from '../../assets/Frame3.png'
import Frame4 from '../../assets/Frame4.png'
import Frame5 from '../../assets/Frame5.png'
import Frame6 from '../../assets/Frame6.png'
import Frame7 from '../../assets/Frame7.png'
import Frame8 from '../../assets/Frame8.png'
import Home1 from '../../assets/home1.png'
import Home2 from '../../assets/home2.png'
import Home3 from '../../assets/home3.png'
import Settings from '../../assets/settings.png'
import Sideprofile from '../../assets/sideprofile.png'

const Sidebar = () => {
    const routes = [
        {
            path: '/dashboard',
            icon: Frame1,
        },
        {
            path: '/',
            icon: Frame2,
        },
        {
            path: '/',
            icon: Frame3,
        },
        {
            path: '/',
            icon: Frame4,
        },
        {
            path: '/',
            icon: Frame5,
        },
        {
            path: '/',
            icon: Frame6,
        },
        {
            path: '/',
            icon: Frame7,
        },
        {
            path: '/',
            icon: Frame8,
        },
    ];

    const routesII = [
        
        {
            path: '/dashboard',
            icon: Home1,
        },
        {
            path: '/',
            icon: Home2,
        },
        {
            path: '/dashboard',
            icon: Home3,
        },
    ];
  return (
    <nav className="block z-50 w-20 h-screen transition-all duration-300 bg-white overflow-y-scroll">
        <div className="flex flex-col justify-between h-full">
            <div className="px-2 py-8">
            { window.location.pathname.includes('dashboard') ? "" :
            <Link className="flex px-1 text-black" to="/dashboard">
                <img src={Logo} alt="logo" />
            </Link>
            }
            <div className="space-y-2 text-gray-400">
                <div className="pt-8">
                   { window.location.pathname.includes('dashboard') ?
                    routesII.map((route, index) => (
                        <Link
                            to={route.path}
                            key={route.index}
                            end={index === 0 && true}
                            className={'hover:translate-x-1 text-sm transition-all duration-500 flex items-center justify-center gap-8 mb-8'}
                        >
                            <img src={route.icon} alt={route.title} className='w-[20px] h-[20px]'/>
                            {route.title}
                        </Link>
                    )) : 
                     routes.map((route, index) => (
                        <Link
                            to={route.path}
                            key={route.index}
                            end={index === 0 && true}
                            className={'hover:translate-x-1 text-sm transition-all duration-500 flex items-center gap-6 mb-4'}
                        >
                            <img src={route.icon} alt={route.title} />
                            {route.title}
                        </Link>
                    ))}
                    </div>
                </div>
                { window.location.pathname.includes('dashboard') ? "" :
                <>
                <div className="pt-12">
                <img src={Settings} alt={'settings'} />
                </div>
                <div className="pt-4">
                <img src={Sideprofile} alt={'settings'} />
                </div>
                </>
                }
            </div>
        </div>
    </nav>
  )
}

export default Sidebar