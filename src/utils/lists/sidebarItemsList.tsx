import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faChartColumn,
  faCodeBranch,
  faFileInvoiceDollar,
  faFlaskVial,
  faGears,
  faHome,
  faHospitalUser,
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
  }
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
  },
  {
    title: 'Settings',
    hasSubList: true,
    icon: <FontAwesomeIcon icon={faGears} />,
    link: 'settings',
  },
  {
    title: 'Profile',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUser} />,
    link: '/profile',
  },
]
