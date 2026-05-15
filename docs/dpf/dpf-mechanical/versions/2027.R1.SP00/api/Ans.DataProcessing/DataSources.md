---
uid: Ans.DataProcessing.DataSources
---

# *class* DataSources(resultPath: str, extension: str)

Container of files paths on which the analysis results can be found

**Parameters:**

* **resultPath**
* **extension**

**Example:**

```python
my_data_sources = dpf.DataSources()

my_data_sources.SetResultFilePath(r'c:/temp/file.rst')

my_data_sources.AddFilePath(r'c:/temp/file.mode')
```

## Methods

#### AddDomainFilePath(filePath: str, sKey: str, id: int) -> None

Method `SetDomainResultFilePath` change or set the domain result file path

**Parameters:**

* **filePath** - file path to the results
* **sKey** - result path extension used to require the result provider to the right plugin
* **id** - domain id

#### AddFilePath(filePath: str, sKey: str, sResultKey: str) -> None

Method `AddFilePath` add secondary path containing part of the analysis' information

**Parameters:**

* **filePath** - file path
* **sKey** - optional path extension
* **sResultKey** - optional result extension. Must be used with a

result that is defined as a bunch of analysis (for example having output files from multiple solver).

#### AppendUpStreamDataSources(up_stream: DataSources) -> None

Method `AppendUpStreamDataSources`the recursivity of specific results (mainly expansion results) can be defined with upstreams

**Parameters:**

* **up_stream** - upstream data sources

**Example:**

```python
 my_data_sources = dpf.data.DataSources()

 my_data_sources.SetResultFilePath(r'c:/temp/file.rfrq')

 my_up_data_sources = dpf.data.DataSources()

 my_up_data_sources.AddFilePath(r'c:/temp/file.mode')

 my_data_sources.AppendUpStreamDataSources(my_up_data_sources)
```

#### GetFilePath(key: str) -> str

**Parameters:**

* **key**

#### SetDomainResultFilePath(filePath: str, sKey: str, id: int) -> None

Method `SetDomainResultFilePath` change or set the domain result file path

**Parameters:**

* **filePath** - file path to the results
* **sKey** - result path extension used to require the result provider to the right plugin
* **id** - domain id

#### SetResultFilePath(filePath: str, sKey: str) -> None

Method `SetResultFilePath` change or set the result file path

**Parameters:**

* **filePath** - file path to the results
* **sKey** - optional result path extension used to require the result provider to the right plugin

## Properties

#### *property* ResultFileKey: str

Property `ResultFileKey` extension of the results contained in the data sources

*get*

#### *property* ResultFilePath: str

Property `ResultFilePath` path to the result file registered in the data sources

*get/set*
