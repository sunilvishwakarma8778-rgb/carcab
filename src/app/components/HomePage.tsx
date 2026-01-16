import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Clock, DollarSign, Star } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { destinations, testimonials } from '@/data/travelData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export function HomePage() {
  const features = [
    {
      icon: Globe,
      title: 'Worldwide Coverage',
      description: 'Access to 150+ destinations across 6 continents'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: '100% secure payment with travel insurance included'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for your peace of mind'
    },
    {
      icon: DollarSign,
      title: 'Best Prices',
      description: 'Competitive pricing with price match guarantee'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694786001018-b43efc0a7983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwdmFjYXRpb258ZW58MXx8fHwxNzY4MzYwMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Explore the World With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Discover breathtaking destinations and create unforgettable memories
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow flex items-center gap-2 mx-auto sm:mx-0"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/destinations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold border-2 border-white hover:bg-white/20 transition-all"
              >
                Explore Packages
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our handpicked destinations that offer the best experiences
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 4).map((destination, index) => (
              <FadeInWhenVisible key={destination.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Link to="/destinations">
                        <button className="px-6 py-2 bg-white text-sky-600 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Details
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{destination.location}</p>
                    <div className="flex justify-between items-center">
                      {/* <span className="text-2xl font-bold text-sky-600">{destination.price}</span>
                      <span className="text-gray-500">{destination.duration}</span> */}
                    </div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide exceptional service and unforgettable experiences
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeInWhenVisible key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-lg transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full flex items-center justify-center"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
              <p className="text-sky-100 max-w-2xl mx-auto">
                Real experiences from real travelers
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center justify-center gap-4">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sky-100 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
