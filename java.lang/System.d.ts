export {};

declare global {
    namespace java.lang {
        class System {
            public static identityHashCode(obj: Object): number;
        }
    }
}
