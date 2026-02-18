# <a id="OpenTD_Logging_Logger"></a> Class Logger

Namespace: [OpenTD.Logging](OpenTD.Logging.md)  
Assembly: OpenTD.dll  

Writes messages to log files or other destinations.
Use LoggerFactory to generate new loggers.

```csharp
public class Logger : ICRLogger
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Logger](OpenTD.Logging.Logger.md)

#### Implements

ICRLogger

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="OpenTD_Logging_Logger_Close"></a> Close\(\)

```csharp
public void Close()
```

### <a id="OpenTD_Logging_Logger_IsErrorEnabled"></a> IsErrorEnabled\(\)

```csharp
public bool IsErrorEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Logging_Logger_IsInfoEnabled"></a> IsInfoEnabled\(\)

```csharp
public bool IsInfoEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Logging_Logger_IsVerboseEnabled"></a> IsVerboseEnabled\(\)

```csharp
public bool IsVerboseEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Logging_Logger_IsWarnEnabled"></a> IsWarnEnabled\(\)

```csharp
public bool IsWarnEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Logging_Logger_Log_System_Diagnostics_TraceEventType_System_String_"></a> Log\(TraceEventType, string\)

```csharp
public void Log(TraceEventType level, string message)
```

#### Parameters

`level` [TraceEventType](https://learn.microsoft.com/dotnet/api/system.diagnostics.traceeventtype)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Logging_Logger_LogError_System_String_"></a> LogError\(string\)

```csharp
public void LogError(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Logging_Logger_LogError_System_String_System_Object___"></a> LogError\(string, params object\[\]\)

```csharp
public void LogError(string format, params object[] strParams)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strParams` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

### <a id="OpenTD_Logging_Logger_LogInfo_System_String_"></a> LogInfo\(string\)

```csharp
public void LogInfo(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Logging_Logger_LogInfo_System_String_System_Object___"></a> LogInfo\(string, params object\[\]\)

```csharp
public void LogInfo(string format, params object[] strParams)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strParams` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

### <a id="OpenTD_Logging_Logger_LogVerbose_System_String_"></a> LogVerbose\(string\)

```csharp
public void LogVerbose(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Logging_Logger_LogVerbose_System_String_System_Object___"></a> LogVerbose\(string, params object\[\]\)

```csharp
public void LogVerbose(string format, params object[] strParams)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strParams` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

### <a id="OpenTD_Logging_Logger_LogWarn_System_String_"></a> LogWarn\(string\)

```csharp
public void LogWarn(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Logging_Logger_LogWarn_System_String_System_Object___"></a> LogWarn\(string, params object\[\]\)

```csharp
public void LogWarn(string format, params object[] strParams)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strParams` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

## See Also

[LoggerFactory](OpenTD.Logging.LoggerFactory.md)

