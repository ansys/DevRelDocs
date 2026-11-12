# Class Owned
<a id="VM_Managed_Owned"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the owned.

```csharp
public class Owned
```

#### Inheritance

object ← 
[Owned](VM.Managed.Owned.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Owned__ctor"></a> Owned\(\)

```csharp
public Owned()
```

## Methods

### <a id="VM_Managed_Owned_GetOwner_VM_Models_Pre_IOwned_"></a> GetOwner\(IOwned\)

Gets the owner.

```csharp
public static ObjectBase GetOwner(IOwned owned)
```

#### Parameters

`owned` IOwned

IOwned interface.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

An object that matches a specified owned.

