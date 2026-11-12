# Class ProxyValidationAspect
<a id="VM_Models_Aspects_ProxyValidationAspect"></a>

Namespace: [VM.Models.Aspects](VM.Models.Aspects.md)  
Assembly: VM.Models.Aspects.dll  

```csharp
[Aspect(Scope.PerInstance)]
[Mixin(typeof(INotifyDataErrorInfo))]
[Mixin(typeof(IDataErrorInfo))]
public class ProxyValidationAspect
```

#### Inheritance

object ← 
[ProxyValidationAspect](VM.Models.Aspects.ProxyValidationAspect.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Aspects_ProxyValidationAspect__ctor"></a> ProxyValidationAspect\(\)

```csharp
public ProxyValidationAspect()
```

## Fields

### <a id="VM_Models_Aspects_ProxyValidationAspect___a__instance"></a> \_\_a$\_instance

```csharp
public static readonly ProxyValidationAspect __a$_instance
```

#### Field Value

 [ProxyValidationAspect](VM.Models.Aspects.ProxyValidationAspect.md)

## Methods

### <a id="VM_Models_Aspects_ProxyValidationAspect_AfterConstructor_System_Object_System_Attribute___"></a> AfterConstructor\(object, Attribute\[\]\)

```csharp
[Advice(Kind.After, Targets = Target.Internal|Target.Public|Target.Constructor)]
public void AfterConstructor(object instance, Attribute[] triggers)
```

#### Parameters

`instance` object

`triggers` Attribute\[\]

