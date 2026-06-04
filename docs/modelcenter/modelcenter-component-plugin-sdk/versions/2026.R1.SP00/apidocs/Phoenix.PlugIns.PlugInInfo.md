# Class PlugInInfo

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

A class that represents the JSON metadata.phxplugin file that is stored
with plug-ins to define what they contain.

```csharp
public class PlugInInfo

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PlugInInfo](Phoenix.PlugIns.PlugInInfo.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

[PlugInInfo(Guid, IEnumerable<string>, Framework, string, string, string, string, IReadOnlyDictionary<string, string>, Uri, string, string, IReadOnlyDictionary<string, string>)](Phoenix.PlugIns.PlugInInfo.-ctor.md#Phoenix_PlugIns_PlugInInfo__ctor_System_Guid_System_Collections_Generic_IEnumerable_System_String__Phoenix_PlugIns_Framework_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Uri_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__)

Constructor

## Fields

[METADATA_FILENAME](Phoenix.PlugIns.PlugInInfo.METADATA_FILENAME.md#Phoenix_PlugIns_PlugInInfo_METADATA_FILENAME)

The standard name of the metadata file.

## Properties

[Author](Phoenix.PlugIns.PlugInInfo.Author.md#Phoenix_PlugIns_PlugInInfo_Author)

Who authored this plug-in

[CurrentDisplayName](Phoenix.PlugIns.PlugInInfo.CurrentDisplayName.md#Phoenix_PlugIns_PlugInInfo_CurrentDisplayName)

Attempt to retrieve the appropriate display name.

[Description](Phoenix.PlugIns.PlugInInfo.Description.md#Phoenix_PlugIns_PlugInInfo_Description)

A longer description of the component

[DisplayName](Phoenix.PlugIns.PlugInInfo.DisplayName.md#Phoenix_PlugIns_PlugInInfo_DisplayName)

A map of language to a human readible display name for the plug-in. Entries may be of
the form languageCode2-countryCode2, languageCode2, or an empty string. The languageCode2
must be an ISO 639-1 two-letter country code. The countryCode2 must be an ISO 3166 two-letter
subculture code (usually a country identifier). When choosing which name to display, the
system will first try to match the user's languageCode2-countryCode2 combination, then
just the languageCode2, then it will try to use the entry with an empty key, then it will
try to use 'en', lastly falling back on the name of the implementing class. Tests are
always case insensitive.

[HelpUrl](Phoenix.PlugIns.PlugInInfo.HelpUrl.md#Phoenix_PlugIns_PlugInInfo_HelpUrl)

A URL that provides help for the component

[Icon](Phoenix.PlugIns.PlugInInfo.Icon.md#Phoenix_PlugIns_PlugInInfo_Icon)

A path, usually relative to the metadata file, that points to an icon or bitmap file
for the component.

[Id](Phoenix.PlugIns.PlugInInfo.Id.md#Phoenix_PlugIns_PlugInInfo_Id)

The UUID for the plug-in

[ImplClass](Phoenix.PlugIns.PlugInInfo.ImplClass.md#Phoenix_PlugIns_PlugInInfo_ImplClass)

The full class name that implements the plug-in, in dotted notation.

[ImplFile](Phoenix.PlugIns.PlugInInfo.ImplFile.md#Phoenix_PlugIns_PlugInInfo_ImplFile)

The main file that contains the implementing class. Must be a .dll for DotNet and a
.jar for Java. May be relative to the 'metadata.phxplugin' file.

[ImplFramework](Phoenix.PlugIns.PlugInInfo.ImplFramework.md#Phoenix_PlugIns_PlugInInfo_ImplFramework)

What framework is used to implement this plug-in?

[Options](Phoenix.PlugIns.PlugInInfo.Options.md#Phoenix_PlugIns_PlugInInfo_Options)

An arbitrary string/value map of options. Refer to your SDK documentation for available
options that can be set.

[SupportedTypes](Phoenix.PlugIns.PlugInInfo.SupportedTypes.md#Phoenix_PlugIns_PlugInInfo_SupportedTypes)

A list of unique string identifiers that
define what types of plug-in this class implements. The plug-in framework is generic to
allow for future types. The currently implemented types are
'Phoenix::IHarnessRunner' and 'Phoenix::IHarnessBuilderUI'.

[Version](Phoenix.PlugIns.PlugInInfo.Version.md#Phoenix_PlugIns_PlugInInfo_Version)

The version of this plug-in

## Methods

[GetMetadataForAssembly(Assembly)](Phoenix.PlugIns.PlugInInfo.GetMetadataForAssembly.md#Phoenix_PlugIns_PlugInInfo_GetMetadataForAssembly_System_Reflection_Assembly_)

Creates a list of PlugInInfo objects from the attributes on an Assembly.

[GetPlugInType(string)](Phoenix.PlugIns.PlugInInfo.GetPlugInType.md#Phoenix_PlugIns_PlugInInfo_GetPlugInType_System_String_)

Get the Type object for the plug-in

[Implements<T>()](Phoenix.PlugIns.PlugInInfo.Implements.md#Phoenix_PlugIns_PlugInInfo_Implements__1)

Determine if the plug-in implements an interface

[Implements(string)](Phoenix.PlugIns.PlugInInfo.Implements.md#Phoenix_PlugIns_PlugInInfo_Implements_System_String_)

Determine if the plug-in implements an interface.

[Instantiate<T>(IServiceProvider, string)](Phoenix.PlugIns.PlugInInfo.Instantiate.md#Phoenix_PlugIns_PlugInInfo_Instantiate__1_System_IServiceProvider_System_String_)

Instantiates a new instance of the plug-in

[ReadJson(string)](Phoenix.PlugIns.PlugInInfo.ReadJson.md#Phoenix_PlugIns_PlugInInfo_ReadJson_System_String_)

Reads a JSON string into an array of PlugInInfo objects

[ReadJsonStreamAsync(Stream)](Phoenix.PlugIns.PlugInInfo.ReadJsonStreamAsync.md#Phoenix_PlugIns_PlugInInfo_ReadJsonStreamAsync_System_IO_Stream_)

Reads a list of PlugInInfo objects from a stream

[WriteJson(IEnumerable<PlugInInfo>)](Phoenix.PlugIns.PlugInInfo.WriteJson.md#Phoenix_PlugIns_PlugInInfo_WriteJson_System_Collections_Generic_IEnumerable_Phoenix_PlugIns_PlugInInfo__)

Writes a list of PlugInInfo objects into a JSON string. Defaults
to human readable (indented)

[WriteJson(IEnumerable<PlugInInfo>, Formatting)](Phoenix.PlugIns.PlugInInfo.WriteJson.md#Phoenix_PlugIns_PlugInInfo_WriteJson_System_Collections_Generic_IEnumerable_Phoenix_PlugIns_PlugInInfo__Newtonsoft_Json_Formatting_)

Writes a list of PlugInInfo objects into a JSON string.

[WriteMetadataForDLLs(params string[])](Phoenix.PlugIns.PlugInInfo.WriteMetadataForDLLs.md#Phoenix_PlugIns_PlugInInfo_WriteMetadataForDLLs_System_String___)

Write plug-in metadata for a given set of DLLs.
A single metadata file with the name `Phoenix.PlugIns.PlugInInfo.METADATA_FILENAME` will be written in each directory
which contains the targeted DLLs. The file will contain metadata for all the targeted DLLs in that directory.
