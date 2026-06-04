# Creating manifest files

Discovery uses XML manifest files to describe add-ins. The manifest file provides two types of information:

-   Metadata \(name, description\). This is presented to the user in the Discovery Options dialog, even for disabled add-ins, which don't get loaded.
-   Execution data \(assembly, type name, hosting option\). This is used to load the add-in when Discovery starts up.

## Discovery of add-ins

Discovery will search for manifest files in all of the following areas:

-   In folders beneath the add-ins folder: `<CommonApplicationData\>\\Discovery\\AddIns`.
    -   The default location on the latest version of Windows is: `C:\\ProgramData\\Discovery\\AddIns`.
-   In folders beneath the Addins folder inside the Discovery installation folder.
-   In the add-ins registry key: `HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Discovery\\AddIns`.
    -   A string value \(REG\_SZ or REG\_EXPAND\_SZ\) may be added to this registry key to specify the path of a single manifest filename or the path of a folder where manifest files are located.
    -   Many of these string values can be added to the Addins registry key.
    -   The name of each string value is not significant, but it must be unique within the **Addins** registry key. Therefore a name such as `BeachSoft.SurfingAddIn` is recommended.
-   The manifest file specified by the /AddInManifestFile command line switch supplied when Discovery is run.
    -   Discovery.exe /AddInManifestFile="<path of manifest file\>".

**Notes:**

1.  Putting the manifest file in the ProgramData\\Discovery\\Addins directory is the approach to follow when an add-in should only be visible for a single user.
2.  Putting the manifest file in the Addins folder inside the Discovery installation folder typically requires Administrative privileges and should be done for add-ins that are installed as part of Discovery.
3.  Creating a string value in the add-ins registry is the recommended approach when a third party add-in is installed. This way, Discovery and the add-in do not need to know where each other is installed.

## Contents of manifest files

Here is an example manifest file:

```
<?xml version="1.0" encoding="utf-8" ?>
<AddIns>
  <AddIn
    name="Sample Add-in"
    description=”Sample commands illustrating how to use the API.”
    assembly="SampleAddIn.dll"
    typename=”Sample.AddIn”
    host="NewAppDomain" />
</AddIns>

```

The Addins element encloses a list of add-ins. A single manifest file can describe more than one add-in, although commonly it describes just one add-in.

The **AddIn** element has five attributes.

|Attribute|Description|
|---------|-----------|
|name|The name of the add-in. This is presented to the user in the Options dialog.|
|description|The one-line description for the add-in is presented to the user in the Options dialog.|
|assembly|The filename or full path of the DLL that contains the add-in. If the assembly attribute only specifies a filename and not a full path, the assembly will be assumed to be in the same folder as the manifest file.|
|typename|The type of the add-in class to create when Discovery starts up. This type must be derived from AddIn and must implement the IExtensibility interface.|
|host|The way in which the add-in should be hosted. The only supported value for Discovery is: SameAppDomain. The SpaceClaim options NewAppDomain or NewProcess are related to .NetRemoting, which is not supported in Discovery.|

Only the host attribute has a default value if not present. All other attributes must be specified.

While developing an add-in, the add-ins folder can be used in one of two ways:

1.  Place the add-in assembly and its manifest file in a folder inside the add-ins folder. You can set the build output path directly to this folder to save any copying and set the properties of the manifest file so that it is copied to the output directory. In the manifest file, specify the add-in filename \(not the full path\) in the assembly attribute.
2.  Place the manifest file in the add-ins folder, and the add-in assembly in a folder

**Customizing the ribbon**

1.  If the add-in needs to customize the ribbon it will implement the IRibbonExtensibility interface.
2.  In the GetCustomUI method, return a string that contains the XML description of the items to be added to the ribbon.

