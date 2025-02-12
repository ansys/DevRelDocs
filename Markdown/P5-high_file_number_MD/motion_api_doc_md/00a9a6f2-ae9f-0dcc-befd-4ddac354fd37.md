# IOMatrix Interface
 

This interface is to represent the orientation matrix.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public interface IOMatrix
```

**VB**<br />
``` VB
Public Interface IOMatrix
```

**C++**<br />
``` C++
public interface class IOMatrix
```

**F#**<br />
``` F#
type IOMatrix =  interface end
```

The IOMatrix type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="08e5806b-1118-56df-b58a-b091218cca5f">Array</a></td><td>
Gets or sets the data of OMatrix.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="87a06bb4-877b-91ba-d3ab-c4171b9d12f0">XVector</a></td><td>
Gets the XVector.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="c7641874-b353-688f-8ff8-06ce8cdb1788">YVector</a></td><td>
Gets the YVector.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="c0633232-c3a4-4329-aea2-9abbdbb69ec8">ZVector</a></td><td>
Gets the ZVector.</td></tr></table>&nbsp;
<a href="#iomatrix-interface">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f1ee4f02-46d1-7b09-df1c-1eb89c7d7491">GetDirectionVector(Coordinate)</a></td><td>
Get the direction vector for axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="8a7a3fb8-c6a7-faa8-2c9e-ebf8dc4d3f01">GetDirectionVector(UInt32)</a></td><td>
Get the direction vector for axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="82607aa0-a7a5-fdd6-ad6a-d25484373cd8">Initialize</a></td><td>
Initializes a instance of OMatrix.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="93ff93b0-ff4e-7183-a59e-a801151082dd">Normalize</a></td><td>
Nomalize a instance of OMatrix.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="20e2e20f-704c-2c63-37ac-70fbf91aa78c">RotateAxisDeg(Coordinate, Double)</a></td><td>
To rotate counterclockwise for coordinate.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="2833a3f0-6fb5-34a6-3bea-214f5afb8515">RotateAxisDeg(UInt32, Double)</a></td><td>
To rotate counterclockwise for coordinate.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d9793ad9-fadf-3ae3-5bfd-7858e9ffb25b">RotateAxisDeg(VectorBase, Double)</a></td><td>
To rotate counterclockwise for axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="0514e1f1-4deb-4401-dcb1-48f35b468b59">RotateAxisRad(Coordinate, Double)</a></td><td>
To rotate counterclockwise for coordinate.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="54da2f0c-dfe7-db32-1951-d2b5eddd45b3">RotateAxisRad(UInt32, Double)</a></td><td>
To rotate counterclockwise for coordinate.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="3e870a7e-a32d-2601-d370-4903e1bc4d83">RotateAxisRad(VectorBase, Double)</a></td><td>
To rotate counterclockwise for axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="67b07d13-43f3-c086-78f5-0a826da01e98">RotateXDeg</a></td><td>
To rotate counterclockwise for x-axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="34122a82-cc4a-1715-b7b8-684e1c4f58f3">RotateXRad</a></td><td>
To rotate counterclockwise for x-axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="2103f8cd-2a39-2323-f623-9f2a44a784d8">RotateYDeg</a></td><td>
To rotate counterclockwise for y-axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f40b5026-bc01-bd65-7df0-a76281683be1">RotateYRad</a></td><td>
To rotate counterclockwise for y-axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f2037238-e417-dadd-4987-910f3362444e">RotateZDeg</a></td><td>
To rotate counterclockwise for z-axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="3c103d43-1bfc-55fc-a729-a3450fe67ef1">RotateZRad</a></td><td>
To rotate counterclockwise for z-axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="70488fe5-0d03-a2d2-402a-cf7518a07c6e">SetOrientation(Double[])</a></td><td>
Set data of orientation.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="32338a49-f81f-18b5-fa9b-99195e8a3b35">SetOrientation(OMatrix)</a></td><td>
Set data of orientation.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c4f7b897-982a-afc1-52b9-cd74468ad849">SetOrientation(Plane, VectorBase, VectorBase)</a></td><td>
Set data of orientation.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="6838caa7-d3fe-8ba5-524c-a3a9aebb3d1e">SetOrientationEADeg</a></td><td>
Set data of orientation for euler angle. Unit is degree.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d9554341-43f8-d864-b1f4-4fb5cd3edfa9">SetOrientationEARad</a></td><td>
Set data of orientation for euler angle. Unit is radian.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d4c391f4-2e52-a4b6-3311-d7c4145c737c">SetOrientationFixedAngleDeg</a></td><td>
Set data of orientation for fixed angle. Unit is degree.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="489533cb-0956-4d0e-891e-26fddeefa77c">SetOrientationFixedAngleRad</a></td><td>
Set data of orientation for fixed angle. Unit is radian.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5dda6ae7-fb9d-4669-6781-58fb67e353d9">TransposeOrientation</a></td><td>
Transposed rows and columns of the matrix.</td></tr></table>&nbsp;
<a href="#iomatrix-interface">Back to Top</a>

## See Also


#### Reference
<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />