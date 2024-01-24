# `Postprocessing Definition` Classes

## [`CombinedFailureCriteria`](#compolyx.CombinedFailureCriteria)

### *class* compolyx.CombinedFailureCriteria(graph, obj, failure_criteria=[], parent=None)

CombinedFailureCriteria class

#### *property* enabled

Whether this object is currently enabled or not. Mainly defined through the current application mode pre or post.

#### serialize()

Serialize to Python string

### [`MaxStressCriterion`](#compolyx.MaxStressCriterion)

### *class* compolyx.MaxStressCriterion(s1=1, s2=1, s3=0, s12=1, s13=0, s23=0, wf_s1=1.0, wf_s2=1.0, wf_s3=1.0, wf_s12=1.0, wf_s13=1.0, wf_s23=1.0)

Max stress failure criterion configuration
Properties are s1, s2, s3, s12, s13, s23, wf_s1, wf_s2, wf_s3, wf_s12, wf_s13, wf_s23
e.g. MaxStressCriterion(s1=1, s2=1, s3=0, s12=1, s13=0, s23=0, wf_s1=1, wf_s2=1, wf_s3=1, wf_s12=1, wf_s13=1, wf_s23=1)

#### *property* s1

specifies whether to compute max stress in 1 direction

#### *property* s12

specifies whether to compute max shear stress in 1 direction

#### *property* s13

specifies whether to compute max normal stress in 1 direction

#### *property* s2

specifies whether to compute max stress in 2 direction

#### *property* s23

specifies whether to compute max normal stress in 2 direction

#### *property* s3

specifies whether to compute max stress in 3 direction

#### serialize()

Serialize to Python string

#### *property* wf_s1

weighting factor of s1

#### *property* wf_s12

weighting factor of s12

#### *property* wf_s13

weighting factor of s13

#### *property* wf_s2

weighting factor of s2

#### *property* wf_s23

weighting factor of s23

#### *property* wf_s3

weighting factor of s3

### [`MaxStrainCriterion`](#compolyx.MaxStrainCriterion)

### *class* compolyx.MaxStrainCriterion(e1=1, e2=1, e3=0, e12=1, e13=0, e23=0, wf_e1=1.0, wf_e2=1.0, wf_e3=1.0, wf_e12=1.0, wf_e13=1.0, wf_e23=1.0, eXt=0.0, eXc=0.0, eYt=0.0, eYc=0.0, eZt=0.0, eZc=0.0, eSxy=0.0, eSxz=0.0, eSyz=0.0, force_global_strain_limits=False)

Max strain failure criterion configuration

#### *property* e1

specifies whether to compute max strain in 1 direction

#### *property* e12

specifies whether to compute max shear 12 strain

#### *property* e13

specifies whether to compute max shear 13 strain

#### *property* e2

specifies whether to compute max strain in 2 direction

#### *property* e23

specifies whether to compute max shear 23 strain

#### *property* e3

specifies whether to compute max strain in 3 direction

#### *property* eSxy

global limit shear strain in material 12 direction

#### *property* eSxz

global limit shear strain in material 13 direction

#### *property* eSyz

global limit shear strain in material 23 direction

#### *property* eXc

global limit compression strain in material 1 direction

#### *property* eXt

global limit tension strain in material 1 direction

#### *property* eYc

global limit compression strain in material 2 direction

#### *property* eYt

global limit tension strain in material 2 direction

#### *property* eZc

global limit compression strain in material 3 direction

#### *property* eZt

global limit tension strain in material 3 direction

#### *property* force_global_strain_limits

force to use global strain limits

#### serialize()

Serialize to Python string

#### *property* wf_e1

weighting factor of e1

#### *property* wf_e12

weighting factor of e12

#### *property* wf_e13

weighting factor of e13

#### *property* wf_e2

weighting factor of e2

#### *property* wf_e23

weighting factor of e23

#### *property* wf_e3

weighting factor of e3

### [`TsaiWu`](#compolyx.TsaiWu)

### *class* compolyx.TsaiWu(dim=2, wf=1.0)

Tsai Wu failure criterion configuration

#### *property* dim

dimension of the Tsai-Wu failure criterion (2 or 3)

#### serialize()

Serialize to Python string

#### *property* wf

weighting factor

### [`TsaiHill`](#compolyx.TsaiHill)

### *class* compolyx.TsaiHill(dim=2, wf=1.0)

Tsai Hill failure criterion configuration

#### *property* dim

dimension of the Tsai-Hill failure criterion (2 or 3)

#### serialize()

Serialize to Python string

#### *property* wf

weighting factor

### [`Hashin`](#compolyx.Hashin)

### *class* compolyx.Hashin(dim=2, hf=1, hm=1, hd=1, wf_hf=1.0, wf_hm=1.0, wf_hd=1.0)

Hashin failure criterion configuration

#### *property* dim

dimension of the Hashin failure criterion (2 or 3)

#### *property* hd

specifies whether to compute delamination

#### *property* hf

specifies whether to compute fiber failure

#### *property* hm

specifies whether to compute matrix failure

#### serialize()

Serialize to Python string

#### *property* wf_hd

weighting factor

#### *property* wf_hf

weighting factor

#### *property* wf_hm

weighting factor

### [`Hoffman`](#compolyx.Hoffman)

### *class* compolyx.Hoffman(dim=2, wf=1.0)

Hoffman failure criterion configuration

#### *property* dim

dimension of the Hoffman failure criterion (2 or 3)

#### serialize()

Serialize to Python string

#### *property* wf

weighting factor

### [`Puck`](#compolyx.Puck)

### *class* compolyx.Puck(dim=2, force_global_constants=False, p21_pos=0.325, p21_neg=0.275, p22_neg=0.225, p22_pos=0.225, s=0.5, M=0.5, interface_weakening_factor=0.8, pf=1, pmA=1, pmB=1, pmC=1, pd=1, wf_pf=1.0, wf_pmA=1.0, wf_pmB=1.0, wf_pmC=1.0, wf_pd=1.0, cfps=True)

Puck failure criterion configuration

#### *property* M

Degradation factor (Default=0.5)

#### *property* cfps

specifies whether to consider the influence of fiber parallel stresses on inter-fiber failure

#### *property* dim

dimension of the puck failure criterion (1, 2 or 3)

#### *property* force_global_constants

Use global Puck constants instead of material specific values.

#### *property* interface_weakening_factor

Interface weakening factor (Default=0.8)

#### *property* p21_neg

Inclination of the failure curve for negative normal matrix stresses (Default=0.275)

#### *property* p21_pos

Inclination of the failure curve for positive normal matrix stresses (Default=0.325)

#### *property* p22_neg

Inclination of the failure curve for negative normal matrix stresses (Default=0.225)

#### *property* p22_pos

Inclination of the failure curve for positive normal matrix stresses (Default=0.225)

#### *property* pd

specifies whether to compute delamination

#### *property* pf

specifies whether to compute fiber failure

#### *property* pmA

specifies whether to compute matrix tension failure

#### *property* pmB

specifies whether to compute matrix compression failure

#### *property* pmC

specifies whether to compute matrix shear failure

#### *property* s

Degradation factor (Default=0.5)

#### serialize()

Serialize to Python string

#### *property* wf_pd

weighting factor

#### *property* wf_pf

weighting factor

#### *property* wf_pmA

weighting factor

#### *property* wf_pmB

weighting factor

#### *property* wf_pmC

weighting factor

### [`Wrinkling`](#compolyx.Wrinkling)

### *class* compolyx.Wrinkling(q_homogeneous=0.5, q_honeycomb=0.33, wf_wr=1.0)

Configuration of wrinkling failure criterion for sandwich structures

#### *property* q_homogeneous

Wrinkling coefficient for sandwiches with homogeneous core. Default=0.5

#### *property* q_honeycomb

Wrinkling coefficient for sandwiches with honeycomb core. Default=0.33

#### serialize()

Serialize to Python string

#### *property* wf_wr

weighting factor

### [`CoreShear`](#compolyx.CoreShear)

### *class* compolyx.CoreShear(ins=False, iss=True, wf_cs=1.0)

Configuration of core shear failure criterion for sandwich structures

#### *property* ins

Whether to compute sandwich core shear criterion under consideration of interlaminar normal stresses. Default = False

#### *property* iss

Whether to compute sandwich core shear criterion under consideration of interlaminar shear stresses. Default = True

#### serialize()

Serialize to Python string

#### *property* wf_cs

weighting factor

### [`Larc`](#compolyx.Larc)

### *class* compolyx.Larc(dim=2, lft=1, lfc=1, lmt=1, lmc=1, wf_lft=1.0, wf_lfc=1.0, wf_lmt=1.0, wf_lmc=1.0)

LaRC failure criterion configuration

#### *property* dim

dimension of the LARC failure criterion (2 or 3)

#### *property* lfc

specifies whether to compute fiber compression failure

#### *property* lft

specifies whether to compute fiber tension failure

#### *property* lmc

specifies whether to compute matrix compression failure

#### *property* lmt

specifies whether to compute matrix tension failure

#### serialize()

Serialize to Python string

#### *property* wf_lfc

weighting factor for lfc

#### *property* wf_lft

weighting factor for lft

#### *property* wf_lmc

weighting factor for lmc

#### *property* wf_lmt

weighting factor for lmt

### [`Cuntze`](#compolyx.Cuntze)

### *class* compolyx.Cuntze(dim=2, cft=1, cfc=1, cmA=1, cmB=1, cmC=1, wf_cft=1.0, wf_cfc=1.0, wf_cmA=1.0, wf_cmB=1.0, wf_cmC=1.0, b21=0.2, b32=1.38, fracture_plane_angle=53.0, m=2.6)

Puck failure criterion configuration

#### *property* b21

In-plane shear related friction parameter (between 0.1 and 0.6, default=0.2)

#### *property* b32

Out-of-plane shear related friction parameter (between 1.0 and 1.6, default=1.38)

#### *property* cfc

specifies whether to compute fiber compression failure

#### *property* cft

specifies whether to compute fiber tensile failure

#### *property* cmA

specifies whether to compute matrix tension failure

#### *property* cmB

specifies whether to compute matrix compression failure

#### *property* cmC

specifies whether to compute matrix wedge shape failure

#### *property* dim

dimension of the cuntze failure criterion (2 or 3)

#### *property* fracture_plane_angle

Angle between the out-of-plane axis and fracture plane in degree (> 45), default=53.)

#### *property* m

Mode interaction coefficient (between [2.0,4.0], default=2.6)

#### serialize()

Serialize to Python string

#### *property* wf_cfc

weighting factor

#### *property* wf_cft

weighting factor

#### *property* wf_cmA

weighting factor

#### *property* wf_cmB

weighting factor

#### *property* wf_cmC

weighting factor

### [`VonMises`](#compolyx.VonMises)

### *class* compolyx.VonMises(vme=1, vms=1, iss=1, ins=0, wf_vme=1.0, wf_vms=1.0)

Von Mises failure criterion configuration

#### *property* ins

specifies wether to compute interlaminar normal stresses

#### *property* iss

specifies wether to compute interlaminar shear stresses

#### serialize()

Serialize to Python string

#### *property* vme

specifies whether to compute von mises strain criteria

#### *property* vms

specifies whether to compute von mises stress criteria

#### *property* wf_vme

weighting factor

#### *property* wf_vms

weighting factor

### [`ShearCrimping`](#compolyx.ShearCrimping)

### *class* compolyx.ShearCrimping(kc=1.0, kf=0.0, wf_sc=1.0)

Configuration of core shear failure criterion for sandwich structures

#### *property* kc

Core material factor. Default is 1.

#### *property* kf

Face sheet factor. Default is 0.

#### serialize()

Serialize to Python string

#### *property* wf_sc

weighting factor
