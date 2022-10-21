import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faCoins,
  faFileInvoiceDollar,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarItemsListType } from './sidebarItemsList'

export const accountantSidebarDataArray: sidebarItemsListType = [
  {
    title: 'Dashboard',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faHome} />,
    link: '/',
  },
  {
    title: 'Invoice',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    link: '/invoice',
  },
  {
    title: 'View Payment',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faCoins} />,
    link: '/viewPayment',
  },

  {
    title: 'Profile',
    hasSubList: false,
    icon: <FontAwesomeIcon icon={faUser} />,
    link: '/profile',
  },
]
