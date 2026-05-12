#  Interface IExpressionEvaluator

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IExpressionEvaluator
```

## Methods

### <a id="VM_IExpressionEvaluator_Evaluate_System_String_"></a> Evaluate\(string\)

```csharp
object Evaluate(string expression)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_IExpressionEvaluator_TryEvaluate__1_System_String___0__"></a> TryEvaluate<T\>\(string, out T\)

```csharp
bool TryEvaluate<T>(string expression, out T result)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

`result` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

