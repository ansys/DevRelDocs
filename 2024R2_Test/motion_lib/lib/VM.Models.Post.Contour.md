# <a id="VM_Models_Post_Contour"></a> Class Contour

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class Contour : EntityBase, IObservableObject, IDisposableObject, IContour, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[Contour](VM.Models.Post.Contour.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IContour](VM.Models.Post.IContour.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[EntityBase.IsSupported\(EntityFilterMode\)](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsSupported\_VM\_Models\_Post\_EntityFilterMode\_), 
[EntityBase.CategoryType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_CategoryType), 
[EntityBase.EntityType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_EntityType), 
[EntityBase.HasGeometry](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_HasGeometry), 
[EntityBase.ID](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_ID), 
[EntityBase.Index](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_Index), 
[EntityBase.InitialValues](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_InitialValues), 
[EntityBase.IsDummy](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsDummy), 
[EntityBase.IsPlottable](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsPlottable), 
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

### <a id="VM_Models_Post_Contour_AutoRange"></a> AutoRange

```csharp
[SaveProperty(false)]
public bool AutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Contour_CanLoad"></a> CanLoad

```csharp
protected override bool CanLoad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Contour_CanSave"></a> CanSave

```csharp
protected override bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Contour_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 [CategoryType](VM.Models.Post.CategoryType.md)

### <a id="VM_Models_Post_Contour_Characteristic"></a> Characteristic

```csharp
[SaveProperty(false)]
public string Characteristic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Contour_Component"></a> Component

```csharp
[SaveProperty(false)]
public string Component { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Contour_ComponentList"></a> ComponentList

```csharp
[SaveProperty(false)]
public IEnumerable<string> ComponentList { get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_Contour_Continuous"></a> Continuous

```csharp
[SaveProperty(false)]
public bool Continuous { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Contour_Dimension"></a> Dimension

```csharp
public string Dimension { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Contour_EachMinMax"></a> EachMinMax

```csharp
[SaveProperty(false)]
public bool EachMinMax { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Contour_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 [EntityType](VM.Models.Post.EntityType.md)

### <a id="VM_Models_Post_Contour_IsEnabled"></a> IsEnabled

```csharp
[SaveProperty(false)]
public bool IsEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Contour_LegendColorScheme"></a> LegendColorScheme

```csharp
[SaveProperty(false)]
public ColorSchemeType LegendColorScheme { get; set; }
```

#### Property Value

 [ColorSchemeType](VM.Models.Post.ColorSchemeType.md)

### <a id="VM_Models_Post_Contour_LegendFontColor"></a> LegendFontColor

```csharp
[SaveProperty(false)]
public Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Contour_LegendVisibility"></a> LegendVisibility

```csharp
[SaveProperty(false)]
public bool LegendVisibility { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Contour_LogScale"></a> LogScale

```csharp
[SaveProperty(false)]
public bool LogScale { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Contour_MappingType"></a> MappingType

```csharp
[SaveProperty(false)]
public ContourMappingType MappingType { get; set; }
```

#### Property Value

 ContourMappingType

### <a id="VM_Models_Post_Contour_Max"></a> Max

```csharp
[SaveProperty(false)]
public double Max { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Contour_Min"></a> Min

```csharp
[SaveProperty(false)]
public double Min { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Contour_MinMaxTargetType"></a> MinMaxTargetType

```csharp
[SaveProperty(false)]
public ExtremalValueType MinMaxTargetType { get; set; }
```

#### Property Value

 [ExtremalValueType](VM.Models.Post.ExtremalValueType.md)

### <a id="VM_Models_Post_Contour_ResultID"></a> ResultID

```csharp
public int ResultID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Contour_ScalarRange"></a> ScalarRange

```csharp
public Range ScalarRange { get; set; }
```

#### Property Value

 [Range](VM.Models.Post.Range.md)

### <a id="VM_Models_Post_Contour_Targets"></a> Targets

```csharp
[SaveProperty(false)]
public IEntity[] Targets { get; }
```

#### Property Value

 [IEntity](VM.Models.Post.IEntity.md)\[\]

### <a id="VM_Models_Post_Contour_Unit"></a> Unit

```csharp
public string Unit { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Contour_WhenIsEnabledChanged"></a> WhenIsEnabledChanged

```csharp
public IObservable<bool> WhenIsEnabledChanged { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="VM_Models_Post_Contour_WholeMinMax"></a> WholeMinMax

```csharp
[SaveProperty(false)]
public bool WholeMinMax { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Post_Contour_Active"></a> Active\(\)

```csharp
public void Active()
```

### <a id="VM_Models_Post_Contour_ContainsTarget_VM_Identifier_"></a> ContainsTarget\(Identifier\)

```csharp
public bool ContainsTarget(Identifier id)
```

#### Parameters

`id` Identifier

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Contour_CurrentContourColor"></a> CurrentContourColor\(\)

```csharp
public IList<Color> CurrentContourColor()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

### <a id="VM_Models_Post_Contour_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

