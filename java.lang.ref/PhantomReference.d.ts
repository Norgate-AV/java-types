export {};

declare global {
    namespace java.lang.ref {
        class PhantomReference<T> extends Reference<T> {}
    }
}
