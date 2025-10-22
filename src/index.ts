/**
 * 将指定属性的类型替换为 R 中对应的类型
 *
 * @example
 * ```ts
 * type A = {
 *   name: string;
 *   age: number;
 * }
 * // 下面两个类型定义是相同的
 * type B = ReplaceAttrs<A, { name: number }>
 * type C = {
 *   name: number;
 *   age: number;
 * }
 * ```
 */
export type ReplaceAttrs<T, R extends Record<string, unknown> = Record<string, never>> = {
  [P in keyof T]: P extends keyof R ? R[P] : T[P];
};

/**
 * 将类类型转换为接口类型
 *
 * @example
 * ```ts
 * class A {
 *   public foo(str: string): number {
 *     return str.length;
 *   }
 *
 *   private bar(num: number): string {
 *     return num.toString();
 *   }
 * }
 *
 * // 下面两个类型定义是相同的
 * type B = ClassToInterface<A>
 * interface C {
 *   foo(str: string): number;
 * }
 * ```
 **/
export type ClassToInterface<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : never;
};

export default {};
