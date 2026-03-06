import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type Variants, motion } from "motion/react";

const benefits = [
  {
    emoji: "⚡",
    title: "More Energy",
    description:
      "Eating well and exercising gives you tons of energy to play, learn, and have fun all day long!",
    color: "bg-yellow-100",
    border: "border-yellow-300",
    textColor: "text-yellow-700",
  },
  {
    emoji: "🧠",
    title: "Better Focus",
    description:
      "A healthy brain helps you concentrate in class, remember things faster, and do better in school!",
    color: "bg-blue-100",
    border: "border-blue-300",
    textColor: "text-blue-700",
  },
  {
    emoji: "😊",
    title: "Feel Happier",
    description:
      "Healthy habits boost your mood and help you feel positive, confident, and ready for anything!",
    color: "bg-pink-100",
    border: "border-pink-300",
    textColor: "text-pink-700",
  },
];

const topics = [
  {
    emoji: "🍎",
    title: "Healthy Food",
    description:
      "Discover yummy fruits, veggies, and balanced meals that fuel your body!",
    path: "/food",
    color: "from-green-400 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    emoji: "🏃",
    title: "Exercise & Fitness",
    description:
      "Fun activities and exercises to keep you strong, fast, and energetic!",
    path: "/exercise",
    color: "from-blue-400 to-sky-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    emoji: "💆",
    title: "Mental Well-Being",
    description:
      "Learn to relax, manage stress, and keep your mind happy and calm!",
    path: "/mental",
    color: "from-purple-400 to-violet-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    emoji: "📅",
    title: "Daily Routine",
    description:
      "Build great habits with a fun daily schedule for a balanced, healthy life!",
    path: "/routine",
    color: "from-orange-400 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-60px] right-[-60px] w-64 h-64 rounded-full bg-yellow-300/30 blur-2xl pointer-events-none" />
        <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 rounded-full bg-green-300/30 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-green-700">
                <span>🌱</span> Made for Students & Young Learners
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900 leading-tight mb-4">
                Welcome to{" "}
                <span className="gradient-text-brand">Healthy Living!</span> 🌈
              </h1>
              <p className="text-xl text-green-800 leading-relaxed mb-8 font-body">
                Your guide to feeling great, staying strong, and being happy
                every day! Learn about food, fitness, mental health, and good
                daily habits. 🌟
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/food">
                  <Button
                    data-ocid="home.get_started.primary_button"
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white rounded-2xl text-lg px-8 py-3 h-auto font-bold shadow-fun transition-all duration-200 hover:scale-105"
                  >
                    🚀 Get Started
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    data-ocid="home.learn_more.secondary_button"
                    size="lg"
                    variant="outline"
                    className="border-2 border-green-600 text-green-700 rounded-2xl text-lg px-8 py-3 h-auto font-bold bg-white/80 hover:bg-green-50 transition-all duration-200 hover:scale-105"
                    onClick={() =>
                      document
                        .getElementById("why-healthy")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    💡 Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/generated/hero-kids.dim_900x500.png"
                  alt="Happy kids doing healthy activities"
                  className="w-full h-auto object-cover"
                />
                {/* Decorative badge */}
                <div className="absolute top-4 right-4 bg-white rounded-2xl px-3 py-2 shadow-md text-sm font-bold text-green-700">
                  🎉 Start Today!
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Healthy Living Matters */}
      <section id="why-healthy" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Why Healthy Living Matters ✨
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Taking care of your body and mind helps you grow stronger,
              smarter, and happier!
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
                variants={itemVariants}
                data-ocid={`home.benefits.card.${index + 1}`}
                className={`card-hover rounded-3xl p-8 border-2 ${benefit.color} ${benefit.border} text-center`}
              >
                <div className="text-6xl mb-4">{benefit.emoji}</div>
                <h3
                  className={`font-display text-2xl font-bold mb-3 ${benefit.textColor}`}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explore Topics */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Explore Our Topics 🗺️
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into each section and discover fun tips, activities, and
              advice!
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                variants={itemVariants}
                data-ocid={`home.explore.card.${index + 1}`}
                className={`card-hover rounded-3xl border-2 ${topic.bg} ${topic.border} overflow-hidden group`}
              >
                <div className={`h-2 bg-gradient-to-r ${topic.color}`} />
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {topic.emoji}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-800 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {topic.description}
                  </p>
                  <Link to={topic.path}>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${topic.color} text-white rounded-xl font-bold w-full hover:opacity-90 transition-opacity`}
                    >
                      Explore <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Healthy Journey? 🚀
            </h2>
            <p className="text-green-100 text-xl mb-8">
              Every healthy choice you make today builds a better, stronger you
              tomorrow!
            </p>
            <Link to="/food">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 rounded-2xl text-lg px-10 py-4 h-auto font-bold shadow-lg transition-all duration-200 hover:scale-105"
              >
                🌟 Start with Healthy Food
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
