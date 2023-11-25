/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rtpssnljxbnqoznqaiem.supabase.co',
        port: '',
      }
    ]
  }
}

module.exports = nextConfig
