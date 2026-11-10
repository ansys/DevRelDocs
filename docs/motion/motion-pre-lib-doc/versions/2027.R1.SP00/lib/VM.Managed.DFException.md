# Class DFException
<a id="VM_Managed_DFException"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the daful object exception.

```csharp
public class DFException : Exception
```

#### Inheritance

object ← 
Exception ← 
[DFException](VM.Managed.DFException.md)

#### Derived

[Body.BuildCADException](VM.Managed.CAD.Body.BuildCADException.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DFException__ctor_System_String_"></a> DFException\(string\)

Initializes a new instance of the <xref href="VM.Managed.DFException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DFException(string strMessage)
```

#### Parameters

`strMessage` string

The exception message.

### <a id="VM_Managed_DFException__ctor_System_String_System_Exception_"></a> DFException\(string, Exception\)

Initializes a new instance of the <xref href="VM.Managed.DFException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DFException(string strMessage, Exception inner)
```

#### Parameters

`strMessage` string

The exception message.

`inner` Exception

The inner exception.

### <a id="VM_Managed_DFException__ctor"></a> DFException\(\)

Initializes a new instance of the <xref href="VM.Managed.DFException" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected DFException()
```

