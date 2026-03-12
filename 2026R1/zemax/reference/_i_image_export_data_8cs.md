# File IImageExportData.cs

<a id="_i_image_export_data_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::Layouts::IImageExportData](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data)
* [ZOSAPI::Tools::Layouts::IImagePixel](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::Layouts](namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using ZOSAPI.Analysis.Data;

namespace ZOSAPI.Tools.Layouts
{
    [Guid("38A7A1C2-E2DA-467D-A995-BF4475FDAF63")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IImageExportData
    {
        int Width { get; }
        int Height { get; }

        IImagePixel GetImagePixel(int x, int y);
        IImagePixel GetImagePixel(int index);

        IImagePixel[,] Values { get; }

        void FillValues(
            uint fullSize,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In][Out] int[] rData,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In][Out] int[] gData,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In][Out] int[] bData);
    }

    [Guid("BB7DC9E9-1DF7-429E-8E1F-E50D7700EB3D")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IImagePixel
    {
        int R { get; }
        int G { get; }
        int B { get; }

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
