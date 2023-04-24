import * as _ from 'lodash'
import Request from "@/core/infrastructure/Request"
import type { TableId } from '@/core/domain/types/TableId.types'

export default class LabelsService extends Request {
  protected static module: string = 'label'

  constructor() {
    super(LabelsService.module)
  }

  async getNoteLabelsById(id: string | number) {
    return await this.get({ id: id })
  }

  async getNoteLabels() {
    const url = `${import.meta.env.VITE_API_URL}/${this.module}/note`
    return await this.getByUrl(url)
  }
}