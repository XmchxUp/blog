import { build } from 'velite'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/post/about',
        permanent: true,
      },
      {
        source: '/hobby_project',
        destination: '/post/hobby_project',
        permanent: true,
      },
    ];
  },
  // othor next config here...
  webpack: config => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
  images: {
    // domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any hostname
        pathname: '/**', // Allows any path
      },
      {
        protocol: 'http',
        hostname: '**', // Allows any hostname
        pathname: '/**', // Allows any path
      },
    ]
  }
}
export default nextConfig;

class VeliteWebpackPlugin {
  static started = false
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      await build({ watch: dev, clean: !dev })
    })
  }
}