import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenSquare,
  Zap,
  Target,
  Blocks,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <PenSquare size={32} />,
      title: "Write Stories",
      description: "Create compelling content with our powerful editor",
    },
    {
      icon: <Zap size={32} />,
      title: "Instant Publishing",
      description: "Share your thoughts with the world immediately",
    },
    {
      icon: <Target size={32} />,
      title: "Reach Audience",
      description: "Connect with readers who love your content",
    },
    {
      icon: <Blocks size={32} />,
      title: "Build Community",
      description: "Grow your following and engage with fans",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech Blogger",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      content:
        "ScribeSpace transformed how I share my tech insights. The platform's intuitive design and powerful features make blogging a joy.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Travel Writer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      content:
        "As a travel writer, I need a platform that can keep up with my adventures. ScribeSpace delivers exactly that and more.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      role: "Food Critic",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      content:
        "The community engagement features are outstanding. My food reviews now reach thousands of passionate foodies.",
      rating: 5,
    },
  ];

  const brands = [
    "TechCrunch",
    "Forbes",
    "Wired",
    "The Verge",
    "Mashable",
    "Fast Company",
    "Inc.",
    "VentureBeat",
    "CNET",
    "TechRadar",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const svgVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden  bg-[#e0e7f1]">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="absolute top-0 left-0 w-full h-full opacity-20"
        >
          <motion.path
            d="M0,50 Q25,0 50,50 T100,50"
            fill="none"
            stroke="var(--main)"
            strokeWidth="0.5"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M0,70 Q25,20 50,70 T100,70"
            fill="none"
            stroke="var(--main)"
            strokeWidth="0.5"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              variants={itemVariants}
              className="neo-card p-8 mb-12 border-4 border-black"
            >
              <h1 className="text-6xl md:text-8xl font-[var(--heading-font-weight)] mb-6 leading-none">
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bg-[var(--main)] text-[var(--mtext)] px-4 inline-block"
                >
                  SCRIBE
                </motion.span>
                <br />
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  className="bg-[var(--blank)] text-[var(--bw)] px-4 inline-block mt-2"
                >
                  SPACE
                </motion.span>
              </h1>
              <motion.p
                variants={itemVariants}
                className="text-2xl font-[var(--base-font-weight)] mb-8"
              >
                Where modern storytelling comes to life.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="neo-button px-8 py-4 text-xl flex items-center justify-center gap-2"
                >
                  Start Writing
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[var(--bw)] text-[var(--text)] text-xl
                           border-4 border-[var(--border)] shadow-[var(--shadow)]
                           hover:translate-x-1 hover:-translate-y-1 transition-transform
                           flex items-center justify-center gap-2"
                >
                  Explore Stories
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setActiveFeature(index)}
                onHoverEnd={() => setActiveFeature(null)}
                className="neo-card p-8 relative overflow-hidden group border-4 border-black"
              >
                <motion.div
                  animate={{
                    scale: activeFeature === index ? 1.2 : 1,
                    rotate: activeFeature === index ? 360 : 0,
                  }}
                  className="bg-[var(--main)] text-[var(--mtext)] p-4 inline-block mb-4
                             rounded-[var(--border-radius)]"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-[var(--heading-font-weight)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-lg font-[var(--base-font-weight)]">
                  {feature.description}
                </p>
                <motion.div
                  className="absolute inset-0 bg-[var(--main)] opacity-0 group-hover:opacity-5"
                  animate={{
                    scale: activeFeature === index ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={containerVariants} className="mt-32 mb-20">
            <div className="neo-card p-8 max-w-4xl mx-auto bg-[var(--main)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "10K+", label: "Writers" },
                  { value: "50K+", label: "Stories" },
                  { value: "1M+", label: "Readers" },
                  { value: "150+", label: "Countries" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    className="text-center"
                  >
                    <motion.h4 className="text-4xl font-[var(--heading-font-weight)] text-[var(--mtext)] mb-2">
                      {stat.value}
                    </motion.h4>
                    <p className="font-[var(--base-font-weight)] text-[var(--mtext)]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            variants={containerVariants}
            className="mt-32 mb-20 max-w-6xl mx-auto"
          >
            <div className="neo-card p-8 relative">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-[var(--heading-font-weight)]">
                  Writer Stories
                </h2>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="p-2 neo-button rounded-full"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="p-2 neo-button rounded-full"
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              </div>

              <div className="relative h-[300px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <div className="flex items-start gap-8 h-full">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[var(--border)]">
                            <img
                              src={testimonials[activeTestimonial].image}
                              alt={testimonials[activeTestimonial].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <Quote
                            className="absolute -bottom-2 -right-2 text-[var(--main)]"
                            size={24}
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex gap-1 mb-4">
                          {[
                            ...Array(testimonials[activeTestimonial].rating),
                          ].map((_, i) => (
                            <Star
                              key={i}
                              className="text-[var(--main)]"
                              size={20}
                              fill="var(--main)"
                            />
                          ))}
                        </div>
                        <p className="text-xl mb-6 font-[var(--base-font-weight)]">
                          "{testimonials[activeTestimonial].content}"
                        </p>
                        <div>
                          <h4 className="text-lg font-[var(--heading-font-weight)]">
                            {testimonials[activeTestimonial].name}
                          </h4>
                          <p className="text-[var(--text)] opacity-80">
                            {testimonials[activeTestimonial].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Brands Marquee */}
          <motion.div variants={containerVariants} className="mt-32 mb-20">
            <div className="neo-card p-8 bg-[var(--main)] overflow-hidden">
              <h2 className="text-2xl font-[var(--heading-font-weight)] text-center text-[var(--mtext)] mb-8">
                Featured In
              </h2>
              <div className="relative">
                <motion.div
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                  className="flex gap-8 whitespace-nowrap"
                >
                  {[...brands, ...brands].map((brand, index) => (
                    <span
                      key={index}
                      className="text-xl font-[var(--heading-font-weight)] text-[var(--mtext)]"
                    >
                      {brand}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={containerVariants}
            className="mt-32 mb-20 max-w-4xl mx-auto text-center"
          >
            <div className="neo-card p-12 bg-[var(--main)]">
              <h2 className="text-4xl font-[var(--heading-font-weight)] text-[var(--mtext)] mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-[var(--mtext)] mb-8">
                Join thousands of writers who've found their voice on
                ScribeSpace.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[var(--blank)] text-[var(--bw)] text-xl
                         border-4 border-[var(--border)] shadow-[var(--shadow)]
                         hover:translate-x-1 hover:-translate-y-1 transition-transform
                         inline-flex items-center gap-2"
              >
                Get Started Now
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
