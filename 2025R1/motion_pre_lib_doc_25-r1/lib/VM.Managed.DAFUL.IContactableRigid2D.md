#  Interface IContactableRigid2D

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the connetable rigid 2 dimension object.

```csharp
public interface IContactableRigid2D : IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody
```

#### Implements

[IContactableRigid](VM.Managed.DAFUL.IContactableRigid.md), 
[IContactable](VM.Managed.DAFUL.IContactable.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
IEntityRelation, 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IHasBody

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_IContactableRigid2D_IsCloseLoop"></a> IsCloseLoop

Gets value indicating whether this instance is close loop.

```csharp
bool IsCloseLoop { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_IContactableRigid2D_ParentBody"></a> ParentBody

Gets the parent body.

```csharp
ObjectBase ParentBody { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_IContactableRigid2D_GetPoints"></a> GetPoints\(\)

Gets the points.

```csharp
VectorBase[] GetPoints()
```

#### Returns

 VectorBase\[\]

the points.

### <a id="VM_Managed_DAFUL_IContactableRigid2D_GetPointsAboutOrigin"></a> GetPointsAboutOrigin\(\)

Gets the points.

```csharp
VectorBase[] GetPointsAboutOrigin()
```

#### Returns

 VectorBase\[\]

the points.

### <a id="VM_Managed_DAFUL_IContactableRigid2D_GetProfilePoint_System_Boolean__System_Collections_Generic_List_VM_Managed_VectorBase___"></a> GetProfilePoint\(ref bool, ref List<VectorBase\>\)

Gets the profile point.

```csharp
int GetProfilePoint(ref bool bCloseLoop, ref List<VectorBase> lst)
```

#### Parameters

`bCloseLoop` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if this instance is close loop; otherwise, <code>false</code>.

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The points.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

the profile point.

