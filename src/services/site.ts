import { request } from '@/utils/request'
import type { BaseResponse } from '@/utils/request'

export async function subscribeEmail(email: string) {
  const payload = { email }
  const res = await request<BaseResponse<{ ok: boolean }>>('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  return res.data
}


