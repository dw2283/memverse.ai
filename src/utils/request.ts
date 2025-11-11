/**
 * Lightweight fetch wrapper with JSON handling and error normalization.
 * All API calls should go through this helper.
 */
export interface RequestOptions extends RequestInit {
  parseJson?: boolean
}

export interface BaseResponse<T = any> {
  code: number
  message: string
  data: T
}

async function handleResponse<T>(res: Response, parseJson: boolean): Promise<T> {
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `HTTP ${res.status}`)
  }
  if (!parseJson) return (await res.text()) as unknown as T
  return (await res.json()) as T
}

export async function request<T = any>(url: string, options: RequestOptions = {}): Promise<T> {
  const headers = new Headers(options.headers || {})
  if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json')

  const resp = await fetch(url, {
    ...options,
    headers
  })
  return handleResponse<T>(resp, options.parseJson !== false)
}


