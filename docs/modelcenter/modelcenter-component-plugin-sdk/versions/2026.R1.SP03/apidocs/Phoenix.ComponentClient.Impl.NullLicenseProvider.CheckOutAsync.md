# Method CheckOutAsync

Namespace: [Phoenix.ComponentClient.Impl](Phoenix.ComponentClient.Impl.md)  
Assembly: Phoenix.ComponentClient.dll

## CheckOutAsync(string, string)

Checks out a license feature.

```csharp
public Task<ILicenseFeature> CheckOutAsync(string feature, string version)

```

### Parameters

`feature` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the feature to check out.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)

The version of the feature, which can be a normal version string
or a date formatted as a version(yyyy.MMdd).

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ILicenseFeature](Phoenix.ComponentAPI.ILicenseFeature.md)>

An ILicenseFeature that should be used to check in the feature.
