import React from 'react';
import { Section } from './ui/Section';
import { Mail, Github, Globe, ArrowRight } from 'lucide-react';

export const Contact = () => {
    return (
        <Section id="contact" className="bg-gradient-to-t from-slate-900 to-slate-950">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Let’s Build Something Great</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                    I’m open to remote & global opportunities in React Native / Mobile Engineering, Frontend / Full-Stack Engineering, and Product-focused teams.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="mailto:myarupslg@gmail.com"
                        className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all hover:-translate-y-1 flex items-center gap-3 shadow-lg shadow-blue-900/20"
                    >
                        <Mail className="w-5 h-5" />
                        <span>myarupslg@gmail.com</span>
                    </a>

                    <a
                        href="https://github.com/Arupbiswas09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all hover:-translate-y-1 flex items-center gap-3 border border-slate-700 hover:border-slate-600"
                    >
                        <Github className="w-5 h-5" />
                        <span>GitHub Profile</span>
                    </a>

                    <a
                        href="https://arupbiswas.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all hover:-translate-y-1 flex items-center gap-3 border border-slate-700 hover:border-slate-600"
                    >
                        <Globe className="w-5 h-5" />
                        <span>Portfolio Website</span>
                    </a>
                </div>
            </div>
        </Section>
    );
};
