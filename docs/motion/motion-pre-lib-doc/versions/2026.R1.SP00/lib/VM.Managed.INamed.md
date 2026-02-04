# Interface INamed
<a id="VM_Managed_INamed"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the object that has a name.

```csharp
public interface INamed
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_INamed_FullName"></a> FullName

Gets the object full name.

```csharp
string FullName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_INamed_Name"></a> Name

Gets or sets the object name.

```csharp
string Name { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_INamed_NonSymmetricName"></a> NonSymmetricName

Gets the non-symmetric object name.

```csharp
string NonSymmetricName { get; }
```

#### Property Value

 string

