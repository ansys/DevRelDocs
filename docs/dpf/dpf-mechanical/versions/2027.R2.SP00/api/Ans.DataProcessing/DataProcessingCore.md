---
uid: Ans.DataProcessing.DataProcessingCore
---

# *class* DataProcessingCore()

DataProcessingCore()


## Methods

#### ActivateDebugTrace(path: str) -> None

**Parameters:**

* **path**

#### DataProcessing_initialization(errorSize: Int32&, sError: String&) -> None

**Parameters:**

* **errorSize** (*out*)
* **sError** (*out*)

#### DataProcessing_load_library(name: str, dllPath: str, symbol: str, errorSize: Int32&, sError: String&) -> None

**Parameters:**

* **name**
* **dllPath**
* **symbol**
* **errorSize** (*out*)
* **sError** (*out*)

#### DataProcessing_set_debug_trace(text: str, errorSize: Int32&, sError: String&) -> None

**Parameters:**

* **text**
* **errorSize** (*out*)
* **sError** (*out*)

#### DeactivateDebugTrace() -> None

#### GetAvailableOperators() -> iterable

#### GetRuntimeCoreConfig() -> RuntimeCoreConfig

#### Initialization() -> None

#### InitializationWithContext(context: int, dataProcessingCore_xml_path: str = None) -> None

**Parameters:**

* **context**
* **dataProcessingCore_xml_path** (*optional*)

#### LoadLibrary(name: str, dllPath: str, symbol: str = LoadOperators) -> None

Method `LoadLibrary` loads a DPF's plugin and register its operators

**Parameters:**

* **name** - custom name of library: ex "mapdl"
* **dllPath** - path to the dynamic library: ex : "mapdlOperatorsCore.dll
* **symbol** (*optional*) - optional

#### dataProcessing_initializeWithContext(context: int, dataProcessingCore_xml_path: str, errorSize: Int32&, sError: String&) -> None

**Parameters:**

* **context**
* **dataProcessingCore_xml_path**
* **errorSize** (*out*)
* **sError** (*out*)

## Fields

#### *const* DLLName

**Type:** str

**Value:** `DataProcessingCore`
