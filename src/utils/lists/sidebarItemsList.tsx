import {
  faCalendar,
  faClipboard,
  faMoneyBill1,
  faUser,
  faWindowRestore,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBaby,
  faBed,
  faChartColumn,
  faCodeBranch,
  faDroplet,
  faFileInvoiceDollar,
  faFlaskVial,
  faGears,
  faHeartCircleExclamation,
  faHome,
  faHospitalUser,
  faScissors,
  faSliders,
  faSuitcaseMedical,
  faUserDoctor,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type sidebarItemsListType = {
  title: string
  hasSubList: boolean
  icon: JSX.Element
  subList?: {
    title: string
    icon: JSX.Element
  }[]
  link: string
}[]

export const sidebarDataArray: sidebarItemsListType = [
  {
    title: 'Dashboard',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHome} />,
    link: '/',
  },
  {
    title: 'Department',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faCodeBranch} />,
    link: '/department',
  },
  {
    title: 'Doctor',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUserDoctor} />,
    link: '/doctor',
  },
  {
    title: 'Patient',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHospitalUser} />,
    link: '/patient',
  },
  {
    title: 'Nurse',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUserDoctor} />,
    link: '/nurse',
  },
  {
    title: 'Pharmacist',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faSuitcaseMedical} />,
    link: '/pharmacist',
  },
  {
    title: 'Laboratorist',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faFlaskVial} />,
    link: '/laboratorist',
  },
  {
    title: 'Accountant',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    link: '/accountant',
  },
  {
    title: 'Monitor Hospital',
    hasSubList: true,
    icon: <FontAwesomeIcon icon={faChartColumn} />,
    link: 'monitorHospital',
    subList: [
      {
        title: 'View Appointment',
        icon: <FontAwesomeIcon icon={faCalendar} />,
      },
      { title: 'View Payment', icon: <FontAwesomeIcon icon={faMoneyBill1} /> },
      { title: 'View Bed Status', icon: <FontAwesomeIcon icon={faBed} /> },
      { title: 'View Blood Bank', icon: <FontAwesomeIcon icon={faDroplet} /> },
      {
        title: 'View Medicine',
        icon: <FontAwesomeIcon icon={faSuitcaseMedical} />,
      },
      { title: 'View Operation', icon: <FontAwesomeIcon icon={faScissors} /> },
      {
        title: 'View Death Report',
        icon: <FontAwesomeIcon icon={faHeartCircleExclamation} />,
      },
      { title: 'View Birth Report', icon: <FontAwesomeIcon icon={faBaby} /> },
    ],
  },
  {
    title: 'Settings',
    hasSubList: true,
    icon: <FontAwesomeIcon icon={faGears} />,
    link: 'settings',
    subList: [
      {
        title: 'Manage Noticeboard',
        icon: <FontAwesomeIcon icon={faClipboard} />,
      },
      { title: 'System Setting', icon: <FontAwesomeIcon icon={faSliders} /> },
      {
        title: 'Backup & Restore',
        icon: <FontAwesomeIcon icon={faWindowRestore} />,
      },
    ],
  },
  {
    title: 'Profile',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUser} />,
    link: '/profile',
  },
]
