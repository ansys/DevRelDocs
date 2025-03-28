# Interface IExpressionEvaluator

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public interface IExpressionEvaluator
```

## Methods

### Evaluate\(string\)

```python
object Evaluate(string expression)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### TryEvaluate<T\>\(string, out T\)

```python
bool TryEvaluate<T>(string expression, out T result)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

`result` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


