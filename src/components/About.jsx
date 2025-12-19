import React from "react";
import { Github, Facebook, Mail, Code, Palette, Phone, ExternalLink  } from "lucide-react";
const About = ({hasAnimated}) => {
    const features = [
        {
            icon: <Code className="w8 h-8 mb-4 text-black" />,
            title: "Kodeee",
            description: "Proficient in JavaScript, Python, and C++, with hands-on experience in React, Node.js, and Django."
        },
        {
            icon: <Palette className="w8 h-8 mb-4 text-black" />,
            title: "Design",
            description: "Skilled in UI/UX design using Figma and Adobe XD to create user-friendly interfaces."
        },
        {
            icon: <Phone className="w8 h-8 mb-4 text-black" />,
            title: "Responsive",
            description: "Expertise in building responsive web applications that work seamlessly across devices."
        },
        {
            icon: <ExternalLink className="w8 h-8 mb-4 text-black" />,
            title: "Deployment",
            description: "Experience with deploying applications using AWS, Heroku, and Netlify."
        },
    ];

    return (
        <section id="about" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? 'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>  
                    <div className="grid md :grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 mb-6">
                                Hello! I'm a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life in the digital world.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                My journey in web development started a few years ago, and since then, I've been dedicated to honing my skills and staying updated with the latest industry trends. I thrive in collaborative environments and love tackling challenging problems.
                            </p>
                            <div className="flex space-x-4">
                                <Github className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors"/>
                                <Facebook className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors"/>
                                <Mail className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {features.map((features,index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                {features.icon} 
                                <h3 className="font-semibold mb-2">{features.title}</h3>
                                <p className="text-gray-600 text-sm">{features.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
       </div>
 </section>
    );
};


export default About;
