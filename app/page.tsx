import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Bell, ChevronRight, Building2, Scissors, Car, Utensils, Scale, Store } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Aiva</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#who-its-for" className="text-sm font-medium hover:text-primary">
              Who It's For
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="#demo">Book a Free Demo</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Never Miss a Call Again – Let Aiva Handle It for You
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Automate appointment booking, customer inquiries, and follow-ups – so you can focus on running your
                    business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="px-8">
                    <Link href="#demo">Book a Free Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] rounded-full bg-muted/50 p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Phone className="h-32 w-32 text-primary" />
                  </div>
                  <div className="absolute -right-4 top-1/4 flex h-12 w-40 items-center justify-center rounded-full bg-primary/90 text-sm font-medium text-primary-foreground shadow-lg backdrop-blur-sm">
                    24/7 Availability
                  </div>
                  <div className="absolute -left-4 top-1/2 flex h-12 w-40 items-center justify-center rounded-full bg-primary/80 text-sm font-medium text-primary-foreground shadow-lg backdrop-blur-sm">
                    Instant Booking
                  </div>
                  <div className="absolute -bottom-4 left-1/3 flex h-12 w-40 items-center justify-center rounded-full bg-primary/70 text-sm font-medium text-primary-foreground shadow-lg backdrop-blur-sm">
                    No More Missed Calls
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container py-24 mt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="mt-4 text-muted-foreground">
              Our AI assistant handles your calls and appointments in three simple steps
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3 mt-12">
            <div className="gradient-border">
              <div className="flex flex-col items-center space-y-4 bg-background p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Answers Calls</h3>
                <p className="text-center text-muted-foreground">
                  Handles customer inquiries 24/7, never missing an opportunity to connect.
                </p>
              </div>
            </div>
            <div className="gradient-border">
              <div className="flex flex-col items-center space-y-4 bg-background p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Schedules Appointments</h3>
                <p className="text-center text-muted-foreground">
                  Automates bookings & reschedules, syncing directly with your calendar.
                </p>
              </div>
            </div>
            <div className="gradient-border">
              <div className="flex flex-col items-center space-y-4 bg-background p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Bell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Sends Reminders</h3>
                <p className="text-center text-muted-foreground">
                  Reduces no-shows with automated texts/calls, keeping your schedule full.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section id="who-its-for" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Who It's For</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Any business that relies on phone calls can benefit from AI automation
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Medical Clinics</span>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Scissors className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Salons</span>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Auto Repair</span>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Restaurants</span>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Law Firms</span>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Car Dealerships</span>
              </div>
            </div>
          </div>
        </section>

        {/* Demo & CTA Section */}
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Book a Free Demo</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  See how our AI assistant can transform your business operations
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="rounded-lg border bg-background p-8">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold">Schedule Your Demo</h3>
                    <p className="text-sm text-muted-foreground">Pick a time that works for you</p>
                  </div>
                  {/* Calendly placeholder - in a real implementation, you would embed the actual Calendly widget */}
                  <div className="flex flex-col space-y-2">
                    <Button asChild size="lg" className="rounded-full shadow-lg">
                      <Link href="https://calendly.com/yuevan10284/30min">
                        <span className="flex items-center gap-2">
                          Talk to us now
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-24 mt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Businesses like yours are saving time and growing with our AI assistant
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            <div className="gradient-border">
              <div className="flex flex-col items-center text-center bg-white p-6 h-full">
                <p className="text-muted-foreground">"Since using AI, we've saved hours of phone time each week! Our staff can focus on patients instead of answering calls."</p>
                <h3 className="font-bold mt-4">Dr. Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">Family Medical Practice</p>
              </div>
            </div>
            <div className="gradient-border">
              <div className="flex flex-col items-center text-center bg-white p-6 h-full">
                <p className="text-muted-foreground">"Our no-show rate dropped by 35% with the automated reminders. The ROI was immediate and our clients love the convenience."</p>
                <h3 className="font-bold mt-4">Michael Torres</h3>
                <p className="text-sm text-muted-foreground">Luxury Salon Owner</p>
              </div>
            </div>
            <div className="gradient-border">
              <div className="flex flex-col items-center text-center bg-white p-6 h-full">
                <p className="text-muted-foreground">"We never miss a potential customer now. The AI handles after-hours calls and our appointment book is always full."</p>
                <h3 className="font-bold mt-4">Lisa Chen</h3>
                <p className="text-sm text-muted-foreground">Auto Repair Shop Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-24 mt-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground text-center">
              Get answers to common questions about our AI assistant
            </p>
            
            <div className="mx-auto mt-8 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    Does this replace my receptionist?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, it complements your team. Our AI handles routine calls and scheduling, freeing your staff to focus on in-person customer service and more complex tasks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    Can it handle rescheduling?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! The AI can reschedule appointments, check availability, and update your calendar system automatically.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    How does it integrate with my existing systems?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our AI integrates with most popular scheduling software and CRM systems. We provide a simple setup process and ongoing support.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    What if a caller needs to speak to a real person?
                  </AccordionTrigger>
                  <AccordionContent>
                    The AI can seamlessly transfer calls to your staff when needed, or take messages for follow-up during business hours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    Is there a long-term contract?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, we offer flexible monthly plans with no long-term commitment required. You can upgrade, downgrade, or cancel anytime.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join hundreds of businesses saving time and growing with AI-powered call handling
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="px-8">
                  <Link href="#demo">Book a Free Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">Aiva</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contact
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Terms
            </Link>
          </nav>
          <div className="flex items-center">
            <Button asChild size="sm" variant="outline">
              <Link href="#demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
        <div className="container mt-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aiva. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky CTA Button (Mobile) */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button asChild size="lg" className="rounded-full shadow-lg">
          <Link href="#demo">
            <span className="flex items-center gap-2">
              Book a Demo
              <ChevronRight className="h-4 w-4" />
            </span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

