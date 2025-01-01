export {};

declare global {
    namespace java.lang.ref {
        class Reference<T> extends Object {
            public static reachabilityFence(obj: Object): void;
        }
    }
}
