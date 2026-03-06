import { Badge } from "@/components/ui/badge";
import { type Variants, motion } from "motion/react";

const exercises = [
  {
    emoji: "🤸",
    title: "Stretching",
    description:
      "Stretch your arms and legs every morning! Hold each stretch for 10 seconds. Great for flexibility and preventing injuries.",
    duration: "5–10 mins",
    level: "Easy",
    color: "bg-yellow-50",
    border: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    headerBg: "bg-gradient-to-br from-yellow-400 to-orange-400",
  },
  {
    emoji: "🏃",
    title: "Running",
    description:
      "Run around the field for 10–15 minutes. Start slow and pick up speed gradually. Builds amazing stamina and strong legs!",
    duration: "10–15 mins",
    level: "Medium",
    color: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    headerBg: "bg-gradient-to-br from-blue-400 to-sky-500",
  },
  {
    emoji: "🪢",
    title: "Skipping",
    description:
      "Jump rope for 5 minutes. Count your jumps and try to beat your record each day! Great for coordination and cardio.",
    duration: "5 mins",
    level: "Easy",
    color: "bg-pink-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-700",
    headerBg: "bg-gradient-to-br from-pink-400 to-rose-400",
  },
  {
    emoji: "⚽",
    title: "Playing Sports",
    description:
      "Join a team game like soccer or basketball. Fun and great for teamwork, strategy, and keeping your whole body active!",
    duration: "30+ mins",
    level: "Any level",
    color: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    headerBg: "bg-gradient-to-br from-green-400 to-emerald-500",
  },
  {
    emoji: "⭐",
    title: "Jumping Jacks",
    description:
      "Do 20 jumping jacks in a row. Stand tall, jump and spread arms and legs wide, then jump back. Great warm-up exercise!",
    duration: "2–3 mins",
    level: "Easy",
    color: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    headerBg: "bg-gradient-to-br from-orange-400 to-amber-400",
  },
  {
    emoji: "🧘",
    title: "Yoga",
    description:
      "Try simple yoga poses like tree pose or downward dog. Helps with balance, flexibility, and calm focus for school!",
    duration: "10–15 mins",
    level: "Easy",
    color: "bg-purple-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    headerBg: "bg-gradient-to-br from-purple-400 to-violet-500",
  },
];

const tips = [
  {
    emoji: "💧",
    title: "Stay Hydrated",
    description:
      "Drink water before, during, and after exercise. Your muscles need water to work their best!",
    color: "bg-blue-50 border-blue-200",
    titleColor: "text-blue-700",
  },
  {
    emoji: "⏱️",
    title: "Start Slow",
    description:
      "Always warm up before intense exercise and cool down afterwards. Your body will thank you!",
    color: "bg-green-50 border-green-200",
    titleColor: "text-green-700",
  },
  {
    emoji: "🎉",
    title: "Make it Fun",
    description:
      "Exercise with friends or listen to music to make it more enjoyable. Fun exercise = more exercise!",
    color: "bg-pink-50 border-pink-200",
    titleColor: "text-pink-700",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ExercisePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-exercise-gradient py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-[-40px] left-[-40px] w-48 h-48 rounded-full bg-sky-300/25 blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-7xl mb-4">🏃</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-blue-900 mb-3">
              Exercise & Fitness
            </h1>
            <p className="text-xl text-blue-800 max-w-2xl mx-auto">
              Move your body, build your strength, and have loads of fun! 💪
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
            src="/assets/generated/exercise-kids.dim_800x500.png"
            alt="Kids exercising and playing sports"
            className="w-full h-auto object-cover max-h-80 md:max-h-[420px]"
          />
        </motion.div>
      </section>

      {/* Exercises Grid */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Fun Exercises for Students 🌟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick your favorite and try it today! Even 10 minutes makes a big
              difference.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.title}
                variants={itemVariants}
                data-ocid={`exercise.card.${index + 1}`}
                className={`card-hover rounded-3xl border-2 ${exercise.color} ${exercise.border} overflow-hidden`}
              >
                <div
                  className={`${exercise.headerBg} p-6 flex flex-col items-center text-center`}
                >
                  <div className="text-6xl mb-2">{exercise.emoji}</div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {exercise.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {exercise.description}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${exercise.badge}`}
                    >
                      ⏱️ {exercise.duration}
                    </span>
                    <Badge className="bg-white text-gray-600 border border-gray-200 text-xs font-semibold">
                      Step-by-step
                    </Badge>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${exercise.badge}`}
                    >
                      🎯 {exercise.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Exercise Tips */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Exercise Tips 💡
            </h2>
            <p className="text-lg text-muted-foreground">
              Keep these in mind to stay safe and get the most out of your
              workouts!
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                variants={itemVariants}
                data-ocid={`exercise.tips.item.${index + 1}`}
                className={`card-hover rounded-3xl p-6 border-2 ${tip.color} text-center`}
              >
                <div className="text-5xl mb-3">{tip.emoji}</div>
                <h3
                  className={`font-display text-xl font-bold mb-2 ${tip.titleColor}`}
                >
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Motivation banner */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display text-2xl sm:text-3xl font-bold text-white">
            🏆 Challenge Yourself!
          </p>
          <p className="text-blue-100 text-xl mt-3">
            Try to get at least 60 minutes of physical activity every day. Even
            a walk counts — every move makes you stronger! 💪
          </p>
        </div>
      </section>
    </div>
  );
}
