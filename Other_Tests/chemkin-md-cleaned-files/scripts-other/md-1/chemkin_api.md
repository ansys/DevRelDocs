  * ![icon](../../../media/f6_file_icon.svg)
  *   * [Chemkin Application Programming Interface Manual](chemkin_api.md)
  * 

  *     *     *   * [![forward](../../../media/f6_fwd.svg)](i13005api_intro.md)

[ Contents ](chemkin_api.md)

![close](../../../media/killtoc.svg)

Print page

Expand/Collapse all

[1\. Introduction](i13005api_intro.md)

    

[1.1. Compiler Compatibility](i43132.md)

    

[1.1.1. Compiler Summary](ck_api_sect_compiler_compat.md)

    

[1.1.1.1. Compiler Installation](ck_api_sect_compiler_compat.md#d0e183)

[1.1.1.2. Setting Up Your Compiler
Environment](ck_api_sect_compiler_compat.md#section_xlp_rs4_sbb)

[1.1.1.3. Testing Your Program](ck_api_sect_compiler_compat.md#d0e194)

[1.2. Prerequisite Skills](pgfId-1021445.md)

[1.3. Overview of Utilities Packages](marker-1040891.md)

[1.4. Structure and Use of Gas-phase Kinetics Utilities](pgfId-1040829.md)

    

[1.4.1. Example: Hydrogen Oxidation](marker-1017775.md)

[1.4.2. Example for a Multi-Temperature Plasma](pgfId-1017885.md)

[1.5. Structure and Use of the Surface Kinetics Utilities](pgfId-1017373.md)

    

[1.5.1. Example of Using the Surface Kinetics Pre-
processor](pgfId-1020396.md)

[1.6. Structure and Use of the Transport Utilities](pgfId-1021250.md)

[2\. User Supplemental Programming](i13005api_user_sup_prog.md)

    

[2.1. User-programmed Subroutines](pgfId-1071662.md)

    

[2.1.1. User-programmed Reaction Rate Routines](pgfId-1073967.md)

[2.1.2. User-programmed Subroutines in Reactor Models](pgfId-1074407.md)

[2.1.3. Recompiling and Linking a User Subroutine](i71111.md)

[3\. Writing User Applications](i13005api_writing_userapps.md)

    

[3.1. Basic Requirements of a Chemkin Program](pgfId-1102613.md)

    

[3.1.1. Requirements for Writing a FORTRAN Program](pgfId-1085750.md)

    

[3.1.1.1. Declare Variable Types](pgfId-1085750.md#pgfId-1119386)

[3.1.1.2. Allocate Arrays](pgfId-1085750.md#pgfId-1085758)

[3.1.1.3. Open the Linking File](pgfId-1085750.md#i28694)

[3.1.1.4. Initialize the Linking File Data](pgfId-1085750.md#pgfId-1085775)

[3.1.1.5. Obtain or Manipulate Data](pgfId-1085750.md#pgfId-1085781)

[3.1.1.6. Compile and Link](pgfId-1085750.md#i60052)

[3.1.2. Requirements for Writing a C++ Program](pgfId-1085808.md)

    

[3.1.2.1. Declare Variable Types](pgfId-1085808.md#pgfId-1085809)

[3.1.2.2. Allocate Arrays](pgfId-1085808.md#pgfId-1085817)

[3.1.2.3. Open the Linking File](pgfId-1085808.md#i44314)

[3.1.2.4. Initialize the Linking File Data](pgfId-1085808.md#pgfId-1085830)

[3.1.2.5. Obtain or Manipulate Data](pgfId-1085808.md#pgfId-1085836)

[3.1.2.6. Compile and Link](pgfId-1085808.md#pgfId-1085851)

[3.2. Gas-phase Kinetics Sample Program (CONP)](pgfId-1085459.md)

    

[3.2.1. Input to Gas-phase Kinetics Pre-processor](pgfId-1082370.md)

[3.2.2. Output from Gas-phase Kinetics Pre-processor](pgfId-1082404.md)

[3.2.3. Input to Chemkin Sample Program (CONP)](marker-1082818.md)

[3.2.4. Output from Chemkin Sample Program (CONP)](marker-1096354.md)

[3.3. Surface Kinetics Sample Program (SKSAMPLE)](pgfId-1126317.md)

    

[3.3.1. Discussion of Sample Problem](pgfId-1096620.md)

[3.3.2. Input to Gas-phase Kinetics Pre-processor](pgfId-1080354.md)

[3.3.3. Output from Gas-phase Kinetics Pre-processor](pgfId-1096966.md)

[3.3.4. Input to Surface Kinetics Pre-processor](marker-1126991.md)

[3.3.5. Output from Surface Kinetics Pre-processor](pgfId-1080556.md)

[3.3.6. Input to Chemkin Sample Program (SKSAMPLE)](pgfId-1089398.md)

[3.3.7. Output from Chemkin Sample Program (SKSAMPLE)](pgfId-1081192.md)

[3.4. Transport Sample Problem (PROPS)](pgfId-1078341.md)

    

[3.4.1. Discussion of Sample Problem](pgfId-1117790.md)

[3.4.2. Input to Gas-phase Kinetics Pre-processor](pgfId-1117943.md)

[3.4.3. Output from Gas-phase Kinetics Pre-processor](pgfId-1117794.md)

[3.4.4. Input to Premixed Flame Model](pgfId-1118032.md)

[3.4.5. Output from Premixed Flame Model](pgfId-1117697.md)

[3.4.6. Input to Chemkin Sample Program (PROPS)](pgfId-1119361.md)

[3.4.7. Output from Chemkin Sample Program (PROPS)](pgfId-1118390.md)

[3.5. VODE Summary](pgfId-1126691.md)

[4\. Quick Reference Guide to the Gas-phase Kinetics Subroutine
Library](i13005api_quickref_gaskinetics.md)

    

[4.1. Mnemonics](pgfId-1066782.md)

[4.2. Initialization](pgfId-1066867.md)

[4.3. Information About Elements](pgfId-1066901.md)

[4.4. Information About Species](pgfId-1066953.md)

[4.5. Information About Reactions](pgfId-1067107.md)

[4.6. Gas Constants and Units](pgfId-1067123api.md)

[4.7. Equations of State and Mole-Mass Conversions](pgfId-1067294.md)

[4.8. Thermodynamic Properties (Nondimensional)](pgfId-1067361.md)

[4.9. Thermodynamic Properties (Mass Units)](pgfId-1067446.md)

[4.10. Thermodynamic Properties (Molar Units)](pgfId-1067510.md)

[4.11. Mean Thermodynamic Properties (Mass Units)](pgfId-1067584.md)

[4.12. Mean Thermodynamic Properties (Molar Units)](pgfId-1067658.md)

[4.13. Chemical Production Rates](i78942.md)

[4.14. Equilibrium Constants and Rate of Progress
Variables](pgfId-1068000.md)

[4.15. Utilities](pgfId-1068172.md)

[5\. Quick Reference Guide to the Surface Kinetics Subroutine
Library](i13005api_refsurfkineticslib.md)

    

[5.1. Mnemonics](pgfId-1071760.md)

[5.2. Initialization](pgfId-1071816.md)

[5.3. Information about Elements](pgfId-1071835.md)

[5.4. Information about Species](pgfId-1071910.md)

[5.5. Information about Phases and Materials](pgfId-1071956.md)

[5.6. Information about Surface Reactions](pgfId-1072129.md)

[5.7. Gas Constants and Units](pgfId-1072147.md)

[5.8. Thermodynamic Properties (Non dimensional)](pgfId-1072203.md)

[5.9. Thermodynamic Properties (Mass Units)](pgfId-1072258.md)

[5.10. Thermodynamic Properties (Molar Units)](pgfId-1072309.md)

[5.11. Chemical Production Rates](pgfId-1072364.md)

[5.12. Equilibrium Constants and Rate-of-Progress
Variables](pgfId-1072392.md)

[5.13. Utilities](pgfId-1072442.md)

[6\. Quick Reference Guide to the Transport Subroutine
Library](i13005api_quickref_transp_lib.md)

    

[6.1. Mnemonics](pgfId-1062650.md)

[6.2. Initialization and Parameters](pgfId-1062725api.md)

[6.3. Viscosity](pgfId-1062756.md)

[6.4. Conductivity](pgfId-1062795.md)

[6.5. Diffusion Coefficients](pgfId-1062833.md)

[6.6. Thermal Diffusion](pgfId-1021042.md)

[7\. Alphabetical Listing of the Gas-phase Kinetics Subroutine
Library](i13005api_list_gpk.md)

    

[7.1. CKABE](pgfId-1091838.md)

[7.2. CKABML](pgfId-1091864.md)

[7.3. CKABMS](pgfId-1091891.md)

[7.4. CKAML](pgfId-1091918.md)

[7.5. CKAMS](pgfId-1091942.md)

[7.6. CKATHM](pgfId-1091966.md)

[7.7. CKATOM](pgfId-1092017.md)

[7.8. CKAVG](pgfId-1092033.md)

[7.9. CKAWT](pgfId-1092053.md)

[7.10. CKBSEC](pgfId-1092072.md)

[7.11. CKCDC](pgfId-1092087.md)

[7.12. CKCDXP](pgfId-1092119.md)

[7.13. CKCDXR](pgfId-1092150.md)

[7.14. CKCDYP](pgfId-1092181.md)

[7.15. CKCDYR](pgfId-1092212.md)

[7.16. CKCHRG](pgfId-1092260.md)

[7.17. CKCOMP](pgfId-1092297.md)

[7.18. CKCONT](pgfId-1092321.md)

[7.19. CKCOPY](pgfId-1092346.md)

[7.20. CKCPBL](pgfId-1092363.md)

[7.21. CKCPBS](pgfId-1092387.md)

[7.22. CKCPML](pgfId-1092411.md)

[7.23. CKCPMS](pgfId-1092435.md)

[7.24. CKCPOR](pgfId-1092459.md)

[7.25. CKCRAY](pgfId-1092482.md)

[7.26. CKCTC](pgfId-1092524.md)

[7.27. CKCTX](pgfId-1098925.md)

[7.28. CKCTXP](pgfId-1092554.md)

[7.29. CKCTXR](pgfId-1092608.md)

[7.30. CKCTY](pgfId-1098949.md)

[7.31. CKCTYP](pgfId-1092640.md)

[7.32. CKCTYR](pgfId-1092694.md)

[7.33. CKCVBL](pgfId-1092727.md)

[7.34. CKCVBS](pgfId-1092751.md)

[7.35. CKCVML](pgfId-1092775.md)

[7.36. CKCVMS](pgfId-1092799.md)

[7.37. CKDHXP](pgfId-1092823.md)

[7.38. CKDHYP](pgfId-1092850.md)

[7.39. CKDLIM](pgfId-1092877.md)

[7.40. CKDONE](pgfId-1092894.md)

[7.41. CKDOT](pgfId-1092910.md)

[7.42. CKDTAB](pgfId-1092938.md)

[7.43. CKEQC](pgfId-1092951.md)

[7.44. CKEQXP](pgfId-1092980.md)

[7.45. CKEQXR](pgfId-1093009.md)

[7.46. CKEQYP](pgfId-1093040.md)

[7.47. CKEQYR](pgfId-1093070.md)

[7.48. CKFALP](pgfId-1093100.md)

[7.49. CKFAL](pgfId-1093167.md)

[7.50. CKFRCH](pgfId-1093259.md)

[7.51. CKGBML](pgfId-1093277.md)

[7.52. CKGBMS](pgfId-1093304s.md)

[7.53. CKGML](pgfId-1093331.md)

[7.54. CKGMS](pgfId-1093355.md)

[7.55. CKHBML](pgfId-1093379.md)

[7.56. CKHBMS](pgfId-1093403api.md)

[7.57. CKHML](pgfId-1093427.md)

[7.58. CKHMS](pgfId-1093450.md)

[7.59. CKHORT](pgfId-1093473.md)

[7.60. CKHRX](pgfId-1093495.md)

[7.61. CKI2CH](pgfId-1093517.md)

[7.62. CKIEXC](pgfId-1093538.md)

[7.63. CKIFT1](pgfId-1093562.md)

[7.64. CKIJAN](pgfId-1093590.md)

[7.65. CKILT](pgfId-1093618.md)

[7.66. CKIMOM](pgfId-1093646.md)

[7.67. CKINDX](pgfId-1093670.md)

[7.68. CKINIT](pgfId-1093694.md)

[7.69. CKINU](pgfId-1093724.md)

[7.70. CKION](pgfId-1093760.md)

[7.71. CKIORD](pgfId-1093778.md)

[7.72. CKIPLG](pgfId-1093818.md)

[7.73. CKIREV](pgfId-1093855.md)

[7.74. CKIRNU](pgfId-1093887.md)

[7.75. CKISIG](pgfId-1093931.md)

[7.76. CKITDE](pgfId-1093964.md)

[7.77. CKITR](pgfId-1093987.md)

[7.78. CKIUQ](pgfId-1094017.md)

[7.79. CKIVIS](pgfId-1094038.md)

[7.80. CKIXSM](pgfId-1094066.md)

[7.81. CKKFKR](pgfId-1094090.md)

[7.82. CKKFRT](pgfId-1094121.md)

[7.83. CKKTFL](pgfId-1094148.md)

[7.84. CKKTMP](pgfId-1094166.md)

[7.85. CKKUW](pgfId-1094184.md)

[7.86. CKLEN](pgfId-1098973.md)

[7.87. CKLEN2](pgfId-1094205.md)

[7.88. CKLKUP](pgfId-1094265.md)

[7.89. CKLSCH](pgfId-1094285.md)

[7.90. CKMMWC](pgfId-1094299.md)

[7.91. CKMMWX](pgfId-1094321.md)

[7.92. CKMMWY](pgfId-1094342.md)

[7.93. CKMXTP](pgfId-1094363.md)

[7.94. CKNCF](pgfId-1094381.md)

[7.95. CKNCMP](pgfId-1094405.md)

[7.96. CKNORM](pgfId-1094417.md)

[7.97. CKNPAR](pgfId-1094431.md)

[7.98. CKNU](pgfId-1094465.md)

[7.99. CKNUF](pgfId-1094490.md)

[7.100. CKPC](pgfId-1094519.md)

[7.101. CKPHAZ](pgfId-1094545.md)

[7.102. CKPNT](pgfId-1094566.md)

[7.103. CKPX](pgfId-1094591.md)

[7.104. CKPY](pgfId-1094618.md)

[7.105. CKQC](pgfId-1094645.md)

[7.106. CKQXP](pgfId-1094672.md)

[7.107. CKQYP](pgfId-1094700.md)

[7.108. CKQYR](pgfId-1094728.md)

[7.109. CKR2CH](pgfId-1094756.md)

[7.110. CKRAEX](pgfId-1094780.md)

[7.111. CKRCXP](pgfId-1094805.md)

[7.112. CKRDEX](pgfId-1094855.md)

[7.113. CKREADF](pgfId-1094880.md)

[7.114. CKREEX](pgfId-1094900.md)

[7.115. CKREWR](pgfId-1098091.md)

[7.116. CKRHEX](pgfId-1094948.md)

[7.117. CKRHOC](pgfId-1094974.md)

[7.118. CKRHOX](pgfId-1095001.md)

[7.119. CKRHOY](pgfId-1095028.md)

[7.120. CKRP](pgfId-1095055.md)

[7.121. CKSAVE](pgfId-1099000.md)

[7.122. CKSAVEF](pgfId-1098212.md)

[7.123. CKSBML](pgfId-1095118.md)

[7.124. CKSBMS](pgfId-1095145.md)

[7.125. CKSCAL](pgfId-1095172.md)

[7.126. CKSLEN](pgfId-1095187.md)

[7.127. CKSML](pgfId-1095205.md)

[7.128. CKSMS](pgfId-1095228.md)

[7.129. CKSNUM](pgfId-1095251.md)

[7.130. CKSOR](pgfId-1095306.md)

[7.131. CKSUBS](pgfId-1095328.md)

[7.132. CKSUM](pgfId-1095351.md)

[7.133. CKSYME](pgfId-1095361.md)

[7.134. CKSYMR](pgfId-1095381.md)

[7.135. CKSYMS](pgfId-1095405.md)

[7.136. CKTHB](pgfId-1095425.md)

[7.137. CKUBML](pgfId-1095449.md)

[7.138. CKUBMS](pgfId-1095473.md)

[7.139. CKUML](pgfId-1095497.md)

[7.140. CKUMS](pgfId-1095520.md)

[7.141. CKWC](pgfId-1095543.md)

[7.142. CKWL](pgfId-1095570.md)

[7.143. CKWT](pgfId-1095597.md)

[7.144. CKWXP](pgfId-1095616.md)

[7.145. CKWXR](pgfId-1095644.md)

[7.146. CKWYP](pgfId-1095672.md)

[7.147. CKWYPK](pgfId-1095700.md)

[7.148. CKWYR](pgfId-1095734.md)

[7.149. CKXMAX](pgfId-1095760.md)

[7.150. CKXMIN](pgfId-1095777.md)

[7.151. CKXNUM](pgfId-1095794.md)

[7.152. CKXTCP](pgfId-1095828.md)

[7.153. CKXTCR](pgfId-1095856.md)

[7.154. CKXTND](pgfId-1095884.md)

[7.155. CKXTY](pgfId-1095899.md)

[7.156. CKYTCP](pgfId-1095919.md)

[7.157. CKYTCR](pgfId-1095947.md)

[7.158. CKYTX](pgfId-1095975.md)

[7.159. PKINDX](pgfId-1095995.md)

[8\. Alphabetical Listing of the Surface Kinetics Subroutine
Library](i13005api_list_surf_kin.md)

    

[8.1. SKABE](pgfId-1107884.md)

[8.2. SKAML](pgfId-1107919.md)

[8.3. SKAMS](pgfId-1107943.md)

[8.4. SKATCZ](pgfId-1107967.md)

[8.5. SKATHM](pgfId-1108011.md)

[8.6. SKCAML](pgfId-1130125.md)

[8.7. SKCAMS](pgfId-1127449.md)

[8.8. SKCGML](pgfId-1127551.md)

[8.9. SKCGMS](pgfId-1127569.md)

[8.10. SKCHML](pgfId-1127665.md)

[8.11. SKCHMS](pgfId-1127681.md)

[8.12. SKCHORT](pgfId-1127771.md)

[8.13. SKCHRG](pgfId-1126583.md)

[8.14. SKCOMP](pgfId-1108105.md)

[8.15. SKCONT](pgfId-1108137.md)

[8.16. SKCOV](pgfId-1108164.md)

[8.17. SKCPML](pgfId-1108181.md)

[8.18. SKCPMS](pgfId-1108206.md)

[8.19. SKCPOR](pgfId-1108231.md)

[8.20. SKCUML](pgfId-1130734.md)

[8.21. SKCUMS](pgfId-1130765.md)

[8.22. SKCZTA](pgfId-1108255.md)

[8.23. SKDEN](pgfId-1108297.md)

[8.24. SKDRDA](pgfId-1108345.md)

[8.25. SKDRDC](pgfId-1108389.md)

[8.26. SKDSDC](pgfId-1108433.md)

[8.27. SKDSDX](pgfId-1108501.md)

[8.28. SKEQ](pgfId-1108570.md)

[8.29. SKFLGS](pgfId-1108613.md)

[8.30. SKGML](pgfId-1108663.md)

[8.31. SKGMS](pgfId-1108688.md)

[8.32. SKHML](pgfId-1108713.md)

[8.33. SKHMS](pgfId-1108736.md)

[8.34. SKHORT](pgfId-1108759.md)

[8.35. SKIBHM](pgfId-1108781.md)

[8.36. SKICOV](pgfId-1108802.md)

[8.37. SKIENR](pgfId-1108833.md)

[8.38. SKILANG](pgfId-1108860.md)

[8.39. SKINDX](pgfId-1110928.md)

[8.40. SKINIT](pgfId-1108932.md)

[8.41. SKINU](pgfId-1108962.md)

[8.42. SKIORD](pgfId-1108997.md)

[8.43. SKIREV](pgfId-1111005.md)

[8.44. SKIRNU](pgfId-1109074.md)

[8.45. SKISTK](pgfId-1109120.md)

[8.46. SKIUQ](pgfId-1109140.md)

[8.47. SKIYLD](pgfId-1109161.md)

[8.48. SKKFRT](pgfId-1109201.md)

[8.49. SKKION](pgfId-1109230.md)

[8.50. SKKTFL](pgfId-1109252.md)

[8.51. SKKTMP](pgfId-1109272.md)

[8.52. SKKUW](pgfId-1109291.md)

[8.53. SKLEN](pgfId-1109312.md)

[8.54. SKLEN2](pgfId-1109335.md)

[8.55. SKMXTP](pgfId-1109376.md)

[8.56. SKNCF](pgfId-1109394.md)

[8.57. SKNCON](pgfId-1111251.md)

[8.58. SKNU](pgfId-1109435.md)

[8.59. SKNUF](pgfId-1109464.md)

[8.60. SKPCMP](pgfId-1109488.md)

[8.61. SKPKK](pgfId-1109562.md)

[8.62. SKPNDX](pgfId-1109585.md)

[8.63. SKPNT](pgfId-1109602.md)

[8.64. SKRAEX](pgfId-1109627.md)

[8.65. SKRATI](pgfId-1109660.md)

[8.66. SKRATK](pgfId-1109695.md)

[8.67. SKRAT](pgfId-1109752.md)

[8.68. SKRDEX](pgfId-1109801.md)

[8.69. SKREADF](pgfId-1109827.md)

[8.70. SKREEX](pgfId-1109847.md)

[8.71. SKREWR](pgfId-1109878.md)

[8.72. SKRHEX](pgfId-1109900.md)

[8.73. SKROP](pgfId-1109939.md)

[8.74. SKRPAR](pgfId-1109980.md)

[8.75. SKRP](pgfId-1110002.md)

[8.76. SKSAVE](pgfId-1110026.md)

[8.77. SKSAVEF](pgfId-1111649.md)

[8.78. SKSDEN](pgfId-1110066.md)

[8.79. SKSML](pgfId-1110088.md)

[8.80. SKSMS](pgfId-1110111.md)

[8.81. SKSNUM](pgfId-1110135.md)

[8.82. SKSOR](pgfId-1110214.md)

[8.83. SKSYME](pgfId-1110236s.md)

[8.84. SKSYMM](pgfId-1110256.md)

[8.85. SKSYMP](pgfId-1110276.md)

[8.86. SKSYMR](pgfId-1110296.md)

[8.87. SKSYMS](pgfId-1110321.md)

[8.88. SKUML](pgfId-1110341.md)

[8.89. SKUMS](pgfId-1110364.md)

[8.90. SKWT](pgfId-1110387.md)

[9\. Alphabetical Listing of the Transport Subroutine
Library](i13005api_list_transportlib.md)

    

[9.1. MCACON](pgfId-1070384.md)

[9.2. MCADIF](pgfId-1070406api.md)

[9.3. MCATDR](pgfId-1070431.md)

[9.4. MCAVIS](pgfId-1070456.md)

[9.5. MCCCEX](pgfId-1070479.md)

[9.6. MCCDEX](pgfId-1070507.md)

[9.7. MCCVEX](pgfId-1070541.md)

[9.8. MCINIT](pgfId-1070567.md)

[9.9. MCLEN](pgfId-1070605.md)

[9.10. MCMCDT](pgfId-1070627.md)

[9.11. MCMDIF](pgfId-1070665.md)

[9.12. MCPNT](pgfId-1070695.md)

[9.13. MCPRAM](pgfId-1070721api.md)

[9.14. MCREWR](pgfId-1070760.md)

[9.15. MCSAVE](pgfId-1070780.md)

[9.16. MCSCON](pgfId-1070797.md)

[9.17. MCSDIF](pgfId-1070817.md)

[9.18. MCSVIS](pgfId-1070844.md)



 [Chapter 1: Introduction » ](i13005api_intro.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2025 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:42-04:00

