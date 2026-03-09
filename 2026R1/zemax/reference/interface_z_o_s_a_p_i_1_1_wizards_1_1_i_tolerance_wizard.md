# Interface ZOSAPI::Wizards::IToleranceWizard

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard"></a>

![][C#]
![][public]

**Definition**:

Interface for the Tolerance Wizard.

Usage (see [Example 14](page_ex14.md#page_ex14) for a full sample)


C# 
```csharp
            // Set up the Tolerance Wizard and run it
            ZOSAPI.Wizards.ISEQToleranceWizard tWiz = TheSystem.TDE.SEQToleranceWizard;
            // Specify surface tolerances
            tWiz.SurfaceRadius = 0.1;
            tWiz.SurfaceThickness = 0.1;
            tWiz.SurfaceDecenterX = 0.1;
            tWiz.SurfaceDecenterY = 0.1;
            tWiz.SurfaceTiltX = 0.2;
            tWiz.SurfaceTiltY = 0.2;
            // Specify element tolerances
            tWiz.ElementDecenterX = 0.1;
            tWiz.ElementDecenterY = 0.1;
            tWiz.ElementTiltXDegrees = 0.2;
            tWiz.ElementTiltYDegrees = 0.2;
            // Specify tolerances not to be used
            tWiz.IsSurfaceSandAIrregularityUsed = false;
            tWiz.IsIndexUsed = false;
            tWiz.IsIndexAbbePercentageUsed = false;
            // Select OK
            tWiz.OK();
```
 C++ 
```csharp
    // Set up the Tolerance Wizard and run it
    // Need to make sure you have x64 set to the platform, otherwise COM will throw an error
    ZOSAPI_Interfaces::ISEQToleranceWizardPtr tWiz = TheSystem->TDE->SEQToleranceWizard;
    // Specify surface tolerances
    tWiz->ToleranceSettings->SurfaceRadius = 0.1;
    tWiz->ToleranceSettings->SurfaceThickness = 0.1;
    tWiz->ToleranceSettings->SurfaceDecenterX = 0.1;
    tWiz->ToleranceSettings->SurfaceDecenterY = 0.1;
    tWiz->ToleranceSettings->SurfaceTiltX = 0.2;
    tWiz->ToleranceSettings->SurfaceTiltY = 0.2;
    // Specify element tolerances
    tWiz->ToleranceSettings->ElementDecenterX = 0.1;
    tWiz->ToleranceSettings->ElementDecenterY = 0.1;
    tWiz->ToleranceSettings->ElementTiltXDegrees = 0.2;
    tWiz->ToleranceSettings->ElementTiltYDegrees = 0.2;
    // Specify tolerances not to be used
    tWiz->ToleranceSettings->IsSurfaceSandAIrregularityUsed = false;
    tWiz->ToleranceSettings->IsIndexUsed = false;
    tWiz->ToleranceSettings->IsIndexAbbePercentageUsed = false;
    // Select OK
    tWiz->ToleranceSettings->CommonSettings->OK();
```
 Matlab 
```csharp
    % Set up the Tolerance Wizard and run it
    tWiz = TheSystem.TDE.SEQToleranceWizard;
    % Specify surface tolerances
    tWiz.SurfaceRadius = 0.1;
    tWiz.SurfaceThickness = 0.1;
    tWiz.SurfaceDecenterX = 0.1;
    tWiz.SurfaceDecenterY = 0.1;
    tWiz.SurfaceTiltX = 0.2;
    tWiz.SurfaceTiltY = 0.2;
    % Specify element tolerances
    tWiz.ElementDecenterX = 0.1;
    tWiz.ElementDecenterY = 0.1;
    tWiz.ElementTiltXDegrees = 0.2;
    tWiz.ElementTiltYDegrees = 0.2;
    % Specify tolerances not to be used
    tWiz.IsSurfaceSandAIrregularityUsed = false;
    tWiz.IsIndexUsed = false;
    tWiz.IsIndexAbbePercentageUsed = false;
    % Select OK
    tWiz.OK();
```
 Python 
```csharp
    # Set up Tolerance Wizard and run it
    tWiz = TheSystem.TDE.SEQToleranceWizard
    
    # Specify surface tolerances
    tWiz.SurfaceRadius = 0.1
    tWiz.SurfaceThickness = 0.1
    tWiz.SurfaceDecenterX = 0.1
    tWiz.SurfaceDecenterY = 0.1
    tWiz.SurfaceTiltX = 0.2
    tWiz.SurfaceTiltY = 0.2
    # Specify element tolerances
    tWiz.ElementDecenterX = 0.1
    tWiz.ElementDecenterY = 0.1
    tWiz.ElementTiltXDegrees = 0.2
    tWiz.ElementTiltYDegrees = 0.2
    # Specify tolerances not to be used
    tWiz.IsSurfaceSandAIrregularityUsed = False
    tWiz.IsIndexUsed = False
    tWiz.IsIndexAbbePercentageUsed = False
    tWiz.OK()
```

**Inherits from**:

* [ZOSAPI.Wizards.IWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard)

**Inherited by**:

* [ZOSAPI.Wizards.INSCToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_tolerance_wizard)
* [ZOSAPI.Wizards.ISEQToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_tolerance_wizard)

## Members

* [Apply](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1ac93e0ac86221c90cf749832e6aa0167e)
* [CommonSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aaf7b57dd315cc96340a736f7b54cfadb)
* [ElementDecenterX](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a3b0b14e86f8862f720020592cf1f9277)
* [ElementDecenterY](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a54c9bf9dfa7c33bf36e50b100f99c1fe)
* [ElementTiltXDegrees](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a602d0eaa28e420c0b62cf01668477976)
* [ElementTiltYDegrees](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a6d39a1d7351b2518350a874973324b4e)
* [Index](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab87c906d2f305acf66746f9f6e53e9b4)
* [IndexAbbePercentage](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a480de9119b22770bd0387a7a858a9959)
* [Initialize](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a5fabc5be6af6f50a242960cd29131a96)
* [IsElementDecenterXUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac129e1ef928b61cf8da42474715d0105)
* [IsElementDecenterYUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aebbc1ebf5b4f51e005e418464aa885df)
* [IsElementTiltXUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a1057811427feaa0a4fa476e7ac61fc7e)
* [IsElementTiltYUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a0fcc0549179b0c2cb7d6d24a8d31cd67)
* [IsFocusCompensationUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a2089f86e8d2a8f2df7ac2b560107a2f4)
* [IsIndexAbbePercentageUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ae9710a0e7af1900e0be5659a2d170ae6)
* [IsIndexUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aeb203d207024ea0737c39e4d45bde922)
* [IsSEQToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1af039e7c211cb0c224d7f34aa123cd826)
* [IsSurfaceDecenterXUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a0387b2bfaf526b7f4b2835d291d200ac)
* [IsSurfaceDecenterYUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a543fcae3fe79f4874a28a4ba25b955b2)
* [IsSurfaceRadiusUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a8c1a4a852f5e34af08b971153af9e1ec)
* [IsSurfaceSandAIrregularityUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ae39fb51d28ad5040b17506a8d4a1385a)
* [IsSurfaceThicknessUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a46fc122c432f40e3b5c892952ce5ef58)
* [IsSurfaceTiltXUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab563909b8af3a0d37853c88b7fa78894)
* [IsSurfaceTiltYUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a05b2c68a3a95a2c6ae0975870c083e87)
* [IsSurfaceZernikeIrregularityUsed](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac8703bbc654fd0f9a7118435d422b5e3)
* [LoadSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a3afc193985dfc928587494017e56e3a9)
* [OK](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a28e7e9235278fc9466072bada981041f)
* [ResetSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a0a958c3acdd9b52817994ae24e504a24)
* [SaveSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a3dea643798407dc67f41aeb26a11fd8a)
* [SelectTolerancePreset](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a0ea4c6dbd682470ad52320a747d369dd)
* [StartAt](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aa4053654a20d41003097c5f081e8e493)
* [StartAtSurface](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a2d5734e32332c86e498af2bb5db89300)
* [StopAtSurface](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac741105ef1d20eaef32761ef169dcf00)
* [SurfaceDecenterX](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a380a5671ee890a35b78e8f324d1e49f8)
* [SurfaceDecenterY](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ad2e07bfde8860fc6b9fa79219b2dc127)
* [SurfaceRadius](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aaad7926c40f07ef446a7eb73132019c8)
* [SurfaceRadiusFringes](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aab056092ee31d0cf9fcea93763282e7f)
* [SurfaceRadiusPercent](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a1ec905a61610d5b76cd4590ad6575a5c)
* [SurfaceRadiusUnitType](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab69e0c831ce05a4a0032a58663e93964)
* [SurfaceSandAIrregularityFringes](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ad8105b36f5683bf72af5d15db0abcf4c)
* [SurfaceThickness](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aa258a4a79fdf439b45cbb526655b0b67)
* [SurfaceTiltX](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1afcfb192aaea0ca5dab59ebd46939619c)
* [SurfaceTiltXDegrees](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab08551ab843283e5fbbdce9ef721a96f)
* [SurfaceTiltXUnitType](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a5b05c384b3674aa8c5c897faaffdef9e)
* [SurfaceTiltY](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aefa5e081930cae41db4d506e559312ad)
* [SurfaceTiltYDegrees](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab2c9dbfcf9472053a3a5afce6b72605d)
* [SurfaceTiltYUnitType](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a7444eae168664e2773ce50b68d7163c2)
* [SurfaceZernikeIrregularityFringes](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac6a57c9fb2b90c45e146cf21cc58d407)
* [TestWavelength](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac17617414598d8813b1930034c489877)
* [Wizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a2d3034a83efbe3624e3d27d11e7f34f3)

## Properties

### Property CommonSettings

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aaf7b57dd315cc96340a736f7b54cfadb"></a>

![][public]

**Definition**:


```csharp
IWizard ZOSAPI.Wizards.IToleranceWizard.CommonSettings
```


**Return type**: [IWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.CommonSettings"}]}`
-->

### Property IsSEQToleranceWizard

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1af039e7c211cb0c224d7f34aa123cd826"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsSEQToleranceWizard
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsSEQToleranceWizard"}]}`
-->

### Property IsSurfaceRadiusUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a8c1a4a852f5e34af08b971153af9e1ec"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsSurfaceRadiusUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsSurfaceRadiusUsed"}]}`
-->

### Property IsSurfaceThicknessUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a46fc122c432f40e3b5c892952ce5ef58"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsSurfaceThicknessUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsSurfaceThicknessUsed"}]}`
-->

### Property IsSurfaceDecenterXUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a0387b2bfaf526b7f4b2835d291d200ac"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsSurfaceDecenterXUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsSurfaceDecenterXUsed"}]}`
-->

### Property IsSurfaceDecenterYUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a543fcae3fe79f4874a28a4ba25b955b2"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsSurfaceDecenterYUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsSurfaceDecenterYUsed"}]}`
-->

### Property IsSurfaceTiltXUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab563909b8af3a0d37853c88b7fa78894"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsSurfaceTiltXUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsSurfaceTiltXUsed"}]}`
-->

### Property IsSurfaceTiltYUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a05b2c68a3a95a2c6ae0975870c083e87"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsSurfaceTiltYUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsSurfaceTiltYUsed"}]}`
-->

### Property IsSurfaceSandAIrregularityUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ae39fb51d28ad5040b17506a8d4a1385a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsSurfaceSandAIrregularityUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsSurfaceSandAIrregularityUsed"}]}`
-->

### Property IsSurfaceZernikeIrregularityUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac8703bbc654fd0f9a7118435d422b5e3"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsSurfaceZernikeIrregularityUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsSurfaceZernikeIrregularityUsed"}]}`
-->

### Property IsElementDecenterXUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac129e1ef928b61cf8da42474715d0105"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsElementDecenterXUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsElementDecenterXUsed"}]}`
-->

### Property IsElementDecenterYUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aebbc1ebf5b4f51e005e418464aa885df"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsElementDecenterYUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsElementDecenterYUsed"}]}`
-->

### Property IsElementTiltXUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a1057811427feaa0a4fa476e7ac61fc7e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsElementTiltXUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsElementTiltXUsed"}]}`
-->

### Property IsElementTiltYUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a0fcc0549179b0c2cb7d6d24a8d31cd67"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsElementTiltYUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsElementTiltYUsed"}]}`
-->

### Property IsIndexUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aeb203d207024ea0737c39e4d45bde922"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsIndexUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsIndexUsed"}]}`
-->

### Property IsIndexAbbePercentageUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ae9710a0e7af1900e0be5659a2d170ae6"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsIndexAbbePercentageUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsIndexAbbePercentageUsed"}]}`
-->

### Property IsFocusCompensationUsed

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a2089f86e8d2a8f2df7ac2b560107a2f4"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Wizards.IToleranceWizard.IsFocusCompensationUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IsFocusCompensationUsed"}]}`
-->

### Property SurfaceRadiusUnitType

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab69e0c831ce05a4a0032a58663e93964"></a>

![][public]

**Definition**:


```csharp
DefaultAndFringes ZOSAPI.Wizards.IToleranceWizard.SurfaceRadiusUnitType
```


**Return type**: [DefaultAndFringes](namespace_z_o_s_a_p_i_1_1_wizards.md#namespace_z_o_s_a_p_i_1_1_wizards_1a46295afdaf6c765ca13b7965665ea6d2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceRadiusUnitType"}]}`
-->

### Property SurfaceTiltXUnitType

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a5b05c384b3674aa8c5c897faaffdef9e"></a>

![][public]

**Definition**:


```csharp
DefaultAndDegrees ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltXUnitType
```


**Return type**: [DefaultAndDegrees](namespace_z_o_s_a_p_i_1_1_wizards.md#namespace_z_o_s_a_p_i_1_1_wizards_1acbea7d4a77afeb8f7329bd8b8755151c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltXUnitType"}]}`
-->

### Property SurfaceTiltYUnitType

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a7444eae168664e2773ce50b68d7163c2"></a>

![][public]

**Definition**:


```csharp
DefaultAndDegrees ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltYUnitType
```


**Return type**: [DefaultAndDegrees](namespace_z_o_s_a_p_i_1_1_wizards.md#namespace_z_o_s_a_p_i_1_1_wizards_1acbea7d4a77afeb8f7329bd8b8755151c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltYUnitType"}]}`
-->

### Property StartAt

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aa4053654a20d41003097c5f081e8e493"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.IToleranceWizard.StartAt
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.StartAt"}]}`
-->

### Property StartAtSurface

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a2d5734e32332c86e498af2bb5db89300"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.IToleranceWizard.StartAtSurface
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.StartAtSurface"}]}`
-->

### Property StopAtSurface

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac741105ef1d20eaef32761ef169dcf00"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Wizards.IToleranceWizard.StopAtSurface
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.StopAtSurface"}]}`
-->

### Property SurfaceRadius

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aaad7926c40f07ef446a7eb73132019c8"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceRadius
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceRadius"}]}`
-->

### Property SurfaceRadiusFringes

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aab056092ee31d0cf9fcea93763282e7f"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceRadiusFringes
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceRadiusFringes"}]}`
-->

### Property SurfaceThickness

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aa258a4a79fdf439b45cbb526655b0b67"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceThickness
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceThickness"}]}`
-->

### Property SurfaceDecenterX

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a380a5671ee890a35b78e8f324d1e49f8"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceDecenterX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceDecenterX"}]}`
-->

### Property SurfaceDecenterY

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ad2e07bfde8860fc6b9fa79219b2dc127"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceDecenterY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceDecenterY"}]}`
-->

### Property SurfaceTiltX

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1afcfb192aaea0ca5dab59ebd46939619c"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltX"}]}`
-->

### Property SurfaceTiltXDegrees

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab08551ab843283e5fbbdce9ef721a96f"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltXDegrees
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltXDegrees"}]}`
-->

### Property SurfaceTiltY

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1aefa5e081930cae41db4d506e559312ad"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltY"}]}`
-->

### Property SurfaceTiltYDegrees

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab2c9dbfcf9472053a3a5afce6b72605d"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltYDegrees
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceTiltYDegrees"}]}`
-->

### Property SurfaceSandAIrregularityFringes

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ad8105b36f5683bf72af5d15db0abcf4c"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceSandAIrregularityFringes
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceSandAIrregularityFringes"}]}`
-->

### Property SurfaceZernikeIrregularityFringes

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac6a57c9fb2b90c45e146cf21cc58d407"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceZernikeIrregularityFringes
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceZernikeIrregularityFringes"}]}`
-->

### Property ElementDecenterX

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a3b0b14e86f8862f720020592cf1f9277"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.ElementDecenterX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.ElementDecenterX"}]}`
-->

### Property ElementDecenterY

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a54c9bf9dfa7c33bf36e50b100f99c1fe"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.ElementDecenterY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.ElementDecenterY"}]}`
-->

### Property ElementTiltXDegrees

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a602d0eaa28e420c0b62cf01668477976"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.ElementTiltXDegrees
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.ElementTiltXDegrees"}]}`
-->

### Property ElementTiltYDegrees

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a6d39a1d7351b2518350a874973324b4e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.ElementTiltYDegrees
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.ElementTiltYDegrees"}]}`
-->

### Property Index

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ab87c906d2f305acf66746f9f6e53e9b4"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.Index
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.Index"}]}`
-->

### Property IndexAbbePercentage

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a480de9119b22770bd0387a7a858a9959"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.IndexAbbePercentage
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.IndexAbbePercentage"}]}`
-->

### Property TestWavelength

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1ac17617414598d8813b1930034c489877"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.TestWavelength
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.TestWavelength"}]}`
-->

### Property SurfaceRadiusPercent

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a1ec905a61610d5b76cd4590ad6575a5c"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Wizards.IToleranceWizard.SurfaceRadiusPercent
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SurfaceRadiusPercent"}]}`
-->

## Public functions

### Function SelectTolerancePreset

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard_1a0ea4c6dbd682470ad52320a747d369dd"></a>

![][public]


```csharp
void ZOSAPI.Wizards.IToleranceWizard.SelectTolerancePreset(ToleranceVendor vendor, ToleranceGrade grade)
```


**Parameters**:

* [ToleranceVendor](namespace_z_o_s_a_p_i_1_1_wizards.md#namespace_z_o_s_a_p_i_1_1_wizards_1ade6abd295e7419b547427f53c99fa7e1) **vendor**
* [ToleranceGrade](namespace_z_o_s_a_p_i_1_1_wizards.md#namespace_z_o_s_a_p_i_1_1_wizards_1a7fc80092876c2ba7d4d8e85f2f87416e) **grade**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IToleranceWizard.SelectTolerancePreset"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)