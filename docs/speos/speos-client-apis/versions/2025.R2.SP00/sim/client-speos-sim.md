# SpeosSim

## Command

This section details all commands of the Speos Sim client API.

### Static method

This section lists all static methods.

Name | Description | Syntax
--- | --- | ---
SetActiveSelection | Set the active selection from a collection of DocObjects | `void SetActiveSelection(ICollection<object> selectedObjects)`
GetSpeosObjectsInActivePart | Get the Speos objects contained in the active Part | `IEnumerable<object> GetSpeosObjectsInActivePart()`
GetErrorStatus | Get the error status of the given object | `string GetErrorStatus(object docObject)`
IsUpToDate | Ask if the given object was modified since its last successful computation | `bool IsUpToDate(object docObject)`
Compute | Perform the computation of an array of objects | `void Compute(System.Object[] selectedObjects)`
Compute | Perform the computation of an array of DocObjects | `void Compute(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Compute | Perform the computation of an array of script objects | `void Compute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
ComputeOnActiveSelection | Perform the computation of the active selection | `void ComputeOnActiveSelection()`
HpcCompute | Perform the HPC computation of an array of objects | `void HpcCompute(System.Object[] selectedObjects)`
HpcCompute | Perform the HPC computation of an array of DocObjects | `void HpcCompute(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
HpcCompute | Perform the HPC computation of an array of script objects | `void HpcCompute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
HpcComputeOnActiveSelection | Perform the HPC computation of the active selection | `void HpcComputeOnActiveSelection()`
GpuCompute | Perform the GPU computation of an array of objects | `void GpuCompute(System.Object[] selectedObjects)`
GpuCompute | Perform the GPU computation of an array of DocObjects | `void GpuCompute(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
GpuCompute | Perform the GPU computation of an array of script objects | `void GpuCompute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
GpuComputeOnActiveSelection | Perform the GPU computation of the active selection | `void GpuComputeOnActiveSelection()`
PreviewCompute | Perform the Preview computation of an array of objects | `void PreviewCompute(System.Object[] selectedObjects)`
PreviewCompute | Perform the Preview computation of an array of DocObjects | `void PreviewCompute(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
PreviewCompute | Perform the Preview computation of an array of script objects | `void PreviewCompute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
PreviewComputeOnActiveSelection | Perform the Preview computation of the active selection | `void PreviewComputeOnActiveSelection()`
GetOutputFolder | Get the Speos output files directory path for the active context | `string GetOutputFolder()`
GetInputFolder | Get the Speos input files directory path for the active context | `string GetInputFolder()`
ImportGltf | Imports the specified glTF file | `void ImportGltf(string path)`
ImportGltf | Imports the specified glTF files | `void ImportGltf(System.String[] paths)`
ExportFileReferences | Export all Speos file references found in the active document to an Excel file (.xlsx). | `void ExportFileReferences(string xlsxFilePath)`

## Coefficient

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
Index | Number attribute | `int Index`
IndexText | Number attribute (as text) | `string IndexText`
Value | Number attribute | `double Value`
ValueText | Number attribute (as text) | `string ValueText`

## Component

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.Component> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.Component Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## Component3DTexture

### Method

Name | Description | Syntax
--- | --- | ---
Export | Export to STL | `void Export(string fileName)`
Export | Export to STL | `void Export(string fileName, bool performBooleanOperation)`
GetGeometrySettings | Get the geometry settings (meshing behavior) | `SpeosSim.SimulationSettings GetGeometrySettings()`
SetGeometrySettings | Set the geometry settings (meshing behavior) | `void SetGeometrySettings(SpeosSim.SimulationSettings simulationSettings)`
Clone | Create a copy of this object in the active context | `SpeosSim.Component3DTexture Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.Component3DTexture CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.Component3DTexture> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.Component3DTexture Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.Component3DTexture Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.Component3DTexture Create()`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
SupportGeometry | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureSupportGeometry SupportGeometry`
PatternFile | File attribute | `string PatternFile`
PatternFileFullPath | File attribute (absolute full path) | `string PatternFileFullPath`
PatternGlobalScale | Number attribute | `double PatternGlobalScale`
PatternGlobalScaleText | Number attribute (as text) | `string PatternGlobalScaleText`
OperationType | Enum attribute | `SpeosSim.Component3DTexture.EnumOperationType OperationType`
OperationTypeIndex | Enum attribute (as index) | `int OperationTypeIndex`
MappingType | Enum attribute | `SpeosSim.Component3DTexture.EnumMappingType MappingType`
MappingTypeIndex | Enum attribute (as index) | `int MappingTypeIndex`
MappingFile | File attribute | `string MappingFile`
MappingFileFullPath | File attribute (absolute full path) | `string MappingFileFullPath`
PatternStepX | Number attribute | `double PatternStepX`
PatternStepXText | Number attribute (as text) | `string PatternStepXText`
PatternStepY | Number attribute | `double PatternStepY`
PatternStepYText | Number attribute (as text) | `string PatternStepYText`
RadialDistance | Number attribute | `double RadialDistance`
RadialDistanceText | Number attribute (as text) | `string RadialDistanceText`
AreaRadius | Number attribute | `double AreaRadius`
AreaRadiusText | Number attribute (as text) | `string AreaRadiusText`
DistanceBetweenRings | Number attribute | `double DistanceBetweenRings`
DistanceBetweenRingsText | Number attribute (as text) | `string DistanceBetweenRingsText`
HexagonWidthX | Number attribute | `double HexagonWidthX`
HexagonWidthXText | Number attribute (as text) | `string HexagonWidthXText`
EdgeLengthX | Number attribute | `double EdgeLengthX`
EdgeLengthXText | Number attribute (as text) | `string EdgeLengthXText`
HexagonDistanceX | Number attribute | `double HexagonDistanceX`
HexagonDistanceXText | Number attribute (as text) | `string HexagonDistanceXText`
HexagonHeightY | Number attribute | `double HexagonHeightY`
HexagonHeightYText | Number attribute (as text) | `string HexagonHeightYText`
CentralPoint | boolean attribute | `bool CentralPoint`
RegularMapping | boolean attribute | `bool RegularMapping`
XPitchCurve | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureXPitchCurve XPitchCurve`
VarPitchXScale | Number attribute | `double VarPitchXScale`
VarPitchXScaleText | Number attribute (as text) | `string VarPitchXScaleText`
YPitchCurve | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureYPitchCurve YPitchCurve`
VarPitchYScale | Number attribute | `double VarPitchYScale`
VarPitchYScaleText | Number attribute (as text) | `string VarPitchYScaleText`
AreaLengthX | Number attribute | `double AreaLengthX`
AreaLengthXText | Number attribute (as text) | `string AreaLengthXText`
AreaLengthY | Number attribute | `double AreaLengthY`
AreaLengthYText | Number attribute (as text) | `string AreaLengthYText`
AngleX | Number attribute | `double AngleX`
AngleXText | Number attribute (as text) | `string AngleXText`
AngleY | Number attribute | `double AngleY`
AngleYText | Number attribute (as text) | `string AngleYText`
LimitingSurface | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureLimitingSurface LimitingSurface`
OffsetSurface | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureOffsetSurface OffsetSurface`
OffsetSurfaceScale | Number attribute | `double OffsetSurfaceScale`
OffsetSurfaceScaleText | Number attribute (as text) | `string OffsetSurfaceScaleText`
PatternDirectionType | Enum attribute | `SpeosSim.Component3DTexture.EnumPatternDirectionType PatternDirectionType`
PatternDirectionTypeIndex | Enum attribute (as index) | `int PatternDirectionTypeIndex`
XScaleSurface | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureXScaleSurface XScaleSurface`
PatternXScale | Number attribute | `double PatternXScale`
PatternXScaleText | Number attribute (as text) | `string PatternXScaleText`
YScaleSurface | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureYScaleSurface YScaleSurface`
PatternYScale | Number attribute | `double PatternYScale`
PatternYScaleText | Number attribute (as text) | `string PatternYScaleText`
ZScaleSurface | Link attribute | `SpeosSim.Component3DTexture.Component3DTextureZScaleSurface ZScaleSurface`
PatternZScale | Number attribute | `double PatternZScale`
PatternZScaleText | Number attribute (as text) | `string PatternZScaleText`
PreviewType | Enum attribute | `SpeosSim.Component3DTexture.EnumPreviewType PreviewType`
PreviewTypeIndex | Enum attribute (as index) | `int PreviewTypeIndex`
PreviewX | Number attribute | `double PreviewX`
PreviewXText | Number attribute (as text) | `string PreviewXText`
PreviewY | Number attribute | `double PreviewY`
PreviewYText | Number attribute (as text) | `string PreviewYText`
PreviewZ | Number attribute | `double PreviewZ`
PreviewZText | Number attribute (as text) | `string PreviewZText`
PreviewSizeX | Number attribute | `double PreviewSizeX`
PreviewSizeXText | Number attribute (as text) | `string PreviewSizeXText`
PreviewSizeY | Number attribute | `double PreviewSizeY`
PreviewSizeYText | Number attribute (as text) | `string PreviewSizeYText`
PreviewSizeZ | Number attribute | `double PreviewSizeZ`
PreviewSizeZText | Number attribute (as text) | `string PreviewSizeZText`
MaxNumberOfPatterns | Number attribute | `int MaxNumberOfPatterns`
MaxNumberOfPatternsText | Number attribute (as text) | `string MaxNumberOfPatternsText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### `Component3DTexture.Component3DTextureOriginPoint`

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### `Component3DTexture.Component3DTextureXDirection`

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Component3DTexture.Component3DTextureYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Component3DTexture.Component3DTextureSupportGeometry

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Component3DTexture.Component3DTextureXPitchCurve

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Component3DTexture.Component3DTextureYPitchCurve

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Component3DTexture.Component3DTextureLimitingSurface

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Component3DTexture.Component3DTextureOffsetSurface

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Component3DTexture.Component3DTextureXScaleSurface

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Component3DTexture.Component3DTextureYScaleSurface

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Component3DTexture.Component3DTextureZScaleSurface

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## ComponentExport

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.ComponentExport> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.ComponentExport Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.ComponentExport Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.ComponentExport Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.ComponentExport Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.ComponentExport CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
GetResultFilePath | Get the list of paths of all computation resulting files | `string GetResultFilePath()`
GetGeometrySettings | Get the geometry settings (meshing behavior) | `SpeosSim.SimulationSettings GetGeometrySettings()`
SetGeometrySettings | Set the geometry settings (meshing behavior) | `void SetGeometrySettings(SpeosSim.SimulationSettings simulationSettings)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosSim.ComponentExport.ComponentExportOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.ComponentExport.ComponentExportXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.ComponentExport.ComponentExportYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
Sources | Links attribute | `SpeosSim.ComponentExport.ComponentExportSources Sources`
Geometries | Children attribute | `SpeosSim.ComponentExport.ComponentExportGeometries Geometries`
IsBlackBox | boolean attribute | `bool IsBlackBox`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### ComponentExport.ComponentExportOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### ComponentExport.ComponentExportXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### ComponentExport.ComponentExportYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### ComponentExport.ComponentExportSources

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### ComponentExport.ComponentExportGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.FTGEnabledGeometry> GetEnumerator()`
Add | Children attribute: Add an object to the children list | `void Add(SpeosSim.FTGEnabledGeometry childObject)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.FTGEnabledGeometry> List`
Item | Children attribute: Get child by index | `SpeosSim.FTGEnabledGeometry Item`

## ComponentImport

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.ComponentImport> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.ComponentImport Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.ComponentImport Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.ComponentImport Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.ComponentImport Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.ComponentImport CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosSim.ComponentImport.ComponentImportOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.ComponentImport.ComponentImportXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.ComponentImport.ComponentImportYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
TrajectoryFile | File attribute | `string TrajectoryFile`
TrajectoryFileFullPath | File attribute (absolute full path) | `string TrajectoryFileFullPath`
ImportFile | File attribute | `string ImportFile`
ImportFileFullPath | File attribute (absolute full path) | `string ImportFileFullPath`
LightBoxPreviewType | Enum attribute | `SpeosSim.ComponentImport.EnumLightBoxPreviewType LightBoxPreviewType`
LightBoxPreviewTypeIndex | Enum attribute (as index) | `int LightBoxPreviewTypeIndex`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### ComponentImport.ComponentImportOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### ComponentImport.ComponentImportXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### ComponentImport.ComponentImportYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## ComponentOpticStudio

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.ComponentOpticStudio> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.ComponentOpticStudio Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.ComponentOpticStudio Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.ComponentOpticStudio Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.ComponentOpticStudio Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.ComponentOpticStudio CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosSim.ComponentOpticStudio.ComponentOpticStudioOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.ComponentOpticStudio.ComponentOpticStudioXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.ComponentOpticStudio.ComponentOpticStudioYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
ComponentFile | File attribute | `Speos.Foundation.Utils.File.FilePath ComponentFile`
ComponentFileFullPath | File attribute (absolute full path) | `string ComponentFileFullPath`
UpdateMaterialsOnly | Boolean attribute | `bool UpdateMaterialsOnly`
SortedGeometricComponents | Children attribute | `SpeosSim.ComponentOpticStudio.ComponentOpticStudioSortedGeometricComponents SortedGeometricComponents`
Lenses | Children attribute | `SpeosSim.ComponentOpticStudio.ComponentOpticStudioLenses Lenses`
Surfaces | Children attribute | `SpeosSim.ComponentOpticStudio.ComponentOpticStudioSurfaces Surfaces`
Detectors | Links attribute | `SpeosSim.ComponentOpticStudio.ComponentOpticStudioDetectors Detectors`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### ComponentOpticStudio.ComponentOpticStudioOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### ComponentOpticStudio.ComponentOpticStudioXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### ComponentOpticStudio.ComponentOpticStudioYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### ComponentOpticStudio.ComponentOpticStudioSortedGeometricComponents

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.GeometryOpticsStudio> GetEnumerator()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.GeometryOpticsStudio> List`
Item | Children attribute: Get child by index | `SpeosSim.GeometryOpticsStudio Item`
Item | Children attribute: Get child by index | `SpeosSim.GeometryOpticsStudio Item`

### ComponentOpticStudio.ComponentOpticStudioLenses

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator GetEnumerator()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection List`
Item | Children attribute: Get child by index | `SpeosSim.Lenses Item`

### ComponentOpticStudio.ComponentOpticStudioSurfaces

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator GetEnumerator()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection List`
Item | Children attribute: Get child by index | `SpeosSim.Surfaces Item`

### ComponentOpticStudio.ComponentOpticStudioDetectors

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## ComponentSpeosPattern

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.ComponentSpeosPattern> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.ComponentSpeosPattern Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.ComponentSpeosPattern Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.ComponentSpeosPattern Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.ComponentSpeosPattern Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.ComponentSpeosPattern CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
OptimizeRayFile | Call the 'Ray file optimization' command. Returns 'false' if this action is unavailable in the current state of the object. | `bool OptimizeRayFile()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OneLayerPerInstance | boolean attribute | `bool OneLayerPerInstance`
OneLayerPerSource | boolean attribute | `bool OneLayerPerSource`
FilePattern | File attribute | `Speos.Foundation.Utils.File.FilePath FilePattern`
FilePatternFullPath | File attribute (absolute full path) | `string FilePatternFullPath`
FluxType | Enum attribute | `SpeosSim.ComponentSpeosPattern.EnumFluxType FluxType`
FluxTypeIndex | Enum attribute (as index) | `int FluxTypeIndex`
FluxFromRayFile | boolean attribute | `bool FluxFromRayFile`
FluxValueLuminous | Number attribute | `double FluxValueLuminous`
FluxValueLuminousText | Number attribute (as text) | `string FluxValueLuminousText`
FluxValueRadiant | Number attribute | `double FluxValueRadiant`
FluxValueRadiantText | Number attribute (as text) | `string FluxValueRadiantText`
Origins | Links attribute | `SpeosSim.ComponentSpeosPattern.ComponentSpeosPatternOrigins Origins`
NumberOfRays | Number attribute | `uint NumberOfRays`
NumberOfRaysText | Number attribute (as text) | `string NumberOfRaysText`
RayLength | Number attribute | `double RayLength`
RayLengthText | Number attribute (as text) | `string RayLengthText`
LightBoxPreviewType | Enum attribute | `SpeosSim.ComponentSpeosPattern.EnumLightBoxPreviewType LightBoxPreviewType`
LightBoxPreviewTypeIndex | Enum attribute (as index) | `int LightBoxPreviewTypeIndex`
SpectrumType | Enum attribute | `SpeosSim.ComponentSpeosPattern.EnumSpectrumType SpectrumType`
SpectrumTypeIndex | Enum attribute (as index) | `int SpectrumTypeIndex`
SpectrumValueWavelength | Number attribute | `double SpectrumValueWavelength`
SpectrumValueWavelengthText | Number attribute (as text) | `string SpectrumValueWavelengthText`
SpectrumValueTemperature | Number attribute | `double SpectrumValueTemperature`
SpectrumValueTemperatureText | Number attribute (as text) | `string SpectrumValueTemperatureText`
SpectrumValueLibrary | File attribute | `Speos.Foundation.Utils.File.FilePath SpectrumValueLibrary`
SpectrumValueLibraryFullPath | File attribute (absolute full path) | `string SpectrumValueLibraryFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### ComponentSpeosPattern.ComponentSpeosPatternOrigins

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## EyeboxConfiguration

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosSim.EyeboxConfiguration Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
EBConfigName | string attribute | `string EBConfigName`
Offset | Number attribute | `double Offset`
OffsetText | Number attribute (as text) | `string OffsetText`
TiltAngle | Number attribute | `double TiltAngle`
TiltAngleText | Number attribute (as text) | `string TiltAngleText`

## FTGEnabledGeometry

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosSim.FTGEnabledGeometry Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
IsFTG | boolean attribute | `bool IsFTG`
FTGGeometry | Link attribute | `SpeosSim.FTGEnabledGeometry.FTGEnabledGeometryFTGGeometry FTGGeometry`

### FTGEnabledGeometry.FTGEnabledGeometryFTGGeometry

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## GeometryOpticsStudio

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
Body | Links attribute | `SpeosSim.GeometryOpticsStudio.GeometryOpticsStudioBody Body`

### GeometryOpticsStudio.GeometryOpticsStudioBody

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## HoaEyeBox

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.HoaEyeBox> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.HoaEyeBox Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
EyeboxCenter | Link attribute | `SpeosSim.HoaEyeBox.HoaEyeBoxEyeboxCenter EyeboxCenter`
EyeboxOrientationType | Enum attribute | `SpeosSim.HoaEyeBox.EnumEyeboxOrientationType EyeboxOrientationType`
EyeboxOrientationTypeIndex | Enum attribute (as index) | `int EyeboxOrientationTypeIndex`
EyeboxSamplingMode | Enum attribute | `SpeosSim.HoaEyeBox.EnumEyeboxSamplingMode EyeboxSamplingMode`
EyeboxSamplingModeIndex | Enum attribute (as index) | `int EyeboxSamplingModeIndex`
OPTEyeBoxFile | File attribute | `string OPTEyeBoxFile`
OPTEyeBoxFileFullPath | File attribute (absolute full path) | `string OPTEyeBoxFileFullPath`
EBInterpupillaryDistance | Number attribute | `double EBInterpupillaryDistance`
EBInterpupillaryDistanceText | Number attribute (as text) | `string EBInterpupillaryDistanceText`
EBEyePupilDiameter | Number attribute | `double EBEyePupilDiameter`
EBEyePupilDiameterText | Number attribute (as text) | `string EBEyePupilDiameterText`
EBEyePupilSampling | Number attribute | `int EBEyePupilSampling`
EBEyePupilSamplingText | Number attribute (as text) | `string EBEyePupilSamplingText`
EBBinocularHorizontalSize | Number attribute | `double EBBinocularHorizontalSize`
EBBinocularHorizontalSizeText | Number attribute (as text) | `string EBBinocularHorizontalSizeText`
EBMonocularHorizontalSampling | Number attribute | `int EBMonocularHorizontalSampling`
EBMonocularHorizontalSamplingText | Number attribute (as text) | `string EBMonocularHorizontalSamplingText`
EBMonocularHorizontalSize | Number attribute | `double EBMonocularHorizontalSize`
EBMonocularHorizontalSizeText | Number attribute (as text) | `string EBMonocularHorizontalSizeText`
EBMonocularHorizontalResolution | Number attribute | `double EBMonocularHorizontalResolution`
EBMonocularHorizontalResolutionText | Number attribute (as text) | `string EBMonocularHorizontalResolutionText`
EBBinocularHorizontalSampling | Number attribute | `uint EBBinocularHorizontalSampling`
EBBinocularHorizontalSamplingText | Number attribute (as text) | `string EBBinocularHorizontalSamplingText`
EBNbSharedSamples | Number attribute | `uint EBNbSharedSamples`
EBNbSharedSamplesText | Number attribute (as text) | `string EBNbSharedSamplesText`
EBVerticalSize | Number attribute | `double EBVerticalSize`
EBVerticalSizeText | Number attribute (as text) | `string EBVerticalSizeText`
EBVerticalSampling | Number attribute | `int EBVerticalSampling`
EBVerticalSamplingText | Number attribute (as text) | `string EBVerticalSamplingText`
EBVerticalResolution | Number attribute | `double EBVerticalResolution`
EBVerticalResolutionText | Number attribute (as text) | `string EBVerticalResolutionText`
EBMultiEyebox | boolean attribute | `bool EBMultiEyebox`
EyeboxConfigPositionDirectionType | Enum attribute | `SpeosSim.HoaEyeBox.EnumEyeboxConfigPositionDirectionType EyeboxConfigPositionDirectionType`
EyeboxConfigPositionDirectionTypeIndex | Enum attribute (as index) | `int EyeboxConfigPositionDirectionTypeIndex`
EBConfigurations | Children attribute | `SpeosSim.HoaEyeBox.HoaEyeBoxEBConfigurations EBConfigurations`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### HoaEyeBox.HoaEyeBoxEyeboxCenter

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### HoaEyeBox.HoaEyeBoxEBConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.EyeboxConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosSim.EyeboxConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.EyeboxConfiguration> List`
Item | Children attribute: Get child by index | `SpeosSim.EyeboxConfiguration Item`

## HoaMirrors

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.HoaMirrors> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.HoaMirrors Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
GetMultiEyeBoxMirrorPossibleValues | string list attribute: List possible values | `IEnumerable<string> GetMultiEyeBoxMirrorPossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
MirrorFaces | Links attribute | `SpeosSim.HoaMirrors.HoaMirrorsMirrorFaces MirrorFaces`
MultiEyeBoxMirror | string list selection attribute | `string MultiEyeBoxMirror`
TiltRotationAxis | Link attribute | `SpeosSim.HoaMirrors.HoaMirrorsTiltRotationAxis TiltRotationAxis`
TiltRotationAxisReverse | boolean attribute | `bool TiltRotationAxisReverse`
EBMirrorConfigurations | Children attribute | `SpeosSim.HoaMirrors.HoaMirrorsEBMirrorConfigurations EBMirrorConfigurations`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### HoaMirrors.HoaMirrorsMirrorFaces

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### HoaMirrors.HoaMirrorsTiltRotationAxis

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### HoaMirrors.HoaMirrorsEBMirrorConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.EyeboxConfiguration> GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.EyeboxConfiguration> List`
Item | Children attribute: Get child by index | `SpeosSim.EyeboxConfiguration Item`

## HoaPGU

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.HoaPGU> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.HoaPGU Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
PGUHorizontalSampling | Number attribute | `int PGUHorizontalSampling`
PGUHorizontalSamplingText | Number attribute (as text) | `string PGUHorizontalSamplingText`
PGUVerticalSampling | Number attribute | `int PGUVerticalSampling`
PGUVerticalSamplingText | Number attribute (as text) | `string PGUVerticalSamplingText`
PGUCharacteristicsType | Enum attribute | `SpeosSim.HoaPGU.EnumPGUCharacteristicsType PGUCharacteristicsType`
PGUCharacteristicsTypeIndex | Enum attribute (as index) | `int PGUCharacteristicsTypeIndex`
PGUHorizontalSize | Number attribute | `double PGUHorizontalSize`
PGUHorizontalSizeText | Number attribute (as text) | `string PGUHorizontalSizeText`
PGUHorizontalResolution | Number attribute | `int PGUHorizontalResolution`
PGUHorizontalResolutionText | Number attribute (as text) | `string PGUHorizontalResolutionText`
PGUVerticalSize | Number attribute | `double PGUVerticalSize`
PGUVerticalSizeText | Number attribute (as text) | `string PGUVerticalSizeText`
PGUVerticalResolution | Number attribute | `int PGUVerticalResolution`
PGUVerticalResolutionText | Number attribute (as text) | `string PGUVerticalResolutionText`
OriginPoint | Link attribute | `SpeosSim.HoaPGU.HoaPGUOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.HoaPGU.HoaPGUXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.HoaPGU.HoaPGUYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### HoaPGU.HoaPGUOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### HoaPGU.HoaPGUXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### HoaPGU.HoaPGUYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## HoaReport

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.HoaReport> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.HoaReport Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
GetPluginTestsPossibleValues | string list attribute: List possible values | `IEnumerable<string> GetPluginTestsPossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
PluginTests | string list with multiple selection attribute | `IEnumerable<string> PluginTests`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## HoaTargetImage

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.HoaTargetImage> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.HoaTargetImage Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
TIVirtualImageDistance | Number attribute | `double TIVirtualImageDistance`
TIVirtualImageDistanceText | Number attribute (as text) | `string TIVirtualImageDistanceText`
TILookOverAngle | Number attribute | `double TILookOverAngle`
TILookOverAngleText | Number attribute (as text) | `string TILookOverAngleText`
TILookDownAngle | Number attribute | `double TILookDownAngle`
TILookDownAngleText | Number attribute (as text) | `string TILookDownAngleText`
TargetImageModeType | Enum attribute | `SpeosSim.HoaTargetImage.EnumTargetImageModeType TargetImageModeType`
TargetImageModeTypeIndex | Enum attribute (as index) | `int TargetImageModeTypeIndex`
TIHorizontalSize | Number attribute | `double TIHorizontalSize`
TIHorizontalSizeText | Number attribute (as text) | `string TIHorizontalSizeText`
TIVerticalSize | Number attribute | `double TIVerticalSize`
TIVerticalSizeText | Number attribute (as text) | `string TIVerticalSizeText`
TIHorizontalFOV | Number attribute | `double TIHorizontalFOV`
TIHorizontalFOVText | Number attribute (as text) | `string TIHorizontalFOVText`
TIVerticalFOV | Number attribute | `double TIVerticalFOV`
TIVerticalFOVText | Number attribute (as text) | `string TIVerticalFOVText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## HoaWarping

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.HoaWarping> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.HoaWarping Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
GetAlgorithmPossibleValues | string list attribute: List possible values | `IEnumerable<string> GetAlgorithmPossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
WarpingMode | Enum attribute | `SpeosSim.HoaWarping.EnumWarpingMode WarpingMode`
WarpingModeIndex | Enum attribute (as index) | `int WarpingModeIndex`
HorizontalSampling | Number attribute | `int HorizontalSampling`
HorizontalSamplingText | Number attribute (as text) | `string HorizontalSamplingText`
VerticalSampling | Number attribute | `int VerticalSampling`
VerticalSamplingText | Number attribute (as text) | `string VerticalSamplingText`
OPTWarpingFile | File attribute | `string OPTWarpingFile`
OPTWarpingFileFullPath | File attribute (absolute full path) | `string OPTWarpingFileFullPath`
Algorithm | string list selection attribute | `string Algorithm`
AlgorithmFile | File attribute | `string AlgorithmFile`
AlgorithmFileFullPath | File attribute (absolute full path) | `string AlgorithmFileFullPath`
TiltMode | Enum attribute | `SpeosSim.HoaWarping.EnumTiltMode TiltMode`
TiltModeIndex | Enum attribute (as index) | `int TiltModeIndex`
TiltShorterDriver | Number attribute | `double TiltShorterDriver`
TiltShorterDriverText | Number attribute (as text) | `string TiltShorterDriverText`
TiltTallerDriver | Number attribute | `double TiltTallerDriver`
TiltTallerDriverText | Number attribute (as text) | `string TiltTallerDriverText`
OffsetShorterDriver | Number attribute | `double OffsetShorterDriver`
OffsetShorterDriverText | Number attribute (as text) | `string OffsetShorterDriverText`
OffsetTallerDriver | Number attribute | `double OffsetTallerDriver`
OffsetTallerDriverText | Number attribute (as text) | `string OffsetTallerDriverText`
TiltSampling | Number attribute | `int TiltSampling`
TiltSamplingText | Number attribute (as text) | `string TiltSamplingText`
TiltResolution | Number attribute | `double TiltResolution`
TiltResolutionText | Number attribute (as text) | `string TiltResolutionText`
OffsetResolution | Number attribute | `double OffsetResolution`
OffsetResolutionText | Number attribute (as text) | `string OffsetResolutionText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## HoaWindshield

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.HoaWindshield> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.HoaWindshield Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
WindshieldInnerSurface | Link attribute | `SpeosSim.HoaWindshield.HoaWindshieldWindshieldInnerSurface WindshieldInnerSurface`
WindshieldOuterSurface | Link attribute | `SpeosSim.HoaWindshield.HoaWindshieldWindshieldOuterSurface WindshieldOuterSurface`
WindshieldRefractiveIndex | Number attribute | `double WindshieldRefractiveIndex`
WindshieldRefractiveIndexText | Number attribute (as text) | `string WindshieldRefractiveIndexText`
CoverLensOuterSurface | Link attribute | `SpeosSim.HoaWindshield.HoaWindshieldCoverLensOuterSurface CoverLensOuterSurface`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### HoaWindshield.HoaWindshieldWindshieldInnerSurface

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### HoaWindshield.HoaWindshieldWindshieldOuterSurface

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### HoaWindshield.HoaWindshieldCoverLensOuterSurface

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## ImportedFeature

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.ImportedFeature> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.ImportedFeature Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
ImportedObjectType | Enum attribute | `SpeosSim.ImportedFeature.EnumImportedObjectType ImportedObjectType`
ImportedObjectTypeIndex | Enum attribute (as index) | `int ImportedObjectTypeIndex`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## Lenses

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
BackFaceAperture | Children attribute | `SpeosSim.SurfaceAperture BackFaceAperture`
FrontFaceAperture | Children attribute | `SpeosSim.SurfaceAperture FrontFaceAperture`
FrontFaceParameters | Children attribute | `SpeosSim.Surfaces FrontFaceParameters`
BackFaceParameters | Children attribute | `SpeosSim.Surfaces BackFaceParameters`
Thickness | Number attribute | `double Thickness`
ThicknessText | Number attribute (as text) | `string ThicknessText`
Body | Links attribute | `SpeosSim.Lenses.LensesBody Body`

### Lenses.LensesBody

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## LocalMeshing

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.LocalMeshing> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.LocalMeshing Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.LocalMeshing Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.LocalMeshing Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.LocalMeshing Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.LocalMeshing CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
MeshingSagMode | Enum attribute | `SpeosSim.LocalMeshing.EnumMeshingSagMode MeshingSagMode`
MeshingSagModeIndex | Enum attribute (as index) | `int MeshingSagModeIndex`
MeshingSagValue | Number attribute | `double MeshingSagValue`
MeshingSagValueText | Number attribute (as text) | `string MeshingSagValueText`
MeshingSagValueProportionalToBody | Number attribute | `double MeshingSagValueProportionalToBody`
MeshingSagValueProportionalToBodyText | Number attribute (as text) | `string MeshingSagValueProportionalToBodyText`
MeshingSagLengthValue | Number attribute | `double MeshingSagLengthValue`
MeshingSagLengthValueText | Number attribute (as text) | `string MeshingSagLengthValueText`
MeshingStepMode | Enum attribute | `SpeosSim.LocalMeshing.EnumMeshingStepMode MeshingStepMode`
MeshingStepModeIndex | Enum attribute (as index) | `int MeshingStepModeIndex`
MeshingStepValue | Number attribute | `double MeshingStepValue`
MeshingStepValueText | Number attribute (as text) | `string MeshingStepValueText`
MeshingStepValueProportionalToBody | Number attribute | `double MeshingStepValueProportionalToBody`
MeshingStepValueProportionalToBodyText | Number attribute (as text) | `string MeshingStepValueProportionalToBodyText`
MeshingStepLengthValue | Number attribute | `double MeshingStepLengthValue`
MeshingStepLengthValueText | Number attribute (as text) | `string MeshingStepLengthValueText`
MeshingAngle | Number attribute | `double MeshingAngle`
MeshingAngleText | Number attribute (as text) | `string MeshingAngleText`
Geometries | Links attribute | `SpeosSim.LocalMeshing.LocalMeshingGeometries Geometries`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### LocalMeshing.LocalMeshingGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## LXPEnabledSensor

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosSim.LXPEnabledSensor Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
IsLXP | boolean attribute | `bool IsLXP`
LXPSensor | Link attribute | `SpeosSim.LXPEnabledSensor.LXPEnabledSensorLXPSensor LXPSensor`

### LXPEnabledSensor.LXPEnabledSensorLXPSensor

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## Material

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.Material> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.Material Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.Material Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.Material Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.Material Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.Material CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Description | string attribute | `string Description`
VisualizationColorText | Color attribute (as text like "R,G,B") | `string VisualizationColorText`
OpticalPropertiesType | Enum attribute | `SpeosSim.Material.EnumOpticalPropertiesType OpticalPropertiesType`
OpticalPropertiesTypeIndex | Enum attribute (as index) | `int OpticalPropertiesTypeIndex`
HasMultipleSOP | boolean attribute | `bool HasMultipleSOP`
VolumeGeometries | Links attribute | `SpeosSim.Material.MaterialVolumeGeometries VolumeGeometries`
OrientedFaces | Children attribute | `SpeosSim.Material.MaterialOrientedFaces OrientedFaces`
ListSOP | Children attribute | `SpeosSim.Material.MaterialListSOP ListSOP`
SOPType | Enum attribute | `SpeosSim.Material.EnumSOPType SOPType`
SOPTypeIndex | Enum attribute (as index) | `int SOPTypeIndex`
SOPReflectance | Number attribute | `double SOPReflectance`
SOPReflectanceText | Number attribute (as text) | `string SOPReflectanceText`
SOPLibrary | File attribute | `string SOPLibrary`
SOPLibraryFullPath | File attribute (absolute full path) | `string SOPLibraryFullPath`
SopAppearancePath | File attribute | `Speos.Foundation.Utils.File.FilePath SopAppearancePath`
SopAppearancePathFullPath | File attribute (absolute full path) | `string SopAppearancePathFullPath`
SopPluginPath | File attribute | `string SopPluginPath`
SopPluginPathFullPath | File attribute (absolute full path) | `string SopPluginPathFullPath`
SopPluginConfigurationPath | File attribute | `string SopPluginConfigurationPath`
SopPluginConfigurationPathFullPath | File attribute (absolute full path) | `string SopPluginConfigurationPathFullPath`
PreviewedLayer | Enum attribute | `SpeosSim.Material.EnumPreviewedLayer PreviewedLayer`
PreviewedLayerIndex | Enum attribute (as index) | `int PreviewedLayerIndex`
VOPType | Enum attribute | `SpeosSim.Material.EnumVOPType VOPType`
VOPTypeIndex | Enum attribute (as index) | `int VOPTypeIndex`
VOPIndex | Number attribute | `double VOPIndex`
VOPIndexText | Number attribute (as text) | `string VOPIndexText`
VOPAbsorption | Number attribute | `double VOPAbsorption`
VOPAbsorptionText | Number attribute (as text) | `string VOPAbsorptionText`
VOPIsConstringence | boolean attribute | `bool VOPIsConstringence`
VOPConstringence | Number attribute | `double VOPConstringence`
VOPConstringenceText | Number attribute (as text) | `string VOPConstringenceText`
VOPLibrary | File attribute | `string VOPLibrary`
VOPLibraryFullPath | File attribute (absolute full path) | `string VOPLibraryFullPath`
GradedFile | File attribute | `string GradedFile`
GradedFileFullPath | File attribute (absolute full path) | `string GradedFileFullPath`
OriginPoint | Link attribute | `SpeosSim.Material.MaterialOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.Material.MaterialXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.Material.MaterialYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### Material.MaterialVolumeGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### Material.MaterialOrientedFaces

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.OrientedFace> GetEnumerator()`
Add | Children attribute: Add an object to the children list | `void Add(SpeosSim.OrientedFace childObject)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.OrientedFace> List`
Item | Children attribute: Get child by index | `SpeosSim.OrientedFace Item`

### Material.MaterialListSOP

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.SurfaceLayer> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosSim.SurfaceLayer AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.SurfaceLayer> List`
Item | Children attribute: Get child by index | `SpeosSim.SurfaceLayer Item`
Item | Children attribute: Get child by index | `SpeosSim.SurfaceLayer Item`

### Material.MaterialOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Material.MaterialXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Material.MaterialYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## Node

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.Node> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.Node Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## OrientedFace

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosSim.OrientedFace Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
ReverseDirection | boolean attribute | `bool ReverseDirection`
Face | Link attribute | `SpeosSim.OrientedFace.OrientedFaceFace Face`

### OrientedFace.OrientedFaceFace

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## ResultLXP

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.ResultLXP> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.ResultLXP Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
ExportRaysAsGeometry | Export the Light Expert rays as geometry | `void ExportRaysAsGeometry()`
UpdateResults | Update the .xmp files | `void UpdateResults()`
OpenLpf | Load the file | `void OpenLpf()`
CloseLpf | Unload the file | `void CloseLpf()`
CreateAreaRectangle | Creates a rectangular measure area | `void CreateAreaRectangle(int viewerId, double xCenter, double yCenter, double width, double height)`
CreateAreaEllipse | Creates an elliptical measure area | `void CreateAreaEllipse(int viewerId, double xCenter, double yCenter, double xRadius, double yRadius)`
CreateAreaPolygon | Creates a polygon measure area | `void CreateAreaPolygon(int viewerId, System.Double[] xPoints, System.Double[] yPoints)`
GetMeasureValue | Gets the measure value from a defined type. Refer to [GetMeasureValue Enum List](resultlxp_getmeasurevalue_list_enum.md) for the possible values to be used.| `double GetMeasureValue(int viewerId, int measureId)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
RequiredFaces | Links attribute | `SpeosSim.ResultLXP.ResultLXPRequiredFaces RequiredFaces`
RejectedFaces | Links attribute | `SpeosSim.ResultLXP.ResultLXPRejectedFaces RejectedFaces`
FaceFiltering | Enum attribute | `SpeosSim.ResultLXP.EnumFaceFiltering FaceFiltering`
FaceFilteringIndex | Enum attribute (as index) | `int FaceFilteringIndex`
RaysPassingBy | Enum attribute | `SpeosSim.ResultLXP.EnumRaysPassingBy RaysPassingBy`
RaysPassingByIndex | Enum attribute (as index) | `int RaysPassingByIndex`
FilteredRaysOnly | boolean attribute | `bool FilteredRaysOnly`
RayNumber | Number attribute | `uint RayNumber`
RayNumberText | Number attribute (as text) | `string RayNumberText`
RayLength | Number attribute | `double RayLength`
RayLengthText | Number attribute (as text) | `string RayLengthText`
RotationViewDistance | Number attribute | `double RotationViewDistance`
RotationViewDistanceText | Number attribute (as text) | `string RotationViewDistanceText`
RaysErrorType | Enum attribute | `SpeosSim.ResultLXP.EnumRaysErrorType RaysErrorType`
RaysErrorTypeIndex | Enum attribute (as index) | `int RaysErrorTypeIndex`
RaysDrawType | Enum attribute | `SpeosSim.ResultLXP.EnumRaysDrawType RaysDrawType`
RaysDrawTypeIndex | Enum attribute (as index) | `int RaysDrawTypeIndex`
DrawThickness | Number attribute | `int DrawThickness`
DrawThicknessText | Number attribute (as text) | `string DrawThicknessText`
FullPath | Get the result file full path | `string FullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### ResultLXP.ResultLXPRequiredFaces

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### ResultLXP.ResultLXPRejectedFaces

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## ResultProjectedGrid

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.ResultProjectedGrid> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.ResultProjectedGrid Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
ExportProjectedGridAsGeometry | Export the projected grid as geometry | `void ExportProjectedGridAsGeometry()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
MinDistanceTolerance | Number attribute | `double MinDistanceTolerance`
MinDistanceToleranceText | Number attribute (as text) | `string MinDistanceToleranceText`
MaxIncidence | Number attribute | `double MaxIncidence`
MaxIncidenceText | Number attribute (as text) | `string MaxIncidenceText`
MaxDistanceFromCamera | Number attribute | `double MaxDistanceFromCamera`
MaxDistanceFromCameraText | Number attribute (as text) | `string MaxDistanceFromCameraText`
AuthorizeConnectionBetweenBodies | boolean attribute | `bool AuthorizeConnectionBetweenBodies`
PrimaryStep | Number attribute | `int PrimaryStep`
PrimaryStepText | Number attribute (as text) | `string PrimaryStepText`
SecondaryStep | Number attribute | `int SecondaryStep`
SecondaryStepText | Number attribute (as text) | `string SecondaryStepText`
DisplayGraduationText | boolean attribute | `bool DisplayGraduationText`
DisplayFirstHighLightedLines | boolean attribute | `bool DisplayFirstHighLightedLines`
XDisplayFirst | Number attribute | `int XDisplayFirst`
XDisplayFirstText | Number attribute (as text) | `string XDisplayFirstText`
YDisplayFirst | Number attribute | `int YDisplayFirst`
YDisplayFirstText | Number attribute (as text) | `string YDisplayFirstText`
DisplaySecondHighLightedLines | boolean attribute | `bool DisplaySecondHighLightedLines`
XDisplaySecond | Number attribute | `int XDisplaySecond`
XDisplaySecondText | Number attribute (as text) | `string XDisplaySecondText`
YDisplaySecond | Number attribute | `int YDisplaySecond`
YDisplaySecondText | Number attribute (as text) | `string YDisplaySecondText`
CloseBoundaries | boolean attribute | `bool CloseBoundaries`
FullPath | Get the result file full path | `string FullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## Sensor3DED

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.Sensor3DED> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.Sensor3DED Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.Sensor3DED Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.Sensor3DED Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.Sensor3DED Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.Sensor3DED CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
SizeX | Number attribute | `double SizeX`
SizeXText | Number attribute (as text) | `string SizeXText`
SamplingX | Number attribute | `uint SamplingX`
SamplingXText | Number attribute (as text) | `string SamplingXText`
SizeY | Number attribute | `double SizeY`
SizeYText | Number attribute (as text) | `string SizeYText`
SamplingY | Number attribute | `uint SamplingY`
SamplingYText | Number attribute (as text) | `string SamplingYText`
SizeZ | Number attribute | `double SizeZ`
SizeZText | Number attribute (as text) | `string SizeZText`
SamplingZ | Number attribute | `uint SamplingZ`
SamplingZText | Number attribute (as text) | `string SamplingZText`
SensorType | Enum attribute | `SpeosSim.Sensor3DED.EnumSensorType SensorType`
SensorTypeIndex | Enum attribute (as index) | `int SensorTypeIndex`
IntegrationMode | Enum attribute | `SpeosSim.Sensor3DED.EnumIntegrationMode IntegrationMode`
IntegrationModeIndex | Enum attribute (as index) | `int IntegrationModeIndex`
LayerType | Enum attribute | `SpeosSim.Sensor3DED.EnumLayerType LayerType`
LayerTypeIndex | Enum attribute (as index) | `int LayerTypeIndex`
FaceFiltering | Links attribute | `SpeosSim.Sensor3DED.Sensor3DEDFaceFiltering FaceFiltering`
SCAFilteringMode | Enum attribute | `SpeosSim.Sensor3DED.EnumSCAFilteringMode SCAFilteringMode`
SCAFilteringModeIndex | Enum attribute (as index) | `int SCAFilteringModeIndex`
OriginPoint | Link attribute | `SpeosSim.Sensor3DED.Sensor3DEDOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.Sensor3DED.Sensor3DEDXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.Sensor3DED.Sensor3DEDYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### Sensor3DED.Sensor3DEDFaceFiltering

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### Sensor3DED.Sensor3DEDOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Sensor3DED.Sensor3DEDXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### Sensor3DED.Sensor3DEDYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## Sensor3DIrradiance

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.Sensor3DIrradiance> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.Sensor3DIrradiance Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.Sensor3DIrradiance Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.Sensor3DIrradiance Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.Sensor3DIrradiance Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.Sensor3DIrradiance CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
SensorType | Enum attribute | `SpeosSim.Sensor3DIrradiance.EnumSensorType SensorType`
SensorTypeIndex | Enum attribute (as index) | `int SensorTypeIndex`
IlluminanceType | Enum attribute | `SpeosSim.Sensor3DIrradiance.EnumIlluminanceType IlluminanceType`
IlluminanceTypeIndex | Enum attribute (as index) | `int IlluminanceTypeIndex`
RayFileType | Enum attribute | `SpeosSim.Sensor3DIrradiance.EnumRayFileType RayFileType`
RayFileTypeIndex | Enum attribute (as index) | `int RayFileTypeIndex`
LayerType | Enum attribute | `SpeosSim.Sensor3DIrradiance.EnumLayerType LayerType`
LayerTypeIndex | Enum attribute (as index) | `int LayerTypeIndex`
Reflection | boolean attribute | `bool Reflection`
Transmission | boolean attribute | `bool Transmission`
Absorption | boolean attribute | `bool Absorption`
Geometries | Links attribute | `SpeosSim.Sensor3DIrradiance.Sensor3DIrradianceGeometries Geometries`
XM3TemplateFile | File attribute | `string XM3TemplateFile`
XM3TemplateFileFullPath | File attribute (absolute full path) | `string XM3TemplateFileFullPath`
WavelengthStart | Number attribute | `double WavelengthStart`
WavelengthStartText | Number attribute (as text) | `string WavelengthStartText`
WavelengthEnd | Number attribute | `double WavelengthEnd`
WavelengthEndText | Number attribute (as text) | `string WavelengthEndText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### Sensor3DIrradiance.Sensor3DIrradianceGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## SensorCamera

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorCamera> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorCamera Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorCamera Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorCamera Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorCamera Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorCamera CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
SensorMode | Enum attribute | `SpeosSim.SensorCamera.EnumSensorMode SensorMode`
SensorModeIndex | Enum attribute (as index) | `int SensorModeIndex`
LayerType | Enum attribute | `SpeosSim.SensorCamera.EnumLayerType LayerType`
LayerTypeIndex | Enum attribute (as index) | `int LayerTypeIndex`
OriginPoint | Link attribute | `SpeosSim.SensorCamera.SensorCameraOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SensorCamera.SensorCameraXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SensorCamera.SensorCameraYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
TrajectoryFile | File attribute | `string TrajectoryFile`
TrajectoryFileFullPath | File attribute (absolute full path) | `string TrajectoryFileFullPath`
AcquisitionIntegration | Time duration attribute : can either be defined by a Double or a TimeSpan value | `Speos.Foundation.Utils.TimeDuration AcquisitionIntegration`
AcquisitionIntegrationText | Number attribute (as text) | `string AcquisitionIntegrationText`
AcquisitionLagTime | Time duration attribute : can either be defined by a Double or a TimeSpan value | `Speos.Foundation.Utils.TimeDuration AcquisitionLagTime`
AcquisitionLagTimeText | Number attribute (as text) | `string AcquisitionLagTimeText`
WStart | Number attribute | `double WStart`
WStartText | Number attribute (as text) | `string WStartText`
WEnd | Number attribute | `double WEnd`
WEndText | Number attribute (as text) | `string WEndText`
WSamples | Number attribute | `uint WSamples`
WSamplesText | Number attribute (as text) | `string WSamplesText`
WResolution | Number attribute | `double WResolution`
WResolutionText | Number attribute (as text) | `string WResolutionText`
FocalLength | Number attribute | `double FocalLength`
FocalLengthText | Number attribute (as text) | `string FocalLengthText`
ImagerDistance | Number attribute | `double ImagerDistance`
ImagerDistanceText | Number attribute (as text) | `string ImagerDistanceText`
FNumber | Number attribute | `double FNumber`
FNumberText | Number attribute (as text) | `string FNumberText`
HorzFov | Number attribute | `double HorzFov`
HorzFovText | Number attribute (as text) | `string HorzFovText`
VertFov | Number attribute | `double VertFov`
VertFovText | Number attribute (as text) | `string VertFovText`
HorzPixel | Number attribute | `uint HorzPixel`
HorzPixelText | Number attribute (as text) | `string HorzPixelText`
VertPixel | Number attribute | `uint VertPixel`
VertPixelText | Number attribute (as text) | `string VertPixelText`
Width | Number attribute | `double Width`
WidthText | Number attribute (as text) | `string WidthText`
Height | Number attribute | `double Height`
HeightText | Number attribute (as text) | `string HeightText`
ColorMode | Enum attribute | `SpeosSim.SensorCamera.EnumColorMode ColorMode`
ColorModeIndex | Enum attribute (as index) | `int ColorModeIndex`
GammaCorrection | Number attribute | `double GammaCorrection`
GammaCorrectionText | Number attribute (as text) | `string GammaCorrectionText`
BalanceMode | Enum attribute | `SpeosSim.SensorCamera.EnumBalanceMode BalanceMode`
BalanceModeIndex | Enum attribute (as index) | `int BalanceModeIndex`
RedGain | Number attribute | `double RedGain`
RedGainText | Number attribute (as text) | `string RedGainText`
GreenGain | Number attribute | `double GreenGain`
GreenGainText | Number attribute (as text) | `string GreenGainText`
BlueGain | Number attribute | `double BlueGain`
BlueGainText | Number attribute (as text) | `string BlueGainText`
PNGBits | Enum attribute | `SpeosSim.SensorCamera.EnumPNGBits PNGBits`
PNGBitsIndex | Enum attribute (as index) | `int PNGBitsIndexv
TransmittanceFile | File attribute | `string TransmittanceFile`
TransmittanceFileFullPath | File attribute (absolute full path) | `string TransmittanceFileFullPath`
DistorsionFile | File attribute | `string DistorsionFile`
DistorsionFileFullPath | File attribute (absolute full path) | `string DistorsionFileFullPath`
SpectrumFile | File attribute | `string SpectrumFile`
SpectrumFileFullPath | File attribute (absolute full path) | `string SpectrumFileFullPath`
RedSpectrumFile | File attribute | `string RedSpectrumFile`
RedSpectrumFileFullPath | File attribute (absolute full path) | `string RedSpectrumFileFullPath`
GreenSpectrumFile | File attribute | `string GreenSpectrumFile`
GreenSpectrumFileFullPath | File attribute (absolute full path) | `string GreenSpectrumFileFullPath`
BlueSpectrumFile | File attribute | `string BlueSpectrumFile`
BlueSpectrumFileFullPath | File attribute (absolute full path) | `string BlueSpectrumFileFullPath`
RedDisplaySpectrumFile | File attribute | `string RedDisplaySpectrumFile`
RedDisplaySpectrumFileFullPath | File attribute (absolute full path) | `string RedDisplaySpectrumFileFullPath`
GreenDisplaySpectrumFile | File attribute | `string GreenDisplaySpectrumFile`
GreenDisplaySpectrumFileFullPath | File attribute (absolute full path) | `string GreenDisplaySpectrumFileFullPath`
BlueDisplaySpectrumFile | File attribute | `string BlueDisplaySpectrumFile`
BlueDisplaySpectrumFileFullPath | File attribute (absolute full path) | `string BlueDisplaySpectrumFileFullPath`
DisplayImageField | boolean attribute | `bool DisplayImageField`
DisplayObjectField | boolean attribute | `bool DisplayObjectField`
DisplayPupil | boolean attribute | `bool DisplayPupil`
ObjectFieldVisuRadius | Number attribute | `double ObjectFieldVisuRadius`
ObjectFieldVisuRadiusText | Number attribute (as text) | `string ObjectFieldVisuRadiusText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorCamera.SensorCameraOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorCamera.SensorCameraXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### `SensorCamera.SensorCameraYDirection`

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SensorEye

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorEye> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorEye Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorEye Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorEye Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorEye Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorEye CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosSim.SensorEye.SensorEyeOriginPoint OriginPoint`
TargetPoint | Link attribute | `SpeosSim.SensorEye.SensorEyeTargetPoint TargetPoint`
TopDirection | Link attribute | `SpeosSim.SensorEye.SensorEyeTopDirection TopDirection`
TopDirectionReverse | boolean attribute | `bool TopDirectionReverse`
SensorType | Enum attribute | `SpeosSim.SensorEye.EnumSensorType SensorType`
SensorTypeIndex | Enum attribute (as index) | `int SensorTypeIndex`
LayerType | Enum attribute | `SpeosSim.SensorEye.EnumLayerType LayerType`
LayerTypeIndex | Enum attribute (as index) | `int LayerTypeIndex`
DefinitionFrom | Enum attribute | `SpeosSim.SensorEye.EnumDefinitionFrom DefinitionFrom`
DefinitionFromIndex | Enum attribute (as index) | `int DefinitionFromIndex`
XMPTemplateFile | File attribute | `string XMPTemplateFile`
XMPTemplateFileFullPath | File attribute (absolute full path) | `string XMPTemplateFileFullPath`
DimensionFromFile | boolean attribute | `bool DimensionFromFile`
DisplayPropertiesFromFile | boolean attribute | `bool DisplayPropertiesFromFile`
XIsMirrored | boolean attribute | `bool XIsMirrored`
XStart | Number attribute | `double XStart`
XStartText | Number attribute (as text) | `string XStartText`
XEnd | Number attribute | `double XEnd`
XEndText | Number attribute (as text) | `string XEndText`
XNbSamples | Number attribute | `uint XNbSamples`
XNbSamplesText | Number attribute (as text) | `string XNbSamplesText`
XResolution | Number attribute | `double XResolution`
XResolutionText | Number attribute (as text) | `string XResolutionText`
YIsMirrored | boolean attribute | `bool YIsMirrored`
YStart | Number attribute | `double YStart`
YStartText | Number attribute (as text) | `string YStartText`
YEnd | Number attribute | `double YEnd`
YEndText | Number attribute (as text) | `string YEndText`
YNbSamples | Number attribute | `uint YNbSamples`
YNbSamplesText | Number attribute (as text) | `string YNbSamplesText`
YResolution | Number attribute | `double YResolution`
YResolutionText | Number attribute (as text) | `string YResolutionText`
PupilDiameter | Number attribute | `double PupilDiameter`
PupilDiameterText | Number attribute (as text) | `string PupilDiameterText`
ShowGrid | boolean attribute | `bool ShowGrid`
OriginX | Number attribute | `double OriginX`
OriginXText | Number attribute (as text) | `string OriginXText`
OriginY | Number attribute | `double OriginY`
OriginYText | Number attribute (as text) | `string OriginYText`
StepX | Number attribute | `double StepX`
StepXText | Number attribute (as text) | `string StepXText`
StepY | Number attribute | `double StepY`
StepYText | Number attribute (as text) | `string StepYText`
WavelengthStart | Number attribute | `double WavelengthStart`
WavelengthStartText | Number attribute (as text) | `string WavelengthStartText`
WavelengthEnd | Number attribute | `double WavelengthEnd`
WavelengthEndText | Number attribute (as text) | `string WavelengthEndText`
WavelengthSampling | Number attribute | `uint WavelengthSampling`
WavelengthSamplingText | Number attribute (as text) | `string WavelengthSamplingText`
WavelengthResolution | Number attribute | `double WavelengthResolution`
WavelengthResolutionText | Number attribute (as text) | `string WavelengthResolutionText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorEye.SensorEyeOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorEye.SensorEyeTargetPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorEye.SensorEyeTopDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SensorImmersive

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorImmersive> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorImmersive Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorImmersive Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorImmersive Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorImmersive Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorImmersive CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Sampling | Number attribute | `uint Sampling`
SamplingText | Number attribute (as text) | `string SamplingText`
CentralResolution | Number attribute | `double CentralResolution`
CentralResolutionText | Number attribute (as text) | `string CentralResolutionText`
Stereo | boolean attribute | `bool Stereo`
InterocularDistance | Number attribute | `double InterocularDistance`
InterocularDistanceText | Number attribute (as text) | `string InterocularDistanceText`
LayerType | Enum attribute | `SpeosSim.SensorImmersive.EnumLayerType LayerType`
LayerTypeIndex | Enum attribute (as index) | `int LayerTypeIndex`
IntegrationAngle | Number attribute | `double IntegrationAngle`
IntegrationAngleText | Number attribute (as text) | `string IntegrationAngleText`
VisuSize | Number attribute | `double VisuSize`
VisuSizeText | Number attribute (as text) | `string VisuSizeText`
Front | boolean attribute | `bool Front`
Back | boolean attribute | `bool Back`
Top | boolean attribute | `bool Top`
Bottom | boolean attribute | `bool Bottom`
Left | boolean attribute | `bool Left`
Right | boolean attribute | `bool Right`
WavelengthStart | Number attribute | `double WavelengthStart`
WavelengthStartText | Number attribute (as text) | `string WavelengthStartText`
WavelengthEnd | Number attribute | `double WavelengthEnd`
WavelengthEndText | Number attribute (as text) | `string WavelengthEndText`
WavelengthNbSamples | Number attribute | `uint WavelengthNbSamples`
WavelengthNbSamplesText | Number attribute (as text) | `string WavelengthNbSamplesText`
WavelengthResolution | Number attribute | `double WavelengthResolution`
WavelengthResolutionText | Number attribute (as text) | `string WavelengthResolutionText`
OriginPoint | Link attribute | `SpeosSim.SensorImmersive.SensorImmersiveOriginPoint OriginPoint`
FrontDirection | Link attribute | `SpeosSim.SensorImmersive.SensorImmersiveFrontDirection FrontDirection`
FrontDirectionReverse | boolean attribute | `bool FrontDirectionReverse`
TopDirection | Link attribute | `SpeosSim.SensorImmersive.SensorImmersiveTopDirection TopDirection`
TopDirectionReverse | boolean attribute | `bool TopDirectionReverse`
AutoFramingFaceSelection | Enum attribute | `SpeosSim.SensorImmersive.EnumAutoFramingFaceSelection AutoFramingFaceSelection`
AutoFramingFaceSelectionIndex | Enum attribute (as index) | `int AutoFramingFaceSelectionIndex`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorImmersive.SensorImmersiveOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorImmersive.SensorImmersiveFrontDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorImmersive.SensorImmersiveTopDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SensorIntensity

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorIntensity> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorIntensity Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorIntensity Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorIntensity Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorIntensity Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorIntensity CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosSim.SensorIntensity.SensorIntensityOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SensorIntensity.SensorIntensityXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SensorIntensity.SensorIntensityYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
SensorType | Enum attribute | `SpeosSim.SensorIntensity.EnumSensorType SensorType`
SensorTypeIndex | Enum attribute (as index) | `int SensorTypeIndex`
FormatType | Enum attribute | `SpeosSim.SensorIntensity.EnumFormatType FormatType`
FormatTypeIndex | Enum attribute (as index) | `int FormatTypeIndex`
IntensityType | Enum attribute | `SpeosSim.SensorIntensity.EnumIntensityType IntensityType`
IntensityTypeIndex | Enum attribute (as index) | `int IntensityTypeIndex`
LayerType | Enum attribute | `SpeosSim.SensorIntensity.EnumLayerType LayerType`
LayerTypeIndex | Enum attribute (as index) | `int LayerTypeIndex`
FaceFiltering | Links attribute | `SpeosSim.SensorIntensity.SensorIntensityFaceFiltering FaceFiltering`
SCAFilteringMode | Enum attribute | `SpeosSim.SensorIntensity.EnumSCAFilteringMode SCAFilteringMode`
SCAFilteringModeIndex | Enum attribute (as index) | `int SCAFilteringModeIndex`
MaximumNbOfSequence | Number attribute | `uint MaximumNbOfSequence`
MaximumNbOfSequenceText | Number attribute (as text) | `string MaximumNbOfSequenceText`
DefineSequencePer | Enum attribute | `SpeosSim.SensorIntensity.EnumDefineSequencePer DefineSequencePer`
DefineSequencePerIndex | Enum attribute (as index) | `int DefineSequencePerIndex`
AdaptativeSampling | File attribute | `string AdaptativeSampling`
AdaptativeSamplingFullPath | File attribute (absolute full path) | `string AdaptativeSamplingFullPath`
ThetaStart | Number attribute | `double ThetaStart`
ThetaStartText | Number attribute (as text) | `string ThetaStartText`
ThetaSampling | Number attribute | `uint ThetaSampling`
ThetaSamplingText | Number attribute (as text) | `string ThetaSamplingText`
ThetaResolution | Number attribute | `double ThetaResolution`
ThetaResolutionText | Number attribute (as text) | `string ThetaResolutionText`
XIsMirrored | boolean attribute | `bool XIsMirrored`
XStart | Number attribute | `double XStart`
XStartText | Number attribute (as text) | `string XStartText`
XEnd | Number attribute | `double XEnd`
XEndText | Number attribute (as text) | `string XEndText`
XNbSamples | Number attribute | `uint XNbSamples`
XNbSamplesText | Number attribute (as text) | `string XNbSamplesText`
XResolution | Number attribute | `double XResolution`
XResolutionText | Number attribute (as text) | `string XResolutionText`
YIsMirrored | boolean attribute | `bool YIsMirrored`
YStart | Number attribute | `double YStart`
YStartText | Number attribute (as text) | `string YStartText`
YEnd | Number attribute | `double YEnd`
YEndText | Number attribute (as text) | `string YEndText`
YNbSamples | Number attribute | `uint YNbSamples`
YNbSamplesText | Number attribute (as text) | `string YNbSamplesText`
YResolution | Number attribute | `double YResolution`
YResolutionText | Number attribute (as text) | `string YResolutionText`
NearField | boolean attribute | `bool NearField`
CellDistance | Number attribute | `double CellDistance`
CellDistanceText | Number attribute (as text) | `string CellDistanceText`
CellDiameter | Number attribute | `double CellDiameter`
CellDiameterText | Number attribute (as text) | `string CellDiameterText`
VisuRadius | Number attribute | `double VisuRadius`
VisuRadiusText | Number attribute (as text) | `string VisuRadiusText`
IntegrationAngle | Number attribute | `double IntegrationAngle`
IntegrationAngleText | Number attribute (as text) | `string IntegrationAngleText`
ResultViewingDirection | Enum attribute | `SpeosSim.SensorIntensity.EnumResultViewingDirection ResultViewingDirection`
ResultViewingDirectionIndex | Enum attribute (as index) | `int ResultViewingDirectionIndex`
ShowGrid | boolean attribute | `bool ShowGrid`
OriginX | Number attribute | `double OriginX`
OriginXText | Number attribute (as text) | `string OriginXText`
OriginY | Number attribute | `double OriginY`
OriginYText | Number attribute (as text) | `string OriginYText`
StepX | Number attribute | `double StepX`
StepXText | Number attribute (as text) | `string StepXText`
StepY | Number attribute | `double StepY`
StepYText | Number attribute (as text) | `string StepYText`
WavelengthStart | Number attribute | `double WavelengthStart`
WavelengthStartText | Number attribute (as text) | `string WavelengthStartText`
WavelengthEnd | Number attribute | `double WavelengthEnd`
WavelengthEndText | Number attribute (as text) | `string WavelengthEndText`
WavelengthNbSamples | Number attribute | `uint WavelengthNbSamples`
WavelengthNbSamplesText | Number attribute (as text) | `string WavelengthNbSamplesText`
WavelengthResolution | Number attribute | `double WavelengthResolution`
WavelengthResolutionText | Number attribute (as text) | `string WavelengthResolutionText`
XMPTemplateFile | File attribute | `string XMPTemplateFile`
XMPTemplateFileFullPath | File attribute (absolute full path) | `string XMPTemplateFileFullPath`
DimensionFromFile | boolean attribute | `bool DimensionFromFile`
DisplayPropertiesFromFile | boolean attribute | `bool DisplayPropertiesFromFile`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorIntensity.SensorIntensityOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorIntensity.SensorIntensityXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorIntensity.SensorIntensityYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorIntensity.SensorIntensityFaceFiltering

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## SensorIrradiance

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorIrradiance> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorIrradiance Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorIrradiance Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorIrradiance Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorIrradiance Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorIrradiance CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
XIsMirrored | boolean attribute | `bool XIsMirrored`
XStart | Number attribute | `double XStart`
XStartText | Number attribute (as text) | `string XStartText`
XEnd | Number attribute | `double XEnd`
XEndText | Number attribute (as text) | `string XEndText`
XNbSamples | Number attribute | `uint XNbSamples`
XNbSamplesText | Number attribute (as text) | `string XNbSamplesText`
XResolution | Number attribute | `double XResolution`
XResolutionText | Number attribute (as text) | `string XResolutionText`
YIsMirrored | boolean attribute | `bool YIsMirrored`
YStart | Number attribute | `double YStart`
YStartText | Number attribute (as text) | `string YStartText`
YEnd | Number attribute | `double YEnd`
YEndText | Number attribute (as text) | `string YEndText`
YNbSamples | Number attribute | `uint YNbSamples`
YNbSamplesText | Number attribute (as text) | `string YNbSamplesText`
YResolution | Number attribute | `double YResolution`
YResolutionText | Number attribute (as text) | `string YResolutionText`
OriginPoint | Link attribute | `SpeosSim.SensorIrradiance.SensorIrradianceOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SensorIrradiance.SensorIrradianceXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SensorIrradiance.SensorIrradianceYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
IlluminanceType | Enum attribute | `SpeosSim.SensorIrradiance.EnumIlluminanceType IlluminanceType`
IlluminanceTypeIndex | Enum attribute (as index) | `int IlluminanceTypeIndex`
IntegrationDirection | Link attribute | `SpeosSim.SensorIrradiance.SensorIrradianceIntegrationDirection IntegrationDirection`
IntegrationDirectionIsReversed | boolean attribute | `bool IntegrationDirectionIsReversed`
XMPTemplateFile | File attribute | `string XMPTemplateFile`
XMPTemplateFileFullPath | File attribute (absolute full path) | `string XMPTemplateFileFullPath`
DimensionFromFile | boolean attribute | `bool DimensionFromFile`
DisplayPropertiesFromFile | boolean attribute | `bool DisplayPropertiesFromFile`
SensorType | Enum attribute | `SpeosSim.SensorIrradiance.EnumSensorType SensorType`
SensorTypeIndex | Enum attribute (as index) | `int SensorTypeIndex`
RayFileType | Enum attribute | `SpeosSim.SensorIrradiance.EnumRayFileType RayFileType`
RayFileTypeIndex | Enum attribute (as index) | `int RayFileTypeIndex`
LayerType | Enum attribute | `SpeosSim.SensorIrradiance.EnumLayerType LayerType`
LayerTypeIndex | Enum attribute (as index) | `int LayerTypeIndex`
FaceFiltering | Links attribute | `SpeosSim.SensorIrradiance.SensorIrradianceFaceFiltering FaceFiltering`
SCAFilteringMode | Enum attribute | `SpeosSim.SensorIrradiance.EnumSCAFilteringMode SCAFilteringMode`
SCAFilteringModeIndex | Enum attribute (as index) | `int SCAFilteringModeIndex`
MaximumNbOfSequence | Number attribute | `uint MaximumNbOfSequence`
MaximumNbOfSequenceText | Number attribute (as text) | `string MaximumNbOfSequenceText`
DefineSequencePer | Enum attribute | `SpeosSim.SensorIrradiance.EnumDefineSequencePer DefineSequencePer`
DefineSequencePerIndex | Enum attribute (as index) | `int DefineSequencePerIndex`
SortSequencesPer | Enum attribute | `SpeosSim.SensorIrradiance.EnumSortSequencesPer SortSequencesPer`
SortSequencesPerIndex | Enum attribute (as index) | `int SortSequencesPerIndex`
IncidentAnglesSampling | Number attribute | `uint IncidentAnglesSampling`
IncidentAnglesSamplingText | Number attribute (as text) | `string IncidentAnglesSamplingText`
WavelengthStart | Number attribute | `double WavelengthStart`
WavelengthStartText | Number attribute (as text) | `string WavelengthStartText`
WavelengthEnd | Number attribute | `double WavelengthEnd`
WavelengthEndText | Number attribute (as text) | `string WavelengthEndText`
WavelengthNbSamples | Number attribute | `uint WavelengthNbSamples`
WavelengthNbSamplesText | Number attribute (as text) | `string WavelengthNbSamplesText`
WavelengthResolution | Number attribute | `double WavelengthResolution`
WavelengthResolutionText | Number attribute (as text) | `string WavelengthResolutionText`
OutputFaces | Links attribute | `SpeosSim.SensorIrradiance.SensorIrradianceOutputFaces OutputFaces`
ShowGrid | boolean attribute | `bool ShowGrid`
OriginX | Number attribute | `double OriginX`
OriginXText | Number attribute (as text) | `string OriginXText`
OriginY | Number attribute | `double OriginY`
OriginYText | Number attribute (as text) | `string OriginYText`
StepX | Number attribute | `double StepX`
StepXText | Number attribute (as text) | `string StepXText`
StepY | Number attribute | `double StepY`
StepYText | Number attribute (as text) | `string StepYText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorIrradiance.SensorIrradianceOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorIrradiance.SensorIrradianceXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorIrradiance.SensorIrradianceYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorIrradiance.SensorIrradianceIntegrationDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorIrradiance.SensorIrradianceFaceFiltering

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SensorIrradiance.SensorIrradianceOutputFaces

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## SensorLidar

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorLidar> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorLidar Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorLidar Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorLidar Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorLidar Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorLidar CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
LidarType | Enum attribute | `SpeosSim.SensorLidar.EnumLidarType LidarType`
LidarTypeIndex | Enum attribute (as index) | `int LidarTypeIndex`
SystemOriginPoint | Link attribute | `SpeosSim.SensorLidar.SensorLidarSystemOriginPoint SystemOriginPoint`
SystemXDirection | Link attribute | `SpeosSim.SensorLidar.SensorLidarSystemXDirection SystemXDirection`
SystemXDirectionReverse | boolean attribute | `bool SystemXDirectionReverse`
SystemYDirection | Link attribute | `SpeosSim.SensorLidar.SensorLidarSystemYDirection SystemYDirection`
SystemYDirectionReverse | boolean attribute | `bool SystemYDirectionReverse`
TrajectoryFile | File attribute | `string TrajectoryFile`
TrajectoryFileFullPath | File attribute (absolute full path) | `string TrajectoryFileFullPath`
ScanningSequenceFile | File attribute | `string ScanningSequenceFile`
ScanningSequenceFileFullPath | File attribute (absolute full path) | `string ScanningSequenceFileFullPath`
RotatingSequenceFile | File attribute | `string RotatingSequenceFile`
RotatingSequenceFileFullPath | File attribute (absolute full path) | `string RotatingSequenceFileFullPath`
SourceOriginPoint | Link attribute | `SpeosSim.SensorLidar.SensorLidarSourceOriginPoint SourceOriginPoint`
SourceXDirection | Link attribute | `SpeosSim.SensorLidar.SensorLidarSourceXDirection SourceXDirection`
SourceXDirectionReverse | boolean attribute | `bool SourceXDirectionReverse`
SourceXPosition | Number attribute | `double SourceXPosition`
SourceXPositionText | Number attribute (as text) | `string SourceXPositionText`
SourceYDirection | Link attribute | `SpeosSim.SensorLidar.SensorLidarSourceYDirection SourceYDirection`
SourceYDirectionReverse | boolean attribute | `bool SourceYDirectionReverse`
SourceYPosition | Number attribute | `double SourceYPosition`
SourceYPositionText | Number attribute (as text) | `string SourceYPositionText`
SpectrumType | Enum attribute | `SpeosSim.SensorLidar.EnumSpectrumType SpectrumType`
SpectrumTypeIndex | Enum attribute (as index) | `int SpectrumTypeIndex`
SpectrumValueWavelength | Number attribute | `double SpectrumValueWavelength`
SpectrumValueWavelengthText | Number attribute (as text) | `string SpectrumValueWavelengthText`
SpectrumValueLibrary | File attribute | `string SpectrumValueLibrary`
SpectrumValueLibraryFullPath | File attribute (absolute full path) | `string SpectrumValueLibraryFullPath`
IntensityType | Enum attribute | `SpeosSim.SensorLidar.EnumIntensityType IntensityType`
IntensityTypeIndex | Enum attribute (as index) | `int IntensityTypeIndex`
IntensityFile | File attribute | `string IntensityFile`
IntensityFileFullPath | File attribute (absolute full path) | `string IntensityFileFullPath`
TotalAngle | Number attribute | `double TotalAngle`
TotalAngleText | Number attribute (as text) | `string TotalAngleText`
FullWidthAtHalfMaximumXAngle | Number attribute | `double FullWidthAtHalfMaximumXAngle`
FullWidthAtHalfMaximumXAngleText | Number attribute (as text) | `string FullWidthAtHalfMaximumXAngleText`
FullWidthAtHalfMaximumYAngle | Number attribute | `double FullWidthAtHalfMaximumYAngle`
FullWidthAtHalfMaximumYAngleText | Number attribute (as text) | `string FullWidthAtHalfMaximumYAngleText`
PulseEnergy | Number attribute | `double PulseEnergy`
PulseEnergyText | Number attribute (as text) | `string PulseEnergyText`
IESThreshold | Number attribute | `double IESThreshold`
IESThresholdText | Number attribute (as text) | `string IESThresholdText`
SensorOriginPoint | Link attribute | `SpeosSim.SensorLidar.SensorLidarSensorOriginPoint SensorOriginPoint`
SensorXDirection | Link attribute | `SpeosSim.SensorLidar.SensorLidarSensorXDirection SensorXDirection`
SensorXDirectionReverse | boolean attribute | `bool SensorXDirectionReverse`
SensorYDirection | Link attribute | `SpeosSim.SensorLidar.SensorLidarSensorYDirection SensorYDirection`
SensorYDirectionReverse | boolean attribute | `bool SensorYDirectionReverse`
DistorsionFile | File attribute | `string DistorsionFile`
DistorsionFileFullPath | File attribute (absolute full path) | `string DistorsionFileFullPath`
Transmittance | Number attribute | `double Transmittance`
TransmittanceText | Number attribute (as text) | `string TransmittanceText`
TransmittanceSpectrumFile | File attribute | `string TransmittanceSpectrumFile`
TransmittanceSpectrumFileFullPath | File attribute (absolute full path) | `string TransmittanceSpectrumFileFullPath`
FocalLength | Number attribute | `double FocalLength`
FocalLengthText | Number attribute (as text) | `string FocalLengthText`
Pupil | Number attribute | `double Pupil`
PupilText | Number attribute (as text) | `string PupilText`
HorizontalFOV | Number attribute | `double HorizontalFOV`
HorizontalFOVText | Number attribute (as text) | `string HorizontalFOVText`
VerticalFOV | Number attribute | `double VerticalFOV`
VerticalFOVText | Number attribute (as text) | `string VerticalFOVText`
ImagerWidth | Number attribute | `double ImagerWidth`
ImagerWidthText | Number attribute (as text) | `string ImagerWidthText`
ImagerHeight | Number attribute | `double ImagerHeight`
ImagerHeightText | Number attribute (as text) | `string ImagerHeightText`
CustomResolution | boolean attribute | `bool CustomResolution`
HorizontalPixels | Number attribute | `uint HorizontalPixels`
HorizontalPixelsText | Number attribute (as text) | `string HorizontalPixelsText`
VerticalPixels | Number attribute | `uint VerticalPixels`
VerticalPixelsText | Number attribute (as text) | `string VerticalPixelsText`
RangeStart | Number attribute | `double RangeStart`
RangeStartText | Number attribute (as text) | `string RangeStartText`
RangeEnd | Number attribute | `double RangeEnd`
RangeEndText | Number attribute (as text) | `string RangeEndText`
RangeSpatialAccuracy | Number attribute | `double RangeSpatialAccuracy`
RangeSpatialAccuracyText | Number attribute (as text) | `string RangeSpatialAccuracyText`
UserDefined | boolean attribute | `bool UserDefined`
AimingAreaOriginPoint | Link attribute | `SpeosSim.SensorLidar.SensorLidarAimingAreaOriginPoint AimingAreaOriginPoint`
AimingAreaXDirection | Link attribute | `SpeosSim.SensorLidar.SensorLidarAimingAreaXDirection AimingAreaXDirection`
AimingAreaXDirectionReverse | boolean attribute | `bool AimingAreaXDirectionReverse`
AimingAreaYDirection | Link attribute | `SpeosSim.SensorLidar.SensorLidarAimingAreaYDirection AimingAreaYDirection`
AimingAreaYDirectionReverse | boolean attribute | `bool AimingAreaYDirectionReverse`
AimingAreaType | Enum attribute | `SpeosSim.SensorLidar.EnumAimingAreaType AimingAreaType`
AimingAreaTypeIndex | Enum attribute (as index) | `int AimingAreaTypeIndex`
AimingAreaWidth | Number attribute | `double AimingAreaWidth`
AimingAreaWidthText | Number attribute (as text) | `string AimingAreaWidthText`
AimingAreaHeight | Number attribute | `double AimingAreaHeight`
AimingAreaHeightText | Number attribute (as text) | `string AimingAreaHeightText`
DisplayImageField | boolean attribute | `bool DisplayImageField`
DisplayObjectField | boolean attribute | `bool DisplayObjectField`
DisplayPupil | boolean attribute | `bool DisplayPupil`
ObjectFieldVisuRadius | Number attribute | `double ObjectFieldVisuRadius`
ObjectFieldVisuRadiusText | Number attribute (as text) | `string ObjectFieldVisuRadiusText`
ColorScaleType | Enum attribute | `SpeosSim.SensorLidar.EnumColorScaleType ColorScaleType`
ColorScaleTypeIndex | Enum attribute (as index) | `int ColorScaleTypeIndex`
ColorScaleFile | File attribute | `string ColorScaleFile`
ColorScaleFileFullPath | File attribute (absolute full path) | `string ColorScaleFileFullPath`
PointThickness | Number attribute | `double PointThickness`
PointThicknessText | Number attribute (as text) | `string PointThicknessText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorLidar.SensorLidarSystemOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarSystemXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarSystemYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarSourceOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarSourceXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarSourceYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarSensorOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarSensorXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarSensorYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarAimingAreaOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarAimingAreaXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLidar.SensorLidarAimingAreaYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SensorLightExpertGroup

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorLightExpertGroup> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorLightExpertGroup Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorLightExpertGroup Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorLightExpertGroup Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorLightExpertGroup Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorLightExpertGroup CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Sensors | Links attribute | `SpeosSim.SensorLightExpertGroup.SensorLightExpertGroupSensors Sensors`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorLightExpertGroup.SensorLightExpertGroupSensors

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## SensorLightField

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorLightField> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorLightField Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorLightField Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorLightField Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorLightField Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorLightField CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosSim.SensorLightField.SensorLightFieldOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SensorLightField.SensorLightFieldXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SensorLightField.SensorLightFieldYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
SensorType | Enum attribute | `SpeosSim.SensorLightField.EnumSensorType SensorType`
SensorTypeIndex | Enum attribute (as index) | `int SensorTypeIndex`
OrientedFaces | Children attribute | `SpeosSim.SensorLightField.SensorLightFieldOrientedFaces OrientedFaces`
IncidentAngleStart | Number attribute | `double IncidentAngleStart`
IncidentAngleStartText | Number attribute (as text) | `string IncidentAngleStartText`
IncidentAngleEnd | Number attribute | `double IncidentAngleEnd`
IncidentAngleEndText | Number attribute (as text) | `string IncidentAngleEndText`
IncidentAngleNbSamples | Number attribute | `uint IncidentAngleNbSamples`
IncidentAngleNbSamplesText | Number attribute (as text) | `string IncidentAngleNbSamplesText`
IncidentAngleResolution | Number attribute | `double IncidentAngleResolution`
IncidentAngleResolutionText | Number attribute (as text) | `string IncidentAngleResolutionText`
AzimuthAngleStart | Number attribute | `double AzimuthAngleStart`
AzimuthAngleStartText | Number attribute (as text) | `string AzimuthAngleStartText`
AzimuthAngleEnd | Number attribute | `double AzimuthAngleEnd`
AzimuthAngleEndText | Number attribute (as text) | `string AzimuthAngleEndText`
AzimuthAngleNbSamples | Number attribute | `uint AzimuthAngleNbSamples`
AzimuthAngleNbSamplesText | Number attribute (as text) | `string AzimuthAngleNbSamplesText`
AzimuthAngleResolution | Number attribute | `double AzimuthAngleResolution`
AzimuthAngleResolutionText | Number attribute (as text) | `string AzimuthAngleResolutionText`
WavelengthStart | Number attribute | `double WavelengthStart`
WavelengthStartText | Number attribute (as text) | `string WavelengthStartText`
WavelengthEnd | Number attribute | `double WavelengthEnd`
WavelengthEndText | Number attribute (as text) | `string WavelengthEndText`
WavelengthNbSamples | Number attribute | `uint WavelengthNbSamples`
WavelengthNbSamplesText | Number attribute (as text) | `string WavelengthNbSamplesText`
WavelengthResolution | Number attribute | `double WavelengthResolution`
WavelengthResolutionText | Number attribute (as text) | `string WavelengthResolutionText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorLightField.SensorLightFieldOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLightField.SensorLightFieldXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLightField.SensorLightFieldYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorLightField.SensorLightFieldOrientedFaces

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.OrientedFace> GetEnumerator()`
Add | Children attribute: Add an object to the children list | `void Add(SpeosSim.OrientedFace childObject)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.OrientedFace> List`
Item | Children attribute: Get child by index | `SpeosSim.OrientedFace Item`

## SensorObserver

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorObserver> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorObserver Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorObserver Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorObserver Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorObserver Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorObserver CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
ObserverHStart | Number attribute | `double ObserverHStart`
ObserverHStartText | Number attribute (as text) | `string ObserverHStartText`
ObserverHEnd | Number attribute | `double ObserverHEnd`
ObserverHEndText | Number attribute (as text) | `string ObserverHEndText`
ObserverHSampling | Number attribute | `uint ObserverHSampling`
ObserverHSamplingText | Number attribute (as text) | `string ObserverHSamplingText`
ObserverHResolution | Number attribute | `double ObserverHResolution`
ObserverHResolutionText | Number attribute (as text) | `string ObserverHResolutionText`
ObserverHMirrorExtent | boolean attribute | `bool ObserverHMirrorExtent`
ObserverVStart | Number attribute | `double ObserverVStart`
ObserverVStartText | Number attribute (as text) | `string ObserverVStartText`
ObserverVEnd | Number attribute | `double ObserverVEnd`
ObserverVEndText | Number attribute (as text) | `string ObserverVEndText`
ObserverVSampling | Number attribute | `uint ObserverVSampling`
ObserverVSamplingText | Number attribute (as text) | `string ObserverVSamplingText`
ObserverVResolution | Number attribute | `double ObserverVResolution`
ObserverVResolutionText | Number attribute (as text) | `string ObserverVResolutionText`
ObserverVMirrorExtent | boolean attribute | `bool ObserverVMirrorExtent`
SizeHStart | Number attribute | `double SizeHStart`
SizeHStartText | Number attribute (as text) | `string SizeHStartText`
SizeHEnd | Number attribute | `double SizeHEnd`
SizeHEndText | Number attribute (as text) | `string SizeHEndText`
SizeHSampling | Number attribute | `uint SizeHSampling`
SizeHSamplingText | Number attribute (as text) | `string SizeHSamplingText`
SizeHResolution | Number attribute | `double SizeHResolution`
SizeHResolutionText | Number attribute (as text) | `string SizeHResolutionText`
SizeHMirrorExtent | boolean attribute | `bool SizeHMirrorExtent`
SizeVStart | Number attribute | `double SizeVStart`
SizeVStartText | Number attribute (as text) | `string SizeVStartText`
SizeVEnd | Number attribute | `double SizeVEnd`
SizeVEndText | Number attribute (as text) | `string SizeVEndText`
SizeVSampling | Number attribute | `uint SizeVSampling`
SizeVSamplingText | Number attribute (as text) | `string SizeVSamplingText`
SizeVResolution | Number attribute | `double SizeVResolution`
SizeVResolutionText | Number attribute (as text) | `string SizeVResolutionText`
SizeVMirrorExtent | boolean attribute | `bool SizeVMirrorExtent`
Distance | Number attribute | `double Distance`
DistanceText | Number attribute (as text) | `string DistanceText`
Focal | Number attribute | `double Focal`
FocalText | Number attribute (as text) | `string FocalText`
Stereo | boolean attribute | `bool Stereo`
InterocularDistance | Number attribute | `double InterocularDistance`
InterocularDistanceText | Number attribute (as text) | `string InterocularDistanceText`
LayerType | Enum attribute | `SpeosSim.SensorObserver.EnumLayerType LayerType`
LayerTypeIndex | Enum attribute (as index) | `int LayerTypeIndex`
IntegrationAngle | Number attribute | `double IntegrationAngle`
IntegrationAngleText | Number attribute (as text) | `string IntegrationAngleText`
ShowVisionField | boolean attribute | `bool ShowVisionField`
HSensorPreview | Number attribute | `double HSensorPreview`
HSensorPreviewText | Number attribute (as text) | `string HSensorPreviewText`
VSensorPreview | Number attribute | `double VSensorPreview`
VSensorPreviewText | Number attribute (as text) | `string VSensorPreviewText`
WavelengthStart | Number attribute | `double WavelengthStart`
WavelengthStartText | Number attribute (as text) | `string WavelengthStartText`
WavelengthEnd | Number attribute | `double WavelengthEnd`
WavelengthEndText | Number attribute (as text) | `string WavelengthEndText`
WavelengthNbSamples | Number attribute | `uint WavelengthNbSamples`
WavelengthNbSamplesText | Number attribute (as text) | `string WavelengthNbSamplesText`
WavelengthResolution | Number attribute | `double WavelengthResolution`
WavelengthResolutionText | Number attribute (as text) | `string WavelengthResolutionText`
OriginPoint | Link attribute | `SpeosSim.SensorObserver.SensorObserverOriginPoint OriginPoint`
HorizontalDirection | Link attribute | `SpeosSim.SensorObserver.SensorObserverHorizontalDirection HorizontalDirection`
HorizontalDirectionReverse | boolean attribute | `bool HorizontalDirectionReverse`
VerticalDirection | Link attribute | `SpeosSim.SensorObserver.SensorObserverVerticalDirection VerticalDirection`
VerticalDirectionReverse | boolean attribute | `bool VerticalDirectionReverse`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorObserver.SensorObserverOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorObserver.SensorObserverHorizontalDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorObserver.SensorObserverVerticalDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SensorPhysicalCamera

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorPhysicalCamera> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorPhysicalCamera Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorPhysicalCamera Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorPhysicalCamera Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorPhysicalCamera Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorPhysicalCamera CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosSim.SensorPhysicalCamera.SensorPhysicalCameraOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SensorPhysicalCamera.SensorPhysicalCameraXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SensorPhysicalCamera.SensorPhysicalCameraYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
LightBoxFile | File attribute | `string LightBoxFile`
LightBoxFileFullPath | File attribute (absolute full path) | `string LightBoxFileFullPath`
NbOfSequences | Number attribute | `int NbOfSequences`
NbOfSequencesText | Number attribute (as text) | `string NbOfSequencesText`
SequenceFile | File attribute | `string SequenceFile`
SequenceFileFullPath | File attribute (absolute full path) | `string SequenceFileFullPath`
SensorIrradiance | Link attribute | `SpeosSim.SensorPhysicalCamera.SensorPhysicalCameraSensorIrradiance SensorIrradiance`
RayTracerPrecision | Enum attribute | `SpeosSim.SensorPhysicalCamera.EnumRayTracerPrecision RayTracerPrecision`
RayTracerPrecisionIndex | Enum attribute (as index) | `int RayTracerPrecisionIndex`
PreviewType | Enum attribute | `SpeosSim.SensorPhysicalCamera.EnumPreviewType PreviewType`
PreviewTypeIndex | Enum attribute (as index) | `int PreviewTypeIndex`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorPhysicalCamera.SensorPhysicalCameraOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorPhysicalCamera.SensorPhysicalCameraXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorPhysicalCamera.SensorPhysicalCameraYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorPhysicalCamera.SensorPhysicalCameraSensorIrradiance

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SensorRadiance

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorRadiance> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorRadiance Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorRadiance Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorRadiance Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorRadiance Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorRadiance CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
DefinitionFrom | Enum attribute | `SpeosSim.SensorRadiance.EnumDefinitionFrom DefinitionFrom`
DefinitionFromIndex | Enum attribute (as index) | `int DefinitionFromIndex`
SourceAmbientModtran | Link attribute | `SpeosSim.SensorRadiance.SensorRadianceSourceAmbientModtran SourceAmbientModtran`
SensorType | Enum attribute | `SpeosSim.SensorRadiance.EnumSensorType SensorType`
SensorTypeIndex | Enum attribute (as index) | `int SensorTypeIndex`
LayerType | Enum attribute | `SpeosSim.SensorRadiance.EnumLayerType LayerType`
LayerTypeIndex | Enum attribute (as index) | `int LayerTypeIndex`
FaceFiltering | Links attribute | `SpeosSim.SensorRadiance.SensorRadianceFaceFiltering FaceFiltering`
SCAFilteringMode | Enum attribute | `SpeosSim.SensorRadiance.EnumSCAFilteringMode SCAFilteringMode`
SCAFilteringModeIndex | Enum attribute (as index) | `int SCAFilteringModeIndex`
MaximumNbOfSequence | Number attribute | `uint MaximumNbOfSequence`
MaximumNbOfSequenceText | Number attribute (as text) | `string MaximumNbOfSequenceText`
DefineSequencePer | Enum attribute | `SpeosSim.SensorRadiance.EnumDefineSequencePer DefineSequencePer`
DefineSequencePerIndex | Enum attribute (as index) | `int DefineSequencePerIndex`
XMPTemplateFile | File attribute | `string XMPTemplateFile`
XMPTemplateFileFullPath | File attribute (absolute full path) | `string XMPTemplateFileFullPath`
DimensionFromFile | boolean attribute | `bool DimensionFromFile`
DisplayPropertiesFromFile | boolean attribute | `bool DisplayPropertiesFromFile`
WavelengthStart | Number attribute | `double WavelengthStart`
WavelengthStartText | Number attribute (as text) | `string WavelengthStartText`
WavelengthEnd | Number attribute | `double WavelengthEnd`
WavelengthEndText | Number attribute (as text) | `string WavelengthEndText`
WavelengthNbSamples | Number attribute | `uint WavelengthNbSamples`
WavelengthNbSamplesText | Number attribute (as text) | `string WavelengthNbSamplesText`
WavelengthResolution | Number attribute | `double WavelengthResolution`
WavelengthResolutionText | Number attribute (as text) | `string WavelengthResolutionText`
ObserverType | Enum attribute | `SpeosSim.SensorRadiance.EnumObserverType ObserverType`
ObserverTypeIndex | Enum attribute (as index) | `int ObserverTypeIndex`
Focal | Number attribute | `double Focal`
FocalText | Number attribute (as text) | `string FocalText`
IntegrationAngle | Number attribute | `double IntegrationAngle`
IntegrationAngleText | Number attribute (as text) | `string IntegrationAngleText`
XIsMirrored | boolean attribute | `bool XIsMirrored`
XStart | Number attribute | `double XStart`
XStartText | Number attribute (as text) | `string XStartText`
XEnd | Number attribute | `double XEnd`
XEndText | Number attribute (as text) | `string XEndText`
XNbSamples | Number attribute | `uint XNbSamples`
XNbSamplesText | Number attribute (as text) | `string XNbSamplesText`
XResolution | Number attribute | `double XResolution`
XResolutionText | Number attribute (as text) | `string XResolutionText`
YIsMirrored | boolean attribute | `bool YIsMirrored`
YStart | Number attribute | `double YStart`
YStartText | Number attribute (as text) | `string YStartText`
YEnd | Number attribute | `double YEnd`
YEndText | Number attribute (as text) | `string YEndText`
YNbSamples | Number attribute | `uint YNbSamples`
YNbSamplesText | Number attribute (as text) | `string YNbSamplesText`
YResolution | Number attribute | `double YResolution`
YResolutionText | Number attribute (as text) | `string YResolutionText`
OriginPoint | Link attribute | `SpeosSim.SensorRadiance.SensorRadianceOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SensorRadiance.SensorRadianceXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SensorRadiance.SensorRadianceYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
HPlane | Number attribute | `double HPlane`
HPlaneText | Number attribute (as text) | `string HPlaneText`
VPlane | Number attribute | `double VPlane`
VPlaneText | Number attribute (as text) | `string VPlaneText`
HNbSamples | Number attribute | `uint HNbSamples`
HNbSamplesText | Number attribute (as text) | `string HNbSamplesText`
HResolution | Number attribute | `double HResolution`
HResolutionText | Number attribute (as text) | `string HResolutionText`
VNbSamples | Number attribute | `uint VNbSamples`
VNbSamplesText | Number attribute (as text) | `string VNbSamplesText`
VResolution | Number attribute | `double VResolution`
VResolutionText | Number attribute (as text) | `string VResolutionText`
ObserverPoint | Link attribute | `SpeosSim.SensorRadiance.SensorRadianceObserverPoint ObserverPoint`
FocalPoint | Link attribute | `SpeosSim.SensorRadiance.SensorRadianceFocalPoint FocalPoint`
FrontDirection | Link attribute | `SpeosSim.SensorRadiance.SensorRadianceFrontDirection FrontDirection`
FrontDirectionReverse | boolean attribute | `bool FrontDirectionReverse`
TopDirection | Link attribute | `SpeosSim.SensorRadiance.SensorRadianceTopDirection TopDirection`
TopDirectionReverse | boolean attribute | `bool TopDirectionReverse`
ShowGrid | boolean attribute | `bool ShowGrid`
OriginX | Number attribute | `double OriginX`
OriginXText | Number attribute (as text) | `string OriginXText`
OriginY | Number attribute | `double OriginY`
OriginYText | Number attribute (as text) | `string OriginYText`
StepX | Number attribute | `double StepX`
StepXText | Number attribute (as text) | `string StepXText`
StepY | Number attribute | `double StepY`
StepYText | Number attribute (as text) | `string StepYText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorRadiance.SensorRadianceSourceAmbientModtran

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V252.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V252.IDocObject LinkedObject`

### SensorRadiance.SensorRadianceFaceFiltering

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SensorRadiance.SensorRadianceOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorRadiance.SensorRadianceXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorRadiance.SensorRadianceYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorRadiance.SensorRadianceObserverPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorRadiance.SensorRadianceFocalPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorRadiance.SensorRadianceFrontDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorRadiance.SensorRadianceTopDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SensorRotatingLidar

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SensorRotatingLidar> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SensorRotatingLidar Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SensorRotatingLidar Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SensorRotatingLidar Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SensorRotatingLidar Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SensorRotatingLidar CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosSim.SensorRotatingLidar.SensorRotatingLidarOriginPoint OriginPoint`
HorizontalDirection | Link attribute | `SpeosSim.SensorRotatingLidar.SensorRotatingLidarHorizontalDirection HorizontalDirection`
HorizontalDirectionReverse | boolean attribute | `bool HorizontalDirectionReverse`
VerticalDirection | Link attribute | `SpeosSim.SensorRotatingLidar.SensorRotatingLidarVerticalDirection VerticalDirection`
VerticalDirectionReverse | boolean attribute | `bool VerticalDirectionReverse`
ColorScaleType | Enum attribute | `SpeosSim.SensorRotatingLidar.EnumColorScaleType ColorScaleType`
ColorScaleTypeIndex | Enum attribute (as index) | `int ColorScaleTypeIndex`
ColorScaleFile | File attribute | `string ColorScaleFile`
ColorScaleFileFullPath | File attribute (absolute full path) | `string ColorScaleFileFullPath`
HMin | Number attribute | `double HMin`
HMinText | Number attribute (as text) | `string HMinText`
HMax | Number attribute | `double HMax`
HMaxText | Number attribute (as text) | `string HMaxText`
HResolution | Number attribute | `double HResolution`
HResolutionText | Number attribute (as text) | `string HResolutionText`
VerticalChannelFile | File attribute | `string VerticalChannelFile`
VerticalChannelFileFullPath | File attribute (absolute full path) | `string VerticalChannelFileFullPath`
RangeMin | Number attribute | `double RangeMin`
RangeMinText | Number attribute (as text) | `string RangeMinText`
RangeMax | Number attribute | `double RangeMax`
RangeMaxText | Number attribute (as text) | `string RangeMaxText`
PointCloud | boolean attribute | `bool PointCloud`
PointThickness | Number attribute | `double PointThickness`
PointThicknessText | Number attribute (as text) | `string PointThicknessText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SensorRotatingLidar.SensorRotatingLidarOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorRotatingLidar.SensorRotatingLidarHorizontalDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SensorRotatingLidar.SensorRotatingLidarVerticalDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SimulationDirect

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SimulationDirect> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SimulationDirect Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SimulationDirect Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SimulationDirect Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SimulationDirect Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SimulationDirect CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
Export | Run the Export command. Output directory content will be erased during process | `void Export(string outputDirectoryPath)`
LinkedExport | Run the LinkedExport command | `void LinkedExport()`
Isolate | Run the Isolate command | `void Isolate()`
GetResultFilePaths | Get the list of paths of all computation resulting files | `System.String[] GetResultFilePaths()`
GetSimulationSettings | Get the simulation common settings | `SpeosSim.SimulationSettings GetSimulationSettings()`
SetSimulationSettings | Set the simulation common settings | `void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)`
GetDirectSimulationSettings | Get the direct simulation specific settings | `SpeosSim.Specific.DirectSimulationSettings GetDirectSimulationSettings()`
SetDirectSimulationSettings | Set the direct simulation specific settings | `void SetDirectSimulationSettings(SpeosSim.Specific.DirectSimulationSettings directSimulationSettings)
SetDirectSimulationSettings | Set the direct simulation specific settings | `void SetDirectSimulationSettings(bool fastTransmissionGathering, bool dispersion, int automaticSaveFrequencySeconds)
GpuCompute | Run the GPU Compute command | `void GpuCompute()`
GetEstimatedRam | Get an estimate of the RAM (memory in bytes) that will be required for the simulation results. Returns 'None/Null' if the estimate is not available. | `uint64? GetEstimatedRam()`
DoesRulesSucceed | Will check all rules of all XMP If zero rules found, return false If at least one rule fail, return false | `bool DoesRulesSucceed()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Geometries | Children attribute | `SpeosSim.SimulationDirect.SimulationDirectGeometries Geometries`
RayFileType | Enum attribute | `SpeosSim.SimulationDirect.EnumRayFileType RayFileType`
RayFileTypeIndex | Enum attribute (as index) | `int RayFileTypeIndex`
Sources | Links attribute | `SpeosSim.SimulationDirect.SimulationDirectSources Sources`
Sensors | Children attribute | `SpeosSim.SimulationDirect.SimulationDirectSensors Sensors`
UsesLXP | boolean attribute | `bool UsesLXP`
LXPMaxPath | Number attribute | `int LXPMaxPath`
LXPMaxPathText | Number attribute (as text) | `string LXPMaxPathText`
HasRayNbLimit | boolean attribute | `bool HasRayNbLimit`
NbRays | Number attribute | `System.Int64 NbRays`
NbRaysText | Number attribute (as text) | `string NbRaysText`
HasDurationLimit | boolean attribute | `bool HasDurationLimit`
DurationLimit | Time duration attribute : can either be defined by a Double or a TimeSpan value | `Speos.Foundation.Utils.TimeDuration DurationLimit`
DurationLimitText | Number attribute (as text) | `string DurationLimitText`
AmbientMaterial | File attribute | `string AmbientMaterial`
AmbientMaterialFullPath | File attribute (absolute full path) | `string AmbientMaterialFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SimulationDirect.SimulationDirectGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.FTGEnabledGeometry> GetEnumerator()`
Add | Children attribute: Add an object to the children list | `void Add(SpeosSim.FTGEnabledGeometry childObject)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.FTGEnabledGeometry> List`
Item | Children attribute: Get child by index | `SpeosSim.FTGEnabledGeometry Item`

### SimulationDirect.SimulationDirectSources

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SimulationDirect.SimulationDirectSensors

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.LXPEnabledSensor> GetEnumerator()`
Add | Children attribute: Add an object to the children list | `void Add(SpeosSim.LXPEnabledSensor childObject)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.LXPEnabledSensor> List`
Item | Children attribute: Get child by index | `SpeosSim.LXPEnabledSensor Item`

## SimulationHoa

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SimulationHoa> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SimulationHoa Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SimulationHoa Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SimulationHoa Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SimulationHoa Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SimulationHoa CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
GetResultFilePaths | Get the list of paths of all computation resulting files | System.String[] GetResultFilePaths()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Eyebox | Child CustomObject attribute | `SpeosSim.HoaEyeBox Eyebox`
TargetImage | Child CustomObject attribute | `SpeosSim.HoaTargetImage TargetImage`
Windshield | Child CustomObject attribute | `SpeosSim.HoaWindshield Windshield`
Mirrors | Child CustomObject attribute | `SpeosSim.HoaMirrors Mirrors`
PGU | Child CustomObject attribute | `SpeosSim.HoaPGU PGU`
Report | Child CustomObject attribute | `SpeosSim.HoaReport Report`
Warping | Child CustomObject attribute | `SpeosSim.HoaWarping Warping`
VehicleAxis | Link attribute | `SpeosSim.SimulationHoa.SimulationHoaVehicleAxis VehicleAxis`
ReverseVehiculeAxisDirection | boolean attribute | `bool ReverseVehiculeAxisDirection`
TopAxis | Link attribute | `SpeosSim.SimulationHoa.SimulationHoaTopAxis TopAxis`
ReverseTopAxisDirection | boolean attribute | `bool ReverseTopAxisDirection`
VisualisationPerEyeboxSample | boolean attribute | `bool VisualisationPerEyeboxSample`
VisualisationPerOpticalVolume | boolean attribute | `bool VisualisationPerOpticalVolume`
ZoomFactor | Number attribute | `int ZoomFactor`
ZoomFactorText | Number attribute (as text) | `string ZoomFactorText`
EyeboxSample | boolean attribute | `bool EyeboxSample`
VisionMode | Enum attribute | `SpeosSim.SimulationHoa.EnumVisionMode VisionMode`
VisionModeIndex | Enum attribute (as index) | `int VisionModeIndex`
HorizontalSample | Number attribute | `int HorizontalSample`
HorizontalSampleText | Number attribute (as text) | `string HorizontalSampleText`
VerticalSample | Number attribute | `int VerticalSample`
VerticalSampleText | Number attribute (as text) | `string VerticalSampleText`
AdaptiveSample | Number attribute | `int AdaptiveSample`
AdaptiveSampleText | Number attribute (as text) | `string AdaptiveSampleText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SimulationHoa.SimulationHoaVehicleAxis

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SimulationHoa.SimulationHoaTopAxis

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SimulationInteractive

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SimulationInteractive> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SimulationInteractive Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SimulationInteractive Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SimulationInteractive Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SimulationInteractive Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SimulationInteractive CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
ExportRaysAsGeometry | Export the simulation rays as geometry | `void ExportRaysAsGeometry()`
GetResultFilePaths | Get the list of paths of all computation resulting files | `System.String[] GetResultFilePaths()`
GetSimulationSettings | Get the simulation common settings | `SpeosSim.SimulationSettings GetSimulationSettings()`
SetSimulationSettings | Set the simulation common settings | `void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)`
SetInteractiveSimulationSettings | Set the interactive simulation specific settings | `void SetInteractiveSimulationSettings(bool DrawRays, bool DrawImpacts, bool ReportImpact)`
GetInteractiveSimulationSettings | Get the interactive simulation specific settings | `void GetInteractiveSimulationSettings(ref System.Boolean& DrawRays, ref System.Boolean& DrawImpacts, ref System.Boolean& ReportImpact)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
RaysThickness | Number attribute | `int RaysThickness`
RaysThicknessText | Number attribute (as text) | `string RaysThicknessText`
FlagLXPActivation | boolean attribute | `bool FlagLXPActivation`
AmbientMaterial | File attribute | `string AmbientMaterial`
AmbientMaterialFullPath | File attribute (absolute full path) | `string AmbientMaterialFullPath`
Geometries | Links attribute | `SpeosSim.SimulationInteractive.SimulationInteractiveGeometries Geometries`
Sources | Links attribute | `SpeosSim.SimulationInteractive.SimulationInteractiveSources Sources`
Sensors | Links attribute | `SpeosSim.SimulationInteractive.SimulationInteractiveSensors Sensors`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SimulationInteractive.SimulationInteractiveGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SimulationInteractive.SimulationInteractiveSources

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SimulationInteractive.SimulationInteractiveSensors

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## SimulationInverse

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SimulationInverse> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SimulationInverse Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SimulationInverse Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SimulationInverse Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SimulationInverse Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SimulationInverse CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
Export | Run the Export command. Output directory content will be erase during process | `void Export(string outputDirectoryPath)
LinkedExport | Run the LinkedExport command | `void LinkedExport()`
Isolate | Run the Isolate command | `void Isolate()`
GetResultFilePaths | Get the list of paths of all computation resulting files | `System.String[] GetResultFilePaths()`
GetSimulationSettings | Get the simulation common settings | `SpeosSim.SimulationSettings GetSimulationSettings()`
SetSimulationSettings | Set the simulation common settings | `void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)`
GetInverseSimulationSettings | Get the inverse simulation specific settings | `SpeosSim.InverseSimulationSettings GetInverseSimulationSettings()`
SetInverseSimulationSettings | Set the inverse simulation specific settings | `void SetInverseSimulationSettings(SpeosSim.InverseSimulationSettings inverseSimulationSettings)
GpuCompute | Run the GPU Compute command | `void GpuCompute()`
GetEstimatedRam | Get an estimate of the RAM (memory in bytes) that will be required for the simulation results. Returns 'None/Null' if the estimate is not available. | `uint64? GetEstimatedRam()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
UseLXP | boolean attribute | `bool UseLXP`
LXPMaxPaths | Number attribute | `int LXPMaxPaths`
LXPMaxPathsText | Number attribute (as text) | `string LXPMaxPathsText`
AmbientMaterial | File attribute | `string AmbientMaterial`
AmbientMaterialFullPath | File attribute (absolute full path) | `string AmbientMaterialFullPath`
HasTimeline | boolean attribute | `bool HasTimeline`
TimelineStart | Time duration attribute : can either be defined by a Double or a TimeSpan value | `Speos.Foundation.Utils.TimeDuration TimelineStart`
TimelineStartText | Number attribute (as text) | `string TimelineStartText`
Geometries | Children attribute | `SpeosSim.SimulationInverse.SimulationInverseGeometries Geometries`
Sources | Links attribute | `SpeosSim.SimulationInverse.SimulationInverseSources Sources`
Sensors | Children attribute | `SpeosSim.SimulationInverse.SimulationInverseSensors Sensors`
OutputFaces | Links attribute | `SpeosSim.SimulationInverse.SimulationInverseOutputFaces OutputFaces`
OutputSources | Links attribute | `SpeosSim.SimulationInverse.SimulationInverseOutputSources OutputSources`
NbPassesStop | boolean attribute | `bool NbPassesStop`
NbPassesLimit | Number attribute | `uint NbPassesLimit`
NbPassesLimitText | Number attribute (as text) | `string NbPassesLimitText`
DurationStop | boolean attribute | `bool DurationStop`
DurationLimit | Time duration attribute : can either be defined by a Double or a TimeSpan value | `Speos.Foundation.Utils.TimeDuration DurationLimit`
DurationLimitText | Number attribute (as text) | `string DurationLimitText`
RelativeStop | Number attribute | `System.Int64 RelativeStop`
RelativeStopText | Number attribute (as text) | `string RelativeStopText`
AbsoluteStop | Number attribute | `System.Int64 AbsoluteStop`
AbsoluteStopText | Number attribute (as text) | `string AbsoluteStopText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SimulationInverse.SimulationInverseGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.FTGEnabledGeometry> GetEnumerator()`
Add | Children attribute: Add an object to the children list | `void Add(SpeosSim.FTGEnabledGeometry childObject)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.FTGEnabledGeometry> List`
Item | Children attribute: Get child by index | `SpeosSim.FTGEnabledGeometry Item`

### SimulationInverse.SimulationInverseSources

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SimulationInverse.SimulationInverseSensors

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.LXPEnabledSensor> GetEnumerator()`
Add | Children attribute: Add an object to the children list | `void Add(SpeosSim.LXPEnabledSensor childObject)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.LXPEnabledSensor> List`
Item | Children attribute: Get child by index | `SpeosSim.LXPEnabledSensor Item`

### SimulationInverse.SimulationInverseOutputFaces

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SimulationInverse.SimulationInverseOutputSources

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## SimulationIsolated

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SimulationIsolated> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SimulationIsolated Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SimulationIsolated Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SimulationIsolated Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SimulationIsolated Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SimulationIsolated CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## SimulationLidar

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SimulationLidar> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SimulationLidar Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SimulationLidar Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SimulationLidar Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SimulationLidar Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SimulationLidar CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
Export | Run the Export command. Output directory content will be erase during process | `void Export(string outputDirectoryPath)`
LinkedExport | Run the LinkedExport command | `void LinkedExport()`
Isolate | Run the Isolate command | `void Isolate()`
GetResultFilePaths | Get the list of paths of all computation resulting files | `System.String[] GetResultFilePaths()`
GetSimulationSettings | Get the simulation common settings | `SpeosSim.SimulationSettings GetSimulationSettings()`
SetSimulationSettings | Set the simulation common settings | `void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Geometries | Links attribute | `SpeosSim.SimulationLidar.SimulationLidarGeometries Geometries`
Sensors | Links attribute | `SpeosSim.SimulationLidar.SimulationLidarSensors Sensors`
HasRayNumberLimit | boolean attribute | `bool HasRayNumberLimit`
NumberOfRays | Number attribute | `System.Int64 NumberOfRays`
NumberOfRaysText | Number attribute (as text) | `string NumberOfRaysText`
HasDurationLimit | boolean attribute | `bool HasDurationLimit`
DurationLimit | Time duration attribute : can either be defined by a Double or a TimeSpan value | `Speos.Foundation.Utils.TimeDuration DurationLimit`
DurationLimitText | Number attribute (as text) | `string DurationLimitText`
SourceSampling | Number attribute | `uint SourceSampling`
SourceSamplingText | Number attribute (as text) | `string SourceSamplingText`
SensorSampling | Number attribute | `uint SensorSampling`
SensorSamplingText | Number attribute (as text) | `string SensorSamplingText`
AmbientMaterial | File attribute | `string AmbientMaterial`
AmbientMaterialFullPath | File attribute (absolute full path) | `string AmbientMaterialFullPath`
HasTimeline | boolean attribute | `bool HasTimeline`
FieldsOfView | boolean attribute | `bool FieldsOfView`
GeometricVisualization | Enum attribute | `SpeosSim.SimulationLidar.EnumGeometricVisualization GeometricVisualization`
GeometricVisualizationIndex | Enum attribute (as index) | `int GeometricVisualizationIndex`
MapOfDepth | boolean attribute | `bool MapOfDepth`
RawTimeOfFlight | boolean attribute | `bool RawTimeOfFlight`
TimelineStart | Time duration attribute : can either be defined by a Double or a TimeSpan value | `Speos.Foundation.Utils.TimeDuration TimelineStart`
TimelineStartText | Number attribute (as text) | `string TimelineStartText`
TimelineEnd | Time duration attribute : can either be defined by a Double or a TimeSpan value | `Speos.Foundation.Utils.TimeDuration TimelineEnd`
TimelineEndText | Number attribute (as text) | `string TimelineEndText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SimulationLidar.SimulationLidarGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SimulationLidar.SimulationLidarSensors

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## SimulationLinkedExport

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SimulationLinkedExport> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SimulationLinkedExport Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SimulationLinkedExport Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SimulationLinkedExport Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SimulationLinkedExport Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SimulationLinkedExport CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
SpeosSimulationFile | File attribute | `string SpeosSimulationFile
SpeosSimulationFileFullPath | File attribute (absolute full path) | `string SpeosSimulationFileFullPath
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## SimulationRotatingLidar

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SimulationRotatingLidar> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SimulationRotatingLidar Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SimulationRotatingLidar Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SimulationRotatingLidar Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SimulationRotatingLidar Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SimulationRotatingLidar CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
GetResultFilePaths | Get the list of paths of all computation resulting files | `System.String[] GetResultFilePaths()`
GetSimulationSettings | Get the simulation common settings | `SpeosSim.SimulationSettings GetSimulationSettings()`
SetSimulationSettings | Set the simulation common settings | `void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Geometries | Links attribute | `SpeosSim.SimulationRotatingLidar.SimulationRotatingLidarGeometries Geometries`
Sensors | Links attribute | `SpeosSim.SimulationRotatingLidar.SimulationRotatingLidarSensors Sensors`
Visualization | Enum attribute | `SpeosSim.SimulationRotatingLidar.EnumVisualization Visualization`
VisualizationIndex | Enum attribute (as index) | `int VisualizationIndex`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SimulationRotatingLidar.SimulationRotatingLidarGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SimulationRotatingLidar.SimulationRotatingLidarSensors

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`


## SourceAmbientCIEGeneral

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceAmbientCIEGeneral> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceAmbientCIEGeneral Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceAmbientCIEGeneral Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceAmbientCIEGeneral Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceAmbientCIEGeneral Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceAmbientCIEGeneral CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
GetLocationPossibleValues | string list attribute: List possible values | `IEnumerable<string> GetLocationPossibleValues()`
GetTimeZonePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetTimeZonePossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
PreviewSize | Number attribute | `double PreviewSize`
PreviewSizeText | Number attribute (as text) | `string PreviewSizeText`
ZenithDirection | Link attribute | `SpeosSim.SourceAmbientCIEGeneral.SourceAmbientCIEGeneralZenithDirection ZenithDirection`
ZenithDirectionReverse | boolean attribute | `bool ZenithDirectionReverse`
CIEType | Enum attribute | `SpeosSim.SourceAmbientCIEGeneral.EnumCIEType CIEType`
CIETypeIndex | Enum attribute (as index) | `int CIETypeIndex`
Luminance | Number attribute | `double Luminance`
LuminanceText | Number attribute (as text) | `string LuminanceText`
SunType | Enum attribute | `SpeosSim.SourceAmbientCIEGeneral.EnumSunType SunType`
SunTypeIndex | Enum attribute (as index) | `int SunTypeIndex`
NorthDirection | Link attribute | `SpeosSim.SourceAmbientCIEGeneral.SourceAmbientCIEGeneralNorthDirection NorthDirection`
NorthDirectionReverse | boolean attribute | `bool NorthDirectionReverse`
SunDirection | Link attribute | `SpeosSim.SourceAmbientCIEGeneral.SourceAmbientCIEGeneralSunDirection SunDirection`
SunDirectionReverse | boolean attribute | `bool SunDirectionReverse`
SunThetaPosition | Number attribute | `double SunThetaPosition`
SunThetaPositionText | Number attribute (as text) | `string SunThetaPositionText`
SunPhiPosition | Number attribute | `double SunPhiPosition`
SunPhiPositionText | Number attribute (as text) | `string SunPhiPositionText`
Location | string list selection attribute | `string Location`
TimeZone | string list selection attribute | `string TimeZone`
Longitude | Number attribute | `double Longitude`
LongitudeText | Number attribute (as text) | `string LongitudeText`
Latitude | Number attribute | `double Latitude`
LatitudeText | Number attribute (as text) | `string LatitudeText`
DateTime | Number attribute | `System.DateTime DateTime`
DateTimeText | Number attribute (as text) | `string DateTimeText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceAmbientCIEGeneral.SourceAmbientCIEGeneralZenithDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceAmbientCIEGeneral.SourceAmbientCIEGeneralNorthDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceAmbientCIEGeneral.SourceAmbientCIEGeneralSunDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceAmbientCIEOvercast

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceAmbientCIEOvercast> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceAmbientCIEOvercast Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceAmbientCIEOvercast Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceAmbientCIEOvercast Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceAmbientCIEOvercast Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceAmbientCIEOvercast CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
PreviewSize | Number attribute | `double PreviewSize`
PreviewSizeText | Number attribute (as text) | `string PreviewSizeText`
ZenithDirection | Link attribute | `SpeosSim.SourceAmbientCIEOvercast.SourceAmbientCIEOvercastZenithDirection ZenithDirection`
ZenithDirectionReverse | boolean attribute | `bool ZenithDirectionReverse`
Luminance | Number attribute | `double Luminance`
LuminanceText | Number attribute (as text) | `string LuminanceText`
SpectrumType | Enum attribute | `SpeosSim.SourceAmbientCIEOvercast.EnumSpectrumType SpectrumType`
SpectrumTypeIndex | Enum attribute (as index) | `int SpectrumTypeIndex`
SpectrumValueTemperature | Number attribute | `double SpectrumValueTemperature`
SpectrumValueTemperatureText | Number attribute (as text) | `string SpectrumValueTemperatureText`
SpectrumValueLibrary | File attribute | `string SpectrumValueLibrary`
SpectrumValueLibraryFullPath | File attribute (absolute full path) | `string SpectrumValueLibraryFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceAmbientCIEOvercast.SourceAmbientCIEOvercastZenithDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceAmbientEnvironment

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceAmbientEnvironment> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceAmbientEnvironment Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceAmbientEnvironment Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceAmbientEnvironment Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceAmbientEnvironment Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceAmbientEnvironment CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
PreviewSize | Number attribute | `double PreviewSize`
PreviewSizeText | Number attribute (as text) | `string PreviewSizeText`
ZenithDirection | Link attribute | `SpeosSim.SourceAmbientEnvironment.SourceAmbientEnvironmentZenithDirection ZenithDirection`
ZenithDirectionReverse | boolean attribute | `bool ZenithDirectionReverse`
NorthDirection | Link attribute | `SpeosSim.SourceAmbientEnvironment.SourceAmbientEnvironmentNorthDirection NorthDirection`
NorthDirectionReverse | boolean attribute | `bool NorthDirectionReverse`
Luminance | Number attribute | `double Luminance`
LuminanceText | Number attribute (as text) | `string LuminanceText`
ImageFile | File attribute | `string ImageFile`
ImageFileFullPath | File attribute (absolute full path) | `string ImageFileFullPath`
ColorSpace | Enum attribute | `SpeosSim.SourceAmbientEnvironment.EnumColorSpace ColorSpace`
ColorSpaceIndex | Enum attribute (as index) | `int ColorSpaceIndex`
WhitePointType | Enum attribute | `SpeosSim.SourceAmbientEnvironment.EnumWhitePointType WhitePointType`
WhitePointTypeIndex | Enum attribute (as index) | `int WhitePointTypeIndex`
xColor | Number attribute | `double xColor`
xColorText | Number attribute (as text) | `string xColorText`
yColor | Number attribute | `double yColor`
yColorText | Number attribute (as text) | `string yColorText`
RedSpectrumValueLibrary | File attribute | `string RedSpectrumValueLibrary`
RedSpectrumValueLibraryFullPath | File attribute (absolute full path) | `string RedSpectrumValueLibraryFullPath`
GreenSpectrumValueLibrary | File attribute | `string GreenSpectrumValueLibrary`
GreenSpectrumValueLibraryFullPath | File attribute (absolute full path) | `string GreenSpectrumValueLibraryFullPath`
BlueSpectrumValueLibrary | File attribute | `string BlueSpectrumValueLibrary`
BlueSpectrumValueLibraryFullPath | File attribute (absolute full path) | `string BlueSpectrumValueLibraryFullPath`
GroundPlaneOriginPoint | Link attribute | `SpeosSim.SourceAmbientEnvironment.SourceAmbientEnvironmentGroundPlaneOriginPoint GroundPlaneOriginPoint`
GroundPlaneHeight | Number attribute | `double GroundPlaneHeight`
GroundPlaneHeightText | Number attribute (as text) | `string GroundPlaneHeightText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceAmbientEnvironment.SourceAmbientEnvironmentZenithDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceAmbientEnvironment.SourceAmbientEnvironmentNorthDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceAmbientEnvironment.SourceAmbientEnvironmentGroundPlaneOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceAmbientModtran

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable FromSelection(IEnumerable selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceAmbientModtran Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceAmbientModtran Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceAmbientModtran Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceAmbientModtran Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceAmbientModtran CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V252.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V252.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable GetChildren()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
ZenithDirection | Link attribute | `SpeosSim.SourceAmbientModtran.SourceAmbientModtranZenithDirection ZenithDirection`
ZenithDirectionReverse | Boolean attribute | `bool ZenithDirectionReverse`
NorthDirection | Link attribute | `SpeosSim.SourceAmbientModtran.SourceAmbientModtranNorthDirection NorthDirection`
NorthDirectionReverse | Boolean attribute | `bool NorthDirectionReverse`
GroundPlaneOriginPoint | Link attribute | `SpeosSim.SourceAmbientModtran.SourceAmbientModtranGroundPlaneOriginPoint GroundPlaneOriginPoint`
ModtranFile | File attribute | `Speos.Foundation.Utils.File.FilePath ModtranFile`
ModtranFileFullPath | File attribute (absolute full path) | `string ModtranFileFullPath`
ZenithalSampling | Number attribute | `int ZenithalSampling`
ZenithalSamplingText | Number attribute (as text) | `string ZenithalSamplingText`
AzimuthalSampling | Number attribute | `int AzimuthalSampling`
AzimuthalSamplingText | Number attribute (as text) | `string AzimuthalSamplingText`
SpectrumWidth | Number attribute | `double SpectrumWidth`
SpectrumWidthText | Number attribute (as text) | `string SpectrumWidthText`
PreviewSize | Number attribute | `double PreviewSize`
PreviewSizeText | Number attribute (as text) | `string PreviewSizeText`
KeepIntermediateInputFiles | Boolean attribute | `bool KeepIntermediateInputFiles`
KeepIntermediateOutputFiles | Boolean attribute | `bool KeepIntermediateOutputFiles`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V252.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceAmbientModtran.SourceAmbientModtranZenithDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V252.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V252.IDocObject LinkedObject`è`

### SourceAmbientModtran.SourceAmbientModtranNorthDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V252.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V252.IDocObject LinkedObject`

### SourceAmbientModtran.SourceAmbientModtranGroundPlaneOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V252.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V252.IDocObject LinkedObject`

## SourceAmbientNaturalLight

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceAmbientNaturalLight> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceAmbientNaturalLight Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceAmbientNaturalLight Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceAmbientNaturalLight Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceAmbientNaturalLight Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceAmbientNaturalLight CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
GetLocationPossibleValues | string list attribute: List possible values | `IEnumerable<string> GetLocationPossibleValues()`
GetTimeZonePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetTimeZonePossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
PreviewSize | Number attribute | `double PreviewSize`
PreviewSizeText | Number attribute (as text) | `string PreviewSizeText`
ZenithDirection | Link attribute | `SpeosSim.SourceAmbientNaturalLight.SourceAmbientNaturalLightZenithDirection ZenithDirection`
ZenithDirectionReverse | boolean attribute | `bool ZenithDirectionReverse`
Turbidity | Number attribute | `double Turbidity`
TurbidityText | Number attribute (as text) | `string TurbidityText`
SunType | Enum attribute | `SpeosSim.SourceAmbientNaturalLight.EnumSunType SunType`
SunTypeIndex | Enum attribute (as index) | `int SunTypeIndex`
NorthDirection | Link attribute | `SpeosSim.SourceAmbientNaturalLight.SourceAmbientNaturalLightNorthDirection NorthDirection`
NorthDirectionReverse | boolean attribute | `bool NorthDirectionReverse`
SunDirection | Link attribute | `SpeosSim.SourceAmbientNaturalLight.SourceAmbientNaturalLightSunDirection SunDirection`
SunDirectionReverse | boolean attribute | `bool SunDirectionReverse`
SimulationWithSky | boolean attribute | `bool SimulationWithSky`
SunThetaPosition | Number attribute | `double SunThetaPosition`
SunThetaPositionText | Number attribute (as text) | `string SunThetaPositionText`
SunPhiPosition | Number attribute | `double SunPhiPosition`
SunPhiPositionText | Number attribute (as text) | `string SunPhiPositionText`
Location | string list selection attribute | `string Location`
TimeZone | string list selection attribute | `string TimeZone`
Longitude | Number attribute | `double Longitude`
LongitudeText | Number attribute (as text) | `string LongitudeText`
Latitude | Number attribute | `double Latitude`
LatitudeText | Number attribute (as text) | `string LatitudeText`
DateTime | Number attribute | `System.DateTime DateTime`
DateTimeText | Number attribute (as text) | `string DateTimeText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceAmbientNaturalLight.SourceAmbientNaturalLightZenithDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceAmbientNaturalLight.SourceAmbientNaturalLightNorthDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceAmbientNaturalLight.SourceAmbientNaturalLightSunDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceAmbientUniform

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceAmbientUniform> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceAmbientUniform Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceAmbientUniform Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceAmbientUniform Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceAmbientUniform Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceAmbientUniform CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
PreviewSize | Number attribute | `double PreviewSize`
PreviewSizeText | Number attribute (as text) | `string PreviewSizeText`
ZenithDirection | Link attribute | `SpeosSim.SourceAmbientUniform.SourceAmbientUniformZenithDirection ZenithDirection`
ZenithDirectionReverse | boolean attribute | `bool ZenithDirectionReverse`
Luminance | Number attribute | `double Luminance`
LuminanceText | Number attribute (as text) | `string LuminanceText`
MirroredExtent | boolean attribute | `bool MirroredExtent`
IsSun | boolean attribute | `bool IsSun`
SunDirection | Link attribute | `SpeosSim.SourceAmbientUniform.SourceAmbientUniformSunDirection SunDirection`
SunDirectionReverse | boolean attribute | `bool SunDirectionReverse`
SunThetaPosition | Number attribute | `double SunThetaPosition`
SunThetaPositionText | Number attribute (as text) | `string SunThetaPositionText`
SunPhiPosition | Number attribute | `double SunPhiPosition`
SunPhiPositionText | Number attribute (as text) | `string SunPhiPositionText`
SpectrumType | Enum attribute | `SpeosSim.SourceAmbientUniform.EnumSpectrumType SpectrumType`
SpectrumTypeIndex | Enum attribute (as index) | `int SpectrumTypeIndex`
SpectrumValueTemperature | Number attribute | `double SpectrumValueTemperature`
SpectrumValueTemperatureText | Number attribute (as text) | `string SpectrumValueTemperatureText`
SpectrumValueLibrary | File attribute | `string SpectrumValueLibrary`
SpectrumValueLibraryFullPath | File attribute (absolute full path) | `string SpectrumValueLibraryFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceAmbientUniform.SourceAmbientUniformZenithDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceAmbientUniform.SourceAmbientUniformSunDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceAmbientUS1976

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceAmbientUS1976> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceAmbientUS1976 Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceAmbientUS1976 Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceAmbientUS1976 Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceAmbientUS1976 Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceAmbientUS1976 CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
GetLocationPossibleValues | string list attribute: List possible values | `IEnumerable<string> GetLocationPossibleValues()`
GetTimeZonePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetTimeZonePossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
PreviewSize | Number attribute | `double PreviewSize`
PreviewSizeText | Number attribute (as text) | `string PreviewSizeText`
ZenithDirection | Link attribute | `SpeosSim.SourceAmbientUS1976.SourceAmbientUS1976ZenithDirection ZenithDirection`
ZenithDirectionReverse | boolean attribute | `bool ZenithDirectionReverse`
SunType | Enum attribute | `SpeosSim.SourceAmbientUS1976.EnumSunType SunType`
SunTypeIndex | Enum attribute (as index) | `int SunTypeIndex`
NorthDirection | Link attribute | `SpeosSim.SourceAmbientUS1976.SourceAmbientUS1976NorthDirection NorthDirection`
NorthDirectionReverse | boolean attribute | `bool NorthDirectionReverse`
SunDirection | Link attribute | `SpeosSim.SourceAmbientUS1976.SourceAmbientUS1976SunDirection SunDirection`
SunDirectionReverse | boolean attribute | `bool SunDirectionReverse`
SunThetaPosition | Number attribute | `double SunThetaPosition`
SunThetaPositionText | Number attribute (as text) | `string SunThetaPositionText`
SunPhiPosition | Number attribute | `double SunPhiPosition`
SunPhiPositionText | Number attribute (as text) | `string SunPhiPositionText`
Location | string list selection attribute | `string Location`
TimeZone | string list selection attribute | `string TimeZone`
Longitude | Number attribute | `double Longitude`
LongitudeText | Number attribute (as text) | `string LongitudeText`
Latitude | Number attribute | `double Latitude`
LatitudeText | Number attribute (as text) | `string LatitudeText`
DateTime | Number attribute | `System.DateTime DateTime`
DateTimeText | Number attribute (as text) | `string DateTimeText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceAmbientUS1976.SourceAmbientUS1976ZenithDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceAmbientUS1976.SourceAmbientUS1976NorthDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceAmbientUS1976.SourceAmbientUS1976SunDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceDisplay

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceDisplay> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceDisplay Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceDisplay Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceDisplay Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceDisplay Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceDisplay CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
NbRays | Number attribute | `uint NbRays`
NbRaysText | Number attribute (as text) | `string NbRaysText`
RayLength | Number attribute | `double RayLength`
RayLengthText | Number attribute (as text) | `string RayLengthText`
OriginPoint | Link attribute | `SpeosSim.SourceDisplay.SourceDisplayOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SourceDisplay.SourceDisplayXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SourceDisplay.SourceDisplayYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
ImageFile | File attribute | `string ImageFile`
ImageFileFullPath | File attribute (absolute full path) | `string ImageFileFullPath`
XIsMirrored | boolean attribute | `bool XIsMirrored`
XStart | Number attribute | `double XStart`
XStartText | Number attribute (as text) | `string XStartText`
XEnd | Number attribute | `double XEnd`
XEndText | Number attribute (as text) | `string XEndText`
YIsMirrored | boolean attribute | `bool YIsMirrored`
YStart | Number attribute | `double YStart`
YStartText | Number attribute (as text) | `string YStartText`
YEnd | Number attribute | `double YEnd`
YEndText | Number attribute (as text) | `string YEndText`
Luminance | Number attribute | `double Luminance`
LuminanceText | Number attribute (as text) | `string LuminanceText`
InfiniteContrastRatio | boolean attribute | `bool InfiniteContrastRatio`
ContrastRatio | Number attribute | `uint ContrastRatio`
ContrastRatioText | Number attribute (as text) | `string ContrastRatioText`
IntensityType | Enum attribute | `SpeosSim.SourceDisplay.EnumIntensityType IntensityType`
IntensityTypeIndex | Enum attribute (as index) | `int IntensityTypeIndex`
IntensityFile | File attribute | `string IntensityFile`
IntensityFileFullPath | File attribute (absolute full path) | `string IntensityFileFullPath`
IntensityN | Number attribute | `double IntensityN`
IntensityNText | Number attribute (as text) | `string IntensityNText`
IntensityTotalAngle | Number attribute | `double IntensityTotalAngle`
IntensityTotalAngleText | Number attribute (as text) | `string IntensityTotalAngleText`
IntensityFWHMAngle | Number attribute | `double IntensityFWHMAngle`
IntensityFWHMAngleText | Number attribute (as text) | `string IntensityFWHMAngleText`
IntensityFWHMAngleX | Number attribute | `double IntensityFWHMAngleX`
IntensityFWHMAngleXText | Number attribute (as text) | `string IntensityFWHMAngleXText`
IntensityFWHMAngleY | Number attribute | `double IntensityFWHMAngleY`
IntensityFWHMAngleYText | Number attribute (as text) | `string IntensityFWHMAngleYText`
IntensityXDirection | Link attribute | `SpeosSim.SourceDisplay.SourceDisplayIntensityXDirection IntensityXDirection`
IntensityXDirectionReverse | boolean attribute | `bool IntensityXDirectionReverse`
IntensityYDirection | Link attribute | `SpeosSim.SourceDisplay.SourceDisplayIntensityYDirection IntensityYDirection`
IntensityYDirectionReverse | boolean attribute | `bool IntensityYDirectionReverse`
ColorSpace | Enum attribute | `SpeosSim.SourceDisplay.EnumColorSpace ColorSpace`
ColorSpaceIndex | Enum attribute (as index) | `int ColorSpaceIndex`
WhitePointType | Enum attribute | `SpeosSim.SourceDisplay.EnumWhitePointType WhitePointType`
WhitePointTypeIndex | Enum attribute (as index) | `int WhitePointTypeIndex`
xColor | Number attribute | `double xColor`
xColorText | Number attribute (as text) | `string xColorText`
yColor | Number attribute | `double yColor`
yColorText | Number attribute (as text) | `string yColorText`
RedSpectrumValueLibrary | File attribute | `string RedSpectrumValueLibrary`
RedSpectrumValueLibraryFullPath | File attribute (absolute full path) | `string RedSpectrumValueLibraryFullPath`
GreenSpectrumValueLibrary | File attribute | `string GreenSpectrumValueLibrary`
GreenSpectrumValueLibraryFullPath | File attribute (absolute full path) | `string GreenSpectrumValueLibraryFullPath`
BlueSpectrumValueLibrary | File attribute | `string BlueSpectrumValueLibrary`
BlueSpectrumValueLibraryFullPath | File attribute (absolute full path) | `string BlueSpectrumValueLibraryFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceDisplay.SourceDisplayOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceDisplay.SourceDisplayXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceDisplay.SourceDisplayYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceDisplay.SourceDisplayIntensityXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceDisplay.SourceDisplayIntensityYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceInteractive

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceInteractive> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceInteractive Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceInteractive Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceInteractive Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceInteractive Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceInteractive CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Wavelength | Number attribute | `double Wavelength`
WavelengthText | Number attribute (as text) | `string WavelengthText`
RayLength | Number attribute | `double RayLength`
RayLengthText | Number attribute (as text) | `string RayLengthText`
StartType | Enum attribute | `SpeosSim.SourceInteractive.EnumStartType StartType`
StartTypeIndex | Enum attribute (as index) | `int StartTypeIndex`
StartGeometries | Links attribute | `SpeosSim.SourceInteractive.SourceInteractiveStartGeometries StartGeometries`
StartCurveGeometries | Links attribute | `SpeosSim.SourceInteractive.SourceInteractiveStartCurveGeometries StartCurveGeometries`
StartFaceGeometries | Links attribute | `SpeosSim.SourceInteractive.SourceInteractiveStartFaceGeometries StartFaceGeometries`
StartXSampling | Number attribute | `uint StartXSampling`
StartXSamplingText | Number attribute (as text) | `string StartXSamplingText`
StartYSampling | Number attribute | `uint StartYSampling`
StartYSamplingText | Number attribute (as text) | `string StartYSamplingText`
EndType | Enum attribute | `SpeosSim.SourceInteractive.EnumEndType EndType`
EndTypeIndex | Enum attribute (as index) | `int EndTypeIndex`
EndGeometries | Links attribute | `SpeosSim.SourceInteractive.SourceInteractiveEndGeometries EndGeometries`
EndCurveGeometries | Links attribute | `SpeosSim.SourceInteractive.SourceInteractiveEndCurveGeometries EndCurveGeometries`
EndDirectionGeometries | Links attribute | `SpeosSim.SourceInteractive.SourceInteractiveEndDirectionGeometries EndDirectionGeometries`
EndFaceGeometries | Links attribute | `SpeosSim.SourceInteractive.SourceInteractiveEndFaceGeometries EndFaceGeometries`
EndXSampling | Number attribute | `uint EndXSampling`
EndXSamplingText | Number attribute (as text) | `string EndXSamplingText`
EndYSampling | Number attribute | `uint EndYSampling`
EndYSamplingText | Number attribute (as text) | `string EndYSamplingText`
ReverseDirection | boolean attribute | `bool ReverseDirection`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceInteractive.SourceInteractiveStartGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SourceInteractive.SourceInteractiveStartCurveGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SourceInteractive.SourceInteractiveStartFaceGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SourceInteractive.SourceInteractiveEndGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SourceInteractive.SourceInteractiveEndCurveGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SourceInteractive.SourceInteractiveEndDirectionGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SourceInteractive.SourceInteractiveEndFaceGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## SourceLightField

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceLightField> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceLightField Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceLightField Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceLightField Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceLightField Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceLightField CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
NbRays | Number attribute | `uint NbRays`
NbRaysText | Number attribute (as text) | `string NbRaysText`
RayLength | Number attribute | `double RayLength`
RayLengthText | Number attribute (as text) | `string RayLengthText`
LightFieldPreviewType | Enum attribute | `SpeosSim.SourceLightField.EnumLightFieldPreviewType LightFieldPreviewType`
LightFieldPreviewTypeIndex | Enum attribute (as index) | `int LightFieldPreviewTypeIndex`
OriginPoint | Link attribute | `SpeosSim.SourceLightField.SourceLightFieldOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SourceLightField.SourceLightFieldXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SourceLightField.SourceLightFieldYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
LightFieldFile | File attribute | `string LightFieldFile`
LightFieldFileFullPath | File attribute (absolute full path) | `string LightFieldFileFullPath`
SpectrumFile | File attribute | `string SpectrumFile`
SpectrumFileFullPath | File attribute (absolute full path) | `string SpectrumFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceLightField.SourceLightFieldOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceLightField.SourceLightFieldXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceLightField.SourceLightFieldYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceLuminaire

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceLuminaire> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceLuminaire Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceLuminaire Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceLuminaire Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceLuminaire Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceLuminaire CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
NbRays | Number attribute | `uint NbRays`
NbRaysText | Number attribute (as text) | `string NbRaysText`
RayLength | Number attribute | `double RayLength`
RayLengthText | Number attribute (as text) | `string RayLengthText`
DisplayIntensityDiagram | boolean attribute | `bool DisplayIntensityDiagram`
IntensityDiagramFixedSize | boolean attribute | `bool IntensityDiagramFixedSize`
IntensityDiagramSize | Number attribute | `double IntensityDiagramSize`
IntensityDiagramSizeText | Number attribute (as text) | `string IntensityDiagramSizeText`
FluxFromIntensityFile | boolean attribute | `bool FluxFromIntensityFile`
FluxType | Enum attribute | `SpeosSim.SourceLuminaire.EnumFluxType FluxType`
FluxTypeIndex | Enum attribute (as index) | `int FluxTypeIndex`
FluxValueLuminous | Number attribute | `double FluxValueLuminous`
FluxValueLuminousText | Number attribute (as text) | `string FluxValueLuminousText`
FluxValueRadiant | Number attribute | `double FluxValueRadiant`
FluxValueRadiantText | Number attribute (as text) | `string FluxValueRadiantText`
SpectrumType | Enum attribute | `SpeosSim.SourceLuminaire.EnumSpectrumType SpectrumType`
SpectrumTypeIndex | Enum attribute (as index) | `int SpectrumTypeIndex`
SpectrumValueTemperature | Number attribute | `double SpectrumValueTemperature`
SpectrumValueTemperatureText | Number attribute (as text) | `string SpectrumValueTemperatureText`
SpectrumValueLibrary | File attribute | `string SpectrumValueLibrary`
SpectrumValueLibraryFullPath | File attribute (absolute full path) | `string SpectrumValueLibraryFullPath`
IntensityFile | File attribute | `string IntensityFile`
IntensityFileFullPath | File attribute (absolute full path) | `string IntensityFileFullPath`
OriginPoint | Link attribute | `SpeosSim.SourceLuminaire.SourceLuminaireOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SourceLuminaire.SourceLuminaireXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SourceLuminaire.SourceLuminaireYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceLuminaire.SourceLuminaireOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceLuminaire.SourceLuminaireXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceLuminaire.SourceLuminaireYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceRayFile

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceRayFile> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceRayFile Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceRayFile Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceRayFile Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceRayFile Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceRayFile CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
OptimizeRayFile | Call the 'Ray file optimization' command. Returns 'false' if this action is unavailable in the current state of the object. | `bool OptimizeRayFile()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
NbRays | Number attribute | `uint NbRays
NbRaysText | Number attribute (as text) | `string NbRaysText`
RayLength | Number attribute | `double RayLength`
RayLengthText | Number attribute (as text) | `string RayLengthText`
ExitGeometry | Links attribute | `SpeosSim.SourceRayFile.SourceRayFileExitGeometry ExitGeometry`
FluxType | Enum attribute | `SpeosSim.SourceRayFile.EnumFluxType FluxType`
FluxTypeIndex | Enum attribute (as index) | `int FluxTypeIndex`
FluxFromRayFile | boolean attribute | `bool FluxFromRayFile`
FluxValueLuminous | Number attribute | `double FluxValueLuminous`
FluxValueLuminousText | Number attribute (as text) | `string FluxValueLuminousText`
FluxValueRadiant | Number attribute | `double FluxValueRadiant`
FluxValueRadiantText | Number attribute (as text) | `string FluxValueRadiantText`
RayFile | File attribute | `Speos.Foundation.Utils.File.FilePath RayFile`
RayFileFullPath | File attribute (absolute full path) | `string RayFileFullPath`
SpectrumType | Enum attribute | `SpeosSim.SourceRayFile.EnumSpectrumType SpectrumType`
SpectrumTypeIndex | Enum attribute (as index) | `int SpectrumTypeIndex`
SpectrumValueWavelength | Number attribute | `double SpectrumValueWavelength`
SpectrumValueWavelengthText | Number attribute (as text) | `string SpectrumValueWavelengthText`
SpectrumValueTemperature | Number attribute | `double SpectrumValueTemperature`
SpectrumValueTemperatureText | Number attribute (as text) | `string SpectrumValueTemperatureText`
SpectrumValueLibrary | File attribute | `string SpectrumValueLibrary`
SpectrumValueLibraryFullPath | File attribute (absolute full path) | `string SpectrumValueLibraryFullPath`
OriginPoint | Link attribute | `SpeosSim.SourceRayFile.SourceRayFileOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SourceRayFile.SourceRayFileXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SourceRayFile.SourceRayFileYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceRayFile.SourceRayFileExitGeometry

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### SourceRayFile.SourceRayFileOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceRayFile.SourceRayFileXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceRayFile.SourceRayFileYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SourceSurface

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceSurface> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceSurface Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceSurface Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceSurface Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceSurface Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
NbRays | Number attribute | `uint NbRays`
NbRaysText | Number attribute (as text) | `string NbRaysText`
RayLength | Number attribute | `double RayLength`
RayLengthText | Number attribute (as text) | `string RayLengthText`
DisplayIntensityDiagram | boolean attribute | `bool DisplayIntensityDiagram`
IntensityDiagramFixedSize | boolean attribute | `bool IntensityDiagramFixedSize`
IntensityDiagramSize | Number attribute | `double IntensityDiagramSize`
IntensityDiagramSizeText | Number attribute (as text) | `string IntensityDiagramSizeText`
FluxFromIntensityFile | boolean attribute | `bool FluxFromIntensityFile`
FluxType | Enum attribute | `SpeosSim.SourceSurface.EnumFluxType FluxType`
FluxTypeIndex | Enum attribute (as index) | `int FluxTypeIndex`
FluxValueLuminous | Number attribute | `double FluxValueLuminous`
FluxValueLuminousText | Number attribute (as text) | `string FluxValueLuminousText`
FluxValueRadiant | Number attribute | `double FluxValueRadiant`
FluxValueRadiantText | Number attribute (as text) | `string FluxValueRadiantText`
FluxValueIntensity | Number attribute | `double FluxValueIntensity`
FluxValueIntensityText | Number attribute (as text) | `string FluxValueIntensityText`
ExitanceVariable | boolean attribute | `bool ExitanceVariable`
EmissiveFaces | Children attribute | `SpeosSim.SourceSurface.SourceSurfaceEmissiveFaces EmissiveFaces`
ExitanceFile | File attribute | `string ExitanceFile`
ExitanceFileFullPath | File attribute (absolute full path) | `string ExitanceFileFullPath`
ExitanceReverse | boolean attribute | `bool ExitanceReverse`
ExitanceOriginPoint | Link attribute | `SpeosSim.SourceSurface.SourceSurfaceExitanceOriginPoint ExitanceOriginPoint`
ExitanceXDirection | Link attribute | `SpeosSim.SourceSurface.SourceSurfaceExitanceXDirection ExitanceXDirection`
ExitanceXDirectionReverse | boolean attribute | `bool ExitanceXDirectionReverse`
ExitanceYDirection | Link attribute | `SpeosSim.SourceSurface.SourceSurfaceExitanceYDirection ExitanceYDirection`
ExitanceYDirectionReverse | boolean attribute | `bool ExitanceYDirectionReverse`
IntensityType | Enum attribute | `SpeosSim.SourceSurface.EnumIntensityType IntensityType`
IntensityTypeIndex | Enum attribute (as index) | `int IntensityTypeIndex`
IntensityFile | File attribute | `string IntensityFile`
IntensityFileFullPath | File attribute (absolute full path) | `string IntensityFileFullPath`
IntensityN | Number attribute | `double IntensityN`
IntensityNText | Number attribute (as text) | `string IntensityNText`
IntensityTotalAngle | Number attribute | `double IntensityTotalAngle`
IntensityTotalAngleText | Number attribute (as text) | `string IntensityTotalAngleText`
IntensityFWHMAngle | Number attribute | `double IntensityFWHMAngle`
IntensityFWHMAngleText | Number attribute (as text) | `string IntensityFWHMAngleText`
IntensityFWHMAngleX | Number attribute | `double IntensityFWHMAngleX`
IntensityFWHMAngleXText | Number attribute (as text) | `string IntensityFWHMAngleXText`
IntensityFWHMAngleY | Number attribute | `double IntensityFWHMAngleY`
IntensityFWHMAngleYText | Number attribute (as text) | `string IntensityFWHMAngleYText`
IntensityOrientation | Enum attribute | `SpeosSim.SourceSurface.EnumIntensityOrientation IntensityOrientation`
IntensityOrientationIndex | Enum attribute (as index) | `int IntensityOrientationIndex`
IntensityXDirection | Link attribute | `SpeosSim.SourceSurface.SourceSurfaceIntensityXDirection IntensityXDirection`
IntensityXDirectionReverse | boolean attribute | `bool IntensityXDirectionReverse`
IntensityYDirection | Link attribute | `SpeosSim.SourceSurface.SourceSurfaceIntensityYDirection IntensityYDirection`
IntensityYDirectionReverse | boolean attribute | `bool IntensityYDirectionReverse`
SpectrumType | Enum attribute | `SpeosSim.SourceSurface.EnumSpectrumType SpectrumType`
SpectrumTypeIndex | Enum attribute (as index) | `int SpectrumTypeIndex`
SpectrumValueWavelength | Number attribute | `double SpectrumValueWavelength`
SpectrumValueWavelengthText | Number attribute (as text) | `string SpectrumValueWavelengthText`
SpectrumValueTemperature | Number attribute | `double SpectrumValueTemperature`
SpectrumValueTemperatureText | Number attribute (as text) | `string SpectrumValueTemperatureText`
SpectrumValueLibrary | File attribute | `string SpectrumValueLibrary`
SpectrumValueLibraryFullPath | File attribute (absolute full path) | `string SpectrumValueLibraryFullPath`
ExitGeometry | Links attribute | `SpeosSim.SourceSurface.SourceSurfaceExitGeometry ExitGeometry`
FluxVariationPath | File attribute | `Speos.Foundation.Utils.File.FilePath FluxVariationPath`
FluxVariationPathFullPath | File attribute (absolute full path) | `string FluxVariationPathFullPath`
RelativeLag | Number attribute | `double RelativeLag`
RelativeLagText | Number attribute (as text) | `string RelativeLagText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceSurface.SourceSurfaceEmissiveFaces

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.OrientedFace> GetEnumerator()`
Add | Children attribute: Add an object to the children list | `void Add(SpeosSim.OrientedFace childObject)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.OrientedFace> List`
Item | Children attribute: Get child by index | `SpeosSim.OrientedFace Item`

### SourceSurface.SourceSurfaceExitanceOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceSurface.SourceSurfaceExitanceXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceSurface.SourceSurfaceExitanceYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceSurface.SourceSurfaceIntensityXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceSurface.SourceSurfaceIntensityYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceSurface.SourceSurfaceExitGeometry

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## SourceThermic

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.SourceThermic> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.SourceThermic Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.SourceThermic Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.SourceThermic Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.SourceThermic Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.SourceThermic CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
NbRays | Number attribute | `uint NbRays`
NbRaysText | Number attribute (as text) | `string NbRaysText`
RayLength | Number attribute | `double RayLength`
RayLengthText | Number attribute (as text) | `string RayLengthText`
DisplayModeType | Enum attribute | `SpeosSim.SourceThermic.EnumDisplayModeType DisplayModeType`
DisplayModeTypeIndex | Enum attribute (as index) | `int DisplayModeTypeIndex`
FluxType | Enum attribute | `SpeosSim.SourceThermic.EnumFluxType FluxType`
FluxTypeIndex | Enum attribute (as index) | `int FluxTypeIndex`
FluxValueLuminous | Number attribute | `double FluxValueLuminous`
FluxValueLuminousText | Number attribute (as text) | `string FluxValueLuminousText`
FluxValueRadiant | Number attribute | `double FluxValueRadiant`
FluxValueRadiantText | Number attribute (as text) | `string FluxValueRadiantText`
EmittanceType | Enum attribute | `SpeosSim.SourceThermic.EnumEmittanceType EmittanceType`
EmittanceTypeIndex | Enum attribute (as index) | `int EmittanceTypeIndex`
EmissiveFaces | Children attribute | `SpeosSim.SourceThermic.SourceThermicEmissiveFaces EmissiveFaces`
SpectrumValueTemperature | Number attribute | `double SpectrumValueTemperature`
SpectrumValueTemperatureText | Number attribute (as text) | `string SpectrumValueTemperatureText`
TemperatureFieldFile | File attribute | `string TemperatureFieldFile`
TemperatureFieldFileFullPath | File attribute (absolute full path) | `string TemperatureFieldFileFullPath`
OriginPoint | Link attribute | `SpeosSim.SourceThermic.SourceThermicOriginPoint OriginPoint`
XDirection | Link attribute | `SpeosSim.SourceThermic.SourceThermicXDirection XDirection`
XDirectionReverse | boolean attribute | `bool XDirectionReverse`
YDirection | Link attribute | `SpeosSim.SourceThermic.SourceThermicYDirection YDirection`
YDirectionReverse | boolean attribute | `bool YDirectionReverse`
OpticalPropertiesType | Enum attribute | `SpeosSim.SourceThermic.EnumOpticalPropertiesType OpticalPropertiesType`
OpticalPropertiesTypeIndex | Enum attribute (as index) | `int OpticalPropertiesTypeIndex`
Reflectance | Number attribute | `double Reflectance`
ReflectanceText | Number attribute (as text) | `string ReflectanceText`
SOPLibrary | File attribute | `string SOPLibrary`
SOPLibraryFullPath | File attribute (absolute full path) | `string SOPLibraryFullPath`
SopPluginPath | File attribute | `string SopPluginPath`
SopPluginPathFullPath | File attribute (absolute full path) | `string SopPluginPathFullPath`
SopPluginConfigurationPath | File attribute | `string SopPluginConfigurationPath`
SopPluginConfigurationPathFullPath | File attribute (absolute full path) | `string SopPluginConfigurationPathFullPath`
IntensityType | Enum attribute | `SpeosSim.SourceThermic.EnumIntensityType IntensityType`
IntensityTypeIndex | Enum attribute (as index) | `int IntensityTypeIndex`
IntensityN | Number attribute | `double IntensityN`
IntensityNText | Number attribute (as text) | `string IntensityNText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### SourceThermic.SourceThermicEmissiveFaces

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosSim.OrientedFace> GetEnumerator()`
Add | Children attribute: Add an object to the children list | `void Add(SpeosSim.OrientedFace childObject)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosSim.OrientedFace> List`
Item | Children attribute: Get child by index | `SpeosSim.OrientedFace Item`

### SourceThermic.SourceThermicOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceThermic.SourceThermicXDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### SourceThermic.SourceThermicYDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## SurfaceAperture

### Static Method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosSim.SurfaceAperture Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString | | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
Type | String attribute | `string Type`
HalfWidthX | Number attribute | `double HalfWidthX`
HalfWidthXText | Number attribute (as text) | `string HalfWidthXText`
HalfWidthY | Number attribute | `double HalfWidthY`
HalfWidthYText | Number attribute (as text) | `string HalfWidthYText`
MinimumRadius | Number attribute | `double MinimumRadius`
MinimumRadiusText | Number attribute (as text) | `string MinimumRadiusText`
MaximumRadius | Number attribute | `double MaximumRadius`
MaximumRadiusText | Number attribute (as text) | `string MaximumRadiusText`
DecenterX | Number attribute | `double DecenterX`
DecenterXText | Number attribute (as text) | `string DecenterXText`
DecenterY | Number attribute | `double DecenterY`
DecenterYText | Number attribute (as text) | `string DecenterYText`

## SurfaceLayer

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosSim.SurfaceLayer Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
SOPType | Enum attribute | `SpeosSim.SurfaceLayer.EnumSOPType SOPType`
SOPTypeIndex | Enum attribute (as index) | `int SOPTypeIndex`
SOPReflectance | Number attribute | `double SOPReflectance`
SOPReflectanceText | Number attribute (as text) | `string SOPReflectanceText`
SOPLibrary | File attribute | `string SOPLibrary`
SopAppearancePath | File attribute | `Speos.Foundation.Utils.File.FilePath SopAppearancePath`
AnisotropicTextureLayer | Number attribute | `uint AnisotropicTextureLayer`
AnisotropicTextureLayerText | Number attribute (as text) | `string AnisotropicTextureLayerText`
SopPluginPath | File attribute | `string SopPluginPath`
SopPluginConfigurationPath | File attribute | `string SopPluginConfigurationPath`
PreviewedLayer | Enum attribute | `SpeosSim.SurfaceLayer.EnumPreviewedLayer PreviewedLayer`
PreviewedLayerIndex | Enum attribute (as index) | `int PreviewedLayerIndex`
ImageTextureType | Enum attribute | `SpeosSim.SurfaceLayer.EnumImageTextureType ImageTextureType`
ImageTextureTypeIndex | Enum attribute (as index) | `int ImageTextureTypeIndex`
ImageTextureFilePath | File attribute | `string ImageTextureFilePath`
ImageTextureWidth | Number attribute | `double ImageTextureWidth`
ImageTextureWidthText | Number attribute (as text) | `string ImageTextureWidthText`
ImageTextureLayer | Number attribute | `uint ImageTextureLayer`
ImageTextureLayerText | Number attribute (as text) | `string ImageTextureLayerText`
NormalMapType | Enum attribute | `SpeosSim.SurfaceLayer.EnumNormalMapType NormalMapType`
NormalMapTypeIndex | Enum attribute (as index) | `int NormalMapTypeIndex`
NormalMapTextureFilePath | File attribute | `string NormalMapTextureFilePath`
NormalMapRoughness | Number attribute | `double NormalMapRoughness`
NormalMapRoughnessText | Number attribute (as text) | `string NormalMapRoughnessText`
NormalMapTextureWidth | Number attribute | `double NormalMapTextureWidth`
NormalMapTextureWidthText | Number attribute (as text) | `string NormalMapTextureWidthText`
NormalMapLayer | Number attribute | `uint NormalMapLayer`
NormalMapLayerText | Number attribute (as text) | `string NormalMapLayerText`

## Surfaces

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
SpeosOpticStudioSurfaceAperture | Children attribute | `SpeosSim.SurfaceAperture SpeosOpticStudioSurfaceAperture`
SurfaceType | Enum attribute | `SpeosSim.Surfaces.EnumSurfaceType SurfaceType`
SurfaceTypeIndex | Enum attribute (as index) | `int SurfaceTypeIndex`
Radius | Number attribute | `double Radius`
RadiusText | Number attribute (as text) | `string RadiusText`
RadiusX | Number attribute | `double RadiusX`
RadiusXText | Number attribute (as text) | `string RadiusXText`
ConicX | Number attribute | `double ConicX`
ConicXText | Number attribute (as text) | `string ConicXText`
RadiusY | Number attribute | `double RadiusY`
RadiusYText | Number attribute (as text) | `string RadiusYText`
ConicY | Number attribute | `double ConicY`
ConicYText | Number attribute (as text) | `string ConicYText`
Clear | Number attribute | `double Clear`
ClearText | Number attribute (as text) | `string ClearText`
Edge | Number attribute | `double Edge`
EdgeText | Number attribute (as text) | `string EdgeText`
Conic | Number attribute | `double Conic`
ConicText | Number attribute (as text) | `string ConicText`
Offset | Number attribute | `double Offset`
OffsetText | Number attribute (as text) | `string OffsetText`
ModelType | string attribute | `string ModelType`
AsphericCoefficientsX | Children attribute | `SpeosSim.Surfaces.SurfacesAsphericCoefficientsX AsphericCoefficientsX`
AsphericCoefficientsY | Children attribute | `SpeosSim.Surfaces.SurfacesAsphericCoefficientsY AsphericCoefficientsY`
BiconicDecenterX | Number attribute | `double BiconicDecenterX`
BiconicDecenterXText | Number attribute (as text) | `string BiconicDecenterXText`
BiconicDecenterY | Number attribute | `double BiconicDecenterY`
BiconicDecenterYText | Number attribute (as text) | `string BiconicDecenterYText`
NormRadius | Number attribute | `double NormRadius`
NormRadiusText | Number attribute (as text) | `string NormRadiusText`
Coefficients | Children attribute | `SpeosSim.Surfaces.SurfacesCoefficients Coefficients`
AsphericCoefficients | Children attribute | `SpeosSim.Surfaces.SurfacesAsphericCoefficients AsphericCoefficients`
PolynomialCoefficients | Children attribute | `SpeosSim.Surfaces.SurfacesPolynomialCoefficients PolynomialCoefficients`
Extrapolate | boolean attribute | `bool Extrapolate`
ZernikeType | Enum attribute | `SpeosSim.Surfaces.EnumZernikeType ZernikeType`
ZernikeTypeIndex | Enum attribute (as index) | `int ZernikeTypeIndex`
ZernikeTerms | Children attribute | `SpeosSim.Surfaces.SurfacesZernikeTerms ZernikeTerms`
ZernikeDecenterX | Number attribute | `double ZernikeDecenterX`
ZernikeDecenterXText | Number attribute (as text) | `string ZernikeDecenterXText`
ZernikeDecenterY | Number attribute | `double ZernikeDecenterY`
ZernikeDecenterYText | Number attribute (as text) | `string ZernikeDecenterYText`
DecenterX | Number attribute | `double DecenterX`
DecenterXText | Number attribute (as text) | `string DecenterXText`
DecenterY | Number attribute | `double DecenterY`
DecenterYText | Number attribute (as text) | `string DecenterYText`
Body | Links attribute | `SpeosSim.Surfaces.SurfacesBody Body`

### Surfaces.SurfacesAsphericCoefficientsX

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection List`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`

### Surfaces.SurfacesAsphericCoefficientsY

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection List`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`

### Surfaces.SurfacesCoefficients

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection List`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`

### Surfaces.SurfacesAsphericCoefficients

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection List`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`

### Surfaces.SurfacesPolynomialCoefficients

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection List`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`

### Surfaces.SurfacesZernikeTerms

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection List`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`
Item | Children attribute: Get child by index | `SpeosSim.Coefficient Item`

### Surfaces.SurfacesBody

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

## UVMap

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.UVMap> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.UVMap Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Comment | string attribute | `string Comment`
Index | Number attribute | `uint Index`
IndexText | Number attribute (as text) | `string IndexText`
OriginPoint | Link attribute | `SpeosSim.UVMap.UVMapOriginPoint OriginPoint`
ProjectionDirection | Link attribute | `SpeosSim.UVMap.UVMapProjectionDirection ProjectionDirection`
ProjectionDirectionReverse | boolean attribute | `bool ProjectionDirectionReverse`
OrientationDirection | Link attribute | `SpeosSim.UVMap.UVMapOrientationDirection OrientationDirection`
OrientationDirectionReverse | boolean attribute | `bool OrientationDirectionReverse`
MappingType | Enum attribute | `SpeosSim.UVMap.EnumMappingType MappingType`
MappingTypeIndex | Enum attribute (as index) | `int MappingTypeIndex`
UOffset | Number attribute | `double UOffset`
UOffsetText | Number attribute (as text) | `string UOffsetText`
UScale | Number attribute | `double UScale`
UScaleText | Number attribute (as text) | `string UScaleText`
URepeat | boolean attribute | `bool URepeat`
VOffset | Number attribute | `double VOffset`
VOffsetText | Number attribute (as text) | `string VOffsetText`
VScale | Number attribute | `double VScale`
VScaleText | Number attribute (as text) | `string VScaleText`
VRepeat | boolean attribute | `bool VRepeat`
Rotate | Number attribute | `double Rotate`
RotateText | Number attribute (as text) | `string RotateText`
Perimeter | Number attribute | `double Perimeter`
PerimeterText | Number attribute (as text) | `string PerimeterText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### UVMap.UVMapOriginPoint

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### UVMap.UVMapProjectionDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

### UVMap.UVMapOrientationDirection

### Method

Name | Description | Syntax
--- | --- | ---
Set | Link attribute: Set the link to a script object | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)`
Set | Link attribute: Set the link to a DocObject | `bool Set(SpaceClaim.Api.V251.IDocObject selectedObject)`
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | `bool Set(object docObjectFromPreviousVersion)`
Clear | Link attribute: Clear the link | `void Clear()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObject | Link attribute: Get the pointed object | `SpaceClaim.Api.V251.IDocObject LinkedObject`

## UVMapping

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosSim.UVMapping> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosSim.UVMapping Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosSim.UVMapping Create(object parent)`
Create | Create a new object in the active context | `SpeosSim.UVMapping Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosSim.UVMapping Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosSim.UVMapping CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddUvMap | Add an UV Map layer object | `SpeosSim.UVMap AddUvMap()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method reports an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Description | string attribute | `string Description`
Geometries | Links attribute | `SpeosSim.UVMapping.UVMappingGeometries Geometries`
Layers | Children CustomObjects attribute | `SpeosSim.UVMapping.UVMappingLayers Layers`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### UVMapping.UVMappingGeometries

### Method

Name | Description | Syntax
--- | --- | ---
Set | Links attribute: Link to an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
Clear | Links attribute: Clear the list of links | `void Clear()`
SelectAll | Links attribute: Link to all compatible objects in the active context | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Links attribute: Get the pointed document objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Item | Links attribute: Get a pointed document object by index | `SpaceClaim.Api.V251.IDocObject Item`
Count | Links attribute: Get the links count | `int Count`

### UVMapping.UVMappingLayers

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosSim.UVMap> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosSim.UVMap AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosSim.UVMap> List`
Item | Get child CustomObject by index | `SpeosSim.UVMap Item`
Item | Get child CustomObject by index | `SpeosSim.UVMap Item`

## SpeosOptionsConfiguration

### Property

Name | Description | Syntax
--- | --- | ---
PrecisionLength |  | `int PrecisionLength`
PrecisionAngle |  | `int PrecisionAngle`
PrecisionOther |  | `int PrecisionOther`
ResultsAutomaticLaunchWhenSimulationEnds |  | `bool ResultsAutomaticLaunchWhenSimulationEnds`
ResultsDraw |  | `bool ResultsDraw`
ResultsDrawNullValuesAsTransparent |  | `bool ResultsDrawNullValuesAsTransparent`
ActivateImageMeshing |  | `bool ActivateImageMeshing`
LineColorPreviewMeshing |  | `System.Drawing.Color LineColorPreviewMeshing`
CustomColorsForPicker |  | `System.Int32[] CustomColorsForPicker`
ResultsSoundWhenSimulationEnds |  | `bool ResultsSoundWhenSimulationEnds`
SimulationNumberOfThreads |  | `int SimulationNumberOfThreads`
SimulationVRSensorMemoryManagement |  | `bool SimulationVRSensorMemoryManagement`
Colorimetry |  | `Dom.Optics.ColorimetryStandard Colorimetry`
IntensityResultViewingDirection |  | `Dom.Optics.PropagationDirection IntensityResultViewingDirection`
CopySelectedInputFilesUnderDocumentFolder |  | `bool CopySelectedInputFilesUnderDocumentFolder`
PresetsCustomFolder |  | `string PresetsCustomFolder`
NoInteropHealing |  | `bool NoInteropHealing`

## Options

### Static method

Name | Description | Syntax
--- | --- | ---
Get | Get an object that reflects the state of the Speos General options. Value changes on this object will affect the application options only when it is set back. | `App.ObjectModel.SpeosOptionsConfiguration Get()`
Set | Request a change on the Speos General options to match the provided object state. | `void Set(App.ObjectModel.SpeosOptionsConfiguration options)`
Reset | Set the Speos General options back to their default values. | `void Reset()`

## InverseSimulationSettings

### Static method

Name | Description | Syntax
--- | --- | ---
Create |  | `SpeosSim.InverseSimulationSettings Create()`

### Method

Name | Description | Syntax
--- | --- | ---
SetDeterminist |  | `void SetDeterminist(SpeosSim.InverseSimulationSettings.EnumPhotonMapMode photonMapMode, int ambientSampling, int maxNbSurfaceInteractions, bool antiAliasing, int specularApproxAngle)`
SetDeterministPhotonMap |  | `void SetDeterministPhotonMap(int maxNeighbors, int maxSearchRadius, bool fastTransmissionGathering, bool useFinalGathering, int finalGatheringMaxNeighbors, int finalGatheringSplittingNb)`
SetDeterministPhotonMapBuild |  | `void SetDeterministPhotonMapBuild(int nbPhotonsInDirectPhase, int nbSurfaceInteractionsInDirectPhase)`
SetPropagationErrorAnalysis |  | `void SetPropagationErrorAnalysis(bool propagationErrorAnalysis)`
SetMonteCarlo |  | `void SetMonteCarlo(bool dispersion, bool splitting, int nbGatheringRaysPerSource, int maxGatheringError, bool fastTransmissionGathering, int automaticSaveFrequencySeconds, SpeosSim.InverseSimulationSettings.EnumOptimizedPropagationMode optimizedPropagation, int nbStandardPassesBeforeOptimizedPasses)`

### Property

Name | Description | Syntax
--- | --- | ---
UseRenderingPropertiesAsOpticalProperties |  | `bool UseRenderingPropertiesAsOpticalProperties`
UseMonteCarloAlgorithm |  | `bool UseMonteCarloAlgorithm`
UseFastTransmissionGathering |  | `bool UseFastTransmissionGathering`
PropagationErrorAnalysis |  | `bool PropagationErrorAnalysis`
MonteCarloOptimizedPropagationMode |  | `SpeosSim.InverseSimulationSettings.EnumOptimizedPropagationMode MonteCarloOptimizedPropagationMode`
MonteCarloOptimizedPropagationNbStandardPasses |  | `int MonteCarloOptimizedPropagationNbStandardPasses`
MonteCarloPropagationDispersion |  | `bool MonteCarloPropagationDispersion`
MonteCarloPropagationSplitting |  | `bool MonteCarloPropagationSplitting`
MonteCarloPropagationNbGatheringRaysPerSource |  | `int MonteCarloPropagationNbGatheringRaysPerSource`
MonteCarloPropagationMaxGatheringErrors |  | `int MonteCarloPropagationMaxGatheringErrors`
MonteCarloAutomaticSaveFrequencySeconds |  | `int MonteCarloAutomaticSaveFrequencySeconds`
DeterministPhotonMapMode |  | `SpeosSim.InverseSimulationSettings.EnumPhotonMapMode DeterministPhotonMapMode`
DeterministAmbientSampling |  | `int DeterministAmbientSampling`
DeterministMaxNbSurfaceInteractions |  | `int DeterministMaxNbSurfaceInteractions`
DeterministAntiAliasing |  | `bool DeterministAntiAliasing`
DeterministSpecularApproxAngle |  | `double DeterministSpecularApproxAngle`
DeterministPhotonMapMaxNeighbors |  | `int DeterministPhotonMapMaxNeighbors`
DeterministPhotonMapMaxSearchRadius |  | `int DeterministPhotonMapMaxSearchRadius`
DeterministPhotonMapUseFinalGathering |  | `bool DeterministPhotonMapUseFinalGathering`
DeterministPhotonMapFinalGatheringMaxNeighbors |  | `int DeterministPhotonMapFinalGatheringMaxNeighbors`
DeterministPhotonMapFinalGatheringSplittingNb |  | `int DeterministPhotonMapFinalGatheringSplittingNb`
DeterministPhotonMapBuildNbPhotonsInDirectPhase |  | `int DeterministPhotonMapBuildNbPhotonsInDirectPhase`
DeterministPhotonMapBuildMaxNbSurfaceInteractionsInDirectPhase |  | `int DeterministPhotonMapBuildMaxNbSurfaceInteractionsInDirectPhase`

## SimulationSettings

### Static method

Name | Description | Syntax
--- | --- | ---
Create |  | `SpeosSim.SimulationSettings Create()`

### Property

Name | Description | Syntax
--- | --- | ---
Texture |  | `bool Texture`
TextureNormalization |  | `SpeosSim.SimulationSettings.EnumTextureNormalizationType TextureNormalization`
TextureBump |  | `bool TextureBump`
MeshingSagMode |  | `SpeosSim.SimulationSettings.EnumMeshingSagMode MeshingSagMode`
MeshingSagValue |  | `double MeshingSagValue`
MeshingStepMode |  | `SpeosSim.SimulationSettings.EnumMeshingStepMode MeshingStepMode`
MeshingStepValue |  | `double MeshingStepValue`
MeshingAngle |  | `double MeshingAngle`
GeometricalDistanceTolerance |  | `double GeometricalDistanceTolerance`
MaxNumberInteractions |  | `int MaxNumberInteractions`
RayTracerPrecision |  | `SpeosSim.SimulationSettings.EnumRayTracer RayTracerPrecision`
Weight |  | `bool Weight`
MinimumEnergyPercentage |  | `double MinimumEnergyPercentage`
ColorimetricStandard |  | `SpeosSim.SimulationSettings.EnumColorimetricStandard ColorimetricStandard`
SmartEngine |  | `int SmartEngine`

## DirectSimulationSettings

### Static method

Name | Description | Syntax
--- | --- | ---
Create |  | `SpeosSim.Specific.DirectSimulationSettings Create()`
GetFromWrapper |  | `SpeosSim.Specific.DirectSimulationSettings GetFromWrapper(App.ObjectModel.Interfaces.IHasSpeosSettings simulationSettings)`
SetToWrapper |  | `void SetToWrapper(App.ObjectModel.Interfaces.IHasSpeosSettings simulationSettings, SpeosSim.Specific.DirectSimulationSettings directSimulationSettings)`

### Method

Name | Description | Syntax
--- | --- | ---
SetFastTransmissionGathering |  | `void SetFastTransmissionGathering(bool fastTransmissionGathering)`
SetPropagationErrorAnalysis |  | `void SetPropagationErrorAnalysis(bool propagationErrorAnalysis)`
SetDispersion |  | `void SetDispersion(bool dispersion)`
SetAutomaticSaveFrequency |  | `void SetAutomaticSaveFrequency(int directTemporarySave)`

### Property

Name | Description | Syntax
--- | --- | ---
UseFastTransmissionGathering |  | `bool UseFastTransmissionGathering`
PropagationErrorAnalysis |  | `bool PropagationErrorAnalysis`
Dispersion |  | `bool Dispersion`
AutomaticSaveFrequencySeconds |  | `int AutomaticSaveFrequencySeconds`
