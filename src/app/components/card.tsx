import Image from "next/image";
import Link from "next/link";

const Card = (props: { imageSrc: string; imageAlt: string; link: string; title: string; }) => {
    return (
        <div className="rounded-lg shadow odd:bg-blue-800 odd:border-blue-700 even:bg-blue-500 even:border-blue-400">
            <Link href={props.link}>
                <div className="relative">
                    <Image
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        width={400}
                        height={250}
                    />
                </div>
                <div className="p-5">
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-white">{props.title}</h3>

                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Card;