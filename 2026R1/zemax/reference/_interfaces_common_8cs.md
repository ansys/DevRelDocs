# File InterfacesCommon.cs

<a id="_interfaces_common_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Common::IVectorData](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data)
* [ZOSAPI::Common::IMatrixData](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data)
* [ZOSAPI::Common::ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data)
* [ZOSAPI::Common::ICoordinateTransform](interface_z_o_s_a_p_i_1_1_common_1_1_i_coordinate_transform.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_coordinate_transform)
* [ZOSAPI::Common::IMetadata](interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Common](namespace_z_o_s_a_p_i_1_1_common.md#namespace_z_o_s_a_p_i_1_1_common)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ZOSAPI.Common
{

    [ComVisible(true)]
    [Guid("4ACC227D-03B7-4948-9957-C1D44F4089AA")]
    public enum ZemaxColor
    {
        Default,
        Color1,
        Color2,
        Color3,
        Color4,
        Color5,
        Color6,
        Color7,
        Color8,
        Color9,
        Color10,
        Color11,
        Color12,
        Color13,
        Color14,
        Color15,
        Color16,
        Color17,
        Color18,
        Color19,
        Color20,
        Color21,
        Color22,
        Color23,
        Color24,
        NoColor,
    }

    [ComVisible(true)]
    [Guid("003A348F-98FB-4F10-B204-C7B6569DC4FD")]
    public enum ZemaxOpacity
    {
        P100,
        P90,
        P80,
        P70,
        P60,
        P50,
        P40,
        P30,
        P20,
        P10,
        P00,
    }

    [Guid("53FC0963-B84E-4871-A3D4-25A0A0DC2AB1")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IVectorData
    {
        bool IsReadOnly { get; }
        int Length { get; }
        double[] Data { get; set; }
        void ReadData(
            int Size,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In, Out]double[] Data);
        void WriteData(
            int Size,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In]double[] Data);
        double GetValueAt(int position);
        void SetValueAt(int position, double Value);
    }

    [Guid("B6495EC7-F923-4090-87FE-4E6F37E0121A")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMatrixData
    {
        bool IsReadOnly { get; }
        int Rows { get; }
        int Cols { get; }
        int TotalLength { get; }
        double[,] Data { get; set; }
        void ReadData(
            int Size,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In, Out]double[] Data);
        void WriteData(
            int Size,
            [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 0)][In]double[] Data);
        double GetValueAt(int Row, int Col);
        void SetValueAt(int Row, int Col, double Value);
    }

    [ComVisible(true)]
    [Guid("06C94169-0D56-4445-BE39-3691843DD2CA")]
    public enum SettingsDataType
    {
        None,
        Integer,
        Double,
        Float,
        String,
        Byte,
        Boolean,
    }

    [Guid("42D06AF0-FB89-4E98-A0E6-7B197348F699")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ISettingsData
    {
        int NumberOfSettings { get; }

        string[] GetKeys();
        bool GetEntryType(string key, [Out]out SettingsDataType type, [Out]out bool isArray, [Out]out int arraySize);

        bool GetDoubleValue(string key, [Out]out double val);
        bool GetIntegerValue(string key, [Out]out int val);
        bool GetFloatValue(string key, [Out]out float val);
        bool GetStringValue(string key, [Out]out string val);
        bool GetByteValue(string key, [Out]out byte val);
        bool GetBooleanValue(string key, [Out]out bool val);

        void SetDoubleValue(string key, [In]double val);
        void SetIntegerValue(string key, [In]int val);
        void SetFloatValue(string key, [In]float val);
        void SetStringValue(string key, [In]string val);
        void SetByteValue(string key, [In]byte val);
        void SetBooleanValue(string key, [In]bool val);

        bool GetDoubleArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In, Out]double[] val);
        bool GetIntegerArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In, Out]int[] val);
        bool GetFloatArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In, Out]float[] val);
        bool GetByteArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In, Out]byte[] val);
        bool GetBooleanArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In, Out]bool[] val);

        void SetDoubleArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In]double[] val);
        void SetIntegerArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In]int[] val);
        void SetFloatArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In]float[] val);
        void SetByteArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In]byte[] val);
        void SetBooleanArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 1)][In]bool[] val);
    }

    [ComVisible(true)]
    [Guid("DC444D93-1BF8-4526-8AC8-61A49109D503")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ICoordinateTransform
    {
        bool HasOffset { get; }
        double XOffset { get; set; }
        double YOffset { get; set; }
        double ZOffset { get; set; }

        bool HasRotation { get; }
        double R11 { get; set; }
        double R12 { get; set; }
        double R13 { get; set; }
        double R21 { get; set; }
        double R22 { get; set; }
        double R23 { get; set; }
        double R31 { get; set; }
        double R32 { get; set; }
        double R33 { get; set; }
        bool RotationAnglesSpecified { get; set; }
        double ThetaX { get; set; }
        double ThetaY { get; set; }
        double ThetaZ { get; set; }

        double CentroidX { get; set; }
        double CentroidY { get; set; }
        double CentroidZ { get; set; }

        double[,]  GetMatrix_4x4();
        double[,] GetMatrix_3x3();
        double[] GetDecenterVector();
        double[] GetAngleSet();
    }

    [Guid("411FCE1C-F821-4C7F-A455-77ACF8CD2DAF")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMetadata
    {
        int NumberOfKeys { get; }

        string GetKeyName(int keyNumber);

        string GetData(string key);
        void SetData(string key, string value);
        bool RemoveData(string key);

        string ConvertFromBinary(byte[] data);
        byte[] ConvertToBinary(string s);

        string CreateGuid();
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