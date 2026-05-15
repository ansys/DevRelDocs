# Interface IPaczClient

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

The main entry point for operations on Pacz files. Create an instance of this
interface using Dependency Injection, then use it to get instances of IPacz and
IPaczWriter for use.

The methods of this class are thread safe.

```csharp
public interface IPaczClient

```

#### Extension Methods

[Extensions.OpenExtractedOrCompressedPaczFileAsync(IPaczClient, string)](Phoenix.Pacz.Impl.Extensions.OpenExtractedOrCompressedPaczFileAsync.md#Phoenix_Pacz_Impl_Extensions_OpenExtractedOrCompressedPaczFileAsync_Phoenix_PaczAPI_IPaczClient_System_String_),
[Extensions.OpenExtractedOrCompressedPaczFileAsync(IPaczClient, string, bool)](Phoenix.Pacz.Impl.Extensions.OpenExtractedOrCompressedPaczFileAsync.md#Phoenix_Pacz_Impl_Extensions_OpenExtractedOrCompressedPaczFileAsync_Phoenix_PaczAPI_IPaczClient_System_String_System_Boolean_)

## Methods

[CreateNewPaczFileAsync(string, bool)](Phoenix.PaczAPI.IPaczClient.CreateNewPaczFileAsync.md#Phoenix_PaczAPI_IPaczClient_CreateNewPaczFileAsync_System_String_System_Boolean_)

Creates a new IPaczWriter that is backed by a temporary folder which
can be used to start creating a new Pacz. The source of the returned IPaczWriter
will be null.

[OpenExtractedPaczFileAsync(string, bool)](Phoenix.PaczAPI.IPaczClient.OpenExtractedPaczFileAsync.md#Phoenix_PaczAPI_IPaczClient_OpenExtractedPaczFileAsync_System_String_System_Boolean_)

Opens an uncompressed pacz by loading a folder

This method is thread safe.

[OpenPaczFileAsync(string, bool)](Phoenix.PaczAPI.IPaczClient.OpenPaczFileAsync.md#Phoenix_PaczAPI_IPaczClient_OpenPaczFileAsync_System_String_System_Boolean_)

Opens a compressed pacz by loading a named .pacz file.

This method is thread safe.
