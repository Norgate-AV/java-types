export {};

declare global {
    namespace java.lang {
        class IllegalArgumentException extends Exception {
            public constructor(message?: string);
            public getMessage(): string;
        }
    }
}
