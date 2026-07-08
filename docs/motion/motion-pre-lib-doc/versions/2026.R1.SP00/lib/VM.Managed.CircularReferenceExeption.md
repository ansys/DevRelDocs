# Class CircularReferenceExeption
<a id="VM_Managed_CircularReferenceExeption"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the circular reference exeption.

```csharp
public class CircularReferenceExeption : Exception
```

#### Inheritance

object ← 
Exception ← 
[CircularReferenceExeption](VM.Managed.CircularReferenceExeption.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CircularReferenceExeption__ctor_System_String_"></a> CircularReferenceExeption\(string\)

Initializes a new instance of the <xref href="VM.Managed.CircularReferenceExeption" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CircularReferenceExeption(string strMessage)
```

#### Parameters

`strMessage` string

The error message.

