import {
  faClipboard,
  faWindowRestore,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBaby,
  faBed,
  faDroplet,
  faFileInvoiceDollar,
  faFlaskVial,
  faHeartCircleExclamation,
  faHospitalUser,
  faListCheck,
  faRightLeft,
  faSliders,
  faSuitcaseMedical,
  faUserDoctor,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type CardContentType = {
  icon: JSX.Element
  title: string
  link: string
  color: string
}[]

export const cardContentList: CardContentType = [
  {
    title: 'Doctor',
    icon: <FontAwesomeIcon icon={faUserDoctor} />,
    link: '/doctor',
    color: 'aliceblue',
  },
  {
    title: 'Patient',
    icon: <FontAwesomeIcon icon={faHospitalUser} />,
    link: '/patient',
    color: 'rgb(255, 240, 240)',
  },
  {
    title: 'Nurse',
    icon: <FontAwesomeIcon icon={faUserDoctor} />,
    link: '/nurse',
    color: 'rgb(240, 255, 240)',
  },
  {
    title: 'Pharmacist',
    icon: <FontAwesomeIcon icon={faSuitcaseMedical} />,
    link: '/pharmacist',
    color: 'rgb(240, 242, 255)',
  },
  {
    title: 'Laboratorist',
    icon: <FontAwesomeIcon icon={faFlaskVial} />,
    link: '/laboratorist',
    color: 'rgb(255, 255, 240)',
  },
  {
    title: 'Accountant',
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    link: '/accountant',
    color: 'rgb(255, 247, 240)',
  },

  {
    title: 'Appointment',
    icon: <FontAwesomeIcon icon={faRightLeft} />,
    link: 'appointment',
    color: 'rgb(240, 249, 255)',
  },
  {
    title: 'Payment',
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    link: '/payment',
    color: 'rgb(255, 240, 249)',
  },
  {
    title: 'View Blood Bank',
    icon: <FontAwesomeIcon icon={faDroplet} />,
    link: '/viewBloodBank',
    color: 'rgb(240, 253, 255)',
  },
  {
    title: 'Pharmacist',
    icon: <FontAwesomeIcon icon={faSuitcaseMedical} />,
    link: '/pharmacist',
    color: 'rgb(240, 255, 248)',
  },
  {
    title: 'Report',
    icon: <FontAwesomeIcon icon={faListCheck} />,
    link: '/report',
    color: 'rgb(240, 255, 241)',
  },
  {
    title: 'View Birth Report',
    icon: <FontAwesomeIcon icon={faBaby} />,
    link: '/deathReport',
    color: 'rgb(249, 255, 240)',
  },
  {
    title: 'View Death Report',
    icon: <FontAwesomeIcon icon={faHeartCircleExclamation} />,
    link: '/deathReport',
    color: 'rgb(254, 255, 240)',
  },
  {
    title: 'Bed Allotment',
    icon: <FontAwesomeIcon icon={faBed} />,
    link: '/bedAllotment',
    color: 'rgb(255, 246, 240)',
  },
  {
    title: 'Noticeboard',
    icon: <FontAwesomeIcon icon={faClipboard} />,
    link: '/noticeboard',
    color: 'rgb(255, 240, 254)',
  },
  {
    title: 'System Setting',
    icon: <FontAwesomeIcon icon={faSliders} />,
    link: 'setting',
    color: 'rgb(254, 240, 255)',
  },
  {
    title: 'Backup & Restore',
    icon: <FontAwesomeIcon icon={faWindowRestore} />,
    link: 'backup',
    color: 'rgb(241, 240, 255)',
  },
]
