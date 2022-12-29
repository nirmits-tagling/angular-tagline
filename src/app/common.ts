export interface Backend{
  backendtag:string,
  rubyimg:string,
  pythonimg:string,
  nodejsimg:string,
  phpimg:string,
  javaimg:string,
  golangimg:string,
  rubytag:string,
  pythontag:string,
  nodejstag:string,
  phptag:string,
  javatag:string,
  golangtag:string,
}

export interface Blog {

  title:string,
  description:string,
  readmore:string,
  img:string,
  button:string
  
}

export interface Whytagline{
  tag ?:string,
  title ?:string,
  description ?:string,
  img ?:string,
  chooseustag?: string,
  dropline ?:string,
  contactbtn ?: string
}

export interface Clientele {
  headtag:string,
  description1:string,
  description2:string,


}

export interface Experience{
  experiencetag:string,
  experiencedescription:string,
  contactbtn:string,
  imgtag:string
}

export interface MainSection{
    softwaretag:string,
    itconsultanytag:string,
    servingtag:string,
    startuptag:string,
    innovationtag:string
    meetingbutton: string,
    backgroundimg:string,
    getquote:string
    changetag:string
  }

 export interface Services{
    button?: string,
    description?: string,
    tag?: string,
    img?: string,
    chooseustag ?:string,
    dropline ?:string,
    contactbtn ?:string
    }

export interface Experience{
  experiencetag:string,
  experiencedescription:string,
  contactbtn:string,
  imgtag:string
}

export interface Technologies{
  technologies:string,
  web:string,
  mobile:string,
  desktop:string,
plateform:string,
database:string,
bigData:string
machineLearning:string,
devOps:string,
clouds:string,

}

export interface Experiencesub{
  img:string,
  tittle:string,
  description:string

}