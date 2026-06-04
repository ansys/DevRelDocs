# Functional Mock-up Interface

The Functional Mock-Up Interface (FMI) enables suppliers to distribute models from various domains ([http://fmi-standard.org/](http://fmi-standard.org/)). The unified FMI standard allows you to combine models in a single simulation environment. You can simplify your design process by using combined models, called Functional Mock-Up Units (FMU), instead of relying on proprietary interfaces. An FMU is a single file that can be imported and then used as a component in any simulation tool.

You can export a Metamodel of Optimal Prognosis (MOP) or an Adaptive Metamodel of Optimal Prognosis (AMOP) as an FMU. Exporting is supported only for the following metamodels:
- Polynomial
- Kriging
- Moving least squares

To export as an FMU:
1. Open the **Functional Mock-up Unit** dialog box.
   - After the calculation has finished, right-click the **MOP** or **AMOP** node and select **Export FMU** from the context menu.
   - Import a monitoring database file that has already been saved into an **MOP Solver** node, then right-click the node and select **Export FMU** from the context menu.
   - In the **Postprocessing** window, select **File > Export FMU**.
2. Set the following export options:

   | Field | Description |
   |-------|-------------|
   | Output File | Path to a text file the log will be written to. |
   | Name | Mandatory model name. |
   | Description | Short description of the model. |
   | Author | Names of the model's authors. |
   | Extrapolation | - Never: Does not create an output slot and prevents calculation of the selected field.<br>- Toggle by Pin: Creates an additional input slot that is used during simulation runtime to enable or disable the calculation of the selected field dynamically.<br>- Always: Creates an output slot and allows calculation of the selected field. |
   | Criteria | - Never: Does not create an output slot and prevents calculation of the selected field.<br>- Toggle by Pin: Creates an additional input slot that is used during simulation runtime to enable or disable the calculation of the selected field dynamically.<br>- Always: Creates an output slot and allows calculation of the selected field. |
   | Gradients | - Never: Does not create an output slot and prevents calculation of the selected field.<br>- Toggle by Pin: Creates an additional input slot that is used during simulation runtime to enable or disable the calculation of the selected field dynamically.<br>- Always: Creates an output slot and allows calculation of the selected field. |
   | Densities | - Never: Does not create an output slot and prevents calculation of the selected field.<br>- Toggle by Pin: Creates an additional input slot that is used during simulation runtime to enable or disable the calculation of the selected field dynamically.<br>- Always: Creates an output slot and allows calculation of the selected field. |
   | Errors | - Never: Does not create an output slot and prevents calculation of the selected field.<br>- Toggle by Pin: Creates an additional input slot that is used during simulation runtime to enable or disable the calculation of the selected field dynamically.<br>- Always: Creates an output slot and allows calculation of the selected field. |
   | Enable File Logging | Select the check box to enable logging of parameter and response values for each MOP Solver call. The logfile's path is `%TEMP%\mopsolver_fmu.log`. |

3. Click **Start**.

The resulting FMU implements Functional Mock-Up Interface for Model Exchange 1.0. Usage is currently limited to 64 bit Windows and Linux systems.
