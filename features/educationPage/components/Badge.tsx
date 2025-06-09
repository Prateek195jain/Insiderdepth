
interface BadgePropstype {
    type: 'free' | 'premium'; 
}

export default function Badge({type}:BadgePropstype){
    // Badges ke colors manage karne ke liye:
    const badgeBgClass = type === 'free' ? 'bg-green-500' : 'bg-yellow-500'; 
    return (
        <div className={`absolute top-2 right-[-40px] rotate-45 ${badgeBgClass} text-white text-xs px-11 py-1 font-bold shadow-md`}>
            {type.toUpperCase()} 
        </div>
    );
}