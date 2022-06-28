export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_RAPIDAPI_KEY: string;
    }
  }
}
