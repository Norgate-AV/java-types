export {};

declare global {
    namespace java.lang {
        class IllegalMonitorStateException extends Exception {
            public constructor(message?: string);
            public getMessage(): string;
        }
    }
}
