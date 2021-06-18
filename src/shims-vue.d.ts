declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// interface ComputedRef<T = any> extends WritableComputedRef<T> {
//   readonly value: T;
// }

// interface WritableComputedRef<T> extends Ref<T>{
// }

// interface Ref<T = any> {
//   readonly [_refBrand]: true;
//   value: T;
// }