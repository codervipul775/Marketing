import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Brand {
  name: string;
  industry: string;
  logo: string;
}

const brands: Brand[] = [
  {
    name: "Social Nation",
    industry: "Social Media",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFh3inqhmvjwA/company-logo_200_200/company-logo_200_200/0/1630630259001?e=2147483647&v=beta&t=9i30cprPVucw3gy6-y7JrjD6o-rnY22FxyO9Yd2wDzs"
  },
  {
    name: "StartupNews.fyi",
    industry: "Media and Technology",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEmtIszb9OidA/company-logo_200_200/company-logo_200_200/0/1737119074651/startupnewsfyi_logo?e=2147483647&v=beta&t=01d8b0rHXtE0joI3litPBRC9EQGm1amHmgcRBI-Txr0"
  },
  {
    name: "Face Magazine",
    industry: "Fashion,Art and Culture",
    logo: "https://facemagazine.in/wp-content/uploads/2022/11/FACEPrimary-Logo.png"
  },
  {
    name: "Pepsi",
    industry: "Food and Beverage",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg"
  },
  {
    name: "Bellavita",
    industry: "Beauty and Personal Care",
    logo: "https://exchange4media.gumlet.io/news-photo/130458-BELLAVITA1.jpg"
  },
  {
    name: "Zingbus",
    industry: "Transportation",
    logo: "https://d1flzashw70bti.cloudfront.net/next-gen/images/zingbus-name-logo.webp"
  },
  {
    name: "Flake",
    industry: "Food",
    logo: "https://iziltkracfdoszyngmmd.supabase.co/storage/v1/object/public/dropbox/files/nublmf"
  },
  {
    name: "Kitkat",
    industry: "Food and Beverage",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/KitKat_logo.svg/2560px-KitKat_logo.svg.png"
  },
  {
    name: "BlueTokai",
    industry: "Food and Beverage",
    logo: "https://img-cdn.thepublive.com/fit-in/1200x675/entrackr/media/media_files/2025/02/07/MJ2nzc6Yf3HfE2MOnjJe.png"
  },
  {
    name: "Manforce",
    industry: "Pharmaceutical and Healthcare",
    logo: "https://mir-s3-cdn-cf.behance.net/projects/404/2b9b50195309425.Y3JvcCw5NjYsNzU2LDMxLDE1Mw.png"
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
            Our Partner <span className="text-yellow-500">Brands</span>
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
