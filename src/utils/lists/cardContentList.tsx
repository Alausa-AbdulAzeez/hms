import {
  faCalendarCheck,
  faClipboard,
} from '@fortawesome/free-regular-svg-icons'
import {
  faArrowsSplitUpAndLeft,
  faBaby,
  faBed,
  faDroplet,
  faFileInvoiceDollar,
  faFirstAid,
  faFlaskVial,
  faHeartCircleExclamation,
  faHospitalUser,
  faListCheck,
  faPills,
  faRetweet,
  faRightLeft,
  faSliders,
  faStethoscope,
  faSuitcaseMedical,
  faUserDoctor,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type CardContentType = {
  icon: JSX.Element
  title: string
  link: string
  color: string
}[]

export const adminCardContentList: CardContentType = [
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
    title: 'Reset Password',
    icon: <FontAwesomeIcon icon={faRetweet} />,
    link: 'resetPassword',
    color: 'rgb(241, 240, 255)',
  },
  // {
  //   title: 'Backup & Restore',
  //   icon: <FontAwesomeIcon icon={faWindowRestore} />,
  //   link: 'backup',
  //   color: 'rgb(241, 240, 255)',
  // },
]
export const doctorCardContentList: CardContentType = [
  {
    title: 'Patient',
    icon: <FontAwesomeIcon icon={faHospitalUser} />,
    link: '/patient',
    color: 'rgb(255, 240, 240)',
  },

  {
    title: 'Manage Appointment',
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    link: '/manageAppointment',
    color: 'rgb(240, 249, 255)',
  },

  {
    title: 'Manage Prescription',
    color: 'rgb(241, 240, 255)',

    icon: <FontAwesomeIcon icon={faPills} />,
    link: '/managePrescription',
  },
  {
    title: 'Bed Allotment',
    color: 'rgb(254, 240, 255)',

    icon: <FontAwesomeIcon icon={faBed} />,
    link: '/bedAllotment',
  },
  {
    title: 'View Blood Bank',
    color: 'rgb(255, 240, 254)',

    icon: <FontAwesomeIcon icon={faDroplet} />,
    link: '/viewBloodBank',
  },
  {
    title: 'Manage Report',
    color: 'rgb(240, 255, 241)',

    icon: <FontAwesomeIcon icon={faListCheck} />,
    link: '/manageReport',
  },
]
export const patientCardContentList: CardContentType = [
  {
    title: 'Doctor',
    icon: <FontAwesomeIcon icon={faHospitalUser} />,
    link: '/viewDoctor',
    color: 'rgb(255, 240, 240)',
  },

  {
    title: 'Appointment',
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    link: '/manageAppointment',
    color: 'rgb(240, 249, 255)',
  },

  {
    title: 'Prescription',
    color: 'rgb(241, 240, 255)',

    icon: <FontAwesomeIcon icon={faPills} />,
    link: '/managePrescription',
  },
  {
    title: 'Admit History',
    color: 'rgb(254, 240, 255)',

    icon: <FontAwesomeIcon icon={faBed} />,
    link: '/admitHistory',
  },
  {
    title: 'Blood Bank',
    color: 'rgb(255, 240, 254)',

    icon: <FontAwesomeIcon icon={faDroplet} />,
    link: '/viewBloodBank',
  },
  {
    title: 'View Invoice',
    color: 'rgb(240, 255, 241)',

    icon: <FontAwesomeIcon icon={faListCheck} />,
    link: '/viewInvoice',
  },
]
export const pharmacistCardContentList: CardContentType = [
  {
    title: 'Medicine Category',
    icon: <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} />,
    link: '/medicineCategory',
    color: 'rgb(255, 240, 240)',
  },

  {
    title: 'Manage Medicine',
    icon: <FontAwesomeIcon icon={faFirstAid} />,
    link: '/manageMedicine',
    color: 'rgb(240, 249, 255)',
  },

  {
    title: 'Prescription',
    color: 'rgb(241, 240, 255)',

    icon: <FontAwesomeIcon icon={faStethoscope} />,
    link: '/provideMedication',
  },
]
