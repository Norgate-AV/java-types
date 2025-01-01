export {};

declare global {
    namespace java.lang {
        class String extends Object {
            constructor(value: string);
            charAt(index: number): string;
            length(): number;
            substring(start: number, end?: number): String;
            indexOf(ch: number | string, fromIndex?: number): number;
            static valueOf(value: any): String;
        }
    }
}
