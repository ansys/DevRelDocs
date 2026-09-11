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
    /// <summary>
    /// Builder UI for the BasicPaczPlugin Component.
    /// </summary>
    [Guid(BasicPaczPluginRunner.GUID)]
    [PlugInTypes(typeof(IHarnessBuilderUIBase))]
    [PlugInDisplayName("BasicPaczPlugin Component")]
    //[PlugInIcon("Images/placeholder.ico")]

    public class BasicPaczPluginBuilderUI : AbstractVariableBasedBuilderUI<BasicPaczPluginRunner>
    {

        /// <inheritdoc/>
        protected override string ComponentName => "BasicPaczPlugin Component";


        //TODO: Customize default variableTree Properties if needed.  Can be deleted otherwise.
        ///// <inheritdoc/>
        protected override VariableTreeProperties GetTreeProperties()
        {
            return new VariableTreeProperties(componentName: ComponentName, canAddRemove: false, hasNamedVariables: false);
        }

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="logger">The logger to use.</param>
        public BasicPaczPluginBuilderUI()
        {
            
        }

        /// <inheritdoc/>

        protected override void SetupView(IExtractedPacz pacz, VariableBasedBuilderViewModel viewModel, Menu mainMenu)
        {
            //TODO: add menuItems to the mainMenu, and define their event handlers
            // This method may be deleted if no setup is needed.
            AddMenuItem(parent: mainMenu, header: "Options", imageType: ImageType.OPTIONS, hasDownArrow: false, eventHandler: (s, e) => _editOptions(viewModel));

            //viewModel.MoveInputVariablesFrom(_createInputs());
            viewModel.MoveOutputVariablesFrom(_createOutputs());

        }

        private void _editOptions(VariableBasedBuilderViewModel viewModel)
        {
            viewModel.MoveInputVariablesFrom(_createInputs());
            Form1 form1 = new Form1();
        }

        /// <inheritdoc/>
        protected override async Task LoadFromPaczAsync(IExtractedPacz extractedPacz)
        {
            //TODO: load options data from the extractedPacz.Config.Properties
            if (Model.InputVariables.Count == 0)
            {
                //Ensure parallel runs work safely by creating new folders for each
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

        /// <inheritdoc/>
        protected async override Task SaveToPaczAsync(IExtractedPacz extractedPacz)
        {
            //TODO: save options data to the pacz.Config.Properties
            //Model.MoveInputVariablesFrom(_createInputs());
            //Model.MoveOutputVariablesFrom(_createOutputs());

            await Task.CompletedTask;
        }

        /*
        /// <inheritdoc/>
        protected override FileLoadProperties GetFileLoadProperties()
        {
            //TODO: Fill in the appropriate file type details here
            return new FileLoadProperties(_openFile, "MyFileType(*.myFileType)|*.myFileType");
        }
        */

        /// <summary>
        /// Called after a user picks a file to allow you to load it.
        /// </summary>
        /// <param name="filename">The full path to the file to load. Model.FilePath and 
        /// model.FilePath will also return this value.</param>
        /// <param name="model">The view model's current state</param>
        protected async Task _openFile(string filename, VariableBasedBuilderViewModel model)
        {
            //TODO: Load the file
            await Task.CompletedTask;
        } 


    }
}
