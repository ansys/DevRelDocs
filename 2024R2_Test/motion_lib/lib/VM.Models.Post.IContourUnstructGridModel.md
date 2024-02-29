# <a id="VM_Models_Post_IContourUnstructGridModel"></a> Interface IContourUnstructGridModel

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IContourUnstructGridModel : IUnstructGridModel, IModel
```

#### Implements

[IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md), 
[IModel](VM.Models.Post.IModel.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IContourUnstructGridModel_AutoRange"></a> AutoRange

```csharp
bool AutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IContourUnstructGridModel_Continuous"></a> Continuous

```csharp
bool Continuous { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IContourUnstructGridModel_CurrentColorScheme"></a> CurrentColorScheme

```csharp
IList<Color> CurrentColorScheme { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

### <a id="VM_Models_Post_IContourUnstructGridModel_ExtremalValueType"></a> ExtremalValueType

```csharp
ExtremalValueType ExtremalValueType { get; set; }
```

#### Property Value

 [ExtremalValueType](VM.Models.Post.ExtremalValueType.md)

### <a id="VM_Models_Post_IContourUnstructGridModel_LegendColorScheme"></a> LegendColorScheme

```csharp
ColorSchemeType LegendColorScheme { get; set; }
```

#### Property Value

 [ColorSchemeType](VM.Models.Post.ColorSchemeType.md)

### <a id="VM_Models_Post_IContourUnstructGridModel_LegendCustomTitle"></a> LegendCustomTitle

```csharp
string LegendCustomTitle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IContourUnstructGridModel_LegendFontColor"></a> LegendFontColor

```csharp
Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_IContourUnstructGridModel_LegendVisibility"></a> LegendVisibility

```csharp
bool LegendVisibility { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IContourUnstructGridModel_LogScale"></a> LogScale

```csharp
bool LogScale { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IContourUnstructGridModel_ScalarRange"></a> ScalarRange

```csharp
Range ScalarRange { get; set; }
```

#### Property Value

 [Range](VM.Models.Post.Range.md)

## Methods

### <a id="VM_Models_Post_IContourUnstructGridModel_ClearContourData"></a> ClearContourData\(\)

```csharp
void ClearContourData()
```

### <a id="VM_Models_Post_IContourUnstructGridModel_InitializePartSettings_VM_Models_Post_MetaInfo_"></a> InitializePartSettings\(MetaInfo\)

```csharp
void InitializePartSettings(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

### <a id="VM_Models_Post_IContourUnstructGridModel_LoadDynamicAnimation_VM_Models_Post_SourceData_VM_Models_Post_AnalysisResult_System_Int32___"></a> LoadDynamicAnimation\(SourceData, AnalysisResult, int\[\]\)

```csharp
void LoadDynamicAnimation(SourceData sourceData, AnalysisResult analysisResult, int[] stateIDs)
```

#### Parameters

`sourceData` [SourceData](VM.Models.Post.SourceData.md)

`analysisResult` [AnalysisResult](VM.Models.Post.AnalysisResult.md)

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_IContourUnstructGridModel_SetFringeResultIDToModelSpec_System_Int32_"></a> SetFringeResultIDToModelSpec\(int\)

```csharp
void SetFringeResultIDToModelSpec(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IContourUnstructGridModel_SetPartInfoToDirectory_VM_Models_Post_MetaInfo_"></a> SetPartInfoToDirectory\(MetaInfo\)

```csharp
void SetPartInfoToDirectory(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

### <a id="VM_Models_Post_IContourUnstructGridModel_SetScalarSettings_VM_Models_Post_Contour_"></a> SetScalarSettings\(Contour\)

```csharp
void SetScalarSettings(Contour contour)
```

#### Parameters

`contour` [Contour](VM.Models.Post.Contour.md)

### <a id="VM_Models_Post_IContourUnstructGridModel_UpdateFEPropertyElementSets_VM_Models_Post_MetaInfo_"></a> UpdateFEPropertyElementSets\(MetaInfo\)

```csharp
void UpdateFEPropertyElementSets(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

