import React from 'react';
import { Section } from './ui/Section';
import { ExternalLink, Github, Smartphone, Globe, CheckCircle2 } from 'lucide-react';

export const Projects = () => {
    return (
        <Section id="projects" className="bg-slate-900/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Projects</h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    Production-grade applications built for real users, handling everything from architecture to release.
                </p>

                <div className="space-y-32">
                    {/* Project 1: Inbo */}
                    <div className="group">
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                                        Web & Mobile Platform
                                    </div>
                                    <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                                        Live
                                    </div>
                                </div>

                                <h3 className="text-4xl font-bold text-white">Inbo Platform</h3>

                                <p className="text-slate-300 leading-relaxed text-lg">
                                    Inbo is a production-grade newsletter and content-reading platform that helps users discover, subscribe to, and read newsletters across Web, iOS, and Android — with offline access and analytics-driven insights.
                                </p>

                                <div>
                                    <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">Key Tech</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React Native', 'Expo', 'Next.js', 'Redux Toolkit', 'React Query', 'Firebase', 'Django REST API'].map(t => (
                                            <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <a href="https://inbo-web.netlify.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all hover:-translate-y-1">
                                        <Globe className="w-5 h-5" /> Visit Web App
                                    </a>
                                    <a href="https://apps.apple.com/in/app/inbo-club/id6747464212" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all hover:-translate-y-1 border border-slate-700">
                                        <Smartphone className="w-5 h-5" /> iOS App
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=club.inbo.newsletter" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all hover:-translate-y-1 border border-slate-700">
                                        <Smartphone className="w-5 h-5" /> Android App
                                    </a>
                                </div>
                            </div>

                            {/* Image Composition */}
                            {/* Image Composition */}
                            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full perspective-1000 mt-8 lg:mt-0">
                                {/* Web App Image - Back */}
                                <div className="absolute top-0 right-0 w-[90%] md:w-4/5 h-auto z-10 transform transition-transform duration-500 group-hover:scale-105">
                                    <img
                                        src="/projects/inbo-web.png"
                                        alt="Inbo Web Dashboard"
                                        className="rounded-xl shadow-2xl border border-slate-700/50"
                                    />
                                </div>

                                {/* Mobile Expo - Front Left */}
                                <div className="absolute bottom-4 left-0 w-[40%] md:w-1/3 z-20 transform translate-y-4 md:translate-y-10 group-hover:translate-y-2 md:group-hover:translate-y-6 transition-transform duration-500 delay-75">
                                    <img
                                        src="/projects/inbo-app-expo.png"
                                        alt="Inbo Mobile App"
                                        className="rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border-2 md:border-4 border-slate-800"
                                    />
                                </div>

                                {/* Mobile CLI - Front Right/Center */}
                                <div className="absolute bottom-8 right-4 md:bottom-12 md:right-20 w-[40%] md:w-1/3 z-30 transform translate-y-4 md:translate-y-10 group-hover:translate-y-2 md:group-hover:translate-y-6 transition-transform duration-500 delay-100">
                                    <img
                                        src="/projects/inbo-app-cli.png"
                                        alt="Inbo CLI App"
                                        className="rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border-2 md:border-4 border-slate-800"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Inbo Contributions Grid */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800/50">
                            <h4 className="text-lg font-semibold text-white mb-6">Key Contributions & Architecture</h4>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    "Architected and scaled a 100K+ LOC React Native codebase",
                                    "Migrated app from Expo CLI → React Native CLI (New Architecture)",
                                    "Designed offline-first system with background sync and intelligent caching",
                                    "Implemented secure authentication (Google OAuth + Email OTP + JWT)",
                                    "Built inbox, reading experience, favorites, read-later, and trash flows",
                                    "Integrated Firebase Analytics & Mixpanel with GDPR-compliant consent",
                                    "Implemented push notifications with deep linking (FCM)",
                                    "Released and maintained public iOS & Android apps"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-400 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project 2: Disease Recognition */}
                    <div className="group">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 relative flex justify-center">
                                <div className="relative w-64 transform transition-transform duration-500 group-hover:scale-105">
                                    <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
                                    <img
                                        src="/projects/flutter-disease.png"
                                        alt="Disease Recognition App"
                                        className="relative z-10 rounded-[2rem] shadow-2xl border-4 border-slate-800"
                                    />
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                                        Machine Learning Mobile App
                                    </div>
                                </div>

                                <h3 className="text-4xl font-bold text-white">Disease Recognition App</h3>

                                <p className="text-slate-300 leading-relaxed text-lg">
                                    A Flutter + Machine Learning mobile application for detecting agricultural diseases in crops and livestock.
                                </p>

                                <div className="space-y-4 bg-slate-900/50 p-6 rounded-xl border border-slate-800/50">
                                    <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Key Highlights</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Achieved 96% accuracy for crop disease detection",
                                            "Achieved ~80% accuracy for livestock diseases",
                                            "Integrated ML models with a Flask backend",
                                            "Provided actionable insights for farmers"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-slate-400">
                                                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">Key Tech</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Flutter', 'Machine Learning', 'Flask', 'REST APIs', 'Python'].map(t => (
                                            <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <a href="https://github.com/Arupbiswas09/Crop_and_livestock_disease_prediction_app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all hover:-translate-y-1 border border-slate-700">
                                        <Github className="w-5 h-5" /> View Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
