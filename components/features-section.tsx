import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Users, CreditCard, ArrowLeftRight } from "lucide-react"

const features = [
  {
    icon: Wallet,
    title: "Multi-Currency Wallet",
    description:
      "Store, manage, and exchange multiple currencies with real-time rates and low fees. Support for 50+ global currencies.",
  },
  {
    icon: Users,
    title: "Ajo Savings Groups",
    description:
      "Join or create traditional rotating savings groups with friends and family. Automated contributions and transparent tracking.",
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description:
      "Generate instant virtual cards for online purchases. Set spending limits, freeze cards, and track transactions in real-time.",
  },
  {
    icon: ArrowLeftRight,
    title: "P2P Transfers",
    description:
      "Send money to anyone, anywhere, instantly. Low fees, high security, and support for cross-border transactions.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-[family-name:var(--font-poppins)] text-balance">
            Everything you need for modern finance
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            {"Powerful features designed to simplify your financial life and help you manage money across borders."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold font-[family-name:var(--font-poppins)]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
