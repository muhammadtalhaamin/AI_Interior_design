"use client"
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Palette, Zap, Clock, CheckCircle2, Quote } from "lucide-react";

const Home = () => {
  const [activePreview, setActivePreview] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const previewInterval = setInterval(() => {
      setActivePreview((prev) => (prev + 1) % 5);
    }, 3000);

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(previewInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const previewTexts = [
    "Analyzing your space...",
    "Generating color schemes...",
    "Arranging furniture...",
    "Optimizing layout...",
    "Finalizing design..."
  ];

  const features = [
    {
      title: "Smart Room Analysis",
      description: "Our AI scans your room and understands its dimensions, lighting, and current layout to provide optimal design suggestions."
    },
    {
      title: "Style Matching",
      description: "Tell us your preferred style, and our AI will generate designs that perfectly match your taste while maintaining harmony."
    },
    {
      title: "Real-time Visualization",
      description: "See how your space will look with different furniture arrangements and color schemes in real-time."
    }
  ];

  const steps = [
    { number: 1, title: "Upload Photo", description: "Take a photo of your room or upload an existing one" },
    { number: 2, title: "Set Preferences", description: "Choose your style preferences and budget" },
    { number: 3, title: "Get Designs", description: "Receive AI-generated designs in seconds" }
  ];

  const pricing = [
    {
      title: "Basic",
      price: "$9.99",
      period: "per month",
      features: ["5 room designs per month", "Basic style options", "Email support"],
      popular: false
    },
    {
      title: "Pro",
      price: "$19.99",
      period: "per month",
      features: ["Unlimited room designs", "Advanced style options", "Priority support", "Real-time visualization"],
      popular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "Contact us",
      features: ["Everything in Pro", "API access", "Custom integrations", "Dedicated support"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/api/placeholder/100/100",
      content: "The AI Interior Design app transformed my living room completely. What would have taken weeks with a traditional designer was done in minutes!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Architect",
      image: "/api/placeholder/100/100",
      content: "As a professional architect, I'm impressed by the accuracy and creativity of the AI suggestions. It's an invaluable tool for quick iterations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Designer",
      image: "/api/placeholder/100/100",
      content: "This app has revolutionized my workflow. I can now present multiple design options to clients in record time.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="w-full md:w-1/2 space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transform Your Space with <span className="text-purple-500">AI Magic</span>
          </h1>
          <p className="text-lg text-gray-600">
            Get professional interior design suggestions in seconds using our advanced AI technology
          </p>
          <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
            Start Designing Now
          </Button>
        </div>
        
        <div className="w-full md:w-1/2 h-96 relative mt-8 md:mt-0">
          {previewTexts.map((text, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 transform ${
                index === activePreview
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="bg-white rounded-lg shadow-xl p-6 m-4 h-64 flex items-center justify-center">
                <p className="text-purple-500 text-xl">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It <span className="text-purple-500">Works</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your <span className="text-purple-500">Plan</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                plan.popular
                  ? "bg-purple-50 border-2 border-purple-500"
                  : "bg-white border border-gray-200"
              } relative`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular ? "bg-purple-500 hover:bg-purple-600" : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Loved by <span className="text-purple-500">Thousands</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              See what our users have to say about their experience with AI Interior Design.
            </p>
          </div>
          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === activeTestimonial
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <Card className="h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <Quote className="w-12 h-12 text-purple-500 mb-6" />
                    <p className="text-xl text-gray-600 mb-6">{testimonial.content}</p>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? "bg-purple-500" : "bg-gray-300"
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-24 bg-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who have revolutionized their homes with AI Interior Design.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-500 hover:bg-gray-100">
            Start Your Free Trial Today
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;