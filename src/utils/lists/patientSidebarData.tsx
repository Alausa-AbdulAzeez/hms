import {
  faCalendarCheck,
  faCreditCard,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBed,
  faCalendarDay,
  faFileInvoiceDollar,
  faHome,
  faPills,
  faUserDoctor,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarItemsListType } from './sidebarItemsList'

export const patientSidebarDataArray: sidebarItemsListType = [
  {
    title: 'Dashboard',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHome} />,
    link: '/',
  },
  {
    title: 'View Appointment',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    link: '/patientAppointment',
  },
  {
    title: 'View Prescription',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faPills} />,
    link: '/viewPrescription',
  },
  {
    title: 'View Doctor',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUserDoctor} />,
    link: '/viewDoctor',
  },
  {
    title: 'Admit History',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faBed} />,
    link: '/admitHistory',
  },
  {
    title: 'Operation History',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faCalendarDay} />,
    link: '/operationHistory',
  },
  {
    title: 'View Invoice',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    link: '/viewInvoice',
  },

  {
    title: 'Payment History',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faCreditCard} />,
    link: '/paymentHistory',
  },

  {
    title: 'Profile',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUser} />,
    link: '/profile',
  },
]
