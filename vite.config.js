import { defineConfig } from 'vite';

const viteConfig = defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
    //동일출처정책
  }
});

export default viteConfig; 
