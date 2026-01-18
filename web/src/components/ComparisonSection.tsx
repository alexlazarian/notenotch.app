export const ComparisonSection = () => {
	return (
		<section className='py-32 bg-transparent'>
			<div className='max-w-6xl mx-auto px-6'>
				{/* Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
						Why
						<span className='text-[#FF90E8]'> NoteNotch?</span>
					</h2>
					<p className='text-xl text-gray-400 max-w-2xl mx-auto'>
						Not another AI tool. Something refreshingly simple.
					</p>
				</div>

				{/* Comparison Card - Cluely Style */}
				<div className='relative flex flex-col lg:flex-row w-full overflow-hidden rounded-[2rem] bg-[#1a1a1a] shadow-xl border border-gray-800'>
					{/* Left Side - AI Notetakers (Bad) */}
					<div className='flex-1 p-8 md:p-12 bg-gradient-to-br from-red-950/30 to-orange-950/20 border-b lg:border-b-0 lg:border-r border-gray-800'>
						<div className='mb-8'>
							<span className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/50 text-red-400 text-sm font-medium mb-4'>
								<span className='w-2 h-2 bg-red-500 rounded-full'></span>
								AI Notetakers
							</span>
							<h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
								Creepy AI Bots
							</h3>
							<p className='text-gray-500'>
								Otter, Fireflies, Fathom, Grain...
							</p>
						</div>

						{/* Problem Visualization */}
						<div className='bg-[#0a0a0a] rounded-2xl p-6 shadow-sm border border-red-900/30 mb-6'>
							<div className='flex items-center gap-4 mb-4'>
								<div className='w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center'>
									<span className='text-2xl'>🤖</span>
								</div>
								<div>
									<p className='font-medium text-white'>Bot joins your call</p>
									<p className='text-sm text-gray-500'>"Otter.ai is recording..."</p>
								</div>
							</div>
							<div className='flex items-center gap-2 text-red-400 text-sm'>
								<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
								</svg>
								Everyone knows you're recording
							</div>
						</div>

						{/* Issues List */}
						<ul className='space-y-3'>
							<li className='flex items-center gap-3 text-gray-400'>
								<span className='w-5 h-5 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 text-xs'>✗</span>
								Awkward bot joins your meetings
							</li>
							<li className='flex items-center gap-3 text-gray-400'>
								<span className='w-5 h-5 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 text-xs'>✗</span>
								AI-generated summaries, not your prep
							</li>
							<li className='flex items-center gap-3 text-gray-400'>
								<span className='w-5 h-5 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 text-xs'>✗</span>
								Privacy concerns, data stored on servers
							</li>
							<li className='flex items-center gap-3 text-gray-400'>
								<span className='w-5 h-5 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 text-xs'>✗</span>
								Expensive subscriptions ($15-30/mo)
							</li>
						</ul>
					</div>

					{/* Right Side - NoteNotch (Good) */}
					<div className='flex-1 p-8 md:p-12 bg-gradient-to-br from-[#FF90E8]/10 to-[#FF90E8]/5'>
						<div className='mb-8'>
							<span className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF90E8]/20 text-[#FF90E8] text-sm font-medium mb-4'>
								<span className='w-2 h-2 bg-[#FF90E8] rounded-full'></span>
								NoteNotch
							</span>
							<h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
								Just Your Notes
							</h3>
							<p className='text-gray-500'>
								Simple. Private. Human.
							</p>
						</div>

						{/* Solution Visualization */}
						<div className='bg-[#0a0a0a] rounded-2xl p-6 shadow-sm border border-[#FF90E8]/30 mb-6'>
							<div className='flex items-center gap-4 mb-4'>
								<div className='w-12 h-12 bg-[#FF90E8] rounded-full flex items-center justify-center'>
									<span className='text-2xl'>✍️</span>
								</div>
								<div>
									<p className='font-medium text-white'>Your notes, your words</p>
									<p className='text-sm text-gray-500'>Invisible to everyone else</p>
								</div>
							</div>
							<div className='flex items-center gap-2 text-[#FF90E8] text-sm'>
								<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
								</svg>
								No one knows you have notes up
							</div>
						</div>

						{/* Benefits List */}
						<ul className='space-y-3'>
							<li className='flex items-center gap-3 text-gray-400'>
								<span className='w-5 h-5 rounded-full bg-[#FF90E8]/20 flex items-center justify-center text-[#FF90E8] text-xs'>✓</span>
								No bots, no recordings, no weirdness
							</li>
							<li className='flex items-center gap-3 text-gray-400'>
								<span className='w-5 h-5 rounded-full bg-[#FF90E8]/20 flex items-center justify-center text-[#FF90E8] text-xs'>✓</span>
								Your own prep, your own words
							</li>
							<li className='flex items-center gap-3 text-gray-400'>
								<span className='w-5 h-5 rounded-full bg-[#FF90E8]/20 flex items-center justify-center text-[#FF90E8] text-xs'>✓</span>
								100% local, nothing leaves your Mac
							</li>
							<li className='flex items-center gap-3 text-gray-400'>
								<span className='w-5 h-5 rounded-full bg-[#FF90E8]/20 flex items-center justify-center text-[#FF90E8] text-xs'>✓</span>
								Pay what you want (free!)
							</li>
						</ul>
					</div>

					{/* VS Badge */}
					<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex'>
						<div className='w-14 h-14 rounded-full bg-[#FF90E8] text-black flex items-center justify-center font-bold text-sm shadow-lg'>
							VS
						</div>
					</div>
				</div>

				{/* Anti-AI tagline */}
				<p className='text-center text-gray-500 mt-8 text-lg'>
					Sometimes the best AI is <span className='text-[#FF90E8] font-medium'>no AI</span>.
				</p>
			</div>
		</section>
	)
}
