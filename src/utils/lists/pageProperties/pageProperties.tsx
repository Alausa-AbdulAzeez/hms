import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from '../../../components/form/Form'
import DataTable from '../../../components/table/Table'
import { PagePropertiesType } from '../../types/types'

export const pharmacistPageProperties: PagePropertiesType = {
  firstTitle: `Pharmacists List`,
  secondTitle: 'Add Pharmacist',
  showList: true,
  showTable: true,
  title: 'pharmacist',
  titlesList: [
    {
      title: `Pharmacists List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Add Pharmacist',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='pharmacist' />,
    },
  ],
}

export const laboratoristPageProperties: PagePropertiesType = {
  firstTitle: `Laboratorists List`,
  secondTitle: 'Add Laboratorist',
  showList: true,
  showTable: true,
  title: 'laboratorist',
  titlesList: [
    {
      title: `Laboratorists List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Add Laboratorist',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='pharmacist' />,
    },
  ],
}
export const accountantPageProperties: PagePropertiesType = {
  firstTitle: `Accountants List`,
  secondTitle: 'Add Accountant',
  showList: true,
  showTable: true,
  title: 'accountant',
  titlesList: [
    {
      title: `Accountants List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Add Accountants',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='accountant' />,
    },
  ],
}

export const viewAppointmentPageProperties: PagePropertiesType = {
  firstTitle: 'View Appointment',
  secondTitle: 'string',
  showList: false,
  showTable: true,
  titlesList: [
    {
      title: `Appointment List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
  ],
}
export const viewPaymentPageProperties: PagePropertiesType = {
  firstTitle: 'View Payment',
  secondTitle: 'string',
  showList: false,
  showTable: true,
  titlesList: [
    {
      title: `Payment List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
  ],
}
export const viewBedStatusPageProperties: PagePropertiesType = {
  firstTitle: `Bed Allotment`,
  secondTitle: 'Bed List',
  showList: true,
  showTable: true,
  titlesList: [
    {
      title: `Bed Allotment`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Bed List',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='Bed List' />,
    },
  ],
}
export const doctorPageProperties: PagePropertiesType = {
  firstTitle: `Doctor's List`,
  secondTitle: 'Add Doctor',
  showList: true,
  showTable: true,
  title: 'doctor',
  titlesList: [
    {
      title: `Doctor's List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Add Doctor',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='accountant' />,
    },
  ],
}
export const patientpageProperties: PagePropertiesType = {
  firstTitle: `Patient's List`,
  secondTitle: 'Add Patient',
  showList: true,
  showTable: true,
  title: 'patient',
  titlesList: [
    {
      title: `Patient's List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Add Patient',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='accountant' />,
    },
  ],
}
export const departmentPageProperties: PagePropertiesType = {
  firstTitle: `Department List`,
  secondTitle: 'Add Department',
  showList: true,
  showTable: true,
  title: 'department',
  titlesList: [
    {
      title: `Department List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Add Department',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='Add Department' />,
    },
  ],
}
export const nursePageProperties: PagePropertiesType = {
  firstTitle: `Nurse's List`,
  secondTitle: 'Add Nurse',
  showList: true,
  showTable: true,
  title: 'nurse',
  titlesList: [
    {
      title: `Nurse's List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Add Nurse',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='Add Nurse' />,
    },
  ],
}

export const viewBloodBankPageProperties: PagePropertiesType = {
  firstTitle: `Blood Donor List`,
  secondTitle: 'Blood Bank',
  showList: false,
  showTable: true,
  titlesList: [
    {
      title: `Blood Donor List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Blood Bank',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='accountant' />,
    },
  ],
}

export const viewMedicinePageProperties: PagePropertiesType = {
  firstTitle: `View Medicine`,
  showList: false,
  showTable: true,
  titlesList: [
    {
      title: `View Medicine`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
  ],
}

export const viewOperationPageProperties: PagePropertiesType = {
  firstTitle: `View Operation`,
  showList: false,
  showTable: true,
  titlesList: [
    {
      title: `View Operation`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
  ],
}
export const viewDeathReportPageProperties: PagePropertiesType = {
  firstTitle: `View DeathReport`,
  showList: false,
  showTable: true,
  titlesList: [
    {
      title: `View DeathReport`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
  ],
}

export const viewBirthReportPageProperties: PagePropertiesType = {
  firstTitle: `View BirthReport`,
  showList: false,
  showTable: true,
  titlesList: [
    {
      title: `View BirthReport`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
  ],
}

export const manageNoticeboardPageProperties: PagePropertiesType = {
  firstTitle: `Noticeboard List`,
  secondTitle: 'Add Noticeboard',
  showList: true,
  showTable: true,
  title: 'noticeboard',
  titlesList: [
    {
      title: `Noticeboard List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <Form edit='false' title='noticeboard' />,
    },
    {
      title: 'Add Noticeboard',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <DataTable />,
    },
  ],
}

export const systemSettingPageProperties: PagePropertiesType = {
  firstTitle: `System Settings`,
  secondTitle: `Edit System Settings`,
  showList: false,
  showTable: true,
  title: 'System Settings',
  titlesList: [
    {
      title: `System Settings`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <Form edit='false' title='System Settings' />,
    },
    {
      title: 'Edit System Settings',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <DataTable />,
    },
  ],
}
export const profilePageProperties: PagePropertiesType = {
  firstTitle: `Profile`,
  secondTitle: `Edit Profile`,
  showList: false,
  showTable: true,
  title: 'Profile',
  titlesList: [
    {
      title: `Profile`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Edit Profile',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='Profile' />,
    },
  ],
}
export const resetPasswordPageProperties: PagePropertiesType = {
  firstTitle: `Manage Password`,
  // secondTitle: `Reset `,
  showList: false,
  showTable: true,
  title: 'Password',
  titlesList: [
    {
      title: `Manage Password`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
  ],
}
export const manageAppointmentPageProperties: PagePropertiesType = {
  firstTitle: `Manage Appointment`,
  secondTitle: `Add Appointment `,
  showList: true,
  showTable: true,
  title: 'Appointment',
  titlesList: [
    {
      title: `Manage Appointment`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Add Appointment',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='Appointment' />,
    },
  ],
}
export const managePrescriptionPageProperties: PagePropertiesType = {
  firstTitle: `Manage Prescription`,
  secondTitle: `Add Prescription`,
  showList: true,
  showTable: true,
  title: 'Prescription',
  titlesList: [
    {
      title: `Manage Prescription`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Add Prescription',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='Prescription' />,
    },
  ],
}

export const bedAllotmentPageProperties: PagePropertiesType = {
  firstTitle: `Bed List`,
  secondTitle: `Allocate Bed `,
  showList: true,
  showTable: true,
  title: 'Bed Allotment',
  titlesList: [
    {
      title: `Bed List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: <DataTable />,
    },
    {
      title: 'Allocate Bed',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: <Form edit='false' title='Bed Allotment' />,
    },
  ],
}
