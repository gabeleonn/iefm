type Constructor<T = {}> = new (...args: any[]) => T;

export function OmitType<
  TBase extends Constructor,
  K extends keyof InstanceType<TBase>,
>(Base: TBase, keys: K[]) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);

      keys.forEach((key) => {
        if (key in this) {
          delete (this as any)[key];
        }
      });
    }
  };
}

export function PickType<
  TBase extends Constructor,
  K extends keyof InstanceType<TBase>,
>(Base: TBase, keys: K[]) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);

      Object.keys(this).forEach((key) => {
        if (!keys.includes(key as K)) {
          delete (this as any)[key];
        }
      });
    }
  };
}
