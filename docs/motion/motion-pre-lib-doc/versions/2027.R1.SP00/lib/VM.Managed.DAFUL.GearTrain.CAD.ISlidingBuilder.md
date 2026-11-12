# Interface ISlidingBuilder
<a id="VM_Managed_DAFUL_GearTrain_CAD_ISlidingBuilder"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

sliding builder interface

```csharp
public interface ISlidingBuilder : IGTBuilder
```

#### Implements

[IGTBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGTBuilder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_CAD_ISlidingBuilder_GetCenterPosition"></a> GetCenterPosition\(\)

Gets center position.

```csharp
VectorBase GetCenterPosition()
```

#### Returns

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_ISlidingBuilder_GetTransform"></a> GetTransform\(\)

Gets the transform.

```csharp
TMatrix GetTransform()
```

#### Returns

 TMatrix

The transform.

