# Interface ITransformPointAndOrientation
<a id="VM_Models_Pre_ITransformPointAndOrientation"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface ITransformPointAndOrientation : ITransformBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Implements

[ITransformBase](VM.Models.Pre.ITransformBase.md), 
[IObject](VM.Models.Pre.IObject.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IEventProvider](VM.Models.Pre.IEventProvider.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_ITransformPointAndOrientation_OrientationTerm"></a> OrientationTerm

```csharp
IOrientationBase OrientationTerm { get; set; }
```

#### Property Value

 [IOrientationBase](VM.Models.Pre.IOrientationBase.md)

### <a id="VM_Models_Pre_ITransformPointAndOrientation_PointTerm"></a> PointTerm

```csharp
IPointBase PointTerm { get; set; }
```

#### Property Value

 [IPointBase](VM.Models.Pre.IPointBase.md)

