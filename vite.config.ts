// vite.config.ts

import { VitePWA } from 'vite-plugin-pwa';
import { sveltekit } from '@sveltejs/kit/vite';

import autoImport from 'sveltekit-autoimport';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import UnoCSS from 'unocss/vite';

import { type ConfigEnv, type UserConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default function ({ command, mode }: ConfigEnv): UserConfig {
  const root = process.cwd();

  return {
    root,
    server: {
      host: true,
      hmr: true,
    },
    plugins: [
      svelte(),
      sveltekit(),
      autoImport({
        components: ['./src/components'],
      }),
      UnoCSS({
        configFile: 'uno.config.ts',
      }),
      VitePWA({
        registerType: 'prompt',
        devOptions: {
          enabled: true,
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
      }),
    ],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
      target: 'esnext',
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 配置 nutui 全局 scss 变量
          additionalData: ``,
        },
      },
    },
  };
}
