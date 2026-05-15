# File IAS_NSCSpot.cs

<a id="_i_a_s___n_s_c_spot_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::NSCSpot::IAS\_NSCSpot](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_spot_1_1_i_a_s___n_s_c_spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_spot_1_1_i_a_s___n_s_c_spot)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::NSCSpot](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_spot.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_spot)

## Source


```csharp

using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.NSCSpot
{
    [ComVisible(true)]
    [Guid("E6DD1D15-0D3C-4822-AA41-0AF0E90D3C81")]
    public enum Patterns
    {
        Dithered = 0,
    }

    [ComVisible(true)]
    [Guid("3F704816-FA1B-4468-A945-04E4027F1166")]
    public enum Reference
    {
        Centroid = 0, Middle, Vertex,
    }

    [ComVisible(true)]
    [Guid("6A70B93B-16CB-40E9-9703-946D82FD30E9")]
    public enum ShowScales
    {
        ScaleBar = 0, Box, Cross, Circle,
    }

    [ComVisible(true)]
    [Guid("784C7336-44AF-4996-B5DF-631CB6D49AB6")]
    public enum ColorRaysBy
    {
        Sequence = 0, Waves, Config, Wavelength
    }

    [ComVisible(true)]
    [Guid("5176C214-58EC-46BE-93D4-F5F961E09221")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_NSCSpot : IAS_
    {
        ShowScales ShowScale { get; set; }
        Patterns Pattern { get; set; }
        ColorRaysBy ColorRaysBy { get; set; }
        Reference ReferTo { get; set; }
        bool UsePolarization { get; set; }
        bool DirectionCosines { get; set; }
        bool ShowAiryDisk { get; set; }
        bool ScatterRays { get; set; }
        bool SplitRays { get; set; }
        double PlotScale { get; set; }
        bool UseSymbols { get; set; }
        void SetObjectFace(int objectNumber, int faceNumber);
        int GetObjectNumber();
        int GetFaceNumber();
        void SetGroup(string name);
        void SetSequence(string name);
        void UseSourceWavelength();
        int RayDensity { get; set; }
        IAS_Wavelength Wavelength { get; }
        IAS_ObjectFace ObjectFace { get; }
        IAS_Group Group { get; }
        IAS_Instance Instance { get; }
        IAS_Sequence Sequence { get; }
        IAS_Configuration Configuration { get; }
        string GetWavelengthName();
        int GetNumberOfAvailableObjectFaces();
        string GetObjectFaceNameAt(int index);
        int GetObjectAt(int index);
        int GetFaceAt(int index);
        string[] GetObjectFaceList();
        int GetNumberOfAvailableGroups();
        string GetGroupNameAt(int index);
        string[] GetGroupList();
        string GetGroupName();
        int GetNumberOfAvailableInstances();
        string GetInstanceName();
        string[] GetSequenceList();
        string GetSequenceNameAt(int index);
        int GetNumberOfAvailableSequences();
        string GetConfigurationName();
        void UseAllConfigurations();
        void UseCurrentConfiguration();
        string GetSequenceName();
        string GetObjectFaceName();
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
