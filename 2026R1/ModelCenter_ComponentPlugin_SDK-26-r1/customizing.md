# Customizing The Plug-In

## Creating the UI

### Name the plug-in.

Set `BuilderUI.ComponentName`. 

### `LoadFromPaczAsync`

Called when the plug-in is first created or loaded. State should be loaded from the passed-in `IExtractedPacz`. Most of the state is likely stored in the `Config.Properties` and the `Config.InstanceFiles`. Variables will be saved and loaded as part of the `viewModel`; it may not be necessary to load them here.

Note that the Model object (type `VariableBasedBuilderModel`) is directly accessible in this function's scope and can be used to create input/output variables. The following example shows inputs and outputs being created if none exist when the `LoadFromPaczAsync(...)` function is called:

```java
protected override async Task LoadFromPaczAsync(IExtractedPacz extractedPacz)
{
    if (Model.InputVariables.Count == 0)
    {
        // Create the initial set of variables for the view
        Model.MoveInputVariablesFrom(_createInputs());
        Model.MoveOutputVariablesFrom(_createOutputs());
    }

    await Task.CompletedTask;
}

private IEnumerable<IRuntimeVariable> _createInputs()
{
    RuntimeVariable x1 = new RuntimeVariable("x1", VariableType.Real,  new RealValue(0.5));
    RuntimeVariable x2 = new RuntimeVariable("x2", VariableType.Real, new RealValue(1.75));

    IEnumerable<IRuntimeVariable> inputs = new     List<IRuntimeVariable>() { x1, x2 };
    return inputs;
}

private IEnumerable<IRuntimeVariable> _createOutputs()
{
    RuntimeVariable y = new RuntimeVariable("y", VariableType.Real, new RealValue(0.01));

    IEnumerable<IRuntimeVariable> outputs = new     List<IRuntimeVariable>() { y };
    return outputs;
}
```

### GetFileLoadProperties

If instances of the plug-in will use an existing file, usually from another application, as part of the setup or run evaluation, override `GetFileLoadProperties` to enable the built-in file load dialog. Create a `FileLoadProperties` object with an action that will be called when the user selects a new file and a file filter for the open dialog to use. The file will likely need to be copied to the `Host.ExtractedPacz.ExtractionFolder` and added to the `Config.InstanceFiles`.

An example of this would be choosing a CAD file for a CAD plug-in. The builder may then interrogate this file in the `FileLoadProperties` Action to determine which inputs and outputs to add to the plug-in.

### SelectVariables

In some plug-ins, users will create all the variables manually in the variable tree, but usually a better option is for the plug-in to assist with variable creation. This can be done in the `Action` called when the build in file dialog is used to select a file or from a menu button press.

This can be done entirely without user input by adding the variables into the `viewModel.Variable` List or the `SelectVariables` form can be used to allow some customization of the available variables.

To use the `SelectVariables` form, you must pass lists of available inputs and outputs. Call the `SelectVariables` method of the `AbstractBuilderUI`, and it will provide a form with the variables to allow the user to filter and select the variables they wish to include.

### GetTreeProperties

Allows customization of the variable tree.

- `componentName`: Name to display at the root of the `VariableTree`.
- `canAddRemove`: If the UI controls can be used to add and remove variables.<br>If variables are created programmatically or using `SelectVariables`, this can allow user from creating additional variables or editing the properties of the programmatically created ones.
- `hasNamedVariables`: If the variables use a named variable property.<br>`NamedVariables` allow variables to have a mapping to another name that can be used by the plug-in. An example of this could be that a plug-in that uses Excel could use a named variable to provide a mapping to a range. The variable's name in the plug-in may be *cost* but could map to a range in Excel. The plug-in could use the range when communicating with Excel, while the variable is displayed as "Cost".
- `namedVariableDisplayName`: The display name of named variables.<br>This defines the label to use for the `namedVariable` field. In the example using Excel, this might be "Range".
- `namedVariableToken`: The token to use for named variables in the Text Based Variable Editor.<br>This is like the `namedVariableDisplayName` but is used in sterilization (by the text based variable editor) and must be alphanumeric characters.

### SetupView

This method is called after the form is created and allows customization. This is typically done by adding menu items to the main `Menu`. By default, `VariableBasedPlugIns` will have an **Apply** button that saves the plug-in instance. Additional menu items can be added as either buttons or containers of subItems.

Use the `AddMenuItem` method of the `AbstractBuilderUI` base class to add items and provide an event handler as the action to perform on click. The `VariableBasedBuilderViewModel` can be made available to use in the event handler if desired.

Common usages of additional menu items are to show an options dialog or a help page for the plug-in. The following code sample shows a simple Windows Form made accessible through a custom options menu item. No further code is required to make a `Form1` object accessible to the user.

```java
public class BasicPaczPluginBuilderUI : AbstractVariableBasedBuilderUI<BasicPaczPluginRunner>
{
…

    protected override void SetupView(IExtractedPacz pacz, VariableBasedBuilderViewModel viewModel, Menu mainMenu)
    {
        AddMenuItem(parent: mainMenu, header: "Options", imageType: ImageType.OPTIONS, 	hasDownArrow: false, eventHandler: (s, e) => _editOptions(viewModel));
    }

    private void _editOptions(VariableBasedBuilderViewModel viewModel)
    {
        Form1 form1 = new Form1();
        Form1.Show();
    }

    …
}

public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
    }
}
```

### SaveToPaczAsync

This is called to allow the plug-in to save any necessary information into the PACZ. Most settings will be stored as name-value pairs in the `pacz.Config.Properties` dictionary. Instance files may also need to be updated. Variables are part of the `ViewModel` and will be saved and loaded by the `ViewModel`; typically, there is no need to do anything with the variables in `SaveToPaczAsync`.

## Creating the Runner

### ConstructAsync

Will always be called first allowing initialization of the runner. Most plug-ins will want to capture the `IHarnessRunnerHost` that is passed in to use later. If execution relies on resource intensive or slow-to-load applications, it may be advisable to delay loading the application until the first run.

### RunAsync

Called to perform a run evaluation. Input variables are passed in with a value and a validity. Plug-Ins that do not support invalid inputs can use `SafeValue` to ensure that all input values are valid. After evaluation, the outputs dictionary should be updated with new a new `VariableState` for each output.