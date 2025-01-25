// types.ts
export interface Lecture {
  id: number;
  title: string;
  date: string; // You can use Date type if you prefer
  slidesLink?: string;
  recordingLink?: string;
}

export interface LectureGroup {
  title?: string; // Optional group title (e.g., "Weeks 1-4")
  lectures: Lecture[];
}
