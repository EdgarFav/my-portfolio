
export const NAV_LINKS = [
    {
        name: "#about",
        link: "#about",
        title: "About",
    },
    {
        name: "#skills",
        link: "#skills",
        title: "Skills",
    },
    {
        name: "#projects",
        link: "#projects",
        title: "Projects",
    },
    {
        name: "#contact",
        link: "#contact",
        title: "Contact",
    },
];

export const TAB_DATA = [
    {title: "Skills", id: "Skills", content: (
        <ul className='list-disc pl-2'>
        <li>javascript</li>
        <li>react</li>
        <li>nodejs</li>
        <li>mongodb</li>
        <li>express</li>
        <li>typescript</li>
        <li>graphql</li>
        <li>nextjs</li>
        <li>tailwindcss</li>
        <li>sass</li>
        <li>bootstrap</li>
        </ul>
    )},
{title: "Education", id: "Education", content: (
        <ul className='list-disc pl-2'>
        <li>Master of Computer Science</li>
        <li>Bachelor of Engineering</li>
        </ul>
    )},
    {title: "Certifications", id: "Certifications", content: (
        <ul className='list-disc pl-2'>
        <li>Google Analytics Certified</li>
        <li>Google Tag Manager Certified</li>
        </ul>
    )},
]

export const PROJECTS_DATA =[{
    id:1,
    title: "Ecommerce Website Healthy MarketApp",
    description: "This is a website for Healthy MarketApp, a mobile application that helps people find healthy food options in their area. The website is built using React, Node.js, and MongoDB.",
    image: "/healthy.png",
    tags: ["All", "Mobile"],
    githubUrl: "/",
    previewUrl: "/"
},
{
    id:2,
    title: "PI Foods",
    description: "This is a website for Healthy MarketApp, a mobile application that helps people find healthy food options in their area. The website is built using React, Node.js, and MongoDB.",
    image: "/foods.png",
    tags: ["All", "Web"],
    githubUrl: "/",
    previewUrl: "/"
}
]