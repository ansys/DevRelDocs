# File IAS_Foucault.cs

<a id="_i_a_s___foucault_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Wavefront::IAS\_Foucault](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_wavefront_1_1_i_a_s___foucault.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_wavefront_1_1_i_a_s___foucault)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Wavefront](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_wavefront.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_wavefront)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Wavefront
{
    [ComVisible(true)]
    [Guid("6AB96B5D-1376-4D52-AC12-5539F041E3ED")]
    public enum DataType
    {
        Computed, Reference, Difference, 
    }

    [ComVisible(true)]
    [Guid("EAA20085-2DAE-4CC5-A15E-02B950425221")]
    public enum KnifeType
    {
        Horiz_Above, Horiz_Below,
        Vert_Right, Vert_Left
    }

    [ComVisible(true)]
    [Guid("E8B7590E-567E-4A17-BB1F-DE9EEE69680A")]
    public enum FoucaultShowAs
    {
        Surface, Contour,
        GreyScale, InverseGreyScale,
        FalseColor, InverseFalseColor,
        X_CrossSection, Y_CrossSection,
    }

    [ComVisible(true)]
    [Guid("70971654-14B4-47CC-9FC9-084501970E9E")]
    public enum Types
    {
        Linear,
        Log_Minus_3, Log_Minus_6, Log_Minus_9,
        Log_Minus_12, Log_Minus_15, Log_Minus_18,
    }

    [ComVisible(true)]
    [Guid("A2554DB1-AC95-402A-B53B-283E86CA4792")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Foucault : IAS_
    {
        IAS_Field Field { get; }
        IAS_Wavelength Wavelength { get; }

        Types Type { get; set; }
        SampleSizes Sampling { get; set; }
        FoucaultShowAs ShowAs { get; set; }
        KnifeType Knife { get; set; }
        DataType Data { get; set; }

        int RowColumn { get; set; }

        bool UsePolarization { get; set; }

        double Y_Position { get; set; }
        double Decenter_X { get; set; }
        double Decenter_Y { get; set; }
        double Scale_X { get; set; }
        double Scale_Y { get; set; }

        String Source { get; set; }
        String SaveBMP { get; set; }
    }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
