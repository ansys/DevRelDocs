# Class LoggerFactory

Namespace: [OpenTD.Logging](OpenTD.Logging.md)  
Assembly: OpenTD.dll  

Use LoggerFactory to generate new Loggers.
LogConfigPath is the path to a configuration file that is read when
OpenTD is first started. Control where logs are written using this
file.

```csharp
public static class LoggerFactory
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LoggerFactory](OpenTD.Logging.LoggerFactory.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### Initialized

```csharp
public static bool Initialized
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### LogConfigPath

```csharp
public static string LogConfigPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### GetLogger\(string\)

Get a new Logger. Hint: create a static logger for your class
and name it with the class name.

```csharp
public static Logger GetLogger(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Logger](OpenTD.Logging.Logger.md)

#### See Also

[Logger](OpenTD.Logging.Logger.md)

### GetLogger\(\)

Get a new Logger, with a default name.

```csharp
public static Logger GetLogger()
```

#### Returns

 [Logger](OpenTD.Logging.Logger.md)

#### See Also

[Logger](OpenTD.Logging.Logger.md)

### LogAndThrowException\(string, Logger, Exception, bool\)

```csharp
public static void LogAndThrowException(string msg, Logger log, Exception innerEx = null, bool justWarning = false)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

`log` [Logger](OpenTD.Logging.Logger.md)

`innerEx` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

`justWarning` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## See Also

[Logger](OpenTD.Logging.Logger.md)


