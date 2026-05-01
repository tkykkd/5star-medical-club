import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/5star-medical-club/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3010,
    /** 127.0.0.1 で確実に開ける（スマホ等から繋ぐときは '0.0.0.0' に変更） */
    host: '127.0.0.1',
    strictPort: true,
    open: false,
  },
  preview: {
    port: 3010,
    host: '127.0.0.1',
    strictPort: true,
  },
});
