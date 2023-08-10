import { TextBox, DataTitle, Data, Image } from "./common.interface"

export interface Flow {
  presentation: PresentationContent
  skills: SkillsContent
}

export interface PresentationContent {
  textBox : TextBox[],
  image: Image,
  dataTitle: DataTitle
  data:  Data[]
}

export interface SkillsContent {
  textBox : TextBox[],
  content: {
    dataTitle: DataTitle
    data:  Data[]
  }[]
}

