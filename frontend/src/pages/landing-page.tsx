import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Card, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  features,
  testimonials,
  brands,
  Stats,
} from "@/config/landing-page/Data";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <div className="min-h-screen relative overflow-hidden bg-[#e0e7f1]">
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 mt-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants}>
            <Card className="mx-auto border-4 bg-inherit p-12 hover:shadow-none transition-all duration-1000 hover:scale-105 flex justify-between items-center">
              <div>
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
                  <Button className="px-6 py-6 text-3xl flex items-center justify-center gap-2 bg-orange-400">
                    Start Writing
                    <ArrowRight size={20} />
                  </Button>
                  <Button className="px-6 py-6 text-3xl flex items-center justify-center gap-2 bg-white">
                    Explore Stories
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 gap-8"
                >
                  <div className="space-y-6">
                    <Card className="overflow-hidden shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all duration-200 border-0">
                      <img
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=500"
                        alt="Writing"
                        className="w-full h-52 object-cover"
                      />
                    </Card>
                    <Card className="overflow-hidden shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all duration-200 border-0">
                      <img
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=500"
                        alt="Digital workspace"
                        className="w-full h-32 object-cover"
                      />
                    </Card>
                  </div>
                  <div className="space-y-6">
                    <Card className="overflow-hidden shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all duration-200 border-0">
                      <img
                        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=500"
                        alt="Food"
                        className="w-full h-36 object-cover"
                      />
                    </Card>
                    <Card className="overflow-hidden shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all duration-200 border-0">
                      <img
                        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=500"
                        alt="Inspiration"
                        className="w-full h-48 object-cover"
                      />
                    </Card>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setActiveFeature(index)}
                onHoverEnd={() => setActiveFeature(null)}
              >
                <Card className="p-8 relative overflow-hidden group border-4 bg-white hover:bg-orange-400 transition-all duration-500 hover:shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY">
                  <motion.div
                    animate={{
                      scale: activeFeature === index ? 1.2 : 1,
                      rotate: activeFeature === index ? 360 : 0,
                    }}
                    transition={{
                      duration: 0.85,
                      ease: "easeInOut",
                    }}
                    className="bg-[var(--main)] text-[var(--mtext)] p-3 inline-block mb-4
                         rounded-[var(--border-radius)] border-4 border-black"
                  >
                    {React.createElement(feature.icon)}
                  </motion.div>
                  <h3 className="text-3xl font-[var(--heading-font-weight)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xl font-[var(--base-font-weight)]">
                    {feature.description}
                  </p>
                  <motion.div
                    className="absolute inset-0 bg-[var(--main)] opacity-0 group-hover:opacity-5"
                    animate={{}}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={containerVariants} className="mt-32 mb-20">
            <Card className="p-8 mx-auto bg-orange-400 border-4 border-black">
              <div className="grid grid-cols-2 md:grid-cols-8 gap-8">
                {Stats.map((stat, index) => (
                  <Card className="hover:shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all duration-200">
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center p-2"
                    >
                      <motion.h4 className="text-4xl font-[var(--heading-font-weight)] text-[var(--mtext)] mb-2">
                        {stat.value}
                      </motion.h4>
                      <p className="font-[var(--base-font-weight)] text-[var(--mtext)]">
                        {stat.label}
                      </p>
                    </motion.div>
                  </Card>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Brands Marquee */}
          <motion.div variants={containerVariants} className=" mb-20">
            <div className="flex justify-center items-center mb-16">
              <Card className="text-4xl font-[var(--heading-font-weight)] hover:shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all duration-200 bg-white">
                <CardHeader>Featured In</CardHeader>
              </Card>
            </div>
            <div className="p-8 bg-inherit overflow-hidden border-x-0 border-y-0 shadow-none">
              <div className="relative">
                <motion.div
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 10,
                      ease: "linear",
                    },
                  }}
                  className="flex gap-8 whitespace-nowrap"
                >
                  {[...brands, ...brands].map((brand, index) => (
                    <Button
                      key={index}
                      className="text-2xl font-[var(--heading-font-weight)] text-[var(--mtext)] py-6 bg-orange-400 hover:bg-[var(--main)] hover:text-[var(--mtext)] transition-all duration-200"
                    >
                      {brand}
                    </Button>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
          {/* Testimonials Section */}
          <motion.div
            variants={containerVariants}
            className="mt-20 mb-20 mx-auto"
          >
            <div className="p-8 relative space-y-20">
              <div className="flex justify-center items-center mb-8">
                <Card className="text-4xl font-[var(--heading-font-weight)] hover:shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all duration-200 bg-white">
                  <CardHeader>Writer Stories</CardHeader>
                </Card>
              </div>

              <div className="relative h-[300px] overflow-x-visible">
                <AnimatePresence mode="wait">
                  <div className="flex justify-between items-center gap-20">
                    <Button
                      className="transition-all duration-200"
                      onClick={prevTestimonial}
                    >
                      <ArrowBigLeft size={36} />
                    </Button>
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0.4, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0.4, x: -30 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className=""
                    >
                      <Card className="flex items-start gap-8 py-12 px-16  bg-orange-400 border-4 border-black hover:shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all duration-200">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[var(--border)]">
                              <img
                                src={testimonials[activeTestimonial].image}
                                alt={testimonials[activeTestimonial].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
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
                                size={24}
                                fill="var(--main)"
                              />
                            ))}
                          </div>
                          <p className="text-2xl mb-6 font-[var(--base-font-weight)]">
                            "{testimonials[activeTestimonial].content}"
                          </p>
                          <div>
                            <h4 className="text-xl font-[var(--heading-font-weight)]">
                              {testimonials[activeTestimonial].name}
                            </h4>
                            <p className="text-lg font-[var(--heading-font-weight)] opacity-80">
                              {testimonials[activeTestimonial].role}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                    <Button
                      className="transition-all duration-200"
                      onClick={nextTestimonial}
                    >
                      <ArrowBigRight size={36} />
                    </Button>
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
