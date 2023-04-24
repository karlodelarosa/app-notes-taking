import * as _ from 'lodash'
import Request from '@/core/infrastructure/Request'
import type { NoteId, NoteFillable, AllNotes } from '@/core/domain/contract/Notes.types'

export default class NotesService extends Request {
  protected static module: string = 'note'
  protected title: string = ''
  protected content: string = ''

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

  async fetchById(id: string | number) {
    return await this.get({ id: id })
  }

  async fetchAll() {
    return await this.get()
  }

  async insert() {
    const params: NoteFillable = {
      title: this.title,
      content: this.content
    }
    return await this.post(params)
  }

  async update(id: string | number) {
    const params: AllNotes = {
      id: id,
      title: this.title,
      content: this.content
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
