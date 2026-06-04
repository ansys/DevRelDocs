# Debugging in DPF

Debugging enables you to analyze how DPF runs and generates data so that you can find defects in your code. You can use the Watch window in Visual Studio to visualize any member of any object.

![](../images/debugger.png)

**Topics:**

- [How the Debug View Works](#debug1)
- [Custom Views with Natvis Files](#debug2)
- [Combining Graph Visualization with Natvis Views](#debug3)
- [Usages for the CodeDV Property Sheet](#debug4)
- [Using the DebugTrace Function](#debug5)

## <a name="debug1"></a>How the Debug View Works

The debugger can access any part of the debugged program's memory regardless of the compilation setting that you use (Debug/Release). To access the memory, the debugger uses information from a Program Database (.pdb) file. A PDB file is typically created from source files during compilation. It enables the debugger to easily navigate through objects using C++-like expressions.

The default debug view constructs a standard visualization for any class. However, you can define your own visualization using [Natvis files](#debug2).

![](../images/debug-views.png)

## <a name="debug2"></a>Custom Visualization with Natvis Files

The Visual Studio Natvis framework customizes the way types appear in the debug view. For more information, see [Create custom views of C++ objects in the debugger using the Natvis framework](https://docs.microsoft.com/en-us/visualstudio/debugger/create-custom-views-of-native-objects?view=vs-2022).

The comparison below provides an example of the customization that can be achieved with a .natvis file.

**Default view with no customization:**

![](../images/no-natvis.png)

**Custom Natvis view:**

![](../images/with-natvis.png)

## <a name="debug3"></a>Combining Graph Visualization with Natvis Views

In programming, graphs provide a visual map of your data structure and the relationships between different classes.

To enable graph visualization, workflows in DPF have a Graphviz export method:

![](../images/graphviz-export.png)

Graphviz is an open-source graph visualization tool that takes a text description of a graph and generates a diagram for you. For details see [https://graphviz.org](https://graphviz.org).

Many tools are available to render Graphviz diagrams in useful formats such as SVG images. For example,

- Notepad++ plugin
- [https://dreampuf.github.io/GraphvizOnline](https://dreampuf.github.io/GraphvizOnline)

When you use a Graphviz diagram in combination with a Natvis view, you can see the content of each operator of a workflow (using their IDs).

![](../images/graph-combo.png)

## <a name="debug4"></a>Usages for the CodeDV Property Sheet

There are two main usages for CodeDV:DataProcessingHourglass.props:

> **Developing DPF for Ansys Mechanical**:
>
> - You compile DPF and have a DPF repository
> - You want to use your own binaries and API
> - By defining the environment variable **DPF_DEV=true**, the DPF repository is consumed

> **Developing components that consume DPF**:
>
> - You do not compile DPF or have a DPF repository, but would find debugging helpful
> - By defining the environment variable **DPF_COPY_DLL=true**, the DLL and PDB from the DPF package are dropped into the program directory, enabling debug insight

## <a name="debug5"></a>Using the DebugTrace Function

DebugTrace is a special mechanism that writes the input/output of each and every operator/workflow that runs within DPF.

There are two ways to turn on DebugTrace:

- Set the environment variable **DATAPROCESSING_DEBUG** to the path where you want your trace to be dumped
- Directly within Ansys Mechanical, use **Ans.DataProcessing.DataProcessing.ActivateDebugTrace​**

## <a name="debug6"></a>Producing Chrome Trace Event traces

You can produce traces that follow the execution of operators and workflows in a format that can be interactively
opened and explored. This approach does not carry any result data, unlike  **DATAPROCESSING_DEBUG**.

To create the files:

1. Set the value of the **DPF_CHROME_TRACES_ROOT** environment variable to the folder where you want to create the file.
2. Run a DPF operator/workflow, a JSON file is created for each process using DPF and is stored in the folder selected in step 1.
3. Open any chrome-based browser (Edge, Chromium, Chrome, and so on).
4. Navigate to the special `about:tracing` URL.
5. Drop one of the files in this location.

This file also contains metrics for memory consumption of the process. While these metrics can be used to identify
large memory allocation from operators, it does not provide an accurate representation of the memory allocated by DPF.
Memory is allocated for the whole process, not just DPF. This may include memory mapped files and duplicates for shared
memory between processes and do not accurately represent the time when memory is freed. They are not comparable
between different DPF releases or different operating systems.

On Windows, the available measures are `WorkingSetSize` and `PrivateUsage` from [PROCESS_MEMORY_COUNTERS_EX](https://learn.microsoft.com/en-us/windows/win32/api/psapi/ns-psapi-process_memory_counters_ex), in bytes.

On Linux, the available measures are a subset of the [statm file](https://www.kernel.org/doc/Documentation/filesystems/proc.txt) (Table 1-3), in bytes.

- **size**: The total program size in memory (virtual memory, too), including all code, data, and shared libraries. Often referred to as the process's virtual memory size (VM size).
- **resident_size**: The Resident Set Size (RSS) is the amount of physical RAM directly allocated to the process. RSS = TRS + DRS + Shared
- **trs**: The Text Resident Size (TRS) is the amount of physical RAM that's occupied by code (text segment) of the current program. It's rarely used for debugging. The TRS is a subset of the RSS.
- **drs**: The Data Resident Size (DRS) is the amount of physical RAM that's occupied by data segment plus the heap. It's memory used for variables, dynamic allocations, and other non-code sections. The DRS is a subset of the RSS.
- **shared**: The amount of physical RAM that is shared with other processes.
