  "use client"
  import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function PricingSections() {



  const pricingData = [
      // Website Developer Consultation
{
  category: "Website Developer Consultation",
  subtitle: "Get expert website development support with flexible weekly packages tailored to your needs.",
  plans: [
    {
      name: "Basic Weekly",
      price: "$200 / week",
      description: "Ideal for small development tasks or quick fixes.",
      popular: false,
      features: [
        "5 hours/week development work",
        "Bug fixing & minor updates",
        "Email support",
        "Code review & optimization suggestions",
        "Weekly progress report"
      ]
    },
    {
      name: "Standard Weekly",
      price: "$400 / week",
      description: "Best for regular development & feature updates.",
      popular: true,
      features: [
        "12 hours/week dedicated developer time",
        "Frontend & backend improvements",
        "Priority email & chat support",
        "Performance optimization",
        "Responsive design adjustments",
        "Weekly feature deployment"
      ]
    },
    {
      name: "Premium Weekly",
      price: "$700 / week",
      description: "Full-scale website development support.",
      popular: false,
      features: [
        "20+ hours/week development",
        "Custom feature development",
        "API integrations",
        "24/7 priority support",
        "Security monitoring & fixes",
        "UI/UX improvements",
        "Weekly strategy & planning meetings"
      ]
    }
  ]
},

// SEO Consultation
{
  category: "SEO Consultation",
  subtitle: "Boost your website's visibility with expert SEO strategies tailored to your business.",
  plans: [
    {
      name: "Basic Weekly",
      price: "$150 / week",
      description: "Perfect for small websites starting with SEO.",
      popular: false,
      features: [
        "SEO audit & report",
        "Basic on-page SEO optimization",
        "Keyword research (10 keywords)",
        "Email support",
        "Weekly ranking updates"
      ]
    },
    {
      name: "Standard Weekly",
      price: "$300 / week",
      description: "For growing websites aiming for better search rankings.",
      popular: true,
      features: [
        "In-depth SEO audit",
        "On-page optimization for up to 20 pages",
        "Keyword research (30 keywords)",
        "Link building (5 quality backlinks/week)",
        "Technical SEO improvements",
        "Priority support",
        "Weekly performance reports"
      ]
    },
    {
      name: "Premium Weekly",
      price: "$600 / week",
      description: "Complete SEO management for top rankings.",
      popular: false,
      features: [
        "Full technical & on-page SEO optimization",
        "Keyword research (50+ keywords)",
        "High-quality backlink building",
        "Content strategy & optimization",
        "24/7 priority support",
        "Competitor analysis",
        "Weekly SEO strategy meetings"
      ]
    }
  ]
},

    {
      category: "Web Development",
      subtitle: "Choose the perfect plan for your web development needs",
      plans: [
        {
          name: "Basic",
          price: "$2,999",
          description: "Perfect for small businesses getting started online",
          features: [
            "Up to 5 pages",
            "Responsive design",
            "Basic SEO optimization",
            "Contact form",
            "30 days support",
            "Free hosting setup",
          ],
          popular: false,
        },
        {
          name: "Standard",
          price: "$5,999",
          description: "Ideal for growing businesses with advanced needs",
          features: [
            "Up to 15 pages",
            "Custom design",
            "Advanced SEO",
            "Blog functionality",
            "Social media integration",
            "90 days support",
            "Analytics setup",
            "Content management system",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: "$9,999",
          description: "Complete solution for enterprise-level requirements",
          features: [
            "Unlimited pages",
            "Custom functionality",
            "E-commerce integration",
            "Advanced analytics",
            "Performance optimization",
            "1 year support",
            "Training included",
            "Priority support",
          ],
          popular: false,
        },
      ],
    },
    {
      category: "App Development",
      subtitle: "Choose the perfect plan for your app development needs",
      plans: [
        {
          name: "Basic",
          price: "$8,999",
          description: "Simple mobile app for single platform",
          features: [
            "iOS or Android",
            "Up to 5 screens",
            "Basic UI/UX design",
            "App store submission",
            "60 days support",
            "Push notifications",
          ],
          popular: false,
        },
        {
          name: "Standard",
          price: "$15,999",
          description: "Cross-platform app with advanced features",
          features: [
            "iOS and Android",
            "Up to 15 screens",
            "Custom UI/UX design",
            "Backend integration",
            "User authentication",
            "120 days support",
            "Analytics integration",
            "Social login",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: "$25,999",
          description: "Enterprise app with full feature set",
          features: [
            "Cross-platform",
            "Unlimited screens",
            "Advanced features",
            "Real-time functionality",
            "Admin dashboard",
            "1 year support",
            "Maintenance included",
            "Priority updates",
          ],
          popular: false,
        },
      ],
    },
    {
      category: "Digital Marketing",
      subtitle: "Choose the perfect plan for your digital marketing needs",
      plans: [
        {
          name: "Basic",
          price: "$999/mo",
          description: "Essential marketing for small businesses",
          features: [
            "Social media management",
            "2 platforms",
            "Monthly reporting",
            "Basic SEO",
            "Email support",
            "5 posts per week",
          ],
          popular: false,
        },
        {
          name: "Standard",
          price: "$1,999/mo",
          description: "Comprehensive marketing strategy",
          features: [
            "Multi-platform campaigns",
            "4 platforms",
            "Bi-weekly reporting",
            "Advanced SEO",
            "PPC advertising",
            "Priority support",
            "10 posts per week",
            "Content creation",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: "$3,999/mo",
          description: "Full-service marketing solution",
          features: [
            "All platforms",
            "Custom campaigns",
            "Weekly reporting",
            "Advanced analytics",
            "Dedicated manager",
            "24/7 support",
            "Unlimited content",
            "Strategy consulting",
          ],
          popular: false,
        },
      ],
    },
  ];
const handleBuyNow = async (plan) => {
    const stripe = await stripePromise;

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    });

    const data = await res.json();

    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
        <section className="bg-white py-20">
      {pricingData.map((section, sectionIdx) => (
        <div key={sectionIdx} className="container mx-auto px-4 mb-20 text-center">
          <h2 className="text-4xl font-bold mb-4">{section.category}</h2>
          <p className="text-gray-600 text-lg mb-12">{section.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {section.plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-xl shadow-sm border group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 ${
                  plan.popular ? "border-blue-500" : "border-gray-200"
                } p-8 text-left`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                    ⭐ Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-2 text-center">{plan.name}</h3>
                <p className="text-3xl font-bold text-blue-600 text-center">{plan.price}</p>
                <p className="text-gray-500 text-sm mt-2 mb-6 text-center">{plan.description}</p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <button
                    onClick={() => handleBuyNow(plan)}
                    className={`inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium px-6 py-3 rounded-md border transition duration-200 ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border-gray-300 hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    Buy Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}