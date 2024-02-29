# <a id="VM_Models_Post_ExtendedAxis2D"></a> Class ExtendedAxis2D

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class ExtendedAxis2D : Axis2D, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Axis](VM.Models.Post.Axis.md) ← 
[Axis2D](VM.Models.Post.Axis2D.md) ← 
[ExtendedAxis2D](VM.Models.Post.ExtendedAxis2D.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[Axis2D.TitleSize](VM.Models.Post.Axis2D.md\#VM\_Models\_Post\_Axis2D\_TitleSize), 
[Axis2D.TitleWeight](VM.Models.Post.Axis2D.md\#VM\_Models\_Post\_Axis2D\_TitleWeight), 
[Axis.Initialize\(Action\)](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_Initialize\_System\_Action\_), 
[Axis.AxisDirection](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_AxisDirection), 
[Axis.Digit](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_Digit), 
[Axis.FontColor](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_FontColor), 
[Axis.FontFace](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_FontFace), 
[Axis.FontSize](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_FontSize), 
[Axis.FontStyle](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_FontStyle), 
[Axis.FontWeight](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_FontWeight), 
[Axis.General](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_General), 
[Axis.ID](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_ID), 
[Axis.IsDefault](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_IsDefault), 
[Axis.LabelFormatType](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_LabelFormatType), 
[Axis.ParentID](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_ParentID), 
[Axis.ScaleInterval](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_ScaleInterval), 
[Axis.ScaleMax](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_ScaleMax), 
[Axis.ScaleMin](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_ScaleMin), 
[Axis.TextFormatting](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_TextFormatting), 
[Axis.Title](VM.Models.Post.Axis.md\#VM\_Models\_Post\_Axis\_Title), 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_ExtendedAxis2D_AxisType"></a> AxisType

```csharp
[SaveProperty(false)]
public AxisType AxisType { get; set; }
```

#### Property Value

 [AxisType](VM.Models.Post.AxisType.md)

### <a id="VM_Models_Post_ExtendedAxis2D_ChartAxisType"></a> ChartAxisType

```csharp
[SaveProperty(true)]
public ChartAxisType ChartAxisType { get; init; }
```

#### Property Value

 [ChartAxisType](VM.Models.Post.ChartAxisType.md)

### <a id="VM_Models_Post_ExtendedAxis2D_CursorTextFormatting"></a> CursorTextFormatting

```csharp
[SaveProperty(false)]
public string CursorTextFormatting { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedAxis2D_IsAuto"></a> IsAuto

```csharp
[SaveProperty(false)]
public bool IsAuto { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ExtendedAxis2D_LineColor"></a> LineColor

```csharp
[SaveProperty(false)]
public Color LineColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_ExtendedAxis2D_LineStyle"></a> LineStyle

```csharp
[SaveProperty(false)]
public LineStyleType LineStyle { get; set; }
```

#### Property Value

 [LineStyleType](VM.Models.Post.LineStyleType.md)

### <a id="VM_Models_Post_ExtendedAxis2D_LineWidth"></a> LineWidth

```csharp
[SaveProperty(false)]
public double LineWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ExtendedAxis2D_LogarithmicBase"></a> LogarithmicBase

```csharp
[SaveProperty(false)]
public string LogarithmicBase { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedAxis2D_Style"></a> Style

```csharp
[SaveProperty(false)]
public FontStyle Style { get; set; }
```

#### Property Value

 FontStyle

### <a id="VM_Models_Post_ExtendedAxis2D_Unit"></a> Unit

```csharp
[SaveProperty(false)]
public string Unit { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ExtendedAxis2D_UnitType"></a> UnitType

```csharp
[SaveProperty(false)]
public string UnitType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

