import { type Variants, motion } from "motion/react";

const routineSteps = [
  {
    time: "6:00 AM",
    activity: "Wake Up Early",
    emoji: "☀️",
    description:
      "Rise and shine! Starting your day early gives you more time for everything.",
    color: "bg-yellow-100",
    border: "border-yellow-300",
    dot: "bg-yellow-400",
    textColor: "text-yellow-800",
  },
  {
    time: "6:30 AM",
    activity: "Morning Stretch & Exercise",
    emoji: "🤸",
    description:
      "Do simple stretches and jumping jacks to wake your muscles up and feel energized!",
    color: "bg-green-100",
    border: "border-green-300",
    dot: "bg-green-400",
    textColor: "text-green-800",
  },
  {
    time: "7:00 AM",
    activity: "Healthy Breakfast",
    emoji: "🥣",
    description:
      "Never skip breakfast! Eat oatmeal, eggs, fruit, or whole grain toast to power your brain.",
    color: "bg-orange-100",
    border: "border-orange-300",
    dot: "bg-orange-400",
    textColor: "text-orange-800",
  },
  {
    time: "8:00 AM",
    activity: "Go to School",
    emoji: "🎒",
    description:
      "Head to school ready to learn, make friends, and achieve great things today!",
    color: "bg-blue-100",
    border: "border-blue-300",
    dot: "bg-blue-400",
    textColor: "text-blue-800",
  },
  {
    time: "12:30 PM",
    activity: "Nutritious Lunch",
    emoji: "🍱",
    description:
      "Enjoy a balanced lunch with veggies, proteins, and grains. Refuel your body midday!",
    color: "bg-teal-100",
    border: "border-teal-300",
    dot: "bg-teal-400",
    textColor: "text-teal-800",
  },
  {
    time: "3:30 PM",
    activity: "After-School Play",
    emoji: "🏃",
    description:
      "Run, jump, and play outside! Physical activity after school boosts mood and energy.",
    color: "bg-lime-100",
    border: "border-lime-300",
    dot: "bg-lime-500",
    textColor: "text-lime-800",
  },
  {
    time: "5:00 PM",
    activity: "Study Time",
    emoji: "📖",
    description:
      "Focus on homework and reading. Short, focused study sessions with breaks work best!",
    color: "bg-purple-100",
    border: "border-purple-300",
    dot: "bg-purple-400",
    textColor: "text-purple-800",
  },
  {
    time: "7:00 PM",
    activity: "Family Dinner",
    emoji: "🍽️",
    description:
      "Share a healthy dinner with your family. Talk, laugh, and enjoy the meal together!",
    color: "bg-red-100",
    border: "border-red-300",
    dot: "bg-red-400",
    textColor: "text-red-800",
  },
  {
    time: "8:00 PM",
    activity: "Wind Down — Reading or Calm Activities",
    emoji: "📚",
    description:
      "Put away screens. Read a book, draw, or do gentle activities to help your mind relax.",
    color: "bg-indigo-100",
    border: "border-indigo-300",
    dot: "bg-indigo-400",
    textColor: "text-indigo-800",
  },
  {
    time: "9:00 PM",
    activity: "Bedtime — Get 8–10 Hours of Sleep",
    emoji: "😴",
    description:
      "Time to sleep! Your body and brain grow and repair while you rest. Sweet dreams! 🌙",
    color: "bg-sky-100",
    border: "border-sky-300",
    dot: "bg-sky-400",
    textColor: "text-sky-800",
  },
];

const benefits = [
  {
    emoji: "🎯",
    title: "Better Focus",
    description:
      "A consistent routine helps your brain know what to expect, so you can concentrate better in school and at home.",
    color: "bg-blue-50 border-blue-200",
    titleColor: "text-blue-700",
  },
  {
    emoji: "🌙",
    title: "Better Sleep",
    description:
      "Going to bed at the same time every night trains your body clock and helps you fall asleep faster and wake up refreshed!",
    color: "bg-purple-50 border-purple-200",
    titleColor: "text-purple-700",
  },
  {
    emoji: "💪",
    title: "More Productive",
    description:
      "With a good routine, you fit in exercise, study, play, AND rest — so nothing important gets missed!",
    color: "bg-green-50 border-green-200",
    titleColor: "text-green-700",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const benefitVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function RoutinePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-routine-gradient py-12 md:py-16 relative overflow-hidden">
        <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 rounded-full bg-orange-200/30 blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-7xl mb-4">📅</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-orange-900 mb-3">
              Daily Routine Tips
            </h1>
            <p className="text-xl text-orange-800 max-w-2xl mx-auto">
              Build healthy habits by following a great daily schedule! ⏰
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
            src="/assets/generated/daily-routine.dim_900x400.png"
            alt="Daily routine for healthy students"
            className="w-full h-auto object-cover max-h-64 md:max-h-[360px]"
          />
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              A Perfect Day for a Healthy Student 🌟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow this timeline to make the most of every day!
            </p>
          </motion.div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-300 via-green-300 to-sky-300 rounded-full hidden sm:block" />

            <div className="flex flex-col gap-5">
              {routineSteps.map((step, index) => (
                <motion.div
                  key={step.time}
                  variants={itemVariants}
                  data-ocid={`routine.step.${index + 1}`}
                  className="relative flex items-start gap-5 sm:gap-6"
                >
                  {/* Dot on timeline */}
                  <div
                    className={`hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full ${step.dot} items-center justify-center text-xl shadow-md z-10`}
                  >
                    {step.emoji}
                  </div>

                  {/* Card */}
                  <div
                    className={`card-hover flex-1 rounded-2xl border-2 ${step.color} ${step.border} p-4 sm:p-5`}
                  >
                    <div className="flex items-start gap-3 flex-wrap">
                      <span className="sm:hidden text-3xl">{step.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <span
                            className={`font-bold text-sm px-3 py-1 rounded-full ${step.color} border ${step.border} ${step.textColor}`}
                          >
                            ⏰ {step.time}
                          </span>
                        </div>
                        <h3
                          className={`font-display text-xl font-bold mb-1 ${step.textColor}`}
                        >
                          {step.activity}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Routine Matters */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Why Routine Matters 📌
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building good habits now creates a strong foundation for your
              whole life!
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={benefitVariants}
                data-ocid={`routine.benefits.card.${index + 1}`}
                className={`card-hover rounded-3xl p-6 border-2 ${benefit.color} text-center`}
              >
                <div className="text-5xl mb-4">{benefit.emoji}</div>
                <h3
                  className={`font-display text-xl font-bold mb-3 ${benefit.titleColor}`}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display text-2xl sm:text-3xl font-bold text-white">
            🌅 Start Tomorrow!
          </p>
          <p className="text-orange-100 text-xl mt-3">
            A healthy routine doesn't happen overnight — but every day you stick
            to it, you're building a healthier, happier YOU! 🌟
          </p>
        </div>
      </section>
    </div>
  );
}
