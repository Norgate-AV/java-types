export {};

declare global {
    namespace java.lang {
        class CloneNotSupportedException extends Exception {
            public constructor(message?: string);
            public getMessage(): string;
        }
    }
}
