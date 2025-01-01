export {};

declare global {
    namespace java.lang.reflect {
        class Executable extends AccessibleObject implements AnnotatedElement {}
    }
}
