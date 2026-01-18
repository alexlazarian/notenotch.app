import {useState, useEffect} from 'react'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`

interface MacMenuBarProps {
	show?: boolean
}

export const MacMenuBar = ({show = true}: MacMenuBarProps) => {
	const [currentTime, setCurrentTime] = useState('')

	useEffect(() => {
		// Update time every second
		const updateTime = () => {
			const now = new Date()
			const options: Intl.DateTimeFormatOptions = {
				weekday: 'short',
				month: 'short',
				day: 'numeric',
				hour: 'numeric',
				minute: '2-digit',
				hour12: true,
			}
			setCurrentTime(now.toLocaleDateString('en-US', options).replace(',', ''))
		}

		updateTime()
		const interval = setInterval(updateTime, 1000)
		return () => clearInterval(interval)
	}, [])

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({behavior: 'smooth'})
		}
	}

	return (
		<div 
			className={`sticky top-0 z-[100] px-3 flex items-center justify-between transition-all duration-300 ease-out ${show ? 'h-[25px]' : 'h-0 overflow-hidden'}`}
			style={{
				fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
				opacity: show ? 1 : 0,
			}}
		>
			{/* Left side - Logo and menu items */}
			<div className='flex items-center gap-4'>
				{/* NoteNotch icon (like Apple logo position) */}
				<button 
					onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
					className='flex items-center hover:opacity-70 transition-opacity px-1'
				>
					<img src={logoUrl} alt='NoteNotch' className='w-[14px] h-[14px]' />
				</button>

				{/* Menu items */}
				<nav className='flex items-center gap-4'>
					<button 
						onClick={() => scrollToSection('features')}
						className='text-[13px] leading-none text-black/90 hover:text-black transition-colors font-normal tracking-[-0.01em]'
					>
						Features
					</button>
					<button 
						onClick={() => scrollToSection('comparison')}
						className='text-[13px] leading-none text-black/90 hover:text-black transition-colors font-normal tracking-[-0.01em]'
					>
						Why NoteNotch
					</button>
					<a 
						href='https://iclazar.gumroad.com/l/notenotch'
						target='_blank'
						rel='noopener noreferrer'
						className='text-[13px] leading-none text-black/90 hover:text-black transition-colors font-normal tracking-[-0.01em]'
					>
						Download
					</a>
				</nav>
			</div>

			{/* Right side - System icons and time */}
			<div className='flex items-center gap-2'>
				{/* Mock system icons */}
				<div className='hidden md:flex items-center gap-1.5 text-black/80'>
					{/* Control Center icon */}
					<svg className='w-[16px] h-[16px]' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z'/>
						<circle cx='12' cy='12' r='3'/>
					</svg>
					{/* WiFi icon */}
					<svg className='w-[16px] h-[16px]' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z'/>
					</svg>
					{/* Battery icon */}
					<div className='flex items-center gap-0.5'>
						<div className='w-[20px] h-[9px] border border-black/60 rounded-[2px] flex items-center p-[1px]'>
							<div className='w-[85%] h-full bg-black/60 rounded-[1px]' />
						</div>
						<div className='w-[1.5px] h-[4px] bg-black/60 rounded-r-sm' />
					</div>
				</div>

				{/* Current time */}
				<span className='text-[13px] leading-none text-black/90 font-normal tracking-[-0.01em] tabular-nums ml-1'>
					{currentTime}
				</span>
			</div>
		</div>
	)
}
