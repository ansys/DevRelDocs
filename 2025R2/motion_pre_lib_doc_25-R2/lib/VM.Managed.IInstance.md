#  Interface IInstance

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the instance.

```csharp
public interface IInstance
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_IInstance_AddNewReference_VM_Managed_ObjectBase_"></a> AddNewReference\(ObjectBase\)

Add object for new reference.

```csharp
void AddNewReference(ObjectBase obNew)
```

#### Parameters

`obNew` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### <a id="VM_Managed_IInstance_AddNewReferences_VM_Managed_ObjectBase___System_String_"></a> AddNewReferences\(ObjectBase\[\], string\)

Add object for new references.

```csharp
void AddNewReferences(ObjectBase[] arObjNew, string strCetegory)
```

#### Parameters

`arObjNew` [ObjectBase](VM.Managed.ObjectBase.md)\[\]

The object array.

`strCetegory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category name.

