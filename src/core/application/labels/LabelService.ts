import * as _ from 'lodash'
// import Request from "@/core/infrastructure/Request"
import Request from '@/core/infrastructure/Request'

export default class LabelService extends Request {
  protected static module: string = 'label'

  constructor() {
    super(LabelService.module)
  }

  async getNoteLabelsById(id: string | number) {
    return await this.get({ id: id })
  }

  async getNoteLabels() {
    const url = `${import.meta.env.VITE_API_URL}/${this.module}/note`
    return await this.getByUrl(url)
  }

  async fetchAll() {
    return await this.get()
  }
}
