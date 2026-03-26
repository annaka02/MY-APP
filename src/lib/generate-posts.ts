import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import type { GeneratedPosts } from '@/lib/types';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ---------------------------------------------------------------------------
// Zod schema — enforces structured output from Claude
// ---------------------------------------------------------------------------

const PostsSchema = z.object({
  linkedin: z.object({
    post: z.string(),
    hashtags: z.array(z.string()),
  }),
  x: z.object({
    thread: z.array(z.string()),
  }),
  substack: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

// ---------------------------------------------------------------------------
// System prompt
// ---------------------------------------------------------------------------

const SYSTEM_PROMPT = `You are VoicePost AI — an expert content creator who turns raw entrepreneur voice note transcripts into polished, platform-native social media posts.

Your job:
1. Extract the core insight, story, or idea from the transcript.
2. Preserve the speaker's authentic voice — this must sound like a person, not a PR department.
3. Generate three posts, each optimised for its platform.

Platform specifications:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LINKEDIN
• 150–300 words, professional storytelling
• First-person, conversational but polished
• Ends with a question or clear call-to-action
• 5–8 relevant hashtags (return as plain words, no # symbol)

X (TWITTER) THREAD
• 3–5 tweets forming a coherent thread
• Tweet 1: bold hook that stops the scroll
• Tweets 2–4: expand the idea with one point each
• Last tweet: CTA (follow, comment, share, or link)
• Each tweet must be ≤280 characters (strictly enforced)

SUBSTACK ARTICLE
• Compelling 5–8 word title
• 300–500 words of narrative prose
• Well-structured: hook → story → insight → takeaway
• Short paragraphs, plain Markdown (bold with **, no H1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Context: The speakers are tech startup founders from Mest Africa (Ghana-based accelerator). Their audience includes investors, fellow founders, customers, and aspiring entrepreneurs. Content should feel grounded in the African startup ecosystem without being stereotypical.

Language: If the transcript is in French, write the posts in English (unless the user specifies otherwise).`;

// ---------------------------------------------------------------------------
// Main function
// ---------------------------------------------------------------------------

export async function generatePosts(transcript: string): Promise<GeneratedPosts> {
  const response = await client.messages.parse({
    model: 'claude-opus-4-6',
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: `Voice note transcript:\n\n${transcript}`,
      },
    ],
    output_config: {
      format: zodOutputFormat(PostsSchema),
    },
  });

  if (!response.parsed_output) {
    throw new Error('Claude returned an empty response. Please try again.');
  }

  // Cast is safe: PostsSchema matches GeneratedPosts shape exactly
  return response.parsed_output as GeneratedPosts;
}
