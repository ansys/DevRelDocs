<a id="group__group__06"></a>
# Debugging in DPF



Debugging enables you to analyze how DPF runs and generates data so that you can find defects in your code. You can use the Watch window in Visual Studio to visualize any member of any object.<br/>
<br/>




<br/>






**Topics:**






* [How the Debug View Works](#debug1)

* [Custom Views with Natvis Files](#debug2)

* [Combining Graph Visualization with Natvis Views](#debug3)

* [Usages for the CodeDV Property Sheet](#debug4)

* [Using the DebugTrace Function](#debug5)







## <a id="_1debug1"></a>
,How the Debug View Works






The debugger can access any part of the debugged program's memory regardless of the compilation setting that you use (Debug/Release). To access the memory, the debugger uses information from a Program Database (.pdb) file. A PDB file is typically created from source files during compilation. It enables the debugger to easily navigate through objects using C++-like expressions.





The default debug view constructs a standard visualization for any class. However, you can define your own visualization using [Natvis files](#debug2).<br/>
<br/>




<br/>






## <a id="_1debug2"></a>
,Custom Visualization with Natvis Files






The Visual Studio Natvis framework customizes the way types appear in the debug view. For more information, see [Create custom views of C++ objects in the debugger using the Natvis framework](https://docs.microsoft.com/en-us/visualstudio/debugger/create-custom-views-of-native-objects?view=vs-2022).





The comparison below provides an example of the customization that can be achieved with a .natvis file.





**Default view with no customization:**<br/>
<br/>




<br/>






**Custom Natvis view:**<br/>
<br/>




<br/>






## <a id="_1debug3"></a>
,Combining Graph Visualization with Natvis Views






In programming, graphs provide a visual map of your data structure and the relationships between different classes.





To enable graph visualization, workflows in DPF have a Graphviz export method:<br/>
<br/>




<br/>






Graphviz is an open-source graph visualization tool that takes a text description of a graph and generates a diagram for you. For details see [https://graphviz.org](https://graphviz.org).





Many tools are available to render Graphviz diagrams in useful formats such as SVG images. For example,






* Notepad++ plugin

* [https://dreampuf.github.io/GraphvizOnline](https://dreampuf.github.io/GraphvizOnline)







When you use a Graphviz diagram in combination with a Natvis view, you can see the content of each operator of a workflow (using their IDs).<br/>
<br/>




<br/>






## <a id="_1debug4"></a>
,Usages for the CodeDV Property Sheet






There are two main usages for CodeDV:DataProcessingHourglass.props:






* **Developing DPF for Ansys Mechanical**:
* You compile DPF and have a DPF repository

* You want to use your own binaries and API

* By defining the environment variable **DPF_DEV=true**, the DPF repository is consumed



* **Developing components that consume DPF**:
* You do not compile DPF or have a DPF repository, but would find debugging helpful

* By defining the environment variable **DPF_COPY_DLL=true**, the DLL and PDB from the DPF package are dropped into the program directory, enabling debug insight







## <a id="_1debug5"></a>
,Using the DebugTrace Function






DebugTrace is a special mechanism that writes the input/output of each and every operator/workflow that runs within DPF.





There are two ways to turn on DebugTrace:






* Set the environment variable **DATAPROCESSING_DEBUG** to the path where you want your trace to be dumped

* Directly within Ansys Mechanical, use **Ans.DataProcessing.DataProcessing.ActivateDebugTrace​**

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)