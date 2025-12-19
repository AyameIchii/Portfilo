import { Facebook, X } from "lucide-react";

export const heroData = {
  greeting: "Hello, I'm",
  name: "Shiroo",
  roles: ["Frontend Developer", "React Specialist"], 
  description: "I'm Chill Guy.",
  subtitle: "Chiken codee",
  cta: "Know More",
  stats: [
    { number: "10+", label: "Projects Completed" },
    { number: "4+", label: "Years Of Experience" },
    { number: "10+", label: "Happy Clients" },
  ],
  socialLinks: [ 
    {
        name: "GitHub",
        URL: "https://github.com/AyameIchii",
        icon: "Github",
    },
    {
        name: "Facebook",
        URL: "https://www.facebook.com/nguyen.khanh.501854/",
        icon: "Facebook",
    },
    {
        name: "X",
        URL: "https://x.com/KhanhPhu11",
        icon: "X",
    },
    {
        name: "Gmail",
        URL: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
        icon: "Mail",
    }
],
ctaButtons: [
    {
        text: "View My Work",
        href: "#projects",
        variant: "primary"
    },
    {
        text: "Contact Me",
        href: "#contact",
        variant: "secondary"
    },
]
};