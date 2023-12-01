<a id="03__Ways__of__Using_8md"></a>
# File 03\_Ways\_of\_Using.md

![][Markdown]

**Location**: `cpp\_doc/03\_Ways\_of\_Using.md`





## Source

```markdown
/** @defgroup group_03 Ways of Using DPF
 @ingroup group_2_concepts


# DPF as a Framework enabling data computation capabilities

## <a name="kernel_app"></a>DPF application: kernel and operator's libraries

DPF is a framework that provides data computation capabilities. These capabilities are provided through libraries of operators. To learn more about the computed data and the operator concepts, see @ref group_02.

A DPF application is always composed of a kernel (DataProcessingCore and DPFClientAPI binaries), that enables capabilities by loading libraries of operators (for example, Ans.Dpf.FEMutils, Ans.Dpf.Native and mapdlOperatorsCore libraries are basic libraries enabled by DPF). This application is also called a **DPF Server application**. 

When starting a DPF application, you can to customize the list of operator's libraries that the kernel loads. To learn more on how to customize the initialization of a DPF application, see @ref group_07.

## <a name="apis_languages"></a>DPF client: available APIs and languages

DPF is a framework that provides data computation capabilities. These capabilities are enabled using the [DPF Server application](#kernel_app). These capabilities can be accessed through client APIs, as shown here:

<br><br>![](apis_2.png)<br><br>

(1) The DPF server application can be accessed using [Ansys Inc product](https://www.ansys.com/), or [DPF Server package](https://dpf.docs.pyansys.com/version/stable/user_guide/getting_started_with_dpf_server.html) available on the Customer portal.

(2) Several client APIs are available (CPython, IronPython, C++, and so on).

(3) Communication in the same process, or through gRPC, allows you to have the client and the servers on different machines).

<br>

Note that **IronPython and CPython APIs are different**, each has specific syntax. 

The **list of available operators when using DPF is independent from the language or API which is used**, it only depends on how the DPF application has been initialized (see [kernel](#kernel_app)).

Most of the DPF capabilities can be accessed using the operators. For more information about the existing operators, see the **Operators** tab.

## Enhance DPF capabilities 

The available DPF capabilities loaded in a DPF application can be enhanced by creating new operator's libraries. DPF offers multiple development APIs depending on your environment. These plugins can be:
- CPython based. For more information on how to write a CPython plugin, see [pydpf-core documentation](https://dpf.docs.pyansys.com/version/stable/user_guide/custom_operators.html#user-guide-custom-operators).
- C++ based. For more information on how to write a C++ plugin, see @ref group_06_2.

The following picture shows an example of DPF application (or "DPF Server application") loading 5 plugins: 
- mapdlOperatorsCore (existing library that enables MAPDL result files processing)
- Ans.Dpf.Native (existing library that enables native capabilities such as mathematical operations)
- Ans.Dpf.Hdf5 (existing library that handles the HDF5 format)
- CustomSort (hypothetical C++ custom library that would compute custom sort operators)
- NumpyApplication (hypothetical CPython library that would compute data using Numpy library) 

<br><br>![](apis_1.png)<br><br>

# DPF integration

DPF is available as a standalone tool and as a tool in Ansys Mechanical. You should decide whether you want to use standalone DPF or DPF in Mechanical before creating any scripts. 

## DPF as a standalone application

**Standalone DPF** can be used through any of the [previously mentioned APIs](#apis_languages). 

In particular, DPF Standalone capabilities can be enabled using **CPython** and can be accessed via any Python console. Data can be exported to universal file formats (VTK, hdf5, txt files). Use it to generate TH-plots, screenshots, animations, and so on, or create custom results plots using numpy and matplotlib libraries.<br><br>![](dpf-reports.png)<br>

For more information about CPython DPF APIs, see [pydpf-core documentation](https://dpf.docs.pyansys.com/version/stable/).

DPF Standalone capabilities can also be accessed using **C++**. For more information, see @ref group_06_1 and @ref group_06_2.

## Mechanical

**DPF in Mechanical** uses IronPython and is accessible via the ACT console. Use it to perform custom postprocessing and visualization of results directly within the Mechanical application.<br><br>![](dpf-mech.png)<br><br>

```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)