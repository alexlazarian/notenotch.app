export const ComparisonSection = () => {
	return (
		<section className='py-32 bg-transparent'>
			<div className='max-w-6xl mx-auto px-6'>
				{/* Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
						The
						<span className='text-[#FF90E8]'> notch trick</span>
					</h2>
					<p className='text-xl text-gray-400 max-w-2xl mx-auto'>
						Your notes live right under your camera. Read them and still look like you{"'"}re making eye contact.
					</p>
				</div>

				{/* Visual Demo Card */}
				<div className='relative w-full overflow-hidden rounded-[2rem] bg-[#1a1a1a] shadow-xl border border-gray-800 p-8 md:p-12'>
					
					{/* The Magic Explained */}
					<div className='grid md:grid-cols-2 gap-12 items-stretch'>
						
						{/* Left - Without NoteNotch */}
						<div className='text-center flex flex-col'>
							<div className='bg-[#0a0a0a] rounded-2xl p-8 border border-gray-800 mb-6 flex-1 flex flex-col justify-center'>
								<div className='relative w-32 h-32 mx-auto mb-4'>
									{/* Face looking down */}
									<div className='w-24 h-24 bg-gray-700 rounded-full mx-auto flex items-center justify-center'>
										<div className='text-4xl transform rotate-[30deg]'>😬</div>
									</div>
									{/* Arrow pointing down */}
									<div className='absolute -bottom-2 left-1/2 -translate-x-1/2 text-gray-500'>
										<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
										</svg>
									</div>
								</div>
								<p className='text-gray-500 text-sm'>Looking down at notes</p>
							</div>
							<h3 className='text-xl font-bold text-white mb-2'>Without NoteNotch</h3>
							<p className='text-gray-500'>Eyes dart away. Looks distracted. Breaks connection.</p>
						</div>

						{/* Right - With NoteNotch */}
						<div className='text-center flex flex-col'>
							<div className='bg-[#0a0a0a] rounded-2xl p-8 border border-[#FF90E8]/30 mb-6 relative flex-1 flex flex-col justify-center'>
								{/* Notch indicator */}
								<div className='absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl border-b border-x border-[#FF90E8]/50'></div>
								
								<div className='relative w-32 h-32 mx-auto mb-4 mt-4'>
									{/* Face looking straight */}
									<div className='w-24 h-24 bg-[#FF90E8]/20 rounded-full mx-auto flex items-center justify-center border-2 border-[#FF90E8]/50'>
										<div className='text-4xl'>😊</div>
									</div>
									{/* Sparkles */}
									<div className='absolute -top-1 -right-1 text-[#FF90E8]'>✨</div>
								</div>
								<p className='text-[#FF90E8] text-sm font-medium'>Looking at camera (and notes!)</p>
							</div>
							<h3 className='text-xl font-bold text-white mb-2'>With NoteNotch</h3>
							<p className='text-gray-400'>Notes under the notch. Eyes stay up. <span className='text-[#FF90E8]'>Looks natural.</span></p>
						</div>
					</div>

					{/* Benefits */}
					<div className='mt-12 pt-8 border-t border-gray-800'>
						<div className='grid sm:grid-cols-3 gap-6 text-center'>
							<div>
								<div className='text-3xl mb-2'>👀</div>
								<h4 className='font-semibold text-white mb-1'>Maintain eye contact</h4>
								<p className='text-sm text-gray-500'>Notes are where you naturally look</p>
							</div>
							<div>
								<div className='text-3xl mb-2'>🎯</div>
								<h4 className='font-semibold text-white mb-1'>Stay on point</h4>
								<p className='text-sm text-gray-500'>Never forget what to say next</p>
							</div>
							<div>
								<div className='text-3xl mb-2'>✨</div>
								<h4 className='font-semibold text-white mb-1'>Look confident</h4>
								<p className='text-sm text-gray-500'>Appear natural and prepared</p>
							</div>
						</div>
					</div>
				</div>

				{/* Tagline */}
				<p className='text-center text-gray-500 mt-8 text-lg'>
					It{"'"}s not cheating. It{"'"}s <span className='text-[#FF90E8] font-medium'>being prepared</span>.
				</p>
			</div>
		</section>
	)
}
