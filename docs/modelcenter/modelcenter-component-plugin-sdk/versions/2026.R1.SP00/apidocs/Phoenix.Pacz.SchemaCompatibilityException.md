# Class SchemaCompatibilityException

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

Exception thrown when a file with an unsupported version is opened.

```csharp
public class SchemaCompatibilityException : Exception, ISerializable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ←
[SchemaCompatibilityException](Phoenix.Pacz.SchemaCompatibilityException.md)

#### Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

#### Inherited Members

[Exception.GetBaseException()](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception),
[Exception.GetObjectData(SerializationInfo, StreamingContext)](https://learn.microsoft.com/dotnet/api/system.exception.getobjectdata),
[Exception.GetType()](https://learn.microsoft.com/dotnet/api/system.exception.gettype),
[Exception.ToString()](https://learn.microsoft.com/dotnet/api/system.exception.tostring),
[Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data),
[Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink),
[Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult),
[Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception),
[Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message),
[Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source),
[Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace),
[Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite),
[Exception.SerializeObjectState](https://learn.microsoft.com/dotnet/api/system.exception.serializeobjectstate),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

[SchemaCompatibilityException()](Phoenix.Pacz.SchemaCompatibilityException.-ctor.md#Phoenix_Pacz_SchemaCompatibilityException__ctor)

Construct a new `Phoenix.Pacz.SchemaCompatibilityException`.
A default exception message will be supplied.

[SchemaCompatibilityException(string)](Phoenix.Pacz.SchemaCompatibilityException.-ctor.md#Phoenix_Pacz_SchemaCompatibilityException__ctor_System_String_)

Construct a new `Phoenix.Pacz.SchemaCompatibilityException` with a specified message.

[SchemaCompatibilityException(Exception)](Phoenix.Pacz.SchemaCompatibilityException.-ctor.md#Phoenix_Pacz_SchemaCompatibilityException__ctor_System_Exception_)

Construct a new `Phoenix.Pacz.SchemaCompatibilityException` with a specified inner exception.
A default exception message will be supplied.

[SchemaCompatibilityException(string, Exception)](Phoenix.Pacz.SchemaCompatibilityException.-ctor.md#Phoenix_Pacz_SchemaCompatibilityException__ctor_System_String_System_Exception_)

Construct a new `Phoenix.Pacz.SchemaCompatibilityException` with a specified inner exception and message.
