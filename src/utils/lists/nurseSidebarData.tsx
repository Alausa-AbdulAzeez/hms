import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faBed,
  faDroplet,
  faHome,
  faHospitalUser,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarItemsListType } from './sidebarItemsList'

//abs

export const nurseSidebarDataArray: sidebarItemsListType = [
  {
    title: 'Dashboard',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHome} />,
    link: '/',
  },
  {
    title: 'Patient',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHospitalUser} />,
    link: '/patient',
  },
  {
    title: 'Bed Ward',
    hasSubList: true,
    icon: <FontAwesomeIcon icon={faBed} />,
    link: '/bedWard',
  },
  {
    title: 'Blood Bank',
    hasSubList: true,
    icon: <FontAwesomeIcon icon={faDroplet} />,
    link: '/bloodBank',
  },
  {
    title: 'Report',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faListCheck} />,
    link: '/report',
  },
  {
    title: 'Profile',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUser} />,
    link: '/profile',
  },
]
