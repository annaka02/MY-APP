// Shared types — imported by both server lib and client components.
// Keep this file free of any server-only imports.

export interface LinkedInPost {
  post: string;
  hashtags: string[]; // without the # symbol
}

export interface XThread {
  thread: string[]; // 3-5 tweets, each ≤ 280 chars
}

export interface SubstackPost {
  title: string;
  content: string; // Markdown
}

export interface GeneratedPosts {
  linkedin: LinkedInPost;
  x: XThread;
  substack: SubstackPost;
}

export interface ProcessVoiceResponse {
  success: true;
  transcript: string;
  posts: GeneratedPosts;
}

export interface ProcessVoiceError {
  success?: false;
  error: string;
}
