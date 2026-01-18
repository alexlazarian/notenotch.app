import {Button} from '@/components/ui/button'
import {useEffect} from 'react'
import {AppleLogo} from '@/assets/logos/apple'
import {GumroadLogo} from '@/assets/logos/gumroad'
import TextType from '@/components/ui/text-type'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`

export const Hero = () => {
	useEffect(() => {
		// Reveal animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in-up')
					}
				})
			},
			{threshold: 0.1}
		)

		const elements = document.querySelectorAll('.reveal')
		elements.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [])

	return (
		<section
			id='hero'
			className='min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32 relative overflow-hidden'
		>
			{/* Content */}
			<div className='relative z-10 max-w-4xl mx-auto text-center'>
				{/* Logo */}
				<div className='reveal opacity-0 mb-6'>
					<img
						src={logoUrl}
						alt='NoteNotch'
						className='w-28 h-28 mx-auto drop-shadow-lg'
					/>
				</div>

				{/* Main Headline */}
				<h1 className='reveal opacity-0 text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight'>
					Note<span className='text-[#FF90E8]'>Notch</span>
				</h1>

				{/* Animated Subtitle */}
				<div className='reveal opacity-0 text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto h-8' style={{animationDelay: '0.1s'}}>
					<TextType
						text={[
							'Notes under your camera. Eyes on the prize.',
							'Look confident. Sound natural. Be prepared.',
							'Read your notes. Look like you just know it.',
							'Your secret weapon for every call.',
						]}
						as='p'
						typingSpeed={60}
						initialDelay={1000}
						loop={true}
						showCursor={true}
						cursorCharacter='|'
						className='text-xl md:text-2xl text-gray-400'
					/>
				</div>

				{/* CTA */}
				<div className='reveal opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center mb-4' style={{animationDelay: '0.2s'}}>
					<a 
						href='https://iclazar.gumroad.com/l/notenotch'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button 
							size='lg' 
							className='group bg-[#FF90E8] hover:bg-black text-black hover:text-[#FF90E8] px-8 py-6 text-lg rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,144,232,0.5)] hover:pr-4'
						>
							<span className='flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-1'>
								<AppleLogo className='!size-6 transition-all duration-300 group-hover:opacity-0 group-hover:!w-0 group-hover:-ml-2' />
								<span className='relative'>
								<span className='transition-all duration-300 group-hover:opacity-0'>Download for macOS*</span>
								<span className='absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 text-[#FF90E8] whitespace-nowrap'>Get on Gumroad</span>
								</span>
							</span>
							<GumroadLogo className='!size-6 opacity-0 transition-all duration-300 group-hover:opacity-100 -ml-4 group-hover:ml-0 group-hover:text-[#FF90E8]' />
						</Button>
					</a>
				</div>

				{/* Requirement note */}
				<p className='reveal opacity-0 text-gray-500 text-sm mb-16' style={{animationDelay: '0.25s'}}>
					*Requires macOS 12 or later • Free
				</p>
			</div>


		</section>
	)
}
