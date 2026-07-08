# getAssemblyStyle


abstract fun [getAssemblyStyle](get-assembly-style.md)(assemblyName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [ModelCenter.AssemblyStyleInfo](../-model-center/-assembly-style-info/index.md)

Get the visual style of an assembly. This method can be used to get information about any control with children, including IF blocks, traditional assemblies, drivers (in process mode), sequences, and parallel blocks. The style in the returned data will either be Expanded or Collapsed, except for expanded data-driven assemblies, which will have more detailed information.

#### Return

the style information

#### Parameters



| | |
|---|---|
| assemblyName | the full name of the assembly to modify |
