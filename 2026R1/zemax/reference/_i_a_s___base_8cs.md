# File IAS_Base.cs

<a id="_i_a_s___base_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::IAS\_](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__)
* [ZOSAPI::Analysis::Settings::IAS\_Field](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field)
* [ZOSAPI::Analysis::Settings::IAS\_ObjectFace](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___object_face.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___object_face)
* [ZOSAPI::Analysis::Settings::IAS\_Group](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___group.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___group)
* [ZOSAPI::Analysis::Settings::IAS\_Instance](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___instance.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___instance)
* [ZOSAPI::Analysis::Settings::IAS\_Configuration](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___configuration.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___configuration)
* [ZOSAPI::Analysis::Settings::IAS\_Sequence](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___sequence.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___sequence)
* [ZOSAPI::Analysis::Settings::IAS\_Surface](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___surface.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___surface)
* [ZOSAPI::Analysis::Settings::IAS\_Detector](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___detector)
* [ZOSAPI::Analysis::Settings::IAS\_Wavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavelength.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavelength)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings
{
    [ComVisible(true)]
    [Guid("E1D1ED07-94C5-4268-A6FE-67C09A0FC290")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_
    {
        IMessages Verify();

        void Save();
        void Load();
        void Reset();

        bool SaveTo(string settingsFile);
        bool LoadFrom(string settingsFile);
        bool ModifySettings(string settingsFile, string typeCode, string newValue);
    }

    [ComVisible(true)]
    [Guid("88F2D30A-46AC-4074-B541-2768185B9A8D")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Field
    {
        int GetFieldNumber();
        IMessage SetFieldNumber(int N);
        IMessage UseAllFields();
    }

    [ComVisible(true)]
    [Guid("8C057DA9-2472-418A-8E5B-E39135A4129E")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_ObjectFace
    {
        int GetObjectFaceNumber();
        IMessage SetObjectFaceNumber(int N);
    }

    [ComVisible(true)]
    [Guid("70A65FB5-10AC-4E14-BFF8-D7E65CC9F420")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Group
    {
        int GetGroupNumber();
        IMessage SetGroupNumber(int N);
        IMessage UseAllGroups();

    }

    [ComVisible(true)]
    [Guid("667956E4-96D3-4C3B-B2F6-0A15D0975355")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Instance
    {
        int GetInstanceNumber();
        IMessage SetInstanceNumber(int N);
        IMessage UseAllInstances();
        IMessage UseLastInstance();
    }

    [ComVisible(true)]
    [Guid("ED66B939-7582-4863-B9F8-1E346EF1030D")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Configuration
    {
        int GetConfigurationNumber();
        IMessage SetConfigurationNumber(int N);
    }

    [ComVisible(true)]
    [Guid("10EE37DB-B175-4215-AEB6-286CB39E14C2")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Sequence
    {
        int GetSequenceNumber();
        IMessage SetSequenceNumber(int N);
        IMessage UseAllSequences();
    }

    [ComVisible(true)]
    [Guid("6D82ABB7-7B0E-4EA0-BC92-A94CC09768CD")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Surface
    {
        int GetSurfaceNumber();
        IMessage SetSurfaceNumber(int N);
        IMessage UseImageSurface();
        IMessage UseObjectiveSurface();
    }

    [ComVisible(true)]
    [Guid("AF3381D9-0D13-4BCD-A7A7-42ABB50529C0")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Detector
    {
        int GetDetectorNumber();
        IMessage SetDetectorNumber(int N);
        IMessage SummarizeAll();
    }

    [ComVisible(true)]
    [Guid("5332E4E7-51DE-4EF6-9D30-564F8695840C")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Wavelength
    {
        int GetWavelengthNumber();
        IMessage SetWavelengthNumber(int N);
        IMessage UseAllWavelengths();
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