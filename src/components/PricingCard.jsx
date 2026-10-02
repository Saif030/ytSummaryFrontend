import { Check } from 'lucide-react';

export default function PricingCard({ plan, price, period, features, highlighted, buttonText }) {
  return (
    <div className={`relative rounded-2xl p-8 ${highlighted ? 'bg-gray-900 text-white shadow-2xl scale-105' : 'bg-white border border-gray-200 shadow-sm'}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
          Most Popular
        </div>
      )}
      <h3 className={`text-lg font-semibold ${highlighted ? 'text-gray-300' : 'text-gray-500'}`}>{plan}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-extrabold tracking-tight">{price}</span>
        <span className={`ml-1 text-sm font-medium ${highlighted ? 'text-gray-400' : 'text-gray-500'}`}>{period}</span>
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className={`ml-3 text-sm ${highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full py-3 px-4 rounded-xl font-semibold text-sm transition ${
        highlighted ? 'bg-indigo-500 hover:bg-indigo-400 text-white' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}