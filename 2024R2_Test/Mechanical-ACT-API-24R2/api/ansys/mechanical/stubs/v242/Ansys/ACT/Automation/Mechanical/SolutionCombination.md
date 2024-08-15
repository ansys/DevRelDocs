# `SolutionCombination`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SolutionCombination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SolutionCombination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------|-----------------------------------------------------------------------------------|
| `ClearGeneratedData`                  | Run the ClearGeneratedData action.                                                |
| `AddContactTool`                      | Creates a new ContactTool                                                         |
| `EvaluateAllResults`                  | Run the EvaluateAllResults action.                                                |
| `AddFatigueTool`                      | Creates a new FatigueTool                                                         |
| `AddCompositeFailureTool`             | Creates a new CompositeFailureTool                                                |
| `AddBeamTool`                         | Creates a new BeamTool                                                            |
| `AddDirectionalAcceleration`          | Creates a new DirectionalAcceleration                                             |
| `AddDirectionalAxialForce`            | Creates a new DirectionalAxialForce                                               |
| `AddDirectionalBendingMoment`         | Creates a new DirectionalBendingMoment                                            |
| `AddDirectionalDeformation`           | Creates a new DirectionalDeformation                                              |
| `AddDirectionalShearForce`            | Creates a new DirectionalShearForce                                               |
| `AddShearMomentDiagramMY`             | Creates a new DirectionalShearMomentDiagram                                       |
| `AddShearMomentDiagramMZ`             | Creates a new DirectionalShearMomentDiagram                                       |
| `AddShearMomentDiagramUY`             | Creates a new DirectionalShearMomentDiagram                                       |
| `AddShearMomentDiagramUZ`             | Creates a new DirectionalShearMomentDiagram                                       |
| `AddShearMomentDiagramVY`             | Creates a new DirectionalShearMomentDiagram                                       |
| `AddShearMomentDiagramVZ`             | Creates a new DirectionalShearMomentDiagram                                       |
| `AddDirectionalTorsionalMoment`       | Creates a new DirectionalTorsionalMoment                                          |
| `AddDirectionalVelocity`              | Creates a new DirectionalVelocity                                                 |
| `AddElasticStrainIntensity`           | Creates a new ElasticStrainIntensity                                              |
| `AddEquivalentElasticStrain`          | Creates a new EquivalentElasticStrain                                             |
| `AddEquivalentElasticStrainRST`       | Creates a new EquivalentElasticStrainRST                                          |
| `AddEquivalentStress`                 | Creates a new EquivalentStress                                                    |
| `AddEquivalentTotalStrain`            | Creates a new EquivalentTotalStrain                                               |
| `AddLinearizedEquivalentStress`       | Creates a new LinearizedEquivalentStress                                          |
| `AddLinearizedMaximumPrincipalStress` | Creates a new LinearizedMaximumPrincipalStress                                    |
| `AddLinearizedMaximumShearStress`     | Creates a new LinearizedMaximumShearStress                                        |
| `AddLinearizedMiddlePrincipalStress`  | Creates a new LinearizedMiddlePrincipalStress                                     |
| `AddLinearizedMinimumPrincipalStress` | Creates a new LinearizedMinimumPrincipalStress                                    |
| `AddLinearizedNormalStress`           | Creates a new LinearizedNormalStress                                              |
| `AddLinearizedShearStress`            | Creates a new LinearizedShearStress                                               |
| `AddLinearizedStressIntensity`        | Creates a new LinearizedStressIntensity                                           |
| `AddMaximumPrincipalElasticStrain`    | Creates a new MaximumPrincipalElasticStrain                                       |
| `AddMaximumPrincipalStress`           | Creates a new MaximumPrincipalStress                                              |
| `AddMaximumShearElasticStrain`        | Creates a new MaximumShearElasticStrain                                           |
| `AddMaximumShearStress`               | Creates a new MaximumShearStress                                                  |
| `AddMiddlePrincipalElasticStrain`     | Creates a new MiddlePrincipalElasticStrain                                        |
| `AddMiddlePrincipalStress`            | Creates a new MiddlePrincipalStress                                               |
| `AddMinimumPrincipalElasticStrain`    | Creates a new MinimumPrincipalElasticStrain                                       |
| `AddMinimumPrincipalStress`           | Creates a new MinimumPrincipalStress                                              |
| `AddNormalElasticStrain`              | Creates a new NormalElasticStrain                                                 |
| `AddNormalStress`                     | Creates a new NormalStress                                                        |
| `AddShearElasticStrain`               | Creates a new ShearElasticStrain                                                  |
| `AddShearStress`                      | Creates a new ShearStress                                                         |
| `AddStressIntensity`                  | Creates a new StressIntensity                                                     |
| `AddStressTool`                       | Creates a new StressTool                                                          |
| `AddTotalAcceleration`                | Creates a new TotalAcceleration                                                   |
| `AddTotalAxialForce`                  | Creates a new TotalAxialForce                                                     |
| `AddTotalBendingMoment`               | Creates a new TotalBendingMoment                                                  |
| `AddTotalDeformation`                 | Creates a new TotalDeformation                                                    |
| `AddTotalShearForce`                  | Creates a new TotalShearForce                                                     |
| `AddShearMomentDiagramMSUM`           | Creates a new TotalShearMomentDiagram                                             |
| `AddShearMomentDiagramUSUM`           | Creates a new TotalShearMomentDiagram                                             |
| `AddShearMomentDiagramVSUM`           | Creates a new TotalShearMomentDiagram                                             |
| `AddTotalTorsionalMoment`             | Creates a new TotalTorsionalMoment                                                |
| `AddTotalVelocity`                    | Creates a new TotalVelocity                                                       |
| `AddUserDefinedResult`                | Creates a new UserDefinedResult                                                   |
| `AddVectorAxialForce`                 | Creates a new VectorAxialForce                                                    |
| `AddVectorBendingMoment`              | Creates a new VectorBendingMoment                                                 |
| `AddVectorPrincipalElasticStrain`     | Creates a new VectorPrincipalElasticStrain                                        |
| `AddVectorPrincipalStress`            | Creates a new VectorPrincipalStress                                               |
| `AddVectorShearForce`                 | Creates a new VectorShearForce                                                    |
| `AddVectorTorsionalMoment`            | Creates a new VectorTorsionalMoment                                               |
| `Delete`                              | Run the Delete action.                                                            |
| `GetChildren`                         | Gets the list of children, filtered by type.                                      |
| `GetChildren`                         | Gets the list of children, filtered by type.                                      |
| `AddComment`                          | Creates a new child Comment.                                                      |
| `AddImage`                            | Creates a new child Image.                                                        |
| `Activate`                            | Activate the current object.                                                      |
| `CopyTo`                              | Copies all visible properties from this object to another.                        |
| `Duplicate`                           | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`             | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                 | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                      | Get a property by its unique name.                                                |
| `PropertyByAPIName`                   | Get a property by its API name.                                                   |
| `CreateParameter`                     | Creates a new parameter for a Property.                                           |
| `GetParameter`                        | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                     | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `Definition`              | Get the SolutionCombinationDefinition object.                 |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* SolutionCombination.Definition *: [Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition](../../../../../v241/Ansys/ACT/Automation/Mechanical/SolutionCombinationDefinition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the SolutionCombinationDefinition object.
: This object contains all the Solution Combination data like Base Cases, Load Combinations and Coefficients.

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolutionCombinationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombination.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SolutionCombination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### SolutionCombination.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddContactTool()

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

### SolutionCombination.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddFatigueTool()

Creates a new FatigueTool

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddCompositeFailureTool()

Creates a new CompositeFailureTool

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddBeamTool()

Creates a new BeamTool

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddDirectionalAcceleration()

Creates a new DirectionalAcceleration

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddDirectionalAxialForce()

Creates a new DirectionalAxialForce

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddDirectionalBendingMoment()

Creates a new DirectionalBendingMoment

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddDirectionalDeformation()

Creates a new DirectionalDeformation

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddDirectionalShearForce()

Creates a new DirectionalShearForce

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearMomentDiagramMY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearMomentDiagramMZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearMomentDiagramUY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearMomentDiagramUZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearMomentDiagramVY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearMomentDiagramVZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddDirectionalTorsionalMoment()

Creates a new DirectionalTorsionalMoment

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddDirectionalVelocity()

Creates a new DirectionalVelocity

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddElasticStrainIntensity()

Creates a new ElasticStrainIntensity

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddEquivalentElasticStrain()

Creates a new EquivalentElasticStrain

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddEquivalentElasticStrainRST()

Creates a new EquivalentElasticStrainRST

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddEquivalentStress()

Creates a new EquivalentStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddEquivalentTotalStrain()

Creates a new EquivalentTotalStrain

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddLinearizedEquivalentStress()

Creates a new LinearizedEquivalentStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddLinearizedMaximumPrincipalStress()

Creates a new LinearizedMaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddLinearizedMaximumShearStress()

Creates a new LinearizedMaximumShearStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddLinearizedMiddlePrincipalStress()

Creates a new LinearizedMiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddLinearizedMinimumPrincipalStress()

Creates a new LinearizedMinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddLinearizedNormalStress()

Creates a new LinearizedNormalStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddLinearizedShearStress()

Creates a new LinearizedShearStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddLinearizedStressIntensity()

Creates a new LinearizedStressIntensity

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddMaximumPrincipalElasticStrain()

Creates a new MaximumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddMaximumPrincipalStress()

Creates a new MaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddMaximumShearElasticStrain()

Creates a new MaximumShearElasticStrain

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddMaximumShearStress()

Creates a new MaximumShearStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddMiddlePrincipalElasticStrain()

Creates a new MiddlePrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddMiddlePrincipalStress()

Creates a new MiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddMinimumPrincipalElasticStrain()

Creates a new MinimumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddMinimumPrincipalStress()

Creates a new MinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddNormalElasticStrain()

Creates a new NormalElasticStrain

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddNormalStress()

Creates a new NormalStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearElasticStrain()

Creates a new ShearElasticStrain

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearStress()

Creates a new ShearStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddStressIntensity()

Creates a new StressIntensity

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddStressTool()

Creates a new StressTool

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddTotalAcceleration()

Creates a new TotalAcceleration

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddTotalAxialForce()

Creates a new TotalAxialForce

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddTotalBendingMoment()

Creates a new TotalBendingMoment

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddTotalDeformation()

Creates a new TotalDeformation

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddTotalShearForce()

Creates a new TotalShearForce

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearMomentDiagramMSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearMomentDiagramUSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddShearMomentDiagramVSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddTotalTorsionalMoment()

Creates a new TotalTorsionalMoment

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddTotalVelocity()

Creates a new TotalVelocity

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddUserDefinedResult()

Creates a new UserDefinedResult

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddVectorAxialForce()

Creates a new VectorAxialForce

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddVectorBendingMoment()

Creates a new VectorBendingMoment

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddVectorPrincipalElasticStrain()

Creates a new VectorPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddVectorPrincipalStress()

Creates a new VectorPrincipalStress

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddVectorShearForce()

Creates a new VectorShearForce

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddVectorTorsionalMoment()

Creates a new VectorTorsionalMoment

<!-- !! processed by numpydoc !! -->

### SolutionCombination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### SolutionCombination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### SolutionCombination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SolutionCombination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

