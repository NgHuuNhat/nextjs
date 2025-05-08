// import withAntdLess from 'next-plugin-antd-less';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;

// export default withAntdLess({
//   ...nextConfig,
//   // Optional: tự cấu hình theme
//   modifyVars: {},
//   lessVarsFilePath: './src/styles/variables.less',
// });
