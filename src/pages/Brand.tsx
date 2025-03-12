import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Brand {
  name: string;
  description: string;
  industry: string;
  logo: string;
}

const brands: Brand[] = [
  {
    name: "Social Nation",
    description: "Leading technology solutions provider specializing in AI and machine learning applications.",
    industry: "Technology",
    logo: "https://example.com/logo.png"
  },
  {
    name: "StartupNews.fyi",
    description: "Sustainable products manufacturer committed to environmental conservation.",
    industry: "Sustainability",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEmtIszb9OidA/company-logo_200_200/company-logo_200_200/0/1737119074651/startupnewsfyi_logo?e=2147483647&v=beta&t=01d8b0rHXtE0joI3litPBRC9EQGm1amHmgcRBI-Txr0"
  },
  {
    name: "Face Magazine",
    description: "Healthcare innovation company revolutionizing patient care through digital solutions.",
    industry: "FASHION ART CULTURE ENTERTAINMENT",
    logo: "https://example.com/logo.png"
  },
  {
    name: "Pepsi",
    description: "Digital banking platform making financial services accessible to everyone.",
    industry: "Finance",
    logo: ""
  },
  {
    name: "Bellavita",
    description: "Digital media company creating engaging content across multiple platforms.",
    industry: "Media",
    logo: ""
  },
  {
    name: "Zingbus",
    description: "Digital media company creating engaging content across multiple platforms.",
    industry: "Media",
    logo: ""
  },
  {
    name: "Flake",
    description: "Digital media company creating engaging content across multiple platforms.",
    industry: "Media",
    logo: ""
  },
  {
    name: "Kitkat",
    description: "Digital media company creating engaging content across multiple platforms.",
    industry: "Media",
    logo: ""
  },
  {
    name: "BlueTokai",
    description: "Digital media company creating engaging content across multiple platforms.",
    industry: "Media",
    logo: ""
  },
  {
    name: "Manforce",
    description: "Digital media company creating engaging content across multiple platforms.",
    industry: "Media",
    logo: ""
  }
];

const Brand = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl sm:tracking-tight lg:text-7xl">
            Our Partner <span className="text-indigo-600">Brands</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            We collaborate with industry-leading brands to create impactful marketing campaigns and drive business growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={item}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="flex items-center justify-center h-40 bg-gray-50 rounded-lg mb-6">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-24 object-contain filter hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=6366f1&color=fff&size=128`;
                      }}
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{brand.name[0]}</span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {brand.name}
                  </h3>
                  <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full mb-4">
                    {brand.industry}
                  </span>
                  <p className="text-base text-gray-600 line-clamp-3">
                    {brand.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24"
        >
          <div className="relative bg-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700"></div>
            <div className="relative px-6 py-12 sm:px-12 lg:py-16 lg:px-16 flex flex-col items-center text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Join Our Network?
              </h2>
              <p className="mt-6 text-xl leading-7 text-indigo-100">
                Partner with us to elevate your brand and reach new heights.
              </p>
              <Link
                to="/contact"
                className="mt-8 bg-white px-8 py-4 rounded-xl font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Brand;
