import {useState, useEffect, useRef} from 'react'
import {MacMenuBar} from '@/components/MacMenuBar'
import {Hero} from '@/components/Hero'
import {FeaturesSection} from '@/components/FeaturesSection'
import {ComparisonSection} from '@/components/ComparisonSection'
import {CTA} from '@/components/CTA'
import {Footer} from '@/components/Footer'
import NotchEye from '@/components/NotchEye'

const Index = () => {
	const [scrollProgress, setScrollProgress] = useState(0)
	const [notchCenter, setNotchCenter] = useState({x: 0, y: 0})
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const notchRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current
		if (!scrollContainer) return

		const handleScroll = () => {
			const progress = Math.min(scrollContainer.scrollTop / 300, 1)
			setScrollProgress(progress)
		}

		scrollContainer.addEventListener('scroll', handleScroll)
		return () => scrollContainer.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const updateNotchCenter = () => {
			if (notchRef.current) {
				const rect = notchRef.current.getBoundingClientRect()
				setNotchCenter({
					x: rect.left + rect.width / 2,
					y: rect.top + rect.height / 2,
				})
			}
		}

		updateNotchCenter()
		window.addEventListener('resize', updateNotchCenter)
		return () => window.removeEventListener('resize', updateNotchCenter)
	}, [scrollProgress])

	// Scale from 1 to 0.98 as user scrolls (minimal zoom out)
	const scale = 1 - scrollProgress * 0.02
	// Border size grows from 0 to 8px
	const borderSize = scrollProgress * 8

	// Notch opacity fades in as user scrolls
	const notchOpacity = Math.min(scrollProgress * 2, 1)

	return (
		<div className='min-h-screen bg-black'>
			{/* Fixed Notch - always on top, animates in from top */}
			<div 
				ref={notchRef}
				className='fixed left-1/2 z-[999] transition-all duration-300 ease-out'
				style={{
					top: `${scrollProgress * 8}px`,
					opacity: notchOpacity,
					transform: `translateX(-50%) translateY(${(1 - Math.min(scrollProgress * 2, 1)) * -20}px)`,
				}}
			>
				<div className='w-[180px] h-[36px] bg-black rounded-b-[10px] flex items-center justify-center shadow-lg'>
					<NotchEye notchCenter={notchCenter} noteCenter={null} />
				</div>
			</div>

			{/* Screen content area */}
			<div 
				className='fixed inset-0 z-[2] transition-all duration-150 ease-out'
				style={{
					padding: `${borderSize}px`,
				}}
			>
				<div 
					className='w-full h-full bg-white rounded-[16px] overflow-hidden transition-transform duration-150 ease-out'
					style={{
						transform: `scale(${scale})`,
						transformOrigin: 'center center',
					}}
				>
					{/* Scrollable content */}
					<div ref={scrollContainerRef} className='h-full overflow-y-auto'>
						<MacMenuBar show={scrollProgress > 0.3} />
						<main>
							<Hero />
							<div id='features'>
								<FeaturesSection />
							</div>
							<div id='comparison'>
								<ComparisonSection />
							</div>
							<CTA />
						</main>
						<Footer />
					</div>
				</div>
			</div>

			{/* MacBook stand - appears on scroll */}
			<div 
				className='fixed bottom-0 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300'
				style={{
					opacity: scrollProgress,
					transform: `translateX(-50%) translateY(${(1 - scrollProgress) * 20}px)`,
				}}
			>
				<div className='flex flex-col items-center'>
					<div className='w-20 h-4 bg-[#1a1a1a]' />
					<div className='w-32 h-1 bg-[#2a2a2a] rounded-b-full' />
				</div>
			</div>
		</div>
	)
}

export default Index
