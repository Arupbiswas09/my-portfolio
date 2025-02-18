import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Database, Terminal, Cpu, Server, Layout, ChevronDown, Trophy, Users, Brain, Wrench, Briefcase, MessageSquare, BookOpen, Award, Send, Clock, ExternalLink, MapPin } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'website'
  });

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      }));
    };

    setParticles(generateParticles());
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
          y: (p.y + p.speedY + window.innerHeight) % window.innerHeight,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
      projectType: 'website'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-blue-400 opacity-20"
            style={{
              left: p.x + 'px',
              top: p.y + 'px',
              width: p.size + 'px',
              height: p.size + 'px',
            }}
          />
        ))}
      </div>

      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Arup Biswas
            </div>
            <div className="hidden md:flex space-x-8">
              <NavLink href="#home" active={activeSection === 'home'} onClick={() => setActiveSection('home')}>Home</NavLink>
              <NavLink href="#skills" active={activeSection === 'skills'} onClick={() => setActiveSection('skills')}>Skills</NavLink>
              <NavLink href="#projects" active={activeSection === 'projects'} onClick={() => setActiveSection('projects')}>Projects</NavLink>
              <NavLink href="#achievements" active={activeSection === 'achievements'} onClick={() => setActiveSection('achievements')}>Achievements</NavLink>
              <NavLink href="#contact" active={activeSection === 'contact'} onClick={() => setActiveSection('contact')}>Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className={`min-h-screen pt-24 pb-16 relative ${isVisible.home ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Hi, I'm Arup Biswas
            </h1>
            <div className="relative">
              <p className="text-xl text-gray-300 mb-6 typing-animation">
                B.Tech CSE Student | Full Stack Developer | IoT Enthusiast .
              </p>
            </div>
            <p className="text-gray-300">
              Seeking a challenging role as a Software Engineer to leverage my full-stack development skills and contribute to innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/Arupbiswas09" icon={<Github className="w-6 h-6" />} />
              <SocialLink href="https://www.linkedin.com/in/arup-biswas-87bb25269" icon={<Linkedin className="w-6 h-6" />} />
              <SocialLink href="mailto:myarupslg@gmail.com" icon={<Mail className="w-6 h-6" />} />
              <SocialLink href="tel:+919749628507" icon={<Phone className="w-6 h-6" />} />
              <a
              href="https://drive.google.com/file/d/1wvF-RBDR2jCjEs_C7hSm15D3XhNfaTqo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-300"
            >
              <span>Resume</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-lg blur-xl opacity-20 animate-pulse"></div>
              <img 
                src="src/images/IMG_4060.jpg"
                alt="Coding workspace"
                className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-blue-400 animate-bounce" />
        </div>
      </section>

      <section id="projects" className={`py-24 relative ${isVisible.projects ? 'animate-slideUp' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Disease Recognition Mobile App"
              description="Flutter app with TensorFlow ML achieving 96% accuracy for crop diseases and 80% for livestock diseases. Integrated Python Flask backend with Gemini AI API."
              tags={['Flutter', 'Flask', 'Machine Learning', 'Gemini AI', 'Firebase']}
              icon={<Cpu />}
              link="https://github.com/Arupbiswas09/Crop_and_livestock_disease_prediction_app"
            />
            <ProjectCard 
              title="PrismAura Portfolio"
              description="Modern portfolio website with smooth animations and responsive design."
              tags={['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']}
              icon={<Layout />}
              link="https://prismaura.netlify.app"
            />
          </div>
        </div>
      </section>

      <section id="skills" className={`py-24 relative ${isVisible.skills ? 'animate-slideUp' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCategory 
              title="Programming Languages"
              skills={['C++', 'C', 'Python', 'JavaScript', 'TypeScript']}
              icon={<Code />}
            />
            <SkillCategory 
              title="Web Development"
              skills={['React', 'Node.js', 'Flask', 'Django', 'HTML/CSS']}
              icon={<Layout />}
            />
            <SkillCategory 
              title="Databases & Cloud"
              skills={['MongoDB', 'Firebase', 'AWS', 'Render', 'Netlify']}
              icon={<Database />}
            />
            <SkillCategory 
              title="AI & ML Tools"
              skills={['TensorFlow', 'Gemini AI', 'OpenAI API', 'ChatGPT']}
              icon={<Brain />}
            />
            <SkillCategory 
              title="IoT & Robotics"
              skills={['Arduino', 'Raspberry Pi', 'Embedded Systems']}
              icon={<Cpu />}
            />
            <SkillCategory 
              title="Development Tools"
              skills={['Git', 'Docker', 'VS Code', 'PyCharm', 'Android Studio']}
              icon={<Wrench />}
            />
          </div>
        </div>
      </section>

      <section id="achievements" className={`py-24 relative ${isVisible.achievements ? 'animate-slideUp' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <AchievementCard 
              title="Robotics Competition Winner"
              description="Winner of two consecutive robotics competitions during college tech fest (2022, 2023), showcasing expertise in design and innovation."
              icon={<Trophy />}
            />
            <AchievementCard 
              title="Lead Member - College Fest"
              description="Core team member for organizing the annual college fest (2024), managing multiple events successfully."
              icon={<Users />}
            />
            <AchievementCard 
              title="Smart India Hackathon"
              description="Participated in Smart India Hackathon (Internal), developing innovative solutions for real-world problems."
              icon={<Award />}
            />
            <AchievementCard 
              title="Academic Excellence"
              description="Maintaining CGPA of 8.0 in B.Tech Computer Science Engineering at Siliguri Institute of Technology."
              icon={<BookOpen />}
            />
          </div>
        </div>
      </section>

      <section id="contact" className={`py-24 relative ${isVisible.contact ? 'animate-slideUp' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Let's Work Together
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400">Get in Touch</h3>
              <p className="text-gray-300">
                Looking for a custom website or innovative software solution? I'm here to help turn your vision into reality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" />
                  <span>myarupslg@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400" />
                  <span>+91 9749628507</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-400" />
                  <span>Siliguri, West Bengal, India</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="website">Website Design</option>
                  <option value="webapp">Web Application</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function NavLink({ href, children, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
        active ? 'text-blue-400' : 'text-gray-300'
      }`}
    >
      {children}
    </a>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-gray-800/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-110"
    >
      {icon}
    </a>
  );
}

function ProjectCard({ title, description, tags, icon, link }) {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
      >
        View Project
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
}

function SkillCategory({ title, skills, icon }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
      <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function AchievementCard({ title, description, icon }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-blue-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;