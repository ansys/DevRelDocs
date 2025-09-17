# AlgorithmTestFixture Class

**Namespace:** `Phoenix.Optimization.AlgorithmTests`

## Overview

Abstract class used for implementing basic algorithm tests.  
 

## Declaration

```csharp
class AlgorithmTestFixtureabstract
```

## Description

Abstract class used for implementing basic algorithm tests.  
 
## Classes
|Type|Description|
|-----|-----|
|struct|`AlgorithmResults`|

## Public Member Functions

|Name|Description|
|-----|-----|
|void |`authorDoesDoesNotThrowExceptionAndIsNotEmpty ()`<br>Test to verify that the Author property does not throw an exception and is defined. |
|void |`canMaximize ()`<br>Test to verify that the algorithm can solve a problem definition with a maximize objective. |
|void |`canMinimize ()`<br>Test to verify that the algorithm can solve a problem definition with a minimize objective. |
|abstract void |`createAlgorithm ()`<br>Creates instance of algorithm to be tested and assigns it to the `algorithm` variable |
|void |`definesGUID ()`<br>Test to verify that the algorithm had a GUID. |
|void |`descriptionDoesDoesNotThrowExceptionAndIsNotEmpty ()`<br>Test to verify that the Description property does not throw an exception and is defined. |
|void |`detailsReportDoesNotThrowExceptionAndIsNotEmptyAfterRun ()`<br>Verifies the `P:Phoenix.Optimization.IAlgorithm.DetailsReport` property does not throw an exception and is not empty after the algorithm is run. |
|void |`detailsReportDoesNotThrowExceptionBeforeRun ()`<br>Verifies the `P:Phoenix.Optimization.IAlgorithm.DetailsReport` property does not throw an exception before the algorithm is run. |
|void |`detailsReportUpdateDuringRun ()`<br>Verifies that the algorithm updates the `DetailsReport` during the run. |
|virtual void |`doesAlgorithmLoadProperly ()`<br>Test to verify that the algorithm has been copied to a location where the Optimization Tool can find it and that the Optimization Tool is able to load it. |
|void |`doesIsDesignFeasibileThrowError ()`<br>Tests whether or not the algorithm's `IsDesignFeasible` method throws an error, or says that a global best design is not feasible. |
|void |`efficiencyDoesDoesNotThrowExceptionAndIsSpecified ()`<br>Test to verify that the `NumModelEvaluations` does not throw an exception and is not `AlgorithmNumModelEvaluations.Unspecified`. |
|void |`handlesFailedRuns ()`<br>Test to verify that the algorithm that says that it can support failed runs is able to solve problem that has failed runs. |
|void |`handlesNaNInConstraints ()`<br>Tests whether the algorithm can handle `NaN` passed as an upper or lower bound for constraints. |
|void |`handlesNaNInDesignVariables ()`<br>Tests whether the algorithm can handle `NaN` passed as an upper or lower bound for design variables. |
|void |`handlesNoFeasibleRunsFound (Exception expectedException)`<br>Verify that an algorithm handles the case of no feasible points being found and throws the expected exception. |
|virtual void |`handlesUnicodeEnums ()`<br>Test to verify that the algorithm can handle Unicode characters in discrete variable enumerations. |
|void |`handlesUnicodeNames ()`<br>Test to verify that the algorithm can handle Unicode characters in variable names. |
|void |`helpFilePathDoesDoesNotThrowExceptionAndFileExists ()`<br>Test to verify that the `HelpFilePath` property does not throw an exception, is defined and that the file exists. |
|void |`helpURLDoesDoesNotThrowExceptionAndIsNotEmpty ()`<br>Test to verify that the `HelpURL` property does not throw an exception and is defined. |
|void |`iconLocationDoesDoesNotThrowExceptionAndFileExists ()`<br>Test to verify that the `IconLocation` property does not throw an exception, is defined and that the file exists. |
|void |`keywordsDoesDoesNotThrowExceptionAndIsNotEmpty ()`<br>Test to verify that the `Keywords` property does not throw an exception and is defined. |
|void |`licenseFeatureDoesDoesNotThrowException ()`<br>Test to verify that the `HelpFilePath` property does not throw an exception. |
|bool |`lohPapalambrosFunctionTest ()`<br>Runs the algorithm using the `T:Phoenix.Optimization.AlgorithmTests.Evaluators.LohPapalambrosExample2Evaluator`. |
|bool |`matyasFunctionTest ()`<br>Runs the algorithm using the `T:Phoenix.Optimization.AlgorithmTests.Evaluators.MatyasEvaluator`. |
|void |`maxNumberOfObjectivesDoesDoesNotThrowExceptionAndIsGreaterThanZero ()`<br>Test to verify that the `MaxNumberOfObjectives` does not throw an exception and is greater than zero. |
|void |`nameDoesDoesNotThrowExceptionAndIsNotEmpty ()`<br>Test to verify that the `Name` property does not throw an exception and is defined. |
|void |`optionsDoesDoesNotThrowException ()`<br>Test to verify that calling the `Options` property does not throw an exception. |
|void |`optionsGetSetCorrectly ()`<br>Test to determine whether or not options work correctly. |
|void |`optionsIsSerializable ()`<br>Test to verify that algorithm Options are serializable. |
|void |`optionsSerializeDeserializeCorrectly ()`<br>Test to verify that the algorithm `P:Phoenix.Optimization.IAlgorithm.Options` can be serialized, and that they are the same as the original options when they are deserialized. |
|void |`releaseDateDoesDoesNotThrowExceptionAndIsInRightFormat ()`<br>Test to verify that the `ReleaseDate` property does not throw an exception, is defined and is in the correct format. |
|void |`respectsHalt ()`<br>Tests whether the algorithm halts in a timely matter when the `Phoenix.Optimization.IAlgorithmHost.Halt` property is set. |
|virtual void |`restartWorksCorrectly_RestoreFromEnd ()`<br>Test to verify that the algorithm sets at least one check point during a run, and is able to find the same answer using that check point as by using a full run when restored from the end. |
|virtual void |`restartWorksCorrectly_RestoreFromMiddle ()`<br>Test to verify that the algorithm sets at least one check point during a run, and is able to find the same answer using that check point as by using a full run when restored from the middle. |
|virtual void |`restartWorksCorrectly_RestoreFromStart ()`<br>Test to verify that the algorithm sets at least one check point during a run, and is able to find the same answer using that check point as by using a full run when restored from the start. |
|void |`resultsReportDoesNotThrowExceptionAndIsNotEmptyAfterRun ()`<br>Test to verify that `P:Phoenix.Optimization.IAlgorithm.ResultsReport` does not throw an exception and is not empty after the algorithm has been run. |
|void |`resultsReportDoesNotThrowExceptionBeforeRun ()`<br>Test to verify that calling `P:Phoenix.Optimization.IAlgorithm.ResultsReport` before the algorithm has been run does not throw an exception. |
|void |`setConstraintsDoesNotThrowException ()`<br>Test to verify that setting constraints does not throw an exception. |
|void |`setDesignVariablesDoesNotThrowException ()`<br>Test to verify that setting design variables does not throw an exception. |
|void |`setDetailsFile ()` |
|void |`setObjectivesDoesNotThrowException ()`<br>Test to verify that setting algorithm objectives does not throw an exception. |
|virtual void |`setOptionsForFrankFunctionTest ()`<br>Sets algorithm's options to be used for the Frank function. |
|virtual void |`setOptionsForLohPapalambrosFunctionTest ()`<br>Sets algorithm's options to be used for the Matyas function. |
|virtual void |`setOptionsForMatyasFunctionTest ()`<br>Sets algorithm's options to be used for the Matyas function. |
|virtual void |`setOptionsForNonConvergingFunctionTest ()`<br>Sets algorithm's options to be used for the Non-converging function. |
|virtual void |`setOptionsForRestartTest ()`<br>Sets algorithm's options to be used for the restart test. |
|virtual void |`setOptionsForSystemTest ()`<br>Sets algorithm's options to be used for the System test. |
|void |`Setup ()`<br>Test set up called before each test is Run. |
|void |`supportsConstraintsDoesDoesNotThrowExceptionAndIsSpecified ()`<br>Test to verify that the `SupportsConstraints` does not throw an exception and is not `FuzzyBoolean.Unspecified`. |
|void |`supportsDiscreteVariablesDoesDoesNotThrowExceptionAndIsSpecified ()`<br>Test to verify that the `SupportsDiscreteVariables` does not throw an exception and is not `FuzzyBoolean.Unspecified`. |
|void |`supportsFailedRunsDoesDoesNotThrowException ()`<br>Test to verify that the `SupportsFailedRuns` does not throw an exception. |
|void |`supportsMinMaxDoesDoesNotThrowExceptionAndIsSpecified ()`<br>Test to verify that the `SupportsMinMax` does not throw an exception and is not `FuzzyBoolean.Unspecified`. |
|void |`supportsMultipleObjectivesDoesDoesNotThrowExceptionAndMaxNumObjectivesIsConsistent ()`<br>Test to verify that the SupportsMultipleObjectives does not throw an exception and is consistent with the `P:Phoenix.Optimization.IAlgorithm.MaxNumberOfObjectives` property. |
|void |`supportsNonSmoothConstraintsDoesDoesNotThrowExceptionAndIsSpecified ()`<br>Test to verify that the `SupportsNonSmoothResponses` does not throw an exception and is not `FuzzyBoolean.Unspecified`. |
|void |`supportsSolveForDoesDoesNotThrowExceptionAndIsSpecified ()`<br>Test to verify that the `SupportsSolveFor` property is does not throw an exception when called and is not `FuzzyBoolean.Unspecified`. |
|void |`TearDown ()`<br>Test tear down called after each test is Run. |
|void |`tearDown ()`<br>Called after each test to clean up after test. |
|void |`versionDoesDoesNotThrowExceptionAndIsNotEmpty ()`<br>Test to verify that the `Version` property does not throw an exception and is defined. |

## Static Public Member Functions 
|Name|Description|
|-----|-----|
|static bool | `areDesignsEqual (object[] design1, object[] design2, IEvaluator evaluator)`<br>Used to determine whether two designs are equal.|
|static void | `optionsAreEqual (object lhs, object rhs)`<br>Checks whether given options objects properties are equal.|
|static `MockSolverInfrastructure` | `testWithEvaluator (ref IAlgorithm algorithm, IEvaluator evaluator, ref bool finishedSuccessfully, Action< MockSolverInfrastructure > setupSolver=null)`<br>Tests algorithm with the specified evaluator.|
 
## Protected Types 
|Name|Description|
|-----|-----|
|enum| `CheckpointLocation {<br>   Start , <br>   Middle , <br>   End <br>}`  |

## Protected Member Functions 
|Name|Description|
|-----|-----|
|virtual void | `_cleanUp ()`<br>Allows each implementing test fixture to perform additional cleanup during tear down|
| void | `_createAlgorithm ()` |
|void|  `optionsAreNotEqual (object lhs, object rhs)` <br>Checks whether all properties of given options objects are not equal. |
|string | `pickCheckpoint (Dictionary< int, string > checkPoints, int checkPointIndex, out int runNumber)`<br>Gets the checkpoint string from the desired position in the list, and returns it and its run number. |
| void|  `recordResults (ref AlgorithmResults runResults, MockSolverInfrastructure solver, IAlgorithm algorithm)`|  
|bool|  `runAlgorithm (bool useRosenbrock=false, Action< MockSolverInfrastructure > setupSolver=null)`<br>Runs the algorithm & performs some basic tests on the results.|
|double|  `runRosenBrock (ref AlgorithmResults results, string checkPoint="")`<br>Helper function that runs RosenBrock with default options either resuming or running a new one. |
|virtual void|  `verifyResultsAreEqual (AlgorithmResults fullRunResults, AlgorithmResults restartResults, int restoreRunNumber)`<br>Verifies that the results of two runs are the same. |

## Protected Attributes 
|Name|Description|
|-----|-----|
|`IAlgorithm` | `algorithm = null` <br>Instance of algorithm to be tested|
|`MockSolverInfrastructure`|  `solver = null`<br>Instance of `MockSolverInfrastructure` used for tests|

## Properties
|Name|Description|
|-----|-----|
|abstract string | `AlgorithmInstallationPath [get]`<br>Returns the path to the installed algorithm |
|virtual bool | `HasOptions [get]`<br>Specifies whether or not the algorithm has options. |
|virtual int | `NumberOfMessagesBeforeRestartSync [get]`<br>Offset for the number of status messages before messages are the same after a restart. |

## Class Documentation

<a id="AlgorithmResults"></a>

### AlgorithmResults

**Public Attributes** 

- PHXDesign: `BestDesign` 
- List< PHXDesign >:  `BestDesigns` 
- Dictionary< int, string >:  `CheckPoints` 
- string : `ExceptionString` 
- bool:  `FinishedSuccessfully` 
- List< ModelEvaluation >:  `ModelEvaluations` 
- string:  `ResultsReport` 
- DataTable:  `StatusMessages` 
- bool:  `ThrewException` 

## Member Function Documentation

<a id="_cleanUp"></a>

### _cleanUp
```csharp
virtual void _cleanUp ( )
```

Allows each implementing test fixture to perform additional cleanup during tear down.

<a id="areDesignsEqual"></a>

### areDesignsEqual
```csharp
static bool `areDesignsEqual` ( object[] design1, object[] design2, IEvaluator evaluator )
```

Used to determine whether two designs are equal.

**Parameters:**

- `design1` - object array containing the first design to be compared.
- `design2` - object array containing the second design to be compared.
- `evaluator` - `T:Phoenix.Optimization.IEvaluator` used for function evaluations.

**Returns:**
- Returns `true` if the algorithm considers the two designs to be equivalent, and `false` otherwise

<a id="authorDoesDoesNotThrowExceptionAndIsNotEmpty"></a>

### authorDoesDoesNotThrowExceptionAndIsNotEmpty
```csharp
void authorDoesDoesNotThrowExceptionAndIsNotEmpty ( )
```

Test to verify that the `Author` property does not throw an exception and is defined.

<a id="canMaximize"></a>

### canMaximize
```csharp
void canMaximize ( )
```

Test to verify that the algorithm can solve a problem definition with a maximize objective. If the algorithm does not support Minimize/Maximize objectives (i.e. `SupportsMinMax` is `FuzzyBoolean.False`), then this test is ignored.

<a id="canMinimize"></a>

### canMinimize
```csharp
void canMinimize ( )
```

Test to verify that the algorithm can solve a problem definition with a minimize objective. If the algorithm does not support Minimize/Maximize objectives (i.e. `SupportsMinMax` is `FuzzyBoolean.False`), then this test is ignored.

<a id="createAlgorithm"></a>

### createAlgorithm
```csharp
abstract void createAlgorithm ( )
```

Creates instance of algorithm to be tested and assigns it to the `algorithm` variable

<a id="definesGUID"></a>

### definesGUID
```csharp
void definesGUID ( )
```

Test to verify that the algorithm had a GUID.

<a id="descriptionDoesDoesNotThrowExceptionAndIsNotEmpty"></a>

### descriptionDoesDoesNotThrowExceptionAndIsNotEmpty
```csharp
void descriptionDoesDoesNotThrowExceptionAndIsNotEmpty ( )
```

Test to verify that the `Description` property does not throw an exception and is defined.

<a id="detailsReportDoesNotThrowExceptionAndIsNotEmptyAfterRun"></a>

### detailsReportDoesNotThrowExceptionAndIsNotEmptyAfterRun
```csharp
void detailsReportDoesNotThrowExceptionAndIsNotEmptyAfterRun ( )
```

Verifies the `P:Phoenix.Optimization.IAlgorithm.DetailsReport` property does not throw an exception and is not empty after the algorithm is run.

<a id="detailsReportDoesNotThrowExceptionBeforeRun"></a>

### detailsReportDoesNotThrowExceptionBeforeRun
```csharp
void detailsReportDoesNotThrowExceptionBeforeRun ( )
```

Verifies the `P:Phoenix.Optimization.IAlgorithm.DetailsReport` property does not throw an exception before the algorithm is run.

<a id="detailsReportUpdateDuringRun"></a>

### detailsReportUpdateDuringRun
```csharp
void detailsReportUpdateDuringRun ( )
```

Verifies that the algorithm updates the `DetailsReport` during the run.

<a id="doesAlgorithmLoadProperly"></a>

### doesAlgorithmLoadProperly
```csharp
virtual void doesAlgorithmLoadProperly ( )
```

Test to verify that the algorithm has been copied to a location where the Optimization Tool can find it and that the Optimization Tool is able to load it. This test is useful for verifying that all dependencies are known and copied to the install directory.

<a id="doesIsDesignFeasibileThrowError"></a>

### doesIsDesignFeasibileThrowError
```csharp
void doesIsDesignFeasibileThrowError ( )
```

Tests whether or not the algorithm's `IsDesignFeasible` method throws an error, or says that a global best design is not feasible.

<a id="efficiencyDoesDoesNotThrowExceptionAndIsSpecified"></a>

### efficiencyDoesDoesNotThrowExceptionAndIsSpecified
```csharp
void efficiencyDoesDoesNotThrowExceptionAndIsSpecified ( )
```

Test to verify that the `NumModelEvaluations` does not throw an exception and is not `AlgorithmNumModelEvaluations.Unspecified`.

<a id="handlesFailedRuns"></a>

### handlesFailedRuns
```csharp
void handlesFailedRuns ( )
```

Test to verify that the algorithm that says that it can support failed runs is able to solve problem that has failed runs. If the algorithm does not support failed runs (i.e. `SupportsFailedRuns` is `false`), then this test is ignored.

<a id="handlesNaNInConstraints"></a>

### handlesNaNInConstraints
```csharp
void handlesNaNInConstraints ( )
```

Tests whether the algorithm can handle `NaN` passed as an upper or lower bound for constraints. If the algorithm does not support an open bound for constraints, it should throw [BoundsMustBeSpecifiedException](Namespaces/NamespaceList/Phoenix/Optimization/BoundsMustBeSpecifiedException). Other Exceptions will be marked as Inconclusive.

<a id="handlesNaNInDesignVariables"></a>

### handlesNaNInDesignVariables
```csharp
void handlesNaNInDesignVariables ( )
```

Tests whether the algorithm can handle `NaN` passed as an upper or lower bound for design variables. If the algorithm does not support an open bound for constraints, it should throw [BoundsMustBeSpecifiedException](Namespaces/NamespaceList/Phoenix/Optimization/BoundsMustBeSpecifiedException). Other Exceptions will be marked as Inconclusive.

<a id="handlesNoFeasibleRunsFound"></a>

### handlesNoFeasibleRunsFound
```csharp
void handlesNoFeasibleRunsFound ( Exception expectedException)
```

Verify that an algorithm handles the case of no feasible points being found and throws the expected exception.

**Parameters:**

- `expectedException` - the exception we expect to be thrown when no feasible points are found

<a id="handlesUnicodeEnums"></a>

### handlesUnicodeEnums
```csharp
virtual void handlesUnicodeEnums ( )
```

Test to verify that the algorithm can handle Unicode characters in discrete variable enumerations.

<a id="handlesUnicodeNames"></a>

### handlesUnicodeNames
```csharp
void handlesUnicodeNames ( )
```

Test to verify that the algorithm can handle Unicode characters in variable names.

<a id="helpFilePathDoesDoesNotThrowExceptionAndFileExists"></a>

### helpFilePathDoesDoesNotThrowExceptionAndFileExists
```csharp
void helpFilePathDoesDoesNotThrowExceptionAndFileExists ( )
```

Test to verify that the `HelpFilePath` property does not throw an exception, is defined, and that the file exists.

<a id="helpURLDoesDoesNotThrowExceptionAndIsNotEmpty"></a>

### helpURLDoesDoesNotThrowExceptionAndIsNotEmpty
```csharp
void helpURLDoesDoesNotThrowExceptionAndIsNotEmpty ( )
```

Test to verify that the `HelpURL` property does not throw an exception and is defined.

<a id="iconLocationDoesDoesNotThrowExceptionAndFileExists"></a>

### iconLocationDoesDoesNotThrowExceptionAndFileExists
```csharp
void iconLocationDoesDoesNotThrowExceptionAndFileExists ( )
```

Test to verify that the `IconLocation` property does not throw an exception, is defined and that the file exists.

<a id="keywordsDoesDoesNotThrowExceptionAndIsNotEmpty"></a>

### keywordsDoesDoesNotThrowExceptionAndIsNotEmpty
```csharp
void keywordsDoesDoesNotThrowExceptionAndIsNotEmpty ( )
```

Test to verify that the `Keywords` property does not throw an exception and is defined.

<a id="licenseFeatureDoesDoesNotThrowException"></a>

### licenseFeatureDoesDoesNotThrowException
```csharp
void licenseFeatureDoesDoesNotThrowException ( )
```

Test to verify that the `HelpFilePath` property does not throw an exception. The license feature only needs to be defined if the algorithm will be licensed through Phoenix.

<a id="lohPapalambrosFunctionTest"></a>

### lohPapalambrosFunctionTest
```csharp
bool lohPapalambrosFunctionTest ( )
```

Runs the algorithm using the `T:Phoenix.Optimization.AlgorithmTests.Evaluators.LohPapalambrosExample2Evaluator`.

**Returns:**
- `True` if the algorithm was able to find a local minima, `false` otherwise.

<a id="matyasFunctionTest"></a>

### matyasFunctionTest
```csharp
bool matyasFunctionTest ( )
```

Runs the algorithm using the `T:Phoenix.Optimization.AlgorithmTests.Evaluators.MatyasEvaluator`.

**Returns:**
- `True` if the algorithm was able to find a local minima, `false` otherwise.

<a id="maxNumberOfObjectivesDoesDoesNotThrowExceptionAndIsGreaterThanZero"></a>

### maxNumberOfObjectivesDoesDoesNotThrowExceptionAndIsGreaterThanZero
```csharp
void maxNumberOfObjectivesDoesDoesNotThrowExceptionAndIsGreaterThanZero ( )
```

Test to verify that the `MaxNumberOfObjectives` does not throw an exception and is greater than zero.

<a id="nameDoesDoesNotThrowExceptionAndIsNotEmpty"></a>

### nameDoesDoesNotThrowExceptionAndIsNotEmpty
```csharp
void nameDoesDoesNotThrowExceptionAndIsNotEmpty ( )
```

Test to verify that the `Name` property does not throw an exception and is defined.

<a id="optionsAreEqual"></a>

### optionsAreEqual
```csharp
static void optionsAreEqual ( object lhs, object rhs )
```

Checks whether given options objects properties are equal. Objects must point to different references.

**Parameters:**

- `lhs` - First options object.
- `rhs` - Second options object.

<a id="optionsAreNotEqual"></a>

### optionsAreNotEqual
```csharp
void optionsAreNotEqual ( object lhs, object rhs )
```

Checks whether all properties of given options objects are not equal. Objects must point to different references.

**Parameters:**

- `lhs` - First options object.
- `rhs` - Second options object.

<a id="optionsDoesDoesNotThrowException"></a>

### optionsDoesDoesNotThrowException
```csharp
void optionsDoesDoesNotThrowException ( )
```

Test to verify that calling the `Options` property does not throw an exception.

<a id="optionsGetSetCorrectly"></a>

### optionsGetSetCorrectly
```csharp
void optionsGetSetCorrectly ( )
```

Test to determine whether or not options work correctly. This test gets the options from the algorithm, shuffles their values, passes them back to the algorithm then reads them again. If the options are different when read back, the test fails. If the algorithm does not have any options the `P:Phoenix.Optimization.AlgorithmTests.AlgorithmTestFixture.HasOptions` property should be overridden to return false. 

<a id="optionsIsSerializable"></a>

### optionsIsSerializable
```csharp
void optionsIsSerializable ( )
```

Test to verify that algorithm Options are serializable. If the algorithm does not have any options the `P:Phoenix.Optimization.AlgorithmTests.AlgorithmTestFixture.HasOptions` property should be overridden to return false.

<a id="optionsSerializeDeserializeCorrectly"></a>

### optionsSerializeDeserializeCorrectly
```csharp
void optionsSerializeDeserializeCorrectly ( )
```

Test to verify that the algorithm `P:Phoenix.Optimization.IAlgorithm.Options` can be serialized, and that they are the same as the original options when they are deserialized. Ignoring for the same reason as `optionsGetSetCorrectly()`. If the algorithm does not have any options the `P:Phoenix.Optimization.AlgorithmTests.AlgorithmTestFixture.HasOptions` property should be overridden to return false.

<a id="pickCheckpoint"></a>

### pickCheckpoint
```csharp
string pickCheckpoint ( Dictionary< int, string > checkPoints, int checkPointIndex, out int runNumber )
```

Gets the checkpoint string from the desired position in the list, and returns it and its run number.

**Parameters:**

- `checkPoints` - The list of checkpoints to pick from.
- `checkPointIndex` - The index of the checkpoint to pick.
- `runNumber` - Storage for the returned run number.

<a id="releaseDateDoesDoesNotThrowExceptionAndIsInRightFormat"></a>

### releaseDateDoesDoesNotThrowExceptionAndIsInRightFormat
```csharp
void releaseDateDoesDoesNotThrowExceptionAndIsInRightFormat ( )
```

Test to verify that the `ReleaseDate` property does not throw an exception, is defined, and is in the correct format.

<a id="respectsHalt"></a>

### respectsHalt
```csharp
void respectsHalt ( )
```

Tests whether the algorithm halts in a timely matter when the `Phoenix.Optimization.IAlgorithmHost.Halt` property is set. It is recommended that the algorithm check the P:`Phoenix.Optimization.IAlgorithmHost.Halt` property before each `M:Phoenix.Optimization.IAlgorithmHost.EvaluateModel(System.Object[])` or `M:Phoenix.Optimization.IAlgorithmHost.UpdateBestDesign(System.Object[])` call.

<a id="restartWorksCorrectly_RestoreFromEnd"></a>

### restartWorksCorrectly_RestoreFromEnd
```csharp
virtual void restartWorksCorrectly_RestoreFromEnd ( )
```

Test to verify that the algorithm sets at least one check point during a run, and is able to find the same answer using that check point as by using a full run when restored from the end.

<a id="restartWorksCorrectly_RestoreFromMiddle"></a>

### restartWorksCorrectly_RestoreFromMiddle
```csharp
virtual void restartWorksCorrectly_RestoreFromMiddle ( )
```

Test to verify that the algorithm sets at least one check point during a run, and is able to find the same answer using that check point as by using a full run when restored from the middle.

<a id="restartWorksCorrectly_RestoreFromStart"></a>

### restartWorksCorrectly_RestoreFromStart
```csharp
virtual void restartWorksCorrectly_RestoreFromStart ( )
```

Test to verify that the algorithm sets at least one check point during a run, and is able to find the same answer using that check point as by using a full run when restored from the start.

<a id="resultsReportDoesNotThrowExceptionAndIsNotEmptyAfterRun"></a>

### resultsReportDoesNotThrowExceptionAndIsNotEmptyAfterRun
```csharp
void resultsReportDoesNotThrowExceptionAndIsNotEmptyAfterRun ( )
```

Test to verify that 
 `P:Phoenix.Optimization.IAlgorithm.ResultsReport` does not throw an exception and is not empty after the algorithm has been run.

<a id="resultsReportDoesNotThrowExceptionBeforeRun"></a>

### resultsReportDoesNotThrowExceptionBeforeRun
```csharp
void resultsReportDoesNotThrowExceptionBeforeRun ( )
```

Test to verify that calling `P:Phoenix.Optimization.IAlgorithm.ResultsReport` before the algorithm has been run does not throw an exception.

<a id="runAlgorithm"></a>

### runAlgorithm
```csharp
bool runAlgorithm ( bool useRosenbrock = false, Action< MockSolverInfrastructure > setupSolver = null )
```

Runs the algorithm & performs some basic tests on the results.

**Parameters:**

- `useRosenbrock` - Whether to run the algorithm with the Rosenbrock evaluator
- `setupSolver` - Optional callback to enable the caller to set up the `MockSolverIntrastructure` instance that this method creates & uses

**Returns:**
- flag indicating whether the algorithm finished successfully

<a id="runRosenBrock"></a>

### runRosenBrock
```csharp
double runRosenBrock ( ref AlgorithmResults results, string checkPoint = "" )
```

Helper function that runs RosenBrock with default options either resuming or running a new one.

**Parameters:**

- `results` - ref AlgorithmResults object
- `checkPoint` - optional checkpoint string to be restored for resuming

**Returns:**
- best design objective for this run

<a id="setConstraintsDoesNotThrowException"></a>

### setConstraintsDoesNotThrowException
```csharp
void setConstraintsDoesNotThrowException ( )
```

Test to verify that setting constraints does not throw an exception.

<a id="setDesignVariablesDoesNotThrowException"></a>

### setDesignVariablesDoesNotThrowException
```csharp
void setDesignVariablesDoesNotThrowException ( )
```

Test to verify that setting design variables does not throw an exception.

<a id="setObjectivesDoesNotThrowException"></a>

### setObjectivesDoesNotThrowException
```csharp
void setObjectivesDoesNotThrowException ( )
```

Test to verify that setting algorithm objectives does not throw an exception.

<a id="setOptionsForFrankFunctionTest"></a>

### setOptionsForFrankFunctionTest
```csharp
virtual void setOptionsForFrankFunctionTest ( )
```

Sets algorithm's options to be used for the Frank function. If not implemented, the default options are used.

<a id="setOptionsForLohPapalambrosFunctionTest"></a>

### setOptionsForLohPapalambrosFunctionTest
```csharp
virtual void setOptionsForLohPapalambrosFunctionTest ( )
```

Sets algorithm's options to be used for the Matyas function. If not implemented, the default options are used.

<a id="setOptionsForMatyasFunctionTest"></a>

### setOptionsForMatyasFunctionTest
```csharp
virtual void setOptionsForMatyasFunctionTest ( )
```

Sets algorithm's options to be used for the Matyas function. If not implemented, the default options are used.

<a id="setOptionsForNonConvergingFunctionTest"></a>

### setOptionsForNonConvergingFunctionTest
```csharp
virtual void setOptionsForNonConvergingFunctionTest ( )
```

Sets algorithm's options to be used for the Non-converging function. If not implemented, the default options are used.

<a id="setOptionsForRestartTest"></a>

### setOptionsForRestartTest
```csharp
virtual void setOptionsForRestartTest ( )
```

Sets algorithm's options to be used for the restart test. If not implemented, the default options are used.

<a id="setOptionsForSystemTest"></a>

### setOptionsForSystemTest
```csharp
virtual void setOptionsForSystemTest ( )
```

Sets algorithm's options to be used for the System test. If not implemented, the default options are used.

<a id="Setup"></a>

### Setup
```csharp
void Setup ( )
```

Test set up called before each test is Run. Creates new instance of `MockSolver`, sets the host callback, calls `createAlgorithm`, and sets the host interface for the algorithm.

<a id="supportsConstraintsDoesDoesNotThrowExceptionAndIsSpecified"></a>

### supportsConstraintsDoesDoesNotThrowExceptionAndIsSpecified
```csharp
void supportsConstraintsDoesDoesNotThrowExceptionAndIsSpecified ( )
```

Test to verify that the `SupportsConstraints` does not throw an exception and is not `FuzzyBoolean.Unspecified`.

<a id="supportsDiscreteVariablesDoesDoesNotThrowExceptionAndIsSpecified"></a>

### supportsDiscreteVariablesDoesDoesNotThrowExceptionAndIsSpecified
```csharp
void supportsDiscreteVariablesDoesDoesNotThrowExceptionAndIsSpecified ( )
```

Test to verify that the `SupportsDiscreteVariables` does not throw an exception and is not `FuzzyBoolean.Unspecified`.

<a id="supportsFailedRunsDoesDoesNotThrowException"></a>

### supportsFailedRunsDoesDoesNotThrowException
```csharp
void supportsFailedRunsDoesDoesNotThrowException ( )
```

Test to verify that the `SupportsFailedRuns` does not throw an exception.

<a id="supportsMinMaxDoesDoesNotThrowExceptionAndIsSpecified"></a>

### supportsMinMaxDoesDoesNotThrowExceptionAndIsSpecified
```csharp
void supportsMinMaxDoesDoesNotThrowExceptionAndIsSpecified ( )
```

Test to verify that the `SupportsMinMax` does not throw an exception and is not `FuzzyBoolean.Unspecified`.

<a id="supportsMultipleObjectivesDoesDoesNotThrowExceptionAndMaxNumObjectivesIsConsistent"></a>

### supportsMultipleObjectivesDoesDoesNotThrowExceptionAndMaxNumObjectivesIsConsistent
```csharp
void supportsMultipleObjectivesDoesDoesNotThrowExceptionAndMaxNumObjectivesIsConsistent ( )
```

Test to verify that the `SupportsMultipleObjectives` does not throw an exception and is consistent with the `P:Phoenix.Optimization.IAlgorithm.MaxNumberOfObjectives` property.

<a id="supportsNonSmoothConstraintsDoesDoesNotThrowExceptionAndIsSpecified"></a>

### supportsNonSmoothConstraintsDoesDoesNotThrowExceptionAndIsSpecified
```csharp
void supportsNonSmoothConstraintsDoesDoesNotThrowExceptionAndIsSpecified ( )
```

Test to verify that the `SupportsNonSmoothResponses` does not throw an exception and is not `FuzzyBoolean.Unspecified`.

<a id="supportsSolveForDoesDoesNotThrowExceptionAndIsSpecified"></a>

### supportsSolveForDoesDoesNotThrowExceptionAndIsSpecified
```csharp
void supportsSolveForDoesDoesNotThrowExceptionAndIsSpecified ( )
```

Test to verify that the `SupportsSolveFor` property is does not throw an exception when called and is not `FuzzyBoolean.Unspecified`.

<a id="TearDown"></a>

### TearDown
```csharp
void TearDown ( )
```

Test tear down called after each test is Run. Disposes of the algorithm.

<a id="tearDown"></a>

### tearDown
```csharp
void tearDown ( )
```

Called after each test to clean up after test. Deletes test's references to algorithm and host.

<a id="testWithEvaluator"></a>

### testWithEvaluator
```csharp
static MockSolverInfrastructure testWithEvaluator ( ref [IAlgorithm](Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm) algorithm, [IEvaluator](Namespaces/NamespaceList/Phoenix/Optimization/IEvaluator) evaluator, ref bool finishedSuccessfully, Action< MockSolverInfrastructure > setupSolver = null )
```

Tests algorithm with the specified evaluator. If evaluator is not appropriate for the algoritm (i.e. evaluator uses solve for, but algorithm does not support solve for), the test is ignored.

**Parameters:**

- `algorithm` - `T:Phoenix.Optimization.IAlgorithm` to be used.
- `evaluator` - `T:Phoenix.Optimization.IEvaluator` to be used for algorithm test
- `finishedSuccessfully` - Used to return whether or not the algorithm finished successfully
- `setupSolver` - Optional callback to enable the caller to set up the `MockSolverIntrastructure` instance that this method creates & uses

**Returns:**
- `T:Phoenix.Optimization.AlgorithmTests.MockObjects.MockSolverInfrastructure` used

<a id="verifyResultsAreEqual"></a>

### verifyResultsAreEqual
```csharp
virtual void verifyResultsAreEqual ( AlgorithmResults fullRunResults, AlgorithmResults restartResults, int restoreRunNumber )
```

Veifies that the results of two runs are the same. If not implemented in the specific tests, uses the simple check implemented here.

**Parameters:**

- `fullRunResults` - The results of the first run.
- `restartResults` - The results of the restored run.

<a id="versionDoesDoesNotThrowExceptionAndIsNotEmpty"></a>

### versionDoesDoesNotThrowExceptionAndIsNotEmpty
```csharp
void versionDoesDoesNotThrowExceptionAndIsNotEmpty ( )
```

Test to verify that the Version property does not throw an exception and is defined.

<a id="algorithm"></a>

### algorithm
```csharp
IAlgorithm algorithm = null
```

Instance of algorithm to be tested

<a id="solver"></a>

### solver
```csharp
MockSolverInfrastructure solver = null
```

Instance of `MockSolverInfrastructure` used for tests

---

## Property Documentation

<a id="property.AlgorithmInstallationPath"></a>

### AlgorithmInstallationPath
```csharp
abstract string AlgorithmInstallationPath
```

Returns the path to the installed algorithm

<a id="property.HasOptions"></a>

### HasOptions
```csharp
virtual bool HasOptions
```

Specifies whether or not the algorithm has options. By default, the test suite assumes that the algorithm has options. If the algorithm does not have options, this property can be implmented to return `false` so that the options tests will be ignored.

<a id="property.NumberOfMessagesBeforeRestartSync"></a>

### NumberOfMessagesBeforeRestartSync
```csharp
virtual int NumberOfMessagesBeforeRestartSync
```

Offset for the number of status messages before messages are the same after a restart. This property is used by `M:Phoenix.Optimization.AlgorithmTests.AlgorithmTestFixture.restartWorksCorrectly`. The algorithm may have status messages that inform the user that a saved state is being restored, and this property is overridden to take that into account.
