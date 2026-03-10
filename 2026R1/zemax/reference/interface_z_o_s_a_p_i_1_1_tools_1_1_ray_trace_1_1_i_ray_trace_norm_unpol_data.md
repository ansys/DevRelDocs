# Interface ZOSAPI::Tools::RayTrace::IRayTraceNormUnpolData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data"></a>

![][C#]
![][public]

**Definition**:


Usage (see [Example 22](page_ex22.md#page_ex22) for a full sample)


C# 
```csharp
                    // Adding Rays to Batch, varying normalised object height hy
                    normUnPolData.ClearData();
                    int waveNumber = wave;
                    for (int i = 1; i <= ((max_rays + 1) * (max_rays + 1)); i++)
                    {
                        double px, py;
                        px = rand.NextDouble() * 2 - 1;
                        py = rand.NextDouble() * 2 - 1;
                        while ((Math.Pow(px, 2) + Math.Pow(py, 2)) > 1)
                        {
                            py = rand.NextDouble() * 2 - 1;
                        }
                        normUnPolData.AddRay(waveNumber, hx, hy_ary[field - 1], px, py, ZOSAPI.Tools.RayTrace.OPDMode.None);
                    }
```
 C++ 
```csharp
            // Adding Rays to Batch, varying normalised object height hy
            normUnPolData->ClearData();
            int waveNumber = wave;
            for (int i = 1; i <= ((max_rays + 1) * (max_rays + 1)); i++) {
                double px, py;

                px = (double)rand() / (double)RAND_MAX * 2 - 1;
                py = (double)rand() / (double)RAND_MAX * 2 - 1;
                while (px*px + py*py > 1) {
                    py = (double)rand() / (double)RAND_MAX * 2 - 1;
                }
                normUnPolData->AddRay(waveNumber, hx, hy_ary[field - 1], px, py, OPDMode::OPDMode_None);
            }
```
 Matlab 
```csharp
            % Adding Rays to Batch, varying normalised object height hy
            normUnPolData.ClearData();
            waveNumber=wave;
            for i = 1:((max_rays + 1) * (max_rays + 1))
                px = rand() * 2 - 1;py = rand() * 2 - 1;
                while (px^2 + py^2 > 1); py = rand() * 2 - 1; end;
                normUnPolData.AddRay(waveNumber, hx, hy_ary(field), px, py, ZOSAPI.Tools.RayTrace.OPDMode.None);
            end
```
 Python 
```csharp
            # Adding Rays to Batch, varying normalised object height hy
            normUnPolData.ClearData()
            waveNumber = wave
            #for i = 1:((max_rays + 1) * (max_rays + 1))
            for i in range(1, (max_rays + 1) * (max_rays + 1) + 1):

                px = np.random.random() * 2 - 1
                py = np.random.random() * 2 - 1

                while (px*px + py*py > 1):
                    py = np.random.random() * 2 - 1
                normUnPolData.AddRay(waveNumber, hx, hy_ary[field - 1], px, py, Enum.Parse(ZOSAPI.Tools.RayTrace.OPDMode, "None"))
```

## Members

* [AddRay](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a06260536d9e2cbad0326c2e376bc1e0c)
* [ClearData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a5763ea79ca85f812d79697337184df81)
* [HasResultData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a5535c1e8b6470a0bff6ccf96f226e461)
* [MaxRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a58aa1da1eab7e6ae1a86401ce4f0958a)
* [NumberOfRays](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1ab45d60e850a250e908e6513dfce1a4ba)
* [ReadNextResult](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1add6aeef85c65ae41701924e22675c9b2)
* [StartReadingResults](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a114bc11931f340726de6e1dd4c7f8aae)

## Properties

### Property NumberOfRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1ab45d60e850a250e908e6513dfce1a4ba"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.NumberOfRays
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.NumberOfRays"}]}`
-->

### Property MaxRays

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a58aa1da1eab7e6ae1a86401ce4f0958a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.MaxRays
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.MaxRays"}]}`
-->

### Property HasResultData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a5535c1e8b6470a0bff6ccf96f226e461"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.HasResultData
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.HasResultData"}]}`
-->

## Public functions

### Function ClearData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a5763ea79ca85f812d79697337184df81"></a>

![][public]


```csharp
void ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.ClearData()
```


Usage (see [Example 23](page_ex23.md#page_ex23) for a full sample)


C# 
```csharp
            // image surface number and primary wavelength
            int pwav = 0;
            for (int a = 1; a <= TheSystem.SystemData.Wavelengths.NumberOfWavelengths; a++)
            {
                if (TheSystem.SystemData.Wavelengths.GetWavelength(a).IsPrimary)
                    pwav = a;
            }

            // creates array of Y coordinate chief ray values
            double[] chief_ary = new double[max_num_field];
            for (int field = 1; field <= max_num_field; field++)
            {
                double hy = TheSystem.SystemData.Fields.GetField(field).Y / max_field;
                // gets single value without using MFE(see ZPL OPEV)
                chief_ary[field - 1] = TheSystem.MFE.GetOperandValue(ZOSAPI.Editors.MFE.MeritOperandType.REAY, nsur, pwav, 0, hy, 0, 0, 0, 0);
            }
```
 C++ 
```csharp
    // image surface number and primary wavelength
    //
    int pwav = 0;
    for (int a = 1; a <= TheSystem->SystemData->Wavelengths->NumberOfWavelengths; a++) {
        if (TheSystem->SystemData->Wavelengths->GetWavelength(a)->IsPrimary)
            pwav = a;
    }

    // creates array of Y coordinate chief ray values
    double *chief_ary = new double[max_num_field];
    for (int field = 1; field <= max_num_field; field++) {
        double hy = TheSystem->SystemData->Fields->GetField(field)->Y / max_field;
        // gets single value without using MFE(see ZPL OPEV)
        chief_ary[field - 1] = TheSystem->MFE->GetOperandValue(MeritOperandType_REAY, nsur, pwav, 0, hy, 0, 0, 0, 0);
    }
```
 Matlab 
```csharp
    % image surface number and primary wavelength
    nsur = TheSystem.LDE.NumberOfSurfaces;
    pwav = 0;
    for a = 1:TheSystem.SystemData.Wavelengths.NumberOfWavelengths
        if TheSystem.SystemData.Wavelengths.GetWavelength(a).IsPrimary == 1; pwav = a; end;
    end
    
    % creates array of Y coordinate chief ray values
    chief_ary = zeros(max_num_field);
    for field = 1:max_num_field
        if max_field == 0; hy = 1; else hy = TheSystem.SystemData.Fields.GetField(field).Y / max_field; end;
        % gets single value without using MFE (see ZPL OPEV)
        chief_ary(field) = TheSystem.MFE.GetOperandValue(ZOSAPI.Editors.MFE.MeritOperandType.REAY, nsur, pwav, 0, hy , 0, 0, 0, 0);
    end
```
 Python 
```csharp
    # image surface number and primary wavelength
    nsur = TheSystem.LDE.NumberOfSurfaces
    pwav = 0
    for a in range(1, TheSystem.SystemData.Wavelengths.NumberOfWavelengths + 1):
        if TheSystem.SystemData.Wavelengths.GetWavelength(a).IsPrimary == 1:
            pwav = a

    # creates array of Y coordinate chief ray values
    chief_ary = np.zeros(max_num_field)
    for field in range(1, max_num_field + 1):
        #hy = TheSystem.SystemData.Fields.GetField(field).Y / max_field
        hy = 1 if max_field == 0 else TheSystem.SystemData.Fields.GetField(field).Y / max_field
        # gets single value without using MFE (see ZPL OPEV)
        chief_ary[field - 1] = TheSystem.MFE.GetOperandValue(ZOSAPI.Editors.MFE.MeritOperandType.REAY, nsur, pwav, 0, hy , 0, 0, 0, 0)
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.ClearData"}]}`
-->

### Function AddRay

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a06260536d9e2cbad0326c2e376bc1e0c"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.AddRay(int waveNumber, double Hx, double Hy, double Px, double Py, OPDMode calcOPD)
```


Add a ray to be traced.

**Parameters**:

* **waveNumber**: 
* **Hx**: 
* **Hy**: 
* **Px**: 
* **Py**: 
* **calcOPD**: Specifies how the OPD should be calculated. <br/>
If set to OPDMode.None, no OPD calculation will be performed. It will return the optical path as defined in the Single Ray Trace analysis. That value can differ from other analyses at infinite conjugates. <br/>
OPDMode.Current will calculate the OPD based on this ray and the previously computed chief ray. <br/>
OPDMode.CurrentAndChief will first compute the chief ray, and the calculated the OPD for this ray. <br/>
Note that the OPD can only be calculated when tracing rays all the way to the image surface.


**Returns**:


**Parameters**:

* int **waveNumber**
* double **Hx**
* double **Hy**
* double **Px**
* double **Py**
* [OPDMode](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1ac647992eb3c5c89addc5c6f91327c5de) **calcOPD**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.AddRay"}]}`
-->

### Function StartReadingResults

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1a114bc11931f340726de6e1dd4c7f8aae"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.StartReadingResults()
```


Usage (see [Example 22](page_ex22.md#page_ex22) for a full sample)


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
                            x_ary[field - 1, wave - 1, rayNumber - 1] = double_X;
                            y_ary[field - 1, wave - 1, rayNumber - 1] = double_Y;
                            sbReport.AppendLine((field).ToString() + "\t" + (wave).ToString() + "\t" + double_X.ToString() + "\t" + double_Y.ToString());
                        }
                        success = normUnPolData.ReadNextResult(out rayNumber, out ErrorCode, out vignetteCode, out double_X, out double_Y, out double_Z, out double_L, out double_M, out double_N, out double_L2, out double_M2, out double_N2, out OPD, out Intensity);
                    }
                    sbReport.AppendLine("");
```
 C++ 
```csharp
            // Read batch raytrace and save results
            normUnPolData->StartReadingResults();
            long rayNumber, ErrorCode, vignetteCode;
            double dbl_X, dbl_Y, dbl_Z, dbl_L, dbl_M, dbl_N, dbl_L2, dbl_M2, dbl_N2, OPD, Intensity;
            bool success;

            success = normUnPolData->ReadNextResult(&rayNumber, &ErrorCode, &vignetteCode, &dbl_X, &dbl_Y, &dbl_Z, &dbl_L, &dbl_M, &dbl_N, &dbl_L2, &dbl_M2, &dbl_N2, &OPD, &Intensity);
            while (success) {
                if ((ErrorCode == 0) && (vignetteCode == 0)) {
                    x_ary[field - 1][wave - 1][rayNumber - 1] = dbl_X;
                    y_ary[field - 1][wave - 1][rayNumber - 1] = dbl_Y;
                    textfile << _bstr_t(field) + "\t" + _bstr_t(wave) + "\t" + _bstr_t(dbl_X) + "\t" + _bstr_t(dbl_Y) << endl;
                }
                success = normUnPolData->ReadNextResult(&rayNumber, &ErrorCode, &vignetteCode, &dbl_X, &dbl_Y, &dbl_Z, &dbl_L, &dbl_M, &dbl_N, &dbl_L2, &dbl_M2, &dbl_N2, &OPD, &Intensity);
            }
            textfile << "" << endl;
```
 Matlab 
```csharp
            % Read batch raytrace and display results
            normUnPolData.StartReadingResults();
            [success, rayNumber, errCode, vigCode, x, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            while success
                if ((errCode == 0 ) && (vigCode == 0))
                    x_ary(field, wave, rayNumber) = x;
                    y_ary(field, wave, rayNumber) = y;
                end
                [success, rayNumber, errCode, vigCode, x, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            end
```
 Python 
```csharp
            # Read batch raytrace and display results
            normUnPolData.StartReadingResults()
            
            # Python NET requires all arguments to be passed in as reference, so need to have placeholders
            sysInt = Int32(1)
            sysDbl = Double(1.0)
            
            output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);

            while output[0]:                                                    # success
                if ((output[2] == 0) and (output[3] == 0)):                     # ErrorCode & vignetteCode
                    x_ary[field - 1, wave - 1, output[1] - 1] = output[4]   # X
                    y_ary[field - 1, wave - 1, output[1] - 1] = output[5]   # Y
                output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.StartReadingResults"}]}`
-->

### Function ReadNextResult

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data_1add6aeef85c65ae41701924e22675c9b2"></a>

![][public]


```csharp
bool ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.ReadNextResult(out int rayNumber, out int ErrorCode, out int vignetteCode, out double X, out double Y, out double Z, out double L, out double M, out double N, out double l2, out double m2, out double n2, out double opd, out double intensity)
```


Usage (see [Example 22](page_ex22.md#page_ex22) for a full sample)


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
                            x_ary[field - 1, wave - 1, rayNumber - 1] = double_X;
                            y_ary[field - 1, wave - 1, rayNumber - 1] = double_Y;
                            sbReport.AppendLine((field).ToString() + "\t" + (wave).ToString() + "\t" + double_X.ToString() + "\t" + double_Y.ToString());
                        }
                        success = normUnPolData.ReadNextResult(out rayNumber, out ErrorCode, out vignetteCode, out double_X, out double_Y, out double_Z, out double_L, out double_M, out double_N, out double_L2, out double_M2, out double_N2, out OPD, out Intensity);
                    }
                    sbReport.AppendLine("");
```
 C++ 
```csharp
            // Read batch raytrace and save results
            normUnPolData->StartReadingResults();
            long rayNumber, ErrorCode, vignetteCode;
            double dbl_X, dbl_Y, dbl_Z, dbl_L, dbl_M, dbl_N, dbl_L2, dbl_M2, dbl_N2, OPD, Intensity;
            bool success;

            success = normUnPolData->ReadNextResult(&rayNumber, &ErrorCode, &vignetteCode, &dbl_X, &dbl_Y, &dbl_Z, &dbl_L, &dbl_M, &dbl_N, &dbl_L2, &dbl_M2, &dbl_N2, &OPD, &Intensity);
            while (success) {
                if ((ErrorCode == 0) && (vignetteCode == 0)) {
                    x_ary[field - 1][wave - 1][rayNumber - 1] = dbl_X;
                    y_ary[field - 1][wave - 1][rayNumber - 1] = dbl_Y;
                    textfile << _bstr_t(field) + "\t" + _bstr_t(wave) + "\t" + _bstr_t(dbl_X) + "\t" + _bstr_t(dbl_Y) << endl;
                }
                success = normUnPolData->ReadNextResult(&rayNumber, &ErrorCode, &vignetteCode, &dbl_X, &dbl_Y, &dbl_Z, &dbl_L, &dbl_M, &dbl_N, &dbl_L2, &dbl_M2, &dbl_N2, &OPD, &Intensity);
            }
            textfile << "" << endl;
```
 Matlab 
```csharp
            % Read batch raytrace and display results
            normUnPolData.StartReadingResults();
            [success, rayNumber, errCode, vigCode, x, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            while success
                if ((errCode == 0 ) && (vigCode == 0))
                    x_ary(field, wave, rayNumber) = x;
                    y_ary(field, wave, rayNumber) = y;
                end
                [success, rayNumber, errCode, vigCode, x, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            end
```
 Python 
```csharp
            # Read batch raytrace and display results
            normUnPolData.StartReadingResults()
            
            # Python NET requires all arguments to be passed in as reference, so need to have placeholders
            sysInt = Int32(1)
            sysDbl = Double(1.0)
            
            output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);

            while output[0]:                                                    # success
                if ((output[2] == 0) and (output[3] == 0)):                     # ErrorCode & vignetteCode
                    x_ary[field - 1, wave - 1, output[1] - 1] = output[4]   # X
                    y_ary[field - 1, wave - 1, output[1] - 1] = output[5]   # Y
                output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);
```


**Parameters**:

* out int **rayNumber**
* out int **ErrorCode**
* out int **vignetteCode**
* out double **X**
* out double **Y**
* out double **Z**
* out double **L**
* out double **M**
* out double **N**
* out double **l2**
* out double **m2**
* out double **n2**
* out double **opd**
* out double **intensity**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData.ReadNextResult"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)