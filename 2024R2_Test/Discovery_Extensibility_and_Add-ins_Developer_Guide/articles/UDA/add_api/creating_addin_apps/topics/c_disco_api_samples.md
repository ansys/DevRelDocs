# Sample projects

The Sample Add-in project \(C\#\) contains programming examples of how to use various areas of functionality in the API.


| Sample Project | Version | Language | Link |
|----------------|---------|----------|------|
| **Discovery Basic Template #1: Command Example**<br><br>Demonstrates how to create an add-in and use a command to create a sample block. | API V241 | C# | [Visit the Ansys Discovery Space](https://innovationspace.ansys.com/ais-discovery/) |
| **Discovery Basic Template #2: Tool Example**<br><br>Demonstrates how to define a button that activates a tool on the HUD. The tool has a text box for double values and a second toolbox for an example physical quantity temperature. A check box allows you to switch between the two text boxes, chaining their visibility and keeping values in sync between the two fields. | API V241 | C# | [Visit the Ansys Discovery Space](https://innovationspace.ansys.com/ais-discovery/) |
| **Discovery Basic Template Installer #3: Custom Object/Custom Tree Example**<br><br>Includes the functionality from the Discovery Basic Template #2: Tool Example and adds functionality to create a custom object that is displayed in the custom tree. The example shows how to link the custom object with the tool properties displayed in the HUD. | API V241 | C# | [Visit the Ansys Discovery Space](https://innovationspace.ansys.com/ais-discovery/) |
| **Sample Add-in**<br><br>**Copy Component** - Show how to create a new translated component instance.<br><br>**Create Assembly** - Shows how to create a simple assembly with two positioned instances of one part, and one instance of another part.<br><br>**Create Block** - Shows how to create a block by extruding a rectangular profile.<br><br>**Create Gear** - Shows how to create a simple gear by extruding a complex profile involving lines and arcs.<br><br>**Create Hole** - Shows how to create a hole by subtracting a cylinder.<br><br>**Create Notes** - Shows how to create an annotation plane and then create notes at various angles, with different fonts and colors.<br><br>**Create Torus** - Shows how to create a torus by sweeping a circular profile around a larger circle.<br><br>**Export** - Shows how to export a document in various file formats.<br><br>**Find Matching Faces** - Shows how to traverse bodies and faces in an assembly and compare their geometry.<br><br>**Scene Graph** - Creates a scene graph.<br><br>**Select Loop** - Shows how to access the topology of a body and traverse edges, loops and fins.<br><br>**Sketch Tool** - Shows how to create an interaction tool for sketching lines.<br><br>**Spin Component** - Demonstrates animation by rotating selected component.<br><br>**Profile Tool** - Shows how to create and modify a custom object using an interaction tool. | API V241 | C# | [Visit the Ansys Discovery Space](https://innovationspace.ansys.com/ais-discovery/) |

## Building the sample add-in project

1.  Download the SampleAddin zip file and unzip it.

    **Note:** Note: Use the Extract All command on the content menu in Windows Explorer.

2.  In the extracted folder, locate the reference to the NuGet package \(NuGet.config\) and delete it.

3.  Launch Visual Studio and open the project file \(SampleAddin.csproj\). Alternatively, you may double-click the project file and open it with Visual Studio.

4.  In the Solution Explorer in Visual Studio, right-click References and select Add Reference.

5.  In the Reference Manager, select the Browse tab. Locate the API assembly in the subfolder inside the Discovery Installation folder. Right-click this reference and set Copy Local to False.

6.  Build the project is Visual Studio.

    **Note:** Build the project using x64.

7.  Launch Discovery.

    The Sample Add-in will appear in the Discovery Ribbon.


**Note:** Samples that require a beta version of the API must reference that beta version.

**Note:** To build the samples or any add-in, .NET 4.8 is required. If .NET 4.8 is not available to build with in your version of Visual Studio, the Microsoft .NET Framework 4.8 Developer Pack can be downloaded and installed for Visual Studio 2017 and Visual Studio 2019.

**Note:** Sample projects have their build output path set to a folder beneath `%ALLUSERSPROFILE%\\SpaceClaim\\AddIns`, which means Discovery will automatically find the add-in at start-up \(see Manifest Files\).

## Add-ins frequently asked questions

1.  **What can I do when my Add-in project can’t build because it’s missing references or packages? Add-ins require several Discovery DLL libraries:**

    `Discovery.API.2X`

    `SpaceClaim.API.2X`

    `SpaceClaim.API.2X.Internal`

2.  **What can I do when my Add-in project is built, but I can’t see it in Discovery?**

    Either the Add-in is not completely built, or it is just not visible on Discovery.

    Check Discovery Settings \> Add-in and determine if the add-in is present. If it’s found, go to the Ribbon section in the advanced part.

    If the add-in is not found, verify that the add-in output files are configured for the Program Data folder. The manifest file will also appear there.


