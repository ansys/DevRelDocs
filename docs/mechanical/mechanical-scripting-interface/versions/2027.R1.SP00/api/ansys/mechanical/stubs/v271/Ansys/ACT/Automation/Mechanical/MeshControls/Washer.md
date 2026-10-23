# `Washer`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.Washer"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Washer(internalObject: Any)

<a id="Washer"></a>

### *class* Washer(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Washer.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Washer.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Washer.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Washer.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Washer.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Washer.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Washer.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Washer.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Washer.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Washer.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Washer.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Washer.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Washer.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#Washer.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#Washer.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Washer.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Washer.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Washer.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Washer.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Washer.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Washer.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Washer.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Washer.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Washer.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Washer.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Washer.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Washer.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Washer.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Washer.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Washer.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Washer.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Washer.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Washer.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Washer.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Washer.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Washer.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Washer.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Washer.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Washer.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Washer.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#Washer.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`AllowNodeMovement`](#Washer.AllowNodeMovement)                                       | Gets or sets the AllowNodeMovement.                                     |
| [`AttachedRefs`](#Washer.AttachedRefs)                                                 | AttachedRefs property.                                                  |
| [`Children`](#Washer.Children)                                                         | Gets the list of children.                                              |
| [`ClsId`](#Washer.ClsId)                                                               | ClsId property.                                                         |
| [`Comments`](#Washer.Comments)                                                         | Gets the list of associated comments.                                   |
| [`DataModelObjectCategory`](#Washer.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                            |
| [`ElementSize`](#Washer.ElementSize)                                                   | Gets or sets the Quad Layer Element Size.                               |
| [`FaceNamedSelection`](#Washer.FaceNamedSelection)                                     | Gets or sets the Named Selection for Quad Layer Direction Face Scoping. |
| [`FaceScopingMethod`](#Washer.FaceScopingMethod)                                       | Gets or sets the face scoping method for Quad Layer Direction.          |
| [`FaceSelection`](#Washer.FaceSelection)                                               | Gets or sets the Quad Layer Direction Face Geoemetry Selection.         |
| [`FactorOfDiameter`](#Washer.FactorOfDiameter)                                         | FactorOfDiameter property.                                              |
| [`Figures`](#Washer.Figures)                                                           | Gets the list of associated figures.                                    |
| [`FirstLayerHeight`](#Washer.FirstLayerHeight)                                         | FirstLayerHeight property.                                              |
| [`GroupingFolder`](#Washer.GroupingFolder)                                             | GroupingFolder property.                                                |
| [`GrowthRate`](#Washer.GrowthRate)                                                     | GrowthRate property.                                                    |
| [`IconName`](#Washer.IconName)                                                         | IconName property.                                                      |
| [`Images`](#Washer.Images)                                                             | Gets the list of associated images.                                     |
| [`InternalObject`](#Washer.InternalObject)                                             | Gets the internal object. For advanced usage only.                      |
| [`LayerHeight`](#Washer.LayerHeight)                                                   | LayerHeight property.                                                   |
| [`LayerTransitionType`](#Washer.LayerTransitionType)                                   | LayerTransitionType property.                                           |
| [`Location`](#Washer.Location)                                                         | Gets or sets the Location.                                              |
| [`MinimumNumberOfDivisions`](#Washer.MinimumNumberOfDivisions)                         | MinimumNumberOfDivisions property.                                      |
| [`MinimumNumberOfWasherDivisions`](#Washer.MinimumNumberOfWasherDivisions)             | MinimumNumberOfWasherDivisions property.                                |
| [`Name`](#Washer.Name)                                                                 | Name property.                                                          |
| [`NamedSelection`](#NamedSelection)                                | Gets or sets the NamedSelection.                                        |
| [`NodeMovementTolerance`](#Washer.NodeMovementTolerance)                               | NodeMovementTolerance property.                                         |
| [`NumberOfDivisions`](#Washer.NumberOfDivisions)                                       | NumberOfDivisions property.                                             |
| [`NumberOfLayers`](#Washer.NumberOfLayers)                                             | NumberOfLayers property.                                                |
| [`NumberOfWasherDivisions`](#Washer.NumberOfWasherDivisions)                           | NumberOfWasherDivisions property.                                       |
| [`NumberOfWasherLayers`](#Washer.NumberOfWasherLayers)                                 | NumberOfWasherLayers property.                                          |
| [`ObjectId`](#Washer.ObjectId)                                                         | ObjectId property.                                                      |
| [`ObjectState`](#Washer.ObjectState)                                                   | ObjectState property.                                                   |
| [`ObjectTags`](#Washer.ObjectTags)                                                     | ObjectTags property.                                                    |
| [`Parent`](#Washer.Parent)                                                             | Parent property.                                                        |
| [`Properties`](#Washer.Properties)                                                     | Gets the list of properties for this object.                            |
| [`QuadLayerDefeatureProximityTolerance`](#Washer.QuadLayerDefeatureProximityTolerance) | QuadLayerDefeatureProximityTolerance property.                          |
| [`QuadLayerDirection`](#Washer.QuadLayerDirection)                                     | Gets or sets the Quad Layer Direction.                                  |
| [`QuadLayerType`](#Washer.QuadLayerType)                                               | Gets or sets the Quad Layer Type.                                       |
| [`Relaxation`](#Washer.Relaxation)                                                     | Gets or sets the relaxation of Quad Layer.                              |
| [`ScaleOfDiameter`](#Washer.ScaleOfDiameter)                                           | ScaleOfDiameter property.                                               |
| [`ScopingMethod`](#Washer.ScopingMethod)                                               | Gets or sets the ScopingMethod.                                         |
| [`State`](#Washer.State)                                                               | State property.                                                         |
| [`Suppressed`](#Washer.Suppressed)                                                     | Gets or sets the Suppressed.                                            |
| [`VisibleProperties`](#Washer.VisibleProperties)                                       | Gets the list of properties that are visible for this object.           |
| [`WasherAutoDefeature`](#Washer.WasherAutoDefeature)                                   | WasherAutoDefeature property.                                           |
| [`WasherDefeatureProximityTolerance`](#Washer.WasherDefeatureProximityTolerance)       | WasherDefeatureProximityTolerance property.                             |
| [`WasherHeightType`](#Washer.WasherHeightType)                                         | WasherHeightType property.                                              |
| [`WasherLayerHeight`](#Washer.WasherLayerHeight)                                       | WasherLayerHeight property.                                             |
| [`WasherMethod`](#Washer.WasherMethod)                                                 | WasherMethod property.                                                  |
| [`WasherType`](#Washer.WasherType)                                                     | WasherType property.                                                    |

<a id="property-detail"></a>

## Property detail

<a id="Washer.AllowNodeMovement"></a>

### *property* Washer.AllowNodeMovement *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AllowNodeMovement.

<!-- !! processed by numpydoc !! -->

<a id="Washer.AttachedRefs"></a>

### *property* Washer.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Children"></a>

### *property* Washer.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Washer.ClsId"></a>

### *property* Washer.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Comments"></a>

### *property* Washer.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Washer.DataModelObjectCategory"></a>

### *property* Washer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Washer.ElementSize"></a>

### *property* Washer.ElementSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Quad Layer Element Size.

<!-- !! processed by numpydoc !! -->

<a id="Washer.FaceNamedSelection"></a>

### *property* Washer.FaceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Named Selection for Quad Layer Direction Face Scoping.

<!-- !! processed by numpydoc !! -->

<a id="Washer.FaceScopingMethod"></a>

### *property* Washer.FaceScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the face scoping method for Quad Layer Direction.

<!-- !! processed by numpydoc !! -->

<a id="Washer.FaceSelection"></a>

### *property* Washer.FaceSelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Quad Layer Direction Face Geoemetry Selection.

<!-- !! processed by numpydoc !! -->

<a id="Washer.FactorOfDiameter"></a>

### *property* Washer.FactorOfDiameter *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

FactorOfDiameter property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Figures"></a>

### *property* Washer.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Washer.FirstLayerHeight"></a>

### *property* Washer.FirstLayerHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

FirstLayerHeight property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GroupingFolder"></a>

### *property* Washer.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GrowthRate"></a>

### *property* Washer.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GrowthRate property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.IconName"></a>

### *property* Washer.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Images"></a>

### *property* Washer.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Washer.InternalObject"></a>

### *property* Washer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Washer.LayerHeight"></a>

### *property* Washer.LayerHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LayerHeight property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.LayerTransitionType"></a>

### *property* Washer.LayerTransitionType *: Ansys.Mechanical.DataModel.Enums.LayerTransitionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

LayerTransitionType property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Location"></a>

### *property* Washer.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Washer.MinimumNumberOfDivisions"></a>

### *property* Washer.MinimumNumberOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MinimumNumberOfDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.MinimumNumberOfWasherDivisions"></a>

### *property* Washer.MinimumNumberOfWasherDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MinimumNumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Name"></a>

### *property* Washer.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.NamedSelection"></a>

### *property* Washer.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Washer.NodeMovementTolerance"></a>

### *property* Washer.NodeMovementTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NodeMovementTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.NumberOfDivisions"></a>

### *property* Washer.NumberOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.NumberOfLayers"></a>

### *property* Washer.NumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfLayers property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.NumberOfWasherDivisions"></a>

### *property* Washer.NumberOfWasherDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.NumberOfWasherLayers"></a>

### *property* Washer.NumberOfWasherLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfWasherLayers property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.ObjectId"></a>

### *property* Washer.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.ObjectState"></a>

### *property* Washer.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.ObjectTags"></a>

### *property* Washer.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Parent"></a>

### *property* Washer.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Properties"></a>

### *property* Washer.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Washer.QuadLayerDefeatureProximityTolerance"></a>

### *property* Washer.QuadLayerDefeatureProximityTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

QuadLayerDefeatureProximityTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.QuadLayerDirection"></a>

### *property* Washer.QuadLayerDirection *: Ansys.Mechanical.DataModel.Enums.QuadLayerDirection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Quad Layer Direction.

<!-- !! processed by numpydoc !! -->

<a id="Washer.QuadLayerType"></a>

### *property* Washer.QuadLayerType *: Ansys.Mechanical.DataModel.Enums.QuadLayerType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Quad Layer Type.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Relaxation"></a>

### *property* Washer.Relaxation *: Ansys.Mechanical.DataModel.Enums.QuadLayerRelaxation | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the relaxation of Quad Layer.

<!-- !! processed by numpydoc !! -->

<a id="Washer.ScaleOfDiameter"></a>

### *property* Washer.ScaleOfDiameter *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ScaleOfDiameter property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.ScopingMethod"></a>

### *property* Washer.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Washer.State"></a>

### *property* Washer.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Suppressed"></a>

### *property* Washer.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Washer.VisibleProperties"></a>

### *property* Washer.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherAutoDefeature"></a>

### *property* Washer.WasherAutoDefeature *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WasherAutoDefeature property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherDefeatureProximityTolerance"></a>

### *property* Washer.WasherDefeatureProximityTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WasherDefeatureProximityTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherHeightType"></a>

### *property* Washer.WasherHeightType *: Ansys.Mechanical.DataModel.Enums.WasherType | [None](https://docs.python.org/3/builtins/constants.html#None)*

WasherHeightType property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherLayerHeight"></a>

### *property* Washer.WasherLayerHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WasherLayerHeight property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherMethod"></a>

### *property* Washer.WasherMethod *: Ansys.Mechanical.DataModel.Enums.WasherMethod | [None](https://docs.python.org/3/builtins/constants.html#None)*

WasherMethod property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.WasherType"></a>

### *property* Washer.WasherType *: Ansys.Mechanical.DataModel.Enums.WasherType | [None](https://docs.python.org/3/builtins/constants.html#None)*

WasherType property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Washer.Activate"></a>

### Washer.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Washer.AddComment"></a>

### Washer.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Washer.AddFigure"></a>

### Washer.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Washer.AddImage"></a>

### Washer.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Washer.Copy"></a>

### Washer.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Washer.CopyTo"></a>

### Washer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Washer.CreateObjRef"></a>

### Washer.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.CreateParameter"></a>

### Washer.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Cut"></a>

### Washer.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Delete"></a>

### Washer.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Duplicate"></a>

### Washer.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Equals"></a>

### Washer.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GenerateMesh"></a>

### Washer.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetAPIName"></a>

### Washer.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetAllProperties"></a>

### Washer.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetChildren"></a>

### Washer.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Washer.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetDetailsView"></a>

### Washer.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetEnumName"></a>

### Washer.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetHashCode"></a>

### Washer.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetIconFile"></a>

### Washer.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetLifetimeService"></a>

### Washer.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetObjectData"></a>

### Washer.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetParameter"></a>

### Washer.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetPath"></a>

### Washer.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetPropertyName"></a>

### Washer.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetPropertyValue"></a>

### Washer.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetVisibleProperties"></a>

### Washer.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GetVisiblePropertyNames"></a>

### Washer.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GroupAllSimilarChildren"></a>

### Washer.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Washer.GroupSimilarObjects"></a>

### Washer.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Washer.InitializeLifetimeService"></a>

### Washer.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.IsPropertyEditable"></a>

### Washer.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Washer.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.IsPropertyVisible"></a>

### Washer.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Washer.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.Paste"></a>

### Washer.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Washer.PropertyByAPIName"></a>

### Washer.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Washer.PropertyById"></a>

### Washer.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Washer.PropertyByName"></a>

### Washer.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Washer.RemoveFromGroup"></a>

### Washer.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Washer.RemoveParameter"></a>

### Washer.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Washer.RenameBasedOnDefinition"></a>

### Washer.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

