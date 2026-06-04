# Class DataItemIdentifier

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Identifies a data subtype (T, TL, PL, etc.) -- with an optional fluid
constituent (A, B, W, etc.) -- associated with an "item"
(an entity (node, lump, etc.), register, record number, etc.), e.g.,
MAIN.T6, FLOW.PL100, FLOW.GTA10, MYREGISTER DIMENSIONLESS.
Note: the Units member is only applicable to registers. If null,
default units will be assumed.

```csharp
public class DataItemIdentifier
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DataItemIdentifier\(ItemIdentifier, DataSubtype, UnitsData\)

Use this ctor to combine an ItemIdentifier (MAIN.6, MYREGISTER)
with a DataSubtype (T, DIMENSIONLESS) to create a DataItemIdentifier
(MAIN.T6, MYREGISTER DIMENSIONLESS).

```csharp
public DataItemIdentifier(ItemIdentifier itemIdentifier, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`itemIdentifier` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Exceptions

 OpenTDException

### DataItemIdentifier\(string, UnitsData, IDataset\)

Constructs a DataItemIdentifier from a string like "MAIN.T6" or "MY_REGISTER2".
Registers are assumed dimensionless unless registerUnits parameter is set.
Use "MY_UDFA.MAIN.6" to refer to an entity-length UDFA.
Use "MY_UDFA.4" to refer to one array in a user-length UDFA.
UDFAdataset must be set to correctly determine the characteristics of any UDFA's.
(Otherwise the parser doesn't know if MY_UDFA.FLOW.3 is for lumps, paths, etc.)

```csharp
public DataItemIdentifier(string sindaName, UnitsData registerUnits = null, IDataset UDFAdataset = null)
```

#### Parameters

`sindaName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`registerUnits` UnitsData

`UDFAdataset` [IDataset](OpenTD.Results.Dataset.IDataset.md)

### DataItemIdentifier\(string, UnitsData, IEnumerable<string\>, IEnumerable<string\>\)

Deprecated. Do not use this DataItemIdentifier ctor.

```csharp
public DataItemIdentifier(string sindaName, UnitsData units, IEnumerable<string> thermalSubs, IEnumerable<string> fluidSubs)
```

#### Parameters

`sindaName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`units` UnitsData

`thermalSubs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`fluidSubs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Properties

### ItemIdentifier

```csharp
public ItemIdentifier ItemIdentifier { get; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### Subtype

```csharp
public DataSubtype Subtype { get; }
```

#### Property Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### Units

```csharp
public UnitsData Units { get; }
```

#### Property Value

 UnitsData

## Methods

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

### GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### operator ==\(DataItemIdentifier, DataItemIdentifier\)

```csharp
public static bool operator ==(DataItemIdentifier x1, DataItemIdentifier x2)
```

#### Parameters

`x1` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

`x2` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(DataItemIdentifier, DataItemIdentifier\)

```csharp
public static bool operator !=(DataItemIdentifier x1, DataItemIdentifier x2)
```

#### Parameters

`x1` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

`x2` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


