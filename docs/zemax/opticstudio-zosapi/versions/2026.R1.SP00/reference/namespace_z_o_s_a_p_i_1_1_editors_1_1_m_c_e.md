# Namespace ZOSAPI::Editors::MCE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Editors::MCE::IMCERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row)
* [ZOSAPI::Editors::MCE::IMultiConfigEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor)

## Enumeration types

### Enumeration type MultiConfigOperandType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1"></a>

![][public]

**Definition**:


```csharp
enum MultiConfigOperandType {
  MOFF,
  AICN,
  AFOC,
  APDF,
  APDT,
  APDX,
  APDY,
  APER,
  APMN,
  APMX,
  APTP,
  CADX,
  CADY,
  CAOR,
  CATX,
  CATY,
  CATZ,
  CBDX,
  CBDY,
  CBOR,
  CBTX,
  CBTY,
  CBTZ,
  CONN,
  COTN,
  CPCN,
  CROR,
  CRSR,
  CRVT,
  CSP1,
  CSP2,
  CWGT,
  EDVA,
  FLTP,
  FLWT,
  FVAN,
  FVCX,
  FVCY,
  FVDX,
  FVDY,
  GCRS,
  GLSS,
  GPEX,
  GPEY,
  GPIU,
  GPJX,
  GPJY,
  GPPX,
  GPPY,
  GQPO,
  HOLD,
  IGNM,
  IGNR,
  LTTL,
  MABB,
  MCOM,
  MDPG,
  MIND,
  MTFU,
  NCOM,
  NCOT,
  NGLS,
  NPAR,
  NPOS,
  NPRO,
  PAR1,
  PAR2,
  PAR3,
  PAR4,
  PAR5,
  PAR6,
  PAR7,
  PAR8,
  PRAM,
  PRES,
  PRWV,
  PSCX,
  PSCY,
  PSHX,
  PSHY,
  PSHZ,
  PSP1,
  PSP2,
  PSP3,
  PUCN,
  PXAR,
  RAAM,
  SATP,
  SDIA,
  SDRW,
  STPS,
  SWCN,
  TCEX,
  TELE,
  TEMP,
  THIC,
  TSP1,
  TSP2,
  TSP3,
  UDAF,
  WAVE,
  WLWT,
  XFIE,
  YFIE,
  OPDR,
  SRTS,
  MCHI,
  IGTO,
  FTAN,
  FCMM,
  CHZN,
  MCSD,
  CSDX,
  CSDY,
  CSTX,
  CSTY,
  CSTZ
}
```


All supported Multi Configuration operand types.

Usage (see [Example 25](../apiexamples/example_25.md) for a full sample)


C# 
```csharp
            // change MCE to NPAR, modifies the number of Layout Rays for a Source
            for (int a = 1; a <= 4; a++)
            {
                TheMCE.GetOperandAt(a).ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.NPAR);
            }
            TheMCE.GetOperandAt(1).Param2 = 1;
            TheMCE.GetOperandAt(1).Param3 = 1;
            TheMCE.GetOperandAt(1).GetOperandCell(1).DoubleValue = 200;
            TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 0;
```
 C++ 
```csharp
    // change MCE to NPAR, modifies the number of Layout Rays for a Source
    for (int a = 1; a < 5; a++)
        TheMCE->GetOperandAt(a)->ChangeType(MultiConfigOperandType_NPAR);

    TheMCE->GetOperandAt(1)->Param2 = 1;
    TheMCE->GetOperandAt(1)->Param3 = 1;
    TheMCE->GetOperandAt(1)->GetOperandCell(1)->DoubleValue = 200;
    TheMCE->GetOperandAt(1)->GetOperandCell(2)->DoubleValue = 0;
```
 Matlab 
```csharp
    % change MCE to NPAR, modifies the number of Layout Rays for a Source
    for a = 1:4
       TheMCE.GetOperandAt(a).ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.NPAR); 
    end
    TheMCE.GetOperandAt(1).Param2 = 1;
    TheMCE.GetOperandAt(1).Param3 = 1;
    TheMCE.GetOperandAt(1).GetOperandCell(1).DoubleValue = 200;
    TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 0;
```
 Python 
```csharp
    # change MCE to NPAR, modifies the number of Layout Rays for a Source
    for a in range(1, 5):
        TheMCE.GetOperandAt(a).ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.NPAR)
    TheMCE.GetOperandAt(1).Param2 = 1
    TheMCE.GetOperandAt(1).Param3 = 1
    TheMCE.GetOperandAt(1).GetOperandCell(1).DoubleValue = 200
    TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 0
```


#### Enumerator MOFF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ae0a012823670690b1f3da63ac775c6a0"></a>


#### Enumerator AICN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a4b9bbcd1b1b14dbe039f6445665c65e7"></a>


#### Enumerator AFOC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1afde47b483a4d68f411bd90c596667f4d"></a>


#### Enumerator APDF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a6e0c9a4b0adcaab99074d2952dca8294"></a>


#### Enumerator APDT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a6507e7c0f38a6c9af30f27fb76316f86"></a>


#### Enumerator APDX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a0c9e9562a429ed895d26915de2ab8f90"></a>


#### Enumerator APDY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a7bce5ce9cab11cfb10a847349a2b23bb"></a>


#### Enumerator APER

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ab10e7f9617ea3893dcbd566cd1138042"></a>


#### Enumerator APMN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1adfc1a324bbf184a686b368cfde0f60fe"></a>


#### Enumerator APMX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a65c80d6b5f3d35ebbb4937864d0a9691"></a>


#### Enumerator APTP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1aafc11a248e6c1b4552be4f6705a25806"></a>


#### Enumerator CADX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a5beee8bf59d6f05706231beb136e481d"></a>


#### Enumerator CADY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a84c09f51835358f2f050fefa2016edf0"></a>


#### Enumerator CAOR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a4ec3377576468681b39d76aea18bfe97"></a>


#### Enumerator CATX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1aa1707dc45cfd68470a2b6645f98c24d4"></a>


#### Enumerator CATY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1abcc935670417ab40079e3b13125a3c21"></a>


#### Enumerator CATZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a082aa0c2feb0b65be7adb9573a30b175"></a>


#### Enumerator CBDX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a2e8574ea900c30124a8dc3c16813f90a"></a>


#### Enumerator CBDY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1acb01f7aeb8d43316671c375e3ebdcc9d"></a>


#### Enumerator CBOR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a6009014cf7f117c0a14c14fdb971e9e8"></a>


#### Enumerator CBTX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a55e7fa1c6adaa980e9d7b1b31da45f23"></a>


#### Enumerator CBTY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a034919360263e80fb20e7ba39e46796c"></a>


#### Enumerator CBTZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ac9b1c0f1fe9358e9660416fba41c268b"></a>


#### Enumerator CONN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1af6120da3058dbff82b989d1f5a7b84e6"></a>


#### Enumerator COTN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a0928bfc03b8eadb0167bc5c1fe50d7e0"></a>


#### Enumerator CPCN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a8bacab92dfa61a2657f75f2c9be8d5a1"></a>


#### Enumerator CROR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a754ac5566f772d0110a54f469bd33f97"></a>


#### Enumerator CRSR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ad5e8656794f44e177e3bef6995d4dfe9"></a>


#### Enumerator CRVT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1acf22cb98f0966bd4e6844a4ecb367ae7"></a>


#### Enumerator CSP1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1acddc23ca39a304bf61df3c9b8f33910a"></a>


#### Enumerator CSP2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1af47a1f18392caaa7cd1c782865680142"></a>


#### Enumerator CWGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a6142eb0f1cefd630e201a2eac49a7e9f"></a>


#### Enumerator EDVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a9a8c8d8bc42eec97b98873e8744f04a4"></a>


#### Enumerator FLTP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a5c451fb3060b9b9106e1e6d1216cc466"></a>


#### Enumerator FLWT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a9bf52227fa048fdc0ac92d69bb9523a8"></a>


#### Enumerator FVAN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1aeae06c6ecab673ced2d2b715463b62ac"></a>


#### Enumerator FVCX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a4f94770a214e38d3a6c07ca1b1834f9d"></a>


#### Enumerator FVCY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a21c672b73093cfd7fa066a3d1b41f649"></a>


#### Enumerator FVDX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a1a00b42916707d03d92c0c779839e343"></a>


#### Enumerator FVDY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a3e1aa4739ded85fede92e9b58ebbac20"></a>


#### Enumerator GCRS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1aa9cadef3b7bb4bf20f0d41563b69b571"></a>


#### Enumerator GLSS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a509d6550f04237a14df09a8ccd0e270d"></a>


#### Enumerator GPEX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a0a65d741855c6903d4810afa86371825"></a>


#### Enumerator GPEY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a430fcf84c5cbce09e50567e6683cbb2d"></a>


#### Enumerator GPIU

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a79fbd4fa4ddc1a4240c4ce4aa8eb4bf4"></a>


#### Enumerator GPJX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1af669bafbf2325690f7d2d331655cea9f"></a>


#### Enumerator GPJY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a794c8c2caaf2a499fe849a633c4279b7"></a>


#### Enumerator GPPX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a2927abb2f47e565ecf861bdea21b9938"></a>


#### Enumerator GPPY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ad53393bbcc5f3cc99bb64e1c1245e07b"></a>


#### Enumerator GQPO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a51201cc18ab46fe4acfbf20c94edc188"></a>


#### Enumerator HOLD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a0c6d9dfb485b43c6fba87439f9f73ac4"></a>


#### Enumerator IGNM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a88603994225ecbfc5e632417900ceac3"></a>


#### Enumerator IGNR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1af798adced9e35fcdc32f04ea6526f08f"></a>


#### Enumerator LTTL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a5dcf9c88c53b45e28533b661422f3916"></a>


#### Enumerator MABB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a5c19aecd681df8bf1bbec461ce88cf7c"></a>


#### Enumerator MCOM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1acb34cd5baf4652d8111997633683b02b"></a>


#### Enumerator MDPG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a64470ec35c5ec08098c2abf5c68e85d1"></a>


#### Enumerator MIND

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a82675ec23cd809be2f1dfa80bc52ec18"></a>


#### Enumerator MTFU

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a8ba6114f979722b1bba66b2f8201d5ed"></a>


#### Enumerator NCOM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a3c0f8e4ea1693042dc01476aca197f8f"></a>


#### Enumerator NCOT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a6d830ee88ffe204c5bebf2e81720d5e5"></a>


#### Enumerator NGLS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a67fc5f852c184b6ad2a1e8a532bae7bb"></a>


#### Enumerator NPAR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a06474e513cb139a01a01ba2f8fd84711"></a>


#### Enumerator NPOS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a08a56ea3b4472676cdbe327451e74397"></a>


#### Enumerator NPRO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ace86d53deb2b6d7f853b44de469c3d6d"></a>


#### Enumerator PAR1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a2b85af6abf9be8e9a8bb4d661cde9488"></a>


#### Enumerator PAR2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1acce22f860b0f7826ded687ccb956edcf"></a>


#### Enumerator PAR3

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1af32daa01ef37b27a20184c6b51433fb1"></a>


#### Enumerator PAR4

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a8fe0c72fd4cc98c09a17ac974bca0256"></a>


#### Enumerator PAR5

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a155dea795473dfee7498a71a3ab659ea"></a>


#### Enumerator PAR6

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a2e03c67aa7eb6b21aa9119243a90246d"></a>


#### Enumerator PAR7

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1aa5d3b45aaee24c4e8376b489ebf81f52"></a>


#### Enumerator PAR8

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1acda199a7c9eb73a58d5f4545ee5a9ef6"></a>


#### Enumerator PRAM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1abdf045a0cecf78cde5efae8ad648358e"></a>


#### Enumerator PRES

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a12d313415700e916d0c8fc6543496345"></a>


#### Enumerator PRWV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a53b2825f478044aeda821c5a5ebf50ba"></a>


#### Enumerator PSCX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a2734f59940fc2ca068c72dc30bd96a0e"></a>


#### Enumerator PSCY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1af32fa0ce9f75f16689a8a2274168beb7"></a>


#### Enumerator PSHX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a2c1a730f8d219ca43785838e04e18d60"></a>


#### Enumerator PSHY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a010b46072638d0518e0b33ff8b8eb0c4"></a>


#### Enumerator PSHZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a115d456f97609d3155080e5966c1eb4b"></a>


#### Enumerator PSP1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a6b4e7eb552a1c9f7007733ea9bd02080"></a>


#### Enumerator PSP2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ae6ffc6c96db8aae2deeb02cd6243e911"></a>


#### Enumerator PSP3

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1aa24cbae9b6c424d3db41ebdf45fb8ec8"></a>


#### Enumerator PUCN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a9dfec880d6816eb24d7ee8b0bbc56861"></a>


#### Enumerator PXAR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a639a348a54d1998f5ec4ae846baf38ae"></a>


#### Enumerator RAAM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a71437b718a43a1a49cdfbd45cd50e5fe"></a>


#### Enumerator SATP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a203c66f605eca7775675a93885014135"></a>


#### Enumerator SDIA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a3e0f634dc47fb4ed0b7b708310f6a129"></a>


#### Enumerator SDRW

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ae0972269f7fffff144379a19a9cee9b5"></a>


#### Enumerator STPS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a8a76f648df01bf725751af6564d11040"></a>


#### Enumerator SWCN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1afe642df890645bf3ff2d93e6dc27b2e3"></a>


#### Enumerator TCEX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a5529a0edc6860c535fbb8f233558d3cd"></a>


#### Enumerator TELE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a5cf4bb312a2d72559cacbebe41c7cd7a"></a>


#### Enumerator TEMP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1aa972681b318c92911a4020c18acf78b6"></a>


#### Enumerator THIC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ab1ba696f7ecc29be2508e74d4b159ec0"></a>


#### Enumerator TSP1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a8735482806be8ccc3ef6f12b0b3c6136"></a>


#### Enumerator TSP2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a58d4185564cb4df75574c247d6a214bb"></a>


#### Enumerator TSP3

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a8355f22ae27ed7796934c4ddb77bee8f"></a>


#### Enumerator UDAF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a14225a77c87539b71e2dabc58d0d2f7a"></a>


#### Enumerator WAVE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a34c83beed9e41c7f49c783097a7c760a"></a>


#### Enumerator WLWT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a7696a0a5186827a548781bf1a859439e"></a>


#### Enumerator XFIE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a49be1b9b43c134c65d71f6357b6c7187"></a>


#### Enumerator YFIE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ab431fb84c5513e6810d3377f424a90af"></a>


#### Enumerator OPDR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1af2eec0b97a4acb5b30ee3bf735574c98"></a>


#### Enumerator SRTS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a4651bfef3170b3b8901482d9c4c1a12a"></a>


#### Enumerator MCHI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ab929c937388ea5e89f8adb0a632b51ba"></a>


#### Enumerator IGTO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1af0227bf27316381e198169a5d0d85a9f"></a>


#### Enumerator FTAN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a8b8fd2bb12ff4de6fc5fac899ab3a731"></a>


#### Enumerator FCMM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1ad002f09ebcf3fda34d42ada0d1067385"></a>


#### Enumerator CHZN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a545dcd5ffd62c248e5111b47079be93f"></a>


#### Enumerator MCSD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1adc1d1a9fa5495949232e738f92874f22"></a>


#### Enumerator CSDX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a3d7d4effd4842dc581554e2d94aba231"></a>


#### Enumerator CSDY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a52a1a331f75879d90cb2b112fa348a7d"></a>


#### Enumerator CSTX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a9b3257f452b6ad2d2e2da5e68d531235"></a>


#### Enumerator CSTY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a0321ecf49c7adcb76a426a8d3966f32f"></a>


#### Enumerator CSTZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1a92bcb7af31a91fbaa508ee44e5abfdd1a82e8e72a21fd39faace9d39436a435d1"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.MCE.MultiConfigOperandType"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
