# Configuration

This page covers the main configuration requirements for your DPF installation:
- Managing plugins: Configure your installation and control the list of plugins loaded by default.
- Setting plugin environments: Define the loading environment for each plugin individually.

Both configurations are handled through XML files included in the DPF installation.

Each XML file contains the configuration content for both operating systems.

They are located alongside the **.dll** file on Windows or **.so** file on Linux of their associated plugin.

> **CAUTION**:
> To ensure that DPF operates correctly, modify these XML files carefully.
> All paths specified in these XML files must adhere to the path
> conventions of the respective operating system:
> - for Linux paths, use forward slashes (/).
> - for Windows paths, use double backward slashes (\\).


## Configure your DPF installation

The **DataProcessingCore.xml** file contains the configuration related to the plugins loaded by default, plugin search, and environment setup.

In this XML file, some of the elements are optional, and many of the
elements have Linux-specific versus Windows-specific child elements.

It follows the structure shown below:

```html
<?xml version="1.0"?>
<Dpf version="1.0"> 
    <Environment>
        <Linux>
            <!--ANSYS_DPF_ACCEPT_LA>Y</ANSYS_DPF_ACCEPT_LA!-->
        </Linux>
        <Windows>
            <!--ANSYS_DPF_ACCEPT_LA>Y</ANSYS_DPF_ACCEPT_LA!-->
        </Windows>
    </Environment>
    <SearchPath>
        <Linux>
            <Path>$(ANSYS_ROOT_FOLDER)/dpf/bin/linx64:$(ANSYS_ROOT_FOLDER)/dpf/plugins</Path>
        </Linux>
        <Windows>
            <Debug>
                <Path>$(ANSYS_ROOT_FOLDER)\dpf\bin\winx64;$(ANSYS_ROOT_FOLDER)\dpf\plugins</Path>
            </Debug>
            <Release>
                <Path>$(ANSYS_ROOT_FOLDER)\dpf\bin\winx64;$(ANSYS_ROOT_FOLDER)\dpf\plugins</Path>
            </Release>
        </Windows>
    </SearchPath>
    <DefaultPlugins>
        <Linux>
            <native>
                <Path>$(ANSYS_ROOT_FOLDER)/dpf/bin/linx64/libAns.Dpf.Native.so</Path>
                <Loader>LoadOperators</Loader>
                <UsePluginXml>false</UsePluginXml>
            </native>
            ...
        </Linux>
        <Windows>
            <Debug>
                <native>
                    <Path>$(ANSYS_ROOT_FOLDER)\dpf\bin\winx64\Ans.Dpf.NativeD.dll</Path>
                    <Loader>LoadOperators</Loader>
                    <UsePluginXml>false</UsePluginXml>
                </native>
            </Debug>
            <Release>
                <native>
                    <Path>$(ANSYS_ROOT_FOLDER)\dpf\bin\winx64\Ans.Dpf.Native.dll</Path>
                    <Loader>LoadOperators</Loader>
                    <UsePluginXml>false</UsePluginXml>
                </native>
                ...
            </Release>
        </Windows>
    </DefaultPlugins>
</Dpf>
```

The **<Windows>** and **<Linux>** elements are mandatory and specify the operating system each configuration option applies to.

The **<Release>** and **<Debug>** elements are optional and allow to differentiate configurations for debug and release versions of DPF.


### Environment configuration

The **<Environment>** element lets you set the **ANSYS_DPF_ACCEPT_LA** environment variable to **Y** to mark active acceptance of the DPF [license agreement](licensing.md#license-terms) and prevents from having to set it on your machine or at the beginning of every session.


### Plugin search path configuration

The **<SearchPath>** element lets you modify where DPF looks for plugins to load at the start of a session.

To load plugins located outside of the standard DPF installation, prepend the path to the plugin folder to value of the **Path** element. 


### Default plugins configuration

The **<DefaultPlugins>** element defines the list of plugins to load automatically when the server starts.

It contains a child element for each plugin, such as  **<native>**.

The element name for a plugin is used as the **key** when loading it.

Each plugin must have a unique element name/key.

Each plugin must have the following child elements:

- **<Path>** stores the location of the plugin to load.
  The normal mechanism that the operating system uses to find a **.dll** or **.so** file is used.
  The **.dll** file could be in the Windows path, or the **.so** file could be in the Linux **LD_LIBRARY_PATH** system environment variable.
- **<Loader>** defines the entrypoint procedure name to call upon loading the plugin. 
  In practice this procedure is used to record operators, thus **LoadOperators** is the recommended name.
- **<UsePluginXml>** defines whether to use the **<PLUGIN>.xml** file located next to it to configure the plugin.
  This element is optional. The default value is **true**.

To provide an absolute path to a plugin, you can use these predefined variables:

- **ANSYS_ROOT_FOLDER** is the root folder of the Ansys or DPF installation.
- **THIS_XML_FOLDER** is the folder location of the current XML file (here the location of the **DataProcessingCore.xml** file).

You can also use any other environment variable. For example, if you always have your
plugins in a folder defined by a **MY_PLUGINS** environment variable, you can use
it in the XML file.

You specify environment variables in the same way as the **ANSYS_ROOT_FOLDER**
or **THIS_XML_FOLDER** variable. They are defined as **$(…)**.

In the Ansys installation, the default **DataProcessingCore.xml** file is located
next to the **DataProcessingCore** **.dll** or **.so** file.
If you want to use a different one, you can initialize DPF using a specific **DataProcessingCore.xml** file.


## Configure a plugin

Each plugin can define a **<Plugin>.xml** file to configure environment variables used when loading the plugin.

The structure of the file is as follows:

```html
<?xml version="1.0"?>
<Environment>
    <Linux>
        <LD_LIBRARY_PATH>$(ANSYS_ROOT_FOLDER)/aisol/dll/linx64:$(ANSYS_ROOT_FOLDER)/aisol/lib/linx64:$(ANSYS_ROOT_FOLDER)/tp/IntelMKL/2020.0.166/linx64/lib/intel64:$(LD_LIBRARY_PATH)</LD_LIBRARY_PATH>
    </Linux>
    <Windows>
        <PATH>$(ANSYS_ROOT_FOLDER)\aisol\bin\winx64;$(ANSYS_ROOT_FOLDER)\tp\IntelMKL\2020.0.166\winx64;$(ANSYS_ROOT_FOLDER)\tp\IntelCompiler\2019.5.281\winx64;$(PATH)</PATH>
    </Windows>
</Environment>
```

It only contains an **<Environment>** element which is defined as [described previously](configuration.md#environment-configuration).

The value of an environment variable is updated each time it is redefined, which means you can modify it in one go or in several elements:

```html
<?xml version="1.0"?>
<Environment>
    <Linux>
        <LD_LIBRARY_PATH>$(ANSYS_ROOT_FOLDER)/tp/IntelMKL/2020.0.166/linx64/lib/intel64:$(LD_LIBRARY_PATH)</LD_LIBRARY_PATH>
        <LD_LIBRARY_PATH>$(ANSYS_ROOT_FOLDER)/aisol/lib/linx64:$(LD_LIBRARY_PATH)</LD_LIBRARY_PATH>
        <LD_LIBRARY_PATH>$(ANSYS_ROOT_FOLDER)/aisol/dll/linx64:$(LD_LIBRARY_PATH)</LD_LIBRARY_PATH>
    </Linux>
    <Windows>
        <PATH>$(ANSYS_ROOT_FOLDER)\tp\IntelCompiler\2019.5.281\winx64;$(PATH)</PATH>
        <PATH>$(ANSYS_ROOT_FOLDER)\tp\IntelMKL\2020.0.166\winx64;$(PATH)</PATH>
        <PATH>$(ANSYS_ROOT_FOLDER)\aisol\bin\winx64;$(PATH)</PATH>
    </Windows>
</Environment>
```
