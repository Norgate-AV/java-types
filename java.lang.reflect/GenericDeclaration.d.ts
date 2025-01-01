export {};

declare global {
    namespace java.lang.reflect {
        interface GenericDeclaration {
            // getTypeParameters(): TypeVariable<GenericDeclaration>[];
        }
    }
}
