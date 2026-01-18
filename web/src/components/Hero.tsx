import {Button} from '@/components/ui/button'
import {useEffect, useRef} from 'react'
import {AppleLogo} from '@/assets/logos/apple'
import {GumroadLogo} from '@/assets/logos/gumroad'
import TextType from '@/components/ui/text-type'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`

// Floating note configurations - realistic meeting/demo/presentation content
const floatingNotes = [
	{
		id: 1,
		content: '📊 Q3 Revenue Goals\n\n• Target: $2.4M ARR\n• Current: $1.8M\n• Gap: 33% growth needed\n\nKey accounts to mention:\nAcme Corp, TechFlow, Zenith',
		style: {
			background: '#1e293b',
			color: '#f1f5f9',
			fontFamily: '"SF Mono", "Fira Code", monospace',
			fontSize: '0.7rem',
		},
		position: { top: '8%', left: '5%' },
		size: { width: 200 },
		rotation: -3,
	},
	{
		id: 2,
		content: "Remember to breathe.\nYou've got this. 💪",
		style: {
			background: 'rgba(167, 139, 250, 0.15)',
			color: '#7c3aed',
			fontFamily: '"Georgia", serif',
			fontStyle: 'italic',
			fontSize: '1rem',
		},
		position: { top: '6%', right: '8%' },
		size: { width: 160 },
		rotation: 2,
	},
	{
		id: 3,
		content: 'Interview Questions:\n\n1. Tell me about a challenge you faced\n2. Why this role?\n3. 5-year goals?\n4. Questions for them?',
		style: {
			background: '#fef9c3',
			color: '#713f12',
			fontFamily: '"Comic Neue", "Marker Felt", cursive',
			fontSize: '0.8rem',
		},
		position: { top: '28%', right: '3%' },
		size: { width: 190 },
		rotation: 4,
	},
	{
		id: 4,
		content: 'Thesis Defense Notes\n\nSlide 12: Methodology\n→ Explain sample size (n=847)\n→ Mention limitations\n→ Statistical significance p<0.05',
		style: {
			background: '#ffffff',
			color: '#1f2937',
			fontFamily: '"Times New Roman", "Palatino", serif',
			fontSize: '0.75rem',
			border: '1px solid #e5e7eb',
		},
		position: { top: '55%', left: '2%' },
		size: { width: 210 },
		rotation: -2,
	},
	{
		id: 5,
		content: "Demo Flow:\n\n① Intro (2 min)\n② Problem statement\n③ Live demo ⭐\n④ Pricing slide\n⑤ Q&A\n\nDON'T FORGET: Mute notifications!",
		style: {
			background: '#ecfdf5',
			color: '#065f46',
			fontFamily: '"Inter", "Helvetica Neue", sans-serif',
			fontSize: '0.8rem',
			fontWeight: 500,
		},
		position: { bottom: '25%', left: '12%' },
		size: { width: 175 },
		rotation: 1,
	},
	{
		id: 6,
		content: 'const confidence = true;\nconst prepared = true;\n\nif (confidence && prepared) {\n  return "success";\n}',
		style: {
			background: '#18181b',
			color: '#a5f3fc',
			fontFamily: '"JetBrains Mono", "Consolas", monospace',
			fontSize: '0.7rem',
		},
		position: { bottom: '18%', right: '5%' },
		size: { width: 200 },
		rotation: -3,
	},
	{
		id: 7,
		content: '🎯 Key Metrics\nDAU: 45K → 52K\nConversion: 3.2%\nChurn: ↓ 0.8%',
		style: {
			background: '#fef2f2',
			color: '#991b1b',
			fontFamily: '"Roboto", "Arial", sans-serif',
			fontSize: '0.85rem',
			fontWeight: 600,
		},
		position: { top: '38%', left: '6%' },
		size: { width: 150 },
		rotation: 2,
	},
]

export const Hero = () => {
	const videoRef = useRef<HTMLDivElement>(null)

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
			className='min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col items-center justify-center px-6 py-20 pt-32 relative overflow-hidden'
		>
			{/* Floating Notes Background */}
			<div className='absolute inset-0 pointer-events-none overflow-hidden'>
				{floatingNotes.map((note) => (
					<div
						key={note.id}
						className='absolute hidden md:block transition-all duration-1000 ease-out hover:scale-105'
						style={{
							...note.position,
							width: note.size.width,
							transform: `rotate(${note.rotation}deg)`,
							animation: `float-${note.id} ${8 + note.id}s ease-in-out infinite`,
						}}
					>
						<div
							className='p-3 rounded-lg shadow-sm backdrop-blur-sm'
							style={{
								background: note.style.background,
								color: note.style.color,
								fontStyle: note.style.fontStyle || 'normal',
								fontFamily: note.style.fontFamily,
								fontWeight: note.style.fontWeight || 400,
								fontSize: note.style.fontSize || '0.875rem',
								lineHeight: 1.5,
								whiteSpace: 'pre-line',
								border: note.style.border || 'none',
							}}
						>
							{note.content}
						</div>
					</div>
				))}
			</div>

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
				<h1 className='reveal opacity-0 text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 tracking-tight'>
					NoteNotch
				</h1>

				{/* Animated Subtitle */}
				<div className='reveal opacity-0 text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto h-8' style={{animationDelay: '0.1s'}}>
					<TextType
						text={[
							'Notes that stay invisible on screen shares',
							'Position anywhere on your screen',
							'Read 40% faster with bionic text',
							'Your secret weapon for video calls',
						]}
						as='p'
						typingSpeed={60}
						initialDelay={1000}
						loop={true}
						showCursor={true}
						cursorCharacter='|'
						className='text-xl md:text-2xl text-gray-600'
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
							className='group bg-black hover:bg-black text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 hover:pr-4'
						>
							<span className='flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-1'>
								<AppleLogo className='!size-6 transition-all duration-300 group-hover:opacity-0 group-hover:!w-0 group-hover:-ml-2' />
								<span className='relative'>
									<span className='transition-all duration-300 group-hover:opacity-0'>Download for macOS*</span>
									<span className='absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 text-[#FF90E8] whitespace-nowrap'>Download on Gumroad</span>
								</span>
							</span>
							<GumroadLogo className='!size-6 opacity-0 transition-all duration-300 group-hover:opacity-100 -ml-4 group-hover:ml-0' />
						</Button>
					</a>
				</div>

				{/* Requirement note */}
				<p className='reveal opacity-0 text-gray-400 text-sm mb-16' style={{animationDelay: '0.25s'}}>
					*Requires macOS 12 or later • Free
				</p>
			</div>

			{/* Video Preview */}
			<div
				ref={videoRef}
				className='reveal opacity-0 w-full max-w-[960px] mx-auto px-6 relative z-10'
				style={{animationDelay: '0.3s'}}
			>
				<div className='relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl bg-black'>
					<iframe
						src='https://www.loom.com/embed/f8167468395343d1a0fbfabc04723dcf?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true'
						frameBorder='0'
						allowFullScreen
						className='absolute inset-0 w-full h-full'
						title='NoteNotch in action'
					></iframe>
				</div>
				<p className='text-center text-gray-400 text-sm mt-4'>Psst… watch how it works!</p>
			</div>

			{/* CSS for floating animations */}
			<style>{`
				@keyframes float-1 {
					0%, 100% { transform: rotate(-3deg) translateY(0); }
					50% { transform: rotate(-3deg) translateY(-12px); }
				}
				@keyframes float-2 {
					0%, 100% { transform: rotate(2deg) translateY(0); }
					50% { transform: rotate(2deg) translateY(-8px); }
				}
				@keyframes float-3 {
					0%, 100% { transform: rotate(4deg) translateY(0); }
					50% { transform: rotate(4deg) translateY(-14px); }
				}
				@keyframes float-4 {
					0%, 100% { transform: rotate(-2deg) translateY(0); }
					50% { transform: rotate(-2deg) translateY(-10px); }
				}
				@keyframes float-5 {
					0%, 100% { transform: rotate(1deg) translateY(0); }
					50% { transform: rotate(1deg) translateY(-8px); }
				}
				@keyframes float-6 {
					0%, 100% { transform: rotate(-3deg) translateY(0); }
					50% { transform: rotate(-3deg) translateY(-10px); }
				}
				@keyframes float-7 {
					0%, 100% { transform: rotate(2deg) translateY(0); }
					50% { transform: rotate(2deg) translateY(-12px); }
				}
			`}</style>
		</section>
	)
}
