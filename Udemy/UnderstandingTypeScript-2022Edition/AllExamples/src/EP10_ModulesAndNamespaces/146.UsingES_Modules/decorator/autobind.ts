// _ 告訴 ts你不使用這些參數 但你需要他
// auto bind decorator
export function autobind146(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true, // 可配置
    get() {
      const boundFn = originalMethod.bind(this); // 傳遞 this
      return boundFn;
    },
  };

  return adjDescriptor; // 調整後的描述符
}
