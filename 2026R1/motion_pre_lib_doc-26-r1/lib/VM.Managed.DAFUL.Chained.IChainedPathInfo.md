# Interface IChainedPathInfo
<a id="VM_Managed_DAFUL_Chained_IChainedPathInfo"></a>

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This interface is the gateway that gets or sets ChainedPath data.

```csharp
public interface IChainedPathInfo
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Chained_IChainedPathInfo_GetAssembledRadius"></a> GetAssembledRadius\(\)

Gets the assemble radius

```csharp
Variable GetAssembledRadius()
```

#### Returns

 Variable

The assemble radius

### <a id="VM_Managed_DAFUL_Chained_IChainedPathInfo_GetCenterPosition"></a> GetCenterPosition\(\)

Gets the center position.

```csharp
PointBase GetCenterPosition()
```

#### Returns

 PointBase

The center position.

### <a id="VM_Managed_DAFUL_Chained_IChainedPathInfo_GetPathRotationAxis"></a> GetPathRotationAxis\(\)

Gets the rotation axis of path.

```csharp
DirectionBase GetPathRotationAxis()
```

#### Returns

 DirectionBase

The rotation axis.

### <a id="VM_Managed_DAFUL_Chained_IChainedPathInfo_Get_WorkPlane"></a> Get\_WorkPlane\(\)

Get work plane.

```csharp
Plane Get_WorkPlane()
```

#### Returns

 Plane

The plane

### <a id="VM_Managed_DAFUL_Chained_IChainedPathInfo_SetAssembledRadius_VM_Managed_Variable_"></a> SetAssembledRadius\(Variable\)

Sets the assemble radius.

```csharp
void SetAssembledRadius(Variable _assembledradius)
```

#### Parameters

`_assembledradius` Variable

The assemble radius

### <a id="VM_Managed_DAFUL_Chained_IChainedPathInfo_SetCenterPosition_VM_Managed_PointBase_"></a> SetCenterPosition\(PointBase\)

Sets the center position.

```csharp
void SetCenterPosition(PointBase _centerposition)
```

#### Parameters

`_centerposition` PointBase

The center position.

### <a id="VM_Managed_DAFUL_Chained_IChainedPathInfo_SetPathRotationAxis_VM_Managed_DirectionBase_"></a> SetPathRotationAxis\(DirectionBase\)

Sets the rotation axis of path.

```csharp
void SetPathRotationAxis(DirectionBase _rotationaxis)
```

#### Parameters

`_rotationaxis` DirectionBase

The boolean value.

