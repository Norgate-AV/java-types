export {};

declare global {
    namespace java.lang {
        /**
         * A class implements the `Cloneable` interface to indicate to the {@link Object.clone Object.clone()} method that it is legal for that method to make a field-for-field copy of instances of that class.
         *
         * Invoking Object's clone method on an instance that does not implement the `Cloneable` interface results in the exception `CloneNotSupportedException` being thrown.
         *
         * By convention, classes that implement this interface should override `Object.clone` (which is protected) with a public method. See {@link Object.clone Object.clone()} for details on overriding this method.
         *
         * Note that this interface does *not* contain the `clone` method. Therefore, it is not possible to clone an object merely by virtue of the fact that it implements this interface. Even if the clone method is invoked reflectively, there is no guarantee that it will succeed.
         *
         * @since 1.0
         *
         * @see {@link CloneNotSupportedException CloneNotSupportedException}, {@link Object.clone Object.clone()}
         */
        interface Cloneable {}
    }
}
