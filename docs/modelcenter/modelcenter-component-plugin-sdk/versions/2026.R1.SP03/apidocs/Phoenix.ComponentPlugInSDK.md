# Namespace Phoenix.ComponentPlugInSDK

### Namespaces

[Phoenix.ComponentPlugInSDK.Images](Phoenix.ComponentPlugInSDK.Images.md)

[Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)

[Phoenix.ComponentPlugInSDK.Properties](Phoenix.ComponentPlugInSDK.Properties.md)

[Phoenix.ComponentPlugInSDK.ViewModels](Phoenix.ComponentPlugInSDK.ViewModels.md)

[Phoenix.ComponentPlugInSDK.Views](Phoenix.ComponentPlugInSDK.Views.md)

### Classes

[AbstractBuilderUI<RUNNER>](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.md)

This class serves as a common base class that implements IHarnessBuilderUI. It contains logic for managing the lifespan and events around the window
that implements the UI. It also contains some helper utilities around window management.

[AbstractModelBasedBuilderUI<RUNNER, MODEL>](Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI-2.md)

This abstract base class extends upon `Phoenix.ComponentPlugInSDK.AbstractBuilderUI`1` with the ability to load and save
from a model object. Typically used by plug-ins that want to use MVVM or similar pattern.

There are two ways that derived classes can interject code into the save/load process. The MODEL itself will get
a chance to save first. Then, the abstract function `Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.SaveToPaczAsync(Phoenix.PaczAPI.IExtractedPacz)` or `Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.LoadFromPaczAsync(Phoenix.PaczAPI.IExtractedPacz)`
will be called. The Model is typically used by classes such as `Phoenix.ComponentPlugInSDK.AbstractScriptBasedBuilderUI`2` and
`Phoenix.ComponentPlugInSDK.AbstractVariableBasedBuilderUI`2` to provide overarching capabilities.
`Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.SaveToPaczAsync(Phoenix.PaczAPI.IExtractedPacz)` and `Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.LoadFromPaczAsync(Phoenix.PaczAPI.IExtractedPacz)` are typically left abstract until
the actual implementation class as a quick way for them to add on additional save/load operations without needing to implement
their own Model.

[AbstractScriptBasedBuilderUI<RUNNER, MODEL>](Phoenix.ComponentPlugInSDK.AbstractScriptBasedBuilderUI-2.md)

This class provides a common script editor UI for a script based HarnessBuilderUI component.

[AbstractVariableBasedBuilderUI<RUNNER, MODEL>](Phoenix.ComponentPlugInSDK.AbstractVariableBasedBuilderUI-2.md)

This class provides a common UI for a variable based HarnessBuilderUI component.

[AbstractVariableBasedBuilderUI<RUNNER>](Phoenix.ComponentPlugInSDK.AbstractVariableBasedBuilderUI-1.md)

This class provides a common UI for a variable based HarnessBuilderUI component.

[AbstractVariableProvider](Phoenix.ComponentPlugInSDK.AbstractVariableProvider.md)

An abstract class that provides some default values for `Phoenix.ModelCenter.Common.CommonSelectVariablesForm`

[PHXLoggerToILogger](Phoenix.ComponentPlugInSDK.PHXLoggerToILogger.md)

Wraps an ILogger with the IPHXLogger interface.

### Delegates

[AbstractBuilderUI<RUNNER>.RoutedEventHandlerAsync](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.RoutedEventHandlerAsync.md)

A version of `System.Windows.RoutedEventHandler` that is asynchronous and returns a Task.

[AbstractBuilderUI<RUNNER>.RoutedEventHandlerAsync](Phoenix.ComponentPlugInSDK.AbstractBuilderUI-1.RoutedEventHandlerAsync.md)

A version of `System.Windows.RoutedEventHandler` that is asynchronous and returns a Task.
