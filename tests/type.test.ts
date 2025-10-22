import { ReplaceAttrs, ClassToInterface } from '../src';

describe('Type', () => {
  it('ReplaceAttrs', () => {
    type A = {
      name: string;
      age: number;
    };
    type B = ReplaceAttrs<A, { name: number }>;
    const b: B = { name: 1, age: 2 };
    expect(b.name).toBe(1);
  });

  it('ClassToInterface', () => {
    class A {
      public foo(str: string): number {
        return str.length;
      }

      private bar(num: number): string {
        return num.toString();
      }
    }

    // 下面两个类型定义是相同的
    type B = ClassToInterface<A>;
    interface C {
      foo(str: string): number;
    }

    const b: B = new A();
    const c: C = b;

    expect(c.foo('123')).toBe(3);
  });
});
