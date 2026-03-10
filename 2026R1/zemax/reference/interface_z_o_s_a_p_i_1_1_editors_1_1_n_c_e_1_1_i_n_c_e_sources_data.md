# Interface ZOSAPI::Editors::NCE::INCESourcesData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data"></a>

![][C#]
![][public]

**Definition**:

Object properties Sources tab. This interface can be accessed via the INCERow interface.

Usage (see [Example 21](page_ex21.md#page_ex21) for a full sample)


C# 
```csharp
            // Edit source data of object 1
            // SourcesData includes all the settings in Object Properties > Sources
            Object_1.SourcesData.PrePropagation = -0.2;
            Object_1.SourcesData.ArrayType = ArrayMode.Rectangular;
            Object_1.SourcesData.ArrayNumberX = 5;
            Object_1.SourcesData.ArrayNumberY = 5;
```
 C++ 
```csharp
    // Edit source data of object 1
    // SourcesData includes all the settings in Object Properties > Sources
    Object_1->SourcesData->PrePropagation = -0.2;
    Object_1->SourcesData->ArrayType = ArrayMode_Rectangular;
    Object_1->SourcesData->ArrayNumberX = 5;
    Object_1->SourcesData->ArrayNumberY = 5;
```
 Matlab 
```csharp
    % Edit source data of object 1
    % SourcesData includes all the settings in Object Properties > Sources
    Object_1.SourcesData.PrePropagation = -0.2;
    Object_1.SourcesData.ArrayType = ZOSAPI.Editors.NCE.ArrayMode.Rectangular;
    Object_1.SourcesData.ArrayNumberX = 5;
    Object_1.SourcesData.ArrayNumberY = 5;
```
 Python 
```csharp
    # Edit source data of object 1
    # SourcesData includes all the settings in Object Properties > Sources
    Object_1.SourcesData.PrePropagation = -0.2
    Object_1.SourcesData.ArrayType = ZOSAPI.Editors.NCE.ArrayMode.Rectangular
    Object_1.SourcesData.ArrayNumberX = 5
    Object_1.SourcesData.ArrayNumberY = 5
```

## Members

* [ArrayNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a49bd1c1b9330ebf7a450bb9123386dd4)
* [ArrayNumberX](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1af6ae4e282181fa464898a697adf94a03)
* [ArrayNumberY](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a41bda402211366811db2589f62ce2da1)
* [ArrayRadius](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a5c092cc0d4a6dae3a4742ad00caee13c)
* [ArrayRings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1add259cd596c3d441e4df7a305601b11c)
* [ArraySpacing](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a7b6642db0f801acf8d78cab0c51f3954)
* [ArraySpacingX](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a271ada065dd50482cdbff23854e5350c)
* [ArraySpacingY](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a6e8f57ab10fcb16d63f30b9e5a272b11)
* [ArrayType](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1af46aff7eaad1084e92bfb0969b538aa6)
* [BulkScatter](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a262bb87fa863ce4570364f9194a729c6)
* [CoherenceLength](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1add19597303ac4d08feef1cd964e95520)
* [InitialPhaseDeg](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a33bba815aa4ccfecfe17f8986680c3f0)
* [IsSourcesAvailable](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1ac54ee1c859cccddcaa99dbdb9651cf62)
* [Jx](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a58146aff545f74860dd298f3d166b423)
* [Jy](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a68ac8785486690f357597cf86772a007)
* [PrePropagation](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1af59dae5b8a96a17b2bac714afb036fd6)
* [RandomPolarization](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a7b00e1cf120d77832d8313f36c1daaa1)
* [ReverseRays](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a946e6fc309c78e6b2833a5e2c6302dfb)
* [SamplingMethod](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a62ed37769e418f0a5fc3a855f3a5d5bf)
* [SourceColor](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a6958e6f4eabcb493c291d38a36a5a4c2)
* [SourceColorSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1aeda105033c58e850ef187129c0fdaed9)
* [XPhase](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1aba814e775d408769b153cbffbe6d185e)
* [YPhase](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a98741c1176e46d903991a2eb2a6e7699)

## Properties

### Property IsSourcesAvailable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1ac54ee1c859cccddcaa99dbdb9651cf62"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCESourcesData.IsSourcesAvailable
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.IsSourcesAvailable"}]}`
-->

### Property RandomPolarization

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a7b00e1cf120d77832d8313f36c1daaa1"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCESourcesData.RandomPolarization
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.RandomPolarization"}]}`
-->

### Property InitialPhaseDeg

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a33bba815aa4ccfecfe17f8986680c3f0"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.InitialPhaseDeg
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.InitialPhaseDeg"}]}`
-->

### Property CoherenceLength

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1add19597303ac4d08feef1cd964e95520"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.CoherenceLength
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.CoherenceLength"}]}`
-->

### Property Jx

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a58146aff545f74860dd298f3d166b423"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.Jx
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.Jx"}]}`
-->

### Property Jy

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a68ac8785486690f357597cf86772a007"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.Jy
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.Jy"}]}`
-->

### Property XPhase

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1aba814e775d408769b153cbffbe6d185e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.XPhase
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.XPhase"}]}`
-->

### Property YPhase

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a98741c1176e46d903991a2eb2a6e7699"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.YPhase
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.YPhase"}]}`
-->

### Property ReverseRays

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a946e6fc309c78e6b2833a5e2c6302dfb"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCESourcesData.ReverseRays
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ReverseRays"}]}`
-->

### Property PrePropagation

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1af59dae5b8a96a17b2bac714afb036fd6"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.PrePropagation
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.PrePropagation"}]}`
-->

### Property BulkScatter

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a262bb87fa863ce4570364f9194a729c6"></a>

![][public]

**Definition**:


```csharp
SourceBulkScatterMode ZOSAPI.Editors.NCE.INCESourcesData.BulkScatter
```


**Return type**: [SourceBulkScatterMode](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a797a1d701c5391bd6014f35ab63c0760)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.BulkScatter"}]}`
-->

### Property SamplingMethod

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a62ed37769e418f0a5fc3a855f3a5d5bf"></a>

![][public]

**Definition**:


```csharp
SourceSamplingMethod ZOSAPI.Editors.NCE.INCESourcesData.SamplingMethod
```


**Return type**: [SourceSamplingMethod](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a664c238076b0d36a2391819c17b0c1d1)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.SamplingMethod"}]}`
-->

### Property ArrayType

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1af46aff7eaad1084e92bfb0969b538aa6"></a>

![][public]

**Definition**:


```csharp
ArrayMode ZOSAPI.Editors.NCE.INCESourcesData.ArrayType
```


**Return type**: [ArrayMode](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afdd5b3906ce1ee859f6514fc54ae44c6)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ArrayType"}]}`
-->

### Property ArrayNumberX

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1af6ae4e282181fa464898a697adf94a03"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCESourcesData.ArrayNumberX
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ArrayNumberX"}]}`
-->

### Property ArrayNumberY

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a41bda402211366811db2589f62ce2da1"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCESourcesData.ArrayNumberY
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ArrayNumberY"}]}`
-->

### Property ArraySpacingX

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a271ada065dd50482cdbff23854e5350c"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.ArraySpacingX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ArraySpacingX"}]}`
-->

### Property ArraySpacingY

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a6e8f57ab10fcb16d63f30b9e5a272b11"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.ArraySpacingY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ArraySpacingY"}]}`
-->

### Property ArrayNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a49bd1c1b9330ebf7a450bb9123386dd4"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCESourcesData.ArrayNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ArrayNumber"}]}`
-->

### Property ArrayRadius

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a5c092cc0d4a6dae3a4742ad00caee13c"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.ArrayRadius
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ArrayRadius"}]}`
-->

### Property ArrayRings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1add259cd596c3d441e4df7a305601b11c"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCESourcesData.ArrayRings
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ArrayRings"}]}`
-->

### Property ArraySpacing

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a7b6642db0f801acf8d78cab0c51f3954"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.INCESourcesData.ArraySpacing
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.ArraySpacing"}]}`
-->

### Property SourceColor

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1a6958e6f4eabcb493c291d38a36a5a4c2"></a>

![][public]

**Definition**:


```csharp
SourceColorMode ZOSAPI.Editors.NCE.INCESourcesData.SourceColor
```


Usage (see [Example 25](page_ex25.md#page_ex25) for a full sample)


C# 
```csharp
            // Changes sourcecolor to Blackbody, sets temperature, min/ max wavelength
            o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.45;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.65;
```
 C++ 
```csharp
    // Changes sourcecolor to Blackbody, sets temperature, min / max wavelength
    o1->SourcesData->SourceColor = SourceColorMode_BlackBodySpectrum;
    o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->TemperatureK = 6000;
    o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthFrom = 0.45;
    o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthTo = 0.65;
```
 Matlab 
```csharp
    % Changes sourcecolor to Blackbody, sets temperature, min/max wavelength
    o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
    o1.SourcesData.SourceColorSettings.TemperatureK = 6000;
    o1.SourcesData.SourceColorSettings.WavelengthFrom = 0.45;
    o1.SourcesData.SourceColorSettings.WavelengthTo = 0.65;
```
 Python 
```csharp
    # Changes sourcecolor to Blackbody, sets temperature, min/max wavelength
    o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.45
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.65
```


**Return type**: [SourceColorMode](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a543c6973a7a0480b1697bf85ebefeeaf)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.SourceColor"}]}`
-->

### Property SourceColorSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_sources_data_1aeda105033c58e850ef187129c0fdaed9"></a>

![][public]

**Definition**:


```csharp
ISourceColorSettings ZOSAPI.Editors.NCE.INCESourcesData.SourceColorSettings
```


Usage (see [Example 25](page_ex25.md#page_ex25) for a full sample)


C# 
```csharp
            // Changes sourcecolor to Blackbody, sets temperature, min/ max wavelength
            o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.45;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.65;
```
 C++ 
```csharp
    // Changes sourcecolor to Blackbody, sets temperature, min / max wavelength
    o1->SourcesData->SourceColor = SourceColorMode_BlackBodySpectrum;
    o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->TemperatureK = 6000;
    o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthFrom = 0.45;
    o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthTo = 0.65;
```
 Matlab 
```csharp
    % Changes sourcecolor to Blackbody, sets temperature, min/max wavelength
    o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
    o1.SourcesData.SourceColorSettings.TemperatureK = 6000;
    o1.SourcesData.SourceColorSettings.WavelengthFrom = 0.45;
    o1.SourcesData.SourceColorSettings.WavelengthTo = 0.65;
```
 Python 
```csharp
    # Changes sourcecolor to Blackbody, sets temperature, min/max wavelength
    o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.45
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.65
```


**Return type**: [ISourceColorSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCESourcesData.SourceColorSettings"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)