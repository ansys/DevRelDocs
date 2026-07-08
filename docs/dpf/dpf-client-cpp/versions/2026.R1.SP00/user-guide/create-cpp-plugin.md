# Creating a DPF custom operator's library

The Data Processing Framework (DPF) provides numerical simulation users/engineers with a toolbox for accessing and transforming simulation data.
It is used to handle complex pre- or post-processing of simulation data within a simulation workflow.

In DPF, **Operators** are the main object used to create, transform and stream the data. An operator is composed of a “core” that handles the calculation.
It receives the data using input pins, applies a transformation and makes the data available through the output pins (think of an integrated circuit in electronics).
See the [Concepts and Terminology](concepts.md) to learn more.

In Ansys 2022 R2 and later, you can create custom operator's libraries in C++. It enables to access custom capabilities in any project
that is using DPF.

This guide explains how to **create and compile an operator's library C++ project**, and **how to consume it in another C++ project**.

## Pre-requisites

In order to use DPF in a C++ project, it is required to have access to the following files of the ``AWP_ROOT@doc_ansys_ver/dpf/include`` folder (``AWP_ROOT@doc_ansys_ver``
being an environment variable defining the root of the Ansys Inc or [DPF Server](https://dpf.docs.pyansys.com/version/stable/getting_started/dpf_server.html) product):

- dpf_api.h
- dpf_api_i.cpp

**DPF_HGP_ROOT environment variable** must be set to define the location of those files and **must be set to follow this tutorial**.

Here is the command for Windows:
```bat
set DPF_HGP_ROOT=%AWP_ROOT261%/dpf/include
```

It can also be set by editing the environment variables in Windows settings.

Here is the command for Linux:
```bash
export DPF_HGP_ROOT=${AWP_ROOT261}/dpf/include
```

Moreover it is needed to have compilation tools. Both CMake and Visual Studio are supported for project management and compilation. Examples using both are provided in the following sections.

Create a **DPF_Custom_Operators folder**. The following sections of this tutorial are performed from this folder.

## Create a C++ Custom operator's library

This section details the C++ code to create a custom basic operator's library.

In the **DPF_Custom_Operators folder** previously created, create a **MyCustomOperator.h** file with the following content:

```cpp
#pragma once

#include "dpf_api.h"

#ifndef __linux__
#define CLAYER_DLLEXPORT __declspec(dllexport)
#else
#define CLAYER_DLLEXPORT __attribute__ ((visibility ("default")))
#endif

namespace custom_operators
{
	// DPF initial settings: once by project
	// -------------------------------------
  struct staticData {
	  static ansys::dpf::LibraryHandle* _dpfLibraryHandle;
  };

	extern "C" CLAYER_DLLEXPORT int LoadOperators(ansys::dpf::AbstractCore* core_ptr);


	// my custom operator
	// ------------------
	struct CustomMessage
	{
		// identify the operator
		static std::string name() { return "custom_message"; }

		// describe the operator
		static ansys::dpf::OperatorSpecification specification()
		{
			ansys::dpf::OperatorSpecification spec;

			spec.setDocumentation("This operator displays a custom message in the output console.");

			spec.setInputPins(
				{
					ansys::dpf::PinDefinition(0) // set the input pin number
					.setName("custom_message")
					.setAcceptedTypes({ ansys::dpf::types::string})
					.setDoc("Custom message to display in the output console"),
				});

			// set the exposed properties of the operator, allowing documentation generation
			spec.setProperty(ansys::dpf::spec::exposure::sExposure, ansys::dpf::spec::exposure::sPublic);
			spec.setProperty(ansys::dpf::spec::category::sCategory, "custom");
			spec.setProperty(ansys::dpf::spec::sUserName, "custom message");

			return spec;
		}

		// define the data computation
		static void run(ansys::dpf::OperatorMain& main);
	};
}
```

The **staticData** structure allows to use the DPF capabilities and must be incorporated only once per project.
The **CustomMessage** structure contains all the implementation related to the custom operator. It always contains:

- a **name** method (unique identifier)
- a **specification** method which defines and describes the operator inputs, outputs and data computation
- a **run** method which contains the data computation code

In the **DPF_Custom_Operators folder**, create a **MyCustomOperator.cpp** file with the following content:

```cpp
#include "MyCustomOperator.h"

#include "dpf_api_i.cpp"

namespace custom_operators
{
	ansys::dpf::LibraryHandle* staticData::_dpfLibraryHandle = new ansys::dpf::LibraryHandle();

	extern "C" CLAYER_DLLEXPORT int LoadOperators(ansys::dpf::AbstractCore* core_ptr) {
		ansys::dpf::core::recordOperatorAtCore<CustomMessage>(core_ptr); // record the operator to make it accessible
		return 0;
	}

	void CustomMessage::run(ansys::dpf::OperatorMain& main)
	{
		// get the input data
		std::string to_display = main.getInputString(0);

		// computes the data
		std::cout << "Hello world! This message is displayed from a DPF operator." << std::endl;
		std::cout << to_display.c_str() << std::endl;

		// Set the final state of the operator
		main.setSuccessed();
	}
}
```

It is now required to compile the code.

## Compile the C++ Custom operator's library

This sections details the compilation process of the C++ code.

### Using Visual Studio (Windows only)

In the **DPF_Custom_Operators folder** previously created, create a **CustomOperators.vcxproj** file with the following content:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ItemGroup Label="ProjectConfigurations">
    <ProjectConfiguration Include="Release|x64">
      <Configuration>Release</Configuration>
      <Platform>x64</Platform>
    </ProjectConfiguration>
  </ItemGroup>
  <ItemGroup>
    <ClInclude Include=".\MyCustomOperator.h" />
  </ItemGroup>
  <ItemGroup>
    <ClCompile Include=".\MyCustomOperator.cpp" />
  </ItemGroup>
  <PropertyGroup Label="Globals">
    <VCProjectVersion>17.0</VCProjectVersion>
    <ProjectGuid>{18ED472A-4ECB-498C-A66C-805668FAABD3}</ProjectGuid>
    <Keyword>Win32Proj</Keyword>
    <RootNamespace>CustomOperators</RootNamespace>
    <WindowsTargetPlatformVersion>10.0</WindowsTargetPlatformVersion>
  </PropertyGroup>
  <Import Project="$(VCTargetsPath)\Microsoft.Cpp.Default.props" />
  <PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|x64'" Label="Configuration">
    <ConfigurationType>DynamicLibrary</ConfigurationType>
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
    <OutDir>$(SolutionDir)build\$(Configuration)\</OutDir>
  </PropertyGroup>
  <ItemDefinitionGroup Condition="'$(Configuration)|$(Platform)'=='Release|x64'">
    <ClCompile>
      <PrecompiledHeader>NotUsing</PrecompiledHeader>
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
  <Import Project="$(VCTargetsPath)\Microsoft.Cpp.targets" />
  <ImportGroup Label="ExtensionTargets">
  </ImportGroup>
</Project>
```

Then, open the **MyCustomOperator.vcxproj project** in Visual Studio and compile it.

### Using CMake (Windows and Linux)

In the **DPF_Custom_Operators folder** previously created, create a CMakeLists.txt file with the following content:

```cmake
set(CMAKE_VERBOSE_MAKEFILE ON)
cmake_minimum_required(VERSION 3.16.3)
project(CustomOperators)

if(NOT DEFINED ENV{DPF_HGP_ROOT})
    message(FATAL_ERROR "DPF_HGP_ROOT not found!")
endif()

# Compiler options
#-----------------
if (NOT MSVC)
	set(CMAKE_CXX_FLAGS         "-Wall -Wextra -Wconversion")
	set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fvisibility=hidden")
  set(CMAKE_SHARED_LINKER_FLAGS "-fvisibility=hidden")
else()
	set(CMAKE_CXX_FLAGS         "/W3 /sdl /EHsc")
	set(CMAKE_CXX_FLAGS_RELEASE "/O2 /Oi /Gy")
endif()

# Dependencies
#-------------
include_directories($ENV{DPF_HGP_ROOT})

# Add library
#------------
file(GLOB SOURCE_FILES *.cpp)

add_library(${CMAKE_PROJECT_NAME} SHARED ${SOURCE_FILES})
```

Then, run the following commands in a **command line** opened from the **DPF_Custom_Operators folder**.

```
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
```

On Windows, it creates a **build/Release** folder which contains the "CustomOperators.dll".
On Linux, it creates the "libCustomOperators.so" file into the **build** folder.

## Create an application that consumes the C++ Custom operator's library

The following shows how to consume the CustomOperators binary into another C++ project. The consumption is done
by loading the binary in the new C++ project at runtime.

### Create the testing files

Set a **DPF_Custom_Operators environment variable** to the **DPF_Custom_Operators folder**.

In the **DPF_Custom_Operators folder** previously created, create a **DPF_application** folder.

In the **DPF_application** folder, create a CustomOperatorsTest.cpp with the following content:

```cpp
#include "dpf_api.h"
#include "dpf_api_i.cpp"

int main(int argc, char** argv)
{
	// Initialize DPF
	ansys::dpf::LibraryHandle* lib = new ansys::dpf::LibraryHandle();
	ansys::dpf::DpfError libDpfError = lib->error();
	if(!libDpfError.isOk())
	{
		std::cout << "DPF initialization failed." << std::endl;
		std::string error_message = libDpfError.message();
		if (!error_message.empty())
			std::cout << error_message.c_str() << std::endl;
		return 1;
	}

	// Load the DPF Custom operator's library to access the "custom_message"
	const char* val = getenv("DPF_Custom_Operators");
	if (!val)
	{
		std::cout << "DPF_Custom_Operators environment variable not found!" << std::endl;
		return 1;
	}
  #ifdef __linux__
  std::string path_to_dll = std::string(val) + "/build/libCustomOperators.so";
  #else
	std::string path_to_dll = std::string(val) + "/build/Release/CustomOperators.dll";
  #endif
	ansys::dpf::core::loadDpfPlugin(path_to_dll, "custom_operators");

	// use the Custom Operator
	ansys::dpf::Operator custom_operator("custom_message");
	if (custom_operator.empty())
	{
		std::cout << "CustomOperators load failed." << std::endl;
		return 1;
	}
	std::string custom_message_str = "This is a DPF custom message.";
	custom_operator.connect(0, custom_message_str);
	custom_operator.run();

	delete lib;
	return 0;
}
```

### Compile the test application

#### With CMake (Windows and Linux)

In the **DPF_application** folder, create a CMakeLists.txt file with the following content:

```cmake
set(CMAKE_VERBOSE_MAKEFILE ON)
cmake_minimum_required(VERSION 3.16.3)
project(CustomOperatorsTest)

if(NOT DEFINED ENV{DPF_HGP_ROOT})
    message(FATAL_ERROR "DPF_HGP_ROOT not found!")
endif()

if(NOT DEFINED ENV{DPF_Custom_Operators})
    message(FATAL_ERROR "DPF_Custom_Operators not found!")
endif()

# Compiler options
#-----------------
if (NOT MSVC)
  set(CMAKE_CXX_FLAGS  "-ldl -Wall -Wextra -Wconversion")
	add_definitions(-D_CRT_SECURE_NO_WARNINGS)
else()
	add_definitions(-D_CRT_SECURE_NO_WARNINGS)
endif()

# Dependencies
#-------------
include_directories($ENV{DPF_HGP_ROOT})

# Add library
#------------
file(GLOB SOURCE_FILES *.cpp)

add_executable(${PROJECT_NAME} ${SOURCE_FILES})
```

Run the following commands in a **command line** opened from the **DPF_application folder**.

```
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
```

#### With Visual Studio (Windows only)

In the **DPF_application** folder, create a **CustomOperatorsTest.vcxproj** file with the following content:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ItemGroup Label="ProjectConfigurations">
    <ProjectConfiguration Include="Release|x64">
      <Configuration>Release</Configuration>
      <Platform>x64</Platform>
    </ProjectConfiguration>
  </ItemGroup>
  <ItemGroup>
    <ClCompile Include=".\CustomOperatorsTest.cpp" />
  </ItemGroup>
  <PropertyGroup Label="Globals">
    <VCProjectVersion>17.0</VCProjectVersion>
    <ProjectGuid>{129D604D-EF32-4091-ABAD-BF3622AF6F08}</ProjectGuid>
    <Keyword>Win32Proj</Keyword>
    <RootNamespace>CustomOperatorsTest</RootNamespace>
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
      <PreprocessorDefinitions>NDEBUG;_CONSOLE;_CRT_SECURE_NO_WARNINGS;%(PreprocessorDefinitions)</PreprocessorDefinitions>
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
  <Import Project="$(VCTargetsPath)\Microsoft.Cpp.targets" />
  <ImportGroup Label="ExtensionTargets">
  </ImportGroup>
</Project>
```

### Run the test application

#### With CMake

Run the following command in a **command line** opened from the **DPF_application folder**.

On Windows, use the following:

```batch
set PATH=%AWP_ROOT261%/aisol/bin/winx64;%PATH%
cd build
cd Release
CustomOperatorsTest.exe
```

Setting the PATH is required to find DPF entry point (DataProcessingCore.dll).

On Linux, use the following:

```bash
export LD_LIBRARY_PATH=${AWP_ROOT261}/aisol/dll/linx64";${LD_LIBRARY_PATH}
cd build
./CustomOperatorsTest
```

Setting the LD_LIBRARY_PATH is required to find DPF entry point (libDataProcessingCore.so).

If you face licensing issues, the ANSYSLMD_LICENSE_FILE might must be set. Refer to the [License terms section](https://dpf.docs.pyansys.com/version/stable/user_guide/getting_started_with_dpf_server.html#license-terms) to learn how to set it.

#### With Visual Studio

Edit your environment variables and update the PATH value inserting a "%AWP_ROOT@doc_ansys_ver%/aisol/bin/winx64" field. It is needed that the application can find DPF entry point (DataProcessingCore.dll) while running.
Edit your environment variables and create a DPF_Custom_Operators variable that targets the **DPF_Custom_Operators folder** location.
Open the **CustomOperatorsTest.vcxproj project** in Visual Studio. Compile it. Press F5 to run the code.

#### Result

The following message should appear:

```
Hello world! This message is displayed from a DPF operator.
This is a DPF custom message.
```