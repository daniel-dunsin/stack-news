declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEWS_API_KEY: string;
    }
  }
}

export {};
