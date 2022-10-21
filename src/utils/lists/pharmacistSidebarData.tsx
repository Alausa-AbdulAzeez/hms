import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowsSplitUpAndLeft,
  faFirstAid,
  faHome,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarItemsListType } from './sidebarItemsList'

export const pharmacistSidebarDataArray: sidebarItemsListType = [
  {
    title: 'Dashboard',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHome} />,
    link: '/',
  },

  {
    title: 'Medicine Category',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} />,
    link: '/medicineCategory',
  },
  {
    title: 'Manage Medicine',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faFirstAid} />,
    link: '/manageMedicine',
  },
  {
    title: 'Provide Medication',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faStethoscope} />,
    link: '/provideMedication',
  },
  {
    title: 'Profile',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUser} />,
    link: '/profile',
  },
]
