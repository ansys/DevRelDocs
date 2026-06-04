# Interface ModelCenter::IModelCenter

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 3947)



COM instance.






**ModelCenter batch mode**:

This example demonstrates invoking ModelCenter and running a Model in batch mode through the COM API.
``` 
Dim mc
Set mc=CreateObject("ModelCenter.Application")
mc.loadModel "c:\testmodel.pxc"
'
Dim x
Dim s
For x=0 To 10
   mc.setValue "Model.Linear.x", x
   s=s & "x=" & x & ", y=" & mc.getValue("Model.Linear.y") & vbNewLine
Next
msgbox s
```


**Example ModelCenter Script**:

This script demonstrates how to automate ModelCenter to create a Model.<br/>
First, a new Model is loaded into ModelCenter, two components are instantiated, and then several links are created.<br/>
Last, the Model is saved to a .pxc file.
``` 
' This is a test script that automates the creation of a Model
'
' -------------------- start ModelCenter
'
Dim app
Set app = WScript.CreateObject("ModelCenter.Application")
'
' -------------------- start a new Model
'
app.newModel
'
' -------------------- instantiate a few components
'
app.createComponent "mcre://localhost/Block", "block", "Model"
app.createComponent "mcre://localhost/Block", "block1", "Model"
'
' -------------------- create some links
'
app.createLink "Model.block.width", "Model.block1.width"
app.createLink "Model.block.height", "Model.block1.width + Model.block1.height"
'
' -------------------- save the file
'
file = "c:\model.pxc"
app.saveModelAs(file)
```


**Example DOE Script**:

This script demonstrates how to call ModelCenter to perform a DOE.<br/>
The script loads a Model into ModelCenter, and then repeatedly sets and gets values to perform the DOE.
```
'
' This is a test script that performs a DOE using ModelCenter. To 
' run the script, type "cscript DOE.vbs"
'
'
' -------------------- start ModelCenter
'
Dim app
Set app = WScript.CreateObject( "ModelCenter.Application" )
'
' -------------------- load a file
'
file = "d:\model.pxc"
app.loadFile file
'
' -------------------- setup a DOE table
'
numTrials = 4
numInputs = 2
numOutputs = 2
Dim inputs(2)
inputs(0) = "script.VBScript.a"
inputs(1) = "script.VBScript.b"
Dim outputs(2)
outputs(0) = "script.VBScript.c"
outputs(1) = "script.VBScript.d"
Dim trials(4,2)
trials(0,0) = 5
trials(0,1) = 2
trials(1,0) = 4
trials(1,1) = 2
trials(2,0) = 5
trials(2,1) = 3
trials(3,0) = 4
trials(3,1) = 3
'
' -------------------- perform the runs
'
' print a header
msg = ""
For var = 0 To numInputs-1
   msg = msg & inputs(var) & " "
Next
For var = 0 To numOutputs-1
   msg = msg & outputs(var) & " "
Next
' print the values
WScript.echo msg
' collect and print values
For i = 0 To numTrials-1
   ' create a message
   msg = ""
   ' set the input values
   For var = 0 To numInputs-1
      app.setValue inputs(var), trials(i,var)
      msg = msg & trials(i,0) & " "
   Next
   ' get the outputs
   For var = 0 To numOutputs-1
      msg = msg & app.getValue( outputs(var) ) & " "
   Next
   ' print the values
   WScript.echo msg
Next
```

## Members

* [addIcon](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ada4b443f077f7c53744ada601a3c12be)
* [addNewMacro](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a9d209b30adb83ac9fe48f8efd1959f3a)
* [appFullPath](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a999bedcb3195dc2a12b034e0fa0222ec)
* [appName](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a1a5d90dca23414ddb8ef45e99c091ea4)
* [autoLink](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1adea9c027f61fb0c23ce34a0e47924679)
* [breakLink](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a231cd11fa3198cc4a22db3ee0483b59c)
* [checkout](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a5ea6a58aa4def0e7d48f5c48dfc46d35)
* [checkout2](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a3b8e21abd2354b4fd537084f36c9a180)
* [closeHTMLViewer](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a46b4e01256fa252da2f589af87833ac1)
* [closeModel](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a00bcefae609c5a453dd1f4e0586820fc)
* [configureLogging](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1acb8cad870e072bee4a80b1902476929a)
* [createAndInitComponent](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a049e13b6d3ba54dd40a162a16d03bb66)
* [createAssembly](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a402db0953a58ac7573cf3585c938eafa)
* [createAssemblyVariable](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a72e28e9146e37b0854aaa3274b60362c)
* [createComponent](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aa1c2ba41e8aeff2bc97408fd6d5e8832)
* [createDataCollector](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ad91dff33c09345053346ce2d831fd968)
* [createDataExplorer](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a3edba311337bb171b956e0d331cfa05f)
* [createDataHistoryVariable](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a5f2d90be1a4bed0126993b3021d24981)
* [createDataMonitor](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ad86e8cd5714f0d22dc84b1b71979fdc5)
* [createJobManager](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a5878e18adeeafe78c1920e5544253442)
* [createLink](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ac46503f8f560edbcddd87fb9c9045326)
* [createPlugInFrame](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1afb0f2d3715e4a48c1ee1c865864c5314)
* [createPlugInFrame2](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1acd338a67839da36df138a0521ee3aead)
* [createTradeStudy](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ab18e9a5fa259695357cd26f155ee95dd)
* [destroyPlugInFrame](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a24cc8bd489975150c9d5c5c3e9502b87)
* [displayAboutBox](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aa9057344d6d2ffc28569709efdbdb5ad)
* [displayPreferencesDialog](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ae8f7829bf075209faf0fcecf742e76be)
* [dumpComDebug](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a27b453e8058a238c25049c8fcb5121e4)
* [exit](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aba655ef2cf9a8f639acde2697d8319a2)
* [getActiveJobManager](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a931fee19976a7a03e263284ec0ee9d53)
* [getAssembly](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a461a8c0e8efdd3353da6feb22b232029)
* [getAssemblyStyle](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ab1d7ce6494121cd997115f91e91d795a)
* [getComponent](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a779902b1a3f3c4c0db2b58484ec75fe0)
* [getDataCollector](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a29b8af2a820e24e728425e6467881067)
* [getDataCollectorForDataExplorer](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a59b46ca7b15c869fb190ecfeb70bf90a)
* [getDataExplorer](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ae1bdc8f0abc612490b737852f189027a)
* [getDataMonitor](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a6212fa2f41e2132f8f40d78164059eb7)
* [getFileSystemInfo](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a6d6d38245d99b3f53fda689a1adee17f)
* [getFormatter](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a1533da4a5c2e70aa5b196215af7637bc)
* [getGlobalParameters](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a2fac8021991150ab97e3673e4b0c0dc1)
* [getHaltStatus](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aa75908bb0ec202342833c666b10fcb66)
* [getHWND](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aaaa18b9967d91f5e9afa0f663fb4ddae)
* [getLastErrorMessage](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a5a57f078a8de6d78e6cc4f808c761fe8)
* [getLicensingPath](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1af5bdeb0442c6f35c0e5db849b1a166fd)
* [getLinks](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ac83decf1799275a0d13ecadeffb008cd)
* [getLogger](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1af2d28cb0c0290a80ebe0e31f91497f11)
* [getMacroScript](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a16bc3b79ea75a2c2e9c6aaf48591f840)
* [getMacroScriptLanguage](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a8c930544d5f9fc2e49afb076b5ccee76)
* [getMacroTimeout](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a18766ae9a0fda73f8febdb709adfceea)
* [getModel](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a5d42323e20b243257f4cef533dd58e7d)
* [getModelCenterPath](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1adc47ef3cf5fa8d766117ec19c7dfab92)
* [getModelUUID](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a499de038ba95ad40b52862e5239bf18c)
* [getNetworkLocations](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a375ab85c506633857e960502c208ed79)
* [getNumUnitCategories](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a0f6aab6d238cbe899af59725ab0de842)
* [getNumUnits](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ad6a35e6ac78e89ddcd4a68023bcdd651)
* [getPreference](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aadc031780e0355e1ca2bba83cb13441a)
* [getRunOnlyMode](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a38682504615aef9e603a9c2f3d4bd2e8)
* [getUnitCategoryName](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1abe07ee5b95ed640b926a165f2e02b7f1)
* [getUnitName](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aab8bb46de63e10f150e9614ea36d0b9a)
* [getValue](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a8cacc6c81e217bf7affe180a59d21455)
* [getValueAbsolute](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a04408aef2e249b325db44eb8e0ca6758)
* [getVariable](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1af87c3dde3f5645f1257ba0edb037889b)
* [getVariableMetaData](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aebbf42a396f1eea5b917d13b85e0fb8e)
* [getXMLExtension](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1af94e33f84d46652cfad0af931db0d59b)
* [guiCloseAllMultiplexers](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a8708a9033fcd77731539b085a1c6c047)
* [guiLoadFile](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a255ea30feb95451802aa280bdffcd7b8)
* [guiSaveModel](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a8ad33e25dfad91e8ba248d399a1b6449)
* [halt](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a4cde569f8ca3555ede7fd8d3d2cd4387)
* [hidePlugInFrame](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a806cc1860aaadaa5496d4caa0a51fe91)
* [HTMLViewerGetMyHWND](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ad6f56123c0b435ffca19628deaa4169f)
* [HTMLViewerWaitForClose](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ad62471b3a17a7b182d7f8fa0df7048b7)
* [internalLicensing](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ae91fcfa7f9dfe5fa3df62fb9d3c703c8)
* [invokeHelp](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a2a8f95eb131aad5e03597ada8251ef30)
* [IsInteractive](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a7fc1e5b5a0eee411b82f7508243f453f)
* [isOkToClose](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1af91d7535a069da55220c52b759ca5238)
* [launchDataCollectorPlugIn](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a434995395fc673c8197bfde7e1256240)
* [launchHTMLViewer](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aae5eb45abe323ca501a777f31b9ae5b8)
* [launchMacroEditor](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ab180eb62170146926e7a6c2384d5ad66)
* [launchTradeStudy](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a24726ff2cf91ef85884d6b2bea513ed4)
* [loadFile](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a21295b971e1a8854d7524b85332fcb3b)
* [loadModel](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ab57546e9e718895bbdfa25bc1b7d1e9d)
* [MessageBox](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aa31343d27c063cc384336028b12abac2)
* [modelDirectory](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1adf58dfafa5401318de434c22d9e12ef3)
* [modelFileName](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1abb83f0e9475f2ccf8de46b09946d79e3)
* [moveComponent](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a70986fc1018ab96fdbd507b4ebe568fc)
* [newModel](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a90ad7c497e4da5b9474d747ba6bd9715)
* [parallelInstance](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a7dc06d52fa432893eaf74db606db3864)
* [ProcessID](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1acb08040260ee9e91a9a455c15d9fc0ad)
* [removeComponent](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a7bbd736a48c08e2eb90c4af45872e6f5)
* [removeDataMonitor](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a2dd2279b4d0250af8ae6d3506f55c57a)
* [run](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a158d8bbb37d23dd35bbf87b1340c95d6)
* [runAntFile](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a2d684049210e4062f14cf2e3e2abb031)
* [runMacro](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a762c9d09a2d611300bc3e09f9891c86e)
* [SAFEARRAY](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aa2ca200dd05dc8257c35af74035459e1)
* [saveModel](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a16dc53d7c16d4517b6859acc1ee25a50)
* [saveModelAs](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ab3fcf686594e1e2f81b7814bab8a6752)
* [saveTradeStudy](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1af139d41f66681c63c80243adbd48cbc0)
* [saveVersionedModel](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ac658a0c1392f2fd8b851794c9ac1896f)
* [saveVersionedModelAs](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ab65847c07b712a58acfe6a21659518b5)
* [screenUpdating](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1acc9b3db9f6b75b711cf8106947576e89)
* [setAlternateParentFrame](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a83b97e8dd461f4bc8fbe5cdc63809b74)
* [setAssemblyStyle](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1af1bef892aa57d153cd63b6f4ba9037f4)
* [setIconPlugInFrame](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a65a6502ad779fd4394d06f45adabc398)
* [setLoginCallback](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a156c716bde56ad5bc070f00e2037a2da)
* [setMacroScript](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ae2b0614b8c0367ab7893c5fb32e14b96)
* [setMacroScriptLanguage](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a7b92a22213e11d5f4b3ad8dfe7a894f9)
* [setMacroTimeout](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a559cd3b9f0e68e5ecc2c4006c8014667)
* [setPassword](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a677e2965bfb8998dc4546673f95355de)
* [setPreference](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ac7c886a8b0333b565333d6b16d9ab824)
* [setRunOnlyMode](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aba91dde2a4c0674816c3781ed873457e)
* [setScheduler](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aa312b4e6e4585bd0f4d7cc9a69d1d7ec)
* [setUserName](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a359b38b4b8bc935b9eb5cf9e68a3a34f)
* [setValue](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a535535c056577a2306bfd089423a6e8b)
* [setXMLExtension](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a70666088b3363b2c9738cd15ec446d8e)
* [showFileBrowseDialog](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a9dabff9569cfbb6c65ccdae26aab3ff7)
* [showFileSaveDialog](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a23ea9bc699e8f31401f96d2594f79ae6)
* [showPlugInFrame](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ad1fc33915ad5917cd645e795251f01de)
* [startGUIMode](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a06c77786a3965c9ca7c72c6ba7af7ad3)
* [tradeStudyEnd](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a85f4a4b6557102133fc5dad3ef0a1ff8)
* [tradeStudyStart](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a39de949b1cdace01114ee9391fc4a484)
* [transformAVPoint](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a23a3683a4c5b5f4380e33232e2ca30be)
* [unAssociatedInstance](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a21a60528e3b43cbbbbc131adaf5a1151)
* [version](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a3072c85db32956a1c302668a49b031f8)

## Properties

<a id="interfaceModelCenter_1_1IModelCenter_1adf58dfafa5401318de434c22d9e12ef3"></a>
### Property modelDirectory

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IModelCenter::modelDirectory
```



Directory of the current Model. If no model is open it will raise an error. If the model has not yet been saved, it will return an empty string.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1acc9b3db9f6b75b711cf8106947576e89"></a>
### Property screenUpdating

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IModelCenter::screenUpdating
```



Whether or not screen updating is turned on.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IModelCenter_1abb83f0e9475f2ccf8de46b09946d79e3"></a>
### Property modelFileName

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IModelCenter::modelFileName
```



The Full path of the current ModelCenter Model.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1a1a5d90dca23414ddb8ef45e99c091ea4"></a>
### Property appName

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IModelCenter::appName
```



Gets the [Application](classModelCenter_1_1Application.md#classModelCenter_1_1Application) name






**Returns**:

[Application](classModelCenter_1_1Application.md#classModelCenter_1_1Application) name



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1a999bedcb3195dc2a12b034e0fa0222ec"></a>
### Property appFullPath

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IModelCenter::appFullPath
```



Gets the full path to the application.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1a7fc1e5b5a0eee411b82f7508243f453f"></a>
### Property IsInteractive

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BOOL ModelCenter::IModelCenter::IsInteractive
```



Is ModelCenter running in interactive/GUI mode.



**Return type**: BOOL

<a id="interfaceModelCenter_1_1IModelCenter_1acb08040260ee9e91a9a455c15d9fc0ad"></a>
### Property ProcessID

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
long ModelCenter::IModelCenter::ProcessID
```



The process identifier of the [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) process. Useful for cases where [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) is running in COM server mode and a client process needs to grant it permission to do something (like move a window to the foreground).



**Return type**: long

<a id="interfaceModelCenter_1_1IModelCenter_1a3072c85db32956a1c302668a49b031f8"></a>
### Property version

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 4270)

```
long ModelCenter::IModelCenter::version
```



Gets the version number of ModelCenter. ModelCenter versions are in the form 5.1.2 where 5 is the major version, 1 is the minor, and 2 is the patch version.






**Parameters**:

* **index**: Which part of the version to get.
* 0 - Get the major version number

* 1 - Get the minor version number

* 2 - Get the patch version number


**Returns**:

The requested version part.



**Return type**: long

## Public functions

<a id="interfaceModelCenter_1_1IModelCenter_1a5a57f078a8de6d78e6cc4f808c761fe8"></a>
### Function getLastErrorMessage

![][public]

```
BSTR ModelCenter::IModelCenter::getLastErrorMessage()
```



Gets the last error message.






**Returns**:

The last error message.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1a21295b971e1a8854d7524b85332fcb3b"></a>
### Function loadFile

![][public]

```
void ModelCenter::IModelCenter::loadFile(BSTR fileName, [optional]VARIANT onConnectError)
```



Loads a .pxc file.






**Parameters**:

* **fileName**: Path of the .pxc file.
* **onConnectError**: States what to do when a connect error is encountered.<br/>
 (see [OnConnectionErrorMode](namespaceModelCenter.md#namespaceModelCenter_1a916012c305b3ade57ea11ed7fe1f6af2) for error modes, default is CONN_ERR_ERROR).



**Parameters**:

* BSTR **fileName**
* _[optional]_ VARIANT **onConnectError**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a535535c056577a2306bfd089423a6e8b"></a>
### Function setValue

![][public]

```
void ModelCenter::IModelCenter::setValue(BSTR varName, BSTR value)
```



Sets the value of a variable.






**Parameters**:

* **varName**: Full ModelCenter path of the variable.
* **value**: The new value.



**Parameters**:

* BSTR **varName**
* BSTR **value**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a8cacc6c81e217bf7affe180a59d21455"></a>
### Function getValue

![][public]

```
VARIANT ModelCenter::IModelCenter::getValue(BSTR varName)
```



Gets the value of a variable.






**Parameters**:

* **varName**: Full ModelCenter path of the variable.


**Returns**:

The value as a variant.



**Parameters**:

* BSTR **varName**

**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IModelCenter_1aa1c2ba41e8aeff2bc97408fd6d5e8832"></a>
### Function createComponent

![][public]

```
void ModelCenter::IModelCenter::createComponent(BSTR serverPath, BSTR name, BSTR parent, [optional]VARIANT xPos, [optional]VARIANT yPos)
```



Creates, or connects, to a new MCRE Component.






**Parameters**:

* **serverPath**: The MCRE source path of the new component.
* **name**: Name of the new component.
* **parent**: Parent assembly of the component.
* **xPos**: The x-position in pixels in the Analysis View.
* **yPos**: The y-position in pixels in the Analysis View.



**Parameters**:

* BSTR **serverPath**
* BSTR **name**
* BSTR **parent**
* _[optional]_ VARIANT **xPos**
* _[optional]_ VARIANT **yPos**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ac46503f8f560edbcddd87fb9c9045326"></a>
### Function createLink

![][public]

```
void ModelCenter::IModelCenter::createLink(BSTR variable, BSTR equation)
```



Creates a link to the specified variable based on the specified equation.






**Parameters**:

* **variable**: Variable to add the link to.
* **equation**: Equation of the link.



**Parameters**:

* BSTR **variable**
* BSTR **equation**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a90ad7c497e4da5b9474d747ba6bd9715"></a>
### Function newModel

![][public]

```
void ModelCenter::IModelCenter::newModel([optional]VARIANT modelType)
```



Creates a new Model.






**Parameters**:

* **modelType**: <br/>



**Parameters**:

* _[optional]_ VARIANT **modelType**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a16dc53d7c16d4517b6859acc1ee25a50"></a>
### Function saveModel

![][public]

```
void ModelCenter::IModelCenter::saveModel()
```



Saves the current Model.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ab3fcf686594e1e2f81b7814bab8a6752"></a>
### Function saveModelAs

![][public]

```
void ModelCenter::IModelCenter::saveModelAs(BSTR fileName)
```



Saves the current Model to a specified file.






**Parameters**:

* **fileName**: Path to save the Model in.



**Parameters**:

* BSTR **fileName**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a00bcefae609c5a453dd1f4e0586820fc"></a>
### Function closeModel

![][public]

```
void ModelCenter::IModelCenter::closeModel()
```



Closes the current Model.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ab57546e9e718895bbdfa25bc1b7d1e9d"></a>
### Function loadModel

![][public]

```
void ModelCenter::IModelCenter::loadModel(BSTR fileName, [optional]VARIANT onConnectError)
```



Loads a .pxc file.






**Parameters**:

* **fileName**: Path of the .pxc file.
* **onConnectError**: States what to do when a connect error is encountered.<br/>
 (see [OnConnectionErrorMode](namespaceModelCenter.md#namespaceModelCenter_1a916012c305b3ade57ea11ed7fe1f6af2) for error modes, default is CONN_ERR_ERROR).



**Parameters**:

* BSTR **fileName**
* _[optional]_ VARIANT **onConnectError**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1af87c3dde3f5645f1257ba0edb037889b"></a>
### Function getVariable

![][public]

```
IDispatch * ModelCenter::IModelCenter::getVariable(BSTR name)
```



Gets a pointer to a variable.






**Parameters**:

* **name**: Full ModelCenter path of the variable.


**Returns**:

IDispatch* to an [IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable) object.



**Parameters**:

* BSTR **name**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a779902b1a3f3c4c0db2b58484ec75fe0"></a>
### Function getComponent

![][public]

```
IDispatch * ModelCenter::IModelCenter::getComponent(BSTR name)
```



Gets a pointer to the Component.






**Parameters**:

* **name**: Full ModelCenter path of the Component.


**Returns**:

IDispatch* to an [IComponent](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent) object.



**Parameters**:

* BSTR **name**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1aba655ef2cf9a8f639acde2697d8319a2"></a>
### Function exit

![][public]

```
void ModelCenter::IModelCenter::exit()
```



Deprecated. 
**Deprecated**:

No longer used.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ad91dff33c09345053346ce2d831fd968"></a>
### Function createDataCollector

![][public]

```
IDispatch * ModelCenter::IModelCenter::createDataCollector(BSTR tradeStudyType, BSTR setup)
```



Creates a new Data Collector.






**Parameters**:

* **tradeStudyType**: Registry ID of the Plug-In. This is obtained by calling the [getRegID ](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1ac0dd856b24d06484c6ded0aba0199016) method of the IAddToModel* object that is passed into the Plug-In's construct method.
* **setup**: A string that is generated from the Plug-In's "toString" method that can be restored later by the Plug-In's "fromString" method.


**Returns**:

IDispatch* to an [IDataCollector](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector) object.


**Deprecated**:

use [createDataExplorer()](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1a3edba311337bb171b956e0d331cfa05f) instead



**Parameters**:

* BSTR **tradeStudyType**
* BSTR **setup**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a85f4a4b6557102133fc5dad3ef0a1ff8"></a>
### Function tradeStudyEnd

![][public]

```
void ModelCenter::IModelCenter::tradeStudyEnd()
```



Lets ModelCenter know that a Trade Study has been completed.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a5878e18adeeafe78c1920e5544253442"></a>
### Function createJobManager

![][public]

```
IDispatch * ModelCenter::IModelCenter::createJobManager([optional]VARIANT showProgressDialog)
```



Creates a new Job Manager object.






**Parameters**:

* **showProgressDialog**: an optional VARIANT that specifies whether or not to show a progress dialog when creating the job manager. Possible values are:
* true to show a progress dialog and attempt to parent it to [ModelCenter](namespaceModelCenter.md#namespaceModelCenter)

* false to not show a progress dialog

* a long value that corresponds to the HWND of the window to which the progress dialog should be parented <br/>


**Returns**:

IDispatch* to an [IJobManager](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager) object.



**Parameters**:

* _[optional]_ VARIANT **showProgressDialog**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a39de949b1cdace01114ee9391fc4a484"></a>
### Function tradeStudyStart

![][public]

```
void ModelCenter::IModelCenter::tradeStudyStart()
```



Lets ModelCenter know that a Trade Study has been started.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1aa75908bb0ec202342833c666b10fcb66"></a>
### Function getHaltStatus

![][public]

```
boolean ModelCenter::IModelCenter::getHaltStatus()
```



Finds out if the user has pressed the halt button.






**Returns**:

yes(TRUE) or no(FALSE).



**Return type**: boolean

<a id="interfaceModelCenter_1_1IModelCenter_1a5d42323e20b243257f4cef533dd58e7d"></a>
### Function getModel

![][public]

```
IDispatch * ModelCenter::IModelCenter::getModel()
```



Gets a pointer to the Model.






**Returns**:

IDispatch* to an [IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly) object.



**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1aa31343d27c063cc384336028b12abac2"></a>
### Function MessageBox

![][public]

```
void ModelCenter::IModelCenter::MessageBox(BSTR msg,[optional]VARIANT force)
```



Creates a MessageBox dialog.






**Parameters**:

* **msg**: Message to display in the MessageBox.
* **force**: <br/>



**Parameters**:

* BSTR **msg**
* _[optional]_ VARIANT **force**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a04408aef2e249b325db44eb8e0ca6758"></a>
### Function getValueAbsolute

![][public]

```
VARIANT ModelCenter::IModelCenter::getValueAbsolute(BSTR varName)
```



Gets the value of a variable without validating it.






**Parameters**:

* **varName**: Full ModelCenter path of the variable.


**Returns**:

The value as a variant.



**Parameters**:

* BSTR **varName**

**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IModelCenter_1aa312b4e6e4585bd0f4d7cc9a69d1d7ec"></a>
### Function setScheduler

![][public]

```
void ModelCenter::IModelCenter::setScheduler(BSTR scheduler)
```



Sets the current active scheduler for the Model.






**Parameters**:

* **scheduler**: The scheduler type. Possible types are:
* forward

* backward

* mixed

* script

Note: all scheduler types are case sensitive.



**Parameters**:

* BSTR **scheduler**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a7bbd736a48c08e2eb90c4af45872e6f5"></a>
### Function removeComponent

![][public]

```
void ModelCenter::IModelCenter::removeComponent(BSTR name)
```



Removes the specified component from the Model.






**Parameters**:

* **name**: Full ModelCenter path of the component to remove.



**Parameters**:

* BSTR **name**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a231cd11fa3198cc4a22db3ee0483b59c"></a>
### Function breakLink

![][public]

```
void ModelCenter::IModelCenter::breakLink(BSTR variable)
```



Breaks the link to a variable.






**Parameters**:

* **variable**: The full ModelCenter path of the variable whose link is to be broken.

Example demonstrating how to break a link: 
```
mc.breakLink "Model.Linear.x"
```



**Parameters**:

* BSTR **variable**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1aaaa18b9967d91f5e9afa0f663fb4ddae"></a>
### Function getHWND

![][public]

```
long ModelCenter::IModelCenter::getHWND()
```



Gets the HWND of the current ModelCenter instance. This HWND can then be used as the parent of the Plug-In GUI.






**Returns**:

Value of the current HWND instance.



**Return type**: long

<a id="interfaceModelCenter_1_1IModelCenter_1a5ea6a58aa4def0e7d48f5c48dfc46d35"></a>
### Function checkout

![][public]

```
IDispatch * ModelCenter::IModelCenter::checkout(BSTR feature)
```



Checks out a license feature from FLEXlm






**Parameters**:

* **feature**: the name of the feature to be checked out


**Returns**:

an [IFeature](interfaceModelCenter_1_1IFeature.md#interfaceModelCenter_1_1IFeature) object



**Parameters**:

* BSTR **feature**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a3b8e21abd2354b4fd537084f36c9a180"></a>
### Function checkout2

![][public]

```
IDispatch * ModelCenter::IModelCenter::checkout2(BSTR feature, BSTR productRelease)
```



Checks out a license feature from FLEXlm






**Parameters**:

* **feature**: the name of the feature to be checked out
* **productRelease**: the release date of the feature being passed


**Returns**:

an [IFeature](interfaceModelCenter_1_1IFeature.md#interfaceModelCenter_1_1IFeature) object



**Parameters**:

* BSTR **feature**
* BSTR **productRelease**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a762c9d09a2d611300bc3e09f9891c86e"></a>
### Function runMacro

![][public]

```
VARIANT ModelCenter::IModelCenter::runMacro(BSTR macro, [optional]VARIANT useMCObject)
```



Runs the specified macro.






**Parameters**:

* **macro**: The name of the macro to run.
* **useMCObject**: whether or not to use the [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) object


**Returns**:

<br/>



**Parameters**:

* BSTR **macro**
* _[optional]_ VARIANT **useMCObject**

**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IModelCenter_1a402db0953a58ac7573cf3585c938eafa"></a>
### Function createAssembly

![][public]

```
IDispatch * ModelCenter::IModelCenter::createAssembly(BSTR name, BSTR parent, [optional]VARIANT assemblyType)
```



Creates a new Assembly in the Model.






**Parameters**:

* **name**: Desired name of the new Assembly.
* **parent**: Full ModelCenter path of the parent Assembly.
* **assemblyType**: <br/>


**Returns**:

IDispatch* to an [IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly) object.

Example demonstrating how to create an Assembly: 
```
Dim assembly As IAssembly
Set assembly=mc.createAssembly("myAssembly", "Model")
```



**Parameters**:

* BSTR **name**
* BSTR **parent**
* _[optional]_ VARIANT **assemblyType**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a72e28e9146e37b0854aaa3274b60362c"></a>
### Function createAssemblyVariable

![][public]

```
IDispatch * ModelCenter::IModelCenter::createAssemblyVariable(BSTR name, BSTR type, BSTR parent)
```



Create a new variable in an Assembly.






**Parameters**:

* **name**: Desired name of the new variable.
* **type**: Type of the new variable. Possible types are:
* double

* int

* boolean

* string

* file

* double[]

* int[]

* boolean[]

* string[]

* quadfacet

* surfaceofrevolution

* nurbs

* bspline

* ruled

* skinned

* vrml

* node
* **parent**: Full ModelCenter path of the parent Assembly.


**Returns**:

IDispatch* to an [IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable) object.

Example demonstrating how to create a variable in an existing Assembly: 
```
Dim var As IVariable
Set var=mc.createAssemblyVariable("myVar", "double", "Model")
```



**Parameters**:

* BSTR **name**
* BSTR **type**
* BSTR **parent**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1adea9c027f61fb0c23ce34a0e47924679"></a>
### Function autoLink

![][public]

```
void ModelCenter::IModelCenter::autoLink(BSTR srcComp, BSTR destComp)
```



Automatically links two components.






**Parameters**:

* **srcComp**: The source component.
* **destComp**: The destination component.



**Parameters**:

* BSTR **srcComp**
* BSTR **destComp**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ac83decf1799275a0d13ecadeffb008cd"></a>
### Function getLinks

![][public]

```
LPDISPATCH ModelCenter::IModelCenter::getLinks([optional]VARIANT reserved)
```



Returns a list of all links in the model.






**Parameters**:

* **reserved**: Reserved for future use.


**Returns**:

IDispatch* to an [IVariableLinks](interfaceModelCenter_1_1IVariableLinks.md#interfaceModelCenter_1_1IVariableLinks) object.



**Parameters**:

* _[optional]_ VARIANT **reserved**

**Return type**: LPDISPATCH

<a id="interfaceModelCenter_1_1IModelCenter_1a499de038ba95ad40b52862e5239bf18c"></a>
### Function getModelUUID

![][public]

```
BSTR ModelCenter::IModelCenter::getModelUUID()
```



Returns the unique ID string for the current model.






**Returns**:

The ID string for the current model.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1a1533da4a5c2e70aa5b196215af7637bc"></a>
### Function getFormatter

![][public]

```
IDispatch * ModelCenter::IModelCenter::getFormatter(BSTR format)
```



Creates a new instance of a formatter which can be used to format numbers to and from a particular string style. See documentation on [IPHXFormat.setFormat()](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat_1aa34d6054f4542a34efb60a961ad78519) for more information on available styles.






**Parameters**:

* **format**: Specified string format for the Formatter object.


**Returns**:

An IDispatch* to the [IPHXFormat](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat) object.



**Parameters**:

* BSTR **format**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a2a8f95eb131aad5e03597ada8251ef30"></a>
### Function invokeHelp

![][public]

```
void ModelCenter::IModelCenter::invokeHelp(long pageID)
```



Invokes the specified context sensitive help item out of the ModelCenter help file.






**Parameters**:

* **pageID**: <br/>



**Parameters**:

* long **pageID**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a24726ff2cf91ef85884d6b2bea513ed4"></a>
### Function launchTradeStudy

![][public]

```
void ModelCenter::IModelCenter::launchTradeStudy(BSTR type, [optional]VARIANT setup)
```



Causes the specified Trade Study tool to be launched.






**Parameters**:

* **type**: May be a common name, like "doe" or a fully specified URL like "common:\\tradestudy\\doe".
* **setup**: <br/>



**Parameters**:

* BSTR **type**
* _[optional]_ VARIANT **setup**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1afb0f2d3715e4a48c1ee1c865864c5314"></a>
### Function createPlugInFrame

![][public]

```
long ModelCenter::IModelCenter::createPlugInFrame(BSTR name, BSTR title, BSTR reserved, LPDISPATCH plugIn, [optional]VARIANT showFavorites, [optional]VARIANT defaultHeight, [optional]VARIANT defaultWidth)
```



Creates a new frame window with favorites in it which can be used by Plug-Ins as a parent window in order to integrate with ModelCenter closer and to get favorites. Currently only supports C++ Plug-Ins.






**Parameters**:

* **name**: The programmatic name of the plug-in. This is used to store favorites and settings uniquely.
* **title**: The title to put on the frame
* **reserved**: Reserved, must be blank
* **plugIn**: An IDispatch to the plug-in, used to get at the to/from string to use with favorites.
* **showFavorites**: <br/>
* **defaultHeight**: The default height of the frame.
* **defaultWidth**: The default width of the frame.


**Returns**:

<br/>



**Parameters**:

* BSTR **name**
* BSTR **title**
* BSTR **reserved**
* LPDISPATCH **plugIn**
* _[optional]_ VARIANT **showFavorites**
* _[optional]_ VARIANT **defaultHeight**
* _[optional]_ VARIANT **defaultWidth**

**Return type**: long

<a id="interfaceModelCenter_1_1IModelCenter_1aa9057344d6d2ffc28569709efdbdb5ad"></a>
### Function displayAboutBox

![][public]

```
void ModelCenter::IModelCenter::displayAboutBox()
```



Display the "About" dialog for ModelCenter.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a4cde569f8ca3555ede7fd8d3d2cd4387"></a>
### Function halt

![][public]

```
void ModelCenter::IModelCenter::halt()
```



Stop execution of the Model currently running in ModelCenter.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ae8f7829bf075209faf0fcecf742e76be"></a>
### Function displayPreferencesDialog

![][public]

```
void ModelCenter::IModelCenter::displayPreferencesDialog()
```



Display the "Preferences" dialog for ModelCenter.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a158d8bbb37d23dd35bbf87b1340c95d6"></a>
### Function run

![][public]

```
void ModelCenter::IModelCenter::run(BSTR variableArray)
```



Runs a specified set of variables in the current Model.






**Parameters**:

* **variableArray**: A comma-separated list of ModelCenter variables to validate.<br/>
 If no variables are specified then the entire model will be run (equivalent to clicking the scheduler run button).



**Parameters**:

* BSTR **variableArray**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a6212fa2f41e2132f8f40d78164059eb7"></a>
### Function getDataMonitor

![][public]

```
IDispatch * ModelCenter::IModelCenter::getDataMonitor(BSTR component, VARIANT index)
```



Retrieves the indexed Data Monitor associated with the specified Component.






**Parameters**:

* **component**: The desired Component name.
* **index**: The desired index number (0-based index).


**Returns**:

<br/>



**Parameters**:

* BSTR **component**
* VARIANT **index**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1ad86e8cd5714f0d22dc84b1b71979fdc5"></a>
### Function createDataMonitor

![][public]

```
IDispatch * ModelCenter::IModelCenter::createDataMonitor(BSTR component, BSTR name, int x, int y)
```



Creates a Data Monitor associated with a particular component.






**Parameters**:

* **component**: The name of the ModelCenter component to associate the Data Monitor with.
* **name**: The name of the Data Monitor.
* **x**: The x-position of the Data Monitor.
* **y**: The y-position of the Data Monitor.


**Returns**:

<br/>



**Parameters**:

* BSTR **component**
* BSTR **name**
* int **x**
* int **y**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1af91d7535a069da55220c52b759ca5238"></a>
### Function isOkToClose

![][public]

```
boolean ModelCenter::IModelCenter::isOkToClose()
```



Determines whether any sub-windows are currently open in ModelCenter.






**Returns**:

True if no sub windows are open, else false.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IModelCenter_1ada4b443f077f7c53744ada601a3c12be"></a>
### Function addIcon

![][public]

```
short ModelCenter::IModelCenter::addIcon(BSTR iconFile)
```



Adds a given icon file to the list of icons known by model.






**Parameters**:

* **iconFile**: The name of the icon file to add.


**Returns**:

The index of the icon in [ModelCenter](namespaceModelCenter.md#namespaceModelCenter)'s icon list.



**Parameters**:

* BSTR **iconFile**

**Return type**: short

<a id="interfaceModelCenter_1_1IModelCenter_1a2dd2279b4d0250af8ae6d3506f55c57a"></a>
### Function removeDataMonitor

![][public]

```
boolean ModelCenter::IModelCenter::removeDataMonitor(BSTR component, VARIANT index)
```



Remove a specific data monitor associated with a particular component






**Parameters**:

* **component**: the name of the component under which to find the data monitor for deletion
* **index**: the integer index (0-based index) or string title of the data monitor being removed


**Returns**:

whether the data monitor was successfully found and deleted



**Parameters**:

* BSTR **component**
* VARIANT **index**

**Return type**: boolean

<a id="interfaceModelCenter_1_1IModelCenter_1a359b38b4b8bc935b9eb5cf9e68a3a34f"></a>
### Function setUserName

![][public]

```
void ModelCenter::IModelCenter::setUserName(BSTR userName)
```



Sets the user name that ModelCenter will use for authentication.






**Parameters**:

* **userName**: The user name.



**Parameters**:

* BSTR **userName**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a677e2965bfb8998dc4546673f95355de"></a>
### Function setPassword

![][public]

```
void ModelCenter::IModelCenter::setPassword(BSTR password)
```



Sets the password that ModelCenter will use for authentication.






**Parameters**:

* **password**: The password.



**Parameters**:

* BSTR **password**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1adc47ef3cf5fa8d766117ec19c7dfab92"></a>
### Function getModelCenterPath

![][public]

```
BSTR ModelCenter::IModelCenter::getModelCenterPath()
```



Returns the full path to where ModelCenter is installed.






**Returns**:

Full file path where ModelCenter is installed.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1ae1bdc8f0abc612490b737852f189027a"></a>
### Function getDataExplorer

![][public]

```
IDispatch * ModelCenter::IModelCenter::getDataExplorer(int index)
```



Gets a pointer to the specified Data Explorer.






**Parameters**:

* **index**: The desired index number (0-based index).


**Returns**:

IDispatch* to an IDataExplorer object.



**Parameters**:

* int **index**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a29b8af2a820e24e728425e6467881067"></a>
### Function getDataCollector

![][public]

```
IDispatch * ModelCenter::IModelCenter::getDataCollector(int index)
```



Gets a pointer to the specified Data Collector.






**Parameters**:

* **index**: The desired index number (0-based index).


**Returns**:

IDispatch* to an [IDataCollector](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector) object.



**Parameters**:

* int **index**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1af2d28cb0c0290a80ebe0e31f91497f11"></a>
### Function getLogger

![][public]

```
IDispatch * ModelCenter::IModelCenter::getLogger()
```



Gets the [ILogger](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger) object used by ModelCenter for logging status and error messages.






**Returns**:

IDispatch* to an [ILogger](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger) object.



**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1acd338a67839da36df138a0521ee3aead"></a>
### Function createPlugInFrame2

![][public]

```
long ModelCenter::IModelCenter::createPlugInFrame2(BSTR name, BSTR title, BSTR reserved, LPDISPATCH plugIn, [optional]VARIANT showFavorites, [optional]VARIANT defaultHeight, [optional]VARIANT defaultWidth, [optional]VARIANT minimumHeight, [optional]VARIANT minimumWidth)
```



Creates a new frame window with favorites in it which can be used by Plug-Ins as a parent window in order to integrate with ModelCenter closer and to get favorites. Currently only supports C++ Plug-Ins.






**Parameters**:

* **name**: The programmatic name of the plug-in. This is used to store favorites and settings uniquely.
* **title**: The title to put on the frame
* **reserved**: Reserved, must be blank
* **plugIn**: An IDispatch to the plug-in, used to get at the to/from string to use with favorites.
* **showFavorites**: <br/>
* **defaultHeight**: The default height of the frame.
* **defaultWidth**: The default width of the frame.
* **minimumHeight**: The minimum allowed height of the frame.
* **minimumWidth**: The minimum allowed width of the frame.


**Returns**:

<br/>



**Parameters**:

* BSTR **name**
* BSTR **title**
* BSTR **reserved**
* LPDISPATCH **plugIn**
* _[optional]_ VARIANT **showFavorites**
* _[optional]_ VARIANT **defaultHeight**
* _[optional]_ VARIANT **defaultWidth**
* _[optional]_ VARIANT **minimumHeight**
* _[optional]_ VARIANT **minimumWidth**

**Return type**: long

<a id="interfaceModelCenter_1_1IModelCenter_1a70986fc1018ab96fdbd507b4ebe568fc"></a>
### Function moveComponent

![][public]

```
void ModelCenter::IModelCenter::moveComponent(BSTR component, BSTR parent, [optional]VARIANT index)
```



Moves the component to the parent at the given index.






**Parameters**:

* **component**: The component to move.
* **parent**: Owning object of the component.
* **index**: Position in the parent.



**Parameters**:

* BSTR **component**
* BSTR **parent**
* _[optional]_ VARIANT **index**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1af1bef892aa57d153cd63b6f4ba9037f4"></a>
### Function setAssemblyStyle

![][public]

```
void ModelCenter::IModelCenter::setAssemblyStyle(BSTR assemblyName, AssemblyStyle style, [optional]VARIANT width, [optional]VARIANT height)
```



Sets the assembly style of the component (collapse, expanded, N^2, etc).






**Parameters**:

* **assemblyName**: The assembly the style will be set.
* **style**: <br/>
* **width**: <br/>
* **height**: <br/>



**Parameters**:

* BSTR **assemblyName**
* [AssemblyStyle](namespaceModelCenter.md#namespaceModelCenter_1a91c424f9204166f9d85ca1d04b1cf625) **style**
* _[optional]_ VARIANT **width**
* _[optional]_ VARIANT **height**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ab1d7ce6494121cd997115f91e91d795a"></a>
### Function getAssemblyStyle

![][public]

```
AssemblyStyle ModelCenter::IModelCenter::getAssemblyStyle(BSTR assemblyName, int *width, int *height)
```



Gets the style of the assembly (Collapsed, expanded, N^2, etc).






**Parameters**:

* **assemblyName**: The assembly to retrieve.
* **width**: <br/>
* **height**: <br/>


**Returns**:

AssemblyStyle



**Parameters**:

* BSTR **assemblyName**
* int * **width**
* int * **height**

**Return type**: [AssemblyStyle](namespaceModelCenter.md#namespaceModelCenter_1a91c424f9204166f9d85ca1d04b1cf625)

<a id="interfaceModelCenter_1_1IModelCenter_1a461a8c0e8efdd3353da6feb22b232029"></a>
### Function getAssembly

![][public]

```
IDispatch * ModelCenter::IModelCenter::getAssembly(BSTR name)
```



Gets the assembly by the given name.






**Parameters**:

* **name**: The name of the assembly.


**Returns**:

IDispatch* to an [IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly) object.



**Parameters**:

* BSTR **name**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a049e13b6d3ba54dd40a162a16d03bb66"></a>
### Function createAndInitComponent

![][public]

```
IDispatch * ModelCenter::IModelCenter::createAndInitComponent(BSTR serverPath, BSTR name, BSTR parent, BSTR initString, [optional]VARIANT xPos, [optional]VARIANT yPos)
```



Creates a new component and initializes it from string data.






?> This method can only be invoked on plug-ins which support IComponentPlugin.fromString(). Furthermore, it should only be used when you know exactly the format that is expected by the component's fromString() method. It is designed to be used from plug-ins in third-party software which need to initialize a matching component to connect to that software in the model.<br/>
<br/>
Ideally, both the plug-in for the third-party software and the ModelCenter component will share the same codebase, so you can generate the configuration string from the same code which you will use to process it later. Mismatch between formats will almost certainly cause this method to fail.


**Parameters**:

* **serverPath**: The server path, e.g. "mcre:\\localhost\block". You can get examples of server paths by looking at the component properties for existing [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) components.
* **name**: The name of the new component.
* **parent**: The parent component.
* **initString**: The initialization string for the component. If NULL, the behavior of this function is identical to [createComponent()](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1aa1c2ba41e8aeff2bc97408fd6d5e8832).
* **xPos**: The X position.
* **yPos**: The Y position.


**Returns**:

The newly created [IComponent](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent) object



**Parameters**:

* BSTR **serverPath**
* BSTR **name**
* BSTR **parent**
* BSTR **initString**
* _[optional]_ VARIANT **xPos**
* _[optional]_ VARIANT **yPos**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1af5bdeb0442c6f35c0e5db849b1a166fd"></a>
### Function getLicensingPath

![][public]

```
BSTR ModelCenter::IModelCenter::getLicensingPath()
```



Gets the licensing path used by ModelCenter. By default the path is the base ModelCenter install directory.






**Returns**:



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1a16bc3b79ea75a2c2e9c6aaf48591f840"></a>
### Function getMacroScript

![][public]

```
BSTR ModelCenter::IModelCenter::getMacroScript(BSTR macroName)
```



Gets a macro script






?> This method is not safe for use from a component in parallel mode and will throw an exception if used in such a manner.


**Parameters**:

* **macroName**: The name of the macro.


**Returns**:

A string representing the macro script.



**Parameters**:

* BSTR **macroName**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1ae2b0614b8c0367ab7893c5fb32e14b96"></a>
### Function setMacroScript

![][public]

```
void ModelCenter::IModelCenter::setMacroScript(BSTR macroName, BSTR script)
```



Sets a macro script






?> This method is not safe for use from a component in parallel mode and will throw an exception if used in such a manner.


**Parameters**:

* **macroName**: The name of the macro.
* **script**: The script text.



**Parameters**:

* BSTR **macroName**
* BSTR **script**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a8c930544d5f9fc2e49afb076b5ccee76"></a>
### Function getMacroScriptLanguage

![][public]

```
BSTR ModelCenter::IModelCenter::getMacroScriptLanguage(BSTR macroName)
```



Gets a macro script language






?> This method is not safe for use from a component in parallel mode and will throw an exception if used in such a manner.


**Parameters**:

* **macroName**: The name of the macro.


**Returns**:

A string representing the macro script language.



**Parameters**:

* BSTR **macroName**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1a7b92a22213e11d5f4b3ad8dfe7a894f9"></a>
### Function setMacroScriptLanguage

![][public]

```
void ModelCenter::IModelCenter::setMacroScriptLanguage(BSTR macroName, BSTR language)
```



Sets the language for a macro script






?> This method is not safe for use from a component in parallel mode and will throw an exception if used in such a manner.


**Parameters**:

* **macroName**: The name of the macro.
* **language**: The macro script language.



**Parameters**:

* BSTR **macroName**
* BSTR **language**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a9d209b30adb83ac9fe48f8efd1959f3a"></a>
### Function addNewMacro

![][public]

```
void ModelCenter::IModelCenter::addNewMacro(BSTR macroName, boolean isAppMacro)
```



Adds a new macro






**Parameters**:

* **macroName**: The name of the macro to show in the editor.
* **isAppMacro**: If true, the new macro will be an application macro. Otherwise, the new macro will be a model macro.



**Parameters**:

* BSTR **macroName**
* boolean **isAppMacro**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ab180eb62170146926e7a6c2384d5ad66"></a>
### Function launchMacroEditor

![][public]

```
void ModelCenter::IModelCenter::launchMacroEditor(BSTR macroName)
```



Launches the macro editor tool, and show the macro script corresponding to macroName






**Parameters**:

* **macroName**: the name of the macro to show in the editor. Just show the editor if the argument is null, or is not a valid macro name.



**Parameters**:

* BSTR **macroName**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a06c77786a3965c9ca7c72c6ba7af7ad3"></a>
### Function startGUIMode

![][public]

```
void ModelCenter::IModelCenter::startGUIMode([optional]VARIANT showDialogs)
```



THIS FUNCTION IS A BETA CAPABILITY





Normally when invoked via COM, [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) is in "server" mode and it hides all GUI and dialogs. This method can be invoked immediately after instantiating the [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) object to cause the GUI to be displayed. <br/>






Calling this method at any other time than immediately after creating the [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) object is NOT SUPPORTED. Strange behavior or even crashes will likely ensue if it is called at any other time.





Once this method is invoked, [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) may pop up GUI dialogs requiring user interaction at any time. This means your script may hang indefinitely if a user is not there to click through. For example, if a component fails to load on model load, the user would be prompted with the failed component dialog and the [loadModel()](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter_1ab57546e9e718895bbdfa25bc1b7d1e9d) api function would hang until the user answered the dialog.






**Parameters**:

* **showDialogs**: Boolean, that if true, will allow showing of startup dialogs such as the 'Recover Trade Study' dialog or 'Welcome to [ModelCenter](namespaceModelCenter.md#namespaceModelCenter)' dialog.



**Parameters**:

* _[optional]_ VARIANT **showDialogs**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a0f6aab6d238cbe899af59725ab0de842"></a>
### Function getNumUnitCategories

![][public]

```
long ModelCenter::IModelCenter::getNumUnitCategories()
```



Returns the number of unit categories in the [IModelCenter](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter) object.






**Returns**:

The number for unit categories, or -1 if there is an error.



**Return type**: long

<a id="interfaceModelCenter_1_1IModelCenter_1abe07ee5b95ed640b926a165f2e02b7f1"></a>
### Function getUnitCategoryName

![][public]

```
BSTR ModelCenter::IModelCenter::getUnitCategoryName(long index)
```



Returns the name of the category of a unit.






**Parameters**:

* **index**: Index of the unit.


**Returns**:

The name of the category, or empty string if there is an error.



**Parameters**:

* long **index**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1ad6a35e6ac78e89ddcd4a68023bcdd651"></a>
### Function getNumUnits

![][public]

```
long ModelCenter::IModelCenter::getNumUnits(BSTR category)
```



Returns the number of units inside a specified category.






**Parameters**:

* **category**: Specified category of units.


**Returns**:

The number of units, or -1 if there is an error.



**Parameters**:

* BSTR **category**

**Return type**: long

<a id="interfaceModelCenter_1_1IModelCenter_1aab8bb46de63e10f150e9614ea36d0b9a"></a>
### Function getUnitName

![][public]

```
BSTR ModelCenter::IModelCenter::getUnitName(BSTR category, long index)
```



Gets the name of the unit.






**Parameters**:

* **category**: Category to retrieve the unit.
* **index**: Index of the element in the category.


**Returns**:

The name of the unit, or empty string if there is an error.



**Parameters**:

* BSTR **category**
* long **index**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1ab18e9a5fa259695357cd26f155ee95dd"></a>
### Function createTradeStudy

![][public]

```
IDispatch * ModelCenter::IModelCenter::createTradeStudy(BSTR type, [optional]VARIANT setup)
```



Launches the specified trade study.






**Parameters**:

* **type**: The string identifier for the trade study that should be started.
* **setup**: The setup string.


**Returns**:

An IDispatch* to the trade study object.



**Parameters**:

* BSTR **type**
* _[optional]_ VARIANT **setup**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a375ab85c506633857e960502c208ed79"></a>
### Function getNetworkLocations

![][public]

```
IDispatch * ModelCenter::IModelCenter::getNetworkLocations()
```



Return a reference to the Network Locations object






**Returns**:

An IDispatch* to the [INetworkLocations](interfaceModelCenter_1_1INetworkLocations.md#interfaceModelCenter_1_1INetworkLocations) object.



**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1ac658a0c1392f2fd8b851794c9ac1896f"></a>
### Function saveVersionedModel

![][public]

```
void ModelCenter::IModelCenter::saveVersionedModel(VersionStatus versionStatus, BSTR checkinMessage)
```



Saves the current Model.






**Parameters**:

* **versionStatus**: how to go about versioning the model (and its submodels)
* **checkinMessage**: check-in message to be associated with the model (and its submodels)



**Parameters**:

* [VersionStatus](namespaceModelCenter.md#namespaceModelCenter_1a1abdd6ad1a16bfaa9539e9a1ccc3c1a0) **versionStatus**
* BSTR **checkinMessage**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ab65847c07b712a58acfe6a21659518b5"></a>
### Function saveVersionedModelAs

![][public]

```
void ModelCenter::IModelCenter::saveVersionedModelAs(BSTR fileName, VersionStatus versionStatus, BSTR checkinMessage)
```



Saves the current Model to a specified file.






**Parameters**:

* **fileName**: Path to save the Model in.
* **versionStatus**: how to go about versioning the submodel (and its submodels)
* **checkinMessage**: check-in message to be associated with the model (and its submodels)



**Parameters**:

* BSTR **fileName**
* [VersionStatus](namespaceModelCenter.md#namespaceModelCenter_1a1abdd6ad1a16bfaa9539e9a1ccc3c1a0) **versionStatus**
* BSTR **checkinMessage**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1aebbf42a396f1eea5b917d13b85e0fb8e"></a>
### Function getVariableMetaData

![][public]

```
LPDISPATCH ModelCenter::IModelCenter::getVariableMetaData(BSTR name)
```



Get metadata from a variable. Throws an exception if the variable is not found. 
**Parameters**:

* **name**: the full name of the variable


**Returns**:

the metadata, in the form of an IDHVariable (from [PHXDATAHISTORYLib](namespacePHXDATAHISTORYLib.md#namespacePHXDATAHISTORYLib))



**Parameters**:

* BSTR **name**

**Return type**: LPDISPATCH

<a id="interfaceModelCenter_1_1IModelCenter_1a27b453e8058a238c25049c8fcb5121e4"></a>
### Function dumpComDebug

![][public]

```
void ModelCenter::IModelCenter::dumpComDebug()
```



Dump COM debug information to TRACE(); only has an effect in debug builds.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a9dabff9569cfbb6c65ccdae26aab3ff7"></a>
### Function showFileBrowseDialog

![][public]

```
BSTR ModelCenter::IModelCenter::showFileBrowseDialog(BSTR title, [optional]VARIANT filters, [optional]VARIANT initialUri, [optional]VARIANT hwnd)
```



Displays file selection for loading dialog and returns URI of selected file. 
**Parameters**:

* **title**: title of dialog window
* **filters**: array of file type filters
* **initialUri**: initialUri to use in dialog
* **hwnd**: the window handle to which to parent the dialog


**Returns**:

URI of selected file, or empty string if none selected



**Parameters**:

* BSTR **title**
* _[optional]_ VARIANT **filters**
* _[optional]_ VARIANT **initialUri**
* _[optional]_ VARIANT **hwnd**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1a23ea9bc699e8f31401f96d2594f79ae6"></a>
### Function showFileSaveDialog

![][public]

```
BSTR ModelCenter::IModelCenter::showFileSaveDialog(BSTR title, int *selectedFilter, [optional]VARIANT initialFilename, [optional]VARIANT filters, [optional]VARIANT initialUri, [optional]VARIANT hwnd)
```



Displays file selection for saving dialog and returns URI of selected file. 
**Parameters**:

* **title**: title of dialog window
* **selectedFilter**: the number of the filter selected
* **initialFilename**: the filename to populate the save dialog with
* **filters**: array of file type filters
* **initialUri**: initialUri to use in dialog
* **hwnd**: the window handle to which to parent the dialog


**Returns**:

URI of selected file, or empty string if none selected



**Parameters**:

* BSTR **title**
* int * **selectedFilter**
* _[optional]_ VARIANT **initialFilename**
* _[optional]_ VARIANT **filters**
* _[optional]_ VARIANT **initialUri**
* _[optional]_ VARIANT **hwnd**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1a156c716bde56ad5bc070f00e2037a2da"></a>
### Function setLoginCallback

![][public]

```
void ModelCenter::IModelCenter::setLoginCallback(IDispatch *callback)
```



Sets the login callback to use for authentication. 
**Parameters**:

* **callback**: callback to use



**Parameters**:

* IDispatch * **callback**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a5f2d90be1a4bed0126993b3021d24981"></a>
### Function createDataHistoryVariable

![][public]

```
IDispatch * ModelCenter::IModelCenter::createDataHistoryVariable()
```



Create an IDHVariable object.



**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a38682504615aef9e603a9c2f3d4bd2e8"></a>
### Function getRunOnlyMode

![][public]

```
boolean ModelCenter::IModelCenter::getRunOnlyMode()
```



Gets the status of [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) being in Run-Only Mode.






**Returns**:

true if [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) is in Run-Only Mode; otherwise, false



**Return type**: boolean

<a id="interfaceModelCenter_1_1IModelCenter_1aba91dde2a4c0674816c3781ed873457e"></a>
### Function setRunOnlyMode

![][public]

```
void ModelCenter::IModelCenter::setRunOnlyMode(boolean shouldBeInRunOnly)
```



Sets the status of [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) being in Run-Only Mode to the specified value.





Note: This function can only be called if it is the first function to be called on a new [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) object; otherwise, it will throw an exception. This is to ensure that the correct [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) license is checked out. 






**Parameters**:

* **shouldBeInRunOnly**: true if [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) should be in Run-Only Mode; otherwise, false



**Parameters**:

* boolean **shouldBeInRunOnly**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a3edba311337bb171b956e0d331cfa05f"></a>
### Function createDataExplorer

![][public]

```
IDispatch * ModelCenter::IModelCenter::createDataExplorer(BSTR tradeStudyType, BSTR setup)
```



Creates a new Data Explorer. This documentation assumes you're creating it for a trade study; if you're not you can pass almost anything in for tradeStudyType or setup.






**Parameters**:

* **tradeStudyType**: Registry ID of the Plug-In. This is obtained by calling the [getRegID ](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1ac0dd856b24d06484c6ded0aba0199016) method of the IAddToModel* object that is passed into the Plug-In's construct method.
* **setup**: A string that is generated from the Plug-In's "toString" method that can be restored later by the Plug-In's "fromString" method.


**Returns**:

IDispatch* to an [PHXDATAEXPLORERLib::\_DPHXDataExplorer](interfacePHXDATAEXPLORERLib_1_1__DPHXDataExplorer.md#interfacePHXDATAEXPLORERLib_1_1__DPHXDataExplorer) object.



**Parameters**:

* BSTR **tradeStudyType**
* BSTR **setup**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a6d6d38245d99b3f53fda689a1adee17f"></a>
### Function getFileSystemInfo

![][public]

```
IDispatch * ModelCenter::IModelCenter::getFileSystemInfo(BSTR url)
```



Gets the FileSystemInfo for a given URL.






**Parameters**:

* **url**: the url for which to load a file system info



**Parameters**:

* BSTR **url**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1aa2ca200dd05dc8257c35af74035459e1"></a>
### Function SAFEARRAY

![][public]

```
ModelCenter::IModelCenter::SAFEARRAY(BSTR) getTradeStudyFilters()
```



Returns an array containing a list of FileDialog filters for [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) trade study files. 
**Returns**:

SAFEARRAY of filters for use in FileDialog of the files used by trade studies



**Parameters**:

* BSTR

**Return type**: 

<a id="interfaceModelCenter_1_1IModelCenter_1af139d41f66681c63c80243adbd48cbc0"></a>
### Function saveTradeStudy

![][public]

```
void ModelCenter::IModelCenter::saveTradeStudy(BSTR uri, int format, LPDISPATCH dataExplorer)
```



Save the trade study currently loaded in the DataExplorer to the given URI. It will overwrite the file if it exists. Note: Saving in pxt/pxtz formats will only save legacy plots and not the new plot types. Use tstudy(TS_FORMAT_TSTUDY) format to save all plots. 
**Parameters**:

* **uri**: the uri to write the trade study to
* **format**: the file format to be used when saving the trade study. Must be set to TS_FORMAT_TSTUDY. See [TradeStudyFormat](namespaceModelCenter.md#namespaceModelCenter_1af45bfe44662b4647910a30bb0ba41dca) enumeration.
* **dataExplorer**: the data explorer from which to take trade study data



**Parameters**:

* BSTR **uri**
* int **format**
* LPDISPATCH **dataExplorer**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a59b46ca7b15c869fb190ecfeb70bf90a"></a>
### Function getDataCollectorForDataExplorer

![][public]

```
IDispatch * ModelCenter::IModelCenter::getDataCollectorForDataExplorer(LPDISPATCH dataExplorer)
```



Retrieves a pointer to the Data Collector for the specified Data Explorer.






**Parameters**:

* **dataExplorerPtr**: The Data Explorer pointer for which to retrieve a Data Collector


**Returns**:

IDispatch* to the [IDataCollector](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector) object for the specified Data Explorer



**Parameters**:

* LPDISPATCH **dataExplorer**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a434995395fc673c8197bfde7e1256240"></a>
### Function launchDataCollectorPlugIn

![][public]

```
void ModelCenter::IModelCenter::launchDataCollectorPlugIn(BSTR plugInName, LPDISPATCH dataExplorer)
```



Launches a specific Data Collector PlugIn, by name, on the specified Data Explorer.






**Parameters**:

* **plugInName**: The name of the Data Collector PlugIn to be launched
* **dataExplorer**: The Data Explorer for which to launch the PlugIn



**Parameters**:

* BSTR **plugInName**
* LPDISPATCH **dataExplorer**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a255ea30feb95451802aa280bdffcd7b8"></a>
### Function guiLoadFile

![][public]

```
boolean ModelCenter::IModelCenter::guiLoadFile(BSTR fileName)
```



Loads a file in "GUI" mode, that is, unlike loadFile(...), will produce a prompt to the user to verify whether or not any currently opened model should be saved prior to loading the given file.






**Parameters**:

* **fileName**: Path of the file to load.


**Return values**:

* **true**: if the save was not canceled
* **false**: if the save was canceled



**Parameters**:

* BSTR **fileName**

**Return type**: boolean

<a id="interfaceModelCenter_1_1IModelCenter_1a8ad33e25dfad91e8ba248d399a1b6449"></a>
### Function guiSaveModel

![][public]

```
void ModelCenter::IModelCenter::guiSaveModel()
```



Saves the currently open file in "GUI" mode; unlike saveModel, this can pop up a save dialog (if the file has not already been saved). It will use [ModelCenter](namespaceModelCenter.md#namespaceModelCenter)'s logic to determine what to do about versioned files.



**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a18766ae9a0fda73f8febdb709adfceea"></a>
### Function getMacroTimeout

![][public]

```
double ModelCenter::IModelCenter::getMacroTimeout(BSTR macroName)
```



Gets a macro's timeout.






?> This method is not safe for use from a component in parallel mode and will throw an exception if used in such a manner.


**Parameters**:

* **macroName**: The name of the macro.


**Returns**:

Number of seconds to allow a script to run before canceling it; -1 indicates no timeout.



**Parameters**:

* BSTR **macroName**

**Return type**: double

<a id="interfaceModelCenter_1_1IModelCenter_1a559cd3b9f0e68e5ecc2c4006c8014667"></a>
### Function setMacroTimeout

![][public]

```
void ModelCenter::IModelCenter::setMacroTimeout(BSTR macroName, double timeout)
```



Sets a macro's timeout.






?> This method is not safe for use from a component in parallel mode and will throw an exception if used in such a manner.


**Parameters**:

* **macroName**: The name of the macro.
* **timeout**: The number of seconds to allow a script to run before canceling it; -1 indicates no timeout.



**Parameters**:

* BSTR **macroName**
* double **timeout**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a8708a9033fcd77731539b085a1c6c047"></a>
### Function guiCloseAllMultiplexers

![][public]

```
boolean ModelCenter::IModelCenter::guiCloseAllMultiplexers()
```



Attempts to close the DataExplorers of all vizualization multiplexers. 
**Returns**:

true if the user allowed all multiplexers to close.



**Return type**: boolean

## Private functions

<a id="interfaceModelCenter_1_1IModelCenter_1a83b97e8dd461f4bc8fbe5cdc63809b74"></a>
### Function setAlternateParentFrame

![][private]

```
void ModelCenter::IModelCenter::setAlternateParentFrame(long hwnd)
```







**Parameters**:

* long **hwnd**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a24cc8bd489975150c9d5c5c3e9502b87"></a>
### Function destroyPlugInFrame

![][private]

```
void ModelCenter::IModelCenter::destroyPlugInFrame(long hwnd)
```







**Parameters**:

* long **hwnd**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ad1fc33915ad5917cd645e795251f01de"></a>
### Function showPlugInFrame

![][private]

```
void ModelCenter::IModelCenter::showPlugInFrame(long hwnd)
```







**Parameters**:

* long **hwnd**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a806cc1860aaadaa5496d4caa0a51fe91"></a>
### Function hidePlugInFrame

![][private]

```
void ModelCenter::IModelCenter::hidePlugInFrame(long hwnd)
```







**Parameters**:

* long **hwnd**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a65a6502ad779fd4394d06f45adabc398"></a>
### Function setIconPlugInFrame

![][private]

```
void ModelCenter::IModelCenter::setIconPlugInFrame(long hwnd, BSTR iconFile)
```







**Parameters**:

* long **hwnd**
* BSTR **iconFile**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1aae5eb45abe323ca501a777f31b9ae5b8"></a>
### Function launchHTMLViewer

![][private]

```
long ModelCenter::IModelCenter::launchHTMLViewer(BSTR url, boolean popup)
```







**Parameters**:

* BSTR **url**
* boolean **popup**

**Return type**: long

<a id="interfaceModelCenter_1_1IModelCenter_1a2d684049210e4062f14cf2e3e2abb031"></a>
### Function runAntFile

![][private]

```
void ModelCenter::IModelCenter::runAntFile(BSTR fileName)
```







**Parameters**:

* BSTR **fileName**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a2fac8021991150ab97e3673e4b0c0dc1"></a>
### Function getGlobalParameters

![][private]

```
IDispatch * ModelCenter::IModelCenter::getGlobalParameters()
```







**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a46b4e01256fa252da2f589af87833ac1"></a>
### Function closeHTMLViewer

![][private]

```
boolean ModelCenter::IModelCenter::closeHTMLViewer(long hwnd)
```







**Parameters**:

* long **hwnd**

**Return type**: boolean

<a id="interfaceModelCenter_1_1IModelCenter_1ad62471b3a17a7b182d7f8fa0df7048b7"></a>
### Function HTMLViewerWaitForClose

![][private]

```
void ModelCenter::IModelCenter::HTMLViewerWaitForClose(long hwnd)
```







**Parameters**:

* long **hwnd**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1ad6f56123c0b435ffca19628deaa4169f"></a>
### Function HTMLViewerGetMyHWND

![][private]

```
long ModelCenter::IModelCenter::HTMLViewerGetMyHWND()
```







**Return type**: long

<a id="interfaceModelCenter_1_1IModelCenter_1a931fee19976a7a03e263284ec0ee9d53"></a>
### Function getActiveJobManager

![][private]

```
IDispatch * ModelCenter::IModelCenter::getActiveJobManager()
```







**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1aadc031780e0355e1ca2bba83cb13441a"></a>
### Function getPreference

![][private]

```
VARIANT ModelCenter::IModelCenter::getPreference(BSTR pref)
```



Gets preference value for the given key (pref). Note: Parses preference value in following order: Bool -> long -> double -> string 
**Parameters**:

* **preference**: (key) value to get value for


**Returns**:

preference value as a variant. <br/>



**Parameters**:

* BSTR **pref**

**Return type**: VARIANT

<a id="interfaceModelCenter_1_1IModelCenter_1ae91fcfa7f9dfe5fa3df62fb9d3c703c8"></a>
### Function internalLicensing

![][private]

```
void ModelCenter::IModelCenter::internalLicensing(BSTR, long)
```







**Parameters**:

* BSTR
* long

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a23a3683a4c5b5f4380e33232e2ca30be"></a>
### Function transformAVPoint

![][private]

```
void ModelCenter::IModelCenter::transformAVPoint(int x, int y, boolean screen, VARIANT *tx, VARIANT *ty)
```







**Parameters**:

* int **x**
* int **y**
* boolean **screen**
* VARIANT * **tx**
* VARIANT * **ty**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a7dc06d52fa432893eaf74db606db3864"></a>
### Function parallelInstance

![][private]

```
IDispatch * ModelCenter::IModelCenter::parallelInstance()
```







**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1a21a60528e3b43cbbbbc131adaf5a1151"></a>
### Function unAssociatedInstance

![][private]

```
IDispatch * ModelCenter::IModelCenter::unAssociatedInstance()
```







**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IModelCenter_1acb8cad870e072bee4a80b1902476929a"></a>
### Function configureLogging

![][private]

```
void ModelCenter::IModelCenter::configureLogging(boolean enableLogging)
```



Configures the [ModelCenter](namespaceModelCenter.md#namespaceModelCenter) logger, currently used for testing.






**Parameters**:

* **enableLogging**: Set to true to enable the logger.



**Parameters**:

* boolean **enableLogging**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1a70666088b3363b2c9738cd15ec446d8e"></a>
### Function setXMLExtension

![][private]

```
void ModelCenter::IModelCenter::setXMLExtension(BSTR xml)
```



Adds the XML as an XML extension node to the model file.






**Parameters**:

* **xml**: The XML string.



**Parameters**:

* BSTR **xml**

**Return type**: void

<a id="interfaceModelCenter_1_1IModelCenter_1af94e33f84d46652cfad0af931db0d59b"></a>
### Function getXMLExtension

![][private]

```
BSTR ModelCenter::IModelCenter::getXMLExtension(BSTR nodeName, BSTR attributeName, BSTR attributeValue)
```



Gets an XML extension node from the model file that matches the specified query.






**Parameters**:

* **nodeName**: Name of the XML root tag.
* **attributeName**: Name of a distinguishing attribute for the XML tag.
* **attributeValue**: Value of the attribute.


**Returns**:

<br/>



**Parameters**:

* BSTR **nodeName**
* BSTR **attributeName**
* BSTR **attributeValue**

**Return type**: BSTR

<a id="interfaceModelCenter_1_1IModelCenter_1ac7c886a8b0333b565333d6b16d9ab824"></a>
### Function setPreference

![][private]

```
void ModelCenter::IModelCenter::setPreference(BSTR pref, BSTR value)
```







**Parameters**:

* BSTR **pref**
* BSTR **value**

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)