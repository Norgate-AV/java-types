export {};

import AnnotatedElement = java.lang.reflect.AnnotatedElement;

declare global {
    namespace java.lang {
        class Module extends Object implements AnnotatedElement {}
    }
}
