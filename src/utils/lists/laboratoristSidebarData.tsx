import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faDroplet,
  faFileCirclePlus,
  faHandHoldingDroplet,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarItemsListType } from './sidebarItemsList'

export const laboratoristSidebarDataArray: sidebarItemsListType = [
  {
    title: 'Dashboard',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHome} />,
    link: '/',
  },
  {
    title: 'Add Diagnosis Report',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faFileCirclePlus} />,
    link: '/addDiagnosisReport',
  },

  {
    title: 'Manage Blood Bank',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faDroplet} />,
    link: '/manageBloodBank',
  },
  {
    title: 'Manage Blood Donor',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHandHoldingDroplet} />,
    link: '/manageBloodDonor',
  },

  {
    title: 'Profile',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUser} />,
    link: '/profile',
  },
]
