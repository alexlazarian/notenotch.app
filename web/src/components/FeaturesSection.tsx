interface FeaturesSectionProps {
	onPositionHover?: (isHovering: boolean) => void
	onThemesHover?: (isHovering: boolean) => void
	onBionicHover?: (isHovering: boolean) => void
	onMarkdownHover?: (isHovering: boolean) => void
	onInvisibleHover?: (isHovering: boolean) => void
	onLocalHover?: (isHovering: boolean) => void
}

export const FeaturesSection = ({ onPositionHover, onThemesHover, onBionicHover, onMarkdownHover, onInvisibleHover, onLocalHover }: FeaturesSectionProps) => {
	const features = [
		{
			title: 'Position',
			subtitle: 'anywhere',
			description: 'Drag your notes anywhere on screen. They float above everything.',
			dark: true,
		},
		{
			title: 'Custom',
			subtitle: 'themes',
			description: 'Light, dark, or create your own. Make it match your style.',
			dark: false,
		},
		{
			title: 'Invisible',
			subtitle: 'to others',
			description: 'Hidden from screen shares. Only you can see your notes.',
			dark: true,
		},
		{
			title: 'Bionic',
			subtitle: 'reading',
			description: 'Scan notes 40% faster with bionic reading mode.',
			dark: false,
		},
		{
			title: 'Markdown',
			subtitle: 'support',
			description: 'Format with headers, bold, and bullet points.',
			dark: true,
		},
		{
			title: '100%',
			subtitle: 'local',
			description: 'Your notes never leave your Mac. Zero cloud, zero tracking.',
			dark: false,
		},
	]

	return (
		<section id='features' className='py-32 bg-transparent'>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Section Header */}
				<div className='text-center mb-20'>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
						Packed with
						<br />
						<span className='text-[#FF90E8]'>features</span>
					</h2>
					
					{/* Badge */}
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF90E8]/10 border border-[#FF90E8]/30'>
						<span className='text-[#FF90E8]'>✦</span>
						<span className='text-gray-300 text-sm font-medium'>
							Look confident. Be prepared.
						</span>
					</div>
				</div>

				{/* Feature Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{features.map((feature, index) => (
						<div
							key={index}
							className={`group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] ${
								feature.dark
									? 'bg-[#FF90E8] text-black'
									: 'bg-[#1a1a1a] text-white border border-gray-800'
							}`}
							onMouseEnter={() => {
								if (index === 0) onPositionHover?.(true)
								if (index === 1) onThemesHover?.(true)
								if (index === 2) onInvisibleHover?.(true)
								if (index === 3) onBionicHover?.(true)
								if (index === 4) onMarkdownHover?.(true)
								if (index === 5) onLocalHover?.(true)
							}}
							onMouseLeave={() => {
								if (index === 0) onPositionHover?.(false)
								if (index === 1) onThemesHover?.(false)
								if (index === 2) onInvisibleHover?.(false)
								if (index === 3) onBionicHover?.(false)
								if (index === 4) onMarkdownHover?.(false)
								if (index === 5) onLocalHover?.(false)
							}}
						>
							<div className='mb-6'>
								<h3 className='text-2xl md:text-3xl font-bold leading-tight'>
									{feature.title}
									<br />
									<span className={feature.dark ? 'text-black/60' : 'text-[#FF90E8]'}>
										{feature.subtitle}
									</span>
								</h3>
							</div>
							<p className={`text-base ${feature.dark ? 'text-black/70' : 'text-gray-400'}`}>
								{feature.description}
							</p>
						</div>
					))}
				</div>

				{/* Platform Compatibility */}
				<div className='mt-24 text-center'>
					<p className='text-sm uppercase tracking-wider text-gray-500 mb-8'>
						Works with every meeting platform
					</p>
					<div className='flex flex-wrap justify-center gap-8 text-xl font-medium text-gray-500'>
						<span className='hover:text-[#FF90E8] transition-colors'>Zoom</span>
						<span className='text-gray-700'>•</span>
						<span className='hover:text-[#FF90E8] transition-colors'>Google Meet</span>
						<span className='text-gray-700'>•</span>
						<span className='hover:text-[#FF90E8] transition-colors'>Teams</span>
						<span className='text-gray-700'>•</span>
						<span className='hover:text-[#FF90E8] transition-colors'>Slack</span>
						<span className='text-gray-700'>•</span>
						<span className='hover:text-[#FF90E8] transition-colors'>Loom</span>
						<span className='text-gray-700'>•</span>
						<span className='hover:text-[#FF90E8] transition-colors'>Webex</span>
					</div>
				</div>
			</div>
		</section>
	)
}
