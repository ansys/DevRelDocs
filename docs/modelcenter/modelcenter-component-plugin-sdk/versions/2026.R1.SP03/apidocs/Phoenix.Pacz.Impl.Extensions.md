# Class Extensions

Namespace: [Phoenix.Pacz.Impl](Phoenix.Pacz.Impl.md)  
Assembly: Phoenix.Pacz.dll

Contains extension and utility methods for the Pacz Implementation.

```csharp
public static class Extensions

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Extensions](Phoenix.Pacz.Impl.Extensions.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

[GetComponentName(string)](Phoenix.Pacz.Impl.Extensions.GetComponentName.md#Phoenix_Pacz_Impl_Extensions_GetComponentName_System_String_)

Gets the name of a component from the component's source URI.

[GetPaczName(MinervaRemote, bool)](Phoenix.Pacz.Impl.Extensions.GetPaczName.md#Phoenix_Pacz_Impl_Extensions_GetPaczName_Phoenix_MinervaCLI_MinervaRemote_System_Boolean_)

Get the name of this MinervaRemote object's pacz. Requested creation
items are considered in this name.

[GetPaczUploadLocation(MinervaRemote)](Phoenix.Pacz.Impl.Extensions.GetPaczUploadLocation.md#Phoenix_Pacz_Impl_Extensions_GetPaczUploadLocation_Phoenix_MinervaCLI_MinervaRemote_)

Return the remote path to upload this pacz to. For a compressed
pacz, it is the folder containing the .pacz file. For an expanded
pacz, it is the grandparent of the .pacj file. Requested creation
items are considered for this location.

[IsPaczReadOnly(MinervaRemote)](Phoenix.Pacz.Impl.Extensions.IsPaczReadOnly.md#Phoenix_Pacz_Impl_Extensions_IsPaczReadOnly_Phoenix_MinervaCLI_MinervaRemote_)

True if Saving to Minerva is not supported for the file

[OpenExtractedOrCompressedPaczFileAsync(IPaczClient, string)](Phoenix.Pacz.Impl.Extensions.OpenExtractedOrCompressedPaczFileAsync.md#Phoenix_Pacz_Impl_Extensions_OpenExtractedOrCompressedPaczFileAsync_Phoenix_PaczAPI_IPaczClient_System_String_)

Opens a PACZ file or directory. This mehod determines whether the PACZ is extracted or compressed based on
whether the path to the PACZ ends with a .pacz file.

[OpenExtractedOrCompressedPaczFileAsync(IPaczClient, string, bool)](Phoenix.Pacz.Impl.Extensions.OpenExtractedOrCompressedPaczFileAsync.md#Phoenix_Pacz_Impl_Extensions_OpenExtractedOrCompressedPaczFileAsync_Phoenix_PaczAPI_IPaczClient_System_String_System_Boolean_)

Opens a PACZ file or directory.

[PointsToComponentPacj(MinervaRemote)](Phoenix.Pacz.Impl.Extensions.PointsToComponentPacj.md#Phoenix_Pacz_Impl_Extensions_PointsToComponentPacj_Phoenix_MinervaCLI_MinervaRemote_)

True if this MinervaRemote object is pointing to a component.pacj
file, false otherwise. Requested creation items are considered.

[StartSessionForLocalExtractedOrCompressedPaczAsync(IHarnessRunnerClient, string, IRunnerSessionOptions)](Phoenix.Pacz.Impl.Extensions.StartSessionForLocalExtractedOrCompressedPaczAsync.md#Phoenix_Pacz_Impl_Extensions_StartSessionForLocalExtractedOrCompressedPaczAsync_Phoenix_ComponentAPI_IHarnessRunnerClient_System_String_Phoenix_ComponentAPI_IRunnerSessionOptions_)

[ToSafeSourceString(Uri)](Phoenix.Pacz.Impl.Extensions.ToSafeSourceString.md#Phoenix_Pacz_Impl_Extensions_ToSafeSourceString_System_Uri_)

Get a string representation of the URI, but omits the "file:///" scheme for file URI
This makes the string play nice with methods like `System.IO.File.Exists(System.String)`
