# Interface ZOSAPI::Wizards::ISEQOptimizationWizard

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard"></a>

![][C#]
![][public]

**Definition**:

Interface for the Merit Function, Sequential Optimization Wizard These settings can be retrieved from the [ZOSAPI.Editors.MFE.IMeritFunctionEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor) interface. Note that this wizard is obsolete and you should use ISEQOptimizationWizard2 instead.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            //define merit function
            //load merit function
            IMeritFunctionEditor TheMFE = TheSystem.MFE;
            ISEQOptimizationWizard OptWizard = TheMFE.SEQOptimizationWizard;

            //Optimize for smallest RMS Spot, which is "Data" = 1
            OptWizard.Data = 1;
            OptWizard.OverallWeight = 1;
            //Gaussian Quadrature with 3 rings (refers to index number = 2)
            OptWizard.Ring = 2;
            //Set air & glass boundaries
            OptWizard.IsGlassUsed = true;
            OptWizard.GlassMin = 3.0;
            OptWizard.GlassMax = 15.0;
            OptWizard.GlassEdge = 3.0;
            OptWizard.IsAirUsed = true;
            OptWizard.AirMin = 0.5;
            OptWizard.AirMax = 1000.0;
            OptWizard.AirEdge = 0.5;
            //And click OK!
            OptWizard.Apply();
            string mf_filename = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\RMS_Spot_Radius.mf");
            TheMFE.SaveMeritFunction(mf_filename);
            TheMFE.LoadMeritFunction(mf_filename);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile4.zos");
```
 C++ 
```csharp
    // define merit function
    // load merit function

    IMeritFunctionEditorPtr TheMFE = TheSystem->MFE;
    // need to ensure that you have the Platform set as x64 and not Win32
    ISEQOptimizationWizardPtr OptWizard = TheMFE->SEQOptimizationWizard;
    // Optimize for smallest RMS Spot, which is "Data" = 1
    OptWizard->Data = 1;
    OptWizard->OverallWeight = 1;
    // Gaussian Quadrature with 3 rings(refers to index number = 2)
    OptWizard->Ring = 2;
    // Set air & glass boundaries
    OptWizard->IsGlassUsed = true;
    OptWizard->GlassMin = 3.0;
    OptWizard->GlassMax = 15.0;
    OptWizard->GlassEdge = 3.0;
    OptWizard->IsAirUsed = true;
    OptWizard->AirMin = 0.5;
    OptWizard->AirMax = 1000.0;
    OptWizard->AirEdge = 0.5;
    // And click OK!
    IWizardPtr baseToolWiz = OptWizard;
    baseToolWiz->Apply();
    _bstr_t mf_filename = _bstr_t(TheApplication->SamplesDir + "\\API\\CPP\\e15_Seq_Optimization\\RMS_Spot_Radius.mf");
    TheMFE->SaveMeritFunction(mf_filename);
    TheMFE->LoadMeritFunction(mf_filename);
    SampleFile = _bstr_t(TheApplication->SamplesDir + "\\API\\CPP\\e15_Seq_Optimization\\OptimizedFile4.zos");
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    %define merit function
    %load merit function
    TheMFE = TheSystem.MFE;
    OptWizard = TheMFE.SEQOptimizationWizard;
    
    %Optimize for smallest RMS Spot, which is "Data" = 1
    OptWizard.Data = 1;
    OptWizard.OverallWeight = 1;
    %Gaussian Quadrature with 3 rings (refers to index number = 2)
    OptWizard.Ring = 2;
    %Set air & glass boundaries
    OptWizard.IsGlassUsed = true;
    OptWizard.GlassMin = 3.0;
    OptWizard.GlassMax = 15.0;
    OptWizard.GlassEdge = 3.0;
    OptWizard.IsAirUsed = true;
    OptWizard.AirMin = 0.5;
    OptWizard.AirMax = 1000.0;
    OptWizard.AirEdge = 0.5;
    %And click OK!
    OptWizard.Apply();
    mf_filename = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\RMS_Spot_Radius.mf');
    TheMFE.SaveMeritFunction(mf_filename);
    TheMFE.LoadMeritFunction(mf_filename);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile4.zos');
```
 Python 
```csharp
    # define merit function
    # load merit function
    # you need to have 64-bit pywin32 to use the SEQOptimizationWizard with an error
    TheMFE = TheSystem.MFE
    OptWizard = TheMFE.SEQOptimizationWizard

    # Optimize for smallest RMS Spot, which is "Data" = 1
    OptWizard.Data = 1
    OptWizard.OverallWeight = 1
    # Gaussian Quadrature with 3 rings (refers to index number = 2)
    OptWizard.Ring = 2
    # Set air & glass boundaries
    OptWizard.IsGlassUsed = True
    OptWizard.GlassMin = 3.0
    OptWizard.GlassMax = 15.0
    OptWizard.GlassEdge = 3.0
    OptWizard.IsAirUsed = True
    OptWizard.AirMin = 0.5
    OptWizard.AirMax = 1000.0
    OptWizard.AirEdge = 0.5
    # And click OK!
    OptWizard.Apply()
    mf_filename = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\RMS_Spot_Radius.mf'
    TheMFE.SaveMeritFunction(mf_filename)
    TheMFE.LoadMeritFunction(mf_filename)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile4.zos'
    TheSystem.SaveAs(SampleFile)
```

**Inherits from**:

* [ZOSAPI.Wizards.IWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard)

## Members

* [AirEdge](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a1f4cda7bb8a0aaa74a1b36fd6ffcce5f)
* [AirMax](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ac1b51072ff6cc35d3dc18ed945b37a66)
* [AirMin](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a564eb88f1c37f82058c55f3d024e3048)
* [Apply](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1ac93e0ac86221c90cf749832e6aa0167e)
* [Arm](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a132ecc372b785a0b2f26d9c3d9c87f74)
* [CommonSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a729a44e5d5a558936cdbbf149c6823e9)
* [Configuration](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1aba613df933919d32090cbd83fe1ea1b2)
* [Data](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a7b688c2cda2f9d61a68a32d958bc7094)
* [GetArmAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a0ccf34f5b1e5349811dacb87cac038a8)
* [GetConfigurationAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a060046f18cce5d29e14b2325a6aef7e9)
* [GetDataTypeAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a8d406a974d520bd21c4866fb28f4ec3e)
* [GetGridAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1acfe723d66698c1b173bc67645e445fc9)
* [GetPupilIntegrationMethodAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ac3df0cbf8fb665186a2d982806df1d64)
* [GetReferenceAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1aca572e4806555b56123234bbd3a2d546)
* [GetRingAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1af78a7175621119cfee73f50fb49392fb)
* [GetTypeAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a5619aa68720091422d155097ef131c6b)
* [GlassEdge](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a7bce56203fade5fd1f698e2ecbc88a5b)
* [GlassMax](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a23302892454c59c19af77c4d6ad47e62)
* [GlassMin](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ab676a9e6216da163a0132d7a5f9e13ce)
* [Grid](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a8347f9b634a70169cb58dc6fe8406436)
* [Initialize](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a5fabc5be6af6f50a242960cd29131a96)
* [IsAddFavoriteOperandsUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a9e230b68ccf57e3008f75b7056c95efb)
* [IsAirUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1afbaf185df3edf64fd6000cdfb747c7b4)
* [IsAssumeAxialSymmetryUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a224c4e83e7769300bb6a861e75e3d348)
* [IsDeleteVignetteUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ad9ee12a469e27cdc548b849201ffaf39)
* [IsGlassUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1acdd2e739ce43e011ff5bf4bee4d0a840)
* [IsIgnoreLateralColorUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a5e6b79e62ea26cb6b5ce38ce0d182aec)
* [IsRelativeXWeightUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a828631888ca06b15503e0442703d4fa5)
* [IsSEQOptimizationWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a2816523a7517137bbee786343de094ab)
* [LoadSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a3afc193985dfc928587494017e56e3a9)
* [NumberOfArms](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a808386c38e9b7fee501b6e68ab1e9601)
* [NumberOfConfigurations](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a98fd0c8e673fa446b407afaeba2e1295)
* [NumberOfDataTypes](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ad2433fe6bc01e84e4db448c962f05462)
* [NumberOfGrids](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a9a8685fd43173db624eb9b29b5d5942a)
* [NumberOfPupilIntegrationMethods](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a0ea2d77673cd71b1e435e3c14765e4c1)
* [NumberOfReferences](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a63a57674f1e2d76fdfa9d38b3110344e)
* [NumberOfRings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a221901271e69125d2b4449f2b3abd635)
* [NumberOfTypes](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a99d17607b2ab0c7f58290105dda38a7f)
* [Obscuration](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a9eed58758e809a5d0944bf8ebd3c8f00)
* [OK](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a28e7e9235278fc9466072bada981041f)
* [OverallWeight](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ae024631c5e65f0934b2e284726899949)
* [PupilIntegrationMethod](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a470cae7468221bbcd342025ac4a8bda4)
* [Reference](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a62644f484bfc2463880c3177953319d9)
* [RelativeXWeight](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ae44122d26bf47c4a89979549dd0bf0eb)
* [ResetSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a0a958c3acdd9b52817994ae24e504a24)
* [Ring](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1abd46e6caa4b3420d3cee487757b186cd)
* [SaveSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a3dea643798407dc67f41aeb26a11fd8a)
* [StartAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a1f0fa242309e70455b97294fd9a33835)
* [Type](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a09358e512acc22e820e471d62722d925)
* [Wizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a2d3034a83efbe3624e3d27d11e7f34f3)

## Properties

### Property CommonSettings

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a729a44e5d5a558936cdbbf149c6823e9"></a>

![][public]

**Definition**:


```csharp
IWizard ZOSAPI.Wizards.ISEQOptimizationWizard.CommonSettings
```


**Return type**: [IWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.CommonSettings"}]}`
-->

### Property IsSEQOptimizationWizard

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a2816523a7517137bbee786343de094ab"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.ISEQOptimizationWizard.IsSEQOptimizationWizard
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.IsSEQOptimizationWizard"}]}`
-->

### Property IsDeleteVignetteUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ad9ee12a469e27cdc548b849201ffaf39"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.ISEQOptimizationWizard.IsDeleteVignetteUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.IsDeleteVignetteUsed"}]}`
-->

### Property IsGlassUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1acdd2e739ce43e011ff5bf4bee4d0a840"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.ISEQOptimizationWizard.IsGlassUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.IsGlassUsed"}]}`
-->

### Property IsAirUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1afbaf185df3edf64fd6000cdfb747c7b4"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.ISEQOptimizationWizard.IsAirUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.IsAirUsed"}]}`
-->

### Property IsAssumeAxialSymmetryUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a224c4e83e7769300bb6a861e75e3d348"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.ISEQOptimizationWizard.IsAssumeAxialSymmetryUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.IsAssumeAxialSymmetryUsed"}]}`
-->

### Property IsIgnoreLateralColorUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a5e6b79e62ea26cb6b5ce38ce0d182aec"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.ISEQOptimizationWizard.IsIgnoreLateralColorUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.IsIgnoreLateralColorUsed"}]}`
-->

### Property IsAddFavoriteOperandsUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a9e230b68ccf57e3008f75b7056c95efb"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.ISEQOptimizationWizard.IsAddFavoriteOperandsUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.IsAddFavoriteOperandsUsed"}]}`
-->

### Property IsRelativeXWeightUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a828631888ca06b15503e0442703d4fa5"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.ISEQOptimizationWizard.IsRelativeXWeightUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.IsRelativeXWeightUsed"}]}`
-->

### Property Type

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a09358e512acc22e820e471d62722d925"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.Type
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.Type"}]}`
-->

### Property Data

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a7b688c2cda2f9d61a68a32d958bc7094"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.Data
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.Data"}]}`
-->

### Property Reference

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a62644f484bfc2463880c3177953319d9"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.Reference
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.Reference"}]}`
-->

### Property PupilIntegrationMethod

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a470cae7468221bbcd342025ac4a8bda4"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.PupilIntegrationMethod
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.PupilIntegrationMethod"}]}`
-->

### Property Ring

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1abd46e6caa4b3420d3cee487757b186cd"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.Ring
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.Ring"}]}`
-->

### Property Arm

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a132ecc372b785a0b2f26d9c3d9c87f74"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.Arm
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.Arm"}]}`
-->

### Property Grid

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a8347f9b634a70169cb58dc6fe8406436"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.Grid
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.Grid"}]}`
-->

### Property Configuration

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1aba613df933919d32090cbd83fe1ea1b2"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.Configuration
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.Configuration"}]}`
-->

### Property StartAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a1f0fa242309e70455b97294fd9a33835"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.StartAt
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.StartAt"}]}`
-->

### Property Obscuration

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a9eed58758e809a5d0944bf8ebd3c8f00"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.ISEQOptimizationWizard.Obscuration
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.Obscuration"}]}`
-->

### Property GlassMin

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ab676a9e6216da163a0132d7a5f9e13ce"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.ISEQOptimizationWizard.GlassMin
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GlassMin"}]}`
-->

### Property GlassMax

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a23302892454c59c19af77c4d6ad47e62"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.ISEQOptimizationWizard.GlassMax
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GlassMax"}]}`
-->

### Property GlassEdge

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a7bce56203fade5fd1f698e2ecbc88a5b"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.ISEQOptimizationWizard.GlassEdge
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GlassEdge"}]}`
-->

### Property AirMin

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a564eb88f1c37f82058c55f3d024e3048"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.ISEQOptimizationWizard.AirMin
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.AirMin"}]}`
-->

### Property AirMax

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ac1b51072ff6cc35d3dc18ed945b37a66"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.ISEQOptimizationWizard.AirMax
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.AirMax"}]}`
-->

### Property AirEdge

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a1f4cda7bb8a0aaa74a1b36fd6ffcce5f"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.ISEQOptimizationWizard.AirEdge
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.AirEdge"}]}`
-->

### Property RelativeXWeight

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ae44122d26bf47c4a89979549dd0bf0eb"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.ISEQOptimizationWizard.RelativeXWeight
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.RelativeXWeight"}]}`
-->

### Property OverallWeight

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ae024631c5e65f0934b2e284726899949"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.ISEQOptimizationWizard.OverallWeight
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.OverallWeight"}]}`
-->

### Property NumberOfTypes

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a99d17607b2ab0c7f58290105dda38a7f"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfTypes
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfTypes"}]}`
-->

### Property NumberOfDataTypes

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ad2433fe6bc01e84e4db448c962f05462"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfDataTypes
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfDataTypes"}]}`
-->

### Property NumberOfReferences

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a63a57674f1e2d76fdfa9d38b3110344e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfReferences
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfReferences"}]}`
-->

### Property NumberOfPupilIntegrationMethods

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a0ea2d77673cd71b1e435e3c14765e4c1"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfPupilIntegrationMethods
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfPupilIntegrationMethods"}]}`
-->

### Property NumberOfRings

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a221901271e69125d2b4449f2b3abd635"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfRings
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfRings"}]}`
-->

### Property NumberOfArms

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a808386c38e9b7fee501b6e68ab1e9601"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfArms
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfArms"}]}`
-->

### Property NumberOfGrids

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a9a8685fd43173db624eb9b29b5d5942a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfGrids
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfGrids"}]}`
-->

### Property NumberOfConfigurations

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a98fd0c8e673fa446b407afaeba2e1295"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfConfigurations
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.NumberOfConfigurations"}]}`
-->

## Public functions

### Function GetTypeAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a5619aa68720091422d155097ef131c6b"></a>

![][public]


```csharp
string ZOSAPI.Wizards.ISEQOptimizationWizard.GetTypeAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GetTypeAt"}]}`
-->

### Function GetDataTypeAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a8d406a974d520bd21c4866fb28f4ec3e"></a>

![][public]


```csharp
string ZOSAPI.Wizards.ISEQOptimizationWizard.GetDataTypeAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GetDataTypeAt"}]}`
-->

### Function GetReferenceAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1aca572e4806555b56123234bbd3a2d546"></a>

![][public]


```csharp
string ZOSAPI.Wizards.ISEQOptimizationWizard.GetReferenceAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GetReferenceAt"}]}`
-->

### Function GetPupilIntegrationMethodAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1ac3df0cbf8fb665186a2d982806df1d64"></a>

![][public]


```csharp
string ZOSAPI.Wizards.ISEQOptimizationWizard.GetPupilIntegrationMethodAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GetPupilIntegrationMethodAt"}]}`
-->

### Function GetRingAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1af78a7175621119cfee73f50fb49392fb"></a>

![][public]


```csharp
string ZOSAPI.Wizards.ISEQOptimizationWizard.GetRingAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GetRingAt"}]}`
-->

### Function GetArmAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a0ccf34f5b1e5349811dacb87cac038a8"></a>

![][public]


```csharp
string ZOSAPI.Wizards.ISEQOptimizationWizard.GetArmAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GetArmAt"}]}`
-->

### Function GetGridAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1acfe723d66698c1b173bc67645e445fc9"></a>

![][public]


```csharp
string ZOSAPI.Wizards.ISEQOptimizationWizard.GetGridAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GetGridAt"}]}`
-->

### Function GetConfigurationAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard_1a060046f18cce5d29e14b2325a6aef7e9"></a>

![][public]


```csharp
string ZOSAPI.Wizards.ISEQOptimizationWizard.GetConfigurationAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ISEQOptimizationWizard.GetConfigurationAt"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)