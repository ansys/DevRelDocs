# Class CircularReferenceException
<a id="VM_Models_Pre_CircularReferenceException"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public class CircularReferenceException : InvalidOperationException
```

#### Inheritance

object ← 
Exception ← 
SystemException ← 
InvalidOperationException ← 
[CircularReferenceException](VM.Models.Pre.CircularReferenceException.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_CircularReferenceException__ctor_System_Object_"></a> CircularReferenceException\(object\)

```csharp
public CircularReferenceException(object problem)
```

#### Parameters

`problem` object

### <a id="VM_Models_Pre_CircularReferenceException__ctor_System_Object_System_Collections_IEnumerable_"></a> CircularReferenceException\(object, IEnumerable\)

```csharp
public CircularReferenceException(object problem, IEnumerable objectChain)
```

#### Parameters

`problem` object

`objectChain` IEnumerable

## Properties

### <a id="VM_Models_Pre_CircularReferenceException_ObjectsChain"></a> ObjectsChain

```csharp
public IEnumerable ObjectsChain { get; }
```

#### Property Value

 IEnumerable

### <a id="VM_Models_Pre_CircularReferenceException_Problem"></a> Problem

```csharp
public object Problem { get; }
```

#### Property Value

 object

