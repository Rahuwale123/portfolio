import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Cpu, 
  Layers, 
  Database, 
  Smartphone, 
  Mic2, 
  Users, 
  ArrowRight,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Globe
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Types ---
interface Project {
  title: string;
  description: string[];
  tech: string[];
  link?: string;
  icon: any;
}

interface SkillCategory {
  title: string;
  skills: string[];
  icon: any;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

// --- Data ---
const SKILLS: SkillCategory[] = [
  {
    title: "AI / Machine Learning",
    icon: Cpu,
    skills: ["LLMs", "LangChain", "Gemini AI", "Hugging Face", "RAG", "AI Agents", "Prompt Engineering", "TensorFlow"]
  },
  {
    title: "Web & Frontend",
    icon: Layers,
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Performance Optimization", "SSR/SSG"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter (Expert)", "iOS/Android", "BLoC/Riverpod", "Custom Widgets", "App Store Deployment"]
  },
  {
    title: "Backend & Systems",
    icon: Database,
    skills: ["FastAPI", "Django", "Python", "Node.js", "REST APIs", "WebSockets", "C"]
  },
  {
    title: "Voice & Speech AI",
    icon: Mic2,
    skills: ["Vosk STT", "VITS TTS", "Twilio Voice", "Real-time Streaming", "Audio Pipelines"]
  },
  {
    title: "Leadership & Infra",
    icon: Users,
    skills: ["Team Management (50+)", "Sprint Planning", "Docker", "AWS", "Firebase", "PostgreSQL"]
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: "AI Developer & Technical Lead",
    company: "The BAAP Company",
    period: "Jul 2023 – Present",
    location: "Sangamner, India",
    highlights: [
      "Leading cross-functional engineering team of 50+ developers across 5+ concurrent AI tracks.",
      "Architected 4+ production AI platforms serving rural India with 99% uptime.",
      "Delivered Voice-on-Call platform integrating Gemini AI & Sarvam STT; reduced call-center load by 60%.",
      "Built LangEase, a no-code AI chatbot builder enabling 5,000+ self-serve interactions.",
      "Managed full project architecture, technical SOPs, and mentored 50+ junior developers."
    ]
  }
];

const PROJECTS: Project[] = [
  {
    title: "Voice-on-Call AI Platform",
    description: [
      "Real-time AI voice assistant for citizens to lodge civic queries in local languages.",
      "Integrates Pipecat, Gemini, Twilio, and FastAPI.",
      "Achieved 99% uptime with 500+ concurrent users."
    ],
    tech: ["Pipecat", "Gemini", "Twilio", "FastAPI", "React"],
    icon: Mic2
  },
  {
    title: "LangEase - No-Code Chatbot",
    description: [
      "Drag-and-drop platform for designing and deploying domain-specific AI chatbots.",
      "Handled 5,000+ daily interactions across rural government organizations.",
      "Real-time chat UI built with Next.js and companion mobile app in Flutter."
    ],
    tech: ["Python", "LangChain", "Gemini AI", "Next.js", "Flutter"],
    icon: Code
  },
  {
    title: "SmartCCTV AI Surveillance",
    description: [
      "Plug-and-play AI layer for existing IP-based CCTV cameras.",
      "Features: automated attendance via facial recognition, unknown person detection.",
      "React dashboard for live monitoring and reports."
    ],
    tech: ["YOLOv9", "ArcFace", "OpenCV", "FastAPI", "PostgreSQL"],
    icon: Globe
  },
  {
    title: "WhatsApp AI Automation",
    description: [
      "Zero-cost WhatsApp chatbot platform bypassing official Business API.",
      "Auto-deployment of AI-powered agents with intent handling via Gemini AI."
    ],
    tech: ["whatsapp-web.js", "Node.js", "Gemini AI", "FastAPI"],
    icon: Smartphone
  }
];

// --- Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" id="nav-logo" className="flex items-center gap-3 group">
          <img 
            src="https://res.cloudinary.com/dcybn3ez0/image/upload/v1777055077/cutting/barbers/lrq51zu1495rl3simr3q.jpg" 
            alt="Wales AI Logo" 
            className="w-10 h-10 rounded-xl object-cover border border-slate-200 group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="font-mono font-bold text-xl tracking-tighter text-blue-600">
            RAHUL.WALE<span className="text-slate-400">()</span>
          </span>
        </a>
        <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="mailto:staticmast@gmail.com" className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all text-sm shadow-lg shadow-blue-500/10">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 text-lg max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
          <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Available for Production Opportunities
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
              >
                Building AI Systems that <span className="text-blue-600">Work at Scale.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-2xl"
              >
                Rahul Wale is an <span className="font-semibold text-slate-900">AI/ML Engineer</span> and <span className="font-semibold text-slate-900">Full-Stack Lead</span> with 2+ years of experience delivering production-grade AI platforms, voice agents, and high-performance mobile/web products.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#projects" className="group px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                  View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex gap-2">
                  <a href="https://github.com/Rahuwale123" target="_blank" rel="noreferrer" id="hero-github" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-95 shadow-sm">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/rahul_wale" target="_blank" rel="noreferrer" id="hero-linkedin" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-95 shadow-sm">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative hidden lg:flex justify-end pr-12"
            >
              <div className="relative w-[420px] h-[520px]">
                {/* Decorative Background Border */}
                <div className="absolute inset-0 border-4 border-blue-600/20 rounded-[3rem] translate-x-6 translate-y-6 -z-10" />
                
                {/* Main Image Container */}
                <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://res.cloudinary.com/dcybn3ez0/image/upload/v1778318687/WhatsApp_Image_2026-04-24_at_10.02.08_AM_q76pcf.jpg" 
                    alt="Rahul Wale" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100 max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Status</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Leading AI Projects @ BAAP Company</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Badges */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-slate-100">
            {[
              { label: 'Experience', value: '2+ Years' },
              { label: 'Engineers Led', value: '50+' },
              { label: 'Uptime', value: '99%' },
              { label: 'Product Tracks', value: '5+' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Technical Arsenal" 
            subtitle="Extensive expertise across the modern AI stack, from low-level voice pipelines to high-scale web platforms." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100 group-hover:border-blue-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Professional Trajectory" />
          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-slate-100"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <div className="text-blue-600 font-semibold text-lg flex items-center gap-2">
                      <Briefcase className="w-5 h-5" /> {exp.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-4 py-1.5 bg-slate-900 text-white text-sm font-bold rounded-full mb-2">
                      {exp.period}
                    </span>
                    <div className="text-slate-400 flex items-center justify-end gap-1 text-sm font-medium">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-4 max-w-4xl">
                  {exp.highlights.map((item, j) => (
                    <li key={j} className="flex gap-4 text-slate-600 leading-relaxed group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 group-hover:scale-125 transition-transform" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Now Light */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Strategic Deployments" 
            subtitle="Selected high-impact projects that demonstrate technical depth and product intuition."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-[2.5rem] hover:shadow-xl hover:shadow-blue-500/5 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors" />
                
                <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <project.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{project.title}</h3>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {project.description.map((line, k) => (
                    <p key={k} className="text-slate-500 text-sm leading-relaxed font-medium">
                      {line}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                  {project.tech.map((t, l) => (
                    <span key={l} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - Now Dark */}
      <section id="education" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Academic Foundation" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap justify-between items-center bg-slate-800/50 p-10 rounded-[2.5rem] border border-slate-700/50 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -mr-24 -mt-24" />
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/20 flex items-center justify-center text-white shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-3xl mb-2 tracking-tight">Bachelor of Computer Applications (BCA)</h5>
                    <p className="text-blue-400 font-bold text-xl mb-4">Mysore University, India</p>
                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Pursuing while leading AI product development
                    </div>
                  </div>
                </div>
                <div className="text-right mt-8 md:mt-0 relative z-10">
                  <span className="text-white font-mono text-xl block">2023 – 2026</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-blue-600 rounded-[2.5rem] flex flex-col justify-center text-center lg:text-left"
            >
              <h4 className="text-xl font-bold mb-4">Continuous Learning</h4>
              <p className="text-blue-100 text-sm leading-relaxed font-medium">
                Bridging the gap between formal education and real-world AI implementation through hands-on leadership of production-grade systems.
              </p>
            </motion.div>
          </div>

          {/* Social Proof/Additional Context - Kept in Dark Flow */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3rem] text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <img 
                src="https://res.cloudinary.com/dcybn3ez0/image/upload/v1777055077/cutting/barbers/lrq51zu1495rl3simr3q.jpg" 
                alt="Wales AI Logo" 
                className="w-20 h-20 rounded-2xl object-cover mx-auto mb-6 border-2 border-white/20 shadow-xl"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-3xl font-bold mb-6">Creator of Wales AI</h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 font-light">
                Scaling an AI education brand on Instagram for the Indian tech audience. Providing original content covering LLMs, real-world AI applications, and developer tools.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://instagram.com/wales._ai" target="_blank" rel="noreferrer" id="extra-instagram" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
                  @wales._ai <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-slate-50 pt-24 pb-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-6 group">
                <img 
                  src="https://res.cloudinary.com/dcybn3ez0/image/upload/v1777055077/cutting/barbers/lrq51zu1495rl3simr3q.jpg" 
                  alt="Wales AI Logo" 
                  className="w-10 h-10 rounded-xl object-cover border border-slate-200 group-hover:rotate-6 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <span className="font-mono font-bold text-2xl tracking-tighter text-blue-600">
                  RAHUL.WALE<span className="text-slate-400">()</span>
                </span>
              </a>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-medium">
                Production-grade AI solutions for enterprise-scale challenges. Specialized in technical leadership and full-stack AI orchestration.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: 'https://github.com/Rahuwale123', id: 'foot-github' },
                  { icon: Linkedin, link: 'https://linkedin.com/in/rahul_wale', id: 'foot-linkedin' },
                  { icon: Mail, link: 'mailto:staticmast@gmail.com', id: 'foot-mail' },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    id={social.id}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-blue-600 transition-colors">Capabilities</a></li>
                <li><a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Reach Out</h4>
              <div className="space-y-4">
                <a href="mailto:staticmast@gmail.com" className="flex items-center gap-3 text-slate-500 font-medium hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 shrink-0" /> staticmast@gmail.com
                </a>
                <div className="flex items-center gap-3 text-slate-500 font-medium">
                  <Phone className="w-5 h-5 shrink-0" /> +91 93568 53041
                </div>
                <div className="flex items-center gap-3 text-slate-500 font-medium">
                  <MapPin className="w-5 h-5 shrink-0" /> Sangamner, Maharashtra, India
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 flex flex-wrap justify-between items-center gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-slate-900 text-sm font-bold uppercase tracking-[0.2em]">rahulwale.tech</p>
              <p className="text-slate-400 text-xs font-medium">
                &copy; {new Date().getFullYear()} Rahul Wale. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              SYSTEMS_STATUS: ONLINE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

