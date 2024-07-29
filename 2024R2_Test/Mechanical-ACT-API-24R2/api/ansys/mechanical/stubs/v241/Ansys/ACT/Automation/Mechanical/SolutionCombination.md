# `SolutionCombination`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SolutionCombination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SolutionCombination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.ClearGeneratedData)                                   | Run the ClearGeneratedData action.                                                |
| [`AddContactTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddContactTool)                                           | Creates a new ContactTool                                                         |
| [`EvaluateAllResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.EvaluateAllResults)                                   | Run the EvaluateAllResults action.                                                |
| [`AddFatigueTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddFatigueTool)                                           | Creates a new FatigueTool                                                         |
| [`AddCompositeFailureTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddCompositeFailureTool)                         | Creates a new CompositeFailureTool                                                |
| [`AddBeamTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddBeamTool)                                                 | Creates a new BeamTool                                                            |
| [`AddDirectionalAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddDirectionalAcceleration)                   | Creates a new DirectionalAcceleration                                             |
| [`AddDirectionalAxialForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddDirectionalAxialForce)                       | Creates a new DirectionalAxialForce                                               |
| [`AddDirectionalBendingMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddDirectionalBendingMoment)                 | Creates a new DirectionalBendingMoment                                            |
| [`AddDirectionalDeformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddDirectionalDeformation)                     | Creates a new DirectionalDeformation                                              |
| [`AddDirectionalShearForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddDirectionalShearForce)                       | Creates a new DirectionalShearForce                                               |
| [`AddShearMomentDiagramMY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearMomentDiagramMY)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramMZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearMomentDiagramMZ)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramUY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearMomentDiagramUY)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramUZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearMomentDiagramUZ)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramVY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearMomentDiagramVY)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramVZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearMomentDiagramVZ)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddDirectionalTorsionalMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddDirectionalTorsionalMoment)             | Creates a new DirectionalTorsionalMoment                                          |
| [`AddDirectionalVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddDirectionalVelocity)                           | Creates a new DirectionalVelocity                                                 |
| [`AddElasticStrainIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddElasticStrainIntensity)                     | Creates a new ElasticStrainIntensity                                              |
| [`AddEquivalentElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddEquivalentElasticStrain)                   | Creates a new EquivalentElasticStrain                                             |
| [`AddEquivalentElasticStrainRST`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddEquivalentElasticStrainRST)             | Creates a new EquivalentElasticStrainRST                                          |
| [`AddEquivalentStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddEquivalentStress)                                 | Creates a new EquivalentStress                                                    |
| [`AddEquivalentTotalStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddEquivalentTotalStrain)                       | Creates a new EquivalentTotalStrain                                               |
| [`AddLinearizedEquivalentStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddLinearizedEquivalentStress)             | Creates a new LinearizedEquivalentStress                                          |
| [`AddLinearizedMaximumPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddLinearizedMaximumPrincipalStress) | Creates a new LinearizedMaximumPrincipalStress                                    |
| [`AddLinearizedMaximumShearStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddLinearizedMaximumShearStress)         | Creates a new LinearizedMaximumShearStress                                        |
| [`AddLinearizedMiddlePrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddLinearizedMiddlePrincipalStress)   | Creates a new LinearizedMiddlePrincipalStress                                     |
| [`AddLinearizedMinimumPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddLinearizedMinimumPrincipalStress) | Creates a new LinearizedMinimumPrincipalStress                                    |
| [`AddLinearizedNormalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddLinearizedNormalStress)                     | Creates a new LinearizedNormalStress                                              |
| [`AddLinearizedShearStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddLinearizedShearStress)                       | Creates a new LinearizedShearStress                                               |
| [`AddLinearizedStressIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddLinearizedStressIntensity)               | Creates a new LinearizedStressIntensity                                           |
| [`AddMaximumPrincipalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddMaximumPrincipalElasticStrain)       | Creates a new MaximumPrincipalElasticStrain                                       |
| [`AddMaximumPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddMaximumPrincipalStress)                     | Creates a new MaximumPrincipalStress                                              |
| [`AddMaximumShearElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddMaximumShearElasticStrain)               | Creates a new MaximumShearElasticStrain                                           |
| [`AddMaximumShearStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddMaximumShearStress)                             | Creates a new MaximumShearStress                                                  |
| [`AddMiddlePrincipalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddMiddlePrincipalElasticStrain)         | Creates a new MiddlePrincipalElasticStrain                                        |
| [`AddMiddlePrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddMiddlePrincipalStress)                       | Creates a new MiddlePrincipalStress                                               |
| [`AddMinimumPrincipalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddMinimumPrincipalElasticStrain)       | Creates a new MinimumPrincipalElasticStrain                                       |
| [`AddMinimumPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddMinimumPrincipalStress)                     | Creates a new MinimumPrincipalStress                                              |
| [`AddNormalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddNormalElasticStrain)                           | Creates a new NormalElasticStrain                                                 |
| [`AddNormalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddNormalStress)                                         | Creates a new NormalStress                                                        |
| [`AddShearElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearElasticStrain)                             | Creates a new ShearElasticStrain                                                  |
| [`AddShearStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearStress)                                           | Creates a new ShearStress                                                         |
| [`AddStressIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddStressIntensity)                                   | Creates a new StressIntensity                                                     |
| [`AddStressTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddStressTool)                                             | Creates a new StressTool                                                          |
| [`AddTotalAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddTotalAcceleration)                               | Creates a new TotalAcceleration                                                   |
| [`AddTotalAxialForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddTotalAxialForce)                                   | Creates a new TotalAxialForce                                                     |
| [`AddTotalBendingMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddTotalBendingMoment)                             | Creates a new TotalBendingMoment                                                  |
| [`AddTotalDeformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddTotalDeformation)                                 | Creates a new TotalDeformation                                                    |
| [`AddTotalShearForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddTotalShearForce)                                   | Creates a new TotalShearForce                                                     |
| [`AddShearMomentDiagramMSUM`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearMomentDiagramMSUM)                     | Creates a new TotalShearMomentDiagram                                             |
| [`AddShearMomentDiagramUSUM`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearMomentDiagramUSUM)                     | Creates a new TotalShearMomentDiagram                                             |
| [`AddShearMomentDiagramVSUM`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddShearMomentDiagramVSUM)                     | Creates a new TotalShearMomentDiagram                                             |
| [`AddTotalTorsionalMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddTotalTorsionalMoment)                         | Creates a new TotalTorsionalMoment                                                |
| [`AddTotalVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddTotalVelocity)                                       | Creates a new TotalVelocity                                                       |
| [`AddUserDefinedResult`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddUserDefinedResult)                               | Creates a new UserDefinedResult                                                   |
| [`AddVectorAxialForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddVectorAxialForce)                                 | Creates a new VectorAxialForce                                                    |
| [`AddVectorBendingMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddVectorBendingMoment)                           | Creates a new VectorBendingMoment                                                 |
| [`AddVectorPrincipalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddVectorPrincipalElasticStrain)         | Creates a new VectorPrincipalElasticStrain                                        |
| [`AddVectorPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddVectorPrincipalStress)                       | Creates a new VectorPrincipalStress                                               |
| [`AddVectorShearForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddVectorShearForce)                                 | Creates a new VectorShearForce                                                    |
| [`AddVectorTorsionalMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddVectorTorsionalMoment)                       | Creates a new VectorTorsionalMoment                                               |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.Delete)                                                           | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#id1)                                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#id1)                                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddComment)                                                   | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.AddImage)                                                       | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.Activate)                                                       | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.CopyTo)                                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.Duplicate)                                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.GroupAllSimilarChildren)                         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.GroupSimilarObjects)                                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.PropertyByName)                                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.PropertyByAPIName)                                     | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.CreateParameter)                                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.GetParameter)                                               | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.RemoveParameter)                                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Definition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.Definition)                           | Get the SolutionCombinationDefinition object.                 |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionCombination.md#SolutionCombination.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SolutionCombination.Definition"></a>

### *property* SolutionCombination.Definition *: [Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition](SolutionCombinationDefinition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the SolutionCombinationDefinition object.
: This object contains all the Solution Combination data like Base Cases, Load Combinations and Coefficients.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.InternalObject"></a>

### *property* SolutionCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolutionCombinationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.DataModelObjectCategory"></a>

### *property* SolutionCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Children"></a>

### *property* SolutionCombination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Comments"></a>

### *property* SolutionCombination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Images"></a>

### *property* SolutionCombination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SolutionCombination.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Properties"></a>

### *property* SolutionCombination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.VisibleProperties"></a>

### *property* SolutionCombination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SolutionCombination.ClearGeneratedData"></a>

### SolutionCombination.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddContactTool"></a>

### SolutionCombination.AddContactTool()

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.EvaluateAllResults"></a>

### SolutionCombination.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddFatigueTool"></a>

### SolutionCombination.AddFatigueTool()

Creates a new FatigueTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddCompositeFailureTool"></a>

### SolutionCombination.AddCompositeFailureTool()

Creates a new CompositeFailureTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddBeamTool"></a>

### SolutionCombination.AddBeamTool()

Creates a new BeamTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalAcceleration"></a>

### SolutionCombination.AddDirectionalAcceleration()

Creates a new DirectionalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalAxialForce"></a>

### SolutionCombination.AddDirectionalAxialForce()

Creates a new DirectionalAxialForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalBendingMoment"></a>

### SolutionCombination.AddDirectionalBendingMoment()

Creates a new DirectionalBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalDeformation"></a>

### SolutionCombination.AddDirectionalDeformation()

Creates a new DirectionalDeformation

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalShearForce"></a>

### SolutionCombination.AddDirectionalShearForce()

Creates a new DirectionalShearForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramMY"></a>

### SolutionCombination.AddShearMomentDiagramMY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramMZ"></a>

### SolutionCombination.AddShearMomentDiagramMZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramUY"></a>

### SolutionCombination.AddShearMomentDiagramUY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramUZ"></a>

### SolutionCombination.AddShearMomentDiagramUZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramVY"></a>

### SolutionCombination.AddShearMomentDiagramVY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramVZ"></a>

### SolutionCombination.AddShearMomentDiagramVZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalTorsionalMoment"></a>

### SolutionCombination.AddDirectionalTorsionalMoment()

Creates a new DirectionalTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalVelocity"></a>

### SolutionCombination.AddDirectionalVelocity()

Creates a new DirectionalVelocity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddElasticStrainIntensity"></a>

### SolutionCombination.AddElasticStrainIntensity()

Creates a new ElasticStrainIntensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddEquivalentElasticStrain"></a>

### SolutionCombination.AddEquivalentElasticStrain()

Creates a new EquivalentElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddEquivalentElasticStrainRST"></a>

### SolutionCombination.AddEquivalentElasticStrainRST()

Creates a new EquivalentElasticStrainRST

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddEquivalentStress"></a>

### SolutionCombination.AddEquivalentStress()

Creates a new EquivalentStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddEquivalentTotalStrain"></a>

### SolutionCombination.AddEquivalentTotalStrain()

Creates a new EquivalentTotalStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedEquivalentStress"></a>

### SolutionCombination.AddLinearizedEquivalentStress()

Creates a new LinearizedEquivalentStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedMaximumPrincipalStress"></a>

### SolutionCombination.AddLinearizedMaximumPrincipalStress()

Creates a new LinearizedMaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedMaximumShearStress"></a>

### SolutionCombination.AddLinearizedMaximumShearStress()

Creates a new LinearizedMaximumShearStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedMiddlePrincipalStress"></a>

### SolutionCombination.AddLinearizedMiddlePrincipalStress()

Creates a new LinearizedMiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedMinimumPrincipalStress"></a>

### SolutionCombination.AddLinearizedMinimumPrincipalStress()

Creates a new LinearizedMinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedNormalStress"></a>

### SolutionCombination.AddLinearizedNormalStress()

Creates a new LinearizedNormalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedShearStress"></a>

### SolutionCombination.AddLinearizedShearStress()

Creates a new LinearizedShearStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedStressIntensity"></a>

### SolutionCombination.AddLinearizedStressIntensity()

Creates a new LinearizedStressIntensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMaximumPrincipalElasticStrain"></a>

### SolutionCombination.AddMaximumPrincipalElasticStrain()

Creates a new MaximumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMaximumPrincipalStress"></a>

### SolutionCombination.AddMaximumPrincipalStress()

Creates a new MaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMaximumShearElasticStrain"></a>

### SolutionCombination.AddMaximumShearElasticStrain()

Creates a new MaximumShearElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMaximumShearStress"></a>

### SolutionCombination.AddMaximumShearStress()

Creates a new MaximumShearStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMiddlePrincipalElasticStrain"></a>

### SolutionCombination.AddMiddlePrincipalElasticStrain()

Creates a new MiddlePrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMiddlePrincipalStress"></a>

### SolutionCombination.AddMiddlePrincipalStress()

Creates a new MiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMinimumPrincipalElasticStrain"></a>

### SolutionCombination.AddMinimumPrincipalElasticStrain()

Creates a new MinimumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMinimumPrincipalStress"></a>

### SolutionCombination.AddMinimumPrincipalStress()

Creates a new MinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddNormalElasticStrain"></a>

### SolutionCombination.AddNormalElasticStrain()

Creates a new NormalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddNormalStress"></a>

### SolutionCombination.AddNormalStress()

Creates a new NormalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearElasticStrain"></a>

### SolutionCombination.AddShearElasticStrain()

Creates a new ShearElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearStress"></a>

### SolutionCombination.AddShearStress()

Creates a new ShearStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddStressIntensity"></a>

### SolutionCombination.AddStressIntensity()

Creates a new StressIntensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddStressTool"></a>

### SolutionCombination.AddStressTool()

Creates a new StressTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalAcceleration"></a>

### SolutionCombination.AddTotalAcceleration()

Creates a new TotalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalAxialForce"></a>

### SolutionCombination.AddTotalAxialForce()

Creates a new TotalAxialForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalBendingMoment"></a>

### SolutionCombination.AddTotalBendingMoment()

Creates a new TotalBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalDeformation"></a>

### SolutionCombination.AddTotalDeformation()

Creates a new TotalDeformation

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalShearForce"></a>

### SolutionCombination.AddTotalShearForce()

Creates a new TotalShearForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramMSUM"></a>

### SolutionCombination.AddShearMomentDiagramMSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramUSUM"></a>

### SolutionCombination.AddShearMomentDiagramUSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramVSUM"></a>

### SolutionCombination.AddShearMomentDiagramVSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalTorsionalMoment"></a>

### SolutionCombination.AddTotalTorsionalMoment()

Creates a new TotalTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalVelocity"></a>

### SolutionCombination.AddTotalVelocity()

Creates a new TotalVelocity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddUserDefinedResult"></a>

### SolutionCombination.AddUserDefinedResult()

Creates a new UserDefinedResult

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorAxialForce"></a>

### SolutionCombination.AddVectorAxialForce()

Creates a new VectorAxialForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorBendingMoment"></a>

### SolutionCombination.AddVectorBendingMoment()

Creates a new VectorBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorPrincipalElasticStrain"></a>

### SolutionCombination.AddVectorPrincipalElasticStrain()

Creates a new VectorPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorPrincipalStress"></a>

### SolutionCombination.AddVectorPrincipalStress()

Creates a new VectorPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorShearForce"></a>

### SolutionCombination.AddVectorShearForce()

Creates a new VectorShearForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorTorsionalMoment"></a>

### SolutionCombination.AddVectorTorsionalMoment()

Creates a new VectorTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Delete"></a>

### SolutionCombination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.GetChildren"></a>

### SolutionCombination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SolutionCombination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddComment"></a>

### SolutionCombination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddImage"></a>

### SolutionCombination.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Activate"></a>

### SolutionCombination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.CopyTo"></a>

### SolutionCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Duplicate"></a>

### SolutionCombination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.GroupAllSimilarChildren"></a>

### SolutionCombination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.GroupSimilarObjects"></a>

### SolutionCombination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.PropertyByName"></a>

### SolutionCombination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.PropertyByAPIName"></a>

### SolutionCombination.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.CreateParameter"></a>

### SolutionCombination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.GetParameter"></a>

### SolutionCombination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.RemoveParameter"></a>

### SolutionCombination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

