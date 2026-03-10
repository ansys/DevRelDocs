# Interface ZOSAPI::Analysis::Settings::IAS_Field

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field"></a>

![][C#]
![][public]

**Definition**:


## Members

* [GetFieldNumber](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field_1a4932543dc741cd6852deb93bdac0baf5)
* [SetFieldNumber](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field_1a7b9004baddc986212ba158bbdbad3d76)
* [UseAllFields](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field_1a324cd487899583ae73400414de2de58f)

## Public functions

### Function GetFieldNumber

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field_1a4932543dc741cd6852deb93bdac0baf5"></a>

![][public]


```csharp
int ZOSAPI.Analysis.Settings.IAS_Field.GetFieldNumber()
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_Field.GetFieldNumber"}]}`
-->

### Function SetFieldNumber

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field_1a7b9004baddc986212ba158bbdbad3d76"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.Settings.IAS_Field.SetFieldNumber(int N)
```


Usage (see [Example 22](page_ex22.md#page_ex22) for a full sample)


C# 
```csharp
            // Spot Diagram Analysis Results
            ZOSAPI.Analysis.IA_ spot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.StandardSpot);
            ZOSAPI.Analysis.Settings.Spot.IAS_Spot spot_setting = (ZOSAPI.Analysis.Settings.Spot.IAS_Spot)spot.GetSettings();
            spot_setting.Field.SetFieldNumber(0);
            spot_setting.Wavelength.SetWavelengthNumber(0);
            spot_setting.ReferTo = ZOSAPI.Analysis.Settings.Spot.Reference.Centroid;
```
 C++ 
```csharp
    // Spot Diagram Analysis Results
    IA_Ptr spot = TheSystem->Analyses->New_Analysis(AnalysisIDM::AnalysisIDM_StandardSpot);
    IAS_SpotPtr spot_setting = spot->GetSettings();
    spot_setting->Field->SetFieldNumber(0);
    spot_setting->Wavelength->SetWavelengthNumber(0);
    spot_setting->ReferTo = Reference::Reference_Centroid;
```
 Matlab 
```csharp
    % Spot Diagram Analysis Results
    spot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.StandardSpot);
    spot_setting = spot.GetSettings();
    spot_setting.Field.SetFieldNumber(0);
    spot_setting.Wavelength.SetWavelengthNumber(0);
    spot_setting.ReferTo = ZOSAPI.Analysis.Settings.Spot.Reference.Centroid;
```
 Python 
```csharp
    # Spot Diagram Analysis Results
    spot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.StandardSpot)
    spot_setting = spot.GetSettings()
    spot_setting.Field.SetFieldNumber(0)
    spot_setting.Wavelength.SetWavelengthNumber(0)
    spot_setting.ReferTo = ZOSAPI.Analysis.Settings.RMS.ReferTo.Centroid
```


**Parameters**:

* int **N**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_Field.SetFieldNumber"}]}`
-->

### Function UseAllFields

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field_1a324cd487899583ae73400414de2de58f"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.Settings.IAS_Field.UseAllFields()
```


Usage (see [Example 23](page_ex23.md#page_ex23) for a full sample)


C# 
```csharp
                    // Read batch raytrace and save results
                    normUnPolData.StartReadingResults();
                    int rayNumber, ErrorCode, vignetteCode;
                    double double_X, double_Y, double_Z, double_L, double_M, double_N, double_L2, double_M2, double_N2, OPD, Intensity;
                    bool success;

                    success = normUnPolData.ReadNextResult(out rayNumber, out ErrorCode, out vignetteCode, out double_X, out double_Y, out double_Z, out double_L, out double_M, out double_N, out double_L2, out double_M2, out double_N2, out OPD, out Intensity);
                    while (success)
                    {
                        if ((ErrorCode == 0) && (vignetteCode == 0))
                        {
                            y_ary[field - 1, wave - 1, rayNumber - 1] = double_Y;
                            sbReport.AppendLine((field).ToString() + "\t" + (wave).ToString() + "\t" + py_ary[rayNumber - 1].ToString() + "\t" + ((double_Y - chief_ary[field - 1]) * 1000).ToString());
                        }
                        success = normUnPolData.ReadNextResult(out rayNumber, out ErrorCode, out vignetteCode, out double_X, out double_Y, out double_Z, out double_L, out double_M, out double_N, out double_L2, out double_M2, out double_N2, out OPD, out Intensity);
                    }
                    sbReport.AppendLine("");
```
 C++ 
```csharp
            // Read and display results
            normUnPolData->StartReadingResults();
            long rayNumber, errCode, vigCode;
            double rayX, rayY, rayZ, rayL, rayM, rayN, rayl2, raym2, rayn2, rayopd, rayintensiry;
            textfile << "Field [" << field << "] and Wave# [" << wave << "]\n";
            textfile << "Ray#   Py             REAY\n";
            VARIANT_BOOL success = normUnPolData->ReadNextResult(&rayNumber, &errCode, &vigCode, &rayX, &rayY, &rayZ, &rayL, &rayM, &rayN, &rayl2, &raym2, &rayn2, &rayopd, &rayintensiry);
            while (success) {
                if ((errCode == 0) && (vigCode == 0)) {
                    textfile << setw(7) << rayNumber << setw(15) << left << py_ary[rayNumber - 1] << setw(15) << left << ((rayY - chief_ary[field - 1]) * 1000) << "\n";
                    y_ary[field - 1][wave - 1][rayNumber - 1] = rayY;
                }
                success = normUnPolData->ReadNextResult(&rayNumber, &errCode, &vigCode, &rayX, &rayY, &rayZ, &rayL, &rayM, &rayN, &rayl2, &raym2, &rayn2, &rayopd, &rayintensiry);
            }
            textfile << endl;
```
 Matlab 
```csharp
            % Read and display results
            normUnPolData.StartReadingResults();
            [success, rayNumber, errCode, vigCode, ~, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            while success
                if ((errCode == 0 ) && (vigCode == 0))
                    y_ary(field, wave, rayNumber) = y;
                end
                [success, rayNumber, errCode, vigCode, ~, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            end 
            plot(py_ary(:), squeeze((y_ary(field, wave, :) - chief_ary(field)) * 1000), '-', 'MarkerSize', 4);
```
 Python 
```csharp
            # Read and display results
            normUnPolData.StartReadingResults()
            
            # Python NET requires all arguments to be passed in as reference, so need to have placeholders
            sysInt = Int32(1)
            sysDbl = Double(1.0)
            
            output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);
            
            while output[0]:
                if (output[2] == 0 and output[3] == 0):
                    y_ary[field, wave, output[1] - 1] = output[5]
                
                # Python NET requires all arguments to be passed in as reference, so need to have placeholders
                output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);
            plt.plot(py_ary[:], np.squeeze((y_ary[field, wave,:] - chief_ary[field - 1]) * 1000), '-', ms = 4)
```


**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.IAS_Field.UseAllFields"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)