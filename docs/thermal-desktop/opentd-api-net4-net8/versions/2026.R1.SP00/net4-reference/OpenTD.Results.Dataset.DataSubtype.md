# Class DataSubtype

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Represents one data subtype, e.g., TL (lump temperature). If using C#, you can supply
a StandardDataSubtype anywhere a DataSubtype is expected and it will be implicity converted
to a DataSubtype. This also works with a FullStandardDataSubtype.

```csharp
public class DataSubtype : IEquatable<DataSubtype>
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

## Implements

[IEquatable<DataSubtype\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### DataSubtype\(StandardDataSubtypes\)

```csharp
public DataSubtype(StandardDataSubtypes stdDataSubtype)
```

#### Parameters

`stdDataSubtype` [StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

### DataSubtype\(StandardDataSubtypes, FluidConstituents\)

```csharp
public DataSubtype(StandardDataSubtypes stdDataSubtype, FluidConstituents fluidConstituent)
```

#### Parameters

`stdDataSubtype` [StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

`fluidConstituent` [FluidConstituents](OpenTD.Results.Dataset.FluidConstituents.md)

### DataSubtype\(FullStandardDataSubtype\)

```csharp
public DataSubtype(FullStandardDataSubtype stdDataSubtypeWithFluid)
```

#### Parameters

`stdDataSubtypeWithFluid` [FullStandardDataSubtype](OpenTD.Results.Dataset.FullStandardDataSubtype.md)

### DataSubtype\(UnitsType, bool, string, string, DataTypes, FluidConstituents\)

```csharp
public DataSubtype(UnitsData.UnitsType dimension, bool isDimensionalOnlyIfPositive, string description, string baseSindaDesignator, DataTypes dataType, FluidConstituents fluidConstituent = FluidConstituents.NOT_SET)
```

#### Parameters

`dimension` UnitsData.UnitsType

`isDimensionalOnlyIfPositive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

`baseSindaDesignator` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataType` [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

`fluidConstituent` [FluidConstituents](OpenTD.Results.Dataset.FluidConstituents.md)

### DataSubtype\(string, DataTypes, ValueTypes\)

```csharp
public DataSubtype(string udfaName, DataTypes dataType, DataSubtype.ValueTypes valueType)
```

#### Parameters

`udfaName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataType` [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

`valueType` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md).[ValueTypes](OpenTD.Results.Dataset.DataSubtype.ValueTypes.md)

### DataSubtype\(UnitsType, string, DataTypes\)

```csharp
public DataSubtype(UnitsData.UnitsType dimension, string description, DataTypes dataType = DataTypes.NOT_SET)
```

#### Parameters

`dimension` UnitsData.UnitsType

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataType` [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

### DataSubtype\(DataSubtype, FluidConstituents\)

```csharp
public DataSubtype(DataSubtype source, FluidConstituents fluidConstituent)
```

#### Parameters

`source` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`fluidConstituent` [FluidConstituents](OpenTD.Results.Dataset.FluidConstituents.md)

## Properties

### BaseSindaDesignator

The short string used by Sinda to identify this subtype, e.g., "TL".
Stored and returned as all uppercase.

```csharp
public string BaseSindaDesignator { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DataType

The DataTypes enum (node, lump, etc.) associated with this subtype.

```csharp
public DataTypes DataType { get; }
```

#### Property Value

 [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

### DataTypeFamily

The DataTypeFamilies enum (thermal, fluid, other) associated with this subtype.

```csharp
public DataTypeFamilies DataTypeFamily { get; }
```

#### Property Value

 [DataTypeFamilies](OpenTD.Results.Dataset.DataTypeFamilies.md)

### Description

A short description of this subtype, e.g. "lump temperature".

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Dimension

The physical dimension of this subtype, e.g., temperature.

```csharp
public UnitsData.UnitsType Dimension { get; }
```

#### Property Value

 UnitsData.UnitsType

### FluidConstituent

For multispecies subtypes, this is the fluid constituent. For non-multispecies
subtypes, this should be set to NOT_SET.

```csharp
public FluidConstituents FluidConstituent { get; }
```

#### Property Value

 [FluidConstituents](OpenTD.Results.Dataset.FluidConstituents.md)

### IsDimensionalOnlyIfPositive

Determines whether this subtype behaves dimensionally only when positive.
(Some Sinda variables are dimensional if positive and just flags if negative.)

```csharp
public bool IsDimensionalOnlyIfPositive { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUDFA

Determines whether this subtype describes a UDFA.

```csharp
public bool IsUDFA { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SindaDesignator

The short string used by Sinda to identify this subtype, combined with
a fluid constituent letter for multispecies subtypes.

```csharp
public string SindaDesignator { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StandardDataSubtype

Gets the StandardDataSubtypes enum associated with this subtype.

```csharp
public StandardDataSubtypes StandardDataSubtype { get; }
```

#### Property Value

 [StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

### SupportedStandardDataSubtypes

```csharp
public static IEnumerable<StandardDataSubtypes> SupportedStandardDataSubtypes { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)\>

### ValueType

The type of value that this subtype represents.

```csharp
public DataSubtype.ValueTypes ValueType { get; }
```

#### Property Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md).[ValueTypes](OpenTD.Results.Dataset.DataSubtype.ValueTypes.md)

## Methods

### Equals\(DataSubtype\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(DataSubtype x)
```

#### Parameters

`x` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

### Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the specified object  is equal to the current object; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

### GetFullStandardDataSubtype\(\)

Gets the FullStandardDataSubtype associated with this subtype.

```csharp
public FullStandardDataSubtype GetFullStandardDataSubtype()
```

#### Returns

 [FullStandardDataSubtype](OpenTD.Results.Dataset.FullStandardDataSubtype.md)

### GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### SetFrom\(DataSubtype\)

```csharp
public void SetFrom(DataSubtype x)
```

#### Parameters

`x` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### operator ==\(DataSubtype, DataSubtype\)

```csharp
public static bool operator ==(DataSubtype x1, DataSubtype x2)
```

#### Parameters

`x1` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`x2` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### implicit operator DataSubtype\(StandardDataSubtypes\)

```csharp
public static implicit operator DataSubtype(StandardDataSubtypes x)
```

#### Parameters

`x` [StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

#### Returns

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### implicit operator DataSubtype\(FullStandardDataSubtype\)

```csharp
public static implicit operator DataSubtype(FullStandardDataSubtype x)
```

#### Parameters

`x` [FullStandardDataSubtype](OpenTD.Results.Dataset.FullStandardDataSubtype.md)

#### Returns

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### operator \!=\(DataSubtype, DataSubtype\)

```csharp
public static bool operator !=(DataSubtype x1, DataSubtype x2)
```

#### Parameters

`x1` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`x2` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## See Also

[StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md), 
[FullStandardDataSubtype](OpenTD.Results.Dataset.FullStandardDataSubtype.md)


