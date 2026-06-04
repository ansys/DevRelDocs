# Interface IScriptLanguage

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

Defines a scripting language to use whose syntax can be
highlighted in the AvalonEdit text editor.

```csharp
public interface IScriptLanguage

```

## Properties

[DefaultText](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.DefaultText.md#Phoenix_ComponentPlugInSDK_Models_IScriptLanguage_DefaultText)

The default text shown when the language is selected and the user has not changed the script.

[DisplayName](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.DisplayName.md#Phoenix_ComponentPlugInSDK_Models_IScriptLanguage_DisplayName)

The name to display in the UI.

[FilenameExtension](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.FilenameExtension.md#Phoenix_ComponentPlugInSDK_Models_IScriptLanguage_FilenameExtension)

The filename extension to use in the PACZ, including the dot.

[NamedVariableDisplayName](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.NamedVariableDisplayName.md#Phoenix_ComponentPlugInSDK_Models_IScriptLanguage_NamedVariableDisplayName)

The display name to use for the named variable field.

[NamedVariableToken](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.NamedVariableToken.md#Phoenix_ComponentPlugInSDK_Models_IScriptLanguage_NamedVariableToken)

The label to use for the named variable in the 'Variable Text Editor'
Must be alphanumeric with no spaces or special characters.

[SyntaxName](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.SyntaxName.md#Phoenix_ComponentPlugInSDK_Models_IScriptLanguage_SyntaxName)

The name of the scripting language as needed to be loaded by the AvalonEdit text editor.

[UsesNamedVariable](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.UsesNamedVariable.md#Phoenix_ComponentPlugInSDK_Models_IScriptLanguage_UsesNamedVariable)

If the Script uses 'Named Variables' These are user specified names that differ from the
name of the CAM variable.

## Methods

[GetHighlightNames(IEnumerable<string>)](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.GetHighlightNames.md#Phoenix_ComponentPlugInSDK_Models_IScriptLanguage_GetHighlightNames_System_Collections_Generic_IEnumerable_System_String__)

Gets a list of names to highlight from an enumerable of variables.
Note: the highlighter uses Regex matching.
Each item is matched as a regex word and special characters need to be escaped.
To highlight "obj.value", include "obj.value" in the returned list.

[GetScriptFilename()](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.GetScriptFilename.md#Phoenix_ComponentPlugInSDK_Models_IScriptLanguage_GetScriptFilename)

Gets the filename to use for the script within a pacz.
