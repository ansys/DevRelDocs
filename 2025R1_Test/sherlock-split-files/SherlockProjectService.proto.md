# SherlockProjectService.proto

Copyright 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-AddCcaRequest"></a>

## AddCcaRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Name of the project. |
| CCAs | [CCA](#CCA) | repeated | CCAs to add. |






<a name="-AddProjectRequest"></a>

## AddProjectRequest

Request to add a project to Sherlock.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| category | [string](#string) |  | Project category. |
| description | [string](#string) |  | Project description. |






<a name="-AddStrainMapRequest"></a>

## AddStrainMapRequest

Request to add strain map files to CCAs in a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| strainMapFiles | [AddStrainMapRequest.StrainMapFile](#AddStrainMapRequest-StrainMapFile) | repeated | Strain map files and associated properties to be added. |






<a name="-AddStrainMapRequest-StrainMapFile"></a>

## AddStrainMapRequest.StrainMapFile



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

## AddStrainMapRequest.StrainMapFile.StrainMapImageFile



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

## AddStrainMapRequest.StrainMapFile.StrainMapImageFile.ImageCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| imageX | [double](#double) |  | X-coordinate of the upper left corner. |
| imageY | [double](#double) |  | Y-coordinate of the upper left corner. |
| imageH | [double](#double) |  | Height of the image. |
| imageW | [double](#double) |  | Width of the image. |






<a name="-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-LegendCoordinate"></a>

## AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| legendX | [double](#double) |  | X-coordinate of the upper left corner. |
| legendY | [double](#double) |  | Y-coordinate of the upper left corner. |
| legendH | [double](#double) |  | Height of the legend. |
| legendW | [double](#double) |  | Width of the legend. |






<a name="-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-NodeCoordinate"></a>

## AddStrainMapRequest.StrainMapFile.StrainMapImageFile.NodeCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertexX | [double](#double) |  | X-coordinate of the node. |
| vertexY | [double](#double) |  | Y-coordinate of the node. |






<a name="-AddStrainMapResponse"></a>

## AddStrainMapResponse

Response from adding strain map files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-AddThermalMapRequest"></a>

## AddThermalMapRequest

Request to add thermal map files to a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalMapFiles | [AddThermalMapRequest.AddThermalMap](#AddThermalMapRequest-AddThermalMap) | repeated | Thermal map files and associated properties to be added. |






<a name="-AddThermalMapRequest-AddThermalMap"></a>

## AddThermalMapRequest.AddThermalMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| thermalMapFile | [string](#string) |  | Full path to the thermal map file to be added. |
| thermalMapFileProperties | [ThermalMapFile](#ThermalMapFile) |  | Thermal map file properties. |






<a name="-AddThermalMapResponse"></a>

## AddThermalMapResponse

Response from adding thermal map files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |






<a name="-CCA"></a>

## CCA



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

## CreateCcaFromModelingRegionRequest

Request for creating CCA from a specified modeling region.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cCAsFromModelingRegions | [CreateCcaFromModelingRegionRequest.CCAFromModelingRegion](#CreateCcaFromModelingRegionRequest-CCAFromModelingRegion) | repeated | CCAs from modeling regions to add. |






<a name="-CreateCcaFromModelingRegionRequest-CCAFromModelingRegion"></a>

## CreateCcaFromModelingRegionRequest.CCAFromModelingRegion

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

## DeleteProjectRequest

Request for deleting project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name of project to be deleted. |






<a name="-ExportProjectRequest"></a>

## ExportProjectRequest

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

## GenCCAReportRequest

Request for project CCA report.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) |  | Project CCA name. |
| author | [string](#string) |  | Name of the author who generates the report. |
| company | [string](#string) |  | Name of author&#39;s company. |






<a name="-GenCCAReportResponse"></a>

## GenCCAReportResponse

Streams the project CCA report in chunks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | A chunk of the project CCA report being returned in increments. |
| size | [int32](#int32) |  | Size of the chunk returned. |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |






<a name="-GenReportRequest"></a>

## GenReportRequest

Request for project report.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| author | [string](#string) |  | Name of the author who generates the report. |
| company | [string](#string) |  | Name of author&#39;s company. |






<a name="-GenReportResponse"></a>

## GenReportResponse

Streams the project report in chunks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | A chunk of the project report being returned in increments. |
| size | [int32](#int32) |  | Size of the chunk returned. |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |






<a name="-ImportIPC2581Request"></a>

## ImportIPC2581Request

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

## ImportODBRequest

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

## ImportProjectZipRequest

Request for importing a .zip project archive when Sherlock is in multiple project mode.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| category | [string](#string) |  | Sherlock project category. |
| archiveFile | [string](#string) |  | Full path to the .zip archive file containing the project data. |






<a name="-ImportProjectZipSingleModeRequest"></a>

## ImportProjectZipSingleModeRequest

Request for importing a .zip project archive when Sherlock is in single project mode.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| projZipRequest | [ImportProjectZipRequest](#ImportProjectZipRequest) |  | Encapsulates project name, category and full path to project .zip archive. |
| destFileDir | [string](#string) |  | Directory in which the Sherlock project folder will be created. |






<a name="-ListCCAsRequest"></a>

## ListCCAsRequest

Request to list CCA&#39;s and sub-assembly CCA&#39;s for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to return. |






<a name="-ListCCAsResponse"></a>

## ListCCAsResponse

Represents the circuit cards, their properties, and sub-assemblies for a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccas | [ListCCAsResponse.CCA](#ListCCAsResponse-CCA) | repeated | CCA&#39;s assigned to the project. |






<a name="-ListCCAsResponse-CCA"></a>

## ListCCAsResponse.CCA



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| subAssemblies | [ListCCAsResponse.CCA](#ListCCAsResponse-CCA) | repeated | Sub-assemblies assigned to the CCA. |






<a name="-ListStrainMapsRequest"></a>

## ListStrainMapsRequest

Request to list CCA strain maps for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to list strain maps for. |






<a name="-ListStrainMapsResponse"></a>

## ListStrainMapsResponse

Lists the strain maps assigned to the project CCA&#39;s.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of errors encountered. |
| ccaStrainMaps | [ListStrainMapsResponse.CcaStrainMap](#ListStrainMapsResponse-CcaStrainMap) | repeated | CCA strain maps assigned to the project. |






<a name="-ListStrainMapsResponse-CcaStrainMap"></a>

## ListStrainMapsResponse.CcaStrainMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| strainMaps | [string](#string) | repeated | Strain map names assigned to the CCA. |






<a name="-ListThermalMapsRequest"></a>

## ListThermalMapsRequest

Request to list Thermal map files and their types for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to list thermal maps for. |






<a name="-ListThermalMapsResponse"></a>

## ListThermalMapsResponse

Represents the thermal map files and their types for a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of errors encountered. |
| ccaThermalMaps | [ListThermalMapsResponse.CcaThermalMap](#ListThermalMapsResponse-CcaThermalMap) | repeated | CCA thermal map files assigned to the project. |






<a name="-ListThermalMapsResponse-CcaThermalMap"></a>

## ListThermalMapsResponse.CcaThermalMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Project CCA name. |
| thermalMaps | [ListThermalMapsResponse.CcaThermalMap.ThermalMap](#ListThermalMapsResponse-CcaThermalMap-ThermalMap) | repeated | Thermal map files assigned to the CCA. |






<a name="-ListThermalMapsResponse-CcaThermalMap-ThermalMap"></a>

## ListThermalMapsResponse.CcaThermalMap.ThermalMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileName | [string](#string) |  | Name of the Thermal Map file. |
| fileType | [string](#string) |  | Thermal map file type. Possible values are: &#34;Icepak Thermal Map (TMAP)&#34;, &#34;Thermal Map (CSV)&#34;, &#34;Thermal Map (Excel)&#34;, &#34;Thermal Map (Image)&#34;. |






<a name="-ThermalMapFile"></a>

## ThermalMapFile



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

## ThermalMapFile.CsvExcelFile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| headerRowCount | [int32](#int32) |  | Number of rows before the column header in the file. |
| referenceIDColumn | [string](#string) |  | Reference ID column. |
| temperatureColumn | [string](#string) |  | Temperature column. |
| temperatureUnits | [string](#string) |  | Units for temperature values. |
| numericFormat | [string](#string) |  | Numeric format for values. |






<a name="-ThermalMapFile-ImageFile"></a>

## ThermalMapFile.ImageFile



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

## ThermalMapFile.ImageFile.ImageCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| imageX | [double](#double) |  | X-coordinate of the upper left corner. |
| imageY | [double](#double) |  | Y-coordinate of the upper left corner. |
| imageH | [double](#double) |  | Height of the image. |
| imageW | [double](#double) |  | Width of the image. |






<a name="-ThermalMapFile-ImageFile-LegendCoordinate"></a>

## ThermalMapFile.ImageFile.LegendCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| legendX | [double](#double) |  | X-coordinate of the upper left corner. |
| legendY | [double](#double) |  | Y-coordinate of the upper left corner. |
| legendH | [double](#double) |  | Height of the legend. |
| legendW | [double](#double) |  | Width of the legend. |






<a name="-ThermalMapFile-ImageFile-NodeCoordinate"></a>

## ThermalMapFile.ImageFile.NodeCoordinate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertexX | [double](#double) |  | X-coordinate of the node. |
| vertexY | [double](#double) |  | Y-coordinate of the node. |






<a name="-UpdateThermalMapRequest"></a>

## UpdateThermalMapRequest

Request to update thermal map files to a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalMapFiles | [ThermalMapFile](#ThermalMapFile) | repeated | Thermal Map files. |






<a name="-UpdateThermalMapsResponse"></a>

## UpdateThermalMapsResponse

Response from updating thermal map files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |





 


<a name="-AddStrainMapRequest-StrainMapFile-FileType"></a>

## AddStrainMapRequest.StrainMapFile.FileType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CSV | 0 | Csv file. |
| Excel | 1 | Excel file. |
| Image | 2 | Image file. |



<a name="-AddStrainMapRequest-StrainMapFile-StrainMapImageFile-LegendOrientation"></a>

## AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendOrientation


| Name | Number | Description |
| ---- | ------ | ----------- |
| Horizontal | 0 | Horizontal legend orientation. |
| Vertical | 1 | Vertical legend orientation. |



<a name="-ThermalMapFile-FileType"></a>

## ThermalMapFile.FileType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CSV | 0 | Csv file. |
| Excel | 1 | Excel file. |
| Image | 2 | Image file. |
| TMAP | 3 | Icepack file. |



<a name="-ThermalMapFile-ImageFile-LegendOrientation"></a>

## ThermalMapFile.ImageFile.LegendOrientation


| Name | Number | Description |
| ---- | ------ | ----------- |
| Horizontal | 0 | Horizontal legend orientation. |
| Vertical | 1 | Vertical legend orientation. |



<a name="-ThermalMapFile-ThermalBoardSide"></a>

## ThermalMapFile.ThermalBoardSide


| Name | Number | Description |
| ---- | ------ | ----------- |
| Bottom | 0 | Bottom side of the board. |
| Both | 1 | Both sides of the board. |
| Top | 2 | Top side of the board. |


 

 


<a name="-SherlockProjectService"></a>

## SherlockProjectService


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

