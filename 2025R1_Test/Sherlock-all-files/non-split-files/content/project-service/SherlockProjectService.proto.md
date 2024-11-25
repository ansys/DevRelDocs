# SherlockProjectService.proto

Copyright 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

## AddCcaRequest




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Name of the project. |
| CCAs | [CCA](#cca) | repeated | CCAs to add. |

## AddProjectRequest

Request to add a project to Sherlock.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| category | [string](#string) |  | Project category. |
| description | [string](#string) |  | Project description. |

## AddStrainMapRequest

Request to add strain map files to CCAs in a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| strainMapFiles | [AddStrainMapRequest.StrainMapFile](#addstrainmaprequest.strainmapfile) | repeated | Strain map files and associated properties to be added. |

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
| fileType | [AddStrainMapRequest.StrainMapFile.FileType](#addstrainmaprequest.strainmapfile.filetype) |  | Type of the strain map file. |
| imageFile | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile](#addstrainmaprequest.strainmapfile.strainmapimagefile) |  | Image strain map file properties. |

## AddStrainMapRequest.StrainMapFile.StrainMapImageFile




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| coordinateUnits | [string](#string) |  | Coordinate units used for board, lengend and image boundaries. |
| boardBounds | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.NodeCoordinate](#addstrainmaprequest.strainmapfile.strainmapimagefile.nodecoordinate) | repeated | Coordinates of the nodes which make up the board outline. |
| imageBounds | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.ImageCoordinate](#addstrainmaprequest.strainmapfile.strainmapimagefile.imagecoordinate) |  | Coordinates of the board bounds within the image. |
| legendBounds | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendCoordinate](#addstrainmaprequest.strainmapfile.strainmapimagefile.legendcoordinate) |  | Coordinates of the bounds of legend within the image. |
| legendOrientation | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendOrientation](#addstrainmaprequest.strainmapfile.strainmapimagefile.legendorientation) |  | Specify the legend orientation. |
| minStrain | [double](#double) |  | Minimum strain value. |
| maxStrain | [double](#double) |  | Maximum strain value. |
| strainUnits | [string](#string) |  | Units for minimum and maximum strain values. |

## AddStrainMapRequest.StrainMapFile.StrainMapImageFile.ImageCoordinate




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| imageX | [double](#double) |  | X-coordinate of the upper left corner. |
| imageY | [double](#double) |  | Y-coordinate of the upper left corner. |
| imageH | [double](#double) |  | Height of the image. |
| imageW | [double](#double) |  | Width of the image. |

## AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendCoordinate




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| legendX | [double](#double) |  | X-coordinate of the upper left corner. |
| legendY | [double](#double) |  | Y-coordinate of the upper left corner. |
| legendH | [double](#double) |  | Height of the legend. |
| legendW | [double](#double) |  | Width of the legend. |

## AddStrainMapRequest.StrainMapFile.StrainMapImageFile.NodeCoordinate




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertexX | [double](#double) |  | X-coordinate of the node. |
| vertexY | [double](#double) |  | Y-coordinate of the node. |

## AddStrainMapResponse

Response from adding strain map files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

## AddThermalMapRequest

Request to add thermal map files to a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalMapFiles | [AddThermalMapRequest.AddThermalMap](#addthermalmaprequest.addthermalmap) | repeated | Thermal map files and associated properties to be added. |

## AddThermalMapRequest.AddThermalMap




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| thermalMapFile | [string](#string) |  | Full path to the thermal map file to be added. |
| thermalMapFileProperties | [ThermalMapFile](#thermalmapfile) |  | Thermal map file properties. |

## AddThermalMapResponse

Response from adding thermal map files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

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

## CreateCcaFromModelingRegionRequest

Request for creating CCA from a specified modeling region.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cCAsFromModelingRegions | [CreateCcaFromModelingRegionRequest.CCAFromModelingRegion](#createccafrommodelingregionrequest.ccafrommodelingregion) | repeated | CCAs from modeling regions to add. |

## CreateCcaFromModelingRegionRequest.CCAFromModelingRegion

Request for each individual property of cca


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Project CCA name. |
| modelingRegionID | [string](#string) |  | ID of CCA's modeling region used to create new CCA. |
| description | [string](#string) |  | CCA's description. |
| defaultSolderType | [string](#string) | optional | Default solder type. |
| defaultStencilThickness | [double](#double) | optional | Default stencil thickness. |
| defaultStencilThicknessUnits | [string](#string) | optional | Default stencil thickness units. |
| defaultPartTempRise | [double](#double) | optional | Default part temp rise. |
| defaultPartTempRiseUnits | [string](#string) | optional | Default part temp rise units. |
| guessPartProperties | [bool](#bool) | optional | Whether to enable guess part properties. |
| generateImageLayers | [bool](#bool) | optional | Whether to generate image layers |

## DeleteProjectRequest

Request for deleting project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name of project to be deleted. |

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
| exportFileName | [string](#string) |  | Name of the zip file containing the project's exported data. |
| overwriteExistingFile | [bool](#bool) |  | If true, an existing file will be overwritten. |

## GenCCAReportRequest

Request for project CCA report.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) |  | Project CCA name. |
| author | [string](#string) |  | Name of the author who generates the report. |
| company | [string](#string) |  | Name of author's company. |

## GenCCAReportResponse

Streams the project CCA report in chunks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | A chunk of the project CCA report being returned in increments. |
| size | [int32](#int32) |  | Size of the chunk returned. |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |

## GenReportRequest

Request for project report.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| author | [string](#string) |  | Name of the author who generates the report. |
| company | [string](#string) |  | Name of author's company. |

## GenReportResponse

Streams the project report in chunks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | A chunk of the project report being returned in increments. |
| size | [int32](#int32) |  | Size of the chunk returned. |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |

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

## ImportODBRequest

Request for importing an ODB++ archive.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| archiveFile | [string](#string) |  | Full path to the ODB++ archive file to be imported. |
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

## ImportProjectZipRequest

Request for importing a .zip project archive when Sherlock is in multiple project mode.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| category | [string](#string) |  | Sherlock project category. |
| archiveFile | [string](#string) |  | Full path to the .zip archive file containing the project data. |

## ImportProjectZipSingleModeRequest

Request for importing a .zip project archive when Sherlock is in single project mode.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| projZipRequest | [ImportProjectZipRequest](#importprojectziprequest) |  | Encapsulates project name, category and full path to project .zip archive. |
| destFileDir | [string](#string) |  | Directory in which the Sherlock project folder will be created. |

## ListCCAsRequest

Request to list CCA's and sub-assembly CCA's for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to return. |

## ListCCAsResponse

Represents the circuit cards, their properties, and sub-assemblies for a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| ccas | [ListCCAsResponse.CCA](#listccasresponse.cca) | repeated | CCA's assigned to the project. |

## ListCCAsResponse.CCA




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| subAssemblies | [ListCCAsResponse.CCA](#listccasresponse.cca) | repeated | Sub-assemblies assigned to the CCA. |

## ListStrainMapsRequest

Request to list CCA strain maps for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to list strain maps for. |

## ListStrainMapsResponse

Lists the strain maps assigned to the project CCA's.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of errors encountered. |
| ccaStrainMaps | [ListStrainMapsResponse.CcaStrainMap](#liststrainmapsresponse.ccastrainmap) | repeated | CCA strain maps assigned to the project. |

## ListStrainMapsResponse.CcaStrainMap




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| strainMaps | [string](#string) | repeated | Strain map names assigned to the CCA. |

## ListThermalMapsRequest

Request to list Thermal map files and their types for a project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to list thermal maps for. |

## ListThermalMapsResponse

Represents the thermal map files and their types for a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of errors encountered. |
| ccaThermalMaps | [ListThermalMapsResponse.CcaThermalMap](#listthermalmapsresponse.ccathermalmap) | repeated | CCA thermal map files assigned to the project. |

## ListThermalMapsResponse.CcaThermalMap




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Project CCA name. |
| thermalMaps | [ListThermalMapsResponse.CcaThermalMap.ThermalMap](#listthermalmapsresponse.ccathermalmap.thermalmap) | repeated | Thermal map files assigned to the CCA. |

## ListThermalMapsResponse.CcaThermalMap.ThermalMap




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileName | [string](#string) |  | Name of the Thermal Map file. |
| fileType | [string](#string) |  | Thermal map file type. Possible values are: "Icepak Thermal Map (TMAP)", "Thermal Map (CSV)", "Thermal Map (Excel)", "Thermal Map (Image)". |

## ThermalMapFile




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileName | [string](#string) |  | The name of the thermal file to update. |
| fileType | [ThermalMapFile.FileType](#thermalmapfile.filetype) |  | Thermal file type. |
| fileComment | [string](#string) |  | Include a comment or description for the file. |
| thermalBoardSide | [ThermalMapFile.ThermalBoardSide](#thermalmapfile.thermalboardside) |  | Thermal board side. |
| csvExcelFile | [ThermalMapFile.CsvExcelFile](#thermalmapfile.csvexcelfile) |  | Used to CSV and Excel files. |
| imageFile | [ThermalMapFile.ImageFile](#thermalmapfile.imagefile) |  | Used to add properties to Image files. |
| thermalProfiles | [string](#string) | repeated | List of thermal profiles. |
| cca | [string](#string) | repeated | Project CCA Name. |

## ThermalMapFile.CsvExcelFile




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| headerRowCount | [int32](#int32) |  | Number of rows before the column header in the file. |
| referenceIDColumn | [string](#string) |  | Reference ID column. |
| temperatureColumn | [string](#string) |  | Temperature column. |
| temperatureUnits | [string](#string) |  | Units for temperature values. |
| numericFormat | [string](#string) |  | Numeric format for values. |

## ThermalMapFile.ImageFile




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| coordinateUnits | [string](#string) |  | Coordinate units used for board, lengend and image boundaries. |
| boardBounds | [ThermalMapFile.ImageFile.NodeCoordinate](#thermalmapfile.imagefile.nodecoordinate) | repeated | Coordinates of the nodes which make up the board outline. |
| imageBounds | [ThermalMapFile.ImageFile.ImageCoordinate](#thermalmapfile.imagefile.imagecoordinate) |  | Coordinates of the board bounds within the image. |
| legendBounds | [ThermalMapFile.ImageFile.LegendCoordinate](#thermalmapfile.imagefile.legendcoordinate) |  | Coordinates of the bounds of legend within the image. |
| legendOrientation | [ThermalMapFile.ImageFile.LegendOrientation](#thermalmapfile.imagefile.legendorientation) |  | Specify the legend orientation. |
| minTemperature | [double](#double) |  | Minimum temperature value. |
| minTemperatureUnits | [string](#string) |  | Units for minimum temperature value. |
| maxTemperature | [double](#double) |  | Maximum temperature value. |
| maxTemperatureUnits | [string](#string) |  | Units for maximum temperature value. |

## ThermalMapFile.ImageFile.ImageCoordinate




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| imageX | [double](#double) |  | X-coordinate of the upper left corner. |
| imageY | [double](#double) |  | Y-coordinate of the upper left corner. |
| imageH | [double](#double) |  | Height of the image. |
| imageW | [double](#double) |  | Width of the image. |

## ThermalMapFile.ImageFile.LegendCoordinate




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| legendX | [double](#double) |  | X-coordinate of the upper left corner. |
| legendY | [double](#double) |  | Y-coordinate of the upper left corner. |
| legendH | [double](#double) |  | Height of the legend. |
| legendW | [double](#double) |  | Width of the legend. |

## ThermalMapFile.ImageFile.NodeCoordinate




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertexX | [double](#double) |  | X-coordinate of the node. |
| vertexY | [double](#double) |  | Y-coordinate of the node. |

## UpdateThermalMapRequest

Request to update thermal map files to a Sherlock project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalMapFiles | [ThermalMapFile](#thermalmapfile) | repeated | Thermal Map files. |

## UpdateThermalMapsResponse

Response from updating thermal map files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |


## FileType



| Name | Number | Description |
| ---- | ------ | ----------- |
| CSV | 0 | Csv file. |
| Excel | 1 | Excel file. |
| Image | 2 | Image file. |

## LegendOrientation



| Name | Number | Description |
| ---- | ------ | ----------- |
| Horizontal | 0 | Horizontal legend orientation. |
| Vertical | 1 | Vertical legend orientation. |

## FileType



| Name | Number | Description |
| ---- | ------ | ----------- |
| CSV | 0 | Csv file. |
| Excel | 1 | Excel file. |
| Image | 2 | Image file. |
| TMAP | 3 | Icepack file. |

## LegendOrientation



| Name | Number | Description |
| ---- | ------ | ----------- |
| Horizontal | 0 | Horizontal legend orientation. |
| Vertical | 1 | Vertical legend orientation. |

## ThermalBoardSide



| Name | Number | Description |
| ---- | ------ | ----------- |
| Bottom | 0 | Bottom side of the board. |
| Both | 1 | Both sides of the board. |
| Top | 2 | Top side of the board. |


## SherlockProjectService



| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| genReport | [.GenReportRequest](#genreportrequest) | [.GenReportResponse](#genreportresponse) stream | Generates the project report and return it via streaming. |
| genCCAReport | [.GenCCAReportRequest](#genccareportrequest) | [.GenCCAReportResponse](#genccareportresponse) stream | Generates the project CCA report and return it via streaming. |
| importODBArchive | [.ImportODBRequest](#importodbrequest) | [.ReturnCode](#returncode) | Imports an ODB++ archive. |
| importIPC2581Archive | [.ImportIPC2581Request](#importipc2581request) | [.ReturnCode](#returncode) | Imports an IPC-2581 archive. |
| importProjectZipArchive | [.ImportProjectZipRequest](#importprojectziprequest) | [.ReturnCode](#returncode) | Imports a zipped project archive -- multiple project mode. |
| importProjectZipArchiveSingleMode | [.ImportProjectZipSingleModeRequest](#importprojectzipsinglemoderequest) | [.ReturnCode](#returncode) | Imports a zipped project archive -- single project mode. |
| deleteProject | [.DeleteProjectRequest](#deleteprojectrequest) | [.ReturnCode](#returncode) | Delete a project from Sherlock. |
| addStrainMap | [.AddStrainMapRequest](#addstrainmaprequest) | [.AddStrainMapResponse](#addstrainmapresponse) | Add a strain map files to a Sherlock project. |
| listStrainMaps | [.ListStrainMapsRequest](#liststrainmapsrequest) | [.ListStrainMapsResponse](#liststrainmapsresponse) | Returns a list of circuit cards and their assigned strain maps for a given Sherlock project. |
| listCCAs | [.ListCCAsRequest](#listccasrequest) | [.ListCCAsResponse](#listccasresponse) | Returns a list of circuit cards, their properties, and sub-assemblies for a given Sherlock project. |
| addProject | [.AddProjectRequest](#addprojectrequest) | [.ReturnCode](#returncode) | Add a project to Sherlock. |
| addCCA | [.AddCcaRequest](#addccarequest) | [.ReturnCode](#returncode) | Creates a new circuit card assembly. |
| listThermalMaps | [.ListThermalMapsRequest](#listthermalmapsrequest) | [.ListThermalMapsResponse](#listthermalmapsresponse) | Returns a list of thermal map files and their types for a given Sherlock project. |
| updateThermalMaps | [.UpdateThermalMapRequest](#updatethermalmaprequest) | [.UpdateThermalMapsResponse](#updatethermalmapsresponse) | Update thermal map files to a Sherlock project. |
| addThermalMaps | [.AddThermalMapRequest](#addthermalmaprequest) | [.AddThermalMapResponse](#addthermalmapresponse) | Add a thermal map to a Sherlock project. |
| exportProject | [.ExportProjectRequest](#exportprojectrequest) | [.ReturnCode](#returncode) | Exports project to a zipped archive file. |
| createCCAFromModelingRegion | [.CreateCcaFromModelingRegionRequest](#createccafrommodelingregionrequest) | [.ReturnCode](#returncode) | Creates a CCA from a given modeling region |


Back to [Top](#table-of-contents)

