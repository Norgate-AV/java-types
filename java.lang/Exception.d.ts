export {};

declare global {
    namespace java.lang {
        class Exception extends Throwable {
            public constructor(message?: string);
            public getMessage(): string;
        }
    }
}
