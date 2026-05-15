# File PrepareForLMx.cs

<a id="_prepare_for_l_mx_8cs"></a>

![][C#]


## Source


```csharp
using System;
using System.Collections.Generic;
using ZOSAPI.Tools.General;

namespace ZOSAPI.Tools.LMx
{
    /*
       * 
       * Material   
  Index of Refraction (nd)  nd = _____ ± ___
  Abbe Number (vd)  vd = _____ ± ___%
  Thickness     lens units
  Clear Aperture – Surface 1    Øe = _____ lens units
  Clear Aperture – Surface 2    Øe = _____ lens units
  Radius – Surface 1    lens units
  Radius – Surface 2    lens units
  (λ)Functional Tolerances of Wavelength – Surface 1    Ravg <__% for __< λ < __nm
  (λ)Functional Tolerances of Wavelength – Surface 2    Ravg <__% for __< λ < __nm
  (λ)Surface Coating – Surface 1    
  (λ)Surface Coating – Surface 2    
  (0/) Stress Birefringence     0/ A  or  00/ A  or  10/ A
  (1/) Bubbles and inclusions   1/ NxA  or  01/ NxA  or 11/ NxA
  (2/) Inhomogeneity & Striae   2/ A;B  or  02/ A;B  or  12/ A;B
  (3/) Power & Irregularity – Surface 1     3/ A;B(C) fringes or ____ microns
  (3/) Power & Irregularity – Surface 2 3/ A; B(C) fringes or ____ microns
  (4/)  Tilt (wedge) – Surface 1    __ arc minutes
  (4/)  Tilt (wedge) – Surface 2    __ arc minutes
  (5/)  Scratch/ Dig    __ / __
  (5/) Surface Imperfection Tolerances – Surface 1  Ng x Ag
  (5/) Surface Imperfection Tolerances – Surface 2  Ng x Ag
  (6/) Reference Wavelength     λ = ____nm
  (13/) Transmitted Wavefront   13/ A(B/C); λ = E
  Protection Chamfer  - Surface 1   lens units
  Protection Chamfer  - Surface 2   lens units
  Paint notes   
  Surface texture   __ Å
  Spherical tab should be activated for non-aspheric tolerances 
  Even Aspheric Equation  (this equation is for reference in the document and can appear as an image)   
  Coefficients table    
  Sag Table (increment values by .5mm or an integer)    __mm
  Vertex Radius X, Y, Z position in lens units
  Irregularity (Form Error) ±__
  Slope Error   ____ µm/mm
  Centration/Decentration   ____minutes and/or seconds
       * 
       * 
       * */

    [Serializable]
    public class DrawingSurfaceData
    {
        public DrawingSurfaceData()
        {
        }

        public DrawingSurfaceData(DrawingSurfaceData data)
        {
            if (data != null)
            {
                ClearAperture = data.ClearAperture;
                ClearApertureTolerance = data.ClearApertureTolerance;
                Radius = data.Radius;
                RadiusTolerance = data.RadiusTolerance;
                Conic = data.Conic;
                //FTWPct = data.FTWPct;
                //FTWMin = data.FTWMin;
                //FTWMax = data.FTWMax;
                Coating = data.Coating;
                PowerIrr = data.PowerIrr;
                TiltWedge = data.TiltWedge;
                ImperfectionTolerance = data.ImperfectionTolerance;
                ProtectionChamfer = data.ProtectionChamfer;
                PaintNotes = data.PaintNotes;
                SurfaceTexture = data.SurfaceTexture;
                VertexRadius = data.VertexRadius;
                VertexRadiusTolerance = data.VertexRadiusTolerance;
                IrregularityFormError = data.IrregularityFormError;
                SlopeError = data.SlopeError;
                CentrationDecentration = data.CentrationDecentration;
                AsphereCoefficients = (double[])data.AsphereCoefficients?.Clone();
                SagData = (double[])data.SagData?.Clone();
                SagDataSemiDiameter = data.SagDataSemiDiameter;
                SagTable = (double[,])data.SagTable?.Clone();
                SagTableWidth = data.SagTableWidth;
                SagTableHeight = data.SagTableHeight;
                SurfaceName = data.SurfaceName;
                LaserPowerDamage = data.LaserPowerDamage;
                ReferenceWavelengthNM = data.ReferenceWavelengthNM;
            }
        }

        public double? ClearAperture { get; set; }
        public double? ClearApertureTolerance { get; set; }
        public double? Radius { get; set; }
        public double? RadiusTolerance { get; set; }
        public double? Conic { get; set; }
        [Obsolete]
        public double? FTWPct { get; set; }
        [Obsolete]
        public double? FTWMin { get; set; }
        [Obsolete]
        public double? FTWMax { get; set; }
        public string Coating { get; set; }
        public string PowerIrr { get; set; }
        public double? TiltWedge { get; set; }
        public string ImperfectionTolerance { get; set; }
        public double? ProtectionChamfer { get; set; }
        public string PaintNotes { get; set; }
        public string SurfaceTexture { get; set; }

        // Aspheric Data
        public bool IsAspheric { get { return AsphereCoefficients != null; } }
        public double? VertexRadius { get; set; }
        public double? VertexRadiusTolerance { get; set; }
        public string IrregularityFormError { get; set; }
        public double? SlopeError { get; set; }
        public double? CentrationDecentration { get; set; }
        public double[] AsphereCoefficients { get; set; }
        public double[] SagData { get; set; }
        public double? SagDataSemiDiameter { get; set; }

        // Non-rotationally-symmetric data
        public double[,] SagTable { get; set; }
        public double? SagTableWidth { get; set; }
        public double? SagTableHeight { get; set; }

        public string SurfaceName { get; set; }

        public string SurfaceType { get; set; }

        public bool IsDrawingInputsSupported
        {
            get
            {
                switch (SurfaceType)
                {
                case nameof(Editors.LDE.SurfaceType.Standard):
                case nameof(Editors.LDE.SurfaceType.EvenAspheric):
                    return true;

                default:
                    return false;
                }
            }
        }

        public string LaserPowerDamage { get; set; }
        public double? ReferenceWavelengthNM { get; set; }

        public static string GetInvariantSurfaceTypeName(Editors.LDE.ILDERow surface)
        {
            return surface.Type.ToString();
        }

        public double GetAsphericSagAtRadius(double r)
        {
            double c, c2kp1;
            double[] ac;
            GetAsphereParams(out c, out c2kp1, out ac);
            return CalcAsphericSag(c, c2kp1, ac, r);
        }

        public List<double> GetAsphericSag(IEnumerable<double> radii)
        {
            double c, c2kp1;
            double[] ac;
            GetAsphereParams(out c, out c2kp1, out ac);
            List<double> sag = new List<double>();
            foreach (double r in radii)
                sag.Add(CalcAsphericSag(c, c2kp1, ac, r));
            return sag;
        }

        private void GetAsphereParams(
            out double c,
            out double c2kp1,
            out double[] ac)
        {
            c = this.Radius ?? 0.0;
            if (c != 0.0) c = 1.0 / c;
            double k = this.Conic ?? 0.0;
            c2kp1 = (1.0 + k) * c * c;
            ac = this.AsphereCoefficients;
            if (ac != null && ac[ac.Length - 1] == 0.0)
            {
                // trim trailing zeros
                List<double> coeffs = new List<double>(ac);
                while (coeffs.Count > 0 && coeffs[coeffs.Count - 1] == 0.0)
                {
                    coeffs.RemoveAt(coeffs.Count - 1);
                }
                ac = coeffs.ToArray();
            }
            //if (ac == null)
            //    ac = new double[0];
        }

        public static IEnumerable<double> CreateRange(double rMin, double rMax, int numR)
        {
            double dr = (rMax - rMin) / (numR - 1);
            for (int i = 0; i < numR; ++i)
            {
                yield return (rMin + dr * i);
            }
        }


        private static double CalcAsphericSag(
            double c, 
            double c2kp1, //(1+k)c^2
            double[] ac,
            double r)
        {
            double r2 = r * r;
            double term = 1.0 - c2kp1 * r2;
            if (term < 0.0)
                return Double.NaN;
            double sag = (c * r2) / (1.0 + Math.Sqrt(term));

            if (ac != null)
            {
                double rn = 1.0;
                for (int i = 0; i < ac.Length; ++i)
                {
                    rn *= r;
                    sag += ac[i] * rn;
                }
            }

            return sag;
        }
    }

    [Serializable]
    public class DrawingMaterialData
    {
        public DrawingMaterialData()
        {
        }

        public DrawingMaterialData(DrawingMaterialData material)
        {
            if (material != null)
            {
                Material = material.Material;
                IndexOfRefraction = material.IndexOfRefraction;
                IndexTolerance = material.IndexTolerance;
                AbbeNumber = material.AbbeNumber;
                AbbeTolerance = material.AbbeTolerance;
                Thickness = material.Thickness;
                ThicknessTolerance = material.ThicknessTolerance;
                StressBirefringence = material.StressBirefringence;
                BubblesInclusions = material.BubblesInclusions;
                InhomogeneityStriae = material.InhomogeneityStriae;
                Scratch = material.Scratch;
                Dig = material.Dig;
                ReferenceWL = material.ReferenceWL;
                TransmittedWavefront = material.TransmittedWavefront;
                WavefrontDeformTol = material.WavefrontDeformTol;
                TestWavelengthNM = material.TestWavelengthNM;
            }
        }

        public string Material { get; set; }
        public double? IndexOfRefraction { get; set; }
        public double? IndexTolerance { get; set; }
        public double? AbbeNumber { get; set; }
        public double? AbbeTolerance { get; set; }
        public double? Thickness { get; set; }
        public double? ThicknessTolerance { get; set; }
        public double? StressBirefringence { get; set; }
        public string BubblesInclusions { get; set; }
        public string InhomogeneityStriae { get; set; }
        public double? Scratch { get; set; }
        public double? Dig { get; set; }
        public double? ReferenceWL { get; set; }
        public string TransmittedWavefront { get; set; }
        public string WavefrontDeformTol { get; set; }
        public double? TestWavelengthNM { get; set; }

    }

    [Serializable]
    public class DrawingCementData
    {
        public DrawingCementData()
        {
        }

        public DrawingCementData(DrawingCementData cement)
        {
            if (cement != null)
            {
                CementType = cement.CementType;
                CementWedge = cement.CementWedge;
                SurfaceImpTol = cement.SurfaceImpTol;
                TransmitWavefront = cement.TransmitWavefront;
                RotationalInvariant = cement.RotationalInvariant;
                LocalizedImpTol = cement.LocalizedImpTol;
            }
        }

        public string CementType { get; set; }
        public double? CementWedge { get; set; }
        public double? SurfaceImpTol { get; set; }
        public double? TransmitWavefront { get; set; }
        public double? RotationalInvariant { get; set; }
        public double? LocalizedImpTol { get; set; }
    }

    [Serializable]
    public class DrawingComponentData
    {
        private readonly bool isSequentialMode;

        public int FrontSurfaceNumber { get; set; }
        public int BackSurfaceNumber { get; set; }
        public int ObjectNumber { get; set; }
        public DrawingSurfaceData FrontSurface { get; set; }
        public DrawingSurfaceData BackSurface { get; set; }
        public DrawingMaterialData Material { get; set; }
        // Singlet = 0
        // Doublet = 1
        // Triplet = 2,
        // ...
        public int ElementType { get; set; }
        public bool IsLeadElement { get; set; }
        public DrawingCementData CementData { get; set; }

        public DrawingComponentData(bool isSequentialMode)
        {
            this.isSequentialMode = isSequentialMode;

            ElementType = 0;
            IsLeadElement = true;
            CementData = new DrawingCementData();
        }

        public DrawingComponentData(DrawingComponentData component, bool isSequentialMode)
        {
            this.isSequentialMode = isSequentialMode;

            if (component != null)
            {
                FrontSurfaceNumber = component.FrontSurfaceNumber;
                BackSurfaceNumber = component.BackSurfaceNumber;
                ObjectNumber = component.ObjectNumber;
                FrontSurface = new DrawingSurfaceData(component.FrontSurface);
                BackSurface = new DrawingSurfaceData(component.BackSurface);
                Material = new DrawingMaterialData(component.Material);
                ElementType = component.ElementType;
                IsLeadElement = component.IsLeadElement;
                CementData = new DrawingCementData(component.CementData);
            }
        }

        public bool IsDrawingInputsSupportedForBackSurface => !isSequentialMode || BackSurface.IsDrawingInputsSupported;

        public bool IsDrawingInputsSupportedForFrontSurface => !isSequentialMode || FrontSurface.IsDrawingInputsSupported;
    }

    public enum LMXF_Platforms
    {
        Unknown = 0,
        SolidWorks = 1,
        Creo = 2,
    }

    [Serializable]
    public class LMXF_GeneralSettings
    {
        public bool IsEditable { get; set; }
        public bool ConvertStopToNSCAperture { get; set; }
        public double StopMechanicalHalfWidth { get; set; }
        public bool IncludeScatter { get; set; }
        public bool IncludeSplitting { get; set; }
        public int Precision { get; set; }
        public LMXF_Platforms TargetPlatform { get; set; }
        public string Notes { get; set; }     
    }

    [Serializable]
    public struct LMXF_OpticalAxisSurfaceData
    {
        // This is only accessible through configuration-specific data,
        // so it is (implicitly) already associated with a configuration.
        //public int Configuration;
        public int SurfaceNumber { get; set; }
        public bool AreCoordinatesGlobal { get; set; }
        public double X { get; set; }
        public double Y { get; set; }
        public double Z { get; set; }
        public double Nx { get; set; }
        public double Ny { get; set; }
        public double Nz { get; set; }
        public int ErrorCode { get; set; }
        public int VignetteCode { get; set; }
    }

    [Serializable]
    public class LMXF_SeqConfigData
    {
        public int OriginalConfigNumber { get; set; }
        public int[] FieldNumbers { get; set; }
        public string ZrdFileKey { get; set; }
        public string CrsFileKey { get; set; }
        public string FullFieldKey { get; set; }

        public double[] SeqSpotSizes { get; set; }
        public double[] NscSpotSizes { get; set; }
        public double[,] SeqMtfData { get; set; }
        public double[,] NscMtfData { get; set; }

        public string[] SeqSpotImageKeys { get; set; }
        public string[] NscSpotImageKeys { get; set; }
        public string[] DetectorDataKeys { get; set; }

        public int[] SourceObjects { get; set; }
        public int[] DetectorObjects { get; set; }
        public int[] ComponentSurfaces { get; set; }

        public double[,] ComponentPositions { get; set; }
        public int[][] IntendedPaths { get; set; }
        public double[] IntendedPathFlux { get; set; }
        //public double[] UnintendedPathFlux { get; set; }
        public double TotalFlux { get; set; }
        public LMXF_OpticalAxisSurfaceData[] OpticalAxisData { get; set; }
    }

    [Serializable]
    public class LMXF_SeqData
    {
        public static readonly double DefaultCriticalRayAngleTolerance = 0.001;
        public static readonly double DefaultCriticalRayPositionTolerance = 0.001;

        public string SEQFileName { get; set; }
        public string SEQFileKey { get; set; }
        public double DeltaSpotUM { get; set; }
        public double DeltaSpotPct { get; set; }
        public bool DeltaSpotUsePct { get; set; }
        public double DeltaBeamClipPct { get; set; }
        public double DeltaImgContPct { get; set; }
        public double MaxMtfFreq { get; set; }

        public LMXF_SeqConfigData[] ConfigData { get; set; }

        public bool IsCopiedData { get; set; }

        public double CriticalRayAngleTolerance { get; set; }

        public double CriticalRayPositionTolerance { get; set; }

        public int NumberOfAnalysisRays { get; set; }
    }

    [Serializable]
    public class LMXF_NscSourceData
    {
        public double[] NscSpotSizes { get; set; }
        public double[,] NscMtfData { get; set; }

        public string[] NscSpotImageKeys { get; set; }
        public string[] DetectorDataKeys { get; set; }

        public int[] SourceObjects { get; set; }
        public int[] DetectorObjects { get; set; }

        public int[][] IntendedPaths { get; set; }
        public double[] IntendedPathFlux { get; set; }
        public double TotalFlux { get; set; }
    }

    [Serializable]
    public class LMXF_NscConfigData
    {
        public int OriginalConfigNumber { get; set; }
        public int[] ComponentObjects { get; set; }
        public DrawingComponentData[] DrawingData { get; set; }
        public double[,] ComponentPositions { get; set; }
        // This is only generated when the file originates as NSC
        public LMXF_NscSourceData NscSourceData { get; set; }
    }

    [Serializable]
    public class LMXF_NscData
    {
        public bool IsNscSource { get; set; }
        public string NSCFileName { get; set; }
        public string NSCFileKey { get; set; }
        public LMXF_NscConfigData[] ConfigData { get; set; }
        public int StopObjectNumber { get; set; }
        public int StopObjectFace { get; set; }
    }

    public class LMXF_Wrapper
    {
        public const string GeneralSettingsKey = "GeneralSettings";
        public const string SeqDataKey = "SeqData";
        public const string NscDataKey = "NscData";
        public const string MetadataIdKey = "OB_GUID";

        private IDataDictionary DataFile;

        public LMXF_Wrapper(IDataDictionary dataFile)
        {
            this.DataFile = dataFile;
        }

        public LMXF_GeneralSettings GetGeneralSettings()
        {
            var entry = DataFile.GetEntry(GeneralSettingsKey);
            if (entry == null)
                return null;
            return entry.GetSerializableValue() as LMXF_GeneralSettings;
        }

        public LMXF_SeqData GetSeqData()
        {
            var entry = DataFile.GetEntry(SeqDataKey);
            if (entry == null)
                return null;
            return entry.GetSerializableValue() as LMXF_SeqData;
        }

        public LMXF_NscData GetNscData()
        {
            var entry = DataFile.GetEntry(NscDataKey);
            if (entry == null)
                return null;
            return entry.GetSerializableValue() as LMXF_NscData;
        }

        public void SaveSeqZAR(LMXF_SeqData seqData, string fileName)
        {
            var entry = DataFile.GetEntry(seqData.SEQFileKey);
            entry.GetFile(fileName);
        }

        public void SaveConfigZRD(LMXF_SeqConfigData cfgData, string fileName)
        {
            var entry = DataFile.GetEntry(cfgData.ZrdFileKey);
            entry.GetFile(fileName);
        }

        public void SaveConfigCRS(LMXF_SeqConfigData cfgData, string fileName)
        {
            var entry = DataFile.GetEntry(cfgData.CrsFileKey);
            entry.GetFile(fileName);
        }

        public void SaveConfigDetector(LMXF_SeqConfigData cfgData, int fieldIdx, string fileName)
        {
            var entry = DataFile.GetEntry(cfgData.DetectorDataKeys[fieldIdx]);
            entry.GetFile(fileName);
        }

        public void SaveConfigFullFieldDetector(LMXF_SeqConfigData cfgData, string fileName)
        {
            var entry = DataFile.GetEntry(cfgData.FullFieldKey);
            entry?.GetFile(fileName);
        }

        public void SaveSpotFile(LMXF_SeqConfigData cfgData, bool seqFile, int fieldIdx, string fileName)
        {
            string key = seqFile ? cfgData.SeqSpotImageKeys[fieldIdx] : cfgData.NscSpotImageKeys[fieldIdx];
            var entry = DataFile.GetEntry(key);
            entry.GetFile(fileName);
        }

        public bool SaveNscZAR(LMXF_NscData nscData, string fileName)
        {
            IDataEntry entry = null;
            if (nscData != null)
                entry = DataFile.GetEntry(nscData.NSCFileKey);
            if (entry == null)
                entry = DataFile.GetEntry("NSC_ZAR");

            if (entry == null)
            {
                return false;
            }
            else
            {
                entry.GetFile(fileName);
                return true;
            }
        }

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
