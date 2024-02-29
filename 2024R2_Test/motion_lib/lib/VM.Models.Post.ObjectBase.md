# <a id="VM_Models_Post_ObjectBase"></a> Class ObjectBase

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class ObjectBase : ObservableObject, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md)

#### Derived

[Axis](VM.Models.Post.Axis.md), 
[EntityBase](VM.Models.Post.EntityBase.md), 
[LineDataSeries3DBase](VM.Models.Post.LineDataSeries3DBase.md), 
[LineDataSeriesBase](VM.Models.Post.LineDataSeriesBase.md), 
[Slot](VM.Models.Post.Slot.md), 
[SubBeamGroup](VM.Models.Post.SubBeamGroup.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

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

### <a id="VM_Models_Post_ObjectBase__ctor"></a> ObjectBase\(\)

```csharp
protected ObjectBase()
```

### <a id="VM_Models_Post_ObjectBase__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> ObjectBase\(ResultDocument, Identifier, string\)

```csharp
protected ObjectBase(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ObjectBase__ctor_VM_Identifier_VM_Identifier_System_String_"></a> ObjectBase\(Identifier, Identifier, string\)

```csharp
protected ObjectBase(Identifier parentDocumentID, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocumentID` Identifier

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_ObjectBase_AnalysisResult"></a> AnalysisResult

```csharp
public AnalysisResult AnalysisResult { get; }
```

#### Property Value

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_ObjectBase_AnalysisResultID"></a> AnalysisResultID

```csharp
public Identifier AnalysisResultID { get; }
```

#### Property Value

 Identifier

### <a id="VM_Models_Post_ObjectBase_AnalysisResultType"></a> AnalysisResultType

```csharp
[SaveProperty(false)]
public AnalysisResultType AnalysisResultType { get; }
```

#### Property Value

 AnalysisResultType

### <a id="VM_Models_Post_ObjectBase_CanLoad"></a> CanLoad

```csharp
protected virtual bool CanLoad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ObjectBase_CanSave"></a> CanSave

```csharp
protected virtual bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ObjectBase_DisplayName"></a> DisplayName

```csharp
public virtual string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ObjectBase_FullName"></a> FullName

```csharp
[SaveProperty(true)]
public virtual string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ObjectBase_Name"></a> Name

```csharp
[Obsolete]
public virtual string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ObjectBase_ParentDocument"></a> ParentDocument

```csharp
public virtual ResultDocument ParentDocument { get; }
```

#### Property Value

 [ResultDocument](VM.Models.Post.ResultDocument.md)

## Methods

### <a id="VM_Models_Post_ObjectBase_GetUnstructGridModel"></a> GetUnstructGridModel\(\)

```csharp
public IUnstructGridModel GetUnstructGridModel()
```

#### Returns

 [IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md)

### <a id="VM_Models_Post_ObjectBase_SetName_System_String_"></a> SetName\(string\)

```csharp
public void SetName(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ObjectBase_UpdateAnimation_VM_Models_Post_UpdateActionType_"></a> UpdateAnimation\(UpdateActionType\)

```csharp
public void UpdateAnimation(UpdateActionType updateActionType)
```

#### Parameters

`updateActionType` [UpdateActionType](VM.Models.Post.UpdateActionType.md)

