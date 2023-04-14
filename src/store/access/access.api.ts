import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AccessResponse } from '../../models/model'

export const accessApi = createApi({
  reducerPath: 'access/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://84.201.188.117:5021',
  }),
  endpoints: (build) => ({
    createAccessToken: build.mutation<
      AccessResponse,
      {
        idClient: string
        accessToken: string
        paramName: string
        paramValue: string
        latitude: number
        longitude: number
        sourceQuery: number
      }
    >({
      query: (body) => ({
        url: '/api/v3/clients/accesstoken',
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          AccessKey: import.meta.env.VITE_ACCESS_API_KEY,
        },
        body,
      }),
    }),
  }),
})

export const { useCreateAccessTokenMutation } = accessApi
