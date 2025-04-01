# Class FacetOption

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This class is to represent the facet option.

```csharp
public class FacetOption
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FacetOption](VM.Models.Pre.FacetOption.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### FacetOption\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.FacetOption" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FacetOption()
```

### FacetOption\(double, double, double\)

Initializes a new instance of the <xref href="VM.Models.Pre.FacetOption" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FacetOption(double maxEdgeLength, double surfaceTolerance, double normalTolerance)
```

#### Parameters

`maxEdgeLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

The maximum edge length.

`surfaceTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The surface tolerance.

`normalTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The normal tolerance.

## Properties

### MaxEdgeLength

Gets or sets the maximum edge length.

```csharp
public double MaxEdgeLength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### NormalTolerance

Gets or sets the normal tolerance.

```csharp
public double NormalTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SurfaceTolerance

Gets or sets the surface tolerance.

```csharp
public double SurfaceTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)


