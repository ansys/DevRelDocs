# `PhysicsRegion`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.PhysicsRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PhysicsRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------|------------------------------------------------------------------------------------------|
| `SelectInvalidBodiesOnPhysicsRegion`   | Run the SelectInvalidBodiesOnPhysicsRegion action to select bodies that are not valid.   |
| `RenameBasedOnDefinition`              | Run the RenameBasedOnDefinition action.                                                  |
| `Delete`                               | Run the Delete action.                                                                   |
| `GetChildren`                          | Gets the list of children, filtered by type.                                             |
| `GetChildren`                          | Gets the list of children, filtered by type.                                             |
| `AddComment`                           | Creates a new child Comment.                                                             |
| `AddFigure`                            | Creates a new child Figure.                                                              |
| `AddImage`                             | Creates a new child Image.                                                               |
| `Activate`                             | Activate the current object.                                                             |
| `CopyTo`                               | Copies all visible properties from this object to another.                               |
| `Duplicate`                            | Creates a copy of the current DataModelObject.                                           |
| `GroupAllSimilarChildren`              | Run the GroupAllSimilarChildren action.                                                  |
| `GroupSimilarObjects`                  | Run the GroupSimilarObjects action.                                                      |
| `PropertyByName`                       | Get a property by its unique name.                                                       |
| `PropertyByAPIName`                    | Get a property by its API name.                                                          |
| `CreateParameter`                      | Creates a new parameter for a Property.                                                  |
| `GetParameter`                         | Gets the parameter corresponding to the given property.                                  |
| `RemoveParameter`                      | Removes the parameter from the parameter set corresponding to the given property.        |

### Properties

| Name | Description |
|---------------------------------------------|---------------------------------------------------------------|
| `InternalObject`                            | Gets the internal object. For advanced usage only.            |
| `ReflectionCoefficientInNegativeXDirection` | Gets or sets the ReflectionCoefficientInNegativeXDirection.   |
| `ReflectionCoefficientInNegativeYDirection` | Gets or sets the ReflectionCoefficientInNegativeYDirection.   |
| `ReflectionCoefficientInNegativeZDirection` | Gets or sets the ReflectionCoefficientInNegativeZDirection.   |
| `ReflectionCoefficientInPositiveXDirection` | Gets or sets the ReflectionCoefficientInPositiveXDirection.   |
| `ReflectionCoefficientInPositiveYDirection` | Gets or sets the ReflectionCoefficientInPositiveYDirection.   |
| `ReflectionCoefficientInPositiveZDirection` | Gets or sets the ReflectionCoefficientInPositiveZDirection.   |
| `ReflectionCoefficient`                     | Gets or sets the ReflectionCoefficient.                       |
| `ReferencePressure`                         | Gets or sets the ReferencePressure.                           |
| `ReferenceStaticPressure`                   | Gets or sets the ReferenceStaticPressure.                     |
| `ArtificiallyMatchedLayers`                 | Gets or sets the ArtificiallyMatchedLayers.                   |
| `Electric`                                  | Gets or sets the Electric.                                    |
| `ElectrostaticForce`                        | Gets or sets the ElectrostaticForce.                          |
| `ElementMorphing`                           | Gets or sets the ElementMorphing.                             |
| `FluidBehavior`                             | Gets or sets the FluidBehavior.                               |
| `ReflectionCoefficientsType`                | Gets or sets the ReflectionCoefficientsType.                  |
| `PMLOptions`                                | Gets or sets the PMLOptions.                                  |
| `ThermalStrain`                             | Gets or sets the ThermalStrain.                               |
| `ThermoelasticDamping`                      | Gets or sets the ThermoelasticDamping.                        |
| `Acoustics`                                 | Gets or sets the Acoustics.                                   |
| `Piezoelectric`                             | Gets the Piezoelectric.                                       |
| `EvanescentWaveAttenuation`                 | Gets or sets the EvanescentWaveAttenuation.                   |
| `Structural`                                | Gets or sets the Structural.                                  |
| `Suppressed`                                | Gets or sets the Suppressed.                                  |
| `Thermal`                                   | Gets or sets the Thermal.                                     |
| `PMLElementCoordinateSystem`                | Gets or sets the PMLElementCoordinateSystem.                  |
| `Location`                                  | Gets or sets the Location.                                    |
| `DataModelObjectCategory`                   | Gets the current DataModelObject's category.                  |
| `Children`                                  | Gets the list of children.                                    |
| `Comments`                                  | Gets the list of associated comments.                         |
| `Figures`                                   | Gets the list of associated figures.                          |
| `Images`                                    | Gets the list of associated images.                           |
| `InternalObject`                            | Gets the internal object. For advanced usage only.            |
| `Properties`                                | Gets the list of properties for this object.                  |
| `VisibleProperties`                         | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

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

### *property* PhysicsRegion.ArtificiallyMatchedLayers *: [Ansys.Mechanical.DataModel.Enums.ArtificiallyMatchedLayers](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ArtificiallyMatchedLayers.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ArtificiallyMatchedLayers) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificiallyMatchedLayers.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Electric *: [Ansys.Mechanical.DataModel.Enums.ElectricType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ElectricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElectricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Electric.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ElectrostaticForce *: [Ansys.Mechanical.DataModel.Enums.ElectrostaticForce](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ElectrostaticForce.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElectrostaticForce) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectrostaticForce.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ElementMorphing *: [Ansys.Mechanical.DataModel.Enums.ElementMorphingType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ElementMorphingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementMorphingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementMorphing.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.FluidBehavior *: [Ansys.Mechanical.DataModel.Enums.FluidBehavior](../../../../../v241/Ansys/Mechanical/DataModel/Enums/FluidBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FluidBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidBehavior.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ReflectionCoefficientsType *: [Ansys.Mechanical.DataModel.Enums.ReflectionCoefficientsType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ReflectionCoefficientsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ReflectionCoefficientsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReflectionCoefficientsType.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.PMLOptions *: [Ansys.Mechanical.DataModel.Enums.PMLOptions](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PMLOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PMLOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PMLOptions.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ThermalStrain *: [Ansys.Mechanical.DataModel.Enums.ThermalStrainType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ThermalStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ThermalStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrain.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.ThermoelasticDamping *: [Ansys.Mechanical.DataModel.Enums.ThermoelasticDampingType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ThermoelasticDampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ThermoelasticDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* PhysicsRegion.PMLElementCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PMLElementCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PhysicsRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### PhysicsRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PhysicsRegion.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

