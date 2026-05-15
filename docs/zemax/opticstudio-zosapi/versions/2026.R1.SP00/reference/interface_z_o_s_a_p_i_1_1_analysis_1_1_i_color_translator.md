# Interface ZOSAPI::Analysis::IColorTranslator

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator"></a>

![][C#]
![][public]

**Definition**:


## Members

* [CanConvertSingleValue](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1ada8bec509cf2c048176d58d1a111ab13)
* [GetRGB](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1aa5d14ea81d809063619a08a0a6c153d7)
* [GetRGB2DFloatSafe](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a0b36d81f9352abf4088f6d8c79c57e86)
* [GetRGB2DSafe](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a4b20453818c4c4b372eb8906add1538f)
* [GetRGBFloat](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a9010ced3e61de39972f73c98f080c507)
* [GetRGBFloatSafe](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a5476c54205198e51f807e01b4665e2a4)
* [GetRGBSafe](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1af0f5944d210a50d7fa0d4be0794d12f1)
* [GetSingleRGB](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a117d92c44cca34d4b9101a0357c4498d)
* [GetSingleRGBFloat](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a3dec9a0ab1a33fe408c0863e3447dd47)
* [IsAutoScaled](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a6793e5f435aabde6a775558ad32b572e)
* [IsInversePalette](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1ab67bb17d96627e58e62856a317148aaf)
* [IsLog](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1abb0df3d9b29e4bf312f9c2b9c2cbe861)
* [LogBase](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a53b50e8a5bd8cb8eddd48601d7323736)
* [MaxValue](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a467b23ec6169d7d8cdf629b9adcf1185)
* [MinValue](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a586df35d2d3c08bb708392f15e70b171)
* [NumberOfShades](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1aebcce14bc32705e50a925df49f86a095)
* [Palette](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a3092c4da8aaddc9a3293d12dafbd9f7d)

## Properties

### Property Palette

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a3092c4da8aaddc9a3293d12dafbd9f7d"></a>

![][public]

**Definition**:


```csharp
ColorPaletteType ZOSAPI.Analysis.IColorTranslator.Palette
```


**Return type**: [ColorPaletteType](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1ad6454c8c904134e30e9631c2e2487c60)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.Palette"}]}`
-->

### Property IsInversePalette

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1ab67bb17d96627e58e62856a317148aaf"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.IColorTranslator.IsInversePalette
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.IsInversePalette"}]}`
-->

### Property IsAutoScaled

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a6793e5f435aabde6a775558ad32b572e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.IColorTranslator.IsAutoScaled
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.IsAutoScaled"}]}`
-->

### Property NumberOfShades

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1aebcce14bc32705e50a925df49f86a095"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.IColorTranslator.NumberOfShades
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.NumberOfShades"}]}`
-->

### Property MinValue

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a586df35d2d3c08bb708392f15e70b171"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.IColorTranslator.MinValue
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.MinValue"}]}`
-->

### Property MaxValue

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a467b23ec6169d7d8cdf629b9adcf1185"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.IColorTranslator.MaxValue
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.MaxValue"}]}`
-->

### Property IsLog

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1abb0df3d9b29e4bf312f9c2b9c2cbe861"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.IColorTranslator.IsLog
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.IsLog"}]}`
-->

### Property LogBase

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a53b50e8a5bd8cb8eddd48601d7323736"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.IColorTranslator.LogBase
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.LogBase"}]}`
-->

### Property CanConvertSingleValue

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1ada8bec509cf2c048176d58d1a111ab13"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.IColorTranslator.CanConvertSingleValue
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.CanConvertSingleValue"}]}`
-->

## Public functions

### Function GetSingleRGB

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a117d92c44cca34d4b9101a0357c4498d"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.IColorTranslator.GetSingleRGB(double x, out int R, out int G, out int B)
```


**Parameters**:

* double **x**
* out int **R**
* out int **G**
* out int **B**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.GetSingleRGB"}]}`
-->

### Function GetSingleRGBFloat

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a3dec9a0ab1a33fe408c0863e3447dd47"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.IColorTranslator.GetSingleRGBFloat(double x, out float R, out float G, out float B)
```


**Parameters**:

* double **x**
* out float **R**
* out float **G**
* out float **B**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.GetSingleRGBFloat"}]}`
-->

### Function GetRGB2DSafe

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a4b20453818c4c4b372eb8906add1538f"></a>

![][public]


```csharp
int[,,] ZOSAPI.Analysis.IColorTranslator.GetRGB2DSafe(double[,] vals)
```


**Parameters**:

* double **vals**<!--
**TODO**:

* `array {"type":"element","name":"array","attributes":{},"children":[{"type":"text","text":"[,]"}]}`
-->

**Return type**: int[,,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.GetRGB2DSafe"}]}`
-->

### Function GetRGBSafe

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1af0f5944d210a50d7fa0d4be0794d12f1"></a>

![][public]


```csharp
int[,] ZOSAPI.Analysis.IColorTranslator.GetRGBSafe(double[] vals)
```


**Parameters**:

* double[] **vals**

**Return type**: int[,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.GetRGBSafe"}]}`
-->

### Function GetRGB2DFloatSafe

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a0b36d81f9352abf4088f6d8c79c57e86"></a>

![][public]


```csharp
float[,,] ZOSAPI.Analysis.IColorTranslator.GetRGB2DFloatSafe(double[,] vals)
```


**Parameters**:

* double **vals**<!--
**TODO**:

* `array {"type":"element","name":"array","attributes":{},"children":[{"type":"text","text":"[,]"}]}`
-->

**Return type**: float[,,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.GetRGB2DFloatSafe"}]}`
-->

### Function GetRGBFloatSafe

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a5476c54205198e51f807e01b4665e2a4"></a>

![][public]


```csharp
float[,] ZOSAPI.Analysis.IColorTranslator.GetRGBFloatSafe(double[] vals)
```


**Parameters**:

* double[] **vals**

**Return type**: float[,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.GetRGBFloatSafe"}]}`
-->

### Function GetRGB

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1aa5d14ea81d809063619a08a0a6c153d7"></a>

![][public]


```csharp
void ZOSAPI.Analysis.IColorTranslator.GetRGB(uint fullSize, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]double[] data, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In][Out]int[] rData, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In][Out]int[] gData, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In][Out]int[] bData)
```


**Parameters**:

* uint **fullSize**
* _[MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]_ double[] **data**
* _[Out]_ int[] **rData**
* _[Out]_ int[] **gData**
* _[Out]_ int[] **bData**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.GetRGB"}]}`
-->

### Function GetRGBFloat

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator_1a9010ced3e61de39972f73c98f080c507"></a>

![][public]


```csharp
void ZOSAPI.Analysis.IColorTranslator.GetRGBFloat(uint fullSize, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]double[] data, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In][Out]float[] rData, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In][Out]float[] gData, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In][Out]float[] bData)
```


**Parameters**:

* uint **fullSize**
* _[MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)]_ double[] **data**
* _[Out]_ float[] **rData**
* _[Out]_ float[] **gData**
* _[Out]_ float[] **bData**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IColorTranslator.GetRGBFloat"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
