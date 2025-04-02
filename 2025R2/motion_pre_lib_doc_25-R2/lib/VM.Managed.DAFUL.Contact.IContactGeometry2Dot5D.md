#  Interface IContactGeometry2Dot5D

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This interface is to represent the contact geometry.

```csharp
public interface IContactGeometry2Dot5D : IContactGeometry2D, IContactGeometry
```

#### Implements

IContactGeometry2D, 
IContactGeometry

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Contact_IContactGeometry2Dot5D_Property"></a> Property

Gets or sets the property.

```csharp
PropertyContactGeom2Dot5D Property { get; }
```

#### Property Value

 [PropertyContactGeom2Dot5D](VM.Managed.DAFUL.Contact.PropertyContactGeom2Dot5D.md)

### <a id="VM_Managed_DAFUL_Contact_IContactGeometry2Dot5D_TargetGeometry"></a> TargetGeometry

Gets or sets the target geometry.

```csharp
ObjectBase TargetGeometry { get; }
```

#### Property Value

 ObjectBase

