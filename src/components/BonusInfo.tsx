import { useCreateAccessTokenMutation } from '../store/access/access.api'
import { useGetBonusInfoQuery } from '../store/bonus/bonus.api'
import { useEffect } from 'react'

function BonusInfo() {
  const [getAccess, { data }] = useCreateAccessTokenMutation()
  const { data: bonusInfo } = useGetBonusInfoQuery(data?.accessToken, {
    skip: data?.accessToken === '',
  })

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
    <div>
      <p>{bonusInfo?.data?.currentQuantity}</p>
    </div>
  )
}

export default BonusInfo
