# SpeosDes

## Command

### Static method

Name | Description | Syntax
--- | --- | ---
GetErrorStatus | Get the error status of the given object | `string GetErrorStatus(object docObject)`
IsUpToDate | Ask if the given object was modified since its last successful computation | `bool IsUpToDate(object docObject)`
SetActiveSelection | Set the active selection from a collection of DocObjects | `void SetActiveSelection(ICollection<object> selectedObjects)`
GetSpeosObjectsInActivePart | Get the Speos objects contained in the active Part | `IEnumerable<object> GetSpeosObjectsInActivePart()`
Compute | Perform the computation of an array of objects | `void Compute(System.Object[] selectedObjects)`
Compute | Perform the computation of an array of DocObjects | `void Compute(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Compute | Perform the computation of an array of script objects | `void Compute(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
ComputeOnActiveSelection | Perform the computation of the active selection | `void ComputeOnActiveSelection()`

## Aspherics

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosDes.Aspherics Create()`

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

## CircularLens

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.CircularLens> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.CircularLens Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.CircularLens Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.CircularLens Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.CircularLens Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.CircularLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleCircular Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.CircularLens.CircularLensGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.CircularLens.CircularLensTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### CircularLens.CircularLensGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### CircularLens.CircularLensTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property
 
Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## CircularSurface

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.CircularSurface> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.CircularSurface Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.CircularSurface Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.CircularSurface Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.CircularSurface Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.CircularSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleCircular Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.CircularSurface.CircularSurfaceGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.CircularSurface.CircularSurfaceTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### CircularSurface.CircularSurfaceGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### CircularSurface.CircularSurfaceTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## ControlPlane

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosDes.ControlPlane Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
Position | Number attribute | `double Position`
PositionText | Number attribute (as text) | `string PositionText`
Defocus | Number attribute | `double Defocus`
DefocusText | Number attribute (as text) | `string DefocusText`
HorizontalSpread | Number attribute | `double HorizontalSpread`
HorizontalSpreadText | Number attribute (as text) | `string HorizontalSpreadText`
VerticalOrientation | Number attribute | `double VerticalOrientation`
VerticalOrientationText | Number attribute (as text) | `string VerticalOrientationText`
VerticalSpread | Number attribute | `double VerticalSpread`
VerticalSpreadText | Number attribute (as text) | `string VerticalSpreadText`
Tilt | Number attribute | `double Tilt`
TiltText | Number attribute (as text) | `string TiltText`

## ControlPointConfiguration

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosDes.ControlPointConfiguration Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
Position | Number attribute | `double Position`
PositionText | Number attribute (as text) | `string PositionText`
Value | Number attribute | `double Value`
ValueText | Number attribute (as text) | `string ValueText`

## EyeboxConfiguration

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosDes.EyeboxConfiguration Create()`

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
Weight | Number attribute | `double Weight`
WeightText | Number attribute (as text) | `string WeightText`

## FreeformLens

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.FreeformLens> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.FreeformLens Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.FreeformLens Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.FreeformLens Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.FreeformLens Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.FreeformLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
ConstructionType | Enum attribute | `SpeosDes.FreeformLens.EnumConstructionType ConstructionType`
ConstructionTypeIndex | Enum attribute (as index) | `int ConstructionTypeIndex`
FocalPoint | Link attribute | `SpeosDes.FreeformLens.FreeformLensFocalPoint FocalPoint`
OpticalAxis | Link attribute | `SpeosDes.FreeformLens.FreeformLensOpticalAxis OpticalAxis`
ReverseDirection | boolean attribute | `bool ReverseDirection`
RefractiveIndex | Number attribute | `double RefractiveIndex`
RefractiveIndexText | Number attribute (as text) | `string RefractiveIndexText`
FrontFace | Link attribute | `SpeosDes.FreeformLens.FreeformLensFrontFace FrontFace`
Thickness | Number attribute | `double Thickness`
ThicknessText | Number attribute (as text) | `string ThicknessText`
TargetDefinitionType | Enum attribute | `SpeosDes.FreeformLens.EnumTargetDefinitionType TargetDefinitionType`
TargetDefinitionTypeIndex | Enum attribute (as index) | `int TargetDefinitionTypeIndex`
TargetOrigin | Link attribute | `SpeosDes.FreeformLens.FreeformLensTargetOrigin TargetOrigin`
TargetXAxis | Link attribute | `SpeosDes.FreeformLens.FreeformLensTargetXAxis TargetXAxis`
TargetYAxis | Link attribute | `SpeosDes.FreeformLens.FreeformLensTargetYAxis TargetYAxis`
IntensityOpticalAxis | Link attribute | `SpeosDes.FreeformLens.FreeformLensIntensityOpticalAxis IntensityOpticalAxis`
ReverseIntensityOpticalAxisDirection | boolean attribute | `bool ReverseIntensityOpticalAxisDirection`
IntensityOrientationAxis | Link attribute | `SpeosDes.FreeformLens.FreeformLensIntensityOrientationAxis IntensityOrientationAxis`
ReverseIntensityOrientationAxisDirection | boolean attribute | `bool ReverseIntensityOrientationAxisDirection`
TargetType | Enum attribute | `SpeosDes.FreeformLens.EnumTargetType TargetType`
TargetTypeIndex | Enum attribute (as index) | `int TargetTypeIndex`
XTargetMax | Number attribute | `double XTargetMax`
XTargetMaxText | Number attribute (as text) | `string XTargetMaxText`
YTargetMax | Number attribute | `double YTargetMax`
YTargetMaxText | Number attribute (as text) | `string YTargetMaxText`
XTargetGaussian | Number attribute | `double XTargetGaussian`
XTargetGaussianText | Number attribute (as text) | `string XTargetGaussianText`
YTargetGaussian | Number attribute | `double YTargetGaussian`
YTargetGaussianText | Number attribute (as text) | `string YTargetGaussianText`
ImageFilePath | File attribute | `string ImageFilePath`
ImageFilePathFullPath | File attribute (absolute full path) | `string ImageFilePathFullPath`
TargetTypeIntensity | Enum attribute | `SpeosDes.FreeformLens.EnumTargetTypeIntensity TargetTypeIntensity`
TargetTypeIntensityIndex | Enum attribute (as index) | `int TargetTypeIntensityIndex`
IntensityXHalfSpread | Number attribute | `double IntensityXHalfSpread`
IntensityXHalfSpreadText | Number attribute (as text) | `string IntensityXHalfSpreadText`
IntensityYHalfSpread | Number attribute | `double IntensityYHalfSpread`
IntensityYHalfSpreadText | Number attribute (as text) | `string IntensityYHalfSpreadText`
IntensityXFWHMGaussian | Number attribute | `double IntensityXFWHMGaussian`
IntensityXFWHMGaussianText | Number attribute (as text) | `string IntensityXFWHMGaussianText`
IntensityYFWHMGaussian | Number attribute | `double IntensityYFWHMGaussian`
IntensityYFWHMGaussianText | Number attribute (as text) | `string IntensityYFWHMGaussianText`
IntensityFilePath | File attribute | `string IntensityFilePath`
IntensityFilePathFullPath | File attribute (absolute full path) | `string IntensityFilePathFullPath`
ImageContrast | Number attribute | `int ImageContrast`
ImageContrastText | Number attribute (as text) | `string ImageContrastText`
ResolutionFactor | Number attribute | `int ResolutionFactor`
ResolutionFactorText | Number attribute (as text) | `string ResolutionFactorText`
Threshold | Number attribute | `int Threshold`
ThresholdText | Number attribute (as text) | `string ThresholdText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### FreeformLens.FreeformLensFocalPoint

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

### FreeformLens.FreeformLensOpticalAxis

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

### FreeformLens.FreeformLensFrontFace

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

### FreeformLens.FreeformLensTargetOrigin

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

### FreeformLens.FreeformLensTargetXAxis

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

### FreeformLens.FreeformLensTargetYAxis

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

### FreeformLens.FreeformLensIntensityOpticalAxis

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

### FreeformLens.FreeformLensIntensityOrientationAxis

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

## FreestyleCircularLens

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.FreestyleCircularLens> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.FreestyleCircularLens Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.FreestyleCircularLens Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.FreestyleCircularLens Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.FreestyleCircularLens Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.FreestyleCircularLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleFreestyle Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.FreestyleCircularLens.FreestyleCircularLensGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.FreestyleCircularLens.FreestyleCircularLensTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### FreestyleCircularLens.FreestyleCircularLensGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### FreestyleCircularLens.FreestyleCircularLensTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## FreestyleCircularSurface

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.FreestyleCircularSurface> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.FreestyleCircularSurface Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.FreestyleCircularSurface Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.FreestyleCircularSurface Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.FreestyleCircularSurface Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.FreestyleCircularSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleFreestyle Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.FreestyleCircularSurface.FreestyleCircularSurfaceGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.FreestyleCircularSurface.FreestyleCircularSurfaceTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### FreestyleCircularSurface.FreestyleCircularSurfaceGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### FreestyleCircularSurface.FreestyleCircularSurfaceTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## FreestyleRectangularLens

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.FreestyleRectangularLens> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.FreestyleRectangularLens Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.FreestyleRectangularLens Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.FreestyleRectangularLens Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.FreestyleRectangularLens Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.FreestyleRectangularLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleFreestyle Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.FreestyleRectangularLens.FreestyleRectangularLensGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.FreestyleRectangularLens.FreestyleRectangularLensTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### FreestyleRectangularLens.FreestyleRectangularLensGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### FreestyleRectangularLens.FreestyleRectangularLensTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## FreestyleRectangularSurface

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.FreestyleRectangularSurface> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.FreestyleRectangularSurface Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.FreestyleRectangularSurface Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.FreestyleRectangularSurface Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.FreestyleRectangularSurface Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.FreestyleRectangularSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleFreestyle Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.FreestyleRectangularSurface.FreestyleRectangularSurfaceGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.FreestyleRectangularSurface.FreestyleRectangularSurfaceTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### FreestyleRectangularSurface.FreestyleRectangularSurfaceGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### FreestyleRectangularSurface.FreestyleRectangularSurfaceTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## HoneycombLens

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.HoneycombLens> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.HoneycombLens Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.HoneycombLens Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.HoneycombLens Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.HoneycombLens Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.HoneycombLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleHoneycomb Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.HoneycombLens.HoneycombLensGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.HoneycombLens.HoneycombLensTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### HoneycombLens.HoneycombLensGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### HoneycombLens.HoneycombLensTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## HUDOD

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.HUDOD> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.HUDOD Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.HUDOD Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.HUDOD Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.HUDOD Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.HUDOD CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
UpdateAdvancedParameters | Call the 'Update all parameters' command. Returns 'false' if this action is unavailable in the current state of the object. | `bool UpdateAdvancedParameters()`
GetResultFilePaths | Get the list of paths of all HUD Optical Design resulting files | System.String[] GetResultFilePaths()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
VehicleAxis | Link attribute | `SpeosDes.HUDOD.HUDODVehicleAxis VehicleAxis`
ReverseVehiculeAxisDirection | boolean attribute | `bool ReverseVehiculeAxisDirection`
TopAxis | Link attribute | `SpeosDes.HUDOD.HUDODTopAxis TopAxis`
ReverseTopAxisDirection | boolean attribute | `bool ReverseTopAxisDirection`
ManufacturingX | Number attribute | `int ManufacturingX`
ManufacturingXText | Number attribute (as text) | `string ManufacturingXText`
ManufacturingY | Number attribute | `int ManufacturingY`
ManufacturingYText | Number attribute (as text) | `string ManufacturingYText`
EyeboxCenter | Link attribute | `SpeosDes.HUDOD.HUDODEyeboxCenter EyeboxCenter`
EyeboxOrientationType | Enum attribute | `SpeosDes.HUDOD.EnumEyeboxOrientationType EyeboxOrientationType`
EyeboxOrientationTypeIndex | Enum attribute (as index) | `int EyeboxOrientationTypeIndex`
EBHorizontalSize | Number attribute | `double EBHorizontalSize`
EBHorizontalSizeText | Number attribute (as text) | `string EBHorizontalSizeText`
EBHorizontalSampling | Number attribute | `int EBHorizontalSampling`
EBHorizontalSamplingText | Number attribute (as text) | `string EBHorizontalSamplingText`
EBHorizontalResolution | Number attribute | `double EBHorizontalResolution`
EBHorizontalResolutionText | Number attribute (as text) | `string EBHorizontalResolutionText`
EBVerticalSize | Number attribute | `double EBVerticalSize`
EBVerticalSizeText | Number attribute (as text) | `string EBVerticalSizeText`
EBVerticalSampling | Number attribute | `int EBVerticalSampling`
EBVerticalSamplingText | Number attribute (as text) | `string EBVerticalSamplingText`
EBVerticalResolution | Number attribute | `double EBVerticalResolution`
EBVerticalResolutionText | Number attribute (as text) | `string EBVerticalResolutionText`
EyeboxConfigPositionDirectionType | Enum attribute | `SpeosDes.HUDOD.EnumEyeboxConfigPositionDirectionType EyeboxConfigPositionDirectionType`
EyeboxConfigPositionDirectionTypeIndex | Enum attribute (as index) | `int EyeboxConfigPositionDirectionTypeIndex`
EBConfigurations | Children attribute | `SpeosDes.HUDOD.HUDODEBConfigurations EBConfigurations`
TIVirtualImageDistance | Number attribute | `double TIVirtualImageDistance`
TIVirtualImageDistanceText | Number attribute (as text) | `string TIVirtualImageDistanceText`
TILookOverAngle | Number attribute | `double TILookOverAngle`
TILookOverAngleText | Number attribute (as text) | `string TILookOverAngleText`
TILookDownAngle | Number attribute | `double TILookDownAngle`
TILookDownAngleText | Number attribute (as text) | `string TILookDownAngleText`
TargetImageModeType | Enum attribute | `SpeosDes.HUDOD.EnumTargetImageModeType TargetImageModeType`
TargetImageModeTypeIndex | Enum attribute (as index) | `int TargetImageModeTypeIndex`
TIHorizontalSize | Number attribute | `double TIHorizontalSize`
TIHorizontalSizeText | Number attribute (as text) | `string TIHorizontalSizeText`
TIVerticalSize | Number attribute | `double TIVerticalSize`
TIVerticalSizeText | Number attribute (as text) | `string TIVerticalSizeText`
TIHorizontalFOV | Number attribute | `double TIHorizontalFOV`
TIHorizontalFOVText | Number attribute (as text) | `string TIHorizontalFOVText`
TIVerticalFOV | Number attribute | `double TIVerticalFOV`
TIVerticalFOVText | Number attribute (as text) | `string TIVerticalFOVText`
WindshieldInnerSurface | Link attribute | `SpeosDes.HUDOD.HUDODWindshieldInnerSurface WindshieldInnerSurface`
Projectors | Children attribute | `SpeosDes.HUDOD.HUDODProjectors Projectors`
PGUHorizontalSampling | Number attribute | `int PGUHorizontalSampling`
PGUHorizontalSamplingText | Number attribute (as text) | `string PGUHorizontalSamplingText`
PGUVerticalSampling | Number attribute | `int PGUVerticalSampling`
PGUVerticalSamplingText | Number attribute (as text) | `string PGUVerticalSamplingText`
PGUCharacteristicsType | Enum attribute | `SpeosDes.HUDOD.EnumPGUCharacteristicsType PGUCharacteristicsType`
PGUCharacteristicsTypeIndex | Enum attribute (as index) | `int PGUCharacteristicsTypeIndex`
PGUHorizontalSize | Number attribute | `double PGUHorizontalSize`
PGUHorizontalSizeText | Number attribute (as text) | `string PGUHorizontalSizeText`
PGUHorizontalResolution | Number attribute | `int PGUHorizontalResolution`
PGUHorizontalResolutionText | Number attribute (as text) | `string PGUHorizontalResolutionText`
PGUVerticalSize | Number attribute | `double PGUVerticalSize`
PGUVerticalSizeText | Number attribute (as text) | `string PGUVerticalSizeText`
PGUVerticalResolution | Number attribute | `int PGUVerticalResolution`
PGUVerticalResolutionText | Number attribute (as text) | `string PGUVerticalResolutionText`
AdvancedParameters | Access the HUD Optical Design dynamic parameters | `SpeosDes.HUDOD.DynamicParametersAttribute AdvancedParameters`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### HUDOD.HUDODVehicleAxis

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

### HUDOD.HUDODTopAxis

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

### HUDOD.HUDODEyeboxCenter

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

### HUDOD.HUDODEBConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.EyeboxConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.EyeboxConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.EyeboxConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.EyeboxConfiguration Item`

### HUDOD.HUDODWindshieldInnerSurface

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

### HUDOD.HUDODProjectors

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.HUDProjectorElement> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.HUDProjectorElement AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.HUDProjectorElement> List`
Item | Children attribute: Get child by index | `SpeosDes.HUDProjectorElement Item`

### HUDOD.DynamicParametersAttribute

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | HUD Optical Design dynamic parameters enumerator | `IEnumerator<string> GetEnumerator()`

### Property

Name | Description | Syntax
--- | --- | ---
Item | HUD Optical Design dynamic parameters, get by index operator | `double Item`

## HUDProjectorElement

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosDes.HUDProjectorElement Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
Name | string attribute | `string Name`
ProjectorType | Enum attribute | `SpeosDes.HUDProjectorElement.EnumProjectorType ProjectorType`
ProjectorTypeIndex | Enum attribute (as index) | `int ProjectorTypeIndex`
Distance | Number attribute | `double Distance`
DistanceText | Number attribute (as text) | `string DistanceText`
HorizontalAngle | Number attribute | `double HorizontalAngle
HorizontalAngleText | Number attribute (as text) | `string HorizontalAngleText`
MultiConfig | boolean attribute | `bool MultiConfig`
VerticalAngle | Number attribute | `double VerticalAngle`
VerticalAngleText | Number attribute (as text) | `string VerticalAngleText`

## LightGuide

### Method

Name | Description | Syntax
--- | --- | ---
GetStartRadiusTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetStartRadiusTypePossibleValues()`
GetEndRadiusTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetEndRadiusTypePossibleValues()`
GetMillingTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetMillingTypePossibleValues()`
GetBottomPrismMillingTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetBottomPrismMillingTypePossibleValues()`
GetSideMillingTypePossibleValues | String list attribute: List possible values | `IEnumerable GetSideMillingTypePossibleValues()`
GetBorderMillingTypePossibleValues | String list attribute: List possible values | `IEnumerable GetBorderMillingTypePossibleValues()`
ExportAsCSVFile |  | `void ExportAsCSVFile(string csvFilePath)`
Clone | Create a copy of this object in the active context | `SpeosDes.LightGuide Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.LightGuide CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
GetStepTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetStepTypePossibleValues()`
GetLengthTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetLengthTypePossibleValues()`
GetTrimmingRatioTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetTrimmingRatioTypePossibleValues()`
GetPeakTrimmingRatioTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetPeakTrimmingRatioTypePossibleValues()`
GetOffsetTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetOffsetTypePossibleValues()`
GetWidthTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetWidthTypePossibleValues()`
GetStartAngleTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetStartAngleTypePossibleValues()`
GetEndAngleTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetEndAngleTypePossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.LightGuide> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.LightGuide Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.LightGuide Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.LightGuide Create()`

### Property

Name | Description | Syntax
--- | --- | ---
GuideCurve | Links attribute | `SpeosDes.LightGuide.LightGuideGuideCurve GuideCurve`
ReverseGuideCurveDirection | boolean attribute | `bool ReverseGuideCurveDirection`
MultipleOpticalAxis | Children attribute | `SpeosDes.LightGuide.LightGuideMultipleOpticalAxis MultipleOpticalAxis`
BodyType | Enum attribute | `SpeosDes.LightGuide.EnumBodyType BodyType`
BodyTypeIndex | Enum attribute (as index) | `int BodyTypeIndex`
BodyProfileDiameter | Number attribute | `double BodyProfileDiameter`
BodyProfileDiameterText | Number attribute (as text) | `string BodyProfileDiameterText`
ExtraBodyHeight | Number attribute | `double ExtraBodyHeight`
ExtraBodyHeightText | Number attribute (as text) | `string ExtraBodyHeightText`
BodyProfile | Number attribute | `SpeosDes.LightGuide.LightGuideBodyProfile BodyProfile`
PrismsOrientationType | Enum attribute | `SpeosDes.LightGuide.EnumPrismsOrientationType PrismsOrientationType`
PrismsOrientationTypeIndex | Enum attribute (as index) | `int PrismsOrientationTypeIndex`
OpticalAxis | Link attribute | `SpeosDes.LightGuide.LightGuideOpticalAxis OpticalAxis`
ReverseOpticalAxisDirection | boolean attribute | `bool ReverseOpticalAxisDirection`
OrientationSurface | Link attribute | `SpeosDes.LightGuide.LightGuideOrientationSurface OrientationSurface`
PrismsOperationType | Enum attribute | `SpeosDes.LightGuide.EnumPrismsOperationType PrismsOperationType`
PrismsOperationTypeIndex | Enum attribute (as index) | `int PrismsOperationTypeIndex`
RefractiveIndex | Number attribute | `double RefractiveIndex`
RefractiveIndexText | Number attribute (as text) | `string RefractiveIndexText`
DistancesType | Enum attribute | `SpeosDes.LightGuide.EnumDistancesType DistancesType`
DistancesTypeIndex | Enum attribute (as index) | `int DistancesTypeIndex`
ProjectionAxis | Link attribute | `SpeosDes.LightGuide.LightGuideProjectionAxis ProjectionAxis`
DistanceStart | Number attribute | `double DistanceStart`
DistanceStartText | Number attribute (as text) | `string DistanceStartText`
DistanceEnd | Number attribute | `double DistanceEnd`
DistanceEndText | Number attribute (as text) | `string DistanceEndText`
StepType | string list selection attribute | `string StepType`
StepValue | Number attribute | `double StepValue`
StepValueText | Number attribute (as text) | `string StepValueText`
StepConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideStepConfigurations StepConfigurations`
LengthType | string list selection attribute | `string LengthType`
LengthValue | Number attribute | `double LengthValue`
LengthValueText | Number attribute (as text) | `string LengthValueText`
LengthConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideLengthConfigurations LengthConfigurations`
TrimmingRatioType | string list selection attribute | `string TrimmingRatioType`
TrimmingRatioValue | Number attribute | `double TrimmingRatioValue`
TrimmingRatioValueText | Number attribute (as text) | `string TrimmingRatioValueText`
TrimmingRatioConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideTrimmingRatioConfigurations TrimmingRatioConfigurations`
PeakTrimmingRatioType | string list selection attribute | `string PeakTrimmingRatioType`
PeakTrimmingRatioValue | Number attribute | `double PeakTrimmingRatioValue`
PeakTrimmingRatioValueText | Number attribute (as text) | `string PeakTrimmingRatioValueText`
PeakTrimmingRatioConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuidePeakTrimmingRatioConfigurations PeakTrimmingRatioConfigurations`
OffsetType | string list selection attribute | `string OffsetType`
OffsetValue | Number attribute | `double OffsetValue`
OffsetValueText | Number attribute (as text) | `string OffsetValueText`
OffsetConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideOffsetConfigurations OffsetConfigurations`
WidthType | string list selection attribute | `string WidthType`
WidthValue | Number attribute | `double WidthValue`
WidthValueText | Number attribute (as text) | `string WidthValueText`
WidthConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideWidthConfigurations WidthConfigurations`
StartAngleType | string list selection attribute | `string StartAngleType`
StartAngleValue | Number attribute | `double StartAngleValue`
StartAngleValueText | Number attribute (as text) | `string StartAngleValueText`
StartAngleConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideStartAngleConfigurations StartAngleConfigurations`
EndAngleType | string list selection attribute | `string EndAngleType`
EndAngleValue | Number attribute | `double EndAngleValue`
EndAngleValueText | Number attribute (as text) | `string EndAngleValueText`
EndAngleConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideEndAngleConfigurations EndAngleConfigurations`
StartRadiusType | string list selection attribute | `string StartRadiusType`
StartRadiusValue | Number attribute | `double StartRadiusValue`
StartRadiusValueText | Number attribute (as text) | `string StartRadiusValueText`
StartRadiusConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideStartRadiusConfigurations StartRadiusConfigurations`
EndRadiusType | string list selection attribute | `string EndRadiusType`
EndRadiusValue | Number attribute | `double EndRadiusValue`
EndRadiusValueText | Number attribute (as text) | `string EndRadiusValueText`
EndRadiusConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideEndRadiusConfigurations EndRadiusConfigurations`
CSVFile | File attribute | `string CSVFile`
CSVFileFullPath | File attribute (absolute full path) | `string CSVFileFullPath`
DraftingType | Enum attribute | `SpeosDes.LightGuide.EnumDraftingType DraftingType`
DraftingTypeIndex | Enum attribute (as index) | `int DraftingTypeIndex`
DemoldingOrientation | Link attribute | `SpeosDes.LightGuide.LightGuideDemoldingOrientation DemoldingOrientation`
ReverseDemoldingDirection | boolean attribute | `bool ReverseDemoldingDirection`
DraftAngle | Number attribute | `double DraftAngle`
DraftAngleText | Number attribute (as text) | `string DraftAngleText`
NbPrisms | Number attribute | `int NbPrisms`
NbPrismsText | Number attribute (as text) | `string NbPrismsText`
MillingType | string list selection attribute | `string MillingType`
MillingValue | Number attribute | `double MillingValue`
MillingValueText | Number attribute (as text) | `string MillingValueText`
MillingConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideMillingConfigurations MillingConfigurations`
BottomPrismMillingType | string list selection attribute | `string BottomPrismMillingType`
BottomPrismMillingValue | Number attribute | `double BottomPrismMillingValue`
BottomPrismMillingValueText | Number attribute (as text) | `string BottomPrismMillingValueText`
BottomPrismMillingConfigurations | Children attribute | `SpeosDes.LightGuide.LightGuideBottomPrismMillingConfigurations BottomPrismMillingConfigurations`
SideMillingType | String list selection attribute | `string SideMillingType`
SideMillingValue | Number attribute | `double SideMillingValue`
SideMillingValueText | Number attribute (as text) | `string SideMillingValueText`
BorderMillingType | String list selection attribute | `string BorderMillingType`
BorderMillingValue | Number attribute | `double BorderMillingValue`
BorderMillingValueText | Number attribute (as text) | `string BorderMillingValueText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### LightGuide.LightGuideGuideCurve

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

### LightGuide.LightGuideMultipleOpticalAxis

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.MultipleOpticalAxis AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection List`
Item | Children attribute: Get child by index | `SpeosDes.MultipleOpticalAxis Item`

### LightGuide.LightGuideBodyProfile

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

### LightGuide.LightGuideOpticalAxis

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

### LightGuide.LightGuideOrientationSurface

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

### LightGuide.LightGuideProjectionAxis

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

### LightGuide.LightGuideStepConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideLengthConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideTrimmingRatioConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuidePeakTrimmingRatioConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideOffsetConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideWidthConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideStartAngleConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideEndAngleConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideStartRadiusConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideEndRadiusConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideDemoldingOrientation

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

### LightGuide.LightGuideMillingConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

### LightGuide.LightGuideBottomPrismMillingConfigurations

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPointConfiguration> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPointConfiguration AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPointConfiguration> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPointConfiguration Item`

## MOS

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.MOS> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.MOS Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.MOS Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.MOS Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.MOS Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.MOS CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
ExportAsCSVFile |  | `void ExportAsCSVFile(string csvFilePath)`
ExtractToolingPath |  | `void ExtractToolingPath()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
GuideCurve | Links attribute | `SpeosDes.MOS.MOSGuideCurve GuideCurve`
ReverseGuideCurveDirection | boolean attribute | `bool ReverseGuideCurveDirection`
SecondCurve | Links attribute | `SpeosDes.MOS.MOSSecondCurve SecondCurve`
ConstructionType | Enum attribute | `SpeosDes.MOS.EnumConstructionType ConstructionType`
ConstructionTypeIndex | Enum attribute (as index) | `int ConstructionTypeIndex`
OpticalAxis | Link attribute | `SpeosDes.MOS.MOSOpticalAxis OpticalAxis`
ReverseOpticalAxisDirection | boolean attribute | `bool ReverseOpticalAxisDirection`
SupportSurface | Link attribute | `SpeosDes.MOS.MOSSupportSurface SupportSurface`
ProjectionType | Enum attribute | `SpeosDes.MOS.EnumProjectionType ProjectionType`
ProjectionTypeIndex | Enum attribute (as index) | `int ProjectionTypeIndex`
SupportSide | Enum attribute | `SpeosDes.MOS.EnumSupportSide SupportSide`
SupportSideIndex | Enum attribute (as index) | `int SupportSideIndex`
Thickness | Number attribute | `double Thickness`
ThicknessText | Number attribute (as text) | `string ThicknessText`
SideAngle | Number attribute | `double SideAngle`
SideAngleText | Number attribute (as text) | `string SideAngleText`
Radius | Number attribute | `double Radius`
RadiusText | Number attribute (as text) | `string RadiusText`
ControlPoints | Children attribute | `SpeosDes.MOS.MOSControlPoints ControlPoints`
StripesCount | Number attribute | `int StripesCount`
StripesCountText | Number attribute (as text) | `string StripesCountText`
DraftingAxis | Link attribute | `SpeosDes.MOS.MOSDraftingAxis DraftingAxis`
ReverseDraftingAxisDirection | boolean attribute | `bool ReverseDraftingAxisDirection`
DraftingAngle | Number attribute | `double DraftingAngle`
DraftingAngleText | Number attribute (as text) | `string DraftingAngleText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### MOS.MOSGuideCurve

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

### MOS.MOSSecondCurve

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

### MOS.MOSOpticalAxis

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

### MOS.MOSSupportSurface

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

### MOS.MOSControlPoints

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.MOSControlPoint> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.MOSControlPoint AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.MOSControlPoint> List`
Item | Children attribute: Get child by index | `SpeosDes.MOSControlPoint Item`

### MOS.MOSDraftingAxis

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

## MOSControlPoint

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosDes.MOSControlPoint Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
Position | Number attribute | `double Position`
PositionText | Number attribute (as text) | `string PositionText`
Depth | Number attribute | `double Depth`
DepthText | Number attribute (as text) | `string DepthText`
Pitch | Number attribute | `double Pitch`
PitchText | Number attribute (as text) | `string PitchText`
TopLength | Number attribute | `double TopLength`
TopLengthText | Number attribute (as text) | `string TopLengthText`
BitShapeStartAngle | Number attribute | `double BitShapeStartAngle`
BitShapeStartAngleText | Number attribute (as text) | `string BitShapeStartAngleText`
BitShapeEndAngle | Number attribute | `double BitShapeEndAngle`
BitShapeEndAngleText | Number attribute (as text) | `string BitShapeEndAngleText`

## MultipleOpticalAxis

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosDes.MultipleOpticalAxis Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
Position | Number attribute | `double Position`
PositionText | Number attribute (as text) | `string PositionText`
OpticalAxis | Link attribute | `SpeosDes.MultipleOpticalAxis.MultipleOpticalAxisOpticalAxis OpticalAxis`
ReverseDirection | boolean attribute | `bool ReverseDirection`

### MultipleOpticalAxis.MultipleOpticalAxisOpticalAxis

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

## Node

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.Node> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.Node Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.Node Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.Node Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.Node Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.Node CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## OpticalFeatureGeneral

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.OpticalFeatureGeneral> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.OpticalFeatureGeneral Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
GetSourceTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetSourceTypePossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
SourceType | string list selection attribute | `string SourceType`
SourcePoint | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSourcePoint SourcePoint`
SourceBody | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSourceBody SourceBody`
SourceDirection | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSourceDirection SourceDirection`
ReverseSourceDirection | boolean attribute | `bool ReverseSourceDirection`
SourceRefractiveIndex | Number attribute | `double SourceRefractiveIndex`
SourceRefractiveIndexText | Number attribute (as text) | `string SourceRefractiveIndexText`
SourceFlux | Number attribute | `double SourceFlux`
SourceFluxText | Number attribute (as text) | `string SourceFluxText`
SupportType | Enum attribute | `SpeosDes.OpticalFeatureGeneral.EnumSupportType SupportType`
SupportTypeIndex | Enum attribute (as index) | `int SupportTypeIndex`
SupportBody | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSupportBody SupportBody`
SupportOrigin | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSupportOrigin SupportOrigin`
SupportAxis | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSupportAxis SupportAxis`
ReverseSupportAxis | boolean attribute | `bool ReverseSupportAxis`
SupportOrientation | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralSupportOrientation SupportOrientation`
ReverseSupportOrientation | boolean attribute | `bool ReverseSupportOrientation`
SupportOrientationType | Enum attribute | `SpeosDes.OpticalFeatureGeneral.EnumSupportOrientationType SupportOrientationType`
SupportOrientationTypeIndex | Enum attribute (as index) | `int SupportOrientationTypeIndex`
Thickness | Number attribute | `double Thickness`
ThicknessText | Number attribute (as text) | `string ThicknessText`
RefractiveIndex | Number attribute | `double RefractiveIndex`
RefractiveIndexText | Number attribute (as text) | `string RefractiveIndexText`
TargetType | Enum attribute | `SpeosDes.OpticalFeatureGeneral.EnumTargetType TargetType`
TargetTypeIndex | Enum attribute (as index) | `int TargetTypeIndex`
IntegrationDirectionIsReversed | boolean attribute | `bool IntegrationDirectionIsReversed`
XMPTemplateFile | File attribute | `string XMPTemplateFile`
XMPTemplateFileFullPath | File attribute (absolute full path) | `string XMPTemplateFileFullPath`
TargetOrigin | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralTargetOrigin TargetOrigin`
TargetAxis | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralTargetAxis TargetAxis`
ReverseTargetAxis | boolean attribute | `bool ReverseTargetAxis`
TargetOrientation | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralTargetOrientation TargetOrientation`
ReverseTargetOrientation | boolean attribute | `bool ReverseTargetOrientation`
ResultViewingDirection | Enum attribute | `SpeosDes.OpticalFeatureGeneral.EnumResultViewingDirection ResultViewingDirection`
ResultViewingDirectionIndex | Enum attribute (as index) | `int ResultViewingDirectionIndex`
ContourBody | Link attribute | `SpeosDes.OpticalFeatureGeneral.OpticalFeatureGeneralContourBody ContourBody`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### OpticalFeatureGeneral.OpticalFeatureGeneralSourcePoint

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

### OpticalFeatureGeneral.OpticalFeatureGeneralSourceBody

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

### OpticalFeatureGeneral.OpticalFeatureGeneralSourceDirection

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

### OpticalFeatureGeneral.OpticalFeatureGeneralSupportBody

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

### OpticalFeatureGeneral.OpticalFeatureGeneralSupportOrigin

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

### OpticalFeatureGeneral.OpticalFeatureGeneralSupportAxis

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

### OpticalFeatureGeneral.OpticalFeatureGeneralSupportOrientation

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

### OpticalFeatureGeneral.OpticalFeatureGeneralTargetOrigin

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

### OpticalFeatureGeneral.OpticalFeatureGeneralTargetAxis

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

### OpticalFeatureGeneral.OpticalFeatureGeneralTargetOrientation

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

### OpticalFeatureGeneral.OpticalFeatureGeneralContourBody

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

## OpticalFeatureManufacturing

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.OpticalFeatureManufacturing> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.OpticalFeatureManufacturing Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
GetDraftingTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetDraftingTypePossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Sewing | boolean attribute | `bool Sewing`
DraftingType | string list selection attribute | `string DraftingType`
DraftValue | Number attribute | `double DraftValue`
DraftValueText | Number attribute (as text) | `string DraftValueText`
DraftAll | boolean attribute | `bool DraftAll`
AngularDraftValue | Number attribute | `double AngularDraftValue`
AngularDraftValueText | Number attribute (as text) | `string AngularDraftValueText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## OpticalFeatureStyleCircular

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.OpticalFeatureStyleCircular> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.OpticalFeatureStyleCircular Find(string objectName)`

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
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Start | Number attribute | `double Start`
StartText | Number attribute (as text) | `string StartText`
End | Number attribute | `double End`
EndText | Number attribute (as text) | `string EndText`
Step | Number attribute | `double Step`
StepText | Number attribute (as text) | `string StepText`
ShiftType | Enum attribute | `SpeosDes.OpticalFeatureStyleCircular.EnumShiftType ShiftType`
ShiftTypeIndex | Enum attribute (as index) | `int ShiftTypeIndex`
ShiftLength | Number attribute | `double ShiftLength`
ShiftLengthText | Number attribute (as text) | `string ShiftLengthText`
ShiftAngle | Number attribute | `double ShiftAngle`
ShiftAngleText | Number attribute (as text) | `string ShiftAngleText`
Definition | Enum attribute | `SpeosDes.OpticalFeatureStyleCircular.EnumDefinition Definition`
DefinitionIndex | Enum attribute (as index) | `int DefinitionIndex`
Sectors | Number attribute | `int Sectors`
SectorsText | Number attribute (as text) | `string SectorsText`
Angle | Number attribute | `double Angle`
AngleText | Number attribute (as text) | `string AngleText`
CircularEdges | boolean attribute | `bool CircularEdges`
StyleOrigin | Link attribute | `SpeosDes.OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleOrigin StyleOrigin`
StyleAxis | Link attribute | `SpeosDes.OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleAxis StyleAxis`
ReverseStyleAxis | boolean attribute | `bool ReverseStyleAxis`
StyleOrientation | Link attribute | `SpeosDes.OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleOrientation StyleOrientation`
ReverseStyleOrientation | boolean attribute | `bool ReverseStyleOrientation`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleOrigin

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

### OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleAxis

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

### OpticalFeatureStyleCircular.OpticalFeatureStyleCircularStyleOrientation

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

## OpticalFeatureStyleFreestyle

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.OpticalFeatureStyleFreestyle> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.OpticalFeatureStyleFreestyle Find(string objectName)`

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
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
XCurves | Links attribute | `SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleXCurves XCurves`
YCurves | Links attribute | `SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleYCurves YCurves`
StyleOrigin | Link attribute | `SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleOrigin StyleOrigin`
StyleAxis | Link attribute | `SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleAxis StyleAxis`
ReverseStyleAxis | boolean attribute | `bool ReverseStyleAxis`
StyleOrientation | Link attribute | `SpeosDes.OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleOrientation StyleOrientation`
ReverseStyleOrientation | boolean attribute | `bool ReverseStyleOrientation`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleXCurves

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

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleYCurves

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

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleOrigin

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

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleAxis

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

### OpticalFeatureStyleFreestyle.OpticalFeatureStyleFreestyleStyleOrientation

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

## OpticalFeatureStyleHoneycomb

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.OpticalFeatureStyleHoneycomb> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.OpticalFeatureStyleHoneycomb Find(string objectName)`

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
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
XStart | Number attribute | `double XStart`
XStartText | Number attribute (as text) | `string XStartText`
XEnd | Number attribute | `double XEnd`
XEndText | Number attribute (as text) | `string XEndText`
YStart | Number attribute | `double YStart`
YStartText | Number attribute (as text) | `string YStartText`
YEnd | Number attribute | `double YEnd`
YEndText | Number attribute (as text) | `string YEndText`
Rotation | Number attribute | `double Rotation`
RotationText | Number attribute (as text) | `string RotationText`
Definition | Enum attribute | `SpeosDes.OpticalFeatureStyleHoneycomb.EnumDefinition Definition`
DefinitionIndex | Enum attribute (as index) | `int DefinitionIndex`
SideLength | Number attribute | `double SideLength`
SideLengthText | Number attribute (as text) | `string SideLengthText`
Width | Number attribute | `double Width`
WidthText | Number attribute (as text) | `string WidthText`
StyleOrigin | Link attribute | `SpeosDes.OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleOrigin StyleOrigin`
StyleAxis | Link attribute | `SpeosDes.OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleAxis StyleAxis`
ReverseStyleAxis | boolean attribute | `bool ReverseStyleAxis`
StyleOrientation | Link attribute | `SpeosDes.OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleOrientation StyleOrientation`
ReverseStyleOrientation | boolean attribute | `bool ReverseStyleOrientation`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleOrigin

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

### OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleAxis

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

### OpticalFeatureStyleHoneycomb.OpticalFeatureStyleHoneycombStyleOrientation

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

## OpticalFeatureStyleRectangular

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.OpticalFeatureStyleRectangular> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.OpticalFeatureStyleRectangular Find(string objectName)`

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
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
XStart | Number attribute | `double XStart`
XStartText | Number attribute (as text) | `string XStartText`
XEnd | Number attribute | `double XEnd`
XEndText | Number attribute (as text) | `string XEndText`
YStart | Number attribute | `double YStart`
YStartText | Number attribute (as text) | `string YStartText`
YEnd | Number attribute | `double YEnd`
YEndText | Number attribute (as text) | `string YEndText`
XAngle | Number attribute | `double XAngle`
XAngleText | Number attribute (as text) | `string XAngleText`
YAngle | Number attribute | `double YAngle`
YAngleText | Number attribute (as text) | `string YAngleText`
Definition | Enum attribute | `SpeosDes.OpticalFeatureStyleRectangular.EnumDefinition Definition`
DefinitionIndex | Enum attribute (as index) | `int DefinitionIndex`
XCount | Number attribute | `int XCount`
XCountText | Number attribute (as text) | `string XCountText`
YCount | Number attribute | `int YCount`
YCountText | Number attribute (as text) | `string YCountText`
XSize | Number attribute | `double XSize`
XSizeText | Number attribute (as text) | `string XSizeText`
YSize | Number attribute | `double YSize`
YSizeText | Number attribute (as text) | `string YSizeText`
StyleOrigin | Link attribute | `SpeosDes.OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleOrigin StyleOrigin`
StyleAxis | Link attribute | `SpeosDes.OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleAxis StyleAxis`
ReverseStyleAxis | boolean attribute | `bool ReverseStyleAxis`
StyleOrientation | Link attribute | `SpeosDes.OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleOrientation StyleOrientation`
ReverseStyleOrientation | boolean attribute | `bool ReverseStyleOrientation`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleOrigin

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

### OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleAxis

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

### OpticalFeatureStyleRectangular.OpticalFeatureStyleRectangularStyleOrientation

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

## OpticalFeatureStyleStripes

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.OpticalFeatureStyleStripes> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.OpticalFeatureStyleStripes Find(string objectName)`

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
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Curves | Links attribute | `SpeosDes.OpticalFeatureStyleStripes.OpticalFeatureStyleStripesCurves Curves`
StyleOrigin | Link attribute | `SpeosDes.OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleOrigin StyleOrigin`
StyleAxis | Link attribute | `SpeosDes.OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleAxis StyleAxis`
ReverseStyleAxis | boolean attribute | `bool ReverseStyleAxis`
StyleOrientation | Link attribute | `SpeosDes.OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleOrientation StyleOrientation`
ReverseStyleOrientation | boolean attribute | `bool ReverseStyleOrientation`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### OpticalFeatureStyleStripes.OpticalFeatureStyleStripesCurves

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

### OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleOrigin

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

### OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleAxis

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

### OpticalFeatureStyleStripes.OpticalFeatureStyleStripesStyleOrientation

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

## OpticalGroup

### Method

Name | Description | Syntax
--- | --- | ---
AddFaceFromCoordinates |  | `void AddFaceFromCoordinates(int xCoordinate, int yCoordinate)`
AddFacesFromXCoordinate |  | `void AddFacesFromXCoordinate(int xCoordinate)`
AddFacesFromYCoordinate |  | `void AddFacesFromYCoordinate(int yCoordinate)`
GetGroupTypePossibleValues | string list attribute: List possible values | `IEnumerable<string> GetGroupTypePossibleValues()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.OpticalGroup> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.OpticalGroup Find(string objectName)`

### Property

Name | Description | Syntax
--- | --- | ---
Shift | Number attribute | `double Shift`
ShiftText | Number attribute (as text) | `string ShiftText`
GeometryOrientation | Enum attribute | `SpeosDes.OpticalGroup.EnumGeometryOrientation GeometryOrientation`
GeometryOrientationIndex | Enum attribute (as index) | `int GeometryOrientationIndex`
Focal | Number attribute | `double Focal`
FocalText | Number attribute (as text) | `string FocalText`
ParabolicApproximation | boolean attribute | `bool ParabolicApproximation`
XTiltAngle | Number attribute | `double XTiltAngle`
XTiltAngleText | Number attribute (as text) | `string XTiltAngleText`
YTiltAngle | Number attribute | `double YTiltAngle`
YTiltAngleText | Number attribute (as text) | `string YTiltAngleText`
Angle | Number attribute | `double Angle`
AngleText | Number attribute (as text) | `string AngleText`
XRadius | Number attribute | `double XRadius`
XRadiusText | Number attribute (as text) | `string XRadiusText`
YRadius | Number attribute | `double YRadius`
YRadiusText | Number attribute (as text) | `string YRadiusText`
RadialRadius | Number attribute | `double RadialRadius`
RadialRadiusText | Number attribute (as text) | `string RadialRadiusText`
StartRadius | Number attribute | `double StartRadius`
StartRadiusText | Number attribute (as text) | `string StartRadiusText`
EndRadius | Number attribute | `double EndRadius`
EndRadiusText | Number attribute (as text) | `string EndRadiusText`
Radius | Number attribute | `double Radius`
RadiusText | Number attribute (as text) | `string RadiusText`
XStart | Number attribute | `double XStart`
XStartText | Number attribute (as text) | `string XStartText`
XEnd | Number attribute | `double XEnd`
XEndText | Number attribute (as text) | `string XEndText`
YStart | Number attribute | `double YStart`
YStartText | Number attribute (as text) | `string YStartText`
YEnd | Number attribute | `double YEnd`
YEndText | Number attribute (as text) | `string YEndText`
CenteredOnXSpread | boolean attribute | `bool CenteredOnXSpread`
CenteredOnYSpread | boolean attribute | `bool CenteredOnYSpread`
SmoothingSector | boolean attribute | `bool SmoothingSector`
XCenter | Number attribute | `double XCenter`
XCenterText | Number attribute (as text) | `string XCenterText`
YCenter | Number attribute | `double YCenter`
YCenterText | Number attribute (as text) | `string YCenterText`
SpreadStart | Number attribute | `double SpreadStart`
SpreadStartText | Number attribute (as text) | `string SpreadStartText`
SpreadEnd | Number attribute | `double SpreadEnd`
SpreadEndText | Number attribute (as text) | `string SpreadEndText`
Tilt | Number attribute | `double Tilt`
TiltText | Number attribute (as text) | `string TiltText`
YSize | Number attribute | `double YSize`
YSizeText | Number attribute (as text) | `string YSizeText`
XAngle | Number attribute | `double XAngle`
XAngleText | Number attribute (as text) | `string XAngleText`
XPosition | Number attribute | `double XPosition`
XPositionText | Number attribute (as text) | `string XPositionText`
XPositionMin | Number attribute | `double XPositionMin`
XPositionMinText | Number attribute (as text) | `string XPositionMinText`
XPositionMax | Number attribute | `double XPositionMax`
XPositionMaxText | Number attribute (as text) | `string XPositionMaxText`
XAngleMin | Number attribute | `double XAngleMin`
XAngleMinText | Number attribute (as text) | `string XAngleMinText`
XAngleMax | Number attribute | `double XAngleMax`
XAngleMaxText | Number attribute (as text) | `string XAngleMaxText`
YAngle | Number attribute | `double YAngle`
YAngleText | Number attribute (as text) | `string YAngleText`
YPosition | Number attribute | `double YPosition`
YPositionText | Number attribute (as text) | `string YPositionText`
YPositionMin | Number attribute | `double YPositionMin`
YPositionMinText | Number attribute (as text) | `string YPositionMinText`
YPositionMax | Number attribute | `double YPositionMax`
YPositionMaxText | Number attribute (as text) | `string YPositionMaxText`
YAngleMin | Number attribute | `double YAngleMin`
YAngleMinText | Number attribute (as text) | `string YAngleMinText`
YAngleMax | Number attribute | `double YAngleMax`
YAngleMaxText | Number attribute (as text) | `string YAngleMaxText`
XSpread | Number attribute | `double XSpread`
XSpreadText | Number attribute (as text) | `string XSpreadText`
YSpread | Number attribute | `double YSpread`
YSpreadText | Number attribute (as text) | `string YSpreadText`
AdvancedMode | boolean attribute | `bool AdvancedMode`
SCOHControlPlanes | Children attribute | `SpeosDes.OpticalGroup.OpticalGroupSCOHControlPlanes SCOHControlPlanes`
SCOVControlPlanes | Children attribute | `SpeosDes.OpticalGroup.OpticalGroupSCOVControlPlanes SCOVControlPlanes`
StartAngle | Number attribute | `double StartAngle`
StartAngleText | Number attribute (as text) | `string StartAngleText`
EndAngle | Number attribute | `double EndAngle`
EndAngleText | Number attribute (as text) | `string EndAngleText`
XRadiusPrism | Number attribute | `double XRadiusPrism`
XRadiusPrismText | Number attribute (as text) | `string XRadiusPrismText`
YRadiusPrism | Number attribute | `double YRadiusPrism`
YRadiusPrismText | Number attribute (as text) | `string YRadiusPrismText`
Height | Number attribute | `double Height`
HeightText | Number attribute (as text) | `string HeightText`
FaceList | Links attribute | `SpeosDes.OpticalGroup.OpticalGroupFaceList FaceList`
GroupType | string list selection attribute | `string GroupType`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### OpticalGroup.OpticalGroupSCOHControlPlanes

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPlane> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPlane AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPlane> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPlane Item`

### OpticalGroup.OpticalGroupSCOVControlPlanes

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPlane> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPlane AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPlane> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPlane Item`

### OpticalGroup.OpticalGroupFaceList

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

## ParabolicSurface

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.ParabolicSurface> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.ParabolicSurface Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.ParabolicSurface Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.ParabolicSurface Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.ParabolicSurface Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.ParabolicSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
OriginPoint | Link attribute | `SpeosDes.ParabolicSurface.ParabolicSurfaceOriginPoint OriginPoint`
Axis | Link attribute | `SpeosDes.ParabolicSurface.ParabolicSurfaceAxis Axis`
OrientationAxis | Link attribute | `SpeosDes.ParabolicSurface.ParabolicSurfaceOrientationAxis OrientationAxis`
Size | Number attribute | `double Size`
SizeText | Number attribute (as text) | `string SizeText`
BuildType | Enum attribute | `SpeosDes.ParabolicSurface.EnumBuildType BuildType`
BuildTypeIndex | Enum attribute (as index) | `int BuildTypeIndex`
Focal | Number attribute | `double Focal`
FocalText | Number attribute (as text) | `string FocalText`
FocalOut | Number attribute | `double FocalOut`
FocalOutText | Number attribute (as text) | `string FocalOutText`
PassingPoint | Link attribute | `SpeosDes.ParabolicSurface.ParabolicSurfacePassingPoint PassingPoint`
ReverseOpticalAxis | boolean attribute | `bool ReverseOpticalAxis`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### ParabolicSurface.ParabolicSurfaceOriginPoint

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

### ParabolicSurface.ParabolicSurfaceAxis

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

### ParabolicSurface.ParabolicSurfaceOrientationAxis

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

### ParabolicSurface.ParabolicSurfacePassingPoint

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

## PER

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.PER> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.PER Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.PER Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.PER Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.PER Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.PER CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
SourceType | Enum attribute | `SpeosDes.PER.EnumSourceType SourceType`
SourceTypeIndex | Enum attribute (as index) | `int SourceTypeIndex`
SourcePoint | Link attribute | `SpeosDes.PER.PERSourcePoint SourcePoint`
SourceSupport | Link attribute | `SpeosDes.PER.PERSourceSupport SourceSupport`
ImagePoint | Link attribute | `SpeosDes.PER.PERImagePoint ImagePoint`
OrientationAxis | Link attribute | `SpeosDes.PER.PEROrientationAxis OrientationAxis`
ReverseOrientationAxisDirection | boolean attribute | `bool ReverseOrientationAxisDirection`
FocalLength | Number attribute | `double FocalLength`
FocalLengthText | Number attribute (as text) | `string FocalLengthText`
Hole | boolean attribute | `bool Hole`
HoleDiameter | Number attribute | `double HoleDiameter`
HoleDiameterText | Number attribute (as text) | `string HoleDiameterText`
Symmetry | Enum attribute | `SpeosDes.PER.EnumSymmetry Symmetry`
SymmetryIndex | Enum attribute (as index) | `int SymmetryIndex`
AngularSections | Children CustomObjects attribute | `SpeosDes.PER.PERAngularSections AngularSections`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### PER.PERSourcePoint

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

### PER.PERSourceSupport

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

### PER.PERImagePoint

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

### PER.PEROrientationAxis

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

### PER.PERAngularSections

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.PERAngularSection> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.PERAngularSection AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.PERAngularSection> List`
Item | Get child CustomObject by index | `SpeosDes.PERAngularSection Item`
Item | Get child CustomObject by index | `SpeosDes.PERAngularSection Item`

## PERAngularSection

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.PERAngularSection> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.PERAngularSection Find(string objectName)`

### Method

Name | Description | Syntax
--- | --- | ---
FittingControlPlane | Call the 'Fitting control plane' command. Returns 'false' if this action is unavailable in the current state of the object. | `bool FittingControlPlane()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Angle | Number attribute | `double Angle`
AngleText | Number attribute (as text) | `string AngleText`
ControlPlanes | Children attribute | `SpeosDes.PERAngularSection.PERAngularSectionControlPlanes ControlPlanes`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### PERAngularSection.PERAngularSectionControlPlanes

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ControlPlane> GetEnumerator()`
AddNew | Children attribute: Create a new child object | `SpeosDes.ControlPlane AddNew(int insertIndex)`
Delete | Children attribute: Delete a child object by index | `bool Delete(int index)`
Clear | Children attribute: Empty the list | `void Clear()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ControlPlane> List`
Item | Children attribute: Get child by index | `SpeosDes.ControlPlane Item`

## PostProcessing

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.PostProcessing> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.PostProcessing Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.PostProcessing Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.PostProcessing Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.PostProcessing Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.PostProcessing CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
AssociatedFeature | Link attribute | `SpeosDes.PostProcessing.PostProcessingAssociatedFeature AssociatedFeature`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### PostProcessing.PostProcessingAssociatedFeature

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

## ProjectionLens

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.ProjectionLens> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.ProjectionLens Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.ProjectionLens Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.ProjectionLens Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.ProjectionLens Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.ProjectionLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
FocalPoint | Link attribute | `SpeosDes.ProjectionLens.ProjectionLensFocalPoint FocalPoint`
OpticalAxis | Link attribute | `SpeosDes.ProjectionLens.ProjectionLensOpticalAxis OpticalAxis`
OpticalAxisReverse | boolean attribute | `bool OpticalAxisReverse`
BackFocalLength | Number attribute | `double BackFocalLength`
BackFocalLengthText | Number attribute (as text) | `string BackFocalLengthText`
BackFaceType | Enum attribute | `SpeosDes.ProjectionLens.EnumBackFaceType BackFaceType`
BackFaceTypeIndex | Enum attribute (as index) | `int BackFaceTypeIndex`
FrontFaceType | Enum attribute | `SpeosDes.ProjectionLens.EnumFrontFaceType FrontFaceType`
FrontFaceTypeIndex | Enum attribute (as index) | `int FrontFaceTypeIndex`
ZernikeOrientation | Link attribute | `SpeosDes.ProjectionLens.ProjectionLensZernikeOrientation ZernikeOrientation`
ZernikeOrientationReverse | boolean attribute | `bool ZernikeOrientationReverse`
ThicknessSetType | Enum attribute | `SpeosDes.ProjectionLens.EnumThicknessSetType ThicknessSetType`
ThicknessSetTypeIndex | Enum attribute (as index) | `int ThicknessSetTypeIndex`
EdgeThickness | Number attribute | `double EdgeThickness`
EdgeThicknessText | Number attribute (as text) | `string EdgeThicknessText`
EdgeThicknessOut | Number attribute | `double EdgeThicknessOut`
EdgeThicknessOutText | Number attribute (as text) | `string EdgeThicknessOutText`
LensThickness | Number attribute | `double LensThickness`
LensThicknessText | Number attribute (as text) | `string LensThicknessText`
LensThicknessOut | Number attribute | `double LensThicknessOut`
LensThicknessOutText | Number attribute (as text) | `string LensThicknessOutText`
ConstructionType | Enum attribute | `SpeosDes.ProjectionLens.EnumConstructionType ConstructionType`
ConstructionTypeIndex | Enum attribute (as index) | `int ConstructionTypeIndex`
CustomRevolution | boolean attribute | `bool CustomRevolution`
RevolutionOriginPoint | Link attribute | `SpeosDes.ProjectionLens.ProjectionLensRevolutionOriginPoint RevolutionOriginPoint`
RevolutionAxis | Link attribute | `SpeosDes.ProjectionLens.ProjectionLensRevolutionAxis RevolutionAxis`
RevolutionAxisReverse | boolean attribute | `bool RevolutionAxisReverse`
ExtrusionAxis | Link attribute | `SpeosDes.ProjectionLens.ProjectionLensExtrusionAxis ExtrusionAxis`
ExtrusionAxisReverse | boolean attribute | `bool ExtrusionAxisReverse`
ExtrusionStart | Number attribute | `double ExtrusionStart`
ExtrusionStartText | Number attribute (as text) | `string ExtrusionStartText`
ExtrusionEnd | Number attribute | `double ExtrusionEnd`
ExtrusionEndText | Number attribute (as text) | `string ExtrusionEndText`
RevolutionStart | Number attribute | `double RevolutionStart`
RevolutionStartText | Number attribute (as text) | `string RevolutionStartText`
RevolutionEnd | Number attribute | `double RevolutionEnd`
RevolutionEndText | Number attribute (as text) | `string RevolutionEndText`
BackFaceApertureDiameter | Number attribute | `double BackFaceApertureDiameter`
BackFaceApertureDiameterText | Number attribute (as text) | `string BackFaceApertureDiameterText`
BackRadiusCurvature | Number attribute | `double BackRadiusCurvature`
BackRadiusCurvatureText | Number attribute (as text) | `string BackRadiusCurvatureText`
BackConicConstant | Number attribute | `double BackConicConstant`
BackConicConstantText | Number attribute (as text) | `string BackConicConstantText`
BackFaceRefractiveIndex | Number attribute | `double BackFaceRefractiveIndex`
BackFaceRefractiveIndexText | Number attribute (as text) | `string BackFaceRefractiveIndexText`
BackFaceFresnelMode | Enum attribute | `SpeosDes.ProjectionLens.EnumBackFaceFresnelMode BackFaceFresnelMode`
BackFaceFresnelModeIndex | Enum attribute (as index) | `int BackFaceFresnelModeIndex`
BackFaceStep | Number attribute | `double BackFaceStep`
BackFaceStepText | Number attribute (as text) | `string BackFaceStepText`
BackFaceHeight | Number attribute | `double BackFaceHeight`
BackFaceHeightText | Number attribute (as text) | `string BackFaceHeightText`
BackFaceDraftAngle | Number attribute | `double BackFaceDraftAngle`
BackFaceDraftAngleText | Number attribute (as text) | `string BackFaceDraftAngleText`
BackFaceAsphericals | Children attribute | `SpeosDes.ProjectionLens.ProjectionLensBackFaceAsphericals BackFaceAsphericals`
BackFaceZernikeCoefficients | Children attribute | `SpeosDes.ProjectionLens.ProjectionLensBackFaceZernikeCoefficients BackFaceZernikeCoefficients`
FrontFaceApertureDiameter | Number attribute | `double FrontFaceApertureDiameter`
FrontFaceApertureDiameterText | Number attribute (as text) | `string FrontFaceApertureDiameterText`
FrontRadiusCurvature | Number attribute | `double FrontRadiusCurvature`
FrontRadiusCurvatureText | Number attribute (as text) | `string FrontRadiusCurvatureText`
FrontConicConstant | Number attribute | `double FrontConicConstant`
FrontConicConstantText | Number attribute (as text) | `string FrontConicConstantText`
FrontFaceRefractiveIndex | Number attribute | `double FrontFaceRefractiveIndex`
FrontFaceRefractiveIndexText | Number attribute (as text) | `string FrontFaceRefractiveIndexText`
FrontFaceFresnelMode | Enum attribute | `SpeosDes.ProjectionLens.EnumFrontFaceFresnelMode FrontFaceFresnelMode`
FrontFaceFresnelModeIndex | Enum attribute (as index) | `int FrontFaceFresnelModeIndex`
FrontFaceStep | Number attribute | `double FrontFaceStep`
FrontFaceStepText | Number attribute (as text) | `string FrontFaceStepText`
FrontFaceHeight | Number attribute | `double FrontFaceHeight`
FrontFaceHeightText | Number attribute (as text) | `string FrontFaceHeightText`
FrontFaceDraftAngle | Number attribute | `double FrontFaceDraftAngle`
FrontFaceDraftAngleText | Number attribute (as text) | `string FrontFaceDraftAngleText`
FrontFaceAsphericals | Children attribute | `SpeosDes.ProjectionLens.ProjectionLensFrontFaceAsphericals FrontFaceAsphericals`
FrontFaceZernikeCoefficients | Children attribute | `SpeosDes.ProjectionLens.ProjectionLensFrontFaceZernikeCoefficients FrontFaceZernikeCoefficients`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### ProjectionLens.ProjectionLensFocalPoint

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

### ProjectionLens.ProjectionLensOpticalAxis

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

### ProjectionLens.ProjectionLensZernikeOrientation

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

### ProjectionLens.ProjectionLensRevolutionOriginPoint

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

### ProjectionLens.ProjectionLensRevolutionAxis

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

### ProjectionLens.ProjectionLensExtrusionAxis

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

### ProjectionLens.ProjectionLensBackFaceAsphericals

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.Aspherics> GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.Aspherics> List`
Item | Children attribute: Get child by index | `SpeosDes.Aspherics Item`

### ProjectionLens.ProjectionLensBackFaceZernikeCoefficients

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ZernikeCoefficient> GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ZernikeCoefficient> List`
Item | Children attribute: Get child by index | `SpeosDes.ZernikeCoefficient Item`

### ProjectionLens.ProjectionLensFrontFaceAsphericals

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.Aspherics> GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.Aspherics> List`
Item | Children attribute: Get child by index | `SpeosDes.Aspherics Item`

### ProjectionLens.ProjectionLensFrontFaceZernikeCoefficients

### Method

Name | Description | Syntax
--- | --- | ---
Set | Children attribute: Set from an array of script objects | `bool Set(Inf.SpaceClaim.Automation.IApiSpeosDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of document objects | `bool Set(SpaceClaim.Api.V251.IDocObject[] selectedObjects)`
Set | Children attribute: Set from an array of objects (IDocObject type from unspecified version) | `bool Set(System.Object[] docObjectsFromPreviousVersion)`
GetEnumerator | Children attribute: Get children enumeration | `IEnumerator<SpeosDes.ZernikeCoefficient> GetEnumerator()`
SelectAll | Children attribute: Create children for all objects that are compatible with link selection. | `void SelectAll()`

### Property

Name | Description | Syntax
--- | --- | ---
LinkedObjects | Children attribute: Get linked objects | `IReadOnlyCollection<SpaceClaim.Api.V251.IDocObject> LinkedObjects`
Count | Children attribute: Get children count | `int Count`
List | Children attribute: Get children collection | `IReadOnlyCollection<SpeosDes.ZernikeCoefficient> List`
Item | Children attribute: Get child by index | `SpeosDes.ZernikeCoefficient Item`

## RectangularLens

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.RectangularLens> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.RectangularLens Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.RectangularLens Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.RectangularLens Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.RectangularLens Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.RectangularLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleRectangular Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.RectangularLens.RectangularLensGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.RectangularLens.RectangularLensTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### RectangularLens.RectangularLensGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### RectangularLens.RectangularLensTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## RectangularSurface

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.RectangularSurface> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.RectangularSurface Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.RectangularSurface Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.RectangularSurface Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.RectangularSurface Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.RectangularSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleRectangular Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.RectangularSurface.RectangularSurfaceGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.RectangularSurface.RectangularSurfaceTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### RectangularSurface.RectangularSurfaceGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### RectangularSurface.RectangularSurfaceTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## ResultHOD

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.ResultHOD> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.ResultHOD Find(string objectName)`

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
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
ResultType | Enum attribute | `SpeosDes.ResultHOD.EnumResultType ResultType`
ResultTypeIndex | Enum attribute (as index) | `int ResultTypeIndex`
FullPath | Get the result file full path | `string FullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

## StripesLens

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.StripesLens> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.StripesLens Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.StripesLens Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.StripesLens Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.StripesLens Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.StripesLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleStripes Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.StripesLens.StripesLensGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.StripesLens.StripesLensTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### StripesLens.StripesLensGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### StripesLens.StripesLensTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## StripesSurface

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.StripesSurface> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.StripesSurface Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.StripesSurface Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.StripesSurface Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.StripesSurface Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.StripesSurface CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
AddGroup | Call the 'AddGroup' command. | `void AddGroup()`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
Style | Child CustomObject attribute | `SpeosDes.OpticalFeatureStyleStripes Style`
General | Child CustomObject attribute | `SpeosDes.OpticalFeatureGeneral General`
Groups | Children CustomObjects attribute | `SpeosDes.StripesSurface.StripesSurfaceGroups Groups`
TirLens | Children CustomObjects attribute | `SpeosDes.StripesSurface.StripesSurfaceTirLens TirLens`
Manufacturing | Child CustomObject attribute | `SpeosDes.OpticalFeatureManufacturing Manufacturing`
ExcelFile | File attribute | `Speos.Foundation.Utils.File.FilePath ExcelFile`
ExcelFileFullPath | File attribute (absolute full path) | `string ExcelFileFullPath`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### StripesSurface.StripesSurfaceGroups

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator<SpeosDes.OpticalGroup> GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.OpticalGroup AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection<SpeosDes.OpticalGroup> List`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`
Item | Get child CustomObject by index | `SpeosDes.OpticalGroup Item`

### StripesSurface.StripesSurfaceTirLens

### Method

Name | Description | Syntax
--- | --- | ---
GetEnumerator | Get children CustomObjects enumeration | `IEnumerator GetEnumerator()`
AddNew | Create a new child CustomObject | `SpeosDes.TIRLens AddNew(int insertIndex)`
Delete | Delete a child CustomObject by index | `void Delete(int index)`

### Property

Name | Description | Syntax
--- | --- | ---
Count | Get children CustomObjects count | `int Count`
List | Get children CustomObjects list | `IReadOnlyCollection List`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`
Item | Get child CustomObject by index | `SpeosDes.TIRLens Item`

## TIRLens

### Static method

Name | Description | Syntax
--- | --- | ---
FromSelection | Convert Items of a ScriptSelection to a list of Speos objects when their type is matching. | `IEnumerable<SpeosDes.TIRLens> FromSelection(IEnumerable<SpaceClaim.Api.V251.IDocObject> selectionItems)`
Find | Returns the object whose name matches exactly the specified string. Or, if the exact name is not found, the first object whose name matches the string as a regular expression. Example: Find("StartOfName.*") | `SpeosDes.TIRLens Find(string objectName)`
Create | Create a new object of this type under the specified parent component | `SpeosDes.TIRLens Create(object parent)`
Create | Create a new object in the active context | `SpeosDes.TIRLens Create()`

### Method

Name | Description | Syntax
--- | --- | ---
Clone | Create a copy of this object in the active context | `SpeosDes.TIRLens Clone()`
CopyTo | Create a copy of this object and paste it to the specified destination | `SpeosDes.TIRLens CopyTo(Inf.SpaceClaim.Automation.IApiSpeosDocObject pasteTargetObject)`
FindOccurrenceInActivePart | Search for occurrences of this object in the active Part | `object FindOccurrenceInActivePart()`
FindOccurrenceInContextOf | Search for occurrences of this object in the specified Part | `SpaceClaim.Api.V251.IDocObject FindOccurrenceInContextOf(SpaceClaim.Api.V251.IDocObject contextObject)`
ToString | Get a text representation of the object (used by the Script interpreter when the mouse cursor hovers an object variable) | `string ToString()`
Delete | Delete this object | `bool Delete()`
GetChildSubjects | Retrieve all children as DocObjects | `IEnumerable<SpaceClaim.Api.V251.CustomObject> GetChildSubjects()`
GetChildren | Retrieve all direct children of a given type | `IEnumerable<TSpecificApiType> GetChildren<TSpecificApiType>()`
Compute | Execute the Compute command on the object | `void Compute()`
PublishParameter | Publish or un-publish a number attribute as driving parameter | `void PublishParameter(string fieldName, bool trueToPublish)`
PublishAllParametersToWorkbench | Call this method to expose all object's attributes so that they can be accessible and driven from Workbench. | `void PublishAllParametersToWorkbench(bool trueToPublish)`
ApplyPreset | Update the object configuration values according to the specified Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `void ApplyPreset(string presetFilePath)`
ExportToPreset | Export the current object configuration to a Preset file. Note: some object types are not compatible with the 'Presets' feature, and in such a case the method will report an error. | `string ExportToPreset(string filePath)`

### Property

Name | Description | Syntax
--- | --- | ---
BuildType | Enum attribute | `SpeosDes.TIRLens.EnumBuildType BuildType`
BuildTypeIndex | Enum attribute (as index) | `int BuildTypeIndex`
Source | Link attribute | `SpeosDes.TIRLens.TIRLensSource Source`
SupportPlane | Link attribute | `SpeosDes.TIRLens.TIRLensSupportPlane SupportPlane`
InputRadius | Number attribute | `double InputRadius`
InputRadiusText | Number attribute (as text) | `string InputRadiusText`
Depth | Number attribute | `double Depth`
DepthText | Number attribute (as text) | `string DepthText`
DraftAngle | Number attribute | `double DraftAngle`
DraftAngleText | Number attribute (as text) | `string DraftAngleText`
SupportThickness | Number attribute | `double SupportThickness`
SupportThicknessText | Number attribute (as text) | `string SupportThicknessText`
RefractiveIndex | Number attribute | `double RefractiveIndex`
RefractiveIndexText | Number attribute (as text) | `string RefractiveIndexText`
Thickness | Number attribute | `double Thickness`
ThicknessText | Number attribute (as text) | `string ThicknessText`
ThicknessOut | Number attribute | `double ThicknessOut`
ThicknessOutText | Number attribute (as text) | `string ThicknessOutText`
OutputRadius | Number attribute | `double OutputRadius`
OutputRadiusText | Number attribute (as text) | `string OutputRadiusText`
OutputRadiusOut | Number attribute | `double OutputRadiusOut`
OutputRadiusOutText | Number attribute (as text) | `string OutputRadiusOutText`
Focal | Number attribute | `double Focal`
FocalText | Number attribute (as text) | `string FocalText`
ReverseDirection | boolean attribute | `bool ReverseDirection`
Spread | Number attribute | `double Spread`
SpreadText | Number attribute (as text) | `string SpreadText`
SpreadBehavior | Enum attribute | `SpeosDes.TIRLens.EnumSpreadBehavior SpreadBehavior`
SpreadBehaviorIndex | Enum attribute (as index) | `int SpreadBehaviorIndex`
SpreadControl | Number attribute | `double SpreadControl`
SpreadControlText | Number attribute (as text) | `string SpreadControlText`
Subject | Deprecated : Use 'Occurrence' property instead Get the underlying CustomObject, associated to the API object wrapper | `SpaceClaim.Api.V251.CustomObject Subject`
Occurrence | Get the underlying CustomObject occurrence, associated to the API object wrapper in current API version | `object Occurrence`
Name | Get or Set the name of the object | `string Name`
Visible | Change the visibility status (same behavior as checking/unchecking on the tree view item) | `bool Visible`
StatusInfo | Get the status of the object (warning or error message) | `string StatusInfo`
IsUpToDate | Ask if the object was modified since its last successful computation | `bool IsUpToDate`

### TIRLens.TIRLensSource

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

### TIRLens.TIRLensSupportPlane

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

## ZernikeCoefficient

### Static method

Name | Description | Syntax
--- | --- | ---
Create | Create a new object of this type | `SpeosDes.ZernikeCoefficient Create()`

### Method

Name | Description | Syntax
--- | --- | ---
ToString |  | `string ToString()`

### Property

Name | Description | Syntax
--- | --- | ---
Index | Number attribute | `int Index`
IndexText | Number attribute (as text) | `string IndexText`
Value | Number attribute | `double Value
ValueText | Number attribute (as text) | `string ValueText`