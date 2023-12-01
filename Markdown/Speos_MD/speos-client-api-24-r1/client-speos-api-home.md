---
last_updated: '2023-10-09 18:00:00'
version: '2024 R1'
summary: 'Speos Client APIs documentation'
current_page_name: 'client-speos-api-home'
tags: ['Speos', 'Optics']
---


# Speos Introduction

The **Speos Client APIs** are intricately linked to the GUI, ensuring that every functionality accessible in the GUI has a corresponding automation function. As the automation functions are directly derived from the GUI, they perfectly align with the actions you would have to perform in the software such as creating new Speos objects, editing existing ones, and modifying parameters. 

The **Speos Client APIs** consists of three distinct interfaces:

- **SpeosSim**: Offering a comprehensive suite of Light Simulation features.
- **SpeosDes**: Encompassing all Optical Part Design features.
- **SpeosAsm**: Providing the Geometry Update feature.

This documentation provides a modular presentation of the **Speos Client APIs** functions:

- The first column provides you with the **method** and **property** name. The method/property hierarchy is simply expressed in the file structure. The name of a section refers to a "parent" method (i.e. a feature level). All dependent methods are listed below it.
- The second column provides you with the method/property **Description**.
- The third column provides the method's **Syntax**. The syntax corresponds to a template for the use of the methods with its return value and arguments.  
    - The return value is used as an intermediary step in the method calculation. These values are, therefore, both indicating which value is expected as a result of the function and what type of input is expected by the method.
    - Arguments are always declared with parenthesis () and correspond to variables that must be provided to obtain the method's result.

In Speos, arguments often correspond to axis system definitions.

In addition to the **Speos Client APIs** documentation, some common cross functional and more specific APIs are provided in the [Methods](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v232/en/Optis_UG_ASP/Optis/UG_ASP/methods.html) section of the Speos User Guide (customer login request). 