import { Component } from '@angular/core';

interface LabelHeader{
  caseStudy:string,
  about:string,
  hireDevelopers:string,
  technology:string,
  industry:string,
  taglinelogo:string,
  button:string,
}

interface MainSection{
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

interface Services{
  ourservices:string,
  find:string,
  rightoffer:string,
  foryou:string,
}
interface Application{
  applicationtag:string,
  applicationdescription:string,
  learnmore:string,
  appimg:string,
  
}

interface SoftwareProduct{
  softwaretag:string,
  softwaredescription:string,
  learnmore:string,
  softimg:string,
}

interface Agile{
  agiletag:string,
  agiledescription:string,
  learnmore:string,
  agileimg:string
}

interface Digitalstratargy{
  digitaltag:string,
  digitaldescription:string,
  learnmore:string,
  digitalimg:string
}

interface Softwareoutsourcing{
  outsourcingtag:string,
  outsourcingdescription:string,
  learnmore:string,
  outsourceimg:string

}

interface Contactus{
  chooseustag:string,
  contactbtn:string
  dropline:string
}

interface Experience{
  experiencetag:string,
  experiencedescription:string,
  contactbtn:string,
  imgtag:string
}

interface Experiencesub{
  contentlogo1:string,
  contentlogo2:string,
  contentlogo3:string,
  contentlogo4:string,
  plusexp1:string,
  plusexp2:string,
  plusexp3:string,
  plusexp4:string,
  plusexptag1:string,
  plusexptag2:string,
  plusexptag3:string,
  plusexptag4:string,
}

interface Technologies{
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

interface Backend{
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

interface Frontend{
  fronttag:string,
  reactimg:string,
  angularimg:string,
  typscriptimg:string,
  vueimg:string,
  mateorimg:string,
  javascriptimg:string,
  htmlimg:string,
  reacttag:string,
  angulartag:string,
  typescripttag:string,
  vuetag:string,
  mateortag:string,
  javascripttag:string,
  htmltag:string,
}

interface Whytagline{
whychoosetag:string,
whychoosedescription:string,
one:string,
progressive:string,
progressivedescription:string,
progressiveimg:string
two:string,
efficient:string,
efficientdescription:string,
efficientimg:string
three:string,
flexible:string,
flexibledescription:string,
flexibleimg:string,
four:string,
costeffective:string,
costeffectivedescription:string,
costeffectiveimg:string,
five:string,
consistent:string,
consistentdescription:string,
consistentimg:string,
empowertag:string,
talkbtn:string,
your:string,
business:string,
dedicateddev:string,

}



interface Clientele {
  headtag:string,
  description1:string,
  description2:string,
  rating:string,

  small:string,
  para:string,
  verfied:string
}

interface Awards{ 
  awards:string,
  recognization:string,
  img1:string,
  img2:string,
  img3:string,
  img4:string,
  img5:string,
}

interface Blog {
  ourblog:string,
  python:string,
  pythondes:string,
  readmore:string,
  nodejs:string,
  nodejsdes:string,
  ror:string,
  rordes:string,
  
}

interface Global{
  global:string,
  hq:string,
  address1:string,
  no1:string,
  usa:string, 
  address2:string,
  no2:string,
  uk:string,
  address3:string,
  no3:string,
  email:string,
}

interface Globalform{
  getquote:string,
}

interface Footer{
  latest:string,
  sharemail:string,
  guides:string,
  and:string
  industrynews:string,
  subscribe:string,
  unsubscribe:string,
  inquiry:string,
  email:string,
  no:string,
  saless:string,
  tagline:string,
  help:string,
  career:string,
  aboutus:string,
  contactus:string,
  blog:string,
  privacy:string,
  sitemap:string,
  service:string,
  mobile:string,
  webdev:string,
  webdesign:string,
  ui:string,
  digital:string,
  hire:string,
  hirepython:string,
  hireangular:string,
  hireror:string,
  hireflutter:string,
  hirereact:string,
  hirenative:string,
  follow:string,
  year:string,
  rightreserved:string,
  llp:string

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tagline-angular';

  labelHeader: LabelHeader = {
    caseStudy: "case Study",
    about: 'about Us',
    hireDevelopers: 'hire developers',
    technology: 'technology',
    industry: 'industry',
    taglinelogo: "../assets/../assets/images/tagline.png",
    button: "button",
  }


  mainsection:MainSection = {
    softwaretag:"Software Development Company",
    itconsultanytag:"& IT Consultancy",
    servingtag:"Serving",
    startuptag:"Start-UPs To Fortune 500",
    innovationtag:"With the help of Innovation and Technology, We give you the power to",
    changetag:"change the world with your ideas.",
    meetingbutton: "button",
    backgroundimg:"../assets/../assets/images/images.png",
    getquote:"Get Quote",
  }

  service:Services = {
    ourservices: 'Our Services',
    find: 'Find the',
    rightoffer: 'right offers',
    foryou: 'for you.'
  }

  application:Application = {
    applicationtag: 'Application Management and Modernisation',
    applicationdescription: 'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products.',
    learnmore: 'Learn More',
    appimg: '../assets/../assets/images/mobile.png'
  }

  softwareproduct:SoftwareProduct = {
    softwaretag: 'Software Product Engineering',
    softwaredescription: 'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products.',
    learnmore: 'Learn More',
    softimg: '../assets/../assets/images/web-design-icon.webp'
  }

  agile:Agile = {
    agiletag: 'Agile QA, Automation, and DevOps',
    agiledescription: 'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA, Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA ensures the quality of the software.',
    learnmore: 'Learn More',
    agileimg: '../assets/../assets/images/testing-icon.webp'
  }

  digitalstratargy:Digitalstratargy = {
    digitaltag: 'Digital Strategy & Design',
    digitaldescription: 'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their businesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences.',
    learnmore: 'Learn More',
    digitalimg: '../assets/../assets/images/uiux-design-icon.webp'
  }

  softwareoutsourcing:Softwareoutsourcing = {
    outsourcingtag: 'Software outsourcing company',
    outsourcingdescription: 'Tagline Infotech is an experienced software outsourcing company that provides services for various businesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
    learnmore: 'Learn More',
    outsourceimg: '../assets/../assets/images/software-development-1.png'
  }

  contactus:Contactus = {
    chooseustag: 'Dont know what to choose? ',
    dropline:"Drop us a line.",
    contactbtn: 'button'
  }

  experience:Experience = {
    experiencetag: 'We have the experience',
    experiencedescription: 'We have got the experience to make your dream come true, and these stats speak for themselves: we have 150+ clients worldwide in only three years, and we have worked on over 200 projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 60K+ hours of freelancing experience',
    contactbtn: 'button',
    imgtag:'../assets/../assets/images/woman.webp'
  }

  experiencesub:Experiencesub = {
    contentlogo1: '../assets/../assets/images/contentlogo.webp',
    contentlogo2: '../assets/../assets/images/contentlogo2.webp',
    contentlogo3: '../assets/../assets/images/contentlogo3.webp',
    contentlogo4: '../assets/../assets/images/contentlogo4.webp',
    plusexp1: '125+',
    plusexp2: '450+',
    plusexp3: '150+',
    plusexp4: '5+',
    plusexptag1: 'Professional',
    plusexptag2: 'Completed Projects',
    plusexptag3: 'Freelance Hours',
    plusexptag4: 'Years of experience',
  }
  technologies:Technologies = {
    technologies: 'Our Technologies',
    web: 'Web',
    mobile: 'Mobile',
    desktop: 'Desktop',
    plateform: 'Plateform',
    database: 'Database',
    bigData: 'BigData',
    machineLearning: 'MachineLearning',
    devOps: 'DevOps',
    clouds: 'Clouds'
  }

  backend:Backend = {
    backendtag: 'Backend',
    rubyimg: '../assets/images/ror.png',
    pythonimg: '../assets/images/python.png',
    nodejsimg: '../assets/images/node_js.png',
    phpimg: '../assets/images/php.png',
    javaimg: '../assets/images/android-java.png',
    golangimg: '../assets/images/go.png',
    rubytag: 'Ruby On Rails',
    pythontag: 'Python',
    nodejstag: 'Node_JS',
    phptag: 'Php',
    javatag: 'Java',
    golangtag: 'Go Lang'
  }
  
  frontend:Frontend = {
    fronttag: 'Front',
    reactimg: '../assets/images/react-js.png',
    angularimg: '../assets/images/angular-icon.png',
    typscriptimg: '../assets/images/typescript-icon.png',
    vueimg: '../assets/images/vue-js.png',
    mateorimg: '../assets/images/meter-js.png',
    javascriptimg: '../assets/images/javascript-icon.png',
    htmlimg: '../assets/images/html5.png',
    reacttag: 'React_JS',
    angulartag: 'Angular',
    typescripttag: 'Typescript',
    vuetag: 'Vue_JS',
    mateortag: 'Mateor_Js',
    javascripttag: 'Javascript',
    htmltag: 'HTML5'
  }

  whytagline:Whytagline = {
    whychoosetag: 'Why Choose Tagline Infotech ?',
    whychoosedescription: 'We have a team of developers who use their expertise to provide complete web development, mobile app development, testing & assurance, SaaS development, and designing services. Tagline Infotech has a team of developers that you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for your startup or large-scale company. Our team of developers has the experience to understand the business ideas of the clients to provide solutions that focus on the core values of the business. Here you will find some benefits of hiring developers from us.',

    progressive: 'Progressive',
    progressivedescription: 'Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive',
    efficient: 'Efficient',
    efficientdescription: 'We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently',
    flexible: 'Flexible',
    flexibledescription: 'We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren’t satisfied with any model you can switch to another.',
    costeffective: 'Costeffective',
    costeffectivedescription: 'Our team of developers provides the best development services at affordable prices. We believe that high-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring',
    consistent: 'consistent',
    consistentdescription: 'Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements.',
    empowertag: 'Empower',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    progressiveimg: '../assets/images/choose-roadmap.png',
    efficientimg: '../assets/images/choose-project.png',
    flexibleimg: '../assets/images/choose-flexible.svg',
    costeffectiveimg: '../assets/images/choose-cost.png',
    consistentimg: '../assets/images/choose-delivery.png',
    your: 'Your',
    business: 'Business',
    dedicateddev: 'with Dedicated Devlopers',
    talkbtn: 'button'
  }

  clientele:Clientele = {
    headtag: 'Words From Our Clientele',
    description1: 'Good things come for those who work hard, and thats why our clientele appreciate our efforts. Tagline Infotech provides the best services to its clients, and it is reflected through our ratings and reviews on various platforms.',
    description2: 'We are a well-known IT services company on Clutch. Check out what our customers have to say about our services. Read their ratings, feedback, and stories about partnering with us before making your own decision.',
    rating: '5.0',
    small: 'Everything always turns out perfectly done.',
    para: 'IT & Computer Scientist, Self-Employed',
    verfied: 'Verified Review'
  }
  awards:Awards = {
    awards: 'Awards &',
    recognization: 'Recognitions',
    img1: '../assets/images/award-2.webp',
    img2: '../assets/images/award-3.webp',
    img3: '../assets/images/award-4.webp',
    img4: '../assets/images/award-5.webp',
    img5: '../assets/images/award-6.webp'
  }
  
  blog:Blog = {
    ourblog: 'Our Blog',
    python: 'Python vs Java Comparison Of',
    pythondes: 'Quick Summary The most difficult decision for an entrepreneur is deciding on a programming...',
    readmore: 'Read More ->',
    nodejs: 'Node Js',
    nodejsdes: 'Best Practices for Node.js Application Development:...',
    ror: 'JavaScript vs Ruby On Rails: What...',
    rordes: 'Quick Summary: Ruby on Rails and JavaScript both languages are both widely popular among'
  }

  global:Global = {
    global: 'Our Global Presence',
    hq: 'India (HQ)',
    address1: 'Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat, Gujarat 394101',
    no1: '+91 9874662135',
    usa: 'USA',
    address2: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
    no2: '+91 9874662135',
    uk: 'United KIngdom',
    address3: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
    no3: '+91 9874662135',
    email: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052'
  }

  globalform:Globalform = {
    getquote: 'Get Your Free Quote Today'
  }

  footer:Footer = {
    latest: 'Get latest from Tagline Infotech',
    sharemail: 'Share your email so we can send you',
    guides: 'guides',
    and: 'and',
    industrynews: 'industry news',
    subscribe: 'Subscribe',
    unsubscribe: 'You can unsubscribe at any time. Read our privacy policy.',
    inquiry: 'HR Inquiry',
    email: '  hr@taglineinfotech.com',
    no: '+91 6354362521',
    saless: 'Sales Inquiry',
    tagline: ' Tagline infotech',
    help: 'Help & Advice',
    career: 'Career',
    aboutus: 'About us',
    contactus: 'Contact us',
    blog: 'Blog',
    privacy: 'Privacy Policy',
    sitemap: 'Site Map',
    service: 'Services',
    mobile: 'Mobile',
    webdev: 'Web Developers',
    webdesign: 'Web Design',
    ui: 'UI / UX Design',
    digital: 'Digital Marketing',
    hire: 'Hire Developers',
    hirepython: 'Hire Python Developers',
    hireangular: 'Hire Angular Developers',
    hireror: 'Hire ROR Developers',
    hireflutter: 'Hire Flutter Developers',
    hirereact: 'Hire React Developers',
    hirenative: 'Hire Native Developers',
    follow: 'Follow Us',
    year: '2022',
    rightreserved: 'All rights reserved by',
    llp: 'Tagline Infotech LLP'
  }

}