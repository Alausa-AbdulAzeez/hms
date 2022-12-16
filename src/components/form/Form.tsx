import './form.css'
import { useState, useEffect } from 'react'
import {
  AccountantInputs,
  accountantInvoiceInputs,
  bedAllotmentInputs,
  bloodDonorInputs,
  DepartmentInputs,
  DoctorsInputs,
  LaboratoristInputs,
  manageAppointmentInputs,
  manageMedicineInputs,
  manageNoticeboardInputs,
  managePrescriptionInputs,
  medicineCategoryInputs,
  NurseInputs,
  PatientsInputs,
  PharmacistInputs,
  prescriptionInputs,
  profileInputs,
  resetPasswordInputs,
  systemSettingsInputs,
} from '../../utils/lists/form/FormInputList'
import FormInput from '../formInput/FormInput'
import { InputDataType } from '../../utils/types/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import TextAreaInput from '../textAreaInput/TextAreaInput'

type FormPropsType = {
  edit: string
  title: string | undefined
}

const Form = (props: FormPropsType) => {
  const btnText = useSelector((state: RootState) => state.showEditState)

  const [inputData, setInputData] = useState<InputDataType>([])
  const currentPage = window.location.href.split('/')[3]

  useEffect(() => {
    const setColumnData = () => {
      if (currentPage === 'department') {
        setInputData(DepartmentInputs)
      }
      if (currentPage === 'doctor') {
        setInputData(DoctorsInputs)
      }
      if (currentPage === 'patient') {
        setInputData(PatientsInputs)
      }
      if (currentPage === 'nurse') {
        setInputData(NurseInputs)
      }
      if (currentPage === 'pharmacist') {
        setInputData(PharmacistInputs)
      }
      if (currentPage === 'laboratorist') {
        setInputData(LaboratoristInputs)
      }
      if (currentPage === 'accountant') {
        setInputData(AccountantInputs)
      }
      if (currentPage === 'manageNoticeboard') {
        setInputData(manageNoticeboardInputs)
      }
      if (currentPage === 'systemSetting') {
        setInputData(systemSettingsInputs)
      }
      if (currentPage === 'profile') {
        setInputData(profileInputs)
      }
      if (currentPage === 'resetPassword') {
        setInputData(resetPasswordInputs)
      }
      if (currentPage === 'manageAppointment') {
        setInputData(manageAppointmentInputs)
      }
      if (currentPage === 'managePrescription') {
        setInputData(managePrescriptionInputs)
      }
      if (currentPage === 'bedAllotment') {
        setInputData(bedAllotmentInputs)
      }
      if (currentPage === 'medicineCategory') {
        setInputData(medicineCategoryInputs)
      }
      if (currentPage === 'manageMedicine') {
        setInputData(manageMedicineInputs)
      }
      if (currentPage === 'provideMedication') {
        setInputData(prescriptionInputs)
      }
      if (currentPage === 'manageBloodDonor') {
        setInputData(bloodDonorInputs)
      }
      if (currentPage === 'invoice') {
        setInputData(accountantInvoiceInputs)
      }
    }
    setColumnData()
  }, [currentPage])

  return (
    <div className='app form'>
      <form className='form'>
        {inputData.map((input, index) => (
          <div key={index}>
            {input.hasSelect ? (
              <select className='select'>
                {input.options?.map((option, index) => {
                  return (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  )
                })}
              </select>
            ) : input.hasTextArea ? (
              <TextAreaInput
                key={input.id}
                {...input}
                input={input}
                edit={props.edit}
              />
            ) : (
              <FormInput
                key={input.id}
                {...input}
                input={input}
                edit={props.edit}
              />
            )}
          </div>
        ))}
        <button type={'button'} className='submitFormBtn'>
          {btnText.showEdit ? 'EDIT' : 'ADD'} {props.title}
        </button>
      </form>
    </div>
  )
}

export default Form
