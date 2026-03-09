# Interface ZOSAPI::Tools::Tolerancing::ITolerancing

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for running Tolerancing. This interface can be accessed via the IOpticalSystemTools interface.

Usage (see [Example 14](page_ex14.md#page_ex14) for a full sample)


C# 
```csharp
            // Set up the Tolerancing analysis and run it
            ZOSAPI.Tools.Tolerancing.ITolerancing tol = TheSystem.Tools.OpenTolerancing();
            // Select Sensitivity mode
            tol.SetupMode = ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity;
            // Select Criterion and related settings 
            tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius;
            tol.CriterionSampling = 3;
            tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS;
            tol.CriterionCycle = 2;
            tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined;
            // Select the number or MC runs and files to save
            tol.NumberOfRuns = 20;
            tol.NumberToSave = 20;
            // Run the Tolerancing analysis
            tol.RunAndWaitForCompletion();
            tol.Close();
```
 C++ 
```csharp
    // Set up the Tolerancing analysis and run it
    ZOSAPI_Interfaces::ITolerancingPtr tol = TheSystem->Tools->OpenTolerancing();
    // Select Sensitivity mode
    tol->SetupMode = ZOSAPI_Interfaces::SetupModes_Sensitivity;
    // Select Criterion and related settings 
    tol->Criterion = ZOSAPI_Interfaces::Criterions_RMSSpotRadius;
    tol->CriterionSampling = 3;
    tol->CriterionComp = ZOSAPI_Interfaces::CriterionComps_OptimizeAll_DLS;
    tol->CriterionCycle = 2;
    tol->CriterionField = ZOSAPI_Interfaces::CriterionFields_UserDefined;
    // Select the number or MC runs and files to save
    tol->NumberOfRuns = 20;
    tol->NumberToSave = 20;
    // Run the Tolerancing analysis
    ZOSAPI_Interfaces::ISystemToolPtr baseTool = tol;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Set up the Tolerancing analysis and run it
    tol = TheSystem.Tools.OpenTolerancing();
    % Select Sensitivity mode
    tol.SetupMode = ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity;
    % Select Criterion and related settings 
    tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius;
    tol.CriterionSampling = 3;
    tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS;
    tol.CriterionCycle = 2;
    tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined;
    % Select the number or MC runs and files to save
    tol.NumberOfRuns = 20;
    tol.NumberToSave = 20;
    % Run the Tolerancing analysis
    tol.RunAndWaitForCompletion();
    tol.Close();
```
 Python 
```csharp
    # Set up Tolerancing analysis and run it
    tol = TheSystem.Tools.OpenTolerancing()
    # Select Sensitivity mode
    tol.SetupMode =  ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity
    # Select Criterion and related settings
    tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius
    tol.CriterionSampling = 3
    tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS
    tol.CriterionCycle = 2
    tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined
    # Select number of MC runs and files to save
    tol.NumberOfRuns = 20
    tol.NumberToSave = 20
    # Run the Tolerancing analysis
    tol.RunAndWaitForCompletion()
    tol.Close()
```

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [BestWorstOutputFolder](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ab349d3110893125eb2d96173edfccb02)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [Criterion](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a8e68caaba117a074eb25601e3a1f8f55)
* [CriterionComp](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a36a8ba2613f743034b2081f72a7e0732)
* [CriterionCompIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ae7c622af431b4a5370880c7bf896a47c)
* [CriterionConfiguration](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ac2dc10ef30a8047fe579f14993ca1cdd)
* [CriterionConfigurationIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1afafa904fb35508f6dd359036163c3632)
* [CriterionCycle](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a1ac16bf1e80fb4dc9a78c793eeba3c0b)
* [CriterionCycleIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a13473bd4020b35de8a4095a244393f46)
* [CriterionField](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a8e72681f1a2b304e97417df25d03224c)
* [CriterionFieldIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ad586a61fc9d1288f9008c55294d78e66)
* [CriterionIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a9e274a284b00b694bdf16d9646029fbd)
* [CriterionSampling](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6ea557dd2b0fe234118740dc86431da7)
* [CriterionSamplingIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7d6d4ac74b3d0395c176e1584c76edfe)
* [CriterionScript](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0e72a6790debbd1b5e47db96f4630f91)
* [CriterionScriptIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a12829acadf403ab8b433b44490316f25)
* [DisplayShowWorst](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ab57f0e6a150245c0ddfa0540461b3145)
* [DisplayShowWorstIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a01c5a62f0622d9820286d3ea8784faf4)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [EstimateHPCTime](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ada7f13841b4598fd265966295d44e937)
* [FilePrefix](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7c088e944206e549d7cb20a6a5064299)
* [GetCriterionAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0a81e41f68dca96635f75f7096155443)
* [GetCriterionCompAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1acc235ec610d07571a31b1ec3cb66814e)
* [GetCriterionConfigurationAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1af1299ba2809bbc8ace64f4a1bc07b6e0)
* [GetCriterionCycleAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1abe341167e4be46436389861b72305d49)
* [GetCriterionFieldAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7bfa399c17a4f50601b0554d460e75aa)
* [GetCriterionSampleAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ac80fbc230c5d973b1eb40a93339c0b15)
* [GetCriterionScriptAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5295c2b2bc1bd377876b8001c34682e1)
* [GetDisplayShowWorstAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5551777c7889ba054dbd2bc64aeab13a)
* [GetMonteCarloStatisticAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1adfcb6b78100fd38756146ae8f77c17cd)
* [GetSetupCacheAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a1a910fedee11cc809d3a30ee5f5006f8)
* [GetSetupChangeAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a3f6041344275f362e1c0f543af55731a)
* [GetSetupCoreAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0616a414194636e4594cb716de1721f8)
* [GetSetupModeAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ab295a46780e3a3e29f8638f7b18929d8)
* [GetSetupPolynomialAt](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1af6a8463830887c6ba02c201b369a033d)
* [HPCEstimatedTimeS](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a2489b8c58f13b3fe76091d9793c55de8)
* [HPCHasTimeEstimate](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5c4bc7faf68b89cf63da2e842bdfdd95)
* [HPCQueuePosition](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a44f2983852be6bb025e072205825ad7a)
* [HPCRemainingTimeS](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1aeb62050aa1606c0bfa3a4b233f8efae7)
* [HPCState](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5997a1943f3163240a24463d931a5d86)
* [HPCTimeToStartS](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ad0a2a5530264aa134ecd613b9ab2b492)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsForceRayAimingUsed](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0e062a11ef9c329fe91a8e8a63886549)
* [IsHideAllButWorstUsed](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a2f6f4a59366a82cff6ff77336491c1c1)
* [IsHPCEnabled](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1af8cfac21b758fb05a2027ea1cd27f185)
* [IsOverlayGraphicsUsed](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6cbe9f2e0c474a4a88fee7b6f81f2494)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsSaveBestWorstUsed](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6de3af502eba5415294ab0356e20e352)
* [IsSeperateFieldConfigurationsUsed](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a3c969efd890a37d950b81ae488a2d154)
* [IsShowCompensatorsUsed](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a09510aba05b9d82b1bfa90b5b0f13cf0)
* [IsShowDescriptionsUsed](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ae466cadfb8b47791f43096a9050c3ed3)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [Load](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a23a0e9a6618d83109e24596ec597ee80)
* [MaximumCriteria](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a3ec18ca30c7e7e816efe89318f9b8d85)
* [MonteCarloStatistic](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6b390eb0e26b02402f1d4fdc773bba41)
* [MonteCarloStatisticIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a22c10c5d5eefe2c6f70d830368e969bb)
* [MTFFrequency](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a50546937509494578aedbe09e31f609b)
* [NumberOfCriteria](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a9131159fb31625de882bae491035d2fe)
* [NumberOfCriterionComps](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a06ede6d94e0faeb4b963a26cacffacf1)
* [NumberOfCriterionConfigurations](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7a0e120ff470798de20d461ac4c8da14)
* [NumberOfCriterionCycles](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1aca862617384d1d2c6a705af41cdc6689)
* [NumberOfCriterionFields](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7cefe754af195cc70acc893a3076ad30)
* [NumberOfCriterionSamplings](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1aa0f49af35cbe72a056d8b5c654e519b1)
* [NumberOfCriterionScripts](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7c63cbe945a1b12727914ba502effa8a)
* [NumberOfDisplayShowWorsts](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ad832b0368d59a17ecf95ee5ee1204a93)
* [NumberOfMonteCarloStatistics](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a2e523021ea5d4b365ad201aa53d0a06c)
* [NumberOfRuns](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a27c804b654035961fa2ea66f0520d34d)
* [NumberOfSetupCaches](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5edad48dff4c6674f7fe5db04b74a487)
* [NumberOfSetupChanges](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a8d69ef71d7f81b602687d3c9ca432e46)
* [NumberOfSetupCores](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6dee99a30b67020d6fb5ed78ed2c5196)
* [NumberOfSetupModes](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a993d588cbe57d26c9654d6b10d85a5fd)
* [NumberOfSetupPolynomials](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a64383762b37893c8e19029fefb6cf3fd)
* [NumberToSave](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a1709cb6ff779be0473a9b26dfd7a3cdd)
* [OpenDataViewer](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a50f13f4ce7a6b0d785908e4c02be3d7a)
* [OutputFile](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a24dae13a4434d7dd0097999b91b63203)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Reset](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a1c82732e2a8e31cf42b827e906dd608e)
* [ResultFilename](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7c846d7ab7f46ca19aa45194a61543b1)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [Save](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ada255b56926d143f5ec5ae9279345b9d)
* [SaveTolDataFile](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a9cf88094e6416a7ffddb3045b375462f)
* [SetPartialMCTMode](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a8791150d43f1bf6d4cd77b5ae4a80295)
* [SetupCache](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ad16a3cba18c5807451b566b377742107)
* [SetupCacheIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a10846094f91e05d3766a1bf346703bb3)
* [SetupChange](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1af1f5f51243340a31938ea0dce0ad129c)
* [SetupChangeIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1acd1ddde0505ae861bf9e2bef56e7ff1f)
* [SetupCore](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a177301c7b007efa022ccf2d2b56e668e)
* [SetupCoreIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1acbcd3ee7ce3fc7a30daba63a7af3a741)
* [SetupMode](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1aca9a32f9a98e9be4a533b1af859dad87)
* [SetupModeIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0802886e35734bec109ec57267aa9ddd)
* [SetupPolynomial](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a13bd9c50d65c4b63cb329d360ee44a21)
* [SetupPolynomialsIndex](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7db3398c24b3bae32ff3e4c2e2efa89a)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [TolDataFile](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a14544da6e1b6d4a030ac3dd40740e3dd)
* [UseDataRetention](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5114a6cd280bbcd356d6dab8aa1b48ff)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property ResultFilename

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7c846d7ab7f46ca19aa45194a61543b1"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.ResultFilename
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.ResultFilename"}]}`
-->

### Property IsForceRayAimingUsed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0e062a11ef9c329fe91a8e8a63886549"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.IsForceRayAimingUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.IsForceRayAimingUsed"}]}`
-->

### Property IsSeperateFieldConfigurationsUsed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a3c969efd890a37d950b81ae488a2d154"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.IsSeperateFieldConfigurationsUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.IsSeperateFieldConfigurationsUsed"}]}`
-->

### Property SetupMode

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1aca9a32f9a98e9be4a533b1af859dad87"></a>

![][public]

**Definition**:


```csharp
SetupModes ZOSAPI.Tools.Tolerancing.ITolerancing.SetupMode
```


**Return type**: [SetupModes](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a353903c47ffd3d71eb432008f520d3fa)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupMode"}]}`
-->

### Property SetupModeIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0802886e35734bec109ec57267aa9ddd"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.SetupModeIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupModeIndex"}]}`
-->

### Property NumberOfSetupModes

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a993d588cbe57d26c9654d6b10d85a5fd"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupModes
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupModes"}]}`
-->

### Property SetupPolynomial

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a13bd9c50d65c4b63cb329d360ee44a21"></a>

![][public]

**Definition**:


```csharp
SetupPolynomials ZOSAPI.Tools.Tolerancing.ITolerancing.SetupPolynomial
```


**Return type**: [SetupPolynomials](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ac9b3773a5e2196f6402806a87f1a0f46)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupPolynomial"}]}`
-->

### Property SetupPolynomialsIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7db3398c24b3bae32ff3e4c2e2efa89a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.SetupPolynomialsIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupPolynomialsIndex"}]}`
-->

### Property NumberOfSetupPolynomials

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a64383762b37893c8e19029fefb6cf3fd"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupPolynomials
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupPolynomials"}]}`
-->

### Property SetupCache

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ad16a3cba18c5807451b566b377742107"></a>

![][public]

**Definition**:


```csharp
SetupCaches ZOSAPI.Tools.Tolerancing.ITolerancing.SetupCache
```


**Return type**: [SetupCaches](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a565194c99b7d6d7ef4f2ce836271e7c0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupCache"}]}`
-->

### Property SetupCacheIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a10846094f91e05d3766a1bf346703bb3"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.SetupCacheIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupCacheIndex"}]}`
-->

### Property NumberOfSetupCaches

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5edad48dff4c6674f7fe5db04b74a487"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupCaches
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupCaches"}]}`
-->

### Property SetupChange

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1af1f5f51243340a31938ea0dce0ad129c"></a>

![][public]

**Definition**:


```csharp
SetupChanges ZOSAPI.Tools.Tolerancing.ITolerancing.SetupChange
```


**Return type**: [SetupChanges](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a62b1feccf91f212f7d22ac0d8f72bab8)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupChange"}]}`
-->

### Property SetupChangeIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1acd1ddde0505ae861bf9e2bef56e7ff1f"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.SetupChangeIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupChangeIndex"}]}`
-->

### Property NumberOfSetupChanges

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a8d69ef71d7f81b602687d3c9ca432e46"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupChanges
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupChanges"}]}`
-->

### Property SetupCore

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a177301c7b007efa022ccf2d2b56e668e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.SetupCore
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupCore"}]}`
-->

### Property SetupCoreIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1acbcd3ee7ce3fc7a30daba63a7af3a741"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.SetupCoreIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetupCoreIndex"}]}`
-->

### Property NumberOfSetupCores

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6dee99a30b67020d6fb5ed78ed2c5196"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupCores
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfSetupCores"}]}`
-->

### Property MaximumCriteria

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a3ec18ca30c7e7e816efe89318f9b8d85"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.ITolerancing.MaximumCriteria
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.MaximumCriteria"}]}`
-->

### Property MTFFrequency

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a50546937509494578aedbe09e31f609b"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.ITolerancing.MTFFrequency
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.MTFFrequency"}]}`
-->

### Property Criterion

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a8e68caaba117a074eb25601e3a1f8f55"></a>

![][public]

**Definition**:


```csharp
Criterions ZOSAPI.Tools.Tolerancing.ITolerancing.Criterion
```


**Return type**: [Criterions](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.Criterion"}]}`
-->

### Property CriterionIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a9e274a284b00b694bdf16d9646029fbd"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionIndex"}]}`
-->

### Property NumberOfCriteria

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a9131159fb31625de882bae491035d2fe"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriteria
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriteria"}]}`
-->

### Property CriterionSampling

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6ea557dd2b0fe234118740dc86431da7"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionSampling
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionSampling"}]}`
-->

### Property CriterionSamplingIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7d6d4ac74b3d0395c176e1584c76edfe"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionSamplingIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionSamplingIndex"}]}`
-->

### Property NumberOfCriterionSamplings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1aa0f49af35cbe72a056d8b5c654e519b1"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionSamplings
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionSamplings"}]}`
-->

### Property CriterionComp

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a36a8ba2613f743034b2081f72a7e0732"></a>

![][public]

**Definition**:


```csharp
CriterionComps ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionComp
```


**Return type**: [CriterionComps](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f04f76132ebfe9fe159f58a64fbacb7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionComp"}]}`
-->

### Property CriterionCompIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ae7c622af431b4a5370880c7bf896a47c"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionCompIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionCompIndex"}]}`
-->

### Property NumberOfCriterionComps

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a06ede6d94e0faeb4b963a26cacffacf1"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionComps
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionComps"}]}`
-->

### Property CriterionConfiguration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ac2dc10ef30a8047fe579f14993ca1cdd"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionConfiguration
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionConfiguration"}]}`
-->

### Property CriterionConfigurationIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1afafa904fb35508f6dd359036163c3632"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionConfigurationIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionConfigurationIndex"}]}`
-->

### Property NumberOfCriterionConfigurations

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7a0e120ff470798de20d461ac4c8da14"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionConfigurations
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionConfigurations"}]}`
-->

### Property CriterionField

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a8e72681f1a2b304e97417df25d03224c"></a>

![][public]

**Definition**:


```csharp
CriterionFields ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionField
```


**Return type**: [CriterionFields](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a150df2a2f67d7bd3952818148e19d4ff)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionField"}]}`
-->

### Property CriterionFieldIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ad586a61fc9d1288f9008c55294d78e66"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionFieldIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionFieldIndex"}]}`
-->

### Property NumberOfCriterionFields

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7cefe754af195cc70acc893a3076ad30"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionFields
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionFields"}]}`
-->

### Property CriterionCycle

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a1ac16bf1e80fb4dc9a78c793eeba3c0b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionCycle
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionCycle"}]}`
-->

### Property CriterionCycleIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a13473bd4020b35de8a4095a244393f46"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionCycleIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionCycleIndex"}]}`
-->

### Property NumberOfCriterionCycles

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1aca862617384d1d2c6a705af41cdc6689"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionCycles
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionCycles"}]}`
-->

### Property CriterionScript

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0e72a6790debbd1b5e47db96f4630f91"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionScript
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionScript"}]}`
-->

### Property CriterionScriptIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a12829acadf403ab8b433b44490316f25"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionScriptIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.CriterionScriptIndex"}]}`
-->

### Property NumberOfCriterionScripts

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7c63cbe945a1b12727914ba502effa8a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionScripts
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfCriterionScripts"}]}`
-->

### Property NumberOfRuns

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a27c804b654035961fa2ea66f0520d34d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfRuns
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfRuns"}]}`
-->

### Property NumberToSave

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a1709cb6ff779be0473a9b26dfd7a3cdd"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberToSave
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberToSave"}]}`
-->

### Property IsSaveBestWorstUsed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6de3af502eba5415294ab0356e20e352"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.IsSaveBestWorstUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.IsSaveBestWorstUsed"}]}`
-->

### Property IsOverlayGraphicsUsed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6cbe9f2e0c474a4a88fee7b6f81f2494"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.IsOverlayGraphicsUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.IsOverlayGraphicsUsed"}]}`
-->

### Property FilePrefix

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7c088e944206e549d7cb20a6a5064299"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.FilePrefix
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.FilePrefix"}]}`
-->

### Property MonteCarloStatistic

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a6b390eb0e26b02402f1d4fdc773bba41"></a>

![][public]

**Definition**:


```csharp
MonteCarloStatistics ZOSAPI.Tools.Tolerancing.ITolerancing.MonteCarloStatistic
```


**Return type**: [MonteCarloStatistics](namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1abda9c3ae2bb70a97a0df2a6ab66f2531)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.MonteCarloStatistic"}]}`
-->

### Property MonteCarloStatisticIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a22c10c5d5eefe2c6f70d830368e969bb"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.MonteCarloStatisticIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.MonteCarloStatisticIndex"}]}`
-->

### Property NumberOfMonteCarloStatistics

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a2e523021ea5d4b365ad201aa53d0a06c"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfMonteCarloStatistics
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfMonteCarloStatistics"}]}`
-->

### Property IsShowDescriptionsUsed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ae466cadfb8b47791f43096a9050c3ed3"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.IsShowDescriptionsUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.IsShowDescriptionsUsed"}]}`
-->

### Property IsShowCompensatorsUsed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a09510aba05b9d82b1bfa90b5b0f13cf0"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.IsShowCompensatorsUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.IsShowCompensatorsUsed"}]}`
-->

### Property IsHideAllButWorstUsed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a2f6f4a59366a82cff6ff77336491c1c1"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.IsHideAllButWorstUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.IsHideAllButWorstUsed"}]}`
-->

### Property OutputFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a24dae13a4434d7dd0097999b91b63203"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.OutputFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.OutputFile"}]}`
-->

### Property DisplayShowWorst

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ab57f0e6a150245c0ddfa0540461b3145"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.DisplayShowWorst
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.DisplayShowWorst"}]}`
-->

### Property DisplayShowWorstIndex

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a01c5a62f0622d9820286d3ea8784faf4"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.DisplayShowWorstIndex
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.DisplayShowWorstIndex"}]}`
-->

### Property NumberOfDisplayShowWorsts

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ad832b0368d59a17ecf95ee5ee1204a93"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfDisplayShowWorsts
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.NumberOfDisplayShowWorsts"}]}`
-->

### Property UseDataRetention

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5114a6cd280bbcd356d6dab8aa1b48ff"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.UseDataRetention
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.UseDataRetention"}]}`
-->

### Property OpenDataViewer

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a50f13f4ce7a6b0d785908e4c02be3d7a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.OpenDataViewer
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.OpenDataViewer"}]}`
-->

### Property SaveTolDataFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a9cf88094e6416a7ffddb3045b375462f"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.SaveTolDataFile
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SaveTolDataFile"}]}`
-->

### Property TolDataFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a14544da6e1b6d4a030ac3dd40740e3dd"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.TolDataFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.TolDataFile"}]}`
-->

### Property IsHPCEnabled

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1af8cfac21b758fb05a2027ea1cd27f185"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.IsHPCEnabled
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.IsHPCEnabled"}]}`
-->

### Property HPCEstimatedTimeS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a2489b8c58f13b3fe76091d9793c55de8"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.ITolerancing.HPCEstimatedTimeS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.HPCEstimatedTimeS"}]}`
-->

### Property HPCRemainingTimeS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1aeb62050aa1606c0bfa3a4b233f8efae7"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.ITolerancing.HPCRemainingTimeS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.HPCRemainingTimeS"}]}`
-->

### Property HPCTimeToStartS

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ad0a2a5530264aa134ecd613b9ab2b492"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Tolerancing.ITolerancing.HPCTimeToStartS
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.HPCTimeToStartS"}]}`
-->

### Property HPCQueuePosition

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a44f2983852be6bb025e072205825ad7a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Tolerancing.ITolerancing.HPCQueuePosition
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.HPCQueuePosition"}]}`
-->

### Property HPCState

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5997a1943f3163240a24463d931a5d86"></a>

![][public]

**Definition**:


```csharp
HPCRunState ZOSAPI.Tools.Tolerancing.ITolerancing.HPCState
```


**Return type**: [HPCRunState](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1a3680696b4d19238a953f6d7d3ff2473e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.HPCState"}]}`
-->

### Property HPCHasTimeEstimate

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5c4bc7faf68b89cf63da2e842bdfdd95"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.HPCHasTimeEstimate
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.HPCHasTimeEstimate"}]}`
-->

### Property BestWorstOutputFolder

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ab349d3110893125eb2d96173edfccb02"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.BestWorstOutputFolder
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.BestWorstOutputFolder"}]}`
-->

## Public functions

### Function Save

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ada255b56926d143f5ec5ae9279345b9d"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.Save(string filename)
```


**Parameters**:

* string **filename**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.Save"}]}`
-->

### Function Load

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a23a0e9a6618d83109e24596ec597ee80"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.Load(string filename)
```


**Parameters**:

* string **filename**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.Load"}]}`
-->

### Function Reset

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a1c82732e2a8e31cf42b827e906dd608e"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.Reset()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.Reset"}]}`
-->

### Function GetSetupModeAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ab295a46780e3a3e29f8638f7b18929d8"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupModeAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupModeAt"}]}`
-->

### Function GetSetupPolynomialAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1af6a8463830887c6ba02c201b369a033d"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupPolynomialAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupPolynomialAt"}]}`
-->

### Function GetSetupCacheAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a1a910fedee11cc809d3a30ee5f5006f8"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupCacheAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupCacheAt"}]}`
-->

### Function GetSetupChangeAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a3f6041344275f362e1c0f543af55731a"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupChangeAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupChangeAt"}]}`
-->

### Function GetSetupCoreAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0616a414194636e4594cb716de1721f8"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupCoreAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetSetupCoreAt"}]}`
-->

### Function GetCriterionAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a0a81e41f68dca96635f75f7096155443"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionAt"}]}`
-->

### Function GetCriterionSampleAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ac80fbc230c5d973b1eb40a93339c0b15"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionSampleAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionSampleAt"}]}`
-->

### Function GetCriterionCompAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1acc235ec610d07571a31b1ec3cb66814e"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionCompAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionCompAt"}]}`
-->

### Function GetCriterionConfigurationAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1af1299ba2809bbc8ace64f4a1bc07b6e0"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionConfigurationAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionConfigurationAt"}]}`
-->

### Function GetCriterionFieldAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a7bfa399c17a4f50601b0554d460e75aa"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionFieldAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionFieldAt"}]}`
-->

### Function GetCriterionCycleAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1abe341167e4be46436389861b72305d49"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionCycleAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionCycleAt"}]}`
-->

### Function GetCriterionScriptAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5295c2b2bc1bd377876b8001c34682e1"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionScriptAt(int idx)
```


Gets the name of the criterion script at the specified index.

**Parameters**:

* **idx**: An index (<code>0</code> to <code>NumberOfCriterionScripts-1)</code>.


**Returns**:

The name of the script at index _idx_ .


**Exceptions**:

* **ArgumentOutOfRangeException**: Thrown if _idx_  is < 0 or >= NumberOfCriterionScripts.


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetCriterionScriptAt"}]}`
-->

### Function GetMonteCarloStatisticAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1adfcb6b78100fd38756146ae8f77c17cd"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetMonteCarloStatisticAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetMonteCarloStatisticAt"}]}`
-->

### Function GetDisplayShowWorstAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a5551777c7889ba054dbd2bc64aeab13a"></a>

![][public]


```csharp
string ZOSAPI.Tools.Tolerancing.ITolerancing.GetDisplayShowWorstAt(int idx)
```


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.GetDisplayShowWorstAt"}]}`
-->

### Function SetPartialMCTMode

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1a8791150d43f1bf6d4cd77b5ae4a80295"></a>

![][public]


```csharp
void ZOSAPI.Tools.Tolerancing.ITolerancing.SetPartialMCTMode()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.SetPartialMCTMode"}]}`
-->

### Function EstimateHPCTime

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_1ada7f13841b4598fd265966295d44e937"></a>

![][public]


```csharp
bool ZOSAPI.Tools.Tolerancing.ITolerancing.EstimateHPCTime()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.ITolerancing.EstimateHPCTime"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)