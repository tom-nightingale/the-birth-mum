import Link from 'next/link'
import { Image } from 'react-datocms'

export default function Card({ card }) {
    return(
        <div className="w-full md:w-1/2 lg:w-1/4 md:px-4">

            <Link href={`/${card.cardUrl}`}>

                <a className="block p-6 bg-white shadow-lg rounded-2xl md:p-8">
                    <div className="bg-green rounded-t-2xl">
                    <Image
                            data={{...card.cardImage.responsiveImage, alt: `${card.cardTitle}` }}
                            className="w-full rounded-lg"
                        />
                    </div>
                    
                    <span className="block mt-4 text-lg tracking-widest text-center uppercase md:mt-6">{card.cardTitle}</span>
                    
                </a>
                
            </Link>
            
        </div>
    )
}