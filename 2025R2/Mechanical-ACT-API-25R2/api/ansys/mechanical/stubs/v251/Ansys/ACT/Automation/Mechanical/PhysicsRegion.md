# `PhysicsRegion`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.PhysicsRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PhysicsRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PhysicsRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Activate`](#PhysicsRegion.Activate)                                                     | Activate the current object.                                                           |
| [`AddComment`](#PhysicsRegion.AddComment)                                                 | Creates a new child Comment.                                                           |
| [`AddFigure`](#PhysicsRegion.AddFigure)                                                   | Creates a new child Figure.                                                            |
| [`AddImage`](#PhysicsRegion.AddImage)                                                     | Creates a new child Image.                                                             |
| [`CopyTo`](#PhysicsRegion.CopyTo)                                                         | Copies all visible properties from this object to another.                             |
| [`CreateParameter`](#PhysicsRegion.CreateParameter)                                       | Creates a new parameter for a Property.                                                |
| [`Delete`](#PhysicsRegion.Delete)                                                         | Run the Delete action.                                                                 |
| [`Duplicate`](#PhysicsRegion.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                         |
| [`GetChildren`](#PhysicsRegion.GetChildren)                                               | Gets the list of children, filtered by type.                                           |
| [`GetParameter`](#PhysicsRegion.GetParameter)                                             | Gets the parameter corresponding to the given property.                                |
| [`GroupAllSimilarChildren`](#PhysicsRegion.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                |
| [`GroupSimilarObjects`](#PhysicsRegion.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                    |
| [`PropertyByAPIName`](#PhysicsRegion.PropertyByAPIName)                                   | Get a property by its API name.                                                        |
| [`PropertyByName`](#PhysicsRegion.PropertyByName)                                         | Get a property by its unique name.                                                     |
| [`RemoveParameter`](#PhysicsRegion.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.      |
| [`RenameBasedOnDefinition`](#PhysicsRegion.RenameBasedOnDefinition)                       | Run the RenameBasedOnDefinition action.                                                |
| [`SelectInvalidBodiesOnPhysicsRegion`](#PhysicsRegion.SelectInvalidBodiesOnPhysicsRegion) | Run the SelectInvalidBodiesOnPhysicsRegion action to select bodies that are not valid. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Acoustics`](#PhysicsRegion.Acoustics)                                                                 | Gets or sets the Acoustics.                                   |
| [`ArtificiallyMatchedLayers`](#PhysicsRegion.ArtificiallyMatchedLayers)                                 | Gets or sets the ArtificiallyMatchedLayers.                   |
| [`Children`](#PhysicsRegion.Children)                                                                   | Gets the list of children.                                    |
| [`Comments`](#PhysicsRegion.Comments)                                                                   | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PhysicsRegion.DataModelObjectCategory)                                     | Gets the current DataModelObject’s category.                  |
| [`Electric`](#PhysicsRegion.Electric)                                                                   | Gets or sets the Electric.                                    |
| [`ElectrostaticForce`](#PhysicsRegion.ElectrostaticForce)                                               | Gets or sets the ElectrostaticForce.                          |
| [`ElementMorphing`](#PhysicsRegion.ElementMorphing)                                                     | Gets or sets the ElementMorphing.                             |
| [`EvanescentWaveAttenuation`](#PhysicsRegion.EvanescentWaveAttenuation)                                 | Gets or sets the EvanescentWaveAttenuation.                   |
| [`Figures`](#PhysicsRegion.Figures)                                                                     | Gets the list of associated figures.                          |
| [`FluidBehavior`](#PhysicsRegion.FluidBehavior)                                                         | Gets or sets the FluidBehavior.                               |
| [`Images`](#PhysicsRegion.Images)                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#PhysicsRegion.InternalObject)                                                       | Gets the internal object. For advanced usage only.            |
| [`Location`](#PhysicsRegion.Location)                                                                   | Gets or sets the Location.                                    |
| [`PMLElementCoordinateSystem`](#PhysicsRegion.PMLElementCoordinateSystem)                               | Gets or sets the PMLElementCoordinateSystem.                  |
| [`PMLOptions`](#PhysicsRegion.PMLOptions)                                                               | Gets or sets the PMLOptions.                                  |
| [`Piezoelectric`](#PhysicsRegion.Piezoelectric)                                                         | Gets the Piezoelectric.                                       |
| [`Properties`](#PhysicsRegion.Properties)                                                               | Gets the list of properties for this object.                  |
| [`ReferencePressure`](#PhysicsRegion.ReferencePressure)                                                 | Gets or sets the ReferencePressure.                           |
| [`ReferenceStaticPressure`](#PhysicsRegion.ReferenceStaticPressure)                                     | Gets or sets the ReferenceStaticPressure.                     |
| [`ReflectionCoefficient`](#PhysicsRegion.ReflectionCoefficient)                                         | Gets or sets the ReflectionCoefficient.                       |
| [`ReflectionCoefficientInNegativeXDirection`](#PhysicsRegion.ReflectionCoefficientInNegativeXDirection) | Gets or sets the ReflectionCoefficientInNegativeXDirection.   |
| [`ReflectionCoefficientInNegativeYDirection`](#PhysicsRegion.ReflectionCoefficientInNegativeYDirection) | Gets or sets the ReflectionCoefficientInNegativeYDirection.   |
| [`ReflectionCoefficientInNegativeZDirection`](#PhysicsRegion.ReflectionCoefficientInNegativeZDirection) | Gets or sets the ReflectionCoefficientInNegativeZDirection.   |
| [`ReflectionCoefficientInPositiveXDirection`](#PhysicsRegion.ReflectionCoefficientInPositiveXDirection) | Gets or sets the ReflectionCoefficientInPositiveXDirection.   |
| [`ReflectionCoefficientInPositiveYDirection`](#PhysicsRegion.ReflectionCoefficientInPositiveYDirection) | Gets or sets the ReflectionCoefficientInPositiveYDirection.   |
| [`ReflectionCoefficientInPositiveZDirection`](#PhysicsRegion.ReflectionCoefficientInPositiveZDirection) | Gets or sets the ReflectionCoefficientInPositiveZDirection.   |
| [`ReflectionCoefficientsType`](#PhysicsRegion.ReflectionCoefficientsType)                               | Gets or sets the ReflectionCoefficientsType.                  |
| [`Structural`](#PhysicsRegion.Structural)                                                               | Gets or sets the Structural.                                  |
| [`Suppressed`](#PhysicsRegion.Suppressed)                                                               | Gets or sets the Suppressed.                                  |
| [`Thermal`](#PhysicsRegion.Thermal)                                                                     | Gets or sets the Thermal.                                     |
| [`ThermalStrain`](#PhysicsRegion.ThermalStrain)                                                         | Gets or sets the ThermalStrain.                               |
| [`ThermoelasticDamping`](#PhysicsRegion.ThermoelasticDamping)                                           | Gets or sets the ThermoelasticDamping.                        |
| [`VisibleProperties`](#PhysicsRegion.VisibleProperties)                                                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PhysicsRegion.Acoustics"></a>

### *property* PhysicsRegion.Acoustics *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Acoustics.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ArtificiallyMatchedLayers"></a>

### *property* PhysicsRegion.ArtificiallyMatchedLayers *: [Ansys.Mechanical.DataModel.Enums.ArtificiallyMatchedLayers](../../../Mechanical/DataModel/Enums/ArtificiallyMatchedLayers.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ArtificiallyMatchedLayers) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificiallyMatchedLayers.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Children"></a>

### *property* PhysicsRegion.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Comments"></a>

### *property* PhysicsRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.DataModelObjectCategory"></a>

### *property* PhysicsRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Electric"></a>

### *property* PhysicsRegion.Electric *: [Ansys.Mechanical.DataModel.Enums.ElectricType](../../../Mechanical/DataModel/Enums/ElectricType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElectricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Electric.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ElectrostaticForce"></a>

### *property* PhysicsRegion.ElectrostaticForce *: [Ansys.Mechanical.DataModel.Enums.ElectrostaticForce](../../../Mechanical/DataModel/Enums/ElectrostaticForce.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElectrostaticForce) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectrostaticForce.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ElementMorphing"></a>

### *property* PhysicsRegion.ElementMorphing *: [Ansys.Mechanical.DataModel.Enums.ElementMorphingType](../../../Mechanical/DataModel/Enums/ElementMorphingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElementMorphingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementMorphing.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.EvanescentWaveAttenuation"></a>

### *property* PhysicsRegion.EvanescentWaveAttenuation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EvanescentWaveAttenuation.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Figures"></a>

### *property* PhysicsRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.FluidBehavior"></a>

### *property* PhysicsRegion.FluidBehavior *: [Ansys.Mechanical.DataModel.Enums.FluidBehavior](../../../Mechanical/DataModel/Enums/FluidBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FluidBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidBehavior.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Images"></a>

### *property* PhysicsRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.InternalObject"></a>

### *property* PhysicsRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPhysicsRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Location"></a>

### *property* PhysicsRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.PMLElementCoordinateSystem"></a>

### *property* PhysicsRegion.PMLElementCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PMLElementCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.PMLOptions"></a>

### *property* PhysicsRegion.PMLOptions *: [Ansys.Mechanical.DataModel.Enums.PMLOptions](../../../Mechanical/DataModel/Enums/PMLOptions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PMLOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PMLOptions.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Piezoelectric"></a>

### *property* PhysicsRegion.Piezoelectric *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Piezoelectric.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Properties"></a>

### *property* PhysicsRegion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReferencePressure"></a>

### *property* PhysicsRegion.ReferencePressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePressure.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReferenceStaticPressure"></a>

### *property* PhysicsRegion.ReferenceStaticPressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceStaticPressure.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReflectionCoefficient"></a>

### *property* PhysicsRegion.ReflectionCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReflectionCoefficientInNegativeXDirection"></a>

### *property* PhysicsRegion.ReflectionCoefficientInNegativeXDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInNegativeXDirection.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReflectionCoefficientInNegativeYDirection"></a>

### *property* PhysicsRegion.ReflectionCoefficientInNegativeYDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInNegativeYDirection.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReflectionCoefficientInNegativeZDirection"></a>

### *property* PhysicsRegion.ReflectionCoefficientInNegativeZDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInNegativeZDirection.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReflectionCoefficientInPositiveXDirection"></a>

### *property* PhysicsRegion.ReflectionCoefficientInPositiveXDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInPositiveXDirection.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReflectionCoefficientInPositiveYDirection"></a>

### *property* PhysicsRegion.ReflectionCoefficientInPositiveYDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInPositiveYDirection.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReflectionCoefficientInPositiveZDirection"></a>

### *property* PhysicsRegion.ReflectionCoefficientInPositiveZDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInPositiveZDirection.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ReflectionCoefficientsType"></a>

### *property* PhysicsRegion.ReflectionCoefficientsType *: [Ansys.Mechanical.DataModel.Enums.ReflectionCoefficientsType](../../../Mechanical/DataModel/Enums/ReflectionCoefficientsType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ReflectionCoefficientsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientsType.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Structural"></a>

### *property* PhysicsRegion.Structural *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Structural.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Suppressed"></a>

### *property* PhysicsRegion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Thermal"></a>

### *property* PhysicsRegion.Thermal *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thermal.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ThermalStrain"></a>

### *property* PhysicsRegion.ThermalStrain *: [Ansys.Mechanical.DataModel.Enums.ThermalStrainType](../../../Mechanical/DataModel/Enums/ThermalStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ThermalStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrain.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.ThermoelasticDamping"></a>

### *property* PhysicsRegion.ThermoelasticDamping *: [Ansys.Mechanical.DataModel.Enums.ThermoelasticDampingType](../../../Mechanical/DataModel/Enums/ThermoelasticDampingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ThermoelasticDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermoelasticDamping.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.VisibleProperties"></a>

### *property* PhysicsRegion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PhysicsRegion.Activate"></a>

### PhysicsRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.AddComment"></a>

### PhysicsRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.AddFigure"></a>

### PhysicsRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.AddImage"></a>

### PhysicsRegion.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.CopyTo"></a>

### PhysicsRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.CreateParameter"></a>

### PhysicsRegion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Delete"></a>

### PhysicsRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.Duplicate"></a>

### PhysicsRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.GetChildren"></a>

### PhysicsRegion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.GetParameter"></a>

### PhysicsRegion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.GroupAllSimilarChildren"></a>

### PhysicsRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.GroupSimilarObjects"></a>

### PhysicsRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.PropertyByAPIName"></a>

### PhysicsRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.PropertyByName"></a>

### PhysicsRegion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.RemoveParameter"></a>

### PhysicsRegion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.RenameBasedOnDefinition"></a>

### PhysicsRegion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="PhysicsRegion.SelectInvalidBodiesOnPhysicsRegion"></a>

### PhysicsRegion.SelectInvalidBodiesOnPhysicsRegion()

Run the SelectInvalidBodiesOnPhysicsRegion action to select bodies that are not valid.

<!-- !! processed by numpydoc !! -->

