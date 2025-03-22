import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Building, Paintbrush, Columns } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Raj Enterprises!
            </h1>
            <p className="text-xl mb-8">
              We are your trusted experts in construction and fabrication. Since 1998,
              we’ve been delivering top-quality results for homes, buildings, and
              specialized projects. Whether it’s aluminum, steel, glass, or paint work,
              we handle it all with skill and care—bringing your vision to life while
              ensuring total satisfaction.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From complete building projects to specialized installations, we deliver excellence in every aspect of construction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Complete Building Projects",
                description: "End-to-end construction solutions for commercial and industrial projects."
              },
              {
                icon: Paintbrush,
                title: "Specialized Finishing",
                description: "Expert painting and finishing services for lasting beauty and protection."
              },
              {
                icon: Columns,
                title: "Aluminum & Glass Work",
                description: "Custom aluminum fabrication and glass installation for modern architecture."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Raj Enterprises</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With years of experience and a commitment to excellence, we're your trusted partner in construction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "25+ Years of Experience",
              "Professional Team",
              "Quality Assurance",
              "Timely Completion",
              "Competitive Pricing",
              "Customer Satisfaction"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;