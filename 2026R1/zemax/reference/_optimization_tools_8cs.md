# File OptimizationTools.cs

<a id="_optimization_tools_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::OptimizationTools::IFindBestAsphere](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_find_best_asphere.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_find_best_asphere)
* [ZOSAPI::Tools::OptimizationTools::IConvertAsphereType](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_convert_asphere_type.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools_1_1_i_convert_asphere_type)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::OptimizationTools](namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_tools)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Tools.OptimizationTools
{
    [ComVisible(true)]
    [Guid("0F71CCD0-612D-4A83-BB52-2489094FF232")]
    public enum FindBestAsphereTypes
    {
        Conic,
        Polynomial_4thOrder,
        Polynomial_6thOrder,
        Polynomial_8thOrder,
        Polynomial_10thOrder,
        Polynomial_12thOrder
    }

    [ComVisible(true)]
    [Guid("29A76DE6-6BD3-47E0-8FC5-CA82B964250D")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IFindBestAsphere : ISystemTool
    {
        int FirstSurface { get; set; }
        int LastSurface { get; set; }

        FindBestAsphereTypes AsphereType { get; set; }

        double StartMeritFunction { get; }

        double BestMeritFunction { get; }

        int BestSurface { get; }
    }

    [ComVisible(true)]
    [Guid("F2BE3646-A2DB-4681-B126-2EA215CDA102")]
    public enum ConvertAsphereTypes
    {
       EvenAsphere,
       ExtendedAsphere,
       QTypeAsphereType0,
       QTypeAsphereType1
    }

    [ComVisible(true)]
    [Guid("D7800692-D48B-4926-8E0B-60F555AB764C")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IConvertAsphereType : ISystemTool
    {
        int Surface { get; set; }

        ConvertAsphereTypes AsphereType { get; set; }

        int NumberOfTerms { get; set; }

        bool ExcludeSecondOrderTerm { get; set; }

        bool AllowRadiusVariation { get; set; }

        bool AllowConicVariation { get; set; }

        double ResidualRMSError { get; }

        bool IsAutomatic { set; }
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