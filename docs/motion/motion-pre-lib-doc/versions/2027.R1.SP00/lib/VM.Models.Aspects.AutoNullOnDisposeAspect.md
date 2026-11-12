# Class AutoNullOnDisposeAspect
<a id="VM_Models_Aspects_AutoNullOnDisposeAspect"></a>

Namespace: [VM.Models.Aspects](VM.Models.Aspects.md)  
Assembly: VM.Models.Aspects.dll  

```csharp
[Aspect(Scope.PerInstance)]
public sealed class AutoNullOnDisposeAspect
```

#### Inheritance

object ← 
[AutoNullOnDisposeAspect](VM.Models.Aspects.AutoNullOnDisposeAspect.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Aspects_AutoNullOnDisposeAspect__ctor"></a> AutoNullOnDisposeAspect\(\)

```csharp
public AutoNullOnDisposeAspect()
```

## Fields

### <a id="VM_Models_Aspects_AutoNullOnDisposeAspect___a__instance"></a> \_\_a$\_instance

```csharp
public static readonly AutoNullOnDisposeAspect __a$_instance
```

#### Field Value

 [AutoNullOnDisposeAspect](VM.Models.Aspects.AutoNullOnDisposeAspect.md)

## Methods

### <a id="VM_Models_Aspects_AutoNullOnDisposeAspect_AfterSetter_System_Object_System_String_System_Object___System_Attribute___"></a> AfterSetter\(object, string, object\[\], Attribute\[\]\)

```csharp
[Advice(Kind.After, Targets = Target.AnyAccess|Target.Setter)]
public void AfterSetter(object owner, string propertyName, object[] values, Attribute[] triggers)
```

#### Parameters

`owner` object

`propertyName` string

`values` object\[\]

`triggers` Attribute\[\]

