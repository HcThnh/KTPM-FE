import { useState } from "react";
import { Heart, Image as ImageIcon, ChevronDown, ChevronUp } from "lucide-react";

const chapters = [
  { id: 1, title: "Chapter 1", summary: "Chapter 1 summary" },
  { id: 2, title: "Chapter 2" },
  { id: 3, title: "Chapter 3" },
  { id: 4, title: "Chapter 4" },
];

const CourseEnroll = (): JSX.Element => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);

  const toggleChapter = (id: number) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto px-6 py-10 bg-white">
      
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        
        <div className="w-full md:w-[450px] shrink-0">
            <div className="w-full aspect-video bg-[#e5e5e5] rounded-lg flex items-center justify-center relative">
                <ImageIcon className="text-white w-16 h-16 opacity-50" strokeWidth={1.5} />
                <button className="absolute top-4 left-4 bg-[#333] p-1.5 rounded-full text-white hover:bg-black transition-colors">
                    <Heart size={16} />
                </button>
            </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-black">Course name</h1>
            
            <div className="flex gap-2">
                {["Topic 1", "Topic 2", "Topic 3"].map((topic, i) => (
                    <span key={i} className="bg-[#2c2c2c] text-white text-[11px] font-medium px-3 py-1 rounded-full">
                        {topic}
                    </span>
                ))}
            </div>

            <div className="flex-1"></div> 

            <button className="w-full bg-[#10b981] text-white font-bold py-3 rounded hover:bg-[#059669] transition-colors shadow-sm">
                Enroll
            </button>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-500">Description</p>
      </div>

      <div className="flex flex-col gap-3">
        {chapters.map((chapter) => (
            <div key={chapter.id} className="border border-[#e7e7e8] rounded-lg overflow-hidden bg-[#f9f9f9]">
                <button 
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full px-5 py-4 flex justify-between items-center bg-[#f9f9f9] hover:bg-gray-100 transition-colors"
                >
                    <span className="font-bold text-sm text-gray-800">{chapter.title}</span>
                    {expandedChapter === chapter.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {expandedChapter === chapter.id && chapter.summary && (
                    <div className="px-5 pb-4 text-xs text-gray-500 bg-white border-t border-[#e7e7e8] pt-3">
                        {chapter.summary}
                    </div>
                )}
            </div>
        ))}
        
      </div>

    </div>
  );
};

export default CourseEnroll;