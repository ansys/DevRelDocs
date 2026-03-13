# File KnownFolder.cs

<a id="_known_folder_8cs"></a>

![][C#]


## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::FileManager](namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager)

## Source


```csharp
using System.Runtime.InteropServices;

namespace ZOSAPI.Tools.FileManager
{
    [ComVisible(true)]
    [Guid("8D4CF27F-6CAF-4D53-AB6E-5D62C21D32EE")]
    public enum KnownFolder
    {
        Unknown = -1,

        Project,

        ABgData, // szABgDataPath

        BlackBoxes, // szBlackBoxPath

        Coatings, // szCoatingPath

        Configs, // szZemaxConfigPath

        DllBulkScatter, // szDLL_BulkScatterPath

        DllDiffractive, // szDLL_DiffractivePath

        DllGradientIndex, // szDLL_GradientIndexPath

        DllObjects, // szDLL_ObjectsPath

        DllPhysicalOptics, // szDLL_POPBeamPath

        DllSources, // szDLL_SourcesPath

        DllSurfaceScatter, // szDLL_SurfaceScatterPath

        DllSurfaces, // szDLL_SurfacesPath

        Extend, // szEXTPath

        GlassCat, // szGlassPath

        ImaFiles, // szIMAPath

        Macros, // szZPLPath

        MeritFunction, // szMeritFunctionPath

        Miscellaneous, // szMiscellaneousPath

        ObjectsApertures, // szObjectsPath_UDA

        ObjectsCadFiles, // szObjectsPath_CAD

        ObjectsCreoParametricFiles, // szCreoParamPath

        ObjectsGridFiles, // szObjectsPath_GRD

        ObjectsInventorFiles, // szACInventorPath

        ObjectsPartDesignerObjects, // szObjectsPath_ZSO

        ObjectsPhosphorsAndFluorescenceFiles, // szObjectsPath_PLM

        ObjectsPolygonObjects, // szObjectsPath_POB

        ObjectsStopFiles, // szObjectsPath_STA

        ObjectsSolidWorksFiles, // szSolidWorksPath

        ObjectsSourcesEulumdat, // szSourcesPath_LDT

        ObjectsSourcesIesna, // szSourcesPath_IES

        ObjectsSourcesRadiantSourceModelFiles, // szSourcesPath_RSM

        ObjectsSourcesSourceFiles, // szSourcesPath_DAT

        ObjectsSourcesSpectrumFiles, // szSourcesPath_SPC

        ObjectsTabulatedObjects, // szObjectsPath_TOB

        PopBeamFiles, // szPOPBeamPath

        Profiles, // szProfilePath

        ScatterData, // szScatterDataPath


        Tolerance, // szTolerancePath

        Udo, // szUDOPath

        ZosApiExtensions, // szUDEXTPath

        ZosApiOperands, // szUDOCPath

        ZosApiUserAnalysis, // szUDANPath

        DllBirefringence, // szDLL_BIREPath
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
