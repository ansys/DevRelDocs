# Struct FullStandardDataSubtype

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Represents a StandardDataSubtype (XG, XMDOT, etc.) and a fluid constituent (A, W, etc.)

```csharp
public struct FullStandardDataSubtype
```

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### FullStandardDataSubtype\(StandardDataSubtypes, FluidConstituents\)

```csharp
public FullStandardDataSubtype(StandardDataSubtypes subtype, FluidConstituents fluidConstituent)
```

#### Parameters

`subtype` [StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

`fluidConstituent` [FluidConstituents](OpenTD.Results.Dataset.FluidConstituents.md)

### FullStandardDataSubtype\(StandardDataSubtypes\)

```csharp
public FullStandardDataSubtype(StandardDataSubtypes subtype)
```

#### Parameters

`subtype` [StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

### FullStandardDataSubtype\(string\)

```csharp
public FullStandardDataSubtype(string fullStdSubtype)
```

#### Parameters

`fullStdSubtype` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### FluidConstituent

```csharp
public readonly FluidConstituents FluidConstituent { get; }
```

#### Property Value

 [FluidConstituents](OpenTD.Results.Dataset.FluidConstituents.md)

### Subtype

```csharp
public readonly StandardDataSubtypes Subtype { get; }
```

#### Property Value

 [StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

## Methods

### ToString\(\)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified type name.


