#  Class Body.BuildCADException

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the exception for body's builder.

```csharp
public class Body.BuildCADException : DFException
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[DFException](VM.Managed.DFException.md) ← 
[Body.BuildCADException](VM.Managed.CAD.Body.BuildCADException.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_Body_BuildCADException__ctor_System_String_"></a> BuildCADException\(string\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Body.BuildCADException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuildCADException(string strMessage)
```

#### Parameters

`strMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)

The exception message.

### <a id="VM_Managed_CAD_Body_BuildCADException__ctor_System_Type_"></a> BuildCADException\(Type\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Body.BuildCADException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuildCADException(Type obType)
```

#### Parameters

`obType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The exception type.

### <a id="VM_Managed_CAD_Body_BuildCADException__ctor_System_Type_System_Exception_"></a> BuildCADException\(Type, Exception\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Body.BuildCADException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuildCADException(Type obType, Exception inner)
```

#### Parameters

`obType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The exception type.

`inner` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The inner exception.

