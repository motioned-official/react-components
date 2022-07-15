export interface MotionedSEOComponentProps {
  title: {
    subString?: string;
    default: string;
    joinBy?: string;
  };
  meta?: {
    keywords?: {
      words: string[];
      joinBy: string;
    };
    description?: string;
  };
  children: React.ReactNode;
}
