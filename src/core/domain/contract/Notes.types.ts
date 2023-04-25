import type { LabelIds } from "./Labels.types"

export interface NoteId {
  id: string | number
}

export interface NoteFillable {
  title?: string
  content?: string
}

export interface AllNotes extends NoteId, NoteFillable { }

export interface NotesWithLabel extends NoteFillable, LabelIds {}

export interface AllNotesWithLabelIds extends NoteId, NoteFillable, LabelIds {}