export default function footer() {
    return (
        <footer className="bg-gray-950">
            <div
                className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:pt-8"
            >
                <div className="lg:flex lg:items-end lg:justify-between">
                <div>
                    <div className="flex justify-center text-teal-600 lg:justify-start">
                        <a className="text-xl font-sans font-bold" href="/"> NIRFTL </a>
                    </div>

                    <p
                    className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
                    >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                    consequuntur amet culpa cum itaque neque.
                    </p>
                </div>

                <ul
                    className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                >
                    <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                        Privacy Policy
                    </a>
                    </li>

                    <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                        Terms & Services
                    </a>
                    </li>
                </ul>
                </div>
                <div className="mt-16 border-t border-gray-700 pt-8">
                <p className="text-center text-xs/relaxed text-gray-500">
                    © Company 2022. All rights reserved.
                    <br />

                    Created by
                    <a
                    href=""
                    className="text-gray-700 underline transition hover:text-gray-700/75"
                    > meowww </a
                    >
                    using
                    <a
                    href=""
                    className="text-gray-700 underline transition hover:text-gray-700/75"
                    > T3 Stack </a
                    >.
                </p>
                </div>
            </div>
        </footer>
    )
}