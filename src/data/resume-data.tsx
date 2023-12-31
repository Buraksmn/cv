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
    "Alaylı olarak başladıgım bu sektörde Frontend developer olarak 3+ yılı geçik bir tecrübem var. 3 Farklı firmada çalıştım ve 0 dan 100e birçok proje geliştirdim. canlı sonrası müşteriye destek verdim ve yeni özellikler ekledim.",
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
      badges: ["Remote","React","NextJS","TypeScript"],
      title: "Mid. Frontend Developer",
      start: "2023",
      end: "Halen",
      description:
        "0 dan kurulan bir ekip ile oyuncuların ilgi alanlarındaki oyunlarda turnuva açıp veya turnuvalara katılabilecegi ready2.gg adında bir proje oluşturduk ve yeni özellikler ile geliştirmelere devam ediyoruz.",
    },
    {
      company: "Hub.Studio",
      link: "",
      badges: ["React","React Native","NextJs","NX","TypeScript"],
      title: "Mid. Frontend Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2022",
      description:
        "Reactjs , ReactNative ve typescript kullanarak kripto para uygulaması geliştirdik.\n" +
        "Şirketin Kendi içerisinde kullanılan CRM projesinin dönüşüm/yenileme süreçlerinde görev aldım",
    },
    {
      company: "Ehesapp & Bermuda",
      link: "https://ehesapp.com/",
      badges: ["Remote","ReactJS","Redux"],
      title: "JR. Frontend Developer → Mid. Frontend Developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2022",
      description:"B2B ve B2C projeleri geliştirdik. Yurt içi ve yurt dışı projelerinde desteklerde bulundum ve geliştirmeler yaptım. 0-100'e ehesapp projesini geliştirdik ve canlıya aldık. canlı sonrası müşteri taleplerine göre yeni özellikler ekledim.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native"
  ],
  projects: [
    {
      title: "Ready2.gg",
      techStack: [
        "TypeScript",
        "Next.js",
      ],
      description: "Oyuncuların ve Organizatörlerin turnuvalar oluşturup oynatabilecegi bir platform",
      link: {
        label: "Ready2.gg",
        href: "https://Ready2.gg/",
      },
    },
    {
      title: "Ehesapp",
      techStack: [
        "React",
        "Next.js",
      ],
      description: "Büyük Firmaların Tüm banka hesaplarını tek bir uygulama üzerinden görüntüleyip rapolar sunan bir uygulama",
      link: {
        label: "Ehesapp",
        href: "https://ehesapp.com/",
      },
    },
    {
      title: "Sline",
      techStack: [
        "React",
      ],
      description: "Sadal firmasına geliştirdigimiz bir B2C projesi",
      link: {
        label: "S-line.com.tr",
        href:"https://s-line.com.tr/",
      },
    },
    {
      title: "Buraksmn.dev",
      techStack: ["Side Project", "Next.js"],
      description:
        "Kişisel web sitem. Nextjs ve T3Stack kullanılarak geliştirildi.",
      link: {
        label: "buraksmn.dev",
        href: "https://buraksmn.dev/",
      },
    },
    {
      title: "PurchasingPowerTurkey",
      techStack: ["Side Project", "Next.js","Radix UI"],
      description:
        "2023 Yılının sonunda belli olan yeni asgari ücretin karşısında çalışan kişilerin alım gücünü korumak için ne kadar maaş alması gerektigini hesaplar",
      logo: Minimal,
      link: {
        label: "PurchasingPowerTurkey",
        href: "https://purchasing-power-turkey.vercel.app/",
      },
    },
    {
      title: "Tekerlekizi",
      techStack: ["Side Project", "Next.js", "Ant desing"],
      description:
        "İnsanların çalınan araçlarını paylaşabilecegi ve bulunması sürecinde destek olan kişilere ödül dagıtmayı hedefleyen bir app (geliştirmelere devam ediyorum)",
      logo: BarepapersLogo,
      link: {
        label: "Tekerlekizi",
        href: "https://tekerlekizi-web.vercel.app/",
      },
    },
  ],
} as const;
