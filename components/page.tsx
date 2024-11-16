'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Minus, Plus, ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BlockPage() {
  const [activeProcess, setActiveProcess] = useState<number | null>(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  
  // Infinite logo slider animation
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    
    let scrollInterval: NodeJS.Timeout
    
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0
        } else {
          slider.scrollLeft += 1
        }
      }, 20)
    }

    startScroll()
    
    return () => clearInterval(scrollInterval)
  }, [])

  const testimonials = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    // Add more testimonials as needed
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <div className="w-4 h-4 bg-[#191A23] rotate-45" />
            Positivus
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm hover:underline underline-offset-4"
              >
                {item}
              </Link>
            ))}
          </div>
          <Button className="rounded-[2rem] border border-[#191A23] bg-white text-[#191A23] hover:bg-[#191A23] hover:text-white transition-colors px-6">
            Request a quote
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button className="rounded-full bg-[#191A23] text-white hover:bg-[#191A23]/90 px-8 py-6 text-lg">
              Book a consultation
            </Button>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pharmaceutical-marketing-abstract-concept-vector-illustration-pharmaceutical-digital-agency-medicine-marketing-strategy-drugs-advertising-medical-equipment-market-promotion-abstract-metaphor_335657-60%20(1).jpg-gjqKMnObUKIWW3dbKj0OHbgM6t8K2g.jpeg"
              alt="Digital Marketing Illustration"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <div className="w-full overflow-hidden bg-white py-12">
        <div 
          ref={sliderRef}
          className="flex gap-16 items-center whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {['amazon', 'dribbble', 'hubspot', 'notion', 'netflix', 'zoom'].map((logo) => (
            <div key={logo} className="w-32 opacity-50 hover:opacity-100 transition-opacity">
              <Image
                src={
                  logo === 'amazon' 
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-official-amazon-logo-701751694791962sskadamgig-XiIYXIRdJFq8ToJMCthJM1za8CaBgS.png"
                    : logo === 'hubspot'
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(1)-sDYAaUBYl4suXXACJFRMzAQxJxErRl.png"
                    : logo === 'zoom'
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hd-black-zoom-text-logo-transparent-png-701751694778202hqzbkjjx75-MMkuCOi83Op43c3AoGx2rV0uUQqmv2.png"
                    : logo === 'netflix'
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-4Yx3myJ1ol4IgiAUlnKzBOsn758ppO.png"
                    : logo === 'dribbble'
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dribbble.jpg-ChCvVRndIS4jOLkUXO4ndEkCrRDLLf.jpeg"
                    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Notion-fIZEkKgggg3e6bUmbAdy5j0ltSftUh.svg"
                }
                alt={`${logo} logo`}
                width={128}
                height={40}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-16 container mx-auto px-4">
        <div className="bg-[#B9FF66] inline-block px-4 py-2 rounded-full mb-4">
          Services
        </div>
        <p className="text-xl mb-12">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F3F3F3] p-8 rounded-[2rem] relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <div className="bg-[#B9FF66] inline-block px-4 py-2 rounded-lg mb-8">
                <span className="text-xl font-medium">Search engine optimization</span>
              </div>
              <div className="flex justify-center mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/59b8ed8b-21ca-4bac-b8b2-016a87498862-KUWAOm5dXf0XOp8vW9XET04fKew4ts.png"
                  alt="SEO"
                  width={200}
                  height={200}
                  className="w-48 h-48 object-contain"
                />
              </div>
              <button className="inline-flex items-center gap-2 bg-black text-white rounded-full p-4 hover:bg-black/80 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="bg-[#B9FF66] p-8 rounded-[2rem] relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <div className="bg-white inline-block px-4 py-2 rounded-lg mb-8">
                <span className="text-xl font-medium">Pay-per-click advertising</span>
              </div>
              <div className="flex justify-center mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/227ffa3e-9590-4f94-b276-e5aa99eec591-zJbCjh6yVrBsZZ6fWVzzoAJay3YjVU.png"
                  alt="PPC"
                  width={200}
                  height={200}
                  className="w-48 h-48 object-contain"
                />
              </div>
              <button className="inline-flex items-center gap-2 bg-black text-white rounded-full p-4 hover:bg-black/80 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-16 container mx-auto px-4">
        <div className="bg-[#B9FF66] inline-block px-4 py-2 rounded-full mb-4">
          Our Working Process
        </div>
        <p className="text-xl mb-12">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
        <div className="space-y-4">
          {[
            {
              number: "01",
              title: "Consultation",
              content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            },
            {
              number: "02",
              title: "Research and Strategy Development",
              content: "Our team conducts thorough research and develops a comprehensive strategy tailored to your business needs."
            }
          ].map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "rounded-[2rem] transition-all duration-300",
                activeProcess === index ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
              )}
            >
              <div
                className="p-8 cursor-pointer"
                onClick={() => setActiveProcess(activeProcess === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold mr-4">{step.number}</span>
                    <span className="text-2xl font-bold">{step.title}</span>
                  </div>
                  <Button variant="outline" className="rounded-full p-2">
                    {activeProcess === index ? (
                      <Minus className="h-6 w-6" />
                    ) : (
                      <Plus className="h-6 w-6" />
                    )}
                  </Button>
                </div>
                {activeProcess === index && (
                  <p className="mt-4 text-lg">{step.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#191A23] text-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#B9FF66] text-black inline-block px-4 py-2 rounded-full mb-4">
            Testimonials
          </div>
          <p className="text-xl mb-12">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out"
                   style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="border border-[#B9FF66] rounded-[2rem] p-8">
                      <p className="text-lg mb-8">{testimonial.text}</p>
                      <div>
                        <p className="text-[#B9FF66] font-bold">{testimonial.author}</p>
                        <p className="text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 gap-4">
              <Button
                onClick={() => setCurrentTestimonial(prev => Math.max(0, prev - 1))}
                className="rounded-full p-2"
                variant="outline"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={() => setCurrentTestimonial(prev => Math.min(testimonials.length - 1, prev + 1))}
                className="rounded-full p-2"
                variant="outline"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191A23] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start mb-12">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-4 h-4 bg-[#B9FF66] rotate-45" />
                <span className="text-2xl font-bold">Positivus</span>
              </div>
              <div className="space-y-2">
                <div className="bg-[#B9FF66] text-black inline-block px-4 py-2 rounded-full mb-4">
                  Contact us:
                </div>
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#292A32] border-none rounded-full"
              />
              <Button className="w-full rounded-full bg-[#B9FF66] text-black hover:bg-[#B9FF66]/90">
                Subscribe to news
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#B9FF66]">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#B9FF66]">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#B9FF66]">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}