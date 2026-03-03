import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable the new React Compiler (stable in Next.js 16)
  // This automatically optimizes component rendering by memoizing values,
  // reducing the need for manual useMemo and useCallback.
  reactCompiler: true,

  // Configure logging for development
  logging: {
    fetches: {
      // Log the full URL of data fetches to help with debugging
      fullUrl: true,
    },
  },

  // Add security headers to all responses
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/:path*",
        headers: [
          {
            // Control DNS prefetching to improve privacy
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            // Enforce HTTPS using HSTS (HTTP Strict Transport Security)
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Prevent cross-site scripting (XSS) attacks
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            // Prevent clickjacking by ensuring content is not embedded in iframes
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            // Prevent the browser from sniffing the content type
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Control how much referrer information is sent with requests
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
