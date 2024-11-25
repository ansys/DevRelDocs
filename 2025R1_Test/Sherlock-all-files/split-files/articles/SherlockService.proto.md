# SherlockService.proto

Copyright 2020-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

The APIs in this service should only be used for Sherlock integration with Workbench.


<a name="-ClientMessage"></a>

## ClientMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| clientMessage | [string](#string) |  | Incoming message from Workbench in bi-directional stream. |






<a name="-ExportRequest"></a>

## ExportRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportCcaName | [string](#string) |  | CCA name. |
| destGeometryFile | [string](#string) |  | Destination directory for exported geometry and materials. |
| systemName | [string](#string) |  | gRPC system name. |
| componentName | [string](#string) |  | gRPC component name. |
| analysis | [ExportRequest.ExportAnalysis](#ExportRequest-ExportAnalysis) |  | Type of analysis to export. |






<a name="-ExportTraceReinforcementRequest"></a>

## ExportTraceReinforcementRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportCcaName | [string](#string) |  | Name of CCA. |
| destGeometryFile | [string](#string) |  | Destination directory for geometry files. |
| systemName | [string](#string) |  | gRPC system name. |
| componentName | [string](#string) |  | gRPC component name. |






<a name="-GetCCARequest"></a>

## GetCCARequest







<a name="-GetCCAResponse"></a>

## GetCCAResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccaNames | [string](#string) | repeated | List of CCA names for a specified project. |






<a name="-ImportRequest"></a>

## ImportRequest



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

## ImportRequest.AnalysisImport



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of CCA. |
| analysis | [ImportRequest.ImportAnalysis](#ImportRequest-ImportAnalysis) |  | Type of analysis result. |
| rsts | [ImportRequest.AnalysisImport.rst](#ImportRequest-AnalysisImport-rst) | repeated | List of results file to import. |
| modelTransform | [ImportRequest.ModelTransform](#ImportRequest-ModelTransform) |  | Model transformation info for the imported analysis results. |






<a name="-ImportRequest-AnalysisImport-rst"></a>

## ImportRequest.AnalysisImport.rst



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resultFile | [string](#string) |  | Results file to import. |
| modalResultFile | [string](#string) |  | Modal results file to import. |
| phaseName | [string](#string) |  | The life cycle phase of the event associated with the results file. |
| eventName | [string](#string) |  | The life cycle event associated with the results file. |






<a name="-ImportRequest-ModelTransform"></a>

## ImportRequest.ModelTransform

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

## OpenProjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directory | [string](#string) |  | Directory location of the project to open. |






<a name="-SaveProjectRequest"></a>

## SaveProjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directory | [string](#string) |  | Directory location where the project is to be saved. |






<a name="-ServerMessage"></a>

## ServerMessage

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

## SetWorkingDirRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directory | [string](#string) |  | Path to set as working directory location for Sherlock projects. |





 


<a name="-ExportRequest-ExportAnalysis"></a>

## ExportRequest.ExportAnalysis


| Name | Number | Description |
| ---- | ------ | ----------- |
| NF | 0 | Natural Frequency analysis type. |
| HV | 1 | Harmonic Vibe analysis type. |
| ICT | 2 | ICT Analysis type. |
| SH | 3 | Mechanical Shock analysis type.` |
| RV | 4 | Random Vibe analysis type. |



<a name="-ImportRequest-ImportAnalysis"></a>

## ImportRequest.ImportAnalysis


| Name | Number | Description |
| ---- | ------ | ----------- |
| NaturalFreq | 0 | Natural Frequency result type. |
| HarmonicVibe | 1 | Harmonic Vibe result type. |
| ICTAnalysis | 2 | ICT Analysis result type. |
| MechanicalShock | 3 | Mechanical Shock result type. |
| RandomVibe | 4 | Random Vibe result type. |



<a name="-ImportRequest-ModelTransform-DetectTransform"></a>

## ImportRequest.ModelTransform.DetectTransform


| Name | Number | Description |
| ---- | ------ | ----------- |
| DISABLED | 0 | No model transformation is performed. |
| ENABLED | 1 | Sherlock automatically detects the model transformation. |
| MANUAL | 2 | User provides model transformation parameters. |



<a name="-ServerMessage-Item"></a>

## ServerMessage.Item


| Name | Number | Description |
| ---- | ------ | ----------- |
| Project | 0 | Project = WB/Mech Model Change. |
| Setup | 1 | Setup = Sherlock Pre. |
| LifePrediction | 2 | Life Prediction = Sherlock Post Change. |



<a name="-ServerMessage-State"></a>

## ServerMessage.State


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

## SherlockService


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

