# How to create an Evaluator

The Algorithm Developer Tools includes a suite of test problems to test the performance of algorithms. Some of these test problems are academic in nature and others are more real world (some require ModelCenter and other tools such as ABACUS, LS-DYNA, etc.). Additional test problems can be added by implementing the interface and placing the resulting DLL in the correct location.

## Added New Evaluator Functions

Evaluator functions are run using the Algorithm Problem Test Suite which is included with the Algorithm Developer Tools.

1. Select **New > Project** from the **File** menu in Visual Studio, or select **New Project** from the **File** menu in Visual Studio or Visual Studio Express.

2. Select **PHXEvaluator** template from the **Visual C#**, **Visual Basic** or **Visual C++** Section, depending on which language you wish to work in, and enter a project name (something like *[evaluator function name]*), select *Add to Solution* then click the **OK** button.

3. The [`IEvaluator`](api/Namespaces/NamespaceList/Phoenix/Optimization/IEvaluator.md) interface requires 14 properties and three methods to be implemented.

   - **Properties**
     - `Name` - The name of the evaluator.
     - `GlobalBestDesigns` - A multi-dimensional array of the global optima of the evaluator.
     - `DesignVariableCount` - The number of design variables defined by the evaluator.
     - `Objectives` - The list of objectives used by the evaluator.
     - `Constraints` - The list of constraints used by the evaluator.
     - `DesignVariables` - The list of design variables used by the evaluator.
     - `UsesMultipleObjectives` - `True` if the evaluator uses multiple objectives; `false` otherwise.
     - `NumberOfObjectives` - The number of objectives defined by the evaluator.
     - `UsesDiscreteVariables` - `True` if the evaluator uses discrete variables; `false` otherwise.
     - `UsesConstraints` - `True` if the evaluator has constraints; `false` otherwise.
     - `HasNonSmoothResponses` - `True` if the evaluator has non-smooth responses; `false` otherwise.
     - `UsesMinMax` - `True` if the evaluator uses the minimize/maximize objective; `false` otherwise.
     - `UsesSolveFor` - `True` if the evaluator uses the solve for objective; `false` otherwise.
     - `HasFailedRuns` - `True` if the evaluator can have failed runs; `false` otherwise.

   - **Methods**
     - `EvaluateModel` - Used to evaluate evaluator function.
     - `IsDesignAcceptable` - Used to determine whether or not a design is one of the local optima.
     - `SetStartPoint` - Used to set the starting values for the evaluator.

4. Each Evaluator project can include multiple evaluators, and once the DLL has been built, it should be copied to one of three locations:

   - In a subdirectory of the user's evaluators directory. Typically:
     - "C:\Documents and Settings\*[username]*\My Documents\Optimization Tool\evaluators" under Windows XP or
     - "C:\Users\*[username]*\Documents\Optimization Tool\evaluators" under Windows Vista and Windows 7

   - In a subdirectory of the local machine's algorithms directory. Typically:
     - "C:\Documents and Settings\All Users\Documents\Optimization Tool\evaluators" under Windows XP or
     - "C:\Users\Public\Documents\Optimization Tool\evaluators" under Windows Vista and Windows 7

   - In a subdirectory of Optimization Tool's algorithms directory. Typically, "C:\Program Files\Phoenix Integration\Optimization Tool\evaluators". **NOTE:** This is the location for algorithms that are installed with the Optimization Tool, but users may not have write access to this location because of user security privileges.

   Copy the evaluator DLL (and any files it requires) to the new directory.


