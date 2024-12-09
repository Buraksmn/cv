import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Burak Şaman",
  initials: "BŞ",
  location: "Türkiye, Istanbul",
  locationLink: "",
  about: "Frontend Developer",
  summary:
    "Frontend alanında 4 yılı aşkın bir süredir aktif olarak çalışmaktayım. Bu süre boyunca edindiğim deneyimle, farklı sektörlere yönelik web uygulamaları ve kullanıcı arayüzleri geliştirdim. Proje yaşam döngüsünün tamamında yer alarak, ihtiyaç analizinden tasarım aşamasına, geliştirmeden canlıya almaya ve sonrasında da bakım desteğine kadar tüm süreçlerde görev aldım. Özellikle sıfırdan proje geliştirme konusunda uzmanlaştım ve karmaşık kullanıcı deneyimlerini başarılı bir şekilde hayata geçirdim.",
  highlights: ["Problem Solving", "Crisis Management"],
  personalWebsiteUrl: "https://www.buraksmn.dev/",
  contact: {
    email: "buraksmn0@gmail.com",
    tel: "+90 539 358 3990",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Buraksmn",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/buraksmn0/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [],
  work: [
    {
      company: "Esa Esports",
      link: "https://esaesports.com/",
      badges: ["Remote", "React", "NextJS", "TypeScript"],
      title: "Mid. Frontend Developer",
      start: "2023",
      end: "Halen",
      description:
        "Ready2.gg adlı oyun turnuvası platformunda, sıfırdan kurulan bir ekipte görev alarak oyuncuların ilgi alanlarına uygun turnuvalar oluşturmasına ve bu turnuvalara katılmasına olanak tanıyan bir platform geliştirdim. Projenin tüm aşamalarında yer alarak, ihtiyaç analizinden tasarım sürecine, geliştirmeden canlıya almaya kadar aktif rol oynadım. Platformun kullanıcı deneyimini iyileştirmek ve yeni özellikler eklemek amacıyla sürekli olarak geliştirme çalışmalarına öncülük ettim.",
    },
    {
      company: "Hub.Studio",
      link: "",
      badges: ["React", "React Native", "NextJs", "NX", "TypeScript"],
      title: "Mid. Frontend Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2022",
      description:
        "Blockchain Teknolojileri: React Native ve TypeScript ile geliştirdiğim kripto para uygulamasıyla, kullanıcıların portföylerini takip etmelerini, piyasa analizleri yapmalarını ve güvenli bir şekilde işlem yapmalarını sağladım. \n" +
        "Şirketin mevcut CRM sisteminin eksikliklerini belirleyerek, daha verimli ve kullanıcı dostu bir arayüz için yenilikçi çözümler sundum. Bu süreçte, mevcut sistemin mimarisini analiz ederek, ölçeklenebilir ve sürdürülebilir bir yapı oluşturmaya odaklandım.",
    },
    {
      company: "Ehesapp & Bermuda",
      link: "https://ehesapp.com/",
      badges: ["Remote", "ReactJS", "Redux"],
      title: "JR. Frontend Developer → Mid. Frontend Developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2022",
      description:
        "B2B ve B2C olmak üzere farklı sektörlere yönelik projelerde yer aldım. Yurt içi ve yurt dışı müşteriler için yazılım çözümleri geliştirdim ve destek sağladım. Ehesapp projesini baştan sona yöneterek canlıya aldım ve müşteri geri bildirimleri doğrultusunda sürekli geliştirdim.",
    },
  ],

  frontend: ["JavaScript", "TypeScript"],
  libs: ["ReactJs", "NextJs", "React Native"],
  tools: ["Github", "Gitlab", "GIT", "Figma", "Zeplin"],
  projects: [
    {
      title: "Ready2.gg",
      techStack: ["TypeScript", "Next.js"],
      link: {
        label: "Ready2.gg",
        href: "https://Ready2.gg/",
      },
    },
    {
      title: "Ehesapp",
      techStack: ["React", "Next.js"],

      link: {
        label: "Ehesapp",
        href: "https://ehesapp.com/",
      },
    },
    {
      title: "Sline",
      techStack: ["React", "Redux"],
      link: {
        label: "S-line.com.tr",
        href: "https://s-line.com.tr/",
      },
    },
    {
      title: "Sadal B2B",
      techStack: ["React", "Redux"],
    },
    {
      title: "CRM (Hub Studio)",
      techStack: ["React"],
    },
    {
      title: "Amax - Quote App",
      techStack: ["React"],
    },
    {
      title: "Amax - Landing Pages",
      techStack: ["React"],
    },
  ],
  freelance: [
    {
      title: "Dojo Talent",
      techStack: ["TypeScript", "Next.js"],
    },
    {
      title: "Her Scooter Backoffice",
      techStack: ["TypeScript", "Next.js", "vite"],
    },
    {
      title: "Vepara Backoffice",
      techStack: ["TypeScript", "React.js", "vite"],
    },
  ],
} as const;
