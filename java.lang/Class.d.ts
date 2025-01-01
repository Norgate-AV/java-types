export {};

declare global {
    namespace java.lang {
        class Class<T> {
            static forName(name: string): Class<unknown>;
            getName(): string;
            newInstance(): T;
        }
    }
}
