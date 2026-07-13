# File InterfacesTDE.cs

<a id="_interfaces_t_d_e_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Editors::TDE::IToleranceDataEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_tolerance_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_tolerance_data_editor)
* [ZOSAPI::Editors::TDE::ITDERow](interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_t_d_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_t_d_e_row)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Editors](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors)
* [ZOSAPI::Editors::TDE](namespace_z_o_s_a_p_i_1_1_editors_1_1_t_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_t_d_e)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using ZOSAPI.Common;
using ZOSAPI.Wizards;

namespace ZOSAPI.Editors.TDE
{
    [ComVisible(true)]
    [Guid("F9B22E66-859D-4F04-8573-497B1452A3B2")]
    public enum ToleranceOperandType
    {
        TOFF,
        TRAD,
        TCUR,
        TFRN,
        TTHI,
        TCON,
        TSDI,
        TSDX,
        TSDY,
        TSDR,
        TSTX,
        TSTY,
        TIRX,
        TIRY,
        TIRR,

        TPAR,
        TEDV,

        TEDX,
        TEDY,
        TEDR,
        TETX,
        TETY,
        TETZ,

        TUDX,
        TUDY,
        TUTX,
        TUTY,
        TUTZ,

        TIND,
        TABB,

        TEXI,

        SAVE,
        COMP,
        CPAR,
        CEDV,
        CMCO,
        STAT,
        TWAV,
        TNPS,
        TNPA,
        TMCO,
        TEZI,
        TCMU,
        SEED,
        COMM,
        TPAI,
        TCIO,
        TCEO,
        TNMA,
        CNPA,
        CNPS,

        TRLX,
        TRLY,
        TRLR,
        TARX,
        TARY,
        TARR,

        ISOA,  // ISO_IRREGULARITY_TOLERANCING
        ISOB,
        ISOC,
        ISOD,

        MPVT,
        NEST,
    }

    [ComVisible(true)]
    [Guid("DB0FC232-635E-4158-BFFB-8E1C197DBF55")]
    public enum ToleranceColumn
    {
        // Type = 1,
        Param1 = 2,
        Param2 = 3,
        Param3 = 4,
        Nominal = 5,
        Min = 6,
        Max = 7,
        Comment = 8,
    }

    [ComVisible(true)]
    [Guid("62F3B7AE-2BF9-4005-90B3-D8B769436EF6")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IToleranceDataEditor : IEditor
    {
        int RowToOperandOffset { get; }

        int NumberOfOperands { get; }
        ToleranceColumn FirstColumn { get; }
        ToleranceColumn LastColumn { get; }

        ITDERow GetOperandAt(int OperandNumber);
        ITDERow InsertNewOperandAt(int OperandNumber);
        ITDERow AddOperand();
        bool RemoveOperandAt(int OperandNumber);
        int RemoveOperandsAt(int OperandNumber, int numOperands);

        bool ShowTDE();
        void HideTDE();

        INSCToleranceWizard NSCToleranceWizard { get; }

        ISEQToleranceWizard SEQToleranceWizard { get; }

        bool LoadToleranceFile(string fileName);

        void SaveToleranceFile(string fileName);

        int CopyOperands(int fromOperandNumber, int NumberOfOperands, int toOperandNumber);
        int CopyOperandsFrom(IToleranceDataEditor fromEditor, int fromOperandNumber, int NumberOfOperands, int toOperandNumber);

    }

    [ComVisible(true)]
    [Guid("79EBC8F8-8745-4790-8453-B42EADD3FF85")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ITDERow : IEditorRow
    {
        bool IsActive { get; }
        int OperandNumber { get; }

        IEditorCell GetOperandCell(ToleranceColumn Col);

        string TypeName { get; }
        ToleranceOperandType Type { get; }

        ToleranceOperandType[] AvailableOperandTypes();
        bool ChangeType(ToleranceOperandType type);

        //IToleranceOperand OperandData { get; }

        bool DoNotAdjustDuringInverseTolerancing { get; set; }
        bool IgnoreThisOperandDuringTolerancing { get; set; }
        ZemaxColor RowColor { get; set; }

        // Almost always available
        double Min { get; set; }
        IEditorCell MinCell { get; }
        bool IsMinUsed { get; }
        double Max { get; set; }
        IEditorCell MaxCell { get; }
        bool IsMaxUsed { get; }
        string Comment { get; set; }
        IEditorCell CommentCell { get; }

        // Operand dependent
        int Param1 { get; set; }
        IEditorCell Param1Cell { get; }
        bool IsParam1Used { get; }
        int Param2 { get; set; }
        IEditorCell Param2Cell { get; }
        bool IsParam2Used { get; }
        int Param3 { get; set; }
        IEditorCell Param3Cell { get; }
        bool IsParam3Used { get; }
        double Nominal { get; }
        IEditorCell NominalCell { get; }
        bool IsNominalUsed { get; }

    }

    //[ComVisible(true)]
    //[Guid("2DC1ACE1-4508-48FF-A5AE-AB52A9B44D20")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IToleranceOperand
    //{
    //    ToleranceOperandType Type { get; }
    //    ITDERow Row { get; }
    //    bool IsValid { get; }
    //}

    //[ComVisible(true)]
    //[Guid("B6366B2E-ECDF-4495-B5D1-C96251A3A821")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface ITolOperandCOMM : IToleranceOperand
    //{
    //    // no additional parameters
    //}

    //[ComVisible(true)]
    //[Guid("CD01903E-0A00-436C-A5FF-EDEF5949147D")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface ITolOperandTABB : IToleranceOperand
    //{
    //    int Surf { get; set; }
    //}

    //[ComVisible(true)]
    //[Guid("FEF2C06D-705F-4AFA-899B-91FEC5DF7AA4")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface ITolOperandCNPA : IToleranceOperand
    //{
    //    int Object { get; set; }
    //    int ParameterNumber { get; set; }
    //    int Surface { get; set; }
    //}
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
