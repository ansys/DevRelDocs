<a id="group__group__09"></a>
# Writing a DPF operator



### Introduction

The Data Processing Framework (DPF) provides numerical simulation users/engineers with a toolbox for accessing and transforming simulation data. It is used to handle complex pre- or post-processing of simulation data within a simulation workflow.





In DPF, **Operators** are the main object used to create, transform and stream the data. An operator is composed of a “core” that handles the calculation. It receives the data using input pins, applies a transformation and makes the data available through the output pins (think of an integrated circuit in electronics). **There are rules to follow to correctly write operators in a project which is already using DPF.**





This section illustrates how to write an operator in a C++ project which is already using DPF capabilities. An operator could also be written in its own plugin.





For a set of instructions on how to create a project from scratch using DPF capabilities to define & expose operators, refer to the [Creating a DPF custom operator's library](group__group__06__2.md#group__group__06__2) section. For a set of instructions on how to integrate DPF capabilities in already existing project, refer to the [Using DPF capabilities in an existing project](group__group__06__1.md#group__group__06__1) section.




### Operator's implementation example

#### Custom sort operator

In this example, an operator for custom sorting is implemented.





Note: the corresponding implementation is only employed as an example. Existing "ascending_sort" or "descending_sort" operators are the best way to sort Field data.





Edit the file where the custom operator is implemented and add the following line if it is not already specified:






```
#include "dpf_api.h"
```






The custom operator implementation can now start.






```
// my custom operator 
// ------------------
struct SortOperator
{
    // identify the operator
    static std::string name() { return "custom_sort"; }

    // describe the operator 
    static ansys::dpf::OperatorSpecification specification()
    {
        ansys::dpf::OperatorSpecification spec;

        spec.setDocumentation("This operator allows a custom sort of the input field data.");

        spec.setInputPins(
            {
                ansys::dpf::PinDefinition(0) // set the input pin number
                .setName("field_to_sort")
                .setAcceptedTypes({ ansys::dpf::types::field})
                .setDoc("field on what must be applied the sorting"),
            });

        spec.setOutputPins(
            {
                ansys::dpf::PinDefinition(0) // set the output pin number
                .setName("sorted_field")
                .setAcceptedTypes({ ansys::dpf::types::field })
                .setDoc("field that has been sorted"),
            });

        // set the exposed properties of the operator, allowing documentation generation 
        spec.setProperty(ansys::dpf::spec::exposure::sExposure, ansys::dpf::spec::exposure::sPublic);
        spec.setProperty(ansys::dpf::spec::category::sCategory, "custom");
        spec.setProperty(ansys::dpf::spec::sUserName, "custom sort");
        
        // Sets the operator as premium
        spec.setProperty(ansys::dpf::spec::license::sLicense, ansys::dpf::spec::license::sDpf);

        return spec;
    }

    // define the data computation
    static void run(ansys::dpf::OperatorMain& main)
    {
        // get the input data
        ansys::dpf::Field to_sort = main.getInputField(0);

        // sort
        std::vector<double> data;
        to_sort.getData(data);
        std::sort(data.begin(), data.end());

        // set the output
        ansys::dpf::Field sorted = to_sort.deep_copy();
        sorted.setData(data);
        main.setOutput(0, sorted);
        main.setSuccessed(); 
    }
};
```






The **SortOperator** structure contains all the implementation related to the custom operator. It contains:
* a **name** method (unique identifier): "custom_sort"

* a **specification** method which defines and describes the operator inputs, outputs and data computation. Here, the operator exposes one input named "field_to_sort" at pin 0: when connecting data to this operator, the connect object should be of **Field** type. It exposes one output named "sorted_field" at pin 0, that is of **Field** type.

* a **run** method which contains the data computation code. It first reads the input data, reading the **Field** provided through input pin 0. It computes the data, sorting it. Then, it creates the output **Field** and set it as output.







In the **specification**, the "license" information is optional. If specified, the operator will require a license checkout using the specified increment while running. It will release the license increment once it has been run. Refer to the [Using DPF Context](group__group__11.md#group__group__11) section to learn more about licensing in DPF.




#### Record the operator

The following code enables the operator to be accessible and must be run before any instantiation of this operator.





Working in an operator's library (see [Creating a DPF custom operator's library](group__group__06__2.md#group__group__06__2)), use the following code:






```
ansys::dpf::core::recordOperatorAtCore<SortOperator>(core_ptr); 
```






Working in an existing process (see [Using DPF capabilities in an existing project](group__group__06__1.md#group__group__06__1)), use the following code:






```
ansys::dpf::core::recordOperator<SortOperator>(); 
```




#### Instantiate the operator

Once the operator is recorded in the process, it can be instantiated using the following code:






```
ansys::dpf::Operator my_custom_operator("custom_sort");
```






The following can be used to check if the operator is correctly instantiated:






```
bool bIsInstantiated = !my_custom_operator.empty();
```






If bIsInstantiated value is false, either the plugin that contains the operator has not been correctly loaded, or the record is not correctly done. The spelling also must be checked. <br/>




#### Use the operator to compute data

The following shows how to create a **Field** containing the data to be sorted:






```
ansys::dpf::FieldDefinition fieldDef(ansys::dpf::Location("CustomLocation"), { 1 });
ansys::dpf::Field field_to_sort;
field_to_sort.setFieldDefinition(fieldDef);
std::vector<double> data1({ 2.1, 1.5, 4.0 });
std::vector<double> data2({ 10.9, 9.5 });
field_to_sort.push_back(3, data1);
field_to_sort.push_back(7, data2);
```






Once the operator is instantied and the **Field** containing the data to sort, is create. The operator can then read the input data and perform the necessary computations.






```
my_custom_operator.connect(0, field_to_sort);
```






The output can be requested. It triggers the execution of the operator and provides a **Field** containing sorted data.






```
ansys::dpf::Field sorted_vector = my_custom_operator.getOutputField(0);
double* sorted_data = sorted_vector.data().data();
```






<code>sorted_data</code> should contain the following values with the following order: 1.5, 2.1, 4.0, 9.5, 10.9.





See the **Field** documentation to learn how to access the data.




### Best practices


* Documentation generation uses JavaScript, **'js' or 'JS' chain of characters must be avoided** in any string object of the operator specification. If this rule is not followed, the documentation generation fails.

* Operator's name should not contain white space and should be written in snake case.

* Use lower case in specification's strings, except for description.

* Spaces must not be used in specification's strings, except for description.




### Example full code compiled with Visual Studio on Windows

The following is the complete code showing how to write an operator in an existing process and use it.






```
// DPF include files to access capabilities without linking step
#include "dpf_api.h"
#include "dpf_api_i.cpp"

#include <iostream>

// initialization of DPF capabilities
struct staticData {
    static ansys::dpf::LibraryHandle* _dpfLibraryHandle;
};
ansys::dpf::LibraryHandle* staticData::_dpfLibraryHandle = new ansys::dpf::LibraryHandle(ansys::dpf::Context::premiumContext());

// my custom operator 
// ------------------
struct SortOperator
{
    // identify the operator
    static std::string name() { return "custom_sort"; }

    // describe the operator 
    static ansys::dpf::OperatorSpecification specification()
    {
        ansys::dpf::OperatorSpecification spec;

        spec.setDocumentation("This operator allows a custom sort of the input field data.");

        spec.setInputPins(
            {
                ansys::dpf::PinDefinition(0) // set the input pin number
                .setName("field_to_sort")
                .setAcceptedTypes({ ansys::dpf::types::field})
                .setDoc("field on what must be applied the sorting"),
            });

        spec.setOutputPins(
            {
                ansys::dpf::PinDefinition(0) // set the output pin number
                .setName("sorted_field")
                .setAcceptedTypes({ ansys::dpf::types::field })
                .setDoc("field that has been sorted"),
            });

        // set the exposed properties of the operator, allowing documentation generation 
        spec.setProperty(ansys::dpf::spec::exposure::sExposure, ansys::dpf::spec::exposure::sPublic);
        spec.setProperty(ansys::dpf::spec::category::sCategory, "custom");
        spec.setProperty(ansys::dpf::spec::sUserName, "custom sort");

        // Sets the operator as premium
        spec.setProperty(ansys::dpf::spec::license::sLicense, ansys::dpf::spec::license::sDpf);

        return spec;
    }

    // define the data computation
    static void run(ansys::dpf::OperatorMain& main)
    {
        // get the input data
        ansys::dpf::Field to_sort = main.getInputField(0);

        // sort
        std::vector<double> data;
        to_sort.getData(data);
        std::sort(data.begin(), data.end());

        // set the output
        ansys::dpf::Field sorted = to_sort.deep_copy();
        sorted.setData(data);
        main.setOutput(0, sorted);
        main.setSuccessed();
    }
};

int main()
{
    ansys::dpf::core::recordOperator<SortOperator>(); // record the operator to make it accessible
    ansys::dpf::Operator my_custom_operator("custom_sort");
    bool bIsInstantiated = !my_custom_operator.empty();

    ansys::dpf::FieldDefinition fieldDef(ansys::dpf::Location("CustomLocation"), { 1 });
    ansys::dpf::Field field_to_sort;
    field_to_sort.setFieldDefinition(fieldDef);
    std::vector<double> data1({ 2.1, 1.5, 4.0 });
    std::vector<double> data2({ 10.9, 9.5 });
    field_to_sort.push_back(3, data1);
    field_to_sort.push_back(7, data2);

    my_custom_operator.connect(0, field_to_sort);

    ansys::dpf::Field sorted_vector = my_custom_operator.getOutputField(0);

    double* sorted_data = sorted_vector.data().data();

    for (int i = 0; i < sorted_vector.dataSize(); i++)
    {
        std::cout << std::to_string(sorted_data[i]).c_str() << std::endl;
        std::cout << " " << std::endl;
    }
}
```






It can be compiled on Visual Studio using the VCXPROJ file in [Using DPF capabilities in an existing project](group__group__06__1.md#group__group__06__1) section.

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)