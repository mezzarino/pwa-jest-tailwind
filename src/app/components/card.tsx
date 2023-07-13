import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = (props: { imageSrc: string; imageAlt: string; link: string; title: string; }) => {
    return (
        <div className="rounded-lg shadow odd:bg-blue-800 odd:border-blue-700 even:bg-blue-500 even:border-blue-400">
            <Link href={props.link}>
                <div className="relative">
                    <Image
                        priority
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        width={400}
                        height={250}
                    />
                </div>
                <div className="p-5">
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-white">{props.title}</h2>

                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        Read more <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 pl-1" /> 
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Card;