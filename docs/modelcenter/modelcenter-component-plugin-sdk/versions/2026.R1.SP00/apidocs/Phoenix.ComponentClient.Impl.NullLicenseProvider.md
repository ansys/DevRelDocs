# Class NullLicenseProvider

Namespace: [Phoenix.ComponentClient.Impl](Phoenix.ComponentClient.Impl.md)  
Assembly: Phoenix.ComponentClient.dll

Default license provider that rejects all calls.

```csharp
public class NullLicenseProvider : AbstractDisposable, ILicenseProvider, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[NullLicenseProvider](Phoenix.ComponentClient.Impl.NullLicenseProvider.md)

#### Implements

[ILicenseProvider](Phoenix.ComponentAPI.ILicenseProvider.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

AbstractDisposable.disposed,
AbstractDisposable.Dispose(),
AbstractDisposable.IsDisposed,
AbstractDisposable.Dispose(bool),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

[CheckOutAsync(string, string)](Phoenix.ComponentClient.Impl.NullLicenseProvider.CheckOutAsync.md#Phoenix_ComponentClient_Impl_NullLicenseProvider_CheckOutAsync_System_String_System_String_)

Checks out a license feature.
