# Interface ZOSAPI::SystemData::ISDEnvironmentData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Environment Data. This interface can be accessed via the ISystemData interface.


## Members

* [AdjustIndexToEnvironment](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data_1a816c72074bd11e9b30a96a4b7b998722)
* [Pressure](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data_1aa74ee15c0404a4e64b78d0b766de1181)
* [Temperature](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data_1a601adf21134e91b56f9a39652e31f942)

## Properties

### Property AdjustIndexToEnvironment

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data_1a816c72074bd11e9b30a96a4b7b998722"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDEnvironmentData.AdjustIndexToEnvironment
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


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDEnvironmentData.AdjustIndexToEnvironment"}]}`
-->

### Property Temperature

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data_1a601adf21134e91b56f9a39652e31f942"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDEnvironmentData.Temperature
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDEnvironmentData.Temperature"}]}`
-->

### Property Pressure

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data_1aa74ee15c0404a4e64b78d0b766de1181"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDEnvironmentData.Pressure
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDEnvironmentData.Pressure"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)