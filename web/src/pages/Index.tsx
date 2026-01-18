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

// Theme presets for the notch note
const noteThemes = [
	{
		background: '#2a1a3a',
		color: '#e2e8f0',
		fontFamily: '"SF Mono", monospace',
		content: '✨ Features:\n• Zero AI, Zero bots\n• 100% local & private\n• Works everywhere',
		title: '✨ Features:',
	},
	{
		background: '#fef9c3',
		color: '#713f12',
		fontFamily: '"Comic Neue", cursive',
		content: '📝 Meeting Notes\n• Budget: $50K\n• Timeline: Q2\n• Follow up Friday',
		title: '📝 Meeting Notes',
	},
	{
		background: '#1e293b',
		color: '#a5f3fc',
		fontFamily: '"JetBrains Mono", monospace',
		content: '// TODO:\nconst ship = true;\nconst bugs = false;\nreturn success;',
		title: '// TODO:',
	},
	{
		background: '#fce7f3',
		color: '#9d174d',
		fontFamily: '"Georgia", serif',
		content: '💭 Remember:\nBreathe deeply.\nSpeak slowly.\nYou got this! ✨',
		title: '💭 Remember:',
	},
	{
		background: '#ecfdf5',
		color: '#065f46',
		fontFamily: '"Inter", sans-serif',
		content: '✅ Checklist\n☑️ Slides ready\n☑️ Demo tested\n☐ Ship it!',
		title: '✅ Checklist',
	},
]

const Index = () => {
	const [scrollProgress, setScrollProgress] = useState(0)
	const [notchCenter, setNotchCenter] = useState({x: 0, y: 0})
	const [showNotchNote, setShowNotchNote] = useState(false)
	const [isDraggingNote, setIsDraggingNote] = useState(false)
	const [noteOffset, setNoteOffset] = useState({x: 0, y: 0})
	const [currentThemeIndex, setCurrentThemeIndex] = useState(0)
	const [isCyclingThemes, setIsCyclingThemes] = useState(false)
	const [isBionicMode, setIsBionicMode] = useState(false)
	const [isMarkdownMode, setIsMarkdownMode] = useState(false)
	const [isInvisibleMode, setIsInvisibleMode] = useState(false)
	const [invisibleSliderPos, setInvisibleSliderPos] = useState(100)
	const [showLocalEgg, setShowLocalEgg] = useState(false)
	const invisibleIntervalRef = useRef<NodeJS.Timeout | null>(null)
	const themeIntervalRef = useRef<NodeJS.Timeout | null>(null)
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const notchRef = useRef<HTMLDivElement>(null)
	const notesContainerRef = useRef<HTMLDivElement>(null)
	const featuresRef = useRef<HTMLDivElement>(null)

	// Handle "Position anywhere" feature hover - animate the note
	const handlePositionHover = (isHovering: boolean) => {
		if (isHovering && !isDraggingNote) {
			setIsDraggingNote(true)
			// Animate: move right, then down, then back
			setTimeout(() => setNoteOffset({x: 40, y: 10}), 100)
			setTimeout(() => setNoteOffset({x: 60, y: 30}), 600)
			setTimeout(() => setNoteOffset({x: 30, y: 50}), 1200)
			setTimeout(() => setNoteOffset({x: -20, y: 40}), 1800)
			setTimeout(() => setNoteOffset({x: 0, y: 0}), 2400)
			setTimeout(() => setIsDraggingNote(false), 3000)
		}
	}

	// Handle "Custom themes" feature hover - cycle through themes
	const handleThemesHover = (isHovering: boolean) => {
		if (isHovering && !isCyclingThemes) {
			setIsCyclingThemes(true)
			// Immediately change to next theme
			let index = 1
			setCurrentThemeIndex(index)
			// Then continue cycling
			themeIntervalRef.current = setInterval(() => {
				index = (index + 1) % noteThemes.length
				setCurrentThemeIndex(index)
			}, 1200)
		} else if (!isHovering) {
			setIsCyclingThemes(false)
			if (themeIntervalRef.current) {
				clearInterval(themeIntervalRef.current)
				themeIntervalRef.current = null
			}
			// Reset to default theme
			setCurrentThemeIndex(0)
		}
	}

	// Handle "Bionic reading" feature hover - show bionic text
	const handleBionicHover = (isHovering: boolean) => {
		setIsBionicMode(isHovering)
	}

	// Handle "Markdown support" feature hover - show markdown content
	const handleMarkdownHover = (isHovering: boolean) => {
		setIsMarkdownMode(isHovering)
	}

	// Handle "Invisible to others" feature hover - animate slider 0-100%
	const handleInvisibleHover = (isHovering: boolean) => {
		if (isHovering) {
			setIsInvisibleMode(true)
			setInvisibleSliderPos(100) // Start fully visible
			// Animate slider from right to left, then back
			let direction = -1
			let pos = 100
			invisibleIntervalRef.current = setInterval(() => {
				pos += direction * 2
				if (pos <= 0) {
					pos = 0
					direction = 1
				} else if (pos >= 100) {
					pos = 100
					direction = -1
				}
				setInvisibleSliderPos(pos)
			}, 30)
		} else {
			setIsInvisibleMode(false)
			setInvisibleSliderPos(100)
			if (invisibleIntervalRef.current) {
				clearInterval(invisibleIntervalRef.current)
				invisibleIntervalRef.current = null
			}
		}
	}

	// Handle "100% local" easter egg - 10% chance to show on hover
	const handleLocalHover = (isHovering: boolean) => {
		if (isHovering) {
			// 10% chance to show easter egg
			if (Math.random() < 0.1) {
				setShowLocalEgg(true)
			}
		} else {
			setShowLocalEgg(false)
		}
	}

	// Apply bionic reading to text - bold first 40% of each word
	const applyBionicReading = (text: string) => {
		return text.split(' ').map((word, i) => {
			// Skip short words and special characters
			if (word.length <= 2) {
				return <span key={i}>{word} </span>
			}
			const boldLength = Math.ceil(word.length * 0.4)
			const boldPart = word.slice(0, boldLength)
			const restPart = word.slice(boldLength)
			return (
				<span key={i}>
					<strong className='font-bold'>{boldPart}</strong>
					<span className='opacity-70'>{restPart}</span>{' '}
				</span>
			)
		})
	}

	// Cleanup intervals on unmount
	useEffect(() => {
		return () => {
			if (themeIntervalRef.current) {
				clearInterval(themeIntervalRef.current)
			}
			if (invisibleIntervalRef.current) {
				clearInterval(invisibleIntervalRef.current)
			}
		}
	}, [])

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

	// Intersection Observer to detect when features section is in view
	useEffect(() => {
		const featuresElement = featuresRef.current
		const scrollContainer = scrollContainerRef.current
		if (!featuresElement || !scrollContainer) return

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setShowNotchNote(entry.isIntersecting)
				})
			},
			{
				root: scrollContainer,
				threshold: 0.2,
			}
		)

		observer.observe(featuresElement)
		return () => observer.disconnect()
	}, [])

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
				
				{/* Note that appears below notch when features section is in view */}
				<div 
					className='absolute top-full left-1/2 w-[180px] min-h-[100px] select-none'
					style={{
						opacity: showNotchNote ? 1 : 0,
						transform: `translateX(calc(-50% + ${noteOffset.x}px)) translateY(${showNotchNote ? noteOffset.y : -10}px)`,
						pointerEvents: 'none',
						transition: isDraggingNote 
							? 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out' 
							: 'transform 0.5s ease-out, opacity 0.3s ease-out',
					}}
				>
					{/* Cursor icon - appears during drag */}
					{isDraggingNote && (
						<div 
							className='absolute -top-3 -right-3 z-10 transition-opacity duration-200'
							style={{ opacity: isDraggingNote ? 1 : 0 }}
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
								<path d="M5 3L19 12L12 13L9 20L5 3Z" fill="white" stroke="black" strokeWidth="1.5"/>
							</svg>
						</div>
					)}
					
					{/* Note with slider mask effect */}
					<div 
						className='relative w-full p-4 rounded-sm'
						style={{
							background: showLocalEgg ? '#0a0a0a' : isBionicMode ? '#1a1a2e' : isMarkdownMode ? '#0d1117' : noteThemes[currentThemeIndex].background,
							boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
							minHeight: '90px',
							// Use CSS mask to fade out the right portion
							WebkitMaskImage: isInvisibleMode 
								? `linear-gradient(to right, black 0%, black ${invisibleSliderPos}%, transparent ${invisibleSliderPos}%, transparent 100%)`
								: 'none',
							maskImage: isInvisibleMode 
								? `linear-gradient(to right, black 0%, black ${invisibleSliderPos}%, transparent ${invisibleSliderPos}%, transparent 100%)`
								: 'none',
						}}
					>
						<div 
							className='text-[11px] leading-relaxed transition-all duration-500'
							style={{
								color: showLocalEgg ? '#e2e8f0' : isBionicMode ? '#e2e8f0' : isMarkdownMode ? '#c9d1d9' : noteThemes[currentThemeIndex].color,
								fontFamily: showLocalEgg || isBionicMode || isMarkdownMode ? '"Inter", sans-serif' : noteThemes[currentThemeIndex].fontFamily,
								whiteSpace: showLocalEgg || isBionicMode || isMarkdownMode ? 'normal' : 'pre-line',
							}}
						>
							{showLocalEgg ? (
								<div className='text-center'>
									<div className='text-2xl mb-1'>🫣</div>
									<div className='text-[10px] text-gray-300'>
										psst... your secrets<br/>are safe with me<br/>
										<span className='text-[#FF90E8] text-[11px] font-medium'>pinky promise 🤙</span>
									</div>
								</div>
							) : isBionicMode ? (
								<>
									<div className='text-[#FF90E8] font-semibold mb-1'>⚡ Bionic Mode</div>
									{applyBionicReading('Welcome everyone. Today we will discuss the quarterly roadmap and budget allocation.')}
								</>
							) : isMarkdownMode ? (
								<div className='space-y-1'>
									<div className='text-[13px] font-bold text-white'>📝 Meeting Notes</div>
									<div className='text-[10px] text-[#FF90E8] font-semibold'>Important:</div>
									<ul className='text-[10px] space-y-0.5 ml-2'>
										<li className='flex items-center gap-1'><span className='text-[#FF90E8]'>•</span> Budget approved</li>
										<li className='flex items-center gap-1'><span className='text-[#FF90E8]'>•</span> Q3 deadline set</li>
										<li className='flex items-center gap-1'><span className='text-[#FF90E8]'>•</span> <em className='italic'>Follow up Friday</em></li>
									</ul>
								</div>
							) : (
								noteThemes[currentThemeIndex].content
							)}
						</div>
						
						{/* Slider line - inside note, uses same width reference */}
						{isInvisibleMode && (
							<div 
								className='absolute top-0 bottom-0 w-[2px] z-20 pointer-events-none'
								style={{
									left: `${invisibleSliderPos}%`,
									transform: 'translateX(-50%)',
									background: 'linear-gradient(to bottom, #FF90E8, white, #FF90E8)',
									boxShadow: '0 0 8px rgba(255,144,232,0.9)',
								}}
							/>
						)}
						
						{/* Label - only visible to you */}
						{isInvisibleMode && (
							<div 
								className='absolute -bottom-6 left-0 right-0 text-center'
								style={{
									opacity: invisibleSliderPos > 50 ? 1 : invisibleSliderPos / 50,
								}}
							>
								<span className='text-[10px] text-[#FF90E8] font-medium'>
									👁️ Only visible to you
								</span>
							</div>
						)}
					</div>
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
							<div id='features' ref={featuresRef}>
								<FeaturesSection 
									onPositionHover={handlePositionHover} 
									onThemesHover={handleThemesHover}
									onInvisibleHover={handleInvisibleHover}
									onBionicHover={handleBionicHover}
									onMarkdownHover={handleMarkdownHover}
									onLocalHover={handleLocalHover}
								/>
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
