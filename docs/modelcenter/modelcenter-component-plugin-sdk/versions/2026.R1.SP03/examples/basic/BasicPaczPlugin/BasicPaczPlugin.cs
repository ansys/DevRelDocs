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
    /// <summary>
    /// Runner for the BasicPaczPlugin Component.
    /// </summary>
    [Guid(GUID)]
    [PlugInTypes(typeof(IHarnessRunner))]
    [PlugInDisplayName("BasicPaczPlugin Component")]
    //[PlugInIcon("Images/placeholder.ico")]

    public class BasicPaczPluginRunner : AbstractDisposableAsync, IHarnessRunner
    {
        /// <summary>
        /// The GUID for this component plug-in
        /// </summary>
        public const string GUID = "47d35170-688f-4a26-b17a-760f6709dae3";

        /// <summary>
        /// Host object that has the context for the harness runner's environment
        /// </summary>
        private IHarnessRunnerHost _host;

        /// <summary>
        /// The state of the loaded pacz
        /// </summary>

        VariableBasedBuilderModel _model;

        /// <summary>
        /// Will always be called first to allow the runner to instantiate itself.
        /// </summary>
        /// <param name="host">The harness will be provided with a host that gives it context of its environment.</param>
        public async Task ConstructAsync(IHarnessRunnerHost host)
        {
            _host = host;

            _model = new VariableBasedBuilderModel();
            await _model.FromPaczAsync(_host.ExtractedPacz);

            //TODO: _model.FilePathAbsolute will now contain the full path to the file the use chose 
            // when building the pacz, or null if the pacz is uninitialized.
        }

        /// <summary>
        /// Tells this harness to run.
        /// </summary>
        /// <param name="inputs">The inputs to evaluate. All inputs for the harness will always be sent.</param>
        /// <param name="outputs">The dictionary to fill up with outputs. The dictionary passed will be pre-filled in 
        /// with all the output variables, their default values, with all the states set to invalid. Most harnesses 
        /// should always return all outputs on a successful run as true. The infrastructure supports returning
        /// partial results for failed runs, however not all tools within the framework currently support this.</param>
        /// <param name="cancellation">A cancellation token that will indicate if the component has been halted.</param>
        /// <exception cref="Exception">This method may throw any exception on failure.</exception>
        public async Task RunAsync(IReadOnlyDictionary<string, VariableState> inputs, VariableValueScope outputs, CancellationToken cancellation)
        {
            //TODO: Run the component, set the outpus as a function of the inputs
            // e.g.
            double x1 = (RealValue)inputs["a1.a2.x1"].SafeValue;
            double x2 = (RealValue)inputs["x2"].SafeValue;
            outputs["y"] = new VariableState(new RealValue(x1*x2));

            await Task.CompletedTask;
            //throw new NotImplementedException("Run method has not been implemented.");
        }

        /// <summary>
        /// Add any cleanup code you need here
        /// </summary>
        /// <param name="disposing">true if we are being explicitly disposed.</param>
        /// <returns>A Task indicating completion</returns>
        protected override async Task DisposeAsync(bool disposing)
        {
            if (disposing)
            {
                _model.Dispose();
                //TODO: Put any cleanup that requires .NET Managed objects here
            }
            //TODO: Put any cleanup of unmanaged resources explicitly held by our class here.
            // Note, if the resources are held by a managed class with its own Dispose, that
            // cleanup belongs above.
            await Task.CompletedTask;
        }
    }
}



