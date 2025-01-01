export {};

declare global {
    namespace java.lang {
        class Class<T>
            extends Object
            implements Serializable, GenericDeclaration, Type, AnnotatedElement
        {
            public override toString(): String;
            public toGenericString(): String;
            public static forName(className: String): Class<unknown>;
            public static forName(
                className: String,
                initialize: boolean,
                loader: ClassLoader,
            ): Class<unknown>;
            public static forName(module: Module, name: String): Class<unknown>;
            public newInstance(): T;
            public isInstance(obj: Object): boolean;
            public isAssignableFrom(cls: Class<unknown>): boolean;
            public isInterface(): boolean;
            public isArray(): boolean;
            public isPrimitive(): boolean;
            public isAnnotation(): boolean;
            public isSynthetic(): boolean;
            public getName(): String;
            public getClassLoader(): ClassLoader;
            public getModule(): Module;
            public getTypeParameters(): TypeVariable<Class<T>>[];
            public getSuperclass(): Class<unknown extends T ? T : unknown>;
            public getGenericSuperclass(): Type;
            public getPackage(): Package;
            public getPackageName(): String;
            public getInterfaces(): Class<unknown>[];
            public getGenericInterfaces(): Type[];
            public getComponentType(): Class<unknown>;
            public getModifiers(): int;
            public getSigners(): Object[];
            public getEnclosingMethod(): Method;
            public getEnclosingConstructor(): Constructor<unknown>;
            public getDeclaringClass(): Class<unknown>;
            public getEnclosingClass(): Class<unknown>;
            public getSimpleName(): String;
            public getTypeName(): String;
            public getCanonicalName(): String;
            public isAnonymousClass(): boolean;
            public isLocalClass(): boolean;
            public isMemberClass(): boolean;
            public getClasses(): Class<unknown>[];
            public getFields(): Field[];
            public getMethods(): Method[];
            public getConstructors(): Constructor<unknown>[];
            public getField(name: String): Field;
            public getMethod(
                name: String,
                ...parameterTypes: Class<unknown>[]
            ): Method;
            public getConstructor(
                ...parameterTypes: Class<unknown>[]
            ): Constructor<T>;
            public getDeclaredClasses(): Class<unknown>[];
            public getDeclaredFields(): Field[];
            public getDeclaredMethods(): Method[];
            public getDeclaredConstructors(): Constructor<unknown>[];
            public getDeclaredField(name: String): Field;
            public getDeclaredMethod(
                name: String,
                ...parameterTypes: Class<unknown>[]
            ): Method;
            public getDeclaredConstructor(
                ...parameterTypes: Class<unknown>[]
            ): Constructor<T>;
            public getResourceStream(name: String): InputStream;
            public getResource(name: String): URL;
            public getProtectionDomain(): ProtectionDomain;
            public desiredAssertionStatus(): boolean;
            public isEnum(): boolean;
            public getEnumConstants(): T[];
            public cast(obj: Object): T;
            public asSubclass<U>(
                clazz: Class<U>,
            ): Class<unknown extends U ? U : unknown>;
            public getAnnotation<A extends Annotation>(
                annotationClass: Class<A>,
            ): A;
            public isAnnotationPresent(annotationClass: Class<unknown extends Annotation>): boolean;
            public getAnnotationsByType<A extends Annotation>(annotationClass: Class<A>): A[];
            public getAnnotations(): Annotation[];
            public getDeclaredAnnotation(
                annotationClass: Class<unknown extends Annotation>,
            ): Annotation;
            public getDeclaredAnnotationsByType<A extends Annotation>(
                annotationClass: Class<A>,
            ): A[];
            public getDeclaredAnnotations(): Annotation[];
            public getAnnotatedSuperclass(): AnnotatedType;
            public getAnnotatedInterfaces(): AnnotatedType[];
            public getNestHost(): Class<unknown>;
            public isNestmateOf(c: Class<unknown>): boolean;
            public getNestMembers(): Class<unknown>[];
        }
    }
}
