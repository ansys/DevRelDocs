# Class GraphicsVisibilityPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global dwg graphics visibility preferences.

```csharp
[MessagePackObject(true)]
public class GraphicsVisibilityPreferences : Preferences, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[GraphicsVisibilityPreferences](OpenTD.UserPreferences.GraphicsVisibilityPreferences.md)

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

### GraphicsVisibilityPreferences\(\)

```csharp
public GraphicsVisibilityPreferences()
```

### GraphicsVisibilityPreferences\(ThermalDesktop\)

```csharp
public GraphicsVisibilityPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### pipeDrawOptions

```csharp
public int pipeDrawOptions { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### showAssemblies

```csharp
public bool showAssemblies { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showColorContours

```csharp
public bool showColorContours { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showCompartment

```csharp
public bool showCompartment { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showConductors

```csharp
public bool showConductors { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showContactConductance

```csharp
public bool showContactConductance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showContactors

```csharp
public bool showContactors { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showDisabled

```csharp
public bool showDisabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showFTies

```csharp
public bool showFTies { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showFiniteElementBoundariesShaded

```csharp
public bool showFiniteElementBoundariesShaded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showFkLocator

```csharp
public bool showFkLocator { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showGenerateCondCapOff

```csharp
public bool showGenerateCondCapOff { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showHeatEx

```csharp
public bool showHeatEx { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showHeatLoads

```csharp
public bool showHeatLoads { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showIFaces

```csharp
public bool showIFaces { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showLumps

```csharp
public bool showLumps { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showMeasures

```csharp
public bool showMeasures { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showMeshDisplayers

```csharp
public bool showMeshDisplayers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showMeshManagers

```csharp
public bool showMeshManagers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showMliRibs

```csharp
public bool showMliRibs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showNodalBoundaries

```csharp
public bool showNodalBoundaries { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showNodes

```csharp
public bool showNodes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showOrienters

```csharp
public bool showOrienters { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPathLink

```csharp
public bool showPathLink { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPaths

```csharp
public bool showPaths { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPipes

```csharp
public bool showPipes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPort

```csharp
public bool showPort { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPrimitiveAxesInWireframeView

```csharp
public bool showPrimitiveAxesInWireframeView { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showRotationAxis

```csharp
public bool showRotationAxis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showSolidFiniteElements

```csharp
public bool showSolidFiniteElements { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showSurfaces

```csharp
public bool showSurfaces { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTdDirectImporters

```csharp
public bool showTdDirectImporters { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTdText

```csharp
public bool showTdText { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTee

```csharp
public bool showTee { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTies

```csharp
public bool showTies { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTrackers

```csharp
public bool showTrackers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showUserNodes

```csharp
public bool showUserNodes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showWireframeThickness

```csharp
public bool showWireframeThickness { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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


