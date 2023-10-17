<a id="classansys_1_1dpf_1_1Workflow"></a>
# Class ansys::dpf::Workflow

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 2841)

Group a set of connected operators in order to define a whole data treatment.

Operators can be chained together to create workflows. To do so, the user only needs to connect some operator's outputs to an other operator's inputs. With workflows, lazy evaluation is performed, which means that when the last operator's outputs are asked by the user, all the connected operators will also be evaluated (and not before) to compute a given result.





The different operators contained in a workflow can be internally connected together so that the end user doesn't need to be aware of its complexity. The workflow only needs to expose the necessary inputs pin and output pins. For example, a workflow could expose a "time scoping" input pin and a "data sources" input pin and expose a "result" output pin and have very complex routines inside it.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

**Inherited by**:

* [ansys::dpf::RemoteWorkflow](classansys_1_1dpf_1_1RemoteWorkflow.md#classansys_1_1dpf_1_1RemoteWorkflow)

## Members

* [add](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a794c8ac3fdd9459ebfe87f3962936a81)
* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1ef954a45b178eac4de68813168db6fb)
* [chainWith](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a36001ca148e2ca1f6d0518d3aefad5dd)
* [chainWith](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1afdb94d06a19ad7f8288a462d7e58b2aa)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a5ddc7a186d7f778073ef81c57d42d367)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ab47934497d52355ac422efa57677ff75)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6ce835a6bd7213846e9f2a54c3c0a26b)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a0359e496cfe9ef8b635df5ced09ee4ed)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a784a219175f41f4a6c7da7703f45defe)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a2bbb7a7147a954812864d12b21ded9b3)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a667f3d115d92aab65b3220e1ab64fb28)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1af22209afa4cb0826c3848bf9c99bdcd5)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a8943b00849c0866751571b2e059c1f1f)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a4b4bdbd4860a8604c9116550307f9f52)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aa48c016c9f389323b27371756350654c)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a252c27bd350813cf0909b9577860596a)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a29916dec796fd6307c89df8c85244aa9)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a7e5926bff9b5aa6ee9daa21e324b538e)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a93dc6b31b164f5c4337985285fdba586)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a0974baecfc7676ccc152faab12b453b8)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a64c8c5a6f4f12237abbc87f850ca0ee9)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a7a07e03ab9fd7ec733fd0972818eef28)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aff5f5d5fc91b7b296cb6fa5ef87c5107)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a61879be4ea94798291feddd586145c66)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a0a92f71b04c6db87cfa3a8a21e677f73)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ace584af53d55760bbfef3a96cc98bfd0)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ab1563b3745846cf98093df6185fdcaf8)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a4f95687c759c261e5503e71758784f67)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aa6ef243aa013bc7f4a1ba4fa631b5d9d)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ad572b0f3feec3e59bfab415303a9b648)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ac1412df4cb8570cc573ad59bdf6bd798)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a7a44ea576bd657745dfe605e451603b6)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6751a4d3a941a668c886d10464588f51)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a2e5709ac0f02efa74c1c76a93482af5f)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a4a861efbe5a6ef1e4aaf9aeffe1c0034)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a66788ae625c25ec2e79381cde769dcb9)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ae6a0ccf692e3df243f16f631a2a3e92f)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a9dec5cc81a217f554042098835c20e76)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a7c3b78f070e5dd68eb6651ed3cac40dc)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a070371d847e987fc27e8a16a0be4d88e)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a0c4754aa87841da9daf4132269c2c6fa)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a50152bec5cd234c49a0d763552daf2c0)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ad17a794af1d450de045339847fa08f9d)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a15ed0952fd8c9ee59a60d169c4ed9a7c)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a09030c86837fdfdaffe50d2423e39cfa)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a60314676298ac8f606b72ba8d1373938)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aa7a45dd2967a76b0903648d55bd407ba)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a50ab49cc59f6eb17c84aa35a7862b44c)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a8c1fb6d6b46ad3fc35d8c385780bf797)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a54356cdba52df64f31772dc04cbff93b)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a3f0bb9caf499a7439ccc560e92636534)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6c46ace7d641b785639d5a88dab70c8d)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1abbafe54425152568492c1e596a58aede)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ae5dc73ae63ea8c4436acdb5f0cf85ded)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1afbd38a2be7389beb2de3304e71ac8065)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ac2989ccb8dafbb4bf150d7d774d17515)
* [connect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aa1716e9cc3ecea9fd72ec6c945c66baa)
* [connectCustom](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a14f12d5fc517547bda3507d1b4904cd1)
* [connectWith](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a4175b5645453c094e5ab3da2bc0b139e)
* [connectWith](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a01626b04d4825b54d4a967c72c942fec)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [discoverAllOperators](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a38fb29d1a8d18b4bc08f40b657179735)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyWorkflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a304b3dba1aba101c15b08d9853111a72)
* [eraseInputPin](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a07b6c6b80c65c47282d631b9d3036289)
* [eraseOutputPin](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ae4aae9e5a3a414fa0ba10db9b219ee2d)
* [eraseWorkflowFromRegistry](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ae2407ad29bf6a4c815a13fa454c746e5)
* [firstOperator](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a240864c97ab88338e9ba6ef8c4ad9ed3)
* [generateDerivativeFor](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6ff6d7e57c9639e781573723058c4490)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getCopy](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a850d7aa707b7b9017bd679defc9d2845)
* [getCustomOutput](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a3d181c629d1808c570ac90e485a6c5f9)
* [getExternalOut](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a207f2bb64eafa022e3be52389c949cb5)
* [getOutput](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a312d744b2c8174b3cd5e1d102ff6ae7b)
* [getOutputAsAny](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a5340e6ab9473e5615e62223509d473c2)
* [getOutputBool](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6156eba91101e868899f2a9401180a9e)
* [getOutputBool](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ac86f5cff304ed6a263f9e915d8a8b3b7)
* [getOutputCustomTypeField](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ab64177b6dcf13680cf698dcdf4dc0c89)
* [getOutputCustomTypeField](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ab1d36de322f134cd3240fb3aa138d58b)
* [getOutputCyclicSupport](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6d1485f44ae9f6021d7abe5b624ad3dd)
* [getOutputCyclicSupport](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a0f25cc380b20d458d5e89e4b65c90f2e)
* [getOutputDataSources](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ab5d2dc81bc032dd62781eccc8d08dc72)
* [getOutputDataSources](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a665a58c468cb73763561a72213a24105)
* [getOutputDataTree](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aae161a44ae32216f89da086d04cc45d2)
* [getOutputDouble](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6fb5083841eecabdec318dd28db6e71a)
* [getOutputDouble](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a2584163d1c7158faa3bcfeb5fffaeda2)
* [getOutputDoubleVector](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1abbf1ebb5602c5c87c6675aa3416606e8)
* [getOutputDoubleVector](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a9168ef3aaf5112bc31affcb3821ec93c)
* [getOutputField](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a21d864839aa5e8df007f9596ec69a58a)
* [getOutputField](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ae6a68dfd55de34b0d6341187c526f555)
* [getOutputFieldsContainer](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aa3a9c25bbfb550d6692c063f9c3a9366)
* [getOutputFieldsContainer](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a9ca347cc825a5222992789d272319855)
* [getOutputInt](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a763c0ba2b4e2184b40ab4a7a32e356c1)
* [getOutputInt](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a152f76caf982e70a1441ff18fee7ff58)
* [getOutputIntVector](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a1d641ee637e0b511008c753ca43bdcc1)
* [getOutputIntVector](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6958820ac8f76263a764a7efd82778bd)
* [getOutputMeshedRegion](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6ea222c1a71552dce249843b94a07fa4)
* [getOutputMeshedRegion](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a7e1b966c6f88bf8913a78fdd1bc9f8ec)
* [getOutputMeshesContainer](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6c7cb7443fd062fea0ca57d48600d480)
* [getOutputMeshesContainer](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aa776a964e764c7e4b48172a0058f4549)
* [getOutputPropertyField](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1acf02bf7c228fb3d944edd838022e7916)
* [getOutputPropertyField](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a505757d97be1f400590993ea7afff978)
* [getOutputResultInfo](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aed1256fa413f596e2adfea30249f7709)
* [getOutputResultInfo](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aeffa8acf3f758d6889815f63cabe07fe)
* [getOutputScoping](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a74132c47f9aba3bf91929057a5765d26)
* [getOutputScoping](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a5c6b0a0ed35ad495a2776d9ec078fc19)
* [getOutputScopingsContainer](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a33caface659fe462e68fdbcc0970a1be)
* [getOutputScopingsContainer](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a545556717c00fa45e69d5ef73db01a56)
* [getOutputStreams](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ae584dfe4b900829cd8bca00dd3200363)
* [getOutputStreams](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a71da7d7f3e4eafd716ed3a6231f367ba)
* [getOutputString](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a59d4b94233be7f750d0a1af78accd6ba)
* [getOutputString](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aaa166e26a853f3619f66841f394cbb90)
* [getOutputStringField](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1add8d5ca19cf8ceba3d69cb6489ea234c)
* [getOutputStringField](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a43caf8cf225d29a869798a9920a501e4)
* [getOutputSupport](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1aaf5694a0c8e6c6aca9436c5c83af76b2)
* [getOutputSupport](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ac72d8c2dcd1440727a32eab2dd116de5)
* [getOutputTimeFreqSupport](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ac087d530db5bea30250a6110054f204a)
* [getOutputTimeFreqSupport](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ae52042f810882873efc0ba757202e886)
* [getOutputUnit](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1abeff5a7ffd64f443c6da0be2e254563c)
* [getOutputUnit](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1af8eb2c09487a34ec09f8166072c5ca2c)
* [getOutputWorkflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6291348781887726efc7afe9e31a5fb9)
* [getOutputWorkflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a512f234628a9f2b95ad423907ddb25c4)
* [getRemoteId](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a88a367b1638835774ffa7d7521b741c7)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInputPin](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ad4082c537432a19c765d590a6901ab22)
* [hasOutputPin](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a971acc185d66d6c1beec47af476a37b5)
* [hasOutputWhenEvaluated](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a70af322877ca5e6ee6e7b1f81012c044)
* [instantiateOnRemote](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a52b68fcbd68561aa3d47a3368252a9c6)
* [instantiateOnRemote](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a7371c4e5525bcf16d83a33a41d69b03c)
* [instantiateOnRemote](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a9836bf24a8037281f69e7f32285daa45)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [lastOperator](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a7e7861cf4975e45f30bcc0e19ae55f57)
* [listInputPins](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1adb81297f3cb77fa220b83611ac2902f6)
* [listOutputPins](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a52acac03a7d0e7d06b6f081611834fab)
* [loadFromSwf](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a5cb98918b3285132ff6d00f2b5905b2f)
* [nameInputPin](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a71a0990995b27105d4c362ad2880e4d7)
* [nameOutputPin](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a3a223ef1c0200cc16ac1434ef938efca)
* [numberOfOperators](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ab8b59d1d65ffb6df6845d98e321dfc20)
* [operator=](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ab772b7e60c6259a980b4486ea4041f86)
* [operator=](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a5b8a6d7bd61a4e5dede35df27a24f65b)
* [operatorForOutput](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1abeb29c0efc568afd5e3456c23ef12081)
* [operatorNameByIndex](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a040282982c7c01c8c0a7ac8724859d87)
* [operatorsForInput](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1afd80635c4685956bc49568d314e231dd)
* [pvinstantiateOnRemote](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ab611f2cb12b36f69bf96cc059a253ff2)
* [readFromJson](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6f93a5ffa10086a7f2a40291119f6e53)
* [record](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ab001bca50c1470be154a79841c43314c)
* [record](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a304ee206ac4927f7aa757c63b0ec00b5)
* [renameInputPin](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a22fba3c96a8a6e9eda279fd1c4b5358f)
* [renameOutputPin](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1abff62660096b06dd09667061c8e3d8a6)
* [safeConnect](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a4019948fc1655cca28ee1d8e056bcb79)
* [safeConnectDpfType](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a722a4c522d6ddc6be851968de38c008e)
* [tryReplaceWorkflowInRegistry](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a478c1be621d4c49916771b42d4b10ba9)
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a2fbb1ab4344ba3a6c7adf19e811323d5)
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a2846bb6c6a083c909cc69cdd7693e2af)
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a8a36b36629bde25afe03b12b0ed5a958)
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a9df2ce30e71299cc68d8c8b5ad6d0aab)
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a75ca6a59b59ded54d4606acfc8f30d26)
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a463fddfb0fd209fc582de029dfbcc7e6)
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a03109424a314dccffe89415b15c2da20)
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1af8accdf87f15ac679eadd323ac8bead4)
* [writeToGraphViz](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a65f7ba38832058e0f233ae45965ef08b)
* [writeToJson](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a1ddf4b26605e2f28dd54fec4e47310d1)
* [writeToString](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6aaabec3049d60c96c32f7eb3ae38a0f)
* [writeToSwf](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ad3b00b52721f7019bd2820f93f8c0aa4)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1ae191abeba06242e89da0d5a114fad035)

## Friends

<a id="classansys_1_1dpf_1_1Workflow_1afbdd63a566878ce30072e785ca7e7740"></a>
### Friend Session

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 2844)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Session"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Session"},"children":[{"type":"text","text":"Session"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1af764561c544bacc1b90b526ee8d3c708"></a>
### Friend core

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 2845)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class core"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1core"},"children":[{"type":"text","text":"core"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 2846)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Operator"},"children":[{"type":"text","text":"Operator"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1a81d95df60edf516a1de9878b780f8fb3"></a>
### Friend OperatorMain

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 2847)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class OperatorMain"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1OperatorMain"},"children":[{"type":"text","text":"OperatorMain"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1a4d716179fdda163f10d901eb583050bf"></a>
### Friend RemoteWorkflow

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 2848)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class RemoteWorkflow"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"RemoteWorkflow"}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1a9820c685b67a3355c042bb0b3365d9e2"></a>
### Friend Any

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 2849)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Any"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Any"},"children":[{"type":"text","text":"Any"}]}]},{"type":"text","text":"\n        "}]}

## Private functions

<a id="classansys_1_1dpf_1_1Workflow_1a2fbb1ab4344ba3a6c7adf19e811323d5"></a>
### Function Workflow

![][private]

```cpp
ansys::dpf::Workflow::Workflow(opaque::DpfInternalSharedObject *)
```







**Parameters**:

* opaque::DpfInternalSharedObject *

**Return type**: 

<a id="classansys_1_1dpf_1_1Workflow_1a5ddc7a186d7f778073ef81c57d42d367"></a>
### Function connect

![][private]

```cpp
void ansys::dpf::Workflow::connect(std::string const &, ExternalData *d)
```







**Parameters**:

* std::string const &
* [ExternalData](classansys_1_1dpf_1_1ExternalData.md#classansys_1_1dpf_1_1ExternalData) * **d**

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a207f2bb64eafa022e3be52389c949cb5"></a>
### Function getExternalOut

![][private]

```cpp
ExternalData* ansys::dpf::Workflow::getExternalOut(std::string const &)
```







**Parameters**:

* std::string const &

**Return type**: [ExternalData](classansys_1_1dpf_1_1ExternalData.md#classansys_1_1dpf_1_1ExternalData) *

<a id="classansys_1_1dpf_1_1Workflow_1a4019948fc1655cca28ee1d8e056bcb79"></a>
### Function safeConnect

![][private]

```cpp
void ansys::dpf::Workflow::safeConnect(DpfError &error, std::string const &pin_name, DataT data)
```







**Parameters**:

* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**
* std::string const & **pin_name**
* DataT **data**

**Return type**: void

**TODO**:

* templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename DataT"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1a722a4c522d6ddc6be851968de38c008e"></a>
### Function safeConnectDpfType

![][private]

```cpp
void ansys::dpf::Workflow::safeConnectDpfType(DpfError &error, std::string const &pin_name, DataT data)
```







**Parameters**:

* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**
* std::string const & **pin_name**
* DataT **data**

**Return type**: void

**TODO**:

* templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename DataT"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1ab611f2cb12b36f69bf96cc059a253ff2"></a>
### Function pvinstantiateOnRemote

![][private]
![][const]

```cpp
Workflow ansys::dpf::Workflow::pvinstantiateOnRemote(std::string const &address, std::string const &protocol) const
```







**Parameters**:

* std::string const & **address**
* std::string const & **protocol**

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

## Public functions

<a id="classansys_1_1dpf_1_1Workflow_1a2846bb6c6a083c909cc69cdd7693e2af"></a>
### Function Workflow

![][public]

```cpp
ansys::dpf::Workflow::Workflow()
```



Create a new workflow.



**Return type**: 

<a id="classansys_1_1dpf_1_1Workflow_1a8a36b36629bde25afe03b12b0ed5a958"></a>
### Function Workflow

![][public]

```cpp
ansys::dpf::Workflow::Workflow(std::string const &workflow_string)
```



Create a workflow from a string.



**Parameters**:

* std::string const & **workflow_string**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) string definition generated by [writeToString()](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6aaabec3049d60c96c32f7eb3ae38a0f).

**Return type**: 

<a id="classansys_1_1dpf_1_1Workflow_1a9df2ce30e71299cc68d8c8b5ad6d0aab"></a>
### Function Workflow

![][public]

```cpp
ansys::dpf::Workflow::Workflow(Client const *const client)
```



Create a new workflow on a server.



**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**

**Return type**: 

<a id="classansys_1_1dpf_1_1Workflow_1a75ca6a59b59ded54d4606acfc8f30d26"></a>
### Function Workflow

![][public]

```cpp
ansys::dpf::Workflow::Workflow(std::string const &workflow_string, Client const *const client)
```



Create a workflow from a string on a server.



**Parameters**:

* std::string const & **workflow_string**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) string definition generated by [writeToString()](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow_1a6aaabec3049d60c96c32f7eb3ae38a0f).
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**

**Return type**: 

<a id="classansys_1_1dpf_1_1Workflow_1a463fddfb0fd209fc582de029dfbcc7e6"></a>
### Function Workflow

![][public]

```cpp
ansys::dpf::Workflow::Workflow(dp_id id, Client const *const client)
```



Retrieve an existing instance of [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) on a server.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **id**
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**

**Return type**: 

<a id="classansys_1_1dpf_1_1Workflow_1ae191abeba06242e89da0d5a114fad035"></a>
### Function ~Workflow

![][public]

```cpp
virtual ansys::dpf::Workflow::~Workflow()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1Workflow_1a03109424a314dccffe89415b15c2da20"></a>
### Function Workflow

![][public]

```cpp
ansys::dpf::Workflow::Workflow(Workflow const &)
```







**Parameters**:

* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) const &

**Return type**: 

<a id="classansys_1_1dpf_1_1Workflow_1af8accdf87f15ac679eadd323ac8bead4"></a>
### Function Workflow

![][public]

```cpp
ansys::dpf::Workflow::Workflow(Workflow &&)
```







**Parameters**:

* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) &&

**Return type**: 

<a id="classansys_1_1dpf_1_1Workflow_1ab772b7e60c6259a980b4486ea4041f86"></a>
### Function operator=

![][public]

```cpp
Workflow& ansys::dpf::Workflow::operator=(Workflow const &)
```







**Parameters**:

* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) const &

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) &

<a id="classansys_1_1dpf_1_1Workflow_1a5b8a6d7bd61a4e5dede35df27a24f65b"></a>
### Function operator=

![][public]

```cpp
Workflow& ansys::dpf::Workflow::operator=(Workflow &&)
```







**Parameters**:

* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) &&

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) &

<a id="classansys_1_1dpf_1_1Workflow_1a850d7aa707b7b9017bd679defc9d2845"></a>
### Function getCopy

![][public]
![][const]

```cpp
Workflow ansys::dpf::Workflow::getCopy() const
```



**Returns**:

Copy of workflow.



**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

<a id="classansys_1_1dpf_1_1Workflow_1a794c8ac3fdd9459ebfe87f3962936a81"></a>
### Function add

![][public]

```cpp
void ansys::dpf::Workflow::add(Operator &op)
```



Add operator to workflow.



**Parameters**:

* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**: [in] [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) to add.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a4175b5645453c094e5ab3da2bc0b139e"></a>
### Function connectWith

![][public]

```cpp
void ansys::dpf::Workflow::connectWith(Workflow &left_workflow)
```



connect left_worflow to this workflow with matching input/output names.



**Parameters**:

* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) & **left_workflow**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) to add.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a01626b04d4825b54d4a967c72c942fec"></a>
### Function connectWith

![][public]

```cpp
void ansys::dpf::Workflow::connectWith(Workflow &left_workflow, std::map< std::string, std::string > const &connections)
```



connect left_worflow to this workflow with specified connections (out->in).



**Parameters**:

* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) & **left_workflow**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) to add.
* std::map< std::string, std::string > const & **connections**: [in] Connections map (out to in).

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ad4082c537432a19c765d590a6901ab22"></a>
### Function hasInputPin

![][public]
![][const]

```cpp
bool ansys::dpf::Workflow::hasInputPin(std::string const &pin_name) const
```



**Returns**:

Indication of existence of given input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Name of pin for which to check existence.

**Return type**: bool

<a id="classansys_1_1dpf_1_1Workflow_1a971acc185d66d6c1beec47af476a37b5"></a>
### Function hasOutputPin

![][public]
![][const]

```cpp
bool ansys::dpf::Workflow::hasOutputPin(std::string const &pin_name) const
```



**Returns**:

Indication of existence of given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Name of in for which to check existence.

**Return type**: bool

<a id="classansys_1_1dpf_1_1Workflow_1adb81297f3cb77fa220b83611ac2902f6"></a>
### Function listInputPins

![][public]
![][const]

```cpp
std::vector<std::string> ansys::dpf::Workflow::listInputPins() const
```



**Returns**:

Vector of input pin names.



**Return type**: std::vector< std::string >

<a id="classansys_1_1dpf_1_1Workflow_1a52acac03a7d0e7d06b6f081611834fab"></a>
### Function listOutputPins

![][public]
![][const]

```cpp
std::vector<std::string> ansys::dpf::Workflow::listOutputPins() const
```



**Returns**:

Vector of output pin names.



**Return type**: std::vector< std::string >

<a id="classansys_1_1dpf_1_1Workflow_1a71a0990995b27105d4c362ad2880e4d7"></a>
### Function nameInputPin

![][public]

```cpp
void ansys::dpf::Workflow::nameInputPin(std::string const &pin_name, int operator_input_pin, Operator &op)
```



Add an input name to given pin of operator.



**Parameters**:

* std::string const & **pin_name**: [in] Pin name.
* int **operator_input_pin**: [in] Input pin.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**: [in] [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) to which to add pin name.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a3a223ef1c0200cc16ac1434ef938efca"></a>
### Function nameOutputPin

![][public]

```cpp
void ansys::dpf::Workflow::nameOutputPin(Operator &op, int operator_output_pin, std::string const &pin_name)
```



Add an output name to given pin of operator.



**Parameters**:

* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**: [in] [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) to which to add pin name.
* int **operator_output_pin**: [in] Output pin.
* std::string const & **pin_name**: [in] Pin name.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a07b6c6b80c65c47282d631b9d3036289"></a>
### Function eraseInputPin

![][public]

```cpp
void ansys::dpf::Workflow::eraseInputPin(std::string const &pin_name)
```



Removes an exposed pin.



**Parameters**:

* std::string const & **pin_name**: [in] Pin name.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ae4aae9e5a3a414fa0ba10db9b219ee2d"></a>
### Function eraseOutputPin

![][public]

```cpp
void ansys::dpf::Workflow::eraseOutputPin(std::string const &pin_name)
```



Removes an exposed pin.



**Parameters**:

* std::string const & **pin_name**: [in] Pin name.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ad3b00b52721f7019bd2820f93f8c0aa4"></a>
### Function writeToSwf

![][public]
![][const]

```cpp
void ansys::dpf::Workflow::writeToSwf(std::string const &file_path) const
```



Write workflow to given file, in a DataProcessing format.



**Parameters**:

* std::string const & **file_path**: [in] Name of file to which to write workflow.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a65f7ba38832058e0f233ae45965ef08b"></a>
### Function writeToGraphViz

![][public]
![][const]

```cpp
void ansys::dpf::Workflow::writeToGraphViz(std::string const &file_path) const
```



Write workflow to given file, in a graphViz format.



**Parameters**:

* std::string const & **file_path**: [in] Name of file to which to write workflow.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a1ddf4b26605e2f28dd54fec4e47310d1"></a>
### Function writeToJson

![][public]
![][const]

```cpp
void ansys::dpf::Workflow::writeToJson(std::string &jsonString) const
```



Write workflow to string in a json format.



**Parameters**:

* std::string & **jsonString**

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a6f93a5ffa10086a7f2a40291119f6e53"></a>
### Function readFromJson

![][public]

```cpp
void ansys::dpf::Workflow::readFromJson(const std::string &jsonString)
```



load workflow from string in a json format.



**Parameters**:

* const std::string & **jsonString**

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a6aaabec3049d60c96c32f7eb3ae38a0f"></a>
### Function writeToString

![][public]
![][const]

```cpp
std::string ansys::dpf::Workflow::writeToString() const
```



Write workflow to text.



**Return type**: std::string

<a id="classansys_1_1dpf_1_1Workflow_1a36001ca148e2ca1f6d0518d3aefad5dd"></a>
### Function chainWith

![][public]

```cpp
void ansys::dpf::Workflow::chainWith(const Workflow &wf)
```



Append given workflow.



**Parameters**:

* const [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) & **wf**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) to add.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1afdb94d06a19ad7f8288a462d7e58b2aa"></a>
### Function chainWith

![][public]

```cpp
void ansys::dpf::Workflow::chainWith(const Workflow &wf, const std::pair< std::string, std::string > &in_out_names)
```



Append given workflow. Output name is connected to input name of given workflow.



**Parameters**:

* const [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) & **wf**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) to add.
* const std::pair< std::string, std::string > & **in_out_names**: [in] Pair of input/output names.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a22fba3c96a8a6e9eda279fd1c4b5358f"></a>
### Function renameInputPin

![][public]

```cpp
void ansys::dpf::Workflow::renameInputPin(std::string const &old_pin_name, std::string const &new_pin_name)
```



Rename input pin with given name to new name.



**Parameters**:

* std::string const & **old_pin_name**: [in] Name of pin to rename.
* std::string const & **new_pin_name**: [in] New pin name.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1abff62660096b06dd09667061c8e3d8a6"></a>
### Function renameOutputPin

![][public]

```cpp
void ansys::dpf::Workflow::renameOutputPin(std::string const &old_pin_name, std::string const &new_pin_name)
```



Rename output pin with given name to new name.



**Parameters**:

* std::string const & **old_pin_name**: [in] Name of pin to rename.
* std::string const & **new_pin_name**: [in] New pin name.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a5cb98918b3285132ff6d00f2b5905b2f"></a>
### Function loadFromSwf

![][public]

```cpp
void ansys::dpf::Workflow::loadFromSwf(std::string const &file_path)
```



Load workflow from given file.



**Parameters**:

* std::string const & **file_path**: [in] Name of file from which to read workflow.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a6ff6d7e57c9639e781573723058c4490"></a>
### Function generateDerivativeFor

![][public]

```cpp
void ansys::dpf::Workflow::generateDerivativeFor(std::string const &output_name, std::string const &symbol_name)
```







**Parameters**:

* std::string const & **output_name**
* std::string const & **symbol_name**

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a70af322877ca5e6ee6e7b1f81012c044"></a>
### Function hasOutputWhenEvaluated

![][public]

```cpp
bool ansys::dpf::Workflow::hasOutputWhenEvaluated(std::string const &pin_name)
```



**Returns**:

Indication of existence of output pin when workflow evaluated.



**Parameters**:

* std::string const & **pin_name**: [in] Name of output pin to check existence.

**Return type**: bool

<a id="classansys_1_1dpf_1_1Workflow_1ab8b59d1d65ffb6df6845d98e321dfc20"></a>
### Function numberOfOperators

![][public]
![][const]

```cpp
dp_int ansys::dpf::Workflow::numberOfOperators() const
```



**Returns**:

Number of operators in workflow chain.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1Workflow_1a040282982c7c01c8c0a7ac8724859d87"></a>
### Function operatorNameByIndex

![][public]
![][const]

```cpp
std::string ansys::dpf::Workflow::operatorNameByIndex(dp_int index) const
```



**Returns**:

[Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) name by index in workflow chain.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **index**

**Return type**: std::string

<a id="classansys_1_1dpf_1_1Workflow_1a240864c97ab88338e9ba6ef8c4ad9ed3"></a>
### Function firstOperator

![][public]
![][const]

```cpp
Operator ansys::dpf::Workflow::firstOperator() const
```



**Returns**:

First operator in workflow chain.



**Return type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

<a id="classansys_1_1dpf_1_1Workflow_1a7e7861cf4975e45f30bcc0e19ae55f57"></a>
### Function lastOperator

![][public]
![][const]

```cpp
Operator ansys::dpf::Workflow::lastOperator() const
```



**Returns**:

last operator in workflow chain.



**Return type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

<a id="classansys_1_1dpf_1_1Workflow_1a21d864839aa5e8df007f9596ec69a58a"></a>
### Function getOutputField

![][public]

```cpp
Field ansys::dpf::Workflow::getOutputField(std::string const &pin_name)
```



**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

<a id="classansys_1_1dpf_1_1Workflow_1aa3a9c25bbfb550d6692c063f9c3a9366"></a>
### Function getOutputFieldsContainer

![][public]

```cpp
FieldsContainer ansys::dpf::Workflow::getOutputFieldsContainer(std::string const &pin_name)
```



**Returns**:

Fields container result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<a id="classansys_1_1dpf_1_1Workflow_1a74132c47f9aba3bf91929057a5765d26"></a>
### Function getOutputScoping

![][public]

```cpp
Scoping ansys::dpf::Workflow::getOutputScoping(std::string const &pin_name)
```



**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1Workflow_1a33caface659fe462e68fdbcc0970a1be"></a>
### Function getOutputScopingsContainer

![][public]

```cpp
ScopingsContainer ansys::dpf::Workflow::getOutputScopingsContainer(std::string const &pin_name)
```



**Returns**:

Scopings container result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer)

<a id="classansys_1_1dpf_1_1Workflow_1a6c7cb7443fd062fea0ca57d48600d480"></a>
### Function getOutputMeshesContainer

![][public]

```cpp
MeshesContainer ansys::dpf::Workflow::getOutputMeshesContainer(std::string const &pin_name)
```



**Returns**:

Meshes container result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [MeshesContainer](classansys_1_1dpf_1_1MeshesContainer.md#classansys_1_1dpf_1_1MeshesContainer)

<a id="classansys_1_1dpf_1_1Workflow_1ac087d530db5bea30250a6110054f204a"></a>
### Function getOutputTimeFreqSupport

![][public]

```cpp
TimeFreqSupport ansys::dpf::Workflow::getOutputTimeFreqSupport(std::string const &pin_name)
```



**Returns**:

Time frequency support result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport)

<a id="classansys_1_1dpf_1_1Workflow_1a6ea222c1a71552dce249843b94a07fa4"></a>
### Function getOutputMeshedRegion

![][public]

```cpp
MeshedRegion ansys::dpf::Workflow::getOutputMeshedRegion(std::string const &pin_name)
```



**Returns**:

Meshed region result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion)

<a id="classansys_1_1dpf_1_1Workflow_1aed1256fa413f596e2adfea30249f7709"></a>
### Function getOutputResultInfo

![][public]

```cpp
ResultInfo ansys::dpf::Workflow::getOutputResultInfo(std::string const &pin_name)
```



**Returns**:

[Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result) information result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [ResultInfo](classansys_1_1dpf_1_1ResultInfo.md#classansys_1_1dpf_1_1ResultInfo)

<a id="classansys_1_1dpf_1_1Workflow_1aaf5694a0c8e6c6aca9436c5c83af76b2"></a>
### Function getOutputSupport

![][public]

```cpp
Support ansys::dpf::Workflow::getOutputSupport(std::string const &pin_name)
```



**Returns**:

[Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support)

<a id="classansys_1_1dpf_1_1Workflow_1a6d1485f44ae9f6021d7abe5b624ad3dd"></a>
### Function getOutputCyclicSupport

![][public]

```cpp
CyclicSupport ansys::dpf::Workflow::getOutputCyclicSupport(std::string const &pin_name)
```



**Returns**:

[CyclicSupport](classansys_1_1dpf_1_1CyclicSupport.md#classansys_1_1dpf_1_1CyclicSupport) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [CyclicSupport](classansys_1_1dpf_1_1CyclicSupport.md#classansys_1_1dpf_1_1CyclicSupport)

<a id="classansys_1_1dpf_1_1Workflow_1ab5d2dc81bc032dd62781eccc8d08dc72"></a>
### Function getOutputDataSources

![][public]

```cpp
DataSources ansys::dpf::Workflow::getOutputDataSources(std::string const &pin_name)
```



**Returns**:

Data sources result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [DataSources](classansys_1_1dpf_1_1DataSources.md#classansys_1_1dpf_1_1DataSources)

<a id="classansys_1_1dpf_1_1Workflow_1ae584dfe4b900829cd8bca00dd3200363"></a>
### Function getOutputStreams

![][public]

```cpp
Streams ansys::dpf::Workflow::getOutputStreams(std::string const &pin_name)
```



**Returns**:

[Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams)

<a id="classansys_1_1dpf_1_1Workflow_1acf02bf7c228fb3d944edd838022e7916"></a>
### Function getOutputPropertyField

![][public]

```cpp
PropertyField ansys::dpf::Workflow::getOutputPropertyField(std::string const &pin_namepin_name)
```



**Returns**:

Property field result for given output pin.



**Parameters**:

* std::string const & **pin_namepin_name**: [in] Output pin name.

**Return type**: [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField)

<a id="classansys_1_1dpf_1_1Workflow_1abeff5a7ffd64f443c6da0be2e254563c"></a>
### Function getOutputUnit

![][public]

```cpp
Unit ansys::dpf::Workflow::getOutputUnit(std::string const &pin_name)
```



**Returns**:

[Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit)

<a id="classansys_1_1dpf_1_1Workflow_1a6291348781887726efc7afe9e31a5fb9"></a>
### Function getOutputWorkflow

![][public]

```cpp
Workflow ansys::dpf::Workflow::getOutputWorkflow(std::string const &pin_name)
```



**Returns**:

[Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

<a id="classansys_1_1dpf_1_1Workflow_1aae161a44ae32216f89da086d04cc45d2"></a>
### Function getOutputDataTree

![][public]

```cpp
DataTree ansys::dpf::Workflow::getOutputDataTree(std::string const &pin_name)
```



**Returns**:

[DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree)

<a id="classansys_1_1dpf_1_1Workflow_1add8d5ca19cf8ceba3d69cb6489ea234c"></a>
### Function getOutputStringField

![][public]

```cpp
StringField ansys::dpf::Workflow::getOutputStringField(std::string const &pin_name)
```



**Returns**:

[StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField)

<a id="classansys_1_1dpf_1_1Workflow_1ab64177b6dcf13680cf698dcdf4dc0c89"></a>
### Function getOutputCustomTypeField

![][public]

```cpp
CustomTypeField ansys::dpf::Workflow::getOutputCustomTypeField(std::string const &pin_name)
```



**Returns**:

[CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField)

<a id="classansys_1_1dpf_1_1Workflow_1a763c0ba2b4e2184b40ab4a7a32e356c1"></a>
### Function getOutputInt

![][public]

```cpp
dp_int ansys::dpf::Workflow::getOutputInt(std::string const &pin_name)
```



**Returns**:

Integer result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1Workflow_1a6fb5083841eecabdec318dd28db6e71a"></a>
### Function getOutputDouble

![][public]

```cpp
dp_double ansys::dpf::Workflow::getOutputDouble(std::string const &pin_name)
```



**Returns**:

Double result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790)

<a id="classansys_1_1dpf_1_1Workflow_1a6156eba91101e868899f2a9401180a9e"></a>
### Function getOutputBool

![][public]

```cpp
bool ansys::dpf::Workflow::getOutputBool(std::string const &pin_name)
```



**Returns**:

Boolean result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: bool

<a id="classansys_1_1dpf_1_1Workflow_1a59d4b94233be7f750d0a1af78accd6ba"></a>
### Function getOutputString

![][public]

```cpp
std::string ansys::dpf::Workflow::getOutputString(std::string const &pin_index)
```



**Returns**:

String result for given output pin.



**Parameters**:

* std::string const & **pin_index**: [in] Output pin name.

**Return type**: std::string

<a id="classansys_1_1dpf_1_1Workflow_1a5340e6ab9473e5615e62223509d473c2"></a>
### Function getOutputAsAny

![][public]

```cpp
Any ansys::dpf::Workflow::getOutputAsAny(std::string const &pin_name)
```



**Returns**:

[Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any)

<a id="classansys_1_1dpf_1_1Workflow_1a1d641ee637e0b511008c753ca43bdcc1"></a>
### Function getOutputIntVector

![][public]

```cpp
DpfVector<int> ansys::dpf::Workflow::getOutputIntVector(std::string const &pin_name)
```



**Returns**:

Integers vector result as [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector)< int >

<a id="classansys_1_1dpf_1_1Workflow_1abbf1ebb5602c5c87c6675aa3416606e8"></a>
### Function getOutputDoubleVector

![][public]

```cpp
DpfVector<double> ansys::dpf::Workflow::getOutputDoubleVector(std::string const &pin_name)
```



**Returns**:

Doubles vector result as [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector)< double >

<a id="classansys_1_1dpf_1_1Workflow_1a3d181c629d1808c570ac90e485a6c5f9"></a>
### Function getCustomOutput

![][public]

```cpp
DataT ansys::dpf::Workflow::getCustomOutput(std::string const &pin_name)
```



**Returns**:

Custom result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: DataT

**TODO**:

* templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename DataT"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1a312d744b2c8174b3cd5e1d102ff6ae7b"></a>
### Function getOutput

![][public]

```cpp
DataT ansys::dpf::Workflow::getOutput(std::string const &pin_name)
```



**Returns**:

Typed result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.

**Return type**: DataT

**TODO**:

* templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename DataT"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1ae6a68dfd55de34b0d6341187c526f555"></a>
### Function getOutputField

![][public]

```cpp
Field ansys::dpf::Workflow::getOutputField(std::string const &pin_name, DpfError &error)
```



**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

<a id="classansys_1_1dpf_1_1Workflow_1a9ca347cc825a5222992789d272319855"></a>
### Function getOutputFieldsContainer

![][public]

```cpp
FieldsContainer ansys::dpf::Workflow::getOutputFieldsContainer(std::string const &pin_name, DpfError &error)
```



**Returns**:

Fields container result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<a id="classansys_1_1dpf_1_1Workflow_1a5c6b0a0ed35ad495a2776d9ec078fc19"></a>
### Function getOutputScoping

![][public]

```cpp
Scoping ansys::dpf::Workflow::getOutputScoping(std::string const &pin_name, DpfError &error)
```



**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1Workflow_1a545556717c00fa45e69d5ef73db01a56"></a>
### Function getOutputScopingsContainer

![][public]

```cpp
ScopingsContainer ansys::dpf::Workflow::getOutputScopingsContainer(std::string const &pin_name, DpfError &error)
```



**Returns**:

Scopings container result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer)

<a id="classansys_1_1dpf_1_1Workflow_1aa776a964e764c7e4b48172a0058f4549"></a>
### Function getOutputMeshesContainer

![][public]

```cpp
MeshesContainer ansys::dpf::Workflow::getOutputMeshesContainer(std::string const &pin_name, DpfError &error)
```



**Returns**:

Meshes container result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [MeshesContainer](classansys_1_1dpf_1_1MeshesContainer.md#classansys_1_1dpf_1_1MeshesContainer)

<a id="classansys_1_1dpf_1_1Workflow_1ae52042f810882873efc0ba757202e886"></a>
### Function getOutputTimeFreqSupport

![][public]

```cpp
TimeFreqSupport ansys::dpf::Workflow::getOutputTimeFreqSupport(std::string const &pin_name, DpfError &error)
```



**Returns**:

Time frequency support result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport)

<a id="classansys_1_1dpf_1_1Workflow_1a7e1b966c6f88bf8913a78fdd1bc9f8ec"></a>
### Function getOutputMeshedRegion

![][public]

```cpp
MeshedRegion ansys::dpf::Workflow::getOutputMeshedRegion(std::string const &pin_name, DpfError &error)
```



**Returns**:

Meshed region result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion)

<a id="classansys_1_1dpf_1_1Workflow_1aeffa8acf3f758d6889815f63cabe07fe"></a>
### Function getOutputResultInfo

![][public]

```cpp
ResultInfo ansys::dpf::Workflow::getOutputResultInfo(std::string const &pin_name, DpfError &error)
```



**Returns**:

[Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result) information result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [ResultInfo](classansys_1_1dpf_1_1ResultInfo.md#classansys_1_1dpf_1_1ResultInfo)

<a id="classansys_1_1dpf_1_1Workflow_1ac72d8c2dcd1440727a32eab2dd116de5"></a>
### Function getOutputSupport

![][public]

```cpp
Support ansys::dpf::Workflow::getOutputSupport(std::string const &pin_name, DpfError &error)
```



**Returns**:

[Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support)

<a id="classansys_1_1dpf_1_1Workflow_1a0f25cc380b20d458d5e89e4b65c90f2e"></a>
### Function getOutputCyclicSupport

![][public]

```cpp
CyclicSupport ansys::dpf::Workflow::getOutputCyclicSupport(std::string const &pin_name, DpfError &error)
```



**Returns**:

[CyclicSupport](classansys_1_1dpf_1_1CyclicSupport.md#classansys_1_1dpf_1_1CyclicSupport) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [CyclicSupport](classansys_1_1dpf_1_1CyclicSupport.md#classansys_1_1dpf_1_1CyclicSupport)

<a id="classansys_1_1dpf_1_1Workflow_1a665a58c468cb73763561a72213a24105"></a>
### Function getOutputDataSources

![][public]

```cpp
DataSources ansys::dpf::Workflow::getOutputDataSources(std::string const &pin_name, DpfError &error)
```



**Returns**:

Data sources result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [DataSources](classansys_1_1dpf_1_1DataSources.md#classansys_1_1dpf_1_1DataSources)

<a id="classansys_1_1dpf_1_1Workflow_1a71da7d7f3e4eafd716ed3a6231f367ba"></a>
### Function getOutputStreams

![][public]

```cpp
Streams ansys::dpf::Workflow::getOutputStreams(std::string const &pin_name, DpfError &error)
```



**Returns**:

[Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams)

<a id="classansys_1_1dpf_1_1Workflow_1a505757d97be1f400590993ea7afff978"></a>
### Function getOutputPropertyField

![][public]

```cpp
PropertyField ansys::dpf::Workflow::getOutputPropertyField(std::string const &pin_name, DpfError &error)
```



**Returns**:

Property field result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField)

<a id="classansys_1_1dpf_1_1Workflow_1a43caf8cf225d29a869798a9920a501e4"></a>
### Function getOutputStringField

![][public]

```cpp
StringField ansys::dpf::Workflow::getOutputStringField(std::string const &pin_name, DpfError &error)
```



**Returns**:

[StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField)

<a id="classansys_1_1dpf_1_1Workflow_1ab1d36de322f134cd3240fb3aa138d58b"></a>
### Function getOutputCustomTypeField

![][public]

```cpp
CustomTypeField ansys::dpf::Workflow::getOutputCustomTypeField(std::string const &pin_name, DpfError &error)
```



**Returns**:

[CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField)

<a id="classansys_1_1dpf_1_1Workflow_1af8eb2c09487a34ec09f8166072c5ca2c"></a>
### Function getOutputUnit

![][public]

```cpp
Unit ansys::dpf::Workflow::getOutputUnit(std::string const &pin_name, DpfError &error)
```



**Returns**:

[Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit)

<a id="classansys_1_1dpf_1_1Workflow_1a512f234628a9f2b95ad423907ddb25c4"></a>
### Function getOutputWorkflow

![][public]

```cpp
Workflow ansys::dpf::Workflow::getOutputWorkflow(std::string const &pin_name, DpfError &error)
```



**Returns**:

[Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

<a id="classansys_1_1dpf_1_1Workflow_1a152f76caf982e70a1441ff18fee7ff58"></a>
### Function getOutputInt

![][public]

```cpp
dp_int ansys::dpf::Workflow::getOutputInt(std::string const &pin_name, DpfError &error)
```



**Returns**:

Integer result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1Workflow_1a2584163d1c7158faa3bcfeb5fffaeda2"></a>
### Function getOutputDouble

![][public]

```cpp
dp_double ansys::dpf::Workflow::getOutputDouble(std::string const &pin_name, DpfError &error)
```



**Returns**:

Double result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790)

<a id="classansys_1_1dpf_1_1Workflow_1ac86f5cff304ed6a263f9e915d8a8b3b7"></a>
### Function getOutputBool

![][public]

```cpp
bool ansys::dpf::Workflow::getOutputBool(std::string const &pin_name, DpfError &error)
```



**Returns**:

Boolean result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: bool

<a id="classansys_1_1dpf_1_1Workflow_1aaa166e26a853f3619f66841f394cbb90"></a>
### Function getOutputString

![][public]

```cpp
std::string ansys::dpf::Workflow::getOutputString(std::string const &pin_name, DpfError &error)
```



**Returns**:

String result for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: std::string

<a id="classansys_1_1dpf_1_1Workflow_1a6958820ac8f76263a764a7efd82778bd"></a>
### Function getOutputIntVector

![][public]

```cpp
DpfVector<int> ansys::dpf::Workflow::getOutputIntVector(std::string const &pin_name, DpfError &error)
```



**Returns**:

Integers vector result as [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector)< int >

<a id="classansys_1_1dpf_1_1Workflow_1a9168ef3aaf5112bc31affcb3821ec93c"></a>
### Function getOutputDoubleVector

![][public]

```cpp
DpfVector<double> ansys::dpf::Workflow::getOutputDoubleVector(std::string const &pin_name, DpfError &error)
```



**Returns**:

Doubles vector result as [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector) for given output pin.



**Parameters**:

* std::string const & **pin_name**: [in] Output pin name.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [DpfVector](classansys_1_1dpf_1_1DpfVector.md#classansys_1_1dpf_1_1DpfVector)< double >

<a id="classansys_1_1dpf_1_1Workflow_1ab47934497d52355ac422efa57677ff75"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, std::string const &f)
```



Connect string to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* std::string const & **f**: [in] String data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a6ce835a6bd7213846e9f2a54c3c0a26b"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, dp_int f)
```



Connect integer to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **f**: [in] Integer data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a0359e496cfe9ef8b635df5ced09ee4ed"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, bool f)
```



Connect boolean to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* bool **f**: [in] Boolean data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a784a219175f41f4a6c7da7703f45defe"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, dp_double f)
```



Connect double to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) **f**: [in] Double data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a2bbb7a7147a954812864d12b21ded9b3"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, std::vector< int > const &f)
```



Connect vector of integers to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* std::vector< int > const & **f**: [in] Vector of integers data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a667f3d115d92aab65b3220e1ab64fb28"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, std::vector< dp_double > const &f)
```



Connect vector of doubles to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* std::vector< [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) > const & **f**: [in] Vector of doubles data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1af22209afa4cb0826c3848bf9c99bdcd5"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, std::vector< std::string > const &f)
```



Connect vector of strings to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* std::vector< std::string > const & **f**: [in] Vector of strings data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a8943b00849c0866751571b2e059c1f1f"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Scoping const &data)
```



Connect [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) data to input_pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin.
* [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) const & **data**: [in] [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) data to connect to pin.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a4b4bdbd4860a8604c9116550307f9f52"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Field const &f)
```



Connect field to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) const & **f**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1aa48c016c9f389323b27371756350654c"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, FieldsContainer const &f)
```



Connect fields container to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) const & **f**: [in] Fields container data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a252c27bd350813cf0909b9577860596a"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, ScopingsContainer const &f)
```



Connect scopings container to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) const & **f**: [in] Scopings container data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a29916dec796fd6307c89df8c85244aa9"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, MeshesContainer const &f)
```



Connect meshes container to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [MeshesContainer](classansys_1_1dpf_1_1MeshesContainer.md#classansys_1_1dpf_1_1MeshesContainer) const & **f**: [in] Meshes container data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a7e5926bff9b5aa6ee9daa21e324b538e"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, MeshedRegion const &f)
```



Connect mesed region to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) const & **f**: [in] Meshed region data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a93dc6b31b164f5c4337985285fdba586"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, PropertyField const &f)
```



Connect property field to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField) const & **f**: [in] Property field data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a0974baecfc7676ccc152faab12b453b8"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Support const &f)
```



Connect support to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) const & **f**: [in] [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a64c8c5a6f4f12237abbc87f850ca0ee9"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, TimeFreqSupport const &f)
```



Connect time frequency support to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) const & **f**: [in] Time frequency support data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a7a07e03ab9fd7ec733fd0972818eef28"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, CyclicSupport const &f)
```



Connect [CyclicSupport](classansys_1_1dpf_1_1CyclicSupport.md#classansys_1_1dpf_1_1CyclicSupport) to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [CyclicSupport](classansys_1_1dpf_1_1CyclicSupport.md#classansys_1_1dpf_1_1CyclicSupport) const & **f**: [in] Time frequency support data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1aff5f5d5fc91b7b296cb6fa5ef87c5107"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Workflow const &f)
```



Connect [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) const & **f**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a61879be4ea94798291feddd586145c66"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, DataSources const &f)
```



Connect data sources to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [DataSources](classansys_1_1dpf_1_1DataSources.md#classansys_1_1dpf_1_1DataSources) const & **f**: [in] Data sources data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a0a92f71b04c6db87cfa3a8a21e677f73"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Streams const &f)
```



Connect [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) const & **f**: [in] [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ace584af53d55760bbfef3a96cc98bfd0"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, DataTree const &f)
```



Connect [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) const & **f**: [in] [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ab1563b3745846cf98093df6185fdcaf8"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, StringField const &f)
```



Connect [StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField) to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField) const & **f**: [in] [StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField) data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a4f95687c759c261e5503e71758784f67"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, CustomTypeField const &f)
```



Connect [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField) to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField) const & **f**: [in] [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField) data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1aa6ef243aa013bc7f4a1ba4fa631b5d9d"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, LabelSpace const &f)
```



Connect [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **f**: [in] [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ad572b0f3feec3e59bfab415303a9b648"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Any const &f)
```



Connect [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) const & **f**: [in] [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) data.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ac1412df4cb8570cc573ad59bdf6bd798"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Operator const &f, dp_index output_pin)
```



Connect operator output pin to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) const & **f**: [in] [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) from which to connect output pin.
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **output_pin**: [in] Output pin.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a14f12d5fc517547bda3507d1b4904cd1"></a>
### Function connectCustom

![][public]

```cpp
void ansys::dpf::Workflow::connectCustom(std::string const &input_pin, DataT const &d)
```



Connect typed data to input pin. 
**Exceptions**:

* **[DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException)**:



**Parameters**:

* std::string const & **input_pin**: [in] Input pin name.
* DataT const & **d**: {in] Typed data

**Return type**: void

**TODO**:

* templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename DataT"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1Workflow_1a7a44ea576bd657745dfe605e451603b6"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, dp_int f, DpfError &error)
```



Connect integer to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **f**: [in] Integer data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a6751a4d3a941a668c886d10464588f51"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, bool f, DpfError &error)
```



Connect boolean to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* bool **f**: [in] Boolean data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a2e5709ac0f02efa74c1c76a93482af5f"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, dp_double f, DpfError &error)
```



Connect double to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) **f**: [in] Double data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a4a861efbe5a6ef1e4aaf9aeffe1c0034"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, std::string const &f, DpfError &error)
```



Connect string to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* std::string const & **f**: [in] String data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a66788ae625c25ec2e79381cde769dcb9"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, std::vector< int > const &f, DpfError &error)
```



Connect vector of integers to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* std::vector< int > const & **f**: [in] Vector of integer data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ae6a0ccf692e3df243f16f631a2a3e92f"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, std::vector< dp_double > const &f, DpfError &error)
```



Connect vector of doubles to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* std::vector< [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) > const & **f**: [in] Vector of double data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a9dec5cc81a217f554042098835c20e76"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, std::vector< std::string > const &f, DpfError &error)
```



Connect vector of strings to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* std::vector< std::string > const & **f**: [in] Vector of string data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a7c3b78f070e5dd68eb6651ed3cac40dc"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Scoping const &f, DpfError &error)
```



Connect scoping to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) const & **f**: [in] [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a070371d847e987fc27e8a16a0be4d88e"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Field const &f, DpfError &error)
```



Connect field to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) const & **f**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a0c4754aa87841da9daf4132269c2c6fa"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, FieldsContainer const &f, DpfError &error)
```



Connect fields container to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) const & **f**: [in] Fields container data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a50152bec5cd234c49a0d763552daf2c0"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, ScopingsContainer const &f, DpfError &error)
```



Connect scopings container to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [ScopingsContainer](classansys_1_1dpf_1_1ScopingsContainer.md#classansys_1_1dpf_1_1ScopingsContainer) const & **f**: [in] Scopings container data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ad17a794af1d450de045339847fa08f9d"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, MeshesContainer const &f, DpfError &error)
```



Connect meshes container to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [MeshesContainer](classansys_1_1dpf_1_1MeshesContainer.md#classansys_1_1dpf_1_1MeshesContainer) const & **f**: [in] Meshes container data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a15ed0952fd8c9ee59a60d169c4ed9a7c"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, MeshedRegion const &f, DpfError &error)
```



Connect meshed region to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion) const & **f**: [in] Meshed region data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a09030c86837fdfdaffe50d2423e39cfa"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, DataSources const &f, DpfError &error)
```



Connect data sources to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [DataSources](classansys_1_1dpf_1_1DataSources.md#classansys_1_1dpf_1_1DataSources) const & **f**: [in] Data sources data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a60314676298ac8f606b72ba8d1373938"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Streams const &f, DpfError &error)
```



Connect [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) const & **f**: [in] [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1aa7a45dd2967a76b0903648d55bd407ba"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, PropertyField const &f, DpfError &error)
```



Connect property field to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [PropertyField](classansys_1_1dpf_1_1PropertyField.md#classansys_1_1dpf_1_1PropertyField) const & **f**: [in] Property field data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a50ab49cc59f6eb17c84aa35a7862b44c"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Support const &f, DpfError &error)
```



Connect support to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) const & **f**: [in] [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a8c1fb6d6b46ad3fc35d8c385780bf797"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, CyclicSupport const &f, DpfError &error)
```



Connect [CyclicSupport](classansys_1_1dpf_1_1CyclicSupport.md#classansys_1_1dpf_1_1CyclicSupport) to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [CyclicSupport](classansys_1_1dpf_1_1CyclicSupport.md#classansys_1_1dpf_1_1CyclicSupport) const & **f**: [in] [CyclicSupport](classansys_1_1dpf_1_1CyclicSupport.md#classansys_1_1dpf_1_1CyclicSupport) data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a54356cdba52df64f31772dc04cbff93b"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, TimeFreqSupport const &f, DpfError &error)
```



Connect timefrequency support to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) const & **f**: [in] Time frequency support data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a3f0bb9caf499a7439ccc560e92636534"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Workflow const &f, DpfError &error)
```



Connect [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) support to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) const & **f**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) support data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a6c46ace7d641b785639d5a88dab70c8d"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, DataTree const &f, DpfError &error)
```



Connect [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) support to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) const & **f**: [in] [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) support data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1abbafe54425152568492c1e596a58aede"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, StringField const &f, DpfError &error)
```



Connect [StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField) support to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField) const & **f**: [in] [StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField) data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ae5dc73ae63ea8c4436acdb5f0cf85ded"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, CustomTypeField const &f, DpfError &error)
```



Connect [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField) support to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField) const & **f**: [in] [CustomTypeField](classansys_1_1dpf_1_1CustomTypeField.md#classansys_1_1dpf_1_1CustomTypeField) data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1afbd38a2be7389beb2de3304e71ac8065"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, LabelSpace const &f, DpfError &error)
```



Connect [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) support to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **f**: [in] [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ac2989ccb8dafbb4bf150d7d774d17515"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Any const &f, DpfError &error)
```



Connect [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) support to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) const & **f**: [in] [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow) [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) data.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1aa1716e9cc3ecea9fd72ec6c945c66baa"></a>
### Function connect

![][public]

```cpp
void ansys::dpf::Workflow::connect(std::string const &pin_name, Operator const &f, dp_index output_pin, DpfError &error)
```



Connect operator output pin to input pin.



**Parameters**:

* std::string const & **pin_name**: [in] Input pin name.
* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) const & **f**: [in] [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) from which to connect output pin.
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **output_pin**: [in] Output pin.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1a38fb29d1a8d18b4bc08f40b657179735"></a>
### Function discoverAllOperators

![][public]

```cpp
void ansys::dpf::Workflow::discoverAllOperators()
```



Using operator's connectivity, discover all operators contained in the workflow and add them inside.



**Return type**: void

<a id="classansys_1_1dpf_1_1Workflow_1ab001bca50c1470be154a79841c43314c"></a>
### Function record

![][public]

```cpp
int ansys::dpf::Workflow::record(std::string const &name, bool transfer_ownership, DpfError &error)
```







**Parameters**:

* std::string const & **name**
* bool **transfer_ownership**
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**

**Return type**: int

<a id="classansys_1_1dpf_1_1Workflow_1a304ee206ac4927f7aa757c63b0ec00b5"></a>
### Function record

![][public]

```cpp
int ansys::dpf::Workflow::record(std::string const &name, bool transfer_ownership)
```







**Parameters**:

* std::string const & **name**
* bool **transfer_ownership**

**Return type**: int

<a id="classansys_1_1dpf_1_1Workflow_1a478c1be621d4c49916771b42d4b10ba9"></a>
### Function tryReplaceWorkflowInRegistry

![][public]

```cpp
bool ansys::dpf::Workflow::tryReplaceWorkflowInRegistry(int id, std::string const &name, bool transfer_ownership)
```







**Parameters**:

* int **id**
* std::string const & **name**
* bool **transfer_ownership**

**Return type**: bool

<a id="classansys_1_1dpf_1_1Workflow_1ae2407ad29bf6a4c815a13fa454c746e5"></a>
### Function eraseWorkflowFromRegistry

![][public]

```cpp
bool ansys::dpf::Workflow::eraseWorkflowFromRegistry()
```







**Return type**: bool

<a id="classansys_1_1dpf_1_1Workflow_1a52b68fcbd68561aa3d47a3368252a9c6"></a>
### Function instantiateOnRemote

![][public]
![][const]

```cpp
Workflow ansys::dpf::Workflow::instantiateOnRemote(ansys::dpf::Client const *const client) const
```



Make a copy of the workflow (with writeToString) on a server.



**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

<a id="classansys_1_1dpf_1_1Workflow_1a7371c4e5525bcf16d83a33a41d69b03c"></a>
### Function instantiateOnRemote

![][public]
![][const]

```cpp
Workflow ansys::dpf::Workflow::instantiateOnRemote(std::string const &address, std::string const &protocol) const
```



Asks the server to make a copy of the workflow (with writeToString) on a server address.



**Parameters**:

* std::string const & **address**: [in] address of the server (ip:port).
* std::string const & **protocol**: [in] servers protocol (ex: 'grpc').

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

<a id="classansys_1_1dpf_1_1Workflow_1a9836bf24a8037281f69e7f32285daa45"></a>
### Function instantiateOnRemote

![][public]
![][const]

```cpp
Workflow ansys::dpf::Workflow::instantiateOnRemote(std::string const &ip, int port, std::string const &protocol) const
```



Asks the server to make a copy of the workflow (with writeToString) on a server address.



**Parameters**:

* std::string const & **ip**: [in] ip address of the server.
* int **port**: [in] port of the server.
* std::string const & **protocol**: [in] servers protocol (ex: 'grpc').

**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

<a id="classansys_1_1dpf_1_1Workflow_1a88a367b1638835774ffa7d7521b741c7"></a>
### Function getRemoteId

![][public]
![][const]

```cpp
dp_id ansys::dpf::Workflow::getRemoteId() const
```



If the workflow is remote, returns its Id on the server.



**Return type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<a id="classansys_1_1dpf_1_1Workflow_1afd80635c4685956bc49568d314e231dd"></a>
### Function operatorsForInput

![][public]
![][const]

```cpp
std::vector<std::pair<int, ansys::dpf::Operator> > ansys::dpf::Workflow::operatorsForInput(std::string const &input_name) const
```



get the list of [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) s and their exposed input pin number for a given exposed input pin name.



**Parameters**:

* std::string const & **input_name**: [in] pin_name

**Return type**: std::vector< std::pair< int, [ansys::dpf::Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) > >

<a id="classansys_1_1dpf_1_1Workflow_1abeb29c0efc568afd5e3456c23ef12081"></a>
### Function operatorForOutput

![][public]
![][const]

```cpp
std::pair<int, ansys::dpf::Operator> ansys::dpf::Workflow::operatorForOutput(std::string const &output_name) const
```



get the [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) and their exposed output pin number for a given exposed output pin name.



**Parameters**:

* std::string const & **output_name**: [in] pin_name

**Return type**: std::pair< int, [ansys::dpf::Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) >

## Public static functions

<a id="classansys_1_1dpf_1_1Workflow_1a304b3dba1aba101c15b08d9853111a72"></a>
### Function emptyWorkflow

![][public]
![][static]

```cpp
static Workflow ansys::dpf::Workflow::emptyWorkflow()
```



Create an empty workflow. 
**Returns**:

Empty [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow).



**Return type**: [Workflow](classansys_1_1dpf_1_1Workflow.md#classansys_1_1dpf_1_1Workflow)

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)