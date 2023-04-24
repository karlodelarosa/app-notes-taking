import axios, { AxiosError } from 'axios'
import type { NoteId, NoteFillable } from '../domain/contract/Notes.types'
import type { TableId } from '../domain/types/TableId.types'
import ApiRequest from './engine/ApiRequest'

export default class Request extends ApiRequest {
  protected static apiUrl: string = import.meta.env.VITE_API_URL
  protected readonly insertVerb: string = 'add'
  protected readonly updateVerb: string = 'add'

  constructor(module: string) {
    super(Request.apiUrl, module)
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${import.meta.env.VITE_TOKEN_SECRET}`
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  async authenticate(params: any): Promise<any> {
    const requestUrl = `${this.getFullUrl()}/auth`
    try {
      const { data } = await axios.post(requestUrl, params)
      return new Promise((resolve) => {
        resolve(data)
      })
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Request.get axios err:', error)
        throw error
      } else {
        console.error('Request.get unexpected err:', error)
        throw error
      }
    }
  }

  async get(params: TableId = { id: '' }): Promise<any> {
    const requestUrl = `${this.getFullUrl()}/${params.id}`
    try {
      const { data } = await axios.get(requestUrl)
      return new Promise((resolve) => {
        resolve(data)
      })
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Request.get axios err:', error)
        throw error
      } else {
        console.error('Request.get unexpected err:', error)
        throw error
      }
    }
  }

  async getByUrl(url: string, params: any = { id: '' }): Promise<any> {
    const requestUrl = `${url}/${params.id}`
    try {
      const { data } = await axios.get(requestUrl)
      return new Promise((resolve) => {
        resolve(data)
      })
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Request.get axios err:', error)
        throw error
      } else {
        console.error('Request.get unexpected err:', error)
        throw error
      }
    }
  }

  async post(params: NoteFillable): Promise<any> {
    const requestUrl = `${this.getFullUrl()}/${this.insertVerb}`
    try {
      const { data } = await axios.post(requestUrl, params)
      return new Promise((resolve) => {
        resolve(data)
      })
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Request.post axios err:', error)
        throw error
      } else {
        console.error('Request.post unexpected err:', error)
        throw error
      }
    }
  }

  async put(params: NoteFillable): Promise<any> {
    const requestUrl = `${this.getFullUrl()}/:id`
    try {
      const { data } = await axios.put(requestUrl, params)
      return new Promise((resolve) => {
        resolve(data)
      })
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Request.post axios err:', error)
        throw error
      } else {
        console.error('Request.post unexpected err:', error)
        throw error
      }
    }
  }

  async delete(params: NoteId): Promise<any> {
    const requestUrl = `${this.getFullUrl()}${params.id}`
    try {
      const { data } = await axios.delete(requestUrl, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN_SECRET}`,
        },
        data: params.id,
      })
      return new Promise((resolve) => {
        resolve(data)
      })
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Request.post axios err:', error)
        throw error
      } else {
        console.error('Request.post unexpected err:', error)
        throw error
      }
    }
  }
}
