import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Required for static hosting like GitHub Pages
  
  // Replace 'personal_website' with your repository name on GitHub
  basePath: '/personal_website', 
  
  images: {
    // GitHub Pages is a static host and cannot process Next.js image optimization
    unoptimized: true,
  },
};

export default nextConfig;
