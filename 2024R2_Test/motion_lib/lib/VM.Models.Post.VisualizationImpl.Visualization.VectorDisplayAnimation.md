# <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation"></a> Class VectorDisplayAnimation

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public sealed class VectorDisplayAnimation : VectorDisplayAnimationBase, IVectorDisplayAnimationBase, IVectorDisplayAnimation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VectorDisplayAnimationBase](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md) ← 
[VectorDisplayAnimation](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimation.md)

#### Implements

IVectorDisplayAnimationBase, 
IVectorDisplayAnimation

#### Inherited Members

[VectorDisplayAnimationBase.UpdateState\(int\)](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_UpdateState\_System\_Int32\_), 
[VectorDisplayAnimationBase.RemoveMarkupPart\(MarkupModel\)](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_RemoveMarkupPart\_Ceetron\_CeetronDesktopComponents\_Visualization\_MarkupModel\_), 
[VectorDisplayAnimationBase.CreateVectorDisplay\(MarkupModel, string, double, IVectorDisplayAnimationData\)](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_CreateVectorDisplay\_Ceetron\_CeetronDesktopComponents\_Visualization\_MarkupModel\_System\_String\_System\_Double\_VM\_Models\_OutputReader\_IVectorDisplayAnimationData\_), 
[VectorDisplayAnimationBase.IsLabelVisible](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_IsLabelVisible), 
[VectorDisplayAnimationBase.StateID](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_StateID), 
[VectorDisplayAnimationBase.LargeExtentOfBoundingBox](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_LargeExtentOfBoundingBox), 
[VectorDisplayAnimationBase.Name](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_Name), 
[VectorDisplayAnimationBase.IsVisible](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_IsVisible), 
[VectorDisplayAnimationBase.LabelBackgroundColor](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_LabelBackgroundColor), 
[VectorDisplayAnimationBase.LabelTextColor](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_LabelTextColor), 
[VectorDisplayAnimationBase.Type](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_Type), 
[VectorDisplayAnimationBase.AnimationDataKey](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_AnimationDataKey), 
[VectorDisplayAnimationBase.MarkupLabels](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_VectorDisplayAnimationBase\_MarkupLabels)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation__ctor"></a> VectorDisplayAnimation\(\)

```csharp
public VectorDisplayAnimation()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_Color"></a> Color

```csharp
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_IsLog"></a> IsLog

```csharp
public bool IsLog { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_MarkupVectors"></a> MarkupVectors

```csharp
public MarkupVectors MarkupVectors { get; set; }
```

#### Property Value

 [MarkupVectors](VM.Models.Post.VisualizationImpl.Visualization.MarkupVectors.md)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_Scale"></a> Scale

```csharp
public double Scale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_AddMarkup_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_"></a> AddMarkup\(MarkupModel\)

```csharp
protected override void AddMarkup(MarkupModel markupModel)
```

#### Parameters

`markupModel` MarkupModel

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_CreateMarkup_System_String_System_Double_VM_Models_OutputReader_IVectorDisplayAnimationData_"></a> CreateMarkup\(string, double, IVectorDisplayAnimationData\)

```csharp
protected override void CreateMarkup(string key, double firstFrameLargeExt, IVectorDisplayAnimationData vectorDisplayAnimatinoData)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`firstFrameLargeExt` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vectorDisplayAnimatinoData` IVectorDisplayAnimationData

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_IsAnimationData"></a> IsAnimationData\(\)

```csharp
protected override bool IsAnimationData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_RemoveMarkupPart_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_"></a> RemoveMarkupPart\(MarkupModel\)

```csharp
public override void RemoveMarkupPart(MarkupModel markupModel)
```

#### Parameters

`markupModel` MarkupModel

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_SetVisible_System_Boolean_"></a> SetVisible\(bool\)

```csharp
protected override void SetVisible(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_UpdateLabel"></a> UpdateLabel\(\)

```csharp
protected override void UpdateLabel()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayAnimation_UpdateMarkup"></a> UpdateMarkup\(\)

```csharp
protected override void UpdateMarkup()
```

