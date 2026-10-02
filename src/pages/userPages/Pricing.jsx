import PricingCard from '../../components/PricingCard.jsx';

export default function Pricing() {
  const plans = [
    {
      plan: 'Free',
      price: '$0',
      period: '/month',
      features: ['5 videos/month', 'Basic summaries', 'Standard export (TXT)', 'Community support'],
      highlighted: false,
      buttonText: 'Get Started Free',
    },
    {
      plan: 'Pro',
      price: '$12',
      period: '/month',
      features: ['Unlimited videos', 'AI-powered summaries', 'All export formats', 'Timestamp mapping', 'Priority support', 'API access'],
      highlighted: true,
      buttonText: 'Start Pro Trial',
    },
    {
      plan: 'Team',
      price: '$39',
      period: '/month',
      features: ['Everything in Pro', 'Up to 5 team members', 'Shared workspaces', 'Admin dashboard', 'SSO integration', 'Custom AI tuning'],
      highlighted: false,
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your learning pace</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((p) => (
            <PricingCard key={p.plan} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}