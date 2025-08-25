import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronUp,
  Code,
  Shield,
  Rocket,
  Award,
  Briefcase,
  Target,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Heart,
  ExternalLink
} from 'lucide-react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const content = {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      certificates: 'Certificates',
      experience: 'Experience',
      ambitions: 'Ambitions',
      contact: 'Contact'
    },
    hero: {
      name: 'MOHATA IBRAHIM',
      title: 'IbraDev Studio',
      subtitle: 'Full-Stack Developer & Space Enthusiast',
      description: 'Passionate about creating innovative solutions through code, exploring the mysteries of space, and building technology that makes a difference.',
      viewWork: 'View My Work',
      contact: 'Get In Touch'
    },
    about: {
      title: 'About Me',
      personalInfo: {
        fullName: 'MOHATA IBRAHIM',
        birthDate: 'August 16, 2005',
        birthPlace: 'Khénifra, Morocco',
        residence: 'Khemisset, Morocco',
        interests: 'Programming, Web & App Development, Space Science, Self-Learning, Logic, Digital Security'
      },
      biography: 'Started my journey in a simple environment which instilled discipline and diligence. Began learning technology with a basic phone and limited internet access, gradually building programming and web/app development skills. Self-taught through YouTube, Coursera, MIT OpenCourseWare, and programming communities. Progressed from small projects to advanced AI, cybersecurity, and space research.'
    },
    skills: {
      title: 'Technical Skills',
      categories: {
        mobile: 'Mobile Development',
        web: 'Web Development',
        security: 'Cybersecurity & Ethical Hacking',
        space: 'Space Science & Astronomy',
        other: 'Other Skills'
      }
    },
    certificates: {
      title: 'Certifications',
      google: {
        title: 'Programming Certificate',
        issuer: 'Google',
        period: 'June 2018 - November 2021'
      },
      ceh: {
        title: 'Certified Ethical Hacker (CEH)',
        issuer: 'EC-Council',
        period: 'May 2020 - August 2025'
      }
    },
    experience: {
      title: 'Experience & Projects',
      projects: [
        'Personal apps & websites development (Java, Flutter, React.js, Node.js)',
        'Termux tools for offline library management',
        'Cybersecurity: penetration testing, vulnerability fixing, network scanning',
        'Space science research: Stellarium/Celestia simulations, astronomy notes'
      ]
    },
    ambitions: {
      title: 'Future Ambitions',
      goals: [
        'Build high-quality Arabic apps and websites',
        'Establish a Moroccan youth tech team',
        'Publish free educational content on programming, space, and logic',
        'Obtain research opportunities or scholarships in space agencies or universities'
      ]
    },
    contact: {
      title: 'Get In Touch',
      description: 'Feel free to reach out for collaborations, opportunities, or just to connect!'
    }
  }

  const skillsData = {
    mobile: ['Kotlin', 'Java', 'Flutter', 'Dart', 'Firebase', 'SQLite', 'REST APIs', 'JSON', 'UI/UX Design'],
    web: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'Netlify', 'Vercel'],
    security: ['CEH Skills', 'Penetration Testing', 'Network Scanning', 'Nmap', 'Wireshark', 'SQL Injection', 'XSS', 'Red Team', 'Blue Team'],
    space: ['Physics', 'Astrophysics', 'Orbital Mechanics', 'Stellarium', 'Celestia', 'NASA/ESA Courses', 'Amateur Space Researcher'],
    other: ['Logical Thinking', 'AI Basics', 'Teamwork', 'Project Management', 'Self-Learning']
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openGitHub = () => {
    window.open('https://github.com/mohataibrahim', '_blank')
  }

  const openEmail = () => {
    window.location.href = 'mailto:mohataibrahim@gmail.com'
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-primary">IbraDev</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {Object.entries(content.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Controls */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {Object.entries(content.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary animate-fade-in">
                {content.hero.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                {content.hero.title}
              </h2>
              <p className="text-xl md:text-2xl text-accent-foreground">
                {content.hero.subtitle}
              </p>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {content.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('experience')}>
                {content.hero.viewWork}
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                {content.hero.contact}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{content.about.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {content.about.personalInfo.fullName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{content.about.personalInfo.birthDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{content.about.personalInfo.birthPlace}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{content.about.personalInfo.residence}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-muted-foreground mt-1" />
                    <span className="text-sm">{content.about.personalInfo.interests}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {content.about.biography}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{content.skills.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category === 'mobile' && <Code className="h-5 w-5" />}
                    {category === 'web' && <Code className="h-5 w-5" />}
                    {category === 'security' && <Shield className="h-5 w-5" />}
                    {category === 'space' && <Rocket className="h-5 w-5" />}
                    {category === 'other' && <Target className="h-5 w-5" />}
                    {content.skills.categories[category]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{content.certificates.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {content.certificates.google.title}
                </CardTitle>
                <CardDescription>{content.certificates.google.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{content.certificates.google.period}</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {content.certificates.ceh.title}
                </CardTitle>
                <CardDescription>{content.certificates.ceh.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{content.certificates.ceh.period}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{content.experience.title}</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  {content.experience.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {content.experience.projects.map((project, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{project}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ambitions Section */}
      <section id="ambitions" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{content.ambitions.title}</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  {content.ambitions.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {content.ambitions.goals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{content.contact.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.contact.description}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={openEmail}
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={openGitHub}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2024 MOHATA IBRAHIM - IbraDev Studio. All rights reserved.
          </p>
        </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          className="fixed bottom-8 right-8 rounded-full p-3 shadow-lg"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}
      </footer>
    </div>
  )
}

export default App

