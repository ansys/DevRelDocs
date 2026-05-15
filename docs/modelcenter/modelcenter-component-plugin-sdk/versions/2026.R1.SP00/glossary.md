# Glossary

This glossary defines key terms and concepts used throughout the PACZ component plug-in SDK documentation.

There is also a useful [public list of abbreviations and terms used in the PyAnsys community](https://ansys.github.io/abbreviations/).

## Component plug-in terms

### Analysis

A synonym for "component."

### Builder UI

The user interface portion of a component plug-in. It is responsible for allowing users to configure and edit a PACZ file within the host's graphical user interface.

### Component

A workflow element that has inputs, performs some computation or external tool execution, and produces outputs. Often used interchangeably with "analysis" or "integration."

### Component plug-in

A software extension that implements a Runner and optionally a Builder UI. It enables integration of external tools and custom computations into Ansys workflows.

### Driver

A workflow element that controls or orchestrates other sub-workflows. Also called an algorithm. Drivers are used for optimization, design of experiments, and other computational steering tasks. Creating drivers is beyond the scope of this SDK.

### PACZ

Parametric analysis component zip (PACZ) is the standard file format for a packaged component. A PACZ may be stored compressed as a ZIP file, or uncompressed as a set of files in a directory. The PACZ contains metadata (`component.pacj`) that describes the component instance, enabling it to be managed in an "app store" and enables some operations without needing to instantiate the plug-in.

### Runner

The non-UI portion of a component plug-in. It is responsible for batch execution - running the actual computation or external tool integration when a design point evaluation is requested.

### Workflow

An automated set of components, drivers, and control elements that together perform an engineering simulation or analysis. Workflows define the data flow and execution order of multiple analysis steps.

## File and configuration terms

### `component.pacj`

The metadata file contained within a PACZ that describes the component's inputs, outputs, and configuration.

### Extraction folder

The temporary directory where a PACZ file's contents are unpacked for execution. Instance files and other resources are accessible from this location during plug-in execution.

### Instance files

Files that are packaged within a PACZ and needed for component execution. These might include configuration files, template files, or data files specific to a particular component instance.

### `metadata.phxplugin`

A metadata file in the plug-in's output DLL folder that contains plug-in configuration, including icon paths and other properties.

## Programming and architecture terms

### `AbstractBuilderUI`

The base class for creating builder UI implementations. Provides common functionality for variable management, file loading, and UI customization.

### `AbstractVariableBasedBuilderUI`

A specialized base class that extends `AbstractBuilderUI` with built-in support for variable-based components, including a pre-built UI form for editing variables.

### `HarnessBuilderUIHost`

An object provided to the Builder UI that facilitates communication with the host, including logging, saving, and invoking the Runner.

### `HarnessRunnerHost`

An object provided to the Runner that facilitates communication with the host during execution.

### `IExtractedPacz`

An interface providing access to the extracted PACZ contents, including configuration properties and instance files.

### `IHarnessRunner`

The interface that all Runner classes must implement. Defines the contract for component execution.

### `IRuntimeVariable`

An interface representing a variable (input or output) in a component, including its name, type, and value.

### `VariableBasedBuilderViewModel`

A view model class that provides access to a component's input and output variables in the Builder UI context.

### `VariableState`

Represents the current state of a variable, including its value and validity.

### `VariableValueScope`

A dictionary-like interface for setting output variable values during component execution.

## Tool and environment terms

### NuGet

A package manager for .NET that is used to distribute the ComponentPlugInSDK libraries.

### `Phoenix.ComponentPlugInSDK`

The NuGet package containing the SDK libraries needed to build component plug-ins.

### `TestUI`

A non-production lightweight test application provided with the SDK for debugging plug-ins outside of the full ModelCenter environment.

### VSIX

Visual Studio Extension Installer format. The Component Plug-In Wizard is distributed as a VSIX file.

## Threading terms

For detailed information about threading in plug-in development, see the [Threading](threading.md) guide.

### Task asynchronous programming (TAP)

The [.NET pattern](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap) using `async` and `await` keywords for asynchronous operations. Plug-ins can safely use TAP with the SDK's synchronization context.

### Thread safety

The property of code that ensures correct operation when accessed from multiple threads simultaneously. The SDK provides thread safety guarantees for Runner and Builder UI contexts.

### UI thread

The dedicated thread on which the Builder UI runs. All UI operations must occur on this thread.

### Runner thread

The dedicated thread on which the Runner executes. All Runner method calls are marshaled to this thread by the SDK.
