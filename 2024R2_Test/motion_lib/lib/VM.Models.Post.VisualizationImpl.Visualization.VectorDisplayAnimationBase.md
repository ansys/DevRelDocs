# <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase"></a> Class VectorDisplayAnimationBase

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public abstract class VectorDisplayAnimationBase : IVectorDisplayAnimationBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VectorDisplayAnimationBase](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md)

#### Derived

[LineDisplayAnimation](VM.Models.Post.VisualizationImpl.Visualization.LineDisplayAnimation.md), 
[PointDisplayAnimation](VM.Models.Post.VisualizationImpl.Visualization.PointDisplayAnimation.md), 
[VectorDisplayAnimation](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimation.md)

#### Implements

IVectorDisplayAnimationBase

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase__ctor"></a> VectorDisplayAnimationBase\(\)

```csharp
public VectorDisplayAnimationBase()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_AnimationDataKey"></a> AnimationDataKey

```csharp
public string AnimationDataKey { get; protected set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_IsLabelVisible"></a> IsLabelVisible

```csharp
public bool IsLabelVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_IsVisible"></a> IsVisible

```csharp
public bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_LabelBackgroundColor"></a> LabelBackgroundColor

```csharp
public Color LabelBackgroundColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_LabelTextColor"></a> LabelTextColor

```csharp
public Color LabelTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_LargeExtentOfBoundingBox"></a> LargeExtentOfBoundingBox

```csharp
public double LargeExtentOfBoundingBox { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_MarkupLabels"></a> MarkupLabels

```csharp
public MarkupPartLabels MarkupLabels { get; set; }
```

#### Property Value

 MarkupPartLabels

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_StateID"></a> StateID

```csharp
public int StateID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_Type"></a> Type

```csharp
public VectorDisplayType Type { get; set; }
```

#### Property Value

 VectorDisplayType

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_AddMarkup_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_"></a> AddMarkup\(MarkupModel\)

```csharp
protected abstract void AddMarkup(MarkupModel markupModel)
```

#### Parameters

`markupModel` MarkupModel

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_CreateMarkup_System_String_System_Double_VM_Models_OutputReader_IVectorDisplayAnimationData_"></a> CreateMarkup\(string, double, IVectorDisplayAnimationData\)

```csharp
protected abstract void CreateMarkup(string key, double firstFrameLargeExt, IVectorDisplayAnimationData vectorDisplayAnimatinoData)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`firstFrameLargeExt` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vectorDisplayAnimatinoData` IVectorDisplayAnimationData

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_CreateVectorDisplay_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_System_String_System_Double_VM_Models_OutputReader_IVectorDisplayAnimationData_"></a> CreateVectorDisplay\(MarkupModel, string, double, IVectorDisplayAnimationData\)

```csharp
public void CreateVectorDisplay(MarkupModel markupModel, string key, double firstFrameLargeExt, IVectorDisplayAnimationData vectorDisplayAnimatinoData)
```

#### Parameters

`markupModel` MarkupModel

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`firstFrameLargeExt` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vectorDisplayAnimatinoData` IVectorDisplayAnimationData

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_GetNumberString_System_Double_"></a> GetNumberString\(double\)

```csharp
protected string GetNumberString(double value)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_IsAnimationData"></a> IsAnimationData\(\)

```csharp
protected abstract bool IsAnimationData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_RemoveMarkupPart_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_"></a> RemoveMarkupPart\(MarkupModel\)

```csharp
public abstract void RemoveMarkupPart(MarkupModel markupModel)
```

#### Parameters

`markupModel` MarkupModel

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_SetVisible_System_Boolean_"></a> SetVisible\(bool\)

```csharp
protected abstract void SetVisible(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_UpdateLabel"></a> UpdateLabel\(\)

```csharp
protected abstract void UpdateLabel()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_UpdateMarkup"></a> UpdateMarkup\(\)

```csharp
protected abstract void UpdateMarkup()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimationBase_UpdateState_System_Int32_"></a> UpdateState\(int\)

```csharp
public void UpdateState(int stateID)
```

#### Parameters

`stateID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

