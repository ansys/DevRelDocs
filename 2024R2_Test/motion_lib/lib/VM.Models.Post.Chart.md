# <a id="VM_Models_Post_Chart"></a> Class Chart

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class Chart : Slot, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[Chart](VM.Models.Post.Chart.md)

#### Derived

[Chart2D](VM.Models.Post.Chart2D.md), 
[Chart3D](VM.Models.Post.Chart3D.md), 
[HeatMapSTFT](VM.Models.Post.HeatMapSTFT.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[Slot.Activate\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Activate), 
[Slot.GetParentGroup\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_GetParentGroup), 
[Slot.Inactivate\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Inactivate), 
[Slot.DisposeManagedResources\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_DisposeManagedResources), 
[Slot.GroupID](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_GroupID), 
[Slot.ID](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_ID), 
[Slot.IsActive](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_IsActive), 
[Slot.ParentDocument](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_ParentDocument), 
[Slot.ResultDocumentFilePath](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_ResultDocumentFilePath), 
[Slot.Type](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Type), 
[ObjectBase.GetUnstructGridModel\(\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_GetUnstructGridModel), 
[ObjectBase.SetName\(string\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_SetName\_System\_String\_), 
[ObjectBase.UpdateAnimation\(UpdateActionType\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_UpdateAnimation\_VM\_Models\_Post\_UpdateActionType\_), 
[ObjectBase.AnalysisResult](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResult), 
[ObjectBase.AnalysisResultID](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultID), 
[ObjectBase.AnalysisResultType](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultType), 
[ObjectBase.DisplayName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_DisplayName), 
[ObjectBase.FullName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_FullName), 
[ObjectBase.Name](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_Name), 
[ObjectBase.ParentDocument](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_ParentDocument), 
[ObjectBase.CanLoad](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanLoad), 
[ObjectBase.CanSave](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanSave), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_Chart__ctor_VM_Identifier_System_Nullable_System_Int32__System_String_"></a> Chart\(Identifier, int?, string\)

```csharp
protected Chart(Identifier parentDocumentID, int? id, string fullName)
```

#### Parameters

`parentDocumentID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_Chart_Background"></a> Background

```csharp
[SaveProperty(false)]
public Color Background { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Chart_BorderColor"></a> BorderColor

```csharp
[SaveProperty(false)]
public Color BorderColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Chart_ChartAxisType"></a> ChartAxisType

```csharp
[SaveProperty(false)]
public ChartAxisType ChartAxisType { get; set; }
```

#### Property Value

 [ChartAxisType](VM.Models.Post.ChartAxisType.md)

### <a id="VM_Models_Post_Chart_ChartTitle"></a> ChartTitle

```csharp
[SaveProperty(false)]
public string ChartTitle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Chart_Decimal"></a> Decimal

```csharp
[SaveProperty(false)]
public int Decimal { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Chart_Default"></a> Default

```csharp
[SaveProperty(false)]
public bool Default { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Chart_FontColor"></a> FontColor

```csharp
[SaveProperty(false)]
public Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Chart_FontFace"></a> FontFace

```csharp
[SaveProperty(false)]
public string FontFace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Chart_FontSize"></a> FontSize

```csharp
[SaveProperty(false)]
public double FontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Chart_FontStyle"></a> FontStyle

```csharp
[SaveProperty(false)]
public string FontStyle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Chart_FontWeight"></a> FontWeight

```csharp
[SaveProperty(false)]
public string FontWeight { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Chart_IsXUnitSplit"></a> IsXUnitSplit

```csharp
[SaveProperty(false)]
public bool IsXUnitSplit { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Chart_IsYUnitSplit"></a> IsYUnitSplit

```csharp
[SaveProperty(false)]
public bool IsYUnitSplit { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Chart_LabelFormatType"></a> LabelFormatType

```csharp
[SaveProperty(false)]
public LabelFormatType LabelFormatType { get; set; }
```

#### Property Value

 [LabelFormatType](VM.Models.Post.LabelFormatType.md)

### <a id="VM_Models_Post_Chart_LegendModifier"></a> LegendModifier

```csharp
[SaveProperty(false)]
public LegendModifier LegendModifier { get; set; }
```

#### Property Value

 [LegendModifier](VM.Models.Post.LegendModifier.md)

### <a id="VM_Models_Post_Chart_NeedInitialize"></a> NeedInitialize

```csharp
public bool NeedInitialize { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Chart_TextFormatting"></a> TextFormatting

```csharp
[SaveProperty(false)]
public string TextFormatting { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Chart_Theme"></a> Theme

```csharp
[SaveProperty(false)]
public string Theme { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Chart_Type"></a> Type

```csharp
public override ViewType Type { get; }
```

#### Property Value

 [ViewType](VM.Models.Post.ViewType.md)

### <a id="VM_Models_Post_Chart_TypeForChart"></a> TypeForChart

```csharp
[SaveProperty(false)]
public virtual TypeForChart TypeForChart { get; }
```

#### Property Value

 [TypeForChart](VM.Models.Post.TypeForChart.md)

### <a id="VM_Models_Post_Chart_XAxisGridLineColor"></a> XAxisGridLineColor

```csharp
[SaveProperty(false)]
public Color XAxisGridLineColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Chart_XAxisGridLineStyle"></a> XAxisGridLineStyle

```csharp
[SaveProperty(false)]
public LineStyleType XAxisGridLineStyle { get; set; }
```

#### Property Value

 [LineStyleType](VM.Models.Post.LineStyleType.md)

### <a id="VM_Models_Post_Chart_XAxisGridLineWidth"></a> XAxisGridLineWidth

```csharp
[SaveProperty(false)]
public double XAxisGridLineWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Chart_YAxisGridLineColor"></a> YAxisGridLineColor

```csharp
[SaveProperty(false)]
public Color YAxisGridLineColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Chart_YAxisGridLineStyle"></a> YAxisGridLineStyle

```csharp
[SaveProperty(false)]
public LineStyleType YAxisGridLineStyle { get; set; }
```

#### Property Value

 [LineStyleType](VM.Models.Post.LineStyleType.md)

### <a id="VM_Models_Post_Chart_YAxisGridLineWidth"></a> YAxisGridLineWidth

```csharp
[SaveProperty(false)]
public double YAxisGridLineWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Models_Post_Chart_AddAxis_VM_Models_Post_Axis_"></a> AddAxis\(Axis\)

```csharp
public virtual void AddAxis(Axis axis)
```

#### Parameters

`axis` [Axis](VM.Models.Post.Axis.md)

### <a id="VM_Models_Post_Chart_ClearAxes"></a> ClearAxes\(\)

```csharp
public virtual void ClearAxes()
```

### <a id="VM_Models_Post_Chart_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_Chart_GetAxisConnectableObservable_VM_Models_Post_AxisDirection_System_Boolean_"></a> GetAxisConnectableObservable\(AxisDirection, bool\)

```csharp
public virtual IConnectableObservable<IChangeSet<Axis, Guid>> GetAxisConnectableObservable(AxisDirection axisDirection, bool isReplay = true)
```

#### Parameters

`axisDirection` [AxisDirection](VM.Models.Post.AxisDirection.md)

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<[Axis](VM.Models.Post.Axis.md), [Guid](https://learn.microsoft.com/dotnet/api/system.guid)\>\>

### <a id="VM_Models_Post_Chart_Initialize_System_Action_"></a> Initialize\(Action\)

```csharp
public void Initialize(Action initializeAction)
```

#### Parameters

`initializeAction` [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="VM_Models_Post_Chart_RemoveAxis_VM_Models_Post_AxisDirection_System_Guid___"></a> RemoveAxis\(AxisDirection, params Guid\[\]\)

```csharp
public virtual void RemoveAxis(AxisDirection axisDirection, params Guid[] id)
```

#### Parameters

`axisDirection` [AxisDirection](VM.Models.Post.AxisDirection.md)

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)\[\]

