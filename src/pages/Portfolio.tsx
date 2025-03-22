import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Shri Vishwakarma University in Palwal",
      category: "Aluminum & Paint Work",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Enhancing the campus with aluminum structures and expert paint finishes."
    },
    {
      title: "Government Hospital in Sonbhadra (Robertsganj)",
      category: "Tiles, Paint, Steel, Aluminum, and Fabrication",
      image: "https://images.unsplash.com/photo-1545079968-1feb95494244?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Complete transformation with vital steel fabrication, aluminum elements, tiling, and painting."
    },
    {
      title: "Hotel Lila in Mumbai",
      category: "Fabrication, Glass, Doors, and Paint",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Renovation project featuring custom glass installations, refined paintwork, and door replacements."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing our expertise through successful projects and satisfied clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white h-8 w-8" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;