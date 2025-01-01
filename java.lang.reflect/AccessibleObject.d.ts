export {};

declare global {
    namespace java.lang.reflect {
        class AccessibleObject extends Object implements AnnotatedElement {}
    }
}
