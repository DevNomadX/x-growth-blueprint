import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/x-growth-blueprint/', // ◄ Add this line (replace with your repo name)
});
