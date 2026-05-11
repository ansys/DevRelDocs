# Class Unit.ConvertFactor

Namespace: [VM](VM.md)  
Assembly: VM.dll  

This class is to represent the convert factor.

```csharp
public sealed class Unit.ConvertFactor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Unit.ConvertFactor](VM.Unit.ConvertFactor.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ConvertFactor\(Unit, Unit\)

Initializes a new instance of the <xref href="VM.Unit.ConvertFactor" data-throw-if-not-resolved="false"></xref> class

```csharp
public ConvertFactor(Unit unitFrom, Unit unitTo)
```

#### Parameters

`unitFrom` [Unit](VM.Unit.md)

The unit from.

`unitTo` [Unit](VM.Unit.md)

The unit to.

### ConvertFactor\(Unit, ConvertFactor\)

Initializes a new instance of the <xref href="VM.Unit.ConvertFactor" data-throw-if-not-resolved="false"></xref> class

```csharp
public ConvertFactor(Unit unitFrom, Unit.ConvertFactor factor)
```

#### Parameters

`unitFrom` [Unit](VM.Unit.md)

The unit from.

`factor` [Unit](VM.Unit.md).[ConvertFactor](VM.Unit.ConvertFactor.md)

The factor.

## Properties

### Default

Gets the default convert factor

```csharp
public static Unit.ConvertFactor Default { get; }
```

#### Property Value

 [Unit](VM.Unit.md).[ConvertFactor](VM.Unit.ConvertFactor.md)

### FromUCF

Gets the from UCF.

```csharp
public double FromUCF { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ToUCF

Gets the to UCF.

```csharp
public double ToUCF { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[string\]

Gets the convert factor by using indexer

```csharp
public double this[string stringDimension] { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CalculateShiftingUnit\(string, double\)

Calculate Shifting Unit.

```csharp
public double CalculateShiftingUnit(string stringType, double value)
```

#### Parameters

`stringType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unit type

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The converted value

### Dispose\(\)

```csharp
public void Dispose()
```


