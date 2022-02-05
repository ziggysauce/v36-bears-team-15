import React from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { GoNote } from 'react-icons/go';
import { RiTodoLine } from 'react-icons/ri';
import { BsClockHistory, BsPen, BsCalendar } from 'react-icons/bs';

type NavigationObject = {
  label: string;
  href: string;
  Icon: React.ReactChild;
};

export const navigation: Array<NavigationObject> = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    Icon: <MdOutlineSpaceDashboard />,
  },
  {
    label: 'Notes',
    href: '/note',
    Icon: <GoNote />,
  },
  {
    label: 'To Dos',
    href: '/to-do',
    Icon: <RiTodoLine />,
  },
  {
    label: 'Pomodoro',
    href: '/pomodoro',
    Icon: <BsClockHistory />,
  },
  {
    label: 'Mood Logger',
    href: '/mood-logger',
    Icon: <BsPen />,
  },
  {
    label: 'Calendar',
    href: '/calendar',
    Icon: <BsCalendar />,
  },
];
