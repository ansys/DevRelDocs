# <a id="VM_Models_Post_Axis"></a> Class Axis

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class Axis : ObjectBase, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Axis](VM.Models.Post.Axis.md)

#### Derived

[Axis2D](VM.Models.Post.Axis2D.md), 
[Axis3D](VM.Models.Post.Axis3D.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

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

## Properties

### <a id="VM_Models_Post_Axis_AxisDirection"></a> AxisDirection

```csharp
[SaveProperty(false)]
public AxisDirection AxisDirection { get; init; }
```

#### Property Value

 [AxisDirection](VM.Models.Post.AxisDirection.md)

### <a id="VM_Models_Post_Axis_Digit"></a> Digit

```csharp
[SaveProperty(false)]
public int Digit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Axis_FontColor"></a> FontColor

```csharp
[SaveProperty(false)]
public Color FontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Axis_FontFace"></a> FontFace

```csharp
[SaveProperty(false)]
public string FontFace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Axis_FontSize"></a> FontSize

```csharp
[SaveProperty(false)]
public double FontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Axis_FontStyle"></a> FontStyle

```csharp
[SaveProperty(false)]
public string FontStyle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Axis_FontWeight"></a> FontWeight

```csharp
[SaveProperty(false)]
public string FontWeight { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Axis_General"></a> General

```csharp
[SaveProperty(false)]
public bool General { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Axis_ID"></a> ID

```csharp
[SaveProperty(true)]
public Guid ID { get; }
```

#### Property Value

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

### <a id="VM_Models_Post_Axis_IsDefault"></a> IsDefault

```csharp
[SaveProperty(true)]
public bool IsDefault { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Axis_LabelFormatType"></a> LabelFormatType

```csharp
[SaveProperty(false)]
public LabelFormatType LabelFormatType { get; set; }
```

#### Property Value

 [LabelFormatType](VM.Models.Post.LabelFormatType.md)

### <a id="VM_Models_Post_Axis_ParentID"></a> ParentID

```csharp
[SaveProperty(true)]
public int ParentID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Axis_ScaleInterval"></a> ScaleInterval

```csharp
[SaveProperty(false)]
public double ScaleInterval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Axis_ScaleMax"></a> ScaleMax

```csharp
[SaveProperty(false)]
public double ScaleMax { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Axis_ScaleMin"></a> ScaleMin

```csharp
[SaveProperty(false)]
public double ScaleMin { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Axis_TextFormatting"></a> TextFormatting

```csharp
[SaveProperty(false)]
public string TextFormatting { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Axis_Title"></a> Title

```csharp
[SaveProperty(false)]
public string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_Axis_Initialize_System_Action_"></a> Initialize\(Action\)

```csharp
public void Initialize(Action initializeAction)
```

#### Parameters

`initializeAction` [Action](https://learn.microsoft.com/dotnet/api/system.action)

