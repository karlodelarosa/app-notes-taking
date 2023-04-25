export interface LabelId {
  id: string | number
}

export interface LabelIds {
  labelIds?: []
}

export interface LabelFillable {
  name: string
}

export interface AllNotes extends LabelId, LabelFillable { }