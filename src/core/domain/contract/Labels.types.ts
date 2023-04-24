export interface LabelId {
  id: string | number
}

export interface LabelFillable {
  name: string
}

export interface AllNotes extends LabelId, LabelFillable { }