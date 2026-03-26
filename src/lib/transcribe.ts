import OpenAI from 'openai';

/**
 * Transcribes an audio file using OpenAI Whisper.
 * Supports mp3, mp4, mpeg, mpga, m4a, wav, webm — all common WhatsApp voice note formats.
 */
export async function transcribeAudio(audioFile: File): Promise<string> {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const transcription = await client.audio.transcriptions.create({
    file: audioFile,
    model: 'whisper-1',
    // language omitted → Whisper auto-detects (handles FR and EN)
  });

  return transcription.text;
}
