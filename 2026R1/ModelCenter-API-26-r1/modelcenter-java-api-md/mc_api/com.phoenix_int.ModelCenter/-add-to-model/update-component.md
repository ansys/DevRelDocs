# updateComponent


public [updateComponent](update-component.md)()

Reinitializes the inputs and outputs of a Component Plug-In. The addInput() and addOutput() methods must be called for each input and output for the new configuration before calling updateComponent(). This method is not allowed to be called in the run() method.

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |
