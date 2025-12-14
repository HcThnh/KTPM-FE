import { useState, useEffect } from "react";
import { Heart, Image as ImageIcon, ChevronDown, ChevronUp,PlayCircle,ArrowLeft,Loader2,CheckCircle } from "lucide-react";
import { getCourseById,EnrollInCourse,getEnrolledCourses, Course, Chapter, Section } from "../../services/authServices";

interface CourseEnrollProps {
    courseId: number; 
    onNavigate: (page: string) => void;
}
const CourseEnroll = ({ courseId, onNavigate }: CourseEnrollProps): JSX.Element => {

  const studentIdStr =  localStorage.getItem('studentId');
  const studentId = studentIdStr ? parseInt(studentIdStr) : null;

  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isEnrolling, setIsEnrolling] = useState<boolean>(false);

  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);

    useEffect(() => {
        const fetchData = async () => {
            if (!courseId) return;
            
            try {
                setIsLoading(true);

                const [courseData, enrolledList] = await Promise.all([
                    getCourseById(courseId),
                    studentId ? getEnrolledCourses(studentId) : Promise.resolve([])
                ]);

                setCourse(courseData);

                if (enrolledList && enrolledList.length > 0) {
                    const isFound = enrolledList.some((c) => c.id === courseId);
                    setIsRegistered(isFound);
                }

                if (courseData.chapters && courseData.chapters.length > 0) {
                    setExpandedChapter(courseData.chapters[0].id);
                }

            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [courseId]);

  const toggleChapter = (id: number) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };
  const renderSectionIcon = () => {
      return <PlayCircle size={14} className="text-gray-500" />;
  };
  const handleEnroll = async () => {
    if (!studentId) {
        alert("Vui lòng đăng nhập để đăng ký khóa học!");
        return;
    }

    try {
        setIsEnrolling(true);

        await EnrollInCourse(studentId, courseId);
        
        alert("Đăng ký khóa học thành công!");
        
        onNavigate("your-courses"); 
        
    } catch (error) {
        console.error("Enrollment failed:", error);
        alert("Đăng ký thất bại. Vui lòng thử lại sau.");
    } finally {
        setIsEnrolling(false);
    }
  };

  if (isLoading) {
      return <div className="p-10 text-center text-gray-500">Đang tải thông tin khóa học...</div>;
  }

  if (!course) {
      return <div className="p-10 text-center text-red-500">Không tìm thấy khóa học</div>;
  }
  return (
    
    <div className="w-full max-w-[1000px] mx-auto px-6 py-10 bg-white">
      <button 
          onClick={() => onNavigate("browse-courses")} 
          className="flex items-center gap-2 text-gray-500 hover:text-black mb-6 transition-colors group"
      >
          <div className="p-1.5 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
              <ArrowLeft size={20} />
          </div>
          <span className="font-medium text-sm">Back to Courses</span>
      </button>
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
            <h1 className="text-2xl font-bold text-black">{course.title}</h1>
            
            <div className="flex flex-wrap gap-2">
                {course.chapters && course.chapters.slice(0, 3).map((chapter, i) => (
                    <span key={i} className="bg-[#2c2c2c] text-white text-[11px] font-medium px-3 py-1 rounded-full">
                        {chapter.title}
                    </span>
                ))}
            </div>

            <div className="flex-1"></div> 

                {isRegistered ? (
                    <button 
                        disabled
                        className="w-full bg-gray-100 text-gray-500 font-bold py-3 rounded cursor-not-allowed flex items-center justify-center gap-2 border border-gray-200"
                    >
                        <CheckCircle size={20} className="text-green-500" />
                        Already Enrolled
                    </button>
                ) : (
                    <button 
                        onClick={handleEnroll}
                        disabled={isEnrolling}
                        className={`w-full text-white font-bold py-3 rounded transition-colors shadow-sm flex items-center justify-center gap-2
                            ${isEnrolling ? "bg-emerald-400 cursor-not-allowed" : "bg-[#10b981] hover:bg-[#059669]"}
                        `}
                    >
                        {isEnrolling ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                Processing...
                            </>
                        ) : (
                            "Enroll Now"
                        )}
                    </button>
                )}
        </div>
      </div>

      <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
          <div className="text-gray-600 leading-relaxed text-sm">
              {course.description || "No description provided."}
          </div>
      </div>

      <div className="flex flex-col gap-3">
        {course.chapters && course.chapters.length > 0 ? (
            course.chapters.map((chapter: Chapter) => (
                <div key={chapter.id} className="border border-[#e5e5e5] rounded-xl overflow-hidden bg-white shadow-sm">
                    <button 
                        onClick={() => toggleChapter(chapter.id)}
                        className="w-full px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-[15px] text-gray-800 text-left">
                                {chapter.title}
                            </span>
                            <span className="text-xs text-gray-400 font-normal">
                                ({chapter.sections ? chapter.sections.length : 0} lectures)
                            </span>
                        </div>
                        {expandedChapter === chapter.id ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                    </button>

                    {expandedChapter === chapter.id && (
                        <div className="border-t border-[#f0f0f0] bg-[#fcfcfc]">
                            {chapter.summary && (
                                <div className="px-5 py-3 text-xs text-gray-500 italic border-b border-[#f0f0f0]">
                                    {chapter.summary}
                                </div>
                            )}

                            <div className="flex flex-col">
                                {chapter.sections && chapter.sections.length > 0 ? (
                                    chapter.sections.map((section: Section) => (
                                        <div 
                                            key={section.id} 
                                            className="px-5 py-3 flex items-start gap-3 hover:bg-gray-100 transition-colors cursor-pointer border-b border-[#f0f0f0] last:border-0"
                                        >
                                            <div className="mt-1 shrink-0">
                                                {renderSectionIcon()}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-700 font-medium">
                                                    {section.name}
                                                </p>
                                                {section.text && (
                                                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                                                        {section.text}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-5 py-4 text-xs text-gray-400 text-center">
                                        No lessons updated yet.
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ))
        ) : (
            <div className="text-gray-500 italic">No chapters available.</div>
        )}
    </div>

    </div>
  );
};

export default CourseEnroll;