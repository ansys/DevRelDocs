# Class Clearance

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the clearance

```csharp
public class Clearance
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Clearance](VM.API.Pre.Clearance.md)

#### Derived

[ClearanceRevolute](VM.API.Pre.ClearanceRevolute.md), 
[ClearanceTranslational](VM.API.Pre.ClearanceTranslational.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Clearance\(\)

Default constructor

```csharp
public Clearance()
```

### Clearance\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, bool\)

Initializes a new instance of the <xref href="VM.API.Pre.Clearance" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Clearance(ExpressionValueVariable stiffnessCoefficient, ExpressionValueVariable exponentOfPenetration, ExpressionValueVariable maxDampingCoefficient, bool useDampingEffectInVoid)
```

#### Parameters

`stiffnessCoefficient` ExpressionValueVariable

The stiffness coefficient.

`exponentOfPenetration` ExpressionValueVariable

The exponent of penetration.

`maxDampingCoefficient` ExpressionValueVariable

The max damping coefficient.

`useDampingEffectInVoid` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The use damping effect in void.

## Properties

### ExponentOfPenetration

The value for the exponent of penetration. The default value is 1.5.

```csharp
public ExpressionValueVariable ExponentOfPenetration { get; set; }
```

#### Property Value

 ExpressionValueVariable

### MaxDampingCoefficient

The value for the max damping coefficient. The default value is 10.

```csharp
public ExpressionValueVariable MaxDampingCoefficient { get; set; }
```

#### Property Value

 ExpressionValueVariable

### StiffnessCoefficient

The value for the stiffness coefficient. The default value is 350000.

```csharp
public ExpressionValueVariable StiffnessCoefficient { get; set; }
```

#### Property Value

 ExpressionValueVariable

### UseDampingEffectInVoid

The value for the use damping effect in void. The default value is 'true'.

```csharp
public bool UseDampingEffectInVoid { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


