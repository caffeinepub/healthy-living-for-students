import { type Variants, motion } from "motion/react";

const topics = [
  {
    emoji: "🌬️",
    title: "Relax & Breathe",
    description:
      "When you feel stressed, take 3 deep breaths. Breathe in for 4 counts, hold for 4, out for 4. This calms your nervous system instantly!",
    steps: [
      "Breathe in for 4 counts",
      "Hold for 4 counts",
      "Breathe out for 4 counts",
    ],
    color: "bg-sky-50",
    border: "border-sky-200",
    headerBg: "bg-gradient-to-br from-sky-400 to-blue-400",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    emoji: "👫",
    title: "Talk to Friends",
    description:
      "Sharing your feelings with a trusted friend or adult makes you feel so much better. Never keep your worries to yourself — talking helps!",
    steps: [
      "Find a trusted person",
      "Share how you feel",
      "Listen to their support",
    ],
    color: "bg-pink-50",
    border: "border-pink-200",
    headerBg: "bg-gradient-to-br from-pink-400 to-rose-400",
    badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    emoji: "📚",
    title: "Manage Stress",
    description:
      "Break big tasks into small steps. Take short breaks when studying to keep your mind fresh. A 5-minute break every 30 minutes helps a lot!",
    steps: [
      "Break work into small chunks",
      "Take 5-min breaks often",
      "Celebrate small wins!",
    ],
    color: "bg-purple-50",
    border: "border-purple-200",
    headerBg: "bg-gradient-to-br from-purple-400 to-violet-500",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "😴",
    title: "Sleep Well",
    description:
      "Get 8–10 hours of sleep each night. A good bedtime routine — no screens, warm milk, relaxing reading — helps your brain recharge for the day!",
    steps: [
      "No screens 1 hour before bed",
      "Relax with reading or music",
      "Sleep at same time each night",
    ],
    color: "bg-indigo-50",
    border: "border-indigo-200",
    headerBg: "bg-gradient-to-br from-indigo-400 to-blue-500",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
];

const mindfulnessTips = [
  {
    emoji: "☀️",
    text: "Start each day by thinking of 3 things you're grateful for",
  },
  {
    emoji: "🎨",
    text: "Do something creative like drawing or writing to express your feelings",
  },
  {
    emoji: "🌳",
    text: "Spend time in nature — even a short walk outside helps reset your mind",
  },
  {
    emoji: "📵",
    text: "Take breaks from screens and social media to protect your mental energy",
  },
  {
    emoji: "🤗",
    text: "Be kind to yourself — everyone makes mistakes and that's perfectly okay!",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function MentalPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-mental-gradient py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-purple-200/30 blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-7xl mb-4">💆</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-purple-900 mb-3">
              Mental Well-Being
            </h1>
            <p className="text-xl text-purple-800 max-w-2xl mx-auto">
              Take care of your mind and emotions — you are wonderfully made! 💛
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src="/assets/generated/mental-wellbeing.dim_800x500.png"
            alt="Children in calm, peaceful activities"
            className="w-full h-auto object-cover max-h-80 md:max-h-[420px]"
          />
        </motion.div>
      </section>

      {/* Topic Cards */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Feeling Good Inside 🌸
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your mind is just as important as your body. Here's how to keep it
              healthy and happy!
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                variants={itemVariants}
                data-ocid={`mental.topic.card.${index + 1}`}
                className={`card-hover rounded-3xl border-2 ${topic.color} ${topic.border} overflow-hidden`}
              >
                <div
                  className={`${topic.headerBg} p-5 flex items-center gap-4`}
                >
                  <span className="text-5xl">{topic.emoji}</span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {topic.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-base leading-relaxed mb-5">
                    {topic.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {topic.steps.map((step, si) => (
                      <div
                        key={step}
                        className={`flex items-center gap-3 ${topic.badgeColor} rounded-xl px-4 py-2`}
                      >
                        <span className="font-bold text-sm w-5 h-5 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0">
                          {si + 1}
                        </span>
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Calming Quote */}
      <section className="py-14 bg-gradient-to-r from-purple-100 to-indigo-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-10 shadow-card border-2 border-purple-100"
          >
            <div className="text-5xl mb-6">💛</div>
            <blockquote className="font-display text-2xl sm:text-3xl font-bold text-purple-800 leading-relaxed">
              "You are strong, capable, and loved.
              <br />
              One step at a time!"
            </blockquote>
            <p className="text-purple-500 mt-4 text-base font-semibold">
              — Remember this every day 🌟
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mindfulness Tips */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Daily Mindfulness Tips 🌙
            </h2>
            <p className="text-lg text-muted-foreground">
              Small habits that make a huge difference to your mental
              well-being!
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mindfulnessTips.map((tip, index) => (
              <motion.div
                key={tip.text}
                variants={itemVariants}
                data-ocid={`mental.tips.item.${index + 1}`}
                className="card-hover flex items-center gap-5 bg-white rounded-2xl p-5 border-2 border-purple-100 shadow-card"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                  {tip.emoji}
                </div>
                <p className="text-gray-800 text-lg font-semibold leading-relaxed">
                  {tip.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
