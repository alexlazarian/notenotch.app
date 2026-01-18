import React, {useState, useEffect} from 'react'

interface NotchEyeProps {
	notchCenter: {x: number; y: number}
	noteCenter: {x: number; y: number} | null
}

const EYE_SIZE = 12
const PUPIL_SIZE = 4
const PUPIL_MOVE_RADIUS = 3 // max px pupil can move from center

const NotchEye: React.FC<NotchEyeProps> = ({
	notchCenter,
	noteCenter,
}) => {
	const [mousePosition, setMousePosition] = useState<{
		x: number
		y: number
	} | null>(null)

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({x: event.clientX, y: event.clientY})
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () =>
			window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	// Calculate pupil position based on mouse or note center
	let dx = 0,
		dy = 0
	const targetCenter = mousePosition || noteCenter

	if (targetCenter) {
		const vecX = targetCenter.x - notchCenter.x
		const vecY = targetCenter.y - notchCenter.y
		const dist = Math.sqrt(vecX * vecX + vecY * vecY)
		if (dist > 0) {
			// Clamp to max radius
			const scale = Math.min(PUPIL_MOVE_RADIUS, dist) / dist
			dx = vecX * scale
			dy = vecY * scale
		}
	}

	return (
		<div
			className='w-[12px] h-[12px] rounded-full bg-gray-500/30 flex items-center justify-center relative animate-blink'
			style={{overflow: 'hidden'}}
		>
			<div
				className='rounded-full bg-black absolute'
				style={{
					width: PUPIL_SIZE,
					height: PUPIL_SIZE,
					left: `calc(50% + ${dx - PUPIL_SIZE / 2}px)`,
					top: `calc(50% + ${dy - PUPIL_SIZE / 2}px)`,
					transition: 'left 0.15s, top 0.15s',
				}}
			/>
		</div>
	)
}

export default NotchEye
