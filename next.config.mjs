/** @type {import('next').NextConfig} */
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'utfs.io'
            },
            {
                hostname: 'avatars.githubusercontent.com',
                protocol: 'https'
            }
        ]
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.plugins = [...config.plugins, new PrismaPlugin()]
        }

        return config
    }
};

export default nextConfig;
