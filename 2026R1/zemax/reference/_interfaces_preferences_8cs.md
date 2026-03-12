# File InterfacesPreferences.cs

<a id="_interfaces_preferences_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::IPreferences](interface_z_o_s_a_p_i_1_1_i_preferences.md#interface_z_o_s_a_p_i_1_1_i_preferences)
* [ZOSAPI::Preferences::IPreferencesGeneral](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general)
* [ZOSAPI::Preferences::IPreferencesFolders](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders)
* [ZOSAPI::Preferences::IPreferencesEditor](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Preferences](namespace_z_o_s_a_p_i_1_1_preferences.md#namespace_z_o_s_a_p_i_1_1_preferences)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using ZOSAPI.Preferences;

namespace ZOSAPI
{
    [ComVisible(true)]
    [Guid("0723946B-6AA0-4B98-8D73-9D4D5EC7E3E4")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IPreferences
    {
        //IPreferencesAddress Address { get; }
        IPreferencesGeneral General { get; }
        IPreferencesFolders Folders { get; }

        IPreferencesEditor Editor { get; }

        void ResetToDefaults();

        bool IsReadOnly { get; }
    }
}

namespace ZOSAPI.Preferences
{
    [ComVisible(true)]
    [Guid("4CA5697E-A1EE-4CDF-8FDA-C04171D7CB3B")]
    public enum ShowLineAsType
    {
        TextAbove = 0,
        FileName = 1,
        ConfigurationNumber = 2,
    }

    [ComVisible(true)]
    [Guid("455DC7DE-7993-43BC-A88A-2867F7D5201B")]
    public enum DateTimeType
    {
        None = 0,
        Date = 1,
        DateTime = 2,
    }

    [ComVisible(true)]
    [Guid("FBA52C56-6D54-46DF-A010-89934C36F34F")]
    public enum LanguageType
    {
        Chinese = 0,
        English = 1,
        Japanese = 4,
    }

    [ComVisible(true)]
    [Guid("C3608C9D-F01D-4CAF-9117-72DA543F05FB")]
    public enum EncodingType
    {
        ANSI = 0,
        Unicode = 1,
    }

    [ComVisible(true)]
    [Guid("DDC404BC-59D9-4089-B5DC-AA9122E12482")]
    public enum ZemaxThemes
    {
        Classic = 0,
        Dark = 1,
    }

    [ComVisible(true)]
    [Guid("EDBB731E-76C1-43EB-A210-EDBB5752381D")]
    public enum BackgroundColors
    {
        Default = 0,
        White = 1,
        LightGray = 2,
        Gray = 3,
        DarkGray = 4,
        Black = 5,
    }


    //public interface IPreferencesAddress
    //{
    //    string Line1 { get; set; }
    //    string Line2 { get; set; }
    //    string Line3 { get; set; }
    //    string Line4 { get; set; }
    //    string Line5 { get; set; }
    //    ShowLineAsType ShowLine4As { get; set; }
    //    ShowLineAsType ShowLine5As { get; set; }
    //    bool HideAddress { get; set; }
    //}

    [ComVisible(true)]
    [Guid("4E3C76E3-B365-4F05-816F-B1CD0215F2FD")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IPreferencesGeneral
    {
        DateTimeType DateTimeFormat { get; set; }
        LanguageType Language { get; set; }
        EncodingType ZMXFileEncoding { get; set; }
        EncodingType TXTFileEncoding { get; set; }
        bool UseSessionFiles { get; set; }
        bool IncludeCalculatedDataInSession { get; set; }
        bool IncludeToleranceDataInSession { get; set; }
        bool UpdateMostRecentlyUsedList { get; set; }
        string UserPreferences { get; set; }

        bool GetIsGPUEnabled();
        bool SetIsGPUEnabled(bool isEnabled);

        [Obsolete("Use GetUseParasolid instead")]
        bool GetUseACIS();
        [Obsolete("Use SetUseParasolid instead")]
        bool SetUseACIS(bool use);

        bool GetUseParasolid();
        bool SetUseParasolid(bool use);

        ZemaxThemes UITheme { get; }
        BackgroundColors GraphicsBackground { get; }
    }

    [ComVisible(true)]
    [Guid("CF2ABFEE-7CC6-48A1-914A-2E138497F56A")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IPreferencesFolders
    {
        string ProgramDirectory { get; }
        string DataDirectory { get; }

        string LensDirectory { get; set; }
        string ObjectsDirectory { get; set; }
        string ZplDirectory { get; set; }
        string GlassDirectory { get; set; }
        string CoatingDirectory { get; set; }
        string PopDirectory { get; set; }
        string ImagesDirectory { get; set; }
        string SolidWorksDirectory { get; set; }
        string InventorDirectory { get; set; }
        string CreoDirectory { get; set; }
        string MatlabDirectory { get; set; }
        string ScatterDirectory { get; set; }
        string UndoDirectory { get; set; }
        string CreoInstallDirectory { get; set; }

        void ChangeDataDirectory(string newDirectory);
    }

    [ComVisible(true)]
    [Guid("EDCBA19D-64F2-4FA6-8FBE-74B4F5A6E53D")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IPreferencesEditor
    {
        int Decimals { get; set; }

        double ExponentialAbove { get; set; }

        double ExponentialBelow { get; set; }
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
