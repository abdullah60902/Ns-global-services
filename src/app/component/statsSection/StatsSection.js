'use client'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true })

  const stats = [
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 24, suffix: '/7', label: 'Support Available' },
    { value: 5, suffix: ' Years', label: 'Industry Experience' },
  ]

  return (
    <section className="bg-gray-100 py-16 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-blue-600">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                />
              ) : (
                `0${stat.suffix}`
              )}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
