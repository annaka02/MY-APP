import { transcribeAudio } from '@/lib/transcribe';
import { generatePosts } from '@/lib/generate-posts';

// Allow large audio files (up to 25 MB — Whisper API limit)
export const maxDuration = 60; // seconds

export async function POST(request: Request) {
  try {
    // ── 1. Parse form data ──────────────────────────────────────────────
    const formData = await request.formData();
    const audioFile = formData.get('audio') as File | null;

    if (!audioFile) {
      return Response.json(
        { error: 'No audio file provided. Send a file under the "audio" key.' },
        { status: 400 },
      );
    }

    const supportedTypes = [
      'audio/mpeg', 'audio/mp4', 'audio/wav', 'audio/webm',
      'audio/ogg', 'audio/m4a', 'audio/x-m4a',
    ];
    if (!supportedTypes.some(t => audioFile.type.startsWith(t.split('/')[0]))) {
      // Be lenient — just log and proceed; Whisper handles the validation
      console.warn(`[VoicePost] Unrecognised MIME type: ${audioFile.type}`);
    }

    // ── 2. Transcribe with Whisper ──────────────────────────────────────
    console.log(`[VoicePost] Transcribing "${audioFile.name}" (${(audioFile.size / 1024).toFixed(0)} KB)`);
    const transcript = await transcribeAudio(audioFile);
    console.log(`[VoicePost] Transcript (${transcript.length} chars):`, transcript.slice(0, 120), '...');

    // ── 3. Generate posts with Claude ───────────────────────────────────
    console.log('[VoicePost] Generating posts with Claude Opus 4.6...');
    const posts = await generatePosts(transcript);
    console.log('[VoicePost] Posts generated successfully.');

    // ── 4. Return result ────────────────────────────────────────────────
    // TODO: Replace this return with a call to your n8n webhook when ready:
    // await fetch(process.env.N8N_WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ transcript, posts, userId: ... }),
    // });

    return Response.json({ success: true, transcript, posts });
  } catch (error) {
    console.error('[VoicePost] Pipeline error:', error);

    const message =
      error instanceof Error ? error.message : 'An unexpected error occurred.';

    return Response.json({ error: message }, { status: 500 });
  }
}
