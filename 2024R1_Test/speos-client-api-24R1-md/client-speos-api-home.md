# Introduction

The **Speos client API** are intricatelly linked to the GUI, ensuring that every functionality accessible in the GUI has a corresponding automation function. As the automation functions are directly derived from the GUI, they perfectly align with the actions you would have to perform in the software such as creating new Speos objects, editing existing ones, and modifying parameters. 

The **Speos client API** consists of three distinct interfaces:

$$
f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-\frac{t^2}{2}} \cos(xt) \, dt
$$

- **[SpeosSim](sim/client-speos-sim.md)**: Offering a comprehensive suite of Light Simulation features.
- **[SpeosDes](des/client-speos-des.md)**: Encompassing all Optical Part Design features.
- **[SpeosAsm](asm/client-speos-asm.md)**: Providing the Geometry Update feature.

In addition to the **Speos client API** documentation, the Speos Core methods and some common cross-functional methods are provided in the following sections:

- **[Cross-functional methods](crossfunctional_methods/common_methods.md)**
- **[Speos Core methods](speoscore_methods/speoscore_methods.md)**

This documentation provides a modular presentation of the **Speos client API** functions:

- The first column provides you with the **method** and **property** name. The method/property hierarchy is simply expressed in the file structure. The name of a section refers to a "parent" method (i.e. a feature level). All dependent methods are listed below it.
- The second column provides you with the method/property **Description**.
- The third column provides the method's **Syntax**. The syntax corresponds to a template for the use of the methods with its return value and arguments.  
    - The return value is used as an intermediary step in the method calculation. These values are, therefore, both indicating which value is expected as a result of the function and what type of input is expected by the method.
    - Arguments are always declared with parenthesis () and correspond to variables that must be provided to obtain the method's result.

In Speos, arguments often correspond to axis system definitions.
