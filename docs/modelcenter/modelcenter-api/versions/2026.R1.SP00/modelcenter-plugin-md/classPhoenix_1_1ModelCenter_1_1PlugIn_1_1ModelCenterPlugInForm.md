<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm"></a>
# Class Phoenix::ModelCenter::PlugIn::ModelCenterPlugInForm

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterPlugInForm.cs` (line 12)

Base plug-in form.



**Inherits from**:

* Form

## Members

* [busyFlag](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a92766218db251442a3a0c06b6f725db9)
* [EnableControls](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a780512a82b9cb1163952070c89d70f91)
* [EnableControlsInternal](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a5f1efcabd5c2bcf929127619ebb1357e)
* [InDesignMode](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a086ca0eaeb197f7e287f1f77ecad348f)
* [IsBusy](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1ae57de18c3d0172f149ff67e06be419db)
* [OnClosed](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a591b44f917aab51212488c3c73f13e30)
* [OnLoad](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a5d4efc8744fbdda84145b324b43348d9)
* [PassTabToCurrentControl](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1adf97b1ccf6aa136aa30f2ac4415c6162)
* [PlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a4438ddbb8e907eb65ec2fd61f0f69687)
* [ProcessKeyPreview](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a6f517eeb3a2797b39da1318a22c50237)
* [shift](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a0e4b0b44e9db426dbf92195a09cd5d5f)
* [ShowAboutBox](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a59cf07bdda584023b6e7c6e242232d53)

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a92766218db251442a3a0c06b6f725db9"></a>
### Variable busyFlag

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterPlugInForm.cs` (line 14)


```csharp
bool Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.busyFlag = false
```








**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.busyFlag"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a0e4b0b44e9db426dbf92195a09cd5d5f"></a>
### Variable shift

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterPlugInForm.cs` (line 15)


```csharp
bool Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.shift = false
```








**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.shift"}]}`
-->

## Properties

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1ae57de18c3d0172f149ff67e06be419db"></a>
### Property IsBusy

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterPlugInForm.cs` (line 23)


```csharp
bool Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.IsBusy
```


sets the busy status of the form. When busy, the cursor is changed and many things are grayed out





**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.IsBusy"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a4438ddbb8e907eb65ec2fd61f0f69687"></a>
### Property PlugIn

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterPlugInForm.cs` (line 71)


```csharp
IDotNetPlugIn Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.PlugIn
```


Get the component plug-in object. Null in design mode.





**Return type**: [IDotNetPlugIn](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.PlugIn"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a086ca0eaeb197f7e287f1f77ecad348f"></a>
### Property InDesignMode

![][protected]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterPlugInForm.cs` (line 77)


```csharp
bool Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.InDesignMode
```


Determine if the current form is being displayed in design mode; members like [PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn) are not available at design time.





**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.InDesignMode"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1adf97b1ccf6aa136aa30f2ac4415c6162"></a>
### Property PassTabToCurrentControl

![][protected]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterPlugInForm.cs` (line 115)


```csharp
virtual bool Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.PassTabToCurrentControl
```


Because of the way .NET COM plug-ins receive key messages, the base form does not properly process the TAB key to cycle along the TAB order. We have put in code to fix this, but it may prevent other controls from receiving TAB key events. Override this method to allow some or all controls to receive the TAB key and prevent cycling to the next control in the TAB order.

**Returns**:

Whether the currently-focused control on this form should process the TAB key. Default is false.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.PassTabToCurrentControl"}]}`
-->

## Protected functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a5f1efcabd5c2bcf929127619ebb1357e"></a>
### Function EnableControlsInternal

![][protected]


```csharp
virtual void Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.EnableControlsInternal()
```


Enable-disable controls as needed based on the state of the GUI. Does the actual work; guaranteed to be called on the GUI thread. Do not call directly.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.EnableControlsInternal"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a780512a82b9cb1163952070c89d70f91"></a>
### Function EnableControls

![][protected]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.EnableControls()
```


Enable-disable controls as needed based on the state of the GUI. Call this method; it will call [EnableControlsInternal()](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a5f1efcabd5c2bcf929127619ebb1357e) on the correct thread.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.EnableControls"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a5d4efc8744fbdda84145b324b43348d9"></a>
### Function OnLoad

![][protected]


```csharp
override void Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.OnLoad(EventArgs e)
```


Ensure that the plug-in is set before the form is shown.

**Parameters**:

* **e**: The event arguments that describes the load event



**Parameters**:

* EventArgs **e**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.OnLoad"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a6f517eeb3a2797b39da1318a22c50237"></a>
### Function ProcessKeyPreview

![][protected]


```csharp
override bool Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.ProcessKeyPreview(ref Message m)
```


In COM plug-ins, Tabs get lost. This is one way to make sure they don't if we don't want them to.

**Parameters**:

* **m**: The message being processed


**Returns**:

True if we handled the message



**Parameters**:

* ref Message **m**

**Return type**: override bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.ProcessKeyPreview"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a591b44f917aab51212488c3c73f13e30"></a>
### Function OnClosed

![][protected]


```csharp
override void Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.OnClosed(EventArgs e)
```


Bring the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) window to the top when this window is closed.

**Parameters**:

* **e**: The event args



**Parameters**:

* EventArgs **e**

**Return type**: override void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.OnClosed"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm_1a59cf07bdda584023b6e7c6e242232d53"></a>
### Function ShowAboutBox

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.ShowAboutBox()
```


Show the "about" dialog for this plug-in.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterPlugInForm.ShowAboutBox"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)