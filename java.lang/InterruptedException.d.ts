export {};

declare global {
    namespace java.lang {
        class InterruptedException extends Exception {
            public constructor(message?: string);
            public getMessage(): string;
        }
    }
}
