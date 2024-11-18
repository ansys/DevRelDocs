# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [SherlockAnalysisService.proto](#SherlockAnalysisService-proto)
    - [GetHarmonicVibeInputFieldsRequest](#-GetHarmonicVibeInputFieldsRequest)
    - [GetHarmonicVibeInputFieldsResponse](#-GetHarmonicVibeInputFieldsResponse)
    - [GetICTAnalysisInputFieldsRequest](#-GetICTAnalysisInputFieldsRequest)
    - [GetICTAnalysisInputFieldsResponse](#-GetICTAnalysisInputFieldsResponse)
    - [GetMechanicalShockInputFieldsRequest](#-GetMechanicalShockInputFieldsRequest)
    - [GetMechanicalShockInputFieldsResponse](#-GetMechanicalShockInputFieldsResponse)
    - [GetNaturalFrequencyInputFieldsRequest](#-GetNaturalFrequencyInputFieldsRequest)
    - [GetNaturalFrequencyInputFieldsResponse](#-GetNaturalFrequencyInputFieldsResponse)
    - [GetPcbModelingInputFieldsRequest](#-GetPcbModelingInputFieldsRequest)
    - [GetPcbModelingInputFieldsResponse](#-GetPcbModelingInputFieldsResponse)
    - [GetRandomVibeInputFieldsRequest](#-GetRandomVibeInputFieldsRequest)
    - [GetRandomVibeInputFieldsResponse](#-GetRandomVibeInputFieldsResponse)
    - [GetSolderFatigueInputFieldsRequest](#-GetSolderFatigueInputFieldsRequest)
    - [GetSolderFatigueInputFieldsResponse](#-GetSolderFatigueInputFieldsResponse)
    - [RunAnalysisRequest](#-RunAnalysisRequest)
    - [RunAnalysisRequest.Analysis](#-RunAnalysisRequest-Analysis)
    - [RunAnalysisRequest.Analysis.Phase](#-RunAnalysisRequest-Analysis-Phase)
    - [RunAnalysisRequest.Analysis.Phase.Event](#-RunAnalysisRequest-Analysis-Phase-Event)
    - [RunStrainMapAnalysisRequest](#-RunStrainMapAnalysisRequest)
    - [RunStrainMapAnalysisRequest.StrainMapAnalysis](#-RunStrainMapAnalysisRequest-StrainMapAnalysis)
    - [RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap](#-RunStrainMapAnalysisRequest-StrainMapAnalysis-EventStrainMap)
    - [UpdateHarmonicVibePropsRequest](#-UpdateHarmonicVibePropsRequest)
    - [UpdateHarmonicVibePropsRequest.HarmonicVibe](#-UpdateHarmonicVibePropsRequest-HarmonicVibe)
    - [UpdateICTAnalysisPropsRequest](#-UpdateICTAnalysisPropsRequest)
    - [UpdateICTAnalysisPropsRequest.ICTAnalysis](#-UpdateICTAnalysisPropsRequest-ICTAnalysis)
    - [UpdateMechanicalShockPropsRequest](#-UpdateMechanicalShockPropsRequest)
    - [UpdateMechanicalShockPropsRequest.MechanicalShock](#-UpdateMechanicalShockPropsRequest-MechanicalShock)
    - [UpdateNaturalFrequencyPropsRequest](#-UpdateNaturalFrequencyPropsRequest)
    - [UpdatePartModelingRequest](#-UpdatePartModelingRequest)
    - [UpdatePartsListValidationPropsRequest](#-UpdatePartsListValidationPropsRequest)
    - [UpdatePartsListValidationPropsRequest.PartsListValidation](#-UpdatePartsListValidationPropsRequest-PartsListValidation)
    - [UpdatePcbModelingPropsRequest](#-UpdatePcbModelingPropsRequest)
    - [UpdatePcbModelingPropsRequest.Analysis](#-UpdatePcbModelingPropsRequest-Analysis)
    - [UpdateRandomVibePropsRequest](#-UpdateRandomVibePropsRequest)
    - [UpdateSolderFatiguePropsRequest](#-UpdateSolderFatiguePropsRequest)
    - [UpdateSolderFatiguePropsRequest.SolderFatigue](#-UpdateSolderFatiguePropsRequest-SolderFatigue)
    - [UpdateThermalMechPropsRequest](#-UpdateThermalMechPropsRequest)
  
    - [ElementOrder](#-ElementOrder)
    - [ModelSource](#-ModelSource)
    - [RunAnalysisRequest.Analysis.AnalysisType](#-RunAnalysisRequest-Analysis-AnalysisType)
    - [RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType](#-RunStrainMapAnalysisRequest-StrainMapAnalysis-AnalysisType)
    - [UpdatePcbModelingPropsRequest.Analysis.AnalysisType](#-UpdatePcbModelingPropsRequest-Analysis-AnalysisType)
    - [UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel](#-UpdatePcbModelingPropsRequest-Analysis-PcbMaterialModel)
    - [UpdatePcbModelingPropsRequest.Analysis.PcbModelType](#-UpdatePcbModelingPropsRequest-Analysis-PcbModelType)
  
    - [SherlockAnalysisService](#-SherlockAnalysisService)
  
- [SherlockCommonService.proto](#SherlockCommonService-proto)
    - [ExitRequest](#-ExitRequest)
    - [GetSoldersRequest](#-GetSoldersRequest)
    - [GetSoldersResponse](#-GetSoldersResponse)
    - [HealthCheckRequest](#-HealthCheckRequest)
    - [HealthCheckResponse](#-HealthCheckResponse)
    - [IsSherlockClientLoadingRequest](#-IsSherlockClientLoadingRequest)
    - [ListUnitsRequest](#-ListUnitsRequest)
    - [ListUnitsResponse](#-ListUnitsResponse)
    - [Measurement](#-Measurement)
    - [ReturnCode](#-ReturnCode)
    - [SherlockInfoRequest](#-SherlockInfoRequest)
    - [SherlockInfoResponse](#-SherlockInfoResponse)
  
    - [HealthCheckResponse.ServingStatus](#-HealthCheckResponse-ServingStatus)
    - [ListUnitsRequest.UnitType](#-ListUnitsRequest-UnitType)
    - [MatchingMode](#-MatchingMode)
    - [TableDelimiter](#-TableDelimiter)
  
    - [SherlockCommonService](#-SherlockCommonService)
  
- [SherlockLayerService.proto](#SherlockLayerService-proto)
    - [AddModelingRegionRequest](#-AddModelingRegionRequest)
    - [AddPottingRegionRequest](#-AddPottingRegionRequest)
    - [AddPottingRegionRequest.PottingRegion](#-AddPottingRegionRequest-PottingRegion)
    - [CircularShape](#-CircularShape)
    - [CopyModelingRegionRequest](#-CopyModelingRegionRequest)
    - [CopyModelingRegionRequest.CopyModelingRegionInfo](#-CopyModelingRegionRequest-CopyModelingRegionInfo)
    - [DeleteAllICTFixturesRequest](#-DeleteAllICTFixturesRequest)
    - [DeleteAllMountPointsRequest](#-DeleteAllMountPointsRequest)
    - [DeleteAllTestPointsRequest](#-DeleteAllTestPointsRequest)
    - [DeleteModelingRegionRequest](#-DeleteModelingRegionRequest)
    - [DeleteModelingRegionRequest.DeleteModelingRegionInfo](#-DeleteModelingRegionRequest-DeleteModelingRegionInfo)
    - [ExportAllICTFixturesRequest](#-ExportAllICTFixturesRequest)
    - [ExportAllMountPointsRequest](#-ExportAllMountPointsRequest)
    - [ExportAllTestPointsRequest](#-ExportAllTestPointsRequest)
    - [GetMountPointBoundariesRequest](#-GetMountPointBoundariesRequest)
    - [GetMountPointBoundariesResponse](#-GetMountPointBoundariesResponse)
    - [GetMountPointChassisMaterialsRequest](#-GetMountPointChassisMaterialsRequest)
    - [GetMountPointChassisMaterialsResponse](#-GetMountPointChassisMaterialsResponse)
    - [GetMountPointShapeTypesRequest](#-GetMountPointShapeTypesRequest)
    - [GetMountPointShapeTypesResponse](#-GetMountPointShapeTypesResponse)
    - [GetMountPointSidesRequest](#-GetMountPointSidesRequest)
    - [GetMountPointSidesResponse](#-GetMountPointSidesResponse)
    - [GetMountPointTypesRequest](#-GetMountPointTypesRequest)
    - [GetMountPointTypesResponse](#-GetMountPointTypesResponse)
    - [GetMountPointUnitsRequest](#-GetMountPointUnitsRequest)
    - [GetMountPointUnitsResponse](#-GetMountPointUnitsResponse)
    - [GetMountPointsPropertiesRequest](#-GetMountPointsPropertiesRequest)
    - [GetMountPointsPropertiesResponse](#-GetMountPointsPropertiesResponse)
    - [ModelingRegion](#-ModelingRegion)
    - [ModelingRegion.PCBModelingProperties](#-ModelingRegion-PCBModelingProperties)
    - [ModelingRegion.TraceModelingProperties](#-ModelingRegion-TraceModelingProperties)
    - [MountPointProperties](#-MountPointProperties)
    - [PCBShape](#-PCBShape)
    - [PolygonalShape](#-PolygonalShape)
    - [PolygonalShape.Point](#-PolygonalShape-Point)
    - [RectangularShape](#-RectangularShape)
    - [SlotShape](#-SlotShape)
    - [UpdateICTFixturesByFileRequest](#-UpdateICTFixturesByFileRequest)
    - [UpdateICTFixturesResponse](#-UpdateICTFixturesResponse)
    - [UpdateModelingRegionRequest](#-UpdateModelingRegionRequest)
    - [UpdateMountPointsByFileRequest](#-UpdateMountPointsByFileRequest)
    - [UpdateMountPointsRequest](#-UpdateMountPointsRequest)
    - [UpdateMountPointsResponse](#-UpdateMountPointsResponse)
    - [UpdateTestPointsByFileRequest](#-UpdateTestPointsByFileRequest)
    - [UpdateTestPointsResponse](#-UpdateTestPointsResponse)
  
    - [ModelingRegion.ElementOrder](#-ModelingRegion-ElementOrder)
    - [ModelingRegion.ModelingMode](#-ModelingRegion-ModelingMode)
    - [ModelingRegion.PCBModelingProperties.ExportModelType](#-ModelingRegion-PCBModelingProperties-ExportModelType)
    - [ModelingRegion.TraceModelingProperties.TraceModelingType](#-ModelingRegion-TraceModelingProperties-TraceModelingType)
  
    - [SherlockLayerService](#-SherlockLayerService)
  
- [SherlockLifeCycleService.proto](#SherlockLifeCycleService-proto)
    - [AddHarmonicEventRequest](#-AddHarmonicEventRequest)
    - [AddHarmonicEventResponse](#-AddHarmonicEventResponse)
    - [AddHarmonicVibeProfilesRequest](#-AddHarmonicVibeProfilesRequest)
    - [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile](#-AddHarmonicVibeProfilesRequest-HarmonicVibeProfile)
    - [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry](#-AddHarmonicVibeProfilesRequest-HarmonicVibeProfile-Entry)
    - [AddHarmonicVibeProfilesResponse](#-AddHarmonicVibeProfilesResponse)
    - [AddRandomVibeEventRequest](#-AddRandomVibeEventRequest)
    - [AddRandomVibeEventResponse](#-AddRandomVibeEventResponse)
    - [AddRandomVibeProfilesRequest](#-AddRandomVibeProfilesRequest)
    - [AddRandomVibeProfilesRequest.RandomVibeProfile](#-AddRandomVibeProfilesRequest-RandomVibeProfile)
    - [AddRandomVibeProfilesRequest.RandomVibeProfile.Entry](#-AddRandomVibeProfilesRequest-RandomVibeProfile-Entry)
    - [AddRandomVibeProfilesResponse](#-AddRandomVibeProfilesResponse)
    - [AddShockEventRequest](#-AddShockEventRequest)
    - [AddShockEventResponse](#-AddShockEventResponse)
    - [AddShockProfilesRequest](#-AddShockProfilesRequest)
    - [AddShockProfilesRequest.ShockProfile](#-AddShockProfilesRequest-ShockProfile)
    - [AddShockProfilesRequest.ShockProfile.Entry](#-AddShockProfilesRequest-ShockProfile-Entry)
    - [AddShockProfilesResponse](#-AddShockProfilesResponse)
    - [AddThermalEventRequest](#-AddThermalEventRequest)
    - [AddThermalEventResponse](#-AddThermalEventResponse)
    - [AddThermalProfilesRequest](#-AddThermalProfilesRequest)
    - [AddThermalProfilesRequest.ThermalProfile](#-AddThermalProfilesRequest-ThermalProfile)
    - [AddThermalProfilesRequest.ThermalProfile.Entry](#-AddThermalProfilesRequest-ThermalProfile-Entry)
    - [AddThermalProfilesResponse](#-AddThermalProfilesResponse)
    - [CreateLifePhaseRequest](#-CreateLifePhaseRequest)
    - [CreateLifePhaseResponse](#-CreateLifePhaseResponse)
    - [DeleteEventRequest](#-DeleteEventRequest)
    - [DeleteLifePhaseResponse](#-DeleteLifePhaseResponse)
    - [DeletePhaseRequest](#-DeletePhaseRequest)
    - [Events](#-Events)
    - [ListAmplUnitsRequest](#-ListAmplUnitsRequest)
    - [ListAmplUnitsResponse](#-ListAmplUnitsResponse)
    - [ListDurationUnitsRequest](#-ListDurationUnitsRequest)
    - [ListDurationUnitsResponse](#-ListDurationUnitsResponse)
    - [ListFreqUnitsRequest](#-ListFreqUnitsRequest)
    - [ListFreqUnitsResponse](#-ListFreqUnitsResponse)
    - [ListHarmonicEventsRequest](#-ListHarmonicEventsRequest)
    - [ListHarmonicEventsResponse](#-ListHarmonicEventsResponse)
    - [ListHarmonicProfileTypesRequest](#-ListHarmonicProfileTypesRequest)
    - [ListHarmonicProfileTypesResponse](#-ListHarmonicProfileTypesResponse)
    - [ListLCEventsRequest](#-ListLCEventsRequest)
    - [ListLCEventsResponse](#-ListLCEventsResponse)
    - [ListLCEventsResponse.LifeCyclePhase](#-ListLCEventsResponse-LifeCyclePhase)
    - [ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent](#-ListLCEventsResponse-LifeCyclePhase-LifeCycleEvent)
    - [ListLCStatesRequest](#-ListLCStatesRequest)
    - [ListLCStatesResponse](#-ListLCStatesResponse)
    - [ListLCTypesRequest](#-ListLCTypesRequest)
    - [ListLCTypesResponse](#-ListLCTypesResponse)
    - [ListRandomVibeEventsRequest](#-ListRandomVibeEventsRequest)
    - [ListRandomVibeEventsResponse](#-ListRandomVibeEventsResponse)
    - [ListRandomVibeProfileTypesRequest](#-ListRandomVibeProfileTypesRequest)
    - [ListRandomVibeProfileTypesResponse](#-ListRandomVibeProfileTypesResponse)
    - [ListShockEventsRequest](#-ListShockEventsRequest)
    - [ListShockEventsResponse](#-ListShockEventsResponse)
    - [ListShockLoadUnitsRequest](#-ListShockLoadUnitsRequest)
    - [ListShockLoadUnitsResponse](#-ListShockLoadUnitsResponse)
    - [ListShockPulsesRequest](#-ListShockPulsesRequest)
    - [ListShockPulsesResponse](#-ListShockPulsesResponse)
    - [ListTempUnitsRequest](#-ListTempUnitsRequest)
    - [ListTempUnitsResponse](#-ListTempUnitsResponse)
    - [LoadHarmonicProfileRequest](#-LoadHarmonicProfileRequest)
    - [LoadHarmonicProfileRequest.CSVProps](#-LoadHarmonicProfileRequest-CSVProps)
    - [LoadHarmonicProfileResponse](#-LoadHarmonicProfileResponse)
    - [LoadRandomVibeProfileRequest](#-LoadRandomVibeProfileRequest)
    - [LoadRandomVibeProfileRequest.CSVProps](#-LoadRandomVibeProfileRequest-CSVProps)
    - [LoadRandomVibeProfileResponse](#-LoadRandomVibeProfileResponse)
    - [LoadShockProfileDatasetRequest](#-LoadShockProfileDatasetRequest)
    - [LoadShockProfileDatasetRequest.CSVProps](#-LoadShockProfileDatasetRequest-CSVProps)
    - [LoadShockProfileDatasetResponse](#-LoadShockProfileDatasetResponse)
    - [LoadShockProfilePulsesRequest](#-LoadShockProfilePulsesRequest)
    - [LoadShockProfilePulsesRequest.CSVProps](#-LoadShockProfilePulsesRequest-CSVProps)
    - [LoadShockProfilePulsesResponse](#-LoadShockProfilePulsesResponse)
    - [LoadThermalProfileRequest](#-LoadThermalProfileRequest)
    - [LoadThermalProfileRequest.CSVProps](#-LoadThermalProfileRequest-CSVProps)
    - [LoadThermalProfileResponse](#-LoadThermalProfileResponse)
  
    - [SherlockLifeCycleService](#-SherlockLifeCycleService)
  
- [SherlockModelService.proto](#SherlockModelService-proto)
    - [DrillHoleModeling](#-DrillHoleModeling)
    - [ExportAEDBRequest](#-ExportAEDBRequest)
    - [ExportFEAModelRequest](#-ExportFEAModelRequest)
    - [ExportFEAModelRequest.DrillHoleParam](#-ExportFEAModelRequest-DrillHoleParam)
    - [ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength](#-ExportFEAModelRequest-DrillHoleParam-MaxEdgeLength)
    - [ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter](#-ExportFEAModelRequest-DrillHoleParam-MinHoleDiameter)
    - [ExportFEAModelRequest.LeadModelParam](#-ExportFEAModelRequest-LeadModelParam)
    - [ExportFEAModelRequest.LeadModelParam.MaxMeshSize](#-ExportFEAModelRequest-LeadModelParam-MaxMeshSize)
    - [ExportFEAModelRequest.LeadModelParam.VerticalMeshSize](#-ExportFEAModelRequest-LeadModelParam-VerticalMeshSize)
    - [ExportTraceModelRequest](#-ExportTraceModelRequest)
    - [ExportTraceReinforcementModelRequest](#-ExportTraceReinforcementModelRequest)
    - [ExportTraceReinforcementModelRequest.TraceDrillHoleParam](#-ExportTraceReinforcementModelRequest-TraceDrillHoleParam)
    - [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength](#-ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MaxEdgeLength)
    - [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter](#-ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MinHoleDiameter)
    - [ExportTraceReinforcementModelRequest.TraceParam](#-ExportTraceReinforcementModelRequest-TraceParam)
    - [ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold](#-ExportTraceReinforcementModelRequest-TraceParam-DiameterThreshold)
    - [ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam](#-ExportTraceReinforcementModelRequest-TraceParam-MinHoleDiameterForShellOrBeam)
    - [GenerateTraceModelRequest](#-GenerateTraceModelRequest)
    - [TraceModelExportParams](#-TraceModelExportParams)
    - [TraceModelExportParams.PcbMeshPropParam](#-TraceModelExportParams-PcbMeshPropParam)
    - [TraceModelExportParams.TracePropParam](#-TraceModelExportParams-TracePropParam)
  
    - [ExportFEAModelRequest.ExportAnalysis](#-ExportFEAModelRequest-ExportAnalysis)
    - [MeshType](#-MeshType)
    - [TraceOutputType](#-TraceOutputType)
  
    - [SherlockModelService](#-SherlockModelService)
  
- [SherlockPartsService.proto](#SherlockPartsService-proto)
    - [ExportNetListRequest](#-ExportNetListRequest)
    - [ExportPartsListRequest](#-ExportPartsListRequest)
    - [GetBoardSidesRequest](#-GetBoardSidesRequest)
    - [GetBoardSidesResponse](#-GetBoardSidesResponse)
    - [GetPartLocationRequest](#-GetPartLocationRequest)
    - [GetPartLocationResponse](#-GetPartLocationResponse)
    - [GetPartLocationResponse.LocationData](#-GetPartLocationResponse-LocationData)
    - [GetPartLocationUnitsRequest](#-GetPartLocationUnitsRequest)
    - [GetPartLocationUnitsResponse](#-GetPartLocationUnitsResponse)
    - [ImportPartsListRequest](#-ImportPartsListRequest)
    - [ListPartsLibrariesRequest](#-ListPartsLibrariesRequest)
    - [ListPartsLibrariesResponse](#-ListPartsLibrariesResponse)
    - [ListPartsNotUpdatedRequest](#-ListPartsNotUpdatedRequest)
    - [ListPartsNotUpdatedResponse](#-ListPartsNotUpdatedResponse)
    - [ListPartsNotUpdatedResponse.CCA](#-ListPartsNotUpdatedResponse-CCA)
    - [ListPartsNotUpdatedResponse.CCA.Part](#-ListPartsNotUpdatedResponse-CCA-Part)
    - [UpdateLeadModelingRequest](#-UpdateLeadModelingRequest)
    - [UpdatePartsListFromAVLRequest](#-UpdatePartsListFromAVLRequest)
    - [UpdatePartsListFromAVLResponse](#-UpdatePartsListFromAVLResponse)
    - [UpdatePartsListPropertiesRequest](#-UpdatePartsListPropertiesRequest)
    - [UpdatePartsListPropertiesRequest.PartProperties](#-UpdatePartsListPropertiesRequest-PartProperties)
    - [UpdatePartsListPropertiesRequest.PartProperties.Property](#-UpdatePartsListPropertiesRequest-PartProperties-Property)
    - [UpdatePartsListPropertiesResponse](#-UpdatePartsListPropertiesResponse)
    - [UpdatePartsListPropertiesResponse.PartPropertyError](#-UpdatePartsListPropertiesResponse-PartPropertyError)
    - [UpdatePartsListRequest](#-UpdatePartsListRequest)
    - [UpdatePartsListResponse](#-UpdatePartsListResponse)
    - [UpdatePartsLocationsByFileRequest](#-UpdatePartsLocationsByFileRequest)
    - [UpdatePartsLocationsByFileResponse](#-UpdatePartsLocationsByFileResponse)
    - [UpdatePartsLocationsRequest](#-UpdatePartsLocationsRequest)
    - [UpdatePartsLocationsRequest.PartLocation](#-UpdatePartsLocationsRequest-PartLocation)
    - [UpdatePartsLocationsResponse](#-UpdatePartsLocationsResponse)
  
    - [AVLDescription](#-AVLDescription)
    - [AVLPartNum](#-AVLPartNum)
    - [DuplicationMode](#-DuplicationMode)
  
    - [SherlockPartsService](#-SherlockPartsService)
  
- [SherlockProjectService.proto](#SherlockProjectService-proto)
    - [AddCcaRequest](#-AddCcaRequest)
    - [AddProjectRequest](#-AddProjectRequest)
    - [AddStrainMapRequest](#-AddStrainMapRequest)
    - [AddStrainMapRequest.StrainMapFile](#-AddStrainMapRequest-StrainMapFile)
    - [AddStrainMapRequest.StrainMapFile.StrainMapImageFile](#-AddStrainMapRequest-StrainMapFile-StrainMapImageFile)
    - [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.ImageCoordinate](#-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-ImageCoordinate)
    - [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendCoordinate](#-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-LegendCoordinate)
    - [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.NodeCoordinate](#-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-NodeCoordinate)
    - [AddStrainMapResponse](#-AddStrainMapResponse)
    - [AddThermalMapRequest](#-AddThermalMapRequest)
    - [AddThermalMapRequest.AddThermalMap](#-AddThermalMapRequest-AddThermalMap)
    - [AddThermalMapResponse](#-AddThermalMapResponse)
    - [CCA](#-CCA)
    - [CreateCcaFromModelingRegionRequest](#-CreateCcaFromModelingRegionRequest)
    - [CreateCcaFromModelingRegionRequest.CCAFromModelingRegion](#-CreateCcaFromModelingRegionRequest-CCAFromModelingRegion)
    - [DeleteProjectRequest](#-DeleteProjectRequest)
    - [ExportProjectRequest](#-ExportProjectRequest)
    - [GenCCAReportRequest](#-GenCCAReportRequest)
    - [GenCCAReportResponse](#-GenCCAReportResponse)
    - [GenReportRequest](#-GenReportRequest)
    - [GenReportResponse](#-GenReportResponse)
    - [ImportIPC2581Request](#-ImportIPC2581Request)
    - [ImportODBRequest](#-ImportODBRequest)
    - [ImportProjectZipRequest](#-ImportProjectZipRequest)
    - [ImportProjectZipSingleModeRequest](#-ImportProjectZipSingleModeRequest)
    - [ListCCAsRequest](#-ListCCAsRequest)
    - [ListCCAsResponse](#-ListCCAsResponse)
    - [ListCCAsResponse.CCA](#-ListCCAsResponse-CCA)
    - [ListStrainMapsRequest](#-ListStrainMapsRequest)
    - [ListStrainMapsResponse](#-ListStrainMapsResponse)
    - [ListStrainMapsResponse.CcaStrainMap](#-ListStrainMapsResponse-CcaStrainMap)
    - [ListThermalMapsRequest](#-ListThermalMapsRequest)
    - [ListThermalMapsResponse](#-ListThermalMapsResponse)
    - [ListThermalMapsResponse.CcaThermalMap](#-ListThermalMapsResponse-CcaThermalMap)
    - [ListThermalMapsResponse.CcaThermalMap.ThermalMap](#-ListThermalMapsResponse-CcaThermalMap-ThermalMap)
    - [ThermalMapFile](#-ThermalMapFile)
    - [ThermalMapFile.CsvExcelFile](#-ThermalMapFile-CsvExcelFile)
    - [ThermalMapFile.ImageFile](#-ThermalMapFile-ImageFile)
    - [ThermalMapFile.ImageFile.ImageCoordinate](#-ThermalMapFile-ImageFile-ImageCoordinate)
    - [ThermalMapFile.ImageFile.LegendCoordinate](#-ThermalMapFile-ImageFile-LegendCoordinate)
    - [ThermalMapFile.ImageFile.NodeCoordinate](#-ThermalMapFile-ImageFile-NodeCoordinate)
    - [UpdateThermalMapRequest](#-UpdateThermalMapRequest)
    - [UpdateThermalMapsResponse](#-UpdateThermalMapsResponse)
  
    - [AddStrainMapRequest.StrainMapFile.FileType](#-AddStrainMapRequest-StrainMapFile-FileType)
    - [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendOrientation](#-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-LegendOrientation)
    - [ThermalMapFile.FileType](#-ThermalMapFile-FileType)
    - [ThermalMapFile.ImageFile.LegendOrientation](#-ThermalMapFile-ImageFile-LegendOrientation)
    - [ThermalMapFile.ThermalBoardSide](#-ThermalMapFile-ThermalBoardSide)
  
    - [SherlockProjectService](#-SherlockProjectService)
  
- [SherlockService.proto](#SherlockService-proto)
    - [ClientMessage](#-ClientMessage)
    - [ExportRequest](#-ExportRequest)
    - [ExportTraceReinforcementRequest](#-ExportTraceReinforcementRequest)
    - [GetCCARequest](#-GetCCARequest)
    - [GetCCAResponse](#-GetCCAResponse)
    - [ImportRequest](#-ImportRequest)
    - [ImportRequest.AnalysisImport](#-ImportRequest-AnalysisImport)
    - [ImportRequest.AnalysisImport.rst](#-ImportRequest-AnalysisImport-rst)
    - [ImportRequest.ModelTransform](#-ImportRequest-ModelTransform)
    - [OpenProjectRequest](#-OpenProjectRequest)
    - [SaveProjectRequest](#-SaveProjectRequest)
    - [ServerMessage](#-ServerMessage)
    - [SetWorkingDirRequest](#-SetWorkingDirRequest)
  
    - [ExportRequest.ExportAnalysis](#-ExportRequest-ExportAnalysis)
    - [ImportRequest.ImportAnalysis](#-ImportRequest-ImportAnalysis)
    - [ImportRequest.ModelTransform.DetectTransform](#-ImportRequest-ModelTransform-DetectTransform)
    - [ServerMessage.Item](#-ServerMessage-Item)
    - [ServerMessage.State](#-ServerMessage-State)
  
    - [SherlockService](#-SherlockService)
  
- [SherlockStackupService.proto](#SherlockStackupService-proto)
    - [GenStackupRequest](#-GenStackupRequest)
    - [GetLayerCountRequest](#-GetLayerCountRequest)
    - [GetLayerCountResponse](#-GetLayerCountResponse)
    - [GetStackupPropsRequest](#-GetStackupPropsRequest)
    - [GetStackupPropsResponse](#-GetStackupPropsResponse)
    - [GetTotalConductorThicknessRequest](#-GetTotalConductorThicknessRequest)
    - [GetTotalConductorThicknessResponse](#-GetTotalConductorThicknessResponse)
    - [ListConductorLayersRequest](#-ListConductorLayersRequest)
    - [ListConductorLayersResponse](#-ListConductorLayersResponse)
    - [ListConductorLayersResponse.CCAConductorLayerProp](#-ListConductorLayersResponse-CCAConductorLayerProp)
    - [ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp](#-ListConductorLayersResponse-CCAConductorLayerProp-ConductorLayerProp)
    - [ListConductorMaterialsRequest](#-ListConductorMaterialsRequest)
    - [ListConductorMaterialsResponse](#-ListConductorMaterialsResponse)
    - [ListConstructionStylesRequest](#-ListConstructionStylesRequest)
    - [ListConstructionStylesResponse](#-ListConstructionStylesResponse)
    - [ListFiberMaterialsRequest](#-ListFiberMaterialsRequest)
    - [ListFiberMaterialsResponse](#-ListFiberMaterialsResponse)
    - [ListLaminateMaterialsManufacturersRequest](#-ListLaminateMaterialsManufacturersRequest)
    - [ListLaminateMaterialsManufacturersResponse](#-ListLaminateMaterialsManufacturersResponse)
    - [ListLaminateMaterialsRequest](#-ListLaminateMaterialsRequest)
    - [ListLaminateMaterialsResponse](#-ListLaminateMaterialsResponse)
    - [ListLaminateMaterialsResponse.ManufacturerMaterials](#-ListLaminateMaterialsResponse-ManufacturerMaterials)
    - [ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials](#-ListLaminateMaterialsResponse-ManufacturerMaterials-GradeMaterials)
    - [ListLaminateThicknessUnitsRequest](#-ListLaminateThicknessUnitsRequest)
    - [ListLaminateThicknessUnitsResponse](#-ListLaminateThicknessUnitsResponse)
    - [ListLaminatesRequest](#-ListLaminatesRequest)
    - [ListLaminatesResponse](#-ListLaminatesResponse)
    - [ListLaminatesResponse.CCALaminateProp](#-ListLaminatesResponse-CCALaminateProp)
    - [ListLaminatesResponse.CCALaminateProp.LaminateProp](#-ListLaminatesResponse-CCALaminateProp-LaminateProp)
    - [ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction](#-ListLaminatesResponse-CCALaminateProp-LaminateProp-GlassConstruction)
    - [UpdateConductorLayerRequest](#-UpdateConductorLayerRequest)
    - [UpdateLaminateRequest](#-UpdateLaminateRequest)
    - [UpdateLaminateRequest.GlassConstruction](#-UpdateLaminateRequest-GlassConstruction)
  
    - [SherlockStackupService](#-SherlockStackupService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="SherlockAnalysisService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## SherlockAnalysisService.proto
@Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-GetHarmonicVibeInputFieldsRequest"></a>

### GetHarmonicVibeInputFieldsRequest
Request to list the valid Harmonic Vibe input fields for the provided model source and user configuration.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |






<a name="-GetHarmonicVibeInputFieldsResponse"></a>

### GetHarmonicVibeInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Harmonic Vibe input fields. |






<a name="-GetICTAnalysisInputFieldsRequest"></a>

### GetICTAnalysisInputFieldsRequest
Request to list the valid ICT analysis input fields given the user configuration.






<a name="-GetICTAnalysisInputFieldsResponse"></a>

### GetICTAnalysisInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of ICT Analysis input fields. |






<a name="-GetMechanicalShockInputFieldsRequest"></a>

### GetMechanicalShockInputFieldsRequest
Request to list the valid mechanical shock input fields for the provided model source and user configuration.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |






<a name="-GetMechanicalShockInputFieldsResponse"></a>

### GetMechanicalShockInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Mechanical Shock input fields for a model source. |






<a name="-GetNaturalFrequencyInputFieldsRequest"></a>

### GetNaturalFrequencyInputFieldsRequest
Request to list the valid natural frequency input fields given the user configuration.






<a name="-GetNaturalFrequencyInputFieldsResponse"></a>

### GetNaturalFrequencyInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Natural Frequency input fields. |






<a name="-GetPcbModelingInputFieldsRequest"></a>

### GetPcbModelingInputFieldsRequest
Request to list the valid PCB Modeling input fields given the user configuration.






<a name="-GetPcbModelingInputFieldsResponse"></a>

### GetPcbModelingInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Pcb Modeling input fields. |






<a name="-GetRandomVibeInputFieldsRequest"></a>

### GetRandomVibeInputFieldsRequest
Request to list the valid random vibe input fields for the provided model source and user configuration.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |






<a name="-GetRandomVibeInputFieldsResponse"></a>

### GetRandomVibeInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Random Vibe input fields. |






<a name="-GetSolderFatigueInputFieldsRequest"></a>

### GetSolderFatigueInputFieldsRequest
Request to list the valid solder fatigue input fields given the user configuration.






<a name="-GetSolderFatigueInputFieldsResponse"></a>

### GetSolderFatigueInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Solder Fatigue input fields. |






<a name="-RunAnalysisRequest"></a>

### RunAnalysisRequest
Request to run one or more Sherlock analysis given the project path, CCA name, analyses, lifecycle phases and events.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| analyses | [RunAnalysisRequest.Analysis](#RunAnalysisRequest-Analysis) | repeated | List of Analyses to run. |






<a name="-RunAnalysisRequest-Analysis"></a>

### RunAnalysisRequest.Analysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [RunAnalysisRequest.Analysis.AnalysisType](#RunAnalysisRequest-Analysis-AnalysisType) |  | Type of Analysis to run. |
| phases | [RunAnalysisRequest.Analysis.Phase](#RunAnalysisRequest-Analysis-Phase) | repeated | List of Phases for each Analysis to run. |






<a name="-RunAnalysisRequest-Analysis-Phase"></a>

### RunAnalysisRequest.Analysis.Phase



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle phase name. |
| events | [RunAnalysisRequest.Analysis.Phase.Event](#RunAnalysisRequest-Analysis-Phase-Event) | repeated | List of life cycle Events. |






<a name="-RunAnalysisRequest-Analysis-Phase-Event"></a>

### RunAnalysisRequest.Analysis.Phase.Event



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle event name. |






<a name="-RunStrainMapAnalysisRequest"></a>

### RunStrainMapAnalysisRequest
Request to run Sherlock strain map analysis given the project name, CCA name, and strain maps.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name of the main CCA for the analysis. |
| strainMapAnalyses | [RunStrainMapAnalysisRequest.StrainMapAnalysis](#RunStrainMapAnalysisRequest-StrainMapAnalysis) | repeated | List of Strain Map Analyses to run. |






<a name="-RunStrainMapAnalysisRequest-StrainMapAnalysis"></a>

### RunStrainMapAnalysisRequest.StrainMapAnalysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType](#RunStrainMapAnalysisRequest-StrainMapAnalysis-AnalysisType) |  | Type of Strain Map analysis to run. |
| eventStrainMaps | [RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap](#RunStrainMapAnalysisRequest-StrainMapAnalysis-EventStrainMap) | repeated | List of Strain Map events to run. |






<a name="-RunStrainMapAnalysisRequest-StrainMapAnalysis-EventStrainMap"></a>

### RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | Life cycle phase name. |
| eventName | [string](#string) |  | Life cycle event name. |
| pcbSide | [string](#string) |  | PCB side for the strain map. Supported values are: TOP, BOTTOM. |
| strainMap | [string](#string) |  | Strain map assigned to the event. |
| subAssemblyName | [string](#string) | optional | The name of the sub-assembly CCA to be assigned the strain map. |






<a name="-UpdateHarmonicVibePropsRequest"></a>

### UpdateHarmonicVibePropsRequest
Request to update the harmonic vibe analysis properties for one or more CCA&#39;s
in the project indicated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| harmonicVibeProperties | [UpdateHarmonicVibePropsRequest.HarmonicVibe](#UpdateHarmonicVibePropsRequest-HarmonicVibe) | repeated | List of HarmonicVibe analysis properties to update. |






<a name="-UpdateHarmonicVibePropsRequest-HarmonicVibe"></a>

### UpdateHarmonicVibePropsRequest.HarmonicVibe



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | CCA name for which the harmonic vibe properties are set. |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |
| harmonicVibeCount | [int32](#int32) | optional | Number of harmonic result layers to generate. |
| harmonicVibeDamping | [string](#string) | optional | Modal Damping Ratio(s). |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Flag indicating if material assignment is required. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are &#34;FORCE&#34; or &#34;AUTO&#34;. |
| filterByEventFrequency | [bool](#bool) | optional | Flag indicating if harmonic results outside selected event range are imported. |
| naturalFreqMin | [uint32](#uint32) | optional | Min Frequency. For NX Nastran analysis only. |
| naturalFreqMinUnits | [string](#string) | optional | Min Frequency units. For NX Nastran analysis only. |
| naturalFreqMax | [uint32](#uint32) | optional | Max Frequency. For NX Nastran analysis only. |
| naturalFreqMaxUnits | [string](#string) | optional | Max Frequency units. For NX Nastran analysis only. |
| reuseModalAnalysis | [bool](#bool) | optional | Reuse Natural Frequency. For NX Nastran analysis only. |






<a name="-UpdateICTAnalysisPropsRequest"></a>

### UpdateICTAnalysisPropsRequest
Request to update ICT Analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| ictAnalysisProperties | [UpdateICTAnalysisPropsRequest.ICTAnalysis](#UpdateICTAnalysisPropsRequest-ICTAnalysis) | repeated | List of ICTAnalysis properties to update for each CCA in a project. |






<a name="-UpdateICTAnalysisPropsRequest-ICTAnalysis"></a>

### UpdateICTAnalysisPropsRequest.ICTAnalysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| applicationTime | [double](#double) | optional | Application Time. |
| applicationTimeUnits | [string](#string) | optional | Application Time Units. |
| numberOfEvents | [uint32](#uint32) | optional | Number of Events. |
| partValidationEnabled | [bool](#bool) | optional | Part Validation. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Flag indicating if material assignment is required. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are &#34;FORCE&#34; or &#34;AUTO&#34;. |
| ictResultCount | [int32](#int32) | optional | Number of ICT layers to generate when using thermal analysis. |






<a name="-UpdateMechanicalShockPropsRequest"></a>

### UpdateMechanicalShockPropsRequest
Request to update the mechanical shock analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| mechanicalShockProperties | [UpdateMechanicalShockPropsRequest.MechanicalShock](#UpdateMechanicalShockPropsRequest-MechanicalShock) | repeated | List of MechanicalShock properties to update. |






<a name="-UpdateMechanicalShockPropsRequest-MechanicalShock"></a>

### UpdateMechanicalShockPropsRequest.MechanicalShock



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| modelSource | [ModelSource](#ModelSource) | optional | Default is GENERATED. |
| shockResultCount | [int32](#int32) | optional | Mechanical Shock Result Count. |
| criticalShockStrain | [double](#double) | optional | Critical Shock Strain. |
| criticalShockStrainUnits | [string](#string) | optional | Critical Shock Strain units. |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Flag indicating if material assignment is required. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are &#34;FORCE&#34; or &#34;AUTO&#34;. |
| naturalFreqMin | [uint32](#uint32) | optional | Min Frequency. |
| naturalFreqMinUnits | [string](#string) | optional | Min Frequency units. |
| naturalFreqMax | [uint32](#uint32) | optional | Max Frequency. |
| naturalFreqMaxUnits | [string](#string) | optional | Max Frequency units. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units. |






<a name="-UpdateNaturalFrequencyPropsRequest"></a>

### UpdateNaturalFrequencyPropsRequest
Request to update natural frequency analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| ccaName | [string](#string) |  | CCA name. |
| naturalFreqCount | [int32](#int32) |  | NF Result Count. |
| naturalFreqMin | [double](#double) |  | Min Frequency. |
| naturalFreqMinUnits | [string](#string) |  | Min Frequency units (HZ, KHZ, MHZ, or GHZ). |
| naturalFreqMax | [double](#double) |  | Max Frequency. |
| naturalFreqMaxUnits | [string](#string) |  | Max Frequency units (HZ, KHZ, MHZ, or GHZ). |
| partValidationEnabled | [bool](#bool) |  | Part Validation. |
| requireMaterialAssignmentEnabled | [bool](#bool) |  | Require Material Assignment. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units (C, F, or K). |






<a name="-UpdatePartModelingRequest"></a>

### UpdatePartModelingRequest
Request to update FEA part modeling properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partEnabled | [bool](#bool) |  | Whether to enable part modeling. Ignores all other fields if part modeling is disabled. |
| partMinSize | [double](#double) | optional | The minimum part size. |
| partMinSizeUnits | [string](#string) | optional | Units for minimum part size. |
| partElemOrder | [string](#string) | optional | Element order. |
| partMaxEdgeLength | [double](#double) | optional | Maximum mesh size. |
| partMaxEdgeLengthUnits | [string](#string) | optional | Units for maximum mesh size. |
| partMaxVertical | [double](#double) | optional | Vertical mesh size. |
| partMaxVerticalUnits | [string](#string) | optional | Units for vertical mesh size. |
| partResultsFiltered | [bool](#bool) | optional | Whether to enable filtered part results. |






<a name="-UpdatePartsListValidationPropsRequest"></a>

### UpdatePartsListValidationPropsRequest
Request to update the Parts List Validation properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| partsListValidationProperties | [UpdatePartsListValidationPropsRequest.PartsListValidation](#UpdatePartsListValidationPropsRequest-PartsListValidation) | repeated | Properties for each CCA in the project. |






<a name="-UpdatePartsListValidationPropsRequest-PartsListValidation"></a>

### UpdatePartsListValidationPropsRequest.PartsListValidation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| partLibrary | [string](#string) | optional | Part library name. |
| processUseAVL | [bool](#bool) | optional | Process option to use AVL. |
| processUseWizard | [bool](#bool) | optional | Process option to use Wizard. |
| processCheckConfirmedProperties | [bool](#bool) | optional | Process option to check confirmed properties. |
| processCheckPartNumbers | [bool](#bool) | optional | Process option to check part numbers. |
| matching | [MatchingMode](#MatchingMode) | optional | Matching type. |
| avlRequireInternalPartNumber | [bool](#bool) | optional | AVL require internal part number. |
| avlRequireApprovedDescription | [bool](#bool) | optional | AVL require approved description. |
| avlRequireApprovedManufacturer | [bool](#bool) | optional | AVL require approved manufacturer. |






<a name="-UpdatePcbModelingPropsRequest"></a>

### UpdatePcbModelingPropsRequest
Request to update FEA analysis PCB Modeling properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaNames | [string](#string) | repeated | The CCA names for which to assign the PCB modeling parameters. |
| analyses | [UpdatePcbModelingPropsRequest.Analysis](#UpdatePcbModelingPropsRequest-Analysis) | repeated | List of Analysis message types. |






<a name="-UpdatePcbModelingPropsRequest-Analysis"></a>

### UpdatePcbModelingPropsRequest.Analysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [UpdatePcbModelingPropsRequest.Analysis.AnalysisType](#UpdatePcbModelingPropsRequest-Analysis-AnalysisType) |  | The type of analysis for which PCB modeling properties apply. |
| modelType | [UpdatePcbModelingPropsRequest.Analysis.PcbModelType](#UpdatePcbModelingPropsRequest-Analysis-PcbModelType) |  | The PCB modeling mesh type. |
| modelingRegionEnabled | [bool](#bool) |  | Indicates if modeling regions are enabled. |
| pcbMaterialModel | [UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel](#UpdatePcbModelingPropsRequest-Analysis-PcbMaterialModel) |  | The PCB modeling PCB model type. |
| pcbMaxMaterials | [int32](#int32) | optional | The number of PCB materials for Uniform Elements and Layered Elements PCB model types. |
| pcbElemOrder | [ElementOrder](#ElementOrder) |  | The element order for PCB elements. |
| pcbMaxEdgeLength | [double](#double) |  | The maximum mesh size for PCB elements. |
| pcbMaxEdgeLengthUnits | [string](#string) |  | The length units for the maximum mesh size. |
| pcbMaxVertical | [double](#double) |  | The maximum vertical mesh size for PCB elements. |
| pcbMaxVerticalUnits | [string](#string) |  | The length units for the maximum vertical mesh size. |
| quadsPreferred | [bool](#bool) |  | Indicates that the meshing engine should attempt to generate quad-shaped elements when creating the mesh. |






<a name="-UpdateRandomVibePropsRequest"></a>

### UpdateRandomVibePropsRequest
Request to update random vibe analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| ccaName | [string](#string) |  | CCA name. |
| randomVibeDamping | [string](#string) | optional | Modal Damping Ratio(s). |
| naturalFreqMin | [double](#double) | optional | Min Frequency. For NX Nastran analysis only. |
| naturalFreqMinUnits | [string](#string) | optional | Min Frequency units. For NX Nastran analysis only. |
| naturalFreqMax | [double](#double) | optional | Max Frequency. For NX Nastran analysis only. |
| naturalFreqMaxUnits | [string](#string) | optional | Max Frequency units. For NX Nastran analysis only. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units. |
| partValidationEnabled | [bool](#bool) | optional | Part Validation. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are &#34;FORCE&#34; or &#34;AUTO&#34;. |
| reuseModalAnalysis | [bool](#bool) | optional | Reuse Natural Frequency. For NX Nastran analysis only. |
| performNFFreqRangeCheck | [bool](#bool) | optional | Frequency Range Check. For NX Nastran analysis only. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Require Material Assignment. |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |
| strainMapNaturalFreqs | [string](#string) | optional | Comma-separated list of natural frequencies for strain map analysis. |






<a name="-UpdateSolderFatiguePropsRequest"></a>

### UpdateSolderFatiguePropsRequest
Request to update solder fatigue properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| solderFatigueProperties | [UpdateSolderFatiguePropsRequest.SolderFatigue](#UpdateSolderFatiguePropsRequest-SolderFatigue) | repeated | List of SolderFatigue properties to update for a CCA. |






<a name="-UpdateSolderFatiguePropsRequest-SolderFatigue"></a>

### UpdateSolderFatiguePropsRequest.SolderFatigue



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| solderMaterial | [string](#string) | optional | Name of the solder material. |
| partTemp | [double](#double) | optional | Part temperature rise. |
| partTempUnits | [string](#string) | optional | Part temperature rise units. |
| partTempRiseMinEnabled | [bool](#bool) | optional | Flag indicating if part temperature minimum rise should be enabled. |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |






<a name="-UpdateThermalMechPropsRequest"></a>

### UpdateThermalMechPropsRequest
Request to update thermal mech analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| ccaName | [string](#string) | repeated | CCA names. |
| thermalResultCount | [int32](#int32) |  | Thermal Mech Result Count. |
| partValidationEnabled | [bool](#bool) |  | Part Validation. |
| requireMaterialAssignmentEnabled | [bool](#bool) |  | Require Material Assignment. |





 


<a name="-ElementOrder"></a>

### ElementOrder
Enumeration defining the types of supported element orders.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownOrder | 0 | Default enum to catch invalid element order. |
| Linear | 1 | Enum for first order linear elements. |
| Quadratic | 2 | Enum for second order quadratic elements. |
| SolidShell | 3 | Enum for solid shell elements. |



<a name="-ModelSource"></a>

### ModelSource


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Default enum to catch invalid source. |
| GENERATED | 1 | Generated analysis model source. |
| STRAIN_MAP | 2 | Strain map analysis model source. |



<a name="-RunAnalysisRequest-Analysis-AnalysisType"></a>

### RunAnalysisRequest.Analysis.AnalysisType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Default enum to catch invalid analysis. |
| NaturalFreq | 1 | Enum for the Natural Frequency analysis. |
| HarmonicVibe | 2 | Enum for the Harmonic Vibe analysis. |
| ICTAnalysis | 3 | Enum for the ICT analysis. |
| MechanicalShock | 4 | Enum for the Mechanical Shock analysis. |
| RandomVibe | 5 | Enum for the Random Vibe analysis. |
| ComponentFailureMode | 7 | Enum for the Component Failure Mechanism analysis. |
| DFMEAModule | 8 | Enum for the DFMEA analysis. |
| PTHFatigue | 9 | Enum for the PTH Fatigue analysis. |
| PartValidation | 10 | Enum for the Part Validation analysis. |
| SemiconductorWearout | 11 | Enum for the Semiconductor Wearout analysis. |
| SolderJointFatigue | 12 | Enum for the Solder Fatigue analysis. |
| ThermalDerating | 13 | Enum for the Thermal Derating analysis. |
| ThermalMech | 14 | Enum for the Thermal Mech analysis. |



<a name="-RunStrainMapAnalysisRequest-StrainMapAnalysis-AnalysisType"></a>

### RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Default enum to catch invalid analysis. |
| RandomVibe | 1 | Enum for the Random Vibe analysis. |
| MechanicalShock | 2 | Enum for Mechanical Shock analysis. |



<a name="-UpdatePcbModelingPropsRequest-Analysis-AnalysisType"></a>

### UpdatePcbModelingPropsRequest.Analysis.AnalysisType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownAnalysisType | 0 | Default enum to catch invalid analysis. |
| HarmonicVibe | 1 | Enum for the Harmonic Vibe analysis. |
| ICTAnalysis | 2 | Enum for the ICT analysis. |
| MechanicalShock | 3 | Enum for the Mechanical Shock analysis. |
| NaturalFreq | 4 | Enum for the Natural Frequency analysis. |
| RandomVibe | 5 | Enum for the Random Vibe analysis. |
| ThermalMech | 6 | Enum for the Thermal Mech analysis. |



<a name="-UpdatePcbModelingPropsRequest-Analysis-PcbMaterialModel"></a>

### UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel


| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownPcbModel | 0 | Default enum to catch invalid PCB model. |
| Uniform | 1 | Enum for uniform PCB model. |
| Layered | 2 | Enum for layered PCB model. |
| UniformElements | 3 | Enum for uniform elements PCB model. |
| LayeredElements | 4 | Enum for layered elements PCB model. |



<a name="-UpdatePcbModelingPropsRequest-Analysis-PcbModelType"></a>

### UpdatePcbModelingPropsRequest.Analysis.PcbModelType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownMeshType | 0 | Default enum to catch invalid mesh type. |
| Bonded | 1 | Bonded FEA model. |


 

 


<a name="-SherlockAnalysisService"></a>

### SherlockAnalysisService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| runAnalysis | [.RunAnalysisRequest](#RunAnalysisRequest) | [.ReturnCode](#ReturnCode) | Runs one or more Sherlock analysis. |
| runStrainMapAnalysis | [.RunStrainMapAnalysisRequest](#RunStrainMapAnalysisRequest) | [.ReturnCode](#ReturnCode) | Run Sherlock strain map analysis. |
| getHarmonicVibeInputFields | [.GetHarmonicVibeInputFieldsRequest](#GetHarmonicVibeInputFieldsRequest) | [.GetHarmonicVibeInputFieldsResponse](#GetHarmonicVibeInputFieldsResponse) | Returns the list of valid harmonic vibe input fields for the provided model source and user configuration. |
| updateHarmonicVibeProps | [.UpdateHarmonicVibePropsRequest](#UpdateHarmonicVibePropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for harmonic vibe analysis. |
| getRandomVibeInputFields | [.GetRandomVibeInputFieldsRequest](#GetRandomVibeInputFieldsRequest) | [.GetRandomVibeInputFieldsResponse](#GetRandomVibeInputFieldsResponse) | Returns the list of valid Random Vibe input fields for the provided model source and user configuration. |
| updateRandomVibeProps | [.UpdateRandomVibePropsRequest](#UpdateRandomVibePropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for random vibe analysis. |
| getMechanicalShockInputFields | [.GetMechanicalShockInputFieldsRequest](#GetMechanicalShockInputFieldsRequest) | [.GetMechanicalShockInputFieldsResponse](#GetMechanicalShockInputFieldsResponse) | Returns the list of valid mechanical shock input fields for the provided model source and user configuration. |
| updateMechanicalShockProps | [.UpdateMechanicalShockPropsRequest](#UpdateMechanicalShockPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for mechanical shock analysis. |
| updateSolderFatigueProps | [.UpdateSolderFatiguePropsRequest](#UpdateSolderFatiguePropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for solder fatigue analysis. |
| getNaturalFrequencyInputFields | [.GetNaturalFrequencyInputFieldsRequest](#GetNaturalFrequencyInputFieldsRequest) | [.GetNaturalFrequencyInputFieldsResponse](#GetNaturalFrequencyInputFieldsResponse) | Returns the list of valid natural frequency property fields given the user configuration. |
| updateNaturalFrequencyProps | [.UpdateNaturalFrequencyPropsRequest](#UpdateNaturalFrequencyPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for natural frequency analysis. |
| updateThermalMechProps | [.UpdateThermalMechPropsRequest](#UpdateThermalMechPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for thermal mech analysis. |
| getPcbModelingInputFields | [.GetPcbModelingInputFieldsRequest](#GetPcbModelingInputFieldsRequest) | [.GetPcbModelingInputFieldsResponse](#GetPcbModelingInputFieldsResponse) | Returns the list of valid PCB modeling property field. |
| updatePcbModelingProps | [.UpdatePcbModelingPropsRequest](#UpdatePcbModelingPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the PCB modeling properties for the provided analysis types. |
| getSolderFatigueInputFields | [.GetSolderFatigueInputFieldsRequest](#GetSolderFatigueInputFieldsRequest) | [.GetSolderFatigueInputFieldsResponse](#GetSolderFatigueInputFieldsResponse) | Returns the list of valid solder fatigue property fields given the user configuration. |
| updatePartModelingProperties | [.UpdatePartModelingRequest](#UpdatePartModelingRequest) | [.ReturnCode](#ReturnCode) | Updates the part modeling properties for a given project&#39;s CCA. |
| getICTAnalysisInputFields | [.GetICTAnalysisInputFieldsRequest](#GetICTAnalysisInputFieldsRequest) | [.GetICTAnalysisInputFieldsResponse](#GetICTAnalysisInputFieldsResponse) | Returns the list of valid ICT analysis property fields given the user configuration. |
| updateICTAnalysisProps | [.UpdateICTAnalysisPropsRequest](#UpdateICTAnalysisPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for ICT analysis. |
| updatePartsListValidationProps | [.UpdatePartsListValidationPropsRequest](#UpdatePartsListValidationPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for part list validation analysis. |

 



<a name="SherlockCommonService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## SherlockCommonService.proto
Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-ExitRequest"></a>

### ExitRequest
Request to exit the gRPC connection.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| closeSherlockClient | [bool](#bool) |  | If set to true, exits the Sherlock client if it is opened. Otherwise, just closes the gRPC connection. |






<a name="-GetSoldersRequest"></a>

### GetSoldersRequest
Request for a list of valid solder materials.






<a name="-GetSoldersResponse"></a>

### GetSoldersResponse
Represents a list of valid solder materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| solderName | [string](#string) | repeated | List of valid solder materials. |






<a name="-HealthCheckRequest"></a>

### HealthCheckRequest
Request to check if the gRPC connection is open.






<a name="-HealthCheckResponse"></a>

### HealthCheckResponse
Represents whether the gRPC connection is open.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [HealthCheckResponse.ServingStatus](#HealthCheckResponse-ServingStatus) |  | Enum representing connection status. |
| port | [int32](#int32) |  | Listening port number on server. |






<a name="-IsSherlockClientLoadingRequest"></a>

### IsSherlockClientLoadingRequest
Check if the Sherlock client is still loading.






<a name="-ListUnitsRequest"></a>

### ListUnitsRequest
Request for a list of valid units of the provided unit type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unitType | [ListUnitsRequest.UnitType](#ListUnitsRequest-UnitType) |  | Unit type to request valid units of. |






<a name="-ListUnitsResponse"></a>

### ListUnitsResponse
Represents a list of valid units for the provided unit type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| units | [string](#string) | repeated | List of valid units for the requested type. |






<a name="-Measurement"></a>

### Measurement
Represents a common measurement with a value and a unit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Numerical value of a measurement. |
| units | [string](#string) |  | Units of the numerical value. |






<a name="-ReturnCode"></a>

### ReturnCode
Status response of a message. A value of 0 indicates a successful request.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [int32](#int32) |  | Status code of response. A value of 0 indicates success, -1 indicates error. |
| message | [string](#string) |  | Message indicating the status of response including any error. |






<a name="-SherlockInfoRequest"></a>

### SherlockInfoRequest
Request to receive Sherlock version and configuration data.






<a name="-SherlockInfoResponse"></a>

### SherlockInfoResponse
Represents Sherlock version and configuration data.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| releaseVersion | [string](#string) |  | The current version of Sherlock, formatted as: YYYY R# (Ex. &#34;2025 R1&#34;) |
| defaultProjectDir | [string](#string) |  | The project directory currently used by Sherlock. |
| isSingleProjectMode | [bool](#bool) |  | When true, indicates that Sherlock is in single-project mode. When false, indicates that Sherlock is in multi-project mode. |





 


<a name="-HealthCheckResponse-ServingStatus"></a>

### HealthCheckResponse.ServingStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Indicates an unknown connection status. |
| SERVING | 1 | Indicates the connection is up and server is listening. |
| NOT_SERVING | 2 | Indicates connection with server is closed. |



<a name="-ListUnitsRequest-UnitType"></a>

### ListUnitsRequest.UnitType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Indicates an unknown unit type. |
| ACCEL_DENSITY | 1 | Units used for acceleration density. |
| ACCELERATION | 2 | Units used for acceleration. |
| AREA | 3 | Units used for area. |
| BANDWIDTH | 4 | Units used for bandwidth. |
| CAPACITANCE | 5 | Units used for electrical capacitance. |
| CTE | 6 | Units used for material CTE. |
| CURRENT | 7 | Units used for electrical current. |
| DENSITY | 8 | Units used for density. |
| DISP_DENSITY | 9 | Units used for displacement density. |
| FORCE | 10 | Units used for force. |
| FREQUENCY | 11 | Units used for frequency. |
| INDUCTANCE | 12 | Units used for inductance. |
| LENGTH | 13 | Units used for length. |
| POWER | 14 | Units used for electrical power. |
| RESISTANCE | 15 | Units used for electrical resistance. |
| SIZE | 16 | Units used for size. |
| SPECIFIC_HEAT | 17 | Units used for specific heat. |
| STRAIN | 18 | Units used for strain. |
| STRESS | 19 | Units used for stress. |
| TEMPERATURE | 20 | Units used for temperature. |
| THERMAL_CONDUCTIVITY | 21 | Units used for thermal conductivity. |
| THERMAL_RESISTANCE | 22 | Units used for thermal resistance. |
| TIME | 23 | Units used for time. |
| VELOCITY | 24 | Units used for velocity. |
| VELOCITY_DENSITY | 25 | Units used for velocity density. |
| VOLTAGE | 26 | Units used for electrical voltage. |
| VOLUME | 27 | Units used for volume. |
| WEIGHT | 28 | Units used for weight. |



<a name="-MatchingMode"></a>

### MatchingMode
Determines how parts in the parts list are matched against parts 
in the AVL or Part Library.

| Name | Number | Description |
| ---- | ------ | ----------- |
| Both | 0 | Matches both part number and manufacturer. |
| Part | 1 | Matches part number only. |



<a name="-TableDelimiter"></a>

### TableDelimiter
Types of delimiters that can be used for exporting tables

| Name | Number | Description |
| ---- | ------ | ----------- |
| COMMA | 0 | Represents &#39;,&#39; delimiter. |
| SPACE | 1 | Represents &#39; &#39; delimiter. |
| TAB | 2 | Represents tab key delimiter. |
| SEMICOLON | 3 | Represents &#39;;&#39; delimiter. |


 

 


<a name="-SherlockCommonService"></a>

### SherlockCommonService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| check | [.HealthCheckRequest](#HealthCheckRequest) | [.HealthCheckResponse](#HealthCheckResponse) | Returns health status of gRPC server. |
| exit | [.ExitRequest](#ExitRequest) | [.ReturnCode](#ReturnCode) | Signals for gRPC connection to shutdown. |
| isSherlockClientLoading | [.IsSherlockClientLoadingRequest](#IsSherlockClientLoadingRequest) | [.ReturnCode](#ReturnCode) | Check if the Sherlock client is still loading. |
| listUnits | [.ListUnitsRequest](#ListUnitsRequest) | [.ListUnitsResponse](#ListUnitsResponse) | Returns a list of valid units of the provided unit type. |
| getSolders | [.GetSoldersRequest](#GetSoldersRequest) | [.GetSoldersResponse](#GetSoldersResponse) | Returns a list of valid solder materials. |
| getSherlockInfo | [.SherlockInfoRequest](#SherlockInfoRequest) | [.SherlockInfoResponse](#SherlockInfoResponse) | Returns meta data about Sherlock. |

 



<a name="SherlockLayerService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## SherlockLayerService.proto
Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-AddModelingRegionRequest"></a>

### AddModelingRegionRequest
Request to add one or more modeling regions to a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project to add the modeling regions to. |
| modelingRegions | [ModelingRegion](#ModelingRegion) | repeated | List of modeling regions to add to the project. |






<a name="-AddPottingRegionRequest"></a>

### AddPottingRegionRequest
Request to add a potting region.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project to add the potting regions to. |
| pottingRegions | [AddPottingRegionRequest.PottingRegion](#AddPottingRegionRequest-PottingRegion) | repeated | The potting regions to add. |






<a name="-AddPottingRegionRequest-PottingRegion"></a>

### AddPottingRegionRequest.PottingRegion



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) | optional | The potting ID, must be unique. |
| pottingSide | [string](#string) | optional | The potting side, options are &#34;TOP&#34;, &#34;BOT&#34;, or &#34;BOTTOM&#34;. |
| pottingMaterial | [string](#string) | optional | The potting material. |
| pottingUnits | [string](#string) | optional | The units to use for the potting region. |
| pottingThickness | [double](#double) | optional | The potting thickness. |
| pottingStandoff | [double](#double) | optional | The potting standoff. |
| polygonalShape | [PolygonalShape](#PolygonalShape) |  | Used to add a region with a polygonal shape. |
| rectangularShape | [RectangularShape](#RectangularShape) |  | Used to add a region with a rectangular shape. |
| slotShape | [SlotShape](#SlotShape) |  | Used to add a region with a slot shape. |
| circularShape | [CircularShape](#CircularShape) |  | Used to add a region with a circular shape. |
| pCBShape | [PCBShape](#PCBShape) |  | Used to add a region with a PCB shape. |






<a name="-CircularShape"></a>

### CircularShape



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diameter | [double](#double) | optional | The diameter of the circle. |
| nodeCount | [uint32](#uint32) | optional | The number of nodes. |
| centerX | [double](#double) | optional | The x coordinate of the center of the circle. |
| centerY | [double](#double) | optional | The x coordinate of the center of the circle. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |






<a name="-CopyModelingRegionRequest"></a>

### CopyModelingRegionRequest
Request to copy one or more modeling regions in a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| copyRegions | [CopyModelingRegionRequest.CopyModelingRegionInfo](#CopyModelingRegionRequest-CopyModelingRegionInfo) | repeated | List of modeling regions to copy along with their corresponding &#34;copy to&#34; parameters. |






<a name="-CopyModelingRegionRequest-CopyModelingRegionInfo"></a>

### CopyModelingRegionRequest.CopyModelingRegionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| regionId | [string](#string) |  | Region ID of the existing modeling region to copy. |
| regionIdCopy | [string](#string) |  | Region ID of the modeling region copy. Must be unique. |
| centerX | [double](#double) |  | The center x coordinate of the modeling region copy -- used for location placement in the Layer Viewer. |
| centerY | [double](#double) |  | The center y coordinate of the modeling region copy -- used for location placement in the Layer Viewer. |






<a name="-DeleteAllICTFixturesRequest"></a>

### DeleteAllICTFixturesRequest
Request to delete all ICT fixtures in specific CCA of specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-DeleteAllMountPointsRequest"></a>

### DeleteAllMountPointsRequest
Request to delete all mount points in specific CCA of specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-DeleteAllTestPointsRequest"></a>

### DeleteAllTestPointsRequest
Request to delete all ICT fixtures in specific CCA of specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-DeleteModelingRegionRequest"></a>

### DeleteModelingRegionRequest
Request to delete one or more modeling regions for a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| deleteRegions | [DeleteModelingRegionRequest.DeleteModelingRegionInfo](#DeleteModelingRegionRequest-DeleteModelingRegionInfo) | repeated | List of modeling regions to delete in the project. |






<a name="-DeleteModelingRegionRequest-DeleteModelingRegionInfo"></a>

### DeleteModelingRegionRequest.DeleteModelingRegionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| regionId | [string](#string) |  | Unique region ID of the modeling region to delete. |






<a name="-ExportAllICTFixturesRequest"></a>

### ExportAllICTFixturesRequest
Request to export all ICT fixtures and their properties into a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| units | [string](#string) |  | Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |






<a name="-ExportAllMountPointsRequest"></a>

### ExportAllMountPointsRequest
Request to export all mount points and their properties into a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| units | [string](#string) |  | Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |






<a name="-ExportAllTestPointsRequest"></a>

### ExportAllTestPointsRequest
Request to export all test points and their properties into a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| lengthUnits | [string](#string) |  | Length Units used in exporting. |
| displacementUnits | [string](#string) |  | Displacement Units used in exporting. |
| forceUnits | [string](#string) |  | Force Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |






<a name="-GetMountPointBoundariesRequest"></a>

### GetMountPointBoundariesRequest
Request to list the valid mount point boundaries.






<a name="-GetMountPointBoundariesResponse"></a>

### GetMountPointBoundariesResponse
Represents a list of valid mount point boundaries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| boundary | [string](#string) | repeated | Mount Point boundary. |






<a name="-GetMountPointChassisMaterialsRequest"></a>

### GetMountPointChassisMaterialsRequest
Request to list the valid mount point chassis materials.






<a name="-GetMountPointChassisMaterialsResponse"></a>

### GetMountPointChassisMaterialsResponse
Represents a list of valid mount point chassis materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| chassisMaterial | [string](#string) | repeated | Mount Point chassis material. |






<a name="-GetMountPointShapeTypesRequest"></a>

### GetMountPointShapeTypesRequest
Request to list the valid mount point shape types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mountPointType | [string](#string) |  | Mount Point Type. Supported values are: Mount Hole, Mount Pad, Standoff, and Support Pin. |






<a name="-GetMountPointShapeTypesResponse"></a>

### GetMountPointShapeTypesResponse
Represents a list of valid mount point shape types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| type | [string](#string) | repeated | Mount Point Shape Type. |






<a name="-GetMountPointSidesRequest"></a>

### GetMountPointSidesRequest
Request to list the valid mount point sides.






<a name="-GetMountPointSidesResponse"></a>

### GetMountPointSidesResponse
Represents a list of valid mount point sides.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| side | [string](#string) | repeated | Mount Point side. |






<a name="-GetMountPointTypesRequest"></a>

### GetMountPointTypesRequest
Request to list the valid mount point types.






<a name="-GetMountPointTypesResponse"></a>

### GetMountPointTypesResponse
Represents a list of valid mount point types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| type | [string](#string) | repeated | Mount Point Type. |






<a name="-GetMountPointUnitsRequest"></a>

### GetMountPointUnitsRequest
Request to list the valid mount point units.






<a name="-GetMountPointUnitsResponse"></a>

### GetMountPointUnitsResponse
Represents a list of valid mount point units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| units | [string](#string) | repeated | Mount Point units. |






<a name="-GetMountPointsPropertiesRequest"></a>

### GetMountPointsPropertiesRequest
Request to list the valid mount point chassis materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| mountPointIDs | [string](#string) |  | A comma separated list of mount point id for a list of mount point, or a mount id for one part. |






<a name="-GetMountPointsPropertiesResponse"></a>

### GetMountPointsPropertiesResponse
Represents a list of valid mount point properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| mountPointsProperties | [MountPointProperties](#MountPointProperties) | repeated | Mount point properties. |






<a name="-ModelingRegion"></a>

### ModelingRegion



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) | optional | Name of the CCA. |
| regionId | [string](#string) | optional | Unique modeling region ID. |
| regionUnits | [string](#string) | optional | Modeling region units. |
| modelMode | [ModelingRegion.ModelingMode](#ModelingRegion-ModelingMode) | optional | Mode that specified how the region is used. |
| polygonalShape | [PolygonalShape](#PolygonalShape) |  | Defined by N points that form a convex polygon. |
| rectangularShape | [RectangularShape](#RectangularShape) |  | Defined by 4 points that form a rectangle. |
| slotShape | [SlotShape](#SlotShape) |  | Defined by 8 points that form a rectangle with rounded ends. |
| circularShape | [CircularShape](#CircularShape) |  | Defined by N points that form a circle. |
| pcbModelProps | [ModelingRegion.PCBModelingProperties](#ModelingRegion-PCBModelingProperties) | optional | Mesh properties for the modeling region. |
| traceModelProps | [ModelingRegion.TraceModelingProperties](#ModelingRegion-TraceModelingProperties) | optional | Trace modeling properties for the region. |
| regionIdReplacement | [string](#string) | optional | Represents a unique region id that will replace the existing regionId value during |






<a name="-ModelingRegion-PCBModelingProperties"></a>

### ModelingRegion.PCBModelingProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportModelType | [ModelingRegion.PCBModelingProperties.ExportModelType](#ModelingRegion-PCBModelingProperties-ExportModelType) |  | The type of model to be generated for a given modeling region. |
| elemOrder | [ModelingRegion.ElementOrder](#ModelingRegion-ElementOrder) |  | The type of 3D elements to be created for the PCB in the modeling region. |
| maxMeshSize | [double](#double) |  | The maximum size of the mesh to be used in the region. |
| maxMeshSizeUnits | [string](#string) |  | Units for the maximum mesh size. |
| quadsPreferred | [bool](#bool) |  | If true, then the meshing engine should attempt to generate quad-shaped elements when creating the mesh. |






<a name="-ModelingRegion-TraceModelingProperties"></a>

### ModelingRegion.TraceModelingProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceModelType | [ModelingRegion.TraceModelingProperties.TraceModelingType](#ModelingRegion-TraceModelingProperties-TraceModelingType) |  | Specifies if trace modeling should be performed inside of the region. |
| elemOrder | [ModelingRegion.ElementOrder](#ModelingRegion-ElementOrder) | optional | The type of 3D elements to be created for traces in the region when trace modeling is enabled. |
| traceMeshSize | [double](#double) | optional | The maximum mesh size to be used in the region when trace modeling is enabled. |
| traceMeshSizeUnits | [string](#string) | optional | Units for the maximum mesh size when trace modeling is enabled. |






<a name="-MountPointProperties"></a>

### MountPointProperties
Properties of mount point, the properties may varies from the mount point type and mount point shape.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ID | [string](#string) |  | Mount point ID. |
| type | [string](#string) |  | Mount point type. |
| shape | [string](#string) |  | Shape type. |
| units | [string](#string) |  | Mount point units. |
| x | [string](#string) |  | Center X. |
| y | [string](#string) |  | Center Y. |
| length | [string](#string) |  | Length. |
| width | [string](#string) |  | Width. |
| diameter | [string](#string) |  | Diameter. |
| nodes | [string](#string) |  | # of nodes. |
| rotation | [string](#string) |  | Rotation in degrees. |
| side | [string](#string) |  | Mount point side. |
| height | [string](#string) |  | Mount point height. |
| material | [string](#string) |  | Mount point material. |
| boundary | [string](#string) |  | Boundary Pt(s). |
| constraints | [string](#string) |  | FEA constraints. |
| polygon | [string](#string) |  | Coordinates of points. |
| state | [string](#string) |  | Mount point state. |
| chassisMaterial | [string](#string) |  | Chassis material. |






<a name="-PCBShape"></a>

### PCBShape







<a name="-PolygonalShape"></a>

### PolygonalShape



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| points | [PolygonalShape.Point](#PolygonalShape-Point) | repeated | The points used to define the polygonal shape, must be &gt;= 3. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |






<a name="-PolygonalShape-Point"></a>

### PolygonalShape.Point



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | The x coordinate of the point. |
| y | [double](#double) |  | The y coordinate of the point. |






<a name="-RectangularShape"></a>

### RectangularShape



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [double](#double) | optional | The length of the rectangle. |
| width | [double](#double) | optional | The width of the rectangle. |
| centerX | [double](#double) | optional | The x coordinate of the center of the rectangle. |
| centerY | [double](#double) | optional | The y coordinate of the center of the rectangle. |
| rotation | [double](#double) | optional | The rotation of the rectangle in degrees. |






<a name="-SlotShape"></a>

### SlotShape



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [double](#double) | optional | The length of the slot shape. |
| width | [double](#double) | optional | The width of the slot shape. |
| nodeCount | [uint32](#uint32) | optional | The number of nodes. |
| centerX | [double](#double) | optional | The x coordinate of the center of the slot shape. |
| centerY | [double](#double) | optional | The x coordinate of the center of the slot shape. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |






<a name="-UpdateICTFixturesByFileRequest"></a>

### UpdateICTFixturesByFileRequest
Request to update ICT fixtures properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the ICT fixtures properties. |






<a name="-UpdateICTFixturesResponse"></a>

### UpdateICTFixturesResponse
Contains the status of the update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | ICT fixtures update error messages. |






<a name="-UpdateModelingRegionRequest"></a>

### UpdateModelingRegionRequest
Request to update one or more modeling regions for a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| modelingRegions | [ModelingRegion](#ModelingRegion) | repeated | List of modeling regions to update in the project. The regionId for |






<a name="-UpdateMountPointsByFileRequest"></a>

### UpdateMountPointsByFileRequest
Request to update mount points properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the mount points properties. |






<a name="-UpdateMountPointsRequest"></a>

### UpdateMountPointsRequest
Request to update mount points properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| mountPointsProperties | [MountPointProperties](#MountPointProperties) | repeated | Mount point properties. |






<a name="-UpdateMountPointsResponse"></a>

### UpdateMountPointsResponse
Contains the status of the update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Mount Points update error messages. |






<a name="-UpdateTestPointsByFileRequest"></a>

### UpdateTestPointsByFileRequest
Request to update test points properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the test points properties. |






<a name="-UpdateTestPointsResponse"></a>

### UpdateTestPointsResponse
Contains the status of the update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Test Points update error messages. |





 


<a name="-ModelingRegion-ElementOrder"></a>

### ModelingRegion.ElementOrder


| Name | Number | Description |
| ---- | ------ | ----------- |
| First_Order | 0 | First order (Linear) 3D elements should be created for the PCB in the modeling region. |
| Second_Order | 1 | Second order (Quadratic) 3D elements should be created for the PCB in the modeling region. |
| Solid_Shell | 2 | Used for relatively flat elements, like those found in a PCB layer to reduce modeling generation time. |



<a name="-ModelingRegion-ModelingMode"></a>

### ModelingRegion.ModelingMode


| Name | Number | Description |
| ---- | ------ | ----------- |
| Enabled | 0 | Use the modeling region. |
| Disabled | 1 | Ignore the modeling region. |
| Excluded | 2 | Don&#39;t generate any elements for the region. |



<a name="-ModelingRegion-PCBModelingProperties-ExportModelType"></a>

### ModelingRegion.PCBModelingProperties.ExportModelType


| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 | Region type is based on the Mesh Type property defined in the PCB Modeling tab in the FEA Model Export dialog. |
| Sherlock | 1 | Use mesh elements generated by Sherlock to model the region. |
| Sweep | 2 | Use mesh elements generated by the FEA tool to model the region. |
| None | 3 | Define only geometric volumes for the region, without generating mesh elements. |



<a name="-ModelingRegion-TraceModelingProperties-TraceModelingType"></a>

### ModelingRegion.TraceModelingProperties.TraceModelingType


| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 | Trace modeling type is based on the Trace Modeling property defined in the Trace Modeling tab in the FEA Model Export dialog. |
| Enabled | 1 | Trace modeling is enabled for this region. |
| Disabled | 2 | Trace modeling is disabled for this region. |


 

 


<a name="-SherlockLayerService"></a>

### SherlockLayerService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| addPottingRegion | [.AddPottingRegionRequest](#AddPottingRegionRequest) | [.ReturnCode](#ReturnCode) | Add a potting region with the specified shape and properties. |
| deleteAllICTFixtures | [.DeleteAllICTFixturesRequest](#DeleteAllICTFixturesRequest) | [.ReturnCode](#ReturnCode) | Delete all ICT fixtures in specific CCA of specific project. |
| deleteAllMountPoints | [.DeleteAllMountPointsRequest](#DeleteAllMountPointsRequest) | [.ReturnCode](#ReturnCode) | Delete all mount points in specific CCA of specific project. |
| deleteAllTestPoints | [.DeleteAllTestPointsRequest](#DeleteAllTestPointsRequest) | [.ReturnCode](#ReturnCode) | Delete all test points in specific CCA of specific project. |
| exportAllMountPoints | [.ExportAllMountPointsRequest](#ExportAllMountPointsRequest) | [.ReturnCode](#ReturnCode) | Export all mount points and their properties into a CSV formatted file. |
| exportAllICTFixtures | [.ExportAllICTFixturesRequest](#ExportAllICTFixturesRequest) | [.ReturnCode](#ReturnCode) | Export all ICT fixtures and their properties into a CSV formatted file. |
| exportAllTestPoints | [.ExportAllTestPointsRequest](#ExportAllTestPointsRequest) | [.ReturnCode](#ReturnCode) | Export all test points and their properties into a CSV formatted file. |
| getMountPointBoundaries | [.GetMountPointBoundariesRequest](#GetMountPointBoundariesRequest) | [.GetMountPointBoundariesResponse](#GetMountPointBoundariesResponse) | Get a list of valid mount point boundaries. |
| getMountPointChassisMaterials | [.GetMountPointChassisMaterialsRequest](#GetMountPointChassisMaterialsRequest) | [.GetMountPointChassisMaterialsResponse](#GetMountPointChassisMaterialsResponse) | Get a list of valid mount point chassis materials. |
| getMountPointsProperties | [.GetMountPointsPropertiesRequest](#GetMountPointsPropertiesRequest) | [.GetMountPointsPropertiesResponse](#GetMountPointsPropertiesResponse) | Get a list of valid mount point properties. |
| getMountPointShapeTypes | [.GetMountPointShapeTypesRequest](#GetMountPointShapeTypesRequest) | [.GetMountPointShapeTypesResponse](#GetMountPointShapeTypesResponse) | Get a list of valid mount point shape type values. |
| getMountPointSides | [.GetMountPointSidesRequest](#GetMountPointSidesRequest) | [.GetMountPointSidesResponse](#GetMountPointSidesResponse) | Get a list of valid mount point sides. |
| getMountPointTypes | [.GetMountPointTypesRequest](#GetMountPointTypesRequest) | [.GetMountPointTypesResponse](#GetMountPointTypesResponse) | Get a list of valid mount point type values. |
| getMountPointUnits | [.GetMountPointUnitsRequest](#GetMountPointUnitsRequest) | [.GetMountPointUnitsResponse](#GetMountPointUnitsResponse) | Get a list of valid mount point units. |
| updateICTFixturesByFile | [.UpdateICTFixturesByFileRequest](#UpdateICTFixturesByFileRequest) | [.UpdateICTFixturesResponse](#UpdateICTFixturesResponse) | Update the ICT fixtures properties of a CCA from a CSV formatted file. This API could be used to add new ICT fixtures or update existing ones depending on the file contents. If the ID specified already exists, then the properties for that ICT fixture will be updated. If the ID specified does not already exist, or if the field is empty, then a new ICT fixture will be added with the specified properties. The file format should be the same as the one produced from CCA -&gt; Export ICT Fixtures. |
| updateMountPoints | [.UpdateMountPointsRequest](#UpdateMountPointsRequest) | [.UpdateMountPointsResponse](#UpdateMountPointsResponse) | Update mount points with specified properties. |
| updateMountPointsByFile | [.UpdateMountPointsByFileRequest](#UpdateMountPointsByFileRequest) | [.UpdateMountPointsResponse](#UpdateMountPointsResponse) | Update the mount points properties of a CCA from a CSV formatted file. This API could be used to add new mount points or update existing ones depending on the file contents. If the ID specified already exists, then the properties for that mount point will be updated. If the ID specified does not already exist, or if the field is empty, then a new mount point will be added with the specified properties. The file format should be the same as the one produced from CCA -&gt; Export Mount Points. |
| updateTestPointsByFile | [.UpdateTestPointsByFileRequest](#UpdateTestPointsByFileRequest) | [.UpdateTestPointsResponse](#UpdateTestPointsResponse) | Update the test points properties of a CCA from a CSV formatted file. This API could be used to add new test points or update existing ones depending on the file contents. If the ID specified already exists, then the properties for that test point will be updated. If the ID specified does not already exist, or if the field is empty, then a new test point will be added with the specified properties. The file format should be the same as the one produced from CCA -&gt; Export Test Points. |
| addModelingRegion | [.AddModelingRegionRequest](#AddModelingRegionRequest) | [.ReturnCode](#ReturnCode) | Add one or more modeling regions with the specified shapes and properties. |
| updateModelingRegion | [.UpdateModelingRegionRequest](#UpdateModelingRegionRequest) | [.ReturnCode](#ReturnCode) | Update one or more modeling regions with the specified shapes and properties. |
| deleteModelingRegion | [.DeleteModelingRegionRequest](#DeleteModelingRegionRequest) | [.ReturnCode](#ReturnCode) | Delete one or more existing modeling regions. |
| copyModelingRegion | [.CopyModelingRegionRequest](#CopyModelingRegionRequest) | [.ReturnCode](#ReturnCode) | Copy one or more existing modeling regions. |

 



<a name="SherlockLifeCycleService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## SherlockLifeCycleService.proto
Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-AddHarmonicEventRequest"></a>

### AddHarmonicEventRequest
Request to define and add a new harmonic vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the harmonic event. |
| description | [string](#string) |  | Description of the harmonic event. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this harmonic event. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |
| sweepRate | [double](#double) |  | Sweep rate for the harmonic event |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: &#34;30,15&#34;. |
| profileType | [string](#string) |  | Harmonic load profile types. Example valid values are &#34;Uniaxial&#34; and &#34;Triaxial&#34;. |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: &#34;0,0,1&#34;. |






<a name="-AddHarmonicEventResponse"></a>

### AddHarmonicEventResponse
Response from adding a harmonic vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddHarmonicVibeProfilesRequest"></a>

### AddHarmonicVibeProfilesRequest
Request to define and add new harmonic vibe life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| harmonicVibeProfiles | [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile](#AddHarmonicVibeProfilesRequest-HarmonicVibeProfile) | repeated | List of harmonic vibe life cycle event profiles for a specified project. |






<a name="-AddHarmonicVibeProfilesRequest-HarmonicVibeProfile"></a>

### AddHarmonicVibeProfilesRequest.HarmonicVibeProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the harmonic event. |
| profileName | [string](#string) |  | Name of the harmonic profile. |
| freqUnits | [string](#string) |  | Frequency units. |
| loadUnits | [string](#string) |  | Load units. |
| harmonicVibeProfileEntries | [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry](#AddHarmonicVibeProfilesRequest-HarmonicVibeProfile-Entry) | repeated | List of frequency and load values for a harmonic vibe life cycle phase. |
| triaxialAxis | [string](#string) |  | If the harmonic profile type is &#34;Triaxial&#34;, the axis this profile should be assigned to. Valid values are: x, y, z. |






<a name="-AddHarmonicVibeProfilesRequest-HarmonicVibeProfile-Entry"></a>

### AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| freq | [double](#double) |  | Frequency. |
| load | [double](#double) |  | Load. |






<a name="-AddHarmonicVibeProfilesResponse"></a>

### AddHarmonicVibeProfilesResponse
Response from adding harmonic vibe life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddRandomVibeEventRequest"></a>

### AddRandomVibeEventRequest
Request to define and add a new random vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the random vibe event. |
| description | [string](#string) |  | Description of the random vibe event. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this random vibe event. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: &#34;30,15&#34;. |
| profileType | [string](#string) |  | Random load profile type. Example valid value is &#34;Uniaxial&#34;. |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: &#34;0,0,1&#34;. |






<a name="-AddRandomVibeEventResponse"></a>

### AddRandomVibeEventResponse
Response from adding a random vibe life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddRandomVibeProfilesRequest"></a>

### AddRandomVibeProfilesRequest
Request to define and add new random vibe life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| randomVibeProfiles | [AddRandomVibeProfilesRequest.RandomVibeProfile](#AddRandomVibeProfilesRequest-RandomVibeProfile) | repeated | List of random vibe life cycle event profiles for a specified project. |






<a name="-AddRandomVibeProfilesRequest-RandomVibeProfile"></a>

### AddRandomVibeProfilesRequest.RandomVibeProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the random vibe event. |
| profileName | [string](#string) |  | Name of the random vibe profile. |
| freqUnits | [string](#string) |  | Frequency units. |
| amplUnits | [string](#string) |  | Amplitude units. |
| randomVibeProfileEntries | [AddRandomVibeProfilesRequest.RandomVibeProfile.Entry](#AddRandomVibeProfilesRequest-RandomVibeProfile-Entry) | repeated | List of frequency and amplitude values for a random vibe life cycle event. |






<a name="-AddRandomVibeProfilesRequest-RandomVibeProfile-Entry"></a>

### AddRandomVibeProfilesRequest.RandomVibeProfile.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| freq | [double](#double) |  | Frequency. |
| ampl | [double](#double) |  | Amplitude. |






<a name="-AddRandomVibeProfilesResponse"></a>

### AddRandomVibeProfilesResponse
Response from adding random vibe profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddShockEventRequest"></a>

### AddShockEventRequest
Request to define and add a new shock life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the shock event. |
| description | [string](#string) |  | Description of the shock event. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this shock event. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: 30,15 |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: 0,0,1 |






<a name="-AddShockEventResponse"></a>

### AddShockEventResponse
Response from adding a shock life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddShockProfilesRequest"></a>

### AddShockProfilesRequest
Request to define and add new shock life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| shockProfiles | [AddShockProfilesRequest.ShockProfile](#AddShockProfilesRequest-ShockProfile) | repeated | List of shock life cycle event profiles for a specified project. |






<a name="-AddShockProfilesRequest-ShockProfile"></a>

### AddShockProfilesRequest.ShockProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the shock event. |
| profileName | [string](#string) |  | Name of the shock profile. |
| duration | [double](#double) |  | Pulse duration. |
| durationUnits | [string](#string) |  | Pulse duration unit. |
| sampleRate | [double](#double) |  | Sample rate. |
| sampleRateUnits | [string](#string) |  | Sample rate unit. |
| loadUnits | [string](#string) |  | Load unit. |
| freqUnits | [string](#string) |  | Frequency unit. |
| shockProfileEntries | [AddShockProfilesRequest.ShockProfile.Entry](#AddShockProfilesRequest-ShockProfile-Entry) | repeated | Primary shape entry for the shock profile. |






<a name="-AddShockProfilesRequest-ShockProfile-Entry"></a>

### AddShockProfilesRequest.ShockProfile.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [string](#string) |  | Shape of the shock profile. |
| load | [double](#double) |  | Load. |
| freq | [double](#double) |  | Frequency rate. |
| decay | [double](#double) |  | Decay rate. |






<a name="-AddShockProfilesResponse"></a>

### AddShockProfilesResponse
Response from adding shock life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddThermalEventRequest"></a>

### AddThermalEventRequest
Request to define and add a new thermal life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the thermal event. |
| description | [string](#string) |  | Description of the thermal event. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this thermal event. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |
| cycleState | [string](#string) |  | The life cycle state. For example: &#34;OPERATING&#34;, &#34;STORAGE&#34;. |






<a name="-AddThermalEventResponse"></a>

### AddThermalEventResponse
Response from adding a thermal life cycle event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddThermalProfilesRequest"></a>

### AddThermalProfilesRequest
Request to define and add a new thermal life cycle event profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalProfiles | [AddThermalProfilesRequest.ThermalProfile](#AddThermalProfilesRequest-ThermalProfile) | repeated | List of thermal life cycle event profiles for a specified project. |






<a name="-AddThermalProfilesRequest-ThermalProfile"></a>

### AddThermalProfilesRequest.ThermalProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the thermal event. |
| profileName | [string](#string) |  | Name of the thermal profile. |
| timeUnits | [string](#string) |  | Time units. |
| tempUnits | [string](#string) |  | Temperature units. |
| thermalProfileEntries | [AddThermalProfilesRequest.ThermalProfile.Entry](#AddThermalProfilesRequest-ThermalProfile-Entry) | repeated | List of step entries for a life cycle event and/or phase. |






<a name="-AddThermalProfilesRequest-ThermalProfile-Entry"></a>

### AddThermalProfilesRequest.ThermalProfile.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step | [string](#string) |  | Name of the step. |
| type | [string](#string) |  | Profile step type. &#34;HOLD&#34; or &#34;RAMP&#34;. |
| time | [double](#double) |  | Time duration of the step. |
| temp | [double](#double) |  | Temperature of the step. |






<a name="-AddThermalProfilesResponse"></a>

### AddThermalProfilesResponse
Response from adding thermal profiles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-CreateLifePhaseRequest"></a>

### CreateLifePhaseRequest
Request for creating a life phase.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of new life phase. |
| description | [string](#string) |  | Description of new life phase. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for new life phase. |
| cycleType | [string](#string) |  | The cycle type. For example: &#34;COUNT&#34;, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |






<a name="-CreateLifePhaseResponse"></a>

### CreateLifePhaseResponse
Response from creating a life phase.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of error messages. |






<a name="-DeleteEventRequest"></a>

### DeleteEventRequest
Request to delete a life cycle event in a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase from which to delete this event. |
| eventName | [string](#string) |  | Name of the event to be deleted. |






<a name="-DeleteLifePhaseResponse"></a>

### DeleteLifePhaseResponse
Response for deleting a life phase


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |






<a name="-DeletePhaseRequest"></a>

### DeletePhaseRequest
Request for deleting a life phase


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | Sherlock life phase name. |






<a name="-Events"></a>

### Events
Represents an event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Event name. |






<a name="-ListAmplUnitsRequest"></a>

### ListAmplUnitsRequest
Request for a list of amplitude units.






<a name="-ListAmplUnitsResponse"></a>

### ListAmplUnitsResponse
Represents a list of amplitude units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| amplUnits | [string](#string) | repeated | List of amplitude units. |






<a name="-ListDurationUnitsRequest"></a>

### ListDurationUnitsRequest
Request for a list of duration units for event settings.






<a name="-ListDurationUnitsResponse"></a>

### ListDurationUnitsResponse
Represents a list of duration units for event settings in life cycle.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| durationUnits | [string](#string) | repeated | List of duration units. |






<a name="-ListFreqUnitsRequest"></a>

### ListFreqUnitsRequest
Request for a list of frequency units.






<a name="-ListFreqUnitsResponse"></a>

### ListFreqUnitsResponse
Represents a list of frequency units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| freqUnits | [string](#string) | repeated | List of frequency units. For example: &#34;HZ&#34;, &#34;KHZ&#34;, &#34;MHZ&#34;, &#34;GHZ&#34;. |






<a name="-ListHarmonicEventsRequest"></a>

### ListHarmonicEventsRequest
Request for a list of harmonic events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListHarmonicEventsResponse"></a>

### ListHarmonicEventsResponse
Represents a list of harmonic events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| event | [Events](#Events) | repeated | List of harmonic events. |






<a name="-ListHarmonicProfileTypesRequest"></a>

### ListHarmonicProfileTypesRequest
Request for a list of harmonic load profile types.






<a name="-ListHarmonicProfileTypesResponse"></a>

### ListHarmonicProfileTypesResponse
Represents a list of harmonic load profile types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| types | [string](#string) | repeated | List of harmonic load profile types. &#34;Uniaxial&#34;, &#34;Triaxial&#34;. |






<a name="-ListLCEventsRequest"></a>

### ListLCEventsRequest
Request for a list of life cycle phases and events for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListLCEventsResponse"></a>

### ListLCEventsResponse
Represents the life cycle phases and events for a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| lcPhases | [ListLCEventsResponse.LifeCyclePhase](#ListLCEventsResponse-LifeCyclePhase) | repeated | List of LifeCyclePhases for a specified project. |






<a name="-ListLCEventsResponse-LifeCyclePhase"></a>

### ListLCEventsResponse.LifeCyclePhase



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle phase name. |
| description | [string](#string) |  | Life cycle phase description. |
| lcEvents | [ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent](#ListLCEventsResponse-LifeCyclePhase-LifeCycleEvent) | repeated | List of LifeCycleEvents for a project phase. |






<a name="-ListLCEventsResponse-LifeCyclePhase-LifeCycleEvent"></a>

### ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle event name. |
| description | [string](#string) |  | Life cycle event description. |
| type | [string](#string) |  | Life cycle type. For example: &#34;Thermal Event&#34;, &#34;Shock Event&#34;, &#34;Random Vibe&#34;, &#34;Harmonic Vibe&#34;. |






<a name="-ListLCStatesRequest"></a>

### ListLCStatesRequest
Request for a list of life cycle states.






<a name="-ListLCStatesResponse"></a>

### ListLCStatesResponse
Represents a list of life cycle states.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| states | [string](#string) | repeated | List of life cycle states. For example: &#34;Operating&#34;, &#34;Storage&#34;. |






<a name="-ListLCTypesRequest"></a>

### ListLCTypesRequest
Request for a list of life cycle types.






<a name="-ListLCTypesResponse"></a>

### ListLCTypesResponse
Represents a list of life cycle types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| types | [string](#string) | repeated | List of life cycle types. For example, &#34;DUTY CYCLE&#34;, &#34;PER YEAR&#34;, &#34;PER HOUR&#34;, etc. |






<a name="-ListRandomVibeEventsRequest"></a>

### ListRandomVibeEventsRequest
Request for a list of random vibe events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListRandomVibeEventsResponse"></a>

### ListRandomVibeEventsResponse
Represents a list of random vibe events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| event | [Events](#Events) | repeated | List of random vibe events. |






<a name="-ListRandomVibeProfileTypesRequest"></a>

### ListRandomVibeProfileTypesRequest
Request for a list of random vibe profile types.






<a name="-ListRandomVibeProfileTypesResponse"></a>

### ListRandomVibeProfileTypesResponse
Represents a list of random vibe profile types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| types | [string](#string) | repeated | List of random vibe profile types. Currently there is only one: &#34;Uniaxial&#34;. |






<a name="-ListShockEventsRequest"></a>

### ListShockEventsRequest
Request for a list of shock events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListShockEventsResponse"></a>

### ListShockEventsResponse
Represents a list of shock events defined for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| event | [Events](#Events) | repeated | List of shock events. |






<a name="-ListShockLoadUnitsRequest"></a>

### ListShockLoadUnitsRequest
Request for a list of shock load units.






<a name="-ListShockLoadUnitsResponse"></a>

### ListShockLoadUnitsResponse
Represents a list of shock load units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| units | [string](#string) | repeated | List of shock load units. For example: &#34;G&#34;, &#34;m/s2&#34;, &#34;mm/s2&#34;. |






<a name="-ListShockPulsesRequest"></a>

### ListShockPulsesRequest
Request for a list of shock Pulses.






<a name="-ListShockPulsesResponse"></a>

### ListShockPulsesResponse
Represents a list of shock Pulses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| shockPulse | [string](#string) | repeated | List of shock pulses. For example: &#34;FullSine&#34;, &#34;HalfSine&#34;, &#34;Triangle&#34;, &#34;Sawtooth&#34;, &#34;FullSquare&#34;. |






<a name="-ListTempUnitsRequest"></a>

### ListTempUnitsRequest
Request for a list of temperature units.






<a name="-ListTempUnitsResponse"></a>

### ListTempUnitsResponse
Represents a list of temperature units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| tempUnits | [string](#string) | repeated | List of temperature units. For example: &#34;C&#34;, &#34;F&#34;, &#34;K&#34;. |






<a name="-LoadHarmonicProfileRequest"></a>

### LoadHarmonicProfileRequest
Request to load a harmonic life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Harmonic event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| harmonicCsvProps | [LoadHarmonicProfileRequest.CSVProps](#LoadHarmonicProfileRequest-CSVProps) |  | Properties for a .csv file load. |
| triaxialAxis | [string](#string) |  | If the harmonic profile type is &#34;Triaxial&#34;, the axis this profile should be assigned to. Valid values are: x, y, z. |






<a name="-LoadHarmonicProfileRequest-CSVProps"></a>

### LoadHarmonicProfileRequest.CSVProps
.csv file properties. This is only required for a .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the harmonic profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| freqColumn | [string](#string) |  | Frequency column name. |
| freqUnits | [string](#string) |  | Frequency units. |
| loadColumn | [string](#string) |  | Load column name. |
| loadUnits | [string](#string) |  | Load units. |






<a name="-LoadHarmonicProfileResponse"></a>

### LoadHarmonicProfileResponse
Response from loading a harmonic vibe life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-LoadRandomVibeProfileRequest"></a>

### LoadRandomVibeProfileRequest
Request to load a random vibe life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Random vibe event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| randomVibeCsvProps | [LoadRandomVibeProfileRequest.CSVProps](#LoadRandomVibeProfileRequest-CSVProps) |  | Properties for a .csv file load. |






<a name="-LoadRandomVibeProfileRequest-CSVProps"></a>

### LoadRandomVibeProfileRequest.CSVProps
.csv file properties. This is only required for a .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the random vibe profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| freqColumn | [string](#string) |  | Frequency column name. |
| freqUnits | [string](#string) |  | Frequency units. |
| amplColumn | [string](#string) |  | Amplitude column name. |
| amplUnits | [string](#string) |  | Amplitude units. |






<a name="-LoadRandomVibeProfileResponse"></a>

### LoadRandomVibeProfileResponse
Response from loading a random vibe life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-LoadShockProfileDatasetRequest"></a>

### LoadShockProfileDatasetRequest
Request to load a shock life cycle event profile using the dataset (time and load) from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Shock event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| shockDsCsvProps | [LoadShockProfileDatasetRequest.CSVProps](#LoadShockProfileDatasetRequest-CSVProps) |  | Properties for a .csv file load. |






<a name="-LoadShockProfileDatasetRequest-CSVProps"></a>

### LoadShockProfileDatasetRequest.CSVProps
.csv file properties. This is only required for a .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the shock profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| timeColumn | [string](#string) |  | Time column name. |
| timeUnits | [string](#string) |  | Time units. |
| loadColumn | [string](#string) |  | Load column name. |
| loadUnits | [string](#string) |  | Load units. |






<a name="-LoadShockProfileDatasetResponse"></a>

### LoadShockProfileDatasetResponse
Response from loading a shock profile using the dataset from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-LoadShockProfilePulsesRequest"></a>

### LoadShockProfilePulsesRequest
Request to load a shock life cycle event profile using pulses from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Shock event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| shockPulsesCsvProps | [LoadShockProfilePulsesRequest.CSVProps](#LoadShockProfilePulsesRequest-CSVProps) |  | Properties for a .csv file load. |






<a name="-LoadShockProfilePulsesRequest-CSVProps"></a>

### LoadShockProfilePulsesRequest.CSVProps
.csv file properties. This is only required for a .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the shock profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| duration | [double](#double) |  | Pulse duration length. |
| durationUnits | [string](#string) |  | Pulse duration time units. |
| sampleRate | [double](#double) |  | Sample rate. |
| sampleRateUnits | [string](#string) |  | Sample rate units. |
| shapeColumn | [string](#string) |  | Pulse shape column name. |
| loadColumn | [string](#string) |  | Load column name. |
| loadUnits | [string](#string) |  | Load units. |
| freqColumn | [string](#string) |  | Frequency column name. |
| freqUnits | [string](#string) |  | Frequency units. |
| decayColumn | [string](#string) |  | Decay column name. |






<a name="-LoadShockProfilePulsesResponse"></a>

### LoadShockProfilePulsesResponse
Response from loading a shock profile using pulses from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-LoadThermalProfileRequest"></a>

### LoadThermalProfileRequest
Request to load a thermal life cycle event profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Thermal event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| csvProps | [LoadThermalProfileRequest.CSVProps](#LoadThermalProfileRequest-CSVProps) |  | Properties for a .csv file load. |






<a name="-LoadThermalProfileRequest-CSVProps"></a>

### LoadThermalProfileRequest.CSVProps
.csv file properties. This is only required for .csv file load.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the thermal profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| stepColumn | [string](#string) |  | Step column name. |
| typeColumn | [string](#string) |  | Step type column name. |
| timeColumn | [string](#string) |  | Time duration column name. |
| timeUnits | [string](#string) |  | Time units column name. |
| tempColumn | [string](#string) |  | Temperature column name. |
| tempUnits | [string](#string) |  | Temperature units column name. |






<a name="-LoadThermalProfileResponse"></a>

### LoadThermalProfileResponse
Response from loading a thermal profile from a .dat or .csv file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |





 

 

 


<a name="-SherlockLifeCycleService"></a>

### SherlockLifeCycleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| addHarmonicEvent | [.AddHarmonicEventRequest](#AddHarmonicEventRequest) | [.AddHarmonicEventResponse](#AddHarmonicEventResponse) | Define and add a new harmonic vibe life cycle event. |
| addHarmonicVibeProfiles | [.AddHarmonicVibeProfilesRequest](#AddHarmonicVibeProfilesRequest) | [.AddHarmonicVibeProfilesResponse](#AddHarmonicVibeProfilesResponse) | Define and add new harmonic vibe life cycle event profiles. |
| addRandomVibeProfiles | [.AddRandomVibeProfilesRequest](#AddRandomVibeProfilesRequest) | [.AddRandomVibeProfilesResponse](#AddRandomVibeProfilesResponse) | Define and add new random vibe life cycle event profiles. |
| addRandomVibeEvent | [.AddRandomVibeEventRequest](#AddRandomVibeEventRequest) | [.AddRandomVibeEventResponse](#AddRandomVibeEventResponse) | Define and add a new random vibe life cycle event. |
| addShockEvent | [.AddShockEventRequest](#AddShockEventRequest) | [.AddShockEventResponse](#AddShockEventResponse) | Define and add a new shock life cycle event. |
| addShockProfiles | [.AddShockProfilesRequest](#AddShockProfilesRequest) | [.AddShockProfilesResponse](#AddShockProfilesResponse) | Define and add new shock life cycle event profiles. Keep in mind, the pulse duration and load values defined in the Shock Profile Editor are relative values used solely within the editor to define the profile shape. A combination of all the primary pulse shapes is then used to define the pulse profile. |
| addThermalEvent | [.AddThermalEventRequest](#AddThermalEventRequest) | [.AddThermalEventResponse](#AddThermalEventResponse) | Define and add a new thermal life cycle event. |
| addThermalProfiles | [.AddThermalProfilesRequest](#AddThermalProfilesRequest) | [.AddThermalProfilesResponse](#AddThermalProfilesResponse) | Define and add new thermal life cycle event profiles. |
| createLifePhase | [.CreateLifePhaseRequest](#CreateLifePhaseRequest) | [.CreateLifePhaseResponse](#CreateLifePhaseResponse) | Define and add a new life phase. |
| deleteEvent | [.DeleteEventRequest](#DeleteEventRequest) | [.ReturnCode](#ReturnCode) | Delete a life cycle event. |
| listAmplUnits | [.ListAmplUnitsRequest](#ListAmplUnitsRequest) | [.ListAmplUnitsResponse](#ListAmplUnitsResponse) | Returns a list of amplitude units when adding a random vibe profile. |
| listDurationUnits | [.ListDurationUnitsRequest](#ListDurationUnitsRequest) | [.ListDurationUnitsResponse](#ListDurationUnitsResponse) | Returns a list of duration units when adding a life cycle event. |
| listFreqUnits | [.ListFreqUnitsRequest](#ListFreqUnitsRequest) | [.ListFreqUnitsResponse](#ListFreqUnitsResponse) | Returns a list of frequency units. |
| listHarmonicEvents | [.ListHarmonicEventsRequest](#ListHarmonicEventsRequest) | [.ListHarmonicEventsResponse](#ListHarmonicEventsResponse) | Returns a list of harmonic events defined for a project. |
| listHarmonicProfileTypes | [.ListHarmonicProfileTypesRequest](#ListHarmonicProfileTypesRequest) | [.ListHarmonicProfileTypesResponse](#ListHarmonicProfileTypesResponse) | Returns a list of harmonic load Profile types. |
| listLifeCycleEvents | [.ListLCEventsRequest](#ListLCEventsRequest) | [.ListLCEventsResponse](#ListLCEventsResponse) | Returns a list of life cycle phases and their events given a Sherlock project directory. |
| listLifeCycleStates | [.ListLCStatesRequest](#ListLCStatesRequest) | [.ListLCStatesResponse](#ListLCStatesResponse) | Returns a list of life cycle states. |
| listLifeCycleTypes | [.ListLCTypesRequest](#ListLCTypesRequest) | [.ListLCTypesResponse](#ListLCTypesResponse) | Returns a list of life cycle types. |
| listRandomVibeProfileTypes | [.ListRandomVibeProfileTypesRequest](#ListRandomVibeProfileTypesRequest) | [.ListRandomVibeProfileTypesResponse](#ListRandomVibeProfileTypesResponse) | Returns a list of random vibe profile types. |
| listRandomVibeEvents | [.ListRandomVibeEventsRequest](#ListRandomVibeEventsRequest) | [.ListRandomVibeEventsResponse](#ListRandomVibeEventsResponse) | Returns a list of random vibe events defined for a project. |
| listShockEvents | [.ListShockEventsRequest](#ListShockEventsRequest) | [.ListShockEventsResponse](#ListShockEventsResponse) | Returns a list of shock events defined for a project. |
| listShockLoadUnits | [.ListShockLoadUnitsRequest](#ListShockLoadUnitsRequest) | [.ListShockLoadUnitsResponse](#ListShockLoadUnitsResponse) | Returns a list of shock load units. |
| listShockPulses | [.ListShockPulsesRequest](#ListShockPulsesRequest) | [.ListShockPulsesResponse](#ListShockPulsesResponse) | Returns a list of shock pulses. |
| listTempUnits | [.ListTempUnitsRequest](#ListTempUnitsRequest) | [.ListTempUnitsResponse](#ListTempUnitsResponse) | Returns a list of temperature units. |
| loadHarmonicProfile | [.LoadHarmonicProfileRequest](#LoadHarmonicProfileRequest) | [.LoadHarmonicProfileResponse](#LoadHarmonicProfileResponse) | Loads a harmonic profile from a .dat or .csv file. |
| loadRandomVibeProfile | [.LoadRandomVibeProfileRequest](#LoadRandomVibeProfileRequest) | [.LoadRandomVibeProfileResponse](#LoadRandomVibeProfileResponse) | Loads a random vibe profile from a .dat or .csv file. |
| loadShockProfileDataset | [.LoadShockProfileDatasetRequest](#LoadShockProfileDatasetRequest) | [.LoadShockProfileDatasetResponse](#LoadShockProfileDatasetResponse) | Loads a shock profile using dataset from a .dat or .csv file. |
| loadShockProfilePulses | [.LoadShockProfilePulsesRequest](#LoadShockProfilePulsesRequest) | [.LoadShockProfilePulsesResponse](#LoadShockProfilePulsesResponse) | Loads a shock profile using pulses from a .dat or .csv file. |
| loadThermalProfile | [.LoadThermalProfileRequest](#LoadThermalProfileRequest) | [.LoadThermalProfileResponse](#LoadThermalProfileResponse) | Loads a thermal profile from a .dat or .csv file. |
| deletePhase | [.DeletePhaseRequest](#DeletePhaseRequest) | [.ReturnCode](#ReturnCode) | Delete a life phase for a project. |

 



<a name="SherlockModelService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## SherlockModelService.proto
Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-DrillHoleModeling"></a>

### DrillHoleModeling
Drill hole properties used for exporting trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModelingEnabled | [bool](#bool) |  | Determines if drill holes will be included in the exported model. |
| minHoleDiameter | [Measurement](#Measurement) |  | All drill holes with a diameter less than this will not be included in the exported model. |
| maxEdgeLength | [Measurement](#Measurement) |  | Set this to 0 to include all drill holes.

Specifies the size of the segments used to represent round drill holes by a polygon. |






<a name="-ExportAEDBRequest"></a>

### ExportAEDBRequest
Request to export an Electronics Desktop model.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the Electronics Desktop export file. |
| overwrite | [bool](#bool) |  | Overwrite existing file if true. |
| displayModel | [bool](#bool) |  | Display model after export if true. |






<a name="-ExportFEAModelRequest"></a>

### ExportFEAModelRequest
Request to export an FEA model.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the export file. |
| analysis | [ExportFEAModelRequest.ExportAnalysis](#ExportFEAModelRequest-ExportAnalysis) |  | The ExportAnalysis enum representing the type of analysis that is being exported. |
| drillHoleParam | [ExportFEAModelRequest.DrillHoleParam](#ExportFEAModelRequest-DrillHoleParam) |  | Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled. |
| detectLeadModeling | [string](#string) |  | If enabled, automatically enable lead modeling if any part has lead geometry defined, valid values are ENABLED/enabled or DISABLED/disabled. |
| leadModelParam | [ExportFEAModelRequest.LeadModelParam](#ExportFEAModelRequest-LeadModelParam) |  | Lead modeling parameter. |
| displayModel | [bool](#bool) |  | Display model after export. |
| clearFEADatabase | [bool](#bool) |  | Clear FEA Database before defining model. |
| useFEAModelID | [bool](#bool) |  | Use FEA Model ID. |
| coordinateUnits | [string](#string) |  | Units of exported model coordinates, valid values are &#34;in&#34;, &#34;mm&#34;, &#34;m&#34;, &#34;mil&#34;, &#34;micron&#34;, &#34;nm&#34;. |






<a name="-ExportFEAModelRequest-DrillHoleParam"></a>

### ExportFEAModelRequest.DrillHoleParam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModeling | [string](#string) |  | Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| minHoleDiameter | [ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter](#ExportFEAModelRequest-DrillHoleParam-MinHoleDiameter) |  | Minimum hole diameter info for a drill hole. |
| maxEdgeLength | [ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength](#ExportFEAModelRequest-DrillHoleParam-MaxEdgeLength) |  | Maximum edge length info for a drill hole. |






<a name="-ExportFEAModelRequest-DrillHoleParam-MaxEdgeLength"></a>

### ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Maximum edge length value. |
| unit | [string](#string) |  | Maximum edge length unit. |






<a name="-ExportFEAModelRequest-DrillHoleParam-MinHoleDiameter"></a>

### ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Minimum hole diameter value. |
| unit | [string](#string) |  | Minimum hole diameter unit. |






<a name="-ExportFEAModelRequest-LeadModelParam"></a>

### ExportFEAModelRequest.LeadModelParam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| leadModeling | [string](#string) |  | Enables or disables lead modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| leadElemOrder | [string](#string) |  | Element order, valid values are &#34;First Order (Linear)&#34;, &#34;Second Order (Quadratic)&#34;, or &#34;Solid Shell&#34;. |
| maxMeshSize | [ExportFEAModelRequest.LeadModelParam.MaxMeshSize](#ExportFEAModelRequest-LeadModelParam-MaxMeshSize) |  | Max mesh size info for a lead model param. |
| verticalMeshSize | [ExportFEAModelRequest.LeadModelParam.VerticalMeshSize](#ExportFEAModelRequest-LeadModelParam-VerticalMeshSize) |  | Vertical mesh size info for a lead model param. |
| thicknessCount | [int32](#int32) |  | The number of elements through the lead thickness that will be created per lead. |
| aspectRatio | [int32](#int32) |  | The aspect ratio is multiplied by the lead thickness divided by the through thickness count to give the lead element height. |






<a name="-ExportFEAModelRequest-LeadModelParam-MaxMeshSize"></a>

### ExportFEAModelRequest.LeadModelParam.MaxMeshSize



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Max mesh size value. |
| unit | [string](#string) |  | Max mesh size unit. |






<a name="-ExportFEAModelRequest-LeadModelParam-VerticalMeshSize"></a>

### ExportFEAModelRequest.LeadModelParam.VerticalMeshSize



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Vertical mesh size value. |
| unit | [string](#string) |  | Vertical mesh size unit. |






<a name="-ExportTraceModelRequest"></a>

### ExportTraceModelRequest
Request to export one or many trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceModelExportParams | [TraceModelExportParams](#TraceModelExportParams) | repeated | Parameters for a single trace model export. |






<a name="-ExportTraceReinforcementModelRequest"></a>

### ExportTraceReinforcementModelRequest
Request to export a trace reinforcement model.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the trace reinforcement export file. |
| overwrite | [bool](#bool) |  | Overwrite existing file if true. |
| displayModel | [bool](#bool) |  | Display model after export if true. |
| clearFEADatabase | [bool](#bool) |  | Clear FEA Database before defining model if true. |
| generateModelsForAllLayers | [bool](#bool) |  | Generate models for all layers. |
| traceParam | [ExportTraceReinforcementModelRequest.TraceParam](#ExportTraceReinforcementModelRequest-TraceParam) |  | Trace properties (Diameter Threshold and Minimum Hole Diameter for Shell/Beam). |
| traceDrillHoleParam | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam](#ExportTraceReinforcementModelRequest-TraceDrillHoleParam) |  | **Deprecated.** Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled. |
| drillHoleModeling | [DrillHoleModeling](#DrillHoleModeling) |  | Properties used for exporting drill holes. |
| coordinateUnits | [string](#string) |  | Units of exported model coordinates, valid values are &#34;in&#34;, &#34;mm&#34;, &#34;m&#34;, &#34;mil&#34;, &#34;micron&#34;, &#34;nm&#34;. |






<a name="-ExportTraceReinforcementModelRequest-TraceDrillHoleParam"></a>

### ExportTraceReinforcementModelRequest.TraceDrillHoleParam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModeling | [string](#string) |  | Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| minHoleDiameter | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter](#ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MinHoleDiameter) |  | Minimum hole diameter info for a trace drill hole param. |
| maxEdgeLength | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength](#ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MaxEdgeLength) |  | Maximum edge length info for a trace drill hole param. |






<a name="-ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MaxEdgeLength"></a>

### ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Maximum edge length value. |
| unit | [string](#string) |  | Maximum edge length unit. |






<a name="-ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MinHoleDiameter"></a>

### ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Minimum hole diameter value. |
| unit | [string](#string) |  | Minimum hole diameter unit. |






<a name="-ExportTraceReinforcementModelRequest-TraceParam"></a>

### ExportTraceReinforcementModelRequest.TraceParam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diameterThreshold | [ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold](#ExportTraceReinforcementModelRequest-TraceParam-DiameterThreshold) |  | Diameter threshold info for a trace parameter. |
| minHoleDiameterForShellOrBeam | [ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam](#ExportTraceReinforcementModelRequest-TraceParam-MinHoleDiameterForShellOrBeam) |  | Minimum hole diameter info for Shell or Beam for a trace parameter. |






<a name="-ExportTraceReinforcementModelRequest-TraceParam-DiameterThreshold"></a>

### ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Diameter threshold value. |
| unit | [string](#string) |  | Diameter threshold unit. |






<a name="-ExportTraceReinforcementModelRequest-TraceParam-MinHoleDiameterForShellOrBeam"></a>

### ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Min. hole diameter value for Shell/Beam. |
| unit | [string](#string) |  | Min. hole diameter unit for Shell/Beam. |






<a name="-GenerateTraceModelRequest"></a>

### GenerateTraceModelRequest
Request to generate a trace model.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. If left empty, trace models will be generated for all CCAs and all of their copper layers. |
| copperLayerName | [string](#string) |  | Copper layer from which to generate the trace model. If left empty, trace models will be generated for all copper layers. |
| maxArcSegment | [double](#double) |  | Max arc segment. |
| maxArcSegmentUnits | [string](#string) |  | Max arc segment units. |
| minTraceArea | [double](#double) |  | Min trace area. |
| minTraceAreaUnits | [string](#string) |  | Min trace area units. |
| minHoleArea | [double](#double) |  | Min hole area. |
| minHoleAreaUnits | [string](#string) |  | Min hole area units. |
| useSnapshotForNonImageLayer | [bool](#bool) |  | Use an image to generate the trace model for layers that are not image layers. If a snapshot image exists for the layer, that snapshot is used. Otherwise this creates an image that is identical to creating a snapshot. |






<a name="-TraceModelExportParams"></a>

### TraceModelExportParams
All parameters required to export a trace model.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | Sherlock CCA name. |
| filePath | [string](#string) |  | Full file path to the trace export file. |
| copperLayerName | [string](#string) |  | Name of the layer in the CCA to export. |
| overwriteExistingFile | [bool](#bool) |  | Option that determines if any existing files get overwritten. |
| displayModelAfterExport | [bool](#bool) |  | Option to display the model after the export is done. |
| clearFEADatabase | [bool](#bool) | optional | Clears FEA Database. Applicable for .apdl, and .cdb. This will be set to false if it is omitted for applicable file types. |
| useFEAModelID | [bool](#bool) |  | Use FEA Model ID. |
| coordUnits | [string](#string) | optional | Units of the coordinate system. Applicable to .py .wbjn, and .stp/.step. This will be set to mm if omitted for applicable file types. |
| pcbMeshPropParam | [TraceModelExportParams.PcbMeshPropParam](#TraceModelExportParams-PcbMeshPropParam) |  | Properties used for exporting PCB mesh. |
| tracePropParam | [TraceModelExportParams.TracePropParam](#TraceModelExportParams-TracePropParam) |  | Properties used for exporting the traces. |
| drillHoleModeling | [DrillHoleModeling](#DrillHoleModeling) |  | Properties used for exporting drill holes. |






<a name="-TraceModelExportParams-PcbMeshPropParam"></a>

### TraceModelExportParams.PcbMeshPropParam
Mesh properties used for exporting trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| meshType | [MeshType](#MeshType) |  | Options of different trace meshing strategies. The options available depend on export file type. |
| isModelingRegionEnabled | [bool](#bool) |  | Determines if pre-defined modeling regions will be applied to the exported trace model. |






<a name="-TraceModelExportParams-TracePropParam"></a>

### TraceModelExportParams.TracePropParam
Trace properties used for exporting trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceOutputs | [TraceOutputType](#TraceOutputType) |  | Options to select which trace regions to include in the 3D model. |
| elementOrder | [ElementOrder](#ElementOrder) |  | Type of FEA element to be used when modeling each component (First/linear, Second/quadratic, Solid Shell). |
| maxMeshSize | [Measurement](#Measurement) |  | Value passed to FEA meshing tool to indicate the desired element sizes. |
| maxHolesPerTrace | [int32](#int32) |  | Maximum number of holes allowed in a trace before partitioning it into multiple traces. |





 


<a name="-ExportFEAModelRequest-ExportAnalysis"></a>

### ExportFEAModelRequest.ExportAnalysis


| Name | Number | Description |
| ---- | ------ | ----------- |
| NaturalFreq | 0 | Natural Frequency Analysis. |
| HarmonicVibe | 1 | Harmonic Vibe Analysis. |
| ICTAnalysis | 2 | ICT Analysis. |
| MechanicalShock | 3 | Mechanical Shock Analysis. |
| RandomVibe | 4 | Random Vibe Analysis. |



<a name="-MeshType"></a>

### MeshType
Different ways meshes are created. The options
 available depend on the export file type.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 | Defines only geometric volumes without generating mesh elements. |
| BONDED | 1 | Defines meshed elements generated by Sherlock. |
| SWEEP | 2 | Defines geometric volumes along with commands to mesh the volumes depending on the file type. |



<a name="-TraceOutputType"></a>

### TraceOutputType
Indicates which trace regions to include in the 3D model.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ALL_REGIONS | 0 | Both Conductor and Dielectric. |
| CONDUCTOR_REGIONS | 1 | The traces themselves. |
| DIELECTRIC_REGIONS | 2 | Regions that surround the conductor regions (Ex. areas filled with resin). |


 

 


<a name="-SherlockModelService"></a>

### SherlockModelService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| exportFEAModel | [.ExportFEAModelRequest](#ExportFEAModelRequest) | [.ReturnCode](#ReturnCode) | Export an FEA Model. |
| exportTraceReinforcementModel | [.ExportTraceReinforcementModelRequest](#ExportTraceReinforcementModelRequest) | [.ReturnCode](#ReturnCode) | Export a trace reinforcement model. |
| generateTraceModel | [.GenerateTraceModelRequest](#GenerateTraceModelRequest) | [.ReturnCode](#ReturnCode) | Generate a trace model. |
| exportTraceModel | [.ExportTraceModelRequest](#ExportTraceModelRequest) | [.ReturnCode](#ReturnCode) | Export a trace model. |
| exportAEDB | [.ExportAEDBRequest](#ExportAEDBRequest) | [.ReturnCode](#ReturnCode) | Export an Electronics Desktop model. |

 



<a name="SherlockPartsService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## SherlockPartsService.proto
Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-ExportNetListRequest"></a>

### ExportNetListRequest
Contains the options needed to export a net list to a delimited output file (csv but can have delimiters other than a comma)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| outputFilePath | [string](#string) |  | Full path of the file where the table will be written. |
| overwriteExisting | [bool](#bool) |  | Flag to determine if existing files should be overwritten if they match the outputFilePath. False by default. |
| colDelimiter | [TableDelimiter](#TableDelimiter) |  | Enum that specifies supported delimiter character to be used. Set to COMMA by default. Not applicable to Excel files like xls, xlsx. |
| utf8Enabled | [bool](#bool) |  | Flag that specifies if UTF-8 will be used. False by default. Not applicable to Excel files like xls, xlsx. |






<a name="-ExportPartsListRequest"></a>

### ExportPartsListRequest
Request to export the parts list for all parts for a project CCA.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the export parts list .csv file. |






<a name="-GetBoardSidesRequest"></a>

### GetBoardSidesRequest
Request to list valid board sides.






<a name="-GetBoardSidesResponse"></a>

### GetBoardSidesResponse
Represents a list of valid board sides.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| boardSides | [string](#string) | repeated | Board sides. |






<a name="-GetPartLocationRequest"></a>

### GetPartLocationRequest
Request to get a part&#39;s location.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| refDes | [string](#string) |  | A comma separated list of reference designators for a list of parts, or a Ref Des for one part. |
| locationUnits | [string](#string) |  | Unit of length for the part location. Supported values are IN, MM, M, MIL, MICRON, and NM. |






<a name="-GetPartLocationResponse"></a>

### GetPartLocationResponse
Represents one or multiple parts&#39; location properties


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| locationData | [GetPartLocationResponse.LocationData](#GetPartLocationResponse-LocationData) | repeated | List of location data for a part or list of parts in a specified project and CCA. |






<a name="-GetPartLocationResponse-LocationData"></a>

### GetPartLocationResponse.LocationData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | Location of the part along the X axis. |
| y | [double](#double) |  | Location of the part along the Y axis. |
| rotation | [double](#double) |  | Rotation of the part on the board in degrees. |
| locationUnits | [string](#string) |  | Unit of length for the part location. |
| boardSide | [string](#string) |  | Side of board on which the component exists. |
| mirrored | [bool](#bool) |  | Indicates if the component is mirrored across the Y-axis. |
| refDes | [string](#string) |  | Ref Des for the corresponding part. |






<a name="-GetPartLocationUnitsRequest"></a>

### GetPartLocationUnitsRequest
Request to list valid location units.






<a name="-GetPartLocationUnitsResponse"></a>

### GetPartLocationUnitsResponse
Represents a list of valid location units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| units | [string](#string) | repeated | Location units. |






<a name="-ImportPartsListRequest"></a>

### ImportPartsListRequest
Request to import a parts list for a project CCA.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| importFile | [string](#string) |  | Full file path to the parts list .csv file. |
| importAsUserSrc | [bool](#bool) |  | If true, set the data source of the properties to &#34;User&#34;. Otherwise, set the data source to the name of the importFile. |






<a name="-ListPartsLibrariesRequest"></a>

### ListPartsLibrariesRequest
Request to list the available parts libraries.






<a name="-ListPartsLibrariesResponse"></a>

### ListPartsLibrariesResponse
Represents a list of available parts libraries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| partLibrary | [string](#string) | repeated | Parts library name. |






<a name="-ListPartsNotUpdatedRequest"></a>

### ListPartsNotUpdatedRequest
Request to get a list of parts not updated from the Sherlock Part Library.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListPartsNotUpdatedResponse"></a>

### ListPartsNotUpdatedResponse
Represents a list of parts not updated from the Sherlock Part Library.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccas | [ListPartsNotUpdatedResponse.CCA](#ListPartsNotUpdatedResponse-CCA) | repeated | List of CCAs containing Parts not updated. |






<a name="-ListPartsNotUpdatedResponse-CCA"></a>

### ListPartsNotUpdatedResponse.CCA



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| parts | [ListPartsNotUpdatedResponse.CCA.Part](#ListPartsNotUpdatedResponse-CCA-Part) | repeated | List of Parts not updated for a CCA. |






<a name="-ListPartsNotUpdatedResponse-CCA-Part"></a>

### ListPartsNotUpdatedResponse.CCA.Part



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) |  | Reference designator for the part. |
| partNumber | [string](#string) |  | Part number. |






<a name="-UpdateLeadModelingRequest"></a>

### UpdateLeadModelingRequest
Request to enable Lead Modeling for all non LEADLESS parts leads.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-UpdatePartsListFromAVLRequest"></a>

### UpdatePartsListFromAVLRequest
Request to update the parts list from AVL.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| matching | [MatchingMode](#MatchingMode) |  | How sherlock matches parts in the AVL |
| duplication | [DuplicationMode](#DuplicationMode) |  | How sherlock handles duplicate parts found. |
| avlPartNum | [AVLPartNum](#AVLPartNum) |  | Update part number and vendor/manufacturer or part number only. |
| avlDesc | [AVLDescription](#AVLDescription) |  | Update description or not. |






<a name="-UpdatePartsListFromAVLResponse"></a>

### UpdatePartsListFromAVLResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| numPartsUpdated | [int32](#int32) |  | Number of parts updated in the parts list. |
| updateErrors | [string](#string) | repeated | Specific errors that occured during update. |






<a name="-UpdatePartsListPropertiesRequest"></a>

### UpdatePartsListPropertiesRequest
Request to update one or more properties of one or more parts in a parts list.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name for which part properties will be updated. |
| partProperties | [UpdatePartsListPropertiesRequest.PartProperties](#UpdatePartsListPropertiesRequest-PartProperties) | repeated | List of parts with properties to be updated. |






<a name="-UpdatePartsListPropertiesRequest-PartProperties"></a>

### UpdatePartsListPropertiesRequest.PartProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) | repeated | The reference designator for each part to be updated. If not included, update properties for all parts in the CCA. |
| properties | [UpdatePartsListPropertiesRequest.PartProperties.Property](#UpdatePartsListPropertiesRequest-PartProperties-Property) | repeated | Part properties to be updated. |






<a name="-UpdatePartsListPropertiesRequest-PartProperties-Property"></a>

### UpdatePartsListPropertiesRequest.PartProperties.Property



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Name of property to be updated. |
| value | [string](#string) |  | Value to be applied to the chosen part property. |






<a name="-UpdatePartsListPropertiesResponse"></a>

### UpdatePartsListPropertiesResponse
Contains the status of the parts properties update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateErrors | [UpdatePartsListPropertiesResponse.PartPropertyError](#UpdatePartsListPropertiesResponse-PartPropertyError) | repeated | Part property update errors. |






<a name="-UpdatePartsListPropertiesResponse-PartPropertyError"></a>

### UpdatePartsListPropertiesResponse.PartPropertyError



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) | optional | The reference designator of the part. Not set for invalid property name errors. |
| message | [string](#string) |  | Error message when updating the part. |






<a name="-UpdatePartsListRequest"></a>

### UpdatePartsListRequest
Request to update a parts list based on matching and duplication preferences provided.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partLibrary | [string](#string) |  | Parts library name. |
| matching | [MatchingMode](#MatchingMode) |  | Designates the matching mode for updates. |
| duplication | [DuplicationMode](#DuplicationMode) |  | Designates how to handle duplications during update. |






<a name="-UpdatePartsListResponse"></a>

### UpdatePartsListResponse
Contains the status of the update as well as all of the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts update error messages. |






<a name="-UpdatePartsLocationsByFileRequest"></a>

### UpdatePartsLocationsByFileRequest
Request to update one or more parts&#39; locations using a CSV file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| numericFormat | [string](#string) |  | Numeric format for the file. If not provided, it will default to &#34;English (United States)&#34;. |
| filePath | [string](#string) |  | File that contains the components and location properties. |






<a name="-UpdatePartsLocationsByFileResponse"></a>

### UpdatePartsLocationsByFileResponse
Contains the status of the parts locations update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts locations update error messages. |






<a name="-UpdatePartsLocationsRequest"></a>

### UpdatePartsLocationsRequest
Request to set a part&#39;s location.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partLoc | [UpdatePartsLocationsRequest.PartLocation](#UpdatePartsLocationsRequest-PartLocation) | repeated | List of part locations to be updated for a specified project and CCA. |






<a name="-UpdatePartsLocationsRequest-PartLocation"></a>

### UpdatePartsLocationsRequest.PartLocation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) |  | Reference designator of the part. |
| x | [string](#string) |  | Location of the part along the X axis. |
| y | [string](#string) |  | Location of the part along the Y axis. |
| rotation | [string](#string) |  | Rotation of the part on the board in degrees. |
| locationUnits | [string](#string) |  | Unit of length for the part location. Supported values are IN, MM, M, MIL, MICRON, and NM. |
| boardSide | [string](#string) |  | Side of board on which the component exists. Supported values are TOP and BOTTOM. |
| mirrored | [string](#string) |  | Indicates if the component is mirrored across the Y-axis. Supported values are Y, and N. |






<a name="-UpdatePartsLocationsResponse"></a>

### UpdatePartsLocationsResponse
Contains the status of the parts locations update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts locations update error messages. |





 


<a name="-AVLDescription"></a>

### AVLDescription
Determines if the part description in the parts list 
will be updated by the AVL.

| Name | Number | Description |
| ---- | ------ | ----------- |
| AssignApprovedDescription | 0 | Assign approved description. |
| DoNotChangeDescription | 1 | Do not change description. |



<a name="-AVLPartNum"></a>

### AVLPartNum
Determines what fields in the part list will get updated by the AVL.

| Name | Number | Description |
| ---- | ------ | ----------- |
| AssignInternalPartNum | 0 | Assign internal part number. |
| AssignVendorAndPartNum | 1 | Assign vendor &amp; part number. |
| DoNotChangeVendorOrPartNum | 2 | Do not change vendor / part number. |



<a name="-DuplicationMode"></a>

### DuplicationMode
Determines what happens when there are duplicate matches for parts in the part list
against parts in the AVL or Part Library.

| Name | Number | Description |
| ---- | ------ | ----------- |
| First | 0 | Uses first matched when there is duplication. |
| Error | 1 | Generates an error when there is duplication. |
| Ignore | 2 | Ignore the matches when there is duplication. |


 

 


<a name="-SherlockPartsService"></a>

### SherlockPartsService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| listPartsLibraries | [.ListPartsLibrariesRequest](#ListPartsLibrariesRequest) | [.ListPartsLibrariesResponse](#ListPartsLibrariesResponse) | List the available parts libraries. |
| updatePartsList | [.UpdatePartsListRequest](#UpdatePartsListRequest) | [.UpdatePartsListResponse](#UpdatePartsListResponse) | Update the parts list for a project&#39;s CCA. |
| updatePartsListFromAVL | [.UpdatePartsListFromAVLRequest](#UpdatePartsListFromAVLRequest) | [.UpdatePartsListFromAVLResponse](#UpdatePartsListFromAVLResponse) | Update the parts list from the AVL. |
| updatePartsListProperties | [.UpdatePartsListPropertiesRequest](#UpdatePartsListPropertiesRequest) | [.UpdatePartsListPropertiesResponse](#UpdatePartsListPropertiesResponse) | Update the values of given parts. |
| listPartsNotUpdated | [.ListPartsNotUpdatedRequest](#ListPartsNotUpdatedRequest) | [.ListPartsNotUpdatedResponse](#ListPartsNotUpdatedResponse) | List the parts that have not been updated from the Sherlock Part Library. |
| updateLeadModeling | [.UpdateLeadModelingRequest](#UpdateLeadModelingRequest) | [.ReturnCode](#ReturnCode) | Enable lead modeling for all non LEADLESS parts leads in a project&#39;s CCA. |
| exportPartsList | [.ExportPartsListRequest](#ExportPartsListRequest) | [.ReturnCode](#ReturnCode) | Export parts list for all parts given a project&#39;s CCA. |
| importPartsList | [.ImportPartsListRequest](#ImportPartsListRequest) | [.ReturnCode](#ReturnCode) | Import a parts list for a given a project&#39;s CCA. |
| updatePartsLocations | [.UpdatePartsLocationsRequest](#UpdatePartsLocationsRequest) | [.UpdatePartsLocationsResponse](#UpdatePartsLocationsResponse) | Update one or more parts&#39; locations. |
| updatePartsLocationsByFile | [.UpdatePartsLocationsByFileRequest](#UpdatePartsLocationsByFileRequest) | [.UpdatePartsLocationsByFileResponse](#UpdatePartsLocationsByFileResponse) | Update one or more parts&#39; locations using a CSV file. |
| getPartLocationUnits | [.GetPartLocationUnitsRequest](#GetPartLocationUnitsRequest) | [.GetPartLocationUnitsResponse](#GetPartLocationUnitsResponse) | Get a list of valid part location units. |
| getBoardSides | [.GetBoardSidesRequest](#GetBoardSidesRequest) | [.GetBoardSidesResponse](#GetBoardSidesResponse) | Get a list of valid board side values. |
| getPartLocation | [.GetPartLocationRequest](#GetPartLocationRequest) | [.GetPartLocationResponse](#GetPartLocationResponse) | Get the location properties for a part. |
| exportNetList | [.ExportNetListRequest](#ExportNetListRequest) | [.ReturnCode](#ReturnCode) | Export the net list to a file |

 



<a name="SherlockProjectService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## SherlockProjectService.proto
Copyright 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-AddCcaRequest"></a>

### AddCcaRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Name of the project. |
| CCAs | [CCA](#CCA) | repeated | CCAs to add. |






<a name="-AddProjectRequest"></a>

### AddProjectRequest
Request to add a project to Sherlock.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| category | [string](#string) |  | Project category. |
| description | [string](#string) |  | Project description. |






<a name="-AddStrainMapRequest"></a>

### AddStrainMapRequest
Request to add strain map files to CCAs in a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| strainMapFiles | [AddStrainMapRequest.StrainMapFile](#AddStrainMapRequest-StrainMapFile) | repeated | Strain map files and associated properties to be added. |






<a name="-AddStrainMapRequest-StrainMapFile"></a>

### AddStrainMapRequest.StrainMapFile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| strainMapFile | [string](#string) |  | Full path to the strain map file to be added. |
| fileComment | [string](#string) |  | File comment text. |
| headerRowCount | [int32](#int32) |  | Number of rows before the column header in the file. |
| referenceIDColumn | [string](#string) |  | Reference ID column name. |
| strainColumn | [string](#string) |  | Strain column name. |
| strainUnits | [string](#string) |  | Strain units used in the strain map file. Valid units: µε, ε. |
| cca | [string](#string) | repeated | Project CCA names to to add the file to. |
| numericFormat | [string](#string) |  | Numeric format for values. |
| fileType | [AddStrainMapRequest.StrainMapFile.FileType](#AddStrainMapRequest-StrainMapFile-FileType) |  | Type of the strain map file. |
| imageFile | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile](#AddStrainMapRequest-StrainMapFile-StrainMapImageFile) |  | Image strain map file properties. |






<a name="-AddStrainMapRequest-StrainMapFile-StrainMapImageFile"></a>

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| coordinateUnits | [string](#string) |  | Coordinate units used for board, lengend and image boundaries. |
| boardBounds | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.NodeCoordinate](#AddStrainMapRequest-StrainMapFile-StrainMapImageFile-NodeCoordinate) | repeated | Coordinates of the nodes which make up the board outline. |
| imageBounds | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.ImageCoordinate](#AddStrainMapRequest-StrainMapFile-StrainMapImageFile-ImageCoordinate) |  | Coordinates of the board bounds within the image. |
| legendBounds | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendCoordinate](#AddStrainMapRequest-StrainMapFile-StrainMapImageFile-LegendCoordinate) |  | Coordinates of the bounds of legend within the image. |
| legendOrientation | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendOrientation](#AddStrainMapRequest-StrainMapFile-StrainMapImageFile-LegendOrientation) |  | Specify the legend orientation. |
| minStrain | [double](#double) |  | Minimum strain value. |
| maxStrain | [double](#double) |  | Maximum strain value. |
| strainUnits | [string](#string) |  | Units for minimum and maximum strain values. |






<a name="-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-ImageCoordinate"></a>

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile.ImageCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| imageX | [double](#double) |  | X-coordinate of the upper left corner. |
| imageY | [double](#double) |  | Y-coordinate of the upper left corner. |
| imageH | [double](#double) |  | Height of the image. |
| imageW | [double](#double) |  | Width of the image. |






<a name="-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-LegendCoordinate"></a>

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| legendX | [double](#double) |  | X-coordinate of the upper left corner. |
| legendY | [double](#double) |  | Y-coordinate of the upper left corner. |
| legendH | [double](#double) |  | Height of the legend. |
| legendW | [double](#double) |  | Width of the legend. |






<a name="-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-NodeCoordinate"></a>

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile.NodeCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertexX | [double](#double) |  | X-coordinate of the node. |
| vertexY | [double](#double) |  | Y-coordinate of the node. |






<a name="-AddStrainMapResponse"></a>

### AddStrainMapResponse
Response from adding strain map files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddThermalMapRequest"></a>

### AddThermalMapRequest
Request to add thermal map files to a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalMapFiles | [AddThermalMapRequest.AddThermalMap](#AddThermalMapRequest-AddThermalMap) | repeated | Thermal map files and associated properties to be added. |






<a name="-AddThermalMapRequest-AddThermalMap"></a>

### AddThermalMapRequest.AddThermalMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| thermalMapFile | [string](#string) |  | Full path to the thermal map file to be added. |
| thermalMapFileProperties | [ThermalMapFile](#ThermalMapFile) |  | Thermal map file properties. |






<a name="-AddThermalMapResponse"></a>

### AddThermalMapResponse
Response from adding thermal map files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-CCA"></a>

### CCA



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the circuit card. |
| description | [string](#string) | optional | Description of the circuit card. |
| defaultSolderType | [string](#string) | optional | Default solder type. |
| defaultStencilThickness | [double](#double) | optional | Default stencil thickness. |
| defaultStencilThicknessUnits | [string](#string) | optional | Default stencil thickness units. |
| defaultPartTempRise | [double](#double) | optional | Default part temp rise. |
| defaultPartTempRiseUnits | [string](#string) | optional | Default part temp rise units. |
| guessPartPropertiesEnabled | [bool](#bool) | optional | Whether to enable guess part properties. |






<a name="-CreateCcaFromModelingRegionRequest"></a>

### CreateCcaFromModelingRegionRequest
Request for creating CCA from a specified modeling region.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cCAsFromModelingRegions | [CreateCcaFromModelingRegionRequest.CCAFromModelingRegion](#CreateCcaFromModelingRegionRequest-CCAFromModelingRegion) | repeated | CCAs from modeling regions to add. |






<a name="-CreateCcaFromModelingRegionRequest-CCAFromModelingRegion"></a>

### CreateCcaFromModelingRegionRequest.CCAFromModelingRegion
Request for each individual property of cca


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Project CCA name. |
| modelingRegionID | [string](#string) |  | ID of CCA&#39;s modeling region used to create new CCA. |
| description | [string](#string) |  | CCA&#39;s description. |
| defaultSolderType | [string](#string) | optional | Default solder type. |
| defaultStencilThickness | [double](#double) | optional | Default stencil thickness. |
| defaultStencilThicknessUnits | [string](#string) | optional | Default stencil thickness units. |
| defaultPartTempRise | [double](#double) | optional | Default part temp rise. |
| defaultPartTempRiseUnits | [string](#string) | optional | Default part temp rise units. |
| guessPartProperties | [bool](#bool) | optional | Whether to enable guess part properties. |
| generateImageLayers | [bool](#bool) | optional | Whether to generate image layers |






<a name="-DeleteProjectRequest"></a>

### DeleteProjectRequest
Request for deleting project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name of project to be deleted. |






<a name="-ExportProjectRequest"></a>

### ExportProjectRequest
Request for exporting the designated Sherlock project as a .zip file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| exportDesignFiles | [bool](#bool) |  | If true, export all design files assigned to the project. |
| exportResultFiles | [bool](#bool) |  | If true, export all analysis module results. |
| exportArchivedResults | [bool](#bool) |  | If true, export all archived result files. |
| exportUserFiles | [bool](#bool) |  | If true, export all user properties and custom data files. |
| exportLogFiles | [bool](#bool) |  | If true, export all Sherlock console and application logs. |
| exportSystemData | [bool](#bool) |  | If true, export all system technical data. |
| exportFileDirectory | [string](#string) |  | Full path of the directory where the .zip file is to be exported. |
| exportFileName | [string](#string) |  | Name of the zip file containing the project&#39;s exported data. |
| overwriteExistingFile | [bool](#bool) |  | If true, an existing file will be overwritten. |






<a name="-GenCCAReportRequest"></a>

### GenCCAReportRequest
Request for project CCA report.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) |  | Project CCA name. |
| author | [string](#string) |  | Name of the author who generates the report. |
| company | [string](#string) |  | Name of author&#39;s company. |






<a name="-GenCCAReportResponse"></a>

### GenCCAReportResponse
Streams the project CCA report in chunks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | A chunk of the project CCA report being returned in increments. |
| size | [int32](#int32) |  | Size of the chunk returned. |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |






<a name="-GenReportRequest"></a>

### GenReportRequest
Request for project report.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| author | [string](#string) |  | Name of the author who generates the report. |
| company | [string](#string) |  | Name of author&#39;s company. |






<a name="-GenReportResponse"></a>

### GenReportResponse
Streams the project report in chunks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | A chunk of the project report being returned in increments. |
| size | [int32](#int32) |  | Size of the chunk returned. |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |






<a name="-ImportIPC2581Request"></a>

### ImportIPC2581Request
Request for importing an IPC-2581 archive.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| archiveFile | [string](#string) |  | Full path to the IPC-2581 archive file to be imported. |
| project | [string](#string) |  | Sherlock project name. If empty, the filename will be used for the project name. |
| ccaName | [string](#string) |  | Project CCA name. If empty, the filename will be used for the CCA name. |
| includeOtherLayers | [bool](#bool) |  | Option to include other layers. |
| guessPartProperties | [bool](#bool) |  | Option to guess part properties. |
| polylineSimplification | [bool](#bool) |  | Option to enable polyline simplification. |
| polylineTolerance | [double](#double) |  | Polyline simplification tolerance. |
| polylineToleranceUnits | [string](#string) |  | Polyline simplification tolerance units. |






<a name="-ImportODBRequest"></a>

### ImportODBRequest
Request for importing an ODB&#43;&#43; archive.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| archiveFile | [string](#string) |  | Full path to the ODB&#43;&#43; archive file to be imported. |
| project | [string](#string) |  | Sherlock project name. If empty, the filename will be used for the project name. |
| ccaName | [string](#string) |  | Project CCA name. If empty, the filename will be used for the CCA name. |
| processLayerThickness | [bool](#bool) |  | Option to assign stackup thickness. |
| includeOtherLayers | [bool](#bool) |  | Option to include other layers. |
| processCutoutFile | [bool](#bool) |  | Option to process cutouts. |
| guessPartProperties | [bool](#bool) |  | Option to guess part properties. |
| imsStackup | [bool](#bool) |  | Option to generate IMS stackup. |
| polylineSimplification | [bool](#bool) |  | Option to enable polyline simplification. |
| polylineTolerance | [double](#double) |  | Polyline simplification tolerance. |
| polylineToleranceUnits | [string](#string) |  | Polyline simplification tolerance units. |






<a name="-ImportProjectZipRequest"></a>

### ImportProjectZipRequest
Request for importing a .zip project archive when Sherlock is in multiple project mode.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| category | [string](#string) |  | Sherlock project category. |
| archiveFile | [string](#string) |  | Full path to the .zip archive file containing the project data. |






<a name="-ImportProjectZipSingleModeRequest"></a>

### ImportProjectZipSingleModeRequest
Request for importing a .zip project archive when Sherlock is in single project mode.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| projZipRequest | [ImportProjectZipRequest](#ImportProjectZipRequest) |  | Encapsulates project name, category and full path to project .zip archive. |
| destFileDir | [string](#string) |  | Directory in which the Sherlock project folder will be created. |






<a name="-ListCCAsRequest"></a>

### ListCCAsRequest
Request to list CCA&#39;s and sub-assembly CCA&#39;s for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to return. |






<a name="-ListCCAsResponse"></a>

### ListCCAsResponse
Represents the circuit cards, their properties, and sub-assemblies for a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccas | [ListCCAsResponse.CCA](#ListCCAsResponse-CCA) | repeated | CCA&#39;s assigned to the project. |






<a name="-ListCCAsResponse-CCA"></a>

### ListCCAsResponse.CCA



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| subAssemblies | [ListCCAsResponse.CCA](#ListCCAsResponse-CCA) | repeated | Sub-assemblies assigned to the CCA. |






<a name="-ListStrainMapsRequest"></a>

### ListStrainMapsRequest
Request to list CCA strain maps for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to list strain maps for. |






<a name="-ListStrainMapsResponse"></a>

### ListStrainMapsResponse
Lists the strain maps assigned to the project CCA&#39;s.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of errors encountered. |
| ccaStrainMaps | [ListStrainMapsResponse.CcaStrainMap](#ListStrainMapsResponse-CcaStrainMap) | repeated | CCA strain maps assigned to the project. |






<a name="-ListStrainMapsResponse-CcaStrainMap"></a>

### ListStrainMapsResponse.CcaStrainMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| strainMaps | [string](#string) | repeated | Strain map names assigned to the CCA. |






<a name="-ListThermalMapsRequest"></a>

### ListThermalMapsRequest
Request to list Thermal map files and their types for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to list thermal maps for. |






<a name="-ListThermalMapsResponse"></a>

### ListThermalMapsResponse
Represents the thermal map files and their types for a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of errors encountered. |
| ccaThermalMaps | [ListThermalMapsResponse.CcaThermalMap](#ListThermalMapsResponse-CcaThermalMap) | repeated | CCA thermal map files assigned to the project. |






<a name="-ListThermalMapsResponse-CcaThermalMap"></a>

### ListThermalMapsResponse.CcaThermalMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Project CCA name. |
| thermalMaps | [ListThermalMapsResponse.CcaThermalMap.ThermalMap](#ListThermalMapsResponse-CcaThermalMap-ThermalMap) | repeated | Thermal map files assigned to the CCA. |






<a name="-ListThermalMapsResponse-CcaThermalMap-ThermalMap"></a>

### ListThermalMapsResponse.CcaThermalMap.ThermalMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileName | [string](#string) |  | Name of the Thermal Map file. |
| fileType | [string](#string) |  | Thermal map file type. Possible values are: &#34;Icepak Thermal Map (TMAP)&#34;, &#34;Thermal Map (CSV)&#34;, &#34;Thermal Map (Excel)&#34;, &#34;Thermal Map (Image)&#34;. |






<a name="-ThermalMapFile"></a>

### ThermalMapFile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileName | [string](#string) |  | The name of the thermal file to update. |
| fileType | [ThermalMapFile.FileType](#ThermalMapFile-FileType) |  | Thermal file type. |
| fileComment | [string](#string) |  | Include a comment or description for the file. |
| thermalBoardSide | [ThermalMapFile.ThermalBoardSide](#ThermalMapFile-ThermalBoardSide) |  | Thermal board side. |
| csvExcelFile | [ThermalMapFile.CsvExcelFile](#ThermalMapFile-CsvExcelFile) |  | Used to CSV and Excel files. |
| imageFile | [ThermalMapFile.ImageFile](#ThermalMapFile-ImageFile) |  | Used to add properties to Image files. |
| thermalProfiles | [string](#string) | repeated | List of thermal profiles. |
| cca | [string](#string) | repeated | Project CCA Name. |






<a name="-ThermalMapFile-CsvExcelFile"></a>

### ThermalMapFile.CsvExcelFile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| headerRowCount | [int32](#int32) |  | Number of rows before the column header in the file. |
| referenceIDColumn | [string](#string) |  | Reference ID column. |
| temperatureColumn | [string](#string) |  | Temperature column. |
| temperatureUnits | [string](#string) |  | Units for temperature values. |
| numericFormat | [string](#string) |  | Numeric format for values. |






<a name="-ThermalMapFile-ImageFile"></a>

### ThermalMapFile.ImageFile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| coordinateUnits | [string](#string) |  | Coordinate units used for board, lengend and image boundaries. |
| boardBounds | [ThermalMapFile.ImageFile.NodeCoordinate](#ThermalMapFile-ImageFile-NodeCoordinate) | repeated | Coordinates of the nodes which make up the board outline. |
| imageBounds | [ThermalMapFile.ImageFile.ImageCoordinate](#ThermalMapFile-ImageFile-ImageCoordinate) |  | Coordinates of the board bounds within the image. |
| legendBounds | [ThermalMapFile.ImageFile.LegendCoordinate](#ThermalMapFile-ImageFile-LegendCoordinate) |  | Coordinates of the bounds of legend within the image. |
| legendOrientation | [ThermalMapFile.ImageFile.LegendOrientation](#ThermalMapFile-ImageFile-LegendOrientation) |  | Specify the legend orientation. |
| minTemperature | [double](#double) |  | Minimum temperature value. |
| minTemperatureUnits | [string](#string) |  | Units for minimum temperature value. |
| maxTemperature | [double](#double) |  | Maximum temperature value. |
| maxTemperatureUnits | [string](#string) |  | Units for maximum temperature value. |






<a name="-ThermalMapFile-ImageFile-ImageCoordinate"></a>

### ThermalMapFile.ImageFile.ImageCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| imageX | [double](#double) |  | X-coordinate of the upper left corner. |
| imageY | [double](#double) |  | Y-coordinate of the upper left corner. |
| imageH | [double](#double) |  | Height of the image. |
| imageW | [double](#double) |  | Width of the image. |






<a name="-ThermalMapFile-ImageFile-LegendCoordinate"></a>

### ThermalMapFile.ImageFile.LegendCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| legendX | [double](#double) |  | X-coordinate of the upper left corner. |
| legendY | [double](#double) |  | Y-coordinate of the upper left corner. |
| legendH | [double](#double) |  | Height of the legend. |
| legendW | [double](#double) |  | Width of the legend. |






<a name="-ThermalMapFile-ImageFile-NodeCoordinate"></a>

### ThermalMapFile.ImageFile.NodeCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertexX | [double](#double) |  | X-coordinate of the node. |
| vertexY | [double](#double) |  | Y-coordinate of the node. |






<a name="-UpdateThermalMapRequest"></a>

### UpdateThermalMapRequest
Request to update thermal map files to a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalMapFiles | [ThermalMapFile](#ThermalMapFile) | repeated | Thermal Map files. |






<a name="-UpdateThermalMapsResponse"></a>

### UpdateThermalMapsResponse
Response from updating thermal map files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |





 


<a name="-AddStrainMapRequest-StrainMapFile-FileType"></a>

### AddStrainMapRequest.StrainMapFile.FileType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CSV | 0 | Csv file. |
| Excel | 1 | Excel file. |
| Image | 2 | Image file. |



<a name="-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-LegendOrientation"></a>

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendOrientation


| Name | Number | Description |
| ---- | ------ | ----------- |
| Horizontal | 0 | Horizontal legend orientation. |
| Vertical | 1 | Vertical legend orientation. |



<a name="-ThermalMapFile-FileType"></a>

### ThermalMapFile.FileType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CSV | 0 | Csv file. |
| Excel | 1 | Excel file. |
| Image | 2 | Image file. |
| TMAP | 3 | Icepack file. |



<a name="-ThermalMapFile-ImageFile-LegendOrientation"></a>

### ThermalMapFile.ImageFile.LegendOrientation


| Name | Number | Description |
| ---- | ------ | ----------- |
| Horizontal | 0 | Horizontal legend orientation. |
| Vertical | 1 | Vertical legend orientation. |



<a name="-ThermalMapFile-ThermalBoardSide"></a>

### ThermalMapFile.ThermalBoardSide


| Name | Number | Description |
| ---- | ------ | ----------- |
| Bottom | 0 | Bottom side of the board. |
| Both | 1 | Both sides of the board. |
| Top | 2 | Top side of the board. |


 

 


<a name="-SherlockProjectService"></a>

### SherlockProjectService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| genReport | [.GenReportRequest](#GenReportRequest) | [.GenReportResponse](#GenReportResponse) stream | Generates the project report and return it via streaming. |
| genCCAReport | [.GenCCAReportRequest](#GenCCAReportRequest) | [.GenCCAReportResponse](#GenCCAReportResponse) stream | Generates the project CCA report and return it via streaming. |
| importODBArchive | [.ImportODBRequest](#ImportODBRequest) | [.ReturnCode](#ReturnCode) | Imports an ODB&#43;&#43; archive. |
| importIPC2581Archive | [.ImportIPC2581Request](#ImportIPC2581Request) | [.ReturnCode](#ReturnCode) | Imports an IPC-2581 archive. |
| importProjectZipArchive | [.ImportProjectZipRequest](#ImportProjectZipRequest) | [.ReturnCode](#ReturnCode) | Imports a zipped project archive -- multiple project mode. |
| importProjectZipArchiveSingleMode | [.ImportProjectZipSingleModeRequest](#ImportProjectZipSingleModeRequest) | [.ReturnCode](#ReturnCode) | Imports a zipped project archive -- single project mode. |
| deleteProject | [.DeleteProjectRequest](#DeleteProjectRequest) | [.ReturnCode](#ReturnCode) | Delete a project from Sherlock. |
| addStrainMap | [.AddStrainMapRequest](#AddStrainMapRequest) | [.AddStrainMapResponse](#AddStrainMapResponse) | Add a strain map files to a Sherlock project. |
| listStrainMaps | [.ListStrainMapsRequest](#ListStrainMapsRequest) | [.ListStrainMapsResponse](#ListStrainMapsResponse) | Returns a list of circuit cards and their assigned strain maps for a given Sherlock project. |
| listCCAs | [.ListCCAsRequest](#ListCCAsRequest) | [.ListCCAsResponse](#ListCCAsResponse) | Returns a list of circuit cards, their properties, and sub-assemblies for a given Sherlock project. |
| addProject | [.AddProjectRequest](#AddProjectRequest) | [.ReturnCode](#ReturnCode) | Add a project to Sherlock. |
| addCCA | [.AddCcaRequest](#AddCcaRequest) | [.ReturnCode](#ReturnCode) | Creates a new circuit card assembly. |
| listThermalMaps | [.ListThermalMapsRequest](#ListThermalMapsRequest) | [.ListThermalMapsResponse](#ListThermalMapsResponse) | Returns a list of thermal map files and their types for a given Sherlock project. |
| updateThermalMaps | [.UpdateThermalMapRequest](#UpdateThermalMapRequest) | [.UpdateThermalMapsResponse](#UpdateThermalMapsResponse) | Update thermal map files to a Sherlock project. |
| addThermalMaps | [.AddThermalMapRequest](#AddThermalMapRequest) | [.AddThermalMapResponse](#AddThermalMapResponse) | Add a thermal map to a Sherlock project. |
| exportProject | [.ExportProjectRequest](#ExportProjectRequest) | [.ReturnCode](#ReturnCode) | Exports project to a zipped archive file. |
| createCCAFromModelingRegion | [.CreateCcaFromModelingRegionRequest](#CreateCcaFromModelingRegionRequest) | [.ReturnCode](#ReturnCode) | Creates a CCA from a given modeling region |

 



<a name="SherlockService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## SherlockService.proto
Copyright 2020-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

The APIs in this service should only be used for Sherlock integration with Workbench.


<a name="-ClientMessage"></a>

### ClientMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| clientMessage | [string](#string) |  | Incoming message from Workbench in bi-directional stream. |






<a name="-ExportRequest"></a>

### ExportRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportCcaName | [string](#string) |  | CCA name. |
| destGeometryFile | [string](#string) |  | Destination directory for exported geometry and materials. |
| systemName | [string](#string) |  | gRPC system name. |
| componentName | [string](#string) |  | gRPC component name. |
| analysis | [ExportRequest.ExportAnalysis](#ExportRequest-ExportAnalysis) |  | Type of analysis to export. |






<a name="-ExportTraceReinforcementRequest"></a>

### ExportTraceReinforcementRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportCcaName | [string](#string) |  | Name of CCA. |
| destGeometryFile | [string](#string) |  | Destination directory for geometry files. |
| systemName | [string](#string) |  | gRPC system name. |
| componentName | [string](#string) |  | gRPC component name. |






<a name="-GetCCARequest"></a>

### GetCCARequest







<a name="-GetCCAResponse"></a>

### GetCCAResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccaNames | [string](#string) | repeated | List of CCA names for a specified project. |






<a name="-ImportRequest"></a>

### ImportRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resultFile | [string](#string) |  | Name of result file (.rst) to import. |
| projectName | [string](#string) |  | Name of project associated with the result file. |
| ccaName | [string](#string) |  | Name of CCA associated with the result file. |
| analysis | [ImportRequest.ImportAnalysis](#ImportRequest-ImportAnalysis) |  | Type of analysis result. |
| modalResultFile | [string](#string) |  | File name of modal result. |
| phaseName | [string](#string) |  | The life cycle phase of the event associated with the results file. |
| eventName | [string](#string) |  | The life cycle event associated with the results file. |
| modelTransform | [ImportRequest.ModelTransform](#ImportRequest-ModelTransform) |  | Model transformation info associated with the results. |
| analysisImports | [ImportRequest.AnalysisImport](#ImportRequest-AnalysisImport) | repeated | List of various analysis results to import and the associated files. |






<a name="-ImportRequest-AnalysisImport"></a>

### ImportRequest.AnalysisImport



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of CCA. |
| analysis | [ImportRequest.ImportAnalysis](#ImportRequest-ImportAnalysis) |  | Type of analysis result. |
| rsts | [ImportRequest.AnalysisImport.rst](#ImportRequest-AnalysisImport-rst) | repeated | List of results file to import. |
| modelTransform | [ImportRequest.ModelTransform](#ImportRequest-ModelTransform) |  | Model transformation info for the imported analysis results. |






<a name="-ImportRequest-AnalysisImport-rst"></a>

### ImportRequest.AnalysisImport.rst



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resultFile | [string](#string) |  | Results file to import. |
| modalResultFile | [string](#string) |  | Modal results file to import. |
| phaseName | [string](#string) |  | The life cycle phase of the event associated with the results file. |
| eventName | [string](#string) |  | The life cycle event associated with the results file. |






<a name="-ImportRequest-ModelTransform"></a>

### ImportRequest.ModelTransform
Indicate the model transform detection to use.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| detectTransform | [ImportRequest.ModelTransform.DetectTransform](#ImportRequest-ModelTransform-DetectTransform) |  | Type of model transformation detection to use. |
| transformX | [double](#double) |  | Model translation applied in X direction. |
| transformY | [double](#double) |  | Model translation applied in Y direction. |
| transformZ | [double](#double) |  | Model translation applied in Z direction. |
| transformRotX | [double](#double) |  | Model rotation (in degrees) applied in X direction. |
| transformRotY | [double](#double) |  | Model rotation (in degrees) applied in Y direction. |
| transformRotZ | [double](#double) |  | Model rotation (in degrees) applied in Z direction. |






<a name="-OpenProjectRequest"></a>

### OpenProjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directory | [string](#string) |  | Directory location of the project to open. |






<a name="-SaveProjectRequest"></a>

### SaveProjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directory | [string](#string) |  | Directory location where the project is to be saved. |






<a name="-ServerMessage"></a>

### ServerMessage
This is the message that is sent to Workbench whenever a relevant addition/update/deletion is made within Sherlock 
that would affect the same project that is open in WB.

Note that the enum Item refers to Workbench module terminology for the request changes.
These items are in a hierarchy and any changes or modifications flow downstream:
Project -&gt; Setup -&gt; Life Prediction

If the Project item needs to be updated then that automatically means that
Setup and Life Prediction will be updated at well. Therefore, only one ServerMessage needs to
be sent to Workbench with Item = Project.

States are all inclusive based on the states that are recognized in Workbench.  Some of these may never need to be used
in ServerMessage but the enum contains the complete set just in case they are needed in the future, i.e., if the granularity
of the Sherlock changes become more finely-grained. For now we are using just the Modified state when constructing a 
ServerMessage and sending it to WB.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| newState | [ServerMessage.State](#ServerMessage-State) |  | The enum represents the states that are recognized in Workbench, inclusive. For now, Sherlock is just returning State.Modified. |
| updatedItem | [ServerMessage.Item](#ServerMessage-Item) |  | Represents the first module in Workbench that is affected by the Sherlock change. |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |






<a name="-SetWorkingDirRequest"></a>

### SetWorkingDirRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directory | [string](#string) |  | Path to set as working directory location for Sherlock projects. |





 


<a name="-ExportRequest-ExportAnalysis"></a>

### ExportRequest.ExportAnalysis


| Name | Number | Description |
| ---- | ------ | ----------- |
| NF | 0 | Natural Frequency analysis type. |
| HV | 1 | Harmonic Vibe analysis type. |
| ICT | 2 | ICT Analysis type. |
| SH | 3 | Mechanical Shock analysis type.` |
| RV | 4 | Random Vibe analysis type. |



<a name="-ImportRequest-ImportAnalysis"></a>

### ImportRequest.ImportAnalysis


| Name | Number | Description |
| ---- | ------ | ----------- |
| NaturalFreq | 0 | Natural Frequency result type. |
| HarmonicVibe | 1 | Harmonic Vibe result type. |
| ICTAnalysis | 2 | ICT Analysis result type. |
| MechanicalShock | 3 | Mechanical Shock result type. |
| RandomVibe | 4 | Random Vibe result type. |



<a name="-ImportRequest-ModelTransform-DetectTransform"></a>

### ImportRequest.ModelTransform.DetectTransform


| Name | Number | Description |
| ---- | ------ | ----------- |
| DISABLED | 0 | No model transformation is performed. |
| ENABLED | 1 | Sherlock automatically detects the model transformation. |
| MANUAL | 2 | User provides model transformation parameters. |



<a name="-ServerMessage-Item"></a>

### ServerMessage.Item


| Name | Number | Description |
| ---- | ------ | ----------- |
| Project | 0 | Project = WB/Mech Model Change. |
| Setup | 1 | Setup = Sherlock Pre. |
| LifePrediction | 2 | Life Prediction = Sherlock Post Change. |



<a name="-ServerMessage-State"></a>

### ServerMessage.State


| Name | Number | Description |
| ---- | ------ | ----------- |
| Disabled | 0 | Workbench state -- not currently used. |
| EditRequired | 1 | Workbench state -- not currently used. |
| Incomplete | 2 | Workbench state -- not currently used. |
| InputChangesPending | 3 | Workbench state -- not currently used. |
| InternalError | 4 | Workbench state -- not currently used. |
| Interrupted | 5 | Workbench state -- not currently used. |
| Modified | 6 | A change occurred in Sherlock for which Workbench is to be notified. Only state currently used in Sherlock for Workbench notification. |
| OutOfDate | 7 | Workbench state -- not currently used. |
| Unfulfilled | 8 | Workbench state -- not currently used. |
| UpToDate | 9 | Workbench state -- not currently used. |


 

 


<a name="-SherlockService"></a>

### SherlockService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| openProject | [.OpenProjectRequest](#OpenProjectRequest) | [.ReturnCode](#ReturnCode) | Opens specific Sherlock project given the full path. |
| saveProject | [.SaveProjectRequest](#SaveProjectRequest) | [.ReturnCode](#ReturnCode) | Saves all Sherlock project files given the destination path. |
| export | [.ExportRequest](#ExportRequest) | [.ReturnCode](#ReturnCode) | Export request for geometry and materials given the full destination directory and file names. |
| importRst | [.ImportRequest](#ImportRequest) | [.ReturnCode](#ReturnCode) | Request for Sherlock to import the given .rst file. |
| getCCA | [.GetCCARequest](#GetCCARequest) | [.GetCCAResponse](#GetCCAResponse) | Returns a list of circuit board names given a project name. |
| exportTraceReinforcement | [.ExportTraceReinforcementRequest](#ExportTraceReinforcementRequest) | [.ReturnCode](#ReturnCode) | Export Trace Reinforcement model request given the full destination directory and file names. |
| isSherlockClientLoading | [.IsSherlockClientLoadingRequest](#IsSherlockClientLoadingRequest) | [.ReturnCode](#ReturnCode) | Check if SherlockClient is still loading. |
| setWorkingDir | [.SetWorkingDirRequest](#SetWorkingDirRequest) | [.ReturnCode](#ReturnCode) | Set working directory. In the case where there is not already a project loaded in Sherlock, this API sets the default project directory for any new project created. In the case where there is already a project loaded in Sherlock, this API reloads the project from the new directory provided and refreshes the Sherlock UI. |
| eventCommunication | [.ClientMessage](#ClientMessage) stream | [.ServerMessage](#ServerMessage) stream | Bi-directional stream between Sherlock and Workbench that notifies Workbench of specific changes/updates made within Sherlock that would affect the same project open in Workbench. |

 



<a name="SherlockStackupService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## SherlockStackupService.proto
Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-GenStackupRequest"></a>

### GenStackupRequest
Request to generate stackup layers for a CCA.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| boardThickness | [double](#double) |  | Board thickness. |
| boardThicknessUnit | [string](#string) |  | Board thickness unit. |
| pcbMaterialManufacturer | [string](#string) |  | PCB material manufacturer. |
| pcbMaterialGrade | [string](#string) |  | PCB material grade. |
| pcbMaterial | [string](#string) |  | PCB material. |
| conductorLayersCnt | [int32](#int32) |  | Number of conductor layers. |
| signalLayerThickness | [double](#double) |  | Signal layer thickness. |
| signalLayerThicknessUnit | [string](#string) |  | Signal layer thickness unit. |
| minLaminateThickness | [double](#double) |  | Minimum laminate layer thickness. |
| minLaminateThicknessUnit | [string](#string) |  | Minimum laminate layer thickness unit. |
| maintainSymmetry | [bool](#bool) |  | If set to true, maintain symmetry. |
| powerLayerThickness | [double](#double) |  | Power layer thickness. |
| powerLayerThicknessUnit | [string](#string) |  | Power layer thickness unit. |






<a name="-GetLayerCountRequest"></a>

### GetLayerCountRequest
Request the number of layers in the stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-GetLayerCountResponse"></a>

### GetLayerCountResponse
Represents the number of layers in the stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| count | [int32](#int32) |  | Number of stackup layers. |






<a name="-GetStackupPropsRequest"></a>

### GetStackupPropsRequest
Request a summary of the stackup properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-GetStackupPropsResponse"></a>

### GetStackupPropsResponse
Represents a summary of the stackup properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| boardDimension | [string](#string) |  | Board dimension. |
| boardThickness | [string](#string) |  | Board thickness. |
| density | [string](#string) |  | Board density. |
| conductorLayersCnt | [string](#string) |  | Number of conductor layers. |
| ctExy | [string](#string) |  | CTExy. |
| ctEz | [string](#string) |  | CTEz. |
| exy | [string](#string) |  | Exy. |
| ez | [string](#string) |  | Ez. |






<a name="-GetTotalConductorThicknessRequest"></a>

### GetTotalConductorThicknessRequest
Request the total thickness on all conductor layers in a stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |






<a name="-GetTotalConductorThicknessResponse"></a>

### GetTotalConductorThicknessResponse
Represents the number of layers in the stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| totalThickness | [double](#double) |  | Total thickness. |






<a name="-ListConductorLayersRequest"></a>

### ListConductorLayersRequest
Request for a list of conductor layers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListConductorLayersResponse"></a>

### ListConductorLayersResponse
Represents the properties for all CCAs and their corresponding conductor layers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccaConductorLayerProps | [ListConductorLayersResponse.CCAConductorLayerProp](#ListConductorLayersResponse-CCAConductorLayerProp) | repeated | List of CCAs and their associated conductor layers for a specified project. |






<a name="-ListConductorLayersResponse-CCAConductorLayerProp"></a>

### ListConductorLayersResponse.CCAConductorLayerProp
Represents a CCA and its conductor layers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| conductorLayerProps | [ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp](#ListConductorLayersResponse-CCAConductorLayerProp-ConductorLayerProp) | repeated | List of conductor layers and their associated properties for a specified CCA. |






<a name="-ListConductorLayersResponse-CCAConductorLayerProp-ConductorLayerProp"></a>

### ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp
Represents a conductor layer and its properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer | [string](#string) |  | An internal layer ID associated with this conductor layer. |
| type | [string](#string) |  | Layer type (i.e. SIGNAL, POWER, SUBSTRATE). |
| material | [string](#string) |  | Name of this conductor material. |
| thickness | [double](#double) |  | Conductor layer thickness. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| resinMaterial | [string](#string) |  | Resin material. |
| density | [double](#double) |  | Layer density. |
| CTExy | [double](#double) |  | CTExy. |
| CTEz | [double](#double) |  | CTEz. |
| Exy | [double](#double) |  | Exy. |
| Ez | [double](#double) |  | Ez. |






<a name="-ListConductorMaterialsRequest"></a>

### ListConductorMaterialsRequest
Request to list valid conductor materials.






<a name="-ListConductorMaterialsResponse"></a>

### ListConductorMaterialsResponse
Represents a list of valid conductor materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| conductorMaterial | [string](#string) | repeated | Conductor material name. |






<a name="-ListConstructionStylesRequest"></a>

### ListConstructionStylesRequest
Request to list valid construction styles.






<a name="-ListConstructionStylesResponse"></a>

### ListConstructionStylesResponse
Represents a list of valid construction styles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| constructionStyle | [string](#string) | repeated | Construction style. |






<a name="-ListFiberMaterialsRequest"></a>

### ListFiberMaterialsRequest
Request to list valid fiber materials.






<a name="-ListFiberMaterialsResponse"></a>

### ListFiberMaterialsResponse
Represents a list of valid fiber materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| fiberMaterial | [string](#string) | repeated | Fiber material name. |






<a name="-ListLaminateMaterialsManufacturersRequest"></a>

### ListLaminateMaterialsManufacturersRequest
Request to list valid names of materials manufacturers.






<a name="-ListLaminateMaterialsManufacturersResponse"></a>

### ListLaminateMaterialsManufacturersResponse
Represents a list of valid names of materials manufacturers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| manufacturer | [string](#string) | repeated | Manufacturer name. |






<a name="-ListLaminateMaterialsRequest"></a>

### ListLaminateMaterialsRequest
Request to list materials from a given manufacturer.
If manufacturer is empty, all manufacturers and their materials will be returned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| manufacturer | [string](#string) |  | Manufacturer name. |






<a name="-ListLaminateMaterialsResponse"></a>

### ListLaminateMaterialsResponse
Represents a list of materials from a given manufacturer.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| manufacturerMaterials | [ListLaminateMaterialsResponse.ManufacturerMaterials](#ListLaminateMaterialsResponse-ManufacturerMaterials) | repeated | List of manufacturers and their associated grades and materials. |






<a name="-ListLaminateMaterialsResponse-ManufacturerMaterials"></a>

### ListLaminateMaterialsResponse.ManufacturerMaterials



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| manufacturer | [string](#string) |  | Manufacturer name. |
| gradeMaterials | [ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials](#ListLaminateMaterialsResponse-ManufacturerMaterials-GradeMaterials) | repeated | List of Grades and their associated materials. |






<a name="-ListLaminateMaterialsResponse-ManufacturerMaterials-GradeMaterials"></a>

### ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials
Represents a grade and the materials with this grade.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grade | [string](#string) |  | Grade. |
| laminateMaterial | [string](#string) | repeated | Material name. |






<a name="-ListLaminateThicknessUnitsRequest"></a>

### ListLaminateThicknessUnitsRequest
Request to list valid laminate thickness units.






<a name="-ListLaminateThicknessUnitsResponse"></a>

### ListLaminateThicknessUnitsResponse
Represents a list of valid laminate thickness units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| unit | [string](#string) | repeated | Thickness unit. |






<a name="-ListLaminatesRequest"></a>

### ListLaminatesRequest
Request for a list of laminates.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListLaminatesResponse"></a>

### ListLaminatesResponse
Represents the properties for all CCAs and their corresponding laminates.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccaLaminateProps | [ListLaminatesResponse.CCALaminateProp](#ListLaminatesResponse-CCALaminateProp) | repeated | List of CCAs and their corresponding laminate layers. |






<a name="-ListLaminatesResponse-CCALaminateProp"></a>

### ListLaminatesResponse.CCALaminateProp
Represents a CCA and its laminates.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| laminateProps | [ListLaminatesResponse.CCALaminateProp.LaminateProp](#ListLaminatesResponse-CCALaminateProp-LaminateProp) | repeated | List of laminate layers with associated properties for a specified CCA. |






<a name="-ListLaminatesResponse-CCALaminateProp-LaminateProp"></a>

### ListLaminatesResponse.CCALaminateProp.LaminateProp
Represents a laminate layer and its properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer | [string](#string) |  | An internal layer ID associated with this laminate layer. |
| manufacturer | [string](#string) |  | Manufacturer name of this material. |
| grade | [string](#string) |  | Grade of this material. |
| material | [string](#string) |  | Name of this material. |
| thickness | [double](#double) |  | Laminate thickness. |
| thicknessUnit | [string](#string) |  | Laminate thickness unit. |
| constructionStyle | [string](#string) |  | Construction style. |
| glassConstructions | [ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction](#ListLaminatesResponse-CCALaminateProp-LaminateProp-GlassConstruction) | repeated | List of Glass Construction info for a laminate layer. |
| fiberMaterial | [string](#string) |  | Fiber material if the construction style is glass. |
| conductorMaterial | [string](#string) |  | Conductor material. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| density | [double](#double) |  | Layer density. |
| CTExy | [double](#double) |  | CTExy. |
| CTEz | [double](#double) |  | CTEz. |
| Exy | [double](#double) |  | Exy. |
| Ez | [double](#double) |  | Ez. |






<a name="-ListLaminatesResponse-CCALaminateProp-LaminateProp-GlassConstruction"></a>

### ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction
Represents the layers with a glass construction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| style | [string](#string) |  | Glass construction style. |
| resinPercentage | [double](#double) |  | Glass construction resin percentage. |
| thickness | [double](#double) |  | Glass construction thickness. |
| thicknessUnit | [string](#string) |  | Glass construction thickness unit. |






<a name="-UpdateConductorLayerRequest"></a>

### UpdateConductorLayerRequest
Represents the conductor layer properties requested to be updated.
To update a thickness, a thickness unit must be provided.
Any property left out or set to &#34;&#34; or 0.0 will not be updated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| layer | [string](#string) |  | The layer ID associated with this conductor layer. |
| type | [string](#string) |  | Layer type (i.e. SIGNAL, POWER, SUBSTRATE). |
| material | [string](#string) |  | Name of this conductor material. |
| thickness | [double](#double) |  | Conductor layer thickness. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| resinMaterial | [string](#string) |  | Resin material. |






<a name="-UpdateLaminateRequest"></a>

### UpdateLaminateRequest
Represents the laminate properties requested to be updated.
To update the material, valid values must be provided for manufacturer, grade, and material.
To update a thickness, a thickness unit must be provided.
Glass construction should only be set when the construction style is not the &#34;DEFAULT&#34; value.
Any property left out or set to &#34;&#34; or 0.0 will not be updated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| layer | [string](#string) |  | The internal layer ID associated with this laminate layer. |
| manufacturer | [string](#string) |  | Manufacturer name of this material. Must be provided along with grade and material name. |
| grade | [string](#string) |  | Grade of this material. |
| material | [string](#string) |  | Name of this material. |
| thickness | [double](#double) |  | Laminate thickness. |
| thicknessUnit | [string](#string) |  | Laminate thickness unit. |
| constructionStyle | [string](#string) |  | Construction style. |
| glassConstruction | [UpdateLaminateRequest.GlassConstruction](#UpdateLaminateRequest-GlassConstruction) | repeated | List of Glass Construction info for a laminate layer. |
| fiberMaterial | [string](#string) |  | Fiber material. Only updated if glass construction is selected. |
| conductorMaterial | [string](#string) |  | Conductor material. |
| conductorPercent | [string](#string) |  | Conductor percentage. |






<a name="-UpdateLaminateRequest-GlassConstruction"></a>

### UpdateLaminateRequest.GlassConstruction
Represents the layers with a glass construction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| style | [string](#string) |  | Glass construction style. |
| resinPercentage | [double](#double) |  | Glass construction resin percentage. |
| thickness | [double](#double) |  | Glass construction thickness. |
| thicknessUnit | [string](#string) |  | Glass construction thickness unit. |





 

 

 


<a name="-SherlockStackupService"></a>

### SherlockStackupService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| listLaminates | [.ListLaminatesRequest](#ListLaminatesRequest) | [.ListLaminatesResponse](#ListLaminatesResponse) | Returns a list of project&#39;s CCAs and their laminates. |
| updateLaminate | [.UpdateLaminateRequest](#UpdateLaminateRequest) | [.ReturnCode](#ReturnCode) | Update properties for a given laminate layer. |
| listLaminateThicknessUnits | [.ListLaminateThicknessUnitsRequest](#ListLaminateThicknessUnitsRequest) | [.ListLaminateThicknessUnitsResponse](#ListLaminateThicknessUnitsResponse) | List all the supported laminate layer thickness units. |
| listConductorMaterials | [.ListConductorMaterialsRequest](#ListConductorMaterialsRequest) | [.ListConductorMaterialsResponse](#ListConductorMaterialsResponse) | List all conductor materials. |
| listFiberMaterials | [.ListFiberMaterialsRequest](#ListFiberMaterialsRequest) | [.ListFiberMaterialsResponse](#ListFiberMaterialsResponse) | List all fiber materials. |
| listLaminateMaterialsManufacturers | [.ListLaminateMaterialsManufacturersRequest](#ListLaminateMaterialsManufacturersRequest) | [.ListLaminateMaterialsManufacturersResponse](#ListLaminateMaterialsManufacturersResponse) | List all laminate materials manufacturers. |
| listLaminateMaterials | [.ListLaminateMaterialsRequest](#ListLaminateMaterialsRequest) | [.ListLaminateMaterialsResponse](#ListLaminateMaterialsResponse) | List all laminate materials (both based on manufacturer specified or without). If manufacturer is empty or not provided, then all manufacturers and their laminate materials will be returned. If a manufacturer is provided, then only that manufacturer&#39;s laminate materials will be returned. |
| listConstructionStyles | [.ListConstructionStylesRequest](#ListConstructionStylesRequest) | [.ListConstructionStylesResponse](#ListConstructionStylesResponse) | List all construction styles. |
| listConductorLayers | [.ListConductorLayersRequest](#ListConductorLayersRequest) | [.ListConductorLayersResponse](#ListConductorLayersResponse) | Returns a list of project&#39;s CCAs and their conductor layers. |
| updateConductorLayer | [.UpdateConductorLayerRequest](#UpdateConductorLayerRequest) | [.ReturnCode](#ReturnCode) | Update properties for a given conductor layer. |
| getLayerCount | [.GetLayerCountRequest](#GetLayerCountRequest) | [.GetLayerCountResponse](#GetLayerCountResponse) | Returns the number of stackup layers. |
| getTotalConductorThickness | [.GetTotalConductorThicknessRequest](#GetTotalConductorThicknessRequest) | [.GetTotalConductorThicknessResponse](#GetTotalConductorThicknessResponse) | Returns the total thickness for all conductor layers. |
| getStackupProps | [.GetStackupPropsRequest](#GetStackupPropsRequest) | [.GetStackupPropsResponse](#GetStackupPropsResponse) | Returns a summary of the stackup properties. |
| genStackup | [.GenStackupRequest](#GenStackupRequest) | [.ReturnCode](#ReturnCode) | Generate stackup layers. |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

