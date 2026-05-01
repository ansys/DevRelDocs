# Class PHXLoggerToILogger

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

Wraps an ILogger with the IPHXLogger interface.

```csharp
public class PHXLoggerToILogger : AbstractDisposable, IPHXLogger, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[PHXLoggerToILogger](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.md)

#### Implements

IPHXLogger,
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

AbstractDisposable.disposed,
AbstractDisposable.Dispose(),
AbstractDisposable.IsDisposed,
AbstractDisposable.Dispose(bool),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[PHXLoggerToILogger(ILogger)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.-ctor.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger__ctor_Microsoft_Extensions_Logging_ILogger_)

Constructor

## Properties

[IsDebugEnabled](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.IsDebugEnabled.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_IsDebugEnabled)

Get whether the DEBUG logging level is enabled.

[IsErrorEnabled](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.IsErrorEnabled.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_IsErrorEnabled)

Get whether the ERROR logging level is enabled.

[IsInfoEnabled](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.IsInfoEnabled.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_IsInfoEnabled)

Get whether the INFO logging level is enabled.

[IsTraceEnabled](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.IsTraceEnabled.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_IsTraceEnabled)

Get whether the TRACE logging level is enabled.

[IsWarnEnabled](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.IsWarnEnabled.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_IsWarnEnabled)

Get whether the WARN logging level is enabled.

## Methods

[Debug(string)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Debug.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Debug_System_String_)

Print a debug message.

[Debug(string, Exception)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Debug.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Debug_System_String_System_Exception_)

Print a debug message.

[Debug(string, params object[])](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Debug.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Debug_System_String_System_Object___)

Print a debug message.

[Error(string)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Error.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Error_System_String_)

Print an error message.

[Error(string, Exception)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Error.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Error_System_String_System_Exception_)

Print an error message.

[Error(string, params object[])](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Error.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Error_System_String_System_Object___)

Print an error message.

[Info(string)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Info.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Info_System_String_)

Print an info message.

[Info(string, Exception)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Info.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Info_System_String_System_Exception_)

Print an info message.

[Info(string, params object[])](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Info.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Info_System_String_System_Object___)

Print an info message.

[Trace(string)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Trace.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Trace_System_String_)

Print a trace message.

[Trace(string, Exception)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Trace.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Trace_System_String_System_Exception_)

Print a trace message.

[Trace(string, params object[])](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Trace.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Trace_System_String_System_Object___)

Print a trace message.

[Warn(string)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Warn.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Warn_System_String_)

Print a warning message.

[Warn(string, Exception)](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Warn.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Warn_System_String_System_Exception_)

Print a warning message.

[Warn(string, params object[])](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.Warn.md#Phoenix_ComponentPlugInSDK_PHXLoggerToILogger_Warn_System_String_System_Object___)

Print a warning message.
