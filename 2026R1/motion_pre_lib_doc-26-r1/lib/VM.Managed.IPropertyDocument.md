# Interface IPropertyDocument
<a id="VM_Managed_IPropertyDocument"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This interface is to represent the property document.

```csharp
public interface IPropertyDocument
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IPropertyDocument_DesignVariables"></a> DesignVariables

Gets the design variables.

```csharp
NamedObjectDictionary<DesignVariable> DesignVariables { get; }
```

#### Property Value

 [NamedObjectDictionary](VM.Managed.Collections.NamedObjectDictionary\-1.md)<[DesignVariable](VM.Managed.DesignVariable.md)\>

### <a id="VM_Managed_IPropertyDocument_Property"></a> Property

Gets the property.

```csharp
Property Property { get; }
```

#### Property Value

 [Property](VM.Managed.Property.md)

### <a id="VM_Managed_IPropertyDocument_PropertyOwner"></a> PropertyOwner

Gets the property owner.

```csharp
ObjectBase PropertyOwner { get; }
```

#### Property Value

 ObjectBase

