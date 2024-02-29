# <a id="VM_Models_Post_IDynamicUnstructGridModel"></a> Interface IDynamicUnstructGridModel

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDynamicUnstructGridModel : IContourUnstructGridModel, IUnstructGridModel, IModel
```

#### Implements

[IContourUnstructGridModel](VM.Models.Post.IContourUnstructGridModel.md), 
[IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md), 
[IModel](VM.Models.Post.IModel.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IDynamicUnstructGridModel_VectorDisplayManager"></a> VectorDisplayManager

```csharp
IVectorDisplayManager VectorDisplayManager { get; }
```

#### Property Value

 [IVectorDisplayManager](VM.Models.Post.IVectorDisplayManager.md)

## Methods

### <a id="VM_Models_Post_IDynamicUnstructGridModel_CreateVectorDisplayData_VM_Models_Post_IVectorDisplay_System_Int32_"></a> CreateVectorDisplayData\(IVectorDisplay, int\)

```csharp
IVectorDisplayAnimationBase CreateVectorDisplayData(IVectorDisplay vectorDisplayModel, int stateID)
```

#### Parameters

`vectorDisplayModel` [IVectorDisplay](VM.Models.Post.IVectorDisplay.md)

`stateID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IVectorDisplayAnimationBase](VM.Models.Post.IVectorDisplayAnimationBase.md)

### <a id="VM_Models_Post_IDynamicUnstructGridModel_SetFirstFrameLageExt"></a> SetFirstFrameLageExt\(\)

```csharp
void SetFirstFrameLageExt()
```

### <a id="VM_Models_Post_IDynamicUnstructGridModel_SetGeometryParts_System_Collections_Generic_IEnumerable_VM_Models_Post_IHasRoadGeometry__"></a> SetGeometryParts\(IEnumerable<IHasRoadGeometry\>\)

```csharp
void SetGeometryParts(IEnumerable<IHasRoadGeometry> hasRoadGeometries)
```

#### Parameters

`hasRoadGeometries` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IHasRoadGeometry](VM.Models.Post.IHasRoadGeometry.md)\>

### <a id="VM_Models_Post_IDynamicUnstructGridModel_UpdateMaterialProperty_VM_Models_Post_MetaInfo_"></a> UpdateMaterialProperty\(MetaInfo\)

```csharp
void UpdateMaterialProperty(MetaInfo metaInfo)
```

#### Parameters

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

