# Class Unit

Namespace: [VM](VM.md)  
Assembly: VM.dll  

This class is to represent the Unit.

```csharp
public sealed class Unit
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Unit](VM.Unit.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Unit\(\)

Initializes a new instance of the <xref href="VM.Unit" data-throw-if-not-resolved="false"></xref> class

```csharp
public Unit()
```

### Unit\(Unit\)

Initializes a new instance of the <xref href="VM.Unit" data-throw-if-not-resolved="false"></xref> class

```csharp
public Unit(Unit unitValue)
```

#### Parameters

`unitValue` [Unit](VM.Unit.md)

The unit

### Unit\(UnitType\)

Initializes a new instance of the <xref href="VM.Unit" data-throw-if-not-resolved="false"></xref> class

```csharp
public Unit(UnitType type)
```

#### Parameters

`type` [UnitType](VM.UnitType.md)

The type of unit

### Unit\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Unit" data-throw-if-not-resolved="false"></xref> class

```csharp
public Unit(SerializationInfo information, StreamingContext context)
```

#### Parameters

`information` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context

## Properties

### Angle

Gets or sets the angle.

```csharp
public string Angle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Force

Gets or sets the force.

```csharp
public string Force { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Handle

Gets the handle.

```csharp
public IntPtr Handle { get; }
```

#### Property Value

 [IntPtr](https://learn.microsoft.com/dotnet/api/system.intptr)

### Length

Gets or sets the length.

```csharp
public string Length { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Mass

Gets or sets the mass.

```csharp
public string Mass { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Power

Gets or sets the power

```csharp
public string Power { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Temperature

Gets or sets the temperature

```csharp
public string Temperature { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Time

Gets or sets the time.

```csharp
public string Time { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Work

Gets or sets the work

```csharp
public string Work { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### this\[string\]

Gets or sets the unit by indexer.

```csharp
public string this[string type] { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### ConvertTo\(Unit, string\)

Convert to.

```csharp
public double ConvertTo(Unit referenceUnit, string stringType)
```

#### Parameters

`referenceUnit` [Unit](VM.Unit.md)

The reference unit

`stringType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The convert data

### Dispose\(\)

```csharp
public void Dispose()
```

### Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetFactor\(string\)

Get factor for unit type

```csharp
public double GetFactor(string type)
```

#### Parameters

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unit type

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The factor

### GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Initialize\(string\)

Initializes a instance.

```csharp
public static void Initialize(string stringUnitPath)
```

#### Parameters

`stringUnitPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of unit.

### IsContain\(string\)

Contains unit.

```csharp
public bool IsContain(string stringType)
```

#### Parameters

`stringType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of unit.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if contains unit type, otherwise false.

## Operators

### operator ==\(Unit, Unit\)

Compare two units

```csharp
public static bool operator ==(Unit left, Unit right)
```

#### Parameters

`left` [Unit](VM.Unit.md)

The unit

`right` [Unit](VM.Unit.md)

The unit to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two units are equal, otherwise false.

### operator \!=\(Unit, Unit\)

Compare two units

```csharp
public static bool operator !=(Unit left, Unit right)
```

#### Parameters

`left` [Unit](VM.Unit.md)

The unit

`right` [Unit](VM.Unit.md)

The unit to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two units are not equal, otherwise false.


