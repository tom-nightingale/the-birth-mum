import Container from './container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-opacity-75 border-peach md:py-12 lg:py-16">
      <Container>
        <div className="flex flex-wrap mb-6 md:mb-8">
          <div className="w-1/2 mb-4 md:w-1/4 md:mb-0">
            <Link href="/" scroll={false}>
              <a>
                <img src="/logo.svg" alt="The Birth Mum Logo" className="w-20 md:w-24" />
              </a>
            </Link>
          </div>

          <div className="w-1/2 mb-4 md:w-1/4 md:mb-0">
            <a href="tel:07723039623" className="block mb-1 text-xs sm:mb-2 lg:mb-3 lg:text-base hover:underline focus:underline text-green-light">07723 039623</a>
            <a href="mailto:hello@thebirthmum.co.uk" className="block mb-1 text-xs sm:mb-2 lg:mb-3 lg:text-base hover:underline focus:underline text-green-light">hello@thebirthmum.co.uk</a>
          </div>

          <div className="w-1/2 mb-4 md:w-1/4 md:mb-0">
            <Link href="/" scroll={false}><a aria-label="Navigate to Home" className="block mb-1 text-xs lg:mb-3 sm:mb-2 lg:text-base hover:underline focus:underline">Home</a></Link>
            
            <Link href="/about" scroll={false}><a aria-label="Navigate to About" className="block mb-1 text-xs lg:mb-3 sm:mb-2 lg:text-base hover:underline focus:underline">About</a></Link>
            
            <Link href="/hypnobirthing" scroll={false}><a aria-label="Navigate to Hypnobirthing" className="block mb-1 text-xs lg:mb-3 sm:mb-2 lg:text-base hover:underline focus:underline">Hypnobirthing</a></Link>
          </div>

          <div className="w-1/2 mb-4 md:w-1/4 md:mb-0">
            <Link href="/courses" scroll={false}><a aria-label="Navigate to Courses &amp; Booking" className="block mb-1 text-xs lg:mb-3 sm:mb-2 lg:text-base hover:underline focus:underline">Courses &amp; Booking</a></Link>
            
            <Link href="/blog" scroll={false}><a aria-label="Navigate to The Blog" className="block mb-1 text-xs lg:mb-3 sm:mb-2 lg:text-base hover:underline focus:underline">The Blog</a></Link>

            <Link href="/contact" scroll={false}><a aria-label="Navigate to Contact" className="block mb-1 text-xs lg:mb-3 sm:mb-2 lg:text-base hover:underline focus:underline">Get In Touch</a></Link>
          </div>
        </div>

        <small className="block w-full mt-16 text-xs text-right opacity-75 lg:text-sm">&copy; Copyright The Birth Mum 2020. All Rights Reserved.</small>
      </Container>
    </footer>
  )
}
