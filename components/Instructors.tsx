'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Elena Briggs',
      designation: 'Vocal Coach',
      image:
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    },
    {
      id: 2,
      name: 'Marcus Reid',
      designation: 'Guitar Instructor',
      image:
        'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg',
    },
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Piano Teacher',
      image:
        'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg',
    },
    {
      id: 4,
      name: 'Andre Gomez',
      designation: 'Drumming Expert',
      image:
        'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
    },
  ];

function Instructors() {
  return (

     <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">  
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
                        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                        <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
                        <div className="flex flex-row items-center justify-center mb-10 w-full">
                            <AnimatedTooltip items={instructors} />
                        </div>
                </div>
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors