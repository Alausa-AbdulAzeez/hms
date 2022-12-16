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
      id: 1,
      title: `Pharmacists List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Pharmacist',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='pharmacist' />,
      },
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
      id: 1,
      title: `Laboratorists List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Laboratorist',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='pharmacist' />,
      },
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
      id: 1,
      title: `Accountants List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Accountants',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='accountant' />,
      },
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
      id: 1,
      title: `Appointment List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
  ],
}
export const patientAppointmentPageProperties: PagePropertiesType = {
  firstTitle: 'Appointment List',
  secondTitle: 'string',
  showList: true,
  showTable: false,
  titlesList: [
    {
      id: 1,
      title: `Appointment List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
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
      id: 1,
      title: `Payment List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
  ],
}
export const viewInvoicePageProperties: PagePropertiesType = {
  firstTitle: 'Invoice List',
  secondTitle: 'string',
  showList: false,
  showTable: true,
  titlesList: [
    {
      id: 1,
      title: `Invoice List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
  ],
}
export const accountantInvoicePageProperties: PagePropertiesType = {
  firstTitle: 'Invoice List',
  secondTitle: 'string',
  showList: true,
  showTable: true,
  title: 'Invoice',
  titlesList: [
    {
      id: 1,
      title: `Invoice List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Invoice',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Invoice' />,
      },
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
      id: 1,
      title: `Bed Allotment`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Bed List',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Bed List}' />,
      },
    },
  ],
}
export const admitHistoryPageProperties: PagePropertiesType = {
  firstTitle: `Bed Allotment List`,
  secondTitle: 'Bed List',
  showList: true,
  showTable: false,
  titlesList: [
    {
      id: 1,
      title: `Bed Allotment`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
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
      id: 1,
      title: `Doctor's List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Doctor',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 2,
        element: <Form edit='false' title='accountant' />,
      },
    },
  ],
}
export const viewDoctorPageProperties: PagePropertiesType = {
  firstTitle: `Doctor List`,
  secondTitle: 'Add Doctor',
  showList: true,
  showTable: false,
  title: 'doctor',
  titlesList: [
    {
      id: 1,
      title: `Doctor's List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
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
      id: 1,
      title: `Patient's List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },

    {
      id: 2,
      title: 'Add Patient',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='accountant' />,
      },
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
      id: 1,
      title: `Department List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Department',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Add Department}' />,
      },
    },
  ],
}
export const medCategoryPageProperties: PagePropertiesType = {
  firstTitle: `Medicine Category List`,
  secondTitle: 'Add Medicine Category',
  showList: true,
  showTable: true,
  title: 'Medicine Category',
  titlesList: [
    {
      id: 1,
      title: `Medicine Category List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Medicine Category',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Medicine Category' />,
      },
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
      id: 1,
      title: `Nurse's List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Nurse',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Add Nurse}' />,
      },
    },
  ],
}

export const viewBloodBankPageProperties: PagePropertiesType = {
  firstTitle: `Blood Donor List`,
  secondTitle: 'Blood Bank',
  showList: true,
  showTable: true,
  titlesList: [
    {
      id: 1,
      title: `Blood Donor List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Blood Donor',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Blood Donor' />,
      },
    },
  ],
}
export const manageBloodDonorPageProperties: PagePropertiesType = {
  firstTitle: `Blood Donor List`,
  secondTitle: 'Blood Bank',
  showList: true,
  showTable: true,
  title: 'Blood Donor',
  titlesList: [
    {
      id: 1,
      title: `Blood Donor List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Blood Donor',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Blood Donor' />,
      },
    },
  ],
}

export const viewMedicinePageProperties: PagePropertiesType = {
  firstTitle: `View Medicine`,
  showList: true,
  showTable: true,
  titlesList: [
    {
      id: 1,
      title: `View Medicine`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Medicine',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Medicine' />,
      },
    },
  ],
}
export const manageMedicinePageProperties: PagePropertiesType = {
  firstTitle: `Manage Medicine`,
  showList: false,
  showTable: true,
  titlesList: [
    {
      id: 1,
      title: `View Medicine`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
  ],
}

export const viewOperationPageProperties: PagePropertiesType = {
  firstTitle: `View Operation`,
  showList: false,
  showTable: true,
  titlesList: [
    {
      id: 1,
      title: `View Operation`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
  ],
}
export const operationHistoryPageProperties: PagePropertiesType = {
  firstTitle: `View Operation`,
  showList: true,
  showTable: false,
  titlesList: [
    {
      id: 1,
      title: `View Operation`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
  ],
}
export const viewDeathReportPageProperties: PagePropertiesType = {
  firstTitle: `View DeathReport`,
  showList: false,
  showTable: true,
  titlesList: [
    {
      id: 1,
      title: `View DeathReport`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
  ],
}

export const viewBirthReportPageProperties: PagePropertiesType = {
  firstTitle: `View BirthReport`,
  showList: false,
  showTable: true,
  titlesList: [
    {
      id: 1,
      title: `View BirthReport`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
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
      id: 1,
      title: `Noticeboard List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <Form edit='false' title='noticeboard' />,
      },
    },
    {
      id: 2,
      title: 'Add Noticeboard',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
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
      id: 1,
      title: `System Settings`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <Form edit='false' title='System Settings}' />,
      },
    },
    {
      id: 2,
      title: 'Edit System Settings',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
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
      id: 1,
      title: `Profile`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Edit Profile',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Profile' />,
      },
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
      id: 1,
      title: `Manage Password`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
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
      id: 1,
      title: `Manage Appointment`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Appointment',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Appointment' />,
      },
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
      id: 1,
      title: `Manage Prescription`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Prescription',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Prescription' />,
      },
    },
  ],
}

export const provideMedicationPageProperties: PagePropertiesType = {
  firstTitle: `Prescription List`,
  secondTitle: `Add Prescription`,
  showList: true,
  showTable: false,
  title: 'Prescription',
  titlesList: [
    {
      id: 1,
      title: `Prescription List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
  ],
}
export const viewPrescriptionPageProperties: PagePropertiesType = {
  firstTitle: `View Prescription`,
  secondTitle: `Add Prescription`,
  showList: true,
  showTable: false,
  title: 'Prescription',
  titlesList: [
    {
      id: 1,
      title: `View Prescription`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
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
      id: 1,
      title: `Bed List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Allocate Bed',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Bed Allotment}' />,
      },
    },
  ],
}
export const manageReportPageProperties: PagePropertiesType = {
  firstTitle: `Bed List`,
  secondTitle: `Allocate Bed `,
  showList: true,
  showTable: true,
  title: 'Bed Allotment',
  titlesList: [
    {
      id: 1,
      title: `Bed List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 1,
      title: `Bed List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 1,
      title: `Bed List`,
      icon: <FontAwesomeIcon icon={faBars} />,
      element: {
        id: 1,
        element: <DataTable />,
      },
    },
    {
      id: 2,
      title: 'Add Report',
      icon: <FontAwesomeIcon icon={faPlus} />,
      element: {
        id: 1,
        element: <Form edit='false' title='Add Report' />,
      },
    },
  ],
}
