export {};

declare global {
    namespace java.lang.reflect {
        class Field extends AccessibleObject implements Member {}
    }
}
