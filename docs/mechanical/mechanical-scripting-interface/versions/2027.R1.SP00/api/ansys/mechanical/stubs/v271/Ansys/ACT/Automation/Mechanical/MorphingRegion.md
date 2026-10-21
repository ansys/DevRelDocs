# `MorphingRegion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MorphingRegion(internalObject: Any)

<a id="MorphingRegion"></a>

### *class* MorphingRegion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MorphingRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MorphingRegion.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MorphingRegion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MorphingRegion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MorphingRegion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#MorphingRegion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MorphingRegion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MorphingRegion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MorphingRegion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MorphingRegion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MorphingRegion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MorphingRegion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MorphingRegion.Equals)                                       | Equals method.                                                                              |
| [`GenerateMorphFieldFiles`](#MorphingRegion.GenerateMorphFieldFiles)     | Run the Generate MorphField Files action.                                                   |
| [`GetAPIName`](#MorphingRegion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MorphingRegion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MorphingRegion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MorphingRegion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MorphingRegion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MorphingRegion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MorphingRegion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MorphingRegion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MorphingRegion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MorphingRegion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MorphingRegion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MorphingRegion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MorphingRegion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetPublishedParameters`](#MorphingRegion.GetPublishedParameters)       | Gets the list of published parameters of the selected Mesh Workflow.                        |
| [`GetVisibleProperties`](#MorphingRegion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MorphingRegion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GetWorksheet`](#MorphingRegion.GetWorksheet)                           | Gets the list of MorphingRegionWorksheetRow from the Morphing Region.                       |
| [`GroupAllSimilarChildren`](#MorphingRegion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MorphingRegion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MorphingRegion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MorphingRegion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MorphingRegion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MorphingRegion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MorphingRegion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MorphingRegion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MorphingRegion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MorphingRegion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MorphingRegion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`AttachedRefs`](#MorphingRegion.AttachedRefs)                       | AttachedRefs property.                                                          |
| [`BaseFrequency`](#MorphingRegion.BaseFrequency)                     | Gets or sets the BaseFrequency.                                                 |
| [`Children`](#MorphingRegion.Children)                               | Gets the list of children.                                                      |
| [`ClsId`](#MorphingRegion.ClsId)                                     | ClsId property.                                                                 |
| [`Comments`](#MorphingRegion.Comments)                               | Gets the list of associated comments.                                           |
| [`DataModelObjectCategory`](#MorphingRegion.DataModelObjectCategory) | Gets the current DataModelObject's category.                                    |
| [`DisplayMesh`](#MorphingRegion.DisplayMesh)                         | Gets or sets the DisplayMesh.                                                   |
| [`Figures`](#MorphingRegion.Figures)                                 | Gets the list of associated figures.                                            |
| [`FixedLocation`](#MorphingRegion.FixedLocation)                     | “FixedLocation” property defines the fixed faces of the morphing region.        |
| [`GroupingFolder`](#MorphingRegion.GroupingFolder)                   | GroupingFolder property.                                                        |
| [`IconName`](#MorphingRegion.IconName)                               | IconName property.                                                              |
| [`Images`](#MorphingRegion.Images)                                   | Gets the list of associated images.                                             |
| [`InternalObject`](#MorphingRegion.InternalObject)                   | Gets the internal object. For advanced usage only.                              |
| [`MaximumFrequency`](#MorphingRegion.MaximumFrequency)               | Gets or sets the MaximumFrequency.                                              |
| [`MeshWorkflowSelection`](#MorphingRegion.MeshWorkflowSelection)     | Gets or sets the Mesh Workflow object selected.                                 |
| [`MinimumFrequency`](#MorphingRegion.MinimumFrequency)               | Gets or sets the MinimumFrequency.                                              |
| [`MorphingFrequency`](#MorphingRegion.MorphingFrequency)             | Gets or sets the MorphingFrequency.                                             |
| [`MorphingIntervals`](#MorphingRegion.MorphingIntervals)             | Gets or sets the MorphingIntervals.                                             |
| [`MorphingStep`](#MorphingRegion.MorphingStep)                       | Gets or sets the Morphing Step.                                                 |
| [`MovingLocation`](#MorphingRegion.MovingLocation)                   | “MovingLocation” property defines the moving boundaries of the morphing region. |
| [`Name`](#MorphingRegion.Name)                                       | Name property.                                                                  |
| [`ObjectId`](#MorphingRegion.ObjectId)                               | ObjectId property.                                                              |
| [`ObjectState`](#MorphingRegion.ObjectState)                         | ObjectState property.                                                           |
| [`ObjectTags`](#MorphingRegion.ObjectTags)                           | ObjectTags property.                                                            |
| [`Parent`](#MorphingRegion.Parent)                                   | Parent property.                                                                |
| [`Properties`](#MorphingRegion.Properties)                           | Gets the list of properties for this object.                                    |
| [`RegionLocation`](#MorphingRegion.RegionLocation)                   | “RegionLocation” property defines the morphing region bodies.                   |
| [`SlidingLocation`](#MorphingRegion.SlidingLocation)                 | “SlidingLocation” property defines the sliding constraints scoping.             |
| [`State`](#MorphingRegion.State)                                     | State property.                                                                 |
| [`Suppressed`](#MorphingRegion.Suppressed)                           | Gets or sets the Suppressed.                                                    |
| [`Thickness`](Thickness.md#Thickness)                                | Gets or sets the Thickness .                                                    |
| [`VisibleProperties`](#MorphingRegion.VisibleProperties)             | Gets the list of properties that are visible for this object.                   |

<a id="property-detail"></a>

## Property detail

<a id="MorphingRegion.AttachedRefs"></a>

### *property* MorphingRegion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.BaseFrequency"></a>

### *property* MorphingRegion.BaseFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BaseFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Children"></a>

### *property* MorphingRegion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.ClsId"></a>

### *property* MorphingRegion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Comments"></a>

### *property* MorphingRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.DataModelObjectCategory"></a>

### *property* MorphingRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.DisplayMesh"></a>

### *property* MorphingRegion.DisplayMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayMesh.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Figures"></a>

### *property* MorphingRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.FixedLocation"></a>

### *property* MorphingRegion.FixedLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

“FixedLocation” property defines the fixed faces of the morphing region.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GroupingFolder"></a>

### *property* MorphingRegion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.IconName"></a>

### *property* MorphingRegion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Images"></a>

### *property* MorphingRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.InternalObject"></a>

### *property* MorphingRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMorphingRegionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MaximumFrequency"></a>

### *property* MorphingRegion.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MeshWorkflowSelection"></a>

### *property* MorphingRegion.MeshWorkflowSelection *: [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflow) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mesh Workflow object selected.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MinimumFrequency"></a>

### *property* MorphingRegion.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MorphingFrequency"></a>

### *property* MorphingRegion.MorphingFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MorphingFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MorphingIntervals"></a>

### *property* MorphingRegion.MorphingIntervals *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MorphingIntervals.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MorphingStep"></a>

### *property* MorphingRegion.MorphingStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Morphing Step.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MovingLocation"></a>

### *property* MorphingRegion.MovingLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

“MovingLocation” property defines the moving boundaries of the morphing region.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Name"></a>

### *property* MorphingRegion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.ObjectId"></a>

### *property* MorphingRegion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.ObjectState"></a>

### *property* MorphingRegion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.ObjectTags"></a>

### *property* MorphingRegion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Parent"></a>

### *property* MorphingRegion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Properties"></a>

### *property* MorphingRegion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.RegionLocation"></a>

### *property* MorphingRegion.RegionLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

“RegionLocation” property defines the morphing region bodies.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.SlidingLocation"></a>

### *property* MorphingRegion.SlidingLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

“SlidingLocation” property defines the sliding constraints scoping.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.State"></a>

### *property* MorphingRegion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Suppressed"></a>

### *property* MorphingRegion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Thickness"></a>

### *property* MorphingRegion.Thickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thickness .

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.VisibleProperties"></a>

### *property* MorphingRegion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MorphingRegion.Activate"></a>

### MorphingRegion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.AddComment"></a>

### MorphingRegion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.AddFigure"></a>

### MorphingRegion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.AddImage"></a>

### MorphingRegion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Copy"></a>

### MorphingRegion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.CopyTo"></a>

### MorphingRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.CreateObjRef"></a>

### MorphingRegion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.CreateParameter"></a>

### MorphingRegion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Cut"></a>

### MorphingRegion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Delete"></a>

### MorphingRegion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Duplicate"></a>

### MorphingRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Equals"></a>

### MorphingRegion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GenerateMorphFieldFiles"></a>

### MorphingRegion.GenerateMorphFieldFiles(forDisplay: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Generate MorphField Files action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetAPIName"></a>

### MorphingRegion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetAllProperties"></a>

### MorphingRegion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetChildren"></a>

### MorphingRegion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MorphingRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetDetailsView"></a>

### MorphingRegion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetEnumName"></a>

### MorphingRegion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetHashCode"></a>

### MorphingRegion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetIconFile"></a>

### MorphingRegion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetLifetimeService"></a>

### MorphingRegion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetObjectData"></a>

### MorphingRegion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetParameter"></a>

### MorphingRegion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetPath"></a>

### MorphingRegion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetPropertyName"></a>

### MorphingRegion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetPropertyValue"></a>

### MorphingRegion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetPublishedParameters"></a>

### MorphingRegion.GetPublishedParameters() → [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[Ansys.ACT.Automation.Mechanical.MorphingRegionParameter](MorphingRegionParameter.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionParameter)]

Gets the list of published parameters of the selected Mesh Workflow.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetVisibleProperties"></a>

### MorphingRegion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetVisiblePropertyNames"></a>

### MorphingRegion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetWorksheet"></a>

### MorphingRegion.GetWorksheet() → [Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheet](MorphingRegionWorksheet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheet)

Gets the list of MorphingRegionWorksheetRow from the Morphing Region.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GroupAllSimilarChildren"></a>

### MorphingRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GroupSimilarObjects"></a>

### MorphingRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.InitializeLifetimeService"></a>

### MorphingRegion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.IsPropertyEditable"></a>

### MorphingRegion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MorphingRegion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.IsPropertyVisible"></a>

### MorphingRegion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MorphingRegion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Paste"></a>

### MorphingRegion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.PropertyByAPIName"></a>

### MorphingRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.PropertyById"></a>

### MorphingRegion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.PropertyByName"></a>

### MorphingRegion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.RemoveFromGroup"></a>

### MorphingRegion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.RemoveParameter"></a>

### MorphingRegion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

