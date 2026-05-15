# Class OpenTDException

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

General exception thrown by OpenTD.

```csharp
[Serializable]
public class OpenTDException : Exception, ISerializable, _Exception
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[OpenTDException](OpenTD.OpenTDException.md)

#### Derived

[BadDataException](OpenTD.BadDataException.md)

## Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable), 
[\_Exception](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.\_exception)

## Inherited Members

[Exception.GetBaseException\(\)](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception), 
[Exception.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.exception.tostring), 
[Exception.GetObjectData\(SerializationInfo, StreamingContext\)](https://learn.microsoft.com/dotnet/api/system.exception.getobjectdata), 
[Exception.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.exception.gettype), 
[Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message), 
[Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data), 
[Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception), 
[Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite), 
[Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace), 
[Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink), 
[Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source), 
[Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult), 
[Exception.SerializeObjectState](https://learn.microsoft.com/dotnet/api/system.exception.serializeobjectstate), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### OpenTDException\(StatusData\)

```csharp
public OpenTDException(StatusData x)
```

#### Parameters

`x` [StatusData](OpenTD.Internal.Communication.StatusData.md)

### OpenTDException\(string\)

```csharp
public OpenTDException(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

### OpenTDException\(string, Exception\)

```csharp
public OpenTDException(string msg, Exception innerException)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

`innerException` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

## Fields

### statusData

```csharp
public StatusData statusData
```

#### Field Value

 [StatusData](OpenTD.Internal.Communication.StatusData.md)

## Methods

### Show\(\)

```csharp
public void Show()
```

## See Also

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)


