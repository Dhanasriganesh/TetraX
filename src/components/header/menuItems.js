// Header Navigation Menu Items Configuration - Based on nexusaisol.com
export const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about',
  },
  {
    name: 'Services',
    path: '/services',
    submenu: [
      { name: 'Consulting', path: '/services/consulting' },
      { name: 'Staffing', path: '/services/staffing' },
      { name: 'Training', path: '/services/training' },
      { name: 'IT Solutions', path: '/services/it-solutions' },
    ],
  },
  {
    name: 'Industries',
    path: '/industries',
  },
  {
    name: 'Careers',
    path: '/careers',
  },
  {
    name: 'Contact Us',
    path: '/contact',
  },
];
