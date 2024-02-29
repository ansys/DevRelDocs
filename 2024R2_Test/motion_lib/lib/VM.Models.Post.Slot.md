# <a id="VM_Models_Post_Slot"></a> Class Slot

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class Slot : ObjectBase, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md)

#### Derived

[AnimationSlot](VM.Models.Post.AnimationSlot.md), 
[Chart](VM.Models.Post.Chart.md)

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

## Constructors

### <a id="VM_Models_Post_Slot__ctor_VM_Identifier_System_Nullable_System_Int32__System_String_"></a> Slot\(Identifier, int?, string\)

```csharp
protected Slot(Identifier parentDocumentID, int? id, string fullName)
```

#### Parameters

`parentDocumentID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Slot__ctor_VM_Identifier_VM_Identifier_System_Nullable_System_Int32__System_String_"></a> Slot\(Identifier, Identifier, int?, string\)

```csharp
protected Slot(Identifier parentDocumentID, Identifier analysisResultID, int? id, string fullName)
```

#### Parameters

`parentDocumentID` Identifier

`analysisResultID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_Slot_GroupID"></a> GroupID

```csharp
[SaveProperty(false)]
public Guid GroupID { get; }
```

#### Property Value

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

### <a id="VM_Models_Post_Slot_ID"></a> ID

```csharp
[SaveProperty(false)]
public int ID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Slot_IsActive"></a> IsActive

```csharp
public bool IsActive { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Slot_ParentDocument"></a> ParentDocument

```csharp
public override ResultDocument ParentDocument { get; }
```

#### Property Value

 [ResultDocument](VM.Models.Post.ResultDocument.md)

### <a id="VM_Models_Post_Slot_ResultDocumentFilePath"></a> ResultDocumentFilePath

```csharp
[SaveProperty(false)]
public string ResultDocumentFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Slot_Type"></a> Type

```csharp
[SaveProperty(true)]
public abstract ViewType Type { get; }
```

#### Property Value

 [ViewType](VM.Models.Post.ViewType.md)

## Methods

### <a id="VM_Models_Post_Slot_Activate"></a> Activate\(\)

```csharp
public void Activate()
```

### <a id="VM_Models_Post_Slot_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_Slot_GetParentGroup"></a> GetParentGroup\(\)

```csharp
public SlotGroup GetParentGroup()
```

#### Returns

 [SlotGroup](VM.Models.Post.SlotGroup.md)

### <a id="VM_Models_Post_Slot_Inactivate"></a> Inactivate\(\)

```csharp
public void Inactivate()
```

