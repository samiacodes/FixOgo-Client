import React from 'react';
import { FloatingNav } from '../../../../../components/ui/floating-navbar';
import { IoChatboxEllipsesSharp, IoHome, IoPersonCircleSharp } from 'react-icons/io5';

const Navbar = () => {
    const navItems = [
      {
        name: "Home",
        link: "/",
        icon: <IoHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "About",
        link: "/about",
        icon: (
          <IoPersonCircleSharp className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
      {
        name: "Contact",
        link: "/contact",
        icon: (
          <IoChatboxEllipsesSharp className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
    ];
    return (
      
        <FloatingNav navItems={navItems} />
    );
};

export default Navbar;