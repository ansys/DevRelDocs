# <a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel"></a> Interface IOperationsSimpleMathLineDataSeriesViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public interface IOperationsSimpleMathLineDataSeriesViewModel
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel_MathType"></a> MathType

Get or Set the type of simple math. It has Add, Subtract, Multiply.

```csharp
SimpleMathType MathType { get; set; }
```

#### Property Value

 SimpleMathType

### <a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel_Points"></a> Points

Get or Set the number of the data points for interpolation.

```csharp
int Points { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

