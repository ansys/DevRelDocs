# Class DebugDataKeyConstants

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

This class contains documentation about reserved keys used by the CAM framework to represent special data in
`Phoenix.ComponentAPI.IExecutionInstance.DebugDataUpdated` maps.

```csharp
public static class DebugDataKeyConstants

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[DebugDataKeyConstants](Phoenix.ComponentAPI.DebugDataKeyConstants.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

[EXTRACT_DIR_KEY](Phoenix.ComponentAPI.DebugDataKeyConstants.EXTRACT_DIR_KEY.md#Phoenix_ComponentAPI_DebugDataKeyConstants_EXTRACT_DIR_KEY)

The harness extraction directory.

[HOST_KEY](Phoenix.ComponentAPI.DebugDataKeyConstants.HOST_KEY.md#Phoenix_ComponentAPI_DebugDataKeyConstants_HOST_KEY)

The hostname where the harness is being run.

[RUN_DIR_KEY](Phoenix.ComponentAPI.DebugDataKeyConstants.RUN_DIR_KEY.md#Phoenix_ComponentAPI_DebugDataKeyConstants_RUN_DIR_KEY)

The run directory for the harness.

## Methods

[DisplayNameForDebugDataKey(string)](Phoenix.ComponentAPI.DebugDataKeyConstants.DisplayNameForDebugDataKey.md#Phoenix_ComponentAPI_DebugDataKeyConstants_DisplayNameForDebugDataKey_System_String_)

Retrieve a display name for a given debug key if it is one of the reserved keys.
