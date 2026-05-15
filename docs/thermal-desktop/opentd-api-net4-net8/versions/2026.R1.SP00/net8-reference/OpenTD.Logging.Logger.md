# Class Logger

Namespace: [OpenTD.Logging](OpenTD.Logging.md)  
Assembly: OpenTD.dll  

Writes messages to log files or other destinations.
Use LoggerFactory to generate new loggers.

```csharp
public class Logger : ICRLogger
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Logger](OpenTD.Logging.Logger.md)

## Implements

ICRLogger

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### Close\(\)

```csharp
public void Close()
```

### IsErrorEnabled\(\)

```csharp
public bool IsErrorEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsInfoEnabled\(\)

```csharp
public bool IsInfoEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsVerboseEnabled\(\)

```csharp
public bool IsVerboseEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsWarnEnabled\(\)

```csharp
public bool IsWarnEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Log\(TraceEventType, string\)

```csharp
public void Log(TraceEventType level, string message)
```

#### Parameters

`level` [TraceEventType](https://learn.microsoft.com/dotnet/api/system.diagnostics.traceeventtype)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### LogError\(string\)

```csharp
public void LogError(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### LogError\(string, params object\[\]\)

```csharp
public void LogError(string format, params object[] strParams)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strParams` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

### LogInfo\(string\)

```csharp
public void LogInfo(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### LogInfo\(string, params object\[\]\)

```csharp
public void LogInfo(string format, params object[] strParams)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strParams` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

### LogVerbose\(string\)

```csharp
public void LogVerbose(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### LogVerbose\(string, params object\[\]\)

```csharp
public void LogVerbose(string format, params object[] strParams)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strParams` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

### LogWarn\(string\)

```csharp
public void LogWarn(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### LogWarn\(string, params object\[\]\)

```csharp
public void LogWarn(string format, params object[] strParams)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strParams` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

## See Also

[LoggerFactory](OpenTD.Logging.LoggerFactory.md)


