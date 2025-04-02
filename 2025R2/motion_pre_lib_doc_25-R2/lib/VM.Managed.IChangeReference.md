#  Interface IChangeReference

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the change reference.

```csharp
public interface IChangeReference
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_IChangeReference_ChangeReference_VM_Managed_ObjectEventCore_VM_Managed_ObjectEventCore_"></a> ChangeReference\(ObjectEventCore, ObjectEventCore\)

Changes the reference.

```csharp
void ChangeReference(ObjectEventCore oecOld, ObjectEventCore oecNew)
```

#### Parameters

`oecOld` [ObjectEventCore](VM.Managed.ObjectEventCore.md)

The old event core.

`oecNew` [ObjectEventCore](VM.Managed.ObjectEventCore.md)

The new event core.

