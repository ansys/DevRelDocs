# `AcousticDiffuseSoundField`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticDiffuseSoundField"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticDiffuseSoundField(internalObject: Any)

<a id="AcousticDiffuseSoundField"></a>

### *class* AcousticDiffuseSoundField(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticDiffuseSoundField.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticDiffuseSoundField.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticDiffuseSoundField.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticDiffuseSoundField.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticDiffuseSoundField.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticDiffuseSoundField.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticDiffuseSoundField.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticDiffuseSoundField.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticDiffuseSoundField.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticDiffuseSoundField.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticDiffuseSoundField.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticDiffuseSoundField.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticDiffuseSoundField.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticDiffuseSoundField.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticDiffuseSoundField.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticDiffuseSoundField.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticDiffuseSoundField.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticDiffuseSoundField.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticDiffuseSoundField.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticDiffuseSoundField.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticDiffuseSoundField.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticDiffuseSoundField.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticDiffuseSoundField.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticDiffuseSoundField.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticDiffuseSoundField.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticDiffuseSoundField.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticDiffuseSoundField.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticDiffuseSoundField.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticDiffuseSoundField.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticDiffuseSoundField.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticDiffuseSoundField.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticDiffuseSoundField.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticDiffuseSoundField.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticDiffuseSoundField.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticDiffuseSoundField.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticDiffuseSoundField.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticDiffuseSoundField.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticDiffuseSoundField.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticDiffuseSoundField.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticDiffuseSoundField.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticDiffuseSoundField.AttachedRefs)                                             | AttachedRefs property.                                        |
| [`Children`](#AcousticDiffuseSoundField.Children)                                                     | Gets the list of children.                                    |
| [`ClsId`](#AcousticDiffuseSoundField.ClsId)                                                           | ClsId property.                                               |
| [`Comments`](#AcousticDiffuseSoundField.Comments)                                                     | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CoordinateSystem)                                         | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#AcousticDiffuseSoundField.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticDiffuseSoundField.Figures)                                                       | Gets the list of associated figures.                          |
| [`FrequencyOfNormConvergenceCheck`](#AcousticDiffuseSoundField.FrequencyOfNormConvergenceCheck)       | Gets or sets the FrequencyOfNormConvergenceCheck.             |
| [`GroupingFolder`](#AcousticDiffuseSoundField.GroupingFolder)                                         | GroupingFolder property.                                      |
| [`IconName`](#AcousticDiffuseSoundField.IconName)                                                     | IconName property.                                            |
| [`Images`](#AcousticDiffuseSoundField.Images)                                                         | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticDiffuseSoundField.ImportableObjectSourceId)                     | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticDiffuseSoundField.InternalObject)                                         | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticDiffuseSoundField.Location)                                                     | Gets or sets the Location.                                    |
| [`MassDensity`](#AcousticDiffuseSoundField.MassDensity)                                               | Gets the MassDensity.                                         |
| [`Material`](#Material)                                                                 | Gets or sets the Material.                                    |
| [`MaterialAssignment`](#MaterialAssignment)                                   | Gets or sets the Material.                                    |
| [`MaximumIncidentAngle`](#AcousticDiffuseSoundField.MaximumIncidentAngle)                             | Gets or sets the MaximumIncidentAngle.                        |
| [`Name`](#AcousticDiffuseSoundField.Name)                                                             | Name property.                                                |
| [`NormConvergenceTolerance`](#AcousticDiffuseSoundField.NormConvergenceTolerance)                     | Gets or sets the NormConvergenceTolerance.                    |
| [`NumberOfDivisionsOnReferenceSphere`](#AcousticDiffuseSoundField.NumberOfDivisionsOnReferenceSphere) | Gets or sets the NumberOfDivisionsOnReferenceSphere.          |
| [`NumberOfRandomSampling`](#AcousticDiffuseSoundField.NumberOfRandomSampling)                         | Gets or sets the NumberOfRandomSampling.                      |
| [`ObjectId`](#AcousticDiffuseSoundField.ObjectId)                                                     | ObjectId property.                                            |
| [`ObjectState`](#AcousticDiffuseSoundField.ObjectState)                                               | ObjectState property.                                         |
| [`ObjectTags`](#AcousticDiffuseSoundField.ObjectTags)                                                 | ObjectTags property.                                          |
| [`Parent`](#AcousticDiffuseSoundField.Parent)                                                         | Parent property.                                              |
| [`PressureExcitation`](#AcousticDiffuseSoundField.PressureExcitation)                                 | Gets the PressureExcitation.                                  |
| [`Properties`](#AcousticDiffuseSoundField.Properties)                                                 | Gets the list of properties for this object.                  |
| [`RadiusOfReferenceSphere`](#AcousticDiffuseSoundField.RadiusOfReferenceSphere)                       | Gets or sets the RadiusOfReferenceSphere.                     |
| [`RadiusOfReferenceSphereDefineBy`](#AcousticDiffuseSoundField.RadiusOfReferenceSphereDefineBy)       | Gets or sets the RadiusOfReferenceSphereDefineBy.             |
| [`RandomSamplingType`](#AcousticDiffuseSoundField.RandomSamplingType)                                 | Gets or sets the RandomSamplingType.                          |
| [`ReadOnly`](#AcousticDiffuseSoundField.ReadOnly)                                                     | Gets or sets the ReadOnly.                                    |
| [`ReferencePowerSpectralDensity`](#AcousticDiffuseSoundField.ReferencePowerSpectralDensity)           | Gets or sets the ReferencePowerSpectralDensity.               |
| [`SharedRefBody`](#AcousticDiffuseSoundField.SharedRefBody)                                           | Gets or sets the SharedRefBody.                               |
| [`SpeedOfSound`](#AcousticDiffuseSoundField.SpeedOfSound)                                             | Gets the SpeedOfSound.                                        |
| [`State`](#AcousticDiffuseSoundField.State)                                                           | State property.                                               |
| [`Suppressed`](#AcousticDiffuseSoundField.Suppressed)                                                 | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticDiffuseSoundField.TransferableObjectId)                             | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticDiffuseSoundField.VisibleProperties)                                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticDiffuseSoundField.AttachedRefs"></a>

### *property* AcousticDiffuseSoundField.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Children"></a>

### *property* AcousticDiffuseSoundField.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.ClsId"></a>

### *property* AcousticDiffuseSoundField.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Comments"></a>

### *property* AcousticDiffuseSoundField.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.CoordinateSystem"></a>

### *property* AcousticDiffuseSoundField.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.DataModelObjectCategory"></a>

### *property* AcousticDiffuseSoundField.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Figures"></a>

### *property* AcousticDiffuseSoundField.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.FrequencyOfNormConvergenceCheck"></a>

### *property* AcousticDiffuseSoundField.FrequencyOfNormConvergenceCheck *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencyOfNormConvergenceCheck.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GroupingFolder"></a>

### *property* AcousticDiffuseSoundField.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.IconName"></a>

### *property* AcousticDiffuseSoundField.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Images"></a>

### *property* AcousticDiffuseSoundField.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.ImportableObjectSourceId"></a>

### *property* AcousticDiffuseSoundField.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.InternalObject"></a>

### *property* AcousticDiffuseSoundField.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Location"></a>

### *property* AcousticDiffuseSoundField.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.MassDensity"></a>

### *property* AcousticDiffuseSoundField.MassDensity *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MassDensity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Material"></a>

### *property* AcousticDiffuseSoundField.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.MaterialAssignment"></a>

### *property* AcousticDiffuseSoundField.MaterialAssignment *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.MaximumIncidentAngle"></a>

### *property* AcousticDiffuseSoundField.MaximumIncidentAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumIncidentAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Name"></a>

### *property* AcousticDiffuseSoundField.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.NormConvergenceTolerance"></a>

### *property* AcousticDiffuseSoundField.NormConvergenceTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.NumberOfDivisionsOnReferenceSphere"></a>

### *property* AcousticDiffuseSoundField.NumberOfDivisionsOnReferenceSphere *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfDivisionsOnReferenceSphere.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.NumberOfRandomSampling"></a>

### *property* AcousticDiffuseSoundField.NumberOfRandomSampling *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfRandomSampling.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.ObjectId"></a>

### *property* AcousticDiffuseSoundField.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.ObjectState"></a>

### *property* AcousticDiffuseSoundField.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.ObjectTags"></a>

### *property* AcousticDiffuseSoundField.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Parent"></a>

### *property* AcousticDiffuseSoundField.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.PressureExcitation"></a>

### *property* AcousticDiffuseSoundField.PressureExcitation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PressureExcitation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Properties"></a>

### *property* AcousticDiffuseSoundField.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.RadiusOfReferenceSphere"></a>

### *property* AcousticDiffuseSoundField.RadiusOfReferenceSphere *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RadiusOfReferenceSphere.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.RadiusOfReferenceSphereDefineBy"></a>

### *property* AcousticDiffuseSoundField.RadiusOfReferenceSphereDefineBy *: [Ansys.Mechanical.DataModel.Enums.RadiusOfReferenceSphereDefineBy](../../../../Mechanical/DataModel/Enums/RadiusOfReferenceSphereDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RadiusOfReferenceSphereDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RadiusOfReferenceSphereDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.RandomSamplingType"></a>

### *property* AcousticDiffuseSoundField.RandomSamplingType *: [Ansys.Mechanical.DataModel.Enums.RandomSamplingType](../../../../Mechanical/DataModel/Enums/RandomSamplingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RandomSamplingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RandomSamplingType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.ReadOnly"></a>

### *property* AcousticDiffuseSoundField.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.ReferencePowerSpectralDensity"></a>

### *property* AcousticDiffuseSoundField.ReferencePowerSpectralDensity *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferencePowerSpectralDensity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.SharedRefBody"></a>

### *property* AcousticDiffuseSoundField.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.SpeedOfSound"></a>

### *property* AcousticDiffuseSoundField.SpeedOfSound *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SpeedOfSound.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.State"></a>

### *property* AcousticDiffuseSoundField.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Suppressed"></a>

### *property* AcousticDiffuseSoundField.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.TransferableObjectId"></a>

### *property* AcousticDiffuseSoundField.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.VisibleProperties"></a>

### *property* AcousticDiffuseSoundField.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticDiffuseSoundField.Activate"></a>

### AcousticDiffuseSoundField.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.AddComment"></a>

### AcousticDiffuseSoundField.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.AddFigure"></a>

### AcousticDiffuseSoundField.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.AddImage"></a>

### AcousticDiffuseSoundField.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Copy"></a>

### AcousticDiffuseSoundField.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.CopyTo"></a>

### AcousticDiffuseSoundField.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.CreateObjRef"></a>

### AcousticDiffuseSoundField.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.CreateParameter"></a>

### AcousticDiffuseSoundField.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Cut"></a>

### AcousticDiffuseSoundField.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Delete"></a>

### AcousticDiffuseSoundField.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Duplicate"></a>

### AcousticDiffuseSoundField.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Equals"></a>

### AcousticDiffuseSoundField.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetAPIName"></a>

### AcousticDiffuseSoundField.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetAllProperties"></a>

### AcousticDiffuseSoundField.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetChildren"></a>

### AcousticDiffuseSoundField.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticDiffuseSoundField.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetDetailsView"></a>

### AcousticDiffuseSoundField.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetEnumName"></a>

### AcousticDiffuseSoundField.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetHashCode"></a>

### AcousticDiffuseSoundField.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetIconFile"></a>

### AcousticDiffuseSoundField.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetLifetimeService"></a>

### AcousticDiffuseSoundField.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetObjectData"></a>

### AcousticDiffuseSoundField.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetParameter"></a>

### AcousticDiffuseSoundField.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetPath"></a>

### AcousticDiffuseSoundField.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetPropertyName"></a>

### AcousticDiffuseSoundField.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetPropertyValue"></a>

### AcousticDiffuseSoundField.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetVisibleProperties"></a>

### AcousticDiffuseSoundField.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GetVisiblePropertyNames"></a>

### AcousticDiffuseSoundField.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GroupAllSimilarChildren"></a>

### AcousticDiffuseSoundField.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.GroupSimilarObjects"></a>

### AcousticDiffuseSoundField.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.InitializeLifetimeService"></a>

### AcousticDiffuseSoundField.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.IsPropertyEditable"></a>

### AcousticDiffuseSoundField.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticDiffuseSoundField.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.IsPropertyVisible"></a>

### AcousticDiffuseSoundField.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticDiffuseSoundField.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.Paste"></a>

### AcousticDiffuseSoundField.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.PromoteToNamedSelection"></a>

### AcousticDiffuseSoundField.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.PropertyByAPIName"></a>

### AcousticDiffuseSoundField.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.PropertyById"></a>

### AcousticDiffuseSoundField.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.PropertyByName"></a>

### AcousticDiffuseSoundField.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.RemoveFromGroup"></a>

### AcousticDiffuseSoundField.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundField.RemoveParameter"></a>

### AcousticDiffuseSoundField.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

