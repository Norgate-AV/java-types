export {};

declare global {
    namespace java.lang.reflect {
        interface AnnotatedElement {
            // isAnnotationPresent(annotationClass: Class<Annotation>): boolean;
            // getAnnotation<A extends Annotation>(annotationClass: Class<A>): A;
            // getAnnotations(): Annotation[];
            // getDeclaredAnnotations(): Annotation[];
            // getAnnotationsByType<A extends Annotation>(
            //     annotationClass: Class<A>,
            // ): A[];
            // getDeclaredAnnotationsByType<A extends Annotation>(
            //     annotationClass: Class<A>,
            // ): A[];
        }
    }
}
