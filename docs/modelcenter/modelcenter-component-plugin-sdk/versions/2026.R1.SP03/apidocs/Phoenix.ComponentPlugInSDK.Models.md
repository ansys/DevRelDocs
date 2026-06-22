# Namespace Phoenix.ComponentPlugInSDK.Models

### Classes

[AbstractBuilderModel](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.md)

Abstract base class for all model objects from MVVM for Builder UI implementations. Provides common
functionality for handling a set of variables and conversions to/from PHXVariable.

[AbstractScriptLanguage](Phoenix.ComponentPlugInSDK.Models.AbstractScriptLanguage.md)

Abstract implementation of IScriptLanguage that provides some default behavior.

[FileLoadProperties](Phoenix.ComponentPlugInSDK.Models.FileLoadProperties.md)

This class contains Properties that define the file load behavior used by VariablesBasedBuilders.

[ScriptModel<LANGUAGE>](Phoenix.ComponentPlugInSDK.Models.ScriptModel-1.md)

Concrete implementation of the model from the MVVM pattern for a script
based Builder UI.

[ScriptModel](Phoenix.ComponentPlugInSDK.Models.ScriptModel.md)

Model from the MVVM pattern for a script based Builder UI. Derived classes
must provide a `Phoenix.ComponentPlugInSDK.Models.ScriptModel.ScriptLanguage`. Most implementations should use
`Phoenix.ComponentPlugInSDK.Models.ScriptModel`1`.

[VariableEditorModel.SyntaxError](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.SyntaxError.md)

Exception type to throw when there is a syntax error while parsing a variable text string.

[VariableEditorModel.SyntaxError](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.SyntaxError.md)

Exception type to throw when there is a syntax error while parsing a variable text string.

[VariableBasedBuilderModel](Phoenix.ComponentPlugInSDK.Models.VariableBasedBuilderModel.md)

Model from the MVVM pattern for a BuilderUI that is based upon an external tool
that provides a list of available variables that the user can downselect.

[VariableEditorModel](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.md)

Model that represents a list of `Phoenix.ModelCenter.Common.PHXVariable`.
Has methods for creating and parsing a VariableEditor string.

[VariableTreeProperties](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.md)

This class contains Properties that define the options for the VariableTree and variable editing options.

### Interfaces

[IBuilderUIModel](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.md)

This interface defines a model object, typically from a MVVM pattern, that can be saved and loaded from an `Phoenix.PaczAPI.IExtractedPacz`

[IScriptLanguage](Phoenix.ComponentPlugInSDK.Models.IScriptLanguage.md)

Defines a scripting language to use whose syntax can be
highlighted in the AvalonEdit text editor.
