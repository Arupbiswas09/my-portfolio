import React from 'react';
import { Section } from './ui/Section';

export const About = () => {
    return (
        <Section id="about" className="bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p>
                                I’m a Mobile & Full-Stack Engineer with hands-on experience owning and delivering production-grade applications used by real users.
                                I specialize in <span className="text-blue-400 font-medium">React Native</span>, <span className="text-blue-400 font-medium">Next.js</span>, and <span className="text-blue-400 font-medium">TypeScript</span>, and I enjoy working on complex problems such as offline-first systems, secure authentication, performance optimization, and scalable architecture.
                            </p>
                            <p>
                                I’ve led the development of <span className="text-white font-medium">Inbo</span>, a cross-platform newsletter and content-reading platform available on Web, iOS, and Android, handling everything from initial architecture to public store deployments.
                            </p>
                            <p>
                                I’m currently open to remote and global engineering roles, especially in product-driven teams where quality and ownership matter.
                            </p>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                        <div className="relative rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
                            <img
                                src="/profile.jpeg"
                                alt="Arup Biswas"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
