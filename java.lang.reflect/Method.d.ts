export {};

declare global {
    namespace java.lang.reflect {
        class Method extends Executable implements AnnotatedElement {}
    }
}
