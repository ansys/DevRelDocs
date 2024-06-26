<a id="indexpage"></a>
# Introduction


<a id="index_1md_cpp_doc_01_Introduction"></a>
 The Data Processing Framework (**DPF**) provides numerical simulation users/engineers with a toolbox for accessing and transforming simulation data. It is used to handle complex pre- or post-processing of simulation data within a simulation workflow.


![Ansys example image](./pyansys-docs-page-example.webp)


DPF is an independent, physics-agnostic tool that can be plugged into many applications for both data input and data output (result plots, visualization, and so on).





DPF can access data from solver result files and other neutral formats (for example, CSV, HDF5, and VTK). Various operators are available, allowing you to manipulate and transform this data. You can chain operators together to create simple or complex data-processing workflows that can be reused for repeated or future evaluations.





The data in DPF is defined based on physics-agnostic mathematical quantities described in self-sufficient entities called fields. This allows DPF to be a modular and easy-to-use tool with a large range of capabilities. It is designed to handle large amounts of data.<br/>




<br/>






<br/>






## Brief demo






Here is how you open a result file generated by MAPDL (or another ANSYS solver) and extract results:





```
// instantiate DataSources containing information about result file
std::string fileName("Cube.rst");
ansys::dpf::DataSources dataSources;        
dataSources.addResultFile(fileName);

// Instantiate result operator ("U" reads the displacement)
ansys::dpf::Operator resultOperator = ansys::dpf::Operator("U");
resultOperator.connect(ansys::dpf::eDataSourcesPin, dataSources);

// Get the result Field (displacement)
ansys::dpf::Field resultsField = resultOperator.getOutputFieldsContainer(0).at(0);
```





The result file can be found under dpf/testfiles folder of the Ansys Inc product.





<br/>






## Accessing and enriching DPF capabilities






<u>Most of the DPF capabilities can be accessed using the operators</u>. For more information about the existing operators, see the **Operators** tab.





The following sections are summaries. For more detailed content, see [Ways of Using DPF](group__group__03.md#group__group__03).





### <a id="_1access_server"></a>
,Accessing DPF Server files






<u>DPF capabilities are accessible when DPF Server files are available</u>. These files can be accessed using:
* The **Ansys installer**. To use it, download the standard installation using your preferred distribution channel, and install Ansys following the installer instructions. For information on getting a licensed copy of Ansys, visit the [Ansys website](https://www.ansys.com/).

* The [**DPF Server**](https://dpf.docs.pyansys.com/version/stable/user_guide/getting_started_with_dpf_server.html) package. It is independent of the Ansys installer and is available on the [DPF Pre-Release page](https://download.ansys.com/Others/DPF%20Pre-Release) of the Ansys Customer Portal. DPF Server is protected by an Ansys [license mechanism](https://dpf.docs.pyansys.com/version/stable/user_guide/getting_started_with_dpf_server.html#license-terms).







### Accessing capabilities with scripting







* C++ documentation:
* The Data Processing Framework section in [Platform panel](https://ansysapi.ansys.com/account/secured?returnurl=/Views/Secured/main_page.html?lang=en)

* The [Developer Portal](https://developer.ansys.com/product/DPF-Server-Client-Library/index.xhtml)



* CPython modules documentation:
* [ansys-dpf-core](https://dpf.docs.pyansys.com/version/stable/)

* [ansys-dpf-post](https://post.docs.pyansys.com/version/stable/)



* Mechanical scripting (IronPython):
* [DPF through Automation Scripting](https://ansysproducthelpqa.win.ansys.com/account/secured?returnurl=/Views/Secured/corp/v231/en/act_script/mech_apis_data_process_frame.html)

* [Python Result object](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v231/en/wb_sim/ds_python_result.html)







### Enriching DPF capabilities







* [C++ operator's library](group__group__06__2.md#group__group__06__2)

* [C++ solver reader plugin](https://astonishing-hyacinth-e64.notion.site/How-to-write-a-new-solver-reader-as-a-DPF-s-plugin-bd2d2a3cf51f47ef9e70df45d64f89cb)

* [CPython operator's library](https://dpf.docs.pyansys.com/version/stable/user_guide/custom_operators.html#user-guide-custom-operators)







<br/>






## More content






See [Getting started](getting_started.md#getting_started) section to know how to get started with DPF.





For comprehensive examples on how to use PyDPF-Core, see [Examples](examples.html) section.





For more detailed articles about DPF capabilities, see [User guide](modules.html) section.

**TODO**:

* location {"type":"element","name":"location","attributes":{"file":"cpp_doc/01_Introduction.md"},"children":[]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
