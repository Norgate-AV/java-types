export {};

declare global {
    namespace java.lang.ref {
        class WeakReference<T> extends Reference<T> {}
    }
}
