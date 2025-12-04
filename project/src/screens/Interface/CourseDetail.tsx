import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  FileText, 
  BookOpen, 
  Heart, 
  Image as ImageIcon,
  PlayCircle
} from "lucide-react";

const courseContent = [
  {
    id: 1,
    title: "Chapter 1",
    topics: ["Topic 1", "Topic 2"],
    isCompleted: true,
    sections: [
      {
        id: "s1",
        title: "Section name",
        content: "Section text",
        resources: [
          { type: "file", name: "Introduction.pdf" },
        ],
        quiz:[
            { type: "quiz", name: "Quiz" }
        ]
      },
      {
        id: "s2",
        title: "Section name",
        content: "",
        resources: [],
        quiz: []
      }
    ]
  },
  {
    id: 2,
    title: "Chapter 2",
    topics: [],
    isCompleted: false,
    sections: [] 
  },
  {
    id: 3,
    title: "Chapter 3",
    topics: [],
    isCompleted: false,
    sections: []
  }
];

const CourseDetail = (): JSX.Element => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);
  const [expandedSection, setExpandedSection] = useState<string | null>("s1");

  const toggleChapter = (id: number) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="w-full h-full bg-white overflow-y-auto custom-scrollbar p-8">
      
      <h1 className="text-xl font-bold text-center mb-8">Course name</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
        
        <div className="lg:col-span-1 flex flex-col gap-4">
          
          {courseContent.map((chapter) => (
            <div key={chapter.id} className="border border-[#e7e7e8] rounded-lg overflow-hidden bg-white">
              
              <div 
                onClick={() => toggleChapter(chapter.id)}
                className="p-4 flex items-start justify-between cursor-pointer bg-[#f9f9f9] hover:bg-gray-100 transition-colors"
              >
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-800">{chapter.title}</span>
                        {chapter.isCompleted && <CheckCircle2 size={16} className="text-black" />}
                    </div>
                    {chapter.topics.length > 0 && (
                        <div className="flex gap-1.5">
                            {chapter.topics.map((t, i) => (
                                <span key={i} className="bg-[#333] text-white text-[10px] px-2 py-0.5 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                {expandedChapter === chapter.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {expandedChapter === chapter.id && (
                <div className="border-t border-[#e7e7e8]">
                    <div className="p-4 flex flex-col gap-1 text-xs text-gray-500">
                        Summary
                    </div>
                    
                    <div className="flex flex-col">
                        {chapter.sections.map((section) => (
                            <div key={section.id} className="border-t border-[#e7e7e8]">
                                <div 
                                    onClick={() => toggleSection(section.id)}
                                    className="px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                                >
                                    <span className="font-semibold text-sm text-black">{section.title}</span>
                                    {expandedSection === section.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </div>

                                {expandedSection === section.id && (
                                    <div className="px-4 pb-4 pt-1 flex flex-col gap-3">
                                        {section.content && (
                                            <p className="text-xs text-gray-600">{section.content}</p>
                                        )}
                                        
                                        {section.resources.length > 0 && (
                                            <div className="flex flex-col gap-2 mt-1">
                                                <span className="text-xs font-bold text-black">Resources</span>
                                                {section.resources.map((res, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                                                         <FileText size={14} />
                                                        <span className="text-xs hover:underline cursor-pointer">{res.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {section.quiz.length > 0 && (
                                            <div className="flex flex-col gap-2 mt-1">
                                                <span className="text-xs font-bold text-black">Quiz</span>
                                                {section.quiz.map((res, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                                                         <BookOpen size={14} />
                                                        <span className="text-xs hover:underline cursor-pointer">{res.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          
          <div className="w-full aspect-video bg-[#e5e5e5] rounded-lg relative flex items-center justify-center group">
             <button className="absolute top-4 left-4 bg-[#333] p-1.5 rounded-full text-white hover:bg-black transition-colors">
                <Heart size={16} />
             </button>

             <ImageIcon className="text-white opacity-50 w-16 h-16" strokeWidth={1.5} />
             
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 cursor-pointer">
                <PlayCircle size={64} className="text-white drop-shadow-lg" />
             </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-black">1/3</span>
            <div className="flex-1 h-1.5 bg-[#e7e7e8] rounded-full overflow-hidden">
                <div className="h-full bg-[#0088ff] w-[33%] rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-end mt-4">
             <button className="bg-[#ef4444] text-white text-sm font-medium px-6 py-2 rounded hover:bg-red-600 transition-colors">
                Withdraw
             </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CourseDetail;