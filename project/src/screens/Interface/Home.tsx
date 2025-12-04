import { MoreHorizontal } from "lucide-react";

const recentCourses = [
  { id: 1, name: "Course 1", progress: 40 },
  { id: 2, name: "Course 2", progress: 60 },
  { id: 3, name: "Course 3", progress: 30 },
];

const suggestedCourses = [
  { 
    id: 1, 
    name: "Course Name", 
    description: "Description", 
    tags: ["Topic 1", "Topic 2", "Topic 3"] 
  },
  { 
    id: 2, 
    name: "Course Name", 
    description: "Description", 
    tags: ["Topic 1", "Topic 2", "Topic 3"] 
  },
  { 
    id: 3, 
    name: "Course Name", 
    description: "Description", 
    tags: ["Topic 1", "Topic 2", "Topic 3"] 
  },
  { 
    id: 4, 
    name: "Course Name", 
    description: "Description", 
    tags: ["Topic 1", "Topic 2", "Topic 3"] 
  },
];

const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full h-full bg-white px-10 py-6 overflow-hidden">
      
      <div className="flex justify-center">
        <h1 className="text-xl font-bold text-black mt-2">Welcome back, John!</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-[1400px] mx-auto h-full mt-4">
        
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold text-black">Recent courses</h2>
          
          <div className="flex flex-col gap-6">
            {recentCourses.map((course) => (
              <div 
                key={course.id} 
                className="border border-[#e7e7e8] rounded-lg p-6 flex flex-col gap-4 shadow-sm"
              >
                <h3 className="font-semibold text-lg">{course.name}</h3>
                
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-[#e7e7e8] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#0088ff] rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  
                  <button className="bg-[#2c2c2c] text-white text-sm px-6 py-1.5 rounded hover:bg-black transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 h-full overflow-hidden">
          <h2 className="text-lg font-bold text-black">More courses to try!</h2>
          
          <div className="flex flex-col gap-6 overflow-y-auto pr-2 pb-10 custom-scrollbar max-h-[600px]">
            {suggestedCourses.map((course) => (
              <div 
                key={course.id} 
                className="border border-[#e7e7e8] rounded-lg p-6 flex flex-col gap-2 shadow-sm relative group hover:border-gray-300 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{course.name}</h3>
                    <p className="text-gray-500 text-sm">{course.description}</p>
                  </div>
                  <button className="text-black hover:bg-gray-100 p-1 rounded">
                     <MoreHorizontal size={20} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  {course.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-[#2c2c2c] text-white text-xs px-3 py-1 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  <MoreHorizontal size={16} className="text-black ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;