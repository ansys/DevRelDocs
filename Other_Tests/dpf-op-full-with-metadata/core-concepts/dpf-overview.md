# Overview of DPF

The Data Processing Framework (DPF) is designed to provide numerical simulation users/engineers with a toolbox for accessing and transforming simulation data. DPF can access data from solver result files as well as several neutral formats (csv, hdf5, vtk, etc.). Various operators are available allowing the manipulation and the transformation of this data. DPF is a workflow-based framework which allows simple and/or complex evaluations by chaining operators. The data in DPF is defined based on physics agnostic mathematical quantities described in a self-sufficient entity called field. This allows DPF to be a modular and easy to use tool with a large range of capabilities. It's a product designed to handle large amount of data.

## Advantages

**Computation efficiency**

DPF is a modern framework and it has been developed by taking advantages of new hardware architectures. Due to continued development, new capabilities are frequently added.

**Generecity**

DPF is physic agnostic. Therefore, its use is not limited to a particular field.

**Extensibility and Customization**

DPF is developed around two entities, one for the data (field) and one for the operation (operator). Each DPF capability is developed through operators, allowing componentization of the framework. DPF is also plugin based so adding new features or handling new formats is fast and easy. With componentization, plugins, and DPF scripting, you can add your own capabilities and link your existing work with DPF.
