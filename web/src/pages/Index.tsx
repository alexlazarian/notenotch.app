import {useState, useEffect, useRef, useCallback} from 'react'
import {MacMenuBar} from '@/components/MacMenuBar'
import {Hero} from '@/components/Hero'
import {FeaturesSection} from '@/components/FeaturesSection'
import {ComparisonSection} from '@/components/ComparisonSection'
import {CTA} from '@/components/CTA'
import {Footer} from '@/components/Footer'
import NotchEye from '@/components/NotchEye'
import {BackgroundGradientAnimation} from '@/components/ui/background-gradient-animation'

// Floating notes - positioned at screen edges with varied X offsets
const floatingNotes = [
	// LEFT SIDE NOTES - varied horizontal positions
	{
		id: 1,
		content: '📊 Q3 Revenue Goals\n\n• Target: $2.4M ARR\n• Current: $1.8M\n• Gap: 33% growth needed\n\nKey accounts:\nAcme Corp, TechFlow',
		style: {
			background: '#1e293b',
			color: '#f1f5f9',
			fontFamily: '"SF Mono", "Fira Code", monospace',
			fontSize: '0.65rem',
		},
		initialY: 80,
		x: -80,
		side: 'left',
		size: { width: 180 },
		rotation: -4,
		parallax: 0.7,
	},
	{
		id: 2,
		content: 'Thesis Defense Notes\n\nSlide 12: Methodology\n→ Sample size (n=847)\n→ Limitations\n→ p<0.05',
		style: {
			background: '#ffffff',
			color: '#1f2937',
			fontFamily: '"Times New Roman", "Palatino", serif',
			fontSize: '0.7rem',
			border: '1px solid #e5e7eb',
		},
		initialY: 380,
		x: -30,
		side: 'left',
		size: { width: 170 },
		rotation: 2,
		parallax: 0.85,
	},
	{
		id: 3,
		content: '🎯 Key Metrics\nDAU: 45K → 52K\nConversion: 3.2%\nChurn: ↓ 0.8%',
		style: {
			background: '#fef2f2',
			color: '#991b1b',
			fontFamily: '"Roboto", "Arial", sans-serif',
			fontSize: '0.75rem',
			fontWeight: 600,
		},
		initialY: 650,
		x: -65,
		side: 'left',
		size: { width: 140 },
		rotation: -2,
		parallax: 0.75,
	},
	{
		id: 4,
		content: "Demo Flow:\n\n① Intro (2 min)\n② Problem statement\n③ Live demo ⭐\n④ Q&A\n\nMute notifications!",
		style: {
			background: '#ecfdf5',
			color: '#065f46',
			fontFamily: '"Inter", "Helvetica Neue", sans-serif',
			fontSize: '0.7rem',
			fontWeight: 500,
		},
		initialY: 920,
		x: -45,
		side: 'left',
		size: { width: 160 },
		rotation: 3,
		parallax: 0.9,
	},
	// RIGHT SIDE NOTES - varied horizontal positions
	{
		id: 5,
		content: "Remember to breathe.\nYou've got this. 💪",
		style: {
			background: 'rgba(167, 139, 250, 0.2)',
			color: '#a78bfa',
			fontFamily: '"Georgia", serif',
			fontStyle: 'italic',
			fontSize: '0.9rem',
		},
		initialY: 120,
		x: -40,
		side: 'right',
		size: { width: 150 },
		rotation: 3,
		parallax: 0.65,
	},
	{
		id: 6,
		content: 'Interview Questions:\n\n1. Challenge you faced?\n2. Why this role?\n3. 5-year goals?\n4. Questions for them?',
		style: {
			background: '#fef9c3',
			color: '#713f12',
			fontFamily: '"Comic Neue", "Marker Felt", cursive',
			fontSize: '0.7rem',
		},
		initialY: 400,
		x: -75,
		side: 'right',
		size: { width: 165 },
		rotation: -3,
		parallax: 0.8,
	},
	{
		id: 7,
		content: 'const confidence = true;\nconst prepared = true;\n\nif (confidence && prepared) {\n  return "success";\n}',
		style: {
			background: '#18181b',
			color: '#a5f3fc',
			fontFamily: '"JetBrains Mono", "Consolas", monospace',
			fontSize: '0.65rem',
		},
		initialY: 680,
		x: -25,
		side: 'right',
		size: { width: 180 },
		rotation: 2,
		parallax: 0.7,
	},
	{
		id: 8,
		content: '✅ Prep checklist\n\n☑️ Slides ready\n☑️ Demo tested\n☐ Water bottle\n☐ Deep breaths',
		style: {
			background: '#f0fdf4',
			color: '#166534',
			fontFamily: '"Inter", sans-serif',
			fontSize: '0.7rem',
		},
		initialY: 950,
		x: -55,
		side: 'right',
		size: { width: 145 },
		rotation: -2,
		parallax: 0.85,
	},
]

const Index = () => {
	const [scrollProgress, setScrollProgress] = useState(0)
	const [notchCenter, setNotchCenter] = useState({x: 0, y: 0})
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const notchRef = useRef<HTMLDivElement>(null)
	const notesContainerRef = useRef<HTMLDivElement>(null)

	// Optimized scroll handler using requestAnimationFrame
	useEffect(() => {
		const scrollContainer = scrollContainerRef.current
		const notesContainer = notesContainerRef.current
		if (!scrollContainer) return

		let ticking = false

		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					const scrollTop = scrollContainer.scrollTop
					const progress = Math.min(scrollTop / 300, 1)
					setScrollProgress(progress)
					
					// Update CSS custom property for notes transform (GPU accelerated)
					if (notesContainer) {
						notesContainer.style.setProperty('--scroll-y', `${scrollTop}`)
					}
					
					ticking = false
				})
				ticking = true
			}
		}

		scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
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
			{/* Floating Notes - GPU accelerated with CSS transforms */}
			<div 
				ref={notesContainerRef}
				className='fixed inset-0 z-[500] pointer-events-none overflow-hidden hidden md:block'
				style={{ '--scroll-y': '0' } as React.CSSProperties}
			>
				{floatingNotes.map((note) => (
					<div
						key={note.id}
						className='absolute will-change-transform'
						style={{
							[note.side]: note.x,
							width: note.size.width,
							transform: `
								translateY(calc(${note.initialY}px - var(--scroll-y) * ${note.parallax}px)) 
								translateX(calc(${note.side === 'left' ? '100px' : '-100px'} + var(--scroll-y) * ${note.side === 'left' ? '-0.15px' : '0.15px'}))
								rotate(${note.rotation}deg)
							`,
							opacity: `calc(1 - var(--scroll-y) / 2500)`,
						}}
					>
						<div
							className='p-3 rounded-lg shadow-lg'
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
								boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
							}}
						>
							{note.content}
						</div>
					</div>
				))}
			</div>

			{/* Fixed Notch - always on top, animates in from top */}
			<div 
				ref={notchRef}
				className='fixed left-1/2 z-[999] will-change-transform'
				style={{
					top: `${scrollProgress * 8}px`,
					opacity: notchOpacity,
					transform: `translateX(-50%) translateY(${(1 - Math.min(scrollProgress * 2, 1)) * -20}px)`,
					transition: 'opacity 0.3s ease-out',
				}}
			>
				<div className='w-[180px] h-[36px] bg-black rounded-b-[10px] flex items-center justify-center shadow-lg'>
					<NotchEye notchCenter={notchCenter} noteCenter={null} />
				</div>
			</div>

			{/* Screen content area */}
			<div 
				className='fixed inset-0 z-[2]'
				style={{
					padding: `${borderSize}px`,
					transition: 'padding 0.15s ease-out',
				}}
			>
				<div 
					className='w-full h-full rounded-[16px] overflow-hidden relative will-change-transform'
					style={{
						transform: `scale(${scale})`,
						transformOrigin: 'center center',
						transition: 'transform 0.15s ease-out',
					}}
				>
					{/* Background Gradient Animation */}
					<BackgroundGradientAnimation
						gradientBackgroundStart="rgb(10, 10, 10)"
						gradientBackgroundEnd="rgb(20, 10, 30)"
						firstColor="255, 144, 232"
						secondColor="180, 100, 255"
						thirdColor="100, 50, 200"
						fourthColor="255, 100, 180"
						fifthColor="150, 50, 255"
						size="100%"
						blendingValue="hard-light"
						containerClassName="rounded-[16px]"
					/>

					{/* Scrollable content */}
					<div ref={scrollContainerRef} className='h-full overflow-y-auto relative z-10'>
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
				className='fixed bottom-0 left-1/2 -translate-x-1/2 z-[100]'
				style={{
					opacity: scrollProgress,
					transform: `translateX(-50%) translateY(${(1 - scrollProgress) * 20}px)`,
					transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
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
