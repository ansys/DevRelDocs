# File IMaterialsCatalog.cs

<a id="_i_materials_catalog_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::IInternalTransmissionParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_parameter.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_parameter)
* [ZOSAPI::Tools::IInternalTransmissionData](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_transmission_data)
* [ZOSAPI::Tools::IInternalBirefringenceParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_birefringence_parameter.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_birefringence_parameter)
* [ZOSAPI::Tools::IInternalBirefringenceData](interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_birefringence_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_internal_birefringence_data)
* [ZOSAPI::Tools::IMaterialsCatalog](interface_z_o_s_a_p_i_1_1_tools_1_1_i_materials_catalog.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_materials_catalog)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ZOSAPI.Tools
{
    [ComVisible(true)]
    [Guid("a1b3efb9-170e-4d1e-aade-98d1ecac52ce")]
    public enum MaterialFormulas
    {
        Schott = 1,
        Sellmeier1 = 2,
        Herzberger = 3,
        Sellmeier2 = 4,
        Conrady = 5,
        Sellmeier3 = 6,
        Handbook1 = 7,
        Handbook2 = 8,
        Sellmeier4 = 9,
        Extended = 10,
        Sellmeier5 = 11,
        Extended2 = 12,
        Extended3 = 13
    }

    [ComVisible(true)]
    [Guid("6e3cc302-6e98-4816-83e1-6bc61836ddc8")]
    public enum MaterialStatuses
    {
        Standard = 0,
        Preferred = 1,
        Obsolete = 2,
        Special = 3,
        Melt = 4
    }

    [ComVisible(true)]
    [Guid("bd3834d6-aa86-49ae-b540-0caf65b2468c")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IInternalTransmissionParameter
    {
        double Wavelength { get; set; }
        double Transmission { get; set; }
        double Thickness { get; set; }
    }

    [Guid("beeb0d75-5c08-41e5-afc4-574bb2f529fe")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IInternalTransmissionData
    {
        int NumberOfPoints { get; }
        IInternalTransmissionParameter GetDataPoint(int pointNumber);
    }

    [ComVisible(true)]
    [Guid("e5b3b1ba-3255-4089-b521-d89e450ceb52")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IInternalBirefringenceParameter
    {
        double Wavelength { get; set; }
        double K { get; set; }
        double K11 { get; set; }
        double K12 { get; set; }
    }

    [Guid("b26471a8-730a-4bc7-8c37-97a3f39215e5")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IInternalBirefringenceData
    {
        int NumberOfPoints { get; }
        IInternalBirefringenceParameter GetDataPoint(int pointNumber);
    }

    [Guid("58759fbc-f43f-4248-bddd-2481b99e64c3")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMaterialsCatalog : ISystemTool
    {
        string SelectedCatalog { get; set; }
        string SelectedMaterial { get; set; }
        string[] GetAllCatalogs();
        string[] GetAllMaterials();
        string GetCoefficientName(int coeff);
        double GetFitCoefficient(int coeff);
        void SetFitCoefficient(int coeff, double Value);
        int NumberOfFitCoefficients { get; }
        string CatalogComment { get; set; }
        MaterialFormulas MaterialFormula { get; set; }
        MaterialStatuses MaterialStatus { get; set; }
        double D0 { get; set; }
        double D1 { get; set; }
        double D2 { get; set; }
        double E0 { get; set; }
        double E1 { get; set; }
        double Ltk { get; set; }
        double TCE { get; set; }
        double Temp { get; set; }
        double p { get; set; }
        double dPgF { get; set; }
        double MinimumWavelength { get; set; }
        double MaximumWavelength { get; set; }
        bool IgnoreThermalExpansion { get; set; }
        bool ExcludeSubstitution { get; set; }
        bool MetaMaterial { get; set; }
        string MeltFreq { get; set; }
        string Comment { get; set; }
        string RelCost { get; set; }
        string CR { get; set; }
        string FR { get; set; }
        string SR { get; set; }
        string AR { get; set; }
        string PR { get; set; }

        double Nd { get; }
        double Vd { get; }

        double YoungsModulus { get; }
        bool HasYoungsModulus { get; }

        double PoissonRatio { get; }
        bool HasPoissonRatio { get; }

        double KnoopHardness { get; }
        bool HasKnoopHardness { get; }

        double SpecificHeatCapacity { get; }
        bool HasSpecificHeatCapacity { get; }

        double HeatConductivity { get; }
        bool HasHeatConductivity { get; }

        bool SaveCatalog();
        IInternalTransmissionData GetInternalTransmissionData();

        IInternalBirefringenceData GetInternalBirefringenceData();

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