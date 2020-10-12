TypeScript React Use Key to Force Reset Demo
=================================

如果一个react component内部有自己维护的state，我们很难从外部强迫它进行变化，除非我们在组件内部专门使用类似于

```
useEffect(() => {
  setSomeInternalValue(initValue)
}, [initValue])
```

这样做很麻烦，并且当`initValue`是array或者object的时候，可能还需要复杂的比较才能确保不会产生无限render
（比如外界传入的`initValue`每次都是新生成的对象，但是内容实际上是一样的）

一种简单方法是，可以使用某个component的`key`属性来force reset某个component。
比如我们是在一个复杂的form中，有一个`Clear All`或者`Restore to defaults`这样的按钮，
需要强制清空所有的filter或者让它们使用给定的值重新render，就可以使用这样的方式：

1. 在某个全局的state中设置一个类似于`resetAll: string`的属性，其值是一个较复杂的unique字符串，或者其它不容易与其它key恰巧冲突的形式
1. 把整个表单form组件本身的`key`属性设置为`resetAll`，比如`someForm-${resetAll}`
1. 当点击`Clear All`或者`Restore to defaults`的时候，给它一个完全不同的值（比如uuid）
1. 由于form组件的key变了，整个form会重新使用传给它的form state进行render，则内部所有filter的值会强制更新

```
npm install
npm run demo
```

It will open page on browser automatically.
