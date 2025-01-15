# Postprocessing definition classes

<a id="combinedfailurecriteria"></a>

## `CombinedFailureCriteria`

<a id="compolyx.CombinedFailureCriteria"></a>

### *class* compolyx.CombinedFailureCriteria(graph, obj, failure_criteria=[], parent=None)

CombinedFailureCriteria class.

<a id="compolyx.CombinedFailureCriteria.enabled"></a>

#### *property* enabled

Whether this object is currently enabled. Mainly defined through the current application mode (pre).

<a id="compolyx.CombinedFailureCriteria.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="maxstresscriterion"></a>

### `MaxStressCriterion`

<a id="compolyx.MaxStressCriterion"></a>

### *class* compolyx.MaxStressCriterion(s1=1, s2=1, s3=0, s12=1, s13=0, s23=0, wf_s1=1.0, wf_s2=1.0, wf_s3=1.0, wf_s12=1.0, wf_s13=1.0, wf_s23=1.0)

Max stress failure criterion configuration.
* **Properties:**
    - s1
    - s2
    - s3
    - s12
    - s13
    - s23
    - wf_s1
    - wf_s2
    - wf_s3
    - wf_s12
    - wf_s13
    - wf_s23

* **Example:** MaxStressCriterion(s1=1, s2=1, s3=0, s12=1, s13=0, s23=0, wf_s1=1, wf_s2=1, wf_s3=1, wf_s12=1, wf_s13=1, wf_s23=1)

<a id="compolyx.MaxStressCriterion.s1"></a>

#### *property* s1

Specifies whether to compute max stress in 1 direction.

<a id="compolyx.MaxStressCriterion.s12"></a>

#### *property* s12

Specifies whether to compute max shear stress in 1 direction.

<a id="compolyx.MaxStressCriterion.s13"></a>

#### *property* s13

Specifies whether to compute max normal stress in 1 direction.

<a id="compolyx.MaxStressCriterion.s2"></a>

#### *property* s2

Specifies whether to compute max stress in 2 direction.

<a id="compolyx.MaxStressCriterion.s23"></a>

#### *property* s23

Specifies whether to compute max normal stress in 2 direction.

<a id="compolyx.MaxStressCriterion.s3"></a>

#### *property* s3

Specifies whether to compute max stress in 3 direction.

<a id="compolyx.MaxStressCriterion.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.MaxStressCriterion.wf_s1"></a>

#### *property* wf_s1

Weighting factor of s1.

<a id="compolyx.MaxStressCriterion.wf_s12"></a>

#### *property* wf_s12

Weighting factor of s12.

<a id="compolyx.MaxStressCriterion.wf_s13"></a>

#### *property* wf_s13

Weighting factor of s13.

<a id="compolyx.MaxStressCriterion.wf_s2"></a>

#### *property* wf_s2

Weighting factor of s2.

<a id="compolyx.MaxStressCriterion.wf_s23"></a>

#### *property* wf_s23

Weighting factor of s23.

<a id="compolyx.MaxStressCriterion.wf_s3"></a>

#### *property* wf_s3

Weighting factor of s3.

<a id="maxstraincriterion"></a>

### `MaxStrainCriterion`

<a id="compolyx.MaxStrainCriterion"></a>

### *class* compolyx.MaxStrainCriterion(e1=1, e2=1, e3=0, e12=1, e13=0, e23=0, wf_e1=1.0, wf_e2=1.0, wf_e3=1.0, wf_e12=1.0, wf_e13=1.0, wf_e23=1.0, eXt=0.0, eXc=0.0, eYt=0.0, eYc=0.0, eZt=0.0, eZc=0.0, eSxy=0.0, eSxz=0.0, eSyz=0.0, force_global_strain_limits=False)

Max strain failure criterion configuration.

<a id="compolyx.MaxStrainCriterion.e1"></a>

#### *property* e1

Specifies whether to compute max strain in 1 direction.

<a id="compolyx.MaxStrainCriterion.e12"></a>

#### *property* e12

Specifies whether to compute max shear 12 strain.

<a id="compolyx.MaxStrainCriterion.e13"></a>

#### *property* e13

Specifies whether to compute max shear 13 strain.

<a id="compolyx.MaxStrainCriterion.e2"></a>

#### *property* e2

Specifies whether to compute max strain in 2 direction.

<a id="compolyx.MaxStrainCriterion.e23"></a>

#### *property* e23

Specifies whether to compute max shear 23 strain.

<a id="compolyx.MaxStrainCriterion.e3"></a>

#### *property* e3

Specifies whether to compute max strain in 3 direction.

<a id="compolyx.MaxStrainCriterion.eSxy"></a>

#### *property* eSxy

Global limit shear strain in material 12 direction.

<a id="compolyx.MaxStrainCriterion.eSxz"></a>

#### *property* eSxz

Global limit shear strain in material 13 direction.

<a id="compolyx.MaxStrainCriterion.eSyz"></a>

#### *property* eSyz

Global limit shear strain in material 23 direction.

<a id="compolyx.MaxStrainCriterion.eXc"></a>

#### *property* eXc

Global limit compression strain in material 1 direction.

<a id="compolyx.MaxStrainCriterion.eXt"></a>

#### *property* eXt

Global limit tension strain in material 1 direction.

<a id="compolyx.MaxStrainCriterion.eYc"></a>

#### *property* eYc

Global limit compression strain in material 2 direction.

<a id="compolyx.MaxStrainCriterion.eYt"></a>

#### *property* eYt

Global limit tension strain in material 2 direction.

<a id="compolyx.MaxStrainCriterion.eZc"></a>

#### *property* eZc

Global limit compression strain in material 3 direction.

<a id="compolyx.MaxStrainCriterion.eZt"></a>

#### *property* eZt

Global limit tension strain in material 3 direction.

<a id="compolyx.MaxStrainCriterion.force_global_strain_limits"></a>

#### *property* force_global_strain_limits

Fforce to use global strain limits.

<a id="compolyx.MaxStrainCriterion.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.MaxStrainCriterion.wf_e1"></a>

#### *property* wf_e1

Weighting factor of e1.

<a id="compolyx.MaxStrainCriterion.wf_e12"></a>

#### *property* wf_e12

Weighting factor of e12.

<a id="compolyx.MaxStrainCriterion.wf_e13"></a>

#### *property* wf_e13

Weighting factor of e13.

<a id="compolyx.MaxStrainCriterion.wf_e2"></a>

#### *property* wf_e2

Weighting factor of e2.

<a id="compolyx.MaxStrainCriterion.wf_e23"></a>

#### *property* wf_e23

Weighting factor of e23.

<a id="compolyx.MaxStrainCriterion.wf_e3"></a>

#### *property* wf_e3

Weighting factor of e3.

<a id="tsaiwu"></a>

### `TsaiWu`

<a id="compolyx.TsaiWu"></a>

### *class* compolyx.TsaiWu(dim=2, wf=1.0)

Tsai Wu failure criterion configuration.

<a id="compolyx.TsaiWu.dim"></a>

#### *property* dim

Dimension of the Tsai-Wu failure criterion (2 or 3).

<a id="compolyx.TsaiWu.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.TsaiWu.wf"></a>

#### *property* wf

Weighting factor.

<a id="tsaihill"></a>

### `TsaiHill`

<a id="compolyx.TsaiHill"></a>

### *class* compolyx.TsaiHill(dim=2, wf=1.0)

Tsai Hill failure criterion configuration.

<a id="compolyx.TsaiHill.dim"></a>

#### *property* dim

Dimension of the Tsai-Hill failure criterion (2 or 3).

<a id="compolyx.TsaiHill.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.TsaiHill.wf"></a>

#### *property* wf

Weighting factor.

<a id="hashin"></a>

### `Hashin`

<a id="compolyx.Hashin"></a>

### *class* compolyx.Hashin(dim=2, hf=1, hm=1, hd=1, wf_hf=1.0, wf_hm=1.0, wf_hd=1.0)

Hashin failure criterion configuration.

<a id="compolyx.Hashin.dim"></a>

#### *property* dim

Dimension of the Hashin failure criterion (2 or 3).

<a id="compolyx.Hashin.hd"></a>

#### *property* hd

Specifies whether to compute delamination.

<a id="compolyx.Hashin.hf"></a>

#### *property* hf

Specifies whether to compute fiber failure.

<a id="compolyx.Hashin.hm"></a>

#### *property* hm

Specifies whether to compute matrix failure.

<a id="compolyx.Hashin.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.Hashin.wf_hd"></a>

#### *property* wf_hd

Weighting factor.

<a id="compolyx.Hashin.wf_hf"></a>

#### *property* wf_hf

Weighting factor.

<a id="compolyx.Hashin.wf_hm"></a>

#### *property* wf_hm

Weighting factor.

<a id="hoffman"></a>

### `Hoffman`

<a id="compolyx.Hoffman"></a>

### *class* compolyx.Hoffman(dim=2, wf=1.0)

Hoffman failure criterion configuration.

<a id="compolyx.Hoffman.dim"></a>

#### *property* dim

Dimension of the Hoffman failure criterion (2 or 3).

<a id="compolyx.Hoffman.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.Hoffman.wf"></a>

#### *property* wf

Weighting factor.

<a id="puck"></a>

### `Puck`

<a id="compolyx.Puck"></a>

### *class* compolyx.Puck(dim=2, force_global_constants=False, p21_pos=0.325, p21_neg=0.275, p22_neg=0.225, p22_pos=0.225, s=0.5, M=0.5, interface_weakening_factor=0.8, pf=1, pmA=1, pmB=1, pmC=1, pd=1, wf_pf=1.0, wf_pmA=1.0, wf_pmB=1.0, wf_pmC=1.0, wf_pd=1.0, cfps=True)

Puck failure criterion configuration.

<a id="compolyx.Puck.M"></a>

#### *property* M

Degradation factor (Default = 0.5).

<a id="compolyx.Puck.cfps"></a>

#### *property* cfps

Specifies whether to consider the influence of fiber parallel stresses on inter-fiber failure.

<a id="compolyx.Puck.dim"></a>

#### *property* dim

Dimension of the puck failure criterion (1, 2, or 3).

<a id="compolyx.Puck.force_global_constants"></a>

#### *property* force_global_constants

Use global Puck constants instead of material specific values.

<a id="compolyx.Puck.interface_weakening_factor"></a>

#### *property* interface_weakening_factor

Interface weakening factor (Default = 0.8).

<a id="compolyx.Puck.p21_neg"></a>

#### *property* p21_neg

Inclination of the failure curve for negative normal matrix stresses (Default = 0.275).

<a id="compolyx.Puck.p21_pos"></a>

#### *property* p21_pos

Inclination of the failure curve for positive normal matrix stresses (Default = 0.325).

<a id="compolyx.Puck.p22_neg"></a>

#### *property* p22_neg

Inclination of the failure curve for negative normal matrix stresses (Default = 0.225).

<a id="compolyx.Puck.p22_pos"></a>

#### *property* p22_pos

Inclination of the failure curve for positive normal matrix stresses (Default = 0.225).

<a id="compolyx.Puck.pd"></a>

#### *property* pd

Specifies whether to compute delamination.

<a id="compolyx.Puck.pf"></a>

#### *property* pf

Specifies whether to compute fiber failure.

<a id="compolyx.Puck.pmA"></a>

#### *property* pmA

Specifies whether to compute matrix tension failure.

<a id="compolyx.Puck.pmB"></a>

#### *property* pmB

Specifies whether to compute matrix compression failure.

<a id="compolyx.Puck.pmC"></a>

#### *property* pmC

Specifies whether to compute matrix shear failure.

<a id="compolyx.Puck.s"></a>

#### *property* s

Degradation factor (Default = 0.5).

<a id="compolyx.Puck.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.Puck.wf_pd"></a>

#### *property* wf_pd

Weighting factor.

<a id="compolyx.Puck.wf_pf"></a>

#### *property* wf_pf

Weighting factor.

<a id="compolyx.Puck.wf_pmA"></a>

#### *property* wf_pmA

Weighting factor.

<a id="compolyx.Puck.wf_pmB"></a>

#### *property* wf_pmB

Weighting factor.

<a id="compolyx.Puck.wf_pmC"></a>

#### *property* wf_pmC

Weighting factor.

<a id="wrinkling"></a>

### `Wrinkling`

<a id="compolyx.Wrinkling"></a>

### *class* compolyx.Wrinkling(q_homogeneous=0.5, q_honeycomb=0.33, wf_wr=1.0)

Configuration of wrinkling failure criterion for sandwich structures.

<a id="compolyx.Wrinkling.q_homogeneous"></a>

#### *property* q_homogeneous

Wrinkling coefficient for sandwiches with homogeneous core (Default = 0.5).

<a id="compolyx.Wrinkling.q_honeycomb"></a>

#### *property* q_honeycomb

Wrinkling coefficient for sandwiches with honeycomb core (Default = 0.33).

<a id="compolyx.Wrinkling.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.Wrinkling.wf_wr"></a>

#### *property* wf_wr

Weighting factor.

<a id="coreshear"></a>

### `CoreShear`

<a id="compolyx.CoreShear"></a>

### *class* compolyx.CoreShear(ins=False, iss=True, wf_cs=1.0)

Configuration of core shear failure criterion for sandwich structures.

<a id="compolyx.CoreShear.ins"></a>

#### *property* ins

Whether to compute sandwich core shear criterion under consideration of interlaminar normal stresses (Default = False).

<a id="compolyx.CoreShear.iss"></a>

#### *property* iss

Whether to compute sandwich core shear criterion under consideration of interlaminar shear stresses (Default = True).

<a id="compolyx.CoreShear.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.CoreShear.wf_cs"></a>

#### *property* wf_cs

Weighting factor.

<a id="larc"></a>

### `Larc`

<a id="compolyx.Larc"></a>

### *class* compolyx.Larc(dim=2, lft=1, lfc=1, lmt=1, lmc=1, wf_lft=1.0, wf_lfc=1.0, wf_lmt=1.0, wf_lmc=1.0)

LaRC failure criterion configuration.

<a id="compolyx.Larc.dim"></a>

#### *property* dim

Dimension of the LARC failure criterion (2 or 3).

<a id="compolyx.Larc.lfc"></a>

#### *property* lfc

Specifies whether to compute fiber compression failure.

<a id="compolyx.Larc.lft"></a>

#### *property* lft

Specifies whether to compute fiber tension failure.

<a id="compolyx.Larc.lmc"></a>

#### *property* lmc

Specifies whether to compute matrix compression failure.

<a id="compolyx.Larc.lmt"></a>

#### *property* lmt

Specifies whether to compute matrix tension failure.

<a id="compolyx.Larc.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.Larc.wf_lfc"></a>

#### *property* wf_lfc

Weighting factor for lfc.

<a id="compolyx.Larc.wf_lft"></a>

#### *property* wf_lft

Weighting factor for lft.

<a id="compolyx.Larc.wf_lmc"></a>

#### *property* wf_lmc

Weighting factor for lmc.

<a id="compolyx.Larc.wf_lmt"></a>

#### *property* wf_lmt

Weighting factor for lmt.

<a id="cuntze"></a>

### `Cuntze`

<a id="compolyx.Cuntze"></a>

### *class* compolyx.Cuntze(dim=2, cft=1, cfc=1, cmA=1, cmB=1, cmC=1, wf_cft=1.0, wf_cfc=1.0, wf_cmA=1.0, wf_cmB=1.0, wf_cmC=1.0, b21=0.2, b32=None, fracture_plane_angle=53.0, m=2.6)

Puck failure criterion configuration.

<a id="compolyx.Cuntze.b21"></a>

#### *property* b21

In-plane shear related friction parameter (between 0.1 and 0.6; default = 0.2).

<a id="compolyx.Cuntze.b32"></a>

#### *property* b32

Out-of-plane shear related friction parameter (between 1.0 and 1.6; default = 1.38).

<a id="compolyx.Cuntze.cfc"></a>

#### *property* cfc

Specifies whether to compute fiber compression failure.

<a id="compolyx.Cuntze.cft"></a>

#### *property* cft

Specifies whether to compute fiber tensile failure.

<a id="compolyx.Cuntze.cmA"></a>

#### *property* cmA

Specifies whether to compute matrix tension failure.

<a id="compolyx.Cuntze.cmB"></a>

#### *property* cmB

Specifies whether to compute matrix compression failure.

<a id="compolyx.Cuntze.cmC"></a>

#### *property* cmC

Specifies whether to compute matrix wedge shape failure.

<a id="compolyx.Cuntze.dim"></a>

#### *property* dim

Dimension of the cuntze failure criterion (2 or 3).

<a id="compolyx.Cuntze.fracture_plane_angle"></a>

#### *property* fracture_plane_angle

Angle between the out-of-plane axis and fracture plane in degree (> 45, < 90); default = 53.).

<a id="compolyx.Cuntze.m"></a>

#### *property* m

Mode interaction coefficient (between [2.0,4.0]; default = 2.6).

<a id="compolyx.Cuntze.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.Cuntze.wf_cfc"></a>

#### *property* wf_cfc

Weighting factor.

<a id="compolyx.Cuntze.wf_cft"></a>

#### *property* wf_cft

Weighting factor.

<a id="compolyx.Cuntze.wf_cmA"></a>

#### *property* wf_cmA

Weighting factor.

<a id="compolyx.Cuntze.wf_cmB"></a>

#### *property* wf_cmB

Weighting factor.

<a id="compolyx.Cuntze.wf_cmC"></a>

#### *property* wf_cmC

Weighting factor.

<a id="vonmises"></a>

### `VonMises`

<a id="compolyx.VonMises"></a>

### *class* compolyx.VonMises(vme=1, vms=1, iss=1, ins=0, wf_vme=1.0, wf_vms=1.0)

Von Mises failure criterion configuration.

<a id="compolyx.VonMises.ins"></a>

#### *property* ins

Specifies wether to compute interlaminar normal stresses.

<a id="compolyx.VonMises.iss"></a>

#### *property* iss

Specifies wether to compute interlaminar shear stresses.

<a id="compolyx.VonMises.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.VonMises.vme"></a>

#### *property* vme

Specifies whether to compute von mises strain criteria.

<a id="compolyx.VonMises.vms"></a>

#### *property* vms

Specifies whether to compute von mises stress criteria.

<a id="compolyx.VonMises.wf_vme"></a>

#### *property* wf_vme

Weighting factor.

<a id="compolyx.VonMises.wf_vms"></a>

#### *property* wf_vms

Weighting factor.

<a id="shearcrimping"></a>

### `ShearCrimping`

<a id="compolyx.ShearCrimping"></a>

### *class* compolyx.ShearCrimping(kc=1.0, kf=0.0, wf_sc=1.0)

Configuration of core shear failure criterion for sandwich structures.

<a id="compolyx.ShearCrimping.kc"></a>

#### *property* kc

Core material factor. Default is 1.

<a id="compolyx.ShearCrimping.kf"></a>

#### *property* kf

Face sheet factor. Default is 0.

<a id="compolyx.ShearCrimping.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.ShearCrimping.wf_sc"></a>

#### *property* wf_sc

Weighting factor.
