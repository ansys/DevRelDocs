# Class AbstractScriptLanguage

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

Abstract implementation of IScriptLanguage that provides some default behavior.

```csharp
public abstract class AbstractScriptLanguage : IScriptLanguage

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[AbstractScriptLanguage](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.md)

#### Implements

[IScriptLanguage](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

[DefaultText](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.DefaultText.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_DefaultText)

The default text shown when the language is selected and the user has not changed the script.

[DisplayName](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.DisplayName.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_DisplayName)

The name to display in the UI.

[FilenameBase](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.FilenameBase.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_FilenameBase)

The base file name of the script file in the PACZ

[FilenameExtension](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.FilenameExtension.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_FilenameExtension)

The filename extension to use in the PACZ, including the dot.

[NamedVariableDisplayName](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.NamedVariableDisplayName.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_NamedVariableDisplayName)

The display name to use for the named variable field.

[NamedVariableToken](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.NamedVariableToken.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_NamedVariableToken)

The label to use for the named variable in the 'Variable Text Editor'
Must be alphanumeric with no spaces or special characters.

[SyntaxName](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.SyntaxName.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_SyntaxName)

The name of the scripting language as needed to be loaded by the AvalonEdit text editor.

[UsesNamedVariable](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.UsesNamedVariable.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_UsesNamedVariable)

If the Script uses 'Named Variables' These are user specified names that differ from the
name of the CAM variable.

## Methods

[GetHighlightNames(IEnumerable<string>)](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.GetHighlightNames.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_GetHighlightNames_System_Collections_Generic_IEnumerable_System_String__)

Provides a default behavior of only including variables not grouped.

[GetScriptFilename()](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.GetScriptFilename.md#Phoenix_ComponentPlugInSDK_Models_AbstractScriptLanguage_GetScriptFilename)

Gets the filename to use for the script within a pacz.
