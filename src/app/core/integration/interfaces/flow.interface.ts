export interface Flow {
  presentation: Options
  skills: Options
}

export interface Options {
  textBox : { 
      text: string;
    }[],

  data:  { 
    description: string;
    value: string;
  }[]
  
}
