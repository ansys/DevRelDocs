# <a id="OpenTD_Results_Dataset_DataItemIdentifier"></a> Class DataItemIdentifier

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

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_DataItemIdentifier__ctor_OpenTD_Results_Dataset_ItemIdentifier_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> DataItemIdentifier\(ItemIdentifier, DataSubtype, UnitsData\)

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

### <a id="OpenTD_Results_Dataset_DataItemIdentifier__ctor_System_String_OpenTD_UnitsData_OpenTD_Results_Dataset_IDataset_"></a> DataItemIdentifier\(string, UnitsData, IDataset\)

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

### <a id="OpenTD_Results_Dataset_DataItemIdentifier__ctor_System_String_OpenTD_UnitsData_System_Collections_Generic_IEnumerable_System_String__System_Collections_Generic_IEnumerable_System_String__"></a> DataItemIdentifier\(string, UnitsData, IEnumerable<string\>, IEnumerable<string\>\)

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

### <a id="OpenTD_Results_Dataset_DataItemIdentifier_ItemIdentifier"></a> ItemIdentifier

```csharp
public ItemIdentifier ItemIdentifier { get; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### <a id="OpenTD_Results_Dataset_DataItemIdentifier_Subtype"></a> Subtype

```csharp
public DataSubtype Subtype { get; }
```

#### Property Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### <a id="OpenTD_Results_Dataset_DataItemIdentifier_Units"></a> Units

```csharp
public UnitsData Units { get; }
```

#### Property Value

 UnitsData

## Methods

### <a id="OpenTD_Results_Dataset_DataItemIdentifier_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_Results_Dataset_DataItemIdentifier_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="OpenTD_Results_Dataset_DataItemIdentifier_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### <a id="OpenTD_Results_Dataset_DataItemIdentifier_op_Equality_OpenTD_Results_Dataset_DataItemIdentifier_OpenTD_Results_Dataset_DataItemIdentifier_"></a> operator ==\(DataItemIdentifier, DataItemIdentifier\)

```csharp
public static bool operator ==(DataItemIdentifier x1, DataItemIdentifier x2)
```

#### Parameters

`x1` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

`x2` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_DataItemIdentifier_op_Inequality_OpenTD_Results_Dataset_DataItemIdentifier_OpenTD_Results_Dataset_DataItemIdentifier_"></a> operator \!=\(DataItemIdentifier, DataItemIdentifier\)

```csharp
public static bool operator !=(DataItemIdentifier x1, DataItemIdentifier x2)
```

#### Parameters

`x1` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

`x2` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

