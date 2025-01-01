export {};

import AnnotatedElement = java.lang.reflect.AnnotatedElement;

declare global {
    namespace java.lang {
        class Package extends Object implements AnnotatedElement {}
    }
}
