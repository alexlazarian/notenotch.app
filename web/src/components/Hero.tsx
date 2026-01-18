import {Button} from '@/components/ui/button'
import TextType from '@/components/ui/text-type'
import {useEffect, useRef, useState} from 'react'
import {gsap} from 'gsap'
import ResizableSquare from './ResizableSquare'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`

export const Hero = () => {
	const noteWidth = 250 // matches initialWidth
	const [demoPosition, setDemoPosition] = useState({
		x: typeof window !== 'undefined' ? window.innerWidth / 2 : 400,
		y: 50,
	})
	const positionRef = useRef({
		x: typeof window !== 'undefined' ? window.innerWidth / 2 : 400,
		y: 50,
	})
	const demoContent = 'Meeting notes:\n- Q3 goals\n- Budget review'

	useEffect(() => {
		// Get viewport center for x=0
		const viewportCenterX = window.innerWidth / 2

		// Initialize position
		positionRef.current = {x: viewportCenterX, y: 50}
		setDemoPosition({x: viewportCenterX, y: 50})

		// Predefined positions to move between - using center-top anchoring
		const positions = [
			{x: viewportCenterX, y: 50},
			// {x: viewportCenterX, y: 30},
			{x: viewportCenterX + 140, y: 90},
			{x: viewportCenterX + 200, y: 160},
			{x: viewportCenterX, y: 240},
			{x: viewportCenterX - 200, y: 160},
			{x: viewportCenterX - 140, y: 90},
		]

		let currentIndex = 0
		const posRef = positionRef.current

		const animateToNextPosition = () => {
			currentIndex = (currentIndex + 1) % positions.length
			const nextPos = positions[currentIndex]

			gsap.to(posRef, {
				x: nextPos.x,
				y: nextPos.y,
				duration: 3.5,
				ease: 'power1.inOut',
				onUpdate: () => {
					setDemoPosition({...posRef})
				},
				onComplete: () => {
					setTimeout(animateToNextPosition, 800)
				},
			})
		}

		// Start animation after initial delay
		const timer = setTimeout(() => {
			animateToNextPosition()
		}, 2000)

		return () => {
			clearTimeout(timer)
			gsap.killTweensOf(posRef)
		}
	}, [])

	return (
		<section
			id='hero'
			className='min-h-screen bg-gradient-to-b from-sky-100 to-slate-50 flex flex-col items-center justify-start pt-32 px-6 font-sans relative overflow-visible'
		>
			{/* Animated Demo Note - Background */}
			<div className='absolute inset-0 pointer-events-none z-0'>
				<ResizableSquare
					initialWidth={250}
					initialHeight={180}
					minWidth={200}
					minHeight={150}
					maxWidth={300}
					maxHeight={250}
					position={{
						x: demoPosition.x - noteWidth / 2,
						y: demoPosition.y,
					}}
					content={demoContent}
					setContent={() => {}}
					containerClassName='pointer-events-none'
					opacity={0.2}
					// colorSettings={{
					// 	background: 'white',
					// 	foreground: 'white',
					// }}
				/>
			</div>

			{/* Main Content */}
			<div className='max-w-4xl mx-auto text-center relative z-10'>
				{/* Logo/Brand */}
				<div
					className='flex justify-center mb-2 animate-fade-in-up opacity-0'
					style={{
						animationDelay: '0.2s',
						animationFillMode: 'forwards',
					}}
				>
					<div className='size-20'>
						<img
							src={logoUrl}
							alt='NoteNotch'
						/>
					</div>
				</div>

				{/* Main Headline */}
				<div className='relative'>
					<h1
						className='text-display text-slate-900 mb-2 animate-fade-in-up opacity-0'
						style={{
							animationDelay: '0.4s',
							animationFillMode: 'forwards',
						}}
					>
						NoteNotch
					</h1>
				</div>

				{/* Subtitle */}
				<div
					className='text-body text-slate-700 mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-0'
					style={{
						animationDelay: '0.6s',
						animationFillMode: 'forwards',
					}}
				>
					<TextType
						text={[
							'Notes that stay invisible on screen shares',
							'Position anywhere on your screen',
							'Read 40% faster with bionic text',
							'Your secret weapon for video calls',
						]}
						as='p'
						typingSpeed={80}
						initialDelay={800}
						loop={true}
						showCursor={true}
						cursorCharacter='|'
						className='text-body text-slate-700'
					/>
				</div>

				{/* CTA Button */}
				<div
					className='mb-16 animate-fade-in-up opacity-0'
					style={{
						animationDelay: '0.8s',
						animationFillMode: 'forwards',
					}}
				>
					<Button size='lg'>Download for macOS*</Button>
				</div>
			</div>

			{/* Feature Preview - Outside max-w-4xl container */}
			<div
				className='w-full max-w-[960px] mx-auto px-6 animate-fade-in-up opacity-0 relative z-[20]'
				style={{
					animationDelay: '1.0s',
					animationFillMode: 'forwards',
					marginBottom: '-120px',
				}}
			>
				<div className='relative w-full pb-[56.25%] rounded-xl overflow-hidden'>
					<iframe
						src='https://www.loom.com/embed/f8167468395343d1a0fbfabc04723dcf'
						frameBorder='0'
						allowFullScreen
						className='absolute inset-0 w-full h-full'
						title='NoteNotch in action'
					></iframe>
				</div>
			</div>
		</section>
	)
}
