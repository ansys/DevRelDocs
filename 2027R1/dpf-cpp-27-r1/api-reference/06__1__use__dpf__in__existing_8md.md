<a id="06__1__use__dpf__in__existing_8md"></a>
# File 06\_1\_use\_dpf\_in\_existing.md

![][Markdown]

**Location**: `cpp\_doc/06\_1\_use\_dpf\_in\_existing.md`





## Source


```markdown
 @defgroup group_06_1 Using DPF capabilities in an existing project
 @ingroup group_1_get_started

The Data Processing Framework (DPF) provides numerical simulation users/engineers with a toolbox for accessing and transforming simulation data. 
It is used to handle complex pre- or post-processing of simulation data within a simulation workflow.

**It can be integrated into any existing C++ project.**

## Prerequisites 

To integrate DPF into an existing C++ project, you must have access to the following files of the **AWP_ROOT@doc_ansys_ver/dpf/include** folder (AWP_ROOT@doc_ansys_ver 
being an environment variable defining the root of the Ansys Inc or [DPF Server](https://dpf.docs.pyansys.com/version/stable/getting_started/dpf_server.html) product):
- dpf_api.h
- dpf_api_i.cpp 

**DPF_HGP_ROOT environment variable** must be set to define the location of those files and **must be set to follow this tutorial**.

Here is the command for Windows:
@win_set_hgp_root

It can also be set by editing the environment variables in Windows settings. 

Here is the command for Linux:
@lin_set_hgp_root

## Specify location of DPF files

### Using Visual Studio

1. In the "Properties" of the project, open the "C/C++" tab. 
2. Switch to the "general" tab. 
Edit the "Additional Include Directories" section so that it contains the "$(DPF_HGP_ROOT)" field.
3. Ensure the compilation is done for the same platform and the build is done using the configuration where the properties have been updated (for example, if the 'Release|x64' properties are modified, build with the 'Release|x64' configuration). 

### Using CMake

Add the following line in the CMakeLists.txt file:

```
include_directories($ENV{DPF_HGP_ROOT})
```

## Integrate DPF into an existing project

In the header file where the DPF capabilities are used, add the following declarations: 

### Include DPF

This is needed to access DPF capabilities.

```
#include "dpf_api.h"
#include "dpf_api_i.cpp"
```

### Declare DPF LibraryHandle

The LibraryHandle object must be alive all the time DPF is used. It should be unique, instantiated once per project. This is why it is declared as static structure:

```
struct staticData {
    static ansys::dpf::LibraryHandle* _dpfLibraryHandle;
};
```

### Instantiate DPF LibraryHandle

Before using any DPF capabilities, instantiate the LibraryHandle. This initializes DPF. To proceed, add the following line: 

```
ansys::dpf::LibraryHandle* staticData::_dpfLibraryHandle = new ansys::dpf::LibraryHandle();
```

For example, it can be added into the main method of the running application. 

### Use DPF capabilities

Once the LibraryHandle is instantiated, all the DPF capabilities can be used. The following example adds two vectors by components: 

```
ansys::dpf::FieldDefinition fieldDef(ansys::dpf::Location("Nodal"), { 3 });

ansys::dpf::Field field_a;
field_a.setFieldDefinition(fieldDef);
std::vector<double> data_a({ 2.1, 1.5, 4.0 });
field_a.push_back(1, data_a);

ansys::dpf::Field field_b;
field_b.setFieldDefinition(fieldDef);
std::vector<double> data_b({ 10.9, 9.5 });
field_b.push_back(1, data_b);

ansys::dpf::Operator add_operator("add");
add_operator.connect(0, field_a);
add_operator.connect(1, field_b);

ansys::dpf::Field result = add_operator.getOutputField(0);
```

Visit the **Examples** section to learn more about DPF capabilities. 

The application can now be **compiled**. 

## Run the application

Once the application is compiled, the environment must be updated before running the application: DPF entry point location must be known by the application, using PATH on Windows or LD_LIBRARY_PATH on Linux.
The following command can be used.

For Windows:

```
set PATH=%AWP_ROOT271%/aisol/bin/winx64;%PATH%
```

It can also be set by editing the environment variables in Windows settings. 

For Linux: 

```
export LD_LIBRARY_PATH=${AWP_ROOT271}/aisol/dll/linx64";${LD_LIBRARY_PATH}
```

The application can now be **run**. 

## Example full code compiled with Visual Studio on Windows

The following is the complete code showing how to add DPF capabilities in an already existing C++ application which displays "Hello World!". 

The following code adds the components of two 3D vectors. It gathers all the instructions previously provided in this section. 
It can be placed into a **IntegrateDpfExample.cpp** file, compiled and run:

```
#include <iostream>

#include "dpf_api.h"
#include "dpf_api_i.cpp"

struct staticData {
    static ansys::dpf::LibraryHandle* _dpfLibraryHandle;
};

ansys::dpf::LibraryHandle* staticData::_dpfLibraryHandle = new ansys::dpf::LibraryHandle();

int main()
{
    std::cout << "Hello World!" << std::endl; 
    
    std::cout << "This project is using DPF to addition two 3D vectors." << std::endl; 

    ansys::dpf::FieldDefinition fieldDef(ansys::dpf::Location(""), { 3 });

    ansys::dpf::Field field_a;
    field_a.setFieldDefinition(fieldDef);
    std::vector<double> data_a({ 2.1, 1.5, 4.0 });
    field_a.push_back(1, data_a);

    ansys::dpf::Field field_b;
    field_b.setFieldDefinition(fieldDef);
    std::vector<double> data_b({ 10.9, 9.5, 3.5 });
    field_b.push_back(1, data_b);

    ansys::dpf::Operator add_operator("add");
    add_operator.connect(0, field_a);
    add_operator.connect(1, field_b);

    ansys::dpf::Field result = add_operator.getOutputField(0);

    std::cout << "First vector values are:" << std::endl;
    for (int i = 0; i < result.dataSize(); i++)
        std::cout << std::to_string(data_a.data()[i]).c_str() << std::endl;

    std::cout << "Second vector values are:" << std::endl;
    for (int i = 0; i < result.dataSize(); i++)
        std::cout << std::to_string(data_b.data()[i]).c_str() << std::endl;
    
    std::cout << "Result vector values are:" << std::endl;
    for (int i = 0; i < result.dataSize(); i++)
        std::cout << std::to_string(result.data()[i]).c_str() << std::endl;
}
```

<a name="existing_vcxproj">To compile it with Visual Studio, the following code can be placed into a **IntegrateDpfExample.vcxproj** file: 

```
<?xml version="1.0" encoding="utf-8"?>
<Project DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ItemGroup Label="ProjectConfigurations">
    <ProjectConfiguration Include="Release|x64">
      <Configuration>Release</Configuration>
      <Platform>x64</Platform>
    </ProjectConfiguration>
  </ItemGroup>
  <PropertyGroup Label="Globals">
    <VCProjectVersion>17.0</VCProjectVersion>
    <ProjectGuid>{76D54AD4-314C-4FB1-801D-0CF6773183A9}</ProjectGuid>
    <Keyword>Win32Proj</Keyword>
    <RootNamespace>IntegrateDpfExample</RootNamespace>
    <WindowsTargetPlatformVersion>10.0</WindowsTargetPlatformVersion>
  </PropertyGroup>
  <Import Project="$(VCTargetsPath)\Microsoft.Cpp.Default.props" />
  <PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|x64'" Label="Configuration">
    <ConfigurationType>Application</ConfigurationType>
    <UseDebugLibraries>false</UseDebugLibraries>
    <PlatformToolset>v143</PlatformToolset>
    <WholeProgramOptimization>true</WholeProgramOptimization>
    <CharacterSet>Unicode</CharacterSet>
  </PropertyGroup>
  <Import Project="$(VCTargetsPath)\Microsoft.Cpp.props" />
  <ImportGroup Label="ExtensionSettings">
  </ImportGroup>
  <ImportGroup Label="Shared">
  </ImportGroup>
  <ImportGroup Label="PropertySheets" Condition="'$(Configuration)|$(Platform)'=='Release|x64'">
    <Import Project="$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props" Condition="exists('$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props')" Label="LocalAppDataPlatform" />
  </ImportGroup>
  <PropertyGroup Label="UserMacros" />
  <PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|x64'">
    <LinkIncremental>false</LinkIncremental>
  </PropertyGroup>
  <ItemDefinitionGroup Condition="'$(Configuration)|$(Platform)'=='Release|x64'">
    <ClCompile>
      <PrecompiledHeader>
      </PrecompiledHeader>
      <WarningLevel>Level3</WarningLevel>
      <Optimization>MaxSpeed</Optimization>
      <FunctionLevelLinking>true</FunctionLevelLinking>
      <IntrinsicFunctions>true</IntrinsicFunctions>
      <SDLCheck>true</SDLCheck>
      <PreprocessorDefinitions>NDEBUG;_CONSOLE;%(PreprocessorDefinitions)</PreprocessorDefinitions>
      <ConformanceMode>true</ConformanceMode>
      <AdditionalIncludeDirectories>$(DPF_HGP_ROOT);%(AdditionalIncludeDirectories)</AdditionalIncludeDirectories>
    </ClCompile>
    <Link>
      <SubSystem>Console</SubSystem>
      <EnableCOMDATFolding>true</EnableCOMDATFolding>
      <OptimizeReferences>true</OptimizeReferences>
      <GenerateDebugInformation>true</GenerateDebugInformation>
    </Link>
  </ItemDefinitionGroup>
  <ItemGroup>
    <ClCompile Include="IntegrateDpfExample.cpp" />
  </ItemGroup>
  <Import Project="$(VCTargetsPath)\Microsoft.Cpp.targets" />
  <ImportGroup Label="ExtensionTargets">
  </ImportGroup>
</Project>
```

Then, the **IntegrateDpfExample.vcxproj** project can be opened and compiled. Press F5 in Visual Studio to proceed. 
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)