import api from './api';

interface UserDto {
  id: number;
  username: string;
  role: string;
}

interface AuthResponse {
  code: number;
  result: {
    accessToken: string;
    refreshToken: string;
    userDto: UserDto;
  };
  message?: string;
}

export const loginAPI = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/iam-service/auth/authenticate', {
    username,
    password,
  });
  return response.data;
};

export const registerAPI = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const payload = { ...data, roleId: 4 };
  
  const response = await api.post<AuthResponse>('/iam-service/auth/register', payload);
  return response.data;
};
export interface Section {
  id: number;
  name: string;
  text: string | null;
  orderIndex: number;
}
export interface Chapter {
  id: number;
  title: string;
  summary: string;
  orderIndex: number;
  sections: Section[];
}
export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnailFileId: number | null;
  chapters: Chapter[]; 
}

export interface EnrolledCourse extends Course {
  progress?: number; 
}

export const getAllCourses = async () => {
  const response = await api.get<{ result: Course[] }>('/course-service/courses');
  return response.data.result;
};
export const getCourseById = async (courseId: number) => {
  const response = await api.get<{ result: Course }>(`/course-service/courses/${courseId}`);
  return response.data.result;
};

export const getEnrolledCourses = async (studentId: number) => {
  const response = await api.get<{ result: Course[] }>(`/course-service/enroll/student/${studentId}`);
  return response.data.result;
};

export const getCourseProgress = async (studentId: number, courseId: number) => {
  const response = await api.get<{ result: number }>(`/course-service/progress/student/${studentId}/course/${courseId}`);
  return response.data.result;
};

