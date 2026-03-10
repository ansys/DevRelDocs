# Interface ZOSAPI::Editors::ISolveData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data"></a>

![][C#]
![][public]

**Definition**:

Base interface for all solve types. This interface can be accesed via the IEditorCell interface. Note that the _S_ properties are for convenience only and merely cast this interface to the appropriate derived interface. See the OpticStudio documentation for details on the various solve types.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            // remove all variables and add a F# solve on last surface radius
            ILensDataEditor TheLDE = TheSystem.LDE;
            IOpticalSystemTools tools = TheSystem.Tools;
            tools.RemoveAllVariables();
            ILDERow Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
            ISolveData Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
            Solver._S_FNumber.FNumber = 3.1415;
            Surface_Last.RadiusCell.SetSolveData(Solver);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile1.zos");
            TheSystem.SaveAs(SampleFile);
```
 C++ 
```csharp
    // remove all variables and add a F# solve on last surface radius
    ILensDataEditorPtr TheLDE = TheSystem->LDE;
    //IOpticalSystemTools
    IOpticalSystemToolsPtr tools = TheSystem->Tools;
    tools->RemoveAllVariables();
    ILDERowPtr Surface_Last = TheLDE->GetSurfaceAt(TheLDE->NumberOfSurfaces - 2);
    ISolveDataPtr Solver = Surface_Last->RadiusCell->CreateSolveType(SolveType::SolveType_FNumber);
    Solver->_S_FNumber->FNumber = 3.1415;
    Surface_Last->RadiusCell->SetSolveData(Solver);
    SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\\Seq_Optimization\\\OptimizedFile1.zos";
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    % remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE;
    tools = TheSystem.Tools;
    tools.RemoveAllVariables();
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
    Solver.S_FNumber_.FNumber = 3.1415;
    Surface_Last.RadiusCell.SetSolveData(Solver);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile1.zos');
    TheSystem.SaveAs(SampleFile);
```
 Python 
```csharp
    # remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE
    #IOpticalSystemTools
    tools = TheSystem.Tools
    tools.RemoveAllVariables()
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2)
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber)
    Solver._S_FNumber.FNumber = 3.1415
    Surface_Last.RadiusCell.SetSolveData(Solver)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile1.zos'
    TheSystem.SaveAs(SampleFile)
```

**Inherited by**:

* [ZOSAPI.Editors.ISolveAplanatic](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_aplanatic.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_aplanatic)
* [ZOSAPI.Editors.ISolveAutomatic](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_automatic.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_automatic)
* [ZOSAPI.Editors.ISolveCenterOfCurvature](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_center_of_curvature.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_center_of_curvature)
* [ZOSAPI.Editors.ISolveChiefRayAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_angle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_angle)
* [ZOSAPI.Editors.ISolveChiefRayHeight](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_height.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_height)
* [ZOSAPI.Editors.ISolveChiefRayNormal](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_normal.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_normal)
* [ZOSAPI.Editors.ISolveCocentricRadius](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_cocentric_radius.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_cocentric_radius)
* [ZOSAPI.Editors.ISolveCocentricSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_cocentric_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_cocentric_surface)
* [ZOSAPI.Editors.ISolveCompensator](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_compensator.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_compensator)
* [ZOSAPI.Editors.ISolveConfigPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_config_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_config_pickup)
* [ZOSAPI.Editors.ISolveEdgeThickness](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_edge_thickness.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_edge_thickness)
* [ZOSAPI.Editors.ISolveElementPower](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_element_power.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_element_power)
* [ZOSAPI.Editors.ISolveFNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_f_number.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_f_number)
* [ZOSAPI.Editors.ISolveFieldPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_field_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_field_pickup)
* [ZOSAPI.Editors.ISolveFixed](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_fixed.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_fixed)
* [ZOSAPI.Editors.ISolveMarginalRayAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_angle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_angle)
* [ZOSAPI.Editors.ISolveMarginalRayHeight](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_height.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_height)
* [ZOSAPI.Editors.ISolveMarginalRayNormal](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_normal.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_normal)
* [ZOSAPI.Editors.ISolveMaterialModel](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_model)
* [ZOSAPI.Editors.ISolveMaterialOffset](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_offset.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_offset)
* [ZOSAPI.Editors.ISolveMaterialSubstitute](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_substitute.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_substitute)
* [ZOSAPI.Editors.ISolveMaximum](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_maximum.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_maximum)
* [ZOSAPI.Editors.ISolveNone](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_none.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_none)
* [ZOSAPI.Editors.ISolveObjectPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_object_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_object_pickup)
* [ZOSAPI.Editors.ISolveOpticalPathDifference](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_optical_path_difference.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_optical_path_difference)
* [ZOSAPI.Editors.ISolvePickupChiefRay](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_pickup_chief_ray.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_pickup_chief_ray)
* [ZOSAPI.Editors.ISolvePosition](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_position.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_position)
* [ZOSAPI.Editors.ISolvePupilPosition](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_pupil_position.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_pupil_position)
* [ZOSAPI.Editors.ISolveSurfacePickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup)
* [ZOSAPI.Editors.ISolveThermalPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_thermal_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_thermal_pickup)
* [ZOSAPI.Editors.ISolveVariable](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_variable.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_variable)
* [ZOSAPI.Editors.ISolveZPLMacro](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_z_p_l_macro.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_z_p_l_macro)

## Members

* [\_S\_Aplanatic](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a90609641fcadaa39e68e87b34fa68005)
* [\_S\_Automatic](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1afcee8a1b16739c10441b5b379613541f)
* [\_S\_CenterOfCurvature](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1aabe477bca37c936a9edef4a6320bea77)
* [\_S\_ChiefRayAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1af7cdfab4c0d01a609ab5080db53d8d2b)
* [\_S\_ChiefRayHeight](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a709428eefc13193aa5e034635c6952d9)
* [\_S\_ChiefRayNormal](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a1057dd580a40801cd51b9cd709f4f53e)
* [\_S\_CocentricRadius](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1aaa36c9f04370edfc72f54a6ba5a55d46)
* [\_S\_CocentricSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a2037b4957a27b90b883fdc387496368a)
* [\_S\_Compensator](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a33eb7e3688170660dcbefcedd7e7bd05)
* [\_S\_ConfigPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a4a0433cc25d7854d5237b9225d767020)
* [\_S\_DuplicateSag](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1ac2300137c383f13962f91396d008b370)
* [\_S\_EdgeThickness](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a29d46ce41b6d2e564eb9bcfd8c65441a)
* [\_S\_ElementPower](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a8a666fad8c2ad4fdba9a0922b27f7394)
* [\_S\_FieldPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a5778c8270843c4c95c52e5dc2379757e)
* [\_S\_Fixed](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a15ba4eb0bb5e03db08ed356115aa48f2)
* [\_S\_FNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a76c74eb6130514e82ab2d3754cd31564)
* [\_S\_InvertSag](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a2c3ec486e9221419023940cc837eb2be)
* [\_S\_MarginalRayAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a70b995b9e8a01d9bd08c0f993e3fcc8d)
* [\_S\_MarginalRayHeight](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1aea6d8a6d2c492cfe2728f39013d6a5fb)
* [\_S\_MarginalRayNormal](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a0b876c203e467931bdc4c19dccc54187)
* [\_S\_MaterialModel](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1adf311da0bb1b53d3d872e98ebc7b0193)
* [\_S\_MaterialOffset](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a29da10db11f83a6877c7c39f96ced4e9)
* [\_S\_MaterialSubstitute](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a6039d2c3b07488f8cf54fc8627fd0789)
* [\_S\_Maximum](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1af3e4675d14cf8500dffc22bc1b5bbc6a)
* [\_S\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a4b604deb8b54bf0ca0a210d813897c54)
* [\_S\_ObjectPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a769442579bb68b3ae2c19287301c316a)
* [\_S\_OpticalPathDifference](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1adb2ea9440f79a3fd9ac535820c6edd54)
* [\_S\_PickupChiefRay](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a7e8434d85e49c90d4e94e67c13d00258)
* [\_S\_Position](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1af40d79fe5f6dce6bb43da020b8ced940)
* [\_S\_PupilPosition](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1ae78739332b233338576faf29a115a18a)
* [\_S\_SurfacePickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1af7d2c55aebf1c6d10bb4bcd7aaff46b3)
* [\_S\_ThermalPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1abac10262e7f848954cb257bb19e954c3)
* [\_S\_Variable](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a45eac22a37a3f4559e51ad8c649e7f8a)
* [\_S\_ZPLMacro](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1ad0f3218cbdd65ec22f2f40e92479f256)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a7fdead3ee138309d1c9b29249157c738)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1ae0bd87fef51453cbcedd740329d36674)

## Properties

### Property IsValid

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a7fdead3ee138309d1c9b29249157c738"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.ISolveData.IsValid
```


Gets a value indicating whether the current solve settings are valid.

<code>true</code> if the settings are valid; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData.IsValid"}]}`
-->

### Property Type

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1ae0bd87fef51453cbcedd740329d36674"></a>

![][public]

**Definition**:


```csharp
SolveType ZOSAPI.Editors.ISolveData.Type
```


The solve type for this instance.

The instance solve type.


**Return type**: [SolveType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a0e4579c2bd01e606f5ba9e7f7ad1b0ec)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData.Type"}]}`
-->

### Property \_S\_None

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a4b604deb8b54bf0ca0a210d813897c54"></a>

![][public]

**Definition**:


```csharp
ISolveNone ZOSAPI.Editors.ISolveData._S_None
```


**Return type**: [ISolveNone](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_none.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_none)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_None"}]}`
-->

### Property \_S\_Fixed

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a15ba4eb0bb5e03db08ed356115aa48f2"></a>

![][public]

**Definition**:


```csharp
ISolveFixed ZOSAPI.Editors.ISolveData._S_Fixed
```


**Return type**: [ISolveFixed](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_fixed.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_fixed)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_Fixed"}]}`
-->

### Property \_S\_Variable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a45eac22a37a3f4559e51ad8c649e7f8a"></a>

![][public]

**Definition**:


```csharp
ISolveVariable ZOSAPI.Editors.ISolveData._S_Variable
```


**Return type**: [ISolveVariable](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_variable.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_variable)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_Variable"}]}`
-->

### Property \_S\_SurfacePickup

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1af7d2c55aebf1c6d10bb4bcd7aaff46b3"></a>

![][public]

**Definition**:


```csharp
ISolveSurfacePickup ZOSAPI.Editors.ISolveData._S_SurfacePickup
```


Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            //Thickness 10 pick up from 1
            Solver = Surface10.ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup);
            ISolveSurfacePickup SolverPickup = Solver._S_SurfacePickup;
            SolverPickup.Surface = 1;
            SolverPickup.ScaleFactor = 1;
            SolverPickup.Column = ZOSAPI.Editors.LDE.SurfaceColumn.Thickness;
            Surface10.ThicknessCell.SetSolveData(Solver);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile3.zos");
            TheSystem.SaveAs(SampleFile);
```
 C++ 
```csharp
    // Thickness 10 pick up from 1
    Solver = Surface10->ThicknessCell->CreateSolveType(SolveType::SolveType_SurfacePickup);
    ISolveSurfacePickupPtr SolverPickup = Solver->_S_SurfacePickup;
    SolverPickup->Surface = 1;
    SolverPickup->ScaleFactor = 1;
    SolverPickup->Column = SurfaceColumn::SurfaceColumn_Thickness;
    Surface10->ThicknessCell->SetSolveData(Solver);
    SampleFile = _bstr_t(TheApplication->SamplesDir + "\\API\\CPP\\e15_Seq_Optimization\\OptimizedFile3.zos");
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    %Thickness 10 pick up from 1
    Solver = Surface10.ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup);
    SolverPickup = Solver.S_SurfacePickup_;
    SolverPickup.Surface = 1;
    SolverPickup.ScaleFactor = 1;
    SolverPickup.Column = ZOSAPI.Editors.LDE.SurfaceColumn.Thickness;
    Surface10.ThicknessCell.SetSolveData(Solver);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile3.zos');
    TheSystem.SaveAs(SampleFile);
```
 Python 
```csharp
    # Thickness 10 pick up from 1
    Solver = Surface10.ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup)
    SolverPickup = Solver._S_SurfacePickup
    SolverPickup.Surface = 1
    SolverPickup.ScaleFactor = 1
    SolverPickup.Column = ZOSAPI.Editors.LDE.SurfaceColumn.Thickness
    Surface10.ThicknessCell.SetSolveData(Solver)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile3.zos'
    TheSystem.SaveAs(SampleFile)
```


**Return type**: [ISolveSurfacePickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_SurfacePickup"}]}`
-->

### Property \_S\_ZPLMacro

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1ad0f3218cbdd65ec22f2f40e92479f256"></a>

![][public]

**Definition**:


```csharp
ISolveZPLMacro ZOSAPI.Editors.ISolveData._S_ZPLMacro
```


**Return type**: [ISolveZPLMacro](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_z_p_l_macro.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_z_p_l_macro)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_ZPLMacro"}]}`
-->

### Property \_S\_MarginalRayAngle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a70b995b9e8a01d9bd08c0f993e3fcc8d"></a>

![][public]

**Definition**:


```csharp
ISolveMarginalRayAngle ZOSAPI.Editors.ISolveData._S_MarginalRayAngle
```


**Return type**: [ISolveMarginalRayAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_angle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_angle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_MarginalRayAngle"}]}`
-->

### Property \_S\_MarginalRayHeight

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1aea6d8a6d2c492cfe2728f39013d6a5fb"></a>

![][public]

**Definition**:


```csharp
ISolveMarginalRayHeight ZOSAPI.Editors.ISolveData._S_MarginalRayHeight
```


**Return type**: [ISolveMarginalRayHeight](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_height.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_height)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_MarginalRayHeight"}]}`
-->

### Property \_S\_ChiefRayAngle

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1af7cdfab4c0d01a609ab5080db53d8d2b"></a>

![][public]

**Definition**:


```csharp
ISolveChiefRayAngle ZOSAPI.Editors.ISolveData._S_ChiefRayAngle
```


**Return type**: [ISolveChiefRayAngle](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_angle.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_angle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_ChiefRayAngle"}]}`
-->

### Property \_S\_MarginalRayNormal

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a0b876c203e467931bdc4c19dccc54187"></a>

![][public]

**Definition**:


```csharp
ISolveMarginalRayNormal ZOSAPI.Editors.ISolveData._S_MarginalRayNormal
```


**Return type**: [ISolveMarginalRayNormal](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_normal.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_marginal_ray_normal)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_MarginalRayNormal"}]}`
-->

### Property \_S\_ChiefRayNormal

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a1057dd580a40801cd51b9cd709f4f53e"></a>

![][public]

**Definition**:


```csharp
ISolveChiefRayNormal ZOSAPI.Editors.ISolveData._S_ChiefRayNormal
```


**Return type**: [ISolveChiefRayNormal](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_normal.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_normal)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_ChiefRayNormal"}]}`
-->

### Property \_S\_Aplanatic

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a90609641fcadaa39e68e87b34fa68005"></a>

![][public]

**Definition**:


```csharp
ISolveAplanatic ZOSAPI.Editors.ISolveData._S_Aplanatic
```


**Return type**: [ISolveAplanatic](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_aplanatic.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_aplanatic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_Aplanatic"}]}`
-->

### Property \_S\_ElementPower

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a8a666fad8c2ad4fdba9a0922b27f7394"></a>

![][public]

**Definition**:


```csharp
ISolveElementPower ZOSAPI.Editors.ISolveData._S_ElementPower
```


**Return type**: [ISolveElementPower](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_element_power.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_element_power)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_ElementPower"}]}`
-->

### Property \_S\_CocentricSurface

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a2037b4957a27b90b883fdc387496368a"></a>

![][public]

**Definition**:


```csharp
ISolveCocentricSurface ZOSAPI.Editors.ISolveData._S_CocentricSurface
```


**Return type**: [ISolveCocentricSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_cocentric_surface.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_cocentric_surface)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_CocentricSurface"}]}`
-->

### Property \_S\_CocentricRadius

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1aaa36c9f04370edfc72f54a6ba5a55d46"></a>

![][public]

**Definition**:


```csharp
ISolveCocentricRadius ZOSAPI.Editors.ISolveData._S_CocentricRadius
```


**Return type**: [ISolveCocentricRadius](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_cocentric_radius.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_cocentric_radius)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_CocentricRadius"}]}`
-->

### Property \_S\_FNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a76c74eb6130514e82ab2d3754cd31564"></a>

![][public]

**Definition**:


```csharp
ISolveFNumber ZOSAPI.Editors.ISolveData._S_FNumber
```


Usage (see [Example 01](page_ex01.md#page_ex01) for a full sample)


C# 
```csharp
            // Solver
            ISolveData Solver = Surface_3.RadiusCell.CreateSolveType(SolveType.FNumber);
            Solver._S_FNumber.FNumber = 10;
            Surface_3.RadiusCell.SetSolveData(Solver);
```
 C++ 
```csharp
    // Solver
    ISolveDataPtr Solver = Surface_3->RadiusCell->CreateSolveType(SolveType_FNumber);
    Solver->_S_FNumber->FNumber = 10;
    Surface_3->RadiusCell->SetSolveData(Solver);
```
 Matlab 
```csharp
    % Solver
    Solver = Surface_3.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
    Solver.FNumber = 10;
    Surface_3.RadiusCell.SetSolveData(Solver);
```
 Python 
```csharp
    # Solver
    Solver = Surface_3.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber)
    SolverFNumber = Solver._S_FNumber
    SolverFNumber.FNumber = 10
    Surface_3.RadiusCell.SetSolveData(Solver)
```


**Return type**: [ISolveFNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_f_number.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_f_number)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_FNumber"}]}`
-->

### Property \_S\_ChiefRayHeight

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a709428eefc13193aa5e034635c6952d9"></a>

![][public]

**Definition**:


```csharp
ISolveChiefRayHeight ZOSAPI.Editors.ISolveData._S_ChiefRayHeight
```


**Return type**: [ISolveChiefRayHeight](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_height.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_chief_ray_height)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_ChiefRayHeight"}]}`
-->

### Property \_S\_EdgeThickness

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a29d46ce41b6d2e564eb9bcfd8c65441a"></a>

![][public]

**Definition**:


```csharp
ISolveEdgeThickness ZOSAPI.Editors.ISolveData._S_EdgeThickness
```


**Return type**: [ISolveEdgeThickness](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_edge_thickness.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_edge_thickness)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_EdgeThickness"}]}`
-->

### Property \_S\_OpticalPathDifference

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1adb2ea9440f79a3fd9ac535820c6edd54"></a>

![][public]

**Definition**:


```csharp
ISolveOpticalPathDifference ZOSAPI.Editors.ISolveData._S_OpticalPathDifference
```


**Return type**: [ISolveOpticalPathDifference](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_optical_path_difference.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_optical_path_difference)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_OpticalPathDifference"}]}`
-->

### Property \_S\_Position

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1af40d79fe5f6dce6bb43da020b8ced940"></a>

![][public]

**Definition**:


```csharp
ISolvePosition ZOSAPI.Editors.ISolveData._S_Position
```


**Return type**: [ISolvePosition](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_position.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_position)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_Position"}]}`
-->

### Property \_S\_Compensator

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a33eb7e3688170660dcbefcedd7e7bd05"></a>

![][public]

**Definition**:


```csharp
ISolveCompensator ZOSAPI.Editors.ISolveData._S_Compensator
```


**Return type**: [ISolveCompensator](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_compensator.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_compensator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_Compensator"}]}`
-->

### Property \_S\_CenterOfCurvature

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1aabe477bca37c936a9edef4a6320bea77"></a>

![][public]

**Definition**:


```csharp
ISolveCenterOfCurvature ZOSAPI.Editors.ISolveData._S_CenterOfCurvature
```


**Return type**: [ISolveCenterOfCurvature](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_center_of_curvature.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_center_of_curvature)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_CenterOfCurvature"}]}`
-->

### Property \_S\_PupilPosition

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1ae78739332b233338576faf29a115a18a"></a>

![][public]

**Definition**:


```csharp
ISolvePupilPosition ZOSAPI.Editors.ISolveData._S_PupilPosition
```


**Return type**: [ISolvePupilPosition](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_pupil_position.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_pupil_position)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_PupilPosition"}]}`
-->

### Property \_S\_MaterialModel

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1adf311da0bb1b53d3d872e98ebc7b0193"></a>

![][public]

**Definition**:


```csharp
ISolveMaterialModel ZOSAPI.Editors.ISolveData._S_MaterialModel
```


**Return type**: [ISolveMaterialModel](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_model)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_MaterialModel"}]}`
-->

### Property \_S\_MaterialSubstitute

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a6039d2c3b07488f8cf54fc8627fd0789"></a>

![][public]

**Definition**:


```csharp
ISolveMaterialSubstitute ZOSAPI.Editors.ISolveData._S_MaterialSubstitute
```


**Return type**: [ISolveMaterialSubstitute](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_substitute.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_substitute)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_MaterialSubstitute"}]}`
-->

### Property \_S\_MaterialOffset

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a29da10db11f83a6877c7c39f96ced4e9"></a>

![][public]

**Definition**:


```csharp
ISolveMaterialOffset ZOSAPI.Editors.ISolveData._S_MaterialOffset
```


**Return type**: [ISolveMaterialOffset](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_offset.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_material_offset)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_MaterialOffset"}]}`
-->

### Property \_S\_Automatic

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1afcee8a1b16739c10441b5b379613541f"></a>

![][public]

**Definition**:


```csharp
ISolveAutomatic ZOSAPI.Editors.ISolveData._S_Automatic
```


**Return type**: [ISolveAutomatic](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_automatic.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_automatic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_Automatic"}]}`
-->

### Property \_S\_Maximum

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1af3e4675d14cf8500dffc22bc1b5bbc6a"></a>

![][public]

**Definition**:


```csharp
ISolveMaximum ZOSAPI.Editors.ISolveData._S_Maximum
```


**Return type**: [ISolveMaximum](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_maximum.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_maximum)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_Maximum"}]}`
-->

### Property \_S\_PickupChiefRay

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a7e8434d85e49c90d4e94e67c13d00258"></a>

![][public]

**Definition**:


```csharp
ISolvePickupChiefRay ZOSAPI.Editors.ISolveData._S_PickupChiefRay
```


**Return type**: [ISolvePickupChiefRay](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_pickup_chief_ray.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_pickup_chief_ray)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_PickupChiefRay"}]}`
-->

### Property \_S\_ObjectPickup

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a769442579bb68b3ae2c19287301c316a"></a>

![][public]

**Definition**:


```csharp
ISolveObjectPickup ZOSAPI.Editors.ISolveData._S_ObjectPickup
```


**Return type**: [ISolveObjectPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_object_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_object_pickup)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_ObjectPickup"}]}`
-->

### Property \_S\_ConfigPickup

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a4a0433cc25d7854d5237b9225d767020"></a>

![][public]

**Definition**:


```csharp
ISolveConfigPickup ZOSAPI.Editors.ISolveData._S_ConfigPickup
```


Usage (see [Example 18](page_ex18.md#page_ex18) for a full sample)


C# 
```csharp
            // An exmple of manually "Make Thermal"
            TheSystem.LoadFile(TheApplication.SamplesDir + "\\Sequential\\Objectives\\Doublet.zos", false);
            // Add 1 configuration (totally 2)
            TheMCE.AddConfiguration(false);
            // Add 12 operand (totally 13)
            for (int i = 0; i < 12; i++)
                TheMCE.AddOperand();

            // Create an operand type array and later we will input the array into MCE by a for loop
            MultiConfigOperandType[] operandtype = new MultiConfigOperandType[13]{
            MultiConfigOperandType.TEMP,
            MultiConfigOperandType.PRES,
            MultiConfigOperandType.CRVT,
            MultiConfigOperandType.THIC,
            MultiConfigOperandType.GLSS,
            MultiConfigOperandType.SDIA,
            MultiConfigOperandType.CRVT,
            MultiConfigOperandType.THIC,
            MultiConfigOperandType.GLSS,
            MultiConfigOperandType.SDIA,
            MultiConfigOperandType.CRVT,
            MultiConfigOperandType.THIC,
            MultiConfigOperandType.SDIA};

            // Set parameter 1 for each config operand
            int[] param1value = new int[11] { 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3 };
            for (int i = 0; i < 11; i++)
                TheMCE.GetOperandAt(i + 3).Param1 = param1value[i];

            // Set type for each config operand
            for (int i = 0; i < 13; i++)
                TheMCE.GetOperandAt(i + 1).ChangeType(operandtype[i]);

            // Set Thermal Pickup solves
            ISolveData thermalpickupsolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ThermalPickup);
            thermalpickupsolve._S_ThermalPickup.Configuration = 1;
            int[] thermalpickup_num = new int[9] { 3, 4, 6, 7, 8, 10, 11, 12, 13 };
            foreach (int i in thermalpickup_num)
                TheMCE.GetOperandAt(i).GetOperandCell(2).SetSolveData(thermalpickupsolve);

            // Set Pickup solve
            ISolveData configpickupsolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ConfigPickup);
            configpickupsolve._S_ConfigPickup.Configuration = 1;
            TheMCE.GetOperandAt(5).GetOperandCell(2).SetSolveData(configpickupsolve);
            TheMCE.GetOperandAt(9).GetOperandCell(2).SetSolveData(configpickupsolve);

            // Set temperature of configuration 2 to 100 degrees
            TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 100;
            ISystemData TheSystemData = TheSystem.SystemData;
            TheSystemData.Environment.AdjustIndexToEnvironment = true;

            // Save the system
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e18_Doublet_MakeTermal.zos");
```
 C++ 
```csharp
    // An exmple of manually "Make Thermal"
    TheSystem->LoadFile(TheApplication->SamplesDir + "\\Sequential\\Objectives\\Doublet.zos", false);
    // Add 1 configuration (totally 2)
    TheMCE->AddConfiguration(false);
    // Add 12 operand (totally 13)
    for (int i = 0; i < 12; i++)
        TheMCE->AddOperand();

    // Create an operand type array and later we will input the array into MCE by a for loop
    MultiConfigOperandType *operandtype = new MultiConfigOperandType[13]{
        MultiConfigOperandType_TEMP,
        MultiConfigOperandType_PRES,
        MultiConfigOperandType_CRVT,
        MultiConfigOperandType_THIC,
        MultiConfigOperandType_GLSS,
        MultiConfigOperandType_SDIA,
        MultiConfigOperandType_CRVT,
        MultiConfigOperandType_THIC,
        MultiConfigOperandType_GLSS,
        MultiConfigOperandType_SDIA,
        MultiConfigOperandType_CRVT,
        MultiConfigOperandType_THIC,
        MultiConfigOperandType_SDIA };

    // Set parameter 1 for each config operand
    int *param1value = new int[11]{ 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3 };
    for (int i = 0; i < 11; i++)
        TheMCE->GetOperandAt(i + 3)->Param1 = param1value[i];

    // Set type for each config operand
    for (int i = 0; i < 13; i++)
        TheMCE->GetOperandAt(i + 1)->ChangeType(operandtype[i]);

    // Set Thermal Pickup solves
    ISolveDataPtr thermalpickupsolve = TheMCE->GetOperandAt(1)->GetOperandCell(1)->CreateSolveType(SolveType_ThermalPickup);
    thermalpickupsolve->_S_ThermalPickup->Configuration = 1;
    int *thermalpickup_num = new int[9]{ 3, 4, 6, 7, 8, 10, 11, 12, 13 };
    for (int i = 0; i < 9; i++)
        TheMCE->GetOperandAt(thermalpickup_num[i])->GetOperandCell(2)->SetSolveData(thermalpickupsolve);

    // Set Pickup solve
    ISolveDataPtr configpickupsolve = TheMCE->GetOperandAt(1)->GetOperandCell(1)->CreateSolveType(SolveType_ConfigPickup);
    configpickupsolve->_S_ConfigPickup->Configuration = 1;
    TheMCE->GetOperandAt(5)->GetOperandCell(2)->SetSolveData(configpickupsolve);
    TheMCE->GetOperandAt(9)->GetOperandCell(2)->SetSolveData(configpickupsolve);

    // Set temperature of configuration 2 to 100 degrees
    TheMCE->GetOperandAt(1)->GetOperandCell(2)->DoubleValue = 100;
    ISystemDataPtr TheSystemData = TheSystem->SystemData;
    TheSystemData->Environment->AdjustIndexToEnvironment = true;

    // Save the system
    TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e18_Doublet_MakeTermal.zos");
#if defined(_DEBUG)
    // keeps console open when in debug mode
    system("pause");
#endif
```
 Matlab 
```csharp
    % An example of manually "Make Thermal"
    TheSystem.LoadFile(System.String.Concat(TheApplication.SamplesDir, '\Sequential\Objectives\Doublet.zos'), false);
    % Add 1 configuration (totally 2)
    TheMCE.AddConfiguration(false);
    % Add 12 operands (totally 13)
    for i = 0:11
        TheMCE.AddOperand();
    end
        
    % Create an operand type array and later we will input the array into MCE with a for loop
    operandType = NET.createArray('ZOSAPI.Editors.MCE.MultiConfigOperandType', 13);
    operandType(1) = ZOSAPI.Editors.MCE.MultiConfigOperandType.TEMP;
    operandType(2) = ZOSAPI.Editors.MCE.MultiConfigOperandType.PRES;
    operandType(3) = ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT;
    operandType(4) = ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC;
    operandType(5) = ZOSAPI.Editors.MCE.MultiConfigOperandType.GLSS;
    operandType(6) = ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA;
    operandType(7) = ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT;
    operandType(8) = ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC;
    operandType(9) = ZOSAPI.Editors.MCE.MultiConfigOperandType.GLSS;
    operandType(10) = ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA;
    operandType(11) = ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT;
    operandType(12) = ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC;
    operandType(13) = ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA;
    % Set parameter 1 for each config operand
    param1value = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3];
    for i = 1:11
        TheMCE.GetOperandAt(i + 2).Param1 = param1value(i);
    end
    
    % Set type for each config operand
    for i = 1:13
        TheMCE.GetOperandAt(i).ChangeType(operandType(i));
    end
    
    % Set thermal pickup solves
    ThermalPickupSolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ThermalPickup);
    tPickup = ThermalPickupSolve.S_ThermalPickup_;
    tPickup.Configuration = 1;
    ThermalPickup_num = [3, 4, 6, 7, 8, 10, 11, 12, 13];
    for i = 1:numel(ThermalPickup_num)
        TheMCE.GetOperandAt(ThermalPickup_num(i)).GetOperandCell(2).SetSolveData(ThermalPickupSolve);
    end
    
    % Set Pickup Solve
    ConfigPickupSolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ConfigPickup);
    cPickup = ConfigPickupSolve.S_ConfigPickup_;
    cPickup.Configuration = 1;
    GLSSops = [5, 9];  % Operands 5 and 9 are GLSS operands
    for i = 1:numel(GLSSops)
        ConfigPickupSolve.S_ConfigPickup_.Operand = GLSSops(i);  % Set pickup solve's "operand" value to pickup from correct place
        TheMCE.GetOperandAt(GLSSops(i)).GetOperandCell(2).SetSolveData(ConfigPickupSolve);  % apply solve for operands 5 and 9
    end
    
    % Set temperature of configuration 2 to 100 degrees
    TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 100;
    TheSystemData = TheSystem.SystemData;
    TheSystemData.Environment.AdjustIndexToEnvironment = true;
    
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e18_Doublet_MakeTermal.zos'));
```
 Python 
```csharp
    # An example of manually "Make Thermal"
    TheSystem.LoadFile(TheApplication.SamplesDir + "\Sequential\Objectives\Doublet.zos", False)
    # Add 1 configuration (totally 2)
    TheMCE.AddConfiguration(False)
    # Add 12 operands (totally 13)
    for i in range(0, 12):
        TheMCE.AddOperand()
    # Create an operand type array and later we will input the array into MCE with a for loop
    operandType = [ZOSAPI.Editors.MCE.MultiConfigOperandType.TEMP, ZOSAPI.Editors.MCE.MultiConfigOperandType.PRES,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT, ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.GLSS, ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT, ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.GLSS, ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT, ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA]
    # Set parameter 1 for each config operand
    param1value = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]
    for i in range(0, 11):
        TheMCE.GetOperandAt(i+3).Param1 = param1value[i]

    # Set type for each config operand
    for i in range(13):
        TheMCE.GetOperandAt(i+1).ChangeType(operandType[i])

    # Set thermal pickup solves
    ThermalPickupSolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ThermalPickup)
    ThermalPickupSolve._S_ThermalPickup.Configuration = 1
    ThermalPickup_num = [3, 4, 6, 7, 8, 10, 11, 12, 13]
    for i in ThermalPickup_num:
        TheMCE.GetOperandAt(i).GetOperandCell(2).SetSolveData(ThermalPickupSolve)

    # Set Pickup Solve
    ConfigPickupSolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ConfigPickup)
    ConfigPickupSolve._S_ConfigPickup.Configuration = 1
    GLSSops = [5, 9]  # Operands 5 and 9 are GLSS operands
    for i in GLSSops:
        ConfigPickupSolve._S_ConfigPickup.Operand = i  # Set pickup solve's "operand" value to pickup from correct place
        TheMCE.GetOperandAt(i).GetOperandCell(2).SetSolveData(ConfigPickupSolve)  # apply solve for operands 5 and 9

    # Set temperature of configuration 2 to 100 degrees
    TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 100
    TheSystemData = TheSystem.SystemData
    TheSystemData.Environment.AdjustIndexToEnvironment = True

    TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\Python\\e18_Doublet_MakeTermal.zos")
```


**Return type**: [ISolveConfigPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_config_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_config_pickup)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_ConfigPickup"}]}`
-->

### Property \_S\_ThermalPickup

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1abac10262e7f848954cb257bb19e954c3"></a>

![][public]

**Definition**:


```csharp
ISolveThermalPickup ZOSAPI.Editors.ISolveData._S_ThermalPickup
```


**Return type**: [ISolveThermalPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_thermal_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_thermal_pickup)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_ThermalPickup"}]}`
-->

### Property \_S\_FieldPickup

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a5778c8270843c4c95c52e5dc2379757e"></a>

![][public]

**Definition**:


```csharp
ISolveFieldPickup ZOSAPI.Editors.ISolveData._S_FieldPickup
```


**Return type**: [ISolveFieldPickup](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_field_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_field_pickup)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_FieldPickup"}]}`
-->

### Property \_S\_DuplicateSag

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1ac2300137c383f13962f91396d008b370"></a>

![][public]

**Definition**:


```csharp
ISolveDuplicateSag ZOSAPI.Editors.ISolveData._S_DuplicateSag
```


**Return type**: [ISolveDuplicateSag](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_duplicate_sag.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_duplicate_sag)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_DuplicateSag"}]}`
-->

### Property \_S\_InvertSag

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a2c3ec486e9221419023940cc837eb2be"></a>

![][public]

**Definition**:


```csharp
ISolveInvertSag ZOSAPI.Editors.ISolveData._S_InvertSag
```


**Return type**: [ISolveInvertSag](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_invert_sag.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_invert_sag)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveData._S_InvertSag"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)