# Namespace ZOSAPI::Analysis

<a id="namespace_z_o_s_a_p_i_1_1_analysis"></a>

![][C#]

**Definition**:


## Child namespaces

* [ZOSAPI::Analysis::Data](namespace_z_o_s_a_p_i_1_1_analysis_1_1_data.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_data)
* [ZOSAPI::Analysis::PhysicalOptics](namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics)
* [ZOSAPI::Analysis::RayTracing](namespace_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Tolerancing](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing)

## Classes

* [ZOSAPI::Analysis::I\_Analyses](interface_z_o_s_a_p_i_1_1_analysis_1_1_i___analyses.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i___analyses)
* [ZOSAPI::Analysis::IA\_](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_a__)
* [ZOSAPI::Analysis::IColorTranslator](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator)
* [ZOSAPI::Analysis::IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)
* [ZOSAPI::Analysis::IMessages](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_messages.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_messages)
* [ZOSAPI::Analysis::IUser2DLineData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user2_d_line_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user2_d_line_data)
* [ZOSAPI::Analysis::IUserAnalysisData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data)
* [ZOSAPI::Analysis::IUserGridData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_data)
* [ZOSAPI::Analysis::IUserGridRGBData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_r_g_b_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_r_g_b_data)
* [ZOSAPI::Analysis::IUserTextData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_text_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_text_data)

## Enumeration types

### Enumeration type AnalysisIDM

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7"></a>

![][public]

**Definition**:


```csharp
enum AnalysisIDM {
  XXXTemplateXXX = -1,
  RayFan,
  OpticalPathFan,
  PupilAberrationFan,
  FieldCurvatureAndDistortion,
  FocalShiftDiagram,
  GridDistortion,
  LateralColor,
  LongitudinalAberration,
  RayTrace,
  SeidelCoefficients,
  SeidelDiagram,
  ZernikeAnnularCoefficients,
  ZernikeCoefficientsVsField,
  ZernikeFringeCoefficients,
  ZernikeStandardCoefficients,
  FftMtf,
  FftThroughFocusMtf,
  GeometricThroughFocusMtf,
  GeometricMtf,
  FftMtfMap,
  GeometricMtfMap,
  FftSurfaceMtf,
  FftMtfvsField,
  GeometricMtfvsField,
  HuygensMtfvsField,
  HuygensMtf,
  HuygensSurfaceMtf,
  HuygensThroughFocusMtf,
  FftPsf,
  FftPsfCrossSection,
  FftPsfLineEdgeSpread,
  HuygensPsfCrossSection,
  HuygensPsf,
  DiffractionEncircledEnergy,
  GeometricEncircledEnergy,
  GeometricLineEdgeSpread,
  ExtendedSourceEncircledEnergy,
  SurfaceCurvatureCross,
  SurfacePhaseCross,
  SurfaceSagCross,
  SurfaceCurvature,
  SurfacePhase,
  SurfaceSag,
  StandardSpot,
  ThroughFocusSpot,
  FullFieldSpot,
  MatrixSpot,
  ConfigurationMatrixSpot,
  RMSField,
  RMSFieldMap,
  RMSLambdaDiagram,
  RMSFocus,
  Foucault,
  Interferogram,
  WavefrontMap,
  DetectorViewer,
  Draw2D,
  Draw3D,
  ImageSimulation,
  GeometricImageAnalysis,
  IMABIMFileViewer,
  GeometricBitmapImageAnalysis,
  BitmapFileViewer,
  LightSourceAnalysis,
  PartiallyCoherentImageAnalysis,
  ExtendedDiffractionImageAnalysis,
  BiocularFieldOfViewAnalysis,
  BiocularDipvergenceConvergence,
  RelativeIllumination,
  VignettingDiagramSettings,
  FootprintSettings,
  YYbarDiagram,
  PowerFieldMapSettings,
  PowerPupilMapSettings,
  IncidentAnglevsImageHeight,
  FiberCouplingSettings,
  YNIContributions,
  SagTable,
  CardinalPoints,
  DispersionDiagram,
  GlassMap,
  AthermalGlassMap,
  InternalTransmissionvsWavelength,
  DispersionvsWavelength,
  GrinProfile,
  GradiumProfile,
  UniversalPlot1D,
  UniversalPlot2D,
  PolarizationRayTrace,
  PolarizationPupilMap,
  Transmission,
  PhaseAberration,
  TransmissionFan,
  ParaxialGaussianBeam,
  SkewGaussianBeam,
  PhysicalOpticsPropagation,
  BeamFileViewer,
  ReflectionvsAngle,
  TransmissionvsAngle,
  AbsorptionvsAngle,
  DiattenuationvsAngle,
  PhasevsAngle,
  RetardancevsAngle,
  ReflectionvsWavelength,
  TransmissionvsWavelength,
  AbsorptionvsWavelength,
  DiattenuationvsWavelength,
  PhasevsWavelength,
  RetardancevsWavelength,
  DirectivityPlot,
  SourcePolarViewer,
  PhotoluminscenceViewer,
  SourceSpectrumViewer,
  RadiantSourceModelViewerSettings,
  SurfaceDataSettings,
  PrescriptionDataSettings,
  FileComparatorSettings,
  PartViewer,
  ReverseRadianceAnalysis,
  PathAnalysis,
  FluxvsWavelength,
  RoadwayLighting,
  SourceIlluminationMap,
  ScatterFunctionViewer,
  ScatterPolarPlotSettings,
  ZemaxElementDrawing,
  ShadedModel,
  NSCShadedModel,
  NSC3DLayout,
  NSCObjectViewer,
  RayDatabaseViewer,
  ISOElementDrawing,
  SystemData,
  TestPlateList,
  SourceColorChart1931,
  SourceColorChart1976,
  PrescriptionGraphic,
  CriticalRayTracer,
  ContrastLoss,
  CoatingListing,
  FullFieldAberration,
  SurfaceSlope,
  SurfaceSlopeCross,
  QuickYield,
  SystemCheck,
  ToleranceYield,
  ToleranceHistogram,
  DiffEfficiency2D,
  DiffEfficiencyAngular,
  DiffEfficiencyChromatic,
  NSCSurfaceSag,
  NSCSingleRayTrace,
  NSCGeometricMtf,
  SurfacePhaseSlope,
  SurfacePhaseSlopeCross,
  STARAlignCheck,
  STARSysViewer,
  STAR2DDefPlot,
  STARPerfChange,
  STARIndexVsTemp,
  STARInspectFEA,
  UserDefinedCOM,
  NEST,
  NSCSpotStandardNative
}
```


All available analysis types. See the I_Analyses interface for more information.


#### Enumerator XXXTemplateXXX

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a6d17d579dbc8163b589935af76ae6504"></a>


#### Enumerator RayFan

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ac20a9cc330728066d56a14aa05947ca3"></a>

Ray Fan.


#### Enumerator OpticalPathFan

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7abf42f18145897a21b3a5ad9f693ed2a9"></a>

OPD Fan.


#### Enumerator PupilAberrationFan

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a4bba13919674f49e4ad836b013c224b5"></a>

Pupil Aberration Fan.


#### Enumerator FieldCurvatureAndDistortion

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a70ffc3b578d7731cb788ee5ba9831a61"></a>

Field Curv/Dist.


#### Enumerator FocalShiftDiagram

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aa55bf7911d9206993a624f8b6a7a0fbc"></a>

Focal Shift.


#### Enumerator GridDistortion

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab2270b3a0bf552430c6cd89163c85387"></a>

Grid Distortion.


#### Enumerator LateralColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab4ce6531669dfad988205251ad57a21d"></a>

Lateral Color.


#### Enumerator LongitudinalAberration

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7acf0c79c313db3e995e9ac210cf393d36"></a>

Longitudinal Aberration.


#### Enumerator RayTrace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a143874eab0d95152e7ac0009deaefade"></a>

Single Ray Trace.


#### Enumerator SeidelCoefficients

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a0e2f5f9513373a811907f490f7b4afb4"></a>

Seidel Coefficients.


#### Enumerator SeidelDiagram

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a902547cd2c7798cc48fa425f66bb6ebe"></a>

Seidel Diagram.


#### Enumerator ZernikeAnnularCoefficients

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aa94489ad144ea1a59b368a8ea471200d"></a>

Zernike Annular Coefficients.


#### Enumerator ZernikeCoefficientsVsField

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a3cdc38fb727e09f1601fa7a9f667b812"></a>

Zernike Coefficients vs. Field.


#### Enumerator ZernikeFringeCoefficients

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a3f6288ec7ec4a4a34c839d9ce6d540d8"></a>

Zernike Fringe Coefficients.


#### Enumerator ZernikeStandardCoefficients

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a5cfaee3bc5a2526c3fffe815395cbc3e"></a>

Zernike Standard Coefficients.


#### Enumerator FftMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a319a3385e3317213ca37cc2d2fd0205f"></a>

FFT MTF.


#### Enumerator FftThroughFocusMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a9efe71d55ce33c1ff5281186d6219ab1"></a>

FFT Through Focus MTF.


#### Enumerator GeometricThroughFocusMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a3269fac7738a42a18b6e0f5bf7634cc5"></a>

Through Focus Geometric MTF.


#### Enumerator GeometricMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a2ff7453c21a8ccec484e938ccd3ec569"></a>

Geometric MTF.


#### Enumerator FftMtfMap

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a20236edb8bcf9dfd70b66732fea0d330"></a>

FFT MTF Map.


#### Enumerator GeometricMtfMap

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab39a936974d559f788df6145171eb1af"></a>

Geometric MTF Map.


#### Enumerator FftSurfaceMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7adffba9d892f175992f7a3de2a7572da5"></a>

FFT Surface MTF.


#### Enumerator FftMtfvsField

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a2ef5faaf9507345d5e759faaad4451cf"></a>

FFT MTF vs. Field.


#### Enumerator GeometricMtfvsField

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a8284b94dbceca87ca09525b841e90d9f"></a>

Geometric MTF vs. Field.


#### Enumerator HuygensMtfvsField

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7af2bc1336ed60438a5f3081e79555bb22"></a>

Huygens MTF vs. Field.


#### Enumerator HuygensMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a97ecbbfc9efd73ee80569bd7d8bf7526"></a>

Huygens MTF.


#### Enumerator HuygensSurfaceMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a1bab416558b8920b92a3efdef58c7602"></a>

Huygens Surface MTF.


#### Enumerator HuygensThroughFocusMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7adeaffa9266e3fd4402b9fdfd32968734"></a>

Huygens Through Focus MTF.


#### Enumerator FftPsf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a30c8876556bdc588bba128b48ad6b238"></a>

FFT PSF.


#### Enumerator FftPsfCrossSection

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a5457c21826f9efa101ed741ea2a84e58"></a>

FFT PSF Cross Section.


#### Enumerator FftPsfLineEdgeSpread

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab0055e1bd3f4fb367df78cf5b27c5979"></a>

FFT Line/Edge Spread.


#### Enumerator HuygensPsfCrossSection

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7af5a1235586f368db113ee7037699ad1b"></a>

Huygens PSF Cross Section.


#### Enumerator HuygensPsf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7af09703dd54cc48b496ebda9c3f26fef5"></a>

Huygens PSF.


#### Enumerator DiffractionEncircledEnergy

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a43233c68e39598693be6d1211f492ed9"></a>

Diffraction Encircled Energy.


#### Enumerator GeometricEncircledEnergy

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7afa907dfae7fbeceebc748ec558769f94"></a>

Geometric Encircled Energy.


#### Enumerator GeometricLineEdgeSpread

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a454f57a8a384a961076f72241dd75513"></a>

Line/Edge Spread.


#### Enumerator ExtendedSourceEncircledEnergy

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a59c804d1f2b1f485dc4a5631d7ef32f9"></a>

Extended Source Encircled Energy.


#### Enumerator SurfaceCurvatureCross

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7af36bd5e3cc5c4da70f2fd06861f4f9b7"></a>

Surface Curvature Cross Section.


#### Enumerator SurfacePhaseCross

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a2a95a0b3fb57c539d7b226d6ef85c2cd"></a>

Surface Phase Cross Section.


#### Enumerator SurfaceSagCross

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a28f906112ad7de650e4d475c044da95c"></a>

Surface Sag Cross Section.


#### Enumerator SurfaceCurvature

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab01a936fcd28c5603956db5f88ae26cf"></a>

Surface Curvature.


#### Enumerator SurfacePhase

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ad27d85538cc554930d62280ee2321b6d"></a>

Surface Phase.


#### Enumerator SurfaceSag

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a86ca8cdbe38dcfbfd8ebdb03dbd1cd08"></a>

Surface Sag.


#### Enumerator StandardSpot

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a566d53b0a8cc9b2713d49b2473f689f1"></a>

Spot Diagram.


#### Enumerator ThroughFocusSpot

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ad6167a7f75f6ea8e8680a830bd5af92c"></a>

Through Focus Spot Diagram.


#### Enumerator FullFieldSpot

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a33317b0092d64d79cee71c6d1f4ffe30"></a>

Full Field Spot Diagram.


#### Enumerator MatrixSpot

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a9d387c501838b72ed81ec1f263b1d85d"></a>

Matrix Spot Diagram.


#### Enumerator ConfigurationMatrixSpot

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a7cb084e16ff01db44e7fb0e07ce8bed7"></a>

Configuration Matrix Spot Diagram.


#### Enumerator RMSField

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ad211fea0d0192589d004693c5d196889"></a>

RMS vs. Field.


#### Enumerator RMSFieldMap

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ac97e0b7cc7be226b4dda79d6e0497f79"></a>

RMS Field Map.


#### Enumerator RMSLambdaDiagram

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7af9848135a6b1b235a759abd518ebd03b"></a>

RMS vs. Wavelength.


#### Enumerator RMSFocus

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a516d928b96c72b47d0f83a4dbf70f529"></a>

RMS vs. Focus.


#### Enumerator Foucault

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a9a3876170432298432d127ea58a1ad18"></a>

Foucault Analysis.


#### Enumerator Interferogram

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a7244a4c43992767ca1b580725a39fe6e"></a>

Interferogram.


#### Enumerator WavefrontMap

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a1fcb417d26f65916c735e8803feb24ab"></a>

Wavefront Map.


#### Enumerator DetectorViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a2fde16a38794129ecca64f2e7b43f833"></a>

Detector Viewer.


#### Enumerator Draw2D

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7abca68167ad867954fbbcdb1a31713a80"></a>

Layout.


#### Enumerator Draw3D

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a43be363e6da293ff80fd654553134934"></a>

3D Layout


#### Enumerator ImageSimulation

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a2a0ea2c1f311b57b9cecef1c4a372226"></a>

Image Simulation.


#### Enumerator GeometricImageAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab18ceee7b6be2fd6ed3fd652d74e17a6"></a>

Geometric Image Analysis.


#### Enumerator IMABIMFileViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a31097cb870c62ae96d2fc984b6246199"></a>

IMA/BIM File Viewer.


#### Enumerator GeometricBitmapImageAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a64acdcb8ef7eda6a8013ca7e6deb1579"></a>

Geometric Bitmap Image Analysis.


#### Enumerator BitmapFileViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a300d56bdea3869f3c79872ecf5f267a3"></a>

Bitmap File Viewer.


#### Enumerator LightSourceAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ac109781912d07457f23c4b21e9dfc444"></a>

Light Source Analysis.


#### Enumerator PartiallyCoherentImageAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aee2f3c42b631d02d8acd5302250a322d"></a>

Partially Coherent Image Analysis.


#### Enumerator ExtendedDiffractionImageAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aa8cb7e087d65fe402313602298d29680"></a>

Extended Diffraction Image Analysis.


#### Enumerator BiocularFieldOfViewAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aacb275c90ffb5544db3109c59360b310"></a>

Biocular Field Of View Analysis.


#### Enumerator BiocularDipvergenceConvergence

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a57529296d4c45c5716375ce6f7ce598d"></a>

Biocular Dipvergence/Convergence.


#### Enumerator RelativeIllumination

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ae0ce400c20d52f5c6db5a005825f8f71"></a>

Relative Illumination.


#### Enumerator VignettingDiagramSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a384d1b7934af0426c81deb9bad44790e"></a>

Vignetting Diagram.


#### Enumerator FootprintSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a5a4dd0d132bea349ddcd27b6012a882f"></a>

Footprint Diagram.


#### Enumerator YYbarDiagram

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a7312de4119d1c9668bec7d0644de5f64"></a>

Y-Ybar Diagram.


#### Enumerator PowerFieldMapSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a958ec0f3aa197f1a0c2c52a05bbff693"></a>

Power Field Map.


#### Enumerator PowerPupilMapSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a1fb3c3b7a05819d0500368d30a8486be"></a>

Power Pupil Map.


#### Enumerator IncidentAnglevsImageHeight

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a4063ca80703cecdab7a294d1994d1de1"></a>

Incident Angle vs. Image Height.


#### Enumerator FiberCouplingSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ad48fa4cb28cfc22c1cb087cad5978948"></a>

Fiber Coupling.


#### Enumerator YNIContributions

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab82d85705901c1d7822e5c7948c7e037"></a>

YNI Contributions.


#### Enumerator SagTable

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ad1025aba701e888cefccb44674ce6115"></a>

Sag Table.


#### Enumerator CardinalPoints

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a13d262213101b3547a25aa181a9e937f"></a>

Cardinal Point Data.


#### Enumerator DispersionDiagram

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7adb394c1c5d30403c485069a66e0cebaf"></a>

Dispersion Diagram.


#### Enumerator GlassMap

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7af909765304529ae3fd7722276e57d7e8"></a>

Glass Map.


#### Enumerator AthermalGlassMap

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a61def4b7bde6c52080b862622bc4188b"></a>

Athermal Glass Map.


#### Enumerator InternalTransmissionvsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a4ff9bbc35b94011e6c6acc86a8061a96"></a>

Internal Transmission.


#### Enumerator DispersionvsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a4e29ad7ab36247bf17b426599587c97f"></a>

Dispersion vs. Wavelength.


#### Enumerator GrinProfile

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a15f305aa1c95ae50065af3be255cdd81"></a>

Grin Profile.


#### Enumerator GradiumProfile

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a7e2db8742d319ad6c4e4031ace666f95"></a>

Gradium Profile.


#### Enumerator UniversalPlot1D

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a17c5703ee08c634d9216b99bf4baff38"></a>

Universal Plot 1D.


#### Enumerator UniversalPlot2D

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ad69b15aee954a9edb1fd0155a41989a8"></a>

Universal Plot 2D.


#### Enumerator PolarizationRayTrace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7afe0b1e024c63db91ac729153b200f428"></a>

Polarization Ray Trace.


#### Enumerator PolarizationPupilMap

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a806f8d1685113ecf166b736f6ea2bb5e"></a>

Polarization Pupil Map.


#### Enumerator Transmission

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aeb2d9ac048f63b514bd26677c6142d1f"></a>

Transmission.


#### Enumerator PhaseAberration

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a970e92108355159f7e4e6fe376c0105c"></a>

Phase Aberration.


#### Enumerator TransmissionFan

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7abbf52a508fc2ca7f4d1990546e249f3d"></a>

Transmission Fan.


#### Enumerator ParaxialGaussianBeam

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a3df51fa75b71cf33a4c6775474568fd6"></a>

Paraxial Gaussian Beam Data.


#### Enumerator SkewGaussianBeam

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a6c8d1ef72899aa2f82ceceaa2db5dae6"></a>

Skew Gaussian Beam Data.


#### Enumerator PhysicalOpticsPropagation

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a7b221685f0656c5e50eade81d8a204b3"></a>

Physical Optics Propagation.


#### Enumerator BeamFileViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a761645999b5ee2a70543bb88f9c8c7cb"></a>

Beam File Viewer.


#### Enumerator ReflectionvsAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a20bb214359c5b7739f93078ea73b62b6"></a>

Reflection vs. Angle.


#### Enumerator TransmissionvsAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a2f3510196789b577fc194f278c5cf1ad"></a>

Transmission vs. Angle.


#### Enumerator AbsorptionvsAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a7297bdb1bb46341041b3504efa32c336"></a>

Absorption vs. Angle.


#### Enumerator DiattenuationvsAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a7ba2837f408d950a952040f69fd309fa"></a>

Diattenuation vs. Angle.


#### Enumerator PhasevsAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a151a665924e1a9eab7177b128ea818a7"></a>

Phase vs. Angle.


#### Enumerator RetardancevsAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a9387eee1674903743f29601e406f86e8"></a>

Retardance vs. Angle.


#### Enumerator ReflectionvsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a0a107b601391d3c97e1edc8d9065d9ed"></a>

Reflection vs. Wavelength.


#### Enumerator TransmissionvsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a25ecf182d900a782ff141fb4c19b2922"></a>

Transmission vs. Wavelength.


#### Enumerator AbsorptionvsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a3260c160cca5c19ba0acc13bb9c5c074"></a>

Absorption vs. Wavelength.


#### Enumerator DiattenuationvsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a9a5faf00a7d58ee73b851101b46d3407"></a>

Diattenuation vs. Wavelength.


#### Enumerator PhasevsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7af80fbcdba2951608d36acb05ca07b3e6"></a>

Phase vs. Wavelength.


#### Enumerator RetardancevsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a8452934bf7111a1da7646dd1251cb414"></a>

Retardance vs. Wavelength.


#### Enumerator DirectivityPlot

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ac6a03b7037f780da6161cceb50cc22f0"></a>

Source Directivity Viewer.


#### Enumerator SourcePolarViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a7011502b7b70bcad2aff765c9c398d5f"></a>

Source Polar Viewer.


#### Enumerator PhotoluminscenceViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a23e9d7b90793a68ca567312c5095834b"></a>

Phosphors and Fluorescence Spectrum Plot.


#### Enumerator SourceSpectrumViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aad0e1517ea15afb4b2a4ef867d9f5e35"></a>

Source Spectrum Viewer.


#### Enumerator RadiantSourceModelViewerSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab2c955b8b374d978c20b32deaf72632d"></a>

Radiant Source Model™ Viewer.


#### Enumerator SurfaceDataSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a5d69ff294e22c510daf08ecc7e99d271"></a>

Surface Data.


#### Enumerator PrescriptionDataSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7af168cd56734ecc8d849425c412656fc3"></a>

Prescription Data.


#### Enumerator FileComparatorSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ac27f5efb1ea229064b01d041603bd7ec"></a>

File Comparator.


#### Enumerator PartViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a0e4f6fa11c61b91f613f1cf5fe629dd4"></a>

Part Viewer.


#### Enumerator ReverseRadianceAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab626754c29d04a7bcc90543b7b38ca40"></a>

ReverseRadiance™ Analysis.


#### Enumerator PathAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aeacb289d18d9970f687587c9727238c4"></a>

Path Analysis.


#### Enumerator FluxvsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a9e667acd647bbac86cc973fc393d61ea"></a>

Flux vs. Wavelength.


#### Enumerator RoadwayLighting

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ab31121be1e89ef9efa784badcdbb56b5"></a>

Roadway Lighting Analysis.


#### Enumerator SourceIlluminationMap

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a9d6ef5d79bdc27581d22b8593b59155e"></a>

Source Illumination Map.


#### Enumerator ScatterFunctionViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a84794cb52c039882c288a556613c660f"></a>

Scatter Function Viewer.


#### Enumerator ScatterPolarPlotSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7abc74a35b460b7fa860c14cc034011061"></a>

Scatter Polar Plot.


#### Enumerator ZemaxElementDrawing

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7abf064ad6e6bfc35d2af77c6ebd03651b"></a>

Zemax Element Drawing.


#### Enumerator ShadedModel

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a92cb2823ee4c07aed0b3185f505b3122"></a>

Shaded Model.


#### Enumerator NSCShadedModel

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aac5c8bd9d028d6986fd9703cb2e59ace"></a>

NSC Shaded Model.


#### Enumerator NSC3DLayout

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a6b8b010584f8d7747d0c506bef8eb40a"></a>

NSC 3D Layout.


#### Enumerator NSCObjectViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aadcdd23e770b5a182ed7bfeabced8725"></a>

NSC Object Viewer.


#### Enumerator RayDatabaseViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a20496fd7f55402e2076a984851de08c0"></a>

Ray Database Viewer.


#### Enumerator ISOElementDrawing

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a799a9234545e1417ed5ec6bad492f7bf"></a>

ISO Element Drawing.


#### Enumerator SystemData

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a32d829d94dd8587a016e6db1590cf91a"></a>

System Data.


#### Enumerator TestPlateList

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a875418a31905148414c080b9afb03a78"></a>

Test Plate List.


#### Enumerator SourceColorChart1931

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a17c730dd62ee66c4f18336e3e1467a01"></a>

CIE 1931 Color Chart.


#### Enumerator SourceColorChart1976

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a0e980988bb1ad48e7df7edeb656c9716"></a>

CIE 1976 Color Chart.


#### Enumerator PrescriptionGraphic

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7af1c3937ae144463ae8db102fb7b17eb8"></a>

System Summary Graphic.


#### Enumerator CriticalRayTracer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aa3bf6c42d9271e4b00213d68bde914b8"></a>

Critical Ray Tracer.


#### Enumerator ContrastLoss

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a5fe82ae15f734ccc6888b9b8af28f8f9"></a>


#### Enumerator CoatingListing

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a539de9b5151c257c9ca0b3139b4de9f8"></a>


#### Enumerator FullFieldAberration

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a3a88c336d2c36b8517b0a7e7ef5ab421"></a>


#### Enumerator SurfaceSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a247ebae045c3ca1ed5ece048ee5c7a2d"></a>

Surface Slope.


#### Enumerator SurfaceSlopeCross

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aedb929038e853a6752404be04c260887"></a>

Surface Slope Cross Section.


#### Enumerator QuickYield

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7abdce2fe4f698ef31489c37b0ab717300"></a>

Quick Yield.


#### Enumerator SystemCheck

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a42f4de6b87a1052433d243bf8dc7dae3"></a>


#### Enumerator ToleranceYield

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a05b0bb487872d627de019632293a81ed"></a>

Tolerancing Yield.


#### Enumerator ToleranceHistogram

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7aa5473bdc567616401c8ac44b8c890aa8"></a>

Tolerancing Histogram.


#### Enumerator DiffEfficiency2D

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a828298d6d0c5de5e9aaee1765005a362"></a>

Diffraction Efficiency 2D.


#### Enumerator DiffEfficiencyAngular

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a1bda23d0ab4b015c2f91f75bbd1f0e86"></a>

Diffraction Efficiency Angular.


#### Enumerator DiffEfficiencyChromatic

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a374eee5f9093bb1bab05ca85e47ca3aa"></a>

Diffraction Efficiency Chromatic.


#### Enumerator NSCSurfaceSag

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a832d5efe4efc3da34ddd963a7e210c56"></a>

NSC Surface Sag.


#### Enumerator NSCSingleRayTrace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a02e97bb61f305fdeed43caa49c62effa"></a>

NSC Single Ray Trace.


#### Enumerator NSCGeometricMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ae7b00327a87c8c8af0c9ddc4ae2c819c"></a>

Non-Sequential Geometric MTF.


#### Enumerator SurfacePhaseSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ace95bcda133205c153a099f7fefc5890"></a>

Surface Phase Slope.


#### Enumerator SurfacePhaseSlopeCross

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7afdc2c1e0e7072efeabe7581e3650ad9e"></a>

Phase Slope Cross Section.


#### Enumerator STARAlignCheck

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a8ffcd0dabc667e14775d5b32a71314e7"></a>

STAR Alignment Check.


#### Enumerator STARSysViewer

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ad3e5670372144a5c476ce4ca94b49ef0"></a>

STAR System Viewer.


#### Enumerator STAR2DDefPlot

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7abbe7c2a396d5e1ce2d6e4df57d123dfd"></a>

STAR 2D Deformation Plot.


#### Enumerator STARPerfChange

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7ad9a3d4240f08e0edc26f3e816ad262ff"></a>

STAR Performance Analysis.


#### Enumerator STARIndexVsTemp

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a886b78c54fbe8b4608ff817436af7cf8"></a>

STAR Thermal Index Plot.


#### Enumerator STARInspectFEA

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a9be9950563bcc157d9b733f0d10df57e"></a>

STAR Multiphysics Data Viewer.


#### Enumerator UserDefinedCOM

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a523da2e35f17d0f4b762a8adff12fe7d"></a>

USER Analysis.


#### Enumerator NEST

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7abe5abd115b783b87e5394a7f6bf9265d"></a>

NEST.

<br/>

#### Enumerator NSCSpotStandardNative

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a0a5cf0f456b9510dd8070610bf696de7a3fa3152345ec501b9632d3cdec308c54"></a>

NSC Spot Diagram.


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.AnalysisIDM"}]}`
-->

### Enumeration type ColorPaletteType

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ad6454c8c904134e30e9631c2e2487c60"></a>

![][public]

**Definition**:


```csharp
enum ColorPaletteType {
  GreyScale,
  FalseColor,
  FalseColorOriginal,
  Viridis,
  Magma
}
```


#### Enumerator GreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ad6454c8c904134e30e9631c2e2487c60ac056039d8df8a5a3744c509dc9bedb7c"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ad6454c8c904134e30e9631c2e2487c60a3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator FalseColorOriginal

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ad6454c8c904134e30e9631c2e2487c60a2c4c297eb3ae613f4b6dadf7463ce544"></a>


#### Enumerator Viridis

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ad6454c8c904134e30e9631c2e2487c60a951ee92ee5e947e1e7e1cb6376523c1a"></a>


#### Enumerator Magma

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ad6454c8c904134e30e9631c2e2487c60a1b62e99f86d45e754e5e79d9fa9dfcde"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.ColorPaletteType"}]}`
-->

### Enumeration type POPSampling

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30"></a>

![][public]

**Definition**:


```csharp
enum POPSampling {
  S_32 = 5,
  S_64 = 6,
  S_128 = 7,
  S_256 = 8,
  S_512 = 9,
  S_1024 = 10,
  S_2048 = 11,
  S_4096 = 12,
  S_8192 = 13,
  S_16384 = 14,
  S_32768 = 15,
  S_65536 = 16,
  S_131072 = 17,
  S_262144 = 18,
  S_524288 = 19,
  S_1048576 = 20,
  S_2097152 = 21,
  S_4194304 = 22,
  S_8388608 = 23,
  S_16777216 = 24,
  S_33554432 = 25,
  S_67108864 = 26,
  S_134217728 = 27,
  S_268435456 = 28,
  S_536870912 = 29,
  S_1073741824 = 30,
  S_1K = 10,
  S_2K = 11,
  S_4K = 12,
  S_8K = 13,
  S_16K = 14,
  S_32K = 15,
  S_64K = 16,
  S_128K = 17,
  S_256K = 18,
  S_512K = 19,
  S_1M = 20,
  S_2M = 21,
  S_4M = 22,
  S_8M = 23,
  S_16M = 24,
  S_32M = 25,
  S_64M = 26,
  S_128M = 27,
  S_256M = 28,
  S_512M = 29,
  S_1G = 30
}
```


#### Enumerator S_32

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a25429be65b4936b6e443ccedefb54e5e"></a>


#### Enumerator S_64

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30af679ccecb7a0fde4f7192606ecfdf627"></a>


#### Enumerator S_128

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a53e5002d69fcafda348b0692b5a7f74b"></a>


#### Enumerator S_256

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30aefc443dc28f7c64eed692c259f96fe16"></a>


#### Enumerator S_512

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ac5bb40176d4e63282d5bacdb09b028d4"></a>


#### Enumerator S_1024

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ae8a936af0a41bff7821e6aef841f6328"></a>


#### Enumerator S_2048

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ad14521249205f66a8756e4041de6f8a1"></a>


#### Enumerator S_4096

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a9dadee187ce82ba4de4b49da98f92dd4"></a>


#### Enumerator S_8192

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ae6a592afa83cc541c655169ccc4958fb"></a>


#### Enumerator S_16384

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a2fb58826fa55eea675f3171724f241d9"></a>


#### Enumerator S_32768

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ab83a960dca53f3543aa779475a6217fe"></a>


#### Enumerator S_65536

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a94b99a7ebf653ac3f4f60db23e6f801c"></a>


#### Enumerator S_131072

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a04d8a77d7a67f878269550c84c99a74d"></a>


#### Enumerator S_262144

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a077427b85023e243f8fe66d38d7cf15b"></a>


#### Enumerator S_524288

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a5e5bf9d2a83c51c851b9c2ded3050fd4"></a>


#### Enumerator S_1048576

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ae346078502dee0024bf73a19780aab15"></a>


#### Enumerator S_2097152

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30abb43608060c6cca76715efe53021e652"></a>


#### Enumerator S_4194304

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a6226486f2e02c7ec303f5fd49e311650"></a>


#### Enumerator S_8388608

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ad250e09782753e8358c58db214cd1ed5"></a>


#### Enumerator S_16777216

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ad6252ff70738472eab223d6f855b1962"></a>


#### Enumerator S_33554432

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a575c855d86abeaf1445c25a35d63e0c2"></a>


#### Enumerator S_67108864

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a17770ba03bb57d8d24b0d1845aa2f5d6"></a>


#### Enumerator S_134217728

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a130c919e5b40bdb875e60fc82d9a100a"></a>


#### Enumerator S_268435456

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ad13c7c2680698d72983c464398f6e5d4"></a>


#### Enumerator S_536870912

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a7ba973c5ac51beb8c61c7ad6558f3bbe"></a>


#### Enumerator S_1073741824

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a54ce1fd54e364fc12bfa6eb934ef1976"></a>


#### Enumerator S_1K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30aeeeb02e9ed63e854189d35bbcceefe69"></a>


#### Enumerator S_2K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a3f222f144fd5a20aed59d2d241caaf34"></a>


#### Enumerator S_4K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a5773d1eeea74072bbb318d825a9c7658"></a>


#### Enumerator S_8K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a399a2eac0cedf263e140f29ee0bf5b13"></a>


#### Enumerator S_16K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30af27ea9055046c13619475956917c3050"></a>


#### Enumerator S_32K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a628c971767b6979b78adb68bfd70234e"></a>


#### Enumerator S_64K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a113a0ffdb846bef18f39d75639ec4ef8"></a>


#### Enumerator S_128K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a8162aa916e20a7736935bf013fedfc6b"></a>


#### Enumerator S_256K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a53692bd79d826a04f1e2876ab106839d"></a>


#### Enumerator S_512K

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a932b98e189e5a2789ef873c4aad3e918"></a>


#### Enumerator S_1M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ae1d043cc56631ae882ce6731140802aa"></a>


#### Enumerator S_2M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ab0a196f7f8bbba65da0cf19c698ab623"></a>


#### Enumerator S_4M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a8cbb632b29ce0ab156950d329c050f2a"></a>


#### Enumerator S_8M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30abeaf1d821cd7bea7e7b6dce0fd33ae9e"></a>


#### Enumerator S_16M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a28f6e869767ffc9bc16aeede1560e71b"></a>


#### Enumerator S_32M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a4b9eecf7cb91ab13b2a90a42b92d1fd3"></a>


#### Enumerator S_64M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a00688417c28170abf8d8e5d1ce69de95"></a>


#### Enumerator S_128M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a54ee50345f99a274395719e46029ec40"></a>


#### Enumerator S_256M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a4c52bce996107be26dc9e11a018f837c"></a>


#### Enumerator S_512M

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30ac6e51af178e7e53f9cc0023822f169ba"></a>


#### Enumerator S_1G

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a622562e1263fe2de96714491fea4bc30a57549333e9b608d02887cfa2306848d2"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.POPSampling"}]}`
-->

### Enumeration type ErrorType

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7"></a>

![][public]

**Definition**:


```csharp
enum ErrorType {
  Success,
  InvalidParameter,
  InvalidSettings,
  Failed,
  AnalysisUnavailableForProgramMode,
  NotYetImplemented,
  NoSolverLicenseAvailable = 10000,
  ToolAlreadyOpen,
  SequentialOnly,
  NonSequentialOnly,
  SingleNSCRayTraceSupported,
  HPCNotAvailable,
  FeatureNotSupported,
  NotAvailableInLegacy
}
```


#### Enumerator Success

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a505a83f220c02df2f85c3810cd9ceb38"></a>


#### Enumerator InvalidParameter

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a627251310d3384b591e4138be21145d5"></a>


#### Enumerator InvalidSettings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a37a5f254c366f6c4dcba8bfd75f1070e"></a>


#### Enumerator Failed

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7ad7c8c85bf79bbe1b7188497c32c3b0ca"></a>


#### Enumerator AnalysisUnavailableForProgramMode

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7ab14ee85118447cc612a94a97a01fce54"></a>


#### Enumerator NotYetImplemented

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a807255e613d96bc5314a0018f25e5a58"></a>


#### Enumerator NoSolverLicenseAvailable

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a90044e4bf2690a79ca3013dadf77845e"></a>


#### Enumerator ToolAlreadyOpen

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a24ca45971c9535aa84b765322fe7742a"></a>


#### Enumerator SequentialOnly

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a74f59b34d0a055340f693c80c60c226f"></a>


#### Enumerator NonSequentialOnly

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a0aa2136f37c01b9b428a71cac879c632"></a>


#### Enumerator SingleNSCRayTraceSupported

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a9dc704549b6022401ca9bd35348a6a4e"></a>


#### Enumerator HPCNotAvailable

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7acbc28828212743156fd56d8584a4242b"></a>


#### Enumerator FeatureNotSupported

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7af76af8155079d26c9b004f53f7463923"></a>


#### Enumerator NotAvailableInLegacy

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afc7005b92d5be404e5cbc71ccb83dee7a00c5bc4176e444a2212e6b2a3658bbd4"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.ErrorType"}]}`
-->

### Enumeration type SurfaceCurvatureData

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2ddb7555297492fe47046c2063af2565"></a>

![][public]

**Definition**:


```csharp
enum SurfaceCurvatureData {
  TangentialCurvature = 0,
  SagittalCurvature = 1,
  X_Curvature = 2,
  Y_Curvature = 3,
  CurvatureModulus = 4,
  CurvatureUnused = 5
}
```


#### Enumerator TangentialCurvature

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2ddb7555297492fe47046c2063af2565a1b438d99b75a3f817de827d85957b093"></a>


#### Enumerator SagittalCurvature

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2ddb7555297492fe47046c2063af2565a1aaa57d73a324e8c2f21db642682d830"></a>


#### Enumerator X_Curvature

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2ddb7555297492fe47046c2063af2565a8ec9b1741e74619bff90c965fcf81e09"></a>


#### Enumerator Y_Curvature

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2ddb7555297492fe47046c2063af2565ac907d972bb1e135b8fced77e4f5e3718"></a>


#### Enumerator CurvatureModulus

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2ddb7555297492fe47046c2063af2565a0bc1d3c691342130e25a3002fdbbdd40"></a>


#### Enumerator CurvatureUnused

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2ddb7555297492fe47046c2063af2565a44547e274b709f0a17aed916558caab8"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SurfaceCurvatureData"}]}`
-->

### Enumeration type SurfaceCurvatureCrossData

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ab04a8a4346d19550ef3e4ab1628f6ef7"></a>

![][public]

**Definition**:


```csharp
enum SurfaceCurvatureCrossData {
  TangentialCurvature = 0,
  SagittalCurvature = 1,
  X_Curvature = 2,
  Y_Curvature = 3,
  CurvatureModulus = 4,
  CurvatureUnused = 5
}
```


#### Enumerator TangentialCurvature

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ab04a8a4346d19550ef3e4ab1628f6ef7a1b438d99b75a3f817de827d85957b093"></a>


#### Enumerator SagittalCurvature

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ab04a8a4346d19550ef3e4ab1628f6ef7a1aaa57d73a324e8c2f21db642682d830"></a>


#### Enumerator X_Curvature

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ab04a8a4346d19550ef3e4ab1628f6ef7a8ec9b1741e74619bff90c965fcf81e09"></a>


#### Enumerator Y_Curvature

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ab04a8a4346d19550ef3e4ab1628f6ef7ac907d972bb1e135b8fced77e4f5e3718"></a>


#### Enumerator CurvatureModulus

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ab04a8a4346d19550ef3e4ab1628f6ef7a0bc1d3c691342130e25a3002fdbbdd40"></a>


#### Enumerator CurvatureUnused

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ab04a8a4346d19550ef3e4ab1628f6ef7a44547e274b709f0a17aed916558caab8"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SurfaceCurvatureCrossData"}]}`
-->

### Enumeration type SurfacePhaseData

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a3eed5d62d3d60875e360d57fc87c7f08"></a>

![][public]

**Definition**:


```csharp
enum SurfacePhaseData {
  SurfacePhase = 0
}
```


#### Enumerator SurfacePhase

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a3eed5d62d3d60875e360d57fc87c7f08ad27d85538cc554930d62280ee2321b6d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SurfacePhaseData"}]}`
-->

### Enumeration type SurfaceSagData

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a13c75a608bbbe9777f14126a89f7cab1"></a>

![][public]

**Definition**:


```csharp
enum SurfaceSagData {
  SurfaceSag = 0
}
```


#### Enumerator SurfaceSag

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a13c75a608bbbe9777f14126a89f7cab1a86ca8cdbe38dcfbfd8ebdb03dbd1cd08"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SurfaceSagData"}]}`
-->

### Enumeration type SurfaceSlopeData

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a33320988d2edcbce0c4d902173afac75"></a>

![][public]

**Definition**:


```csharp
enum SurfaceSlopeData {
  SurfaceSlope = 0,
  TangentialSlope = 0,
  SagittalSlope = 1,
  XSlope = 2,
  YSlope = 3,
  SlopeModulus = 4,
  SlopeUnused = 5
}
```


#### Enumerator SurfaceSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a33320988d2edcbce0c4d902173afac75a247ebae045c3ca1ed5ece048ee5c7a2d"></a>


#### Enumerator TangentialSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a33320988d2edcbce0c4d902173afac75a29e61b260cfbb867e9c199f6f6d123bb"></a>


#### Enumerator SagittalSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a33320988d2edcbce0c4d902173afac75a1971baa91901864c74b34389aef47266"></a>


#### Enumerator XSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a33320988d2edcbce0c4d902173afac75a8de2893ae6114da2fec1bd2d7791d83e"></a>


#### Enumerator YSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a33320988d2edcbce0c4d902173afac75ac3f279544682f413d3cef01ee4f1bb47"></a>


#### Enumerator SlopeModulus

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a33320988d2edcbce0c4d902173afac75ac710f7bf9aaf522e420f72620ede06d6"></a>


#### Enumerator SlopeUnused

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a33320988d2edcbce0c4d902173afac75af661af669f6ea7fc7e79674da3ab32b5"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SurfaceSlopeData"}]}`
-->

### Enumeration type SurfaceSlopeCrossData

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afa65c99ffc2ea86b4c96af0f5e5a1f71"></a>

![][public]

**Definition**:


```csharp
enum SurfaceSlopeCrossData {
  TangentialSlope = 0,
  SagittalSlope = 1,
  XSlope = 2,
  YSlope = 3,
  SlopeModulus = 4,
  SlopeUnused = 5
}
```


#### Enumerator TangentialSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afa65c99ffc2ea86b4c96af0f5e5a1f71a29e61b260cfbb867e9c199f6f6d123bb"></a>


#### Enumerator SagittalSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afa65c99ffc2ea86b4c96af0f5e5a1f71a1971baa91901864c74b34389aef47266"></a>


#### Enumerator XSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afa65c99ffc2ea86b4c96af0f5e5a1f71a8de2893ae6114da2fec1bd2d7791d83e"></a>


#### Enumerator YSlope

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afa65c99ffc2ea86b4c96af0f5e5a1f71ac3f279544682f413d3cef01ee4f1bb47"></a>


#### Enumerator SlopeModulus

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afa65c99ffc2ea86b4c96af0f5e5a1f71ac710f7bf9aaf522e420f72620ede06d6"></a>


#### Enumerator SlopeUnused

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afa65c99ffc2ea86b4c96af0f5e5a1f71af661af669f6ea7fc7e79674da3ab32b5"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SurfaceSlopeCrossData"}]}`
-->

### Enumeration type SurfacePhaseSlopeData

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20a3dae1af618b9796dcdb6ceba0249b"></a>

![][public]

**Definition**:


```csharp
enum SurfacePhaseSlopeData {
  PhaseSlopeTangential = 0,
  PhaseSlopeSagittal = 1,
  PhaseSlopeX = 2,
  PhaseSlopeY = 3,
  PhaseSlopeModulus = 4,
  PhaseSlopeUnused = 5
}
```


#### Enumerator PhaseSlopeTangential

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20a3dae1af618b9796dcdb6ceba0249baa9d0f791c51580bb43ac6d3ac1b23ae4"></a>


#### Enumerator PhaseSlopeSagittal

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20a3dae1af618b9796dcdb6ceba0249bac9a1d7076b2a558065ceb76fbbb04a0f"></a>


#### Enumerator PhaseSlopeX

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20a3dae1af618b9796dcdb6ceba0249bad791564441a45efb5f3236ecf87af18c"></a>


#### Enumerator PhaseSlopeY

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20a3dae1af618b9796dcdb6ceba0249ba97b1140bf93e79d9c60a7eeba633d5be"></a>


#### Enumerator PhaseSlopeModulus

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20a3dae1af618b9796dcdb6ceba0249ba21739fe35b609aaf8445daa8c1c8d9d6"></a>


#### Enumerator PhaseSlopeUnused

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20a3dae1af618b9796dcdb6ceba0249bae9ff7793dd848b6effc6247d7b63433f"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SurfacePhaseSlopeData"}]}`
-->

### Enumeration type SurfacePhaseSlopeCrossData

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a13422cfa1b5bc45ab01da11447f48cf0"></a>

![][public]

**Definition**:


```csharp
enum SurfacePhaseSlopeCrossData {
  PhaseSlopeTangential = 0,
  PhaseSlopeSagittal = 1,
  PhaseSlopeX = 2,
  PhaseSlopeY = 3,
  PhaseSlopeModulus = 4,
  PhaseSlopeUnused = 5
}
```


#### Enumerator PhaseSlopeTangential

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a13422cfa1b5bc45ab01da11447f48cf0aa9d0f791c51580bb43ac6d3ac1b23ae4"></a>


#### Enumerator PhaseSlopeSagittal

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a13422cfa1b5bc45ab01da11447f48cf0ac9a1d7076b2a558065ceb76fbbb04a0f"></a>


#### Enumerator PhaseSlopeX

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a13422cfa1b5bc45ab01da11447f48cf0ad791564441a45efb5f3236ecf87af18c"></a>


#### Enumerator PhaseSlopeY

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a13422cfa1b5bc45ab01da11447f48cf0a97b1140bf93e79d9c60a7eeba633d5be"></a>


#### Enumerator PhaseSlopeModulus

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a13422cfa1b5bc45ab01da11447f48cf0a21739fe35b609aaf8445daa8c1c8d9d6"></a>


#### Enumerator PhaseSlopeUnused

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a13422cfa1b5bc45ab01da11447f48cf0ae9ff7793dd848b6effc6247d7b63433f"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SurfacePhaseSlopeCrossData"}]}`
-->

### Enumeration type RemoveOptions

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1abe2fe1f95e9b975dcd1f9fca917b976b"></a>

![][public]

**Definition**:


```csharp
enum RemoveOptions {
  None = 0,
  BaseROC = 1,
  BestFitSphere = 2,
  BaseSag = 3,
  CompositeSag = 4
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1abe2fe1f95e9b975dcd1f9fca917b976ba6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator BaseROC

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1abe2fe1f95e9b975dcd1f9fca917b976bad16f361306fe64e6e0ab6fb97d31368c"></a>


#### Enumerator BestFitSphere

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1abe2fe1f95e9b975dcd1f9fca917b976ba92fd625a9214fd60f2d1a92aa15f6bcc"></a>


#### Enumerator BaseSag

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1abe2fe1f95e9b975dcd1f9fca917b976ba702ccaceeba7978c2b99ace4314a849a"></a>


#### Enumerator CompositeSag

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1abe2fe1f95e9b975dcd1f9fca917b976ba5e74ce4e0a63939e0357566324791963"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.RemoveOptions"}]}`
-->

### Enumeration type BestFitSphereOptions

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2bbc196014b15bbe022d75f764bedd52"></a>

![][public]

**Definition**:


```csharp
enum BestFitSphereOptions {
  MinimumVolume = 0,
  MinimumRMS = 1,
  MinimumRMSWithOffset = 2
}
```


#### Enumerator MinimumVolume

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2bbc196014b15bbe022d75f764bedd52aa6f52b67c3daea5fce4bd2bd1374f643"></a>


#### Enumerator MinimumRMS

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2bbc196014b15bbe022d75f764bedd52adf6db2a04e7544031810c9c780a418e1"></a>


#### Enumerator MinimumRMSWithOffset

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a2bbc196014b15bbe022d75f764bedd52aa6ebb2e471feb5f99f35688d8d8f6992"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.BestFitSphereOptions"}]}`
-->

### Enumeration type SampleSizes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840"></a>

![][public]

**Definition**:


```csharp
enum SampleSizes {
  S_32x32 = 1,
  S_64x64 = 2,
  S_128x128 = 3,
  S_256x256 = 4,
  S_512x512 = 5,
  S_1024x1024 = 6,
  S_2048x2048 = 7,
  S_4096x4096 = 8,
  S_8192x8192 = 9,
  S_16384x16384 = 10
}
```


#### Enumerator S_32x32

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840aae42a51ee23adf91d98b75a905e49eeb"></a>


#### Enumerator S_64x64

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840a5ca76342332942b411111802f2b23aff"></a>


#### Enumerator S_128x128

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840a68ce54663cb92cf891da530bd7db8933"></a>


#### Enumerator S_256x256

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840ad35d25eac454ef55c12832a138b25d9f"></a>


#### Enumerator S_512x512

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840a4daad0878a7ef83e1a8ad61b888d4f0b"></a>


#### Enumerator S_1024x1024

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840a7dbabc7f365500e9c48acaa2f83945dd"></a>


#### Enumerator S_2048x2048

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840a3e17a1a1a16430fc03758198aae4401f"></a>


#### Enumerator S_4096x4096

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840a785dbba9750b75e285d37a50ac6fd424"></a>


#### Enumerator S_8192x8192

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840ab04add790598c7ef71d7a89e6ae76ea9"></a>


#### Enumerator S_16384x16384

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840ad5a40426cab35f02f5ab9c52bd19bfc4"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SampleSizes"}]}`
-->

### Enumeration type SampleSizes_Pow2Plus1

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327"></a>

![][public]

**Definition**:


```csharp
enum SampleSizes_Pow2Plus1 {
  S_33 = 1,
  S_65 = 2,
  S_129 = 3,
  S_257 = 4,
  S_513 = 5,
  S_1025 = 6,
  S_2049 = 7,
  S_4097 = 8,
  S_8193 = 9
}
```


#### Enumerator S_33

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327a1878cdf4b8c35f671c27edc4a4a0565f"></a>


#### Enumerator S_65

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327ab3878e5a4f8b547d7d6add9ad694a324"></a>


#### Enumerator S_129

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327a1541f7a0f25acfe576e388f7b7b0296f"></a>


#### Enumerator S_257

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327abe4edffbbcd5b08d1150d7caf12ab4a5"></a>


#### Enumerator S_513

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327aac677de1227ed2796fc38555fa0977d7"></a>


#### Enumerator S_1025

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327a2eb1a981e1e2efa5febabd1266a98517"></a>


#### Enumerator S_2049

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327a968cd0c44f09be8c7fac0ed1a56d4fe2"></a>


#### Enumerator S_4097

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327a26400f4cd9d5edef2d466b94be58cf69"></a>


#### Enumerator S_8193

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a20069a5f808c1a84e52213a6e6def327a287577805ff17425920266e657db603e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SampleSizes_Pow2Plus1"}]}`
-->

### Enumeration type SampleSizes_Pow2Plus1_X

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6"></a>

![][public]

**Definition**:


```csharp
enum SampleSizes_Pow2Plus1_X {
  S_33x33 = 1,
  S_65x65 = 2,
  S_129x129 = 3,
  S_257x257 = 4,
  S_513x513 = 5,
  S_1025x1025 = 6,
  S_2049x2049 = 7,
  S_4097x4097 = 8,
  S_8193x8193 = 9
}
```


#### Enumerator S_33x33

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6a4c00ecde032ee8eeeede03ea8d1af57e"></a>


#### Enumerator S_65x65

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6ad4f7bbff0d1a9fff9d303c7daf37f4b9"></a>


#### Enumerator S_129x129

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6a53ee7e4fbdc906d22a3b59bfe16a21bb"></a>


#### Enumerator S_257x257

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6a156be57683ecf86571b8655634820a41"></a>


#### Enumerator S_513x513

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6a20959f553bbe2ee9e00d99fbc47f47f0"></a>


#### Enumerator S_1025x1025

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6ad1419401c613693613be22678fe34d49"></a>


#### Enumerator S_2049x2049

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6a64f692aea0885987ebb1a9f4c9a3701f"></a>


#### Enumerator S_4097x4097

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6a29adc35e01d625838020a37b76e94f6b"></a>


#### Enumerator S_8193x8193

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a6f19b9fad0c80c31e74ce7f318c478c6a0d5bd591eb036d86eae46503f4d81189"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SampleSizes_Pow2Plus1_X"}]}`
-->

### Enumeration type SampleSizes_ContrastLoss

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9"></a>

![][public]

**Definition**:


```csharp
enum SampleSizes_ContrastLoss {
  S_3x3 = 1,
  S_5x5 = 2,
  S_7x7 = 3,
  S_9x9 = 4,
  S_11x11 = 5,
  S_13x13 = 6,
  S_15x15 = 7,
  S_17x17 = 8,
  S_19x19 = 9,
  S_21x21 = 10,
  S_23x23 = 11,
  S_25x25 = 12,
  S_27x27 = 13,
  S_29x29 = 14,
  S_31x31 = 15,
  S_33x33 = 16,
  S_35x35 = 17,
  S_37x37 = 18,
  S_39x39 = 19,
  S_41x41 = 20,
  S_43x43 = 21,
  S_45x45 = 22,
  S_47x47 = 23,
  S_49x49 = 24,
  S_51x51 = 25,
  S_53x53 = 26,
  S_55x55 = 27,
  S_57x57 = 28,
  S_59x59 = 29,
  S_61x61 = 30,
  S_63x63 = 31,
  S_65x65 = 32,
  S_67x67 = 33,
  S_69x69 = 34,
  S_71x71 = 35,
  S_73x73 = 36,
  S_75x75 = 37,
  S_77x77 = 38,
  S_79x79 = 39,
  S_81x81 = 40,
  S_83x83 = 41
}
```


#### Enumerator S_3x3

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9ae43e179514ca0f501d4a40e6644ac166"></a>


#### Enumerator S_5x5

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9aa278b6b435e1afab329bf281eb1c8fa6"></a>


#### Enumerator S_7x7

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a3fb9935d84ddf13068f5da3aa80a15f9"></a>


#### Enumerator S_9x9

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a9520ef11010278ea0e311f8015974ba7"></a>


#### Enumerator S_11x11

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9ab73a656a34309a8da4b9423ef5a5e1ee"></a>


#### Enumerator S_13x13

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9ae1a72b686491d40377a40b45aa2b46f0"></a>


#### Enumerator S_15x15

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9ac33cbfa59c8b491650d8e1f1c77bddab"></a>


#### Enumerator S_17x17

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a01fa5ad34faee487199b852d2d7c2ac6"></a>


#### Enumerator S_19x19

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a9d322f61754cbc64a2d6e427b8cc1894"></a>


#### Enumerator S_21x21

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a2355e5de1248b88a419c8628ecb3e846"></a>


#### Enumerator S_23x23

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9ac71fb577ae5a819937acc7a8502bc3d8"></a>


#### Enumerator S_25x25

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a79b420cb8133e5dbcd8b5f8b02ca13b1"></a>


#### Enumerator S_27x27

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a81142e0ca2e2200dac0c877b36bd75e0"></a>


#### Enumerator S_29x29

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a2c659db914b872b8180614eeae0cb67b"></a>


#### Enumerator S_31x31

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a680a16e8586a2e22c31218263b5c8a8c"></a>


#### Enumerator S_33x33

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a4c00ecde032ee8eeeede03ea8d1af57e"></a>


#### Enumerator S_35x35

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a0b1a325b59720ec313faeff1f12d69b6"></a>


#### Enumerator S_37x37

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9aef738464859da81fd19d2f76afde0928"></a>


#### Enumerator S_39x39

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a44fde7dc0c2819dd75d997f0c36402f0"></a>


#### Enumerator S_41x41

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a85cffbb2571b82c76fcaedb9171baa07"></a>


#### Enumerator S_43x43

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9aae4cecd6a4e779938a9129ee8ef59db9"></a>


#### Enumerator S_45x45

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a4a292f7397d12de21692b8460ad6f9dc"></a>


#### Enumerator S_47x47

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9af954d5ecd0ddd53b251a6cec10f34cc2"></a>


#### Enumerator S_49x49

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9aedf6976bb98cd8402bc4cc709cff4ea2"></a>


#### Enumerator S_51x51

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a1dd83d2602d855abf21874aeae0ae888"></a>


#### Enumerator S_53x53

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9aa93c1a8a0442d727412110ed666d7bec"></a>


#### Enumerator S_55x55

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9ab1aa8ad4fdb47e87a9b2a6f60d42b7bf"></a>


#### Enumerator S_57x57

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a4beedb6bf6455ebc8ceb1a1f144a9850"></a>


#### Enumerator S_59x59

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a3213ff7d890c51d64b466a7e06c09660"></a>


#### Enumerator S_61x61

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9af861f465e6903962d0fe62c36ac02850"></a>


#### Enumerator S_63x63

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a3a21af8b660f413c751a98a421d9f3b4"></a>


#### Enumerator S_65x65

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9ad4f7bbff0d1a9fff9d303c7daf37f4b9"></a>


#### Enumerator S_67x67

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a9e1420c55b09efbe3963bad7f6fabd47"></a>


#### Enumerator S_69x69

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a06e022abc8205d32a418747fbbcb3a9c"></a>


#### Enumerator S_71x71

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a09a7ed4c1b08439a40efb86e6fdad358"></a>


#### Enumerator S_73x73

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a7a23c896b646dadcee281cce1afa5621"></a>


#### Enumerator S_75x75

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a6136dbbeaaa98ab3311353b6da12a9a1"></a>


#### Enumerator S_77x77

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9ad453f4933779e3086b0a1c7df1b741c4"></a>


#### Enumerator S_79x79

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9ada5c0404816bd14225598acafb600c20"></a>


#### Enumerator S_81x81

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9abb3b9ce10d03124cbd1c0a1059103fda"></a>


#### Enumerator S_83x83

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9a5fdb0234db161c234207b0036b03e1c5"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.SampleSizes_ContrastLoss"}]}`
-->

### Enumeration type ShowAs

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ac840bda024f86f9f38d37a9bd5bcd66e"></a>

![][public]

**Definition**:


```csharp
enum ShowAs {
  Surface,
  Contour,
  GreyScale,
  InverseGreyScale,
  FalseColor,
  InverseFalseColor
}
```


#### Enumerator Surface

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ac840bda024f86f9f38d37a9bd5bcd66eaaa0d528ba11ea1485d466dfe1ea40819"></a>


#### Enumerator Contour

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ac840bda024f86f9f38d37a9bd5bcd66ea0b3303e86f36d6d2b1266da88cf76e66"></a>


#### Enumerator GreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ac840bda024f86f9f38d37a9bd5bcd66eac056039d8df8a5a3744c509dc9bedb7c"></a>


#### Enumerator InverseGreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ac840bda024f86f9f38d37a9bd5bcd66ea533f7c0fd53c890ed9be2f3d92031055"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ac840bda024f86f9f38d37a9bd5bcd66ea3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator InverseFalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1ac840bda024f86f9f38d37a9bd5bcd66ea28f8d40e579b2808c44974521fcdd3a4"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.ShowAs"}]}`
-->

### Enumeration type DetectorViewerShowAsTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88"></a>

![][public]

**Definition**:


```csharp
enum DetectorViewerShowAsTypes {
  FullListing = 0,
  AzimuthCrossSection,
  Text_CrossSection_Row = 1,
  Text_CrossSection_Column,
  FluxVsWaveLength,
  GreyScale = 0,
  GreyScale_Inverted,
  FalseColor,
  FalseColor_Inverted,
  TrueColor,
  Color_CrossSection_Row,
  Color_CrossSection_Column,
  Color_FluxVsWavelength,
  CrossSection = 5,
  Directivity_Full,
  Directivity_Half,
  CrossSection_Row = 4,
  CrossSection_Column,
  GeometricMtf = 6
}
```


Usage (see [Example 10](../apiexamples/example_10.md) for a full sample)


C# 
```csharp
            // Open Detector Viewer, view previously saved .zrd file
            IA_ DetectorView = TheSystem.Analyses.New_DetectorViewer();
            IAS_DetectorViewer DetectorView_Settings = DetectorView.GetSettings() as IAS_DetectorViewer;
            DetectorView_Settings.RayDatabaseFilename = "e10_API_RayTrace.ZRD";
            DetectorView_Settings.ShowAs = DetectorViewerShowAsTypes.FalseColor;
            DetectorView_Settings.Filter = "X_HIT(2, 4)";  // Detector will only display rays which hit object 2 exactly 4 times

            DetectorView.ApplyAndWaitForCompletion();  // Apply Settings to Detector Viewer
```
 C++ 
```csharp
    // Open Detector Viewer, view previously saved .zrd file
    IA_Ptr DetectorView = TheSystem->Analyses->New_DetectorViewer();
    IAS_DetectorViewerPtr DetectorView_Settings = DetectorView->GetSettings();
    DetectorView_Settings->RayDatabaseFilename = "e10_API_Raytrace.ZRD";
    DetectorView_Settings->ShowAs = DetectorViewerShowAsTypes_FalseColor;
    // Detector will only display rays which hit object 2 exactly 4 times
    DetectorView_Settings->Filter = "X_HIT(2, 4)";
    // Apply Settings to Detector Viewer
    DetectorView->ApplyAndWaitForCompletion();  
```
 Matlab 
```csharp
    % Open Detector Viewer, view previously saved .zrd file
    DetectorView = TheSystem.Analyses.New_DetectorViewer();
    DetectorView_Settings = DetectorView.GetSettings();
    DetectorView_Settings.RayDatabaseFilename = 'e10_API_Raytrace.ZRD';
    DetectorView_Settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.FalseColor;
    DetectorView_Settings.Filter = 'X_HIT(2, 4)';  % Detector will only display rays which hit object 2 exactly 4 times

    DetectorView.ApplyAndWaitForCompletion(); % Apply Settings to Detector Viewer
```
 Python 
```csharp
    # Open Detector Viewer, view previously saved .zrd file
    DetectorView = TheSystem.Analyses.New_DetectorViewer()
    DetectorView_Settings = DetectorView.GetSettings()
    DetectorView_Settings.RayDatabaseFilename = "e10_API_Raytrace.ZRD"
    DetectorView_Settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.FalseColor
    DetectorView_Settings.Filter = "X_HIT(2, 4)"  # Detector will only display rays which hit object 2 exactly 4 times
    DetectorView.ApplyAndWaitForCompletion()  # Apply Settings to Detector Viewer
```


#### Enumerator FullListing

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a2a1243b3b94c2c3a6878f0b873d94e0b"></a>


#### Enumerator AzimuthCrossSection

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a9c9c629d5b358508e20999c0e4fa89dd"></a>


#### Enumerator Text_CrossSection_Row

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a29a9f3d4b94526f2269693a85ce87c94"></a>


#### Enumerator Text_CrossSection_Column

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a72f851b6f9121029d04377830df74d22"></a>


#### Enumerator FluxVsWaveLength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a3a910038ba40d9813fe23e2919ac8df3"></a>


#### Enumerator GreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88ac056039d8df8a5a3744c509dc9bedb7c"></a>


#### Enumerator GreyScale_Inverted

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a44e0f544bee6576665a6d00a7da29b48"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator FalseColor_Inverted

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a43865037497945163ee3356a87da02de"></a>


#### Enumerator TrueColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a0b74faffabc9d82835257c5da69b9c10"></a>


#### Enumerator Color_CrossSection_Row

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a1a432e16b7e7997ab39a3dbbc60e640e"></a>


#### Enumerator Color_CrossSection_Column

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a8c0b6e7a2f54b4c5df448c01fd18080c"></a>


#### Enumerator Color_FluxVsWavelength

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a2c3726385c07628834d81942de578e76"></a>


#### Enumerator CrossSection

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a01558f38ee0590b11fd9284029626849"></a>


#### Enumerator Directivity_Full

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88ae368374e794990458d784a81b3bb312d"></a>


#### Enumerator Directivity_Half

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a01851404f31b554c5ae9cef7b0288e40"></a>


#### Enumerator CrossSection_Row

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a2b3e90d70fc7432aca5c467d22a9132f"></a>


#### Enumerator CrossSection_Column

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88afafe77422aa5f3379c5ed27d7a58986e"></a>


#### Enumerator GeometricMtf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a7adc1716b350c3c4f7508aec5d624e88a2ff7453c21a8ccec484e938ccd3ec569"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.DetectorViewerShowAsTypes"}]}`
-->

### Enumeration type DetectorViewerShowDataTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966"></a>

![][public]

**Definition**:


```csharp
enum DetectorViewerShowDataTypes {
  IncidentFlux,
  AbsorbedFlux,
  AbsorbedFluxVolume,
  PositionSpace = 0,
  AngleSpace,
  Polar_AngleSpace = 0,
  IncoherentIrradiance = 0,
  CoherentIrradiance,
  CoherentPhase,
  RadiantIntensity,
  RadiancePositionSpace,
  RadianceAngleSpace,
  IncoherentIlluminance = 0,
  CoherentIlluminance,
  LuminousIntensity = 3,
  LuminancePositionSpace,
  LuminanceAngleSpace,
  IncoherentFluence = 0,
  CoherentFluence
}
```


#### Enumerator IncidentFlux

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a8b0f56203e7f03fdf4611b40a9f32d18"></a>


#### Enumerator AbsorbedFlux

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a345cc096e3598ff7e83e105e61417848"></a>


#### Enumerator AbsorbedFluxVolume

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a005a1754928c96cef5582bafd6c5900a"></a>


#### Enumerator PositionSpace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a5803523027a61f562b392e60ca0e32a1"></a>


#### Enumerator AngleSpace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966ac4953f665d19041052352d727a7d2309"></a>


#### Enumerator Polar_AngleSpace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a3d42413dbb1c0daae76486f9a88d7025"></a>


#### Enumerator IncoherentIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a77504e3822eeb0081e44f9980699bedc"></a>


#### Enumerator CoherentIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966af9c4fd5e57e7f8e92d7770a49693ae3b"></a>


#### Enumerator CoherentPhase

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966ae7ee8ffa0cb2225cd0ab051a74184e67"></a>


#### Enumerator RadiantIntensity

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966aa62e1e4e61ddd192b35472b56edb7e00"></a>


#### Enumerator RadiancePositionSpace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a0b5797cff5d3d457853e8f5f88186a63"></a>


#### Enumerator RadianceAngleSpace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a4f0e9c0172a7b2e7c91adb42afb9da46"></a>


#### Enumerator IncoherentIlluminance

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a742931ad808a0c0a7ef9e623980dabed"></a>


#### Enumerator CoherentIlluminance

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a8ea3155d5cf0c7be44038ebd9f8f9374"></a>


#### Enumerator LuminousIntensity

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966ae91a9eb4f5dcc51ea18e180ea981d6ae"></a>


#### Enumerator LuminancePositionSpace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966ab92b39babfd4c2fe6b7ba8209e709bb5"></a>


#### Enumerator LuminanceAngleSpace

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a4ac7ce00a67f80f01259e5b2c53a2758"></a>


#### Enumerator IncoherentFluence

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966aa15b335a9bf8b0ded0382a92a2dbeccf"></a>


#### Enumerator CoherentFluence

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1afe0671bed30b0a4f68c0f5a44e4a6966a5dae48f5dd61d2fe59d6b6131a42267f"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.DetectorViewerShowDataTypes"}]}`
-->

### Enumeration type HuygensSurfaceMftShowAsTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a038428acbc22fb2c7dce76a101570658"></a>

![][public]

**Definition**:


```csharp
enum HuygensSurfaceMftShowAsTypes {
  GreyScale,
  InverseGreyScale,
  FalseColor,
  InverseFalseColor
}
```


#### Enumerator GreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a038428acbc22fb2c7dce76a101570658ac056039d8df8a5a3744c509dc9bedb7c"></a>


#### Enumerator InverseGreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a038428acbc22fb2c7dce76a101570658a533f7c0fd53c890ed9be2f3d92031055"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a038428acbc22fb2c7dce76a101570658a3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator InverseFalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a038428acbc22fb2c7dce76a101570658a28f8d40e579b2808c44974521fcdd3a4"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.HuygensSurfaceMftShowAsTypes"}]}`
-->

### Enumeration type HuygensShowAsTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1adeb4c9d9899f024ebf7bd98d9a7a7814"></a>

![][public]

**Definition**:


```csharp
enum HuygensShowAsTypes {
  Surface,
  Contour,
  GreyScale,
  InverseGreyScale,
  FalseColor,
  InverseFalseColor,
  TrueColor
}
```


#### Enumerator Surface

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1adeb4c9d9899f024ebf7bd98d9a7a7814aaa0d528ba11ea1485d466dfe1ea40819"></a>


#### Enumerator Contour

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1adeb4c9d9899f024ebf7bd98d9a7a7814a0b3303e86f36d6d2b1266da88cf76e66"></a>


#### Enumerator GreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1adeb4c9d9899f024ebf7bd98d9a7a7814ac056039d8df8a5a3744c509dc9bedb7c"></a>


#### Enumerator InverseGreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1adeb4c9d9899f024ebf7bd98d9a7a7814a533f7c0fd53c890ed9be2f3d92031055"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1adeb4c9d9899f024ebf7bd98d9a7a7814a3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator InverseFalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1adeb4c9d9899f024ebf7bd98d9a7a7814a28f8d40e579b2808c44974521fcdd3a4"></a>


#### Enumerator TrueColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1adeb4c9d9899f024ebf7bd98d9a7a7814a0b74faffabc9d82835257c5da69b9c10"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.HuygensShowAsTypes"}]}`
-->

### Enumeration type Beam

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351"></a>

![][public]

**Definition**:


```csharp
enum Beam {
  Reference,
  Configuration_1,
  Configuration_2,
  Configuration_3,
  Configuration_4,
  Configuration_5,
  Configuration_6,
  Configuration_7,
  Configuration_8,
  Configuration_9,
  Configuration_10,
  Configuration_11,
  Configuration_12,
  Configuration_13,
  Configuration_14,
  Configuration_15,
  Configuration_16,
  Configuration_17,
  Configuration_18,
  Configuration_19,
  Configuration_20
}
```


#### Enumerator Reference

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a63d5049791d9d79d86e9a108b0a999ca"></a>


#### Enumerator Configuration_1

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a16e28a69748ab456cf0e4686973bbf10"></a>


#### Enumerator Configuration_2

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a276d9f0bdb163bc7b115892cbe5b9272"></a>


#### Enumerator Configuration_3

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a196c874a3a68acaba448b106d53a4c95"></a>


#### Enumerator Configuration_4

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351aa731e4e7534fcd75c4d7a128b2641628"></a>


#### Enumerator Configuration_5

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a698f0b8f0dcacc6826ee2172680545e8"></a>


#### Enumerator Configuration_6

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351aac601bb92b7f7b21ff2b31e1d21f8fa7"></a>


#### Enumerator Configuration_7

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a0083b2d7511c0798732cd92a4f5a332d"></a>


#### Enumerator Configuration_8

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351ae97b2d5cb7c1cd4cc03be83108439fc2"></a>


#### Enumerator Configuration_9

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a1a9ae9e1065bb8c24e8217c3f528d107"></a>


#### Enumerator Configuration_10

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a1c7f8b3fab7d25237db21989a86b0458"></a>


#### Enumerator Configuration_11

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a36c4fbab64796547264cae54480d4fbe"></a>


#### Enumerator Configuration_12

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a030ed8983ed61ff5125ce5099b717b49"></a>


#### Enumerator Configuration_13

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a6481e5104249912933e682e6fd6b4df7"></a>


#### Enumerator Configuration_14

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a7ab7f4febc2f55d2f852695863ca986f"></a>


#### Enumerator Configuration_15

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a059a830f03e384beacb4f2d6e40fc80b"></a>


#### Enumerator Configuration_16

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351aec65f84f62728c9d875916a4d0905868"></a>


#### Enumerator Configuration_17

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351aeb693a826c8021b42993c8d7c4dd551a"></a>


#### Enumerator Configuration_18

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a85d76a8b357aaeff034152d2d715a281"></a>


#### Enumerator Configuration_19

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a95014f7b27ccbcec495fd074bbf69363"></a>


#### Enumerator Configuration_20

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a635b82092e278025aa1b6f7d2aa36351a12a0d62e7c7d71e38a67d8ab7ed5e199"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Beam"}]}`
-->

### Enumeration type GiaShowAsTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601"></a>

![][public]

**Definition**:


```csharp
enum GiaShowAsTypes {
  Surface,
  Contour,
  GreyScale,
  InverseGreyScale,
  FalseColor,
  InverseFalseColor,
  SpotDiagram,
  CrossX,
  CrossY
}
```


#### Enumerator Surface

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601aaa0d528ba11ea1485d466dfe1ea40819"></a>


#### Enumerator Contour

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601a0b3303e86f36d6d2b1266da88cf76e66"></a>


#### Enumerator GreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601ac056039d8df8a5a3744c509dc9bedb7c"></a>


#### Enumerator InverseGreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601a533f7c0fd53c890ed9be2f3d92031055"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601a3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator InverseFalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601a28f8d40e579b2808c44974521fcdd3a4"></a>


#### Enumerator SpotDiagram

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601adc9a6e9a1e8bfef4ba663860b9fb77a7"></a>


#### Enumerator CrossX

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601ad4c160f7e70b4f22b820df637e41ec26"></a>


#### Enumerator CrossY

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1aa086b76fdadb536dd76ba70ffcf13601a275b69e2e80b5b1d98ab239b8071af68"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.GiaShowAsTypes"}]}`
-->

### Enumeration type UserAnalysisDataType

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a062a68cc7315f8722f4c05849fb0de8e"></a>

![][public]

**Definition**:


```csharp
enum UserAnalysisDataType {
  None,
  Line2D,
  Grid,
  GridRGB,
  Text
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a062a68cc7315f8722f4c05849fb0de8ea6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator Line2D

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a062a68cc7315f8722f4c05849fb0de8ea28f242e5801a3fab56608041082db40a"></a>


#### Enumerator Grid

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a062a68cc7315f8722f4c05849fb0de8ea5174d1309f275ba6f275db3af9eb3e18"></a>


#### Enumerator GridRGB

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a062a68cc7315f8722f4c05849fb0de8ea358cba2b0cce704969832acde210d4e7"></a>


#### Enumerator Text

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a062a68cc7315f8722f4c05849fb0de8ea9dffbf69ffba8bc38bc4e01abf4b1675"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.UserAnalysisDataType"}]}`
-->

### Enumeration type GridPlotType

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a613119c6e45c6aa255ac51fdf80a9166"></a>

![][public]

**Definition**:


```csharp
enum GridPlotType {
  Surface,
  Contour,
  GrayScale,
  InverseGrayScale,
  FalseColor,
  InverseFalseColor
}
```


#### Enumerator Surface

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a613119c6e45c6aa255ac51fdf80a9166aaa0d528ba11ea1485d466dfe1ea40819"></a>


#### Enumerator Contour

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a613119c6e45c6aa255ac51fdf80a9166a0b3303e86f36d6d2b1266da88cf76e66"></a>


#### Enumerator GrayScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a613119c6e45c6aa255ac51fdf80a9166a4f90b9cafa6fec5c0bd8cb1df7281693"></a>


#### Enumerator InverseGrayScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a613119c6e45c6aa255ac51fdf80a9166aada604e60926504a7f8e5deb9030f297"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a613119c6e45c6aa255ac51fdf80a9166a3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator InverseFalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1a613119c6e45c6aa255ac51fdf80a9166a28f8d40e579b2808c44974521fcdd3a4"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.GridPlotType"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
