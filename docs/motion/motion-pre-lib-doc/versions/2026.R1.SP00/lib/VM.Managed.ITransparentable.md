# Interface ITransparentable
<a id="VM_Managed_ITransparentable"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the transparentable object.

```csharp
public interface ITransparentable
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_ITransparentable_TransparentObject"></a> TransparentObject

Gets the transparent object.

```csharp
ObjectBase TransparentObject { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_ITransparentable_TransparentObjects"></a> TransparentObjects

Gets the transparent objects.

```csharp
ObjectBase[] TransparentObjects { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

