export default function OurProcess() {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      description: "We understand your goals, target audience, and requirements",
    },
    {
      id: "02",
      title: "Strategy",
      description: "Develop a comprehensive plan and project roadmap",
    },
    {
      id: "03",
      title: "Execution",
      description: "Design, develop, and test your solution with precision",
    },
    {
      id: "04",
      title: "Launch",
      description: "Deploy your project and provide ongoing support",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
Our Process</h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-12 max-w-lg sm:max-w-2xl mx-auto">
          A proven methodology that ensures successful project delivery
</p>

        {/* Reduced gap from gap-10 to gap-6 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.id}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
