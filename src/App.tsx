import { BonusInfo } from './components'
import { infoIcon } from './assets/images'

function App() {
  return (
    <div className="wrapper">
      <div className="logo">
        <p>ЛОГОТИП</p>
        <img src={infoIcon} alt="info" />
      </div>
      <BonusInfo />
      <div className="redBack" />
    </div>
  )
}

export default App
