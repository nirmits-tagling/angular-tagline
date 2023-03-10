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
button: string;
description: string;
tag: string;
img: string;
  // ourservices:string,
  // find:string,
  // rightoffer:string,
  // foryou:string,
}

interface Ourservices{
 
  tag:string,
  description:string,
  button:string,
  img:string,
  
}

// interface Contactus{
//   chooseustag:string,
//   contactbtn:string
//   dropline:string
// }

interface Experience{
  experiencetag:string,
  experiencedescription:string,
  contactbtn:string,
  imgtag:string
}

// interface Experiencesub{
//   contentlogo1:string,
//   contentlogo2:string,
//   contentlogo3:string,
//   contentlogo4:string,
//   plusexp1:string,
//   plusexp2:string,
//   plusexp3:string,
//   plusexp4:string,
//   plusexptag1:string,
//   plusexptag2:string,
//   plusexptag3:string,
//   plusexptag4:string,
// }

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






interface Clientele {
  headtag:string,
  description1:string,
  description2:string,
 
}
interface RatingBox{
  rating:string,
  small:string,
  para:string,
  verfied:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tagline-angular';
   labelHeader = ["Case Study","About Us","Hire Developers","Technology","Industry"]

 

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

  

  experience:Experience = {
    experiencetag: 'We have the experience',
    experiencedescription: 'We have got the experience to make your dream come true, and these stats speak for themselves: we have 150+ clients worldwide in only three years, and we have worked on over 200 projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 60K+ hours of freelancing experience',
    contactbtn: 'button',
    imgtag:'../assets/../assets/images/woman.webp'
  }

 
    
  
 
  


   whytagline = [
//{     tag: 'Why Choose Tagline Infotech ?',
// description: 'We have a team of developers who use their expertise to provide complete web development, mobile app development, testing & assurance, SaaS development, and designing services. Tagline Infotech has a team of developers that you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for your startup or large-scale company. Our team of developers has the experience to understand the business ideas of the clients to provide solutions that focus on the core values of the business. Here you will find some benefits of hiring developers from us.',
//   },
  {
    number: '1',
   title: 'Progressive',
    description: 'Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive',
    img: '../assets/images/choose-roadmap.png',
  },{
    number: '2',
    title: 'Efficient',
description: 'We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently',
img: '../assets/images/choose-project.png',
  },{
    number: '3',
    title: 'Flexible',
  description: 'We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren???t satisfied with any model you can switch to another.',
    img: '../assets/images/choose-flexible.svg',
  },
  {
    number: '4',
    title: 'Costeffective',
    description: 'Our team of developers provides the best development services at affordable prices. We believe that high-quality solutions can be delivered at cost-effective prices and that???s why we provide different hiring',
    img: '../assets/images/choose-cost.png',
  },
  {
    number: '5',
    title: 'consistent',
  description: 'Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client???s requirements.',
  img: '../assets/images/choose-delivery.png',
  }]
  // {
  //   empowertag: 'Empower', 
  //   your: 'Your',
  //   business: 'Business',
  //   dedicateddev: 'with Dedicated Devlopers',
  //   talkbtn: 'button'
  // }

  clientele:Clientele = {
    headtag: 'Words From Our Clientele',
    description1: 'Good things come for those who work hard, and thats why our clientele appreciate our efforts. Tagline Infotech provides the best services to its clients, and it is reflected through our ratings and reviews on various platforms.',
    description2: 'We are a well-known IT services company on Clutch. Check out what our customers have to say about our services. Read their ratings, feedback, and stories about partnering with us before making your own decision.',
     };

     ratingbox = [{
    rating: '5.0',
    small: 'Everything always turns out perfectly done.',
    para: 'IT & Computer Scientist, Self-Employed',
    verfied: 'Verified Review'
  },
  {
    rating: '5.0',
small: 'Everything always turns out perfectly done.',
para: 'IT & Computer Scientist, Self-Employed',
verfied: 'Verified Review'
},
{
  rating: '5.0',
small: 'Everything always turns out perfectly done.',
para: 'IT & Computer Scientist, Self-Employed',
verfied: 'Verified Review'
},
{
  rating: '5.0',
small: 'Everything always turns out perfectly done.',
para: 'IT & Computer Scientist, Self-Employed',
verfied: 'Verified Review'
},
{
  rating: '5.0',
small: 'Everything always turns out perfectly done.',
para: 'IT & Computer Scientist, Self-Employed',
verfied: 'Verified Review'
},
{
  rating: '5.0',
small: 'Everything always turns out perfectly done.',
para: 'IT & Computer Scientist, Self-Employed',
verfied: 'Verified Review'
},

];

  // awards = [
    
  //   // awards: 'Awards &',
  //   // recognization: 'Recognitions',
  //    '../assets/images/award-2.webp',
  //   '../assets/images/award-3.webp',
  //   '../assets/images/award-4.webp',
  //   '../assets/images/award-5.webp',
  //   '../assets/images/award-6.webp'
  // ]
  



  footer = {
    latest: 'Get latest from Tagline Infotech',
    sharemail: 'Share your email so we can send you',
    guides: 'guides',
    and: 'and',
    industrynews: 'industry news',
    subscribe: 'Subscribe',
    unsubscribe: 'You can unsubscribe at any time. Read our privacy policy.',
  }

 hr = {
    inquiry: 'HR Inquiry',
    email: '  hr@taglineinfotech.com',
    no: '+91 6354362521',
      saless: 'Sales Inquiry',
    tagline: ' Tagline infotech',
  }

  helpadvice = ['Career','About us','Contact us','Blog','Privacy Policy','Site Map']
  // helpadvice = {
  //   help: 'Help & Advice',
  //   career: 'Career',
  //   aboutus: 'About us',
  //   contactus: 'Contact us',
  //   blog: 'Blog',
  //   privacy: 'Privacy Policy',
  //   sitemap: 'Site Map',
  // }
    servicesProvide = ['Services','Mobile','Web Developers','Web Design','UI / UX Design','Digital Marketing',] ;
    developerHiring = ['Hire Python Developers','Hire Angular Developers','Hire ROR Developers','Hire Flutter Developers','Hire React Developers','Hire Native Developers',];
  footerLast = ['Follow Us','2022','All rights reserved by','Tagline Infotech LLP'];
  // }


}