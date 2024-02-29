# <a id="VM_Models_Post_IFEBody"></a> Interface IFEBody

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IFEBody : IBody, IBodyBase, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

[IBody](VM.Models.Post.IBody.md), 
[IBodyBase](VM.Models.Post.IBodyBase.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IFEBody_PreviousCoordinateSystem"></a> PreviousCoordinateSystem

```csharp
double[] PreviousCoordinateSystem { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

## Methods

### <a id="VM_Models_Post_IFEBody_AddElement_VM_Models_Post_HitItemElementInfo_"></a> AddElement\(HitItemElementInfo\)

```csharp
ElementBase AddElement(HitItemElementInfo hitItemElementInfo)
```

#### Parameters

`hitItemElementInfo` [HitItemElementInfo](VM.Models.Post.HitItemElementInfo.md)

#### Returns

 [ElementBase](VM.Models.Post.Bodies.ElementBase.md)

### <a id="VM_Models_Post_IFEBody_AddNode_VM_Models_Post_HitItemNodeInfo_VM_Models_PlotDataType_"></a> AddNode\(HitItemNodeInfo, PlotDataType\)

```csharp
NodeBase AddNode(HitItemNodeInfo hitItemNodeInfo, PlotDataType plotDataType)
```

#### Parameters

`hitItemNodeInfo` [HitItemNodeInfo](VM.Models.Post.HitItemNodeInfo.md)

`plotDataType` PlotDataType

#### Returns

 [NodeBase](VM.Models.Post.Bodies.NodeBase.md)

### <a id="VM_Models_Post_IFEBody_GetBodyComponentType_System_Boolean_"></a> GetBodyComponentType\(bool\)

```csharp
Type GetBodyComponentType(bool isNode)
```

#### Parameters

`isNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

