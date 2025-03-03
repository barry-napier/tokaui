import { CheckCircle } from 'lucide-react';

export function BenefitsPanel() {
  const benefits = [
    'Seamless integration between design and development',
    'Live preview that updates your design in real time',
    'Export code in multiple formats: HTML, CSS, JSX, and Tailwind',
    'Version control with a timeline-based audit trail',
    'Easily manage multiple design systems in one place',
  ];

  return (
    <div className="flex w-full flex-col justify-center p-8 lg:p-12">
      <div className="mx-auto max-w-md">
        <h2 className="mb-8 text-2xl font-bold text-white">Toka UI Benefits</h2>

        <ul className="space-y-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle
                className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <span className="text-base text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Join thousands of designers and developers who are already using Toka UI to streamline
            their workflow.
          </p>
        </div>
      </div>
    </div>
  );
}
