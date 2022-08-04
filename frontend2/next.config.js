/** @type {import('next').NextConfig} */
//key 隠し
const API_KEY = "711ff0b4ef9e9ee1377ed51511bd5560";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 주소 바뀌는 redirect
  async redirects(){
    return [
      {
        source:"/contact/:path*",
        destination:"/form/:path*",
        permanent:false,
      }
    ]
  },
  // 주소 안 바뀌는 redirect
  // masking
  async rewrites(){
    return [{
      source:"/api/movies",
      destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }]
  }
}

module.exports = nextConfig
