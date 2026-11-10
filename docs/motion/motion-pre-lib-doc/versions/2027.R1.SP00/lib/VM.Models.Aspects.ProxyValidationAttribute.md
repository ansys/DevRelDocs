# Class ProxyValidationAttribute
<a id="VM_Models_Aspects_ProxyValidationAttribute"></a>

Namespace: [VM.Models.Aspects](VM.Models.Aspects.md)  
Assembly: VM.Models.Aspects.dll  

```csharp
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = true)]
[Injection(typeof(ProxyValidationAspect))]
public class ProxyValidationAttribute : Attribute
```

#### Inheritance

object ← 
Attribute ← 
[ProxyValidationAttribute](VM.Models.Aspects.ProxyValidationAttribute.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Aspects_ProxyValidationAttribute__ctor_System_String_"></a> ProxyValidationAttribute\(string\)

```csharp
public ProxyValidationAttribute(string sourcePropertyName)
```

#### Parameters

`sourcePropertyName` string

## Properties

### <a id="VM_Models_Aspects_ProxyValidationAttribute_SourcePropertyName"></a> SourcePropertyName

```csharp
public string SourcePropertyName { get; }
```

#### Property Value

 string

