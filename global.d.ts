declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_BASE_URL: string;
        NODE_ENV: "development" | "production" | "test";
    }
}
