# Namespace ZOSAPI::Editors::MFE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Editors::MFE::IMeritFunctionEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor)
* [ZOSAPI::Editors::MFE::IMFERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row)

## Enumeration types

### Enumeration type MeritOperandType

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4"></a>

![][public]

**Definition**:


```csharp
enum MeritOperandType {
  ACOS,
  ABSO,
  CVVA,
  DENC,
  DENF,
  DIFF,
  AMAG,
  ANAC,
  ANAR,
  ANAX,
  ANAY,
  ANCX,
  ANCY,
  ASIN,
  ASTI,
  ATAN,
  AXCL,
  BIOC,
  CTVA,
  CVGT,
  CVLT,
  CVOL,
  DIMX,
  DISC,
  DISG,
  DIST,
  DIVI,
  DLTN,
  DMFS,
  DMGT,
  DMLT,
  DMVA,
  DXDX,
  DXDY,
  DYDX,
  DYDY,
  EFFL,
  EFLX,
  EFLY,
  ENDX,
  ENPP,
  EPDI,
  EQUA,
  ETGT,
  ETLT,
  ETVA,
  EXPP,
  FCGS,
  FCGT,
  FCUR,
  FICL,
  FICP,
  FOUC,
  GBPD,
  GBPR,
  GBPS,
  GBPW,
  GBPP,
  GBSD,
  P1GT,
  P1LT,
  P1VA,
  P2GT,
  P2LT,
  P2VA,
  P3GT,
  P3LT,
  P3VA,
  P4GT,
  P4LT,
  P4VA,
  P5GT,
  P5LT,
  P5VA,
  P6GT,
  P6LT,
  P6VA,
  P7GT,
  P7LT,
  P7VA,
  P8GT,
  P8LT,
  P8VA,
  PANA,
  PANB,
  PANC,
  PARA,
  PARB,
  PARC,
  PARR,
  PARX,
  PARY,
  PARZ,
  PATX,
  PATY,
  PETC,
  PETZ,
  PIMH,
  PLEN,
  PMAG,
  POWR,
  PRIM,
  PROD,
  PMGT,
  PMLT,
  PMVA,
  POPD,
  QOAC,
  QSUM,
  RAGA,
  RAGB,
  RAGC,
  RAGX,
  RAGY,
  RAGZ,
  RAED,
  RAEN,
  RAID,
  RAIN,
  RANG,
  REAA,
  REAB,
  REAC,
  REAR,
  REAX,
  REAY,
  REAZ,
  RELI,
  GBSR,
  GBSS,
  TGTH,
  TMAS,
  TOTR,
  TRAC,
  TRAD,
  TRAE,
  TRAI,
  TRAN,
  TRAR,
  TRAX,
  TRAY,
  TRCX,
  TRCY,
  TTGT,
  TTHI,
  TTLT,
  GBSW,
  GBSP,
  GCOS,
  GENC,
  GENF,
  GLCA,
  GLCB,
  GLCC,
  GLCX,
  GLCY,
  GLCZ,
  GMTA,
  GMTS,
  GMTT,
  GOTO,
  GPIM,
  GRMN,
  GRMX,
  GTCE,
  HACG,
  HHCN,
  I1GT,
  BIOD,
  BIPF,
  BLNK,
  BSER,
  CENX,
  CENY,
  CMFV,
  CMGT,
  CMLT,
  CMVA,
  CODA,
  COGT,
  COLT,
  COMA,
  CONF,
  CONS,
  COSI,
  COVA,
  CTGT,
  CTLT,
  I2GT,
  I3GT,
  I4GT,
  I5GT,
  I6GT,
  I1LT,
  I2LT,
  I3LT,
  I4LT,
  I5LT,
  I6LT,
  I1VA,
  I2VA,
  I3VA,
  I4VA,
  I5VA,
  I6VA,
  IMAE,
  IMSF,
  INDX,
  ISFN,
  ISNA,
  LACL,
  LINV,
  LOGE,
  LOGT,
  LONA,
  LPTD,
  MAXX,
  MCOG,
  MCOL,
  MCOV,
  MINN,
  MNAB,
  MNCA,
  MNCG,
  MNCT,
  MNCV,
  MNDT,
  MNEA,
  MNEG,
  MNET,
  MNIN,
  MNPD,
  MNSD,
  MSWA,
  MSWS,
  MSWT,
  MTFA,
  MTFS,
  MTFT,
  MXAB,
  MXCA,
  MXCG,
  MXCT,
  MXCV,
  MXDT,
  MXEA,
  MXEG,
  MXET,
  MXIN,
  MXPD,
  MXSD,
  NPGT,
  NPLT,
  NPVA,
  NPXG,
  NPXL,
  NPXV,
  NPYG,
  NPYL,
  NPYV,
  NPZG,
  NPZL,
  NPZV,
  NSDC,
  NSDD,
  NSRA,
  NSTR,
  NTXG,
  NTXL,
  NTXV,
  NTYG,
  NTYL,
  NTYV,
  NTZG,
  NTZL,
  NTZV,
  OSCD,
  OBSN,
  OOFF,
  OPDC,
  OPDM,
  OPDX,
  OPGT,
  OPLT,
  OPVA,
  OPTH,
  OSUM,
  RENA,
  RENB,
  RENC,
  RETX,
  RETY,
  RGLA,
  RSCH,
  RSCE,
  RSRE,
  RSRH,
  RWCH,
  RWCE,
  RWRE,
  RWRH,
  SAGX,
  SAGY,
  SFNO,
  SINE,
  SKIS,
  SKIN,
  SPCH,
  SPHA,
  SQRT,
  SSAG,
  SUMM,
  SVIG,
  TANG,
  TFNO,
  WFNO,
  TTVA,
  UDOP,
  UDOC,
  USYM,
  VOLU,
  WLEN,
  XDVA,
  XDGT,
  XDLT,
  XENC,
  XENF,
  XNEA,
  XNEG,
  XNET,
  XXEA,
  XXEG,
  XXET,
  YNIP,
  ZERN,
  ZPLM,
  ZTHI,
  TOLR,
  FTGT,
  FTLT,
  GLCR,
  EFNO,
  DIVB,
  PROB,
  TCGT,
  TCLT,
  TCVA,
  NORX,
  NORY,
  NORZ,
  NORD,
  COSA,
  MTHA,
  MTHS,
  MTHT,
  BFSD,
  EXPD,
  CVIG,
  GPSX,
  GPSY,
  GPRX,
  GPRY,
  GPRT,
  POWF,
  STHI,
  CNPX,
  CNPY,
  CNAX,
  CNAY,
  STRH,
  CIGT,
  CILT,
  CIVA,
  CEGT,
  CELT,
  CEVA,
  NSST,
  ABCD,
  DISA,
  POWP,
  RECI,
  NSRM,
  FDMO,
  FDRE,
  FREZ,
  NSDE,
  ERFP,
  NSDP,
  POPI,
  ABGT,
  ABLT,
  SMIA,
  SCUR,
  SDRV,
  REVR,
  NSLT,
  NSTW,
  NSRW,
  MNRE,
  MXRE,
  MNRI,
  MXRI,
  CEHX,
  CEHY,
  BLTH,
  GBPZ,
  NSRD,
  NPAF,
  MECS,
  MECT,
  GMTN,
  GMTX,
  MTFN,
  MTFX,
  MTHN,
  MTHX,
  MECA,
  MSWN,
  MSWX,
  GAOI,
  MNAI,
  MXAI,
  HYLD,
  OGSS,
  SPHD,
  SPHS,
  SSLP,
  SCRV,
  DSAG,
  DPHS,
  DSLP,
  DCRV,
  EFLA,
  CARD,
  TSAG,
  PSLP,
  QSLP,
  RRET,
  MWCE,
  MWCH,
  MWRE,
  MWRH,
  GSCE,
  GSCH,
  GSRE,
  GSRH,
  REQS,
  RSNC
}
```


All supported Merit Function operands.


#### Enumerator ACOS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2655b658707a1e9bc2d9ece8e81434fd"></a>


#### Enumerator ABSO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5559da56477455e2d0902d0e6610f15b"></a>


#### Enumerator CVVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0546f39222b24103bd04e08686e5e5fa"></a>


#### Enumerator DENC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a83577fd7390d1725e3742b13f044fa58"></a>


#### Enumerator DENF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a58c40790176a3febd0b340a9ef93337a"></a>


#### Enumerator DIFF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa2e1ec2dd3d8195d238c5494f0ac5578"></a>


#### Enumerator AMAG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6086710422b77994d1073e9453a9a1f3"></a>


#### Enumerator ANAC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a588d1e60863303b5763c2513222cc078"></a>


#### Enumerator ANAR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a397d90cc6e932fc4146c92d2b9e8e6f8"></a>


#### Enumerator ANAX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9b9cbc1690f1ee00a2edb53d29f86be6"></a>


#### Enumerator ANAY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4accbd9c9ef213964a4322132f88f5a781"></a>


#### Enumerator ANCX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7419db12c1b6e5fdf500d99ce7a58c78"></a>


#### Enumerator ANCY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1d582d62d2e0f1fb9bb1f7a7f808c0ab"></a>


#### Enumerator ASIN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8db07d2e99c2a6161d6dc93c2fe4efff"></a>


#### Enumerator ASTI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a49ca9ba2eea8dda8d53ebcaf817f1e5a"></a>


#### Enumerator ATAN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac48a365c0a15f8c01a4006d6a17da5be"></a>


#### Enumerator AXCL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0736268d89654f60f91c34d3efe7d57c"></a>


#### Enumerator BIOC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7619d622a20943ac38bc361dc115fc51"></a>


#### Enumerator CTVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a19f57b72476b54ae9c9df68b67347294"></a>


#### Enumerator CVGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6b91aaa9cff515f8e9f15a26fd7b7fec"></a>


#### Enumerator CVLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a073cf22fc78dff13f55a4c322999b325"></a>


#### Enumerator CVOL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a20cf4668f0cc97bd1dc551d4ebf2491b"></a>


#### Enumerator DIMX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9fe541807fc94c15ca8093d6edd83f4b"></a>


#### Enumerator DISC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a68e9d3292f3b97d000620c75e8795871"></a>


#### Enumerator DISG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a017317fd859499fa2de04012bbd9e484"></a>


#### Enumerator DIST

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5e8020b2404960f042199adbc9363e28"></a>


#### Enumerator DIVI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad6e0206491ca2c479680b6a7b98162bc"></a>


#### Enumerator DLTN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a44f2d4944dfad733c58d23d9fc31f4ab"></a>


#### Enumerator DMFS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a17fdc381b9f46d0878ce39930d6a3e89"></a>


#### Enumerator DMGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab535f7c05b5d081622e50461a3ccf674"></a>


#### Enumerator DMLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae101f2ce39b93d18a7f6ebfa52a2a868"></a>


#### Enumerator DMVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae3d40a5d46e0cb99f7d9736e449839f4"></a>


#### Enumerator DXDX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad0798b6676b54d624b337da790825173"></a>


#### Enumerator DXDY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7e427d611095dfb0abb5f6607124bd86"></a>


#### Enumerator DYDX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aab0e9b0d2cd437c917eda38d15489215"></a>


#### Enumerator DYDY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5f6c8bb27f91e8ead032b4caab9dea65"></a>


#### Enumerator EFFL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abc4bd14661d1fec21df1d9bdab1135a7"></a>


#### Enumerator EFLX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa672a614aadd91cd9cec0d64ad245c5f"></a>


#### Enumerator EFLY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5b1d84b1f0eb9780012af864a0386190"></a>


#### Enumerator ENDX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a37de693ef2a11fa2f8aabbf22abba913"></a>


#### Enumerator ENPP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab82c2c79ebe7ce5270727c4a04bee1d4"></a>


#### Enumerator EPDI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a917c0db24a369e537828f30413cda344"></a>


#### Enumerator EQUA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5a102f2499ac80904145705a4c8dca39"></a>


#### Enumerator ETGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2627505f6ba4f062382fbd0201fdc6ac"></a>


#### Enumerator ETLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1171654f9bf18cd67d4f26ca106be976"></a>


#### Enumerator ETVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab675505524980ce9065e9dbbf6aee804"></a>


#### Enumerator EXPP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a71547f6b28a68f3630433284240086c1"></a>


#### Enumerator FCGS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aded9d482ef333c1353fc25778aa0c157"></a>


#### Enumerator FCGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9e599d71474ebf706d0065a368d313af"></a>


#### Enumerator FCUR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a499bee18b7f1165660ac924b6f20c2c6"></a>


#### Enumerator FICL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0856f6b9f1842bd3f2de98c760778d3b"></a>


#### Enumerator FICP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4adbc51badf9388d1a62e4a1c83acecfe5"></a>


#### Enumerator FOUC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9cb3fdbfe11a2dd2a4ce754dcdf4769c"></a>


#### Enumerator GBPD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa6755e44f60c6b4708ce5e7db81dce74"></a>


#### Enumerator GBPR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abf2fbdb8b3796925d69754bedeb1152e"></a>


#### Enumerator GBPS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9cc32041bbd4808b1bd30f59fede2fe1"></a>


#### Enumerator GBPW

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a54763d17375c1e7c667a8e8f5023b519"></a>


#### Enumerator GBPP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac631228322b4e4184b4211bdd6e0c287"></a>


#### Enumerator GBSD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a60f64d64b0d0c4d74271faf0e171977e"></a>


#### Enumerator P1GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4afb8301566a8f70b0dc942bacaec0b442"></a>


#### Enumerator P1LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5e797e9ef32dbeff7d606478ec3f4721"></a>


#### Enumerator P1VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac043602b304e538009b607dfb5930f45"></a>


#### Enumerator P2GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a4eb3f40cf6ae819dee47b4aae793d65f"></a>


#### Enumerator P2LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0f987e6b2cd0a7a5f21400978cc2b36c"></a>


#### Enumerator P2VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a02c147fca0539b21da653a606fb7b1a8"></a>


#### Enumerator P3GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab2619de2821e6de55a44662faa2eae9d"></a>


#### Enumerator P3LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a732ce664c17bdd7e147273b683a52380"></a>


#### Enumerator P3VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac9725113ba089f9c317883a254d97317"></a>


#### Enumerator P4GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8d4764348e6c24125294f3ba990c7f83"></a>


#### Enumerator P4LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0d4907b8d886ad7fd546c83f704f9589"></a>


#### Enumerator P4VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aead2acbabfef4b9a1e4aea2569e24d11"></a>


#### Enumerator P5GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a488c3abf73b241e57d3dbf6764bfe86f"></a>


#### Enumerator P5LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af8b24134252515911f087e9e40311cb5"></a>


#### Enumerator P5VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4acd3f6606ef9aeb07d3c3baec23fedabb"></a>


#### Enumerator P6GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abac29f492e9220c3c3fb0bcf74bb25df"></a>


#### Enumerator P6LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2941145b7cd949246a65186439d99367"></a>


#### Enumerator P6VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4adcc3010e0e72afa17edd0676f5844a8a"></a>


#### Enumerator P7GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a369e9520395eabe1e82ab94d325b5ecb"></a>


#### Enumerator P7LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a67de309e00eabd82cf9de74b31eda676"></a>


#### Enumerator P7VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a01e99088a9adc8b5e439bee8337f8b07"></a>


#### Enumerator P8GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a096a05f60b3977721abbb95e84d652c5"></a>


#### Enumerator P8LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae86b303f2d75e3c497eb5f79e4847c50"></a>


#### Enumerator P8VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a31adf94080f1aefb568ca3a7dbbf36df"></a>


#### Enumerator PANA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a991f39b70cd28004fede8c6e6580294e"></a>


#### Enumerator PANB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3994e0cb122173b4b04c570719b9d7cd"></a>


#### Enumerator PANC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a461def722de309cf8d36dd970ce0eb56"></a>


#### Enumerator PARA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9ccf6052d011f766b9cd93d3a96fbafe"></a>


#### Enumerator PARB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a302c01899508eee942049a8105e8bbdb"></a>


#### Enumerator PARC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4acb0f997c3c48090a46d21b997ac18028"></a>


#### Enumerator PARR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a4ada1facf69d4e9906422709cc4b9149"></a>


#### Enumerator PARX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abfb6995762b87856d1f6ea68bc4f28db"></a>


#### Enumerator PARY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0b52f9d29002c2d308dc121fb4a3140b"></a>


#### Enumerator PARZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a950a00f5eda0a97780b95da04404a1c5"></a>


#### Enumerator PATX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a14152da1d0f25a10290c50bc038c9c2f"></a>


#### Enumerator PATY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa65d154bc1d3e3ee0ca15230f23a5cfd"></a>


#### Enumerator PETC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9f2ec7f7c1a4d189997cc8403567b8f5"></a>


#### Enumerator PETZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a05b90c70ef79bd046ee3bfabeee2c4a4"></a>


#### Enumerator PIMH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5fc8a9fcea741a00414415cd97497eed"></a>


#### Enumerator PLEN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a77153b82f91d756434ab119b3c5b130e"></a>


#### Enumerator PMAG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa92f4d197e61fbc9ebb600888953e9ca"></a>


#### Enumerator POWR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab7f80b6f00688b1b01131afba567c454"></a>


#### Enumerator PRIM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a954b965bc0539f07ab3090129a0d4b2d"></a>


#### Enumerator PROD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac8074bb318fb85693233e64acc64c1ed"></a>


#### Enumerator PMGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7c47a11b70b7244f7765e80c9e4e8298"></a>


#### Enumerator PMLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a93716175eaaa9519584634288a20cdfb"></a>


#### Enumerator PMVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2ed0ecf1c38b11ed15b62f0142c30c2a"></a>


#### Enumerator POPD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a71e9bbb8caf51b47e0f1c6cd99a5598d"></a>


#### Enumerator QOAC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a22cb4cfbe9948f3a9bbc867f663fc24a"></a>


#### Enumerator QSUM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9e729ed21825c98687f1408fb9b18b77"></a>


#### Enumerator RAGA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a169c84ad329ea6f6f45e9eb84dcad74c"></a>


#### Enumerator RAGB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae9c2e13f75201e108d35620a540e9509"></a>


#### Enumerator RAGC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9a925e67c89dea015c1b8641a1c90d86"></a>


#### Enumerator RAGX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac2af0c59d760767d44c4dcc6ae182693"></a>


#### Enumerator RAGY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aeb8498da503974fc891c07544685d868"></a>


#### Enumerator RAGZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a63af930ed243ab96283c2e78e912c563"></a>


#### Enumerator RAED

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a672743966a1cfb98b368884f86183c30"></a>


#### Enumerator RAEN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a4b1b13cd65b2b52fd7a74cf26ebc061a"></a>


#### Enumerator RAID

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4acf91513c6fc63cebe4b63a6647238d6d"></a>


#### Enumerator RAIN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad7e2f2aa12a4e55b15dac50965e7eac4"></a>


#### Enumerator RANG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4adc5bf69f0e2a79ab9679e689454f48e0"></a>


#### Enumerator REAA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae233e69e16c9e1b88de984aa097f9547"></a>


#### Enumerator REAB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac1e8458c60ab9c38691301c2ff010f0e"></a>


#### Enumerator REAC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a385c3e09f94588ad8a37a4d0159dd604"></a>


#### Enumerator REAR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a601f95fa9315af03ca04a79741023922"></a>


#### Enumerator REAX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac5a3050b9802ce5fba2b8dfb668b5fbe"></a>


#### Enumerator REAY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4afeacdd58c9f7bf8bfbfedef9eb107deb"></a>


#### Enumerator REAZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3dc57d233cf43682d6e87ccdf09ed81a"></a>


#### Enumerator RELI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad1883a9c433e913630832846d14a6cd3"></a>


#### Enumerator GBSR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a4df2a3b4543ee616345f5cbcf04dc7bf"></a>


#### Enumerator GBSS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5ba268cd4c4cfbec3304fa085222d150"></a>


#### Enumerator TGTH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5d730eb8988255add1bd6e2cfcdd5fff"></a>


#### Enumerator TMAS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a625d9c9b00f885961f5d519e09533a61"></a>


#### Enumerator TOTR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6dee40a34b5a10aef03b928a0430174d"></a>


#### Enumerator TRAC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8a871da1bcef7796d79ae9b404c396db"></a>


#### Enumerator TRAD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab35bbbf46137381ad1a7d417d6cb68da"></a>


#### Enumerator TRAE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad9ef608d5d178b1572c51c6fa77adf57"></a>


#### Enumerator TRAI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a563427ac5d7f0b1df9b55f38658790d1"></a>


#### Enumerator TRAN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9c7c0b411e94135e77cd8802bf895fdd"></a>


#### Enumerator TRAR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aabed2e949528078dfb73fa5c47976769"></a>


#### Enumerator TRAX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a4a135a99b8e57e7897a9bad8d1cecf08"></a>


#### Enumerator TRAY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a97374fc5f089567cbf916be07bea461f"></a>


#### Enumerator TRCX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac1c6a4c6dbca7780b11341c3d167bbe1"></a>


#### Enumerator TRCY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1ff1f916d74584dbe5c7dd4d5295c094"></a>


#### Enumerator TTGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad391ef7bc4c28fc9dba33808e178d587"></a>


#### Enumerator TTHI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a910ede80bc0fefc5f008d5d72a699a5d"></a>


#### Enumerator TTLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a036e2b4548cf9dcd05115d4c270745a9"></a>


#### Enumerator GBSW

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a50bdf1d49abcc72b48632a31df6caafb"></a>


#### Enumerator GBSP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a290e5f51ce74c058724b324795284ffb"></a>


#### Enumerator GCOS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af3ddd20d036f75b68529a71e097b5753"></a>


#### Enumerator GENC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a39869923dc20512c639e763724603208"></a>


#### Enumerator GENF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a38b3e615b43aecd277d5119b1661ff61"></a>


#### Enumerator GLCA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae9bc361f1acd4e7aff951444eaba490d"></a>


#### Enumerator GLCB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae10025eeab05a0d9a051457d8f51fc44"></a>


#### Enumerator GLCC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a581df5e27a45bda12456af6319939356"></a>


#### Enumerator GLCX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a272aa13229c7c77235aff115904c6d58"></a>


#### Enumerator GLCY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a54871bbab2792f451abbaa9c6c142316"></a>


#### Enumerator GLCZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad4b7df4e58016937e5c435a2f378708c"></a>


#### Enumerator GMTA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8910e0f578838957354b318aae040695"></a>


#### Enumerator GMTS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aeecac37644d1cfa40c7de730ff309a7f"></a>


#### Enumerator GMTT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac9d6e298fb3769b779ff38da485e3e39"></a>


#### Enumerator GOTO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a4b8bb3c94a9676b5f34ace4d7102e5b9"></a>


#### Enumerator GPIM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7f4a29f0921fee1504e430ff53bcd2aa"></a>


#### Enumerator GRMN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac68259b0048b994530cc9e170f73cc39"></a>


#### Enumerator GRMX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a22b0d2e6e1b6fb2ae00a83ca1acd6077"></a>


#### Enumerator GTCE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7afd9c276fff1cd5c316d653fa648be1"></a>


#### Enumerator HACG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8f0af68eb17ba75d0591fc03953cfe67"></a>


#### Enumerator HHCN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a426fda00d66f5fbbe131f6dd0f00a1e5"></a>


#### Enumerator I1GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a528434513bc0273d9cb594684c9c8f0f"></a>


#### Enumerator BIOD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0f7a24e8e69c2588443da39b3d2ca651"></a>


#### Enumerator BIPF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a809cf508927c340617faaa37173c1d33"></a>


#### Enumerator BLNK

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aadbe5eed648986d372af87bcef874466"></a>


#### Enumerator BSER

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad755defb84a922e39848032c393c8311"></a>


#### Enumerator CENX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a81f9b683d41b1388b7498ce16dda8e6f"></a>


#### Enumerator CENY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a33355ee24269c37160666bfd905724f1"></a>


#### Enumerator CMFV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2bc7c50e4fb6d56010f0262d5fa015cb"></a>


#### Enumerator CMGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a50acb905f53db42742e61df327d03f1d"></a>


#### Enumerator CMLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aefafc88f0ba8431d8dd9dcc99bf48593"></a>


#### Enumerator CMVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae103270a4fa8ff343662bc7069221359"></a>


#### Enumerator CODA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9ec4f157c7e21b40ea634afc4b23f3a2"></a>


#### Enumerator COGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3a4634b7b2278beff8b412fa6851bf14"></a>


#### Enumerator COLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ade2bb75f3cb18b0ff1c2d2d2a3f5da22"></a>


#### Enumerator COMA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab0b1bcea7821bb3c846c929f8f1e3ef4"></a>


#### Enumerator CONF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8d428c502adec040b6a51e880034b9f4"></a>


#### Enumerator CONS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7e0f176d285c0c26bfbed0e1711f791f"></a>


#### Enumerator COSI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad7ea9040065c7f808465f7eeb490bbf6"></a>


#### Enumerator COVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2ecec2ca49b8056b61a2f9ee439de5fb"></a>


#### Enumerator CTGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4acf1f627842ece8cf1bf75bdf0767a8be"></a>


#### Enumerator CTLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a374827dcd5d878479eca63240d94c654"></a>


#### Enumerator I2GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5d1361962fb4159b95cf0692b0235ed2"></a>


#### Enumerator I3GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa0aea85e1a5365340011a130dee228c7"></a>


#### Enumerator I4GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6fd752c2fbf6986ad51f2d836a8f0244"></a>


#### Enumerator I5GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a38df80c4ed377c89b2a7abf623dd5106"></a>


#### Enumerator I6GT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa5745a8e933b77c238503fbdb2673c1c"></a>


#### Enumerator I1LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6d423128fb1f9a64140548848ccf4122"></a>


#### Enumerator I2LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7a38d68a5dc9d92d7f305f3c1f0c778c"></a>


#### Enumerator I3LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a745f4b11cc53bcabb17c7f69c0930ec6"></a>


#### Enumerator I4LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a37cfc6d95ac2bc8668e182b8f985cc18"></a>


#### Enumerator I5LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aae8b4c5705a71376a6ada941c2809f54"></a>


#### Enumerator I6LT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a77a4ab3d428311a1cca741d7b59d0da5"></a>


#### Enumerator I1VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae8b1200afc07260907ca78e3d0899423"></a>


#### Enumerator I2VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a425939ff4cc81c2a200b1888fe0cdfd5"></a>


#### Enumerator I3VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6ad2b0332908574103d329ce1eec6910"></a>


#### Enumerator I4VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a60f40a630a0377a3cb27b3429309693f"></a>


#### Enumerator I5VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa172fb991273aaf33cb93bda72839440"></a>


#### Enumerator I6VA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2ced846c601d6092e45f11b173599c2f"></a>


#### Enumerator IMAE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a30a0fbb4a2003280d318ba084cb30ea4"></a>


#### Enumerator IMSF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a855a8f54c70b82cc2c090b433641f084"></a>


#### Enumerator INDX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0eaaa8c3c6978cf2464d3872fc17b699"></a>


#### Enumerator ISFN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7d50b42bad63334aea1708d6fd0cedb0"></a>


#### Enumerator ISNA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac09d0a7dbdb598819643dd072f27dfcb"></a>


#### Enumerator LACL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1c1d0acfd849e3c9c8db0cc734e8d04a"></a>


#### Enumerator LINV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a449b046199efb25944f9363fb822ecf3"></a>


#### Enumerator LOGE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7398540572b64574a02af24a36b1d8ec"></a>


#### Enumerator LOGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad9665c002ea48d464699d443443f42d9"></a>


#### Enumerator LONA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa73d19ec5db4a285d2d6200fc23dc7a9"></a>


#### Enumerator LPTD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab960a5dd20decd1d8bdff890c06bf5b3"></a>


#### Enumerator MAXX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0c208b98a7c8d063f6cf39b9517231d9"></a>


#### Enumerator MCOG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a06bde51a92079066978871c37049211f"></a>


#### Enumerator MCOL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1c18ab886fd640459bea8a426d7f3b90"></a>


#### Enumerator MCOV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8c875614be126e2742439f4918f218c1"></a>


#### Enumerator MINN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2c4bb6dcd8c03747e029a286463f9606"></a>


#### Enumerator MNAB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aef044a3af905053cc77fb80b9dff9f19"></a>


#### Enumerator MNCA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aed284f17912100dfcabe9d4487a8d490"></a>


#### Enumerator MNCG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2a305ede1c837acecd74d8f107433ecd"></a>


#### Enumerator MNCT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5013c29288022dd90803e85e72c2f5f1"></a>


#### Enumerator MNCV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1a0ff6ab25b87743f31579543435b5d4"></a>


#### Enumerator MNDT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa99396abf06290f01ea716eb228022f2"></a>


#### Enumerator MNEA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab97fdd150bcaac88cebf9e6a30be873f"></a>


#### Enumerator MNEG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5af1f1e8ff82c78252ea83c5dc5821b8"></a>


#### Enumerator MNET

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1770c5e432f8bafd30fffdd402049005"></a>


#### Enumerator MNIN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a690a355d698c1f656406d4066613c2cb"></a>


#### Enumerator MNPD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae24c5cfdfc45489ac94eb708cded4ed7"></a>


#### Enumerator MNSD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad525ca9e36955bdd98d966aff925b70a"></a>


#### Enumerator MSWA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abb00e05b250e7da3a2c49bbfd2a7aee7"></a>


#### Enumerator MSWS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad5fccf38fce3d4a8a9e510f2094cf04a"></a>


#### Enumerator MSWT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a53fbc81676ec66f5e4de52c013a3feef"></a>


#### Enumerator MTFA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af21946faaaa1c7062a8e125d112604f2"></a>


#### Enumerator MTFS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4afa9dbc0b48f0b8c2bb03b153baf95989"></a>


#### Enumerator MTFT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aaec230d6ac82e7fed0a46610127cd351"></a>


#### Enumerator MXAB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a23e45a9a1c97c76e3549c6c1abb4fd0a"></a>


#### Enumerator MXCA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a996a0709493a28e5d216341b43274e91"></a>


#### Enumerator MXCG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a594d387774043ff4a6d1d47f0cc3fbd5"></a>


#### Enumerator MXCT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a99edb1ce9d5dc7b7567d699d6c90ba1a"></a>


#### Enumerator MXCV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6d2ade96c9147a939db2ddda2d91cbc6"></a>


#### Enumerator MXDT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a380cd234b0c862100420de22a20d1fda"></a>


#### Enumerator MXEA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af4f4b2cb4630735bc159ce5e21394639"></a>


#### Enumerator MXEG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a74c610dd8ee6be45963a01006dc689f3"></a>


#### Enumerator MXET

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abfa4a10f218575142e6d0cc3a85e5ced"></a>


#### Enumerator MXIN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa7d88a16553e99205a671c45a3cda499"></a>


#### Enumerator MXPD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a858bdff75894e044f228097146dab8f6"></a>


#### Enumerator MXSD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac2adb677acee58171c4d64bd479b8d0a"></a>


#### Enumerator NPGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a030bb17a68fae0944185e99ea16c1386"></a>


#### Enumerator NPLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a811eccd28619513b48eaa68a6934b7ba"></a>


#### Enumerator NPVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a22a071fa810ed078e111c4856f53e5c0"></a>


#### Enumerator NPXG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a25a39d5c1b461c6ba9fa89dff5fa9d68"></a>


#### Enumerator NPXL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2d27e5ca730d0a9bea337506909eec4a"></a>


#### Enumerator NPXV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae766aea24d0feb02c04958194f8fa9dd"></a>


#### Enumerator NPYG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aaa3cbfc78ddc3232ea1c5a4359e9eb7f"></a>


#### Enumerator NPYL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af5dcd6a2f154343bd87f4c28c8ff542e"></a>


#### Enumerator NPYV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a05ac1bb13270807d25b1ff714a9a75f3"></a>


#### Enumerator NPZG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9b970ecfee4fc313738597bd91a64c0e"></a>


#### Enumerator NPZL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9e006e2b8526d9ade9285814bcf62c6b"></a>


#### Enumerator NPZV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9d4e379bdfaa8b9c9a3a10bd2014cc0d"></a>


#### Enumerator NSDC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abf35ec94060dd9dfd51dcaecdd18639d"></a>


#### Enumerator NSDD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abde021c3f358f267fee2e762cbeff096"></a>


#### Enumerator NSRA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6cb9d6e26efdd29ad06578a9c688ae12"></a>


#### Enumerator NSTR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4afcfabf70c027aa7c2e894a38cd331e6f"></a>


#### Enumerator NTXG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a996fca5dd0de543ecbb4f7190a82b9d2"></a>


#### Enumerator NTXL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a767ea325740e6bef213332a3f40bae48"></a>


#### Enumerator NTXV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aea27c735eb14d814d0d09cc0b361a0d6"></a>


#### Enumerator NTYG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6db99f68bcd05d6b8d191253b73973ba"></a>


#### Enumerator NTYL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9e09a43ad79aa8d98e5b384c3c80e187"></a>


#### Enumerator NTYV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2c581e1025c4f4fcaf089b56513219e5"></a>


#### Enumerator NTZG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a113f32853d934afc906d3ae54abd539f"></a>


#### Enumerator NTZL

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af672c0f9046856d1361a648296910fa9"></a>


#### Enumerator NTZV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a875fd069b160fa44767c4b2ac4dba9ea"></a>


#### Enumerator OSCD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3609d4f641812328e29ba24a43c82192"></a>


#### Enumerator OBSN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a93fd38a54babbda9c0f0f4f63d97d094"></a>


#### Enumerator OOFF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a99e42984460bcf0a303909cbfbc9d2e5"></a>


#### Enumerator OPDC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9e154fc7905659bfe21e63b911f2a289"></a>


#### Enumerator OPDM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae71497180948ac941644d9321c76f197"></a>


#### Enumerator OPDX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a975a10ff820f505128d014c43b61ad24"></a>


#### Enumerator OPGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae984f773337a627455613be40ab12461"></a>


#### Enumerator OPLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a48ac73c07c5430143f8c5bf513a5bde2"></a>


#### Enumerator OPVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5908c33ffcd2a298eab322f0e929af58"></a>


#### Enumerator OPTH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab24c56d637406103e4ce9797113ff9ee"></a>


#### Enumerator OSUM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3204cb08e2a3e30a7fbf78d09229831b"></a>


#### Enumerator RENA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a79f47296336395f0e1cf4777c5901074"></a>


#### Enumerator RENB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a76ebd049a1b18adfcf9ddc581ba8ef18"></a>


#### Enumerator RENC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a80f143b7bc6349a939c7f1c8c741e3f5"></a>


#### Enumerator RETX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a40b8a3bd738535b86f6385b7c7748069"></a>


#### Enumerator RETY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa5b46eeb96cc7c86885d32da287caefe"></a>


#### Enumerator RGLA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9a2549d9a06b59e81ac78885b1b770a8"></a>


#### Enumerator RSCH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a499033391cffcee285da413a892614c5"></a>


#### Enumerator RSCE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7d7415aa8513f27847285e75bb4b0be0"></a>


#### Enumerator RSRE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8485f9f3d9f239abb536ece2c99509da"></a>


#### Enumerator RSRH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a41e0178672ddf964777c3e1c766312ac"></a>


#### Enumerator RWCH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aedbf1fce44515785e88a5ed375978778"></a>


#### Enumerator RWCE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a37fb302bfd324a8431889be313f37983"></a>


#### Enumerator RWRE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a516db61f4d3b98605aa11cbf1c434cd8"></a>


#### Enumerator RWRH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab843e4f9ab804c224c057b6616d7afda"></a>


#### Enumerator SAGX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aae0b47ed300937575ea914b26087c637"></a>


#### Enumerator SAGY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a707db511e4d2f6c23b21a27978d9a899"></a>


#### Enumerator SFNO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af072e1c8a5c068e91522f130f0ae2587"></a>


#### Enumerator SINE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aeed52f6fa986d4fb81f722d6ea5f38bf"></a>


#### Enumerator SKIS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6b780715447a2082a45747169a9b8e84"></a>


#### Enumerator SKIN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a017ef937cce02f08a30f875ebcb80a60"></a>


#### Enumerator SPCH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a80a99cc2e219f9df62bcafb4c7be1a4c"></a>


#### Enumerator SPHA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab1c2009b73d53c2d5e67d004e883cac4"></a>


#### Enumerator SQRT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a36875f2500a09ee35d0bb7eb8c0b91b0"></a>


#### Enumerator SSAG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af69f640a5af125784ad12c99a466bb7a"></a>


#### Enumerator SUMM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4acf9f62990300c38ba0ff5dd8965bd953"></a>


#### Enumerator SVIG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af0af2f75a60b71713824237d8ded9898"></a>


#### Enumerator TANG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af16c9b9f4b56fd6de67f3a4fcafb1ea3"></a>


#### Enumerator TFNO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2712f730c581e180e085ea847a30010a"></a>


#### Enumerator WFNO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7d1c6c59915c86d7bcf923a367b7e018"></a>


#### Enumerator TTVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a4888d930012ac9ad6483e86fda7b4461"></a>


#### Enumerator UDOP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aae987c93591bf0fbb280669358a6a3fd"></a>


#### Enumerator UDOC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1efc08a5fffb24f3752815d9792b7cb2"></a>


#### Enumerator USYM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae1386f5bc195af9b271fb713bf8af72b"></a>


#### Enumerator VOLU

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a35f539205a21c73c1504917c93d5f138"></a>


#### Enumerator WLEN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0b2414481c4b8a0da0d3417f1fc62c6c"></a>


#### Enumerator XDVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac35021780c5f69baf03c27f3febae0c9"></a>


#### Enumerator XDGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a61b34ba14fb212d95a6aa02f3cae334d"></a>


#### Enumerator XDLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad73229486294e1ae15add0df419deb5d"></a>


#### Enumerator XENC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abacd902bfa7e3cb09edf2b492dbf6e42"></a>


#### Enumerator XENF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a711a26d57d2049c0695e1f6f5f264a79"></a>


#### Enumerator XNEA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4abb7dbc76e71879b06a2b6e3f99a4666d"></a>


#### Enumerator XNEG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab204b0d9200c2d073f28617fd1174474"></a>


#### Enumerator XNET

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0d347f298ee466ef649b75c78846597f"></a>


#### Enumerator XXEA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af6b487327c88b236e87dac26fe87a5c7"></a>


#### Enumerator XXEG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad2b0087a60fb1b7d7082b1d4766a93b4"></a>


#### Enumerator XXET

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac13b62fa59af649e287d3952cdb3e71c"></a>


#### Enumerator YNIP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a752de4f4bef5e921a45f83123dad459c"></a>


#### Enumerator ZERN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a66538f3d20ac231216b17512c4fe6f97"></a>


#### Enumerator ZPLM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a22ba68b95005ed1500dcb03b9cb43a0e"></a>


#### Enumerator ZTHI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1050d2ce5648682d57bd54c7faf976cb"></a>


#### Enumerator TOLR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1fe9028f7bee4e0895478f85749ec186"></a>


#### Enumerator FTGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a691f9a81e0c6c349f25e45725a01c74c"></a>


#### Enumerator FTLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a60bf8b5167ba8ddde4219cb31364187e"></a>


#### Enumerator GLCR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae9194dbd7a346bb627dc364670303480"></a>


#### Enumerator EFNO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5c4b8c62750292d3aeff99778fc379aa"></a>


#### Enumerator DIVB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad2fb7635e281024d097f1b0ce7318f01"></a>


#### Enumerator PROB

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad971320a64a0482e64cb2e2272f14e8c"></a>


#### Enumerator TCGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3d6fb8679e12fb1803794b6dc3ebfc33"></a>


#### Enumerator TCLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aea78bfb1f436225a89dee361485d62c1"></a>


#### Enumerator TCVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1bcc79dc04984377b8eb7d50c9fa2ce6"></a>


#### Enumerator NORX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0c0987224e842a6935f8caf54295cb1f"></a>


#### Enumerator NORY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac15822aa704b2f9a512ad81dc0ffb7e2"></a>


#### Enumerator NORZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a09a2788e4e0ee538c6a7a15a2caad6f7"></a>


#### Enumerator NORD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a16305458e7cd719e653d3aee67fdddba"></a>


#### Enumerator COSA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a51ae7842af1c815222914201dae61959"></a>


#### Enumerator MTHA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6268d81ffac2fc1be7db4f390f77146e"></a>


#### Enumerator MTHS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af36d592901cad5f0b8f0eead43348e26"></a>


#### Enumerator MTHT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a37c901cdd804fc5b30a3eb1493da24a9"></a>


#### Enumerator BFSD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1ad01bea9e96648e4f74e0ba6c26f7d4"></a>


#### Enumerator EXPD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a887ad785966b33ef3557a45155fda78c"></a>


#### Enumerator CVIG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ad319f01a6b62cd3ff9944ef0cb7dc442"></a>


#### Enumerator GPSX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8f5cbc8bd9dbd77d364429021a6a9f43"></a>


#### Enumerator GPSY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a825a7b92715c7f971cf58b81f669eb9b"></a>


#### Enumerator GPRX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab60cc32179d62152660b3869bb1108a4"></a>


#### Enumerator GPRY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af649dcbc9563540de37b5c9f7cd63b10"></a>


#### Enumerator GPRT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af279dff69eca3f7d58ff8b2e2ba67562"></a>


#### Enumerator POWF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a472fdb03a76b752d26a9f9545153a505"></a>


#### Enumerator STHI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a27b57f81eb3e5074c9cf8290b6ba7b64"></a>


#### Enumerator CNPX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af363a8eed13ae843de9bcdd4c71e1408"></a>


#### Enumerator CNPY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab4088d0e516e88c7d30aaf5017a9f50c"></a>


#### Enumerator CNAX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aee4c04c71802f7d9991e07ff3380fe96"></a>


#### Enumerator CNAY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a959289cebee40a39c7ca22850442df81"></a>


#### Enumerator STRH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a4cdc25e49f43732b973ef05eacb2c246"></a>


#### Enumerator CIGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aae6184ec46b448db2080f348c16bb169"></a>


#### Enumerator CILT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a45e59e95ce77899a5b4661ae0e374053"></a>


#### Enumerator CIVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa42b1e7f8adf28af07f91b44bc243606"></a>


#### Enumerator CEGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aaa6b5e96952e96cf6cacd378647bcde6"></a>


#### Enumerator CELT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4acadcc67f1732fbb30d7c0ad002279c0d"></a>


#### Enumerator CEVA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a497682c372752cecc1c45c42cd1d1a14"></a>


#### Enumerator NSST

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0be347b3e7dcbb83923a5d8d38ea9354"></a>


#### Enumerator ABCD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4acb08ca4a7bb5f9683c19133a84872ca7"></a>


#### Enumerator DISA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a51d495f76c66165f7695cfefa9418291"></a>


#### Enumerator POWP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3d0dec397eb32411612e400ee8cbe0d0"></a>


#### Enumerator RECI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a64737006126a8ac48a3d422dfafd613f"></a>


#### Enumerator NSRM

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1a8aef513c6d5474d7bb3ede7be798fd"></a>


#### Enumerator FDMO

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0d4555a53115219620576ace1f65e495"></a>


#### Enumerator FDRE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4adefc62e1c9adb395ee2b6234e9125839"></a>


#### Enumerator FREZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aa4610438147d83e6de974856b47da39e"></a>


#### Enumerator NSDE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab012af5bfdc35bbe638009baa55b8d69"></a>


#### Enumerator ERFP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5bd1706293cb21d90c88de67944d8744"></a>


#### Enumerator NSDP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af0752e69459cfb42a3b2f182e8c9513f"></a>


#### Enumerator POPI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a407db3ff03b95ef66ca2b4d6f2990995"></a>


#### Enumerator ABGT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a98460e96e9631e3e850ea77ff7c2aec5"></a>


#### Enumerator ABLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a0af5d21e0f900ef54e6fddf8602bdff8"></a>


#### Enumerator SMIA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a6f0cbfc464225904a44a8e7816353ba3"></a>


#### Enumerator SCUR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5a737ba55608032156a1ed9d3a04c483"></a>


#### Enumerator SDRV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7b00b10176456db2501fa6a673f7618d"></a>


#### Enumerator REVR

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a88f1964ea74b0d1ca63e0e01d1faaa90"></a>


#### Enumerator NSLT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ac0cf27a95b972aa97260e9afa12ab695"></a>


#### Enumerator NSTW

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a9f33065e12ecee9e3160221e80e4162b"></a>


#### Enumerator NSRW

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8f1b12d3ef7b019675688d4290895a15"></a>


#### Enumerator MNRE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3e8b5fe327b9924408950b8a5e5947ab"></a>


#### Enumerator MXRE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aed7160f641414ff6f3a84c2077cf1cc2"></a>


#### Enumerator MNRI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4afad98d3a6e35f2b281dc36ce4c3146a9"></a>


#### Enumerator MXRI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5ed0c20fc30d08805c1d536d5abc3c07"></a>


#### Enumerator CEHX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af71f0248ad24e7d2caecc76135ab50d2"></a>


#### Enumerator CEHY

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4afef12cdb38b66dc37085f14e11cb5535"></a>


#### Enumerator BLTH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af128308e77aaeae3211daf39526645cc"></a>


#### Enumerator GBPZ

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a44a98c8e9cf8046dbab54826855089f4"></a>


#### Enumerator NSRD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a54577c9f87b749bfdb0bd7839e95baf9"></a>


#### Enumerator NPAF

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aca63d557d9889e1b24c81156a3a5a954"></a>


#### Enumerator MECS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a19620b0e3286fc443a4d6c5d6c4fb6cd"></a>


#### Enumerator MECT

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a78aa4251275b9c00f1a66737eceb307a"></a>


#### Enumerator GMTN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a78b0096ae602bee1ebe950a6a8af7b21"></a>


#### Enumerator GMTX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a79945e30b5e86641fb946a74d53b26d7"></a>


#### Enumerator MTFN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a66497cd4d66ece38b05b39e115771373"></a>


#### Enumerator MTFX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a290e8d658b392945f9040e31f8b65d3a"></a>


#### Enumerator MTHN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a62af01220271226c4fa7ae0761f0eebd"></a>


#### Enumerator MTHX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a869c423c0c651430478159de5b0e255e"></a>


#### Enumerator MECA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5b05f5bfbd7a507aedde15573cfa033f"></a>


#### Enumerator MSWN

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a90c2cccbc540cf886e9ed99b3091eb38"></a>


#### Enumerator MSWX

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a960bd9259aa09f63a8cb2dbab446f5f3"></a>


#### Enumerator GAOI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4acaef8cf67ee149c3231644a4e9613d04"></a>


#### Enumerator MNAI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a2994fa585e875ff17b7fb16715611509"></a>


#### Enumerator MXAI

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ab34b1d58a3ce1c561e98287c7d00cd02"></a>


#### Enumerator HYLD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5da4c65d33d078b8b36fddf76051093c"></a>


#### Enumerator OGSS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7eae45119eb8e1b345f596625b255228"></a>


#### Enumerator SPHD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aaadc33cf187930130dc71e63563b54e3"></a>


#### Enumerator SPHS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a05d6a3240bf15d409513cca1d06e635c"></a>


#### Enumerator SSLP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4ae06a7e8ec3e97e29adba1a919a1e9ecc"></a>


#### Enumerator SCRV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a750ef46dca99568efe7293d9b821d8a1"></a>


#### Enumerator DSAG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3f40d9b6287aeb02d7cf634b70366595"></a>


#### Enumerator DPHS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4afc289aeb2d4350fa9dc0fa9a741717de"></a>


#### Enumerator DSLP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a8f47757c308b682eecfdd7d2dd246ae6"></a>


#### Enumerator DCRV

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a244732aad0545549c798759b890d09ae"></a>


#### Enumerator EFLA

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4aedd92027c9c814505c1d8c53ea911500"></a>


#### Enumerator CARD

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a5a81822ea736ae6bf53dc995d87203df"></a>


#### Enumerator TSAG

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1626d429adb808717e909557c6aade7a"></a>


#### Enumerator PSLP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a65f8fcf90d6134a140ddc012ca1d1edf"></a>


#### Enumerator QSLP

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a38672059167d311c3719297d2b13cf7c"></a>


#### Enumerator RRET

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af9692120d97380bafd3e7884d389d52f"></a>


#### Enumerator MWCE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a1ce90e0f3a5ab46be24618f1c70d83a6"></a>


#### Enumerator MWCH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af1f5d0195587ad7ebb921901354680ff"></a>


#### Enumerator MWRE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a79bdf1c633cb373cf335f7c306f15369"></a>


#### Enumerator MWRH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a173a6858bcee66f964bb9e6784da4f06"></a>


#### Enumerator GSCE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a3356efc7723137d56ce69b408a8ffef9"></a>


#### Enumerator GSCH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4af1b35c04a5b09875519c43251c2afaff"></a>


#### Enumerator GSRE

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4afe693678191a25659a751446fa8649ee"></a>


#### Enumerator GSRH

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a7396c546f36f2ead5a40d3a91eb96f01"></a>


#### Enumerator REQS

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a65bdb97385772fa24de9fd464777bcea"></a>


#### Enumerator RSNC

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1aa186922480921b908b329f1655025fe4a10eb8446f37be4a5bf6236b7172dfdd6"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.MFE.MeritOperandType"}]}`
-->

### Enumeration type MeritColumn

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3b"></a>

![][public]

**Definition**:


```csharp
enum MeritColumn {
  Comment = 1,
  Param1 = 2,
  Param2 = 3,
  Param3 = 4,
  Param4 = 5,
  Param5 = 6,
  Param6 = 7,
  Param7 = 8,
  Param8 = 9,
  Target = 10,
  Weight = 11,
  Value = 12,
  Contrib = 13
}
```


#### Enumerator Comment

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3ba0be8406951cdfda82f00f79328cf4efc"></a>


#### Enumerator Param1

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3ba30d4edd9f52333474c604d88a114595d"></a>


#### Enumerator Param2

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3ba52dfff9d0089a912fb6147dd1c1e4f10"></a>


#### Enumerator Param3

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3ba9aba436206280a72d4a94d3d81e78fd9"></a>


#### Enumerator Param4

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3ba6b0448a4f253ace66257c4efd5647f56"></a>


#### Enumerator Param5

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3baf2296f1fff4b3492457fb98179253dcc"></a>


#### Enumerator Param6

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3baf01a7b11079ef4522c9dad6591425cc4"></a>


#### Enumerator Param7

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3ba73d8ef50554571fb9c82a697b4b62f49"></a>


#### Enumerator Param8

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3ba2c306d726268559369238de153751ca8"></a>


#### Enumerator Target

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3bac41a31890959544c6523af684561abe5"></a>


#### Enumerator Weight

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3ba8c489d0946f66d17d73f26366a4bf620"></a>


#### Enumerator Value

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3ba689202409e48743b914713f96d93947c"></a>


#### Enumerator Contrib

<a id="namespace_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1a84e6229b34a63aa92792ec784d156e3bacf104065ad2a472ad6e9979df6e37eac"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.MFE.MeritColumn"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)