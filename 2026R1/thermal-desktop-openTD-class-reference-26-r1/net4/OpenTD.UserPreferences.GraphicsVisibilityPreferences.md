# <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences"></a> Class GraphicsVisibilityPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global dwg graphics visibility preferences.

```csharp
[DataContract]
public class GraphicsVisibilityPreferences : Preferences, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[GraphicsVisibilityPreferences](OpenTD.UserPreferences.GraphicsVisibilityPreferences.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences__ctor"></a> GraphicsVisibilityPreferences\(\)

```csharp
public GraphicsVisibilityPreferences()
```

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences__ctor_OpenTD_ThermalDesktop_"></a> GraphicsVisibilityPreferences\(ThermalDesktop\)

```csharp
public GraphicsVisibilityPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_pipeDrawOptions"></a> pipeDrawOptions

```csharp
[DataMember]
public int pipeDrawOptions { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showAssemblies"></a> showAssemblies

```csharp
[DataMember]
public bool showAssemblies { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showColorContours"></a> showColorContours

```csharp
[DataMember]
public bool showColorContours { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showCompartment"></a> showCompartment

```csharp
[DataMember]
public bool showCompartment { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showConductors"></a> showConductors

```csharp
[DataMember]
public bool showConductors { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showContactConductance"></a> showContactConductance

```csharp
[DataMember]
public bool showContactConductance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showContactors"></a> showContactors

```csharp
[DataMember]
public bool showContactors { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showDisabled"></a> showDisabled

```csharp
[DataMember]
public bool showDisabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showFTies"></a> showFTies

```csharp
[DataMember]
public bool showFTies { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showFiniteElementBoundariesShaded"></a> showFiniteElementBoundariesShaded

```csharp
[DataMember]
public bool showFiniteElementBoundariesShaded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showFkLocator"></a> showFkLocator

```csharp
[DataMember]
public bool showFkLocator { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showGenerateCondCapOff"></a> showGenerateCondCapOff

```csharp
[DataMember]
public bool showGenerateCondCapOff { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showHeatEx"></a> showHeatEx

```csharp
[DataMember]
public bool showHeatEx { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showHeatLoads"></a> showHeatLoads

```csharp
[DataMember]
public bool showHeatLoads { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showIFaces"></a> showIFaces

```csharp
[DataMember]
public bool showIFaces { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showLumps"></a> showLumps

```csharp
[DataMember]
public bool showLumps { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showMeasures"></a> showMeasures

```csharp
[DataMember]
public bool showMeasures { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showMeshDisplayers"></a> showMeshDisplayers

```csharp
[DataMember]
public bool showMeshDisplayers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showMeshManagers"></a> showMeshManagers

```csharp
[DataMember]
public bool showMeshManagers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showMliRibs"></a> showMliRibs

```csharp
[DataMember]
public bool showMliRibs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showNodalBoundaries"></a> showNodalBoundaries

```csharp
[DataMember]
public bool showNodalBoundaries { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showNodes"></a> showNodes

```csharp
[DataMember]
public bool showNodes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showOrienters"></a> showOrienters

```csharp
[DataMember]
public bool showOrienters { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showPathLink"></a> showPathLink

```csharp
[DataMember]
public bool showPathLink { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showPaths"></a> showPaths

```csharp
[DataMember]
public bool showPaths { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showPipes"></a> showPipes

```csharp
[DataMember]
public bool showPipes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showPort"></a> showPort

```csharp
[DataMember]
public bool showPort { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showPrimitiveAxesInWireframeView"></a> showPrimitiveAxesInWireframeView

```csharp
[DataMember]
public bool showPrimitiveAxesInWireframeView { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showRotationAxis"></a> showRotationAxis

```csharp
[DataMember]
public bool showRotationAxis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showSolidFiniteElements"></a> showSolidFiniteElements

```csharp
[DataMember]
public bool showSolidFiniteElements { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showSurfaces"></a> showSurfaces

```csharp
[DataMember]
public bool showSurfaces { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showTdDirectImporters"></a> showTdDirectImporters

```csharp
[DataMember]
public bool showTdDirectImporters { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showTdText"></a> showTdText

```csharp
[DataMember]
public bool showTdText { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showTee"></a> showTee

```csharp
[DataMember]
public bool showTee { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showTies"></a> showTies

```csharp
[DataMember]
public bool showTies { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showTrackers"></a> showTrackers

```csharp
[DataMember]
public bool showTrackers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showUserNodes"></a> showUserNodes

```csharp
[DataMember]
public bool showUserNodes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_showWireframeThickness"></a> showWireframeThickness

```csharp
[DataMember]
public bool showWireframeThickness { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### <a id="OpenTD_UserPreferences_GraphicsVisibilityPreferences_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

