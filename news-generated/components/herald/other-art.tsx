const OtherArticle = ({title, category}: {title: string, category?: string}) => {

    // Generate random date in the past
    const now = new Date();
    const randomHoursAgo = Math.floor(Math.random() * 48); // 0-48 hours ago
    now.setHours(now.getHours() - randomHoursAgo);
    
    const formattedDate = now.toLocaleDateString("en-NZ", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    return (
        <div className="border-gray-200 last:border-transparent flex flex-col gap-2 pb-4 mb-4">
            {category && (
                <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
                    {category}
                </p>
            )}
            
            <p className="hover:underline text-sm font-bold leading-tight cursor-pointer">
               {title}
            </p>

            <p className="text-gray-500 text-xs">
                {formattedDate}
            </p>
        </div>
    )
}

export default OtherArticle;