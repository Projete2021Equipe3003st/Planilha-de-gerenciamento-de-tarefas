import React from 'react';
import { GoCalendar } from "react-icons/go";
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
    icon: <GoCalendar />,
    cName: 'nav-text'
  },
];
