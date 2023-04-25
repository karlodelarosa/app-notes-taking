import * as _ from 'lodash'
import store from '@/store/index'
import Request from '@/core/infrastructure/Request'
import type {
  NoteId,
  AllNotesWithLabelIds,
  NotesWithLabel
} from '@/core/domain/contract/Notes.types'

export default class NotesService extends Request {
  protected static module: string = 'note'
  protected title: string = ''
  protected content: string = ''
  protected labels: any = []

  constructor() {
    super(NotesService.module)
  }

  setTitle(title: string): this {
    this.title = _.escape(title)
    return this
  }

  setContent(content: string): this {
    this.content = _.escape(content)
    return this
  }

  setLabels(labels: any[]): this {
    this.labels = labels
    return this
  }

  async fetchAll() {
    return await this.get()
  }

  async fetchById(id: string | number) {
    return await this.get({ id: id })
  }

  async fetchByLabelIds(ids: []) {
    const url = `${import.meta.env.VITE_API_URL}/${this.module}/label`
    return await this.getByUrl(url, { id: ids })
  }

  async insert() {
    const params: NotesWithLabel = {
      title: this.title,
      content: this.content,
      labelIds: this.labels
    }
    return await this.post(params)
  }

  async update(id: string | number) {
    const copy = [...this.labels.values()]
    const toIds = copy.map((label: any) => {
      return label.id
    })
    const params: any = {
      id: id,
      title: this.title,
      content: this.content,
      labelIds: toIds
    }
    return await this.put(params)
  }

  async remove(id: string | number) {
    const params: NoteId = {
      id: id
    }
    return await this.delete(params)
  }
}
