# Class AnalysisStaticLoad.DamageRadius

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The damage radius class

```csharp
public class AnalysisStaticLoad.DamageRadius
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisStaticLoad.DamageRadius](VM.Managed.DAFUL.Car.AnalysisStaticLoad.DamageRadius.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DamageRadius\(\)

Initializes the <xref href="VM.Managed.DAFUL.Car.AnalysisStaticLoad.DamageRadius" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DamageRadius()
```

### DamageRadius\(ILinkContainer\)

Initializes the <xref href="VM.Managed.DAFUL.Car.AnalysisStaticLoad.DamageRadius" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DamageRadius(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### L

Gets or sets the left.

```csharp
public double L { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### R

Gets or sets the right.

```csharp
public double R { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```


