# <a id="VM_Models_Post_EvaluationResolver"></a> Class EvaluationResolver

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class EvaluationResolver
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EvaluationResolver](VM.Models.Post.EvaluationResolver.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_EvaluationResolver_IsWorking"></a> IsWorking

```csharp
public static bool IsWorking { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Post_EvaluationResolver_ContainsEntity_System_String_"></a> ContainsEntity\(string\)

```csharp
public static bool ContainsEntity(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EvaluationResolver_GetPaths"></a> GetPaths\(\)

```csharp
public static IEnumerable<string> GetPaths()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_EvaluationResolver_TryGetCurveValue_System_String_System_Collections_Generic_IEnumerable_System_String__System_Int32_System_Collections_Generic_IEnumerable_System_ValueTuple_System_Double_System_Double____"></a> TryGetCurveValue\(string, IEnumerable<string\>, int, out IEnumerable<\(double X, double Y\)\>\)

```csharp
public static bool TryGetCurveValue(string name, IEnumerable<string> paths, int step, out IEnumerable<(double X, double Y)> values)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`paths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`step` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`values` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<\([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Y](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.y)\)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EvaluationResolver_TryGetForceInfo_System_String_System_Int32_System_Boolean_System_Double____"></a> TryGetForceInfo\(string, int, bool, out double\[\]\)

```csharp
public static bool TryGetForceInfo(string name, int step, bool isforce, out double[] values)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`step` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`isforce` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`values` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EvaluationResolver_TryGetMarkerInfo_System_String_System_Int32_System_Double____"></a> TryGetMarkerInfo\(string, int, out double\[\]\)

```csharp
public static bool TryGetMarkerInfo(string name, int step, out double[] values)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`step` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`values` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EvaluationResolver_TryGetStep_System_Int32__"></a> TryGetStep\(out int\)

```csharp
public static bool TryGetStep(out int step)
```

#### Parameters

`step` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EvaluationResolver_TryGetTime_System_Double__"></a> TryGetTime\(out double\)

```csharp
public static bool TryGetTime(out double time)
```

#### Parameters

`time` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EvaluationResolver_TryMoveNextStep"></a> TryMoveNextStep\(\)

```csharp
public static bool TryMoveNextStep()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_EvaluationResolver_ValidateEntityName_System_String_"></a> ValidateEntityName\(string\)

```csharp
public static void ValidateEntityName(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

