
// import { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client'; 
// import { ChevronRight, ArrowUpRight, LineChart, Target, Star, Zap } from 'lucide-react';

// const HeroSection = () => {
//   const [heroData, setHeroData] = useState<any>(null);  
//   const [loading, setLoading] = useState(true);         

//   useEffect(() => {
//     // Function to fetch Hero Section content from Sanity
//     const fetchHeroContent = async () => {
//       try {
//         // Fetch data from Sanity using the schema defined
//         const data = await client.fetch('*[_type == "heroSection"][0]'); // Adjust query based on your schema
//         setHeroData(data);  // Save the data to state
//         setLoading(false);   // Set loading to false when data is fetched
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchHeroContent(); // Call the function to fetch data
//   }, []);

//   // Show loading message while data is being fetched
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Handle undefined data (fallback)
//   const features = heroData?.features || [];  // Default to empty array if undefined
//   const metrics = heroData?.dashboard?.metrics || [];  // Default to empty array if undefined

//   // Render Hero Section once data is loaded
//   return (
//     <div id="hero" className="hero-section relative bg-black text-white overflow-hidden">
//       {/* Subtle gradient background */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: `radial-gradient(circle at 30% 30%, rgba(0,185,214,0.08) 0%, rgba(0,0,0,1) 70%)`,
//         }}
//       />
      
//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 sm:py-28 md:py-32 mt-8 sm:mt-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Side - Text Content */}
//           <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
//             {/* Badge */}
//             <div className="inline-block px-3 py-1 rounded-full bg-[#00B9D6]/10 text-[#00B9D6] text-sm font-medium">
//               {heroData?.badge}
//             </div>

//             {/* Headline */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
//               {heroData?.headline?.part1}{" "}
//               <span className="text-[#00B9D6] relative">
//                 {heroData?.headline?.highlighted}
//                 <svg
//                   className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
//                   viewBox="0 0 300 12"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M1 5.5C32.3333 2.16667 143.4 -1.3 299 9.5"
//                     stroke="#00B9D6"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </span>
//             </h1>

//             {/* Subheadline */}
//             <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
//               {heroData?.subheadline?.text}
//               {heroData?.subheadline?.highlighted1 && (
//                 <span className="text-[#00B9D6] font-medium px-3">
//                   {heroData?.subheadline?.highlighted1}
//                 </span>
//               )}
//               {heroData?.subheadline?.highlighted2 && (
//                 <span className="text-[#00B9D6] font-medium">
//                   {heroData?.subheadline?.highlighted2}
//                 </span>
//               )}
//             </p>

//             {/* Features */}
//             <div className="space-y-4 pt-2">
//               {features.length > 0 ? (
//                 features.map((feature: any, index: number) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-3 text-base group p-2 -mx-2 rounded-lg hover:bg-[#00B9D6]/5 transition-colors"
//                   >
//                     <div className="w-10 h-10 rounded-full bg-[#00B9D6]/10 flex items-center justify-center group-hover:bg-[#00B9D6]/15 transition-all duration-300">
//                       <i className={`icon-${feature.icon} text-[#00B9D6]`} />
//                     </div>
//                     <span className="text-gray-200 group-hover:text-white transition-colors">{feature.text}</span>
//                   </div>
//                 ))
//               ) : (
//                 <div>No features available</div>
//               )}
//             </div>

//             {/* Call to Action */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <a
//                 href={heroData?.ctaButtons?.primary?.link}
//                 className="bg-gradient-to-r from-[#00B9D6] to-[#00D6C3] text-black px-6 py-3 rounded-md font-semibold text-base hover:shadow-lg hover:shadow-[#00B9D6]/20 transition-all flex items-center justify-center sm:justify-start group"
//               >
//                 <span>{heroData?.ctaButtons?.primary?.text}</span>
//                 <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
//               </a>
//               <a
//                 href={heroData?.ctaButtons?.secondary?.link}
//                 className="border border-[#00B9D6]/30 text-[#00B9D6] px-6 py-3 rounded-md font-medium text-base hover:bg-[#00B9D6]/5 transition-all flex items-center justify-center sm:justify-start group"
//               >
//                 <span>{heroData?.ctaButtons?.secondary?.text}</span>
//                 <ArrowUpRight
//                   className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//                   size={18}
//                 />
//               </a>
//             </div>
//           </div>

//           {/* Right Side - Dashboard Visualization */}
//           <div className="relative h-[400px] sm:h-[450px] flex items-center justify-center">
//             {heroData?.dashboard && (
//               <div className="relative w-full h-full flex items-center justify-center">
//                 <div className="relative z-10 w-full max-w-[320px] sm:max-w-md">
//                   <div className="bg-gradient-to-br from-[#111]/90 to-[#151515]/90 backdrop-blur-md rounded-2xl overflow-hidden border border-[#00B9D6]/20 shadow-[0_0_25px_rgba(0,185,214,0.15)]">
//                     <div className="p-6 sm:p-8">
//                       {/* Dashboard header */}
//                       <div className="flex items-center mb-6">
//                         <div className="flex items-center">
//                           <div className="w-10 h-10 bg-[#00B9D6]/15 rounded-full flex items-center justify-center mr-3">
//                             <LineChart className="text-[#00B9D6] w-5 h-5" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-bold text-white">
//                               {heroData?.dashboard?.title}
//                             </h3>
//                             <p className="text-xs text-gray-400">
//                               {heroData?.dashboard?.subtitle}
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Growth metrics */}
//                       <div className="grid grid-cols-2 gap-4 mb-6">
//                         {metrics.length > 0 ? (
//                           metrics.map((metric: any, index: number) => (
//                             <div key={index} className="bg-black/30 rounded-lg p-4">
//                               <div className="flex items-center justify-between mb-2">
//                                 <div className="text-xs text-gray-400">{metric.label}</div>
//                                 <div
//                                   className={`text-xs flex items-center ${
//                                     metric.change.startsWith('+')
//                                       ? 'text-green-400'
//                                       : 'text-red-400'
//                                   }`}
//                                 >
//                                   {metric.change}
//                                   <svg
//                                     width="12"
//                                     height="12"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     className="ml-1"
//                                   >
//                                     <path
//                                       d={
//                                         metric.change.startsWith('+')
//                                           ? 'M18 15l-6-6-6 6'
//                                           : 'M6 9l6 6 6-6'
//                                       }
//                                       stroke="currentColor"
//                                       strokeWidth="2"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     />
//                                   </svg>
//                                 </div>
//                               </div>
//                               <div className="text-2xl font-bold text-white">{metric.value}</div>
//                               {metric.description && (
//                                 <div className="text-xs text-gray-400">{metric.description}</div>
//                               )}
//                             </div>
//                           ))
//                         ) : (
//                           <div>No metrics available</div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default HeroSection;


// components/HeroSection.tsx
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';  // Import the Sanity client
import { ChevronRight, ArrowUpRight, LineChart, Target, Star, Zap } from 'lucide-react';


// Map icon names to Lucide icon components
const iconMap: Record<string, React.ElementType> = {
  'line-chart': LineChart,
  'target': Target,
  'star': Star,
  'zap': Zap,
  // Add more mappings as needed
};

const HeroSection = () => {
  const [heroData, setHeroData] = useState<any>(null);  // State to store Hero Section data
  const [loading, setLoading] = useState(true);         // Loading state

  useEffect(() => {
    // Function to fetch Hero Section content from Sanity
    const fetchHeroContent = async () => {
      try {
        // Fetch data from Sanity using the schema defined
        const data = await client.fetch('*[_type == "heroSection"][0]');
        setHeroData(data);  // Save the data to state
        setLoading(false);   // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHeroContent(); // Call the function to fetch data
  }, []);

  // Show loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle undefined data (fallback)
  const features = heroData?.features || [];
  const metrics = heroData?.dashboard?.metrics || [];

  return (
    <div id="hero" className="hero-section relative bg-black text-white overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(0,185,214,0.08) 0%, rgba(0,0,0,1) 70%)`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 sm:py-28 md:py-32 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-[#00B9D6]/10 text-[#00B9D6] text-sm font-medium">
              {heroData?.badge}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {heroData?.headline?.part1}{" "}
              <span className="text-[#00B9D6] relative">
                {heroData?.headline?.highlighted}
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C32.3333 2.16667 143.4 -1.3 299 9.5"
                    stroke="#00B9D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              {heroData?.subheadline?.text}
              {heroData?.subheadline?.highlighted1 && (
                <span className="text-[#00B9D6] font-medium">
                  {heroData?.subheadline?.highlighted1}
                </span>
              )}
              {heroData?.subheadline?.highlighted2 && (
                <span className="text-[#00B9D6] font-medium">
                  {heroData?.subheadline?.highlighted2}
                </span>
              )}
            </p>

            {/* Features */}
            <div className="space-y-4 pt-2">
              {features?.length > 0 ? (
                features.map((feature: any, index: number) => {
                  const IconComponent = iconMap[feature.icon] || Zap;  // Fallback to 'Zap' if icon is undefined
                  return (
                    <div key={index} className="flex items-center space-x-3 text-base group p-2 -mx-2 rounded-lg hover:bg-[#00B9D6]/5 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#00B9D6]/10 flex items-center justify-center group-hover:bg-[#00B9D6]/15 transition-all duration-300">
                        <IconComponent className="text-[#00B9D6]" size={18} />
                      </div>
                      <span className="text-gray-200 group-hover:text-white transition-colors">{feature.text}</span>
                    </div>
                  );
                })
              ) : (
                <div>No features available</div>
              )}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={heroData?.ctaButtons?.primary?.link}
                className="bg-gradient-to-r from-[#00B9D6] to-[#00D6C3] text-black px-6 py-3 rounded-md font-semibold text-base hover:shadow-lg hover:shadow-[#00B9D6]/20 transition-all flex items-center justify-center sm:justify-start group"
              >
                <span>{heroData?.ctaButtons?.primary?.text}</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href={heroData?.ctaButtons?.secondary?.link}
                className="border border-[#00B9D6]/30 text-[#00B9D6] px-6 py-3 rounded-md font-medium text-base hover:bg-[#00B9D6]/5 transition-all flex items-center justify-center sm:justify-start group"
              >
                <span>{heroData?.ctaButtons?.secondary?.text}</span>
                <ArrowUpRight
                  className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={18}
                />
              </a>
            </div>
          </div>

          {/* Right Side - Dashboard Visualization */}
          <div className="relative h-[400px] sm:h-[450px] flex items-center justify-center">
            {heroData?.dashboard && (
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative z-10 w-full max-w-[320px] sm:max-w-md">
                  <div className="bg-gradient-to-br from-[#111]/90 to-[#151515]/90 backdrop-blur-md rounded-2xl overflow-hidden border border-[#00B9D6]/20 shadow-[0_0_25px_rgba(0,185,214,0.15)]">
                    <div className="p-6 sm:p-8">
                      {/* Dashboard header */}
                      <div className="flex items-center mb-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#00B9D6]/15 rounded-full flex items-center justify-center mr-3">
                            <LineChart className="text-[#00B9D6] w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">
                              {heroData?.dashboard?.title}
                            </h3>
                            <p className="text-xs text-gray-400">
                              {heroData?.dashboard?.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Growth metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {metrics?.length > 0 ? (
                          metrics.map((metric: any, index: number) => (
                            <div key={index} className="bg-black/30 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-xs text-gray-400">{metric.label}</div>
                                <div
                                  className={`text-xs flex items-center ${
                                    metric.change.startsWith('+')
                                      ? 'text-green-400'
                                      : 'text-red-400'
                                  }`}
                                >
                                  {metric.change}
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="ml-1"
                                  >
                                    <path
                                      d={
                                        metric.change.startsWith('+')
                                          ? 'M18 15l-6-6-6 6'
                                          : 'M6 9l6 6 6-6'
                                      }
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-white">{metric.value}</div>
                              {metric.description && (
                                <div className="text-xs text-gray-400">{metric.description}</div>
                              )}
                            </div>
                          ))
                        ) : (
                          <div>No metrics available</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
