import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-bold mb-4">About Raj Enterprises</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              At Raj Enterprises, we’ve been the best in the business since 1998. Founded by
              Raj Kumar Dubey, we’ve spent over 25 years perfecting our craft in construction
              and fabrication. From small home projects to massive building contracts, we’ve
              done it all—hundreds of projects across India stand as proof of our expertise.
              Our skilled team is passionate about quality, trust, and hard work, making us
              the go-to choice for clients who want the best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1998, Raj Enterprises has grown from a small contracting firm to one of the region's most trusted names in construction and specialized installations.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' needs.
              </p>
              <p className="text-gray-600">
                Today, we pride ourselves on delivering comprehensive building solutions that combine traditional craftsmanship with modern technology and sustainable practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Construction site"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every project we undertake and every relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Client Focus",
                description: "We put our clients first, ensuring their vision becomes reality through collaborative partnerships."
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We maintain the highest standards in every aspect of our work, from planning to execution."
              },
              {
                icon: Award,
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical practices."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;