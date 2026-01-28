# Interface INodalBody
<a id="VM_Models_Pre_INodalBody"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to represent the object that has the meshes.

```csharp
public interface INodalBody
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_INodalBody_MassCenter"></a> MassCenter

Gets the massCenter.

```csharp
Vector MassCenter { get; }
```

#### Property Value

 Vector

## Methods

### <a id="VM_Models_Pre_INodalBody_GetUpdatedPosition_VM_Models_Pre_IObjectBase_VM_Vector__"></a> GetUpdatedPosition\(IObjectBase, out Vector\)

Gets updated position.

```csharp
bool GetUpdatedPosition(IObjectBase reference, out Vector pos)
```

#### Parameters

`reference` [IObjectBase](VM.Models.Pre.IObjectBase.md)

The reference entity.

`pos` Vector

The updated position.

#### Returns

 bool

The success flag

### <a id="VM_Models_Pre_INodalBody_InstantiateForDesignEntity_VM_Models_Pre_IDesignSubEntity_VM_Models_Pre_IObjectBase_VM_TMatrix__System_Double__"></a> InstantiateForDesignEntity\(IDesignSubEntity, IObjectBase, out TMatrix, out double\)

Instantiate for design entity.

```csharp
bool InstantiateForDesignEntity(IDesignSubEntity designSubEntity, IObjectBase reference, out TMatrix matrixT, out double scale)
```

#### Parameters

`designSubEntity` [IDesignSubEntity](VM.Models.Pre.IDesignSubEntity.md)

The design sub-entity

`reference` [IObjectBase](VM.Models.Pre.IObjectBase.md)

The reference

`matrixT` TMatrix

The matrix

`scale` double

The scale

#### Returns

 bool

The success flag

