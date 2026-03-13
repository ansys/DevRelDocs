# File RayTrace.cs

<a id="_ray_trace_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::RayTrace::INSCRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_n_s_c_ray_trace)
* [ZOSAPI::Tools::RayTrace::ILightningTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_lightning_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_lightning_trace)
* [ZOSAPI::Tools::RayTrace::IBatchRayTrace](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_batch_ray_trace)
* [ZOSAPI::Tools::RayTrace::IRayTraceNormUnpolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_unpol_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceDirectUnpolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_unpol_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceNormPolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_norm_pol_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceDirectPolData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_direct_pol_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceNSCData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_data)
* [ZOSAPI::Tools::RayTrace::IRayTraceNSCSourceData](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_source_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_ray_trace_n_s_c_source_data)
* [ZOSAPI::Tools::RayTrace::IZRDReader](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader)
* [ZOSAPI::Tools::RayTrace::IZRDReaderResults](interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader_results.md#interface_z_o_s_a_p_i_1_1_tools_1_1_ray_trace_1_1_i_z_r_d_reader_results)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::RayTrace](namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_ray_trace)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO.MemoryMappedFiles;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using ZOSAPI.Analysis;

namespace ZOSAPI.Tools.RayTrace
{
    [ComVisible(true)]
    [Guid("BFC61296-3BD7-4ED4-B566-0E9E6B86A4D0")]
    public enum ZRDFormatType
    {
        UncompressedFullData = 0,
        CompressedBasicData = 1,
        CompressedFullData = 2,
    }

    [Guid("D7BB5E27-8A09-47BD-88CA-75C60042EEC0")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSCRayTrace : ISystemTool
    {
        ErrorType ClearDetectors(int DetectorNumber);
        ErrorType ClearDetectorObject(int ObjectNumber);
        bool AutoUpdate { get; set; }
        int NumberOfCores { get; set; }
        bool UsePolarization { get; set; }
        bool IgnoreErrors { get; set; }
        bool SplitNSCRays { get; set; }
        bool ScatterNSCRays { get; set; }
        bool SaveRays { get; set; }
        string SaveRaysFile { get; set; }

        bool SavePaths { get; set; }
        string SavePathsFile { get; set; }
        ZRDFormatType ZRDFormat { get; set; }
        string Filter { get; set; }

        double DeadRayErrors { get; }
        double DeadRayThreshold { get; }
        double GetTotalRayEnergy();

        void SetRandomSeed(int seed);
        void ResetRandomSeed();

        // Used to split a NSC ray trace across multiple calls
        // Seed - shared seed for all calls
        // Group - used to offset rays
        void SetPartialRTMode(int seed, int group);

        // Common for all HPC enabled tools
        bool IsHPCEnabled { get; }
        double HPCEstimatedTimeS { get; }
        double HPCRemainingTimeS { get; }
        double HPCTimeToStartS { get; }
        int HPCQueuePosition { get; }
        HPCRunState HPCState { get; }
        bool HPCHasTimeEstimate { get; }
        bool EstimateHPCTime();

        // Specific to ray trace
        double RayMultiplier { get; set; }
        bool HasHPCUnsupportedDetectors { get; }

    }

    [ComVisible(true)]
    [Guid("C1A432DB-F63D-484A-8B2F-D4E6161B4D4C")]
    public enum LTRaySampling
    {
        S_1X_Low = 0,
        S_4X,
        S_16X,
        S_64X,
        S_256X,
        S_1024X,

    }

    [ComVisible(true)]
    [Guid("77B661D4-DA2B-482F-99C7-992DFD2602EB")]
    public enum LTEdgeSasmpling
    {
        S_1X_Low = 0,
        S_4X,
        S_16X,
        S_64X,
        S_256X,
    }

    [Guid("7B974DCA-5ED6-4756-94C9-23859D06C894")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ILightningTrace : ISystemTool
    {
        LTRaySampling RaySampling { get; set; }
        LTEdgeSasmpling EdgeSampling { get; set; }
    }

    [ComVisible(true)]
    [Guid("5210D2F6-3C16-4E6D-9E1E-4CFCC1899553")]
    public enum RaysType
    {
        Real,
        Paraxial,
    }

    [ComVisible(true)]
    [Guid("005A556F-F5CE-4D97-B0A2-1C4916D9D508")]
    public enum OPDMode
    {
        None,
        Current,
        CurrentAndChief,
    }

    [Guid("3C1DFE73-DA99-42C9-B7D1-2BBD9642B211")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IBatchRayTrace : ISystemTool
    {
        // Mode 0
        IRayTraceNormUnpolData CreateNormUnpol(int MaxRays, RaysType rayType, int toSurface);
        bool SingleRayNormUnpol(
            RaysType rayType,
            int toSurf, int waveNumber,
            double Hx, double Hy,
            double Px, double Py,
            bool calcOPD,
            out int ErrorCode, out int vignetteCode,
            out double xo, out double yo, out double zo,
            out double lo, out double mo, out double no,
            out double l2o, out double m2o, out double n2o,
            out double opd,
            out double intensity);

        // Mode 1
        IRayTraceDirectUnpolData CreateDirectUnpol(int MaxRays, RaysType rayType, int startSurface, int toSurface);
        bool SingleRayDirectUnpol(
            RaysType rayType,
            int startSurface, int toSurface,
            int waveNumber,
            double X, double Y, double Z,
            double L, double M, double N,
            out int ErrorCode, out int vignetteCode,
            out double xo, out double yo, out double zo,
            out double lo, out double mo, out double no,
            out double l2o, out double m2o, out double n2o,
            out double intensity);

        // Mode 2
        IRayTraceNormPolData CreateNormPol(int MaxRays, RaysType rayType, double Ex, double Ey, double phaX, double phaY, int toSurface);
        bool SingleRayNormPol(
            RaysType rayType,
            double Ex, double Ey, double phaX, double phaY,
            int toSurf, int waveNumber,
            double Hx, double Hy,
            double Px, double Py,
            double exr, double exi,
            double eyr, double eyi,
            double ezr, double ezi,
            out int ErrorCode,
            out double exro, out double exio,
            out double eyro, out double eyio,
            out double ezro, out double ezio,
            out double intensity);
        bool SingleRayNormPolFull(
            RaysType rayType,
            double Ex, double Ey, double phaX, double phaY,
            int toSurf, int waveNumber,
            double Hx, double Hy,
            double Px, double Py,
            double exr, double exi,
            double eyr, double eyi,
            double ezr, double ezi,
            out int ErrorCode,
            out double xo, out double yo, out double zo,
            out double lo, out double mo, out double no,
            out double exro, out double exio,
            out double eyro, out double eyio,
            out double ezro, out double ezio,
            out double intensity);

        // Mode 3
        IRayTraceDirectPolData CreateDirectPol(int MaxRays, RaysType rayType, double Ex, double Ey, double phax, double phay, int startSurface, int toSurface);
        bool SingleRayDirectPol(
            RaysType rayType,
            double Ex, double Ey, double phaX, double phaY,
            int startSurface, int toSurface,
            int waveNumber,
            double X, double Y, double Z,
            double L, double M, double N,
            out int ErrorCode, out int vignetteCode,
            out double exro, out double exio,
            out double eyro, out double eyio,
            out double ezro, out double ezio,
            out double intensity);

        bool SingleRayDirectPolFull(
            RaysType rayType,
            double Ex, double Ey, double phaX, double phaY,
            int startSurface, int toSurface,
            int waveNumber,
            double X, double Y, double Z,
            double L, double M, double N,
            out int ErrorCode, out int vignetteCode,
            out double xo, out double yo, out double zo,
            out double lo, out double mo, out double no,
            out double exro, out double exio,
            out double eyro, out double eyio,
            out double ezro, out double ezio,
            out double intensity);

        // Mode 5
        IRayTraceNSCData CreateNSC(int MaxRays, int maxSegments, double coherenceLength);

        IRayTraceNSCSourceData CreateNSCSourceData(int maxSegments, double coherenceLength);

        bool GetDirectFieldCoordinates(
            int waveNumber,
            RaysType rayType,
            double Hx, double Hy,
            double Px, double Py,
            out double X, out double Y, out double Z,
            out double L, out double M, out double N
            );

        void GetPhase(
            double L, double M, double N,
            double jx, double jy,
            double xPhaseDeg, double yPhaseDeg,
            double intensity,
            out double exr, out double exi,
            out double eyr, out double eyi,
            out double ezr, out double ezi
            );

    }

    [Guid("182EE3AA-9702-4792-8449-BB7A38980205")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IRayTraceNormUnpolData
    {
        int NumberOfRays { get; }
        int MaxRays { get; }

        void ClearData();
        bool AddRay(int waveNumber, double Hx, double Hy, double Px, double Py, OPDMode calcOPD);

        bool HasResultData { get; }
        bool StartReadingResults();
        bool ReadNextResult(
            out int rayNumber,
            out int ErrorCode,
            out int vignetteCode,
            out double X, out double Y, out double Z,
            out double L, out double M, out double N,
            out double l2, out double m2, out double n2,
            out double opd,
            out double intensity);

    }

    [Guid("B732DB4D-D3CD-4BBB-9A26-B4C46A66B609")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IRayTraceDirectUnpolData
    {
        int NumberOfRays { get; }
        int MaxRays { get; }

        void ClearData();
        bool AddRay(
            int waveNumber,
            double X, double Y, double Z,
            double L, double M, double N);

        bool HasResultData { get; }
        bool StartReadingResults();
        bool ReadNextResult(
            out int rayNumber,
            out int ErrorCode,
            out int vignetteCode,
            out double X, out double Y, out double Z,
            out double L, out double M, out double N,
            out double l2, out double m2, out double n2,
            out double intensity);
    }

    [Guid("30AFFFE4-C357-4D07-BF47-2CF989B93DE3")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IRayTraceNormPolData
    {
        int NumberOfRays { get; }
        int MaxRays { get; }

        void ClearData();
        bool AddRay(
            int waveNumber,
            double Hx, double Hy,
            double Px, double Py,
            double exr, double exi,
            double eyr, double eyi,
            double ezr, double ezi);

        bool HasResultData { get; }
        bool StartReadingResults();
        bool ReadNextResult(
            out int rayNumber,
            out int ErrorCode,
            out double exr, out double exi,
            out double eyr, out double eyi,
            out double ezr, out double ezi,
            out double intensity);
        bool ReadNextResultFull(
            out int rayNumber,
            out int ErrorCode,
            out double xo, out double yo, out double zo,
            out double lo, out double mo, out double no,
            out double exr, out double exi,
            out double eyr, out double eyi,
            out double ezr, out double ezi,
            out double intensity);
    }

    [Guid("BC99E52B-73A9-4764-ADC4-178257B8608A")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IRayTraceDirectPolData
    {
        int NumberOfRays { get; }
        int MaxRays { get; }

        void ClearData();
        bool AddRay(int waveNumber, double X, double Y, double Z, double L, double M, double N);

        bool HasResultData { get; }
        bool StartReadingResults();
        bool ReadNextResult(
            out int rayNumber,
            out int ErrorCode,
            out int vignetteCode,
            out double exr,
            out double exi,
            out double eyr,
            out double eyi,
            out double ezr,
            out double ezi,
            out double intensity);
        bool ReadNextResultFull(
            out int rayNumber,
            out int ErrorCode,
            out int vignetteCode,
            out double xo, out double yo, out double zo,
            out double lo, out double mo, out double no,
            out double exr,
            out double exi,
            out double eyr,
            out double eyi,
            out double ezr,
            out double ezi,
            out double intensity);
    }

    [ComVisible(true)]
    [Guid("91FB7AEE-BAFF-4469-B2F9-13D4586CA66E")]
    public enum NSCTraceOptions
    {
        None = 0,
        UsePolarization = 1,
        UseSplitting = 2,
        UseScattering = 4,
        UsePolarizationSplitting = 3,
        UsePolarizationScattering = 5,
        UseSplittingScattering = 6,
        UsePolarizationSplittingScattering = 7,
    }

    [Guid("A78E9CA6-AEC2-4C23-AD7E-43EE8DD65DFB")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IRayTraceNSCData
    {
        int NumberOfRays { get; }
        int MaxRays { get; }

        void ClearData();

        bool AddRay(
            int waveNumber,
            int surf,
            NSCTraceOptions mode,
            double X, double Y, double Z,
            double L, double M, double N,
            int InsideOf,
            double exr, double exi,
            double eyr, double eyi,
            double ezr, double ezi);

        bool HasResultData { get; }
        bool StartReadingResults();

        bool ReadNextResult(
            out int rayNumber,
            out int ErrorCode,
            out int wave,
            out int numSegments);

        bool ReadNextSegment(
            out int segmentLevel,
            out int segmentParent,
            out int hitObj,
            out int InsideOf,
            out double X, out double Y, out double Z,
            out double L, out double M, out double N,
            out double exr, out double exi,
            out double eyr, out double eyi,
            out double ezr, out double ezi,
            out double intensity,
            out double pathLength);

    }

    [Guid("ECEBA620-529B-490D-BBC3-9EE693EEF4F6")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IRayTraceNSCSourceData
    {
        bool UseSingleSource { get; set; }
        int SurfaceNumber { get; set; }
        int ObjectNumber { get; set; }
        int MaxRays { get; set; }

        NSCTraceOptions TraceOptions { get; set; }
        int Wavelength { get; set; }
        void UsePrimaryWavelength();
        void UseAnyWavelength();

        bool HasResultData { get; }
        bool StartReadingResults();

        bool ReadNextResult(
            out int rayNumber,
            out int ErrorCode,
            out int wave,
            out int numSegments
            );

        bool ReadNextSegment(
            out int segmentLevel,
            out int segmentParent,
            out int hitObj,
            out int InsideOf,
            out double x, out double y, out double z,
            out double l, out double m, out double n,
            out double exr, out double exi,
            out double eyr, out double eyi,
            out double ezr, out double ezi,
            out double intensity,
            out double pathLength
            );
    }

    [Serializable]
    [StructLayout(LayoutKind.Sequential)]
    [ComVisible(true)]
    public struct BatchRayTraceDataEntry
    {
        public double x;
        public double y;
        public double z;
        public double l;
        public double m;
        public double n;
        public double opd;
        public double intensity;
        public double exr;
        public double exi;
        public double eyr;
        public double eyi;
        public double ezr;
        public double ezi;
        public int wave;
        public int error;
        public int vigcode;
        public int wantopd;
    }

    [Serializable]
    public class BatchRayTraceDataHolder : System.Runtime.Serialization.ISerializable
    {
        public BatchRayTraceDataEntry[] Data;

        public BatchRayTraceDataHolder()
        {

        }

        public BatchRayTraceDataHolder(BatchRayTraceDataEntry[] data)
        {
            this.Data = data;
        }

        public BatchRayTraceDataHolder(System.Runtime.Serialization.SerializationInfo info, System.Runtime.Serialization.StreamingContext context)
        {
            int numData = 0;
            byte[] buffer = null;

            foreach (var item in info)
            {
                switch (item.Name)
                {
                    case "Length": numData = (int)item.Value; break;
                    case "Buffer": buffer = (byte[])item.Value; break;
                }
            }

            if (numData >= 0 && buffer != null)
            {
                this.Data = new BatchRayTraceDataEntry[numData];

                int dataSize = Marshal.SizeOf(Data[0]);
                long totalSize = numData * dataSize;

                var handle = GCHandle.Alloc(this.Data, GCHandleType.Pinned);
                try
                {
                    IntPtr p = handle.AddrOfPinnedObject();
                    Marshal.Copy(buffer, 0, p, (int)totalSize);
                }
                finally
                {
                    handle.Free();
                }
            }
        }

        public void GetObjectData(System.Runtime.Serialization.SerializationInfo info, System.Runtime.Serialization.StreamingContext context)
        {
            int numData;
            if (Data == null)
                numData = 0;
            else
                numData = Data.Length;

            info.AddValue("Length", numData);
            if (numData > 0)
            {
                int dataSize = Marshal.SizeOf(Data[0]);
                long totalSize = numData * dataSize;
                System.Diagnostics.Debug.Assert(totalSize < Int32.MaxValue);

                byte[] buffer = new byte[totalSize];

                var handle = GCHandle.Alloc(this.Data, GCHandleType.Pinned);
                try
                {
                    IntPtr p = handle.AddrOfPinnedObject();
                    Marshal.Copy(p, buffer, 0, (int)totalSize);
                    info.AddValue("Buffer", buffer);
                }
                finally
                {
                    handle.Free();
                }
            }
        }
    }

    [Guid("B48D3A45-0FE6-44B1-9BDF-E6A1D6B7546B")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IZRDReader : ISystemTool
    {
        string ZRDFile { set; }
        string Filter { get; set; }
        IZRDReaderResults GetResults();
    }

    [Guid("C71BA61B-9BC1-4092-88B2-9B51A89D7ECE")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IZRDReaderResults
    {
        bool IsValid { get; }
        int RayNumber { get; }
        int WaveIndex { get; }
        double WlUM { get; }
        int NumSegments { get; }
        bool SegTerminated { get; }
        bool SegReflected { get; }
        bool SegTransmitted { get; }
        bool SegScattered { get; }
        bool SegDiffracted { get; }
        bool SegBulkScattered { get; }
        bool SegmentTIR { get; }
        bool ParentGhost { get; }
        bool ParentDiffracted { get; }
        bool ParentScattered { get; }
        bool RayError { get; }
        int SegmentLevel { get; }
        int SegmentParent { get; }
        int HitObject { get; }
        int HitFace { get; }
        int InsideOf { get; }
        double X { get; }
        double Y { get; }
        double Z { get; }
        double L { get; }
        double M { get; }
        double N { get; }
        double EXR { get; }
        double EXI { get; }
        double EYR { get; }
        double EYI { get; }
        double EZR { get; }
        double EZI { get; }
        double Intensity { get; }
        double PathLength { get; }
        double OpticalPathW { get; }
        double OpticalPathLU { get; }
        double XYBin { get; }
        double LMBin { get; }
        double XNorm { get; }
        double YNorm { get; }
        double ZNorm { get; }
        double Index { get; }
        double StartingPhase { get; }
        double PhaseOf { get; }
        double PhaseAt { get; }
        bool HasOrderX { get; }
        bool HasOrderY { get; }
        int OrderX { get; }
        int OrderY { get; }

        bool ReadNextResult(
            out int rayNumber,
            out int waveIndex,
            out double wlUM,
            out int numSegments
            );

        bool ReadNextRay();

        bool ReadNextSegment(
            out int segmentLevel,
            out int segmentParent,
            out int hitObj,
            out int hitFace,
            out int insideOf,
            out RayStatus status,
            out double x, out double y, out double z,
            out double l, out double m, out double n,
            out double exr, out double exi,
            out double eyr, out double eyi,
            out double ezr, out double ezi,
            out double intensity,
            out double pathLength
            );

        bool ReadNextSegmentFull(
            out int segmentLevel,
            out int segmentParent,
            out int hitObj, out int hitFace,
            out int insideOf,
            out RayStatus status,
            out double x, out double y, out double z,
            out double l, out double m, out double n,
            out double exr, out double exi,
            out double eyr, out double eyi,
            out double ezr, out double ezi,
            out double intensity,
            out double pathLength,
            //out int hitFaceGroup,
            out int xybin, out int lmbin,
            out double xNorm, out double yNorm, out double zNorm,
            out double index, out double startingPhase,
            out double phaseOf, out double phaseAt);

        bool ReadNextRaySegment();

        // bool Reset();
    }

    [Flags]
    [ComVisible(true)]
    [Guid("312D7569-AAB6-4CBE-93D7-7B99F0B2A90E")]
    public enum RayStatus
    {
        Parent = 0x00000000,
        Terminated = 0x00000001,
        Reflected = 0x00000002,
        Transmitted = 0x00000004,
        Scattered = 0x00000008,
        Diffracted = 0x00000010,
        GhostedFrom = 0x00000020,
        DiffractedFrom = 0x00000040,
        ScatteredFrom = 0x00000080,
        RayError = 0x00000100,
        BulkScattered = 0x00000200,
        WaveShifted = 0x00000400,
        TIR = 0x00000800,
        OrdinaryRay = 0x00010000,
        ExtraordinaryRay = 0x00020000,
        WaveShiftPL = 0x00040000,
    }

    [Serializable]
    [StructLayout(LayoutKind.Sequential)]
    [ComVisible(true)]
    public struct RayPathDataEntry
    {
        public uint status;
        public int level;
        public int hit_object;
        public int hit_face;
        public int hit_facet_group;
        public int in_object;
        public int parent;
        public int old_seg;
        public int xybin, lmbin;
        public double index, starting_phase;
        public double x, y, z;
        public double l, m, n;
        public double l2, m2, n2;
        public double path_to, intensity;
        public double phase_of, phase_at;
        public double exr, exi, eyr, eyi, ezr, ezi;
        public double optical_path_w, optical_path_lu;
        public int order_x, order_y;
        public double absorbedFlux;
    }

    [Serializable]
    public class RayPathDataHolder : System.Runtime.Serialization.ISerializable
    {
        private long Offset;
        private long Size;

        public RayPathDataHolder()
        {

        }

        public RayPathDataHolder(long offset, long size)
        {
            this.Offset = offset;
            this.Size = size;
        }

        public RayPathDataHolder(System.Runtime.Serialization.SerializationInfo info, System.Runtime.Serialization.StreamingContext context)
        {
            Offset = 0;
            Size = 0;
            foreach (var item in info)
            {
                switch (item.Name)
                {
                    case nameof(Size): this.Size = (long)item.Value; break;
                    case nameof(Offset): this.Offset = (long)item.Value; break;
                }
            }
        }

        public void GetObjectData(System.Runtime.Serialization.SerializationInfo info, System.Runtime.Serialization.StreamingContext context)
        {
            info.AddValue(nameof(Size), this.Size);
            info.AddValue(nameof(Offset), this.Offset);
        }

        public bool GetData(MemoryMappedFile mmf, ref RayPathDataEntry[] data)
        {
            if (this.Size <= 0)
                return false;

            using (var accessor = mmf.CreateViewAccessor(this.Offset, this.Size, MemoryMappedFileAccess.Read))
            {
                if (accessor == null || !accessor.CanRead)
                    return false;

                int dataSize = Marshal.SizeOf(typeof(RayPathDataEntry));
                int numBlocks = (int)(this.Size / dataSize);
                if (numBlocks < 1)
                    return false;

                if (data == null || data.Length != numBlocks)
                    data = new RayPathDataEntry[numBlocks];

                accessor.ReadArray<RayPathDataEntry>(0, data, 0, numBlocks);
                return true;
            }
        }

        public static RayPathDataHolder SetData(MemoryMappedFile mmf, RayPathDataEntry[] data, int index)
        {
            if (data == null || data.Length == 0)
                return new RayTrace.RayPathDataHolder(0, 0);

            int dataSize = Marshal.SizeOf(typeof(RayPathDataEntry));
            int numBlocks = data.Length;
            long blockSize = dataSize * numBlocks;
            long offset = blockSize * index;
            using (var accessor = mmf.CreateViewAccessor(offset, blockSize, MemoryMappedFileAccess.Write))
            {
                accessor.WriteArray<RayPathDataEntry>(0, data, 0, numBlocks);
                return new RayTrace.RayPathDataHolder(offset, blockSize);
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
