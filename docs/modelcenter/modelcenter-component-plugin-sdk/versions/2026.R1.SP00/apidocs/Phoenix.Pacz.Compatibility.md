# Class Compatibility

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

Compatibility warning for files being loaded by older software versions.

```csharp
public class Compatibility : ICompatibility

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Compatibility](Phoenix.Pacz.Compatibility.md)

#### Implements

[ICompatibility](Phoenix.PaczAPI.ICompatibility.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

[ErrorOnLoad](Phoenix.Pacz.Compatibility.ErrorOnLoad.md#Phoenix_Pacz_Compatibility_ErrorOnLoad)

Whether or not the warning should be treated as an error and cause loading to fail.

[MajorVersion](Phoenix.Pacz.Compatibility.MajorVersion.md#Phoenix_Pacz_Compatibility_MajorVersion)

Major version number from `Phoenix.PaczAPI.ICompatibility.VersionLessThan`

[Message](Phoenix.Pacz.Compatibility.Message.md#Phoenix_Pacz_Compatibility_Message)

The warning message.

[MinorVersion](Phoenix.Pacz.Compatibility.MinorVersion.md#Phoenix_Pacz_Compatibility_MinorVersion)

Minor version number from `Phoenix.PaczAPI.ICompatibility.VersionLessThan`

[VersionLessThan](Phoenix.Pacz.Compatibility.VersionLessThan.md#Phoenix_Pacz_Compatibility_VersionLessThan)

Defines which older versions of the schema are incompatible.
It must be a 2 number dotted notation (such as '4.1').
If the client version is less than this property the warning will be applied.
