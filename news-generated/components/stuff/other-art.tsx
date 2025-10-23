
const OtherArticle = ({title} : {title: string}) =>{

    const minutesAgo = Math.floor(Math.random() * 60) + 1; // Random number between 1 and 60

    return (
        <div className="border-b flex flex-col gap-2 pb-4 ">
            <p className="hover:text-purple-600 text-xs leading-none tracking-tight font-bold">
               {title}
            </p>

            <p className="text-red-600 text-xs/2 ">
                {minutesAgo} mins ago
            </p>
        </div>
    )
}

export default OtherArticle;