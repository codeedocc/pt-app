import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BonusResponse } from '../../models/model'

export const bonusApi = createApi({
  reducerPath: 'bonus/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://84.201.188.117:5003/',
  }),
  endpoints: (build) => ({
    getBonusInfo: build.query<BonusResponse, string>({
      query: (accessToken: string) => ({
        url: `api/v3/ibonus/generalinfo/${accessToken}`,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          AccessKey: import.meta.env.VITE_ACCESS_API_KEY,
        },
      }),
    }),
  }),
})

export const { useGetBonusInfoQuery } = bonusApi
