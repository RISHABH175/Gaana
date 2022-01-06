import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { DarkMode } from '@mui/icons-material';

export const SidebarData = [
  {
    title: 'Login / Sign Up',
    path: '/',
    icon: <AiIcons.AiOutlineLogin />,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Radio',
    path: '/reports',
    icon: <IoIcons.IoMdRadio />,
    cName: 'nav-text'
  },
  {
    title: 'Podcast',
    path: '/products',
    icon: <FaIcons.FaPodcast />,
    cName: 'nav-text'
  },
  {
    title: 'My Music',
    path: '/team',
    icon: <FaIcons.FaMusic />,
    cName: 'nav-text'
  },
  {
    title: 'India music',
    path: '/messages',
    icon: <IoIcons.IoMdRadio />,
    cName: 'nav-text'
  },
  {
    title: 'Language',
    path: '/support',
    icon: <FaIcons.FaLanguage />,
    cName: 'nav-text'
  },
  {
    title: 'Dark Mode',
    path: '/support',
    icon:  <DarkMode/>,
    cName: 'nav-text'
  },
  {
    title: 'Go Premium',
    path: '/support',
    icon: <AiIcons.AiOutlineLogin />,

    cName: 'nav-text'
  },
  {
    title: 'Go Ad Free',
    path: '/support',
    icon: <AiIcons.AiOutlineLogin />,

    cName: 'nav-text'
  },
  {
    title: 'Get Gaana Plus',
    path: '/support',
     icon: <AiIcons.AiOutlineLogin />,
    cName: 'nav-text'
  },
];
