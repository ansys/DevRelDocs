# Implement Setup Methods 

Algorithms have five methods and one property that the Optimization Tool uses to pass the problem definition to the algorithm.

## Implement the Setup Methods

When the algorithm is being prepared to run the setup methods are called in the following order:

1. [`SetHost(IAlgorithmHost)`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SetHost) - this method is called to provide access to the methods provided by [`IAlgorithmHost`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithmHost.md). This object should be retained to make model evaluation calls and to set status messages. Add solver as a private variable used to make callbacks to the infrastructure.

2. [`SetObjectives(List<Objective>)`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SetObjectives) - passes all the information about the objectives in the problem. The property is passed as a List of [`Objective`](../api/Namespaces/NamespaceList/Phoenix/Optimization/Objective.md) objects.

3. [`SetConstraints(List<OptConstraint>)`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SetConstraints) - passes all the information about the constraints in the problem. The property is passed as a List of [`OptConstraint`](../api/Namespaces/NamespaceList/Phoenix/Optimization/OptConstraint.md) objects. If constraints are not used, the method can be left empty.

4. [`SetDesignVariables(List<DesignVariable>)`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SetDesignVariables) - passes all the information about the design variables in the problem. The property is passed as a List of [`DesignVariable`](../api/Namespaces/NamespaceList/Phoenix/Optimization/DesignVariable.md) objects.

5. [`RestoreCheckPoint(String)`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#RestoreCheckPoint) - this method is called to restore the algorithm to a specific state for restart. This algorithm is only ever called if the algorithm sets a check point by calling [`SaveCheckPoint(String, String)`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithmHost.md#SaveCheckPoint) method. Calling `SaveCheckPoint` is optional, but recommended.

   **NOTE:** checkpoints have not yet been implemented into the infrastructure, but the interfaces for it have been defined in preparation.

## Implement Options

- [`Options`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#Options) - an object that contains all of the options available for the algorithm. Is used to pass the options to the infrastructure for display and to return the options to the algorithm for use.

- [`ShowOptionsDialog(IWin32Window)`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#ShowOptionsDialog) (optional) - If you wish to display a custom options dialog, implement this method to show it. If a custom options dialog is displayed, return `true`, otherwise return `false` and the Optimization Tool will display a property grid of the available options.

