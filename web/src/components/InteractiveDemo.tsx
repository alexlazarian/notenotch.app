import {useState, useRef} from 'react'

interface InteractiveDemoProps {
	className?: string
}

export const InteractiveDemo = ({className = ''}: InteractiveDemoProps) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [sliderPosition, setSliderPosition] = useState(55)

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return
		const rect = containerRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const percentage = (x / rect.width) * 100
		const clampedPercentage = Math.min(Math.max(percentage, 5), 95)
		setSliderPosition(clampedPercentage)
	}

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (!containerRef.current) return
		const rect = containerRef.current.getBoundingClientRect()
		const x = e.touches[0].clientX - rect.left
		const percentage = (x / rect.width) * 100
		const clampedPercentage = Math.min(Math.max(percentage, 5), 95)
		setSliderPosition(clampedPercentage)
	}

	return (
		<div
			ref={containerRef}
			className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl cursor-ew-resize select-none border border-white/10 shadow-2xl ${className}`}
			style={{
				boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)',
			}}
			onMouseMove={handleMouseMove}
			onTouchMove={handleTouchMove}
		>
			{/* Base layer - Invisible to others (what others see) */}
			<div className='absolute inset-0 bg-[#202124]'>
				{/* Google Meet UI */}
				<div className='absolute inset-0 flex flex-col'>
					{/* Top bar */}
					<div className='h-10 md:h-12 bg-[#202124] flex items-center justify-between px-4 md:px-6'>
						<div className='flex items-center gap-3'>
							<span className='text-sm md:text-base text-gray-400 font-medium'>Team Standup</span>
						</div>
						<span className='text-xs md:text-sm text-gray-500'>10:32 AM</span>
					</div>
					
					{/* Participants grid */}
					<div className='flex-1 p-3 md:p-4 grid grid-cols-2 gap-3 md:gap-4'>
						{/* Participant 1 */}
						<div className='bg-[#3c4043] rounded-xl flex items-center justify-center relative'>
							<div className='w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-medium'>JD</div>
							<span className='absolute bottom-2 left-3 text-xs md:text-sm text-white/80'>John D.</span>
						</div>
						{/* Participant 2 */}
						<div className='bg-[#3c4043] rounded-xl flex items-center justify-center relative'>
							<div className='w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-medium'>SM</div>
							<span className='absolute bottom-2 left-3 text-xs md:text-sm text-white/80'>Sarah M.</span>
						</div>
						{/* Participant 3 */}
						<div className='bg-[#3c4043] rounded-xl flex items-center justify-center relative'>
							<div className='w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-medium'>AK</div>
							<span className='absolute bottom-2 left-3 text-xs md:text-sm text-white/80'>Alex K.</span>
						</div>
						{/* Participant 4 - You */}
						<div className='bg-[#3c4043] rounded-xl flex items-center justify-center relative'>
							<div className='w-16 h-16 md:w-20 md:h-20 bg-orange-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-medium'>You</div>
							<span className='absolute bottom-2 left-3 text-xs md:text-sm text-white/80'>You</span>
						</div>
					</div>
					
					{/* Bottom controls bar */}
					<div className='h-14 md:h-16 bg-[#202124] flex items-center justify-center gap-4 md:gap-6 pb-2'>
						<div className='w-10 h-10 md:w-12 md:h-12 bg-[#3c4043] rounded-full flex items-center justify-center hover:bg-[#4c4c4c] transition-colors'>
							<svg className='w-5 h-5 md:w-6 md:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z'/>
								<path d='M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z'/>
							</svg>
						</div>
						<div className='w-10 h-10 md:w-12 md:h-12 bg-[#3c4043] rounded-full flex items-center justify-center hover:bg-[#4c4c4c] transition-colors'>
							<svg className='w-5 h-5 md:w-6 md:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'/>
							</svg>
						</div>
						<div className='w-12 h-12 md:w-14 md:h-14 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors'>
							<svg className='w-6 h-6 md:w-7 md:h-7 text-white' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z'/>
							</svg>
						</div>
					</div>
					
					{/* Notch at top center */}
					<div className='absolute top-0 left-1/2 -translate-x-1/2 w-[140px] md:w-[180px] h-[32px] md:h-[40px] bg-black rounded-b-2xl z-20' />
				</div>
				
				{/* Label - Invisible to others */}
				<div className='absolute bottom-20 md:bottom-24 right-4 px-3 py-1.5 bg-gray-800/90 backdrop-blur-sm rounded-full border border-white/10'>
					<span className='text-xs md:text-sm font-medium text-gray-400'>
						Invisible to others
					</span>
				</div>
			</div>

			{/* Top layer - Visible to you (with NoteNotch) */}
			<div
				className='absolute inset-0 bg-[#202124]'
				style={{
					clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
				}}
			>
				{/* Google Meet UI with NoteNotch */}
				<div className='absolute inset-0 flex flex-col'>
					{/* Top bar */}
					<div className='h-10 md:h-12 bg-[#202124] flex items-center justify-between px-4 md:px-6'>
						<div className='flex items-center gap-3'>
							<span className='text-sm md:text-base text-gray-400 font-medium'>Team Standup</span>
						</div>
						<span className='text-xs md:text-sm text-gray-500'>10:32 AM</span>
					</div>
					
					{/* Participants grid */}
					<div className='flex-1 p-3 md:p-4 grid grid-cols-2 gap-3 md:gap-4 relative'>
						{/* Participant 1 */}
						<div className='bg-[#3c4043] rounded-xl flex items-center justify-center relative'>
							<div className='w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-medium'>JD</div>
							<span className='absolute bottom-2 left-3 text-xs md:text-sm text-white/80'>John D.</span>
						</div>
						{/* Participant 2 */}
						<div className='bg-[#3c4043] rounded-xl flex items-center justify-center relative'>
							<div className='w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-medium'>SM</div>
							<span className='absolute bottom-2 left-3 text-xs md:text-sm text-white/80'>Sarah M.</span>
						</div>
						{/* Participant 3 */}
						<div className='bg-[#3c4043] rounded-xl flex items-center justify-center relative'>
							<div className='w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-medium'>AK</div>
							<span className='absolute bottom-2 left-3 text-xs md:text-sm text-white/80'>Alex K.</span>
						</div>
						{/* Participant 4 - You */}
						<div className='bg-[#3c4043] rounded-xl flex items-center justify-center relative'>
							<div className='w-16 h-16 md:w-20 md:h-20 bg-orange-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-medium'>You</div>
							<span className='absolute bottom-2 left-3 text-xs md:text-sm text-white/80'>You</span>
						</div>
					</div>
					
					{/* Notch at top center */}
					<div className='absolute top-0 left-1/2 -translate-x-1/2 w-[140px] md:w-[180px] h-[32px] md:h-[40px] bg-black rounded-b-2xl z-20' />
					
					{/* NoteNotch sticky note - positioned under notch */}
					<div 
						className='absolute top-[32px] md:top-[40px] left-1/2 -translate-x-1/2 w-[160px] md:w-[200px] bg-black p-3 md:p-4 border border-[#FF90E8] z-10'
						style={{
							boxShadow: '0 8px 32px rgba(255,144,232,0.3)',
						}}
					>
						<div className='text-[10px] md:text-xs text-gray-300 leading-relaxed font-mono'>
							<span className='text-[#FF90E8] font-semibold'>Key Points:</span><br/>
							• Q3 timeline review<br/>
							• Budget approval needed<br/>
							• Follow up with Sarah<br/>
							• Demo next steps
						</div>
					</div>
					
					{/* Bottom controls bar */}
					<div className='h-14 md:h-16 bg-[#202124] flex items-center justify-center gap-4 md:gap-6 pb-2'>
						<div className='w-10 h-10 md:w-12 md:h-12 bg-[#3c4043] rounded-full flex items-center justify-center'>
							<svg className='w-5 h-5 md:w-6 md:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z'/>
								<path d='M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z'/>
							</svg>
						</div>
						<div className='w-10 h-10 md:w-12 md:h-12 bg-[#3c4043] rounded-full flex items-center justify-center'>
							<svg className='w-5 h-5 md:w-6 md:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'/>
							</svg>
						</div>
						<div className='w-12 h-12 md:w-14 md:h-14 bg-red-500 rounded-full flex items-center justify-center'>
							<svg className='w-6 h-6 md:w-7 md:h-7 text-white' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z'/>
							</svg>
						</div>
					</div>
				</div>
				
				{/* Label - Visible to you */}
				<div className='absolute bottom-20 md:bottom-24 left-4 px-3 py-1.5 bg-[#FF90E8] rounded-full shadow-lg shadow-[#FF90E8]/30'>
					<span className='text-xs md:text-sm font-semibold text-black'>
						Visible to you
					</span>
				</div>
			</div>

			{/* Slider divider line */}
			<div
				className='absolute top-0 bottom-0 z-30 w-[3px] bg-gradient-to-b from-[#FF90E8] via-white to-[#FF90E8]'
				style={{
					left: `${sliderPosition}%`,
					boxShadow: '0 0 20px rgba(255,144,232,0.6)',
				}}
			/>

			{/* Slider handle */}
			<div
				className='absolute top-1/2 z-40 flex size-12 md:size-14 -translate-x-1/2 -translate-y-1/2 pointer-events-none items-center justify-center rounded-full bg-gradient-to-br from-[#FF90E8] to-purple-600 shadow-lg'
				style={{
					left: `${sliderPosition}%`,
					boxShadow: '0 8px 32px rgba(255,144,232,0.5)',
				}}
			>
				<svg
					className='w-6 h-4 md:w-7 md:h-5'
					viewBox='0 0 20 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5 9L2 6L5 3'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M15 9L18 6L15 3'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</div>
	)
}
