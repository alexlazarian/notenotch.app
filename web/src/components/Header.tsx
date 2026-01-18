import {useState, useEffect} from 'react'
import {Button} from '@/components/ui/button'
import {Menu, X} from 'lucide-react'
import {AppleLogo} from '@/assets/logos/apple'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header 
			className={`sticky top-0 w-full z-50 transition-all duration-300 ${
				isScrolled 
					? 'bg-white/90 backdrop-blur-xl border-b border-gray-100' 
					: 'bg-transparent border-b border-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='flex items-center justify-between h-16 pt-8'>
					{/* Logo */}
					<a href='/' className='flex items-center gap-2'>
						<img src={logoUrl} alt='NoteNotch' className='w-8 h-8' />
						<span className='font-semibold text-black'>NoteNotch</span>
					</a>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center gap-8'>
						<a href='#features' className='text-gray-600 hover:text-black transition-colors'>
							Features
						</a>
						<a href='#comparison' className='text-gray-600 hover:text-black transition-colors'>
							Why NoteNotch
						</a>
						<Button className='bg-black hover:bg-gray-800 text-white rounded-full px-6 flex items-center gap-2'>
							<AppleLogo className='w-4 h-4' />
							Download
						</Button>
					</nav>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden p-2'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<nav className={`md:hidden py-4 border-t ${isScrolled ? 'border-gray-100' : 'border-gray-200'} ${!isScrolled ? 'bg-white/90 backdrop-blur-xl rounded-b-2xl' : ''}`}>
						<div className='flex flex-col gap-4'>
							<a href='#features' className='text-gray-600 hover:text-black py-2'>
								Features
							</a>
							<a href='#comparison' className='text-gray-600 hover:text-black py-2'>
								Why NoteNotch
							</a>
							<Button className='bg-black hover:bg-gray-800 text-white rounded-full w-full flex items-center justify-center gap-2'>
								<AppleLogo className='w-4 h-4' />
								Download
							</Button>
						</div>
					</nav>
				)}
			</div>
		</header>
	)
}
