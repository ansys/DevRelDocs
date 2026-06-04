# Interface ICompatibility

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

Compatibility warning for files being loaded by older software versions.

```csharp
public interface ICompatibility

```

## Properties

[ErrorOnLoad](Phoenix.PaczAPI.ICompatibility.ErrorOnLoad.md#Phoenix_PaczAPI_ICompatibility_ErrorOnLoad)

Whether or not the warning should be treated as an error and cause loading to fail.

[MajorVersion](Phoenix.PaczAPI.ICompatibility.MajorVersion.md#Phoenix_PaczAPI_ICompatibility_MajorVersion)

Major version number from `Phoenix.PaczAPI.ICompatibility.VersionLessThan`

[Message](Phoenix.PaczAPI.ICompatibility.Message.md#Phoenix_PaczAPI_ICompatibility_Message)

The warning message.

[MinorVersion](Phoenix.PaczAPI.ICompatibility.MinorVersion.md#Phoenix_PaczAPI_ICompatibility_MinorVersion)

Minor version number from `Phoenix.PaczAPI.ICompatibility.VersionLessThan`

[VersionLessThan](Phoenix.PaczAPI.ICompatibility.VersionLessThan.md#Phoenix_PaczAPI_ICompatibility_VersionLessThan)

Defines which older versions of the schema are incompatible.
It must be a 2 number dotted notation (such as '4.1').
If the client version is less than this property the warning will be applied.
