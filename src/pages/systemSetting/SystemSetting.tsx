import './systemSetting.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { systemSettingPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const SystemSetting = () => {
  return (
    <div className='viewPaymentPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...systemSettingPageProperties }} />
    </div>
  )
}

export default SystemSetting
