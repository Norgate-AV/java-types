export {};

declare global {
    namespace java.lang.reflect {
        class Constructor<T> extends Executable {}
    }
}
