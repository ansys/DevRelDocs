# File IA_Base.cs

<a id="_i_a___base_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::IA\_](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__)
* [ZOSAPI::Analysis::IUserAnalysisData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data)
* [ZOSAPI::Analysis::IUser2DLineData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user2_d_line_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user2_d_line_data)
* [ZOSAPI::Analysis::IUserGridData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_data)
* [ZOSAPI::Analysis::IUserGridRGBData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_r_g_b_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_r_g_b_data)
* [ZOSAPI::Analysis::IUserTextData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_text_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_text_data)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)

## Source


```csharp
using System;
using System.IO;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Data;
using ZOSAPI.Analysis.Settings;
using ZOSAPI.Common;

namespace ZOSAPI.Analysis
{
    [ComVisible(true)]
    [Guid("D8BE2CB0-9A28-4CFC-963C-730C5FD1D054")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IA_
    {
        String Title { get; }
        String GetAnalysisName { get; }
        AnalysisIDM AnalysisType { get; }

        IMessages StatusMessages { get; }

        bool HasAnalysisSpecificSettings { get; }
        IAS_ GetSettings();
        IAR_ GetResults();

        bool IsRunning();

        IMessage Apply();
        IMessage ApplyAndWaitForCompletion();
        bool Terminate();

        void WaitForCompletion();
        void Close();

        void Release();

        void ToFile(String Filename, bool showSettings = false, bool verify = false);
    }

    [ComVisible(true)]
    [Guid("ADF0ACA9-9E83-4C00-88D9-52754575F51E")]
    public enum UserAnalysisDataType
    {
        None,
        Line2D,
        Grid,
        GridRGB,
        Text
    }

    [ComVisible(true)]
    [Guid("569A0E6D-B1D4-4860-8E93-93FD9108E4EE")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IUserAnalysisData
    {
        int AnalysisNumber { get; }
        UserAnalysisDataType PlotType { get; }

        string WindowTitle { get; set; }
        string FeatureDescription { get; set; }
        string[] HeaderData { get; set; }
        bool ShowLegend { get; set; }

        ISettingsData UserSettings { get; }
        bool RunAnalysisOnSettingsClosed { get; set; }

        IUser2DLineData Make2DLinePlot(
            String PlotDescription,
            uint numValues,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In]double[] xValues);
        IUser2DLineData Make2DLinePlotSafe(
            String PlotDescription,
            [In]double[] xValues);

        IUserGridData MakeGridPlot(
            String PlotDescription);

        IUserGridRGBData MakeGridRGBPlot(
            String PlotDescription);

        IUserTextData MakeText();

    }

    [ComVisible(true)]
    [Guid("92525150-C2FD-467A-95F3-0C98B2A54129")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IUser2DLineData
    {
        string PlotDescription { get; }
        string XLabel { get; set; }
        string YLabel { get; set; }

        uint NumberOfXValues { get; }
        uint NumberOfYValues { get; }
        uint NumberOfSeries { get; }
        void AddSeries(
            string seriesName,
            ZemaxColor seriesColor,
            uint numberOfYValues,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)][In]double[] yValues);
        void AddSeriesSafe(
            string seriesName,
            ZemaxColor seriesColor,
            double[] yValues);

        double XAxisMin { get; set; }
        bool XAxisMinAuto { get; set; }
        double XAxisMax { get; set; }
        bool XAxisMaxAuto { get; set; }
        bool XAxisLog { get; set; }
        bool XAxisReversed { get; set; }
        bool XAxisSymmetric { get; set; }

        double YAxisMin { get; set; }
        bool YAxisMinAuto { get; set; }
        double YAxisMax { get; set; }
        bool YAxisMaxAuto { get; set; }
        bool YAxisLog { get; set; }
        bool YAxisReversed { get; set; }
        bool YAxisSymmetric { get; set; }

    }

    [ComVisible(true)]
    [Guid("7BF6C4B4-193E-4A0F-B9A6-DB3B3E028621")]
    public enum GridPlotType
    {
        Surface,
        Contour,
        GrayScale,
        InverseGrayScale,
        FalseColor,
        InverseFalseColor,
    }

    [ComVisible(true)]
    [Guid("7C80A4F4-B5BF-40D2-9381-3A11F8830C4A")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IUserGridData
    {
        string PlotDescription { get; }
        string XLabel { get; set;  }
        string YLabel { get; set;  }
        string ValueLabel { get; set; }

        GridPlotType ShowAsType { get; set; }

        uint NumberOfXDataValues { get; }
        double XDataMin { get; }
        double XDataMax { get; }
        double DataDX { get; }
        void SetXDataDimensions(double xDataMin, double xDataMax);

        uint NumberOfYDataValues { get; }
        double YDataMin { get; }
        double YDataMax { get; }
        double DataDY { get; }
        void SetYDataDimensions(double yDataMin, double yDataMax);

        double XAxisMin { get; set; }
        bool XAxisMinAuto { get; set; }
        double XAxisMax { get; set; }
        bool XAxisMaxAuto { get; set; }
        bool XAxisSymmetric { get; set; }

        double YAxisMin { get; set; }
        bool YAxisMinAuto { get; set; }
        double YAxisMax { get; set; }
        bool YAxisMaxAuto { get; set; }
        bool YAxisSymmetric { get; set; }

        double ZAxisMin { get; set; }
        bool ZAxisMinAuto { get; set; }
        double ZAxisMax { get; set; }
        bool ZAxisMaxAuto { get; set; }
        bool ZAxisLog { get; set; }

        bool LogColorMap { get; set; }
        bool InterpolateLowResolutionContours { get; set; }
        double XYAspectRatio { get; set; }

        void SetData(
            uint totalSize,
            uint numXValues,
            uint numYValues,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In]double[] Data);
        void SetDataSafe(double[,] Data);
    }

    [ComVisible(true)]
    [Guid("070DDEB5-DF6C-403F-B9E7-9C63E25CECD5")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IUserGridRGBData
    {
        string PlotDescription { get; }
        string XLabel { get; set; }
        string YLabel { get; set; }
        string ValueLabel { get; set; }

        uint NumberOfXDataValues { get; }
        double XDataMin { get; }
        double XDataMax { get; }
        double DataDX { get; }
        void SetXDataDimensions(double xDataMin, double xDataMax);

        uint NumberOfYDataValues { get; }
        double YDataMin { get; }
        double YDataMax { get; }
        double DataDY { get; }
        void SetYDataDimensions(double yDataMin, double yDataMax);

        void SetDataRGB(
            uint fullSize,
            uint numXValues,
            uint numYValues,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In]double[] rData,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In]double[] gData,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In]double[] bData);
        void SetDataRGBSafe(
            [In]double[,] rData,
            [In]double[,] gData,
            [In]double[,] bData);
        void SetData(
            uint fullSize,
            uint numXValues,
            uint numYValues,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In]double[] rgbData);
        void SetDataSafe([In]double[, ,] rgbData);

        double XAxisMin { get; set; }
        bool XAxisMinAuto { get; set; }
        double XAxisMax { get; set; }
        bool XAxisMaxAuto { get; set; }
        bool XAxisSymmetric { get; set; }

        double YAxisMin { get; set; }
        bool YAxisMinAuto { get; set; }
        double YAxisMax { get; set; }
        bool YAxisMaxAuto { get; set; }
        bool YAxisSymmetric { get; set; }

        double XYAspectRatio { get; set; }
    }
    [ComVisible(true)]
    [Guid("910F4534-E095-4241-9E41-3913250559A7")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IUserTextData
    {
        String Data { get; set; }
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