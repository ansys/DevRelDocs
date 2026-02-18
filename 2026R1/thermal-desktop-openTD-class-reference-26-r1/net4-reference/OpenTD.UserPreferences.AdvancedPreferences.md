# <a id="OpenTD_UserPreferences_AdvancedPreferences"></a> Class AdvancedPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global advanced preferences.

```csharp
[DataContract]
public class AdvancedPreferences : Preferences, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[AdvancedPreferences](OpenTD.UserPreferences.AdvancedPreferences.md)

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

### <a id="OpenTD_UserPreferences_AdvancedPreferences__ctor"></a> AdvancedPreferences\(\)

```csharp
public AdvancedPreferences()
```

### <a id="OpenTD_UserPreferences_AdvancedPreferences__ctor_OpenTD_ThermalDesktop_"></a> AdvancedPreferences\(ThermalDesktop\)

```csharp
public AdvancedPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_UserPreferences_AdvancedPreferences_TURN_ON_BC_OBJECT_VIS_CREATE"></a> TURN\_ON\_BC\_OBJECT\_VIS\_CREATE

```csharp
[DataMember]
public int TURN_ON_BC_OBJECT_VIS_CREATE { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_automaticRegens"></a> automaticRegens

```csharp
[DataMember]
public int automaticRegens { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_bmpPngGifIndex"></a> bmpPngGifIndex

```csharp
[DataMember]
public int bmpPngGifIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_clearMarkersBeforeShowContactorMarkers"></a> clearMarkersBeforeShowContactorMarkers

```csharp
[DataMember]
public int clearMarkersBeforeShowContactorMarkers { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_disableDragDrop"></a> disableDragDrop

```csharp
[DataMember]
public int disableDragDrop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_disableHardwareGraphicsDuringCalcs"></a> disableHardwareGraphicsDuringCalcs

```csharp
[DataMember]
public int disableHardwareGraphicsDuringCalcs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_disableHighlightUponStartup"></a> disableHighlightUponStartup

```csharp
[DataMember]
public int disableHighlightUponStartup { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_disableUndoUponStartup"></a> disableUndoUponStartup

```csharp
[DataMember]
public int disableUndoUponStartup { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_doubleClickEdit"></a> doubleClickEdit

```csharp
[DataMember]
public int doubleClickEdit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_editorIndex"></a> editorIndex

```csharp
[DataMember]
public int editorIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_enableLighting"></a> enableLighting

```csharp
[DataMember]
public int enableLighting { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_enableSystemConfig"></a> enableSystemConfig

```csharp
[DataMember]
public int enableSystemConfig { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_initACADSettings"></a> initACADSettings

```csharp
[DataMember]
public int initACADSettings { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_invalidateObjectThreshold"></a> invalidateObjectThreshold

```csharp
[DataMember]
public int invalidateObjectThreshold { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_legendLabelsIndex"></a> legendLabelsIndex

```csharp
[DataMember]
public int legendLabelsIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_maxLegendLength"></a> maxLegendLength

```csharp
[DataMember]
public int maxLegendLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_ppViewportAmbient"></a> ppViewportAmbient

```csharp
[DataMember]
public int ppViewportAmbient { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_showContactPages"></a> showContactPages

```csharp
[DataMember]
public int showContactPages { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_showMessageWindow2"></a> showMessageWindow2

```csharp
[DataMember]
public int showMessageWindow2 { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_smallForms"></a> smallForms

```csharp
[DataMember]
public int smallForms { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_AdvancedPreferences_userEditorText"></a> userEditorText

```csharp
[DataMember]
public string userEditorText { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_UserPreferences_AdvancedPreferences_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### <a id="OpenTD_UserPreferences_AdvancedPreferences_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

