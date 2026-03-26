import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    initials: 'AK',
    name: 'Ama Kusi',
    role: 'Founder, AgriConnect Ghana · Mest Cohort 14',
    avatarColor: 'bg-blue-600',
    quote:
      "I used to spend 2 hours every Sunday writing posts I'd never publish because I'd run out of time. With VoicePost, I record a voice note during my morning walk and by evening my LinkedIn, X, and Substack are updated. It's changed how I think about my personal brand.",
  },
  {
    initials: 'KO',
    name: 'Kofi Owusu',
    role: 'CEO, PayLite · Mest Cohort 12',
    avatarColor: 'bg-orange-500',
    quote:
      "The thing that surprised me most is how well it captures my voice. It doesn't sound like a robot wrote it — it sounds like me, just more polished. Investors have actually commented on how consistently I show up online now.",
  },
  {
    initials: 'AB',
    name: 'Abena Boateng',
    role: 'Co-founder, HealthTrack · Mest Cohort 15',
    avatarColor: 'bg-green-600',
    quote:
      "As a non-native English speaker building an international startup, the writing barrier was real. VoicePost removes it completely. I speak my ideas in French, it comes back in perfect professional English — or both if I want. Game changer.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Mest entrepreneurs are saying
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Real founders. Real results. Real time saved.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="h-full flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 ${t.avatarColor}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
