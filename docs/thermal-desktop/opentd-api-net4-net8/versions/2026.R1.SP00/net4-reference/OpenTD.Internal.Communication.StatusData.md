# Class StatusData

Namespace: [OpenTD.Internal.Communication](OpenTD.Internal.Communication.md)  
Assembly: OpenTD.dll  

```csharp
[DataContract]
public class StatusData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StatusData](OpenTD.Internal.Communication.StatusData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### StatusData\(\)

```csharp
public StatusData()
```

## Properties

### Message

```csharp
[DataMember]
public string Message { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Success

```csharp
[DataMember]
public bool Success { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### implicit operator bool\(StatusData\)

```csharp
public static implicit operator bool(StatusData r)
```

#### Parameters

`r` [StatusData](OpenTD.Internal.Communication.StatusData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### implicit operator string\(StatusData\)

```csharp
public static implicit operator string(StatusData r)
```

#### Parameters

`r` [StatusData](OpenTD.Internal.Communication.StatusData.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


