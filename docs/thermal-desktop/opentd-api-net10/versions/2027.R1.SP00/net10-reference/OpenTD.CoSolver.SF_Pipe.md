# Class SF\_Pipe

Namespace: [OpenTD.CoSolver](OpenTD.CoSolver.md)  
Assembly: OpenTD.CoSolver.dll  

Used internally to communicate with Sinda.

```csharp
public class SF_Pipe
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SF\_Pipe](OpenTD.CoSolver.SF\_Pipe.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SF\_Pipe\(string\)

```csharp
public SF_Pipe(string pipeID)
```

#### Parameters

`pipeID` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### IsConnected

```csharp
public bool IsConnected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Close\(\)

```csharp
public void Close()
```

### ReadLine\(\)

```csharp
public string ReadLine()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### WaitForConnection\(\)

```csharp
public void WaitForConnection()
```

### WriteLine\(string\)

```csharp
public void WriteLine(string line)
```

#### Parameters

`line` [string](https://learn.microsoft.com/dotnet/api/system.string)


