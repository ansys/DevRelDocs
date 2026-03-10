# File InterfacesMCE.cs

<a id="_interfaces_m_c_e_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Editors::MCE::IMultiConfigEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor)
* [ZOSAPI::Editors::MCE::IMCERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Editors](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors)
* [ZOSAPI::Editors::MCE](namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using ZOSAPI.Analysis;
using ZOSAPI.Common;

namespace ZOSAPI.Editors.MCE
{
    [ComVisible(true)]
    [Guid("B4D60370-2E82-4A0F-9619-45A1CBA67189")]
    public enum MultiConfigOperandType
    {
        MOFF,
        AICN,
        AFOC,
        APDF,
        APDT,
        APDX,
        APDY,
        APER,
        APMN,
        APMX,
        APTP,
        CADX,
        CADY,
        CAOR,
        CATX,
        CATY,
        CATZ,
        CBDX,
        CBDY,
        CBOR,
        CBTX,
        CBTY,
        CBTZ,
        CONN,
        COTN,
        CPCN,
        CROR,
        CRSR,
        CRVT,
        CSP1,
        CSP2,
        CWGT,
        EDVA,
        FLTP,
        FLWT,
        [Obsolete("Use FTAN instead")]
        FVAN,
        FVCX,
        FVCY,
        FVDX,
        FVDY,
        GCRS,
        GLSS,
        GPEX,
        GPEY,
        GPIU,
        GPJX,
        GPJY,
        GPPX,
        GPPY,
        GQPO,
        HOLD,
        IGNM,
        IGNR,
        LTTL,
        MABB,
        MCOM,
        MDPG,
        MIND,
        MTFU,
        NCOM,
        NCOT,
        NGLS,
        NPAR,
        NPOS,
        NPRO,
        PAR1,
        PAR2,
        PAR3,
        PAR4,
        PAR5,
        PAR6,
        PAR7,
        PAR8,
        PRAM,
        PRES,
        PRWV,
        PSCX,
        PSCY,
        PSHX,
        PSHY,
        PSHZ,
        PSP1,
        PSP2,
        PSP3,
        PUCN,
        PXAR,
        RAAM,
        SATP,
        SDIA,
        SDRW,
        STPS,
        SWCN,
        TCEX,
        TELE,
        TEMP,
        THIC,
        TSP1,
        TSP2,
        TSP3,
        UDAF,
        WAVE,
        WLWT,
        XFIE,
        YFIE,
        OPDR,
        SRTS,
        MCHI,
        IGTO,
        FTAN,
        FCMM,
        CHZN,
        MCSD,
        CSDX,   //COMPOSITE_MCE_OPERANDS
        CSDY,
        CSTX,
        CSTY,
        CSTZ,
    }

    [ComVisible(true)]
    [Guid("57B4116F-8A5B-4D29-B750-443521C07E91")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMultiConfigEditor : IEditor
    {
        int RowToOperandOffset { get; }

        int NumberOfOperands { get; }

        int FirstConfiguration { get; }
        int LastConfiguration { get; }
        int NumberOfConfigurations { get; }
        int CurrentConfiguration { get; }

        bool SetCurrentConfiguration(int ConfigurationNumber);
        bool DeleteConfiguration(int ConfigurationNumber);
        bool DeleteAllConfigurations();
        bool InsertConfiguration(int ConfigurationNumber, bool withPickups);
        bool AddConfiguration(bool withPickups);
        void MakeSingleConfiguration();
        void MakeSingleConfigurationOpt(bool deleteMFEOperands);
        bool NextConfiguration();
        bool PrevConfiguration();

        IMCERow GetOperandAt(int OperandNumber);
        IMCERow InsertNewOperandAt(int OperandNumber);
        IMCERow AddOperand();
        bool RemoveOperandAt(int OperandNumber);
        int RemoveOperandsAt(int OperandNumber, int numOperands);

        bool ShowMCE();
        void HideMCE();

        int CopyOperands(int fromOperandNumber, int NumberOfOperands, int toOperandNumber);
        int CopyOperandsFrom(IMultiConfigEditor fromEditor, int fromOperandNumber, int NumberOfOperands, int toOperandNumber);

        void RunTool_MakeThermal(int existingConfigurationIndex, int numberOfThemalConfigs, double minTemp, double maxTemp, bool sortBySurface);

        IMessage RunTool_MakeConjugate(int referenceConfig, int objectSurface, int stopSurface, int imageSurface);

        IMessage RunTool_AddAllData(int numberOfConfig, bool sortBySurface, bool systemApertureData, bool fieldData, bool wavelengthData, bool surfaceData);
    }

    [ComVisible(true)]
    [Guid("AE69B825-A398-48CE-B1A8-7AA1E4435293")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMCERow : IEditorRow
    {
        bool IsActive { get; }
        int OperandNumber { get; }

        IEditorCell GetOperandCell(int configuration);

        string TypeName { get; }
        MultiConfigOperandType Type { get; }

        MultiConfigOperandType[] AvailableConfigOperandTypes();
        bool ChangeType(MultiConfigOperandType type);

        //IMultiConfigOperand OperandData { get; }

        ZemaxColor RowColor { get; set; }

        int Param1 { get; set; }
        bool Param1Enabled { get; }
        int Param2 { get; set; }
        bool Param2Enabled { get; }
        int Param3 { get; set; }
        bool Param3Enabled { get; }
    }

#region Operand Specific Settings (Unimplemented)

    //[ComVisible(true)]
    //[Guid("2E9A0D48-1716-4459-A0E4-FBA4AF444B33")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IMultiConfigOperand
    //{
    //    MultiConfigOperandType Type { get; }
    //    IMCERow Row { get; }
    //    bool IsValid { get; }
    //}

    //[ComVisible(true)]
    //[Guid("4B360F0D-EF9A-4636-A8C8-47EE73D4828D")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IMultiConfigOpMOFF : IMultiConfigOperand
    //{
    //    string GetConfigValue(int config);
    //    void SetConfigValue(int config, string val);
    //}

    //[ComVisible(true)]
    //[Guid("7CD955C3-9495-4E4B-80DD-1E21287E5F26")]
    //public enum NPOSPositionType
    //{
    //    X = 1,
    //    Y = 2,
    //    Z = 3,
    //    TiltX = 4,
    //    TiltY = 5,
    //    TiltZ = 6,
    //}

    //[ComVisible(true)]
    //[Guid("71CE21EC-ABB1-444E-B36C-5A3460D348C8")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IMultiConfigOpNPOS : IMultiConfigOperand
    //{
    //    int Surface { get; set; }
    //    int Object { get; set; }

    //    int PositionCode { get; set; }
    //    NPOSPositionType PositionType { get; set; }

    //    double GetConfigValue(int config);
    //    void SetConfigValue(int config, double val);
    //}

    //[ComVisible(true)]
    //[Guid("E3094906-22C9-497C-9D2A-9BC454E61BAF")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IMultiConfigOpSWCN : IMultiConfigOperand
    //{
    //    int Surface { get; set; }
    //    int Object { get; set; }

    //    int GetConfigValue(int config);
    //    void SetConfigValue(int config, int val);
    //}

#endregion

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