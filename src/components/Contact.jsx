import React from "react";
import {Mail, Github, Facebook} from "lucide-react";
import {contactLinks} from "../data/contact";
const Contact = ({ hasAnimated }) => {
    const contactLinksWithIcons = contactLinks.map(link => ({
        ...link, icon: link.label === "Email Mee" ? <Mail className="w-5 h-5 mr-2"/> : 
        link.label === "GitHub" ? <Github className="w-5 h-5 mr-2"/> : <Facebook className="w-5 h-5 mr-2"/>
    }));
    return (
        <section id="contact" className="py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className={`transition-all duration-1000 delay-500 ${hasAnimated.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl font-bold mb-8">Work togetherr</h2>

                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below!</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                    <a href={contactLinksWithIcons[0].href} className={`flex items-center justify-center w-full sm:w-auto ${contactLinksWithIcons[0].className}`}>
                        {contactLinksWithIcons[0].icon}
                        {contactLinksWithIcons[0].label}
                    </a>
                    <div className="flex gap-4 sm:gap-8">
                        <a href={contactLinksWithIcons[1].href} className={`flex items-center justify-center flex-1 sm:flex-none ${contactLinksWithIcons[1].className}`}>
                            {contactLinksWithIcons[1].icon}
                            {contactLinksWithIcons[1].label}
                        </a>
                        <a href={contactLinksWithIcons[2].href} className={`flex items-center justify-center flex-1 sm:flex-none ${contactLinksWithIcons[1].className}`}>
                            {contactLinksWithIcons[2].icon}
                            {contactLinksWithIcons[2].label}
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;