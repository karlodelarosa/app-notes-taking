import Request from "@/core/infrastructure/Request"
import type { NoteFillable } from "@/core/domain/contract/Notes.types"


export default class NotesService extends Request {
  protected static module: string = 'note'
  protected title: string =''
  protected content: string = ''

  constructor() {
    super(NotesService.module)
  }

  setTitle(title: string): this {
    this.title = title
    return this
  }

  setContent(content: string): this {
    this.content = content
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
}