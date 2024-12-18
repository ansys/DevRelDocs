# Table of contents

- [SherlockAnalysisService.proto](#sherlockanalysisserviceproto)
  - [GetHarmonicVibeInputFieldsRequest](#getharmonicvibeinputfieldsrequest)
  - [GetHarmonicVibeInputFieldsResponse](#getharmonicvibeinputfieldsresponse)
  - [GetICTAnalysisInputFieldsRequest](#getictanalysisinputfieldsrequest)
  - [GetICTAnalysisInputFieldsResponse](#getictanalysisinputfieldsresponse)
  - [GetMechanicalShockInputFieldsRequest](#getmechanicalshockinputfieldsrequest)
  - [GetMechanicalShockInputFieldsResponse](#getmechanicalshockinputfieldsresponse)
  - [GetNaturalFrequencyInputFieldsRequest](#getnaturalfrequencyinputfieldsrequest)
  - [GetNaturalFrequencyInputFieldsResponse](#getnaturalfrequencyinputfieldsresponse)
  - [GetPartsListValidationPropsRequest](#getpartslistvalidationpropsrequest)
  - [GetPcbModelingInputFieldsRequest](#getpcbmodelinginputfieldsrequest)
  - [GetPcbModelingInputFieldsResponse](#getpcbmodelinginputfieldsresponse)
  - [GetRandomVibeInputFieldsRequest](#getrandomvibeinputfieldsrequest)
  - [GetRandomVibeInputFieldsResponse](#getrandomvibeinputfieldsresponse)
  - [GetSolderFatigueInputFieldsRequest](#getsolderfatigueinputfieldsrequest)
  - [GetSolderFatigueInputFieldsResponse](#getsolderfatigueinputfieldsresponse)
  - [PartsListValidationPropsResponse](#partslistvalidationpropsresponse)
  - [RunAnalysisRequest](#runanalysisrequest)
  - [RunAnalysisRequest.Analysis](#runanalysisrequest.analysis)
  - [RunAnalysisRequest.Analysis.Phase](#runanalysisrequest.analysis.phase)
  - [RunAnalysisRequest.Analysis.Phase.Event](#runanalysisrequest.analysis.phase.event)
  - [RunStrainMapAnalysisRequest](#runstrainmapanalysisrequest)
  - [RunStrainMapAnalysisRequest.StrainMapAnalysis](#runstrainmapanalysisrequest.strainmapanalysis)
  - [RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap](#runstrainmapanalysisrequest.strainmapanalysis.eventstrainmap)
  - [UpdateHarmonicVibePropsRequest](#updateharmonicvibepropsrequest)
  - [UpdateHarmonicVibePropsRequest.HarmonicVibe](#updateharmonicvibepropsrequest.harmonicvibe)
  - [UpdateICTAnalysisPropsRequest](#updateictanalysispropsrequest)
  - [UpdateICTAnalysisPropsRequest.ICTAnalysis](#updateictanalysispropsrequest.ictanalysis)
  - [UpdateMechanicalShockPropsRequest](#updatemechanicalshockpropsrequest)
  - [UpdateMechanicalShockPropsRequest.MechanicalShock](#updatemechanicalshockpropsrequest.mechanicalshock)
  - [UpdateNaturalFrequencyPropsRequest](#updatenaturalfrequencypropsrequest)
  - [UpdatePartModelingRequest](#updatepartmodelingrequest)
  - [UpdatePartsListValidationPropsRequest](#updatepartslistvalidationpropsrequest)
  - [UpdatePartsListValidationPropsRequest.PartsListValidation](#updatepartslistvalidationpropsrequest.partslistvalidation)
  - [UpdatePcbModelingPropsRequest](#updatepcbmodelingpropsrequest)
  - [UpdatePcbModelingPropsRequest.Analysis](#updatepcbmodelingpropsrequest.analysis)
  - [UpdateRandomVibePropsRequest](#updaterandomvibepropsrequest)
  - [UpdateSolderFatiguePropsRequest](#updatesolderfatiguepropsrequest)
  - [UpdateSolderFatiguePropsRequest.SolderFatigue](#updatesolderfatiguepropsrequest.solderfatigue)
  - [UpdateThermalMechPropsRequest](#updatethermalmechpropsrequest)

  - [ElementOrder](#elementorder)
  - [ModelSource](#modelsource)
  - [AnalysisType](#analysistype)
  - [AnalysisType](#analysistype)
  - [AnalysisType](#analysistype)
  - [PcbMaterialModel](#pcbmaterialmodel)
  - [PcbModelType](#pcbmodeltype)

  - [SherlockAnalysisService](#sherlockanalysisservice)

- [SherlockCommonService.proto](#sherlockcommonserviceproto)
  - [ExitRequest](#exitrequest)
  - [GetSoldersRequest](#getsoldersrequest)
  - [GetSoldersResponse](#getsoldersresponse)
  - [HealthCheckRequest](#healthcheckrequest)
  - [HealthCheckResponse](#healthcheckresponse)
  - [IsSherlockClientLoadingRequest](#issherlockclientloadingrequest)
  - [ListUnitsRequest](#listunitsrequest)
  - [ListUnitsResponse](#listunitsresponse)
  - [Measurement](#measurement)
  - [ReturnCode](#returncode)
  - [SherlockInfoRequest](#sherlockinforequest)
  - [SherlockInfoResponse](#sherlockinforesponse)

  - [ServingStatus](#servingstatus)
  - [UnitType](#unittype)
  - [MatchingMode](#matchingmode)
  - [TableDelimiter](#tabledelimiter)

  - [SherlockCommonService](#sherlockcommonservice)

- [SherlockLayerService.proto](#sherlocklayerserviceproto)
  - [AddModelingRegionRequest](#addmodelingregionrequest)
  - [AddPottingRegionRequest](#addpottingregionrequest)
  - [AddPottingRegionRequest.PottingRegion](#addpottingregionrequest.pottingregion)
  - [CircularShape](#circularshape)
  - [CopyModelingRegionRequest](#copymodelingregionrequest)
  - [CopyModelingRegionRequest.CopyModelingRegionInfo](#copymodelingregionrequest.copymodelingregioninfo)
  - [CopyPottingRegionRequest](#copypottingregionrequest)
  - [CopyPottingRegionRequest.PottingRegionCopyData](#copypottingregionrequest.pottingregioncopydata)
  - [DeleteAllICTFixturesRequest](#deleteallictfixturesrequest)
  - [DeleteAllMountPointsRequest](#deleteallmountpointsrequest)
  - [DeleteAllTestPointsRequest](#deletealltestpointsrequest)
  - [DeleteModelingRegionRequest](#deletemodelingregionrequest)
  - [DeleteModelingRegionRequest.DeleteModelingRegionInfo](#deletemodelingregionrequest.deletemodelingregioninfo)
  - [DeletePottingRegionRequest](#deletepottingregionrequest)
  - [DeletePottingRegionRequest.PottingRegionDeleteData](#deletepottingregionrequest.pottingregiondeletedata)
  - [ExportAllICTFixturesRequest](#exportallictfixturesrequest)
  - [ExportAllMountPointsRequest](#exportallmountpointsrequest)
  - [ExportAllTestPointsRequest](#exportalltestpointsrequest)
  - [GetMountPointBoundariesRequest](#getmountpointboundariesrequest)
  - [GetMountPointBoundariesResponse](#getmountpointboundariesresponse)
  - [GetMountPointChassisMaterialsRequest](#getmountpointchassismaterialsrequest)
  - [GetMountPointChassisMaterialsResponse](#getmountpointchassismaterialsresponse)
  - [GetMountPointShapeTypesRequest](#getmountpointshapetypesrequest)
  - [GetMountPointShapeTypesResponse](#getmountpointshapetypesresponse)
  - [GetMountPointSidesRequest](#getmountpointsidesrequest)
  - [GetMountPointSidesResponse](#getmountpointsidesresponse)
  - [GetMountPointTypesRequest](#getmountpointtypesrequest)
  - [GetMountPointTypesResponse](#getmountpointtypesresponse)
  - [GetMountPointUnitsRequest](#getmountpointunitsrequest)
  - [GetMountPointUnitsResponse](#getmountpointunitsresponse)
  - [GetMountPointsPropertiesRequest](#getmountpointspropertiesrequest)
  - [GetMountPointsPropertiesResponse](#getmountpointspropertiesresponse)
  - [ModelingRegion](#modelingregion)
  - [ModelingRegion.PCBModelingProperties](#modelingregion.pcbmodelingproperties)
  - [ModelingRegion.TraceModelingProperties](#modelingregion.tracemodelingproperties)
  - [MountPointProperties](#mountpointproperties)
  - [PCBShape](#pcbshape)
  - [PolygonalShape](#polygonalshape)
  - [PolygonalShape.Point](#polygonalshape.point)
  - [PottingRegion](#pottingregion)
  - [RectangularShape](#rectangularshape)
  - [SlotShape](#slotshape)
  - [UpdateICTFixturesByFileRequest](#updateictfixturesbyfilerequest)
  - [UpdateICTFixturesResponse](#updateictfixturesresponse)
  - [UpdateModelingRegionRequest](#updatemodelingregionrequest)
  - [UpdateMountPointsByFileRequest](#updatemountpointsbyfilerequest)
  - [UpdateMountPointsRequest](#updatemountpointsrequest)
  - [UpdateMountPointsResponse](#updatemountpointsresponse)
  - [UpdatePottingRegionRequest](#updatepottingregionrequest)
  - [UpdatePottingRegionRequest.PottingRegionUpdateData](#updatepottingregionrequest.pottingregionupdatedata)
  - [UpdateTestPointsByFileRequest](#updatetestpointsbyfilerequest)
  - [UpdateTestPointsResponse](#updatetestpointsresponse)

  - [ElementOrder](#elementorder)
  - [ModelingMode](#modelingmode)
  - [ExportModelType](#exportmodeltype)
  - [TraceModelingType](#tracemodelingtype)

  - [SherlockLayerService](#sherlocklayerservice)

- [SherlockLifeCycleService.proto](#sherlocklifecycleserviceproto)
  - [AddHarmonicEventRequest](#addharmoniceventrequest)
  - [AddHarmonicEventResponse](#addharmoniceventresponse)
  - [AddHarmonicVibeProfilesRequest](#addharmonicvibeprofilesrequest)
  - [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile](#addharmonicvibeprofilesrequest.harmonicvibeprofile)
  - [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry](#addharmonicvibeprofilesrequest.harmonicvibeprofile.entry)
  - [AddHarmonicVibeProfilesResponse](#addharmonicvibeprofilesresponse)
  - [AddRandomVibeEventRequest](#addrandomvibeeventrequest)
  - [AddRandomVibeEventResponse](#addrandomvibeeventresponse)
  - [AddRandomVibeProfilesRequest](#addrandomvibeprofilesrequest)
  - [AddRandomVibeProfilesRequest.RandomVibeProfile](#addrandomvibeprofilesrequest.randomvibeprofile)
  - [AddRandomVibeProfilesRequest.RandomVibeProfile.Entry](#addrandomvibeprofilesrequest.randomvibeprofile.entry)
  - [AddRandomVibeProfilesResponse](#addrandomvibeprofilesresponse)
  - [AddShockEventRequest](#addshockeventrequest)
  - [AddShockEventResponse](#addshockeventresponse)
  - [AddShockProfilesRequest](#addshockprofilesrequest)
  - [AddShockProfilesRequest.ShockProfile](#addshockprofilesrequest.shockprofile)
  - [AddShockProfilesRequest.ShockProfile.Entry](#addshockprofilesrequest.shockprofile.entry)
  - [AddShockProfilesResponse](#addshockprofilesresponse)
  - [AddThermalEventRequest](#addthermaleventrequest)
  - [AddThermalEventResponse](#addthermaleventresponse)
  - [AddThermalProfilesRequest](#addthermalprofilesrequest)
  - [AddThermalProfilesRequest.ThermalProfile](#addthermalprofilesrequest.thermalprofile)
  - [AddThermalProfilesRequest.ThermalProfile.Entry](#addthermalprofilesrequest.thermalprofile.entry)
  - [AddThermalProfilesResponse](#addthermalprofilesresponse)
  - [CreateLifePhaseRequest](#createlifephaserequest)
  - [CreateLifePhaseResponse](#createlifephaseresponse)
  - [DeleteEventRequest](#deleteeventrequest)
  - [DeleteLifePhaseResponse](#deletelifephaseresponse)
  - [DeletePhaseRequest](#deletephaserequest)
  - [Events](#events)
  - [ListAmplUnitsRequest](#listamplunitsrequest)
  - [ListAmplUnitsResponse](#listamplunitsresponse)
  - [ListDurationUnitsRequest](#listdurationunitsrequest)
  - [ListDurationUnitsResponse](#listdurationunitsresponse)
  - [ListFreqUnitsRequest](#listfrequnitsrequest)
  - [ListFreqUnitsResponse](#listfrequnitsresponse)
  - [ListHarmonicEventsRequest](#listharmoniceventsrequest)
  - [ListHarmonicEventsResponse](#listharmoniceventsresponse)
  - [ListHarmonicProfileTypesRequest](#listharmonicprofiletypesrequest)
  - [ListHarmonicProfileTypesResponse](#listharmonicprofiletypesresponse)
  - [ListLCEventsRequest](#listlceventsrequest)
  - [ListLCEventsResponse](#listlceventsresponse)
  - [ListLCEventsResponse.LifeCyclePhase](#listlceventsresponse.lifecyclephase)
  - [ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent](#listlceventsresponse.lifecyclephase.lifecycleevent)
  - [ListLCStatesRequest](#listlcstatesrequest)
  - [ListLCStatesResponse](#listlcstatesresponse)
  - [ListLCTypesRequest](#listlctypesrequest)
  - [ListLCTypesResponse](#listlctypesresponse)
  - [ListRandomVibeEventsRequest](#listrandomvibeeventsrequest)
  - [ListRandomVibeEventsResponse](#listrandomvibeeventsresponse)
  - [ListRandomVibeProfileTypesRequest](#listrandomvibeprofiletypesrequest)
  - [ListRandomVibeProfileTypesResponse](#listrandomvibeprofiletypesresponse)
  - [ListShockEventsRequest](#listshockeventsrequest)
  - [ListShockEventsResponse](#listshockeventsresponse)
  - [ListShockLoadUnitsRequest](#listshockloadunitsrequest)
  - [ListShockLoadUnitsResponse](#listshockloadunitsresponse)
  - [ListShockPulsesRequest](#listshockpulsesrequest)
  - [ListShockPulsesResponse](#listshockpulsesresponse)
  - [ListTempUnitsRequest](#listtempunitsrequest)
  - [ListTempUnitsResponse](#listtempunitsresponse)
  - [LoadHarmonicProfileRequest](#loadharmonicprofilerequest)
  - [LoadHarmonicProfileRequest.CSVProps](#loadharmonicprofilerequest.csvprops)
  - [LoadHarmonicProfileResponse](#loadharmonicprofileresponse)
  - [LoadRandomVibeProfileRequest](#loadrandomvibeprofilerequest)
  - [LoadRandomVibeProfileRequest.CSVProps](#loadrandomvibeprofilerequest.csvprops)
  - [LoadRandomVibeProfileResponse](#loadrandomvibeprofileresponse)
  - [LoadShockProfileDatasetRequest](#loadshockprofiledatasetrequest)
  - [LoadShockProfileDatasetRequest.CSVProps](#loadshockprofiledatasetrequest.csvprops)
  - [LoadShockProfileDatasetResponse](#loadshockprofiledatasetresponse)
  - [LoadShockProfilePulsesRequest](#loadshockprofilepulsesrequest)
  - [LoadShockProfilePulsesRequest.CSVProps](#loadshockprofilepulsesrequest.csvprops)
  - [LoadShockProfilePulsesResponse](#loadshockprofilepulsesresponse)
  - [LoadThermalProfileRequest](#loadthermalprofilerequest)
  - [LoadThermalProfileRequest.CSVProps](#loadthermalprofilerequest.csvprops)
  - [LoadThermalProfileResponse](#loadthermalprofileresponse)

  - [SherlockLifeCycleService](#sherlocklifecycleservice)

- [SherlockModelService.proto](#sherlockmodelserviceproto)
  - [DrillHoleModeling](#drillholemodeling)
  - [ExportAEDBRequest](#exportaedbrequest)
  - [ExportFEAModelRequest](#exportfeamodelrequest)
  - [ExportFEAModelRequest.DrillHoleParam](#exportfeamodelrequest.drillholeparam)
  - [ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength](#exportfeamodelrequest.drillholeparam.maxedgelength)
  - [ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter](#exportfeamodelrequest.drillholeparam.minholediameter)
  - [ExportFEAModelRequest.LeadModelParam](#exportfeamodelrequest.leadmodelparam)
  - [ExportFEAModelRequest.LeadModelParam.MaxMeshSize](#exportfeamodelrequest.leadmodelparam.maxmeshsize)
  - [ExportFEAModelRequest.LeadModelParam.VerticalMeshSize](#exportfeamodelrequest.leadmodelparam.verticalmeshsize)
  - [ExportTraceModelRequest](#exporttracemodelrequest)
  - [ExportTraceReinforcementModelRequest](#exporttracereinforcementmodelrequest)
  - [ExportTraceReinforcementModelRequest.TraceDrillHoleParam](#exporttracereinforcementmodelrequest.tracedrillholeparam)
  - [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength](#exporttracereinforcementmodelrequest.tracedrillholeparam.maxedgelength)
  - [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter](#exporttracereinforcementmodelrequest.tracedrillholeparam.minholediameter)
  - [ExportTraceReinforcementModelRequest.TraceParam](#exporttracereinforcementmodelrequest.traceparam)
  - [ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold](#exporttracereinforcementmodelrequest.traceparam.diameterthreshold)
  - [ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam](#exporttracereinforcementmodelrequest.traceparam.minholediameterforshellorbeam)
  - [GenerateTraceModelRequest](#generatetracemodelrequest)
  - [TraceModelExportParams](#tracemodelexportparams)
  - [TraceModelExportParams.PcbMeshPropParam](#tracemodelexportparams.pcbmeshpropparam)
  - [TraceModelExportParams.TracePropParam](#tracemodelexportparams.tracepropparam)

  - [ExportAnalysis](#exportanalysis)
  - [MeshType](#meshtype)
  - [TraceOutputType](#traceoutputtype)

  - [SherlockModelService](#sherlockmodelservice)

- [SherlockPartsService.proto](#sherlockpartsserviceproto)
  - [ExportNetListRequest](#exportnetlistrequest)
  - [ExportPartsListRequest](#exportpartslistrequest)
  - [GetBoardSidesRequest](#getboardsidesrequest)
  - [GetBoardSidesResponse](#getboardsidesresponse)
  - [GetPartLocationRequest](#getpartlocationrequest)
  - [GetPartLocationResponse](#getpartlocationresponse)
  - [GetPartLocationResponse.LocationData](#getpartlocationresponse.locationdata)
  - [GetPartLocationUnitsRequest](#getpartlocationunitsrequest)
  - [GetPartLocationUnitsResponse](#getpartlocationunitsresponse)
  - [ImportPartsListRequest](#importpartslistrequest)
  - [ListPartsLibrariesRequest](#listpartslibrariesrequest)
  - [ListPartsLibrariesResponse](#listpartslibrariesresponse)
  - [ListPartsNotUpdatedRequest](#listpartsnotupdatedrequest)
  - [ListPartsNotUpdatedResponse](#listpartsnotupdatedresponse)
  - [ListPartsNotUpdatedResponse.CCA](#listpartsnotupdatedresponse.cca)
  - [ListPartsNotUpdatedResponse.CCA.Part](#listpartsnotupdatedresponse.cca.part)
  - [UpdateLeadModelingRequest](#updateleadmodelingrequest)
  - [UpdatePartsListFromAVLRequest](#updatepartslistfromavlrequest)
  - [UpdatePartsListFromAVLResponse](#updatepartslistfromavlresponse)
  - [UpdatePartsListPropertiesRequest](#updatepartslistpropertiesrequest)
  - [UpdatePartsListPropertiesRequest.PartProperties](#updatepartslistpropertiesrequest.partproperties)
  - [UpdatePartsListPropertiesRequest.PartProperties.Property](#updatepartslistpropertiesrequest.partproperties.property)
  - [UpdatePartsListPropertiesResponse](#updatepartslistpropertiesresponse)
  - [UpdatePartsListPropertiesResponse.PartPropertyError](#updatepartslistpropertiesresponse.partpropertyerror)
  - [UpdatePartsListRequest](#updatepartslistrequest)
  - [UpdatePartsListResponse](#updatepartslistresponse)
  - [UpdatePartsLocationsByFileRequest](#updatepartslocationsbyfilerequest)
  - [UpdatePartsLocationsByFileResponse](#updatepartslocationsbyfileresponse)
  - [UpdatePartsLocationsRequest](#updatepartslocationsrequest)
  - [UpdatePartsLocationsRequest.PartLocation](#updatepartslocationsrequest.partlocation)
  - [UpdatePartsLocationsResponse](#updatepartslocationsresponse)

  - [AVLDescription](#avldescription)
  - [AVLPartNum](#avlpartnum)
  - [DuplicationMode](#duplicationmode)

  - [SherlockPartsService](#sherlockpartsservice)

- [SherlockProjectService.proto](#sherlockprojectserviceproto)
  - [AddCcaRequest](#addccarequest)
  - [AddProjectRequest](#addprojectrequest)
  - [AddStrainMapRequest](#addstrainmaprequest)
  - [AddStrainMapRequest.StrainMapFile](#addstrainmaprequest.strainmapfile)
  - [AddStrainMapRequest.StrainMapFile.StrainMapImageFile](#addstrainmaprequest.strainmapfile.strainmapimagefile)
  - [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.ImageCoordinate](#addstrainmaprequest.strainmapfile.strainmapimagefile.imagecoordinate)
  - [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendCoordinate](#addstrainmaprequest.strainmapfile.strainmapimagefile.legendcoordinate)
  - [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.NodeCoordinate](#addstrainmaprequest.strainmapfile.strainmapimagefile.nodecoordinate)
  - [AddStrainMapResponse](#addstrainmapresponse)
  - [AddThermalMapRequest](#addthermalmaprequest)
  - [AddThermalMapRequest.AddThermalMap](#addthermalmaprequest.addthermalmap)
  - [AddThermalMapResponse](#addthermalmapresponse)
  - [CCA](#cca)
  - [CreateCcaFromModelingRegionRequest](#createccafrommodelingregionrequest)
  - [CreateCcaFromModelingRegionRequest.CCAFromModelingRegion](#createccafrommodelingregionrequest.ccafrommodelingregion)
  - [DeleteProjectRequest](#deleteprojectrequest)
  - [ExportProjectRequest](#exportprojectrequest)
  - [GenCCAReportRequest](#genccareportrequest)
  - [GenCCAReportResponse](#genccareportresponse)
  - [GenReportRequest](#genreportrequest)
  - [GenReportResponse](#genreportresponse)
  - [ImportIPC2581Request](#importipc2581request)
  - [ImportODBRequest](#importodbrequest)
  - [ImportProjectZipRequest](#importprojectziprequest)
  - [ImportProjectZipSingleModeRequest](#importprojectzipsinglemoderequest)
  - [ListCCAsRequest](#listccasrequest)
  - [ListCCAsResponse](#listccasresponse)
  - [ListCCAsResponse.CCA](#listccasresponse.cca)
  - [ListStrainMapsRequest](#liststrainmapsrequest)
  - [ListStrainMapsResponse](#liststrainmapsresponse)
  - [ListStrainMapsResponse.CcaStrainMap](#liststrainmapsresponse.ccastrainmap)
  - [ListThermalMapsRequest](#listthermalmapsrequest)
  - [ListThermalMapsResponse](#listthermalmapsresponse)
  - [ListThermalMapsResponse.CcaThermalMap](#listthermalmapsresponse.ccathermalmap)
  - [ListThermalMapsResponse.CcaThermalMap.ThermalMap](#listthermalmapsresponse.ccathermalmap.thermalmap)
  - [ThermalMapFile](#thermalmapfile)
  - [ThermalMapFile.CsvExcelFile](#thermalmapfile.csvexcelfile)
  - [ThermalMapFile.ImageFile](#thermalmapfile.imagefile)
  - [ThermalMapFile.ImageFile.ImageCoordinate](#thermalmapfile.imagefile.imagecoordinate)
  - [ThermalMapFile.ImageFile.LegendCoordinate](#thermalmapfile.imagefile.legendcoordinate)
  - [ThermalMapFile.ImageFile.NodeCoordinate](#thermalmapfile.imagefile.nodecoordinate)
  - [UpdateThermalMapRequest](#updatethermalmaprequest)
  - [UpdateThermalMapsResponse](#updatethermalmapsresponse)

  - [FileType](#filetype)
  - [LegendOrientation](#legendorientation)
  - [FileType](#filetype)
  - [LegendOrientation](#legendorientation)
  - [ThermalBoardSide](#thermalboardside)

  - [SherlockProjectService](#sherlockprojectservice)

- [SherlockService.proto](#sherlockserviceproto)
  - [ClientMessage](#clientmessage)
  - [ExportRequest](#exportrequest)
  - [ExportTraceReinforcementRequest](#exporttracereinforcementrequest)
  - [GetCCARequest](#getccarequest)
  - [GetCCAResponse](#getccaresponse)
  - [ImportRequest](#importrequest)
  - [ImportRequest.AnalysisImport](#importrequest.analysisimport)
  - [ImportRequest.AnalysisImport.rst](#importrequest.analysisimport.rst)
  - [ImportRequest.ModelTransform](#importrequest.modeltransform)
  - [OpenProjectRequest](#openprojectrequest)
  - [SaveProjectRequest](#saveprojectrequest)
  - [ServerMessage](#servermessage)
  - [SetWorkingDirRequest](#setworkingdirrequest)

  - [ExportAnalysis](#exportanalysis)
  - [ImportAnalysis](#importanalysis)
  - [DetectTransform](#detecttransform)
  - [Item](#item)
  - [State](#state)

  - [SherlockService](#sherlockservice)

- [SherlockStackupService.proto](#sherlockstackupserviceproto)
  - [GenStackupRequest](#genstackuprequest)
  - [GetLayerCountRequest](#getlayercountrequest)
  - [GetLayerCountResponse](#getlayercountresponse)
  - [GetStackupPropsRequest](#getstackuppropsrequest)
  - [GetStackupPropsResponse](#getstackuppropsresponse)
  - [GetTotalConductorThicknessRequest](#gettotalconductorthicknessrequest)
  - [GetTotalConductorThicknessResponse](#gettotalconductorthicknessresponse)
  - [ListConductorLayersRequest](#listconductorlayersrequest)
  - [ListConductorLayersResponse](#listconductorlayersresponse)
  - [ListConductorLayersResponse.CCAConductorLayerProp](#listconductorlayersresponse.ccaconductorlayerprop)
  - [ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp](#listconductorlayersresponse.ccaconductorlayerprop.conductorlayerprop)
  - [ListConductorMaterialsRequest](#listconductormaterialsrequest)
  - [ListConductorMaterialsResponse](#listconductormaterialsresponse)
  - [ListConstructionStylesRequest](#listconstructionstylesrequest)
  - [ListConstructionStylesResponse](#listconstructionstylesresponse)
  - [ListFiberMaterialsRequest](#listfibermaterialsrequest)
  - [ListFiberMaterialsResponse](#listfibermaterialsresponse)
  - [ListLaminateMaterialsManufacturersRequest](#listlaminatematerialsmanufacturersrequest)
  - [ListLaminateMaterialsManufacturersResponse](#listlaminatematerialsmanufacturersresponse)
  - [ListLaminateMaterialsRequest](#listlaminatematerialsrequest)
  - [ListLaminateMaterialsResponse](#listlaminatematerialsresponse)
  - [ListLaminateMaterialsResponse.ManufacturerMaterials](#listlaminatematerialsresponse.manufacturermaterials)
  - [ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials](#listlaminatematerialsresponse.manufacturermaterials.gradematerials)
  - [ListLaminateThicknessUnitsRequest](#listlaminatethicknessunitsrequest)
  - [ListLaminateThicknessUnitsResponse](#listlaminatethicknessunitsresponse)
  - [ListLaminatesRequest](#listlaminatesrequest)
  - [ListLaminatesResponse](#listlaminatesresponse)
  - [ListLaminatesResponse.CCALaminateProp](#listlaminatesresponse.ccalaminateprop)
  - [ListLaminatesResponse.CCALaminateProp.LaminateProp](#listlaminatesresponse.ccalaminateprop.laminateprop)
  - [ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction](#listlaminatesresponse.ccalaminateprop.laminateprop.glassconstruction)
  - [UpdateConductorLayerRequest](#updateconductorlayerrequest)
  - [UpdateLaminateRequest](#updatelaminaterequest)
  - [UpdateLaminateRequest.GlassConstruction](#updatelaminaterequest.glassconstruction)

  - [SherlockStackupService](#sherlockstackupservice)

- [Scalar Value Types](#scalar-value-types)


Back to [Top](#table-of-contents)

