# Interface ZOSAPI::Analysis::IA_

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__"></a>

![][C#]
![][public]

**Definition**:

Base interface for all analysis windows. This interface can be accessed via the I_Analyses interface.

Usage (see [Example 15](../apiexamples/example_15.md) for a full sample)


C# 
```csharp
            //Open a shaded model
            IA_ analysis = TheSystem.Analyses.New_Analysis(AnalysisIDM.ShadedModel);
            analysis.Terminate();
            analysis.WaitForCompletion();
            IAS_ analysisSettings = analysis.GetSettings();
            string cfgFile = System.IO.Path.GetTempFileName();
            // Save the current settings to the temp file
            analysisSettings.SaveTo(cfgFile);
            // make your modifications to it
            //MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTX", "90");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTY", "0");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTZ", "0");
            // now load in the modified settings
            analysisSettings.LoadFrom(cfgFile);
            // If you want to overwrite your default CFG, copy it after you are done modifying the settings:
            //string CFG_fullname = System.Environment.GetEnvironmentVariable("USERPROFILE") + "\\Documents\\Zemax\\Configs\\Configs\\POP.CFG";
            //System.IO.File.Copy(cfgFile, CFG_fullname, true);
            // We don't need the temp file any more, so delete it
            System.IO.File.Delete(cfgFile);
            // Run the analysis with the new settings
            analysis.ApplyAndWaitForCompletion();
```
 C++ 
```csharp
    // Open a shaded model
    IA_Ptr analysis = TheSystem->Analyses->New_Analysis(AnalysisIDM::AnalysisIDM_ShadedModel);
    analysis->Terminate();
    analysis->WaitForCompletion();
    IAS_Ptr settings = analysis->GetSettings();
    //need to use - #pragma warning(disable:4996)
    char* pUserprofile = getenv("Temp");
    _bstr_t cfgFile = _bstr_t(pUserprofile) + "\\sha.cfg";
    // Save the current settings to the temp file
    settings->SaveTo(cfgFile);
    // make your modifications to it
    // MODIFYSETTINGS are defined in the ZPL help files : The Programming Tab > About the ZPL > Keywords
    settings->ModifySettings(cfgFile, "SHA_ROTX", "90");
    settings->ModifySettings(cfgFile, "SHA_ROTY", "0");
    settings->ModifySettings(cfgFile, "SHA_ROTZ", "0");
    // now load in the modified settings
    settings->LoadFrom(cfgFile);
    // If you want to overwrite your default CFG, copy it after you are done modifying the settings :
    //_bstr_t CFG_fullname = _bstr_t(getenv("USERPROFILE")) + "\\Documents\\Zemax\\Configs\\POP.CFG";
    // copyfile(cfgFile, CFG_fullname) // generic psuedo code
    // We don't need the temp file any more, so delete it
    std::remove(cfgFile);
    // Run the analysis with the new settings
    analysis->ApplyAndWaitForCompletion();
```
 Matlab 
```csharp
    %Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.ShadedModel);
    analysis.Terminate();
    analysis.WaitForCompletion();
    analysisSettings = analysis.GetSettings();
    cfgFile = System.IO.Path.GetTempFileName();
    % Save the current settings to the temp file
    analysisSettings.SaveTo(cfgFile);
    % make your modifications to it
    %MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTX', '90');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTY', '0');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTZ', '0');
    % now load in the modified settings
    analysisSettings.LoadFrom(cfgFile);
    % If you want to overwrite your default CFG, copy it after you are done modifying the settings:
    %string CFG_fullname = System.Environment.GetEnvironmentVariable("USERPROFILE") + "\\Configs\\POP.CFG";
    %System.IO.File.Copy(cfgFile, CFG_fullname, true);
    % We don't need the temp file any more, so delete it
    System.IO.File.Delete(cfgFile);
    % Run the analysis with the new settings
    analysis.ApplyAndWaitForCompletion();
```
 Python 
```csharp
    # Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.ShadedModel)
    analysis.Terminate()
    analysis.WaitForCompletion()
    analysisSettings = analysis.GetSettings()
    cfgFile = os.environ.get('Temp') + '\\sha.cfg'
    # Save the current settings to the temp file
    analysisSettings.SaveTo(cfgFile)
    # make your modifications to it
    # MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTX', '90')
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTY', '0')
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTZ', '0')
    # now load in the modified settings
    analysisSettings.LoadFrom(cfgFile)
    # If you want to overwrite your default CFG, copy it after you are done modifying the settings:
    # CFG_fullname = os.environ.get('USERPROFILE') + '\\Documents\\Zemax\\Configs\\POP.CFG'
    # copyfile(cfgFile, CFG_fullname)
    # We don't need the temp file any more, so delete it
    if os.path.exists(cfgFile):
        os.remove(cfgFile)
    # Run the analysis with the new settings
    analysis.ApplyAndWaitForCompletion()
```

## Members

* [AnalysisType](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1aa5ccb96c9ccafd4d63974858eb150ec4)
* [Apply](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a594dbc69e6e0dc6abe0788e05c0625e1)
* [ApplyAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1aff285af72f196b9c4915c531ff9873a4)
* [Close](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1ac90e99f359e260ded477194f16465d77)
* [GetAnalysisName](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a07afa6a01b14033c0c07c90f3cc582ae)
* [GetResults](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a4c6f286eaffe67e97984cf1f91cc5cef)
* [GetSettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1af82c93423d06452642e5cb31203cc109)
* [HasAnalysisSpecificSettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a96db558bda38b70d914811e7fd652c8f)
* [IsRunning](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a3e7bf10bc3c834c9fd2b7df459fdf6f0)
* [Release](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a00105beb2487c03cbf6615a33071680a)
* [StatusMessages](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1aaad3a530e0ff2f372ce583b50df87362)
* [Terminate](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a764ca87cbb1df1a48d2c6353538094aa)
* [Title](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1ac171cfa0fe0ffe86771e2762ece3249e)
* [ToFile](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1ab137ee351d3a097e9162fd588c53a72e)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a8ef153c1ce41e66e3352e717905bf543)

## Properties

### Property Title

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1ac171cfa0fe0ffe86771e2762ece3249e"></a>

![][public]

**Definition**:


```csharp
String ZOSAPI.Analysis.IA_.Title
```


**Return type**: String

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.Title"}]}`
-->

### Property GetAnalysisName

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a07afa6a01b14033c0c07c90f3cc582ae"></a>

![][public]

**Definition**:


```csharp
String ZOSAPI.Analysis.IA_.GetAnalysisName
```


**Return type**: String

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.GetAnalysisName"}]}`
-->

### Property AnalysisType

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1aa5ccb96c9ccafd4d63974858eb150ec4"></a>

![][public]

**Definition**:


```csharp
AnalysisIDM ZOSAPI.Analysis.IA_.AnalysisType
```


**Return type**: [AnalysisIDM](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.AnalysisType"}]}`
-->

### Property StatusMessages

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1aaad3a530e0ff2f372ce583b50df87362"></a>

![][public]

**Definition**:


```csharp
IMessages ZOSAPI.Analysis.IA_.StatusMessages
```


**Return type**: [IMessages](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_messages.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_messages)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.StatusMessages"}]}`
-->

### Property HasAnalysisSpecificSettings

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a96db558bda38b70d914811e7fd652c8f"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.IA_.HasAnalysisSpecificSettings
```


Gets a value indicating whether this instance has a fully-implemented settings interface available. If <code>false</code>, the analysis settings can only be changed via [IAS\_.ModifySettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a0bd90efa9aecf2f0f3dc7f8e9ad6f309).

Usage (see [Example 11](../apiexamples/example_11.md) for a full sample)


C# 
```csharp
            // Open Spot Diagram to See Result!
            IA_ newSpot = TheSystem.Analyses.New_StandardSpot();
            Console.WriteLine("Spot has analysis specific settings? " + newSpot.HasAnalysisSpecificSettings.ToString());  // True; no ModifySettings
            IAS_Spot spotSet = newSpot.GetSettings() as IAS_Spot;
            spotSet.RayDensity = 15;
            newSpot.ApplyAndWaitForCompletion();
```
 C++ 
```csharp
    // Open Spot Diagram to See Result!
    IA_Ptr newSpot = TheSystem->Analyses->New_StandardSpot();
    cout << "Spot has analysis specific settings? " << newSpot->HasAnalysisSpecificSettings << endl;  // True; no ModifySettings
    IAS_SpotPtr spotSet = newSpot->GetSettings();
    spotSet->RayDensity = 15;
    newSpot->ApplyAndWaitForCompletion();
```
 Matlab 
```csharp
    % Open Spot Diagram to See Result!
    newSpot = TheSystem.Analyses.New_StandardSpot();
    fprintf('Spot has analysis specific settings? %i\n', newSpot.HasAnalysisSpecificSettings); % True; no ModifySettings
    %Console.WriteLine("Spot has analysis specific settings? " + newSpot.HasAnalysisSpecificSettings.ToString());  // 
    spotSet = newSpot.GetSettings();
    spotSet.RayDensity = 15;
    newSpot.ApplyAndWaitForCompletion();
```
 Python 
```csharp
    # Open Spot Diagram to See Result!
    newSpot = TheSystem.Analyses.New_StandardSpot()
    print("Spot has analysis specific settings? ", newSpot.HasAnalysisSpecificSettings)  # True; no ModifySettings
    newSettings = newSpot.GetSettings()
    newSettings.RayDensity = 15
    newSpot.ApplyAndWaitForCompletion()
```
 


<code>true</code> if this instance has analysis specific settings; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.HasAnalysisSpecificSettings"}]}`
-->

## Public functions

### Function GetSettings

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1af82c93423d06452642e5cb31203cc109"></a>

![][public]


```csharp
IAS_ ZOSAPI.Analysis.IA_.GetSettings()
```


Gets the settings for the current analysis.

Usage (see [Example 17](../apiexamples/example_17.md) for a full sample)


C# 
```csharp
            //Open a shaded model
            IA_ analysis = TheSystem.Analyses.New_Analysis(AnalysisIDM.NSCShadedModel);
            analysis.Terminate();
            analysis.WaitForCompletion();
            IAS_ analysisSettings = analysis.GetSettings();
            string cfgFile = System.IO.Path.GetTempFileName();
            // Save the current settings to the temp file
            analysisSettings.SaveTo(cfgFile);
            // make your modifications to it
            //MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTX", "20");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTY", "-20");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTZ", "30");
            // now load in the modified settings
            analysisSettings.LoadFrom(cfgFile);
            // If you want to overwrite your default CFG, copy it after you are done modifying the settings:
            //string CFG_fullname = "\\zmedc02\\users\\sandrine.auriol\\Documents\\Zemax\\Configs\\POP.CFG";
            //System.IO.File.Copy(cfgFile, CFG_fullname, true);
            // We don't need the temp file any more, so delete it
            System.IO.File.Delete(cfgFile);
            // Run the analysis with the new settings
            analysis.ApplyAndWaitForCompletion();
```
 C++ 
```csharp
    //Open a shaded model
    IA_Ptr analysis = TheSystem->Analyses->New_Analysis(AnalysisIDM_NSCShadedModel);
    analysis->Terminate();
    analysis->WaitForCompletion();
    IAS_Ptr analysisSettings = analysis->GetSettings();
    char cfgFile[L_tmpnam_s];
    tmpnam_s(cfgFile, L_tmpnam_s);
    // Save the current settings to the temp file
    analysisSettings->SaveTo(cfgFile);
    // make your modifications to it
    // MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings->ModifySettings(cfgFile, "SHA_ROTX", "20");
    analysisSettings->ModifySettings(cfgFile, "SHA_ROTY", "-20");
    analysisSettings->ModifySettings(cfgFile, "SHA_ROTZ", "30");
    // now load in the modified settings
    analysisSettings->LoadFrom(cfgFile);
    // We don't need the temp file any more, so delete it
    remove(cfgFile);
    // Run the analysis with the new settings
    analysis->ApplyAndWaitForCompletion();
```
 Matlab 
```csharp
    % Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.NSCShadedModel);
    analysis.WaitForCompletion();
    analysisSettings = analysis.GetSettings();
    cfgFile = char(System.String.Concat(SamplesFolder, '\API\Matlab\e17_NSC_BulkScatter.cfg'));
    analysisSettings.SaveTo(cfgFile);  % Save current settings to a cfg file
    % MODIFYSETTINGS are defined in ZPL help files: The Programming Tab > About the ZPL > Keywords
    % need to manually turn on SCATTERING in shaded model to see bulk scattering
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTX', '20');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTY', '-20');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTZ', '30');
    analysisSettings.LoadFrom(cfgFile);  % Load in the newly modified settings
    % If you want to overwrite your default CFG, save over it with newly modified CFG file:
    %  CFG_fullname = System.String.Concat(getenv('Temp'), '\Documents\Zemax\Configs\LSN.CFG');
    %  copyfile(char(cfgFile), char(CFG_fullname));
    analysis.ApplyAndWaitForCompletion();  % Run analysis
```
 Python 
```csharp
    # Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.NSCShadedModel)
    analysis.WaitForCompletion()
    analysisSettings = analysis.GetSettings()
    cfgFile = SamplesFolder + "\\API\\Python\\e17_NSC_BulkScatter.cfg"
    analysisSettings.SaveTo(cfgFile)  # Save current settings to a cfg file
    # MODIFYSETTINGS are defined in ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings.ModifySettings(cfgFile, "SHA_ROTX", "20")
    analysisSettings.ModifySettings(cfgFile, "SHA_ROTY", "-20")
    analysisSettings.ModifySettings(cfgFile, "SHA_ROTZ", "30")
    analysisSettings.LoadFrom(cfgFile)  # Load in the newly modified settings
    # If you want to overwrite your default CFG, save over it with newly modified CFG file:
    #  CFG_fullname = "C:\\Users\\zachary.Derocher\\Documents\\Zemax\\Configs\\POP.CFG"
    #  import shutil
    #  shutil.copy(cfgFile, CFG_fullname)
    analysis.ApplyAndWaitForCompletion()  # Run analysis
```
 


**Returns**:


**Return type**: [IAS\_](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.GetSettings"}]}`
-->

### Function GetResults

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a4c6f286eaffe67e97984cf1f91cc5cef"></a>

![][public]


```csharp
IAR_ ZOSAPI.Analysis.IA_.GetResults()
```


Gets the result data (if available) for the current analysis.

**Returns**:


**Return type**: [IAR\_](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.GetResults"}]}`
-->

### Function IsRunning

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a3e7bf10bc3c834c9fd2b7df459fdf6f0"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.IA_.IsRunning()
```


Determines whether this analysis is currently updating.

**Returns**:


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.IsRunning"}]}`
-->

### Function Apply

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a594dbc69e6e0dc6abe0788e05c0625e1"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.IA_.Apply()
```


Use the current settings values to re-run the analysis.

**Returns**:


**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.Apply"}]}`
-->

### Function ApplyAndWaitForCompletion

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1aff285af72f196b9c4915c531ff9873a4"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.IA_.ApplyAndWaitForCompletion()
```


Re-runs the analysis with the current settings and waits for it to finish calculating.

Usage (see [Example 11](../apiexamples/example_11.md) for a full sample)


C# 
```csharp
            // Open Spot Diagram to See Result!
            IA_ newSpot = TheSystem.Analyses.New_StandardSpot();
            Console.WriteLine("Spot has analysis specific settings? " + newSpot.HasAnalysisSpecificSettings.ToString());  // True; no ModifySettings
            IAS_Spot spotSet = newSpot.GetSettings() as IAS_Spot;
            spotSet.RayDensity = 15;
            newSpot.ApplyAndWaitForCompletion();
```
 C++ 
```csharp
    // Open Spot Diagram to See Result!
    IA_Ptr newSpot = TheSystem->Analyses->New_StandardSpot();
    cout << "Spot has analysis specific settings? " << newSpot->HasAnalysisSpecificSettings << endl;  // True; no ModifySettings
    IAS_SpotPtr spotSet = newSpot->GetSettings();
    spotSet->RayDensity = 15;
    newSpot->ApplyAndWaitForCompletion();
```
 Matlab 
```csharp
    % Open Spot Diagram to See Result!
    newSpot = TheSystem.Analyses.New_StandardSpot();
    fprintf('Spot has analysis specific settings? %i\n', newSpot.HasAnalysisSpecificSettings); % True; no ModifySettings
    %Console.WriteLine("Spot has analysis specific settings? " + newSpot.HasAnalysisSpecificSettings.ToString());  // 
    spotSet = newSpot.GetSettings();
    spotSet.RayDensity = 15;
    newSpot.ApplyAndWaitForCompletion();
```
 Python 
```csharp
    # Open Spot Diagram to See Result!
    newSpot = TheSystem.Analyses.New_StandardSpot()
    print("Spot has analysis specific settings? ", newSpot.HasAnalysisSpecificSettings)  # True; no ModifySettings
    newSettings = newSpot.GetSettings()
    newSettings.RayDensity = 15
    newSpot.ApplyAndWaitForCompletion()
```
 


**Returns**:


**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.ApplyAndWaitForCompletion"}]}`
-->

### Function Terminate

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a764ca87cbb1df1a48d2c6353538094aa"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.IA_.Terminate()
```


Attempt to cancel the currently running the analysis.

**Returns**:


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.Terminate"}]}`
-->

### Function WaitForCompletion

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a8ef153c1ce41e66e3352e717905bf543"></a>

![][public]


```csharp
void ZOSAPI.Analysis.IA_.WaitForCompletion()
```


Waits for the current analysis to finish running (if applicable).


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.WaitForCompletion"}]}`
-->

### Function Close

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1ac90e99f359e260ded477194f16465d77"></a>

![][public]


```csharp
void ZOSAPI.Analysis.IA_.Close()
```


Closes this analysis; note that it will be removed from the system permanently.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.Close"}]}`
-->

### Function Release

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1a00105beb2487c03cbf6615a33071680a"></a>

![][public]


```csharp
void ZOSAPI.Analysis.IA_.Release()
```


Disconnect this object from the interface, freeing up any memory in use. Note that unlike Close, this method does not remove the analysis from the current system.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.Release"}]}`
-->

### Function ToFile

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a___1ab137ee351d3a097e9162fd588c53a72e"></a>

![][public]


```csharp
void ZOSAPI.Analysis.IA_.ToFile(String Filename, bool showSettings=false, bool verify=false)
```


**Parameters**:

* String **Filename**
* bool **showSettings** = false 
* bool **verify** = false 

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IA_.ToFile"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
