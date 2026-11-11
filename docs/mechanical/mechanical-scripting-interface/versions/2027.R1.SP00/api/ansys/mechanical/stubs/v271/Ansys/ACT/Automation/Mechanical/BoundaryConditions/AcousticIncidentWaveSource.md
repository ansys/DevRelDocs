# `AcousticIncidentWaveSource`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticIncidentWaveSource"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticIncidentWaveSource(internalObject: Any)

<a id="AcousticIncidentWaveSource"></a>

### *class* AcousticIncidentWaveSource(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticIncidentWaveSource.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticIncidentWaveSource.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticIncidentWaveSource.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticIncidentWaveSource.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticIncidentWaveSource.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticIncidentWaveSource.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticIncidentWaveSource.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticIncidentWaveSource.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticIncidentWaveSource.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticIncidentWaveSource.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticIncidentWaveSource.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticIncidentWaveSource.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticIncidentWaveSource.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticIncidentWaveSource.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticIncidentWaveSource.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticIncidentWaveSource.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticIncidentWaveSource.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticIncidentWaveSource.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticIncidentWaveSource.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticIncidentWaveSource.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticIncidentWaveSource.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticIncidentWaveSource.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticIncidentWaveSource.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticIncidentWaveSource.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticIncidentWaveSource.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticIncidentWaveSource.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticIncidentWaveSource.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticIncidentWaveSource.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticIncidentWaveSource.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticIncidentWaveSource.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticIncidentWaveSource.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticIncidentWaveSource.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticIncidentWaveSource.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticIncidentWaveSource.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticIncidentWaveSource.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticIncidentWaveSource.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticIncidentWaveSource.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticIncidentWaveSource.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticIncidentWaveSource.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticIncidentWaveSource.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AnglePhi`](#AcousticIncidentWaveSource.AnglePhi)                                         | Gets or sets the AnglePhi.                                    |
| [`AngleTheta`](#AcousticIncidentWaveSource.AngleTheta)                                     | Gets or sets the AngleTheta.                                  |
| [`AttachedRefs`](#AcousticIncidentWaveSource.AttachedRefs)                                 | AttachedRefs property.                                        |
| [`CalculateIncidentPower`](#AcousticIncidentWaveSource.CalculateIncidentPower)             | Gets or sets the CalculateIncidentPower.                      |
| [`Children`](#AcousticIncidentWaveSource.Children)                                         | Gets the list of children.                                    |
| [`ClsId`](#AcousticIncidentWaveSource.ClsId)                                               | ClsId property.                                               |
| [`Comments`](#AcousticIncidentWaveSource.Comments)                                         | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticIncidentWaveSource.DataModelObjectCategory)           | Gets the current DataModelObject's category.                  |
| [`DipoleLength`](#AcousticIncidentWaveSource.DipoleLength)                                 | Gets or sets the DipoleLength.                                |
| [`ExcitationType`](#AcousticIncidentWaveSource.ExcitationType)                             | Gets or sets the ExcitationType.                              |
| [`Figures`](#AcousticIncidentWaveSource.Figures)                                           | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticIncidentWaveSource.GroupingFolder)                             | GroupingFolder property.                                      |
| [`IconName`](#AcousticIncidentWaveSource.IconName)                                         | IconName property.                                            |
| [`Images`](#AcousticIncidentWaveSource.Images)                                             | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticIncidentWaveSource.ImportableObjectSourceId)         | ImportableObjectSourceId property.                            |
| [`IncidentWaveLocation`](#AcousticIncidentWaveSource.IncidentWaveLocation)                 | Gets or sets the IncidentWaveLocation.                        |
| [`InternalObject`](#AcousticIncidentWaveSource.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`MassDensity`](#AcousticIncidentWaveSource.MassDensity)                                   | Gets or sets the MassDensity.                                 |
| [`Material`](#Material)                                                      | Gets or sets the Material.                                    |
| [`MaterialAssignment`](#MaterialAssignment)                        | Gets or sets the Material.                                    |
| [`Name`](#AcousticIncidentWaveSource.Name)                                                 | Name property.                                                |
| [`ObjectId`](#AcousticIncidentWaveSource.ObjectId)                                         | ObjectId property.                                            |
| [`ObjectState`](#AcousticIncidentWaveSource.ObjectState)                                   | ObjectState property.                                         |
| [`ObjectTags`](#AcousticIncidentWaveSource.ObjectTags)                                     | ObjectTags property.                                          |
| [`Parent`](#AcousticIncidentWaveSource.Parent)                                             | Parent property.                                              |
| [`PhaseAngle`](#AcousticIncidentWaveSource.PhaseAngle)                                     | Gets or sets the PhaseAngle.                                  |
| [`PortSelection`](#AcousticIncidentWaveSource.PortSelection)                               | Gets or sets the PortSelection.                               |
| [`PressureAmplitude`](#AcousticIncidentWaveSource.PressureAmplitude)                       | Gets or sets the PressureAmplitude.                           |
| [`Properties`](#AcousticIncidentWaveSource.Properties)                                     | Gets the list of properties for this object.                  |
| [`RadiusOfPulsatingSphere`](#AcousticIncidentWaveSource.RadiusOfPulsatingSphere)           | Gets or sets the RadiusOfPulsatingSphere.                     |
| [`ReadOnly`](#AcousticIncidentWaveSource.ReadOnly)                                         | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticIncidentWaveSource.SharedRefBody)                               | Gets or sets the SharedRefBody.                               |
| [`SourceOriginX`](#AcousticIncidentWaveSource.SourceOriginX)                               | Gets or sets the SourceOriginX.                               |
| [`SourceOriginY`](#AcousticIncidentWaveSource.SourceOriginY)                               | Gets or sets the SourceOriginY.                               |
| [`SourceOriginZ`](#AcousticIncidentWaveSource.SourceOriginZ)                               | Gets or sets the SourceOriginZ.                               |
| [`SpeedOfSound`](#AcousticIncidentWaveSource.SpeedOfSound)                                 | Gets or sets the SpeedOfSound.                                |
| [`State`](#AcousticIncidentWaveSource.State)                                               | State property.                                               |
| [`Suppressed`](#AcousticIncidentWaveSource.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticIncidentWaveSource.TransferableObjectId)                 | TransferableObjectId property.                                |
| [`VelocityAmplitude`](#AcousticIncidentWaveSource.VelocityAmplitude)                       | Gets or sets the VelocityAmplitude.                           |
| [`VisibleProperties`](#AcousticIncidentWaveSource.VisibleProperties)                       | Gets the list of properties that are visible for this object. |
| [`WaveNumber`](#AcousticIncidentWaveSource.WaveNumber)                                     | Gets the WaveNumber.                                          |
| [`WaveType`](#AcousticIncidentWaveSource.WaveType)                                         | Gets or sets the WaveType.                                    |
| [`XComponentOfUnitDipoleVector`](#AcousticIncidentWaveSource.XComponentOfUnitDipoleVector) | Gets or sets the XComponentOfUnitDipoleVector.                |
| [`YComponentOfUnitDipoleVector`](#AcousticIncidentWaveSource.YComponentOfUnitDipoleVector) | Gets or sets the YComponentOfUnitDipoleVector.                |
| [`ZComponentOfUnitDipoleVector`](#AcousticIncidentWaveSource.ZComponentOfUnitDipoleVector) | Gets or sets the ZComponentOfUnitDipoleVector.                |

<a id="property-detail"></a>

## Property detail

<a id="AcousticIncidentWaveSource.AnglePhi"></a>

### *property* AcousticIncidentWaveSource.AnglePhi *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AngleTheta"></a>

### *property* AcousticIncidentWaveSource.AngleTheta *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AttachedRefs"></a>

### *property* AcousticIncidentWaveSource.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.CalculateIncidentPower"></a>

### *property* AcousticIncidentWaveSource.CalculateIncidentPower *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateIncidentPower.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Children"></a>

### *property* AcousticIncidentWaveSource.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ClsId"></a>

### *property* AcousticIncidentWaveSource.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Comments"></a>

### *property* AcousticIncidentWaveSource.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.DataModelObjectCategory"></a>

### *property* AcousticIncidentWaveSource.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.DipoleLength"></a>

### *property* AcousticIncidentWaveSource.DipoleLength *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DipoleLength.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ExcitationType"></a>

### *property* AcousticIncidentWaveSource.ExcitationType *: [Ansys.Mechanical.DataModel.Enums.ExcitationType](../../../../Mechanical/DataModel/Enums/ExcitationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExcitationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExcitationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Figures"></a>

### *property* AcousticIncidentWaveSource.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GroupingFolder"></a>

### *property* AcousticIncidentWaveSource.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.IconName"></a>

### *property* AcousticIncidentWaveSource.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Images"></a>

### *property* AcousticIncidentWaveSource.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ImportableObjectSourceId"></a>

### *property* AcousticIncidentWaveSource.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.IncidentWaveLocation"></a>

### *property* AcousticIncidentWaveSource.IncidentWaveLocation *: [Ansys.Mechanical.DataModel.Enums.IncidentWaveLocation](../../../../Mechanical/DataModel/Enums/IncidentWaveLocation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.IncidentWaveLocation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IncidentWaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.InternalObject"></a>

### *property* AcousticIncidentWaveSource.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.MassDensity"></a>

### *property* AcousticIncidentWaveSource.MassDensity *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MassDensity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Material"></a>

### *property* AcousticIncidentWaveSource.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.MaterialAssignment"></a>

### *property* AcousticIncidentWaveSource.MaterialAssignment *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Name"></a>

### *property* AcousticIncidentWaveSource.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ObjectId"></a>

### *property* AcousticIncidentWaveSource.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ObjectState"></a>

### *property* AcousticIncidentWaveSource.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ObjectTags"></a>

### *property* AcousticIncidentWaveSource.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Parent"></a>

### *property* AcousticIncidentWaveSource.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PhaseAngle"></a>

### *property* AcousticIncidentWaveSource.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PortSelection"></a>

### *property* AcousticIncidentWaveSource.PortSelection *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](AcousticPort.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PortSelection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PressureAmplitude"></a>

### *property* AcousticIncidentWaveSource.PressureAmplitude *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PressureAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Properties"></a>

### *property* AcousticIncidentWaveSource.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.RadiusOfPulsatingSphere"></a>

### *property* AcousticIncidentWaveSource.RadiusOfPulsatingSphere *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RadiusOfPulsatingSphere.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ReadOnly"></a>

### *property* AcousticIncidentWaveSource.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SharedRefBody"></a>

### *property* AcousticIncidentWaveSource.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SourceOriginX"></a>

### *property* AcousticIncidentWaveSource.SourceOriginX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceOriginX.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SourceOriginY"></a>

### *property* AcousticIncidentWaveSource.SourceOriginY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceOriginY.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SourceOriginZ"></a>

### *property* AcousticIncidentWaveSource.SourceOriginZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceOriginZ.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.SpeedOfSound"></a>

### *property* AcousticIncidentWaveSource.SpeedOfSound *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpeedOfSound.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.State"></a>

### *property* AcousticIncidentWaveSource.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Suppressed"></a>

### *property* AcousticIncidentWaveSource.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.TransferableObjectId"></a>

### *property* AcousticIncidentWaveSource.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.VelocityAmplitude"></a>

### *property* AcousticIncidentWaveSource.VelocityAmplitude *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.VisibleProperties"></a>

### *property* AcousticIncidentWaveSource.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.WaveNumber"></a>

### *property* AcousticIncidentWaveSource.WaveNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the WaveNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.WaveType"></a>

### *property* AcousticIncidentWaveSource.WaveType *: [Ansys.Mechanical.DataModel.Enums.WaveType](../../../../Mechanical/DataModel/Enums/WaveType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WaveType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WaveType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.XComponentOfUnitDipoleVector"></a>

### *property* AcousticIncidentWaveSource.XComponentOfUnitDipoleVector *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XComponentOfUnitDipoleVector.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.YComponentOfUnitDipoleVector"></a>

### *property* AcousticIncidentWaveSource.YComponentOfUnitDipoleVector *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YComponentOfUnitDipoleVector.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.ZComponentOfUnitDipoleVector"></a>

### *property* AcousticIncidentWaveSource.ZComponentOfUnitDipoleVector *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZComponentOfUnitDipoleVector.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticIncidentWaveSource.Activate"></a>

### AcousticIncidentWaveSource.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AddComment"></a>

### AcousticIncidentWaveSource.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AddFigure"></a>

### AcousticIncidentWaveSource.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.AddImage"></a>

### AcousticIncidentWaveSource.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Copy"></a>

### AcousticIncidentWaveSource.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.CopyTo"></a>

### AcousticIncidentWaveSource.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.CreateObjRef"></a>

### AcousticIncidentWaveSource.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.CreateParameter"></a>

### AcousticIncidentWaveSource.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Cut"></a>

### AcousticIncidentWaveSource.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Delete"></a>

### AcousticIncidentWaveSource.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Duplicate"></a>

### AcousticIncidentWaveSource.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Equals"></a>

### AcousticIncidentWaveSource.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetAPIName"></a>

### AcousticIncidentWaveSource.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetAllProperties"></a>

### AcousticIncidentWaveSource.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetChildren"></a>

### AcousticIncidentWaveSource.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticIncidentWaveSource.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetDetailsView"></a>

### AcousticIncidentWaveSource.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetEnumName"></a>

### AcousticIncidentWaveSource.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetHashCode"></a>

### AcousticIncidentWaveSource.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetIconFile"></a>

### AcousticIncidentWaveSource.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetLifetimeService"></a>

### AcousticIncidentWaveSource.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetObjectData"></a>

### AcousticIncidentWaveSource.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetParameter"></a>

### AcousticIncidentWaveSource.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetPath"></a>

### AcousticIncidentWaveSource.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetPropertyName"></a>

### AcousticIncidentWaveSource.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetPropertyValue"></a>

### AcousticIncidentWaveSource.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetVisibleProperties"></a>

### AcousticIncidentWaveSource.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GetVisiblePropertyNames"></a>

### AcousticIncidentWaveSource.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GroupAllSimilarChildren"></a>

### AcousticIncidentWaveSource.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.GroupSimilarObjects"></a>

### AcousticIncidentWaveSource.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.InitializeLifetimeService"></a>

### AcousticIncidentWaveSource.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.IsPropertyEditable"></a>

### AcousticIncidentWaveSource.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticIncidentWaveSource.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.IsPropertyVisible"></a>

### AcousticIncidentWaveSource.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticIncidentWaveSource.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.Paste"></a>

### AcousticIncidentWaveSource.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PromoteToNamedSelection"></a>

### AcousticIncidentWaveSource.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PropertyByAPIName"></a>

### AcousticIncidentWaveSource.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PropertyById"></a>

### AcousticIncidentWaveSource.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.PropertyByName"></a>

### AcousticIncidentWaveSource.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.RemoveFromGroup"></a>

### AcousticIncidentWaveSource.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticIncidentWaveSource.RemoveParameter"></a>

### AcousticIncidentWaveSource.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

