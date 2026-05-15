# Namespace ZOSAPI::Tools::RayTrace

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Tools::RayTrace::IBatchRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace)
* [ZOSAPI::Tools::RayTrace::ILightningTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_lightning_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_lightning_trace)
* [ZOSAPI::Tools::RayTrace::INSCRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace)
* [ZOSAPI::Tools::RayTrace::IRayTraceDirectPolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceDirectUnpolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceNormPolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceNormUnpolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceNSCData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceNSCSourceData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_source_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_source_data)
* [ZOSAPI::Tools::RayTrace::IZRDReader](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader)
* [ZOSAPI::Tools::RayTrace::IZRDReaderResults](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader_results.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader_results)

## Enumeration types

### Enumeration type ZRDFormatType

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7ace1fd04fcbfc4a5c00a27b1945347d"></a>

![][public]

**Definition**:


```csharp
enum ZRDFormatType {
  UncompressedFullData = 0,
  CompressedBasicData = 1,
  CompressedFullData = 2
}
```


#### Enumerator UncompressedFullData

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7ace1fd04fcbfc4a5c00a27b1945347dae923907e86e037f2bd3da26361640d3a"></a>


#### Enumerator CompressedBasicData

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7ace1fd04fcbfc4a5c00a27b1945347da29ece78be9e5256075e803c7fe22dd13"></a>


#### Enumerator CompressedFullData

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7ace1fd04fcbfc4a5c00a27b1945347da175eb617cb8702e018639ca1709ae641"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.ZRDFormatType"}]}`
-->

### Enumeration type LTRaySampling

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a1bd3ea2a91ce2841c603e79af6cac143"></a>

![][public]

**Definition**:


```csharp
enum LTRaySampling {
  S_1X_Low = 0,
  S_4X,
  S_16X,
  S_64X,
  S_256X,
  S_1024X
}
```


#### Enumerator S_1X_Low

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a1bd3ea2a91ce2841c603e79af6cac143a2287710e81fa535eaad194e6bbfcf97c"></a>


#### Enumerator S_4X

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a1bd3ea2a91ce2841c603e79af6cac143a8a42ac08e88c815910040ea9d7e66134"></a>


#### Enumerator S_16X

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a1bd3ea2a91ce2841c603e79af6cac143a3d32798c6bd46b54cf9b3c2fe3a2cb6a"></a>


#### Enumerator S_64X

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a1bd3ea2a91ce2841c603e79af6cac143abf3c464a49f3902cb41ee476b7d04783"></a>


#### Enumerator S_256X

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a1bd3ea2a91ce2841c603e79af6cac143aace07c0b7af3b2b72ddbe241209d9e7d"></a>


#### Enumerator S_1024X

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a1bd3ea2a91ce2841c603e79af6cac143aa973f3ca16117a1e4dedbb1abfdc5b37"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.LTRaySampling"}]}`
-->

### Enumeration type LTEdgeSasmpling

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a56f5f78b56ea85b669b22ff98995ca46"></a>

![][public]

**Definition**:


```csharp
enum LTEdgeSasmpling {
  S_1X_Low = 0,
  S_4X,
  S_16X,
  S_64X,
  S_256X
}
```


#### Enumerator S_1X_Low

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a56f5f78b56ea85b669b22ff98995ca46a2287710e81fa535eaad194e6bbfcf97c"></a>


#### Enumerator S_4X

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a56f5f78b56ea85b669b22ff98995ca46a8a42ac08e88c815910040ea9d7e66134"></a>


#### Enumerator S_16X

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a56f5f78b56ea85b669b22ff98995ca46a3d32798c6bd46b54cf9b3c2fe3a2cb6a"></a>


#### Enumerator S_64X

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a56f5f78b56ea85b669b22ff98995ca46abf3c464a49f3902cb41ee476b7d04783"></a>


#### Enumerator S_256X

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a56f5f78b56ea85b669b22ff98995ca46aace07c0b7af3b2b72ddbe241209d9e7d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.LTEdgeSasmpling"}]}`
-->

### Enumeration type RaysType

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828"></a>

![][public]

**Definition**:


```csharp
enum RaysType {
  Real,
  Paraxial
}
```


#### Enumerator Real

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828a7f80fcc452c2f1ed2bb51b39d0864df1"></a>


#### Enumerator Paraxial

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a5d8130e495d0c24025ff4c3646f40828a4d1e0dc13a68dd70bdd172c880844a31"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.RaysType"}]}`
-->

### Enumeration type OPDMode

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1ac647992eb3c5c89addc5c6f91327c5de"></a>

![][public]

**Definition**:


```csharp
enum OPDMode {
  None,
  Current,
  CurrentAndChief
}
```


Usage (see [Example 23](../apiexamples/example_23.md) for a full sample)


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


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1ac647992eb3c5c89addc5c6f91327c5dea6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator Current

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1ac647992eb3c5c89addc5c6f91327c5dea222a267cc5778206b253be35ee3ddab5"></a>


#### Enumerator CurrentAndChief

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1ac647992eb3c5c89addc5c6f91327c5dea9d00ea392608d729aa650ac42663e3c6"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.OPDMode"}]}`
-->

### Enumeration type NSCTraceOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286"></a>

![][public]

**Definition**:


```csharp
enum NSCTraceOptions {
  None = 0,
  UsePolarization = 1,
  UseSplitting = 2,
  UseScattering = 4,
  UsePolarizationSplitting = 3,
  UsePolarizationScattering = 5,
  UseSplittingScattering = 6,
  UsePolarizationSplittingScattering = 7
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator UsePolarization

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286a7ce6cba85e43f475be21f0cf59438ed8"></a>


#### Enumerator UseSplitting

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286a1cae0df74384d42e43be1dcab9d2b031"></a>


#### Enumerator UseScattering

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286a5305aa295d9ee3603075ca1f6cd19261"></a>


#### Enumerator UsePolarizationSplitting

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286af1b3885972fd2ef001a8342eb04210a9"></a>


#### Enumerator UsePolarizationScattering

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286afc051f1894b8e771e867db41f7a76de8"></a>


#### Enumerator UseSplittingScattering

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286adb2166657fe75b481dc9253d308eb98c"></a>


#### Enumerator UsePolarizationSplittingScattering

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a7d6c193f3f4cd2f052f111097ae6c286a0998573e0a9980d9ae0640cccda7ee9d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.NSCTraceOptions"}]}`
-->

### Enumeration type RayStatus

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762eb"></a>

![][public]

**Definition**:


```csharp
enum RayStatus {
  Parent = 0x00000000,
  Terminated = 0x00000001,
  Reflected = 0x00000002,
  Transmitted = 0x00000004,
  Scattered = 0x00000008,
  Diffracted = 0x00000010,
  GhostedFrom = 0x00000020,
  DiffractedFrom = 0x00000040,
  ScatteredFrom = 0x00000080,
  RayError = 0x00000100,
  BulkScattered = 0x00000200,
  WaveShifted = 0x00000400,
  TIR = 0x00000800,
  OrdinaryRay = 0x00010000,
  ExtraordinaryRay = 0x00020000,
  WaveShiftPL = 0x00040000
}
```


#### Enumerator Parent

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762eba30269022e9d8f51beaabb52e5d0de2b7"></a>


#### Enumerator Terminated

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebafba9c4daa2dd29d1077d32d965320ac1"></a>


#### Enumerator Reflected

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebaca2e6f8056f99782f5cc1018887979d4"></a>


#### Enumerator Transmitted

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebaa5b0d6c4be9dd1b8b05c4146fce1b2e1"></a>


#### Enumerator Scattered

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762eba57c69881ddd6bfeff5388feb2401b79b"></a>


#### Enumerator Diffracted

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebaa033475951a1818f799f875d045fe074"></a>


#### Enumerator GhostedFrom

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762eba419813b3f4a340f9dcf679e20d34758c"></a>


#### Enumerator DiffractedFrom

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebaa6df47db1bb67e1c8a1b1c1215751108"></a>


#### Enumerator ScatteredFrom

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762eba19ecb308aa61f8b16d5f3f3ee96532a2"></a>


#### Enumerator RayError

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebac3b248d1242c634dfa3fb264f2045267"></a>


#### Enumerator BulkScattered

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebaf769ae6fbbfeac3710ac420ca4727408"></a>


#### Enumerator WaveShifted

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebad2c6609ecf7c2f8393f40bac695cf4a5"></a>


#### Enumerator TIR

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebacbd9ddf7f03691274dd40aca82ecc9df"></a>


#### Enumerator OrdinaryRay

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762eba352eb61a90ddf57c1736c6641a54d91d"></a>


#### Enumerator ExtraordinaryRay

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebaedbeaed5049505712f16f21ddf7ad166"></a>


#### Enumerator WaveShiftPL

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1a6c300f6f57a84075c1f63585133762ebac69499592d0b44e615820dde6d917879"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.RayTrace.RayStatus"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
