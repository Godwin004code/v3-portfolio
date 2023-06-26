import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import img1 from "./assets/pics/Screenshot 2023-06-17 at 12.37.24.png";
import img2 from "./assets/pics/Screenshot 2023-06-17 at 12.39.18.png"
import img3 from "./assets/pics/Screenshot 2023-06-17 at 12.39.25.png"
import img4 from "./assets/pics/Screenshot 2023-06-17 at 12.39.29.png"
import img5 from "./assets/pics/Screenshot 2023-06-26 at 13.22.43.png"
import img6 from "./assets/pics/Screenshot 2023-06-26 at 13.28.37.png"



export const projects =[
    {
        id:1,
        image:img1,
        desc:'Bubble.io',
        demo: 'http://blackscholar.info',
        source: ''
    },
    {
        id:2,
        image:img2,
        desc:'Reactjs, SCSS,API',
        demo: 'https://ewave.com.ng',
        source: 'https://github.com/PenuelSam/Anime-app'
    },
    {
        id:3,
        image:img3,
        desc:'Reactjs, CSS',
        demo: 'http://yourfavfitnesssite.netlify.app/',
        source: 'https://github.com/PenuelSam/React-Router-v6'
    },
    {
        id:4,
        image:img4,
        desc:'Reactjs, CSS',
        demo: 'http://geritchfav.netlify.app/',
        source: 'https://github.com/PenuelSam/Restaurant-App'
    },
    {
        id:5,
        image:img5,
        desc:'Reactjs, Tailwind, CSS',
        demo: 'https://general-studies-practice.vercel.app/',
        source: 'https://github.com/PenuelSam/loop-studio'
    },
   
    {
        id:6,
        image:img6,
        desc:'Reactjs, Tailwind',
        demo: 'https://www.bisonpeaklogistics.com/'
    }
    
]


export const navList = [
    {
        id: '/',
        name: 'Home'
    },
    {
        id: '#about',
        name: 'About'
    },
    {
        id: '#skill',
        name: 'Skills'
    },
    {
        id: '#portfolio',
        name: 'Projects'
    },
    {
        id: '#contact',
        name: 'Contact'
    },
]

export const skills =[
    {
        id: 1,
        tick: <CheckCircleIcon />,
        title: 'HTML',
        desc: 'Basics',
    },
    {
        id: 2,
        tick: <CheckCircleIcon />,
        title: 'CSS',
        desc: 'Advanced',
    },
    {
        id: 3,
        tick: <CheckCircleIcon />,
        title: 'Javascript',
        desc: 'Intermediate',
    },
    {
        id:4,
        tick: <CheckCircleIcon />,
        title: 'React',
        desc: 'Intermediate',
    },
    {
        id: 5,
        tick: <CheckCircleIcon />,
        title: 'Tailwind',
        desc: 'Intermediate',
    },
    {
        id: 6,
        tick: <CheckCircleIcon />,
        title: 'Git', 
        desc: 'Intermediate',       
    },
    {
        id: 7,
        tick: <CheckCircleIcon />,
        title: 'Framer-Motion', 
        desc: 'Intermediate',       
    },
    {
        id: 8,
        tick: <CheckCircleIcon />,
        title: 'AOS', 
        desc: 'Intermediate',       
    },
    {
        id: 9,
        tick: <CheckCircleIcon />,
        title: 'REST-API', 
        desc: 'Intermediate',       
    },
]

