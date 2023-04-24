import NotesService from "./notes/NotesService"
import LabelsService from "./labels/LabelService"

export default class NoteLabelCollection {
  protected notesService: NotesService
  protected labelsService: LabelsService
  protected noteId: any

  constructor() {
    this.notesService = new NotesService()
    this.labelsService = new LabelsService()
  }

  async buildData() {
    const notes = await this.notesService.fetchAll()
    const labels = await this.labelsService.getNoteLabels()

    notes.map((note: any, key: any) => {
      const noteId = note.id
      notes[key].labels = []
      labels.map((label: any, labelKey: any) => {
        if (label.note_id === noteId) {
          notes[key].labels.push(label)
        }
      })
    })


    return notes
  }
}