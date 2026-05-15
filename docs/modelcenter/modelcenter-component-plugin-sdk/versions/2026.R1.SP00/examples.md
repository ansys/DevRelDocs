# Examples

This page presents example plug-ins that demonstrate common patterns for building PACZ component plug-ins.

## Basic plug-in (BasicPaczPlugin)

A minimal plug-in that demonstrates the core plug-in structure: a Runner that multiplies two inputs and a Builder UI with an options menu and variable creation.

### Runner — `BasicPaczPlugin.cs`

```csharp
using Phoenix.ComponentAPI;
using Phoenix.ComponentPlugInSDK.Models;
using Phoenix.DotNetUtils;
using Phoenix.ModelCenter.Common;
using Phoenix.ModelCenter.Common.Types;
using Phoenix.Pacz;
using Phoenix.PaczAPI;
using Phoenix.PlugIns;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;

namespace BasicPaczPlugin
{
    [Guid(GUID)]
    [PlugInTypes(typeof(IHarnessRunner))]
    [PlugInDisplayName("BasicPaczPlugin Component")]
    //[PlugInIcon("Images/placeholder.ico")]

    public class BasicPaczPluginRunner : AbstractDisposableAsync, IHarnessRunner
    {
        public const string GUID = "47d35170-688f-4a26-b17a-760f6709dae3";

        private IHarnessRunnerHost _host;

        VariableBasedBuilderModel _model;

        public async Task ConstructAsync(IHarnessRunnerHost host)
        {
            _host = host;

            _model = new VariableBasedBuilderModel();
            await _model.FromPaczAsync(_host.ExtractedPacz);
        }

        public async Task RunAsync(IReadOnlyDictionary<string, VariableState> inputs, VariableValueScope outputs, CancellationToken cancellation)
        {
            double x1 = (RealValue)inputs["a1.a2.x1"].SafeValue;
            double x2 = (RealValue)inputs["x2"].SafeValue;
            outputs["y"] = new VariableState(new RealValue(x1*x2));

            await Task.CompletedTask;
        }

        protected override async Task DisposeAsync(bool disposing)
        {
            if (disposing)
            {
                _model.Dispose();
            }
            await Task.CompletedTask;
        }
    }
}
```

### Builder UI — `BasicPaczPluginBuilderUI.cs`

```csharp
using Microsoft.Extensions.Logging;
using Phoenix.ComponentBuilderAPI;
using Phoenix.ComponentPlugInSDK;
using Phoenix.ComponentPlugInSDK.Images;
using Phoenix.ComponentPlugInSDK.Models;
using Phoenix.ComponentPlugInSDK.ViewModels;
using Phoenix.ModelCenter.Common.Types;
using Phoenix.Pacz;
using Phoenix.PaczAPI;
using Phoenix.PlugIns;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace BasicPaczPlugin
{
    [Guid(BasicPaczPluginRunner.GUID)]
    [PlugInTypes(typeof(IHarnessBuilderUIBase))]
    [PlugInDisplayName("BasicPaczPlugin Component")]
    //[PlugInIcon("Images/placeholder.ico")]

    public class BasicPaczPluginBuilderUI : AbstractVariableBasedBuilderUI<BasicPaczPluginRunner>
    {
        protected override string ComponentName => "BasicPaczPlugin Component";

        protected override VariableTreeProperties GetTreeProperties()
        {
            return new VariableTreeProperties(componentName: ComponentName, canAddRemove: false, hasNamedVariables: false);
        }

        public BasicPaczPluginBuilderUI()
        {
        }

        protected override void SetupView(IExtractedPacz pacz, VariableBasedBuilderViewModel viewModel, Menu mainMenu)
        {
            AddMenuItem(parent: mainMenu, header: "Options", imageType: ImageType.OPTIONS, hasDownArrow: false, eventHandler: (s, e) => _editOptions(viewModel));
            viewModel.MoveOutputVariablesFrom(_createOutputs());
        }

        private void _editOptions(VariableBasedBuilderViewModel viewModel)
        {
            viewModel.MoveInputVariablesFrom(_createInputs());
            Form1 form1 = new Form1();
        }

        protected override async Task LoadFromPaczAsync(IExtractedPacz extractedPacz)
        {
            if (Model.InputVariables.Count == 0)
            {
                extractedPacz.Config.RunFolderPreference = RunFolderPreference.PerRun;
            }
            await Task.CompletedTask;
        }

        private IEnumerable<IRuntimeVariable> _createOutputs()
        {
            RuntimeVariable y = new RuntimeVariable("y", VariableType.Real, new RealValue(0.01));
            IEnumerable<IRuntimeVariable> outputs = new List<IRuntimeVariable>() { y };
            return outputs;
        }

        private IEnumerable<IRuntimeVariable> _createInputs()
        {
            RuntimeVariable x1 = new RuntimeVariable("a1.a2.x1", VariableType.Real, new RealValue(0.5));
            RuntimeVariable x2 = new RuntimeVariable("x2", VariableType.Real, new RealValue(1.75));
            RuntimeVariable x3 = new RuntimeVariable("x3", VariableType.Real, new RealValue(2.75), null, null, "Some Description");
            IEnumerable<IRuntimeVariable> inputs = new List<IRuntimeVariable>() { x1, x2 };
            return inputs;
        }

        private void _removeOutput(VariableBasedBuilderViewModel viewModel, string outputToRemove)
        {
            IEnumerable<IRuntimeVariable> oldOutputs = viewModel.OutputVariables;
            List<IRuntimeVariable> listToPopulate = new List<IRuntimeVariable>() { };
            foreach (var item in oldOutputs)
            {
                if (item.Name != outputToRemove)
                {
                    listToPopulate.Add(item);
                }
            }
            IEnumerable<IRuntimeVariable> newOutputs = listToPopulate;
            viewModel.MoveOutputVariablesFrom(newOutputs);
        }

        protected async override Task SaveToPaczAsync(IExtractedPacz extractedPacz)
        {
            await Task.CompletedTask;
        }

        protected async Task _openFile(string filename, VariableBasedBuilderViewModel model)
        {
            await Task.CompletedTask;
        }
    }
}
```

### Key patterns demonstrated

- **Runner structure**: `ConstructAsync` for initialization, `RunAsync` for execution, `DisposeAsync` for cleanup
- **Nested variables**: Using `"a1.a2.x1"` dot-separated naming to create ModelCenter assemblies automatically
- **Variable descriptions**: Passing a description string to the `RuntimeVariable` constructor (see `x3`)
- **Options menu**: Adding a custom menu item via `AddMenuItem` that triggers a Windows Form
- **Per-run folders**: Setting `RunFolderPreference.PerRun` for safe parallel execution
- **Removing variables**: Helper method `_removeOutput` to filter and replace the output variable list

---

## FMU v2 import plug-in (FMUv2Import)

An advanced plug-in that imports and runs [Functional Mock-up Units (FMUs)](https://fmi-standard.org/) conforming to the FMI 2.0 Co-Simulation standard. It demonstrates file-based plug-in setup and dynamic variable creation from an external model.

### Runner — `FMUv2Import.cs`

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;
using lib;
using Phoenix.ComponentAPI;
using Phoenix.ComponentPlugInSDK.Models;
using Phoenix.DotNetUtils;
using Phoenix.ModelCenter.Common.Types;
using Phoenix.PlugIns;

namespace FMUv2Import
{
    [Guid(GUID)]
    [PlugInTypes(typeof(IHarnessRunner))]
    [PlugInDisplayName("FMUv2Import Component")]
    public class FMUv2ImportRunner : AbstractDisposableAsync, IHarnessRunner
    {
        public const string GUID = "58fb8fe4-0a5e-48d5-af1c-181912d650a6";

        private IHarnessRunnerHost _host;

        VariableBasedBuilderModel _model;

        public async Task ConstructAsync(IHarnessRunnerHost host)
        {
            _host = host;

            _model = new VariableBasedBuilderModel();
            await _model.FromPaczAsync(_host.ExtractedPacz);
        }

        public async Task RunAsync(IReadOnlyDictionary<string, VariableState> inputs, VariableValueScope outputs, CancellationToken cancellation)
        {
            using var fmuModel = FMUModel.Load(_model.FilePath);
            using var fmuInstance = Tools.CreateInstance(fmuModel, fmuModel.Name);

            double startTime = 0.0;
            double stepTime = 1.0;
            double endTime = 1.0;

            foreach (string key in inputs.Keys.ToList())
            {
                if (key.Contains("Inputs"))
                {
                    double x = (RealValue)inputs[key].SafeValue;
                    fmuInstance.WriteReal((fmuModel.Variables[key.Remove(0, 7)], x));
                }
                else
                {
                    switch (key)
                    {
                        case "startTime":
                            startTime = (RealValue)inputs[key].SafeValue;
                            break;
                        case "stepTime":
                            stepTime = (RealValue)inputs[key].SafeValue;
                            break;
                        case "endTime":
                            endTime = (RealValue)inputs[key].SafeValue;
                            break;
                    }
                }
            }

            bool condition = !((startTime == stepTime) && (startTime == endTime) && (stepTime == 0.0));
            if (condition){
                double currentTime = startTime;
                fmuInstance.StartTime(startTime);
                while (currentTime <= endTime)
                {
                    foreach (string key in outputs.Keys.ToList())
                    {
                        var variables = fmuInstance.ReadReal(fmuModel.Variables[key.Remove(0, 8)]);
                        outputs[key] = new VariableState(new RealValue(variables.First()));
                    }
                    fmuInstance.AdvanceTime(stepTime);
                    currentTime += stepTime;
                }
            }

            await Task.CompletedTask;
        }

        protected override async Task DisposeAsync(bool disposing)
        {
            if (disposing)
            {
                _model.Dispose();
            }
            await Task.CompletedTask;
        }
    }
}
```

### Builder UI — `FMUv2ImportBuilderUI.cs`

```csharp
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Windows.Controls;
using lib;
using Microsoft.Extensions.Logging;
using Phoenix.ComponentBuilderAPI;
using Phoenix.ComponentPlugInSDK;
using Phoenix.ComponentPlugInSDK.Models;
using Phoenix.ComponentPlugInSDK.ViewModels;
using Phoenix.ModelCenter.Common.Types;
using Phoenix.Pacz;
using Phoenix.PaczAPI;
using Phoenix.PlugIns;

namespace FMUv2Import
{
    [Guid(FMUv2ImportRunner.GUID)]
    [PlugInTypes(typeof(IHarnessBuilderUIBase))]
    [PlugInDisplayName("FMUv2Import Component")]

    public class FMUv2ImportBuilderUI : AbstractVariableBasedBuilderUI<FMUv2ImportRunner>
    {
        private IReadOnlyDictionary<string, IVariable> allVariables;

        protected override string ComponentName => "FMUv2Import Component";

        public FMUv2ImportBuilderUI()
        {
        }

        protected override async Task LoadFromPaczAsync(IExtractedPacz extractedPacz)
        {
            await Task.CompletedTask;
        }

        protected async override Task SaveToPaczAsync(IExtractedPacz extractedPacz)
        {
            await Task.CompletedTask;
        }

        protected override FileLoadProperties GetFileLoadProperties()
        {
            return new FileLoadProperties(_openFile, "FMU File(*.fmu)|*.fmu");
        }

        protected async Task _openFile(string filename, VariableBasedBuilderViewModel model)
        {
            try
            {
                using var fmuModel = FMUModel.Load(filename);
                if (fmuModel.fmiVersion == "2.0")
                {
                    if(fmuModel.fmiType == "CoSimulation")
                    {
                        _createInputAndOutputs(fmuModel, model);
                    }
                    else
                    {
                        throw new NotImplementedException("\nThe FMU file is not compatible with plug-in.\nMake sure it is a CoSimulation FMU file.");
                    }
                }
                else {
                    throw new NotImplementedException("\nFMI Version " + fmuModel.fmiVersion + " does not support to this plugin.");
                }
            }
            catch (Exception e)
            {
                throw new NotImplementedException($"{e.Message}");
            }

            await Task.CompletedTask;
        }

        private void _createInputAndOutputs(IModel fmuModel, VariableBasedBuilderViewModel model)
        {
            var inputList = new List<IRuntimeVariable>();
            var outputList = new List<IRuntimeVariable>();
            allVariables = fmuModel.Variables;

            foreach (var item in allVariables)
            {
                if (item.Value.Type == "input")
                {
                    RuntimeVariable x = new RuntimeVariable("Inputs." + item.Value.Name, VariableType.Real, new RealValue(0.0));
                    inputList.Add(x);
                }
                else if (item.Value.Type == "output")
                {
                    RuntimeVariable x = new RuntimeVariable("Outputs." + item.Value.Name, VariableType.Real, new RealValue(0.0));
                    outputList.Add(x);
                }
            }

            RuntimeVariable fmuVersion = new RuntimeVariable("ModelDescription.FMUVersion", VariableType.String, new StringValue(fmuModel.fmiVersion));
            RuntimeVariable fmuType = new RuntimeVariable("ModelDescription.FMUType", VariableType.String, new StringValue(fmuModel.fmiType));
            inputList.Add(fmuVersion);
            inputList.Add(fmuType);

            RuntimeVariable startTime = new RuntimeVariable("startTime", VariableType.Real, new RealValue(0.0));
            RuntimeVariable stepTime = new RuntimeVariable("stepTime", VariableType.Real, new RealValue(0.0));
            RuntimeVariable endTime = new RuntimeVariable("endTime", VariableType.Real, new RealValue(0.0));
            inputList.Add(startTime);
            inputList.Add(stepTime);
            inputList.Add(endTime);

            IEnumerable<IRuntimeVariable> inputs = inputList;
            IEnumerable<IRuntimeVariable> outputs = outputList;

            model.MoveInputVariablesFrom(inputs);
            model.MoveOutputVariablesFrom(outputs);
        }
    }
}
```

### Key patterns demonstrated

- **File-based setup**: Using `GetFileLoadProperties` to let users select an `.fmu` file, then dynamically creating variables from the FMU model description
- **Dynamic variable creation**: Iterating through FMU model variables and mapping them to PACZ input/output variables with `"Inputs."` and `"Outputs."` prefixes
- **Model metadata as variables**: Exposing `FMUVersion` and `FMUType` as read-only string input variables under `ModelDescription`
- **Time-stepping simulation**: Running a co-simulation loop with `startTime`, `stepTime`, and `endTime` controls
- **External library integration**: Using the `lib` namespace to load, instantiate, and interact with FMU models via native interop
- **Input validation**: Checking `fmiVersion` and `fmiType` before proceeding, with descriptive error messages
