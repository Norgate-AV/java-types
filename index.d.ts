export {};

declare global {
    namespace java {
        type byte = number;
        type char = string;
        type int = number;
        type long = number;
        type float = number;
        type double = number;

        type bool = boolean;

        type charArray = char[];
        type byteArray = byte[];
    }
}

export * from "./java.lang";
