# Interface ZOSAPI::Editors::ISolveSurfacePickup

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup"></a>

![][C#]
![][public]

**Definition**:


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

**Inherits from**:

* [ZOSAPI.Editors.ISolveData](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data)

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
* [Column](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a1a43fddd558f6aec4b9e840a98700623)
* [IsPickupFromCurrentColumn](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1aa3b2c3cd9fa75879d2ceec18921852c7)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1a7fdead3ee138309d1c9b29249157c738)
* [MakePickupFromCurrentColumn](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a1aa8ab0e648d959e2876c7777fedbe1f)
* [Offset](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a86207ab3c5fccb532b5381c7f957242d)
* [ScaleFactor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a2b9641195a72b22a6e1c38573daad5f9)
* [SupportsOffset](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a3a8163fa4c85be19dfa2af9ba5c8249e)
* [SupportsScale](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a1b98d6e8844631c36813052b38eaf111)
* [Surface](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a1e616236690e3fa50ffef814a2cc077b)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data_1ae0bd87fef51453cbcedd740329d36674)

## Properties

### Property Surface

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a1e616236690e3fa50ffef814a2cc077b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.ISolveSurfacePickup.Surface
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveSurfacePickup.Surface"}]}`
-->

### Property ScaleFactor

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a2b9641195a72b22a6e1c38573daad5f9"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.ISolveSurfacePickup.ScaleFactor
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveSurfacePickup.ScaleFactor"}]}`
-->

### Property SupportsScale

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a1b98d6e8844631c36813052b38eaf111"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.ISolveSurfacePickup.SupportsScale
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveSurfacePickup.SupportsScale"}]}`
-->

### Property Offset

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a86207ab3c5fccb532b5381c7f957242d"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.ISolveSurfacePickup.Offset
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveSurfacePickup.Offset"}]}`
-->

### Property SupportsOffset

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a3a8163fa4c85be19dfa2af9ba5c8249e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.ISolveSurfacePickup.SupportsOffset
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveSurfacePickup.SupportsOffset"}]}`
-->

### Property Column

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a1a43fddd558f6aec4b9e840a98700623"></a>

![][public]

**Definition**:


```csharp
SurfaceColumn ZOSAPI.Editors.ISolveSurfacePickup.Column
```


**Return type**: [SurfaceColumn](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1ad5f58db223456ac24920f46ac6d62412)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveSurfacePickup.Column"}]}`
-->

## Public functions

### Function IsPickupFromCurrentColumn

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1aa3b2c3cd9fa75879d2ceec18921852c7"></a>

![][public]


```csharp
bool ZOSAPI.Editors.ISolveSurfacePickup.IsPickupFromCurrentColumn()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveSurfacePickup.IsPickupFromCurrentColumn"}]}`
-->

### Function MakePickupFromCurrentColumn

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_surface_pickup_1a1aa8ab0e648d959e2876c7777fedbe1f"></a>

![][public]


```csharp
void ZOSAPI.Editors.ISolveSurfacePickup.MakePickupFromCurrentColumn()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.ISolveSurfacePickup.MakePickupFromCurrentColumn"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)