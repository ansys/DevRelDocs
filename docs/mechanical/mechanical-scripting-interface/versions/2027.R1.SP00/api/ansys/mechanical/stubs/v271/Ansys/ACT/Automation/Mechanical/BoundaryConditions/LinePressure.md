# `LinePressure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LinePressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.LinePressure(internalObject: Any)

<a id="LinePressure"></a>

### *class* LinePressure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LinePressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LinePressure.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#LinePressure.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#LinePressure.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#LinePressure.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#LinePressure.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LinePressure.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LinePressure.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LinePressure.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#LinePressure.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LinePressure.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#LinePressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#LinePressure.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#LinePressure.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#LinePressure.GetActivateAtLoadStep)                   | Gets whether the line pressure is active at the specified load step.                        |
| [`GetAllProperties`](#LinePressure.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#LinePressure.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#LinePressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#LinePressure.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LinePressure.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#LinePressure.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#LinePressure.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LinePressure.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#LinePressure.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#LinePressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LinePressure.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#LinePressure.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LinePressure.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#LinePressure.GetQuantityName)                               | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#LinePressure.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LinePressure.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LinePressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LinePressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LinePressure.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LinePressure.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LinePressure.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#LinePressure.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#LinePressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#LinePressure.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#LinePressure.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#LinePressure.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LinePressure.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LinePressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#LinePressure.SetActivateAtLoadStep)                   | Sets whether the line pressure is active at the specified load step.                        |
| [`SetComponentActivateAtLoadStep`](#LinePressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#LinePressure.AttachedRefs)                               | AttachedRefs property.                                                                                                  |
| [`Children`](#LinePressure.Children)                                       | Gets the list of children.                                                                                              |
| [`ClsId`](#LinePressure.ClsId)                                             | ClsId property.                                                                                                         |
| [`Comments`](#LinePressure.Comments)                                       | Gets the list of associated comments.                                                                                   |
| [`CoordinateSystem`](#CoordinateSystem)              | Gets or sets the CoordinateSystem.                                                                                      |
| [`DataModelObjectCategory`](#LinePressure.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                                            |
| [`DefineBy`](#LinePressure.DefineBy)                                       | Gets or sets the DefineBy.                                                                                              |
| [`Direction`](#LinePressure.Direction)                                     | Gets or sets the Direction.                                                                                             |
| [`Figures`](#LinePressure.Figures)                                         | Gets the list of associated figures.                                                                                    |
| [`GraphControlsXAxis`](#LinePressure.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                                                                    |
| [`GroupingFolder`](#LinePressure.GroupingFolder)                           | GroupingFolder property.                                                                                                |
| [`IconName`](#LinePressure.IconName)                                       | IconName property.                                                                                                      |
| [`Images`](#LinePressure.Images)                                           | Gets the list of associated images.                                                                                     |
| [`ImportableObjectSourceId`](#LinePressure.ImportableObjectSourceId)       | ImportableObjectSourceId property.                                                                                      |
| [`IndependentVariable`](#LinePressure.IndependentVariable)                 | Gets or sets the IndependentVariable.                                                                                   |
| [`InternalObject`](#LinePressure.InternalObject)                           | Gets the internal object. For advanced usage only.                                                                      |
| [`LoadVectorAssignment`](#LinePressure.LoadVectorAssignment)               | Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual. |
| [`LoadVectorNumber`](#LinePressure.LoadVectorNumber)                       | Gets or sets the load vector number for the real part of the line pressure.                                             |
| [`LoadVectorNumberImaginary`](#LinePressure.LoadVectorNumberImaginary)     | Gets or sets the load vector number for the imaginary part of the line pressure.                                        |
| [`LoadVectorNumberX`](#LinePressure.LoadVectorNumberX)                     | Gets or sets the load vector number for the real part of the line pressure in the X direction.                          |
| [`LoadVectorNumberXImaginary`](#LinePressure.LoadVectorNumberXImaginary)   | Gets or sets the load vector number for the imaginary part of the line pressure in the X direction.                     |
| [`LoadVectorNumberY`](#LinePressure.LoadVectorNumberY)                     | Gets or sets the load vector number for the real part of the line pressure in the Y direction.                          |
| [`LoadVectorNumberYImaginary`](#LinePressure.LoadVectorNumberYImaginary)   | Gets or sets the load vector number for the imaginary part of the line pressure in the Y direction.                     |
| [`LoadVectorNumberZ`](#LinePressure.LoadVectorNumberZ)                     | Gets or sets the load vector number for the real part of the line pressure in the Z direction.                          |
| [`LoadVectorNumberZImaginary`](#LinePressure.LoadVectorNumberZImaginary)   | Gets or sets the load vector number for the imaginary part of the line pressure in the Z direction.                     |
| [`Location`](#LinePressure.Location)                                       | Gets or sets the Location.                                                                                              |
| [`Magnitude`](#LinePressure.Magnitude)                                     | Gets the Magnitude.                                                                                                     |
| [`MagnitudeImag`](#LinePressure.MagnitudeImag)                             | Returns the Field to get or set the value of the Magnitude – Imag property. Default: [0 [N m^-1]].                      |
| [`Name`](#LinePressure.Name)                                               | Name property.                                                                                                          |
| [`NumberOfSegments`](#LinePressure.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                                                                                      |
| [`ObjectId`](#LinePressure.ObjectId)                                       | ObjectId property.                                                                                                      |
| [`ObjectState`](#LinePressure.ObjectState)                                 | ObjectState property.                                                                                                   |
| [`ObjectTags`](#LinePressure.ObjectTags)                                   | ObjectTags property.                                                                                                    |
| [`Parent`](#LinePressure.Parent)                                           | Parent property.                                                                                                        |
| [`PhaseAngle`](#LinePressure.PhaseAngle)                                   | Gets or sets the PhaseAngle.                                                                                            |
| [`Properties`](#LinePressure.Properties)                                   | Gets the list of properties for this object.                                                                            |
| [`RangeMaximum`](#LinePressure.RangeMaximum)                               | Gets or sets the RangeMaximum.                                                                                          |
| [`RangeMinimum`](#LinePressure.RangeMinimum)                               | Gets or sets the RangeMinimum.                                                                                          |
| [`ReadOnly`](#LinePressure.ReadOnly)                                       | Gets or sets the ReadOnly.                                                                                              |
| [`RpmSelection`](#LinePressure.RpmSelection)                               | Gets or sets the RPM value at which the load is applied.                                                                |
| [`SharedRefBody`](#LinePressure.SharedRefBody)                             | Gets or sets the SharedRefBody.                                                                                         |
| [`State`](#LinePressure.State)                                             | State property.                                                                                                         |
| [`StepSelection`](#LinePressure.StepSelection)                             | Gets or sets the step number at which the load is applied. Default: 1.                                                  |
| [`StepSelectionRepresentation`](#LinePressure.StepSelectionRepresentation) | Gets or sets the string representation of the step numbers at which the load is applied.                                |
| [`StepVarying`](#LinePressure.StepVarying)                                 | Gets or sets whether the load is applied to a specific RPM/step number. Default: No.                                    |
| [`Suppressed`](#LinePressure.Suppressed)                                   | Gets or sets the Suppressed.                                                                                            |
| [`TransferableObjectId`](#LinePressure.TransferableObjectId)               | TransferableObjectId property.                                                                                          |
| [`VisibleProperties`](#LinePressure.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                                           |
| [`XComponent`](#LinePressure.XComponent)                                   | Gets the XComponent.                                                                                                    |
| [`XComponentImag`](#LinePressure.XComponentImag)                           | Returns the Field to get or set the value of the X Component – Imag property. Default: [0 [N m^-1]].                    |
| [`XYZFunctionCoordinateSystem`](#LinePressure.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                                                                           |
| [`YComponent`](#LinePressure.YComponent)                                   | Gets the YComponent.                                                                                                    |
| [`YComponentImag`](#LinePressure.YComponentImag)                           | Returns the Field to get or set the value of the Y Component – Imag property. Default: [0 [N m^-1]].                    |
| [`ZComponent`](#LinePressure.ZComponent)                                   | Gets the ZComponent.                                                                                                    |
| [`ZComponentImag`](#LinePressure.ZComponentImag)                           | Returns the Field to get or set the value of the Z Component – Imag property. Default: [0 [N m^-1]].                    |

<a id="property-detail"></a>

## Property detail

<a id="LinePressure.AttachedRefs"></a>

### *property* LinePressure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Children"></a>

### *property* LinePressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ClsId"></a>

### *property* LinePressure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Comments"></a>

### *property* LinePressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CoordinateSystem"></a>

### *property* LinePressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.DataModelObjectCategory"></a>

### *property* LinePressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.DefineBy"></a>

### *property* LinePressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Direction"></a>

### *property* LinePressure.Direction *: [Ansys.ACT.Math.Vector3D](../../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Figures"></a>

### *property* LinePressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GraphControlsXAxis"></a>

### *property* LinePressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GroupingFolder"></a>

### *property* LinePressure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.IconName"></a>

### *property* LinePressure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Images"></a>

### *property* LinePressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ImportableObjectSourceId"></a>

### *property* LinePressure.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.IndependentVariable"></a>

### *property* LinePressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.InternalObject"></a>

### *property* LinePressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.LoadVectorAssignment"></a>

### *property* LinePressure.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the LoadVectorAssignment is LoadVectorAssignment_ProgramControlled or LoadVectorAssignment_Manual.
: Default: LoadVectorAssignment_ProgramControlled.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.LoadVectorNumber"></a>

### *property* LinePressure.LoadVectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the line pressure.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.LoadVectorNumberImaginary"></a>

### *property* LinePressure.LoadVectorNumberImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the line pressure.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.LoadVectorNumberX"></a>

### *property* LinePressure.LoadVectorNumberX *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the line pressure in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.LoadVectorNumberXImaginary"></a>

### *property* LinePressure.LoadVectorNumberXImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the line pressure in the X direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.LoadVectorNumberY"></a>

### *property* LinePressure.LoadVectorNumberY *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the line pressure in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.LoadVectorNumberYImaginary"></a>

### *property* LinePressure.LoadVectorNumberYImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the line pressure in the Y direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.LoadVectorNumberZ"></a>

### *property* LinePressure.LoadVectorNumberZ *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the real part of the line pressure in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.LoadVectorNumberZImaginary"></a>

### *property* LinePressure.LoadVectorNumberZImaginary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the load vector number for the imaginary part of the line pressure in the Z direction.
: When Load Vector Assignment is set to Manual, the default value of '0' represents an invalid value that must be changed to a positive integer.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Location"></a>

### *property* LinePressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Magnitude"></a>

### *property* LinePressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.MagnitudeImag"></a>

### *property* LinePressure.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the Field to get or set the value of the Magnitude – Imag property. Default: [0 [N m^-1]].

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Name"></a>

### *property* LinePressure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.NumberOfSegments"></a>

### *property* LinePressure.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ObjectId"></a>

### *property* LinePressure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ObjectState"></a>

### *property* LinePressure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ObjectTags"></a>

### *property* LinePressure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Parent"></a>

### *property* LinePressure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PhaseAngle"></a>

### *property* LinePressure.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Properties"></a>

### *property* LinePressure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RangeMaximum"></a>

### *property* LinePressure.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RangeMinimum"></a>

### *property* LinePressure.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ReadOnly"></a>

### *property* LinePressure.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RpmSelection"></a>

### *property* LinePressure.RpmSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM value at which the load is applied.
: An exception is thrown if MultiStep is not True, StepVarying is not Yes, or HarmonicMultiStepType is not RPM.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.SharedRefBody"></a>

### *property* LinePressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.State"></a>

### *property* LinePressure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.StepSelection"></a>

### *property* LinePressure.StepSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the step number at which the load is applied. Default: 1.
: Each step number corresponds to an RPM value specified in the analysis settings.
  Setting this property also updates  to the corresponding RPM value for the specified step number.
  An exception is thrown if  is not True or  is not .
  Valid range is [1, N], where N is . An exception is thrown if the value is out-of-range.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.StepSelectionRepresentation"></a>

### *property* LinePressure.StepSelectionRepresentation *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the string representation of the step numbers at which the load is applied.
An exception is thrown if any of the below conditions are met:
1. MultiStep is not True.
2. StepVarying is not Yes.
3. HarmonicMultiStepType is not Load_Step.
4. The input format is invalid.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.StepVarying"></a>

### *property* LinePressure.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the load is applied to a specific RPM/step number. Default: No.
: An exception is thrown if  is not True.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Suppressed"></a>

### *property* LinePressure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.TransferableObjectId"></a>

### *property* LinePressure.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.VisibleProperties"></a>

### *property* LinePressure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.XComponent"></a>

### *property* LinePressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.XComponentImag"></a>

### *property* LinePressure.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the Field to get or set the value of the X Component – Imag property. Default: [0 [N m^-1]].

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.XYZFunctionCoordinateSystem"></a>

### *property* LinePressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.YComponent"></a>

### *property* LinePressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.YComponentImag"></a>

### *property* LinePressure.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the Field to get or set the value of the Y Component – Imag property. Default: [0 [N m^-1]].

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ZComponent"></a>

### *property* LinePressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ZComponentImag"></a>

### *property* LinePressure.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the Field to get or set the value of the Z Component – Imag property. Default: [0 [N m^-1]].

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinePressure.Activate"></a>

### LinePressure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.AddComment"></a>

### LinePressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.AddFigure"></a>

### LinePressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.AddImage"></a>

### LinePressure.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Copy"></a>

### LinePressure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CopyTo"></a>

### LinePressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CreateObjRef"></a>

### LinePressure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CreateParameter"></a>

### LinePressure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Cut"></a>

### LinePressure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Delete"></a>

### LinePressure.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Duplicate"></a>

### LinePressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Equals"></a>

### LinePressure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetAPIName"></a>

### LinePressure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetActivateAtLoadStep"></a>

### LinePressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the line pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetAllProperties"></a>

### LinePressure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetChildren"></a>

### LinePressure.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LinePressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetComponentActivateAtLoadStep"></a>

### LinePressure.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetDetailsView"></a>

### LinePressure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetEnumName"></a>

### LinePressure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetHashCode"></a>

### LinePressure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetIconFile"></a>

### LinePressure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetLifetimeService"></a>

### LinePressure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetObjectData"></a>

### LinePressure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetParameter"></a>

### LinePressure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetPath"></a>

### LinePressure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetPropertyName"></a>

### LinePressure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetPropertyValue"></a>

### LinePressure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetQuantityName"></a>

### LinePressure.GetQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetVisibleProperties"></a>

### LinePressure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetVisiblePropertyNames"></a>

### LinePressure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GroupAllSimilarChildren"></a>

### LinePressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GroupSimilarObjects"></a>

### LinePressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.InitializeLifetimeService"></a>

### LinePressure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.IsPropertyEditable"></a>

### LinePressure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinePressure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.IsPropertyVisible"></a>

### LinePressure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinePressure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Paste"></a>

### LinePressure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PromoteToNamedSelection"></a>

### LinePressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PropertyByAPIName"></a>

### LinePressure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PropertyById"></a>

### LinePressure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PropertyByName"></a>

### LinePressure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RemoveFromGroup"></a>

### LinePressure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RemoveParameter"></a>

### LinePressure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.SetActivateAtLoadStep"></a>

### LinePressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the line pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.SetComponentActivateAtLoadStep"></a>

### LinePressure.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

