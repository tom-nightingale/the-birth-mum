import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../components/button'

export default function mobileMenu({navItems}) {

    const router = useRouter();
    let currentPath = router.pathname;

    //State management for mobile menu
    const [open, setOpen] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    };

    return (
        <>
            <button aria-label="Open Menu" open={open} onClick={() => setOpen(!open)} className={`btn-mobile-menu md:hidden ${open ? 'open' : ''}`}>
                <span />
                <span />
                <span />
            </button>

            {/* Mobile Menu */}
            <div open={open} className={`fixed top-0 left-0 z-0 w-full h-full p-4 transition-all duration-200 bg-peach-light md:hidden ${open ? 'opacity-100 z-40' : 'opacity-0'}`}>
                
                <div className="flex flex-col items-center justify-center h-full">

                <motion.div variants={container} initial="hidden" animate={open ? 'show' : ''}>

                    <motion.div variants={listItem}>
                    <img src="/logo.svg" alt="The Birth Mum Logo" className="w-20 mx-auto mb-8 text-white" />
                    </motion.div>

                    {
                    Object.values(navItems).map((item, i) => {
                        return(
                        <motion.div className="mb-6 text-center" key={i} variants={listItem}>
                            <Link href={item.href} scroll={false}>
                            <a aria-label={`Go to ${item.label}`} onClick={() => setOpen(!open)} className={`tracking-widest uppercase navItem ${currentPath === item.href ? 'text-orange-dark navActive' : ''}`}>
                                {item.label}
                            </a>
                            </Link>
                        </motion.div>
                        )
                    })
                    }

                    <motion.div className="text-center" variants={listItem}>
                    <Button onClick={() => setOpen(!open)} link="/contact" aria-label="Navigate to Contact" classes="mb-6 inline-flex justify-center">Get In Touch</Button>
                    </motion.div>
                    
                    <motion.div className="text-center" variants={listItem}>
                    <a className="transition-all duration-200 text-green-light hover:text-green" variants={listItem} href="tel:07723039623">Tel: <span className="text-orange">07723 039623</span></a>
                    
                    </motion.div>

                </motion.div>

                </div>
            </div>
            {/* End Mobile Menu */}
        </>
    )
}