import { faCalendarCheck, faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faBed,
  faDroplet,
  faHome,
  faHospitalUser,
  faListCheck,
  faPills,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarItemsListType } from './sidebarItemsList'

export const doctorSidebarDataArray: sidebarItemsListType = [
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
    title: 'Manage Appointment',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    link: '/manageAppointment',
  },
  {
    title: 'Manage Prescription',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faPills} />,
    link: '/managePrescription',
  },
  {
    title: 'Bed Allotment',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faBed} />,
    link: '/bedAllotment',
  },
  {
    title: 'View Blood Bank',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faDroplet} />,
    link: '/viewBloodBank',
  },
  {
    title: 'Manage Report',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faListCheck} />,
    link: '/manageReport',
  },

  {
    title: 'Profile',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUser} />,
    link: '/profile',
  },
]
