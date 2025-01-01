export {};

declare global {
    namespace java.lang.ref {
        class Cleaner extends Object {}
    }
}
