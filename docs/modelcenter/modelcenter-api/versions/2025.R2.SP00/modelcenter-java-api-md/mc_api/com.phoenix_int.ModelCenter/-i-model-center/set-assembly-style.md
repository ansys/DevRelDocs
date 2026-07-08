# setAssemblyStyle


abstract fun [setAssemblyStyle](set-assembly-style.md)(assemblyName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), style: [ModelCenter.AssemblyStyle](../-model-center/-assembly-style/index.md))

Set the visual style of an assembly. This method can be used to modify any control with children, including IF blocks, traditional assemblies, drivers (in process mode), sequences, and parallel blocks.

#### Parameters



| | |
|---|---|
| assemblyName | the full name of the assembly to modify |
| style | the style |


abstract fun [setAssemblyStyle](set-assembly-style.md)(assemblyName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), style: [ModelCenter.AssemblyStyle](../-model-center/-assembly-style/index.md), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

 Set the visual style of an assembly including (optionally) width and height. Style constants are defined above and in ModelCenter.odl in the ModelCenter project. 

 Width and height are ignored for the model, elements to be collapsed, and for assemblies which are not data-driven. 

 This method can be used to modify any control with children, including IF blocks, traditional assemblies, drivers (in process mode), sequences, and parallel blocks. 

#### Parameters



| | |
|---|---|
| assemblyName | the full name of the assembly to modify |
| style | the style |
| width | the new width; ignored when <= 0 |
| height | the new height; ignored when <= 0 |
