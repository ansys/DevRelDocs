# NodalBody Methods
 

The <a href="72817298-1cee-18c3-77a8-5f3be9c3f12f">NodalBody</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="09fd530c-1097-8206-35b0-21d518686d47">ChangeNodalModal</a></td><td>
Change Nodal or Modal.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="74ca3a72-da6f-63ec-84eb-a7de670717eb">Create(SubSystemDocument, String, MeshDocument)</a></td><td>
Create New <a href="72817298-1cee-18c3-77a8-5f3be9c3f12f">NodalBody</a> class with given <a href="81b82f27-b132-a943-3b65-bc5477a0903d">MeshDocument</a> with identity transformation.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="284f8837-34d2-336f-4b2a-ee20a5e41a3c">Create(SubSystemDocument, String, MeshDocument, TransformBase)</a></td><td>
Create New <a href="72817298-1cee-18c3-77a8-5f3be9c3f12f">NodalBody</a> class with given <a href="81b82f27-b132-a943-3b65-bc5477a0903d">MeshDocument</a> and <a href="0257b55b-f437-6f07-b674-7156d6d4b79b">Transformation</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="04c724ed-aa47-c11c-3773-f41fafda41f4">FindLocal</a></td><td> (Overrides <a href="5bd73d8e-ed05-dd0e-2b30-d0b4982a2c32">InstanceContainer.FindLocal(String)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="dd5c0465-2498-c5d3-0e90-6459c795fc9c">FixUp</a></td><td>
Before destroy the old object, perform a work.
 (Overrides <a href="9aa35189-48df-9809-b441-fa819a6be04e">SubEntity.FixUp(ObjectBase)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f61b9c30-5353-a454-2664-098f7a49338c">GetContactables</a></td><td>
Gets the contactable list.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="aeb9c8ce-65c8-47bb-f1b0-216e6e6c98ff">GetElementInformation</a></td><td>
Get element information.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="b239dc64-410f-1f98-a5bb-65ce6f34996a">GetGeometryNavigatorInformation</a></td><td>
Gets the geometry information for model navigator .</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="36f7b2ca-32dc-6259-8e62-a23ea5a61863">GetMassPropImpl</a></td><td /></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="61d872dd-60c3-d4ab-414d-b04796f5202b">GetMeshesImpl</a></td><td /></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="ce8f305d-00e9-2f9e-1af2-ae329af4ab07">GetModelNavigatorInformationImpl</a></td><td>
Gets the object information for model navigator [implementation].
 (Overrides <a href="3b3840ee-1cb0-ce9c-3e65-2931e13655f8">SubEntity.GetModelNavigatorInformationImpl(XmlDocument, XmlElement, Boolean)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="10e7288b-57b7-5ba6-f547-ba9adbfb376f">GetNodePositions</a></td><td>
Get node position.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="555fdfbc-f117-924a-dd90-d5037011580a">GetNodePositionsForMesh</a></td><td>
Get node position for mesh.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="59948d70-f858-7c22-32f5-2f8177141d70">GetPointDirection</a></td><td>
Gets the point direction.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9025bf2b-58a5-69df-e7b5-45bda046615e">InitBodyType(BodyAnalysisType)</a></td><td>
Initialize body type.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="ff084a49-4bdc-19b5-9a14-bb85cb7a8d9d">InitBodyType(BodyAnalysisType, Boolean)</a></td><td>
Initialize body type.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d63a27f8-b3bf-0bcc-4e2b-aff65d452bfd">Initialize</a></td><td>
Initializes member through unit convert factor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c368c6f5-cb7f-e770-0adb-72eacc7d49ce">InitInterfaceTable</a></td><td>
Initialize the interface table.
 (Overrides <a href="db0e4a5a-159c-3c3f-4ab3-29c9574d06fc">InstanceContainer.InitInterfaceTable()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="e7bc3b78-b373-1f1e-1ee9-d9b036fa330c">IsAutoContactable</a></td><td /></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f846b124-1e9b-f192-2572-33aef8394459">IsDestroyContainer</a></td><td>
Determines whether is [destroy container].
 (Overrides <a href="9e07e540-dade-4388-2884-efcea5ca4b7a">InstanceContainer.IsDestroyContainer()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="85d6040d-63a9-abb3-58a2-8525d4ba2898">IsOnlyLinearMaterial</a></td><td>
Determines whether refer linear material only.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="84404a6c-5df6-e418-a68a-1a94be1c3d1c">IsReadDFN</a></td><td>
Get indicates dfn file has been read.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="28c03b56-a29d-803b-3f13-9bcf6c3d27ab">LinkRequestUpdate</a></td><td>
Request for update the linked object.
 (Overrides <a href="b6a29ee7-2c7f-73c8-ae2f-9ee0ac055011">InstanceContainer.LinkRequestUpdate(Object, LinkEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="cb81c15f-fc0b-0c50-5f28-ff90bc42479e">OnDeserialization</a></td><td> (Overrides <a href="5ced640a-e4f7-dd07-b907-7bfceb3c6ee4">InstanceContainer.OnDeserialization(Object)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9e7c5666-db4b-6a34-2aa8-faac6857822c">PostOpenDocumentAfterHookEvent</a></td><td>
Call when post [open document] after hook event.
 (Overrides <a href="f46a6166-bdb7-1e8c-5c2c-5cacad6f64f3">InstanceContainer.PostOpenDocumentAfterHookEvent()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="91df0778-07c7-b9f1-7e0a-3862a12f85b2">ProcessDuplicateReferenceImpl</a></td><td>
Process for duplicated reference
 (Overrides <a href="73f76173-9432-b218-dc76-b22b3763d903">InstanceContainer.ProcessDuplicateReferenceImpl(Reference)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="96d7fb30-eb3b-8a8f-dc9e-7f1742607ead">ReadTemplateImpl</a></td><td>
Reads the template document [implementation].
 (Overrides <a href="ae3e3e0c-2447-f7d1-36a3-3b846990da51">SubEntity.ReadTemplateImpl(XmlReader)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="66ebeb3b-a763-1bd6-d123-3959945142fa">ReAssembly</a></td><td /></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="b01acfda-501d-a065-b03a-3cabb918f178">Redraw</a></td><td>
Redraw.
 (Overrides <a href="ae928b65-1f97-2a85-b7e9-cd4c55f4bc99">InstanceContainer.Redraw()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="6aa103c2-2c6e-f3bf-3834-6b579b195ff0">RemoveDuplicatedReference</a></td><td>
Remove duplicated reference</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="335732f6-898e-a2de-6ec3-aab74868e91a">SetBodyAnalysisType</a></td><td /></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="edf3dda9-dee4-135a-3c39-8eea67ac8967">SetMassPropImpl</a></td><td /></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="e7a180c4-7ec8-0ec1-a3a9-34a246d70da6">SetNodeElementInformation</a></td><td>
Set node and element information.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="52bbdae7-fb47-7b9c-4012-17f316363297">SetNodePositions(String)</a></td><td>
Set node position for mesh.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="18be427a-a983-2d9c-35cd-a25caf0c50df">SetNodePositions(Vector[], OMatrix[])</a></td><td>
Set node position for mesh.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="e2a07a05-96a3-becb-5318-eb599ecbc8ee">TransformImpl</a></td><td> (Overrides <a href="9d54b1e0-9e47-97ec-794d-ad6eb239a802">InstanceContainer.TransformImpl(TMatrix)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="8f894c7a-cdc5-8e8c-8050-4753e178ad24">WriteTemplateImpl</a></td><td>
Writes the template document [implementation].
 (Overrides <a href="8188fb71-5e18-6d68-6147-b7c47a4b8015">SubEntity.WriteTemplateImpl(XmlWriter)</a>.)</td></tr></table>&nbsp;
<a href="#nodalbody-methods">Back to Top</a>

## See Also


#### Reference
<a href="72817298-1cee-18c3-77a8-5f3be9c3f12f">NodalBody Class</a><br /><a href="4185d9bf-f8be-353d-9677-02b24c2871aa">VM.Managed.DAFUL.FE Namespace</a><br />