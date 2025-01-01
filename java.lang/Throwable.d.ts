export {};

declare global {
    namespace java.lang {
        class Throwable extends Object {
            public constructor(message?: string);
            public getMessage(): string;
        }
    }
}
