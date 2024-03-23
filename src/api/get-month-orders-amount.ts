import { api } from '@/lib/axios'

export interface GetMonthOrdersResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
