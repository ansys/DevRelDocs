# Class GraphicsVisibilityPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global dwg graphics visibility preferences.

```csharp
[DataContract]
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

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

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
[DataMember]
public int pipeDrawOptions { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### showAssemblies

```csharp
[DataMember]
public bool showAssemblies { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showColorContours

```csharp
[DataMember]
public bool showColorContours { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showCompartment

```csharp
[DataMember]
public bool showCompartment { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showConductors

```csharp
[DataMember]
public bool showConductors { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showContactConductance

```csharp
[DataMember]
public bool showContactConductance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showContactors

```csharp
[DataMember]
public bool showContactors { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showDisabled

```csharp
[DataMember]
public bool showDisabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showFTies

```csharp
[DataMember]
public bool showFTies { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showFiniteElementBoundariesShaded

```csharp
[DataMember]
public bool showFiniteElementBoundariesShaded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showFkLocator

```csharp
[DataMember]
public bool showFkLocator { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showGenerateCondCapOff

```csharp
[DataMember]
public bool showGenerateCondCapOff { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showHeatEx

```csharp
[DataMember]
public bool showHeatEx { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showHeatLoads

```csharp
[DataMember]
public bool showHeatLoads { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showIFaces

```csharp
[DataMember]
public bool showIFaces { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showLumps

```csharp
[DataMember]
public bool showLumps { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showMeasures

```csharp
[DataMember]
public bool showMeasures { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showMeshDisplayers

```csharp
[DataMember]
public bool showMeshDisplayers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showMeshManagers

```csharp
[DataMember]
public bool showMeshManagers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showMliRibs

```csharp
[DataMember]
public bool showMliRibs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showNodalBoundaries

```csharp
[DataMember]
public bool showNodalBoundaries { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showNodes

```csharp
[DataMember]
public bool showNodes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showOrienters

```csharp
[DataMember]
public bool showOrienters { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPathLink

```csharp
[DataMember]
public bool showPathLink { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPaths

```csharp
[DataMember]
public bool showPaths { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPipes

```csharp
[DataMember]
public bool showPipes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPort

```csharp
[DataMember]
public bool showPort { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showPrimitiveAxesInWireframeView

```csharp
[DataMember]
public bool showPrimitiveAxesInWireframeView { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showRotationAxis

```csharp
[DataMember]
public bool showRotationAxis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showSolidFiniteElements

```csharp
[DataMember]
public bool showSolidFiniteElements { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showSurfaces

```csharp
[DataMember]
public bool showSurfaces { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTdDirectImporters

```csharp
[DataMember]
public bool showTdDirectImporters { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTdText

```csharp
[DataMember]
public bool showTdText { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTee

```csharp
[DataMember]
public bool showTee { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTies

```csharp
[DataMember]
public bool showTies { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showTrackers

```csharp
[DataMember]
public bool showTrackers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showUserNodes

```csharp
[DataMember]
public bool showUserNodes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### showWireframeThickness

```csharp
[DataMember]
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


