<a id="05__Using__DPF_8md"></a>
# File 05\_Using\_DPF.md

![][Markdown]

**Location**: `cpp\_doc/05\_Using\_DPF.md`





## Source

```markdown
/** @defgroup group_05 Using DPF: Step by Step
 @ingroup group_2_concepts

# Using DPF: Step by Step

The goal of using DPF is to transform simulation data into output data that can be used to visualize and analyze simulation results.

This process has two main steps:

- [Step 1: Define Simulation Data](#step1)
- [Step 2: Transform the Data](#step2)

## <a name="step1"></a>Step 1: Define Simulation Data

Data can come from two sources: 

- **Simulation result files**. DPF automatically recognizes the fields in result files. When using a result file as input you must specify the data source file(s). 
- **Manual input in DPF**. You create fields of data in DPF. 

Once a data source has been selected, or fields have been manually defined, you create field containers (if applicable) and define scopings to identify the subset of data that you want to evaluate. 

### Selecting a Data Source 

When you want to evaluate the data in simulation result files, you must specify the **data source**. This is folder containing analysis results. Typically the data source consists of a path to the result or data files.  

To evaluate data files, they must be opened. To open data files, you define **streams**. A stream is an entity that contains the data sources. Streams keep the data files open and keep some data cached to make the next evaluation faster. Streams are particularly convenient when using large files. They save time when opening and closing files. When a stream is released, files are closed. 

### Defining Fields

A **field** is a container of simulation data. In numerical simulations, results data is defined by values associated with entities:<br><br>![](values-entities.png)<br>

Therefore, a field of data may look something like this:<br><br>![](field.png)<br>

In DPF, field data is always associated with its **scoping** and **support**, making it a self-describing piece of data. A field can also be defined by its dimensionality, unit, and location. To learn more see [Concepts and Terminology](cpp_doc\02_Concepts.md).

### Defining Scoping

In most cases you will not want to work with an entire field, but rather a subset of entities in the field. To achieve this you define **scoping** for the field. Scoping is a set of entity IDs on a location. For example, this may be a set of mesh IDS, geometric entity IDs, time domain, frequency domain, and so on. You specify the set of entities by defining a range of IDs:<br><br>![](scoping-eg.png)<br>

A scoping must be defined prior to its use in the transformation data workflow.

### Defining Field Containers

A **field container** holds a set of fields. It is used mainly for transient, harmonic, modal, or multi-step analyses. For example:<br><br>![](field-con-overview.png)<br>

A field container is a vector of fields. Fields are ordered with labels and IDs. Most commonly, the field container is scoped on the “time” label and the IDs are the time or frequency sets:<br><br>![](field-con.png)<br>

You can define a field container in multiple ways:

- Extract labeled data from a results file 
- Create a field container from a CSV file
- Convert existing fields to a field container

Some operators can operate directly on field containers instead of fields. Field containers are identified by the “FC” suffix in their name. Operators and field containers are explained in more detail in [Step 2: Transform the Data](#step2).

## <a name="step2"></a>Step 2: Transform the Data

Once you have defined the simulation data to be evaluated, you use operators to transform the data to obtain the desired output. Operators can be chained together to create simple or complex data transformation workflows. 

### Using Operators 

Operators can be used to import, export, transform, and analyze data. 

An operator is analogous to an integrated circuit in electronics which has a set of input and output pins. Pins allow data to be passed to each operator.  

An operator takes input from a field, field container, or scoping via an input pin, and computes output based on what the operator is designed to do. The output is passed to a field or field container via an output pin.<br><br>![](circuit.png)<br>

To use operators you should consult the online help:

1. In the table of contents, select **Operators**.
2. To search for an operator, type a keyword in the **Search** field or browse each category to display the list of available operators for each category:<br><br>![](help-operators.png)<br>

The help page for each operator describes how the operator transforms data, indicates the required input data, and provides usage examples.

### Defining Operators

An operator definition consists of 3 steps:

- Operator instanciation
- Input definition
- Output storage

Each operator’s help page provides a sample definition in each available language (IronPython, CPython, C++).<br><br>![](operator-def.png)<br>

### Defining Workflows

In most cases, using a single operator is not sufficient to obtain the desired result. In DPF you can chain operators together to create a complete data transformation workflow, enabling you to perform all operations necessary to get the result you want.  

In a workflow, the output pins of one operator are connected to the input pins of another operator, allowing output data from one operator to be passed as input to the other operator.     

The following example illustrates how you would get the norm of a resulting vector from the dot product of two vectors:<br><br>![](connect-operators.png)<br>               
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)