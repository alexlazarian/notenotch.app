const logoUrl = `${import.meta.env.BASE_URL}logo.png`

export const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<div className='py-8 px-6'>
			<footer className='max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4'>
				<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
					{/* Brand */}
					<div className='flex items-center gap-2'>
						<img
							src={logoUrl}
							alt='NoteNotch'
							className='w-5 h-5'
						/>
						<span className='font-medium text-white text-sm'>NoteNotch</span>
					</div>

					{/* Links */}
					<div className='flex flex-wrap gap-6 text-sm text-gray-400'>
						<a href='#features' className='hover:text-[#FF90E8] transition-colors'>
							Features
						</a>
						<a href='#' className='hover:text-[#FF90E8] transition-colors'>
							Privacy
						</a>
						<a href='#' className='hover:text-[#FF90E8] transition-colors'>
							Terms
						</a>
					</div>

					{/* Copyright */}
					<p className='text-xs text-gray-500'>
						© {currentYear} Alex Lazarian
					</p>
				</div>
			</footer>
		</div>
	)
}
