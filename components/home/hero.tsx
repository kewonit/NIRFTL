import { ThumbsUp, Trees, Music } from 'lucide-react'
import Image from 'next/image'
const features = [
  {
    name: 'Trusted Source',
    description:
      'The data for the rankings has been meticulously extracted from the annual rankings provided by NIRF.',
    icon: ThumbsUp,
  },
  {
    name: 'Great experience',
    description: 'This website offers a superior experience when it comes to data filtering compared to the majority of other websites available.',
    icon: Trees,
  },
  {
    name: 'Meow',
    description: 'Meowww Meow Meowwww Meowww Meoww',
    icon: Music,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">A better experience</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Access a comprehensive repository of essential information to discern your ideal academic institution, conveniently consolidated in a singular location.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-200">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image 
            src="https://i.imgur.com/VWNtik7.png"
            alt="Product screenshot"
            className="z-10 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[74rem] md:-ml-4 lg:-ml-0"
            width={1720}
            height={749}
            draggable="false"
          />
        </div>
      </div>
    </div>
  )
}