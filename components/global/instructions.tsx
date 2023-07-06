export default function Instructions() {
    return (
    <>
    <hr className="py-2"></hr>
    <div className="mx-auto max-w-7xl p-7">
        <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl  text-left">
            Information
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            The Information Tab, provides a comprehensive list of abbreviations 
            and their corresponding details for clear understanding. Also, the data is for the year 2022.
        </p>
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
            <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    Abbreviation
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    Details
                </th>
                </tr>
            </thead>
            <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Tier
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    College tier are divided on the basis of mean package, these arnt officially given out my NIRF!
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li><p>{'>'}1,000,000 - Tier 1 </p></li>
                        <li><p>{'>'}500,000 - Tier 2 </p></li>
                        <li><p>under 500,000 - Tier 3 </p></li>
                    </ul>
                    Its more of a joke, all other data sources are queried from NIRF, and way better/trustable indicator!
                </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Median
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Median Package here is the total median packages of all branches within UG for the year of 2021-22.
                </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Male, Female & Total
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    These are the number of students that are currently enrolled in UG within the college.
                </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Graduated & Placed
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    The are the number of students who have graduated from the college & also placed!
                </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Higher Edu
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    The number of students to choose to persue Higer Education straight out of UG!
                </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    UG
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Undergraduate
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
    </>
    )
}