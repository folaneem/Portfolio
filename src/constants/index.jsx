import olyves from "../assets/olyves.png"
import biz from "../assets/biz.png"
import sands from "../assets/sands.png"
import majorlink from "../assets/majorlink.png"



export const navLinks = [
    {
      id: "about",
      title: "About Neemat",
      href: "#",
      current: true
    },
    {
      id: "works",
      title: "Her Works",
      href: "#",
      current: false
    },
    {
      id: "contact",
      title: "Contact Her",
      href: "#",
      current: false
    },
   
  ];

  export const projectLinks = [
    {
      id: "featured",
      title: "Featured Works",
      current: true
    },
    {
        id: "personal",
        title: "Personal Works",
        current: false
      },
   
  ];
  export const eachWork = [
    {
      id: "olyves",
      title: "OLYVES",
      name: "olyves",
      description: "A seamless payroll processing platform that works for Nigerian businesses, HR personnel, and employees.",
      img:olyves,
    
    },
    {
        id: "sands",
        title: "SANDS",
        name: "biz",
        description: "An online store where Nigerians may buy items created by Nigerian manufacturers both in Nigeria and the diaspora.",
        img:sands,
      
      },
      {
        id: "majorlink",
        title: "MAJORLINK",
        name: "biz",
        description: "A trading platform that allows you to trade your giftcards & crypto to cash instantly.",
        img:majorlink,
      
      },
      {
        id: "biz",
        title: "BIZCONVERSE",
        name: "biz",
        description: "An e-commerce platform where buying and selling is done in a more in telligent way with the help of AI.",
        img:biz,
      
      },
   
   
  ];