# Namespace Phoenix.ComponentPlugInSDK.Views

### Classes

[AbstractPlugInWindow](Phoenix.ComponentPlugInSDK.Views.AbstractPlugInWindow.md)

This class serves as a base class for CAM Windows.
It expects derived class to have a VariableTreeControl for editing variables,
and a Button for opening the VariableEditorView.
This class handles saving on window close.

[ScriptEditorView.ScriptChangedEventArgs](Phoenix.ComponentPlugInSDK.Views.ScriptEditorView.ScriptChangedEventArgs.md)

Event arguments for the ScriptChanged event.

[ScriptEditorView.ScriptChangedEventArgs](Phoenix.ComponentPlugInSDK.Views.ScriptEditorView.ScriptChangedEventArgs.md)

Event arguments for the ScriptChanged event.

[ScriptEditorView](Phoenix.ComponentPlugInSDK.Views.ScriptEditorView.md)

Interaction logic for ScriptEditorView.xaml

[VariableBasedBuilderView](Phoenix.ComponentPlugInSDK.Views.VariableBasedBuilderView.md)

Interaction logic for VariablePlugInView.xaml

[VariableEditorView](Phoenix.ComponentPlugInSDK.Views.VariableEditorView.md)

Interaction logic for VariableEditorView.xaml

### Interfaces

[ISaveableWindow](Phoenix.ComponentPlugInSDK.Views.ISaveableWindow.md)

Windows that implement this interface allow us to programatically
ask for the window to notify the user to save
