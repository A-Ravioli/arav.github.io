'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full h-16 bg-white border-b">
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            Arav
          </Link>
          <div className="space-x-6">
            <Link href="#about" className="hover:text-primary/80">About</Link>
            <Link href="#projects" className="hover:text-primary/80">Projects</Link>
            <Link href="#contact" className="hover:text-primary/80">Contact</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="hero-image" role="img" aria-label="San Francisco Golden Gate Bridge illustration" />

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="max-w-2xl">
              <p className="text-lg text-muted-foreground mb-6">
                I&apos;m a passionate developer focused on creating beautiful and functional digital experiences. 
                With a keen eye for design and a love for clean code, I build applications that make a difference.
              </p>
              <p className="text-lg text-muted-foreground">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                and staying up-to-date with the latest web development trends.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Add your project cards here */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => window.open('https://github.com/yourusername', '_blank')}
              >
                GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
