# <a id="VM_Models_Post_ChartMathLib_FFTParameters"></a> Class FFTParameters

Namespace: [VM.Models.Post.ChartMathLib](VM.Models.Post.ChartMathLib.md)  
Assembly: VM.Models.Post.ChartMathLib.dll  

```csharp
public class FFTParameters : IFFTParameters
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FFTParameters](VM.Models.Post.ChartMathLib.FFTParameters.md)

#### Implements

IFFTParameters

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ChartMathLib_FFTParameters__ctor"></a> FFTParameters\(\)

```csharp
public FFTParameters()
```

## Properties

### <a id="VM_Models_Post_ChartMathLib_FFTParameters_Points"></a> Points

```csharp
public int Points { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ChartMathLib_FFTParameters_States"></a> States

```csharp
public IList<int> States { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_ChartMathLib_FFTParameters_WindowType"></a> WindowType

```csharp
public FFTWindowType WindowType { get; set; }
```

#### Property Value

 FFTWindowType

