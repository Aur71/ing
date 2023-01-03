import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const navigation = [
  {
    id: 1,
    name: 'account',
    path: '/account/myaccount',
  },

  {
    id: 2,
    name: 'write',
    path: '/write',
  },

  {
    id: 3,
    name: 'about',
    path: '/about',
  },
];

const social = [
  {
    id: 1,
    name: 'facebook',
    path: '#',
    icon: <FaFacebookF />,
  },

  {
    id: 2,
    name: 'instagram',
    path: '#',
    icon: <AiFillInstagram />,
  },

  {
    id: 3,
    name: 'twitter',
    path: '#',
    icon: <AiOutlineTwitter />,
  },
];

export { navigation, social };
