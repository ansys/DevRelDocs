#  Interface ITreatValidObject

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

Interface for the chained system compatibility.

```csharp
public interface ITreatValidObject
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_ITreatValidObject_AddInvalidObject_System_UIntPtr_"></a> AddInvalidObject\(UIntPtr\)

Add Invalid object.

```csharp
void AddInvalidObject(UIntPtr ptrKey)
```

#### Parameters

`ptrKey` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key.

