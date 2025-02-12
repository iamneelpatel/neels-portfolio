import Image from "next/image"
import { Linkedin, Instagram, Mail, Download, Code, TrendingUp, Briefcase, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import CalendlyWidget from "@/components/CalendlyWidget"

export default function Page() {
  return (
    <>
    
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full p-1.5">
                    <TrendingUp className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-lg">Neel Patel</span>
                </div>
                <div className="flex items-center gap-4">
                  <a href="#skills" className="font-medium hover:text-primary">
                    Skills
                  </a>
                  <a href="#projects" className="font-medium hover:text-primary">
                    Projects
                  </a>
                  <a href="#contact" className="font-medium hover:text-primary">
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <a href="https://www.linkedin.com/in/neel-patel-2a7800180/" className="p-2 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/neelpxtel_/" className="p-2 hover:text-primary">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/iamneelpatel" className="p-2 hover:text-primary">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 overflow-hidden">
          <div className="container mx-auto max-w-6xl relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h1 className="text-5xl font-serif mb-6">Neel Patel: Finance & Tech Innovator</h1>
                <p className="text-xl text-gray-600 mb-8">Bridging the gap between finance and technology</p>
                <div className="flex gap-4">
                  <a
                    href="mailto:neelpatel1804@gmail.com"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </a>
                  <a
                    href="/neel_patel_cv.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8 py-2"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-[300px] h-[300px] mx-auto">
                  {/* Outer decorative circles */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 animate-spin-slow"
                    style={{ animationDuration: "30s" }}
                  />
                  <div className="absolute inset-2 rounded-full border border-gray-100" />

                  {/* Profile image container with gradient background */}
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-2xl">
                    {/* Subtle inner shadow */}
                    <div className="absolute inset-0 rounded-full shadow-inner" />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-full" />

                    {/* Profile image */}
                    <div className="w-full h-full relative rounded-full overflow-hidden p-12">
                      <Image
                        src="/avatar.png"
                        alt="Profile Avatar"
                        width={160}
                        height={160}
                        className="rounded-full object-contain w-full h-full"
                        priority
                      />
                    </div>
                  </div>

                  {/* Stats circles with enhanced styling */}
                  <div className="absolute -left-4 top-1/4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center w-16 h-16 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 rounded-full">
                      <span className="text-xl font-bold">3+</span>
                      <span className="text-[10px] text-gray-600">Years</span>
                    </div>
                  </div>

                  <div className="absolute -right-4 bottom-1/4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center w-16 h-16 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 rounded-full">
                      <span className="text-xl font-bold">100%</span>
                      <span className="text-[10px] text-gray-600">Success</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-4xl font-bold mb-2">3+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">100%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">5+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16" id="skills">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-4xl font-serif mb-12 text-center">Skills to Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <ul className="space-y-2">
                  <li>Web Development (React, Next.js)</li>
                  <li>App Development</li>
                  <li>Data Scraping</li>
                  <li>Automation</li>
                </ul>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Financial Expertise</h3>
                <ul className="space-y-2">
                  <li>Indian Financial Markets</li>
                  <li>Forex Trading</li>
                  <li>Financial Analysis</li>
                  <li>Investment Strategies</li>
                </ul>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Skills</h3>
                <ul className="space-y-2">
                  <li>Project Management</li>
                  <li>Research & Analysis</li>
                  <li>Problem Solving</li>
                  <li>Communication</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Projects */}
        <section className="py-16 bg-gray-50" id="projects">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-4xl font-serif mb-12 text-center">Latest Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <Image
                  src="/email.jpg"
                  alt="Project 1"
                  width={400}
                  height={300}
                  className="w-full object-cover aspect-video"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Bulk Mail sender</h3>
                  <p className="text-gray-600">Bulk mail sending service created for a SSI.</p>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src="/scraper.jpg" alt="Project 2" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Multiple Data Scrapers</h3>
                  <p className="text-gray-600">Data scraping for financial analysis, and decision making.</p>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src="/research.jpg" alt="Project 3" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Research Papers</h3>
                  <p className="text-gray-600">Click to view my research papers.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <blockquote className="text-2xl font-serif mb-8">
              Finance enthusiast with hands-on experience in Indian financial markets and forex, combined with strong
              technical skills in web and app development. Passionate about leveraging technology for financial growth
              and innovation.
            </blockquote>
            <cite className="block text-gray-600">
              <span className="font-semibold block mb-1">Who am I?</span>
            </cite>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t" id="contact">
          <CalendlyWidget/>
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">© 2024. All Rights Reserved.</p>
              <p className="text-gray-600">neelpatel1804@gmail.com</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

