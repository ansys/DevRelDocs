---
title: Speos Sim API
author: Ansys
author email: ansysdevelopers@ansys.com
summary: Speos client APIs documentation
description: Speos client APIs documentation
version: 2024 R1
status: unpublished
access control: internal
product: Speos
product collection: Optics
programming language: IronPython
physics: Optics
---

## Command

This section details all commands of the Speos Sim client API.

### Static method

This section lists all static methods.

Name | Description | Syntax 
--- | --- | --- 
SetActiveSelection | Set the active selection from a collection of DocObjects | void SetActiveSelection(ICollection<object> selectedObjects)
GetSpeosObjectsInActivePart | Get the Speos objects contained in the active Part | IEnumerable<object> GetSpeosObjectsInActivePart()
GetErrorStatus | Get the error status of the given object | string GetErrorStatus(object docObject)
IsUpToDate | Ask if the given object was modified since its last successful computation | bool IsUpToDate(object docObject)
Compute | Perform the computation of an array of objects | void Compute(System.Object[] selectedObjects)
Compute | Perform the computation of an array of DocObjects | void Compute(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Compute | Perform the computation of an array of script objects | void Compute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
ComputeOnActiveSelection | Perform the computation of the active selection | void ComputeOnActiveSelection()
HpcCompute | Perform the HPC computation of an array of objects | void HpcCompute(System.Object[] selectedObjects)
HpcCompute | Perform the HPC computation of an array of DocObjects | void HpcCompute(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
HpcCompute | Perform the HPC computation of an array of script objects | void HpcCompute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
HpcComputeOnActiveSelection | Perform the HPC computation of the active selection | void HpcComputeOnActiveSelection()
GpuCompute | Perform the GPU computation of an array of objects | void GpuCompute(System.Object[] selectedObjects)
GpuCompute | Perform the GPU computation of an array of DocObjects | void GpuCompute(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
GpuCompute | Perform the GPU computation of an array of script objects | void GpuCompute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
GpuComputeOnActiveSelection | Perform the GPU computation of the active selection | void GpuComputeOnActiveSelection()
PreviewCompute | Perform the Preview computation of an array of objects | void PreviewCompute(System.Object[] selectedObjects)
PreviewCompute | Perform the Preview computation of an array of DocObjects | void PreviewCompute(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
PreviewCompute | Perform the Preview computation of an array of script objects | void PreviewCompute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
PreviewComputeOnActiveSelection | Perform the Preview computation of the active selection | void PreviewComputeOnActiveSelection()
GetOutputFolder | Get the Speos output files directory path for the active context | string GetOutputFolder()
GetInputFolder | Get the Speos input files directory path for the active context | string GetInputFolder()

## Component

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.Component> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.Component Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## Component3DTexture

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.Component3DTexture> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.Component3DTexture Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.Component3DTexture Create(object parent)
Create | Create a new object in the active context | SpeosSim.Component3DTexture Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.Component3DTexture Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.Component3DTexture CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosSim.Component3DTexture.Component3DTextureOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.Component3DTexture.Component3DTextureXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.Component3DTexture.Component3DTextureYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
SupportGeometry | Link attribute | SpeosSim.Component3DTexture.Component3DTextureSupportGeometry SupportGeometry
PatternFile | File attribute | string PatternFile
PatternFileFullPath | File attribute (absolute full path) | string PatternFileFullPath
PatternGlobalScale | Number attribute | double PatternGlobalScale
PatternGlobalScaleText | Number attribute (as text) | string PatternGlobalScaleText
OperationType | Enum attribute | SpeosSim.Component3DTexture.EnumOperationType OperationType
OperationTypeIndex | Enum attribute (as index) | int OperationTypeIndex
MappingType | Enum attribute | SpeosSim.Component3DTexture.EnumMappingType MappingType
MappingTypeIndex | Enum attribute (as index) | int MappingTypeIndex
MappingFile | File attribute | string MappingFile
MappingFileFullPath | File attribute (absolute full path) | string MappingFileFullPath
PatternStepX | Number attribute | double PatternStepX
PatternStepXText | Number attribute (as text) | string PatternStepXText
PatternStepY | Number attribute | double PatternStepY
PatternStepYText | Number attribute (as text) | string PatternStepYText
RadialDistance | Number attribute | double RadialDistance
RadialDistanceText | Number attribute (as text) | string RadialDistanceText
AreaRadius | Number attribute | double AreaRadius
AreaRadiusText | Number attribute (as text) | string AreaRadiusText
DistanceBetweenRings | Number attribute | double DistanceBetweenRings
DistanceBetweenRingsText | Number attribute (as text) | string DistanceBetweenRingsText
HexagonWidthX | Number attribute | double HexagonWidthX
HexagonWidthXText | Number attribute (as text) | string HexagonWidthXText
EdgeLengthX | Number attribute | double EdgeLengthX
EdgeLengthXText | Number attribute (as text) | string EdgeLengthXText
HexagonDistanceX | Number attribute | double HexagonDistanceX
HexagonDistanceXText | Number attribute (as text) | string HexagonDistanceXText
HexagonHeightY | Number attribute | double HexagonHeightY
HexagonHeightYText | Number attribute (as text) | string HexagonHeightYText
CentralPoint | Boolean attribute | bool CentralPoint
RegularMapping | Boolean attribute | bool RegularMapping
XPitchCurve | Link attribute | SpeosSim.Component3DTexture.Component3DTextureXPitchCurve XPitchCurve
VarPitchXScale | Number attribute | double VarPitchXScale
VarPitchXScaleText | Number attribute (as text) | string VarPitchXScaleText
YPitchCurve | Link attribute | SpeosSim.Component3DTexture.Component3DTextureYPitchCurve YPitchCurve
VarPitchYScale | Number attribute | double VarPitchYScale
VarPitchYScaleText | Number attribute (as text) | string VarPitchYScaleText
AreaLengthX | Number attribute | double AreaLengthX
AreaLengthXText | Number attribute (as text) | string AreaLengthXText
AreaLengthY | Number attribute | double AreaLengthY
AreaLengthYText | Number attribute (as text) | string AreaLengthYText
AngleX | Number attribute | double AngleX
AngleXText | Number attribute (as text) | string AngleXText
AngleY | Number attribute | double AngleY
AngleYText | Number attribute (as text) | string AngleYText
LimitingSurface | Link attribute | SpeosSim.Component3DTexture.Component3DTextureLimitingSurface LimitingSurface
OffsetSurface | Link attribute | SpeosSim.Component3DTexture.Component3DTextureOffsetSurface OffsetSurface
OffsetSurfaceScale | Number attribute | double OffsetSurfaceScale
OffsetSurfaceScaleText | Number attribute (as text) | string OffsetSurfaceScaleText
PatternDirectionType | Enum attribute | SpeosSim.Component3DTexture.EnumPatternDirectionType PatternDirectionType
PatternDirectionTypeIndex | Enum attribute (as index) | int PatternDirectionTypeIndex
XScaleSurface | Link attribute | SpeosSim.Component3DTexture.Component3DTextureXScaleSurface XScaleSurface
PatternXScale | Number attribute | double PatternXScale
PatternXScaleText | Number attribute (as text) | string PatternXScaleText
YScaleSurface | Link attribute | SpeosSim.Component3DTexture.Component3DTextureYScaleSurface YScaleSurface
PatternYScale | Number attribute | double PatternYScale
PatternYScaleText | Number attribute (as text) | string PatternYScaleText
ZScaleSurface | Link attribute | SpeosSim.Component3DTexture.Component3DTextureZScaleSurface ZScaleSurface
PatternZScale | Number attribute | double PatternZScale
PatternZScaleText | Number attribute (as text) | string PatternZScaleText
PreviewType | Enum attribute | SpeosSim.Component3DTexture.EnumPreviewType PreviewType
PreviewTypeIndex | Enum attribute (as index) | int PreviewTypeIndex
PreviewX | Number attribute | double PreviewX
PreviewXText | Number attribute (as text) | string PreviewXText
PreviewY | Number attribute | double PreviewY
PreviewYText | Number attribute (as text) | string PreviewYText
PreviewZ | Number attribute | double PreviewZ
PreviewZText | Number attribute (as text) | string PreviewZText
PreviewSizeX | Number attribute | double PreviewSizeX
PreviewSizeXText | Number attribute (as text) | string PreviewSizeXText
PreviewSizeY | Number attribute | double PreviewSizeY
PreviewSizeYText | Number attribute (as text) | string PreviewSizeYText
PreviewSizeZ | Number attribute | double PreviewSizeZ
PreviewSizeZText | Number attribute (as text) | string PreviewSizeZText
MaxNumberOfPatterns | Number attribute | int MaxNumberOfPatterns
MaxNumberOfPatternsText | Number attribute (as text) | string MaxNumberOfPatternsText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### Component3DTexture.Component3DTextureOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureSupportGeometry

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureXPitchCurve

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureYPitchCurve

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureLimitingSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureOffsetSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureXScaleSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureYScaleSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Component3DTexture.Component3DTextureZScaleSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## ComponentExport

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.ComponentExport> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.ComponentExport Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.ComponentExport Create(object parent)
Create | Create a new object in the active context | SpeosSim.ComponentExport Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.ComponentExport Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.ComponentExport CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
GetResultFilePath | Get the list of paths of all computation resulting files | string GetResultFilePath()
GetGeometrySettings | Get the geometry settings (meshing behavior) | SpeosSim.SimulationSettings GetGeometrySettings()
SetGeometrySettings | Set the geometry settings (meshing behavior) | void SetGeometrySettings(SpeosSim.SimulationSettings simulationSettings)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosSim.ComponentExport.ComponentExportOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.ComponentExport.ComponentExportXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.ComponentExport.ComponentExportYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
Sources | Links attribute | SpeosSim.ComponentExport.ComponentExportSources Sources
Geometries | Children attribute | SpeosSim.ComponentExport.ComponentExportGeometries Geometries
IsBlackBox | Boolean attribute | bool IsBlackBox
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### ComponentExport.ComponentExportOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ComponentExport.ComponentExportXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ComponentExport.ComponentExportYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ComponentExport.ComponentExportSources

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### ComponentExport.ComponentExportGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.FTGEnabledGeometry> GetEnumerator()
Add | Children attribute: Add an object to the children list | void Add(SpeosSim.FTGEnabledGeometry childObject)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.FTGEnabledGeometry> List
Item | Children attribute: Get child by index | SpeosSim.FTGEnabledGeometry Item

## ComponentImport

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.ComponentImport> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.ComponentImport Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.ComponentImport Create(object parent)
Create | Create a new object in the active context | SpeosSim.ComponentImport Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.ComponentImport Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.ComponentImport CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosSim.ComponentImport.ComponentImportOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.ComponentImport.ComponentImportXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.ComponentImport.ComponentImportYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
TrajectoryFile | File attribute | string TrajectoryFile
TrajectoryFileFullPath | File attribute (absolute full path) | string TrajectoryFileFullPath
ImportFile | File attribute | string ImportFile
ImportFileFullPath | File attribute (absolute full path) | string ImportFileFullPath
LightBoxPreviewType | Enum attribute | SpeosSim.ComponentImport.EnumLightBoxPreviewType LightBoxPreviewType
LightBoxPreviewTypeIndex | Enum attribute (as index) | int LightBoxPreviewTypeIndex
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### ComponentImport.ComponentImportOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ComponentImport.ComponentImportXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ComponentImport.ComponentImportYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## ComponentOpticStudio

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.ComponentOpticStudio> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.ComponentOpticStudio Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.ComponentOpticStudio Create(object parent)
Create | Create a new object in the active context | SpeosSim.ComponentOpticStudio Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.ComponentOpticStudio Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.ComponentOpticStudio CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
GetGeometrySettings | Get the geometry settings (meshing behavior) | SpeosSim.SimulationSettings GetGeometrySettings()
SetGeometrySettings | Set the geometry settings (meshing behavior) | void SetGeometrySettings(SpeosSim.SimulationSettings simulationSettings)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosSim.ComponentOpticStudio.ComponentOpticStudioOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.ComponentOpticStudio.ComponentOpticStudioXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.ComponentOpticStudio.ComponentOpticStudioYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
ComponentFile | File attribute | Fou.Utils.ValueObjects.FilePath ComponentFile
ComponentFileFullPath | File attribute (absolute full path) | string ComponentFileFullPath
GeometricComponents | Children attribute | SpeosSim.ComponentOpticStudio.ComponentOpticStudioGeometricComponents GeometricComponents
Detectors | Links attribute | SpeosSim.ComponentOpticStudio.ComponentOpticStudioDetectors Detectors
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### ComponentOpticStudio.ComponentOpticStudioOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ComponentOpticStudio.ComponentOpticStudioXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ComponentOpticStudio.ComponentOpticStudioYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ComponentOpticStudio.ComponentOpticStudioGeometricComponents

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.OpticStudioGeometry> GetEnumerator()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.OpticStudioGeometry> List
Item | Children attribute: Get child by index | SpeosSim.OpticStudioGeometry Item
Item | Children attribute: Get child by index | SpeosSim.OpticStudioGeometry Item

### ComponentOpticStudio.ComponentOpticStudioDetectors

### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## ComponentSpeosPattern

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.ComponentSpeosPattern> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.ComponentSpeosPattern Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.ComponentSpeosPattern Create(object parent)
Create | Create a new object in the active context | SpeosSim.ComponentSpeosPattern Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.ComponentSpeosPattern Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.ComponentSpeosPattern CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
OptimizeRayFile | Call the 'Ray file optimization' command. Returns 'false' if this action is unavailable in the current state of the object. | bool OptimizeRayFile()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OneLayerPerInstance | Boolean attribute | bool OneLayerPerInstance
OneLayerPerSource | Boolean attribute | bool OneLayerPerSource
FilePattern | File attribute | Fou.Utils.ValueObjects.FilePath FilePattern
FilePatternFullPath | File attribute (absolute full path) | string FilePatternFullPath
FluxType | Enum attribute | SpeosSim.ComponentSpeosPattern.EnumFluxType FluxType
FluxTypeIndex | Enum attribute (as index) | int FluxTypeIndex
FluxFromRayFile | Boolean attribute | bool FluxFromRayFile
FluxValueLuminous | Number attribute | double FluxValueLuminous
FluxValueLuminousText | Number attribute (as text) | string FluxValueLuminousText
FluxValueRadiant | Number attribute | double FluxValueRadiant
FluxValueRadiantText | Number attribute (as text) | string FluxValueRadiantText
Origins | Links attribute | SpeosSim.ComponentSpeosPattern.ComponentSpeosPatternOrigins Origins
NumberOfRays | Number attribute | uint NumberOfRays
NumberOfRaysText | Number attribute (as text) | string NumberOfRaysText
RayLength | Number attribute | double RayLength
RayLengthText | Number attribute (as text) | string RayLengthText
LightBoxPreviewType | Enum attribute | SpeosSim.ComponentSpeosPattern.EnumLightBoxPreviewType LightBoxPreviewType
LightBoxPreviewTypeIndex | Enum attribute (as index) | int LightBoxPreviewTypeIndex
SpectrumType | Enum attribute | SpeosSim.ComponentSpeosPattern.EnumSpectrumType SpectrumType
SpectrumTypeIndex | Enum attribute (as index) | int SpectrumTypeIndex
SpectrumValueWavelength | Number attribute | double SpectrumValueWavelength
SpectrumValueWavelengthText | Number attribute (as text) | string SpectrumValueWavelengthText
SpectrumValueTemperature | Number attribute | double SpectrumValueTemperature
SpectrumValueTemperatureText | Number attribute (as text) | string SpectrumValueTemperatureText
SpectrumValueLibrary | File attribute | Fou.Utils.ValueObjects.FilePath SpectrumValueLibrary
SpectrumValueLibraryFullPath | File attribute (absolute full path) | string SpectrumValueLibraryFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### ComponentSpeosPattern.ComponentSpeosPatternOrigins

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## EyeboxConfiguration

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosSim.EyeboxConfiguration Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
EBConfigName | String attribute | string EBConfigName
Offset | Number attribute | double Offset
OffsetText | Number attribute (as text) | string OffsetText
TiltAngle | Number attribute | double TiltAngle
TiltAngleText | Number attribute (as text) | string TiltAngleText

## FTGEnabledGeometry

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosSim.FTGEnabledGeometry Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
IsFTG | Boolean attribute | bool IsFTG
FTGGeometry | Link attribute | SpeosSim.FTGEnabledGeometry.FTGEnabledGeometryFTGGeometry FTGGeometry

### FTGEnabledGeometry.FTGEnabledGeometryFTGGeometry

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## HoaEyeBox

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.HoaEyeBox> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.HoaEyeBox Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
EyeboxCenter | Link attribute | SpeosSim.HoaEyeBox.HoaEyeBoxEyeboxCenter EyeboxCenter
EyeboxOrientationType | Enum attribute | SpeosSim.HoaEyeBox.EnumEyeboxOrientationType EyeboxOrientationType
EyeboxOrientationTypeIndex | Enum attribute (as index) | int EyeboxOrientationTypeIndex
EyeboxSamplingMode | Enum attribute | SpeosSim.HoaEyeBox.EnumEyeboxSamplingMode EyeboxSamplingMode
EyeboxSamplingModeIndex | Enum attribute (as index) | int EyeboxSamplingModeIndex
OPTEyeBoxFile | File attribute | string OPTEyeBoxFile
OPTEyeBoxFileFullPath | File attribute (absolute full path) | string OPTEyeBoxFileFullPath
EBInterpupillaryDistance | Number attribute | double EBInterpupillaryDistance
EBInterpupillaryDistanceText | Number attribute (as text) | string EBInterpupillaryDistanceText
EBEyePupilDiameter | Number attribute | double EBEyePupilDiameter
EBEyePupilDiameterText | Number attribute (as text) | string EBEyePupilDiameterText
EBEyePupilSampling | Number attribute | int EBEyePupilSampling
EBEyePupilSamplingText | Number attribute (as text) | string EBEyePupilSamplingText
EBBinocularHorizontalSize | Number attribute | double EBBinocularHorizontalSize
EBBinocularHorizontalSizeText | Number attribute (as text) | string EBBinocularHorizontalSizeText
EBMonocularHorizontalSampling | Number attribute | int EBMonocularHorizontalSampling
EBMonocularHorizontalSamplingText | Number attribute (as text) | string EBMonocularHorizontalSamplingText
EBMonocularHorizontalSize | Number attribute | double EBMonocularHorizontalSize
EBMonocularHorizontalSizeText | Number attribute (as text) | string EBMonocularHorizontalSizeText
EBMonocularHorizontalResolution | Number attribute | double EBMonocularHorizontalResolution
EBMonocularHorizontalResolutionText | Number attribute (as text) | string EBMonocularHorizontalResolutionText
EBBinocularHorizontalSampling | Number attribute | uint EBBinocularHorizontalSampling
EBBinocularHorizontalSamplingText | Number attribute (as text) | string EBBinocularHorizontalSamplingText
EBNbSharedSamples | Number attribute | uint EBNbSharedSamples
EBNbSharedSamplesText | Number attribute (as text) | string EBNbSharedSamplesText
EBVerticalSize | Number attribute | double EBVerticalSize
EBVerticalSizeText | Number attribute (as text) | string EBVerticalSizeText
EBVerticalSampling | Number attribute | int EBVerticalSampling
EBVerticalSamplingText | Number attribute (as text) | string EBVerticalSamplingText
EBVerticalResolution | Number attribute | double EBVerticalResolution
EBVerticalResolutionText | Number attribute (as text) | string EBVerticalResolutionText
EBMultiEyebox | Boolean attribute | bool EBMultiEyebox
EyeboxConfigPositionDirectionType | Enum attribute | SpeosSim.HoaEyeBox.EnumEyeboxConfigPositionDirectionType EyeboxConfigPositionDirectionType
EyeboxConfigPositionDirectionTypeIndex | Enum attribute (as index) | int EyeboxConfigPositionDirectionTypeIndex
EBConfigurations | Children attribute | SpeosSim.HoaEyeBox.HoaEyeBoxEBConfigurations EBConfigurations
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### HoaEyeBox.HoaEyeBoxEyeboxCenter

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HoaEyeBox.HoaEyeBoxEBConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.EyeboxConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosSim.EyeboxConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.EyeboxConfiguration> List
Item | Children attribute: Get child by index | SpeosSim.EyeboxConfiguration Item

## HoaMirrors

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.HoaMirrors> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.HoaMirrors Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
GetMultiEyeBoxMirrorPossibleValues | String list attribute: List possible values | IEnumerable<string> GetMultiEyeBoxMirrorPossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
MirrorFaces | Links attribute | SpeosSim.HoaMirrors.HoaMirrorsMirrorFaces MirrorFaces
MultiEyeBoxMirror | String list selection attribute | string MultiEyeBoxMirror
TiltRotationAxis | Link attribute | SpeosSim.HoaMirrors.HoaMirrorsTiltRotationAxis TiltRotationAxis
TiltRotationAxisReverse | Boolean attribute | bool TiltRotationAxisReverse
EBMirrorConfigurations | Children attribute | SpeosSim.HoaMirrors.HoaMirrorsEBMirrorConfigurations EBMirrorConfigurations
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### HoaMirrors.HoaMirrorsMirrorFaces

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### HoaMirrors.HoaMirrorsTiltRotationAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HoaMirrors.HoaMirrorsEBMirrorConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.EyeboxConfiguration> GetEnumerator()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.EyeboxConfiguration> List
Item | Children attribute: Get child by index | SpeosSim.EyeboxConfiguration Item

## HoaPGU

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.HoaPGU> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.HoaPGU Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
PGUHorizontalSampling | Number attribute | int PGUHorizontalSampling
PGUHorizontalSamplingText | Number attribute (as text) | string PGUHorizontalSamplingText
PGUVerticalSampling | Number attribute | int PGUVerticalSampling
PGUVerticalSamplingText | Number attribute (as text) | string PGUVerticalSamplingText
PGUCharacteristicsType | Enum attribute | SpeosSim.HoaPGU.EnumPGUCharacteristicsType PGUCharacteristicsType
PGUCharacteristicsTypeIndex | Enum attribute (as index) | int PGUCharacteristicsTypeIndex
PGUHorizontalSize | Number attribute | double PGUHorizontalSize
PGUHorizontalSizeText | Number attribute (as text) | string PGUHorizontalSizeText
PGUHorizontalResolution | Number attribute | int PGUHorizontalResolution
PGUHorizontalResolutionText | Number attribute (as text) | string PGUHorizontalResolutionText
PGUVerticalSize | Number attribute | double PGUVerticalSize
PGUVerticalSizeText | Number attribute (as text) | string PGUVerticalSizeText
PGUVerticalResolution | Number attribute | int PGUVerticalResolution
PGUVerticalResolutionText | Number attribute (as text) | string PGUVerticalResolutionText
OriginPoint | Link attribute | SpeosSim.HoaPGU.HoaPGUOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.HoaPGU.HoaPGUXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.HoaPGU.HoaPGUYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### HoaPGU.HoaPGUOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HoaPGU.HoaPGUXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HoaPGU.HoaPGUYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## HoaReport

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.HoaReport> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.HoaReport Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
GetPluginTestsPossibleValues | String list attribute: List possible values | IEnumerable<string> GetPluginTestsPossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
PluginTests | String list with multiple selection attribute | IEnumerable<string> PluginTests
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## HoaTargetImage

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.HoaTargetImage> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.HoaTargetImage Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
TIVirtualImageDistance | Number attribute | double TIVirtualImageDistance
TIVirtualImageDistanceText | Number attribute (as text) | string TIVirtualImageDistanceText
TILookOverAngle | Number attribute | double TILookOverAngle
TILookOverAngleText | Number attribute (as text) | string TILookOverAngleText
TILookDownAngle | Number attribute | double TILookDownAngle
TILookDownAngleText | Number attribute (as text) | string TILookDownAngleText
TargetImageModeType | Enum attribute | SpeosSim.HoaTargetImage.EnumTargetImageModeType TargetImageModeType
TargetImageModeTypeIndex | Enum attribute (as index) | int TargetImageModeTypeIndex
TIHorizontalSize | Number attribute | double TIHorizontalSize
TIHorizontalSizeText | Number attribute (as text) | string TIHorizontalSizeText
TIVerticalSize | Number attribute | double TIVerticalSize
TIVerticalSizeText | Number attribute (as text) | string TIVerticalSizeText
TIHorizontalFOV | Number attribute | double TIHorizontalFOV
TIHorizontalFOVText | Number attribute (as text) | string TIHorizontalFOVText
TIVerticalFOV | Number attribute | double TIVerticalFOV
TIVerticalFOVText | Number attribute (as text) | string TIVerticalFOVText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## HoaWarping

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.HoaWarping> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.HoaWarping Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
GetAlgorithmPossibleValues | String list attribute: List possible values | IEnumerable<string> GetAlgorithmPossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
WarpingMode | Enum attribute | SpeosSim.HoaWarping.EnumWarpingMode WarpingMode
WarpingModeIndex | Enum attribute (as index) | int WarpingModeIndex
HorizontalSampling | Number attribute | int HorizontalSampling
HorizontalSamplingText | Number attribute (as text) | string HorizontalSamplingText
VerticalSampling | Number attribute | int VerticalSampling
VerticalSamplingText | Number attribute (as text) | string VerticalSamplingText
OPTWarpingFile | File attribute | string OPTWarpingFile
OPTWarpingFileFullPath | File attribute (absolute full path) | string OPTWarpingFileFullPath
Algorithm | String list selection attribute | string Algorithm
AlgorithmFile | File attribute | string AlgorithmFile
AlgorithmFileFullPath | File attribute (absolute full path) | string AlgorithmFileFullPath
TiltMode | Enum attribute | SpeosSim.HoaWarping.EnumTiltMode TiltMode
TiltModeIndex | Enum attribute (as index) | int TiltModeIndex
TiltShorterDriver | Number attribute | double TiltShorterDriver
TiltShorterDriverText | Number attribute (as text) | string TiltShorterDriverText
TiltTallerDriver | Number attribute | double TiltTallerDriver
TiltTallerDriverText | Number attribute (as text) | string TiltTallerDriverText
OffsetShorterDriver | Number attribute | double OffsetShorterDriver
OffsetShorterDriverText | Number attribute (as text) | string OffsetShorterDriverText
OffsetTallerDriver | Number attribute | double OffsetTallerDriver
OffsetTallerDriverText | Number attribute (as text) | string OffsetTallerDriverText
TiltSampling | Number attribute | int TiltSampling
TiltSamplingText | Number attribute (as text) | string TiltSamplingText
TiltResolution | Number attribute | double TiltResolution
TiltResolutionText | Number attribute (as text) | string TiltResolutionText
OffsetResolution | Number attribute | double OffsetResolution
OffsetResolutionText | Number attribute (as text) | string OffsetResolutionText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## HoaWindshield

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.HoaWindshield> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.HoaWindshield Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
WindshieldInnerSurface | Link attribute | SpeosSim.HoaWindshield.HoaWindshieldWindshieldInnerSurface WindshieldInnerSurface
WindshieldOuterSurface | Link attribute | SpeosSim.HoaWindshield.HoaWindshieldWindshieldOuterSurface WindshieldOuterSurface
WindshieldRefractiveIndex | Number attribute | double WindshieldRefractiveIndex
WindshieldRefractiveIndexText | Number attribute (as text) | string WindshieldRefractiveIndexText
CoverLensOuterSurface | Link attribute | SpeosSim.HoaWindshield.HoaWindshieldCoverLensOuterSurface CoverLensOuterSurface
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### HoaWindshield.HoaWindshieldWindshieldInnerSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HoaWindshield.HoaWindshieldWindshieldOuterSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HoaWindshield.HoaWindshieldCoverLensOuterSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## ImportedFeature

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.ImportedFeature> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.ImportedFeature Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
ImportedObjectType | Enum attribute | SpeosSim.ImportedFeature.EnumImportedObjectType ImportedObjectType
ImportedObjectTypeIndex | Enum attribute (as index) | int ImportedObjectTypeIndex
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## LocalMeshing

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.LocalMeshing> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.LocalMeshing Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.LocalMeshing Create(object parent)
Create | Create a new object in the active context | SpeosSim.LocalMeshing Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.LocalMeshing Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.LocalMeshing CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
MeshingSagMode | Enum attribute | SpeosSim.LocalMeshing.EnumMeshingSagMode MeshingSagMode
MeshingSagModeIndex | Enum attribute (as index) | int MeshingSagModeIndex
MeshingSagValue | Number attribute | double MeshingSagValue
MeshingSagValueText | Number attribute (as text) | string MeshingSagValueText
MeshingSagLengthValue | Number attribute | double MeshingSagLengthValue
MeshingSagLengthValueText | Number attribute (as text) | string MeshingSagLengthValueText
MeshingStepMode | Enum attribute | SpeosSim.LocalMeshing.EnumMeshingStepMode MeshingStepMode
MeshingStepModeIndex | Enum attribute (as index) | int MeshingStepModeIndex
MeshingStepValue | Number attribute | double MeshingStepValue
MeshingStepValueText | Number attribute (as text) | string MeshingStepValueText
MeshingStepLengthValue | Number attribute | double MeshingStepLengthValue
MeshingStepLengthValueText | Number attribute (as text) | string MeshingStepLengthValueText
MeshingAngle | Number attribute | double MeshingAngle
MeshingAngleText | Number attribute (as text) | string MeshingAngleText
Geometries | Links attribute | SpeosSim.LocalMeshing.LocalMeshingGeometries Geometries
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### LocalMeshing.LocalMeshingGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## LXPEnabledSensor

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosSim.LXPEnabledSensor Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
IsLXP | Boolean attribute | bool IsLXP
LXPSensor | Link attribute | SpeosSim.LXPEnabledSensor.LXPEnabledSensorLXPSensor LXPSensor

### LXPEnabledSensor.LXPEnabledSensorLXPSensor

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## Material

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.Material> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.Material Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.Material Create(object parent)
Create | Create a new object in the active context | SpeosSim.Material Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.Material Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.Material CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Description | String attribute | string Description
VisualizationColorText | Color attribute (as text like "R,G,B") | string VisualizationColorText
OpticalPropertiesType | Enum attribute | SpeosSim.Material.EnumOpticalPropertiesType OpticalPropertiesType
OpticalPropertiesTypeIndex | Enum attribute (as index) | int OpticalPropertiesTypeIndex
HasMultipleSOP | Boolean attribute | bool HasMultipleSOP
VolumeGeometries | Links attribute | SpeosSim.Material.MaterialVolumeGeometries VolumeGeometries
OrientedFaces | Children attribute | SpeosSim.Material.MaterialOrientedFaces OrientedFaces
ListSOP | Children attribute | SpeosSim.Material.MaterialListSOP ListSOP
SOPType | Enum attribute | SpeosSim.Material.EnumSOPType SOPType
SOPTypeIndex | Enum attribute (as index) | int SOPTypeIndex
SOPReflectance | Number attribute | double SOPReflectance
SOPReflectanceText | Number attribute (as text) | string SOPReflectanceText
SOPLibrary | File attribute | string SOPLibrary
SOPLibraryFullPath | File attribute (absolute full path) | string SOPLibraryFullPath
SopPluginPath | File attribute | string SopPluginPath
SopPluginPathFullPath | File attribute (absolute full path) | string SopPluginPathFullPath
SopPluginConfigurationPath | File attribute | string SopPluginConfigurationPath
SopPluginConfigurationPathFullPath | File attribute (absolute full path) | string SopPluginConfigurationPathFullPath
PreviewedLayer | Enum attribute | SpeosSim.Material.EnumPreviewedLayer PreviewedLayer
PreviewedLayerIndex | Enum attribute (as index) | int PreviewedLayerIndex
VOPType | Enum attribute | SpeosSim.Material.EnumVOPType VOPType
VOPTypeIndex | Enum attribute (as index) | int VOPTypeIndex
VOPIndex | Number attribute | double VOPIndex
VOPIndexText | Number attribute (as text) | string VOPIndexText
VOPAbsorption | Number attribute | double VOPAbsorption
VOPAbsorptionText | Number attribute (as text) | string VOPAbsorptionText
VOPIsConstringence | Boolean attribute | bool VOPIsConstringence
VOPConstringence | Number attribute | double VOPConstringence
VOPConstringenceText | Number attribute (as text) | string VOPConstringenceText
VOPLibrary | File attribute | string VOPLibrary
VOPLibraryFullPath | File attribute (absolute full path) | string VOPLibraryFullPath
GradedFile | File attribute | string GradedFile
GradedFileFullPath | File attribute (absolute full path) | string GradedFileFullPath
OriginPoint | Link attribute | SpeosSim.Material.MaterialOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.Material.MaterialXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.Material.MaterialYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### Material.MaterialVolumeGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### Material.MaterialOrientedFaces

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.OrientedFace> GetEnumerator()
Add | Children attribute: Add an object to the children list | void Add(SpeosSim.OrientedFace childObject)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.OrientedFace> List
Item | Children attribute: Get child by index | SpeosSim.OrientedFace Item

### Material.MaterialListSOP

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.SurfaceLayer> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosSim.SurfaceLayer AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.SurfaceLayer> List
Item | Children attribute: Get child by index | SpeosSim.SurfaceLayer Item
Item | Children attribute: Get child by index | SpeosSim.SurfaceLayer Item

### Material.MaterialOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Material.MaterialXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Material.MaterialYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## Node

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.Node> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.Node Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## OpticStudioGeometry

### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
Body | Links attribute | SpeosSim.OpticStudioGeometry.OpticStudioGeometryBody Body
BackFaces | Links attribute | SpeosSim.OpticStudioGeometry.OpticStudioGeometryBackFaces BackFaces
FrontFaces | Links attribute | SpeosSim.OpticStudioGeometry.OpticStudioGeometryFrontFaces FrontFaces
EdgeFaces | Links attribute | SpeosSim.OpticStudioGeometry.OpticStudioGeometryEdgeFaces EdgeFaces
NewFaces | Links attribute | SpeosSim.OpticStudioGeometry.OpticStudioGeometryNewFaces NewFaces

### OpticStudioGeometry.OpticStudioGeometryBody

### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### OpticStudioGeometry.OpticStudioGeometryBackFaces

### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### OpticStudioGeometry.OpticStudioGeometryFrontFaces

### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### OpticStudioGeometry.OpticStudioGeometryEdgeFaces

### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### OpticStudioGeometry.OpticStudioGeometryNewFaces

### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## OrientedFace

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosSim.OrientedFace Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
ReverseDirection | Boolean attribute | bool ReverseDirection
Face | Link attribute | SpeosSim.OrientedFace.OrientedFaceFace Face

### OrientedFace.OrientedFaceFace

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## ResultLXP

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.ResultLXP> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.ResultLXP Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
ExportRaysAsGeometry | Export the Light Expert rays as geometry | void ExportRaysAsGeometry()
UpdateResults | Update the .xmp files | void UpdateResults()
OpenLpf | Load the file | void OpenLpf()
CloseLpf | Unload the file | void CloseLpf()
CreateAreaRectangle | Creates a rectangular measure area | void CreateAreaRectangle(int viewerId, double xCenter, double yCenter, double width, double height)
CreateAreaEllipse | Creates an elliptical measure area | void CreateAreaEllipse(int viewerId, double xCenter, double yCenter, double xRadius, double yRadius)
CreateAreaPolygon | Creates a polygon measure area | void CreateAreaPolygon(int viewerId, System.Double[] xPoints, System.Double[] yPoints)
GetMeasureValue | Gets the measure value from a defined type | double GetMeasureValue(int viewerId, int measureId)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
RequiredFaces | Links attribute | SpeosSim.ResultLXP.ResultLXPRequiredFaces RequiredFaces
RejectedFaces | Links attribute | SpeosSim.ResultLXP.ResultLXPRejectedFaces RejectedFaces
FaceFiltering | Enum attribute | SpeosSim.ResultLXP.EnumFaceFiltering FaceFiltering
FaceFilteringIndex | Enum attribute (as index) | int FaceFilteringIndex
RaysPassingBy | Enum attribute | SpeosSim.ResultLXP.EnumRaysPassingBy RaysPassingBy
RaysPassingByIndex | Enum attribute (as index) | int RaysPassingByIndex
FilteredRaysOnly | Boolean attribute | bool FilteredRaysOnly
RayNumber | Number attribute | uint RayNumber
RayNumberText | Number attribute (as text) | string RayNumberText
RayLength | Number attribute | double RayLength
RayLengthText | Number attribute (as text) | string RayLengthText
RotationViewDistance | Number attribute | double RotationViewDistance
RotationViewDistanceText | Number attribute (as text) | string RotationViewDistanceText
RaysErrorType | Enum attribute | SpeosSim.ResultLXP.EnumRaysErrorType RaysErrorType
RaysErrorTypeIndex | Enum attribute (as index) | int RaysErrorTypeIndex
RaysDrawType | Enum attribute | SpeosSim.ResultLXP.EnumRaysDrawType RaysDrawType
RaysDrawTypeIndex | Enum attribute (as index) | int RaysDrawTypeIndex
DrawThickness | Number attribute | int DrawThickness
DrawThicknessText | Number attribute (as text) | string DrawThicknessText
FullPath | Get the result file full path | string FullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### ResultLXP.ResultLXPRequiredFaces

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### ResultLXP.ResultLXPRejectedFaces

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## ResultProjectedGrid

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.ResultProjectedGrid> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.ResultProjectedGrid Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
ExportProjectedGridAsGeometry | Export the projected grid as geometry | void ExportProjectedGridAsGeometry()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
MinDistanceTolerance | Number attribute | double MinDistanceTolerance
MinDistanceToleranceText | Number attribute (as text) | string MinDistanceToleranceText
MaxIncidence | Number attribute | double MaxIncidence
MaxIncidenceText | Number attribute (as text) | string MaxIncidenceText
MaxDistanceFromCamera | Number attribute | double MaxDistanceFromCamera
MaxDistanceFromCameraText | Number attribute (as text) | string MaxDistanceFromCameraText
AuthorizeConnectionBetweenBodies | Boolean attribute | bool AuthorizeConnectionBetweenBodies
PrimaryStep | Number attribute | int PrimaryStep
PrimaryStepText | Number attribute (as text) | string PrimaryStepText
SecondaryStep | Number attribute | int SecondaryStep
SecondaryStepText | Number attribute (as text) | string SecondaryStepText
DisplayGraduationText | Boolean attribute | bool DisplayGraduationText
DisplayFirstHighLightedLines | Boolean attribute | bool DisplayFirstHighLightedLines
XDisplayFirst | Number attribute | int XDisplayFirst
XDisplayFirstText | Number attribute (as text) | string XDisplayFirstText
YDisplayFirst | Number attribute | int YDisplayFirst
YDisplayFirstText | Number attribute (as text) | string YDisplayFirstText
DisplaySecondHighLightedLines | Boolean attribute | bool DisplaySecondHighLightedLines
XDisplaySecond | Number attribute | int XDisplaySecond
XDisplaySecondText | Number attribute (as text) | string XDisplaySecondText
YDisplaySecond | Number attribute | int YDisplaySecond
YDisplaySecondText | Number attribute (as text) | string YDisplaySecondText
CloseBoundaries | Boolean attribute | bool CloseBoundaries
FullPath | Get the result file full path | string FullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## Sensor3DED

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.Sensor3DED> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.Sensor3DED Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.Sensor3DED Create(object parent)
Create | Create a new object in the active context | SpeosSim.Sensor3DED Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.Sensor3DED Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.Sensor3DED CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
SizeX | Number attribute | double SizeX
SizeXText | Number attribute (as text) | string SizeXText
SamplingX | Number attribute | uint SamplingX
SamplingXText | Number attribute (as text) | string SamplingXText
SizeY | Number attribute | double SizeY
SizeYText | Number attribute (as text) | string SizeYText
SamplingY | Number attribute | uint SamplingY
SamplingYText | Number attribute (as text) | string SamplingYText
SizeZ | Number attribute | double SizeZ
SizeZText | Number attribute (as text) | string SizeZText
SamplingZ | Number attribute | uint SamplingZ
SamplingZText | Number attribute (as text) | string SamplingZText
SensorType | Enum attribute | SpeosSim.Sensor3DED.EnumSensorType SensorType
SensorTypeIndex | Enum attribute (as index) | int SensorTypeIndex
IntegrationMode | Enum attribute | SpeosSim.Sensor3DED.EnumIntegrationMode IntegrationMode
IntegrationModeIndex | Enum attribute (as index) | int IntegrationModeIndex
LayerType | Enum attribute | SpeosSim.Sensor3DED.EnumLayerType LayerType
LayerTypeIndex | Enum attribute (as index) | int LayerTypeIndex
FaceFiltering | Links attribute | SpeosSim.Sensor3DED.Sensor3DEDFaceFiltering FaceFiltering
SCAFilteringMode | Enum attribute | SpeosSim.Sensor3DED.EnumSCAFilteringMode SCAFilteringMode
SCAFilteringModeIndex | Enum attribute (as index) | int SCAFilteringModeIndex
OriginPoint | Link attribute | SpeosSim.Sensor3DED.Sensor3DEDOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.Sensor3DED.Sensor3DEDXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.Sensor3DED.Sensor3DEDYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### Sensor3DED.Sensor3DEDFaceFiltering

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### Sensor3DED.Sensor3DEDOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Sensor3DED.Sensor3DEDXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### Sensor3DED.Sensor3DEDYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## Sensor3DIrradiance

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.Sensor3DIrradiance> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.Sensor3DIrradiance Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.Sensor3DIrradiance Create(object parent)
Create | Create a new object in the active context | SpeosSim.Sensor3DIrradiance Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.Sensor3DIrradiance Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.Sensor3DIrradiance CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
SensorType | Enum attribute | SpeosSim.Sensor3DIrradiance.EnumSensorType SensorType
SensorTypeIndex | Enum attribute (as index) | int SensorTypeIndex
IlluminanceType | Enum attribute | SpeosSim.Sensor3DIrradiance.EnumIlluminanceType IlluminanceType
IlluminanceTypeIndex | Enum attribute (as index) | int IlluminanceTypeIndex
RayFileType | Enum attribute | SpeosSim.Sensor3DIrradiance.EnumRayFileType RayFileType
RayFileTypeIndex | Enum attribute (as index) | int RayFileTypeIndex
LayerType | Enum attribute | SpeosSim.Sensor3DIrradiance.EnumLayerType LayerType
LayerTypeIndex | Enum attribute (as index) | int LayerTypeIndex
Reflection | Boolean attribute | bool Reflection
Transmission | Boolean attribute | bool Transmission
Absorption | Boolean attribute | bool Absorption
Geometries | Links attribute | SpeosSim.Sensor3DIrradiance.Sensor3DIrradianceGeometries Geometries
XM3TemplateFile | File attribute | string XM3TemplateFile
XM3TemplateFileFullPath | File attribute (absolute full path) | string XM3TemplateFileFullPath
WavelengthStart | Number attribute | double WavelengthStart
WavelengthStartText | Number attribute (as text) | string WavelengthStartText
WavelengthEnd | Number attribute | double WavelengthEnd
WavelengthEndText | Number attribute (as text) | string WavelengthEndText
WavelengthNbSamples | Number attribute | uint WavelengthNbSamples
WavelengthNbSamplesText | Number attribute (as text) | string WavelengthNbSamplesText
WavelengthResolution | Number attribute | double WavelengthResolution
WavelengthResolutionText | Number attribute (as text) | string WavelengthResolutionText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### Sensor3DIrradiance.Sensor3DIrradianceGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SensorCamera

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorCamera> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorCamera Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorCamera Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorCamera Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorCamera Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorCamera CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
SensorMode | Enum attribute | SpeosSim.SensorCamera.EnumSensorMode SensorMode
SensorModeIndex | Enum attribute (as index) | int SensorModeIndex
LayerType | Enum attribute | SpeosSim.SensorCamera.EnumLayerType LayerType
LayerTypeIndex | Enum attribute (as index) | int LayerTypeIndex
OriginPoint | Link attribute | SpeosSim.SensorCamera.SensorCameraOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SensorCamera.SensorCameraXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SensorCamera.SensorCameraYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
TrajectoryFile | File attribute | string TrajectoryFile
TrajectoryFileFullPath | File attribute (absolute full path) | string TrajectoryFileFullPath
AcquisitionIntegration | Time duration attribute : can either be defined by a Double or a TimeSpan value | Fou.Utils.ValueObjects.TimeDuration AcquisitionIntegration
AcquisitionIntegrationText | Number attribute (as text) | string AcquisitionIntegrationText
AcquisitionLagTime | Time duration attribute : can either be defined by a Double or a TimeSpan value | Fou.Utils.ValueObjects.TimeDuration AcquisitionLagTime
AcquisitionLagTimeText | Number attribute (as text) | string AcquisitionLagTimeText
WStart | Number attribute | double WStart
WStartText | Number attribute (as text) | string WStartText
WEnd | Number attribute | double WEnd
WEndText | Number attribute (as text) | string WEndText
WSamples | Number attribute | uint WSamples
WSamplesText | Number attribute (as text) | string WSamplesText
WResolution | Number attribute | double WResolution
WResolutionText | Number attribute (as text) | string WResolutionText
FocalLength | Number attribute | double FocalLength
FocalLengthText | Number attribute (as text) | string FocalLengthText
ImagerDistance | Number attribute | double ImagerDistance
ImagerDistanceText | Number attribute (as text) | string ImagerDistanceText
FNumber | Number attribute | double FNumber
FNumberText | Number attribute (as text) | string FNumberText
HorzFov | Number attribute | double HorzFov
HorzFovText | Number attribute (as text) | string HorzFovText
VertFov | Number attribute | double VertFov
VertFovText | Number attribute (as text) | string VertFovText
HorzPixel | Number attribute | uint HorzPixel
HorzPixelText | Number attribute (as text) | string HorzPixelText
VertPixel | Number attribute | uint VertPixel
VertPixelText | Number attribute (as text) | string VertPixelText
Width | Number attribute | double Width
WidthText | Number attribute (as text) | string WidthText
Height | Number attribute | double Height
HeightText | Number attribute (as text) | string HeightText
ColorMode | Enum attribute | SpeosSim.SensorCamera.EnumColorMode ColorMode
ColorModeIndex | Enum attribute (as index) | int ColorModeIndex
GammaCorrection | Number attribute | double GammaCorrection
GammaCorrectionText | Number attribute (as text) | string GammaCorrectionText
BalanceMode | Enum attribute | SpeosSim.SensorCamera.EnumBalanceMode BalanceMode
BalanceModeIndex | Enum attribute (as index) | int BalanceModeIndex
RedGain | Number attribute | double RedGain
RedGainText | Number attribute (as text) | string RedGainText
GreenGain | Number attribute | double GreenGain
GreenGainText | Number attribute (as text) | string GreenGainText
BlueGain | Number attribute | double BlueGain
BlueGainText | Number attribute (as text) | string BlueGainText
PNGBits | Enum attribute | SpeosSim.SensorCamera.EnumPNGBits PNGBits
PNGBitsIndex | Enum attribute (as index) | int PNGBitsIndex
TransmittanceFile | File attribute | string TransmittanceFile
TransmittanceFileFullPath | File attribute (absolute full path) | string TransmittanceFileFullPath
DistorsionFile | File attribute | string DistorsionFile
DistorsionFileFullPath | File attribute (absolute full path) | string DistorsionFileFullPath
SpectrumFile | File attribute | string SpectrumFile
SpectrumFileFullPath | File attribute (absolute full path) | string SpectrumFileFullPath
RedSpectrumFile | File attribute | string RedSpectrumFile
RedSpectrumFileFullPath | File attribute (absolute full path) | string RedSpectrumFileFullPath
GreenSpectrumFile | File attribute | string GreenSpectrumFile
GreenSpectrumFileFullPath | File attribute (absolute full path) | string GreenSpectrumFileFullPath
BlueSpectrumFile | File attribute | string BlueSpectrumFile
BlueSpectrumFileFullPath | File attribute (absolute full path) | string BlueSpectrumFileFullPath
RedDisplaySpectrumFile | File attribute | string RedDisplaySpectrumFile
RedDisplaySpectrumFileFullPath | File attribute (absolute full path) | string RedDisplaySpectrumFileFullPath
GreenDisplaySpectrumFile | File attribute | string GreenDisplaySpectrumFile
GreenDisplaySpectrumFileFullPath | File attribute (absolute full path) | string GreenDisplaySpectrumFileFullPath
BlueDisplaySpectrumFile | File attribute | string BlueDisplaySpectrumFile
BlueDisplaySpectrumFileFullPath | File attribute (absolute full path) | string BlueDisplaySpectrumFileFullPath
DisplayImageField | Boolean attribute | bool DisplayImageField
DisplayObjectField | Boolean attribute | bool DisplayObjectField
DisplayPupil | Boolean attribute | bool DisplayPupil
ObjectFieldVisuRadius | Number attribute | double ObjectFieldVisuRadius
ObjectFieldVisuRadiusText | Number attribute (as text) | string ObjectFieldVisuRadiusText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorCamera.SensorCameraOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorCamera.SensorCameraXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorCamera.SensorCameraYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SensorEye

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorEye> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorEye Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorEye Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorEye Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorEye Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorEye CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosSim.SensorEye.SensorEyeOriginPoint OriginPoint
TargetPoint | Link attribute | SpeosSim.SensorEye.SensorEyeTargetPoint TargetPoint
TopDirection | Link attribute | SpeosSim.SensorEye.SensorEyeTopDirection TopDirection
TopDirectionReverse | Boolean attribute | bool TopDirectionReverse
SensorType | Enum attribute | SpeosSim.SensorEye.EnumSensorType SensorType
SensorTypeIndex | Enum attribute (as index) | int SensorTypeIndex
LayerType | Enum attribute | SpeosSim.SensorEye.EnumLayerType LayerType
LayerTypeIndex | Enum attribute (as index) | int LayerTypeIndex
DefinitionFrom | Enum attribute | SpeosSim.SensorEye.EnumDefinitionFrom DefinitionFrom
DefinitionFromIndex | Enum attribute (as index) | int DefinitionFromIndex
XMPTemplateFile | File attribute | string XMPTemplateFile
XMPTemplateFileFullPath | File attribute (absolute full path) | string XMPTemplateFileFullPath
DimensionFromFile | Boolean attribute | bool DimensionFromFile
DisplayPropertiesFromFile | Boolean attribute | bool DisplayPropertiesFromFile
XIsMirrored | Boolean attribute | bool XIsMirrored
XStart | Number attribute | double XStart
XStartText | Number attribute (as text) | string XStartText
XEnd | Number attribute | double XEnd
XEndText | Number attribute (as text) | string XEndText
XNbSamples | Number attribute | uint XNbSamples
XNbSamplesText | Number attribute (as text) | string XNbSamplesText
XResolution | Number attribute | double XResolution
XResolutionText | Number attribute (as text) | string XResolutionText
YIsMirrored | Boolean attribute | bool YIsMirrored
YStart | Number attribute | double YStart
YStartText | Number attribute (as text) | string YStartText
YEnd | Number attribute | double YEnd
YEndText | Number attribute (as text) | string YEndText
YNbSamples | Number attribute | uint YNbSamples
YNbSamplesText | Number attribute (as text) | string YNbSamplesText
YResolution | Number attribute | double YResolution
YResolutionText | Number attribute (as text) | string YResolutionText
PupilDiameter | Number attribute | double PupilDiameter
PupilDiameterText | Number attribute (as text) | string PupilDiameterText
ShowGrid | Boolean attribute | bool ShowGrid
OriginX | Number attribute | double OriginX
OriginXText | Number attribute (as text) | string OriginXText
OriginY | Number attribute | double OriginY
OriginYText | Number attribute (as text) | string OriginYText
StepX | Number attribute | double StepX
StepXText | Number attribute (as text) | string StepXText
StepY | Number attribute | double StepY
StepYText | Number attribute (as text) | string StepYText
WavelengthStart | Number attribute | double WavelengthStart
WavelengthStartText | Number attribute (as text) | string WavelengthStartText
WavelengthEnd | Number attribute | double WavelengthEnd
WavelengthEndText | Number attribute (as text) | string WavelengthEndText
WavelengthSampling | Number attribute | uint WavelengthSampling
WavelengthSamplingText | Number attribute (as text) | string WavelengthSamplingText
WavelengthResolution | Number attribute | double WavelengthResolution
WavelengthResolutionText | Number attribute (as text) | string WavelengthResolutionText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorEye.SensorEyeOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorEye.SensorEyeTargetPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorEye.SensorEyeTopDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SensorImmersive

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorImmersive> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorImmersive Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorImmersive Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorImmersive Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorImmersive Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorImmersive CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Sampling | Number attribute | uint Sampling
SamplingText | Number attribute (as text) | string SamplingText
CentralResolution | Number attribute | double CentralResolution
CentralResolutionText | Number attribute (as text) | string CentralResolutionText
Stereo | Boolean attribute | bool Stereo
InterocularDistance | Number attribute | double InterocularDistance
InterocularDistanceText | Number attribute (as text) | string InterocularDistanceText
LayerType | Enum attribute | SpeosSim.SensorImmersive.EnumLayerType LayerType
LayerTypeIndex | Enum attribute (as index) | int LayerTypeIndex
IntegrationAngle | Number attribute | double IntegrationAngle
IntegrationAngleText | Number attribute (as text) | string IntegrationAngleText
VisuSize | Number attribute | double VisuSize
VisuSizeText | Number attribute (as text) | string VisuSizeText
Front | Boolean attribute | bool Front
Back | Boolean attribute | bool Back
Top | Boolean attribute | bool Top
Bottom | Boolean attribute | bool Bottom
Left | Boolean attribute | bool Left
Right | Boolean attribute | bool Right
WavelengthStart | Number attribute | double WavelengthStart
WavelengthStartText | Number attribute (as text) | string WavelengthStartText
WavelengthEnd | Number attribute | double WavelengthEnd
WavelengthEndText | Number attribute (as text) | string WavelengthEndText
WavelengthNbSamples | Number attribute | uint WavelengthNbSamples
WavelengthNbSamplesText | Number attribute (as text) | string WavelengthNbSamplesText
WavelengthResolution | Number attribute | double WavelengthResolution
WavelengthResolutionText | Number attribute (as text) | string WavelengthResolutionText
OriginPoint | Link attribute | SpeosSim.SensorImmersive.SensorImmersiveOriginPoint OriginPoint
FrontDirection | Link attribute | SpeosSim.SensorImmersive.SensorImmersiveFrontDirection FrontDirection
FrontDirectionReverse | Boolean attribute | bool FrontDirectionReverse
TopDirection | Link attribute | SpeosSim.SensorImmersive.SensorImmersiveTopDirection TopDirection
TopDirectionReverse | Boolean attribute | bool TopDirectionReverse
AutoFramingFaceSelection | Enum attribute | SpeosSim.SensorImmersive.EnumAutoFramingFaceSelection AutoFramingFaceSelection
AutoFramingFaceSelectionIndex | Enum attribute (as index) | int AutoFramingFaceSelectionIndex
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorImmersive.SensorImmersiveOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorImmersive.SensorImmersiveFrontDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorImmersive.SensorImmersiveTopDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SensorIntensity

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorIntensity> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorIntensity Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorIntensity Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorIntensity Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorIntensity Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorIntensity CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosSim.SensorIntensity.SensorIntensityOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SensorIntensity.SensorIntensityXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SensorIntensity.SensorIntensityYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
SensorType | Enum attribute | SpeosSim.SensorIntensity.EnumSensorType SensorType
SensorTypeIndex | Enum attribute (as index) | int SensorTypeIndex
FormatType | Enum attribute | SpeosSim.SensorIntensity.EnumFormatType FormatType
FormatTypeIndex | Enum attribute (as index) | int FormatTypeIndex
IntensityType | Enum attribute | SpeosSim.SensorIntensity.EnumIntensityType IntensityType
IntensityTypeIndex | Enum attribute (as index) | int IntensityTypeIndex
LayerType | Enum attribute | SpeosSim.SensorIntensity.EnumLayerType LayerType
LayerTypeIndex | Enum attribute (as index) | int LayerTypeIndex
FaceFiltering | Links attribute | SpeosSim.SensorIntensity.SensorIntensityFaceFiltering FaceFiltering
SCAFilteringMode | Enum attribute | SpeosSim.SensorIntensity.EnumSCAFilteringMode SCAFilteringMode
SCAFilteringModeIndex | Enum attribute (as index) | int SCAFilteringModeIndex
MaximumNbOfSequence | Number attribute | uint MaximumNbOfSequence
MaximumNbOfSequenceText | Number attribute (as text) | string MaximumNbOfSequenceText
DefineSequencePer | Enum attribute | SpeosSim.SensorIntensity.EnumDefineSequencePer DefineSequencePer
DefineSequencePerIndex | Enum attribute (as index) | int DefineSequencePerIndex
AdaptativeSampling | File attribute | string AdaptativeSampling
AdaptativeSamplingFullPath | File attribute (absolute full path) | string AdaptativeSamplingFullPath
ThetaStart | Number attribute | double ThetaStart
ThetaStartText | Number attribute (as text) | string ThetaStartText
ThetaSampling | Number attribute | uint ThetaSampling
ThetaSamplingText | Number attribute (as text) | string ThetaSamplingText
ThetaResolution | Number attribute | double ThetaResolution
ThetaResolutionText | Number attribute (as text) | string ThetaResolutionText
XIsMirrored | Boolean attribute | bool XIsMirrored
XStart | Number attribute | double XStart
XStartText | Number attribute (as text) | string XStartText
XEnd | Number attribute | double XEnd
XEndText | Number attribute (as text) | string XEndText
XNbSamples | Number attribute | uint XNbSamples
XNbSamplesText | Number attribute (as text) | string XNbSamplesText
XResolution | Number attribute | double XResolution
XResolutionText | Number attribute (as text) | string XResolutionText
YIsMirrored | Boolean attribute | bool YIsMirrored
YStart | Number attribute | double YStart
YStartText | Number attribute (as text) | string YStartText
YEnd | Number attribute | double YEnd
YEndText | Number attribute (as text) | string YEndText
YNbSamples | Number attribute | uint YNbSamples
YNbSamplesText | Number attribute (as text) | string YNbSamplesText
YResolution | Number attribute | double YResolution
YResolutionText | Number attribute (as text) | string YResolutionText
NearField | Boolean attribute | bool NearField
CellDistance | Number attribute | double CellDistance
CellDistanceText | Number attribute (as text) | string CellDistanceText
CellDiameter | Number attribute | double CellDiameter
CellDiameterText | Number attribute (as text) | string CellDiameterText
VisuRadius | Number attribute | double VisuRadius
VisuRadiusText | Number attribute (as text) | string VisuRadiusText
IntegrationAngle | Number attribute | double IntegrationAngle
IntegrationAngleText | Number attribute (as text) | string IntegrationAngleText
ResultViewingDirection | Enum attribute | SpeosSim.SensorIntensity.EnumResultViewingDirection ResultViewingDirection
ResultViewingDirectionIndex | Enum attribute (as index) | int ResultViewingDirectionIndex
ShowGrid | Boolean attribute | bool ShowGrid
OriginX | Number attribute | double OriginX
OriginXText | Number attribute (as text) | string OriginXText
OriginY | Number attribute | double OriginY
OriginYText | Number attribute (as text) | string OriginYText
StepX | Number attribute | double StepX
StepXText | Number attribute (as text) | string StepXText
StepY | Number attribute | double StepY
StepYText | Number attribute (as text) | string StepYText
WavelengthStart | Number attribute | double WavelengthStart
WavelengthStartText | Number attribute (as text) | string WavelengthStartText
WavelengthEnd | Number attribute | double WavelengthEnd
WavelengthEndText | Number attribute (as text) | string WavelengthEndText
WavelengthNbSamples | Number attribute | uint WavelengthNbSamples
WavelengthNbSamplesText | Number attribute (as text) | string WavelengthNbSamplesText
WavelengthResolution | Number attribute | double WavelengthResolution
WavelengthResolutionText | Number attribute (as text) | string WavelengthResolutionText
XMPTemplateFile | File attribute | string XMPTemplateFile
XMPTemplateFileFullPath | File attribute (absolute full path) | string XMPTemplateFileFullPath
DimensionFromFile | Boolean attribute | bool DimensionFromFile
DisplayPropertiesFromFile | Boolean attribute | bool DisplayPropertiesFromFile
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorIntensity.SensorIntensityOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorIntensity.SensorIntensityXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorIntensity.SensorIntensityYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorIntensity.SensorIntensityFaceFiltering

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SensorIrradiance

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorIrradiance> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorIrradiance Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorIrradiance Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorIrradiance Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorIrradiance Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorIrradiance CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
XIsMirrored | Boolean attribute | bool XIsMirrored
XStart | Number attribute | double XStart
XStartText | Number attribute (as text) | string XStartText
XEnd | Number attribute | double XEnd
XEndText | Number attribute (as text) | string XEndText
XNbSamples | Number attribute | uint XNbSamples
XNbSamplesText | Number attribute (as text) | string XNbSamplesText
XResolution | Number attribute | double XResolution
XResolutionText | Number attribute (as text) | string XResolutionText
YIsMirrored | Boolean attribute | bool YIsMirrored
YStart | Number attribute | double YStart
YStartText | Number attribute (as text) | string YStartText
YEnd | Number attribute | double YEnd
YEndText | Number attribute (as text) | string YEndText
YNbSamples | Number attribute | uint YNbSamples
YNbSamplesText | Number attribute (as text) | string YNbSamplesText
YResolution | Number attribute | double YResolution
YResolutionText | Number attribute (as text) | string YResolutionText
OriginPoint | Link attribute | SpeosSim.SensorIrradiance.SensorIrradianceOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SensorIrradiance.SensorIrradianceXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SensorIrradiance.SensorIrradianceYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
IlluminanceType | Enum attribute | SpeosSim.SensorIrradiance.EnumIlluminanceType IlluminanceType
IlluminanceTypeIndex | Enum attribute (as index) | int IlluminanceTypeIndex
IntegrationDirection | Link attribute | SpeosSim.SensorIrradiance.SensorIrradianceIntegrationDirection IntegrationDirection
IntegrationDirectionIsReversed | Boolean attribute | bool IntegrationDirectionIsReversed
XMPTemplateFile | File attribute | string XMPTemplateFile
XMPTemplateFileFullPath | File attribute (absolute full path) | string XMPTemplateFileFullPath
DimensionFromFile | Boolean attribute | bool DimensionFromFile
DisplayPropertiesFromFile | Boolean attribute | bool DisplayPropertiesFromFile
SensorType | Enum attribute | SpeosSim.SensorIrradiance.EnumSensorType SensorType
SensorTypeIndex | Enum attribute (as index) | int SensorTypeIndex
RayFileType | Enum attribute | SpeosSim.SensorIrradiance.EnumRayFileType RayFileType
RayFileTypeIndex | Enum attribute (as index) | int RayFileTypeIndex
LayerType | Enum attribute | SpeosSim.SensorIrradiance.EnumLayerType LayerType
LayerTypeIndex | Enum attribute (as index) | int LayerTypeIndex
FaceFiltering | Links attribute | SpeosSim.SensorIrradiance.SensorIrradianceFaceFiltering FaceFiltering
SCAFilteringMode | Enum attribute | SpeosSim.SensorIrradiance.EnumSCAFilteringMode SCAFilteringMode
SCAFilteringModeIndex | Enum attribute (as index) | int SCAFilteringModeIndex
MaximumNbOfSequence | Number attribute | uint MaximumNbOfSequence
MaximumNbOfSequenceText | Number attribute (as text) | string MaximumNbOfSequenceText
DefineSequencePer | Enum attribute | SpeosSim.SensorIrradiance.EnumDefineSequencePer DefineSequencePer
DefineSequencePerIndex | Enum attribute (as index) | int DefineSequencePerIndex
IncidentAnglesSampling | Number attribute | uint IncidentAnglesSampling
IncidentAnglesSamplingText | Number attribute (as text) | string IncidentAnglesSamplingText
WavelengthStart | Number attribute | double WavelengthStart
WavelengthStartText | Number attribute (as text) | string WavelengthStartText
WavelengthEnd | Number attribute | double WavelengthEnd
WavelengthEndText | Number attribute (as text) | string WavelengthEndText
WavelengthNbSamples | Number attribute | uint WavelengthNbSamples
WavelengthNbSamplesText | Number attribute (as text) | string WavelengthNbSamplesText
WavelengthResolution | Number attribute | double WavelengthResolution
WavelengthResolutionText | Number attribute (as text) | string WavelengthResolutionText
OutputFaces | Links attribute | SpeosSim.SensorIrradiance.SensorIrradianceOutputFaces OutputFaces
ShowGrid | Boolean attribute | bool ShowGrid
OriginX | Number attribute | double OriginX
OriginXText | Number attribute (as text) | string OriginXText
OriginY | Number attribute | double OriginY
OriginYText | Number attribute (as text) | string OriginYText
StepX | Number attribute | double StepX
StepXText | Number attribute (as text) | string StepXText
StepY | Number attribute | double StepY
StepYText | Number attribute (as text) | string StepYText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorIrradiance.SensorIrradianceOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorIrradiance.SensorIrradianceXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorIrradiance.SensorIrradianceYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorIrradiance.SensorIrradianceIntegrationDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorIrradiance.SensorIrradianceFaceFiltering

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SensorIrradiance.SensorIrradianceOutputFaces

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SensorLidar

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorLidar> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorLidar Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorLidar Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorLidar Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorLidar Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorLidar CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
LidarType | Enum attribute | SpeosSim.SensorLidar.EnumLidarType LidarType
LidarTypeIndex | Enum attribute (as index) | int LidarTypeIndex
SystemOriginPoint | Link attribute | SpeosSim.SensorLidar.SensorLidarSystemOriginPoint SystemOriginPoint
SystemXDirection | Link attribute | SpeosSim.SensorLidar.SensorLidarSystemXDirection SystemXDirection
SystemXDirectionReverse | Boolean attribute | bool SystemXDirectionReverse
SystemYDirection | Link attribute | SpeosSim.SensorLidar.SensorLidarSystemYDirection SystemYDirection
SystemYDirectionReverse | Boolean attribute | bool SystemYDirectionReverse
TrajectoryFile | File attribute | string TrajectoryFile
TrajectoryFileFullPath | File attribute (absolute full path) | string TrajectoryFileFullPath
ScanningSequenceFile | File attribute | string ScanningSequenceFile
ScanningSequenceFileFullPath | File attribute (absolute full path) | string ScanningSequenceFileFullPath
RotatingSequenceFile | File attribute | string RotatingSequenceFile
RotatingSequenceFileFullPath | File attribute (absolute full path) | string RotatingSequenceFileFullPath
SourceOriginPoint | Link attribute | SpeosSim.SensorLidar.SensorLidarSourceOriginPoint SourceOriginPoint
SourceXDirection | Link attribute | SpeosSim.SensorLidar.SensorLidarSourceXDirection SourceXDirection
SourceXDirectionReverse | Boolean attribute | bool SourceXDirectionReverse
SourceXPosition | Number attribute | double SourceXPosition
SourceXPositionText | Number attribute (as text) | string SourceXPositionText
SourceYDirection | Link attribute | SpeosSim.SensorLidar.SensorLidarSourceYDirection SourceYDirection
SourceYDirectionReverse | Boolean attribute | bool SourceYDirectionReverse
SourceYPosition | Number attribute | double SourceYPosition
SourceYPositionText | Number attribute (as text) | string SourceYPositionText
SpectrumType | Enum attribute | SpeosSim.SensorLidar.EnumSpectrumType SpectrumType
SpectrumTypeIndex | Enum attribute (as index) | int SpectrumTypeIndex
SpectrumValueWavelength | Number attribute | double SpectrumValueWavelength
SpectrumValueWavelengthText | Number attribute (as text) | string SpectrumValueWavelengthText
SpectrumValueLibrary | File attribute | string SpectrumValueLibrary
SpectrumValueLibraryFullPath | File attribute (absolute full path) | string SpectrumValueLibraryFullPath
IntensityType | Enum attribute | SpeosSim.SensorLidar.EnumIntensityType IntensityType
IntensityTypeIndex | Enum attribute (as index) | int IntensityTypeIndex
IntensityFile | File attribute | string IntensityFile
IntensityFileFullPath | File attribute (absolute full path) | string IntensityFileFullPath
TotalAngle | Number attribute | double TotalAngle
TotalAngleText | Number attribute (as text) | string TotalAngleText
FullWidthAtHalfMaximumXAngle | Number attribute | double FullWidthAtHalfMaximumXAngle
FullWidthAtHalfMaximumXAngleText | Number attribute (as text) | string FullWidthAtHalfMaximumXAngleText
FullWidthAtHalfMaximumYAngle | Number attribute | double FullWidthAtHalfMaximumYAngle
FullWidthAtHalfMaximumYAngleText | Number attribute (as text) | string FullWidthAtHalfMaximumYAngleText
PulseEnergy | Number attribute | double PulseEnergy
PulseEnergyText | Number attribute (as text) | string PulseEnergyText
IESThreshold | Number attribute | double IESThreshold
IESThresholdText | Number attribute (as text) | string IESThresholdText
SensorOriginPoint | Link attribute | SpeosSim.SensorLidar.SensorLidarSensorOriginPoint SensorOriginPoint
SensorXDirection | Link attribute | SpeosSim.SensorLidar.SensorLidarSensorXDirection SensorXDirection
SensorXDirectionReverse | Boolean attribute | bool SensorXDirectionReverse
SensorYDirection | Link attribute | SpeosSim.SensorLidar.SensorLidarSensorYDirection SensorYDirection
SensorYDirectionReverse | Boolean attribute | bool SensorYDirectionReverse
DistorsionFile | File attribute | string DistorsionFile
DistorsionFileFullPath | File attribute (absolute full path) | string DistorsionFileFullPath
Transmittance | Number attribute | double Transmittance
TransmittanceText | Number attribute (as text) | string TransmittanceText
TransmittanceSpectrumFile | File attribute | string TransmittanceSpectrumFile
TransmittanceSpectrumFileFullPath | File attribute (absolute full path) | string TransmittanceSpectrumFileFullPath
FocalLength | Number attribute | double FocalLength
FocalLengthText | Number attribute (as text) | string FocalLengthText
Pupil | Number attribute | double Pupil
PupilText | Number attribute (as text) | string PupilText
HorizontalFOV | Number attribute | double HorizontalFOV
HorizontalFOVText | Number attribute (as text) | string HorizontalFOVText
VerticalFOV | Number attribute | double VerticalFOV
VerticalFOVText | Number attribute (as text) | string VerticalFOVText
ImagerWidth | Number attribute | double ImagerWidth
ImagerWidthText | Number attribute (as text) | string ImagerWidthText
ImagerHeight | Number attribute | double ImagerHeight
ImagerHeightText | Number attribute (as text) | string ImagerHeightText
CustomResolution | Boolean attribute | bool CustomResolution
HorizontalPixels | Number attribute | uint HorizontalPixels
HorizontalPixelsText | Number attribute (as text) | string HorizontalPixelsText
VerticalPixels | Number attribute | uint VerticalPixels
VerticalPixelsText | Number attribute (as text) | string VerticalPixelsText
RangeStart | Number attribute | double RangeStart
RangeStartText | Number attribute (as text) | string RangeStartText
RangeEnd | Number attribute | double RangeEnd
RangeEndText | Number attribute (as text) | string RangeEndText
RangeSpatialAccuracy | Number attribute | double RangeSpatialAccuracy
RangeSpatialAccuracyText | Number attribute (as text) | string RangeSpatialAccuracyText
UserDefined | Boolean attribute | bool UserDefined
AimingAreaOriginPoint | Link attribute | SpeosSim.SensorLidar.SensorLidarAimingAreaOriginPoint AimingAreaOriginPoint
AimingAreaXDirection | Link attribute | SpeosSim.SensorLidar.SensorLidarAimingAreaXDirection AimingAreaXDirection
AimingAreaXDirectionReverse | Boolean attribute | bool AimingAreaXDirectionReverse
AimingAreaYDirection | Link attribute | SpeosSim.SensorLidar.SensorLidarAimingAreaYDirection AimingAreaYDirection
AimingAreaYDirectionReverse | Boolean attribute | bool AimingAreaYDirectionReverse
AimingAreaType | Enum attribute | SpeosSim.SensorLidar.EnumAimingAreaType AimingAreaType
AimingAreaTypeIndex | Enum attribute (as index) | int AimingAreaTypeIndex
AimingAreaWidth | Number attribute | double AimingAreaWidth
AimingAreaWidthText | Number attribute (as text) | string AimingAreaWidthText
AimingAreaHeight | Number attribute | double AimingAreaHeight
AimingAreaHeightText | Number attribute (as text) | string AimingAreaHeightText
DisplayImageField | Boolean attribute | bool DisplayImageField
DisplayObjectField | Boolean attribute | bool DisplayObjectField
DisplayPupil | Boolean attribute | bool DisplayPupil
ObjectFieldVisuRadius | Number attribute | double ObjectFieldVisuRadius
ObjectFieldVisuRadiusText | Number attribute (as text) | string ObjectFieldVisuRadiusText
ColorScaleType | Enum attribute | SpeosSim.SensorLidar.EnumColorScaleType ColorScaleType
ColorScaleTypeIndex | Enum attribute (as index) | int ColorScaleTypeIndex
ColorScaleFile | File attribute | string ColorScaleFile
ColorScaleFileFullPath | File attribute (absolute full path) | string ColorScaleFileFullPath
PointThickness | Number attribute | double PointThickness
PointThicknessText | Number attribute (as text) | string PointThicknessText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorLidar.SensorLidarSystemOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarSystemXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarSystemYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarSourceOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarSourceXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarSourceYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarSensorOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarSensorXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarSensorYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarAimingAreaOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarAimingAreaXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLidar.SensorLidarAimingAreaYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SensorLightExpertGroup

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorLightExpertGroup> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorLightExpertGroup Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorLightExpertGroup Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorLightExpertGroup Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorLightExpertGroup Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorLightExpertGroup CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Sensors | Links attribute | SpeosSim.SensorLightExpertGroup.SensorLightExpertGroupSensors Sensors
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorLightExpertGroup.SensorLightExpertGroupSensors

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SensorLightField

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorLightField> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorLightField Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorLightField Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorLightField Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorLightField Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorLightField CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosSim.SensorLightField.SensorLightFieldOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SensorLightField.SensorLightFieldXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SensorLightField.SensorLightFieldYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
SensorType | Enum attribute | SpeosSim.SensorLightField.EnumSensorType SensorType
SensorTypeIndex | Enum attribute (as index) | int SensorTypeIndex
OrientedFaces | Children attribute | SpeosSim.SensorLightField.SensorLightFieldOrientedFaces OrientedFaces
IncidentAngleStart | Number attribute | double IncidentAngleStart
IncidentAngleStartText | Number attribute (as text) | string IncidentAngleStartText
IncidentAngleEnd | Number attribute | double IncidentAngleEnd
IncidentAngleEndText | Number attribute (as text) | string IncidentAngleEndText
IncidentAngleNbSamples | Number attribute | uint IncidentAngleNbSamples
IncidentAngleNbSamplesText | Number attribute (as text) | string IncidentAngleNbSamplesText
IncidentAngleResolution | Number attribute | double IncidentAngleResolution
IncidentAngleResolutionText | Number attribute (as text) | string IncidentAngleResolutionText
AzimuthAngleStart | Number attribute | double AzimuthAngleStart
AzimuthAngleStartText | Number attribute (as text) | string AzimuthAngleStartText
AzimuthAngleEnd | Number attribute | double AzimuthAngleEnd
AzimuthAngleEndText | Number attribute (as text) | string AzimuthAngleEndText
AzimuthAngleNbSamples | Number attribute | uint AzimuthAngleNbSamples
AzimuthAngleNbSamplesText | Number attribute (as text) | string AzimuthAngleNbSamplesText
AzimuthAngleResolution | Number attribute | double AzimuthAngleResolution
AzimuthAngleResolutionText | Number attribute (as text) | string AzimuthAngleResolutionText
WavelengthStart | Number attribute | double WavelengthStart
WavelengthStartText | Number attribute (as text) | string WavelengthStartText
WavelengthEnd | Number attribute | double WavelengthEnd
WavelengthEndText | Number attribute (as text) | string WavelengthEndText
WavelengthNbSamples | Number attribute | uint WavelengthNbSamples
WavelengthNbSamplesText | Number attribute (as text) | string WavelengthNbSamplesText
WavelengthResolution | Number attribute | double WavelengthResolution
WavelengthResolutionText | Number attribute (as text) | string WavelengthResolutionText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorLightField.SensorLightFieldOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLightField.SensorLightFieldXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLightField.SensorLightFieldYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorLightField.SensorLightFieldOrientedFaces

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.OrientedFace> GetEnumerator()
Add | Children attribute: Add an object to the children list | void Add(SpeosSim.OrientedFace childObject)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.OrientedFace> List
Item | Children attribute: Get child by index | SpeosSim.OrientedFace Item

## SensorObserver

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorObserver> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorObserver Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorObserver Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorObserver Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorObserver Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorObserver CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
ObserverHStart | Number attribute | double ObserverHStart
ObserverHStartText | Number attribute (as text) | string ObserverHStartText
ObserverHEnd | Number attribute | double ObserverHEnd
ObserverHEndText | Number attribute (as text) | string ObserverHEndText
ObserverHSampling | Number attribute | uint ObserverHSampling
ObserverHSamplingText | Number attribute (as text) | string ObserverHSamplingText
ObserverHResolution | Number attribute | double ObserverHResolution
ObserverHResolutionText | Number attribute (as text) | string ObserverHResolutionText
ObserverHMirrorExtent | Boolean attribute | bool ObserverHMirrorExtent
ObserverVStart | Number attribute | double ObserverVStart
ObserverVStartText | Number attribute (as text) | string ObserverVStartText
ObserverVEnd | Number attribute | double ObserverVEnd
ObserverVEndText | Number attribute (as text) | string ObserverVEndText
ObserverVSampling | Number attribute | uint ObserverVSampling
ObserverVSamplingText | Number attribute (as text) | string ObserverVSamplingText
ObserverVResolution | Number attribute | double ObserverVResolution
ObserverVResolutionText | Number attribute (as text) | string ObserverVResolutionText
ObserverVMirrorExtent | Boolean attribute | bool ObserverVMirrorExtent
SizeHStart | Number attribute | double SizeHStart
SizeHStartText | Number attribute (as text) | string SizeHStartText
SizeHEnd | Number attribute | double SizeHEnd
SizeHEndText | Number attribute (as text) | string SizeHEndText
SizeHSampling | Number attribute | uint SizeHSampling
SizeHSamplingText | Number attribute (as text) | string SizeHSamplingText
SizeHResolution | Number attribute | double SizeHResolution
SizeHResolutionText | Number attribute (as text) | string SizeHResolutionText
SizeHMirrorExtent | Boolean attribute | bool SizeHMirrorExtent
SizeVStart | Number attribute | double SizeVStart
SizeVStartText | Number attribute (as text) | string SizeVStartText
SizeVEnd | Number attribute | double SizeVEnd
SizeVEndText | Number attribute (as text) | string SizeVEndText
SizeVSampling | Number attribute | uint SizeVSampling
SizeVSamplingText | Number attribute (as text) | string SizeVSamplingText
SizeVResolution | Number attribute | double SizeVResolution
SizeVResolutionText | Number attribute (as text) | string SizeVResolutionText
SizeVMirrorExtent | Boolean attribute | bool SizeVMirrorExtent
Distance | Number attribute | double Distance
DistanceText | Number attribute (as text) | string DistanceText
Focal | Number attribute | double Focal
FocalText | Number attribute (as text) | string FocalText
Stereo | Boolean attribute | bool Stereo
InterocularDistance | Number attribute | double InterocularDistance
InterocularDistanceText | Number attribute (as text) | string InterocularDistanceText
LayerType | Enum attribute | SpeosSim.SensorObserver.EnumLayerType LayerType
LayerTypeIndex | Enum attribute (as index) | int LayerTypeIndex
IntegrationAngle | Number attribute | double IntegrationAngle
IntegrationAngleText | Number attribute (as text) | string IntegrationAngleText
ShowVisionField | Boolean attribute | bool ShowVisionField
HSensorPreview | Number attribute | double HSensorPreview
HSensorPreviewText | Number attribute (as text) | string HSensorPreviewText
VSensorPreview | Number attribute | double VSensorPreview
VSensorPreviewText | Number attribute (as text) | string VSensorPreviewText
WavelengthStart | Number attribute | double WavelengthStart
WavelengthStartText | Number attribute (as text) | string WavelengthStartText
WavelengthEnd | Number attribute | double WavelengthEnd
WavelengthEndText | Number attribute (as text) | string WavelengthEndText
WavelengthNbSamples | Number attribute | uint WavelengthNbSamples
WavelengthNbSamplesText | Number attribute (as text) | string WavelengthNbSamplesText
WavelengthResolution | Number attribute | double WavelengthResolution
WavelengthResolutionText | Number attribute (as text) | string WavelengthResolutionText
OriginPoint | Link attribute | SpeosSim.SensorObserver.SensorObserverOriginPoint OriginPoint
HorizontalDirection | Link attribute | SpeosSim.SensorObserver.SensorObserverHorizontalDirection HorizontalDirection
HorizontalDirectionReverse | Boolean attribute | bool HorizontalDirectionReverse
VerticalDirection | Link attribute | SpeosSim.SensorObserver.SensorObserverVerticalDirection VerticalDirection
VerticalDirectionReverse | Boolean attribute | bool VerticalDirectionReverse
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorObserver.SensorObserverOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorObserver.SensorObserverHorizontalDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorObserver.SensorObserverVerticalDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SensorPhysicalCamera

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorPhysicalCamera> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorPhysicalCamera Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorPhysicalCamera Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorPhysicalCamera Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorPhysicalCamera Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorPhysicalCamera CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosSim.SensorPhysicalCamera.SensorPhysicalCameraOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SensorPhysicalCamera.SensorPhysicalCameraXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SensorPhysicalCamera.SensorPhysicalCameraYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
LightBoxFile | File attribute | string LightBoxFile
LightBoxFileFullPath | File attribute (absolute full path) | string LightBoxFileFullPath
NbOfSequences | Number attribute | int NbOfSequences
NbOfSequencesText | Number attribute (as text) | string NbOfSequencesText
SequenceFile | File attribute | string SequenceFile
SequenceFileFullPath | File attribute (absolute full path) | string SequenceFileFullPath
SensorIrradiance | Link attribute | SpeosSim.SensorPhysicalCamera.SensorPhysicalCameraSensorIrradiance SensorIrradiance
RayTracerPrecision | Enum attribute | SpeosSim.SensorPhysicalCamera.EnumRayTracerPrecision RayTracerPrecision
RayTracerPrecisionIndex | Enum attribute (as index) | int RayTracerPrecisionIndex
PreviewType | Enum attribute | SpeosSim.SensorPhysicalCamera.EnumPreviewType PreviewType
PreviewTypeIndex | Enum attribute (as index) | int PreviewTypeIndex
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorPhysicalCamera.SensorPhysicalCameraOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorPhysicalCamera.SensorPhysicalCameraXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorPhysicalCamera.SensorPhysicalCameraYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorPhysicalCamera.SensorPhysicalCameraSensorIrradiance

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SensorRadiance

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorRadiance> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorRadiance Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorRadiance Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorRadiance Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorRadiance Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorRadiance CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
DefinitionFrom | Enum attribute | SpeosSim.SensorRadiance.EnumDefinitionFrom DefinitionFrom
DefinitionFromIndex | Enum attribute (as index) | int DefinitionFromIndex
SensorType | Enum attribute | SpeosSim.SensorRadiance.EnumSensorType SensorType
SensorTypeIndex | Enum attribute (as index) | int SensorTypeIndex
LayerType | Enum attribute | SpeosSim.SensorRadiance.EnumLayerType LayerType
LayerTypeIndex | Enum attribute (as index) | int LayerTypeIndex
FaceFiltering | Links attribute | SpeosSim.SensorRadiance.SensorRadianceFaceFiltering FaceFiltering
SCAFilteringMode | Enum attribute | SpeosSim.SensorRadiance.EnumSCAFilteringMode SCAFilteringMode
SCAFilteringModeIndex | Enum attribute (as index) | int SCAFilteringModeIndex
MaximumNbOfSequence | Number attribute | uint MaximumNbOfSequence
MaximumNbOfSequenceText | Number attribute (as text) | string MaximumNbOfSequenceText
DefineSequencePer | Enum attribute | SpeosSim.SensorRadiance.EnumDefineSequencePer DefineSequencePer
DefineSequencePerIndex | Enum attribute (as index) | int DefineSequencePerIndex
IntegrationAngle | Number attribute | double IntegrationAngle
IntegrationAngleText | Number attribute (as text) | string IntegrationAngleText
XMPTemplateFile | File attribute | string XMPTemplateFile
XMPTemplateFileFullPath | File attribute (absolute full path) | string XMPTemplateFileFullPath
DimensionFromFile | Boolean attribute | bool DimensionFromFile
DisplayPropertiesFromFile | Boolean attribute | bool DisplayPropertiesFromFile
WavelengthStart | Number attribute | double WavelengthStart
WavelengthStartText | Number attribute (as text) | string WavelengthStartText
WavelengthEnd | Number attribute | double WavelengthEnd
WavelengthEndText | Number attribute (as text) | string WavelengthEndText
WavelengthNbSamples | Number attribute | uint WavelengthNbSamples
WavelengthNbSamplesText | Number attribute (as text) | string WavelengthNbSamplesText
WavelengthResolution | Number attribute | double WavelengthResolution
WavelengthResolutionText | Number attribute (as text) | string WavelengthResolutionText
ObserverType | Enum attribute | SpeosSim.SensorRadiance.EnumObserverType ObserverType
ObserverTypeIndex | Enum attribute (as index) | int ObserverTypeIndex
Focal | Number attribute | double Focal
FocalText | Number attribute (as text) | string FocalText
XIsMirrored | Boolean attribute | bool XIsMirrored
XStart | Number attribute | double XStart
XStartText | Number attribute (as text) | string XStartText
XEnd | Number attribute | double XEnd
XEndText | Number attribute (as text) | string XEndText
XNbSamples | Number attribute | uint XNbSamples
XNbSamplesText | Number attribute (as text) | string XNbSamplesText
XResolution | Number attribute | double XResolution
XResolutionText | Number attribute (as text) | string XResolutionText
YIsMirrored | Boolean attribute | bool YIsMirrored
YStart | Number attribute | double YStart
YStartText | Number attribute (as text) | string YStartText
YEnd | Number attribute | double YEnd
YEndText | Number attribute (as text) | string YEndText
YNbSamples | Number attribute | uint YNbSamples
YNbSamplesText | Number attribute (as text) | string YNbSamplesText
YResolution | Number attribute | double YResolution
YResolutionText | Number attribute (as text) | string YResolutionText
OriginPoint | Link attribute | SpeosSim.SensorRadiance.SensorRadianceOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SensorRadiance.SensorRadianceXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SensorRadiance.SensorRadianceYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
HPlane | Number attribute | double HPlane
HPlaneText | Number attribute (as text) | string HPlaneText
VPlane | Number attribute | double VPlane
VPlaneText | Number attribute (as text) | string VPlaneText
HNbSamples | Number attribute | uint HNbSamples
HNbSamplesText | Number attribute (as text) | string HNbSamplesText
HResolution | Number attribute | double HResolution
HResolutionText | Number attribute (as text) | string HResolutionText
VNbSamples | Number attribute | uint VNbSamples
VNbSamplesText | Number attribute (as text) | string VNbSamplesText
VResolution | Number attribute | double VResolution
VResolutionText | Number attribute (as text) | string VResolutionText
ObserverPoint | Link attribute | SpeosSim.SensorRadiance.SensorRadianceObserverPoint ObserverPoint
FocalPoint | Link attribute | SpeosSim.SensorRadiance.SensorRadianceFocalPoint FocalPoint
FrontDirection | Link attribute | SpeosSim.SensorRadiance.SensorRadianceFrontDirection FrontDirection
FrontDirectionReverse | Boolean attribute | bool FrontDirectionReverse
TopDirection | Link attribute | SpeosSim.SensorRadiance.SensorRadianceTopDirection TopDirection
TopDirectionReverse | Boolean attribute | bool TopDirectionReverse
ShowGrid | Boolean attribute | bool ShowGrid
OriginX | Number attribute | double OriginX
OriginXText | Number attribute (as text) | string OriginXText
OriginY | Number attribute | double OriginY
OriginYText | Number attribute (as text) | string OriginYText
StepX | Number attribute | double StepX
StepXText | Number attribute (as text) | string StepXText
StepY | Number attribute | double StepY
StepYText | Number attribute (as text) | string StepYText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorRadiance.SensorRadianceFaceFiltering

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SensorRadiance.SensorRadianceOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorRadiance.SensorRadianceXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorRadiance.SensorRadianceYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorRadiance.SensorRadianceObserverPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorRadiance.SensorRadianceFocalPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorRadiance.SensorRadianceFrontDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorRadiance.SensorRadianceTopDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SensorRotatingLidar

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SensorRotatingLidar> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SensorRotatingLidar Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SensorRotatingLidar Create(object parent)
Create | Create a new object in the active context | SpeosSim.SensorRotatingLidar Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SensorRotatingLidar Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SensorRotatingLidar CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosSim.SensorRotatingLidar.SensorRotatingLidarOriginPoint OriginPoint
HorizontalDirection | Link attribute | SpeosSim.SensorRotatingLidar.SensorRotatingLidarHorizontalDirection HorizontalDirection
HorizontalDirectionReverse | Boolean attribute | bool HorizontalDirectionReverse
VerticalDirection | Link attribute | SpeosSim.SensorRotatingLidar.SensorRotatingLidarVerticalDirection VerticalDirection
VerticalDirectionReverse | Boolean attribute | bool VerticalDirectionReverse
ColorScaleType | Enum attribute | SpeosSim.SensorRotatingLidar.EnumColorScaleType ColorScaleType
ColorScaleTypeIndex | Enum attribute (as index) | int ColorScaleTypeIndex
ColorScaleFile | File attribute | string ColorScaleFile
ColorScaleFileFullPath | File attribute (absolute full path) | string ColorScaleFileFullPath
HMin | Number attribute | double HMin
HMinText | Number attribute (as text) | string HMinText
HMax | Number attribute | double HMax
HMaxText | Number attribute (as text) | string HMaxText
HResolution | Number attribute | double HResolution
HResolutionText | Number attribute (as text) | string HResolutionText
VerticalChannelFile | File attribute | string VerticalChannelFile
VerticalChannelFileFullPath | File attribute (absolute full path) | string VerticalChannelFileFullPath
RangeMin | Number attribute | double RangeMin
RangeMinText | Number attribute (as text) | string RangeMinText
RangeMax | Number attribute | double RangeMax
RangeMaxText | Number attribute (as text) | string RangeMaxText
PointCloud | Boolean attribute | bool PointCloud
PointThickness | Number attribute | double PointThickness
PointThicknessText | Number attribute (as text) | string PointThicknessText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SensorRotatingLidar.SensorRotatingLidarOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorRotatingLidar.SensorRotatingLidarHorizontalDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SensorRotatingLidar.SensorRotatingLidarVerticalDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SimulationDirect

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SimulationDirect> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SimulationDirect Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SimulationDirect Create(object parent)
Create | Create a new object in the active context | SpeosSim.SimulationDirect Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SimulationDirect Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SimulationDirect CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
Export | Run the Export command. Output directory content will be erased during process | void Export(string outputDirectoryPath)
LinkedExport | Run the LinkedExport command | void LinkedExport()
Isolate | Run the Isolate command | void Isolate()
GetResultFilePaths | Get the list of paths of all computation resulting files | System.String[] GetResultFilePaths()
GetSimulationSettings | Get the simulation common settings | SpeosSim.SimulationSettings GetSimulationSettings()
SetSimulationSettings | Set the simulation common settings | void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)
GetDirectSimulationSettings | Get the direct simulation specific settings | SpeosSim.Specific.DirectSimulationSettings GetDirectSimulationSettings()
SetDirectSimulationSettings | Set the direct simulation specific settings | void SetDirectSimulationSettings(SpeosSim.Specific.DirectSimulationSettings directSimulationSettings)
SetDirectSimulationSettings | Set the direct simulation specific settings | void SetDirectSimulationSettings(bool fastTransmissionGathering, bool dispersion, int automaticSaveFrequencySeconds)
GpuCompute | Run the GPU Compute command | void GpuCompute()
GetEstimatedRam | Get an estimate of the RAM (memory in bytes) that will be required for the simulation results. Returns 'None/Null' if the estimate is not available. | UInt64? GetEstimatedRam()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Geometries | Children attribute | SpeosSim.SimulationDirect.SimulationDirectGeometries Geometries
RayFileType | Enum attribute | SpeosSim.SimulationDirect.EnumRayFileType RayFileType
RayFileTypeIndex | Enum attribute (as index) | int RayFileTypeIndex
Sources | Links attribute | SpeosSim.SimulationDirect.SimulationDirectSources Sources
Sensors | Children attribute | SpeosSim.SimulationDirect.SimulationDirectSensors Sensors
UsesLXP | Boolean attribute | bool UsesLXP
LXPMaxPath | Number attribute | int LXPMaxPath
LXPMaxPathText | Number attribute (as text) | string LXPMaxPathText
HasRayNbLimit | Boolean attribute | bool HasRayNbLimit
NbRays | Number attribute | System.Int64 NbRays
NbRaysText | Number attribute (as text) | string NbRaysText
HasDurationLimit | Boolean attribute | bool HasDurationLimit
DurationLimit | Time duration attribute : can either be defined by a Double or a TimeSpan value | Fou.Utils.ValueObjects.TimeDuration DurationLimit
DurationLimitText | Number attribute (as text) | string DurationLimitText
AmbientMaterial | File attribute | string AmbientMaterial
AmbientMaterialFullPath | File attribute (absolute full path) | string AmbientMaterialFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SimulationDirect.SimulationDirectGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.FTGEnabledGeometry> GetEnumerator()
Add | Children attribute: Add an object to the children list | void Add(SpeosSim.FTGEnabledGeometry childObject)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.FTGEnabledGeometry> List
Item | Children attribute: Get child by index | SpeosSim.FTGEnabledGeometry Item

### SimulationDirect.SimulationDirectSources

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SimulationDirect.SimulationDirectSensors

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.LXPEnabledSensor> GetEnumerator()
Add | Children attribute: Add an object to the children list | void Add(SpeosSim.LXPEnabledSensor childObject)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.LXPEnabledSensor> List
Item | Children attribute: Get child by index | SpeosSim.LXPEnabledSensor Item

## SimulationHoa

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SimulationHoa> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SimulationHoa Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SimulationHoa Create(object parent)
Create | Create a new object in the active context | SpeosSim.SimulationHoa Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SimulationHoa Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SimulationHoa CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
Export | Run the Export command. Output directory content will be erase during process | void Export(string outputDirectoryPath)
GetResultFilePaths | Get the list of paths of all computation resulting files | System.String[] GetResultFilePaths()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Eyebox | Child CustomObject attribute | SpeosSim.HoaEyeBox Eyebox
TargetImage | Child CustomObject attribute | SpeosSim.HoaTargetImage TargetImage
Windshield | Child CustomObject attribute | SpeosSim.HoaWindshield Windshield
Mirrors | Child CustomObject attribute | SpeosSim.HoaMirrors Mirrors
PGU | Child CustomObject attribute | SpeosSim.HoaPGU PGU
Report | Child CustomObject attribute | SpeosSim.HoaReport Report
Warping | Child CustomObject attribute | SpeosSim.HoaWarping Warping
VehicleAxis | Link attribute | SpeosSim.SimulationHoa.SimulationHoaVehicleAxis VehicleAxis
ReverseVehiculeAxisDirection | Boolean attribute | bool ReverseVehiculeAxisDirection
TopAxis | Link attribute | SpeosSim.SimulationHoa.SimulationHoaTopAxis TopAxis
ReverseTopAxisDirection | Boolean attribute | bool ReverseTopAxisDirection
VisualisationPerEyeboxSample | Boolean attribute | bool VisualisationPerEyeboxSample
VisualisationPerOpticalVolume | Boolean attribute | bool VisualisationPerOpticalVolume
ZoomFactor | Number attribute | int ZoomFactor
ZoomFactorText | Number attribute (as text) | string ZoomFactorText
EyeboxSample | Boolean attribute | bool EyeboxSample
VisionMode | Enum attribute | SpeosSim.SimulationHoa.EnumVisionMode VisionMode
VisionModeIndex | Enum attribute (as index) | int VisionModeIndex
HorizontalSample | Number attribute | int HorizontalSample
HorizontalSampleText | Number attribute (as text) | string HorizontalSampleText
VerticalSample | Number attribute | int VerticalSample
VerticalSampleText | Number attribute (as text) | string VerticalSampleText
AdaptiveSample | Number attribute | int AdaptiveSample
AdaptiveSampleText | Number attribute (as text) | string AdaptiveSampleText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SimulationHoa.SimulationHoaVehicleAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SimulationHoa.SimulationHoaTopAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SimulationInteractive

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SimulationInteractive> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SimulationInteractive Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SimulationInteractive Create(object parent)
Create | Create a new object in the active context | SpeosSim.SimulationInteractive Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SimulationInteractive Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SimulationInteractive CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
ExportRaysAsGeometry | Export the simulation rays as geometry | void ExportRaysAsGeometry()
GetResultFilePaths | Get the list of paths of all computation resulting files | System.String[] GetResultFilePaths()
GetSimulationSettings | Get the simulation common settings | SpeosSim.SimulationSettings GetSimulationSettings()
SetSimulationSettings | Set the simulation common settings | void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)
SetInteractiveSimulationSettings | Set the interactive simulation specific settings | void SetInteractiveSimulationSettings(bool DrawRays, bool DrawImpacts, bool ReportImpact)
GetInteractiveSimulationSettings | Get the interactive simulation specific settings | void GetInteractiveSimulationSettings(ref System.Boolean& DrawRays, ref System.Boolean& DrawImpacts, ref System.Boolean& ReportImpact)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
RaysThickness | Number attribute | int RaysThickness
RaysThicknessText | Number attribute (as text) | string RaysThicknessText
FlagLXPActivation | Boolean attribute | bool FlagLXPActivation
AmbientMaterial | File attribute | string AmbientMaterial
AmbientMaterialFullPath | File attribute (absolute full path) | string AmbientMaterialFullPath
Geometries | Links attribute | SpeosSim.SimulationInteractive.SimulationInteractiveGeometries Geometries
Sources | Links attribute | SpeosSim.SimulationInteractive.SimulationInteractiveSources Sources
Sensors | Links attribute | SpeosSim.SimulationInteractive.SimulationInteractiveSensors Sensors
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SimulationInteractive.SimulationInteractiveGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SimulationInteractive.SimulationInteractiveSources

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SimulationInteractive.SimulationInteractiveSensors

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SimulationInverse

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SimulationInverse> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SimulationInverse Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SimulationInverse Create(object parent)
Create | Create a new object in the active context | SpeosSim.SimulationInverse Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SimulationInverse Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SimulationInverse CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
Export | Run the Export command. Output directory content will be erase during process | void Export(string outputDirectoryPath)
LinkedExport | Run the LinkedExport command | void LinkedExport()
Isolate | Run the Isolate command | void Isolate()
GetResultFilePaths | Get the list of paths of all computation resulting files | System.String[] GetResultFilePaths()
GetSimulationSettings | Get the simulation common settings | SpeosSim.SimulationSettings GetSimulationSettings()
SetSimulationSettings | Set the simulation common settings | void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)
GetInverseSimulationSettings | Get the inverse simulation specific settings | SpeosSim.InverseSimulationSettings GetInverseSimulationSettings()
SetInverseSimulationSettings | Set the inverse simulation specific settings | void SetInverseSimulationSettings(SpeosSim.InverseSimulationSettings inverseSimulationSettings)
GpuCompute | Run the GPU Compute command | void GpuCompute()
GetEstimatedRam | Get an estimate of the RAM (memory in bytes) that will be required for the simulation results. Returns 'None/Null' if the estimate is not available. | UInt64? GetEstimatedRam()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
UseLXP | Boolean attribute | bool UseLXP
LXPMaxPaths | Number attribute | int LXPMaxPaths
LXPMaxPathsText | Number attribute (as text) | string LXPMaxPathsText
AmbientMaterial | File attribute | string AmbientMaterial
AmbientMaterialFullPath | File attribute (absolute full path) | string AmbientMaterialFullPath
HasTimeline | Boolean attribute | bool HasTimeline
TimelineStart | Time duration attribute : can either be defined by a Double or a TimeSpan value | Fou.Utils.ValueObjects.TimeDuration TimelineStart
TimelineStartText | Number attribute (as text) | string TimelineStartText
Geometries | Children attribute | SpeosSim.SimulationInverse.SimulationInverseGeometries Geometries
Sources | Links attribute | SpeosSim.SimulationInverse.SimulationInverseSources Sources
Sensors | Children attribute | SpeosSim.SimulationInverse.SimulationInverseSensors Sensors
OutputFaces | Links attribute | SpeosSim.SimulationInverse.SimulationInverseOutputFaces OutputFaces
OutputSources | Links attribute | SpeosSim.SimulationInverse.SimulationInverseOutputSources OutputSources
NbPassesStop | Boolean attribute | bool NbPassesStop
NbPassesLimit | Number attribute | uint NbPassesLimit
NbPassesLimitText | Number attribute (as text) | string NbPassesLimitText
DurationStop | Boolean attribute | bool DurationStop
DurationLimit | Time duration attribute : can either be defined by a Double or a TimeSpan value | Fou.Utils.ValueObjects.TimeDuration DurationLimit
DurationLimitText | Number attribute (as text) | string DurationLimitText
RelativeStop | Number attribute | System.Int64 RelativeStop
RelativeStopText | Number attribute (as text) | string RelativeStopText
AbsoluteStop | Number attribute | System.Int64 AbsoluteStop
AbsoluteStopText | Number attribute (as text) | string AbsoluteStopText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SimulationInverse.SimulationInverseGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.FTGEnabledGeometry> GetEnumerator()
Add | Children attribute: Add an object to the children list | void Add(SpeosSim.FTGEnabledGeometry childObject)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.FTGEnabledGeometry> List
Item | Children attribute: Get child by index | SpeosSim.FTGEnabledGeometry Item

### SimulationInverse.SimulationInverseSources

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SimulationInverse.SimulationInverseSensors

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.LXPEnabledSensor> GetEnumerator()
Add | Children attribute: Add an object to the children list | void Add(SpeosSim.LXPEnabledSensor childObject)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.LXPEnabledSensor> List
Item | Children attribute: Get child by index | SpeosSim.LXPEnabledSensor Item

### SimulationInverse.SimulationInverseOutputFaces

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SimulationInverse.SimulationInverseOutputSources

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SimulationIsolated

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SimulationIsolated> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SimulationIsolated Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SimulationIsolated Create(object parent)
Create | Create a new object in the active context | SpeosSim.SimulationIsolated Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SimulationIsolated Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SimulationIsolated CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## SimulationLidar

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SimulationLidar> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SimulationLidar Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SimulationLidar Create(object parent)
Create | Create a new object in the active context | SpeosSim.SimulationLidar Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SimulationLidar Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SimulationLidar CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
Export | Run the Export command. Output directory content will be erase during process | void Export(string outputDirectoryPath)
LinkedExport | Run the LinkedExport command | void LinkedExport()
Isolate | Run the Isolate command | void Isolate()
GetResultFilePaths | Get the list of paths of all computation resulting files | System.String[] GetResultFilePaths()
GetSimulationSettings | Get the simulation common settings | SpeosSim.SimulationSettings GetSimulationSettings()
SetSimulationSettings | Set the simulation common settings | void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Geometries | Links attribute | SpeosSim.SimulationLidar.SimulationLidarGeometries Geometries
Sensors | Links attribute | SpeosSim.SimulationLidar.SimulationLidarSensors Sensors
HasRayNumberLimit | Boolean attribute | bool HasRayNumberLimit
NumberOfRays | Number attribute | System.Int64 NumberOfRays
NumberOfRaysText | Number attribute (as text) | string NumberOfRaysText
HasDurationLimit | Boolean attribute | bool HasDurationLimit
DurationLimit | Time duration attribute : can either be defined by a Double or a TimeSpan value | Fou.Utils.ValueObjects.TimeDuration DurationLimit
DurationLimitText | Number attribute (as text) | string DurationLimitText
SourceSampling | Number attribute | uint SourceSampling
SourceSamplingText | Number attribute (as text) | string SourceSamplingText
SensorSampling | Number attribute | uint SensorSampling
SensorSamplingText | Number attribute (as text) | string SensorSamplingText
AmbientMaterial | File attribute | string AmbientMaterial
AmbientMaterialFullPath | File attribute (absolute full path) | string AmbientMaterialFullPath
HasTimeline | Boolean attribute | bool HasTimeline
FieldsOfView | Boolean attribute | bool FieldsOfView
GeometricVisualization | Enum attribute | SpeosSim.SimulationLidar.EnumGeometricVisualization GeometricVisualization
GeometricVisualizationIndex | Enum attribute (as index) | int GeometricVisualizationIndex
MapOfDepth | Boolean attribute | bool MapOfDepth
RawTimeOfFlight | Boolean attribute | bool RawTimeOfFlight
TimelineStart | Time duration attribute : can either be defined by a Double or a TimeSpan value | Fou.Utils.ValueObjects.TimeDuration TimelineStart
TimelineStartText | Number attribute (as text) | string TimelineStartText
TimelineEnd | Time duration attribute : can either be defined by a Double or a TimeSpan value | Fou.Utils.ValueObjects.TimeDuration TimelineEnd
TimelineEndText | Number attribute (as text) | string TimelineEndText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SimulationLidar.SimulationLidarGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SimulationLidar.SimulationLidarSensors

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SimulationLinkedExport

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SimulationLinkedExport> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SimulationLinkedExport Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SimulationLinkedExport Create(object parent)
Create | Create a new object in the active context | SpeosSim.SimulationLinkedExport Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SimulationLinkedExport Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SimulationLinkedExport CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
SpeosSimulationFile | File attribute | string SpeosSimulationFile
SpeosSimulationFileFullPath | File attribute (absolute full path) | string SpeosSimulationFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## SimulationRotatingLidar

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SimulationRotatingLidar> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SimulationRotatingLidar Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SimulationRotatingLidar Create(object parent)
Create | Create a new object in the active context | SpeosSim.SimulationRotatingLidar Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SimulationRotatingLidar Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SimulationRotatingLidar CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
GetResultFilePaths | Get the list of paths of all computation resulting files | System.String[] GetResultFilePaths()
GetSimulationSettings | Get the simulation common settings | SpeosSim.SimulationSettings GetSimulationSettings()
SetSimulationSettings | Set the simulation common settings | void SetSimulationSettings(SpeosSim.SimulationSettings simulationSettings)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Geometries | Links attribute | SpeosSim.SimulationRotatingLidar.SimulationRotatingLidarGeometries Geometries
Sensors | Links attribute | SpeosSim.SimulationRotatingLidar.SimulationRotatingLidarSensors Sensors
Visualization | Enum attribute | SpeosSim.SimulationRotatingLidar.EnumVisualization Visualization
VisualizationIndex | Enum attribute (as index) | int VisualizationIndex
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SimulationRotatingLidar.SimulationRotatingLidarGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SimulationRotatingLidar.SimulationRotatingLidarSensors

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SourceAmbientCIEGeneral

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceAmbientCIEGeneral> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceAmbientCIEGeneral Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceAmbientCIEGeneral Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceAmbientCIEGeneral Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceAmbientCIEGeneral Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceAmbientCIEGeneral CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
GetLocationPossibleValues | String list attribute: List possible values | IEnumerable<string> GetLocationPossibleValues()
GetTimeZonePossibleValues | String list attribute: List possible values | IEnumerable<string> GetTimeZonePossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
PreviewSize | Number attribute | double PreviewSize
PreviewSizeText | Number attribute (as text) | string PreviewSizeText
ZenithDirection | Link attribute | SpeosSim.SourceAmbientCIEGeneral.SourceAmbientCIEGeneralZenithDirection ZenithDirection
ZenithDirectionReverse | Boolean attribute | bool ZenithDirectionReverse
CIEType | Enum attribute | SpeosSim.SourceAmbientCIEGeneral.EnumCIEType CIEType
CIETypeIndex | Enum attribute (as index) | int CIETypeIndex
Luminance | Number attribute | double Luminance
LuminanceText | Number attribute (as text) | string LuminanceText
SunType | Enum attribute | SpeosSim.SourceAmbientCIEGeneral.EnumSunType SunType
SunTypeIndex | Enum attribute (as index) | int SunTypeIndex
NorthDirection | Link attribute | SpeosSim.SourceAmbientCIEGeneral.SourceAmbientCIEGeneralNorthDirection NorthDirection
NorthDirectionReverse | Boolean attribute | bool NorthDirectionReverse
SunDirection | Link attribute | SpeosSim.SourceAmbientCIEGeneral.SourceAmbientCIEGeneralSunDirection SunDirection
SunDirectionReverse | Boolean attribute | bool SunDirectionReverse
SunThetaPosition | Number attribute | double SunThetaPosition
SunThetaPositionText | Number attribute (as text) | string SunThetaPositionText
SunPhiPosition | Number attribute | double SunPhiPosition
SunPhiPositionText | Number attribute (as text) | string SunPhiPositionText
Location | String list selection attribute | string Location
TimeZone | String list selection attribute | string TimeZone
Longitude | Number attribute | double Longitude
LongitudeText | Number attribute (as text) | string LongitudeText
Latitude | Number attribute | double Latitude
LatitudeText | Number attribute (as text) | string LatitudeText
DateTime | Number attribute | System.DateTime DateTime
DateTimeText | Number attribute (as text) | string DateTimeText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceAmbientCIEGeneral.SourceAmbientCIEGeneralZenithDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceAmbientCIEGeneral.SourceAmbientCIEGeneralNorthDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceAmbientCIEGeneral.SourceAmbientCIEGeneralSunDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceAmbientCIEOvercast

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceAmbientCIEOvercast> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceAmbientCIEOvercast Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceAmbientCIEOvercast Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceAmbientCIEOvercast Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceAmbientCIEOvercast Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceAmbientCIEOvercast CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
PreviewSize | Number attribute | double PreviewSize
PreviewSizeText | Number attribute (as text) | string PreviewSizeText
ZenithDirection | Link attribute | SpeosSim.SourceAmbientCIEOvercast.SourceAmbientCIEOvercastZenithDirection ZenithDirection
ZenithDirectionReverse | Boolean attribute | bool ZenithDirectionReverse
Luminance | Number attribute | double Luminance
LuminanceText | Number attribute (as text) | string LuminanceText
SpectrumType | Enum attribute | SpeosSim.SourceAmbientCIEOvercast.EnumSpectrumType SpectrumType
SpectrumTypeIndex | Enum attribute (as index) | int SpectrumTypeIndex
SpectrumValueTemperature | Number attribute | double SpectrumValueTemperature
SpectrumValueTemperatureText | Number attribute (as text) | string SpectrumValueTemperatureText
SpectrumValueLibrary | File attribute | string SpectrumValueLibrary
SpectrumValueLibraryFullPath | File attribute (absolute full path) | string SpectrumValueLibraryFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceAmbientCIEOvercast.SourceAmbientCIEOvercastZenithDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceAmbientEnvironment

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceAmbientEnvironment> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceAmbientEnvironment Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceAmbientEnvironment Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceAmbientEnvironment Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceAmbientEnvironment Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceAmbientEnvironment CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
PreviewSize | Number attribute | double PreviewSize
PreviewSizeText | Number attribute (as text) | string PreviewSizeText
ZenithDirection | Link attribute | SpeosSim.SourceAmbientEnvironment.SourceAmbientEnvironmentZenithDirection ZenithDirection
ZenithDirectionReverse | Boolean attribute | bool ZenithDirectionReverse
NorthDirection | Link attribute | SpeosSim.SourceAmbientEnvironment.SourceAmbientEnvironmentNorthDirection NorthDirection
NorthDirectionReverse | Boolean attribute | bool NorthDirectionReverse
Luminance | Number attribute | double Luminance
LuminanceText | Number attribute (as text) | string LuminanceText
ImageFile | File attribute | string ImageFile
ImageFileFullPath | File attribute (absolute full path) | string ImageFileFullPath
ColorSpace | Enum attribute | SpeosSim.SourceAmbientEnvironment.EnumColorSpace ColorSpace
ColorSpaceIndex | Enum attribute (as index) | int ColorSpaceIndex
WhitePointType | Enum attribute | SpeosSim.SourceAmbientEnvironment.EnumWhitePointType WhitePointType
WhitePointTypeIndex | Enum attribute (as index) | int WhitePointTypeIndex
xColor | Number attribute | double xColor
xColorText | Number attribute (as text) | string xColorText
yColor | Number attribute | double yColor
yColorText | Number attribute (as text) | string yColorText
RedSpectrumValueLibrary | File attribute | string RedSpectrumValueLibrary
RedSpectrumValueLibraryFullPath | File attribute (absolute full path) | string RedSpectrumValueLibraryFullPath
GreenSpectrumValueLibrary | File attribute | string GreenSpectrumValueLibrary
GreenSpectrumValueLibraryFullPath | File attribute (absolute full path) | string GreenSpectrumValueLibraryFullPath
BlueSpectrumValueLibrary | File attribute | string BlueSpectrumValueLibrary
BlueSpectrumValueLibraryFullPath | File attribute (absolute full path) | string BlueSpectrumValueLibraryFullPath
GroundPlaneOriginPoint | Link attribute | SpeosSim.SourceAmbientEnvironment.SourceAmbientEnvironmentGroundPlaneOriginPoint GroundPlaneOriginPoint
GroundPlaneHeight | Number attribute | double GroundPlaneHeight
GroundPlaneHeightText | Number attribute (as text) | string GroundPlaneHeightText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceAmbientEnvironment.SourceAmbientEnvironmentZenithDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceAmbientEnvironment.SourceAmbientEnvironmentNorthDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceAmbientEnvironment.SourceAmbientEnvironmentGroundPlaneOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceAmbientNaturalLight

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceAmbientNaturalLight> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceAmbientNaturalLight Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceAmbientNaturalLight Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceAmbientNaturalLight Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceAmbientNaturalLight Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceAmbientNaturalLight CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
GetLocationPossibleValues | String list attribute: List possible values | IEnumerable<string> GetLocationPossibleValues()
GetTimeZonePossibleValues | String list attribute: List possible values | IEnumerable<string> GetTimeZonePossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
PreviewSize | Number attribute | double PreviewSize
PreviewSizeText | Number attribute (as text) | string PreviewSizeText
ZenithDirection | Link attribute | SpeosSim.SourceAmbientNaturalLight.SourceAmbientNaturalLightZenithDirection ZenithDirection
ZenithDirectionReverse | Boolean attribute | bool ZenithDirectionReverse
Turbidity | Number attribute | double Turbidity
TurbidityText | Number attribute (as text) | string TurbidityText
SunType | Enum attribute | SpeosSim.SourceAmbientNaturalLight.EnumSunType SunType
SunTypeIndex | Enum attribute (as index) | int SunTypeIndex
NorthDirection | Link attribute | SpeosSim.SourceAmbientNaturalLight.SourceAmbientNaturalLightNorthDirection NorthDirection
NorthDirectionReverse | Boolean attribute | bool NorthDirectionReverse
SunDirection | Link attribute | SpeosSim.SourceAmbientNaturalLight.SourceAmbientNaturalLightSunDirection SunDirection
SunDirectionReverse | Boolean attribute | bool SunDirectionReverse
SimulationWithSky | Boolean attribute | bool SimulationWithSky
SunThetaPosition | Number attribute | double SunThetaPosition
SunThetaPositionText | Number attribute (as text) | string SunThetaPositionText
SunPhiPosition | Number attribute | double SunPhiPosition
SunPhiPositionText | Number attribute (as text) | string SunPhiPositionText
Location | String list selection attribute | string Location
TimeZone | String list selection attribute | string TimeZone
Longitude | Number attribute | double Longitude
LongitudeText | Number attribute (as text) | string LongitudeText
Latitude | Number attribute | double Latitude
LatitudeText | Number attribute (as text) | string LatitudeText
DateTime | Number attribute | System.DateTime DateTime
DateTimeText | Number attribute (as text) | string DateTimeText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceAmbientNaturalLight.SourceAmbientNaturalLightZenithDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceAmbientNaturalLight.SourceAmbientNaturalLightNorthDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceAmbientNaturalLight.SourceAmbientNaturalLightSunDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceAmbientUniform

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceAmbientUniform> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceAmbientUniform Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceAmbientUniform Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceAmbientUniform Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceAmbientUniform Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceAmbientUniform CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
PreviewSize | Number attribute | double PreviewSize
PreviewSizeText | Number attribute (as text) | string PreviewSizeText
ZenithDirection | Link attribute | SpeosSim.SourceAmbientUniform.SourceAmbientUniformZenithDirection ZenithDirection
ZenithDirectionReverse | Boolean attribute | bool ZenithDirectionReverse
Luminance | Number attribute | double Luminance
LuminanceText | Number attribute (as text) | string LuminanceText
MirroredExtent | Boolean attribute | bool MirroredExtent
IsSun | Boolean attribute | bool IsSun
SunDirection | Link attribute | SpeosSim.SourceAmbientUniform.SourceAmbientUniformSunDirection SunDirection
SunDirectionReverse | Boolean attribute | bool SunDirectionReverse
SunThetaPosition | Number attribute | double SunThetaPosition
SunThetaPositionText | Number attribute (as text) | string SunThetaPositionText
SunPhiPosition | Number attribute | double SunPhiPosition
SunPhiPositionText | Number attribute (as text) | string SunPhiPositionText
SpectrumType | Enum attribute | SpeosSim.SourceAmbientUniform.EnumSpectrumType SpectrumType
SpectrumTypeIndex | Enum attribute (as index) | int SpectrumTypeIndex
SpectrumValueTemperature | Number attribute | double SpectrumValueTemperature
SpectrumValueTemperatureText | Number attribute (as text) | string SpectrumValueTemperatureText
SpectrumValueLibrary | File attribute | string SpectrumValueLibrary
SpectrumValueLibraryFullPath | File attribute (absolute full path) | string SpectrumValueLibraryFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceAmbientUniform.SourceAmbientUniformZenithDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceAmbientUniform.SourceAmbientUniformSunDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceAmbientUS1976

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceAmbientUS1976> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceAmbientUS1976 Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceAmbientUS1976 Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceAmbientUS1976 Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceAmbientUS1976 Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceAmbientUS1976 CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
GetLocationPossibleValues | String list attribute: List possible values | IEnumerable<string> GetLocationPossibleValues()
GetTimeZonePossibleValues | String list attribute: List possible values | IEnumerable<string> GetTimeZonePossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
PreviewSize | Number attribute | double PreviewSize
PreviewSizeText | Number attribute (as text) | string PreviewSizeText
ZenithDirection | Link attribute | SpeosSim.SourceAmbientUS1976.SourceAmbientUS1976ZenithDirection ZenithDirection
ZenithDirectionReverse | Boolean attribute | bool ZenithDirectionReverse
SunType | Enum attribute | SpeosSim.SourceAmbientUS1976.EnumSunType SunType
SunTypeIndex | Enum attribute (as index) | int SunTypeIndex
NorthDirection | Link attribute | SpeosSim.SourceAmbientUS1976.SourceAmbientUS1976NorthDirection NorthDirection
NorthDirectionReverse | Boolean attribute | bool NorthDirectionReverse
SunDirection | Link attribute | SpeosSim.SourceAmbientUS1976.SourceAmbientUS1976SunDirection SunDirection
SunDirectionReverse | Boolean attribute | bool SunDirectionReverse
SunThetaPosition | Number attribute | double SunThetaPosition
SunThetaPositionText | Number attribute (as text) | string SunThetaPositionText
SunPhiPosition | Number attribute | double SunPhiPosition
SunPhiPositionText | Number attribute (as text) | string SunPhiPositionText
Location | String list selection attribute | string Location
TimeZone | String list selection attribute | string TimeZone
Longitude | Number attribute | double Longitude
LongitudeText | Number attribute (as text) | string LongitudeText
Latitude | Number attribute | double Latitude
LatitudeText | Number attribute (as text) | string LatitudeText
DateTime | Number attribute | System.DateTime DateTime
DateTimeText | Number attribute (as text) | string DateTimeText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceAmbientUS1976.SourceAmbientUS1976ZenithDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceAmbientUS1976.SourceAmbientUS1976NorthDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceAmbientUS1976.SourceAmbientUS1976SunDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceDisplay

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceDisplay> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceDisplay Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceDisplay Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceDisplay Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceDisplay Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceDisplay CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
NbRays | Number attribute | uint NbRays
NbRaysText | Number attribute (as text) | string NbRaysText
RayLength | Number attribute | double RayLength
RayLengthText | Number attribute (as text) | string RayLengthText
OriginPoint | Link attribute | SpeosSim.SourceDisplay.SourceDisplayOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SourceDisplay.SourceDisplayXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SourceDisplay.SourceDisplayYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
ImageFile | File attribute | string ImageFile
ImageFileFullPath | File attribute (absolute full path) | string ImageFileFullPath
XIsMirrored | Boolean attribute | bool XIsMirrored
XStart | Number attribute | double XStart
XStartText | Number attribute (as text) | string XStartText
XEnd | Number attribute | double XEnd
XEndText | Number attribute (as text) | string XEndText
YIsMirrored | Boolean attribute | bool YIsMirrored
YStart | Number attribute | double YStart
YStartText | Number attribute (as text) | string YStartText
YEnd | Number attribute | double YEnd
YEndText | Number attribute (as text) | string YEndText
Luminance | Number attribute | double Luminance
LuminanceText | Number attribute (as text) | string LuminanceText
InfiniteContrastRatio | Boolean attribute | bool InfiniteContrastRatio
ContrastRatio | Number attribute | uint ContrastRatio
ContrastRatioText | Number attribute (as text) | string ContrastRatioText
IntensityType | Enum attribute | SpeosSim.SourceDisplay.EnumIntensityType IntensityType
IntensityTypeIndex | Enum attribute (as index) | int IntensityTypeIndex
IntensityFile | File attribute | string IntensityFile
IntensityFileFullPath | File attribute (absolute full path) | string IntensityFileFullPath
IntensityN | Number attribute | double IntensityN
IntensityNText | Number attribute (as text) | string IntensityNText
IntensityTotalAngle | Number attribute | double IntensityTotalAngle
IntensityTotalAngleText | Number attribute (as text) | string IntensityTotalAngleText
IntensityFWHMAngle | Number attribute | double IntensityFWHMAngle
IntensityFWHMAngleText | Number attribute (as text) | string IntensityFWHMAngleText
IntensityFWHMAngleX | Number attribute | double IntensityFWHMAngleX
IntensityFWHMAngleXText | Number attribute (as text) | string IntensityFWHMAngleXText
IntensityFWHMAngleY | Number attribute | double IntensityFWHMAngleY
IntensityFWHMAngleYText | Number attribute (as text) | string IntensityFWHMAngleYText
IntensityXDirection | Link attribute | SpeosSim.SourceDisplay.SourceDisplayIntensityXDirection IntensityXDirection
IntensityXDirectionReverse | Boolean attribute | bool IntensityXDirectionReverse
IntensityYDirection | Link attribute | SpeosSim.SourceDisplay.SourceDisplayIntensityYDirection IntensityYDirection
IntensityYDirectionReverse | Boolean attribute | bool IntensityYDirectionReverse
ColorSpace | Enum attribute | SpeosSim.SourceDisplay.EnumColorSpace ColorSpace
ColorSpaceIndex | Enum attribute (as index) | int ColorSpaceIndex
WhitePointType | Enum attribute | SpeosSim.SourceDisplay.EnumWhitePointType WhitePointType
WhitePointTypeIndex | Enum attribute (as index) | int WhitePointTypeIndex
xColor | Number attribute | double xColor
xColorText | Number attribute (as text) | string xColorText
yColor | Number attribute | double yColor
yColorText | Number attribute (as text) | string yColorText
RedSpectrumValueLibrary | File attribute | string RedSpectrumValueLibrary
RedSpectrumValueLibraryFullPath | File attribute (absolute full path) | string RedSpectrumValueLibraryFullPath
GreenSpectrumValueLibrary | File attribute | string GreenSpectrumValueLibrary
GreenSpectrumValueLibraryFullPath | File attribute (absolute full path) | string GreenSpectrumValueLibraryFullPath
BlueSpectrumValueLibrary | File attribute | string BlueSpectrumValueLibrary
BlueSpectrumValueLibraryFullPath | File attribute (absolute full path) | string BlueSpectrumValueLibraryFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceDisplay.SourceDisplayOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceDisplay.SourceDisplayXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceDisplay.SourceDisplayYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceDisplay.SourceDisplayIntensityXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceDisplay.SourceDisplayIntensityYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceInteractive

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceInteractive> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceInteractive Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceInteractive Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceInteractive Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceInteractive Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceInteractive CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Wavelength | Number attribute | double Wavelength
WavelengthText | Number attribute (as text) | string WavelengthText
RayLength | Number attribute | double RayLength
RayLengthText | Number attribute (as text) | string RayLengthText
StartType | Enum attribute | SpeosSim.SourceInteractive.EnumStartType StartType
StartTypeIndex | Enum attribute (as index) | int StartTypeIndex
StartGeometries | Links attribute | SpeosSim.SourceInteractive.SourceInteractiveStartGeometries StartGeometries
StartCurveGeometries | Links attribute | SpeosSim.SourceInteractive.SourceInteractiveStartCurveGeometries StartCurveGeometries
StartFaceGeometries | Links attribute | SpeosSim.SourceInteractive.SourceInteractiveStartFaceGeometries StartFaceGeometries
StartXSampling | Number attribute | uint StartXSampling
StartXSamplingText | Number attribute (as text) | string StartXSamplingText
StartYSampling | Number attribute | uint StartYSampling
StartYSamplingText | Number attribute (as text) | string StartYSamplingText
EndType | Enum attribute | SpeosSim.SourceInteractive.EnumEndType EndType
EndTypeIndex | Enum attribute (as index) | int EndTypeIndex
EndGeometries | Links attribute | SpeosSim.SourceInteractive.SourceInteractiveEndGeometries EndGeometries
EndCurveGeometries | Links attribute | SpeosSim.SourceInteractive.SourceInteractiveEndCurveGeometries EndCurveGeometries
EndDirectionGeometries | Links attribute | SpeosSim.SourceInteractive.SourceInteractiveEndDirectionGeometries EndDirectionGeometries
EndFaceGeometries | Links attribute | SpeosSim.SourceInteractive.SourceInteractiveEndFaceGeometries EndFaceGeometries
EndXSampling | Number attribute | uint EndXSampling
EndXSamplingText | Number attribute (as text) | string EndXSamplingText
EndYSampling | Number attribute | uint EndYSampling
EndYSamplingText | Number attribute (as text) | string EndYSamplingText
ReverseDirection | Boolean attribute | bool ReverseDirection
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceInteractive.SourceInteractiveStartGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SourceInteractive.SourceInteractiveStartCurveGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SourceInteractive.SourceInteractiveStartFaceGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SourceInteractive.SourceInteractiveEndGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SourceInteractive.SourceInteractiveEndCurveGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SourceInteractive.SourceInteractiveEndDirectionGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SourceInteractive.SourceInteractiveEndFaceGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SourceLightField

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceLightField> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceLightField Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceLightField Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceLightField Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceLightField Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceLightField CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
NbRays | Number attribute | uint NbRays
NbRaysText | Number attribute (as text) | string NbRaysText
RayLength | Number attribute | double RayLength
RayLengthText | Number attribute (as text) | string RayLengthText
LightFieldPreviewType | Enum attribute | SpeosSim.SourceLightField.EnumLightFieldPreviewType LightFieldPreviewType
LightFieldPreviewTypeIndex | Enum attribute (as index) | int LightFieldPreviewTypeIndex
OriginPoint | Link attribute | SpeosSim.SourceLightField.SourceLightFieldOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SourceLightField.SourceLightFieldXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SourceLightField.SourceLightFieldYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
LightFieldFile | File attribute | string LightFieldFile
LightFieldFileFullPath | File attribute (absolute full path) | string LightFieldFileFullPath
SpectrumFile | File attribute | string SpectrumFile
SpectrumFileFullPath | File attribute (absolute full path) | string SpectrumFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceLightField.SourceLightFieldOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceLightField.SourceLightFieldXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceLightField.SourceLightFieldYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceLuminaire

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceLuminaire> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceLuminaire Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceLuminaire Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceLuminaire Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceLuminaire Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceLuminaire CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
NbRays | Number attribute | uint NbRays
NbRaysText | Number attribute (as text) | string NbRaysText
RayLength | Number attribute | double RayLength
RayLengthText | Number attribute (as text) | string RayLengthText
DisplayIntensityDiagram | Boolean attribute | bool DisplayIntensityDiagram
IntensityDiagramFixedSize | Boolean attribute | bool IntensityDiagramFixedSize
IntensityDiagramSize | Number attribute | double IntensityDiagramSize
IntensityDiagramSizeText | Number attribute (as text) | string IntensityDiagramSizeText
FluxFromIntensityFile | Boolean attribute | bool FluxFromIntensityFile
FluxType | Enum attribute | SpeosSim.SourceLuminaire.EnumFluxType FluxType
FluxTypeIndex | Enum attribute (as index) | int FluxTypeIndex
FluxValueLuminous | Number attribute | double FluxValueLuminous
FluxValueLuminousText | Number attribute (as text) | string FluxValueLuminousText
FluxValueRadiant | Number attribute | double FluxValueRadiant
FluxValueRadiantText | Number attribute (as text) | string FluxValueRadiantText
SpectrumType | Enum attribute | SpeosSim.SourceLuminaire.EnumSpectrumType SpectrumType
SpectrumTypeIndex | Enum attribute (as index) | int SpectrumTypeIndex
SpectrumValueTemperature | Number attribute | double SpectrumValueTemperature
SpectrumValueTemperatureText | Number attribute (as text) | string SpectrumValueTemperatureText
SpectrumValueLibrary | File attribute | string SpectrumValueLibrary
SpectrumValueLibraryFullPath | File attribute (absolute full path) | string SpectrumValueLibraryFullPath
IntensityFile | File attribute | string IntensityFile
IntensityFileFullPath | File attribute (absolute full path) | string IntensityFileFullPath
OriginPoint | Link attribute | SpeosSim.SourceLuminaire.SourceLuminaireOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SourceLuminaire.SourceLuminaireXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SourceLuminaire.SourceLuminaireYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceLuminaire.SourceLuminaireOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceLuminaire.SourceLuminaireXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceLuminaire.SourceLuminaireYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceRayFile

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceRayFile> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceRayFile Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceRayFile Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceRayFile Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceRayFile Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceRayFile CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
OptimizeRayFile | Call the 'Ray file optimization' command. Returns 'false' if this action is unavailable in the current state of the object. | bool OptimizeRayFile()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
NbRays | Number attribute | uint NbRays
NbRaysText | Number attribute (as text) | string NbRaysText
RayLength | Number attribute | double RayLength
RayLengthText | Number attribute (as text) | string RayLengthText
ExitGeometry | Links attribute | SpeosSim.SourceRayFile.SourceRayFileExitGeometry ExitGeometry
FluxType | Enum attribute | SpeosSim.SourceRayFile.EnumFluxType FluxType
FluxTypeIndex | Enum attribute (as index) | int FluxTypeIndex
FluxFromRayFile | Boolean attribute | bool FluxFromRayFile
FluxValueLuminous | Number attribute | double FluxValueLuminous
FluxValueLuminousText | Number attribute (as text) | string FluxValueLuminousText
FluxValueRadiant | Number attribute | double FluxValueRadiant
FluxValueRadiantText | Number attribute (as text) | string FluxValueRadiantText
RayFile | File attribute | Fou.Utils.ValueObjects.FilePath RayFile
RayFileFullPath | File attribute (absolute full path) | string RayFileFullPath
SpectrumType | Enum attribute | SpeosSim.SourceRayFile.EnumSpectrumType SpectrumType
SpectrumTypeIndex | Enum attribute (as index) | int SpectrumTypeIndex
SpectrumValueWavelength | Number attribute | double SpectrumValueWavelength
SpectrumValueWavelengthText | Number attribute (as text) | string SpectrumValueWavelengthText
SpectrumValueTemperature | Number attribute | double SpectrumValueTemperature
SpectrumValueTemperatureText | Number attribute (as text) | string SpectrumValueTemperatureText
SpectrumValueLibrary | File attribute | string SpectrumValueLibrary
SpectrumValueLibraryFullPath | File attribute (absolute full path) | string SpectrumValueLibraryFullPath
OriginPoint | Link attribute | SpeosSim.SourceRayFile.SourceRayFileOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SourceRayFile.SourceRayFileXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SourceRayFile.SourceRayFileYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceRayFile.SourceRayFileExitGeometry

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### SourceRayFile.SourceRayFileOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceRayFile.SourceRayFileXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceRayFile.SourceRayFileYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SourceSurface

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceSurface> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceSurface Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceSurface Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceSurface Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceSurface Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
NbRays | Number attribute | uint NbRays
NbRaysText | Number attribute (as text) | string NbRaysText
RayLength | Number attribute | double RayLength
RayLengthText | Number attribute (as text) | string RayLengthText
DisplayIntensityDiagram | Boolean attribute | bool DisplayIntensityDiagram
IntensityDiagramFixedSize | Boolean attribute | bool IntensityDiagramFixedSize
IntensityDiagramSize | Number attribute | double IntensityDiagramSize
IntensityDiagramSizeText | Number attribute (as text) | string IntensityDiagramSizeText
FluxFromIntensityFile | Boolean attribute | bool FluxFromIntensityFile
FluxType | Enum attribute | SpeosSim.SourceSurface.EnumFluxType FluxType
FluxTypeIndex | Enum attribute (as index) | int FluxTypeIndex
FluxValueLuminous | Number attribute | double FluxValueLuminous
FluxValueLuminousText | Number attribute (as text) | string FluxValueLuminousText
FluxValueRadiant | Number attribute | double FluxValueRadiant
FluxValueRadiantText | Number attribute (as text) | string FluxValueRadiantText
FluxValueIntensity | Number attribute | double FluxValueIntensity
FluxValueIntensityText | Number attribute (as text) | string FluxValueIntensityText
ExitanceVariable | Boolean attribute | bool ExitanceVariable
EmissiveFaces | Children attribute | SpeosSim.SourceSurface.SourceSurfaceEmissiveFaces EmissiveFaces
ExitanceFile | File attribute | string ExitanceFile
ExitanceFileFullPath | File attribute (absolute full path) | string ExitanceFileFullPath
ExitanceReverse | Boolean attribute | bool ExitanceReverse
ExitanceOriginPoint | Link attribute | SpeosSim.SourceSurface.SourceSurfaceExitanceOriginPoint ExitanceOriginPoint
ExitanceXDirection | Link attribute | SpeosSim.SourceSurface.SourceSurfaceExitanceXDirection ExitanceXDirection
ExitanceXDirectionReverse | Boolean attribute | bool ExitanceXDirectionReverse
ExitanceYDirection | Link attribute | SpeosSim.SourceSurface.SourceSurfaceExitanceYDirection ExitanceYDirection
ExitanceYDirectionReverse | Boolean attribute | bool ExitanceYDirectionReverse
IntensityType | Enum attribute | SpeosSim.SourceSurface.EnumIntensityType IntensityType
IntensityTypeIndex | Enum attribute (as index) | int IntensityTypeIndex
IntensityFile | File attribute | string IntensityFile
IntensityFileFullPath | File attribute (absolute full path) | string IntensityFileFullPath
IntensityN | Number attribute | double IntensityN
IntensityNText | Number attribute (as text) | string IntensityNText
IntensityTotalAngle | Number attribute | double IntensityTotalAngle
IntensityTotalAngleText | Number attribute (as text) | string IntensityTotalAngleText
IntensityFWHMAngle | Number attribute | double IntensityFWHMAngle
IntensityFWHMAngleText | Number attribute (as text) | string IntensityFWHMAngleText
IntensityFWHMAngleX | Number attribute | double IntensityFWHMAngleX
IntensityFWHMAngleXText | Number attribute (as text) | string IntensityFWHMAngleXText
IntensityFWHMAngleY | Number attribute | double IntensityFWHMAngleY
IntensityFWHMAngleYText | Number attribute (as text) | string IntensityFWHMAngleYText
IntensityOrientation | Enum attribute | SpeosSim.SourceSurface.EnumIntensityOrientation IntensityOrientation
IntensityOrientationIndex | Enum attribute (as index) | int IntensityOrientationIndex
IntensityXDirection | Link attribute | SpeosSim.SourceSurface.SourceSurfaceIntensityXDirection IntensityXDirection
IntensityXDirectionReverse | Boolean attribute | bool IntensityXDirectionReverse
IntensityYDirection | Link attribute | SpeosSim.SourceSurface.SourceSurfaceIntensityYDirection IntensityYDirection
IntensityYDirectionReverse | Boolean attribute | bool IntensityYDirectionReverse
SpectrumType | Enum attribute | SpeosSim.SourceSurface.EnumSpectrumType SpectrumType
SpectrumTypeIndex | Enum attribute (as index) | int SpectrumTypeIndex
SpectrumValueWavelength | Number attribute | double SpectrumValueWavelength
SpectrumValueWavelengthText | Number attribute (as text) | string SpectrumValueWavelengthText
SpectrumValueTemperature | Number attribute | double SpectrumValueTemperature
SpectrumValueTemperatureText | Number attribute (as text) | string SpectrumValueTemperatureText
SpectrumValueLibrary | File attribute | string SpectrumValueLibrary
SpectrumValueLibraryFullPath | File attribute (absolute full path) | string SpectrumValueLibraryFullPath
ExitGeometry | Links attribute | SpeosSim.SourceSurface.SourceSurfaceExitGeometry ExitGeometry
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceSurface.SourceSurfaceEmissiveFaces

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.OrientedFace> GetEnumerator()
Add | Children attribute: Add an object to the children list | void Add(SpeosSim.OrientedFace childObject)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.OrientedFace> List
Item | Children attribute: Get child by index | SpeosSim.OrientedFace Item

### SourceSurface.SourceSurfaceExitanceOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceSurface.SourceSurfaceExitanceXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceSurface.SourceSurfaceExitanceYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceSurface.SourceSurfaceIntensityXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceSurface.SourceSurfaceIntensityYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceSurface.SourceSurfaceExitGeometry

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## SourceThermic

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.SourceThermic> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.SourceThermic Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.SourceThermic Create(object parent)
Create | Create a new object in the active context | SpeosSim.SourceThermic Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.SourceThermic Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.SourceThermic CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
NbRays | Number attribute | uint NbRays
NbRaysText | Number attribute (as text) | string NbRaysText
RayLength | Number attribute | double RayLength
RayLengthText | Number attribute (as text) | string RayLengthText
DisplayModeType | Enum attribute | SpeosSim.SourceThermic.EnumDisplayModeType DisplayModeType
DisplayModeTypeIndex | Enum attribute (as index) | int DisplayModeTypeIndex
FluxType | Enum attribute | SpeosSim.SourceThermic.EnumFluxType FluxType
FluxTypeIndex | Enum attribute (as index) | int FluxTypeIndex
FluxValueLuminous | Number attribute | double FluxValueLuminous
FluxValueLuminousText | Number attribute (as text) | string FluxValueLuminousText
FluxValueRadiant | Number attribute | double FluxValueRadiant
FluxValueRadiantText | Number attribute (as text) | string FluxValueRadiantText
EmittanceType | Enum attribute | SpeosSim.SourceThermic.EnumEmittanceType EmittanceType
EmittanceTypeIndex | Enum attribute (as index) | int EmittanceTypeIndex
EmissiveFaces | Children attribute | SpeosSim.SourceThermic.SourceThermicEmissiveFaces EmissiveFaces
SpectrumValueTemperature | Number attribute | double SpectrumValueTemperature
SpectrumValueTemperatureText | Number attribute (as text) | string SpectrumValueTemperatureText
TemperatureFieldFile | File attribute | string TemperatureFieldFile
TemperatureFieldFileFullPath | File attribute (absolute full path) | string TemperatureFieldFileFullPath
OriginPoint | Link attribute | SpeosSim.SourceThermic.SourceThermicOriginPoint OriginPoint
XDirection | Link attribute | SpeosSim.SourceThermic.SourceThermicXDirection XDirection
XDirectionReverse | Boolean attribute | bool XDirectionReverse
YDirection | Link attribute | SpeosSim.SourceThermic.SourceThermicYDirection YDirection
YDirectionReverse | Boolean attribute | bool YDirectionReverse
OpticalPropertiesType | Enum attribute | SpeosSim.SourceThermic.EnumOpticalPropertiesType OpticalPropertiesType
OpticalPropertiesTypeIndex | Enum attribute (as index) | int OpticalPropertiesTypeIndex
Reflectance | Number attribute | double Reflectance
ReflectanceText | Number attribute (as text) | string ReflectanceText
SOPLibrary | File attribute | string SOPLibrary
SOPLibraryFullPath | File attribute (absolute full path) | string SOPLibraryFullPath
SopPluginPath | File attribute | string SopPluginPath
SopPluginPathFullPath | File attribute (absolute full path) | string SopPluginPathFullPath
SopPluginConfigurationPath | File attribute | string SopPluginConfigurationPath
SopPluginConfigurationPathFullPath | File attribute (absolute full path) | string SopPluginConfigurationPathFullPath
IntensityType | Enum attribute | SpeosSim.SourceThermic.EnumIntensityType IntensityType
IntensityTypeIndex | Enum attribute (as index) | int IntensityTypeIndex
IntensityN | Number attribute | double IntensityN
IntensityNText | Number attribute (as text) | string IntensityNText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### SourceThermic.SourceThermicEmissiveFaces

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosSim.OrientedFace> GetEnumerator()
Add | Children attribute: Add an object to the children list | void Add(SpeosSim.OrientedFace childObject)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosSim.OrientedFace> List
Item | Children attribute: Get child by index | SpeosSim.OrientedFace Item

### SourceThermic.SourceThermicOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceThermic.SourceThermicXDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### SourceThermic.SourceThermicYDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## SurfaceLayer

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosSim.SurfaceLayer Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
SOPType | Enum attribute | SpeosSim.SurfaceLayer.EnumSOPType SOPType
SOPTypeIndex | Enum attribute (as index) | int SOPTypeIndex
SOPReflectance | Number attribute | double SOPReflectance
SOPReflectanceText | Number attribute (as text) | string SOPReflectanceText
SOPLibrary | File attribute | string SOPLibrary
AnisotropicTextureLayer | Number attribute | uint AnisotropicTextureLayer
AnisotropicTextureLayerText | Number attribute (as text) | string AnisotropicTextureLayerText
SopPluginPath | File attribute | string SopPluginPath
SopPluginConfigurationPath | File attribute | string SopPluginConfigurationPath
PreviewedLayer | Enum attribute | SpeosSim.SurfaceLayer.EnumPreviewedLayer PreviewedLayer
PreviewedLayerIndex | Enum attribute (as index) | int PreviewedLayerIndex
ImageTextureType | Enum attribute | SpeosSim.SurfaceLayer.EnumImageTextureType ImageTextureType
ImageTextureTypeIndex | Enum attribute (as index) | int ImageTextureTypeIndex
ImageTextureFilePath | File attribute | string ImageTextureFilePath
ImageTextureWidth | Number attribute | double ImageTextureWidth
ImageTextureWidthText | Number attribute (as text) | string ImageTextureWidthText
ImageTextureLayer | Number attribute | uint ImageTextureLayer
ImageTextureLayerText | Number attribute (as text) | string ImageTextureLayerText
NormalMapType | Enum attribute | SpeosSim.SurfaceLayer.EnumNormalMapType NormalMapType
NormalMapTypeIndex | Enum attribute (as index) | int NormalMapTypeIndex
NormalMapTextureFilePath | File attribute | string NormalMapTextureFilePath
NormalMapRoughness | Number attribute | double NormalMapRoughness
NormalMapRoughnessText | Number attribute (as text) | string NormalMapRoughnessText
NormalMapTextureWidth | Number attribute | double NormalMapTextureWidth
NormalMapTextureWidthText | Number attribute (as text) | string NormalMapTextureWidthText
NormalMapLayer | Number attribute | uint NormalMapLayer
NormalMapLayerText | Number attribute (as text) | string NormalMapLayerText

## UVMap

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.UVMap> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.UVMap Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Comment | String attribute | string Comment
Index | Number attribute | uint Index
IndexText | Number attribute (as text) | string IndexText
OriginPoint | Link attribute | SpeosSim.UVMap.UVMapOriginPoint OriginPoint
ProjectionDirection | Link attribute | SpeosSim.UVMap.UVMapProjectionDirection ProjectionDirection
ProjectionDirectionReverse | Boolean attribute | bool ProjectionDirectionReverse
OrientationDirection | Link attribute | SpeosSim.UVMap.UVMapOrientationDirection OrientationDirection
OrientationDirectionReverse | Boolean attribute | bool OrientationDirectionReverse
MappingType | Enum attribute | SpeosSim.UVMap.EnumMappingType MappingType
MappingTypeIndex | Enum attribute (as index) | int MappingTypeIndex
UOffset | Number attribute | double UOffset
UOffsetText | Number attribute (as text) | string UOffsetText
UScale | Number attribute | double UScale
UScaleText | Number attribute (as text) | string UScaleText
URepeat | Boolean attribute | bool URepeat
VOffset | Number attribute | double VOffset
VOffsetText | Number attribute (as text) | string VOffsetText
VScale | Number attribute | double VScale
VScaleText | Number attribute (as text) | string VScaleText
VRepeat | Boolean attribute | bool VRepeat
Rotate | Number attribute | double Rotate
RotateText | Number attribute (as text) | string RotateText
Perimeter | Number attribute | double Perimeter
PerimeterText | Number attribute (as text) | string PerimeterText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### UVMap.UVMapOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### UVMap.UVMapProjectionDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### UVMap.UVMapOrientationDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## UVMapping

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosSim.UVMapping> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosSim.UVMapping Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosSim.UVMapping Create(object parent)
Create | Create a new object in the active context | SpeosSim.UVMapping Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosSim.UVMapping Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosSim.UVMapping CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddUvMap | Add an UV Map layer object | SpeosSim.UVMap AddUvMap()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Description | String attribute | string Description
Geometries | Links attribute | SpeosSim.UVMapping.UVMappingGeometries Geometries
Layers | Children CustomObjects attribute | SpeosSim.UVMapping.UVMappingLayers Layers
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### UVMapping.UVMappingGeometries

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### UVMapping.UVMappingLayers

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosSim.UVMap> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosSim.UVMap AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosSim.UVMap> List
Item | Get child CustomObject by index | SpeosSim.UVMap Item
Item | Get child CustomObject by index | SpeosSim.UVMap Item

## SpeosOptionsConfiguration

### Property

Name | Description | Syntax 
--- | --- | --- 
PrecisionLength |  | int PrecisionLength
PrecisionAngle |  | int PrecisionAngle
PrecisionOther |  | int PrecisionOther
ResultsAutomaticLaunchWhenSimulationEnds |  | bool ResultsAutomaticLaunchWhenSimulationEnds
ResultsDraw |  | bool ResultsDraw
ResultsDrawNullValuesAsTransparent |  | bool ResultsDrawNullValuesAsTransparent
ActivateImageMeshing |  | bool ActivateImageMeshing
LineColorPreviewMeshing |  | System.Drawing.Color LineColorPreviewMeshing
CustomColorsForPicker |  | System.Int32[] CustomColorsForPicker
ResultsSoundWhenSimulationEnds |  | bool ResultsSoundWhenSimulationEnds
SimulationNumberOfThreads |  | int SimulationNumberOfThreads
SimulationVRSensorMemoryManagement |  | bool SimulationVRSensorMemoryManagement
Colorimetry |  | Dom.Optics.ColorimetryStandard Colorimetry
IntensityResultViewingDirection |  | Dom.Optics.PropagationDirection IntensityResultViewingDirection
CopySelectedInputFilesUnderDocumentFolder |  | bool CopySelectedInputFilesUnderDocumentFolder
PresetsCustomFolder |  | string PresetsCustomFolder
NoInteropHealing |  | bool NoInteropHealing

## Options

### Static method

Name | Description | Syntax 
--- | --- | --- 
Get | Get an object that reflects the state of the Speos General options. Value changes on this object will affect the application options only when it is set back. | App.ObjectModel.SpeosOptionsConfiguration Get()
Set | Request a change on the Speos General options to match the provided object state. | void Set(App.ObjectModel.SpeosOptionsConfiguration options)
Reset | Set the Speos General options back to their default values. | void Reset()

## InverseSimulationSettings

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create |  | SpeosSim.InverseSimulationSettings Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
SetDeterminist |  | void SetDeterminist(SpeosSim.InverseSimulationSettings.EnumPhotonMapMode photonMapMode, int ambientSampling, int maxNbSurfaceInteractions, bool antiAliasing, int specularApproxAngle)
SetDeterministPhotonMap |  | void SetDeterministPhotonMap(int maxNeighbors, int maxSearchRadius, bool fastTransmissionGathering, bool useFinalGathering, int finalGatheringMaxNeighbors, int finalGatheringSplittingNb)
SetDeterministPhotonMapBuild |  | void SetDeterministPhotonMapBuild(int nbPhotonsInDirectPhase, int nbSurfaceInteractionsInDirectPhase)
SetPropagationErrorAnalysis |  | void SetPropagationErrorAnalysis(bool propagationErrorAnalysis)
SetMonteCarlo |  | void SetMonteCarlo(bool dispersion, bool splitting, int nbGatheringRaysPerSource, int maxGatheringError, bool fastTransmissionGathering, int automaticSaveFrequencySeconds, SpeosSim.InverseSimulationSettings.EnumOptimizedPropagationMode optimizedPropagation, int nbStandardPassesBeforeOptimizedPasses)


### Property

Name | Description | Syntax 
--- | --- | --- 
UseRenderingPropertiesAsOpticalProperties |  | bool UseRenderingPropertiesAsOpticalProperties
UseMonteCarloAlgorithm |  | bool UseMonteCarloAlgorithm
UseFastTransmissionGathering |  | bool UseFastTransmissionGathering
PropagationErrorAnalysis |  | bool PropagationErrorAnalysis
MonteCarloOptimizedPropagationMode |  | SpeosSim.InverseSimulationSettings.EnumOptimizedPropagationMode MonteCarloOptimizedPropagationMode
MonteCarloOptimizedPropagationNbStandardPasses |  | int MonteCarloOptimizedPropagationNbStandardPasses
MonteCarloPropagationDispersion |  | bool MonteCarloPropagationDispersion
MonteCarloPropagationSplitting |  | bool MonteCarloPropagationSplitting
MonteCarloPropagationNbGatheringRaysPerSource |  | int MonteCarloPropagationNbGatheringRaysPerSource
MonteCarloPropagationMaxGatheringErrors |  | int MonteCarloPropagationMaxGatheringErrors
MonteCarloAutomaticSaveFrequencySeconds |  | int MonteCarloAutomaticSaveFrequencySeconds
DeterministPhotonMapMode |  | SpeosSim.InverseSimulationSettings.EnumPhotonMapMode DeterministPhotonMapMode
DeterministAmbientSampling |  | int DeterministAmbientSampling
DeterministMaxNbSurfaceInteractions |  | int DeterministMaxNbSurfaceInteractions
DeterministAntiAliasing |  | bool DeterministAntiAliasing
DeterministSpecularApproxAngle |  | double DeterministSpecularApproxAngle
DeterministPhotonMapMaxNeighbors |  | int DeterministPhotonMapMaxNeighbors
DeterministPhotonMapMaxSearchRadius |  | int DeterministPhotonMapMaxSearchRadius
DeterministPhotonMapUseFinalGathering |  | bool DeterministPhotonMapUseFinalGathering
DeterministPhotonMapFinalGatheringMaxNeighbors |  | int DeterministPhotonMapFinalGatheringMaxNeighbors
DeterministPhotonMapFinalGatheringSplittingNb |  | int DeterministPhotonMapFinalGatheringSplittingNb
DeterministPhotonMapBuildNbPhotonsInDirectPhase |  | int DeterministPhotonMapBuildNbPhotonsInDirectPhase
DeterministPhotonMapBuildMaxNbSurfaceInteractionsInDirectPhase |  | int DeterministPhotonMapBuildMaxNbSurfaceInteractionsInDirectPhase

## SimulationSettings

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create |  | SpeosSim.SimulationSettings Create()


### Property

Name | Description | Syntax 
--- | --- | --- 
Texture |  | bool Texture
TextureNormalization |  | SpeosSim.SimulationSettings.EnumTextureNormalizationType TextureNormalization
TextureBump |  | bool TextureBump
MeshingSagMode |  | SpeosSim.SimulationSettings.EnumMeshingSagMode MeshingSagMode
MeshingSagValue |  | double MeshingSagValue
MeshingStepMode |  | SpeosSim.SimulationSettings.EnumMeshingStepMode MeshingStepMode
MeshingStepValue |  | double MeshingStepValue
MeshingAngle |  | double MeshingAngle
GeometricalDistanceTolerance |  | double GeometricalDistanceTolerance
MaxNumberInteractions |  | int MaxNumberInteractions
RayTracerPrecision |  | SpeosSim.SimulationSettings.EnumRayTracer RayTracerPrecision
Weight |  | bool Weight
MinimumEnergyPercentage |  | double MinimumEnergyPercentage
ColorimetricStandard |  | SpeosSim.SimulationSettings.EnumColorimetricStandard ColorimetricStandard
SmartEngine |  | int SmartEngine

## DirectSimulationSettings

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create |  | SpeosSim.Specific.DirectSimulationSettings Create()
GetFromWrapper |  | SpeosSim.Specific.DirectSimulationSettings GetFromWrapper(App.ObjectModel.Interfaces.IHasSpeosSettings simulationSettings)
SetToWrapper |  | void SetToWrapper(App.ObjectModel.Interfaces.IHasSpeosSettings simulationSettings, SpeosSim.Specific.DirectSimulationSettings directSimulationSettings)


### Method

Name | Description | Syntax 
--- | --- | --- 
SetFastTransmissionGathering |  | void SetFastTransmissionGathering(bool fastTransmissionGathering)
SetPropagationErrorAnalysis |  | void SetPropagationErrorAnalysis(bool propagationErrorAnalysis)
SetDispersion |  | void SetDispersion(bool dispersion)
SetAutomaticSaveFrequency |  | void SetAutomaticSaveFrequency(int directTemporarySave)


### Property

Name | Description | Syntax 
--- | --- | --- 
UseFastTransmissionGathering |  | bool UseFastTransmissionGathering
PropagationErrorAnalysis |  | bool PropagationErrorAnalysis
Dispersion |  | bool Dispersion
AutomaticSaveFrequencySeconds |  | int AutomaticSaveFrequencySeconds


## SpeosDes

## Command

### Static method

Name | Description | Syntax 
--- | --- | --- 
GetErrorStatus | Get the error status of the given object | string GetErrorStatus(object docObject)
IsUpToDate | Ask if the given object was modified since its last successful computation | bool IsUpToDate(object docObject)
SetActiveSelection | Set the active selection from a collection of DocObjects | void SetActiveSelection(ICollection<object> selectedObjects)
GetSpeosObjectsInActivePart | Get the Speos objects contained in the active Part | IEnumerable<object> GetSpeosObjectsInActivePart()
Compute |  | void Compute(System.Object[] selectedObjects)
Compute | Perform the computation of an array of DocObjects | void Compute(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Compute | Perform the computation of an array of script objects | void Compute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
ComputeOnActiveSelection | Perform the computation of the active selection | void ComputeOnActiveSelection()

## Aspherics

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosDes.Aspherics Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
Index | Number attribute | int Index
IndexText | Number attribute (as text) | string IndexText
Value | Number attribute | double Value
ValueText | Number attribute (as text) | string ValueText

## CircularLens

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.CircularLens> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.CircularLens Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.CircularLens Create(object parent)
Create | Create a new object in the active context | SpeosDes.CircularLens Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.CircularLens Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.CircularLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleCircular Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.CircularLens.CircularLensGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### CircularLens.CircularLensGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## CircularSurface

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.CircularSurface> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.CircularSurface Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.CircularSurface Create(object parent)
Create | Create a new object in the active context | SpeosDes.CircularSurface Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.CircularSurface Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.CircularSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleCircular Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.CircularSurface.CircularSurfaceGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### CircularSurface.CircularSurfaceGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## ControlPlane

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosDes.ControlPlane Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
Position | Number attribute | double Position
PositionText | Number attribute (as text) | string PositionText
Defocus | Number attribute | double Defocus
DefocusText | Number attribute (as text) | string DefocusText
HorizontalSpread | Number attribute | double HorizontalSpread
HorizontalSpreadText | Number attribute (as text) | string HorizontalSpreadText
VerticalOrientation | Number attribute | double VerticalOrientation
VerticalOrientationText | Number attribute (as text) | string VerticalOrientationText
VerticalSpread | Number attribute | double VerticalSpread
VerticalSpreadText | Number attribute (as text) | string VerticalSpreadText
Tilt | Number attribute | double Tilt
TiltText | Number attribute (as text) | string TiltText

## ControlPointConfiguration

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosDes.ControlPointConfiguration Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
Position | Number attribute | double Position
PositionText | Number attribute (as text) | string PositionText
Value | Number attribute | double Value
ValueText | Number attribute (as text) | string ValueText

## EyeboxConfiguration

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosDes.EyeboxConfiguration Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
EBConfigName | String attribute | string EBConfigName
Offset | Number attribute | double Offset
OffsetText | Number attribute (as text) | string OffsetText
Weight | Number attribute | double Weight
WeightText | Number attribute (as text) | string WeightText

## FreeformLens

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.FreeformLens> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.FreeformLens Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.FreeformLens Create(object parent)
Create | Create a new object in the active context | SpeosDes.FreeformLens Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.FreeformLens Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.FreeformLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
ConstructionType | Enum attribute | SpeosDes.FreeformLens.EnumConstructionType ConstructionType
ConstructionTypeIndex | Enum attribute (as index) | int ConstructionTypeIndex
FocalPoint | Link attribute | SpeosDes.FreeformLens.FreeformLensFocalPoint FocalPoint
OpticalAxis | Link attribute | SpeosDes.FreeformLens.FreeformLensOpticalAxis OpticalAxis
ReverseDirection | Boolean attribute | bool ReverseDirection
RefractiveIndex | Number attribute | double RefractiveIndex
RefractiveIndexText | Number attribute (as text) | string RefractiveIndexText
FrontFace | Link attribute | SpeosDes.FreeformLens.FreeformLensFrontFace FrontFace
Thickness | Number attribute | double Thickness
ThicknessText | Number attribute (as text) | string ThicknessText
TargetDefinitionType | Enum attribute | SpeosDes.FreeformLens.EnumTargetDefinitionType TargetDefinitionType
TargetDefinitionTypeIndex | Enum attribute (as index) | int TargetDefinitionTypeIndex
TargetOrigin | Link attribute | SpeosDes.FreeformLens.FreeformLensTargetOrigin TargetOrigin
TargetXAxis | Link attribute | SpeosDes.FreeformLens.FreeformLensTargetXAxis TargetXAxis
TargetYAxis | Link attribute | SpeosDes.FreeformLens.FreeformLensTargetYAxis TargetYAxis
IntensityOpticalAxis | Link attribute | SpeosDes.FreeformLens.FreeformLensIntensityOpticalAxis IntensityOpticalAxis
ReverseIntensityOpticalAxisDirection | Boolean attribute | bool ReverseIntensityOpticalAxisDirection
IntensityOrientationAxis | Link attribute | SpeosDes.FreeformLens.FreeformLensIntensityOrientationAxis IntensityOrientationAxis
ReverseIntensityOrientationAxisDirection | Boolean attribute | bool ReverseIntensityOrientationAxisDirection
TargetType | Enum attribute | SpeosDes.FreeformLens.EnumTargetType TargetType
TargetTypeIndex | Enum attribute (as index) | int TargetTypeIndex
XTargetMax | Number attribute | double XTargetMax
XTargetMaxText | Number attribute (as text) | string XTargetMaxText
YTargetMax | Number attribute | double YTargetMax
YTargetMaxText | Number attribute (as text) | string YTargetMaxText
XTargetGaussian | Number attribute | double XTargetGaussian
XTargetGaussianText | Number attribute (as text) | string XTargetGaussianText
YTargetGaussian | Number attribute | double YTargetGaussian
YTargetGaussianText | Number attribute (as text) | string YTargetGaussianText
ImageFilePath | File attribute | string ImageFilePath
ImageFilePathFullPath | File attribute (absolute full path) | string ImageFilePathFullPath
TargetTypeIntensity | Enum attribute | SpeosDes.FreeformLens.EnumTargetTypeIntensity TargetTypeIntensity
TargetTypeIntensityIndex | Enum attribute (as index) | int TargetTypeIntensityIndex
IntensityXHalfSpread | Number attribute | double IntensityXHalfSpread
IntensityXHalfSpreadText | Number attribute (as text) | string IntensityXHalfSpreadText
IntensityYHalfSpread | Number attribute | double IntensityYHalfSpread
IntensityYHalfSpreadText | Number attribute (as text) | string IntensityYHalfSpreadText
IntensityXFWHMGaussian | Number attribute | double IntensityXFWHMGaussian
IntensityXFWHMGaussianText | Number attribute (as text) | string IntensityXFWHMGaussianText
IntensityYFWHMGaussian | Number attribute | double IntensityYFWHMGaussian
IntensityYFWHMGaussianText | Number attribute (as text) | string IntensityYFWHMGaussianText
IntensityFilePath | File attribute | string IntensityFilePath
IntensityFilePathFullPath | File attribute (absolute full path) | string IntensityFilePathFullPath
ImageContrast | Number attribute | int ImageContrast
ImageContrastText | Number attribute (as text) | string ImageContrastText
ResolutionFactor | Number attribute | int ResolutionFactor
ResolutionFactorText | Number attribute (as text) | string ResolutionFactorText
Threshold | Number attribute | int Threshold
ThresholdText | Number attribute (as text) | string ThresholdText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### FreeformLens.FreeformLensFocalPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### FreeformLens.FreeformLensOpticalAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### FreeformLens.FreeformLensFrontFace

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### FreeformLens.FreeformLensTargetOrigin

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### FreeformLens.FreeformLensTargetXAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### FreeformLens.FreeformLensTargetYAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### FreeformLens.FreeformLensIntensityOpticalAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### FreeformLens.FreeformLensIntensityOrientationAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## FreestyleCircularLens

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.FreestyleCircularLens> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.FreestyleCircularLens Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.FreestyleCircularLens Create(object parent)
Create | Create a new object in the active context | SpeosDes.FreestyleCircularLens Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.FreestyleCircularLens Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.FreestyleCircularLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleFreestyle Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.FreestyleCircularLens.FreestyleCircularLensGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### FreestyleCircularLens.FreestyleCircularLensGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## FreestyleCircularSurface

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.FreestyleCircularSurface> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.FreestyleCircularSurface Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.FreestyleCircularSurface Create(object parent)
Create | Create a new object in the active context | SpeosDes.FreestyleCircularSurface Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.FreestyleCircularSurface Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.FreestyleCircularSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleFreestyle Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.FreestyleCircularSurface.FreestyleCircularSurfaceGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### FreestyleCircularSurface.FreestyleCircularSurfaceGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## FreestyleRectangularLens

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.FreestyleRectangularLens> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.FreestyleRectangularLens Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.FreestyleRectangularLens Create(object parent)
Create | Create a new object in the active context | SpeosDes.FreestyleRectangularLens Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.FreestyleRectangularLens Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.FreestyleRectangularLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleFreestyle Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.FreestyleRectangularLens.FreestyleRectangularLensGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### FreestyleRectangularLens.FreestyleRectangularLensGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## FreestyleRectangularSurface

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.FreestyleRectangularSurface> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.FreestyleRectangularSurface Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.FreestyleRectangularSurface Create(object parent)
Create | Create a new object in the active context | SpeosDes.FreestyleRectangularSurface Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.FreestyleRectangularSurface Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.FreestyleRectangularSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleFreestyle Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.FreestyleRectangularSurface.FreestyleRectangularSurfaceGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### FreestyleRectangularSurface.FreestyleRectangularSurfaceGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## HoneycombLens

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.HoneycombLens> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.HoneycombLens Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.HoneycombLens Create(object parent)
Create | Create a new object in the active context | SpeosDes.HoneycombLens Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.HoneycombLens Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.HoneycombLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleHoneycomb Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.HoneycombLens.HoneycombLensGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### HoneycombLens.HoneycombLensGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## HUDOD

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.HUDOD> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.HUDOD Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.HUDOD Create(object parent)
Create | Create a new object in the active context | SpeosDes.HUDOD Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.HUDOD Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.HUDOD CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
UpdateAdvancedParameters | Call the 'Update all parameters' command. Returns 'false' if this action is unavailable in the current state of the object. | bool UpdateAdvancedParameters()
GetResultFilePaths | Get the list of paths of all HUD Optical Design resulting files | System.String[] GetResultFilePaths()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
VehicleAxis | Link attribute | SpeosDes.HUDOD.HUDODVehicleAxis VehicleAxis
ReverseVehiculeAxisDirection | Boolean attribute | bool ReverseVehiculeAxisDirection
TopAxis | Link attribute | SpeosDes.HUDOD.HUDODTopAxis TopAxis
ReverseTopAxisDirection | Boolean attribute | bool ReverseTopAxisDirection
ManufacturingX | Number attribute | int ManufacturingX
ManufacturingXText | Number attribute (as text) | string ManufacturingXText
ManufacturingY | Number attribute | int ManufacturingY
ManufacturingYText | Number attribute (as text) | string ManufacturingYText
EyeboxCenter | Link attribute | SpeosDes.HUDOD.HUDODEyeboxCenter EyeboxCenter
EyeboxOrientationType | Enum attribute | SpeosDes.HUDOD.EnumEyeboxOrientationType EyeboxOrientationType
EyeboxOrientationTypeIndex | Enum attribute (as index) | int EyeboxOrientationTypeIndex
EBHorizontalSize | Number attribute | double EBHorizontalSize
EBHorizontalSizeText | Number attribute (as text) | string EBHorizontalSizeText
EBHorizontalSampling | Number attribute | int EBHorizontalSampling
EBHorizontalSamplingText | Number attribute (as text) | string EBHorizontalSamplingText
EBHorizontalResolution | Number attribute | double EBHorizontalResolution
EBHorizontalResolutionText | Number attribute (as text) | string EBHorizontalResolutionText
EBVerticalSize | Number attribute | double EBVerticalSize
EBVerticalSizeText | Number attribute (as text) | string EBVerticalSizeText
EBVerticalSampling | Number attribute | int EBVerticalSampling
EBVerticalSamplingText | Number attribute (as text) | string EBVerticalSamplingText
EBVerticalResolution | Number attribute | double EBVerticalResolution
EBVerticalResolutionText | Number attribute (as text) | string EBVerticalResolutionText
EyeboxConfigPositionDirectionType | Enum attribute | SpeosDes.HUDOD.EnumEyeboxConfigPositionDirectionType EyeboxConfigPositionDirectionType
EyeboxConfigPositionDirectionTypeIndex | Enum attribute (as index) | int EyeboxConfigPositionDirectionTypeIndex
EBConfigurations | Children attribute | SpeosDes.HUDOD.HUDODEBConfigurations EBConfigurations
TIVirtualImageDistance | Number attribute | double TIVirtualImageDistance
TIVirtualImageDistanceText | Number attribute (as text) | string TIVirtualImageDistanceText
TILookOverAngle | Number attribute | double TILookOverAngle
TILookOverAngleText | Number attribute (as text) | string TILookOverAngleText
TILookDownAngle | Number attribute | double TILookDownAngle
TILookDownAngleText | Number attribute (as text) | string TILookDownAngleText
TargetImageModeType | Enum attribute | SpeosDes.HUDOD.EnumTargetImageModeType TargetImageModeType
TargetImageModeTypeIndex | Enum attribute (as index) | int TargetImageModeTypeIndex
TIHorizontalSize | Number attribute | double TIHorizontalSize
TIHorizontalSizeText | Number attribute (as text) | string TIHorizontalSizeText
TIVerticalSize | Number attribute | double TIVerticalSize
TIVerticalSizeText | Number attribute (as text) | string TIVerticalSizeText
TIHorizontalFOV | Number attribute | double TIHorizontalFOV
TIHorizontalFOVText | Number attribute (as text) | string TIHorizontalFOVText
TIVerticalFOV | Number attribute | double TIVerticalFOV
TIVerticalFOVText | Number attribute (as text) | string TIVerticalFOVText
WindshieldInnerSurface | Link attribute | SpeosDes.HUDOD.HUDODWindshieldInnerSurface WindshieldInnerSurface
Projectors | Children attribute | SpeosDes.HUDOD.HUDODProjectors Projectors
PGUHorizontalSampling | Number attribute | int PGUHorizontalSampling
PGUHorizontalSamplingText | Number attribute (as text) | string PGUHorizontalSamplingText
PGUVerticalSampling | Number attribute | int PGUVerticalSampling
PGUVerticalSamplingText | Number attribute (as text) | string PGUVerticalSamplingText
PGUCharacteristicsType | Enum attribute | SpeosDes.HUDOD.EnumPGUCharacteristicsType PGUCharacteristicsType
PGUCharacteristicsTypeIndex | Enum attribute (as index) | int PGUCharacteristicsTypeIndex
PGUHorizontalSize | Number attribute | double PGUHorizontalSize
PGUHorizontalSizeText | Number attribute (as text) | string PGUHorizontalSizeText
PGUHorizontalResolution | Number attribute | int PGUHorizontalResolution
PGUHorizontalResolutionText | Number attribute (as text) | string PGUHorizontalResolutionText
PGUVerticalSize | Number attribute | double PGUVerticalSize
PGUVerticalSizeText | Number attribute (as text) | string PGUVerticalSizeText
PGUVerticalResolution | Number attribute | int PGUVerticalResolution
PGUVerticalResolutionText | Number attribute (as text) | string PGUVerticalResolutionText
AdvancedParameters | Access the HUD Optical Design dynamic parameters | SpeosDes.HUDOD.DynamicParametersAttribute AdvancedParameters
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### HUDOD.HUDODVehicleAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HUDOD.HUDODTopAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HUDOD.HUDODEyeboxCenter

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HUDOD.HUDODEBConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.EyeboxConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.EyeboxConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.EyeboxConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.EyeboxConfiguration Item

### HUDOD.HUDODWindshieldInnerSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### HUDOD.HUDODProjectors

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.HUDProjectorElement> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.HUDProjectorElement AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.HUDProjectorElement> List
Item | Children attribute: Get child by index | SpeosDes.HUDProjectorElement Item

### HUDOD.DynamicParametersAttribute

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | HUD Optical Design dynamic parameters enumerator | IEnumerator<string> GetEnumerator()


### Property

Name | Description | Syntax 
--- | --- | --- 
Item | HUD Optical Design dynamic parameters, get by index operator | double Item

## HUDProjectorElement

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosDes.HUDProjectorElement Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
Name | String attribute | string Name
ProjectorType | Enum attribute | SpeosDes.HUDProjectorElement.EnumProjectorType ProjectorType
ProjectorTypeIndex | Enum attribute (as index) | int ProjectorTypeIndex
Distance | Number attribute | double Distance
DistanceText | Number attribute (as text) | string DistanceText
HorizontalAngle | Number attribute | double HorizontalAngle
HorizontalAngleText | Number attribute (as text) | string HorizontalAngleText
MultiConfig | Boolean attribute | bool MultiConfig
VerticalAngle | Number attribute | double VerticalAngle
VerticalAngleText | Number attribute (as text) | string VerticalAngleText

## LightGuide

### Method

Name | Description | Syntax 
--- | --- | --- 
GetStartRadiusTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetStartRadiusTypePossibleValues()
GetEndRadiusTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetEndRadiusTypePossibleValues()
GetMillingTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetMillingTypePossibleValues()
GetBottomPrismMillingTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetBottomPrismMillingTypePossibleValues()
ExportAsCSVFile |  | void ExportAsCSVFile(string csvFilePath)
Clone | Create a copy of this object in the active context | SpeosDes.LightGuide Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.LightGuide CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
GetStepTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetStepTypePossibleValues()
GetLengthTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetLengthTypePossibleValues()
GetTrimmingRatioTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetTrimmingRatioTypePossibleValues()
GetPeakTrimmingRatioTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetPeakTrimmingRatioTypePossibleValues()
GetOffsetTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetOffsetTypePossibleValues()
GetWidthTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetWidthTypePossibleValues()
GetStartAngleTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetStartAngleTypePossibleValues()
GetEndAngleTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetEndAngleTypePossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.LightGuide> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.LightGuide Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.LightGuide Create(object parent)
Create | Create a new object in the active context | SpeosDes.LightGuide Create()


### Property

Name | Description | Syntax 
--- | --- | --- 
GuideCurve | Links attribute | SpeosDes.LightGuide.LightGuideGuideCurve GuideCurve
ReverseGuideCurveDirection | Boolean attribute | bool ReverseGuideCurveDirection
BodyType | Enum attribute | SpeosDes.LightGuide.EnumBodyType BodyType
BodyTypeIndex | Enum attribute (as index) | int BodyTypeIndex
BodyProfileDiameter | Number attribute | double BodyProfileDiameter
BodyProfileDiameterText | Number attribute (as text) | string BodyProfileDiameterText
ExtraBodyHeight | Number attribute | double ExtraBodyHeight
ExtraBodyHeightText | Number attribute (as text) | string ExtraBodyHeightText
BodyProfile | Number attribute | SpeosDes.LightGuide.LightGuideBodyProfile BodyProfile
PrismsOrientationType | Enum attribute | SpeosDes.LightGuide.EnumPrismsOrientationType PrismsOrientationType
PrismsOrientationTypeIndex | Enum attribute (as index) | int PrismsOrientationTypeIndex
OpticalAxis | Link attribute | SpeosDes.LightGuide.LightGuideOpticalAxis OpticalAxis
ReverseOpticalAxisDirection | Boolean attribute | bool ReverseOpticalAxisDirection
OrientationSurface | Link attribute | SpeosDes.LightGuide.LightGuideOrientationSurface OrientationSurface
PrismsOperationType | Enum attribute | SpeosDes.LightGuide.EnumPrismsOperationType PrismsOperationType
PrismsOperationTypeIndex | Enum attribute (as index) | int PrismsOperationTypeIndex
RefractiveIndex | Number attribute | double RefractiveIndex
RefractiveIndexText | Number attribute (as text) | string RefractiveIndexText
DistancesType | Enum attribute | SpeosDes.LightGuide.EnumDistancesType DistancesType
DistancesTypeIndex | Enum attribute (as index) | int DistancesTypeIndex
ProjectionAxis | Link attribute | SpeosDes.LightGuide.LightGuideProjectionAxis ProjectionAxis
DistanceStart | Number attribute | double DistanceStart
DistanceStartText | Number attribute (as text) | string DistanceStartText
DistanceEnd | Number attribute | double DistanceEnd
DistanceEndText | Number attribute (as text) | string DistanceEndText
StepType | String list selection attribute | string StepType
StepValue | Number attribute | double StepValue
StepValueText | Number attribute (as text) | string StepValueText
StepConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideStepConfigurations StepConfigurations
LengthType | String list selection attribute | string LengthType
LengthValue | Number attribute | double LengthValue
LengthValueText | Number attribute (as text) | string LengthValueText
LengthConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideLengthConfigurations LengthConfigurations
TrimmingRatioType | String list selection attribute | string TrimmingRatioType
TrimmingRatioValue | Number attribute | double TrimmingRatioValue
TrimmingRatioValueText | Number attribute (as text) | string TrimmingRatioValueText
TrimmingRatioConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideTrimmingRatioConfigurations TrimmingRatioConfigurations
PeakTrimmingRatioType | String list selection attribute | string PeakTrimmingRatioType
PeakTrimmingRatioValue | Number attribute | double PeakTrimmingRatioValue
PeakTrimmingRatioValueText | Number attribute (as text) | string PeakTrimmingRatioValueText
PeakTrimmingRatioConfigurations | Children attribute | SpeosDes.LightGuide.LightGuidePeakTrimmingRatioConfigurations PeakTrimmingRatioConfigurations
OffsetType | String list selection attribute | string OffsetType
OffsetValue | Number attribute | double OffsetValue
OffsetValueText | Number attribute (as text) | string OffsetValueText
OffsetConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideOffsetConfigurations OffsetConfigurations
WidthType | String list selection attribute | string WidthType
WidthValue | Number attribute | double WidthValue
WidthValueText | Number attribute (as text) | string WidthValueText
WidthConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideWidthConfigurations WidthConfigurations
StartAngleType | String list selection attribute | string StartAngleType
StartAngleValue | Number attribute | double StartAngleValue
StartAngleValueText | Number attribute (as text) | string StartAngleValueText
StartAngleConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideStartAngleConfigurations StartAngleConfigurations
EndAngleType | String list selection attribute | string EndAngleType
EndAngleValue | Number attribute | double EndAngleValue
EndAngleValueText | Number attribute (as text) | string EndAngleValueText
EndAngleConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideEndAngleConfigurations EndAngleConfigurations
StartRadiusType | String list selection attribute | string StartRadiusType
StartRadiusValue | Number attribute | double StartRadiusValue
StartRadiusValueText | Number attribute (as text) | string StartRadiusValueText
StartRadiusConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideStartRadiusConfigurations StartRadiusConfigurations
EndRadiusType | String list selection attribute | string EndRadiusType
EndRadiusValue | Number attribute | double EndRadiusValue
EndRadiusValueText | Number attribute (as text) | string EndRadiusValueText
EndRadiusConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideEndRadiusConfigurations EndRadiusConfigurations
CSVFile | File attribute | string CSVFile
CSVFileFullPath | File attribute (absolute full path) | string CSVFileFullPath
MillingType | String list selection attribute | string MillingType
MillingValue | Number attribute | double MillingValue
MillingValueText | Number attribute (as text) | string MillingValueText
MillingConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideMillingConfigurations MillingConfigurations
BottomPrismMillingType | String list selection attribute | string BottomPrismMillingType
BottomPrismMillingValue | Number attribute | double BottomPrismMillingValue
BottomPrismMillingValueText | Number attribute (as text) | string BottomPrismMillingValueText
BottomPrismMillingConfigurations | Children attribute | SpeosDes.LightGuide.LightGuideBottomPrismMillingConfigurations BottomPrismMillingConfigurations
DraftingType | Enum attribute | SpeosDes.LightGuide.EnumDraftingType DraftingType
DraftingTypeIndex | Enum attribute (as index) | int DraftingTypeIndex
DemoldingOrientation | Link attribute | SpeosDes.LightGuide.LightGuideDemoldingOrientation DemoldingOrientation
ReverseDemoldingDirection | Boolean attribute | bool ReverseDemoldingDirection
DraftAngle | Number attribute | double DraftAngle
DraftAngleText | Number attribute (as text) | string DraftAngleText
NbPrisms | Number attribute | int NbPrisms
NbPrismsText | Number attribute (as text) | string NbPrismsText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### LightGuide.LightGuideGuideCurve

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### LightGuide.LightGuideBodyProfile

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### LightGuide.LightGuideOpticalAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### LightGuide.LightGuideOrientationSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### LightGuide.LightGuideProjectionAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### LightGuide.LightGuideStepConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideLengthConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideTrimmingRatioConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuidePeakTrimmingRatioConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideOffsetConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideWidthConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideStartAngleConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideEndAngleConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideStartRadiusConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideEndRadiusConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideMillingConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideBottomPrismMillingConfigurations

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPointConfiguration AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List
Item | Children attribute: Get child by index | SpeosDes.ControlPointConfiguration Item

### LightGuide.LightGuideDemoldingOrientation

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## MOS

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.MOS> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.MOS Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.MOS Create(object parent)
Create | Create a new object in the active context | SpeosDes.MOS Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.MOS Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.MOS CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
ExportAsCSVFile |  | void ExportAsCSVFile(string csvFilePath)
ExtractToolingPath |  | void ExtractToolingPath()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
GuideCurve | Links attribute | SpeosDes.MOS.MOSGuideCurve GuideCurve
ReverseGuideCurveDirection | Boolean attribute | bool ReverseGuideCurveDirection
SecondCurve | Links attribute | SpeosDes.MOS.MOSSecondCurve SecondCurve
ConstructionType | Enum attribute | SpeosDes.MOS.EnumConstructionType ConstructionType
ConstructionTypeIndex | Enum attribute (as index) | int ConstructionTypeIndex
OpticalAxis | Link attribute | SpeosDes.MOS.MOSOpticalAxis OpticalAxis
ReverseOpticalAxisDirection | Boolean attribute | bool ReverseOpticalAxisDirection
SupportSurface | Link attribute | SpeosDes.MOS.MOSSupportSurface SupportSurface
ProjectionType | Enum attribute | SpeosDes.MOS.EnumProjectionType ProjectionType
ProjectionTypeIndex | Enum attribute (as index) | int ProjectionTypeIndex
SupportSide | Enum attribute | SpeosDes.MOS.EnumSupportSide SupportSide
SupportSideIndex | Enum attribute (as index) | int SupportSideIndex
Thickness | Number attribute | double Thickness
ThicknessText | Number attribute (as text) | string ThicknessText
SideAngle | Number attribute | double SideAngle
SideAngleText | Number attribute (as text) | string SideAngleText
Radius | Number attribute | double Radius
RadiusText | Number attribute (as text) | string RadiusText
ControlPoints | Children attribute | SpeosDes.MOS.MOSControlPoints ControlPoints
StripesCount | Number attribute | int StripesCount
StripesCountText | Number attribute (as text) | string StripesCountText
DraftingAxis | Link attribute | SpeosDes.MOS.MOSDraftingAxis DraftingAxis
ReverseDraftingAxisDirection | Boolean attribute | bool ReverseDraftingAxisDirection
DraftingAngle | Number attribute | double DraftingAngle
DraftingAngleText | Number attribute (as text) | string DraftingAngleText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### MOS.MOSGuideCurve

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### MOS.MOSSecondCurve

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### MOS.MOSOpticalAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### MOS.MOSSupportSurface

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### MOS.MOSControlPoints

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.MOSControlPoint> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.MOSControlPoint AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.MOSControlPoint> List
Item | Children attribute: Get child by index | SpeosDes.MOSControlPoint Item

### MOS.MOSDraftingAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## MOSControlPoint

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosDes.MOSControlPoint Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
Position | Number attribute | double Position
PositionText | Number attribute (as text) | string PositionText
Depth | Number attribute | double Depth
DepthText | Number attribute (as text) | string DepthText
Pitch | Number attribute | double Pitch
PitchText | Number attribute (as text) | string PitchText
TopLength | Number attribute | double TopLength
TopLengthText | Number attribute (as text) | string TopLengthText
BitShapeStartAngle | Number attribute | double BitShapeStartAngle
BitShapeStartAngleText | Number attribute (as text) | string BitShapeStartAngleText
BitShapeEndAngle | Number attribute | double BitShapeEndAngle
BitShapeEndAngleText | Number attribute (as text) | string BitShapeEndAngleText

## Node

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.Node> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.Node Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.Node Create(object parent)
Create | Create a new object in the active context | SpeosDes.Node Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.Node Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.Node CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## OpticalFeatureGeneral

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.OpticalFeatureGeneral> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.OpticalFeatureGeneral Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
GetSourceTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetSourceTypePossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
SourceType | String list selection attribute | string SourceType
SourcePoint | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSourcePoint SourcePoint
SourceBody | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSourceBody SourceBody
SourceDirection | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSourceDirection SourceDirection
ReverseSourceDirection | Boolean attribute | bool ReverseSourceDirection
SourceRefractiveIndex | Number attribute | double SourceRefractiveIndex
SourceRefractiveIndexText | Number attribute (as text) | string SourceRefractiveIndexText
SourceFlux | Number attribute | double SourceFlux
SourceFluxText | Number attribute (as text) | string SourceFluxText
SupportType | Enum attribute | SpeosDes.OpticalFeatureGeneral.EnumSupportType SupportType
SupportTypeIndex | Enum attribute (as index) | int SupportTypeIndex
SupportBody | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSupportBody SupportBody
SupportOrigin | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSupportOrigin SupportOrigin
SupportAxis | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSupportAxis SupportAxis
ReverseSupportAxis | Boolean attribute | bool ReverseSupportAxis
SupportOrientation | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSupportOrientation SupportOrientation
ReverseSupportOrientation | Boolean attribute | bool ReverseSupportOrientation
SupportOrientationType | Enum attribute | SpeosDes.OpticalFeatureGeneral.EnumSupportOrientationType SupportOrientationType
SupportOrientationTypeIndex | Enum attribute (as index) | int SupportOrientationTypeIndex
Thickness | Number attribute | double Thickness
ThicknessText | Number attribute (as text) | string ThicknessText
RefractiveIndex | Number attribute | double RefractiveIndex
RefractiveIndexText | Number attribute (as text) | string RefractiveIndexText
TargetType | Enum attribute | SpeosDes.OpticalFeatureGeneral.EnumTargetType TargetType
TargetTypeIndex | Enum attribute (as index) | int TargetTypeIndex
IntegrationDirectionIsReversed | Boolean attribute | bool IntegrationDirectionIsReversed
XMPTemplateFile | File attribute | string XMPTemplateFile
XMPTemplateFileFullPath | File attribute (absolute full path) | string XMPTemplateFileFullPath
TargetOrigin | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralTargetOrigin TargetOrigin
TargetAxis | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralTargetAxis TargetAxis
ReverseTargetAxis | Boolean attribute | bool ReverseTargetAxis
TargetOrientation | Link attribute | SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralTargetOrientation TargetOrientation
ReverseTargetOrientation | Boolean attribute | bool ReverseTargetOrientation
ResultViewingDirection | Enum attribute | SpeosDes.OpticalFeatureGeneral.EnumResultViewingDirection ResultViewingDirection
ResultViewingDirectionIndex | Enum attribute (as index) | int ResultViewingDirectionIndex
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### OpticalFeatureGeneral.OpticalFeatureGeneralSourcePoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureGeneral.OpticalFeatureGeneralSourceBody

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureGeneral.OpticalFeatureGeneralSourceDirection

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureGeneral.OpticalFeatureGeneralSupportBody

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureGeneral.OpticalFeatureGeneralSupportOrigin

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureGeneral.OpticalFeatureGeneralSupportAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureGeneral.OpticalFeatureGeneralSupportOrientation

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureGeneral.OpticalFeatureGeneralTargetOrigin

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureGeneral.OpticalFeatureGeneralTargetAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureGeneral.OpticalFeatureGeneralTargetOrientation

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## OpticalFeatureManufacturing

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.OpticalFeatureManufacturing> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.OpticalFeatureManufacturing Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
GetDraftingTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetDraftingTypePossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Sewing | Boolean attribute | bool Sewing
DraftingType | String list selection attribute | string DraftingType
DraftValue | Number attribute | double DraftValue
DraftValueText | Number attribute (as text) | string DraftValueText
DraftAll | Boolean attribute | bool DraftAll
AngularDraftValue | Number attribute | double AngularDraftValue
AngularDraftValueText | Number attribute (as text) | string AngularDraftValueText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## OpticalFeatureStyleCircular

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.OpticalFeatureStyleCircular> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.OpticalFeatureStyleCircular Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Start | Number attribute | double Start
StartText | Number attribute (as text) | string StartText
End | Number attribute | double End
EndText | Number attribute (as text) | string EndText
Step | Number attribute | double Step
StepText | Number attribute (as text) | string StepText
ShiftType | Enum attribute | SpeosDes.OpticalFeatureStyleCircular.EnumShiftType ShiftType
ShiftTypeIndex | Enum attribute (as index) | int ShiftTypeIndex
ShiftLength | Number attribute | double ShiftLength
ShiftLengthText | Number attribute (as text) | string ShiftLengthText
ShiftAngle | Number attribute | double ShiftAngle
ShiftAngleText | Number attribute (as text) | string ShiftAngleText
Definition | Enum attribute | SpeosDes.OpticalFeatureStyleCircular.EnumDefinition Definition
DefinitionIndex | Enum attribute (as index) | int DefinitionIndex
Sectors | Number attribute | int Sectors
SectorsText | Number attribute (as text) | string SectorsText
Angle | Number attribute | double Angle
AngleText | Number attribute (as text) | string AngleText
CircularEdges | Boolean attribute | bool CircularEdges
StyleOrigin | Link attribute | SpeosDes.OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleOrigin StyleOrigin
StyleAxis | Link attribute | SpeosDes.OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleAxis StyleAxis
ReverseStyleAxis | Boolean attribute | bool ReverseStyleAxis
StyleOrientation | Link attribute | SpeosDes.OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleOrientation StyleOrientation
ReverseStyleOrientation | Boolean attribute | bool ReverseStyleOrientation
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleOrigin

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleOrientation

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## OpticalFeatureStyleFreestyle

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.OpticalFeatureStyleFreestyle> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.OpticalFeatureStyleFreestyle Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
XCurves | Links attribute | SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleXCurves XCurves
YCurves | Links attribute | SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleYCurves YCurves
StyleOrigin | Link attribute | SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleOrigin StyleOrigin
StyleAxis | Link attribute | SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleAxis StyleAxis
ReverseStyleAxis | Boolean attribute | bool ReverseStyleAxis
StyleOrientation | Link attribute | SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleOrientation StyleOrientation
ReverseStyleOrientation | Boolean attribute | bool ReverseStyleOrientation
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleXCurves

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleYCurves

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleOrigin

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleOrientation

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## OpticalFeatureStyleHoneycomb

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.OpticalFeatureStyleHoneycomb> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.OpticalFeatureStyleHoneycomb Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
XStart | Number attribute | double XStart
XStartText | Number attribute (as text) | string XStartText
XEnd | Number attribute | double XEnd
XEndText | Number attribute (as text) | string XEndText
YStart | Number attribute | double YStart
YStartText | Number attribute (as text) | string YStartText
YEnd | Number attribute | double YEnd
YEndText | Number attribute (as text) | string YEndText
Rotation | Number attribute | double Rotation
RotationText | Number attribute (as text) | string RotationText
Definition | Enum attribute | SpeosDes.OpticalFeatureStyleHoneycomb.EnumDefinition Definition
DefinitionIndex | Enum attribute (as index) | int DefinitionIndex
SideLength | Number attribute | double SideLength
SideLengthText | Number attribute (as text) | string SideLengthText
Width | Number attribute | double Width
WidthText | Number attribute (as text) | string WidthText
StyleOrigin | Link attribute | SpeosDes.OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleOrigin StyleOrigin
StyleAxis | Link attribute | SpeosDes.OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleAxis StyleAxis
ReverseStyleAxis | Boolean attribute | bool ReverseStyleAxis
StyleOrientation | Link attribute | SpeosDes.OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleOrientation StyleOrientation
ReverseStyleOrientation | Boolean attribute | bool ReverseStyleOrientation
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleOrigin

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleOrientation

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## OpticalFeatureStyleRectangular

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.OpticalFeatureStyleRectangular> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.OpticalFeatureStyleRectangular Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
XStart | Number attribute | double XStart
XStartText | Number attribute (as text) | string XStartText
XEnd | Number attribute | double XEnd
XEndText | Number attribute (as text) | string XEndText
YStart | Number attribute | double YStart
YStartText | Number attribute (as text) | string YStartText
YEnd | Number attribute | double YEnd
YEndText | Number attribute (as text) | string YEndText
XAngle | Number attribute | double XAngle
XAngleText | Number attribute (as text) | string XAngleText
YAngle | Number attribute | double YAngle
YAngleText | Number attribute (as text) | string YAngleText
Definition | Enum attribute | SpeosDes.OpticalFeatureStyleRectangular.EnumDefinition Definition
DefinitionIndex | Enum attribute (as index) | int DefinitionIndex
XCount | Number attribute | int XCount
XCountText | Number attribute (as text) | string XCountText
YCount | Number attribute | int YCount
YCountText | Number attribute (as text) | string YCountText
XSize | Number attribute | double XSize
XSizeText | Number attribute (as text) | string XSizeText
YSize | Number attribute | double YSize
YSizeText | Number attribute (as text) | string YSizeText
StyleOrigin | Link attribute | SpeosDes.OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleOrigin StyleOrigin
StyleAxis | Link attribute | SpeosDes.OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleAxis StyleAxis
ReverseStyleAxis | Boolean attribute | bool ReverseStyleAxis
StyleOrientation | Link attribute | SpeosDes.OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleOrientation StyleOrientation
ReverseStyleOrientation | Boolean attribute | bool ReverseStyleOrientation
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleOrigin

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleOrientation

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## OpticalFeatureStyleStripes

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.OpticalFeatureStyleStripes> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.OpticalFeatureStyleStripes Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Curves | Links attribute | SpeosDes.OpticalFeatureStyleStripes.OpticalFeatureStyleStripesCurves Curves
StyleOrigin | Link attribute | SpeosDes.OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleOrigin StyleOrigin
StyleAxis | Link attribute | SpeosDes.OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleAxis StyleAxis
ReverseStyleAxis | Boolean attribute | bool ReverseStyleAxis
StyleOrientation | Link attribute | SpeosDes.OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleOrientation StyleOrientation
ReverseStyleOrientation | Boolean attribute | bool ReverseStyleOrientation
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### OpticalFeatureStyleStripes.OpticalFeatureStyleStripesCurves

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

### OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleOrigin

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleOrientation

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## OpticalGroup

### Method

Name | Description | Syntax 
--- | --- | --- 
AddFaceFromCoordinates |  | void AddFaceFromCoordinates(int xCoordinate, int yCoordinate)
AddFacesFromXCoordinate |  | void AddFacesFromXCoordinate(int xCoordinate)
AddFacesFromYCoordinate |  | void AddFacesFromYCoordinate(int yCoordinate)
GetGroupTypePossibleValues | String list attribute: List possible values | IEnumerable<string> GetGroupTypePossibleValues()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.OpticalGroup> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.OpticalGroup Find(string objectName)


### Property

Name | Description | Syntax 
--- | --- | --- 
Shift | Number attribute | double Shift
ShiftText | Number attribute (as text) | string ShiftText
GeometryOrientation | Enum attribute | SpeosDes.OpticalGroup.EnumGeometryOrientation GeometryOrientation
GeometryOrientationIndex | Enum attribute (as index) | int GeometryOrientationIndex
Focal | Number attribute | double Focal
FocalText | Number attribute (as text) | string FocalText
ParabolicApproximation | Boolean attribute | bool ParabolicApproximation
XTiltAngle | Number attribute | double XTiltAngle
XTiltAngleText | Number attribute (as text) | string XTiltAngleText
YTiltAngle | Number attribute | double YTiltAngle
YTiltAngleText | Number attribute (as text) | string YTiltAngleText
Angle | Number attribute | double Angle
AngleText | Number attribute (as text) | string AngleText
XRadius | Number attribute | double XRadius
XRadiusText | Number attribute (as text) | string XRadiusText
YRadius | Number attribute | double YRadius
YRadiusText | Number attribute (as text) | string YRadiusText
RadialRadius | Number attribute | double RadialRadius
RadialRadiusText | Number attribute (as text) | string RadialRadiusText
StartRadius | Number attribute | double StartRadius
StartRadiusText | Number attribute (as text) | string StartRadiusText
EndRadius | Number attribute | double EndRadius
EndRadiusText | Number attribute (as text) | string EndRadiusText
Radius | Number attribute | double Radius
RadiusText | Number attribute (as text) | string RadiusText
XStart | Number attribute | double XStart
XStartText | Number attribute (as text) | string XStartText
XEnd | Number attribute | double XEnd
XEndText | Number attribute (as text) | string XEndText
YStart | Number attribute | double YStart
YStartText | Number attribute (as text) | string YStartText
YEnd | Number attribute | double YEnd
YEndText | Number attribute (as text) | string YEndText
CustomSpread | Boolean attribute | bool CustomSpread
CenteredOnXSpread | Boolean attribute | bool CenteredOnXSpread
CenteredOnYSpread | Boolean attribute | bool CenteredOnYSpread
SmoothingSector | Boolean attribute | bool SmoothingSector
XCenter | Number attribute | double XCenter
XCenterText | Number attribute (as text) | string XCenterText
YCenter | Number attribute | double YCenter
YCenterText | Number attribute (as text) | string YCenterText
SpreadStart | Number attribute | double SpreadStart
SpreadStartText | Number attribute (as text) | string SpreadStartText
SpreadEnd | Number attribute | double SpreadEnd
SpreadEndText | Number attribute (as text) | string SpreadEndText
Tilt | Number attribute | double Tilt
TiltText | Number attribute (as text) | string TiltText
YSize | Number attribute | double YSize
YSizeText | Number attribute (as text) | string YSizeText
XAngle | Number attribute | double XAngle
XAngleText | Number attribute (as text) | string XAngleText
XPosition | Number attribute | double XPosition
XPositionText | Number attribute (as text) | string XPositionText
XPositionMin | Number attribute | double XPositionMin
XPositionMinText | Number attribute (as text) | string XPositionMinText
XPositionMax | Number attribute | double XPositionMax
XPositionMaxText | Number attribute (as text) | string XPositionMaxText
XAngleMin | Number attribute | double XAngleMin
XAngleMinText | Number attribute (as text) | string XAngleMinText
XAngleMax | Number attribute | double XAngleMax
XAngleMaxText | Number attribute (as text) | string XAngleMaxText
YAngle | Number attribute | double YAngle
YAngleText | Number attribute (as text) | string YAngleText
YPosition | Number attribute | double YPosition
YPositionText | Number attribute (as text) | string YPositionText
YPositionMin | Number attribute | double YPositionMin
YPositionMinText | Number attribute (as text) | string YPositionMinText
YPositionMax | Number attribute | double YPositionMax
YPositionMaxText | Number attribute (as text) | string YPositionMaxText
YAngleMin | Number attribute | double YAngleMin
YAngleMinText | Number attribute (as text) | string YAngleMinText
YAngleMax | Number attribute | double YAngleMax
YAngleMaxText | Number attribute (as text) | string YAngleMaxText
XSpread | Number attribute | double XSpread
XSpreadText | Number attribute (as text) | string XSpreadText
YSpread | Number attribute | double YSpread
YSpreadText | Number attribute (as text) | string YSpreadText
AdvancedMode | Boolean attribute | bool AdvancedMode
SCOHControlPlanes | Children attribute | SpeosDes.OpticalGroup.OpticalGroupSCOHControlPlanes SCOHControlPlanes
SCOVControlPlanes | Children attribute | SpeosDes.OpticalGroup.OpticalGroupSCOVControlPlanes SCOVControlPlanes
StartAngle | Number attribute | double StartAngle
StartAngleText | Number attribute (as text) | string StartAngleText
EndAngle | Number attribute | double EndAngle
EndAngleText | Number attribute (as text) | string EndAngleText
XRadiusPrism | Number attribute | double XRadiusPrism
XRadiusPrismText | Number attribute (as text) | string XRadiusPrismText
YRadiusPrism | Number attribute | double YRadiusPrism
YRadiusPrismText | Number attribute (as text) | string YRadiusPrismText
Height | Number attribute | double Height
HeightText | Number attribute (as text) | string HeightText
FaceList | Links attribute | SpeosDes.OpticalGroup.OpticalGroupFaceList FaceList
GroupType | String list selection attribute | string GroupType
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### OpticalGroup.OpticalGroupSCOHControlPlanes

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPlane> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPlane AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPlane> List
Item | Children attribute: Get child by index | SpeosDes.ControlPlane Item

### OpticalGroup.OpticalGroupSCOVControlPlanes

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPlane> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPlane AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPlane> List
Item | Children attribute: Get child by index | SpeosDes.ControlPlane Item

### OpticalGroup.OpticalGroupFaceList

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Links attribute: Link to an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Links attribute: Link to an array of document objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
Clear | Links attribute: Clear the list of links | void Clear()
SelectAll | Links attribute: Link to all compatible objects in the active context | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Links attribute: Get the pointed document objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Item | Links attribute: Get a pointed document object by index | SpaceClaim.Api.V241.IDocObject Item
Count | Links attribute: Get the links count | int Count

## ParabolicSurface

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.ParabolicSurface> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.ParabolicSurface Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.ParabolicSurface Create(object parent)
Create | Create a new object in the active context | SpeosDes.ParabolicSurface Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.ParabolicSurface Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.ParabolicSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
OriginPoint | Link attribute | SpeosDes.ParabolicSurface.ParabolicSurfaceOriginPoint OriginPoint
Axis | Link attribute | SpeosDes.ParabolicSurface.ParabolicSurfaceAxis Axis
OrientationAxis | Link attribute | SpeosDes.ParabolicSurface.ParabolicSurfaceOrientationAxis OrientationAxis
Size | Number attribute | double Size
SizeText | Number attribute (as text) | string SizeText
BuildType | Enum attribute | SpeosDes.ParabolicSurface.EnumBuildType BuildType
BuildTypeIndex | Enum attribute (as index) | int BuildTypeIndex
Focal | Number attribute | double Focal
FocalText | Number attribute (as text) | string FocalText
FocalOut | Number attribute | double FocalOut
FocalOutText | Number attribute (as text) | string FocalOutText
PassingPoint | Link attribute | SpeosDes.ParabolicSurface.ParabolicSurfacePassingPoint PassingPoint
ReverseOpticalAxis | Boolean attribute | bool ReverseOpticalAxis
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### ParabolicSurface.ParabolicSurfaceOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ParabolicSurface.ParabolicSurfaceAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ParabolicSurface.ParabolicSurfaceOrientationAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ParabolicSurface.ParabolicSurfacePassingPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## PER

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.PER> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.PER Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.PER Create(object parent)
Create | Create a new object in the active context | SpeosDes.PER Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.PER Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.PER CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
SourceType | Enum attribute | SpeosDes.PER.EnumSourceType SourceType
SourceTypeIndex | Enum attribute (as index) | int SourceTypeIndex
SourcePoint | Link attribute | SpeosDes.PER.PERSourcePoint SourcePoint
SourceSupport | Link attribute | SpeosDes.PER.PERSourceSupport SourceSupport
ImagePoint | Link attribute | SpeosDes.PER.PERImagePoint ImagePoint
OrientationAxis | Link attribute | SpeosDes.PER.PEROrientationAxis OrientationAxis
ReverseOrientationAxisDirection | Boolean attribute | bool ReverseOrientationAxisDirection
FocalLength | Number attribute | double FocalLength
FocalLengthText | Number attribute (as text) | string FocalLengthText
Hole | Boolean attribute | bool Hole
HoleDiameter | Number attribute | double HoleDiameter
HoleDiameterText | Number attribute (as text) | string HoleDiameterText
Symmetry | Enum attribute | SpeosDes.PER.EnumSymmetry Symmetry
SymmetryIndex | Enum attribute (as index) | int SymmetryIndex
AngularSections | Children CustomObjects attribute | SpeosDes.PER.PERAngularSections AngularSections
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### PER.PERSourcePoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### PER.PERSourceSupport

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### PER.PERImagePoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### PER.PEROrientationAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### PER.PERAngularSections

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.PERAngularSection> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.PERAngularSection AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.PERAngularSection> List
Item | Get child CustomObject by index | SpeosDes.PERAngularSection Item
Item | Get child CustomObject by index | SpeosDes.PERAngularSection Item

## PERAngularSection

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.PERAngularSection> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.PERAngularSection Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FittingControlPlane | Call the 'Fitting control plane' command. Returns 'false' if this action is unavailable in the current state of the object. | bool FittingControlPlane()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Angle | Number attribute | double Angle
AngleText | Number attribute (as text) | string AngleText
ControlPlanes | Children attribute | SpeosDes.PERAngularSection.PERAngularSectionControlPlanes ControlPlanes
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### PERAngularSection.PERAngularSectionControlPlanes

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ControlPlane> GetEnumerator()
AddNew | Children attribute: Create a new child object | SpeosDes.ControlPlane AddNew(int insertIndex)
Delete | Children attribute: Delete a child object by index | bool Delete(int index)
Clear | Children attribute: Empty the list | void Clear()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ControlPlane> List
Item | Children attribute: Get child by index | SpeosDes.ControlPlane Item

## PostProcessing

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.PostProcessing> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.PostProcessing Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.PostProcessing Create(object parent)
Create | Create a new object in the active context | SpeosDes.PostProcessing Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.PostProcessing Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.PostProcessing CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
AssociatedFeature | Link attribute | SpeosDes.PostProcessing.PostProcessingAssociatedFeature AssociatedFeature
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### PostProcessing.PostProcessingAssociatedFeature

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## ProjectionLens

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.ProjectionLens> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.ProjectionLens Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.ProjectionLens Create(object parent)
Create | Create a new object in the active context | SpeosDes.ProjectionLens Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.ProjectionLens Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.ProjectionLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
FocalPoint | Link attribute | SpeosDes.ProjectionLens.ProjectionLensFocalPoint FocalPoint
OpticalAxis | Link attribute | SpeosDes.ProjectionLens.ProjectionLensOpticalAxis OpticalAxis
OpticalAxisReverse | Boolean attribute | bool OpticalAxisReverse
BackFocalLength | Number attribute | double BackFocalLength
BackFocalLengthText | Number attribute (as text) | string BackFocalLengthText
BackFaceType | Enum attribute | SpeosDes.ProjectionLens.EnumBackFaceType BackFaceType
BackFaceTypeIndex | Enum attribute (as index) | int BackFaceTypeIndex
FrontFaceType | Enum attribute | SpeosDes.ProjectionLens.EnumFrontFaceType FrontFaceType
FrontFaceTypeIndex | Enum attribute (as index) | int FrontFaceTypeIndex
ZernikeOrientation | Link attribute | SpeosDes.ProjectionLens.ProjectionLensZernikeOrientation ZernikeOrientation
ZernikeOrientationReverse | Boolean attribute | bool ZernikeOrientationReverse
ThicknessSetType | Enum attribute | SpeosDes.ProjectionLens.EnumThicknessSetType ThicknessSetType
ThicknessSetTypeIndex | Enum attribute (as index) | int ThicknessSetTypeIndex
EdgeThickness | Number attribute | double EdgeThickness
EdgeThicknessText | Number attribute (as text) | string EdgeThicknessText
EdgeThicknessOut | Number attribute | double EdgeThicknessOut
EdgeThicknessOutText | Number attribute (as text) | string EdgeThicknessOutText
LensThickness | Number attribute | double LensThickness
LensThicknessText | Number attribute (as text) | string LensThicknessText
LensThicknessOut | Number attribute | double LensThicknessOut
LensThicknessOutText | Number attribute (as text) | string LensThicknessOutText
ConstructionType | Enum attribute | SpeosDes.ProjectionLens.EnumConstructionType ConstructionType
ConstructionTypeIndex | Enum attribute (as index) | int ConstructionTypeIndex
CustomRevolution | Boolean attribute | bool CustomRevolution
RevolutionOriginPoint | Link attribute | SpeosDes.ProjectionLens.ProjectionLensRevolutionOriginPoint RevolutionOriginPoint
RevolutionAxis | Link attribute | SpeosDes.ProjectionLens.ProjectionLensRevolutionAxis RevolutionAxis
RevolutionAxisReverse | Boolean attribute | bool RevolutionAxisReverse
ExtrusionAxis | Link attribute | SpeosDes.ProjectionLens.ProjectionLensExtrusionAxis ExtrusionAxis
ExtrusionAxisReverse | Boolean attribute | bool ExtrusionAxisReverse
ExtrusionStart | Number attribute | double ExtrusionStart
ExtrusionStartText | Number attribute (as text) | string ExtrusionStartText
ExtrusionEnd | Number attribute | double ExtrusionEnd
ExtrusionEndText | Number attribute (as text) | string ExtrusionEndText
RevolutionStart | Number attribute | double RevolutionStart
RevolutionStartText | Number attribute (as text) | string RevolutionStartText
RevolutionEnd | Number attribute | double RevolutionEnd
RevolutionEndText | Number attribute (as text) | string RevolutionEndText
BackFaceApertureDiameter | Number attribute | double BackFaceApertureDiameter
BackFaceApertureDiameterText | Number attribute (as text) | string BackFaceApertureDiameterText
BackRadiusCurvature | Number attribute | double BackRadiusCurvature
BackRadiusCurvatureText | Number attribute (as text) | string BackRadiusCurvatureText
BackConicConstant | Number attribute | double BackConicConstant
BackConicConstantText | Number attribute (as text) | string BackConicConstantText
BackFaceRefractiveIndex | Number attribute | double BackFaceRefractiveIndex
BackFaceRefractiveIndexText | Number attribute (as text) | string BackFaceRefractiveIndexText
BackFaceFresnelMode | Enum attribute | SpeosDes.ProjectionLens.EnumBackFaceFresnelMode BackFaceFresnelMode
BackFaceFresnelModeIndex | Enum attribute (as index) | int BackFaceFresnelModeIndex
BackFaceStep | Number attribute | double BackFaceStep
BackFaceStepText | Number attribute (as text) | string BackFaceStepText
BackFaceHeight | Number attribute | double BackFaceHeight
BackFaceHeightText | Number attribute (as text) | string BackFaceHeightText
BackFaceDraftAngle | Number attribute | double BackFaceDraftAngle
BackFaceDraftAngleText | Number attribute (as text) | string BackFaceDraftAngleText
BackFaceAsphericals | Children attribute | SpeosDes.ProjectionLens.ProjectionLensBackFaceAsphericals BackFaceAsphericals
BackFaceZernikeCoefficients | Children attribute | SpeosDes.ProjectionLens.ProjectionLensBackFaceZernikeCoefficients BackFaceZernikeCoefficients
FrontFaceApertureDiameter | Number attribute | double FrontFaceApertureDiameter
FrontFaceApertureDiameterText | Number attribute (as text) | string FrontFaceApertureDiameterText
FrontRadiusCurvature | Number attribute | double FrontRadiusCurvature
FrontRadiusCurvatureText | Number attribute (as text) | string FrontRadiusCurvatureText
FrontConicConstant | Number attribute | double FrontConicConstant
FrontConicConstantText | Number attribute (as text) | string FrontConicConstantText
FrontFaceRefractiveIndex | Number attribute | double FrontFaceRefractiveIndex
FrontFaceRefractiveIndexText | Number attribute (as text) | string FrontFaceRefractiveIndexText
FrontFaceFresnelMode | Enum attribute | SpeosDes.ProjectionLens.EnumFrontFaceFresnelMode FrontFaceFresnelMode
FrontFaceFresnelModeIndex | Enum attribute (as index) | int FrontFaceFresnelModeIndex
FrontFaceStep | Number attribute | double FrontFaceStep
FrontFaceStepText | Number attribute (as text) | string FrontFaceStepText
FrontFaceHeight | Number attribute | double FrontFaceHeight
FrontFaceHeightText | Number attribute (as text) | string FrontFaceHeightText
FrontFaceDraftAngle | Number attribute | double FrontFaceDraftAngle
FrontFaceDraftAngleText | Number attribute (as text) | string FrontFaceDraftAngleText
FrontFaceAsphericals | Children attribute | SpeosDes.ProjectionLens.ProjectionLensFrontFaceAsphericals FrontFaceAsphericals
FrontFaceZernikeCoefficients | Children attribute | SpeosDes.ProjectionLens.ProjectionLensFrontFaceZernikeCoefficients FrontFaceZernikeCoefficients
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### ProjectionLens.ProjectionLensFocalPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ProjectionLens.ProjectionLensOpticalAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ProjectionLens.ProjectionLensZernikeOrientation

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ProjectionLens.ProjectionLensRevolutionOriginPoint

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ProjectionLens.ProjectionLensRevolutionAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ProjectionLens.ProjectionLensExtrusionAxis

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### ProjectionLens.ProjectionLensBackFaceAsphericals

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.Aspherics> GetEnumerator()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.Aspherics> List
Item | Children attribute: Get child by index | SpeosDes.Aspherics Item

### ProjectionLens.ProjectionLensBackFaceZernikeCoefficients

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ZernikeCoefficient> GetEnumerator()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ZernikeCoefficient> List
Item | Children attribute: Get child by index | SpeosDes.ZernikeCoefficient Item

### ProjectionLens.ProjectionLensFrontFaceAsphericals

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.Aspherics> GetEnumerator()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.Aspherics> List
Item | Children attribute: Get child by index | SpeosDes.Aspherics Item

### ProjectionLens.ProjectionLensFrontFaceZernikeCoefficients

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Children attribute: Set from an array of script objects | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)
Set | Children attribute: Set from an array of document objects | bool Set(SpaceClaim.Api.V241.IDocObject[] selectedObjects)
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | bool Set(System.Object[] docObjectsFromPreviousVersion)
GetEnumerator | Children attribute: Get children enumeration | IEnumerator<SpeosDes.ZernikeCoefficient> GetEnumerator()
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | void SelectAll()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObjects | Children attribute: Get linked objects | IReadOnlyCollection<SpaceClaim.Api.V241.IDocObject> LinkedObjects
Count | Children attribute: Get children count | int Count
List | Children attribute: Get children collection | IReadOnlyCollection<SpeosDes.ZernikeCoefficient> List
Item | Children attribute: Get child by index | SpeosDes.ZernikeCoefficient Item

## RectangularLens

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.RectangularLens> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.RectangularLens Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.RectangularLens Create(object parent)
Create | Create a new object in the active context | SpeosDes.RectangularLens Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.RectangularLens Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.RectangularLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleRectangular Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.RectangularLens.RectangularLensGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### RectangularLens.RectangularLensGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## RectangularSurface

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.RectangularSurface> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.RectangularSurface Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.RectangularSurface Create(object parent)
Create | Create a new object in the active context | SpeosDes.RectangularSurface Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.RectangularSurface Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.RectangularSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleRectangular Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.RectangularSurface.RectangularSurfaceGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### RectangularSurface.RectangularSurfaceGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## ResultHOD

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.ResultHOD> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.ResultHOD Find(string objectName)


### Method

Name | Description | Syntax 
--- | --- | --- 
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
ResultType | Enum attribute | SpeosDes.ResultHOD.EnumResultType ResultType
ResultTypeIndex | Enum attribute (as index) | int ResultTypeIndex
FullPath | Get the result file full path | string FullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

## StripesLens

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.StripesLens> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.StripesLens Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.StripesLens Create(object parent)
Create | Create a new object in the active context | SpeosDes.StripesLens Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.StripesLens Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.StripesLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleStripes Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.StripesLens.StripesLensGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### StripesLens.StripesLensGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## StripesSurface

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.StripesSurface> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.StripesSurface Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.StripesSurface Create(object parent)
Create | Create a new object in the active context | SpeosDes.StripesSurface Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.StripesSurface Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.StripesSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
AddGroup | Call the 'AddGroup' command. | void AddGroup()
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
Style | Child CustomObject attribute | SpeosDes.OpticalFeatureStyleStripes Style
General | Child CustomObject attribute | SpeosDes.OpticalFeatureGeneral General
Groups | Children CustomObjects attribute | SpeosDes.StripesSurface.StripesSurfaceGroups Groups
Manufacturing | Child CustomObject attribute | SpeosDes.OpticalFeatureManufacturing Manufacturing
ExcelFile | File attribute | Fou.Utils.ValueObjects.FilePath ExcelFile
ExcelFileFullPath | File attribute (absolute full path) | string ExcelFileFullPath
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### StripesSurface.StripesSurfaceGroups

### Method

Name | Description | Syntax 
--- | --- | --- 
GetEnumerator | Get children CustomObjects enumeration | IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()
AddNew | Create a new child CustomObject | SpeosDes.OpticalGroup AddNew(int insertIndex)
Delete | Delete a child CustomObject by index | void Delete(int index)


### Property

Name | Description | Syntax 
--- | --- | --- 
Count | Get children CustomObjects count | int Count
List | Get children CustomObjects list | IReadOnlyCollection<SpeosDes.OpticalGroup> List
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item
Item | Get child CustomObject by index | SpeosDes.OpticalGroup Item

## TIRLens

### Static method

Name | Description | Syntax 
--- | --- | --- 
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | IEnumerable<SpeosDes.TIRLens> FromSelection(IEnumerable<SpaceClaim.Api.V241.IDocObject> selectionItems)
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | SpeosDes.TIRLens Find(string objectName)
Create | Create a new object of this type under the specified parent component | SpeosDes.TIRLens Create(object parent)
Create | Create a new object in the active context | SpeosDes.TIRLens Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
Clone | Create a copy of this object in the active context | SpeosDes.TIRLens Clone()
CopyTo | Create a copy of this object and paste it to the specified destination | SpeosDes.TIRLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | object FindOccurrenceInActivePart()
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | SpaceClaim.Api.V241.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V241.IDocObject contextObject)
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | string ToString()
Delete | Delete this object | bool Delete()
GetChildSubjects | Retrieve all children as DocObjects | IEnumerable<SpaceClaim.Api.V241.CustomObject> GetChildSubjects()
GetChildren | Retrieve all direct children of a given type | IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()
Compute | Execute the Compute command on the object | void Compute()
PublishParameter | Publish or un-publish a number attribute as driving parameter | void PublishParameter(string fieldName, bool trueToPublish)
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | void PublishAllParametersToWorkbench(bool trueToPublish)
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | void ApplyPreset(string presetFilePath)
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | string ExportToPreset(string filePath)


### Property

Name | Description | Syntax 
--- | --- | --- 
BuildType | Enum attribute | SpeosDes.TIRLens.EnumBuildType BuildType
BuildTypeIndex | Enum attribute (as index) | int BuildTypeIndex
Source | Link attribute | SpeosDes.TIRLens.TIRLensSource Source
SupportPlane | Link attribute | SpeosDes.TIRLens.TIRLensSupportPlane SupportPlane
InputRadius | Number attribute | double InputRadius
InputRadiusText | Number attribute (as text) | string InputRadiusText
Depth | Number attribute | double Depth
DepthText | Number attribute (as text) | string DepthText
DraftAngle | Number attribute | double DraftAngle
DraftAngleText | Number attribute (as text) | string DraftAngleText
SupportThickness | Number attribute | double SupportThickness
SupportThicknessText | Number attribute (as text) | string SupportThicknessText
RefractiveIndex | Number attribute | double RefractiveIndex
RefractiveIndexText | Number attribute (as text) | string RefractiveIndexText
Thickness | Number attribute | double Thickness
ThicknessText | Number attribute (as text) | string ThicknessText
ThicknessOut | Number attribute | double ThicknessOut
ThicknessOutText | Number attribute (as text) | string ThicknessOutText
OutputRadius | Number attribute | double OutputRadius
OutputRadiusText | Number attribute (as text) | string OutputRadiusText
OutputRadiusOut | Number attribute | double OutputRadiusOut
OutputRadiusOutText | Number attribute (as text) | string OutputRadiusOutText
Focal | Number attribute | double Focal
FocalText | Number attribute (as text) | string FocalText
ReverseDirection | Boolean attribute | bool ReverseDirection
Spread | Number attribute | double Spread
SpreadText | Number attribute (as text) | string SpreadText
SpreadBehavior | Enum attribute | SpeosDes.TIRLens.EnumSpreadBehavior SpreadBehavior
SpreadBehaviorIndex | Enum attribute (as index) | int SpreadBehaviorIndex
SpreadControl | Number attribute | double SpreadControl
SpreadControlText | Number attribute (as text) | string SpreadControlText
Subject | Get the underlying CustomObject, associated to the API object wrapper | SpaceClaim.Api.V241.CustomObject Subject
Name | Get or Set the name of the object | string Name
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | bool Visible
StatusInfo | Get the status of the object (warning or error message) | string StatusInfo
IsUpToDate | Ask if the object was modified since its last successful computation | bool IsUpToDate

### TIRLens.TIRLensSource

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

### TIRLens.TIRLensSupportPlane

### Method

Name | Description | Syntax 
--- | --- | --- 
Set | Link attribute: Set the link to a script object | bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject selectedObject)
Set | Link attribute: Set the link to a DocObject | bool Set(SpaceClaim.Api.V241.IDocObject selectedObject)
Set | Link attribute: Set the link to an object (IDocObject type from unspecified version) | bool Set(object docObjectFromPreviousVersion)
Clear | Link attribute: Clear the link | void Clear()


### Property

Name | Description | Syntax 
--- | --- | --- 
LinkedObject | Link attribute: Get the pointed object | SpaceClaim.Api.V241.IDocObject LinkedObject

## ZernikeCoefficient

### Static method

Name | Description | Syntax 
--- | --- | --- 
Create | Create a new object of this type | SpeosDes.ZernikeCoefficient Create()


### Method

Name | Description | Syntax 
--- | --- | --- 
ToString |  | string ToString()


### Property

Name | Description | Syntax 
--- | --- | --- 
Index | Number attribute | int Index
IndexText | Number attribute (as text) | string IndexText
Value | Number attribute | double Value
ValueText | Number attribute (as text) | string ValueText


## SpeosAsm

## CADUpdate

### Static method

Name | Description | Syntax 
--- | --- | --- 
Import | Import an external CAD file (CATProduct, CATPart, prt...) under the target Part's Component. Use 'null' value for the 'targetPart' parameter to import in the active Part. | bool Import(string externalCadFilePath, object targetPart)
Import | Import an external CAD file (CATProduct, CATPart, prt...) under the target Part's Component. Use 'null' value for the 'targetPart' parameter to import in the active Part. | bool Import(string externalCadFilePath, SpaceClaim.Api.V241.Part targetPart)
GetImportedPartsUnder | Get all Parts that are associated to a CAD-Import process, starting from the given Part. | IEnumerable<object> GetImportedPartsUnder(object targetPart)
GetImportedPartsUnder | Get all Parts that are associated to a CAD-Import process, starting from the given Part. | IEnumerable<SpaceClaim.Api.V241.Part> GetImportedPartsUnder(SpaceClaim.Api.V241.Part targetPart)
GetImportedPartsUnder | Get all Parts that are associated to a CAD-Import process, starting from the given Component. | IEnumerable<SpaceClaim.Api.V241.Part> GetImportedPartsUnder(SpaceClaim.Api.V241.Component component)
GetLastImportedFilePath | Get the file path previously used to import the given Part. Returns 'null' if no CAD-Import information is found for this Part. | string GetLastImportedFilePath(object targetPart)
GetLastImportedFilePath | Get the file path previously used to import the given Part. Returns 'null' if no CAD-Import information is found for this Part. | string GetLastImportedFilePath(SpaceClaim.Api.V241.Part targetPart)
GetLastImportedFileDateTime | Get the last write DateTime of the imported file at the time when the part was imported or updated. Returns 'DateTime.MinValue' if no CAD-Import information is found for this Part. | System.DateTime GetLastImportedFileDateTime(object targetPart)
GetLastImportedFileDateTime | Get the last write DateTime of the imported file at the time when the part was imported or updated. Returns 'DateTime.MinValue' if no CAD-Import information is found for this Part. | System.DateTime GetLastImportedFileDateTime(SpaceClaim.Api.V241.Part targetPart)
Update | Update a Part resulting from a previous CAD-Import with the same file path. Returns 'true' if and only if the Part was updated. | bool Update(object targetPart, bool skipPartsWithUnknownPath, bool skipUnmodifiedFiles)
Update | Update a Part resulting from a previous CAD-Import with the same file path. Returns 'true' if and only if the Part was updated. | bool Update(SpaceClaim.Api.V241.Part targetPart, bool skipPartsWithUnknownPath, bool skipUnmodifiedFiles)
UpdateAll | Update all previously imported Parts from a given root Part. Returns 'true' if and only if at least one Part has been updated. | bool UpdateAll(object targetPart, bool skipPartsWithUnknownPath, bool skipUnmodifiedFiles)
UpdateAll | Update all previously imported Parts from a given root Part. Returns 'true' if and only if at least one Part has been updated. | bool UpdateAll(SpaceClaim.Api.V241.Part targetPart, bool skipPartsWithUnknownPath, bool skipUnmodifiedFiles)

