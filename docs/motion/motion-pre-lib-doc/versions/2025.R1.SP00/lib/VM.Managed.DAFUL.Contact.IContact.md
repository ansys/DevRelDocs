#  Interface IContact

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This interface is to represent contact.

```csharp
public interface IContact : IEntityRelation
```

#### Implements

IEntityRelation

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Contact_IContact_ActionGeom"></a> ActionGeom

Gets or sets the action geometry of contact.

```csharp
ObjectBase ActionGeom { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Contact_IContact_BaseGeom"></a> BaseGeom

Gets or sets the base geometry of contact.

```csharp
ObjectBase BaseGeom { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Contact_IContact_Property"></a> Property

Gets or sets the property.

```csharp
Property Property { get; set; }
```

#### Property Value

 Property

