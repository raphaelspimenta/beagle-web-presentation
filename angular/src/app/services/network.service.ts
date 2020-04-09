import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch'

interface HttpRequest {
  url: string,
  method?: HttpMethod,
  data?: any,
  headers?: Record<string, string>,
}

@Injectable({ providedIn: 'root' })
export class NetworkService {
  constructor(private http: HttpClient) {
    this.http = http
  }

  sendRequest({ url, method = 'get', data, headers }: HttpRequest) {
    const body = method !== 'get' ? data : undefined
    const params = method === 'get' ? data : undefined

    return new Promise((resolve, reject) => {
      this.http.request(method, url, { body, params, headers }).subscribe(resolve, reject)
    })
  }
}
