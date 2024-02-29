# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet"></a> Class DataElementSet

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class DataElementSet : EntityBase, IObservableObject, IDisposableObject, IDataElementSet, IEntity, IObject, IHasName, IHasIndex, IHasID, IExtremalValueVisible
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[DataElementSet](VM.Models.Post.VisualizationImpl.UnstructGrid.DataElementSet.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IDataElementSet, 
IEntity, 
IObject, 
IHasName, 
IHasIndex, 
IHasID, 
IExtremalValueVisible

#### Inherited Members

EntityBase.IsSupported\(EntityFilterMode\), 
EntityBase.CategoryType, 
EntityBase.EntityType, 
EntityBase.HasGeometry, 
EntityBase.ID, 
EntityBase.Index, 
EntityBase.InitialValues, 
EntityBase.IsDummy, 
EntityBase.IsPlottable, 
EntityBase.IsSupportedGeneralMode, 
EntityBase.IsSupportedVectorDisplayMode, 
ObjectBase.GetUnstructGridModel\(\), 
ObjectBase.SetName\(string\), 
ObjectBase.UpdateAnimation\(UpdateActionType\), 
ObjectBase.AnalysisResult, 
ObjectBase.AnalysisResultID, 
ObjectBase.AnalysisResultType, 
ObjectBase.DisplayName, 
ObjectBase.FullName, 
ObjectBase.Name, 
ObjectBase.ParentDocument, 
ObjectBase.CanLoad, 
ObjectBase.CanSave, 
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

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet__ctor_System_String_System_Int32_System_UInt32___"></a> DataElementSet\(string, int, uint\[\]\)

```csharp
public DataElementSet(string fullName, int parentBodyIndex, uint[] elementIndexes)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`parentBodyIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`elementIndexes` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

## Properties

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet_ElementSetType"></a> ElementSetType

```csharp
public ElementSetType ElementSetType { get; init; }
```

#### Property Value

 ElementSetType

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet_Visible"></a> Visible

```csharp
public bool Visible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet_GetElementIndexArray"></a> GetElementIndexArray\(\)

```csharp
public uint[] GetElementIndexArray()
```

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet_GetElementSetId"></a> GetElementSetId\(\)

```csharp
public int GetElementSetId()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet_GetParentId"></a> GetParentId\(\)

```csharp
public int GetParentId()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataElementSet_SetGeometry_Ceetron_CeetronDesktopComponents_UnstructGrid_DataGeometry_"></a> SetGeometry\(DataGeometry\)

```csharp
public void SetGeometry(DataGeometry geometry)
```

#### Parameters

`geometry` DataGeometry

