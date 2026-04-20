# Namespace Phoenix.PlugIns

### Namespaces

[Phoenix.PlugIns.Repositories](Phoenix.PlugIns.Repositories.md)

### Classes

[PlugInDescriptionAttribute](Phoenix.PlugIns.PlugInDescriptionAttribute.md)

An attribute that may be used to add a longer description of a plug-in.

[PlugInDisplayNameAttribute](Phoenix.PlugIns.PlugInDisplayNameAttribute.md)

Attribute defining a display name for a plug-in.

[PlugInHelpUrlAttribute](Phoenix.PlugIns.PlugInHelpUrlAttribute.md)

An attribute that defines a Url that can be used to get additional information
about the plug-in.

Note that if the Url is unparseable, your plug-in will compile but fail when
WritePlugInManifest is called on it.

[PlugInIconAttribute](Phoenix.PlugIns.PlugInIconAttribute.md)

An attribute that defines an icon or bitmap file for the component. Usually the
path is relative to the manifest file.

[PlugInInfo](Phoenix.PlugIns.PlugInInfo.md)

A class that represents the JSON metadata.phxplugin file that is stored
with plug-ins to define what they contain.

[PlugInInterfaceNameAttribute](Phoenix.PlugIns.PlugInInterfaceNameAttribute.md)

If you wish to define a new type of plug-in, create an interface and annotate
it with this attribute. The string passed in will be used to identify this plug-in
type. Then, you can use the interface as a type parameter to methods like
`Phoenix.PlugIns.IPlugInManager.GetViewFor``1`

[PlugInManagerFactory](Phoenix.PlugIns.PlugInManagerFactory.md)

Entrypoint for configuring Microsoft Dependency Injection to create instances
of `Phoenix.PlugIns.IPlugInManager`. See the `Phoenix.PlugIns` documentation for example
code.

[PlugInMetadataFromAttribute](Phoenix.PlugIns.PlugInMetadataFromAttribute.md)

If defined on a plug-in class, all the metadata attributes except for
`Phoenix.PlugIns.PlugInTypesAttribute` will be read from the alternate
class. This helps reduce repeated code when there are multiple related
plug-ins.

Note, this attribute is not recursive. If the referenced class also has
this attribute defined, it will not be followed.

[PlugInOptionAttribute](Phoenix.PlugIns.PlugInOptionAttribute.md)

Provides a generic name/value pair for arbitrary plug-in options. Refer
to the documentation of your plug-in SDK for details on available options that
can be set.

[PlugInTypesAttribute](Phoenix.PlugIns.PlugInTypesAttribute.md)

Attribute defines the types of interfaces that a plug-in
supports.

If you are creating a new plug-in, specify which interfaces
it implements using this attribute.

### Interfaces

[IPlugInInstance](Phoenix.PlugIns.IPlugInInstance.md)

Represents a plug-in found in the registry and managed by
an `Phoenix.PlugIns.IPlugInManager`

[IPlugInManager](Phoenix.PlugIns.IPlugInManager.md)

The main interface for using plug-ins from your application. See documentation
on `Phoenix.PlugIns` for how to get an instance.

[IPlugInRepository](Phoenix.PlugIns.IPlugInRepository.md)

A recursive structure that represents a repository of plug-ins. Used by
IPlugInManager to collate an index.

### Enums

[Framework](Phoenix.PlugIns.Framework.md)

Defines the frameworks that plug-ins can use
