export {};

declare global {
    namespace java.util {
        class HashMap<K, V> {
            public constructor();
        }
    }
}
