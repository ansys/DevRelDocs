# File IAS_ISOElementDrawing.cs

<a id="_i_a_s___i_s_o_element_drawing_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Tolerancing::IAS\_ISOElementDrawing](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___i_s_o_element_drawing.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___i_s_o_element_drawing)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Tolerancing](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings;
using ZOSAPI.Analysis.Settings.Aberrations;
using ZOSAPI.Analysis.Settings.ExtendedScene;
using ZOSAPI.Tools.Tolerancing;


namespace ZOSAPI.Analysis.Tolerancing
{

    [ComVisible(true)]
    [Guid("D153E1B8-7EFB-4BD7-A7DB-1E02A16BCD07")]
    public enum ShowAsISO
    {
        Surface=0, 
        Singlet=1, 
        Doublet=2
    }

    [ComVisible(true)]
    [Guid("F9F04AF7-2193-4B90-8333-429E0E7650DF")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_ISOElementDrawing : IAS_
    {
        IAS_Surface Surface { get; }
        void Reset();
        void ImportAllFromLDE();
        void ImportFromTDE();
        bool ExportISOXML(string file);
        bool ExportISODrawingImage(string Filepath);
        ShowAsISO ShowAs { get; set; }

        //string Title { get; set; }
        //int Count { get; set; }
        //int MaxCount { get; set; }
        //String DRWN { get; set; }
        //String APPR { get; set; }
        //String TITL { get; set; }
        //String DRAW { get; set; }
        //String REVI { get; set; }
        //double TextScale { get; set; }

        //string QuantitiesTextBox { get; set; }
        //int MaxQuantities { get; set; }
        //int MaxProviders { get; set; }
        //int ProviderIndex { get; set; }
        //bool IsSingletLens { get; set; }

        //int index_LS { get; set; }

        //int index_RS { get; set; }

        //double L_Radius { get; set; }
        //double L_RadiusPositiveTolerance { get; set; }
        //double L_RadiusNegativeTolerance { get; set; }
        //double L_Conic { get; set; }
        //double L_ConicPositiveTolerance { get; set; }
        //double L_ConicNegativeTolerance { get; set; }
        //double L_EffectiveDiameter { get; set; }
        //double L_EffectiveDiameterPositiveTolerance { get; set; }
        //double L_EffectiveDiameterNegativeTolerance { get; set; }
        //double L_Diameter { get; set; }
        //double L_DiameterPositiveTolerance { get; set; }
        //double L_DiameterNegativeTolerance { get; set; }
        //double L_DiameterFlat { get; set; }
        //double L_DiameterFlatPositiveTolerance { get; set; }
        //double L_DiameterFlatNegativeTolerance { get; set; }
        //string L_Coating { get; set; }
        //string L_Form3A { get; set; }
        //string L_Form3B { get; set; }
        //string L_Form3C { get; set; }
        //double L_Form3RMSt { get; set; }
        //double L_Form3RMSi { get; set; }
        //double L_Form3RMSa { get; set; }
        //string L_Centering4S { get; set; }
        //string L_Centering4L { get; set; }
        //string L_Imperfection5N { get; set; }
        //string L_Imperfection5A { get; set; }
        //string L_Imperfection5CN { get; set; }
        //string L_Imperfection5CA { get; set; }
        //string L_Imperfection5LN { get; set; }
        //string L_Imperfection5LA { get; set; }
        //string L_Imperfection5EA { get; set; }
        //string L_LaserDamage6HE { get; set; }
        //string L_LaserDamage6wl { get; set; }
        //string L_LaserDamage6Ns { get; set; }
        //string L_IfPulsedpdg { get; set; }
        //string L_IfPulsedf { get; set; }
        //string L_IfPulsedNp { get; set; }
        //string L_TexturePRq { get; set; }
        //string L_TextureLmin { get; set; }
        //string L_TextureLmax { get; set; }
        //double L_ProtChamberMin { get; set; }
        //double L_ProtChamberMax { get; set; }

        //double indexPotiveTol { get; set; }
        //double indexNegativeTol { get; set; }
        //double AbbePotiveTol { get; set; }
        //double AbbeNegativeTol { get; set; }
        //double ThicknessPositiveTol { get; set; }
        //double ThicknessNegativeTol { get; set; }
        //double StressBirefringence0A { get; set; }
        //double Blubbles1N { get; set; }
        //double Inhomogeneity2A { get; set; }
        //double Inhomogeneity2B { get; set; }

        //double R_Radius { get; set; }
        //double R_RadiusPositiveTolerance { get; set; }
        //double R_RadiusNegativeTolerance { get; set; }
        //double R_Conic { get; set; }
        //double R_ConicPositiveTolerance { get; set; }
        //double R_ConicNegativeTolerance { get; set; }
        //double R_EffectiveDiameter { get; set; }
        //double R_EffectiveDiameterPositiveTolerance { get; set; }
        //double R_EffectiveDiameterNegativeTolerance { get; set; }
        //double R_Diameter { get; set; }
        //double R_DiameterPositiveTolerance { get; set; }
        //double R_DiameterNegativeTolerance { get; set; }
        //double R_DiameterFlat { get; set; }
        //double R_DiameterFlatPositiveTolerance { get; set; }
        //double R_DiameterFlatNegativeTolerance { get; set; }
        //string R_Coating { get; set; }
        //string R_Form3A { get; set; }
        //string R_Form3B { get; set; }
        //string R_Form3C { get; set; }
        //double R_Form3RMSt { get; set; }
        //double R_Form3RMSi { get; set; }
        //double R_Form3RMSa { get; set; }
        //string R_Centering4S { get; set; }
        //string R_Centering4L { get; set; }
        //string R_Imperfection5N { get; set; }
        //string R_Imperfection5A { get; set; }
        //string R_Imperfection5CN { get; set; }
        //string R_Imperfection5CA { get; set; }
        //string R_Imperfection5LN { get; set; }
        //string R_Imperfection5LA { get; set; }
        //string R_Imperfection5EA { get; set; }
        //string R_LaserDamage6HE { get; set; }
        //string R_LaserDamage6wl { get; set; }
        //string R_LaserDamage6Ns { get; set; }
        //string R_IfPulsedpdg { get; set; }
        //string R_IfPulsedf { get; set; }
        //string R_IfPulsedNp { get; set; }
        //string R_TexturePRq { get; set; }
        //string R_TextureLmin { get; set; }
        //string R_TextureLmax { get; set; }
        //double R_ProtChamberMin { get; set; }
        //double R_ProtChamberMax { get; set; }


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