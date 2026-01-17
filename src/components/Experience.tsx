import React from 'react';
import { Section } from './ui/Section';
import { Briefcase, Code2, ShieldCheck, Zap } from 'lucide-react';

export const Experience = () => {
    return (
        <Section id="experience">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience & Philosophy</h2>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Work History */}
                    <div className="space-y-12">
                        <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
                            <Briefcase className="w-5 h-5" /> Work History
                        </h3>

                        <div className="relative pl-8 border-l border-slate-800 space-y-12">
                            <div className="relative">
                                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-slate-900" />
                                <h4 className="text-lg font-bold text-white">Thatha Business Development LLP</h4>
                                <p className="text-sm text-slate-400 mb-2">Quokka for Good LLC, USA | Remote</p>
                                <div className="text-blue-400 text-sm font-medium mb-4">Lead Mobile Application Developer / Full-Stack Engineer</div>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li>• Owned end-to-end development of Inbo Web & Mobile platforms</li>
                                    <li>• Led architecture, migration, and production deployments</li>
                                    <li>• Managed full lifecycle from concept to app store release</li>
                                </ul>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-slate-700 ring-4 ring-slate-900" />
                                <h4 className="text-lg font-bold text-white">Esutra</h4>
                                <p className="text-sm text-slate-400 mb-2">Software Engineer Intern</p>
                                <div className="text-slate-400 text-sm font-medium mb-4">React Native</div>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li>• Worked on authentication, API integration, CI/CD, and UI development</li>
                                    <li>• Collaborated with senior engineers on core feature implementation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy / Highlights */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                            <Code2 className="w-5 h-5" /> Engineering Values
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <ShieldCheck className="w-8 h-8 text-blue-400 mb-3" />
                                <h4 className="font-semibold text-white mb-2">Production First</h4>
                                <p className="text-sm text-slate-400">Real-world reliability, crash boundaries, and analytics-driven decisions.</p>
                            </div>

                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                                <h4 className="font-semibold text-white mb-2">Performance</h4>
                                <p className="text-sm text-slate-400">FlashList virtualization, memoization, and offline-first caching strategies.</p>
                            </div>

                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <ShieldCheck className="w-8 h-8 text-purple-400 mb-3" />
                                <h4 className="font-semibold text-white mb-2">Security</h4>
                                <p className="text-sm text-slate-400">Secure storage, JWT management, and data privacy compliance.</p>
                            </div>

                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <Code2 className="w-8 h-8 text-emerald-400 mb-3" />
                                <h4 className="font-semibold text-white mb-2">Clean Arch</h4>
                                <p className="text-sm text-slate-400">Feature-based modular architecture and centralized error handling.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
