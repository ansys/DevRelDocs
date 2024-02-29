# <a id="VM_Models_Post_ExtendedUnit"></a> Class ExtendedUnit

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class ExtendedUnit
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ExtendedUnit__ctor_VM_UnitType_"></a> ExtendedUnit\(UnitType\)

```csharp
public ExtendedUnit(UnitType unitType)
```

#### Parameters

`unitType` UnitType

## Properties

### <a id="VM_Models_Post_ExtendedUnit_Angle"></a> Angle

```csharp
public string Angle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_Force"></a> Force

```csharp
public string Force { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_IsInitialized"></a> IsInitialized

```csharp
public static bool IsInitialized { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ExtendedUnit_Length"></a> Length

```csharp
public string Length { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_Mass"></a> Mass

```csharp
public string Mass { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_Power"></a> Power

```csharp
public string Power { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_Temperature"></a> Temperature

```csharp
public string Temperature { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_Time"></a> Time

```csharp
public string Time { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_Type"></a> Type

```csharp
public UnitType Type { get; }
```

#### Property Value

 UnitType

### <a id="VM_Models_Post_ExtendedUnit_Work"></a> Work

```csharp
public string Work { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_Item_System_String_"></a> this\[string\]

```csharp
public string this[string dimension] { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_Item_VM_Models_Post_DimensionType_"></a> this\[DimensionType\]

```csharp
public string this[DimensionType dimensionType] { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_ExtendedUnit_AllowDimensionType_VM_Models_Post_DimensionType_"></a> AllowDimensionType\(DimensionType\)

```csharp
public static bool AllowDimensionType(DimensionType dimensionType)
```

#### Parameters

`dimensionType` [DimensionType](VM.Models.Post.DimensionType.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ExtendedUnit_AllowDimensionType_System_String_"></a> AllowDimensionType\(string\)

```csharp
public static bool AllowDimensionType(string dimension)
```

#### Parameters

`dimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ExtendedUnit_Contains_System_String_"></a> Contains\(string\)

```csharp
public bool Contains(string dimension)
```

#### Parameters

`dimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ExtendedUnit_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator<DimensionType> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[DimensionType](VM.Models.Post.DimensionType.md)\>

### <a id="VM_Models_Post_ExtendedUnit_GetFactor_VM_Models_Post_DimensionType_"></a> GetFactor\(DimensionType\)

```csharp
public double GetFactor(DimensionType dimensionType)
```

#### Parameters

`dimensionType` [DimensionType](VM.Models.Post.DimensionType.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ExtendedUnit_Initialize_System_String_"></a> Initialize\(string\)

```csharp
public static void Initialize(string filePath)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_ToDimension_System_String_"></a> ToDimension\(string\)

```csharp
public string ToDimension(string units)
```

#### Parameters

`units` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_ToUnit_System_String_"></a> ToUnit\(string\)

```csharp
public string ToUnit(string dimensions)
```

#### Parameters

`dimensions` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedUnit_TryGetMatchedUnitType_VM_UnitType__System_String___"></a> TryGetMatchedUnitType\(out UnitType, params string\[\]\)

```csharp
public static bool TryGetMatchedUnitType(out UnitType unitType, params string[] units)
```

#### Parameters

`unitType` UnitType

`units` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ExtendedUnit_TryGetUnitFactor_System_String_System_Double_System_Nullable_System_ValueTuple_System_String_System_Double____"></a> TryGetUnitFactor\(string, double, out \(string Unit, double Factor\)?\)

```csharp
public static bool TryGetUnitFactor(string dimension, double factor, out (string Unit, double Factor)? value)
```

#### Parameters

`dimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`factor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`value` \([string](https://learn.microsoft.com/dotnet/api/system.string) [Unit](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double\-.unit), [double](https://learn.microsoft.com/dotnet/api/system.double) [Factor](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double\-.factor)\)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ExtendedUnit_TryToUnit_System_String_System_String__"></a> TryToUnit\(string, out string\)

```csharp
public bool TryToUnit(string dimension, out string unit)
```

#### Parameters

`dimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

