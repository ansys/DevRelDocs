# PhysicsRegion

### *class* PhysicsRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PhysicsRegion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`SelectInvalidBodiesOnPhysicsRegion`](#PhysicsRegion.SelectInvalidBodiesOnPhysicsRegion)   | Run the SelectInvalidBodiesOnPhysicsRegion action to select bodies that are not valid.   |
|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#PhysicsRegion.RenameBasedOnDefinition)                         | Run the RenameBasedOnDefinition action.                                                  |
| [`Delete`](#PhysicsRegion.Delete)                                                           | Run the Delete action.                                                                   |
| [`GetChildren`](#id1)                                                                       | Gets the list of children, filtered by type.                                             |
| [`GetChildren`](#id1)                                                                       | Gets the list of children, filtered by type.                                             |
| [`AddComment`](#PhysicsRegion.AddComment)                                                   | Creates a new child Comment.                                                             |
| [`AddFigure`](#PhysicsRegion.AddFigure)                                                     | Creates a new child Figure.                                                              |
| [`AddImage`](#PhysicsRegion.AddImage)                                                       | Creates a new child Image.                                                               |
| [`Activate`](#PhysicsRegion.Activate)                                                       | Activate the current object.                                                             |
| [`CopyTo`](#PhysicsRegion.CopyTo)                                                           | Copies all visible properties from this object to another.                               |
| [`Duplicate`](#PhysicsRegion.Duplicate)                                                     | Creates a copy of the current DataModelObject.                                           |
| [`GroupAllSimilarChildren`](#PhysicsRegion.GroupAllSimilarChildren)                         | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#PhysicsRegion.GroupSimilarObjects)                                 | Run the GroupSimilarObjects action.                                                      |
| [`PropertyByName`](#PhysicsRegion.PropertyByName)                                           | Get a property by its unique name.                                                       |
| [`PropertyByAPIName`](#PhysicsRegion.PropertyByAPIName)                                     | Get a property by its API name.                                                          |
| [`CreateParameter`](#PhysicsRegion.CreateParameter)                                         | Creates a new parameter for a Property.                                                  |
| [`GetParameter`](#PhysicsRegion.GetParameter)                                               | Gets the parameter corresponding to the given property.                                  |
| [`RemoveParameter`](#PhysicsRegion.RemoveParameter)                                         | Removes the parameter from the parameter set corresponding to the given property.        |

### Properties

| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ReflectionCoefficientInNegativeXDirection`](#PhysicsRegion.ReflectionCoefficientInNegativeXDirection)                      | Gets or sets the ReflectionCoefficientInNegativeXDirection.   |
| [`ReflectionCoefficientInNegativeYDirection`](#PhysicsRegion.ReflectionCoefficientInNegativeYDirection)                      | Gets or sets the ReflectionCoefficientInNegativeYDirection.   |
| [`ReflectionCoefficientInNegativeZDirection`](#PhysicsRegion.ReflectionCoefficientInNegativeZDirection)                      | Gets or sets the ReflectionCoefficientInNegativeZDirection.   |
| [`ReflectionCoefficientInPositiveXDirection`](#PhysicsRegion.ReflectionCoefficientInPositiveXDirection)                      | Gets or sets the ReflectionCoefficientInPositiveXDirection.   |
| [`ReflectionCoefficientInPositiveYDirection`](#PhysicsRegion.ReflectionCoefficientInPositiveYDirection)                      | Gets or sets the ReflectionCoefficientInPositiveYDirection.   |
| [`ReflectionCoefficientInPositiveZDirection`](#PhysicsRegion.ReflectionCoefficientInPositiveZDirection)                      | Gets or sets the ReflectionCoefficientInPositiveZDirection.   |
| [`ReflectionCoefficient`](#PhysicsRegion.ReflectionCoefficient)                                                              | Gets or sets the ReflectionCoefficient.                       |
| [`ReferencePressure`](#PhysicsRegion.ReferencePressure)                                                                      | Gets or sets the ReferencePressure.                           |
| [`ReferenceStaticPressure`](#PhysicsRegion.ReferenceStaticPressure)                                                          | Gets or sets the ReferenceStaticPressure.                     |
| [`ArtificiallyMatchedLayers`](../../../Mechanical/DataModel/Enums/ArtificiallyMatchedLayers.md#ArtificiallyMatchedLayers)    | Gets or sets the ArtificiallyMatchedLayers.                   |
| [`Electric`](#PhysicsRegion.Electric)                                                                                        | Gets or sets the Electric.                                    |
| [`ElectrostaticForce`](../../../Mechanical/DataModel/Enums/ElectrostaticForce.md#ElectrostaticForce)                         | Gets or sets the ElectrostaticForce.                          |
| [`ElementMorphing`](#PhysicsRegion.ElementMorphing)                                                                          | Gets or sets the ElementMorphing.                             |
| [`FluidBehavior`](../../../Mechanical/DataModel/Enums/FluidBehavior.md#FluidBehavior)                                        | Gets or sets the FluidBehavior.                               |
| [`ReflectionCoefficientsType`](../../../Mechanical/DataModel/Enums/ReflectionCoefficientsType.md#ReflectionCoefficientsType) | Gets or sets the ReflectionCoefficientsType.                  |
| [`PMLOptions`](../../../Mechanical/DataModel/Enums/PMLOptions.md#PMLOptions)                                                 | Gets or sets the PMLOptions.                                  |
| [`ThermalStrain`](#PhysicsRegion.ThermalStrain)                                                                              | Gets or sets the ThermalStrain.                               |
| [`ThermoelasticDamping`](#PhysicsRegion.ThermoelasticDamping)                                                                | Gets or sets the ThermoelasticDamping.                        |
| [`Acoustics`](#PhysicsRegion.Acoustics)                                                                                      | Gets or sets the Acoustics.                                   |
| [`Piezoelectric`](#PhysicsRegion.Piezoelectric)                                                                              | Gets the Piezoelectric.                                       |
| [`EvanescentWaveAttenuation`](#PhysicsRegion.EvanescentWaveAttenuation)                                                      | Gets or sets the EvanescentWaveAttenuation.                   |
| [`Structural`](#PhysicsRegion.Structural)                                                                                    | Gets or sets the Structural.                                  |
| [`Suppressed`](#PhysicsRegion.Suppressed)                                                                                    | Gets or sets the Suppressed.                                  |
| [`Thermal`](#PhysicsRegion.Thermal)                                                                                          | Gets or sets the Thermal.                                     |
| [`PMLElementCoordinateSystem`](#PhysicsRegion.PMLElementCoordinateSystem)                                                    | Gets or sets the PMLElementCoordinateSystem.                  |
| [`Location`](#PhysicsRegion.Location)                                                                                        | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)          | Gets the current DataModelObject’s category.                  |
| [`Children`](#PhysicsRegion.Children)                                                                                        | Gets the list of children.                                    |
| [`Comments`](#PhysicsRegion.Comments)                                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#PhysicsRegion.Figures)                                                                                          | Gets the list of associated figures.                          |
| [`Images`](#PhysicsRegion.Images)                                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PhysicsRegion.Properties)                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PhysicsRegion.VisibleProperties)                                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PhysicsRegion
```

## Property detail

### *property* PhysicsRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPhysicsRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReflectionCoefficientInNegativeXDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInNegativeXDirection.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReflectionCoefficientInNegativeYDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInNegativeYDirection.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReflectionCoefficientInNegativeZDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInNegativeZDirection.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReflectionCoefficientInPositiveXDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInPositiveXDirection.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReflectionCoefficientInPositiveYDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInPositiveYDirection.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReflectionCoefficientInPositiveZDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientInPositiveZDirection.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReflectionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReferencePressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePressure.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReferenceStaticPressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceStaticPressure.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ArtificiallyMatchedLayers *: [Ansys.Mechanical.DataModel.Enums.ArtificiallyMatchedLayers](../../../Mechanical/DataModel/Enums/ArtificiallyMatchedLayers.md#ArtificiallyMatchedLayers) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificiallyMatchedLayers.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Electric *: [Ansys.Mechanical.DataModel.Enums.ElectricType](../../../Mechanical/DataModel/Enums/ElectricType.md#ElectricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Electric.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ElectrostaticForce *: [Ansys.Mechanical.DataModel.Enums.ElectrostaticForce](../../../Mechanical/DataModel/Enums/ElectrostaticForce.md#ElectrostaticForce) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectrostaticForce.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ElementMorphing *: [Ansys.Mechanical.DataModel.Enums.ElementMorphingType](../../../Mechanical/DataModel/Enums/ElementMorphingType.md#ElementMorphingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementMorphing.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.FluidBehavior *: [Ansys.Mechanical.DataModel.Enums.FluidBehavior](../../../Mechanical/DataModel/Enums/FluidBehavior.md#FluidBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidBehavior.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReflectionCoefficientsType *: [Ansys.Mechanical.DataModel.Enums.ReflectionCoefficientsType](../../../Mechanical/DataModel/Enums/ReflectionCoefficientsType.md#ReflectionCoefficientsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientsType.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.PMLOptions *: [Ansys.Mechanical.DataModel.Enums.PMLOptions](../../../Mechanical/DataModel/Enums/PMLOptions.md#PMLOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PMLOptions.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ThermalStrain *: [Ansys.Mechanical.DataModel.Enums.ThermalStrainType](../../../Mechanical/DataModel/Enums/ThermalStrainType.md#ThermalStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrain.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ThermoelasticDamping *: [Ansys.Mechanical.DataModel.Enums.ThermoelasticDampingType](../../../Mechanical/DataModel/Enums/ThermoelasticDampingType.md#ThermoelasticDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermoelasticDamping.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Acoustics *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Acoustics.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Piezoelectric *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Piezoelectric.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.EvanescentWaveAttenuation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EvanescentWaveAttenuation.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Structural *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Structural.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Thermal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thermal.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.PMLElementCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PMLElementCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PhysicsRegion.SelectInvalidBodiesOnPhysicsRegion()

Run the SelectInvalidBodiesOnPhysicsRegion action to select bodies that are not valid.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
