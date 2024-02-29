# <a id="VM_Models_Post_FEProperties_BeamProperty"></a> Class BeamProperty

Namespace: [VM.Models.Post.FEProperties](VM.Models.Post.FEProperties.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class BeamProperty : FEPropertyBase, IObservableObject, IDisposableObject, IBeamProperty, IFEProperty, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[FEPropertyBase](VM.Models.Post.FEProperties.FEPropertyBase.md) ← 
[BeamProperty](VM.Models.Post.FEProperties.BeamProperty.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IBeamProperty](VM.Models.Post.IBeamProperty.md), 
[IFEProperty](VM.Models.Post.IFEProperty.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[FEPropertyBase.Clone\(\)](VM.Models.Post.FEProperties.FEPropertyBase.md\#VM\_Models\_Post\_FEProperties\_FEPropertyBase\_Clone), 
[FEPropertyBase.TrySetParentBodyIndex\(int\)](VM.Models.Post.FEProperties.FEPropertyBase.md\#VM\_Models\_Post\_FEProperties\_FEPropertyBase\_TrySetParentBodyIndex\_System\_Int32\_), 
[FEPropertyBase.CategoryType](VM.Models.Post.FEProperties.FEPropertyBase.md\#VM\_Models\_Post\_FEProperties\_FEPropertyBase\_CategoryType), 
[FEPropertyBase.DisplayName](VM.Models.Post.FEProperties.FEPropertyBase.md\#VM\_Models\_Post\_FEProperties\_FEPropertyBase\_DisplayName), 
[FEPropertyBase.DataElementSetID](VM.Models.Post.FEProperties.FEPropertyBase.md\#VM\_Models\_Post\_FEProperties\_FEPropertyBase\_DataElementSetID), 
[FEPropertyBase.EntityType](VM.Models.Post.FEProperties.FEPropertyBase.md\#VM\_Models\_Post\_FEProperties\_FEPropertyBase\_EntityType), 
[FEPropertyBase.IsVisible](VM.Models.Post.FEProperties.FEPropertyBase.md\#VM\_Models\_Post\_FEProperties\_FEPropertyBase\_IsVisible), 
[FEPropertyBase.MaterialSequence](VM.Models.Post.FEProperties.FEPropertyBase.md\#VM\_Models\_Post\_FEProperties\_FEPropertyBase\_MaterialSequence), 
[FEPropertyBase.ParentBodyIndex](VM.Models.Post.FEProperties.FEPropertyBase.md\#VM\_Models\_Post\_FEProperties\_FEPropertyBase\_ParentBodyIndex), 
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

## Constructors

### <a id="VM_Models_Post_FEProperties_BeamProperty__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> BeamProperty\(ResultDocument, Identifier, string\)

```csharp
public BeamProperty(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_FEProperties_BeamProperty_Area"></a> Area

```csharp
[SaveProperty(false)]
public double Area { get; init; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_FEProperties_BeamProperty_MomentOfArea"></a> MomentOfArea

```csharp
[SaveProperty(false)]
public double[] MomentOfArea { get; init; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_FEProperties_BeamProperty_ReferenceVector"></a> ReferenceVector

```csharp
[SaveProperty(false)]
public double[] ReferenceVector { get; init; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

## Methods

### <a id="VM_Models_Post_FEProperties_BeamProperty_Clone"></a> Clone\(\)

```csharp
public override object Clone()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

