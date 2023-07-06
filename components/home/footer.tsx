import Link from "next/link"

export default function footer() {
    return (
        <footer className="bg-gray-950">
            <div className="relative mx-auto max-w-7xl px-4 py-2 sm:px-4 lg:pt-8">
                    <div className="lg:flex lg:items-end lg:justify-between">
                        <div>
                            <div className="flex justify-center text-gray-250 pl-8 lg:justify-start">
                                <a className="text-xl font-sans font-bold"> NIRFTL </a>
                            </div>
                            <p className="mx-auto mt-6 pl-8 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            It is strongly recommended to verify the information provided on this website with official sources to ensure its accuracy. 
                            This website holds no responsibility for any damages, losses, or inconveniences arising from the use of its services.
                            </p>
                        </div>
                        <ul className=" flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12 pr-8 pt-2">
                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" href="/tos/privacypolicy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" href="/tos/termsandservices">
                                    Terms & Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                <div className="mt-4 border-t border-gray-700 py-4">
                    <p className="text-center text-xs/relaxed text-gray-500">
                        Created by
                        <a target="_blank" href="https://twitter.com/KewKartik"  className="text-gray-750 transition hover:text-gray-600/75"> KewKartik </a>
                        |
                        <a target="_blank" href="https://github.com/KewKartik/NIRFTL"  className="text-gray-750 transition hover:text-gray-600/75"> Github </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}