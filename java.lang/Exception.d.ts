export {};

declare global {
    namespace java.lang {
        class Exception extends Object {
            constructor(message?: string);
            getMessage(): string;
        }
    }
}
