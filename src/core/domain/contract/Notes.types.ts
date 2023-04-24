export interface NoteId {
  id: string | number
}

export interface NoteFillable {
  title: string
  content: string
}

export interface AllNotes extends NoteId, NoteFillable { }