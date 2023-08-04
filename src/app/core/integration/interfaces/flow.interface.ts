export interface Flow {
  presentation: Options
  skills: Options
}

export interface Options {
  textBox : { 
      text: string;
    }[],
  image: {
    alt: string;
    src: string;
  },
  data:  { 
    description: string;
    value: string;
  }[]
  
}
