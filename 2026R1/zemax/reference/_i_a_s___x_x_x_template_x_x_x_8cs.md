# File IAS\_XXXTemplateXXX.cs

<a id="_i_a_s___x_x_x_template_x_x_x_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::IAS\_XXXTemplateXXX](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___x_x_x_template_x_x_x.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___x_x_x_template_x_x_x)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings//.XXXFolderXXX
{
    [ComVisible(true)]
    //
    //  TODO: Make sure to generate your own GUID
    //
    [Guid("D7427A7B-CAC0-41B9-8BBE-1097582183F8")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //
    //  TODO:
    //
    //  Replace all 'XXXTemplateXXX' below with the Engine class you're overlaying (without the 'Settings' suffix)
    //  Example: if you're defining the RayFanSettings,
    //  you swap XXXTemplateXXX with 'RayFan'
    //
    public interface IAS_XXXTemplateXXX : IAS_
    {
        //
        //  TODO:
        //
        // If your Settings class uses Fields, Wavelengths or Surfaces you need to define them thusly:
        //
        //IAS_Field Field { get; }
        //IAS_Surface Surface { get; }
        //IAS_Wavelength Wavelength { get; }
        //
        //  Add the properties the User can use here.
        //  Some examples:
        //
        //int NumberOfRays { get; set; }

        //double PlotScale { get; set; }

        //bool CheckApertures { get; set; }
     
        //SagittalAberrationComponent Sagittal { get; set; }

    }
}
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)