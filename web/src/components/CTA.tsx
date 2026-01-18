import {Button} from '@/components/ui/button'
import {AppleLogo} from '@/assets/logos/apple'
import {GumroadLogo} from '@/assets/logos/gumroad'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`

export const CTA = () => {
	return (
		<section className='py-32 bg-transparent text-white'>
			<div className='max-w-4xl mx-auto px-6 text-center'>
				{/* Logo */}
				<div className='mb-8'>
					<img
						src={logoUrl}
						alt='NoteNotch'
						className='w-20 h-20 mx-auto'
					/>
				</div>

				{/* Header */}
				<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
					Ready to <span className='text-[#FF90E8]'>try?</span>
				</h2>
				<p className='text-xl text-gray-400 max-w-xl mx-auto mb-12'>
					Download NoteNotch and transform how you present on video calls.
				</p>

				{/* Download Button */}
				<a 
					href='https://iclazar.gumroad.com/l/notenotch'
					target='_blank'
					rel='noopener noreferrer'
					className='inline-block'
				>
					<Button 
						size='lg'
						className='group bg-[#FF90E8] hover:bg-[#ff9fec] text-black px-10 py-6 text-lg rounded-full flex items-center gap-2 transition-all duration-300'
					>
						<span className='flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-1'>
							<AppleLogo className='!size-5 transition-all duration-300 group-hover:opacity-0 group-hover:!w-0 group-hover:-ml-2' />
							<span className='relative'>
								<span className='transition-all duration-300 group-hover:opacity-0'>Download for Mac</span>
								<span className='absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 whitespace-nowrap'>Get on Gumroad</span>
							</span>
						</span>
						<GumroadLogo className='!size-5 opacity-0 transition-all duration-300 group-hover:opacity-100 -ml-4 group-hover:ml-0' />
					</Button>
				</a>

				{/* Note */}
				<p className='text-sm text-gray-500 mt-6'>
					macOS 12+ • Free
				</p>
			</div>
		</section>
	)
}
