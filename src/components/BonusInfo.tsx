import { useCreateAccessTokenMutation } from '../store/access/access.api'
import { useGetBonusInfoQuery } from '../store/bonus/bonus.api'
import { IoIosArrowDropright } from 'react-icons/io'
import { useEffect } from 'react'
import { Loader } from './'
import { fire } from '../assets/images'

function BonusInfo() {
  const [getAccess, { data }] = useCreateAccessTokenMutation()
  const { data: bonusInfo, isLoading } = useGetBonusInfoQuery(
    data?.accessToken || ''
  )

  const startAccessProcess = async () => {
    try {
      await getAccess({
        idClient: '2c44d8c2-c89a-472e-aab3-9a8a29142315',
        accessToken: '',
        paramName: 'device',
        paramValue: '7db72635-fd0a-46b9-813b-1627e3aa02ea',
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    startAccessProcess()
  }, [])

  return (
    <div className="info">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="description">
            <div className="title">
              <p>{bonusInfo?.data?.currentQuantity} бонусов</p>
            </div>
            <div className="text">
              <p>
                {bonusInfo?.data?.dateBurning &&
                  new Date(bonusInfo.data.dateBurning).toLocaleDateString(
                    'ru-RU',
                    {
                      day: 'numeric',
                      month: '2-digit',
                    }
                  ) + ' сгорит'}
              </p>
              <img src={fire} alt="fireIcon" />
              <p>{bonusInfo?.data?.forBurningQuantity} бонусов</p>
            </div>
          </div>
          <div className="arrow">
            <IoIosArrowDropright className="icon" />
          </div>
        </>
      )}
    </div>
  )
}

export default BonusInfo
