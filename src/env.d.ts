/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly APP_TITLE: string
  readonly APP_DESCRIPTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    APP_TITLE: string;
    APP_DESCRIPTION: string;
  }
}
