import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('.', import.meta.url));
const pages = ['index','companies','candidates','approach','about','resources','contact','privacy'];
export default defineConfig({plugins:[react()],build:{rollupOptions:{input:Object.fromEntries(pages.map(p=>[p,resolve(root,`${p}.html`)]))}}});
