# Class RegisterData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents a Sinda register, used in a Case Set.

```csharp
[DataContract]
public class RegisterData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RegisterData](OpenTD.RegisterData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### RegisterData\(\)

```csharp
public RegisterData()
```

## Properties

### Comment

```csharp
[DataMember]
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Disabled

```csharp
[DataMember]
public bool Disabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Integer

```csharp
[DataMember]
public bool Integer { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UserValue

```csharp
[DataMember]
public string UserValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### valueType

```csharp
[DataMember]
public RegisterData.ValueType valueType { get; set; }
```

#### Property Value

 [RegisterData](OpenTD.RegisterData.md).[ValueType](OpenTD.RegisterData.ValueType.md)

## See Also

[CaseSet](OpenTD.CaseSet.md)


