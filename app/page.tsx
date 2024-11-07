'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform-none z-50"
        style={{ scaleX }}
      />
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900 bg-opacity-90 shadow-md backdrop-blur-sm">
        <ul className="flex justify-center space-x-4 p-4">
          {['Hero', 'About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Button
                variant="ghost"
                className={`text-sm font-medium ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-300 transition-colors`}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center text-center px-4 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
        initial="initial"
        animate="animate"
        
      >
        <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm">
          <motion.h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Shafana</motion.h1>
          <motion.p className="text-2xl mb-8 font-light">Computer Science Graduate | Data Analyst | Software Developer</motion.p>
          <motion.div  className="flex justify-center space-x-4">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-500 hover:bg-blue-600 text-white">
              Contact Me
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </motion.div>

      <motion.section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">About Me</h2>
        <Card className="max-w-3xl w-full bg-gray-800 text-white">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              As a recent Computer Science graduate with a strong foundation in data analysis and process optimization, I bring 7 months of hands-on software development experience from my internship at CodeCraft Technologies. My journey in tech is driven by a passion for leveraging data to drive decisions and optimize workflows.
            </p>
            <p className="text-lg mb-4">
              I specialize in full-stack development, with proficiency in JavaScript, TypeScript, React.js, Next.js, and Express.js. My experience extends to working with SQL databases and utilizing tools like Excel and Drizzle ORM for comprehensive data analysis.
            </p>
            <p className="text-lg">
              What sets me apart is my ability to bridge the gap between technical implementation and business objectives. I thrive in collaborative environments, having worked effectively with cross-functional teams to deliver scalable web applications that not only meet technical requirements but also align closely with business goals.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        initial="initial"
        whileInView="animate"
        
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {[
            { skill: "Data Analysis & Process Mapping", tools: "SQL, Excel, Drizzle ORM" },
            { skill: "Business Process Improvement", tools: "Workflow optimization, Data-driven decision making" },
            { skill: "Full-Stack Development", tools: "JavaScript, TypeScript, React.js, Next.js, Express.js" },
            { skill: "Project Management", tools: "Test-Driven Development (TDD), Git version control" },
            { skill: "Database Management", tools: "MySQL, PostgreSQL" },
            { skill: "API Development", tools: "RESTful APIs, GraphQL" },
            { skill: "UI/UX Design", tools: "Figma, Adobe XD" },
            { skill: "Cloud Services", tools: "AWS, Google Cloud Platform" }
          ].map((item, index) => (
            <motion.div key={index}  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="h-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <CardHeader>
                  <CardTitle className="text-blue-400">{item.skill}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.tools}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Experience</h2>
        <Card className="max-w-3xl w-full bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">Intern Software Engineer</CardTitle>
            <CardDescription className="text-gray-300">CodeCraft Technologies | Mangaluru | February 2024 - September 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-200">
              <li>Conducted in-depth data analysis and process optimization within full-stack development projects, enhancing data workflows and team productivity by 30%.</li>
              <li>Gained hands-on experience in Test-Driven Development (TDD) and collaborative coding using Git, with a focus on optimizing data integrity and process efficiency.</li>
              <li>Automated various aspects of web application workflows, including data processing and validation, resulting in a 40% reduction in manual data entry errors.</li>
              <li>Developed a strong ability to collaborate with cross-functional teams, focusing on seamless integration of data processes and aligning with business objectives.</li>
              <li>Contributed to the development of scalable web applications using React.js and Next.js, improving application performance by 25%.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        id="education"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Education</h2>
        <div className="space-y-6 max-w-3xl w-full">
          {[
            { degree: "BE-Computer Science", institution: "Sahyadri College Of Engineering and Management", location: "Mangaluru", year: "2024", score: "8.77" },
            { degree: "P.U.C", institution: "Mother Teresa's PU College", location: "Shankarnarayana, Udupi", year: "2020", score: "95%" },
            { degree: "SSLC", institution: "Govt. High School", location: "Siddapura", year: "2018", score: "96%" }
          ].map((edu, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }}>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{edu.degree}</CardTitle>
                  <CardDescription className="text-gray-300">{edu.institution} | {edu.location} | {edu.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">Score: <span className="font-semibold">{edu.score}</span></p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Projects</h2>
        <div className="space-y-6 max-w-4xl w-full">
          {[
            {
              title: "Library Management Web System",
              description: "Developed a full-stack library management system using TypeScript, MySQL, React.js, and Express.js. Integrated RazorPay for payments, Calendly for scheduling, and Google OAuth for user authentication.",
              link: "https://nextjs-library-management-2ezx.vercel.app/en",
              technologies: ["TypeScript", "MySQL", "React.js", "Express.js", "RazorPay", "Google OAuth"]
            },
            {
              title: "Bill Splitter",
              description: "Developed a dynamic web application using React.js to manage and split expenses among group members, streamlining shared cost tracking and payments. Implemented real-time updates and intuitive user interface for easy expense management.",
              link: "#",
              technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"]
            },
            {
              title: "Data Visualization Dashboard",
              description: "Created an interactive data visualization dashboard using D3.js and React, showcasing complex datasets in an easily understandable format. Implemented various chart types and filtering options for in-depth data exploration.",
              link: "#",
              technologies: ["D3.js", "React", "Node.js", "Express.js"]
            }
          ].map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }}>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-200">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-600 text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <Button variant="outline" onClick={() => window.open(project.link, '_blank')} className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                      View Project
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Contact</h2>
        <Card className="max-w-md w-full bg-gray-800 text-white">
          <CardContent className="space-y-4 pt-6">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <Mail className="w-5 h-5 text-blue-400" />
              <p>shifashafana14@gmail.com</p>
            </motion.div>
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <Phone className="w-5 h-5 text-blue-400" />
              <p>8971091841</p>
            </motion.div>
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <Linkedin className="w-5 h-5 text-blue-400" />
              <a href="https://www.linkedin.com/in/shafanashafi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                linkedin.com/in/shafanashafi
              </a>
            </motion.div>
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <Github className="w-5 h-5 text-blue-400" />
              <a href="https://github.com/Shafana53" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                github.com/yourgithub
              </a>
            </motion.div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}