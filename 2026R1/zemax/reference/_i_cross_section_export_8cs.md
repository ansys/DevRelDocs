# File ICrossSectionExport.cs

<a id="_i_cross_section_export_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::Layouts::ICrossSectionExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_cross_section_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_cross_section_export)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::Layouts](namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts)

## Source


```csharp
using System.Runtime.InteropServices;
using System.Xml.Linq;
using ZOSAPI.Common;
using ZOSAPI.Tools.Layouts;

namespace ZOSAPI.Tools.Layouts
{
    [Guid("A55B3941-AE41-40D5-9E10-B4BEC2213D33")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ICrossSectionExport : ISystemTool
    {
        bool SaveImageAsFile { get; set; }

        string OutputFileName { get; set; }

        bool IsValidFileName { get; }

        int OutputPixelWidth { get; set; }

        int OutputPixelHeight { get; set; }

        int StartSurface { get; set; }
        int EndSurface { get; set; }
        int NumberOfRays { get; set; }

        double YStretch { get; set; }
        int Wavelength { get; set; }
        void SetWavelengthsAll();
        int Field { get; set; }
        void SetFieldsAll();
        ColorRaysByCrossSectionOptions ColorRaysBy { get; set; }
        double UpperPupil { get; set; }
        double LowerPupil { get; set; }
        bool FletchRays { get; set; }
        bool DeleteVignetted { get; set; }
        bool MarginalAndChiefRayOnly { get; set; }

        LineThicknessOptions SurfaceLineThickness { get; set; }
        LineThicknessOptions RaysLineThickness { get; set; }
        int Configuration { get; set; }

        IImageExportData ImageExportData { get; }
    }

    [Guid("5dbe270b-99f7-4751-9851-bb4211a019ab")]
    [ComVisible(true)]
    public enum ColorRaysByCrossSectionOptions
    {
        Fields = 0,
        Waves,
        Wavelength
    }

    [Guid("A9E85BA0-66D8-49D3-9A89-CAB9B1EC8FF5")]
    [ComVisible(true)]
    public enum LineThicknessOptions
    {
        Thinnest = -2, Thin = -1, Standard = 0, Thick = 1, Thickest = 2
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
