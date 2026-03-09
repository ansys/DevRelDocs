# Class OpenTDPipeServer

Namespace: [OpenTD.Internal.Communication](OpenTD.Internal.Communication.md)  
Assembly: OpenTD.dll  

```csharp
public class OpenTDPipeServer : IDisposable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDPipeServer](OpenTD.Internal.Communication.OpenTDPipeServer.md)

## Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### OpenTDPipeServer\(ITdCommander, Func<Func<TdResponse\>, TdResponse\>, string\)

```csharp
public OpenTDPipeServer(ITdCommander serverCommander, Func<Func<TdResponse>, TdResponse> marshalFunc, string pipeName)
```

#### Parameters

`serverCommander` ITdCommander

`marshalFunc` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[TdResponse](OpenTD.Internal.Communication.TdResponse.md)\>, [TdResponse](OpenTD.Internal.Communication.TdResponse.md)\>

`pipeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### OpenTDPipeServer\(ThermalDesktop, Func<Func<TdResponse\>, TdResponse\>, string\)

```csharp
public OpenTDPipeServer(ThermalDesktop tdInstance, Func<Func<TdResponse>, TdResponse> marshalFunc, string pipename)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

`marshalFunc` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[TdResponse](OpenTD.Internal.Communication.TdResponse.md)\>, [TdResponse](OpenTD.Internal.Communication.TdResponse.md)\>

`pipename` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### Start\(\)

```csharp
public void Start()
```

### StartBlocking\(\)

```csharp
public void StartBlocking()
```

### Stop\(\)

```csharp
public void Stop()
```


