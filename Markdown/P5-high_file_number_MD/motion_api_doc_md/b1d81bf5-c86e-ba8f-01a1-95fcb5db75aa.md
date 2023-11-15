# IChainedSegmentInfo.GetListContact Method 
 

Gets the array of contact geometry.

**Namespace:**&nbsp;<a href="5c907013-811e-af21-bd63-e55b810522b2">VM.Managed.DAFUL.Chained</a><br />**Assembly:**&nbsp;VMDChainedBase (in VMDChainedBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
ObjectBase[] GetListContact()
```

**VB**<br />
``` VB
Function GetListContact As ObjectBase()
```

**C++**<br />
``` C++
array<ObjectBase^>^ GetListContact()
```

**F#**<br />
``` F#
abstract GetListContact : unit -> ObjectBase[] 

```


#### Return Value
Type: <a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">ObjectBase</a>[]<br />The array of contact geometry(FaceSet,PatchSet).

#### Return Value
Type: <a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">ObjectBase</a>[]<br />`true` if the specified <a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">ObjectBase</a> include the following property <a href="a0548a65-f5d2-8c6d-2224-e522ac1b9ce9">IChainedSegmentContact</a> ; otherwise, `false`

## See Also


#### Reference
<a href="f7b030df-96b8-6940-839b-ec09ffc7360a">IChainedSegmentInfo Interface</a><br /><a href="5c907013-811e-af21-bd63-e55b810522b2">VM.Managed.DAFUL.Chained Namespace</a><br />