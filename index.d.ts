export {};

export * from "./java.io";
export * from "./java.lang";
export * from "./java.lang.ref";
export * from "./java.lang.reflect";
export * from "./java.util";

declare global {
    type byte = number;
    type char = string;
    type short = number;
    type int = number;
    type long = number;
    type float = number;
    type double = number;

    type charArray = char[];
    type byteArray = byte[];

    /**
     * Provides classes that are fundamental to the design of the Java programming language. The most important classes are `Object`, which is the root of the class hierarchy, and `Class`, instances of which represent classes at run time.
     *
     * Frequently it is necessary to represent a value of primitive type as if it were an object. The wrapper classes `Boolean`, `Character`, `Integer`, `Long`, `Float`, and `Double` serve this purpose. An object of type `Double`, for example, contains a field whose type is double, representing that value in such a way that a reference to it can be stored in a variable of reference type. These classes also provide a number of methods for converting among primitive values, as well as supporting such standard methods as equals and hashCode. The `Void` class is a non-instantiable class that holds a reference to a `Class` object representing the type void.
     *
     * The class `Math` provides commonly used mathematical functions such as sine, cosine, and square root. The classes `String`, `StringBuffer`, and `StringBuilder` similarly provide commonly used operations on character strings.
     *
     * Classes `ClassLoader`, `Process`, `ProcessBuilder`, `Runtime`, `SecurityManager`, and `System` provide "system operations" that manage the dynamic loading of classes, creation of external processes, host environment inquiries such as the time of day, and enforcement of security policies.
     *
     * Class `Throwable` encompasses objects that may be thrown by the `throw` statement. Subclasses of `Throwable` represent errors and exceptions.
     *
     * ### Character Encodings
     *
     * The specification of the {@link java.nio.charset.Charset java.nio.charset.Charset} class describes the naming conventions for character encodings as well as the set of standard encodings that must be supported by every implementation of the Java platform.
     *
     * @since 1.0
     */
    namespace java.lang {}
    namespace java.lang.ref {}
    namespace java.lang.reflect {}
    namespace java.io {}
    namespace java.net {}
    namespace java.nio {}
    namespace java.util {}
}
