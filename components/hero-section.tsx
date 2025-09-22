import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4" />
            {"Launching Soon - Join the Waitlist"}
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl font-[family-name:var(--font-poppins)] text-balance">
            Your All-in-One Multi-Currency Wallet
          </h1>

          <p className="mb-10 text-xl text-primary-foreground/90 sm:text-2xl max-w-3xl mx-auto leading-relaxed text-pretty">
            {
              "Manage multiple currencies, join Ajo savings groups, get virtual cards, and transfer money peer-to-peer — all in one secure platform."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg font-semibold group transition-all duration-200 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
    </section>
  )
}
