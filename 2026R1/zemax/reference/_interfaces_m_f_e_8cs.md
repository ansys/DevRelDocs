# File InterfacesMFE.cs

<a id="_interfaces_m_f_e_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Editors::MFE::IMeritFunctionEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor)
* [ZOSAPI::Editors::MFE::IMFERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Editors](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors)
* [ZOSAPI::Editors::MFE](namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using ZOSAPI.Common;
using ZOSAPI.Wizards;

namespace ZOSAPI.Editors.MFE
{
    [ComVisible(true)]
    [Guid("C41DF280-AF85-4E53-8C17-48DA58F8BCCC")]
    public enum MeritOperandType
    {
        ACOS,
        ABSO,
        CVVA,
        DENC,
        DENF,
        DIFF,
        AMAG,
        ANAC,
        ANAR,
        ANAX,
        ANAY,
        ANCX,
        ANCY,
        ASIN,
        ASTI,
        ATAN,
        AXCL,
        BIOC,
        CTVA,
        CVGT,
        CVLT,
        CVOL,
        DIMX,
        DISC,
        DISG,
        DIST,
        DIVI,
        DLTN,
        DMFS,
        DMGT,
        DMLT,
        DMVA,
        DXDX,
        DXDY,
        DYDX,
        DYDY,
        EFFL,
        EFLX,
        EFLY,
        ENDX,
        ENPP,
        EPDI,
        EQUA,
        ETGT,
        ETLT,
        ETVA,
        EXPP,
        FCGS,
        FCGT,
        FCUR,
        FICL,
        FICP,
        FOUC,
        GBPD,
        GBPR,
        GBPS,
        GBPW,
        GBPP,
        GBSD,
        P1GT,
        P1LT,
        P1VA,
        P2GT,
        P2LT,
        P2VA,
        P3GT,
        P3LT,
        P3VA,
        P4GT,
        P4LT,
        P4VA,
        P5GT,
        P5LT,
        P5VA,
        P6GT,
        P6LT,
        P6VA,
        P7GT,
        P7LT,
        P7VA,
        P8GT,
        P8LT,
        P8VA,
        PANA,
        PANB,
        PANC,
        PARA,
        PARB,
        PARC,
        PARR,
        PARX,
        PARY,
        PARZ,
        PATX,
        PATY,
        PETC,
        PETZ,
        PIMH,
        PLEN,
        PMAG,
        POWR,
        PRIM,
        PROD,
        PMGT,
        PMLT,
        PMVA,
        POPD,
        QOAC,
        QSUM,
        RAGA,
        RAGB,
        RAGC,
        RAGX,
        RAGY,
        RAGZ,
        RAED,
        RAEN,
        RAID,
        RAIN,
        RANG,
        REAA,
        REAB,
        REAC,
        REAR,
        REAX,
        REAY,
        REAZ,
        RELI,
        GBSR,
        GBSS,
        TGTH,
        TMAS,
        TOTR,
        TRAC,
        TRAD,
        TRAE,
        TRAI,
        TRAN,
        TRAR,
        TRAX,
        TRAY,
        TRCX,
        TRCY,
        TTGT,
        TTHI,
        TTLT,
        GBSW,
        GBSP,
        GCOS,
        GENC,
        GENF,
        GLCA,
        GLCB,
        GLCC,
        GLCX,
        GLCY,
        GLCZ,
        GMTA,
        GMTS,
        GMTT,
        GOTO,
        GPIM,
        GRMN,
        GRMX,
        GTCE,
        HACG,
        HHCN,
        I1GT,
        BIOD,
        BIPF,
        BLNK,
        BSER,
        CENX,
        CENY,
        CMFV,
        CMGT,
        CMLT,
        CMVA,
        CODA,
        COGT,
        COLT,
        COMA,
        CONF,
        CONS,
        COSI,
        COVA,
        CTGT,
        CTLT,
        I2GT,
        I3GT,
        I4GT,
        I5GT,
        I6GT,
        I1LT,
        I2LT,
        I3LT,
        I4LT,
        I5LT,
        I6LT,
        I1VA,
        I2VA,
        I3VA,
        I4VA,
        I5VA,
        I6VA,
        IMAE,
        IMSF,
        INDX,
        ISFN,
        ISNA,
        LACL,
        LINV,
        LOGE,
        LOGT,
        LONA,
        LPTD,
        MAXX,
        MCOG,
        MCOL,
        MCOV,
        MINN,
        MNAB,
        MNCA,
        MNCG,
        MNCT,
        MNCV,
        MNDT,
        MNEA,
        MNEG,
        MNET,
        MNIN,
        MNPD,
        MNSD,
        MSWA,
        MSWS,
        MSWT,
        MTFA,
        MTFS,
        MTFT,
        MXAB,
        MXCA,
        MXCG,
        MXCT,
        MXCV,
        MXDT,
        MXEA,
        MXEG,
        MXET,
        MXIN,
        MXPD,
        MXSD,
        NPGT,
        NPLT,
        NPVA,
        NPXG,
        NPXL,
        NPXV,
        NPYG,
        NPYL,
        NPYV,
        NPZG,
        NPZL,
        NPZV,
        NSDC,
        NSDD,
        NSRA,
        NSTR,
        NTXG,
        NTXL,
        NTXV,
        NTYG,
        NTYL,
        NTYV,
        NTZG,
        NTZL,
        NTZV,
        OSCD,
        OBSN,
        OOFF,
        OPDC,
        OPDM,
        OPDX,
        OPGT,
        OPLT,
        OPVA,
        OPTH,
        OSUM,
        RENA,
        RENB,
        RENC,
        RETX,
        RETY,
        RGLA,
        RSCH,
        RSCE,
        RSRE,
        RSRH,
        RWCH,
        RWCE,
        RWRE,
        RWRH,
        SAGX,
        SAGY,
        SFNO,
        SINE,
        SKIS,
        SKIN,
        SPCH,
        SPHA,
        SQRT,
        SSAG,
        SUMM,
        SVIG,
        TANG,
        TFNO,
        WFNO,
        TTVA,
        UDOP,
        UDOC,
        USYM,
        VOLU,
        WLEN,
        XDVA,
        XDGT,
        XDLT,
        XENC,
        XENF,
        XNEA,
        XNEG,
        XNET,
        XXEA,
        XXEG,
        XXET,
        YNIP,
        ZERN,
        ZPLM,
        ZTHI,
        TOLR,
        FTGT,
        FTLT,
        GLCR,
        EFNO,
        DIVB,
        PROB,
        TCGT,
        TCLT,
        TCVA,
        NORX,
        NORY,
        NORZ,
        NORD,
        COSA,
        MTHA,
        MTHS,
        MTHT,
        BFSD,
        EXPD,
        CVIG,
        GPSX,
        GPSY,
        GPRX,
        GPRY,
        GPRT,
        POWF,
        STHI,
        CNPX,
        CNPY,
        CNAX,
        CNAY,
        STRH,
        CIGT,
        CILT,
        CIVA,
        CEGT,
        CELT,
        CEVA,
        NSST,
        ABCD,
        DISA,
        POWP,
        RECI,
        NSRM,
        FDMO,
        FDRE,
        FREZ,
        NSDE,
        ERFP,
        NSDP,
        POPI,
        ABGT,
        ABLT,
        SMIA,
        SCUR,
        SDRV,
        REVR,
        NSLT,
        NSTW,
        NSRW,
        MNRE,
        MXRE,
        MNRI,
        MXRI,
        CEHX,
        CEHY,
        BLTH,
        GBPZ,
        NSRD,
        NPAF,
        MECS,
        MECT,        
        GMTN,
        GMTX,
        MTFN,
        MTFX,
        MTHN,
        MTHX,
        MECA,
        MSWN,
        MSWX,

        GAOI,
        MNAI,
        MXAI,

        HYLD,
        // SURFACE_DATA_ANALYSIS
        OGSS,
        SPHD,
        SPHS,
        SSLP,
        SCRV,
        DSAG,
        DPHS,
        DSLP,
        DCRV,
        // end SURFACE_DATA_ANALYSIS

        EFLA,
        CARD,
   
        TSAG,   // TILTED_SAG
        PSLP,   // SURFACE_PHASE_DATA_ANALYSIS
        QSLP,   // Data operand for PSLP, SURFACE_PHASE_DATA_ANALYSIS
        RRET,   // STAR_STRESS_BIREFRINGENCE, RMS retardance between Ex and Ey on the image surface
        MWCE,   // PV Wavefront Error operands. M for (M)aximum.
        MWCH,   // PV Wavefront Error operands. M for (M)aximum.
        MWRE,   // PV Wavefront Error operands. M for (M)aximum.
        MWRH,   // PV Wavefront Error operands. M for (M)aximum.
        GSCE,   // Geometric Spot Size operands
        GSCH,   // Geometric Spot Size operands
        GSRE,   // Geometric Spot Size operands
        GSRH,   // Geometric Spot Size operands
        REQS,   // Requirements editor: location for insertion into the merit function
        RSNC,
    }

    [ComVisible(true)]
    [Guid("64F8DAE7-AC62-4855-8774-DD6BBC1AC76F")]
    public enum MeritColumn
    {
        Comment = 1,
        Param1 = 2, // SURF
        Param2 = 3, // WAVE
        Param3 = 4, // HX
        Param4 = 5, // HY
        Param5 = 6, // PX
        Param6 = 7, // PY
        Param7 = 8, // EX
        Param8 = 9, // EY
        Target = 10,
        Weight = 11,
        Value = 12,
        Contrib = 13,
    }

    [ComVisible(true)]
    [Guid("733800F9-D6A9-4530-800E-14E31E9D34A6")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMeritFunctionEditor : IEditor
    {
        int RowToOperandOffset { get; }

        int NumberOfOperands { get; }

        MeritColumn FirstColumn { get; }
        MeritColumn LastColumn { get; }

        IMFERow GetOperandAt(int OperandNumber);
        IMFERow InsertNewOperandAt(int OperandNumber);
        IMFERow AddOperand();
        bool RemoveOperandAt(int OperandNumber);
        int RemoveOperandsAt(int OperandNumber, int numOperands);

        bool ShowMFE();
        void HideMFE();

        void SaveMeritFunction(string fileName);
        void LoadMeritFunction(string fileName);
        int InsertMeritFunction(string fileName, int OperandNumber);
        string[] GetMeritFunctionFiles();
        string MeritFunctionDirectory { get; }

        double CalculateMeritFunction();

        double GetOperandValue(
            MeritOperandType type,
            int srf,
            int wave,
            double Hx,
            double Hy,
            double Px,
            double Py,
            double Ex,
            double Ey);

        INSCOptimizationWizard NSCOptimizationWizard { get; }

        ISEQOptimizationWizard SEQOptimizationWizard { get; }

        INSCBitmapWizard NSCBitmapWizard { get; }

        INSCRoadwayLightingWizard NSCRoadwayLightingWizard { get; }

        int CopyOperands(int fromOperandNumber, int NumberOfOperands, int toOperandNumber);
        int CopyOperandsFrom(IMeritFunctionEditor fromEditor, int fromOperandNumber, int NumberOfOperands, int toOperandNumber);

        ISEQOptimizationWizard2 SEQOptimizationWizard2 { get; }


    }

    [ComVisible(true)]
    [Guid("D0E50824-EB22-4884-BFCB-99ED98C67599")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMFERow : IEditorRow
    {
        bool IsActive { get; }
        int OperandNumber { get; }

        IEditorCell GetOperandCell(MeritColumn Col);

        string TypeName { get; }
        MeritOperandType Type { get; }

        MeritOperandType[] AvailableOperandTypes();
        bool ChangeType(MeritOperandType type);

        //IMeritOperand OperandData { get; }

        ZemaxColor RowColor { get; set; }

        double Target { get; set; }
        IEditorCell TargetCell { get; }
        double Weight { get; set; }
        IEditorCell WeightCell { get; }
        double Value { get; }
        IEditorCell ValueCell { get; }
        double Contribution { get; }
        IEditorCell ContributionCell { get; }
    }

    #region Operand Specific Settings (Unimplemented)

    //[ComVisible(true)]
    //[Guid("B06189E2-7AFF-4904-B876-84AC0D0587B1")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IMeritOperand
    //{
    //    MeritOperandType Type { get; }
    //    IMFERow Row { get; }
    //    bool IsValid { get; }
    //}

    //[ComVisible(true)]
    //[Guid("0E605529-DC88-4100-8832-8DE4934DFED1")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IMeritOperandBLNK : IMeritOperand
    //{
    //    string Comment { get; set; }
    //    IEditorCell CommentCell { get; }
    //}

    //[ComVisible(true)]
    //[Guid("9E5D1C12-A25D-43A9-B1C4-9B447058AAA1")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IMeritOperandDMFS : IMeritOperand
    //{

    //}

    //[ComVisible(true)]
    //[Guid("CCBA052C-9D86-43C3-AD4B-9A736D5E45C3")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IMeritOperandOPDX : IMeritOperand
    //{
    //    int Wave { get; set; }
    //    IEditorCell WaveCell { get; }
    //    double Hx { get; set; }
    //    IEditorCell HxCell { get; }
    //    double Hy { get; set; }
    //    IEditorCell HyCell { get; }
    //    double Px { get; set; }
    //    IEditorCell PxCell { get; }
    //    double Py { get; set; }
    //    IEditorCell PyCell { get; }
    //}

    //[ComVisible(true)]
    //[Guid("2D4DB2A7-3D27-420E-BEDC-F82B5266E3F7")]
    //[InterfaceType(ComInterfaceType.InterfaceIsDual)]
    //public interface IMeritOperandAXCL : IMeritOperand
    //{
    //    int Wave1 { get; set; }
    //    IEditorCell Wave1Cell { get; }
    //    int Wave2 { get; set; }
    //    IEditorCell Wave2Cell { get; }
    //    double Zone { get; set; }
    //    IEditorCell ZoneCell { get; }

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