# Class AdvancedPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global advanced preferences.

```csharp
[DataContract]
public class AdvancedPreferences : Preferences, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[AdvancedPreferences](OpenTD.UserPreferences.AdvancedPreferences.md)

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

### AdvancedPreferences\(\)

```csharp
public AdvancedPreferences()
```

### AdvancedPreferences\(ThermalDesktop\)

```csharp
public AdvancedPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### TURN\_ON\_BC\_OBJECT\_VIS\_CREATE

```csharp
[DataMember]
public int TURN_ON_BC_OBJECT_VIS_CREATE { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### automaticRegens

```csharp
[DataMember]
public int automaticRegens { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### bmpPngGifIndex

```csharp
[DataMember]
public int bmpPngGifIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### clearMarkersBeforeShowContactorMarkers

```csharp
[DataMember]
public int clearMarkersBeforeShowContactorMarkers { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### disableDragDrop

```csharp
[DataMember]
public int disableDragDrop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### disableHardwareGraphicsDuringCalcs

```csharp
[DataMember]
public int disableHardwareGraphicsDuringCalcs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### disableHighlightUponStartup

```csharp
[DataMember]
public int disableHighlightUponStartup { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### disableUndoUponStartup

```csharp
[DataMember]
public int disableUndoUponStartup { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### doubleClickEdit

```csharp
[DataMember]
public int doubleClickEdit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### editorIndex

```csharp
[DataMember]
public int editorIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### enableLighting

```csharp
[DataMember]
public int enableLighting { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### enableSystemConfig

```csharp
[DataMember]
public int enableSystemConfig { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### initACADSettings

```csharp
[DataMember]
public int initACADSettings { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### invalidateObjectThreshold

```csharp
[DataMember]
public int invalidateObjectThreshold { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### legendLabelsIndex

```csharp
[DataMember]
public int legendLabelsIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### maxLegendLength

```csharp
[DataMember]
public int maxLegendLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ppViewportAmbient

```csharp
[DataMember]
public int ppViewportAmbient { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### showContactPages

```csharp
[DataMember]
public int showContactPages { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### showMessageWindow2

```csharp
[DataMember]
public int showMessageWindow2 { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### smallForms

```csharp
[DataMember]
public int smallForms { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### userEditorText

```csharp
[DataMember]
public string userEditorText { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

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


