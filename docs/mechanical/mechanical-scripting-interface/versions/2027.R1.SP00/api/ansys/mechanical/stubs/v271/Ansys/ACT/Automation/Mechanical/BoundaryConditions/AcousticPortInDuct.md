# `AcousticPortInDuct`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPortInDuct"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPortInDuct(internalObject: Any)

<a id="AcousticPortInDuct"></a>

### *class* AcousticPortInDuct(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticPortInDuct.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticPortInDuct.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticPortInDuct.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticPortInDuct.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticPortInDuct.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticPortInDuct.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticPortInDuct.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticPortInDuct.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticPortInDuct.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticPortInDuct.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticPortInDuct.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticPortInDuct.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticPortInDuct.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticPortInDuct.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticPortInDuct.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticPortInDuct.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticPortInDuct.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticPortInDuct.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticPortInDuct.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticPortInDuct.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticPortInDuct.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticPortInDuct.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticPortInDuct.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticPortInDuct.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticPortInDuct.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticPortInDuct.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticPortInDuct.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticPortInDuct.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticPortInDuct.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticPortInDuct.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticPortInDuct.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticPortInDuct.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticPortInDuct.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticPortInDuct.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticPortInDuct.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticPortInDuct.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticPortInDuct.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticPortInDuct.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticPortInDuct.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticPortInDuct.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`AnglePhi`](#AcousticPortInDuct.AnglePhi)                                                                         | Gets or sets the AnglePhi.                                     |
| [`AngleTheta`](#AcousticPortInDuct.AngleTheta)                                                                     | Gets or sets the AngleTheta.                                   |
| [`AttachedRefs`](#AcousticPortInDuct.AttachedRefs)                                                                 | AttachedRefs property.                                         |
| [`Children`](#AcousticPortInDuct.Children)                                                                         | Gets the list of children.                                     |
| [`ClsId`](#AcousticPortInDuct.ClsId)                                                                               | ClsId property.                                                |
| [`Comments`](#AcousticPortInDuct.Comments)                                                                         | Gets the list of associated comments.                          |
| [`CoordinateSystem`](#CoordinateSystem)                                                      | Gets or sets the CoordinateSystem.                             |
| [`DataModelObjectCategory`](#AcousticPortInDuct.DataModelObjectCategory)                                           | Gets the current DataModelObject's category.                   |
| [`Figures`](#AcousticPortInDuct.Figures)                                                                           | Gets the list of associated figures.                           |
| [`GroupingFolder`](#AcousticPortInDuct.GroupingFolder)                                                             | GroupingFolder property.                                       |
| [`Height`](#AcousticPortInDuct.Height)                                                                             | Gets or sets the Height.                                       |
| [`IconName`](#AcousticPortInDuct.IconName)                                                                         | IconName property.                                             |
| [`Images`](#AcousticPortInDuct.Images)                                                                             | Gets the list of associated images.                            |
| [`ImportableObjectSourceId`](#AcousticPortInDuct.ImportableObjectSourceId)                                         | ImportableObjectSourceId property.                             |
| [`InternalObject`](#AcousticPortInDuct.InternalObject)                                                             | Gets the internal object. For advanced usage only.             |
| [`Location`](#AcousticPortInDuct.Location)                                                                         | Gets or sets the Location.                                     |
| [`ModeIndexForPressureVariationAlongTheAzimuth`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheAzimuth) | Gets or sets the ModeIndexForPressureVariationAlongTheAzimuth. |
| [`ModeIndexForPressureVariationAlongTheHeight`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheHeight)   | Gets or sets the ModeIndexForPressureVariationAlongTheHeight.  |
| [`ModeIndexForPressureVariationAlongTheRadii`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheRadii)     | Gets or sets the ModeIndexForPressureVariationAlongTheRadii.   |
| [`ModeIndexForPressureVariationAlongTheWidth`](#AcousticPortInDuct.ModeIndexForPressureVariationAlongTheWidth)     | Gets or sets the ModeIndexForPressureVariationAlongTheWidth.   |
| [`Name`](#AcousticPortInDuct.Name)                                                                                 | Name property.                                                 |
| [`ObjectId`](#AcousticPortInDuct.ObjectId)                                                                         | ObjectId property.                                             |
| [`ObjectState`](#AcousticPortInDuct.ObjectState)                                                                   | ObjectState property.                                          |
| [`ObjectTags`](#AcousticPortInDuct.ObjectTags)                                                                     | ObjectTags property.                                           |
| [`Parent`](#AcousticPortInDuct.Parent)                                                                             | Parent property.                                               |
| [`PhaseAngle`](#AcousticPortInDuct.PhaseAngle)                                                                     | Gets or sets the PhaseAngle.                                   |
| [`PortAttribution`](#AcousticPortInDuct.PortAttribution)                                                           | Gets or sets the PortAttribution.                              |
| [`PortSelection`](#AcousticPortInDuct.PortSelection)                                                               | Gets or sets the PortSelection.                                |
| [`PressureAmplitude`](#AcousticPortInDuct.PressureAmplitude)                                                       | Gets or sets the PressureAmplitude.                            |
| [`Properties`](#AcousticPortInDuct.Properties)                                                                     | Gets the list of properties for this object.                   |
| [`Radius`](#AcousticPortInDuct.Radius)                                                                             | Gets or sets the Radius.                                       |
| [`ReadOnly`](#AcousticPortInDuct.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                     |
| [`SharedRefBody`](#AcousticPortInDuct.SharedRefBody)                                                               | Gets or sets the SharedRefBody.                                |
| [`State`](#AcousticPortInDuct.State)                                                                               | State property.                                                |
| [`Suppressed`](#AcousticPortInDuct.Suppressed)                                                                     | Gets or sets the Suppressed.                                   |
| [`TransferableObjectId`](#AcousticPortInDuct.TransferableObjectId)                                                 | TransferableObjectId property.                                 |
| [`VisibleProperties`](#AcousticPortInDuct.VisibleProperties)                                                       | Gets the list of properties that are visible for this object.  |
| [`WaveType`](#AcousticPortInDuct.WaveType)                                                                         | Gets or sets the WaveType.                                     |
| [`Width`](#AcousticPortInDuct.Width)                                                                               | Gets or sets the Width.                                        |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPortInDuct.AnglePhi"></a>

### *property* AcousticPortInDuct.AnglePhi *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AngleTheta"></a>

### *property* AcousticPortInDuct.AngleTheta *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AttachedRefs"></a>

### *property* AcousticPortInDuct.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Children"></a>

### *property* AcousticPortInDuct.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ClsId"></a>

### *property* AcousticPortInDuct.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Comments"></a>

### *property* AcousticPortInDuct.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CoordinateSystem"></a>

### *property* AcousticPortInDuct.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.DataModelObjectCategory"></a>

### *property* AcousticPortInDuct.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Figures"></a>

### *property* AcousticPortInDuct.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GroupingFolder"></a>

### *property* AcousticPortInDuct.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Height"></a>

### *property* AcousticPortInDuct.Height *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Height.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.IconName"></a>

### *property* AcousticPortInDuct.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Images"></a>

### *property* AcousticPortInDuct.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ImportableObjectSourceId"></a>

### *property* AcousticPortInDuct.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.InternalObject"></a>

### *property* AcousticPortInDuct.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Location"></a>

### *property* AcousticPortInDuct.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheAzimuth"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheAzimuth *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheAzimuth.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheHeight"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheHeight *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheHeight.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheRadii"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheRadii *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheRadii.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ModeIndexForPressureVariationAlongTheWidth"></a>

### *property* AcousticPortInDuct.ModeIndexForPressureVariationAlongTheWidth *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModeIndexForPressureVariationAlongTheWidth.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Name"></a>

### *property* AcousticPortInDuct.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ObjectId"></a>

### *property* AcousticPortInDuct.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ObjectState"></a>

### *property* AcousticPortInDuct.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ObjectTags"></a>

### *property* AcousticPortInDuct.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Parent"></a>

### *property* AcousticPortInDuct.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PhaseAngle"></a>

### *property* AcousticPortInDuct.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PortAttribution"></a>

### *property* AcousticPortInDuct.PortAttribution *: [Ansys.Mechanical.DataModel.Enums.PortAttribution](../../../../Mechanical/DataModel/Enums/PortAttribution.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PortAttribution) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PortAttribution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PortSelection"></a>

### *property* AcousticPortInDuct.PortSelection *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PortSelection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PressureAmplitude"></a>

### *property* AcousticPortInDuct.PressureAmplitude *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PressureAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Properties"></a>

### *property* AcousticPortInDuct.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Radius"></a>

### *property* AcousticPortInDuct.Radius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.ReadOnly"></a>

### *property* AcousticPortInDuct.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.SharedRefBody"></a>

### *property* AcousticPortInDuct.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.State"></a>

### *property* AcousticPortInDuct.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Suppressed"></a>

### *property* AcousticPortInDuct.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.TransferableObjectId"></a>

### *property* AcousticPortInDuct.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.VisibleProperties"></a>

### *property* AcousticPortInDuct.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.WaveType"></a>

### *property* AcousticPortInDuct.WaveType *: [Ansys.Mechanical.DataModel.Enums.WaveType](../../../../Mechanical/DataModel/Enums/WaveType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WaveType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WaveType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Width"></a>

### *property* AcousticPortInDuct.Width *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPortInDuct.Activate"></a>

### AcousticPortInDuct.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AddComment"></a>

### AcousticPortInDuct.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AddFigure"></a>

### AcousticPortInDuct.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.AddImage"></a>

### AcousticPortInDuct.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Copy"></a>

### AcousticPortInDuct.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CopyTo"></a>

### AcousticPortInDuct.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CreateObjRef"></a>

### AcousticPortInDuct.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.CreateParameter"></a>

### AcousticPortInDuct.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Cut"></a>

### AcousticPortInDuct.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Delete"></a>

### AcousticPortInDuct.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Duplicate"></a>

### AcousticPortInDuct.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Equals"></a>

### AcousticPortInDuct.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetAPIName"></a>

### AcousticPortInDuct.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetAllProperties"></a>

### AcousticPortInDuct.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetChildren"></a>

### AcousticPortInDuct.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticPortInDuct.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetDetailsView"></a>

### AcousticPortInDuct.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetEnumName"></a>

### AcousticPortInDuct.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetHashCode"></a>

### AcousticPortInDuct.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetIconFile"></a>

### AcousticPortInDuct.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetLifetimeService"></a>

### AcousticPortInDuct.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetObjectData"></a>

### AcousticPortInDuct.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetParameter"></a>

### AcousticPortInDuct.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetPath"></a>

### AcousticPortInDuct.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetPropertyName"></a>

### AcousticPortInDuct.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetPropertyValue"></a>

### AcousticPortInDuct.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetVisibleProperties"></a>

### AcousticPortInDuct.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GetVisiblePropertyNames"></a>

### AcousticPortInDuct.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GroupAllSimilarChildren"></a>

### AcousticPortInDuct.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.GroupSimilarObjects"></a>

### AcousticPortInDuct.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.InitializeLifetimeService"></a>

### AcousticPortInDuct.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.IsPropertyEditable"></a>

### AcousticPortInDuct.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPortInDuct.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.IsPropertyVisible"></a>

### AcousticPortInDuct.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPortInDuct.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.Paste"></a>

### AcousticPortInDuct.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PromoteToNamedSelection"></a>

### AcousticPortInDuct.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PropertyByAPIName"></a>

### AcousticPortInDuct.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PropertyById"></a>

### AcousticPortInDuct.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.PropertyByName"></a>

### AcousticPortInDuct.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.RemoveFromGroup"></a>

### AcousticPortInDuct.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPortInDuct.RemoveParameter"></a>

### AcousticPortInDuct.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

