export type IEditorBlocksTypes = 'image' | 'header' | 'paragraph'

export type IEditorFile = {
  id: string
  data: {
    file: { url: string }
    caption: string | null
    stretched: boolean
    withBorder: boolean
    withBackground: boolean
  }
  type: 'image'
}

export type IEditorHeader = {
  id: string
  data: {
    text: string
    level: 1 | 2 | 3 | 4 | 5 | 6
  }
  type: 'header'
}

export type IEditorParagraph = {
  id: string
  data: {
    text: string
  }
  type: 'paragraph'
}

export type IEditorBlocks = IEditorFile | IEditorHeader | IEditorParagraph

export type IEditor = {
  time: string
  blocks: IEditorBlocks[]
  version: string
}
