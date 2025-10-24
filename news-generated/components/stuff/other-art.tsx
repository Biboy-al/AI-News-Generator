
const OtherArticle = ({title} : {title: string}) =>{

    const minutesAgo = Math.floor(Math.random() * 60) + 1; // Random number between 1 and 60

    return (
        <div className="border-b last:border-transparent flex flex-col gap-2 pb-4 ">
            <p className="hover:text-purple-600 text-xs font-bold">
               {title}
            </p>

            <p className="text-red-600 text-[10px] font-bold ">
                {minutesAgo} mins ago
            </p>
        </div>
    )
}

export default OtherArticle;