import * as React from "react"

export default function Trustedby() {
    return (
      <div className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the student communities!
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg items-center">
            <img
              className="mx-auto col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn.discordapp.com/attachments/989248635374039110/1119200710995759104/mht_cet.png"
              alt="r/mht_cet"
              width={158}
              height={48}
              draggable="false"
            />
          </div>
        </div>
      </div>
    )
}

