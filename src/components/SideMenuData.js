import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
//add materias no menu
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Matéria',
    path: '/Materia',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    subMat:'apenas'
  },
  {
    title: 'Calendário',
    path: '/Calendario',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
];