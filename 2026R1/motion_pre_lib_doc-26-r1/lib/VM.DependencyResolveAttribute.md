# Class DependencyResolveAttribute
<a id="VM_DependencyResolveAttribute"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
public class DependencyResolveAttribute : Attribute
```

#### Inheritance

object ← 
Attribute ← 
[DependencyResolveAttribute](VM.DependencyResolveAttribute.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_DependencyResolveAttribute__ctor_System_Type_"></a> DependencyResolveAttribute\(Type\)

```csharp
public DependencyResolveAttribute(Type interfaceType)
```

#### Parameters

`interfaceType` Type

## Properties

### <a id="VM_DependencyResolveAttribute_InterfaceType"></a> InterfaceType

```csharp
public Type InterfaceType { get; }
```

#### Property Value

 Type

