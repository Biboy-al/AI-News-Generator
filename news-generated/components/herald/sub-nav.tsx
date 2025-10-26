import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const SubNav = ({newsArea}: {newsArea:string[]}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = direction === 'left' 
                ? scrollRef.current.scrollLeft - scrollAmount
                : scrollRef.current.scrollLeft + scrollAmount;
            
            scrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    return (
        <div className="flex items-center justify-center relative w-full">
            {/* Left Arrow */}
            {showLeftArrow && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-full"
                >
                    <ChevronLeft size={20} />
                </button>
            )}

            {/* Scrollable Content */}
            <div 
                ref={scrollRef}
                onScroll={checkScroll}
                className="w-full overflow-x-auto scrollbar-hide"
            >
                <div className="flex items-center justify-center">
                    {newsArea.map((item, i) => (
                        <Button
                            key={i}
                            variant="ghost"
                            className={`hover:bg-gray-800 hover:text-white transition flex-shrink-0 whitespace-nowrap rounded-full`}
                        >
                            {item}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            {showRightArrow && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-full"
                >
                    <ChevronRight size={20} />
                </button>
            )}
        </div>
    );
}

export default SubNav;