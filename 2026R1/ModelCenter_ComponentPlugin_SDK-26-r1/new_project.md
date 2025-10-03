# New Project Overview (.NET)

## Project Files

### `[Name].cs` implements `IHarnessRunner`

- This is the class that is used to execute runs of the plug-in.
- There should be no UI associated with this class.
- There are 2 Public Methods that will be called:
    - `ConstructAsync`
        - Always called first.
        - Provides the `HarnessRunnerHost`
        - Initial setup and loading from the config should be done here.
    - `RunAsync`
        - Used to execute a run.
        - Provides inputs to evaluate.
        - Update output dictionary with execution results.

### `[Name]BuilderUI.cs` extends `AbstractVariableBasedBuilderUI<[Name]Runner>`

- This is the class that holds the UI of the plug-in.
- It builds on top of a pre-built UI form that allows for editing variables.
- The `ComponentName` property should be overridden to provide a display name for the plug-in.
- There are 5 base class methods that can be overridden:
    - `LoadFromPaczAsync`: Used to load the plug-in instance.
    - `GetTreeProperties`: Used to customize the properties tree.
    - `GetFileLoadProperties`: Configures the built-in file open feature.
    - `SetupView`: Used to add `menuItems` to the `mainMenu`.
    - `SaveToPaczAsync`: Used to save the plug-in instance.

## `AbstractBuilderUI` Base Class

The `AbstractBuilderUI` base class contains some properties and methods that are useful:

### Properties:

- Host (`HarnessBuilderUIHost`)
    - Properties
        - `ExtractedPacz`: The pacz object and config.
        - `Logger`: Provides logging for the plug-in.
    - Methods
        - `CallRunnerAsync`
        - `TestRunAsync`
        - `SaveAsync`

### Methods:

- `AddMenuItem` and `AddAsyncMenuItem` (requires reference to `PresentationCore`)
- `SelectVariables`: Opens the `CommonSelectVariables` Form.
- `SetPaczIcon`

## `VariableBasedBuilderViewModel`

This class provides access to the variables in the plug-in. It is provided as an argument to the method called after a new file is opened and to the `SetupView` method. Since this is provided to the `SetupView` method, it can also be made available to the functions that are called when custom `menuItems` are clicked.
