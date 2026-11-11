# Class GraphicsResolutionPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global dwg graphics size preferences.

```csharp
[MessagePackObject(true)]
public class GraphicsResolutionPreferences : Preferences, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[GraphicsResolutionPreferences](OpenTD.UserPreferences.GraphicsResolutionPreferences.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### GraphicsResolutionPreferences\(\)

```csharp
public GraphicsResolutionPreferences()
```

### GraphicsResolutionPreferences\(ThermalDesktop\)

```csharp
public GraphicsResolutionPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### facetRes

```csharp
public double facetRes { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### maxSurfaceFacetsPerFullCircle

```csharp
public int maxSurfaceFacetsPerFullCircle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### pipeDegPerPointIndex

```csharp
public int pipeDegPerPointIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```


