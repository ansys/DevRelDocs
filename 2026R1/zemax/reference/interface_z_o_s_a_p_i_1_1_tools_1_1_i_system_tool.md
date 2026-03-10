# Interface ZOSAPI::Tools::ISystemTool

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool"></a>

![][C#]
![][public]

**Definition**:

Base interface for all system tools. See IOpticalSystemTools for access to specific tools.


**Inherited by**:

* [ZOSAPI.Tools.FileManager.IConvertProjectToFileTool](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool)
* [ZOSAPI.Tools.General.IComputeRMSSpotSize](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_compute_r_m_s_spot_size.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_compute_r_m_s_spot_size)
* [ZOSAPI.Tools.General.ICreateArchive](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive)
* [ZOSAPI.Tools.General.ICreateProject](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_project)
* [ZOSAPI.Tools.General.IExportCAD](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_export_c_a_d)
* [ZOSAPI.Tools.General.ILensCatalogs](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_lens_catalogs.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_lens_catalogs)
* [ZOSAPI.Tools.General.IQuickAdjust](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_adjust)
* [ZOSAPI.Tools.General.IQuickFocus](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_quick_focus)
* [ZOSAPI.Tools.General.IRayAimingWizard](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_ray_aiming_wizard.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_ray_aiming_wizard)
* [ZOSAPI.Tools.General.IRestoreArchive](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive)
* [ZOSAPI.Tools.General.IRestoreProject](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project)
* [ZOSAPI.Tools.General.IScale](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale)
* [ZOSAPI.Tools.IConvertToNSCGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group)
* [ZOSAPI.Tools.ICriticalRaysetGenerator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_critical_rayset_generator)
* [ZOSAPI.Tools.IDesignLockdown](interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown)
* [ZOSAPI.Tools.IExportToSpeosLensSystem](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system)
* [ZOSAPI.Tools.IExportToSpeosWhitebox](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_whitebox.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_whitebox)
* [ZOSAPI.Tools.IFileManager](interface_z_o_s_a_p_i_1_1_tools_1_1_i_file_manager.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_file_manager)
* [ZOSAPI.Tools.IMFCalculator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_m_f_calculator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_m_f_calculator)
* [ZOSAPI.Tools.IMaterialsCatalog](interface_z_o_s_a_p_i_1_1_tools_1_1_i_materials_catalog.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_materials_catalog)
* [ZOSAPI.Tools.IShadedModelVisualizationExport](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export)
* [ZOSAPI.Tools.Layouts.I3DViewerExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i3_d_viewer_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i3_d_viewer_export)
* [ZOSAPI.Tools.Layouts.ICrossSectionExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_cross_section_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_cross_section_export)
* [ZOSAPI.Tools.Layouts.INSC3DLayoutExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c3_d_layout_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c3_d_layout_export)
* [ZOSAPI.Tools.Layouts.INSCShadedModelExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c_shaded_model_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c_shaded_model_export)
* [ZOSAPI.Tools.Layouts.IShadedModelExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_shaded_model_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_shaded_model_export)
* [ZOSAPI.Tools.Optimization.IGlobalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization)
* [ZOSAPI.Tools.Optimization.IHammerOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization)
* [ZOSAPI.Tools.Optimization.ILocalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization)
* [ZOSAPI.Tools.Optimization.INSCQuickFocus](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_n_s_c_quick_focus.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_n_s_c_quick_focus)
* [ZOSAPI.Tools.OptimizationTools.IConvertAsphereType](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_convert_asphere_type.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_convert_asphere_type)
* [ZOSAPI.Tools.OptimizationTools.IFindBestAsphere](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_find_best_asphere.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_find_best_asphere)
* [ZOSAPI.Tools.RayTrace.IBatchRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace)
* [ZOSAPI.Tools.RayTrace.ILightningTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_lightning_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_lightning_trace)
* [ZOSAPI.Tools.RayTrace.INSCRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace)
* [ZOSAPI.Tools.RayTrace.IZRDReader](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader)
* [ZOSAPI.Tools.Sequences.ISequenceSelector](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector)
* [ZOSAPI.Tools.Tolerancing.IQuickSensitivity](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_quick_sensitivity.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_quick_sensitivity)
* [ZOSAPI.Tools.Tolerancing.IToleranceDataViewer](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_data_viewer.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_data_viewer)
* [ZOSAPI.Tools.Tolerancing.IToleranceNest](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest)
* [ZOSAPI.Tools.Tolerancing.ITolerancing](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property Progress

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.ISystemTool.Progress
```


Gets the progress of the current tool, if supported.

The progress (0-100)


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.Progress"}]}`
-->

### Property Status

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.ISystemTool.Status
```


Gets the status of the current tool, if supporoted.

The status message;


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.Status"}]}`
-->

### Property IsRunning

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.ISystemTool.IsRunning
```


Gets a value indicating whether the tool is currently running asynchronously.

<code>true</code> if the tool is currently running; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.IsRunning"}]}`
-->

### Property CanCancel

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.ISystemTool.CanCancel
```


Gets a value indicating whether the tool can be cancelled.

<code>true</code> if this tool is asynchronous and can be cancelled; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.CanCancel"}]}`
-->

### Property IsAsynchronous

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.ISystemTool.IsAsynchronous
```


Gets a value indicating whether the tool runs asynchronously (i.e. on a thread).

<code>true</code> if this the tool is asynchronous; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.IsAsynchronous"}]}`
-->

### Property IsFiniteDuration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.ISystemTool.IsFiniteDuration
```


Gets a value indicating whether this tool will complete on its own.

<code>true</code> if the tool is synchronous, or if it is asynchronous and will terminate on its own; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.IsFiniteDuration"}]}`
-->

### Property IsValid

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.ISystemTool.IsValid
```


Gets a value indicating whether the input settings are valid.

<code>true</code> if the settings are valid; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.IsValid"}]}`
-->

### Property Succeeded

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.ISystemTool.Succeeded
```


Gets a value indicating whether the tool execution succeeded.

<code>true</code> if the last execution of the tool succeeded; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.Succeeded"}]}`
-->

### Property ErrorMessage

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.ISystemTool.ErrorMessage
```


If Succeeded is <code>false</code>, get the error messages; otherwise, <code>null</code>.

The error message.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.ErrorMessage"}]}`
-->

## Public functions

### Function Run

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b"></a>

![][public]


```csharp
bool ZOSAPI.Tools.ISystemTool.Run()
```


Start the tool. Note that for synchronous tools (see IsAsynchronous), this call will block until completion. If it is asynchronous it will start running but return immediately.

Usage (see [Example 20](page_ex20.md#page_ex20) for a full sample)


C# 
```csharp
            // Starting exporting
            // Run with a 3 minites timeout
            Console.Write("Starting exporting...");
            ToolExportCAD.Run();
            RunStatus runstatus = ToolExportCAD.WaitWithTimeout(3 * 60);

            // Report the status
            switch (runstatus)
            {
                case RunStatus.Completed:
                    Console.WriteLine("Completed!");
                    break;
                case RunStatus.FailedToStart:
                    Console.WriteLine("Failed To Start!");
                    break;
                case RunStatus.InvalidTimeout:
                    Console.WriteLine("Invalid Timeout!");
                    break;
                case RunStatus.TimedOut:
                    Console.WriteLine("Timed Out!");
                    break;
            }
            Console.WriteLine("Progress: " + ToolExportCAD.Progress.ToString("000") + "%");

            // If the exporting is not completed and can be cancelled, cancel the work
            if (runstatus != RunStatus.Completed & ToolExportCAD.CanCancel)
            {
                ToolExportCAD.Cancel();
            }

            // Close the tool
            ToolExportCAD.Close();
```
 C++ 
```csharp
    // Starting exporting
    // Run with a 3 minites timeout
    // Run() and WaitWithTimeout() is inherited from interface ISystemTool.
    // In C++ we need to cast before using these methods.
    cout << "Starting exporting..." << endl;
    ISystemToolPtr baseTool = ToolExportCAD;
    baseTool->Run();
    RunStatus runstatus = baseTool->WaitWithTimeout(3 * 60);

    // Report the status
    switch (runstatus)
    {
    case RunStatus_Completed:
        cout << "Completed!" << endl;
        break;
    case RunStatus_FailedToStart:
        cout << "Failed To Start!" << endl;
        break;
    case RunStatus_InvalidTimeout:
        cout << "Invalid Timeout!" << endl;
        break;
    case RunStatus_TimedOut:
        cout << "Timed Out!" << endl;
        break;
    }
    cout << "Progress: " << baseTool->Progress << endl;

    // If the exporting is not completed and can be cancelled, cancel the work
    if (runstatus != RunStatus_Completed & baseTool->CanCancel)
    {
        baseTool->Cancel();
    }

    // Close the tool
    baseTool->Close();
```
 Matlab 
```csharp
    % Starting exporting
    % Run with a 3 minites timeout
    fprintf('Starting exporting...\n');
    ToolExportCAD.Run();
    [runstatus] = ToolExportCAD.WaitWithTimeout(3 * 60);
    
    % Report the status
    switch (runstatus)
        case ZOSAPI.Tools.RunStatus.Completed
            fprintf('Completed!\n');
        case ZOSAPI.Tools.RunStatus.FailedToStart
            fprintf('Failed To Start!\n');
        case ZOSAPI.Tools.RunStatus.InvalidTimeout
            cfprintf('Invalid Timeout!\n');
        case ZOSAPI.Tools.RunStatus.TimedOut
            fprintf('Timed Out!\n');
    end
    
    fprintf('Progress: %i\n', ToolExportCAD.Progress);
    
    % If the exporting is not completed and can be cancelled, cancel the work
    if (runstatus ~= ZOSAPI.Tools.RunStatus.Completed && ToolExportCAD.CanCancel)
        ToolExportCAD.Cancel();
    end

    % Close the tool
    ToolExportCAD.Close();
```
 Python 
```csharp
    # Starting exporting
    # Run with a 3 minites timeout
    print('Starting exporting...')
    
    ToolExportCAD.Run()
    runstatus = ToolExportCAD.WaitWithTimeout(float(3 * 60))

    # Report the status
    if runstatus == ZOSAPI.Tools.RunStatus.Completed:
        print('Completed!')
    elif runstatus == ZOSAPI.Tools.RunStatus.FailedToStart:
        print('Failed To Start!')
    elif runstatus == ZOSAPI.Tools.RunStatus.InvalidTimeout:
        print('Invalid Timeout')
    else:
        print('Timed Out!')

    print('Progress: ', ToolExportCAD.Progress)

    # If the exporting is not completed and can be cancelled, cancel the work
    if (runstatus != ZOSAPI.Tools.RunStatus.Completed and ToolExportCAD.CanCancel):
        ToolExportCAD.Cancel()

    # Close the tool
    ToolExportCAD.Close()
```
 


**Returns**:

<code>true</code> if the tool successfully started (and, for synchronous tools, completed); otherwise, <code>false</code>. 

Note that if the tool is already running this will return <code>false</code>

.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.Run"}]}`
-->

### Function RunAndWaitForCompletion

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac"></a>

![][public]


```csharp
bool ZOSAPI.Tools.ISystemTool.RunAndWaitForCompletion()
```


Sames as calling Run followed by WaitForCompletion.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            //change BFL & run quick focus                         
            Surface_Last.Thickness = 40.0;
            IQuickFocus QFocus = tools.OpenQuickFocus();
            QFocus.Criterion = QuickFocusCriterion.SpotSizeRadial;
            QFocus.UseCentroid = true;
            QFocus.RunAndWaitForCompletion();
            QFocus.Close();
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile2.zos");
            TheSystem.SaveAs(SampleFile);
```
 C++ 
```csharp
    // change BFL & run quick focus
    Surface_Last->Thickness = 40.0;
    IQuickFocusPtr QFocus = tools->OpenQuickFocus();
    QFocus->Criterion = QuickFocusCriterion::QuickFocusCriterion_SpotSizeRadial;
    QFocus->UseCentroid = true;
    ISystemToolPtr baseTool = QFocus;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
    SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\CPP\\e15_Seq_Optimization\\OptimizedFile2.zos";
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    %change BFL & run quick focus                         
    Surface_Last.Thickness = 40.0;
    QFocus = tools.OpenQuickFocus();
    QFocus.Criterion = ZOSAPI.Tools.General.QuickFocusCriterion.SpotSizeRadial;
    QFocus.UseCentroid = true;
    QFocus.RunAndWaitForCompletion();
    QFocus.Close();
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile2.zos');
    TheSystem.SaveAs(SampleFile);
```
 Python 
```csharp
    # change BFL & run quick focus
    Surface_Last.Thickness = 40.0
    QFocus = tools.OpenQuickFocus()
    QFocus.Criterion = ZOSAPI.Tools.General.QuickAdjustCriterion.SpotSizeRadial
    QFocus.UseCentroid = True
    QFocus.RunAndWaitForCompletion()
    QFocus.Close()
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile2.zos'
    TheSystem.SaveAs(SampleFile)
```
 


**Returns**:

<code>true</code> if the call to Run succeeded, IsAsynchronous is <code>true</code>, and IsFiniteDuration is <code>false</code>; otherwise, <code>false</code>


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.RunAndWaitForCompletion"}]}`
-->

### Function WaitForCompletion

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db"></a>

![][public]


```csharp
bool ZOSAPI.Tools.ISystemTool.WaitForCompletion()
```


Waits for the asynchronous tool to complete.

**Returns**:

<code>true</code> if the tool is running, it is asynchronous, and it has a finite run duration; otherwise, false.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.WaitForCompletion"}]}`
-->

### Function Cancel

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6"></a>

![][public]


```csharp
bool ZOSAPI.Tools.ISystemTool.Cancel()
```


Cancels the currently running asynchronous tool.

Usage (see [Example 03](page_ex03.md#page_ex03) for a full sample)


C# 
```csharp
            // Hammer for 10 seconds
            Console.WriteLine("Running Hammer for 10 seconds");
            IHammerOptimization HammerOpt = TheSystem.Tools.OpenHammerOptimization();
            HammerOpt.RunAndWaitWithTimeout(10); // 10s of Hammer
            HammerOpt.Cancel();
            HammerOpt.WaitForCompletion();
            HammerOpt.Close();
```
 C++ 
```csharp
    // Hammer for 10 seconds
    IHammerOptimizationPtr HammerOpt = TheSystem->Tools->OpenHammerOptimization();
    baseTool = HammerOpt;
    baseTool->RunAndWaitWithTimeout(10);    
    baseTool->Cancel();
    baseTool->WaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Hammer for 10 seconds
    HammerOpt = TheSystem.Tools.OpenHammerOptimization();
    HammerOpt.RunAndWaitWithTimeout(10);    
    HammerOpt.Cancel();
    HammerOpt.WaitForCompletion();
    HammerOpt.Close();
```
 Python 
```csharp
    # Hammer for 10 seconds
    # need to 'import time' at the top of the file to use the pause function
    print('Running Hammer Optimization')
    HammerOpt = TheSystem.Tools.OpenHammerOptimization()
    HammerOpt.RunAndWaitWithTimeout(10)    
    HammerOpt.Cancel()
    HammerOpt.WaitForCompletion()
    HammerOpt.Close()
```
 


**Returns**:

<code>true</code> if the tool is asynchronous and is currently running; otherwise, <code>false</code>


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.Cancel"}]}`
-->

### Function Close

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31"></a>

![][public]


```csharp
bool ZOSAPI.Tools.ISystemTool.Close()
```


Closes this tool and frees up and associated resources.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            //change BFL & run quick focus                         
            Surface_Last.Thickness = 40.0;
            IQuickFocus QFocus = tools.OpenQuickFocus();
            QFocus.Criterion = QuickFocusCriterion.SpotSizeRadial;
            QFocus.UseCentroid = true;
            QFocus.RunAndWaitForCompletion();
            QFocus.Close();
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile2.zos");
            TheSystem.SaveAs(SampleFile);
```
 C++ 
```csharp
    // change BFL & run quick focus
    Surface_Last->Thickness = 40.0;
    IQuickFocusPtr QFocus = tools->OpenQuickFocus();
    QFocus->Criterion = QuickFocusCriterion::QuickFocusCriterion_SpotSizeRadial;
    QFocus->UseCentroid = true;
    ISystemToolPtr baseTool = QFocus;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
    SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\CPP\\e15_Seq_Optimization\\OptimizedFile2.zos";
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    %change BFL & run quick focus                         
    Surface_Last.Thickness = 40.0;
    QFocus = tools.OpenQuickFocus();
    QFocus.Criterion = ZOSAPI.Tools.General.QuickFocusCriterion.SpotSizeRadial;
    QFocus.UseCentroid = true;
    QFocus.RunAndWaitForCompletion();
    QFocus.Close();
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile2.zos');
    TheSystem.SaveAs(SampleFile);
```
 Python 
```csharp
    # change BFL & run quick focus
    Surface_Last.Thickness = 40.0
    QFocus = tools.OpenQuickFocus()
    QFocus.Criterion = ZOSAPI.Tools.General.QuickAdjustCriterion.SpotSizeRadial
    QFocus.UseCentroid = True
    QFocus.RunAndWaitForCompletion()
    QFocus.Close()
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile2.zos'
    TheSystem.SaveAs(SampleFile)
```
 


**Returns**:

<code>true</code> if the tool is not currently running; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.Close"}]}`
-->

### Function WaitWithTimeout

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394"></a>

![][public]


```csharp
RunStatus ZOSAPI.Tools.ISystemTool.WaitWithTimeout(double timeOutSeconds)
```


Waits for the currently running tool to complete, with a specified time out value. Note that if the timeout is exceeded this method will return, however the tool will continue to run. Also note that this method will not start the tool running if it is not already.

**Parameters**:

* **timeOutSeconds**: The time out value (seconds). Note that this value must be greater than zero, else a RunStatus.InvalidTimeout value will be returned.


**Returns**:

A RunStatus value indicating the tool state.///


**Parameters**:

* double **timeOutSeconds**

**Return type**: [RunStatus](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1a3a955211d48653a7f845f495982c2e11)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.WaitWithTimeout"}]}`
-->

### Function RunAndWaitWithTimeout

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e"></a>

![][public]


```csharp
RunStatus ZOSAPI.Tools.ISystemTool.RunAndWaitWithTimeout(double timeOutSeconds)
```


Starts the tool running, and waits for it to complete with the specified timeout value. Note that if the timeout is exceeded this method will return, however the tool will continue to run.

**Parameters**:

* **timeOutSeconds**: The time out value (seconds). Note that this value must be greater than zero, else a RunStatus.InvalidTimeout value will be returned.


**Returns**:

A RunStatus value indicating the tool state.///


**Parameters**:

* double **timeOutSeconds**

**Return type**: [RunStatus](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1a3a955211d48653a7f845f495982c2e11)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.ISystemTool.RunAndWaitWithTimeout"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)