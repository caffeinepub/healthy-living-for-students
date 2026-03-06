import { type Variants, motion } from "motion/react";

const categories = [
  {
    emoji: "🍓",
    title: "Fruits",
    description:
      "Apples, bananas, oranges, strawberries — sweet, delicious and full of vitamins! Fruits give your body natural sugars for quick energy.",
    examples: ["🍎 Apples", "🍌 Bananas", "🍊 Oranges", "🍓 Strawberries"],
    color: "bg-red-50",
    border: "border-red-200",
    headerColor: "bg-gradient-to-r from-red-400 to-orange-400",
    badgeColor: "bg-red-100 text-red-700",
    titleColor: "text-red-700",
  },
  {
    emoji: "🥦",
    title: "Vegetables",
    description:
      "Broccoli, carrots, spinach — eat your greens for strong muscles! Vegetables are packed with vitamins and minerals your body needs.",
    examples: ["🥦 Broccoli", "🥕 Carrots", "🥬 Spinach", "🌽 Corn"],
    color: "bg-green-50",
    border: "border-green-200",
    headerColor: "bg-gradient-to-r from-green-400 to-emerald-500",
    badgeColor: "bg-green-100 text-green-700",
    titleColor: "text-green-700",
  },
  {
    emoji: "🥛",
    title: "Dairy",
    description:
      "Milk, yogurt, cheese — great for strong bones and teeth! Dairy products are rich in calcium and protein for growing bodies.",
    examples: ["🥛 Milk", "🧀 Cheese", "🍦 Yogurt", "🧈 Butter"],
    color: "bg-blue-50",
    border: "border-blue-200",
    headerColor: "bg-gradient-to-r from-blue-400 to-sky-400",
    badgeColor: "bg-blue-100 text-blue-700",
    titleColor: "text-blue-700",
  },
  {
    emoji: "🍽️",
    title: "Balanced Meals",
    description:
      "Mix proteins, grains, and veggies for a complete healthy meal! A balanced plate gives your body everything it needs to thrive.",
    examples: ["🥩 Proteins", "🍚 Grains", "🥗 Veggies", "🫘 Legumes"],
    color: "bg-orange-50",
    border: "border-orange-200",
    headerColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    badgeColor: "bg-orange-100 text-orange-700",
    titleColor: "text-orange-700",
  },
];

const tips = [
  {
    emoji: "🧠",
    text: "Eat breakfast every day — it powers your brain!",
  },
  {
    emoji: "💧",
    text: "Drink 8 glasses of water daily",
  },
  {
    emoji: "🍇",
    text: "Choose fruit over candy for snacks",
  },
  {
    emoji: "🌈",
    text: "Eat colorful vegetables with every meal",
  },
  {
    emoji: "🚫",
    text: "Avoid too much junk food and sugary drinks",
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

export default function FoodPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-food-gradient py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-yellow-300/25 blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-7xl mb-4">🍎</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-green-900 mb-3">
              Healthy Food
            </h1>
            <p className="text-xl text-green-800 max-w-2xl mx-auto">
              Discover delicious, nutritious foods that fuel your body and mind!
              🌿
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
            src="/assets/generated/healthy-foods.dim_800x500.png"
            alt="Colorful healthy foods"
            className="w-full h-auto object-cover max-h-80 md:max-h-[420px]"
          />
        </motion.div>
      </section>

      {/* Food Categories */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Food Groups 🍽️
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our food is divided into groups — each one gives our bodies
              different superpowers!
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                data-ocid={`food.category.card.${index + 1}`}
                className={`card-hover rounded-3xl border-2 ${cat.color} ${cat.border} overflow-hidden`}
              >
                <div
                  className={`${cat.headerColor} py-4 px-6 flex items-center gap-3`}
                >
                  <span className="text-5xl">{cat.emoji}</span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {cat.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-base leading-relaxed mb-5">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((example) => (
                      <span
                        key={example}
                        className={`px-3 py-1.5 rounded-full text-sm font-semibold ${cat.badgeColor}`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Food Tips */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Food Tips for Students 📚
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple rules to eat smarter every single day!
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tips.map((tip, index) => (
              <motion.div
                key={tip.text}
                variants={itemVariants}
                data-ocid={`food.tips.item.${index + 1}`}
                className="card-hover flex items-center gap-5 bg-white rounded-2xl p-5 border-2 border-green-100 shadow-card"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                  {tip.emoji}
                </div>
                <p className="text-gray-800 text-lg font-semibold leading-relaxed">
                  {tip.text}
                </p>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm ml-auto">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fun fact banner */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display text-2xl sm:text-3xl font-bold text-white">
            🌟 Did You Know?
          </p>
          <p className="text-green-100 text-xl mt-3">
            Eating a rainbow of fruits and vegetables gives you all the vitamins
            you need! The more colors on your plate, the healthier you are! 🌈
          </p>
        </div>
      </section>
    </div>
  );
}
