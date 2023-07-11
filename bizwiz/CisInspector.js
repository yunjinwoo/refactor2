const CisInspector = (txt, txt1, txt3, txt4) => {

    


    let b1_innerHTML = ''
    let b2_innerHTML = ''
    let b3_innerHTML = ''
    
    let Ausgabe_Notes_Z1_innerHTML = ''
    let Ausgabe_Notes_Z2_innerHTML = ''
    let Ausgabe_Notes_Z3_innerHTML = ''
    
    
    let Ergebnis_bar_innerHTML = ''
    let Ergebnis_psi_innerHTML = ''
    let Ausgabe_Hinweis_innerHTML = ''
    
    let TP_bar_innerHTML = ''
    let TP_psi_innerHTML = ''
    
    
    
    Zuordnen(txt, txt1);
    return {
        b1_innerHTML,
        b2_innerHTML,
        b3_innerHTML,
        Ausgabe_Notes_Z1_innerHTML,
        Ausgabe_Notes_Z2_innerHTML,
        Ausgabe_Notes_Z3_innerHTML,
        
        Ergebnis_bar_innerHTML,
        Ergebnis_psi_innerHTML,
        Ausgabe_Hinweis_innerHTML,
        
        TP_bar_innerHTML,
        TP_psi_innerHTML,
    }
    
        function Zuordnen(txt, txt2){
            
            // Materialindex zuordnen
            
            //Material = Materialauswahl.options[Materialauswahl.selectedIndex].text;
        Material = txt
            Mi = 0;		//Materialindex Mi
                                
            if(Material == 'A105'){Mi=1;}
            if(Material == 'A182 Gr. F1'){Mi=2;}
            if(Material == 'A182 Gr. F11 Cl. 2'){Mi=3;}
            if(Material == 'A182 Gr. F12 Cl. 2'){Mi=4;}
            if(Material == 'A182 Gr. F2'){Mi=5;}
            if(Material == 'A182 Gr. F22 Cl. 3'){Mi=6;}
            if(Material == 'A182 Gr. F304'){Mi=7;}
            if(Material == 'A182 Gr. F304H'){Mi=8;}
            if(Material == 'A182 Gr. F304L'){Mi=9;}
            if(Material == 'A182 Gr. F310'){Mi=10;}
            if(Material == 'A182 Gr. F316'){Mi=11;}
            if(Material == 'A182 Gr. F316H'){Mi=12;}
            if(Material == 'A182 Gr. F316L'){Mi=13;}
            if(Material == 'A182 Gr. F317'){Mi=14;}
            if(Material == 'A182 Gr. F317L'){Mi=15;}
            if(Material == 'A182 Gr. F321'){Mi=16;}
            if(Material == 'A182 Gr. F321H'){Mi=17;}
            if(Material == 'A182 Gr. F347'){Mi=18;}
            if(Material == 'A182 Gr. F347H'){Mi=19;}
            if(Material == 'A182 Gr. F348'){Mi=20;}
            if(Material == 'A182 Gr. F348H'){Mi=21;}
            if(Material == 'A182 Gr. F44'){Mi=22;}
            if(Material == 'A182 Gr. F5'){Mi=23;}
            if(Material == 'A182 Gr. F51'){Mi=24;}
            if(Material == 'A182 Gr. F53'){Mi=25;}
            if(Material == 'A182 Gr. F55'){Mi=26;}
            if(Material == 'A182 Gr. F5a'){Mi=27;}
            if(Material == 'A182 Gr. F9'){Mi=28;}
            if(Material == 'A182 Gr. F91'){Mi=29;}
            if(Material == 'A182 Gr. F92'){Mi=30;}
            if(Material == 'A203 Gr. A'){Mi=31;}
            if(Material == 'A203 Gr. B'){Mi=32;}
            if(Material == 'A203 Gr. D'){Mi=33;}
            if(Material == 'A203 Gr. E'){Mi=34;}
            if(Material == 'A204 Gr. A'){Mi=35;}
            if(Material == 'A204 Gr. B'){Mi=36;}
            if(Material == 'A204 Gr. C'){Mi=37;}
            if(Material == 'A216 Gr. WCB'){Mi=38;}
            if(Material == 'A216 Gr. WCC'){Mi=39;}
            if(Material == 'A217 Gr. C12'){Mi=40;}
            if(Material == 'A217 Gr. C12A'){Mi=41;}
            if(Material == 'A217 Gr. C5'){Mi=42;}
            if(Material == 'A217 Gr. WC1'){Mi=43;}
            if(Material == 'A217 Gr. WC4'){Mi=44;}
            if(Material == 'A217 Gr. WC5'){Mi=45;}
            if(Material == 'A217 Gr. WC6'){Mi=46;}
            if(Material == 'A217 Gr. WC9'){Mi=47;}
            if(Material == 'A240 Gr. 304'){Mi=48;}
            if(Material == 'A240 Gr. 304H'){Mi=49;}
            if(Material == 'A240 Gr. 304L'){Mi=50;}
            if(Material == 'A240 Gr. 309H'){Mi=51;}
            if(Material == 'A240 Gr. 309S'){Mi=52;}
            if(Material == 'A240 Gr. 310H'){Mi=53;}
            if(Material == 'A240 Gr. 310S'){Mi=54;}
            if(Material == 'A240 Gr. 316'){Mi=55;}
            if(Material == 'A240 Gr. 316H'){Mi=56;}
            if(Material == 'A240 Gr. 316L'){Mi=57;}
            if(Material == 'A240 Gr. 317'){Mi=58;}
            if(Material == 'A240 Gr. 321'){Mi=59;}
            if(Material == 'A240 Gr. 321H'){Mi=60;}
            if(Material == 'A240 Gr. 347'){Mi=61;}
            if(Material == 'A240 Gr. 347H'){Mi=62;}
            if(Material == 'A240 Gr. 348'){Mi=63;}
            if(Material == 'A240 Gr. 348H'){Mi=64;}
            if(Material == 'A240 Gr. N08904'){Mi=65;}
            if(Material == 'A240 Gr. S31254'){Mi=66;}
            if(Material == 'A240 Gr. S31803'){Mi=67;}
            if(Material == 'A240 Gr. S32750'){Mi=68;}
            if(Material == 'A240 Gr. S32760'){Mi=69;}
            if(Material == 'A350 Gr. LF1 Cl. 1'){Mi=70;}
            if(Material == 'A350 Gr. LF2'){Mi=71;}
            if(Material == 'A350 Gr. LF3'){Mi=72;}
            if(Material == 'A350 Gr. LF6 CI. 1'){Mi=73;}
            if(Material == 'A350 Gr. LF6 Cl. 2'){Mi=74;}
            if(Material == 'A351 Gr. CD3MWCuN'){Mi=75;}
            if(Material == 'A351 Gr. CD4MCu'){Mi=76;}
            if(Material == 'A351 Gr. CE8MN'){Mi=77;}
            if(Material == 'A351 Gr. CF3'){Mi=78;}
            if(Material == 'A351 Gr. CF3M'){Mi=79;}
            if(Material == 'A351 Gr. CF8'){Mi=80;}
            if(Material == 'A351 Gr. CF8C'){Mi=81;}
            if(Material == 'A351 Gr. CF8M'){Mi=82;}
            if(Material == 'A351 Gr. CG8M'){Mi=83;}
            if(Material == 'A351 Gr. CH20'){Mi=84;}
            if(Material == 'A351 Gr. CH8'){Mi=85;}
            if(Material == 'A351 Gr. CK20'){Mi=86;}
            if(Material == 'A351 Gr. CK3MCuN'){Mi=87;}
            if(Material == 'A351 Gr. CN3MN'){Mi=88;}
            if(Material == 'A351 Gr. CN7M'){Mi=89;}
            if(Material == 'A352 Gr. LC1'){Mi=90;}
            if(Material == 'A352 Gr. LC2'){Mi=91;}
            if(Material == 'A352 Gr. LC3'){Mi=92;}
            if(Material == 'A352 Gr. LCB'){Mi=93;}
            if(Material == 'A352 Gr. LCC'){Mi=94;}
            if(Material == 'A387 Gr. 11 Cl. 2'){Mi=95;}
            if(Material == 'A387 Gr. 22 Cl. 2'){Mi=96;}
            if(Material == 'A387 Gr. 91 Cl. 2'){Mi=97;}
            if(Material == 'A479 Gr. N08904'){Mi=98;}
            if(Material == 'A515 Gr. 60'){Mi=99;}
            if(Material == 'A515 Gr. 65'){Mi=100;}
            if(Material == 'A515 Gr. 70'){Mi=101;}
            if(Material == 'A516 Gr. 60'){Mi=102;}
            if(Material == 'A516 Gr. 65'){Mi=103;}
            if(Material == 'A516 Gr. 70'){Mi=104;}
            if(Material == 'A537 Cl. 1'){Mi=105;}
            if(Material == 'B127 Gr. N04400'){Mi=106;}
            if(Material == 'B162 Gr. N02200'){Mi=107;}
            if(Material == 'B162 Gr. N02201'){Mi=108;}
            if(Material == 'B168 Gr. N06600'){Mi=109;}
            if(Material == 'B333 Gr. N10001'){Mi=110;}
            if(Material == 'B333 Gr. N10665'){Mi=111;}
            if(Material == 'B333 Gr. N10675'){Mi=112;}
            if(Material == 'B409 Gr. N08800'){Mi=113;}
            if(Material == 'B409 Gr. N08810'){Mi=114;}
            if(Material == 'B424 Gr. N08825'){Mi=115;}
            if(Material == 'B434 Gr. N10003'){Mi=116;}
            if(Material == 'B435 Gr. N06002'){Mi=117;}
            if(Material == 'B435 Gr. N06230'){Mi=118;}
            if(Material == 'B435 Gr. R30556'){Mi=119;}
            if(Material == 'B443 Gr. N06625'){Mi=120;}
            if(Material == 'B462 Gr. N06022'){Mi=121;}
            if(Material == 'B462 Gr. N06030'){Mi=122;}
            if(Material == 'B462 Gr. N06035'){Mi=123;}
            if(Material == 'B462 Gr. N06200'){Mi=124;}
            if(Material == 'B462 Gr. N08020'){Mi=125;}
            if(Material == 'B462 Gr. N08367'){Mi=126;}
            if(Material == 'B462 Gr. N10276'){Mi=127;}
            if(Material == 'B462 Gr. N10665'){Mi=128;}
            if(Material == 'B462 Gr. N10675'){Mi=129;}
            if(Material == 'B463 Gr. N08020'){Mi=130;}
            if(Material == 'B536 Gr. N08330'){Mi=131;}
            if(Material == 'B564 Gr. N02200'){Mi=132;}
            if(Material == 'B564 Gr. N04400'){Mi=133;}
            if(Material == 'B564 Gr. N06230'){Mi=134;}
            if(Material == 'B564 Gr. N06600'){Mi=135;}
            if(Material == 'B564 Gr. N06625'){Mi=136;}
            if(Material == 'B564 Gr. N08031'){Mi=137;}
            if(Material == 'B564 Gr. N08800'){Mi=138;}
            if(Material == 'B564 Gr. N08810'){Mi=139;}
            if(Material == 'B564 Gr. N08825'){Mi=140;}
            if(Material == 'B572 Gr. N06002'){Mi=141;}
            if(Material == 'B572 Gr. R30556'){Mi=142;}
            if(Material == 'B575 Gr. N06022'){Mi=143;}
            if(Material == 'B575 Gr. N06035'){Mi=144;}
            if(Material == 'B575 Gr. N06200'){Mi=145;}
            if(Material == 'B575 Gr. N06455'){Mi=146;}
            if(Material == 'B575 Gr. N10276'){Mi=147;}
            if(Material == 'B582 Gr. N06007'){Mi=148;}
            if(Material == 'B582 Gr. N06030'){Mi=149;}
            if(Material == 'B582 Gr. N06975'){Mi=150;}
            if(Material == 'B582 Gr. N06985'){Mi=151;}
            if(Material == 'B599 Gr. N08700'){Mi=152;}
            if(Material == 'B620 Gr. N08320'){Mi=153;}
            if(Material == 'B625 Gr. N08031'){Mi=154;}
            if(Material == 'B688 Gr. N08367'){Mi=155;}		
            
            // Tableindex zuordnen und und ausgewählte Table ausgeben
            
            Ti = 0;		//Tableindex Ti
            
            if(Mi==1||Mi==38||Mi==71||Mi==72||Mi==73||Mi==101||Mi==104||Mi==105){Ti=211 ; TPi=0; b1_innerHTML = 'Table 2-1.1';}
            if(Mi==32||Mi==34||Mi==39||Mi==74||Mi==91||Mi==92||Mi==94){Ti=212 ; TPi=1 ; b1_innerHTML = 'Table 2-1.2';}
            if(Mi==31||Mi==33||Mi==43||Mi==90||Mi==93||Mi==100||Mi==103){Ti=213 ; TPi=2 ; b1_innerHTML = 'Table 2-1.3';}
            if(Mi==70||Mi==99||Mi==102){Ti=214 ; TPi=3 ; b1_innerHTML = 'Table 2-1.4';}
            if(Mi==2||Mi==35||Mi==36){Ti=215 ; TPi=4 ; b1_innerHTML = 'Table 2-1.5';}
            if(Mi==5||Mi==44||Mi==45){Ti=217 ; TPi=5 ; b1_innerHTML = 'Table 2-1.7';}
            if(Mi==3||Mi==46||Mi==95){Ti=219 ; TPi=6 ; b1_innerHTML = 'Table 2-1.9';}
            if(Mi==6||Mi==47||Mi==96){Ti=2110 ; TPi=7 ; b1_innerHTML = 'Table 2-1.10';}
            if(Mi==37){Ti=2111 ; TPi=8 ; b1_innerHTML = 'Table 2-1.11';}
            if(Mi==27||Mi==42){Ti=2113 ; TPi=9 ;  b1_innerHTML = 'Table 2-1.13';}
            if(Mi==28||Mi==40){Ti=2114 ; TPi=10 ; b1_innerHTML = 'Table 2-1.14';}
            if(Mi==29||Mi==41||Mi==97){Ti=2115 ; TPi=11 ; b1_innerHTML = 'Table 2-1.15';}
            if(Mi==4||Mi==23){Ti=2117 ; TPi=12 ; b1_innerHTML = 'Table 2-1.17';}
            if(Mi==30){Ti=2118 ; TPi=13 ; b1_innerHTML = 'Table 2-1.18';}
            if(Mi==7||Mi==8||Mi==48||Mi==49||Mi==78||Mi==80){Ti=221 ; TPi=14 ;  b1_innerHTML = 'Table 2-2.1';}
            if(Mi==11||Mi==12||Mi==14||Mi==55||Mi==56||Mi==58||Mi==79||Mi==82||Mi==83){Ti=222 ; TPi=15 ; b1_innerHTML = 'Table 2-2.2';}
            if(Mi==9||Mi==13||Mi==15||Mi==50||Mi==57){Ti=223 ; TPi=16 ; b1_innerHTML = 'Table 2-2.3';}
            if(Mi==16||Mi==17||Mi==59||Mi==60){Ti=224 ; TPi=17 ; b1_innerHTML = 'Table 2-2.4';}
            if(Mi==18||Mi==19||Mi==20||Mi==21||Mi==61||Mi==62||Mi==63||Mi==64){Ti=225 ; TPi=18 ; b1_innerHTML = 'Table 2-2.5';}
            if(Mi==51){Ti=226 ; TPi=19 ; b1_innerHTML = 'Table 2-2.6';}
            if(Mi==10||Mi==53){Ti=227 ; TPi=20 ; b1_innerHTML = 'Table 2-2.7';}
            if(Mi==22||Mi==24||Mi==25||Mi==26||Mi==66||Mi==67||Mi==68||Mi==69||Mi==75||Mi==76||Mi==77||Mi==87){Ti=228 ; TPi=21 ; b1_innerHTML = 'Table 2-2.8';}
            if(Mi==52||Mi==54){Ti=229 ; TPi=22 ; b1_innerHTML = 'Table 2-2.9';}
            if(Mi==84||Mi==85){Ti=2210 ; TPi=23 ; b1_innerHTML = 'Table 2-2.10';}
            if(Mi==81){Ti=2211 ; TPi=24 ; b1_innerHTML = 'Table 2-2.11';}
            if(Mi==86){Ti=2212 ; TPi=25 ; b1_innerHTML = 'Table 2-2.12';}
            if(Mi==125||Mi==130){Ti=231 ; TPi=26 ; b1_innerHTML = 'Table 2-3.1';}
            if(Mi==107||Mi==132){Ti=232 ; TPi=27 ; b1_innerHTML = 'Table 2-3.2';}
            if(Mi==108){Ti=233 ; TPi=28 ; b1_innerHTML = 'Table 2-3.3';}
            if(Mi==106||Mi==133){Ti=234 ; TPi=29 ; b1_innerHTML = 'Table 2-3.4';}
            if(Mi==109||Mi==135){Ti=235 ; TPi=30 ; b1_innerHTML = 'Table 2-3.5';}
            if(Mi==113||Mi==138){Ti=236 ; TPi=31 ; b1_innerHTML = 'Table 2-3.6';}
            if(Mi==111||Mi==112||Mi==128||Mi==129){Ti=237 ; TPi=32 ; b1_innerHTML = 'Table 2-3.7';}
            if(Mi==110||Mi==115||Mi==116||Mi==120||Mi==121||Mi==124||Mi==127||Mi==136||Mi==140||Mi==143||Mi==145||Mi==146||Mi==147){Ti=238 ; TPi=33 ; b1_innerHTML = 'Table 2-3.8';}
            if(Mi==117||Mi==119||Mi==141||Mi==142){Ti=239 ; TPi=34 ; b1_innerHTML = 'Table 2-3.9';}
            if(Mi==152){Ti=2310 ; TPi=35 ; b1_innerHTML = 'Table 2-3.10';}
            if(Mi==65||Mi==98){Ti=2311 ; TPi=36 ; b1_innerHTML = 'Table 2-3.11';}
            if(Mi==88||Mi==126||Mi==151||Mi==153||Mi==155){Ti=2312 ; TPi=37 ; b1_innerHTML = 'Table 2-3.12';}
            if(Mi==137||Mi==150||Mi==154){Ti=2313 ; TPi=38 ; b1_innerHTML = 'Table 2-3.13';}
            if(Mi==122||Mi==123||Mi==144||Mi==148||Mi==149){Ti=2314 ; TPi=39; b1_innerHTML = 'Table 2-3.14';}
            if(Mi==114||Mi==139){Ti=2315 ; TPi=40; b1_innerHTML = 'Table 2-3.15';}
            if(Mi==131){Ti=2316 ; TPi=41; b1_innerHTML = 'Table 2-3.16';}
            if(Mi==89){Ti=2317 ; TPi=42; b1_innerHTML = 'Table 2-3.17';}
            if(Mi==118||Mi==134){Ti=2319 ;TPi=43;  b1_innerHTML = 'Table 2-3.19';}
            
            // Notes zuordnen und ausgeben
            
            if(Ti==211){
                if(Mi==1||Mi==38||Mi==71||Mi==101){Ausgabe_Notes_Z1_innerHTML ='(1) Upon prolonged exposure to temperatures above 425°C, the carbide phase of steel may be converted to graphite. Permissible but not recommended for prolonged use above 425°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==104){Ausgabe_Notes_Z1_innerHTML ='(1) Upon prolonged exposure to temperatures above 425°C, the carbide phase of steel may be converted to graphite. Permissible but not recommended for prolonged use above 425°C.' ; Ausgabe_Notes_Z2_innerHTML ='(2) Not to be used over 455°C.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==73){Ausgabe_Notes_Z1_innerHTML ='(3) Not to be used over 260°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==105){Ausgabe_Notes_Z1_innerHTML ='(4) Not to be used over 370°C.'; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==72){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==212){
                if(Mi==32||Mi==34||Mi==39){Ausgabe_Notes_Z1_innerHTML ='(1) Upon prolonged exposure to temperatures above 425°C, the carbide phase of steel may be converted to graphite. Permissible but not recommended for prolonged use above 425°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==92||Mi==94){Ausgabe_Notes_Z1_innerHTML ='(2) Not to be used over 340°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==74){Ausgabe_Notes_Z1_innerHTML ='(3) Not to be used over 260°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==91){Ausgabe_Notes_Z1_innerHTML =''; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==213){
                if(Mi==90||Mi==93){Ausgabe_Notes_Z1_innerHTML ='(1) Not to be used over 340°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==31||Mi==33||Mi==100){Ausgabe_Notes_Z1_innerHTML ='(2) Upon prolonged exposure to temperatures above 425°C, the carbide phase of steel may be converted to graphite. Permissible but not recommended for prolonged use above 425°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==103){Ausgabe_Notes_Z1_innerHTML ='(2) Upon prolonged exposure to temperatures above 425°C, the carbide phase of steel may be converted to graphite. Permissible but not recommended for prolonged use above 425°C.' ; Ausgabe_Notes_Z2_innerHTML ='(3) Not to be used over 455°C.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==43){Ausgabe_Notes_Z1_innerHTML ='(4) Upon prolonged exposure to temperatures above 465°C, the carbide phase of steel may be converted to graphite. Permissible but not recommended for prolonged use above 465°C.'; Ausgabe_Notes_Z2_innerHTML ='(6) The deliberate addition of any element not listed in ASTM A217, Table 1 is prohibited, except that calcium (Ca) and manganese (Mn) may be added for deoxidation.' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==214){
                if(Mi==70||Mi==99){Ausgabe_Notes_Z1_innerHTML ='(1) Upon prolonged exposure to temperatures above 425°C, the carbide phase of steel may be converted to graphite. Permissible but not recommended for prolonged use above 425°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==102){Ausgabe_Notes_Z1_innerHTML ='(1) Upon prolonged exposure to temperatures above 425°C, the carbide phase of steel may be converted to graphite. Permissible but not recommended for prolonged use above 425°C.' ; Ausgabe_Notes_Z2_innerHTML ='(2) Not to be used over 455°C.' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==215){
                if(Mi==2||Mi==35||Mi==36){Ausgabe_Notes_Z1_innerHTML ='(1) Upon prolonged exposure to temperatures above 465°C, the carbide phase of carbon molybdenum steel may be converted to graphite. Permissible but not recommended for prolonged use above 465°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==217){
                if(Mi==5){Ausgabe_Notes_Z1_innerHTML ='(1) Not to be used over 538°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==44){Ausgabe_Notes_Z1_innerHTML ='(1) Not to be used over 538°C.' ; Ausgabe_Notes_Z2_innerHTML ='(3) The deliberate addition of any element not listed in ASTM A217, Table 1 is prohibited, except that calcium (Ca) and manganese (Mn) may be added for deoxidation.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==45){Ausgabe_Notes_Z1_innerHTML ='(2) Use normalized and tempered material only.' ; Ausgabe_Notes_Z2_innerHTML ='(3) The deliberate addition of any element not listed in ASTM A217, Table 1 is prohibited, except that calcium (Ca) and manganese (Mn) may be added for deoxidation.' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==219){
                if(Mi==46){Ausgabe_Notes_Z1_innerHTML ='(1) Use normalized and tempered material only.' ; Ausgabe_Notes_Z2_innerHTML ='(3) The deliberate addition of any element not listed in ASTM A217, Table 1 is prohibited, except that calcium (Ca) and manganese (Mn) may be added for deoxidation.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==3){Ausgabe_Notes_Z1_innerHTML ='(1) Use normalized and tempered material only.' ; Ausgabe_Notes_Z2_innerHTML ='(4) Permissible but not recommended for prolonged use above 590°C.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==95){Ausgabe_Notes_Z1_innerHTML ='(4) Permissible but not recommended for prolonged use above 590°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2110){
                if(Mi==6||Mi==96){Ausgabe_Notes_Z1_innerHTML ='(1) Permissible but not recommended for prolonged use above 590°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==47){Ausgabe_Notes_Z1_innerHTML ='(2) Use normalized and tempered material only.' ; Ausgabe_Notes_Z2_innerHTML ='(4) The deliberate addition of any element not listed in ASTM A217, Table 1 is prohibited, except that calcium (Ca) and manganese (Mn) may be added for deoxidation.' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2111){
                if(Mi==37){Ausgabe_Notes_Z1_innerHTML ='(1) Upon prolonged exposure to temperatures above 465°C, the carbide phase of carbon molybdenum steel may be converted to graphite. Permissible but not recommended for prolonged use above 465°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2113){
                if(Mi==42){Ausgabe_Notes_Z1_innerHTML ='(1) Use normalized and tempered material only.' ; Ausgabe_Notes_Z2_innerHTML ='(2) The deliberate addition of any element not listed in ASTM A217, Table 1 is prohibited, except that calcium (Ca) and manganese (Mn) may be added for deoxidation.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==27){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2114){
                if(Mi==40){Ausgabe_Notes_Z1_innerHTML ='(1) Use normalized and tempered material only.' ; Ausgabe_Notes_Z2_innerHTML ='(2) The deliberate addition of any element not listed in ASTM A217, Table 1 is prohibited, except that calcium (Ca) and manganese (Mn) may be added for deoxidation.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==28){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2115){
                if(Mi==41){Ausgabe_Notes_Z1_innerHTML ='(1) The deliberate addition of any element not listed in ASTM A217, Table 1 is prohibited, except that calcium (Ca) and manganese (Mn) may be added for deoxidation.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==29||Mi==97){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2117){
                if(Mi==4){Ausgabe_Notes_Z1_innerHTML ='(1) Use normalized and tempered material only.' ; Ausgabe_Notes_Z2_innerHTML ='(2) Permissible but not recommended for prolonged use above 590°C.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==23){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2118){
                if(Mi==30){Ausgabe_Notes_Z1_innerHTML ='(1) Applications above 620°C are limited to tubing of maximum outside diameter of 3&frac12; in.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==221){
                if(Mi==7||Mi==48||Mi==80){Ausgabe_Notes_Z1_innerHTML ='(1) At temperatures over 538°C, use only when the carbon content is 0.04% or higher.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==78){Ausgabe_Notes_Z1_innerHTML ='(2) Not to be used over 425°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==8||Mi==49){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==222){
                if(Mi==11||Mi==14||Mi==55||Mi==58||Mi==82){Ausgabe_Notes_Z1_innerHTML ='(1) At temperatures over 538°C, use only when the carbon content is 0.04% or higher.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==79){Ausgabe_Notes_Z1_innerHTML ='(2) Not to be used over 455°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==83){Ausgabe_Notes_Z1_innerHTML ='(3) Not to be used over 538°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==12||Mi==56){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==223){
                if(Mi==9||Mi==50){Ausgabe_Notes_Z1_innerHTML ='(1) Not to be used over 425°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==13||Mi==15||Mi==57){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==224){
                if(Mi==16||Mi==59){Ausgabe_Notes_Z1_innerHTML ='(1) Not to be used over 538°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==17||Mi==60){Ausgabe_Notes_Z1_innerHTML ='(2) At temperatures over 538°C, use only if the material is heat treated by heating to a minimum temperature of 1095°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==225){
                if(Mi==18||Mi==20||Mi==61||Mi==63){Ausgabe_Notes_Z1_innerHTML ='(1) Not to be used over 538°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==19||Mi==21||Mi==62||Mi==64){Ausgabe_Notes_Z1_innerHTML ='(2) For temperatures over 538°C, use only if the material is heat treated by heating to a minimum temperature of 1095°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==226){
                if(Mi==51){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==227){
                if(Mi==10){Ausgabe_Notes_Z1_innerHTML ='(1) At temperatures over 538°C, use only when the carbon content is 0.04% or higher.' ; Ausgabe_Notes_Z2_innerHTML ='(2) Service temperatures of 565°C and above should be used only when assurance is provided that grain size is not finer than ASTM 6.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==53){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==228){
                if(Mi==24||Mi==25||Mi==26||Mi==67||Mi==68||Mi==69||Mi==75||Mi==76||Mi==77){Ausgabe_Notes_Z1_innerHTML ='(1) This steel may become brittle after service at moderately elevated temperatures. Not to be used over 315°C.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==22||Mi==66||Mi==87){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==229){
                if(Mi==52||Mi==54){Ausgabe_Notes_Z1_innerHTML ='(1) At temperatures over 538°C, use only when the carbon content is 0.04% or higher.' ; Ausgabe_Notes_Z2_innerHTML ='(3) This material should be used for service temperatures 565°C and above only when assurance is provided that grain size is not finer than ASTM 6.' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2210){
                if(Mi==84||Mi==85){Ausgabe_Notes_Z1_innerHTML ='(1) At temperatures over 538°C, use only when the carbon content is 0.04% or higher.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2211){
                if(Mi==81){Ausgabe_Notes_Z1_innerHTML ='(1) At temperatures over 538°C, use only when the carbon content is 0.04% or higher.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2212){
                if(Mi==86){Ausgabe_Notes_Z1_innerHTML ='(1) At temperatures over 538°C, use only when the carbon content is 0.04% or higher.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==231){
                if(Mi==125||Mi==130){Ausgabe_Notes_Z1_innerHTML ='(1) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==232){
                if(Mi==107||Mi==132){Ausgabe_Notes_Z1_innerHTML ='(1) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==233){
                if(Mi==108){Ausgabe_Notes_Z1_innerHTML ='(1) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==234){
                if(Mi==106||Mi==133){Ausgabe_Notes_Z1_innerHTML ='(1) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==235){
                if(Mi==109||Mi==135){Ausgabe_Notes_Z1_innerHTML ='(1) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==236){
                if(Mi==113||Mi==138){Ausgabe_Notes_Z1_innerHTML ='(1) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==237){
                if(Mi==111||Mi==112||Mi==128||Mi==129){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==238){
                if(Mi==127||Mi==147){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='(2) Not to be used over 675°C.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==121||Mi==143){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='(2) Not to be used over 675°C.' ; Ausgabe_Notes_Z3_innerHTML ='(8) Alloy N06022 in the solution annealed condition is subject to severe loss of impact strength at room temperature after exposure to temperatures in the range of 538°C to 675°C.';}
                if(Mi==110||Mi==124||Mi==145||Mi==146){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='(6) Not to be used over 425°C.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==116){Ausgabe_Notes_Z1_innerHTML ='(3) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==120||Mi==136){Ausgabe_Notes_Z1_innerHTML ='(3) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='(5) Grade 1.' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==115||Mi==140){Ausgabe_Notes_Z1_innerHTML ='(3) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='(7) Not to be used over 538°C.' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==239){
                if(Mi==117||Mi==119){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==141||Mi==142){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='(2) The chemical composition, mechanical properties, heat treating requirements, and grain size requirements shall conform to the applicable ASTM specification. The manufacturing procedures, tolerances, tests, certification, and markings shall be in accordance with ASTM B564.' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2310){
                if(Mi==152){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2311){
                if(Mi==65){Ausgabe_Notes_Z1_innerHTML ='(1) Use annealed materiel only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==98){Ausgabe_Notes_Z1_innerHTML ='(1) Use annealed materiel only.' ; Ausgabe_Notes_Z2_innerHTML ='(2) The chemical composition, mechanical properties, heat treating requirements, and grain size requirements shall conform to the applicable ASTM specification. The manufacturing procedures, tolerances, tests, certification, and markings shall be in accordance with ASTM B564.' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2312){
                if(Mi==88||Mi==126||Mi==151||Mi==153||Mi==155){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2313){
                if(Mi==150){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==137||Mi==154){Ausgabe_Notes_Z1_innerHTML ='(2) Use annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2314){
                if(Mi==148){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
                if(Mi==122||Mi==123||Mi==144||Mi==149){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='(2) Not to be used over 425°C.' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2315){
                if(Mi==114||Mi==139){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2316){
                if(Mi==131){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2317){
                if(Mi==89){Ausgabe_Notes_Z1_innerHTML ='(1) Use solution annealed material only.' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
            if(Ti==2319){
                if(Mi==118||Mi==134){Ausgabe_Notes_Z1_innerHTML ='' ; Ausgabe_Notes_Z2_innerHTML ='' ; Ausgabe_Notes_Z3_innerHTML ='';}
            }
        
        
            // Classindex zuordnen
            
            Class = txt2;
            Ci = 0;												
            if(Class == ''){Ci=0;}
            if(Class == 'Class 150'){Ci=150;}
            if(Class == 'Class 300'){Ci=300;}
            if(Class == 'Class 400'){Ci=400;}
            if(Class == 'Class 600'){Ci=600;}
            if(Class == 'Class 900'){Ci=900;}
            if(Class == 'Class 1500'){Ci=1500;}
            if(Class == 'Class 2500'){Ci=2500;}
        
            // Class zuordnen
            
            if(Ci==0){
                b2_innerHTML = '';
                Ergebnis_bar_innerHTML = '';
                Ergebnis_psi_innerHTML = '';
                Ausgabe_Hinweis_innerHTML = '';
            }
            if(Ci==150){
                b2_innerHTML = 'Class 150';
                
                if(Ti==211){ Spalte = new Array(19.6,19.2,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.1
                if(Ti==212){ Spalte = new Array(19.8,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.2
                if(Ti==213){ Spalte = new Array(18.4,18.2,17.4,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.3
                if(Ti==214){ Spalte = new Array(16.3,16.0,14.9,14.4,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.4
                if(Ti==215){ Spalte = new Array(18.4,18.4,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.5
                if(Ti==217){ Spalte = new Array(19.8,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.7
                if(Ti==219){ Spalte = new Array(19.8,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.9
                if(Ti==2110){ Spalte = new Array(19.8,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.10
                if(Ti==2111){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.11
                if(Ti==2113){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.13
                if(Ti==2114){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.14
                if(Ti==2115){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.15
                if(Ti==2117){ Spalte = new Array(19.8,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.17
                if(Ti==2118){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,1.4,1.4,1.4,1.4,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-1.18
                
                if(Ti==221){ Spalte = new Array(19.0,18.3,15.7,14.2,13.2,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.1
                if(Ti==222){ Spalte = new Array(19.0,18.4,16.2,14.8,13.7,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.2
                if(Ti==223){ Spalte = new Array(15.9,15.3,13.3,12.0,11.2,10.5,10.0,9.3,8.4,7.4,6.5,5.5,4.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.3
                if(Ti==224){ Spalte = new Array(19.0,18.6,17.0,15.7,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.4
                if(Ti==225){ Spalte = new Array(19.0,18.7,17.4,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.5
                if(Ti==226){ Spalte = new Array(19.0,18.5,16.5,15.3,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.6
                if(Ti==227){ Spalte = new Array(19.0,18.5,16.6,15.3,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.7
                if(Ti==228){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.8
                if(Ti==229){ Spalte = new Array(19.0,18.5,16.5,15.3,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.9
                if(Ti==2210){ Spalte = new Array(17.8,17.0,14.4,13.4,12.9,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.10
                if(Ti==2211){ Spalte = new Array(19.0,18.7,17.4,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.11
                if(Ti==2212){ Spalte = new Array(17.8,17.0,14.4,13.4,12.9,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-2.12
                
                if(Ti==231){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.1
                if(Ti==232){ Spalte = new Array(12.7,12.7,12.7,12.7,12.7,12.1,10.2,7.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.2
                if(Ti==233){ Spalte = new Array(6.3,6.3,6.1,6.0,6.0,6.0,6.0,5.9,5.9,5.9,5.8,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.3
                if(Ti==234){ Spalte = new Array(15.9,15.4,13.8,12.9,12.5,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.4
                if(Ti==235){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.5
                if(Ti==236){ Spalte = new Array(19.0,18.7,17.5,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.6
                if(Ti==237){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.7
                if(Ti==238){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.8
                if(Ti==239){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.9
                if(Ti==2310){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.10
                if(Ti==2311){ Spalte = new Array(19.7,18.8,15.7,14.4,13.3,12.1,10.2,9.3,8.4,7.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.11
                if(Ti==2312){ Spalte = new Array(17.8,17.5,16.3,15.4,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.12
                if(Ti==2313){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.13
                if(Ti==2314){ Spalte = new Array(19.0,18.6,17.0,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.14
                if(Ti==2315){ Spalte = new Array(15.9,15.6,14.5,13.7,13.0,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.15
                if(Ti==2316){ Spalte = new Array(19.0,18.5,16.7,15.6,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.16
                if(Ti==2317){ Spalte = new Array(15.9,15.4,13.5,12.3,11.3,10.4,9.7,9.3,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte150 Table 2-3.17
                if(Ti==2319){ Spalte = new Array(20.0,19.5,17.7,15.8,13.8,12.1,10.2,9.3,8.4,7.4,6.5,5.5,4.6,3.7,2.8,1.4,1.4,1.4,1.4,1.4,1.4,1.4,1.4,1.4,1.4,1.4,1.4,1.4);} // Spalte150 Table 2-3.19
                
                Interpolieren();
            }
            
            if(Ci==300){
                b2_innerHTML = 'Class 300';
                
                if(Ti==211){ Spalte = new Array(51.1,50.1,46.6,45.1,43.8,41.9,39.8,38.7,37.6,36.4,34.7,28.8,23.0,17.4,11.8,5.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.1
                if(Ti==212){ Spalte = new Array(51.7,51.7,51.5,50.2,48.6,46.3,42.9,41.4,40.0,37.8,34.7,28.8,23.0,17.1,11.6,5.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.2		
                if(Ti==213){ Spalte = new Array(48.0,47.5,45.3,43.9,42.5,40.8,38.7,37.6,36.4,35.0,32.6,27.3,21.6,15.7,11.1,5.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.3
                if(Ti==214){ Spalte = new Array(42.6,41.8,38.8,37.6,36.4,34.9,33.2,32.2,31.2,30.4,29.3,25.8,21.4,14.1,10.3,5.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.4
                if(Ti==215){ Spalte = new Array(48.0,48.0,47.9,47.3,45.8,44.5,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,24.1,11.3,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.5
                if(Ti==217){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,26.7,13.9,12.6,7.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.7
                if(Ti==219){ Spalte = new Array(51.7,51.7,51.5,49.7,48.0,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,25.7,14.9,12.7,8.8,6.1,4.3,2.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.9
                if(Ti==2110){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,28.2,18.4,15.6,10.5,6.9,4.5,2.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.10
                if(Ti==2111){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,23.6,11.3,11.3,10.1,7.1,5.3,3.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.11
                if(Ti==2113){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,27.9,21.4,13.7,12.0,8.9,6.2,4.0,2.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.13
                if(Ti==2114){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,28.2,17.5,15.0,10.5,7.2,5.0,3.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.14
                if(Ti==2115){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,28.2,25.2,25.0,24.0,19.5,14.6,9.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.15
                if(Ti==2117){ Spalte = new Array(51.7,51.5,50.4,48.2,46.3,44.8,42.9,41.4,40.3,38.9,36.5,35.2,33.7,27.9,21.4,13.7,12.0,8.8,6.1,4.0,2.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.17
                if(Ti==2118){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,28.2,25.2,25.0,24.0,21.6,18.3,14.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-1.18
                
                if(Ti==221){ Spalte = new Array(49.6,47.8,40.9,37.0,34.5,32.5,30.9,30.2,29.6,29.0,28.4,28.0,27.4,26.9,26.5,24.4,23.6,20.8,16.9,13.8,11.3,9.3,8.0,6.8,5.8,4.6,3.5,2.8);} // Spalte300 Table 2-2.1
                if(Ti==222){ Spalte = new Array(49.6,48.1,42.2,38.5,35.7,33.4,31.6,30.9,30.3,29.9,29.4,29.1,28.8,28.7,28.2,25.2,25.0,24.0,19.9,15.8,12.7,10.3,8.4,7.0,5.9,4.6,3.5,2.8);} // Spalte300 Table 2-2.2
                if(Ti==223){ Spalte = new Array(41.4,40.0,34.8,31.4,29.2,27.5,26.1,25.5,25.1,24.8,24.3,23.9,23.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-2.3
                if(Ti==224){ Spalte = new Array(49.6,48.6,44.2,41.0,38.3,36.0,34.1,33.3,32.6,32.0,31.6,31.1,30.8,30.5,28.2,25.2,25.0,24.0,20.3,15.8,12.6,9.9,7.9,6.3,5.0,4.0,3.1,2.6);} // Spalte300 Table 2-2.4
                if(Ti==225){ Spalte = new Array(49.6,48.8,45.3,42.5,39.9,37.8,36.1,35.4,34.8,34.2,33.9,33.6,33.5,31.7,28.2,25.2,25.0,24.0,21.6,18.3,14.1,12.4,10.1,7.9,5.9,4.6,3.5,2.8);} // Spalte300 Table 2-2.5
                if(Ti==226){ Spalte = new Array(49.6,48.3,43.1,40.0,37.8,36.1,34.8,34.2,33.8,33.4,33.1,32.6,32.2,31.7,28.2,25.2,25.0,22.2,16.8,12.5,9.4,7.2,5.5,4.3,3.4,2.7,2.1,1.8);} // Spalte300 Table 2-2.6
                if(Ti==227){ Spalte = new Array(49.6,48.4,43.4,40.0,37.6,35.8,34.5,33.9,33.3,32.9,32.4,32.1,31.7,31.2,28.2,25.2,25.0,22.2,16.8,12.5,9.4,7.2,5.5,4.3,3.4,2.7,2.1,1.8);} // Spalte300 Table 2-2.7
                if(Ti==228){ Spalte = new Array(51.7,51.7,50.7,45.9,42.7,40.5,38.9,38.2,37.6,37.4,36.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-2.8
                if(Ti==229){ Spalte = new Array(49.6,48.3,43.1,40.0,37.6,35.8,34.5,33.9,33.3,32.9,32.4,32.1,31.7,31.2,28.2,23.4,20.5,15.1,11.0,8.1,5.8,3.7,2.2,1.4,1,0.8,0.6,0.5);} // Spalte300 Table 2-2.9
                if(Ti==2210){ Spalte = new Array(46.3,44.5,37.5,34.9,33.5,32.6,31.7,31.2,30.6,29.8,29.1,28.3,27.6,26.7,25.8,23.3,21.9,18.5,14.5,11.4,8.9,7.0,5.7,4.6,3.5,2.6,2.0,1.9);} // Spalte300 Table 2-2.10
                if(Ti==2211){ Spalte = new Array(49.6,48.8,45.3,42.5,39.9,37.8,36.1,35.4,34.8,34.2,33.9,33.6,33.5,31.7,28.2,25.2,25.0,24.0,19.8,13.9,10.3,8.0,5.6,4.0,3.1,2.5,2.0,1.9);} // Spalte300 Table 2-2.11
                if(Ti==2212){ Spalte = new Array(46.3,44.5,37.5,34.9,33.5,32.6,31.7,31.2,30.6,29.8,29.1,28.3,27.6,26.7,25.8,23.3,22.9,21.7,19.4,16.8,14.1,11.5,8.8,6.3,4.5,3.1,2.3,1.9);} // Spalte300 Table 2-2.12
                
                if(Ti==231){ Spalte = new Array(51.7,51.7,50.9,48.9,47.2,45.5,42.9,41.4,40.3,38.9,36.5,35.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.1
                if(Ti==232){ Spalte = new Array(33.1,33.1,33.1,33.1,33.1,31.6,29.2,18.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.2
                if(Ti==233){ Spalte = new Array(16.5,16.4,15.8,15.6,15.6,15.6,15.6,15.5,15.4,15.4,15.2,14.9,14.6,14.3,13.8,13.1,9.8,5.4,4.4,3.4,2.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.3
                if(Ti==234){ Spalte = new Array(41.4,40.2,35.9,33.7,32.7,32.6,32.6,32.6,32.6,32.4,32.1,31.6,26.9,20.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.4
                if(Ti==235){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,28.2,16.5,13.9,9.4,6.6,5.1,4.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.5
                if(Ti==236){ Spalte = new Array(49.6,48.8,45.6,44.0,42.8,41.7,40.8,40.3,39.8,38.9,36.5,35.2,33.7,31.7,28.2,25.2,25.0,24.0,21.6,18.3,14.1,10.3,5.6,4.0,3.0,2.5,2.2,1.9);} // Spalte300 Table 2-3.6
                if(Ti==237){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.7
                if(Ti==238){ Spalte = new Array(51.7,51.7,51.5,50.3,48.3,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,28.2,25.2,25.0,24.0,21.6,18.3,14.1,11.5,8.8,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.8
                if(Ti==239){ Spalte = new Array(51.7,51.7,51.5,47.6,44.3,41.6,39.5,38.6,37.9,37.3,36.5,35.2,33.7,31.7,28.2,25.2,25.0,24.0,21.6,18.3,14.1,12.4,10.1,7.9,5.9,4.6,3.5,2.8);} // Spalte300 Table 2-3.9
                if(Ti==2310){ Spalte = new Array(51.7,51.7,51.5,47.1,44.3,42.8,41.3,40.4,38.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.10
                if(Ti==2311){ Spalte = new Array(51.3,49.1,41.1,37.5,34.7,32.0,30.0,29.2,28.7,28.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.11
                if(Ti==2312){ Spalte = new Array(46.3,45.6,42.5,40.1,37.3,34.9,33.1,32.3,31.6,31.0,30.4,29.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.12
                if(Ti==2313){ Spalte = new Array(51.7,51.7,48.2,45.8,43.6,41.5,39.4,38.4,37.7,37.2,36.5,35.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.13
                if(Ti==2314){ Spalte = new Array(49.6,48.6,44.3,41.3,39.1,37.4,36.1,35.6,35.2,34.9,34.6,34.4,33.7,31.7,28.2,25.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.14
                if(Ti==2315){ Spalte = new Array(41.4,40.6,37.8,35.9,33.9,32.3,30.7,30.1,29.4,28.7,28.3,27.7,27.2,26.8,26.3,25.2,25.0,24.0,21.6,18.3,14.1,12.4,10.1,7.9,5.9,4.6,3.5,2.8);} // Spalte300 Table 2-3.15
                if(Ti==2316){ Spalte = new Array(49.6,48.4,43.5,40.8,38.6,36.8,35.2,34.5,33.9,33.2,32.6,32.0,31.4,30.8,28.2,25.2,25.0,21.9,17.4,13.8,11.0,9.1,7.6,6.1,4.8,3.9,3.1,2.6);} // Spalte300 Table 2-3.16
                if(Ti==2317){ Spalte = new Array(41.4,40.1,35.3,32.0,29.4,27.2,25.4,24.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte300 Table 2-3.17
                if(Ti==2319){ Spalte = new Array(51.7,51.7,51.5,50.3,48.6,46.3,42.9,41.4,40.3,38.9,36.5,35.2,33.7,31.7,28.2,25.2,25.0,24.0,21.6,18.3,14.1,12.4,10.1,7.9,5.9,4.6,3.5,2.8);} // Spalte300 Table 2-3.19
        
                Interpolieren();
            }
            
            if(Ci==400){
                b2_innerHTML = 'Class 400';
                
                if(Ti==211){ Spalte = new Array(68.1,66.8,62.1,60.1,58.4,55.9,53.1,51.6,50.1,48.5,46.3,38.4,30.7,23.2,15.7,7.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.1
                if(Ti==212){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.4,50.4,46.3,38.4,30.7,22.8,15.4,7.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.2
                if(Ti==213){ Spalte = new Array(64.0,63.3,60.5,58.6,56.7,54.4,51.6,50.1,48.5,46.6,43.5,36.4,28.8,20.9,14.8,7.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.3
                if(Ti==214){ Spalte = new Array(56.7,55.7,51.8,50.1,48.5,46.6,44.2,43.0,41.7,40.5,39.1,34.4,28.5,18.8,13.7,7.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.4
                if(Ti==215){ Spalte = new Array(64.0,64.0,63.9,63.1,61.1,59.3,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,32.1,15.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.5
                if(Ti==217){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,35.6,18.6,16.8,9.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.7
                if(Ti==219){ Spalte = new Array(68.9,68.9,68.6,66.3,63.9,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,34.3,19.9,16.9,11.7,8.1,5.7,3.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.9
                if(Ti==2110){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,37.6,24.6,20.8,14.0,9.2,6.0,3.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.10
                if(Ti==2111){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,31.4,15.3,15.3,13.6,9.5,7.1,4.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.11
                if(Ti==2113){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,37.1,28.5,18.3,16.1,11.8,8.3,5.3,3.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.13
                if(Ti==2114){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,37.6,23.3,20.0,13.9,9.6,6.6,4.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.14
                if(Ti==2115){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,37.6,33.4,33.3,31.9,26.0,19.5,13.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.15
                if(Ti==2117){ Spalte = new Array(68.9,68.7,67.3,64.2,61.7,59.8,57.0,55.0,53.6,51.6,48.9,46.5,45.1,37.1,28.5,18.3,16.1,11.7,8.1,5.3,3.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.17
                if(Ti==2118){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,37.6,33.4,33.3,31.9,28.6,24.3,18.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-1.18
                
                if(Ti==221){ Spalte = new Array(66.2,63.8,54.5,49.3,46.0,43.3,41.2,40.3,39.5,38.7,37.9,37.3,36.5,35.9,35.3,32.6,31.4,27.8,22.5,18.4,15.0,12.5,10.7,9.0,7.7,6.2,4.8,3.8);} // Spalte400 Table 2-2.1
                if(Ti==222){ Spalte = new Array(66.2,64.2,56.3,51.3,47.6,44.5,42.2,41.2,40.4,39.8,39.3,38.9,38.5,38.2,37.6,33.4,33.3,31.9,26.5,21.1,16.9,13.8,11.2,9.3,7.8,6.2,4.8,3.8);} // Spalte400 Table 2-2.2
                if(Ti==223){ Spalte = new Array(55.2,53.4,46.4,41.9,38.9,36.6,34.8,34.0,33.4,33.0,32.4,31.8,31.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-2.3
                if(Ti==224){ Spalte = new Array(66.2,64.7,59.0,54.6,51.1,48.0,45.5,44.4,43.5,42.7,42.1,41.5,41.1,40.7,37.6,33.4,33.3,31.9,27.0,21.1,16.9,13.2,10.5,8.5,6.7,5.3,4.2,3.5);} // Spalte400 Table 2-2.4
                if(Ti==225){ Spalte = new Array(66.2,65.0,60.4,56.6,53.3,50.4,48.1,47.1,46.3,45.6,45.2,44.8,44.6,42.3,37.6,33.4,33.3,31.9,28.6,24.3,18.9,16.9,13.4,10.5,7.9,6.2,4.8,3.8);} // Spalte400 Table 2-2.5
                if(Ti==226){ Spalte = new Array(66.2,64.4,57.5,53.3,50.3,48.1,46.4,45.7,45.1,44.5,44.1,43.5,42.9,42.3,37.6,33.4,33.3,29.6,22.4,16.7,12.5,9.6,7.3,5.8,4.6,3.6,2.8,2.4);} // Spalte400 Table 2-2.6
                if(Ti==227){ Spalte = new Array(66.2,64.5,57.9,53.3,50.1,47.7,45.9,45.2,44.4,43.8,43.2,42.8,42.2,41.7,37.6,33.4,33.3,29.6,22.4,16.7,12.5,9.6,7.3,5.8,4.6,3.5,2.8,2.4);} // Spalte400 Table 2-2.7
                if(Ti==228){ Spalte = new Array(68.9,68.9,67.5,61.2,56.9,53.9,51.8,50.9,50.2,49.8,48.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-2.8
                if(Ti==229){ Spalte = new Array(66.2,64.4,57.5,53.3,50.1,47.7,45.9,45.2,44.4,43.8,43.2,42.8,42.2,41.7,37.6,31.2,27.3,20.1,14.7,10.9,7.8,4.9,2.9,1.8,1.4,1.1,0.8,0.6);} // Spalte400 Table 2-2.9
                if(Ti==2210){ Spalte = new Array(61.8,59.3,50.0,46.5,44.7,43.5,42.3,41.6,40.8,39.8,38.8,37.8,36.8,35.6,34.5,31.1,29.2,24.6,19.4,15.2,11.9,9.3,7.6,6.1,4.7,3.4,2.7,2.5);} // Spalte400 Table 2-2.10
                if(Ti==2211){ Spalte = new Array(66.2,65.0,60.4,56.6,53.3,50.4,48.1,47.1,46.3,45.6,45.2,44.8,44.6,42.3,37.6,33.4,33.3,31.9,26.4,18.5,13.7,10.6,7.5,5.3,4.1,3.3,2.7,2.5);} // Spalte400 Table 2-2.11
                if(Ti==2212){ Spalte = new Array(61.8,59.3,50.0,46.5,44.7,43.5,42.3,41.6,40.8,39.8,38.8,37.8,36.8,35.6,34.5,31.1,30.6,28.9,25.9,22.4,18.8,15.4,11.7,8.5,6.0,4.2,3.1,2.5);} // Spalte400 Table 2-2.12
                
                if(Ti==231){ Spalte = new Array(68.9,68.9,67.8,65.3,62.9,60.7,57.0,55.0,53.6,51.6,48.9,46.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.1
                if(Ti==232){ Spalte = new Array(44.1,44.1,44.1,44.1,44.1,42.1,39.0,25.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.2
                if(Ti==233){ Spalte = new Array(22.1,21.9,21.1,20.7,20.7,20.7,20.7,20.7,20.5,20.5,20.3,19.9,19.5,19.1,18.4,17.4,13.1,7.1,5.9,4.6,3.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.3
                if(Ti==234){ Spalte = new Array(55.2,53.7,47.9,45.0,43.6,43.5,43.5,43.5,43.4,43.2,42.8,42.2,35.9,27.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.4
                if(Ti==235){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,37.6,22.1,18.6,12.6,8.9,6.8,6.3,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.5
                if(Ti==236){ Spalte = new Array(66.2,65.1,60.8,58.7,57.1,55.7,54.4,53.8,53.0,51.6,48.9,46.5,45.1,42.3,37.6,33.4,33.3,31.9,28.6,24.3,18.9,13.7,7.4,5.4,4.0,3.3,2.9,2.5);} // Spalte400 Table 2-3.6
                if(Ti==237){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.7
                if(Ti==238){ Spalte = new Array(68.9,68.9,68.7,66.8,64.5,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,37.6,33.4,33.3,31.9,28.6,24.3,18.8,15.4,11.7,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.8
                if(Ti==239){ Spalte = new Array(68.9,68.9,68.7,63.4,59.1,55.4,52.7,51.5,50.5,49.8,48.9,46.5,45.1,42.3,37.6,33.4,33.3,31.9,28.6,24.3,18.9,16.9,13.4,10.5,7.9,6.2,4.8,3.8);} // Spalte400 Table 2-3.9
                if(Ti==2310){ Spalte = new Array(68.9,68.9,68.7,62.8,59.0,57.1,55.1,53.8,51.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.10
                if(Ti==2311){ Spalte = new Array(68.4,65.5,54.7,50.0,46.2,42.6,40.0,39.0,38.2,37.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.11
                if(Ti==2312){ Spalte = new Array(61.8,60.8,56.7,53.5,49.8,46.5,44.1,43.1,42.1,41.4,40.6,39.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.12
                if(Ti==2313){ Spalte = new Array(68.9,68.9,64.2,61.0,58.1,55.3,52.5,51.3,50.3,49.5,48.9,46.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.13
                if(Ti==2314){ Spalte = new Array(66.2,64.7,59.0,55.1,52.1,49.9,48.2,47.4,46.9,46.5,46.1,45.9,45.1,42.3,37.6,33.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.14
                if(Ti==2315){ Spalte = new Array(55.2,54.2,50.4,47.8,45.2,43.0,41.0,40.1,39.2,38.3,37.7,36.9,36.3,35.7,35.1,33.4,33.3,31.9,28.6,24.3,18.9,16.9,13.4,10.5,7.9,6.2,4.8,3.8);} // Spalte400 Table 2-3.15
                if(Ti==2316){ Spalte = new Array(66.2,64.5,58.0,54.4,51.5,49.0,47.0,46.0,45.2,44.2,43.4,42.6,41.8,41.0,37.6,33.4,33.3,29.2,23.2,18.3,14.7,12.1,10.1,8.1,6.4,5.2,4.2,3.5);} // Spalte400 Table 2-3.16
                if(Ti==2317){ Spalte = new Array(55.2,53.5,47.1,42.7,39.1,36.3,33.8,32.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte400 Table 2-3.17
                if(Ti==2319){ Spalte = new Array(68.9,68.9,68.7,66.8,64.8,61.7,57.0,55.0,53.6,51.6,48.9,46.5,45.1,42.3,37.6,33.4,33.3,31.9,28.6,24.3,18.9,16.9,13.4,10.5,7.9,6.2,4.8,3.8);} // Spalte400 Table 2-3.19
        
                Interpolieren();
            }
            
            if(Ci==600){
                b2_innerHTML = 'Class 600';
                
                if(Ti==211){ Spalte = new Array(102.1,100.2,93.2,90.2,87.6,83.9,79.6,77.4,75.1,72.7,69.4,57.5,46.0,34.9,23.5,11.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.1
                if(Ti==212){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.0,75.7,69.4,57.5,46.0,34.2,23.2,11.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.2		
                if(Ti==213){ Spalte = new Array(96.0,94.9,90.7,87.9,85.1,81.6,77.4,75.2,72.8,69.9,65.2,54.6,43.2,31.3,22.1,11.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.3
                if(Ti==214){ Spalte = new Array(85.1,83.5,77.7,75.1,72.8,69.8,66.4,64.5,62.5,60.7,58.7,51.5,42.7,28.2,20.6,11.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.4
                if(Ti==215){ Spalte = new Array(96.0,96.0,95.9,94.7,91.6,89.0,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,48.1,22.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.5
                if(Ti==217){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,53.4,27.9,25.2,14.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.7
                if(Ti==219){ Spalte = new Array(103.4,103.4,103.0,99.5,95.9,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,51.5,29.8,25.4,17.6,12.2,8.5,5.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.9
                if(Ti==2110){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,56.5,36.9,31.3,21.1,13.8,8.9,5.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.10
                if(Ti==2111){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,47.1,22.7,22.7,20.1,14.2,10.6,6.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.11
                if(Ti==2113){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,55.7,42.8,27.4,24.1,17.8,12.5,8.0,4.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.13
                if(Ti==2114){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,56.5,35.0,30.0,20.9,14.4,9.9,7.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.14
                if(Ti==2115){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,56.5,50.0,49.8,47.9,39.0,29.2,19.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.15
                if(Ti==2117){ Spalte = new Array(103.4,103.0,100.9,96.4,92.5,89.6,85.7,82.6,80.4,77.6,73.3,70.0,67.7,55.7,42.8,27.4,24.1,17.6,12.1,8.0,4.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.17
                if(Ti==2118){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,56.5,50.0,49.8,47.9,42.9,36.6,28.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-1.18
                
                if(Ti==221){ Spalte = new Array(99.3,95.6,81.7,74.0,69.0,65.0,61.8,60.4,59.3,58.1,56.9,56.0,54.8,53.9,53.0,48.9,47.1,41.7,33.8,27.6,22.5,18.7,16.1,13.5,11.6,9.0,7.0,5.9);} // Spalte600 Table 2-2.1
                if(Ti==222){ Spalte = new Array(99.3,96.2,84.4,77.0,71.3,66.8,63.2,61.8,60.7,59.8,58.9,58.3,57.7,57.3,56.5,50.0,49.8,47.9,39.8,31.6,25.3,20.6,16.8,14.0,11.7,9.0,7.0,5.9);} // Spalte600 Table 2-2.2
                if(Ti==223){ Spalte = new Array(82.7,80.0,69.6,62.8,58.3,54.9,52.1,51.0,50.1,49.5,48.6,47.7,46.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-2.3
                if(Ti==224){ Spalte = new Array(99.3,97.1,88.5,82.0,76.6,72.0,68.3,66.6,65.2,64.1,63.2,62.3,61.7,61.1,56.5,50.0,49.8,47.9,40.5,31.6,25.3,19.8,15.8,12.7,10.0,8.0,6.3,5.2);} // Spalte600 Table 2-2.4
                if(Ti==225){ Spalte = new Array(99.3,97.5,90.6,84.9,79.9,75.6,72.2,70.7,69.5,68.4,67.8,67.2,66.9,63.4,56.5,50.0,49.8,47.9,42.9,36.6,28.1,25.2,20.0,15.4,11.7,9.0,7.0,5.9);} // Spalte600 Table 2-2.5
                if(Ti==226){ Spalte = new Array(99.3,96.6,86.2,80.0,75.5,72.1,69.6,68.5,67.6,66.8,66.1,65.3,64.4,63.4,56.5,50.0,49.8,44.4,33.5,25.0,18.7,14.5,11.0,8.7,6.8,5.4,4.2,3.5);} // Spalte600 Table 2-2.6
                if(Ti==227){ Spalte = new Array(99.3,96.7,86.8,80.0,75.2,71.5,68.9,67.7,66.6,65.7,64.8,64.2,63.4,62.5,56.5,50.0,49.8,44.4,33.5,25.0,18.7,14.5,11.0,8.7,6.8,5.3,4.1,3.5);} // Spalte600 Table 2-2.7
                if(Ti==228){ Spalte = new Array(103.4,103.4,101.3,91.9,85.3,80.9,77.7,76.3,75.3,74.7,73.3,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-2.8
                if(Ti==229){ Spalte = new Array(99.3,96.6,86.2,80.0,75.2,71.5,68.9,67.7,66.6,65.7,64.8,64.2,63.4,62.5,56.5,46.8,41.0,30.2,22.1,16.3,11.6,7.4,4.3,2.7,2.1,1.6,1.2,0.9);} // Spalte600 Table 2-2.9
                if(Ti==2210){ Spalte = new Array(92.7,89.0,75.1,69.8,67.1,65.2,63.4,62.4,61.2,59.7,58.2,56.7,55.2,53.5,51.7,46.6,43.8,37.0,29.0,22.8,17.8,14.0,11.3,9.1,7.0,5.1,4.0,3.8);} // Spalte600 Table 2-2.10
                if(Ti==2211){ Spalte = new Array(99.3,97.5,90.6,84.9,79.9,75.6,72.2,70.7,69.5,68.4,67.8,67.2,66.9,63.4,56.5,50.0,49.8,47.9,39.6,27.7,20.6,15.9,11.2,8.0,6.2,4.9,4.0,3.8);} // Spalte600 Table 2-2.11
                if(Ti==2212){ Spalte = new Array(92.7,89.0,75.1,69.8,67.1,65.2,63.4,62.4,61.2,59.7,58.2,56.7,55.2,53.5,51.7,46.6,45.9,43.3,38.8,33.7,28.1,23.0,17.5,12.7,8.9,6.3,4.6,3.8);} // Spalte600 Table 2-2.12
                
                if(Ti==231){ Spalte = new Array(103.4,103.4,101.7,97.9,94.3,91.0,85.7,82.6,80.4,77.6,73.3,70.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.1
                if(Ti==232){ Spalte = new Array(66.2,66.2,66.2,66.2,66.2,63.2,58.5,37.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.2
                if(Ti==233){ Spalte = new Array(33.1,32.8,31.7,31.1,31.1,31.1,31.1,31.0,30.8,30.7,30.4,29.8,29.2,28.6,27.6,26.1,19.6,10.7,8.9,6.9,5.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.3
                if(Ti==234){ Spalte = new Array(82.7,80.5,71.9,67.5,65.4,65.2,65.2,65.2,65.1,64.8,64.2,63.3,53.8,41.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.4
                if(Ti==235){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,56.5,33.1,27.9,18.9,13.3,10.3,9.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.5
                if(Ti==236){ Spalte = new Array(99.3,97.6,91.2,88.0,85.6,83.5,81.6,80.6,79.5,77.6,73.3,70.0,67.7,63.4,56.5,50.0,49.8,47.9,42.9,36.6,28.1,20.5,11.1,8.1,6.1,4.9,4.3,3.8);} // Spalte600 Table 2-3.6
                if(Ti==237){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.7
                if(Ti==238){ Spalte = new Array(103.4,103.4,103.0,100.3,96.7,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,56.5,50.0,49.8,47.9,42.9,36.6,28.1,23.0,17.5,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.8
                if(Ti==239){ Spalte = new Array(103.4,103.4,103.0,95.2,88.6,83.1,79.0,77.2,75.8,74.7,73.3,70.0,67.7,63.4,56.5,50.0,49.8,47.9,42.9,36.6,28.1,25.2,20.0,15.4,11.7,9.0,7.0,5.9);} // Spalte600 Table 2-3.9
                if(Ti==2310){ Spalte = new Array(103.4,103.4,103.0,94.2,88.5,85.6,82.7,80.7,77.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.10
                if(Ti==2311){ Spalte = new Array(102.6,98.3,82.1,75.0,69.3,64.0,60.0,58.5,57.3,56.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.11
                if(Ti==2312){ Spalte = new Array(92.7,91.1,85.1,80.3,74.6,69.8,66.2,64.6,63.2,62.0,60.8,59.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.12
                if(Ti==2313){ Spalte = new Array(103.4,103.4,96.3,91.6,87.1,82.9,78.7,76.9,75.5,74.3,73.3,70.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.13
                if(Ti==2314){ Spalte = new Array(99.3,97.1,88.6,82.6,78.2,74.8,72.2,71.1,70.3,69.7,69.2,68.9,67.7,63.4,56.5,50.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.14
                if(Ti==2315){ Spalte = new Array(82.7,81.3,75.6,71.7,67.9,64.5,61.5,60.1,58.8,57.4,56.5,55.3,54.4,53.5,52.6,50.0,49.8,47.9,42.9,36.6,28.1,25.2,20.0,15.4,11.7,9.0,7.0,5.9);} // Spalte600 Table 2-3.15
                if(Ti==2316){ Spalte = new Array(99.3,96.7,87.0,81.6,77.2,73.5,70.4,69.0,67.8,66.3,65.1,64.0,62.8,61.6,56.5,50.0,49.8,43.7,34.8,27.5,22.1,18.2,15.2,12.2,9.5,7.7,6.3,5.2);} // Spalte600 Table 2-3.16
                if(Ti==2317){ Spalte = new Array(82.7,80.3,70.6,64.1,58.7,54.4,50.8,48.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte600 Table 2-3.17
                if(Ti==2319){ Spalte = new Array(103.4,103.4,103.0,100.3,97.2,92.7,85.7,82.6,80.4,77.6,73.3,70.0,67.7,63.4,56.5,50.0,49.8,47.9,42.9,36.6,28.1,25.2,20.0,15.4,11.5,9.0,7.0,5.9);} // Spalte600 Table 2-3.19
        
                Interpolieren();
            }
            
            if(Ci==900){
                b2_innerHTML = 'Class 900';
                
                if(Ti==211){ Spalte = new Array(153.2,150.4,139.8,135.2,131.4,125.8,119.5,116.1,112.7,109.1,104.2,86.3,69.0,52.3,35.3,17.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.1
                if(Ti==212){ Spalte = new Array(155.1,155.1,154.6,150.5,145.8,139.0,128.6,124.0,120.1,113.5,104.2,86.3,69.0,51.3,34.7,17.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.2
                if(Ti==213){ Spalte = new Array(144.1,142.4,136.0,131.8,127.6,122.3,116.1,112.7,109.2,104.9,97.9,81.9,64.8,47.0,33.2,17.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);}	// Spalte900 Table 2-1.3
                if(Ti==214){ Spalte = new Array(127.7,125.3,116.5,112.7,109.2,104.7,99.5,96.7,93.7,91.1,88.0,77.3,64.1,42.3,30.9,17.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.4
                if(Ti==215){ Spalte = new Array(144.1,144.1,143.8,142.0,137.4,133.5,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,72.2,34.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.5
                if(Ti==217){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,80.1,41.8,37.8,21.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.7
                if(Ti==219){ Spalte = new Array(155.1,155.1,154.4,149.2,143.9,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,77.2,44.7,38.1,26.4,18.3,12.8,8.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.9
                if(Ti==2110){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,84.7,55.3,46.9,31.6,20.7,13.4,8.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.10
                if(Ti==2111){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,70.7,34.4,34.4,30.2,21.3,15.9,9.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.11
                if(Ti==2113){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,83.6,64.1,41.1,36.1,26.7,18.7,12.0,7.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.13
                if(Ti==2114){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,84.7,52.5,45.0,31.4,21.5,14.9,10.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.14
                if(Ti==2115){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,84.7,75.2,74.8,71.8,58.5,43.8,29.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.15
                if(Ti==2117){ Spalte = new Array(155.1,154.5,151.3,144.5,138.8,134.5,128.6,124.0,120.7,116.5,109.8,105.1,101.4,83.6,64.1,41.1,36.1,26.4,18.2,12.0,7.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.17
                if(Ti==2118){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,84.7,75.2,74.8,71.8,64.2,54.9,42.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-1.18
                
                if(Ti==221){ Spalte = new Array(148.9,143.5,122.6,111.0,103.4,97.5,92.7,90.7,88.9,87.1,85.3,84.0,82.2,80.8,79.5,73.3,70.7,62.5,50.6,41.4,33.8,28.0,24.1,20.3,17.3,13.7,10.5,8.6);} // Spalte900 Table 2-2.1
                if(Ti==222){ Spalte = new Array(148.9,144.3,126.6,115.5,107.0,100.1,94.9,92.7,91.0,89.6,88.3,87.4,86.5,86.0,84.7,75.2,74.8,71.8,59.7,47.4,38.0,31.0,25.1,21.0,17.6,13.7,10.5,8.6);} // Spalte900 Table 2-2.2
                if(Ti==223){ Spalte = new Array(124.1,120.1,104.4,94.2,87.5,82.4,78.2,76.4,75.2,74.3,72.9,71.6,70.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-2.3
                if(Ti==224){ Spalte = new Array(148.9,145.7,132.7,122.9,114.9,108.1,102.4,99.9,97.8,96.1,94.8,93.4,92.5,91.6,84.7,75.2,74.8,71.8,60.8,47.4,37.9,29.6,23.7,19.0,15.0,11.9,9.4,7.8);} // Spalte900 Table 2-2.4
                if(Ti==225){ Spalte = new Array(148.9,146.3,135.9,127.4,119.8,113.4,108.3,106.1,104.3,102.6,101.7,100.8,100.4,95.1,84.7,75.2,74.8,71.8,64.2,54.9,42.5,37.6,29.8,23.2,17.6,13.7,10.5,8.6);} // Spalte900 Table 2-2.5
                if(Ti==226){ Spalte = new Array(148.9,144.9,129.3,120.0,113.3,108.2,104.4,102.7,101.4,100.1,99.2,97.9,96.5,95.1,84.7,75.2,74.8,66.5,50.3,37.5,28.1,21.7,16.5,13.0,10.2,8.1,6.3,5.3);} // Spalte900 Table 2-2.6
                if(Ti==227){ Spalte = new Array(148.9,145.1,130.2,120.0,112.8,107.3,103.4,101.6,99.9,98.6,97.3,96.4,95.1,93.7,84.7,75.2,74.8,66.5,50.3,37.5,28.1,21.7,16.5,13.0,10.2,8.0,6.2,5.3);} // Spalte900 Table 2-2.7
                if(Ti==228){ Spalte = new Array(155.1,155.1,152.0,137.8,128.0,121.4,116.6,114.5,112.9,112.1,109.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-2.8
                if(Ti==229){ Spalte = new Array(148.9,144.9,129.3,120.0,112.8,107.3,103.4,101.6,99.9,98.6,97.3,96.4,95.1,93.7,84.7,70.2,61.5,45.3,33.1,24.4,17.4,11.1,6.5,4.1,3.1,2.5,1.8,1.4);} // Spalte900 Table 2-2.9
                if(Ti==2210){ Spalte = new Array(139.0,133.4,112.6,104.7,100.6,97.8,95.2,93.6,91.7,89.5,87.3,85.0,82.8,80.2,77.5,70.0,65.7,55.5,43.5,34.3,26.7,20.9,17.0,13.7,10.5,7.7,6.1,5.7);} // Spalte900 Table 2-2.10
                if(Ti==2211){ Spalte = new Array(148.9,146.3,135.9,127.4,119.8,113.4,108.3,106.1,104.3,102.6,101.7,100.8,100.4,95.1,84.7,75.2,74.8,71.8,59.4,41.6,30.9,23.9,16.8,11.9,9.3,7.4,6.1,5.7);} // Spalte900 Table 2-2.11
                if(Ti==2212){ Spalte = new Array(139.0,133.4,112.6,104.7,100.6,97.8,95.2,93.6,91.7,89.5,87.3,85.0,82.8,80.2,77.5,70.0,68.8,65.0,58.2,50.5,42.2,34.6,26.3,19.0,13.4,9.4,6.9,5.7);} // Spalte900 Table 2-2.12
                
                if(Ti==231){ Spalte = new Array(155.1,155.1,152.6,146.8,141.5,136.5,128.6,124.0,120.7,116.5,109.8,105.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.1
                if(Ti==232){ Spalte = new Array(99.3,99.3,99.3,99.3,99.3,94.8,87.7,56.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.2
                if(Ti==233){ Spalte = new Array(49.6,49.2,47.5,46.7,46.7,46.7,46.7,46.5,46.2,46.1,45.6,44.7,43.8,43.0,41.4,39.2,29.5,16.1,13.3,10.3,8.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.3
                if(Ti==234){ Spalte = new Array(124.1,120.7,107.8,101.2,98.1,97.8,97.8,97.8,97.7,97.2,96.2,94.9,80.7,62.3,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.4
                if(Ti==235){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,84.7,49.6,41.8,28.3,19.9,15.4,14.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.5
                if(Ti==236){ Spalte = new Array(148.9,146.4,136.9,132.0,128.4,125.2,122.5,120.9,119.3,116.5,109.8,105.1,101.4,95.1,84.7,75.2,74.8,71.8,64.2,54.9,42.5,30.8,16.7,12.1,9.1,7.4,6.5,5.7);} // Spalte900 Table 2-3.6
                if(Ti==237){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.7
                if(Ti==238){ Spalte = new Array(155.1,155.1,154.6,150.6,145.0,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,84.7,75.2,74.8,71.8,64.2,54.9,42.2,34.6,26.3,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.8
                if(Ti==239){ Spalte = new Array(155.1,155.1,154.6,142.8,132.9,124.7,118.5,115.8,113.7,112.0,109.8,105.1,101.4,95.1,84.7,75.2,74.8,71.8,64.2,54.9,42.5,37.6,29.8,23.2,17.6,13.7,10.5,8.6);} // Spalte900 Table 2-3.9
                if(Ti==2310){ Spalte = new Array(155.1,155.1,154.6,141.3,132.8,128.4,124.0,121.1,116.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.10
                if(Ti==2311){ Spalte = new Array(153.9,147.4,123.2,112.5,104.0,95.9,90.0,87.7,86.0,84.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.11
                if(Ti==2312){ Spalte = new Array(139.0,136.7,127.6,120.4,112.0,104.7,99.3,97.0,94.8,93.0,91.3,89.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.12
                if(Ti==2313){ Spalte = new Array(155.1,155.1,144.5,137.4,130.7,124.4,118.1,115.3,113.2,111.5,109.8,105.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.13
                if(Ti==2314){ Spalte = new Array(148.9,145.7,132.8,124.0,117.3,112.2,108.3,106.7,105.5,104.6,103.7,103.3,101.4,95.1,84.7,75.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.14
                if(Ti==2315){ Spalte = new Array(124.1,121.9,113.4,107.6,101.8,96.8,92.2,90.2,88.3,86.2,84.8,83.0,81.7,80.3,79.0,75.2,74.8,71.8,64.2,54.9,42.5,37.6,29.8,23.2,17.6,13.7,10.5,8.6);} // Spalte900 Table 2-3.15
                if(Ti==2316){ Spalte = new Array(148.9,145.1,130.5,122.5,115.8,110.3,105.6,103.6,101.7,99.5,97.7,95.9,94.1,92.4,84.7,75.2,74.8,65.6,52.3,41.3,33.1,27.3,22.8,18.3,14.3,11.6,9.4,7.8);} // Spalte900 Table 2-3.16
                if(Ti==2317){ Spalte = new Array(124.1,120.4,105.9,96.1,88.1,81.7,76.1,73.3,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte900 Table 2-3.17
                if(Ti==2319){ Spalte = new Array(155.1,155.1,154.6,150.6,145.8,139.0,128.6,124.0,120.7,116.5,109.8,105.1,101.4,95.1,84.7,75.2,74.8,71.8,64.2,54.9,42.5,37.6,29.8,23.2,17.6,13.7,10.5,8.6);} // Spalte900 Table 2-3.19
        
                Interpolieren();
            }
            
            if(Ci==1500){
                b2_innerHTML = 'Class 1500';
                
                if(Ti==211){ Spalte = new Array(255.3,250.6,233.0,225.4,219.0,209.7,199.1,193.6,187.8,181.8,173.6,143.8,115.0,87.2,58.8,29.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.1
                if(Ti==212){ Spalte = new Array(258.6,258.6,257.6,250.8,243.2,231.8,214.4,206.6,200.1,189.2,173.6,143.8,115.0,85.4,57.9,29.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.2
                if(Ti==213){ Spalte = new Array(240.1,237.3,226.7,219.7,212.7,203.9,193.4,187.9,182.0,174.9,163.1,136.5,107.9,78.3,55.4,29.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.3
                if(Ti==214){ Spalte = new Array(212.8,208.9,194.2,187.8,182.1,174.6,165.9,161.2,156.2,151.8,146.7,128.8,106.8,70.5,51.5,29.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.4
                if(Ti==215){ Spalte = new Array(240.1,240.1,239.7,236.7,229.0,222.5,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,120.3,56.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.5
                if(Ti==217){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,133.4,69.7,63.0,35.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.7
                if(Ti==219){ Spalte = new Array(258.6,258.6,257.4,248.7,239.8,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,128.6,74.5,63.5,44.0,30.5,21.3,14.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.9
                if(Ti==2110){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,140.9,92.2,78.2,52.6,34.4,22.3,14.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.10
                if(Ti==2111){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,117.8,56.7,56.7,50.3,35.6,26.5,15.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.11
                if(Ti==2113){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,139.3,106.9,68.6,60.2,44.4,31.2,20.0,11.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.13
                if(Ti==2114){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,140.9,87.5,75.0,52.3,35.9,24.8,17.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.14
                if(Ti==2115){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,140.9,125.5,124.9,119.7,97.5,73.0,49.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.15
                if(Ti==2117){ Spalte = new Array(258.6,257.5,252.2,240.9,231.3,224.1,214.4,206.6,201.1,194.1,183.1,175.1,169.0,139.3,106.9,68.6,60.2,44.0,30.3,20.0,11.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.17
                if(Ti==2118){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,140.9,125.5,124.9,119.7,107.0,91.2,70.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-1.18
                
                if(Ti==221){ Spalte = new Array(248.2,239.1,204.3,185.0,172.4,162.4,154.6,151.1,148.1,145.2,142.2,140.0,137.0,134.7,132.4,122.1,117.8,104.2,84.4,68.9,56.3,46.7,40.1,33.8,28.9,22.8,17.4,14.1);} // Spalte1500 Table 2-2.1
                if(Ti==222){ Spalte = new Array(248.2,240.6,211.0,192.5,178.3,166.9,158.1,154.4,151.6,149.4,147.2,145.7,144.2,143.4,140.9,125.5,124.9,119.7,99.5,79.1,63.3,51.6,41.9,34.9,29.3,22.8,17.4,14.1);} // Spalte1500 Table 2-2.2
                if(Ti==223){ Spalte = new Array(206.8,200.1,173.9,157.0,145.8,137.3,130.3,127.4,125.4,123.8,121.5,119.3,117.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-2.3
                if(Ti==224){ Spalte = new Array(248.2,242.8,221.2,204.9,191.5,180.1,170.7,166.5,163.0,160.2,157.9,155.7,154.2,152.7,140.9,125.5,124.9,119.7,101.3,79.1,63.2,49.4,39.5,31.7,25.0,19.9,15.6,13.0);} // Spalte1500 Table 2-2.4
                if(Ti==225){ Spalte = new Array(248.2,243.8,226.5,212.4,199.7,189.1,180.4,176.8,173.8,171.0,169.5,168.1,167.3,158.2,140.9,125.5,124.9,119.7,107.0,91.2,70.7,62.7,49.7,38.6,29.6,22.8,17.4,14.1);} // Spalte1500 Table 2-2.5
                if(Ti==226){ Spalte = new Array(248.2,241.5,215.5,200.0,188.8,180.4,173.9,171.2,169.0,166.9,165.4,163.1,160.9,158.2,140.9,125.5,124.9,110.9,83.9,62.5,46.8,36.2,27.5,21.6,17.1,13.5,10.5,8.9);} // Spalte1500 Table 2-2.6
                if(Ti==227){ Spalte = new Array(248.2,241.8,217.0,200.0,188.0,178.8,172.3,169.3,166.5,164.3,162.1,160.6,158.4,156.2,140.9,125.5,124.9,110.9,83.9,62.5,46.8,36.2,27.5,21.6,17.1,13.3,10.3,8.9);} // Spalte1500 Table 2-2.7
                if(Ti==228){ Spalte = new Array(258.6,258.6,253.3,229.6,213.3,202.3,194.3,190.8,188.2,186.8,183.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-2.8
                if(Ti==229){ Spalte = new Array(248.2,241.5,215.5,200.0,188.0,178.8,172.3,169.3,166.5,164.3,162.1,160.6,158.4,156.2,140.9,117.0,102.5,75.5,55.1,40.7,29.1,18.4,10.8,6.8,5.2,4.1,3,2.4);} // Spalte1500 Table 2-2.9
                if(Ti==2210){ Spalte = new Array(231.7,222.4,187.7,174.4,167.7,163.1,158.6,156.1,152.9,149.2,145.5,141.7,138.0,133.7,129.2,116.6,109.5,92.4,72.6,57.1,44.5,34.9,28.3,22.8,17.5,12.8,10.1,9.5);} // Spalte1500 Table 2-2.10
                if(Ti==2211){ Spalte = new Array(248.2,243.8,226.5,212.4,199.7,189.1,180.4,176.8,173.8,171.0,169.5,168.1,167.3,158.2,140.9,125.5,124.9,119.7,99.0,69.3,51.5,39.8,28.1,19.9,15.5,12.3,10.1,9.5);} // Spalte1500 Table 2-2.11
                if(Ti==2212){ Spalte = new Array(231.7,222.4,187.7,174.4,167.7,163.1,158.6,156.1,152.9,149.2,145.5,141.7,138.0,133.7,129.2,116.6,114.7,108.3,97.1,84.1,70.4,57.6,43.8,31.7,22.3,15.7,11.4,9.5);} // Spalte1500 Table 2-2.12
                
                if(Ti==231){ Spalte = new Array(258.6,258.6,254.4,244.7,235.8,227.5,214.4,206.6,201.1,194.1,183.1,175.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.1
                if(Ti==232){ Spalte = new Array(165.5,165.5,165.5,165.5,165.5,158.0,146.2,93.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.2
                if(Ti==233){ Spalte = new Array(82.7,82.0,79.2,77.8,77.8,77.8,77.8,77.5,76.9,76.8,76.1,74.6,73.1,71.6,69.0,65.4,49.1,26.8,22.2,17.2,14.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.3
                if(Ti==234){ Spalte = new Array(206.8,201.2,179.7,168.7,163.5,163.0,163.0,163.0,162.8,161.9,160.4,158.2,134.5,103.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.4
                if(Ti==235){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,140.9,82.7,69.7,47.2,33.2,25.7,23.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.5
                if(Ti==236){ Spalte = new Array(248.2,244.0,228.1,219.9,214.0,208.7,204.1,201.6,198.8,194.1,183.1,175.1,169.0,158.2,140.9,125.5,124.9,119.7,107.0,91.2,70.7,51.3,27.8,20.1,15.1,12.4,10.8,9.5);} // Spalte1500 Table 2-3.6
                if(Ti==237){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.7
                if(Ti==238){ Spalte = new Array(258.6,258.6,257.6,250.8,241.7,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,140.9,125.5,124.9,119.7,107.0,91.2,70.4,57.6,43.8,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.8
                if(Ti==239){ Spalte = new Array(258.6,258.6,257.6,237.9,221.5,207.9,197.4,193.0,189.5,186.6,183.1,175.1,169.0,158.2,140.9,125.5,124.9,119.7,107.0,91.2,70.7,62.7,49.7,38.6,29.6,22.8,17.4,14.1);} // Spalte1500 Table 2-3.9
                if(Ti==2310){ Spalte = new Array(258.6,258.6,257.6,235.5,221.3,214.0,206.7,201.8,194.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.10
                if(Ti==2311){ Spalte = new Array(256.5,245.7,205.3,187.5,173.4,159.9,150.1,146.1,143.4,141.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.11
                if(Ti==2312){ Spalte = new Array(231.7,227.8,212.7,200.7,186.6,174.5,165.5,161.6,158.1,155.1,152.1,149.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.12
                if(Ti==2313){ Spalte = new Array(258.6,258.6,240.8,228.9,217.8,207.3,196.8,192.2,188.7,185.8,183.1,175.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.13
                if(Ti==2314){ Spalte = new Array(248.2,242.8,221.4,206.6,195.4,187.0,180.6,177.9,175.8,174.3,172.9,172.1,169.0,158.2,140.9,125.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.14
                if(Ti==2315){ Spalte = new Array(206.8,203.2,189.0,179.3,169.6,161.3,153.7,150.3,147.1,143.6,141.3,138.4,136.1,133.9,131.6,125.5,124.9,119.7,107.0,91.2,70.7,62.7,49.7,38.6,29.6,22.8,17.4,14.1);} // Spalte1500 Table 2-3.15
                if(Ti==2316){ Spalte = new Array(248.2,241.8,217.5,204.1,192.9,183.8,176.1,172.6,169.4,165.8,162.9,159.9,156.9,153.9,140.9,125.5,124.9,109.4,87.1,68.8,55.1,45.6,38.0,30.5,23.8,19.4,15.6,13.0);} // Spalte1500 Table 2-3.16
                if(Ti==2317){ Spalte = new Array(206.8,200.7,176.5,160.2,146.8,136.1,126.9,122.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte1500 Table 2-3.17
                if(Ti==2319){ Spalte = new Array(258.6,258.6,257.6,250.8,243.4,231.8,214.4,206.6,201.1,194.1,183.1,175.1,169.0,158.2,140.9,125.5,124.9,119.7,107.0,91.2,70.7,62.7,49.7,38.6,29.6,22.8,17.4,14.1);} // Spalte1500 Table 2-3.19
        
                Interpolieren();
            }
            
            if(Ci==2500){
                b2_innerHTML = 'Class 2500';
                
                if(Ti==211){ Spalte = new Array(425.5,417.7,388.3,375.6,365.0,349.5,331.8,322.6,313.0,303.1,289.3,239.7,191.7,145.3,97.9,49.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.1
                if(Ti==212){ Spalte = new Array(430.9,430.9,429.4,418.1,405.4,386.2,357.1,344.3,333.5,315.3,289.3,239.7,191.7,142.4,96.5,49.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.2
                if(Ti==213){ Spalte = new Array(400.1,395.6,377.8,366.1,354.4,339.8,322.4,313.1,303.3,291.4,271.9,227.5,179.9,130.6,92.3,49.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.3
                if(Ti==214){ Spalte = new Array(354.6,348.1,323.6,313.0,303.4,291.0,276.5,268.6,260.4,253.0,244.5,214.7,178.0,117.4,85.9,49.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.4
                if(Ti==215){ Spalte = new Array(400.1,400.1,399.5,394.5,381.7,370.9,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,200.5,94.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.5
                if(Ti==217){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,222.4,116.2,105.0,59.8,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.7
                if(Ti==219){ Spalte = new Array(430.9,430.9,429.0,414.5,399.6,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,214.4,124.1,105.9,73.4,50.9,35.5,23.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.9
                if(Ti==2110){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,235.0,153.7,130.3,87.7,57.4,37.2,23.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.10
                if(Ti==2111){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,196.3,94.6,94.6,83.8,59.3,44.2,25.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.11
                if(Ti==2113){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,232.1,178.2,114.3,100.4,74.0,51.9,33.3,19.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.13
                if(Ti==2114){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,235.0,145.8,125.0,87.1,59.8,41.4,29.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.14
                if(Ti==2115){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,235.0,208.9,208.0,199.5,162.5,121.7,82.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.15
                if(Ti==2117){ Spalte = new Array(430.9,429.2,420.4,401.5,385.6,373.5,357.1,344.3,335.3,323.2,304.9,291.6,281.8,232.1,178.2,114.3,100.4,73.4,50.4,33.3,19.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.17
                if(Ti==2118){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,235.0,208.9,208.0,199.5,178.5,152.0,117.7,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-1.18
                
                if(Ti==221){ Spalte = new Array(413.7,398.5,340.4,308.4,287.3,270.7,257.6,251.9,246.9,241.9,237.0,233.3,228.4,224.5,220.7,203.6,196.3,173.7,140.7,114.9,93.8,77.9,66.9,56.3,48.1,38.0,29.2,23.8);} // Spalte2500 Table 2-2.1
                if(Ti==222){ Spalte = new Array(413.7,400.9,351.6,320.8,297.2,278.1,263.5,257.4,252.7,249.0,245.3,242.9,240.4,238.9,235.0,208.9,208.0,199.5,165.9,131.8,105.5,86.0,69.8,58.2,48.9,38.0,29.2,23.8);} // Spalte2500 Table 2-2.2
                if(Ti==223){ Spalte = new Array(344.7,333.5,289.9,261.6,243.0,228.9,217.2,212.3,208.9,206.3,202.5,198.8,195.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-2.3
                if(Ti==224){ Spalte = new Array(413.7,404.6,368.7,341.5,319.1,300.2,284.6,277.6,271.7,266.9,263.2,259.5,256.9,254.4,235.0,208.9,208.0,199.5,168.9,131.8,105.4,82.3,65.9,52.8,41.7,33.2,26.1,21.7);} // Spalte2500 Table 2-2.4
                if(Ti==225){ Spalte = new Array(413.7,406.4,377.4,353.9,332.8,315.1,300.7,294.6,289.6,285.1,282.6,280.1,278.8,263.9,235.0,208.9,208.0,199.5,178.5,152.0,117.7,104.5,83.0,64.4,49.1,38.0,29.2,23.8);} // Spalte2500 Table 2-2.5
                if(Ti==226){ Spalte = new Array(413.7,402.5,359.2,333.3,314.7,300.6,289.9,285.4,281.7,278.2,275.6,271.9,268.2,263.9,235.0,208.9,208.0,184.8,139.8,104.2,78.0,60.3,45.9,36.0,28.4,22.4,17.5,14.8);} // Spalte2500 Table 2-2.6
                if(Ti==227){ Spalte = new Array(413.7,403.1,361.6,333.3,313.4,298.1,287.2,282.2,277.6,273.8,270.2,267.7,264.0,260.3,235.0,208.9,208.0,184.8,139.8,104.2,78.0,60.3,45.9,36.0,28.4,22.1,17.2,14.8);} // Spalte2500 Table 2-2.7
                if(Ti==228){ Spalte = new Array(430.9,430.9,422.2,382.7,355.4,337.2,323.8,318.0,313.7,311.3,304.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-2.8
                if(Ti==229){ Spalte = new Array(413.7,402.5,359.2,333.3,313.4,298.1,287.2,282.2,277.6,273.8,270.2,267.7,264,260.3,235,195,170.8,125.8,91.9,67.9,48.5,30.7,18,11.4,8.6,6.8,5,3.9);} // Spalte2500 Table 2-2.9
                if(Ti==2210){ Spalte = new Array(386.1,370.6,312.8,290.7,279.5,271.8,264.3,260.1,254.8,248.6,242.4,236.2,230.0,222.8,215.3,194.4,182.5,154.0,121.0,95.2,74.1,58.2,47.2,38.0,29.2,21.4,16.9,15.8);} // Spalte2500 Table 2-2.10
                if(Ti==2211){ Spalte = new Array(413.7,406.4,377.4,353.9,332.8,315.1,300.7,294.6,289.6,285.1,282.6,280.1,278.8,263.9,235.0,208.9,208.0,199.5,165.1,115.5,85.8,66.3,46.8,33.1,25.8,20.4,16.9,15.8);} // Spalte2500 Table 2-2.11
                if(Ti==2212){ Spalte = new Array(386.1,370.6,312.8,290.7,279.5,271.8,264.3,260.1,254.8,248.6,242.4,236.2,230.0,222.8,215.3,194.4,191.2,180.4,161.8,140.2,117.3,96.0,73.0,52.9,37.2,26.2,19.1,15.8);} // Spalte2500 Table 2-2.12
                
                if(Ti==231){ Spalte = new Array(430.9,430.9,423.9,407.8,392.9,379.2,357.1,344.3,335.3,323.2,304.9,291.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.1
                if(Ti==232){ Spalte = new Array(275.8,275.8,275.8,275.8,275.8,263.4,243.7,156.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.2
                if(Ti==233){ Spalte = new Array(137.9,136.7,132.0,129.6,129.6,129.6,129.6,129.2,128.2,128.0,126.8,124.3,121.8,119.3,115.1,108.9,81.8,44.6,37.0,28.7,23.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.3
                if(Ti==234){ Spalte = new Array(344.7,335.3,299.5,281.1,272.4,271.7,271.7,271.7,271.3,269.9,267.4,263.6,224.2,173.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.4
                if(Ti==235){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,235.0,137.9,116.2,78.6,55.3,42.8,39.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.5
                if(Ti==236){ Spalte = new Array(413.7,406.7,380.1,366.6,356.7,347.9,340.2,336.0,331.3,323.2,304.9,291.6,281.8,263.9,235.0,208.9,208.0,199.5,178.5,152.0,117.7,85.6,46.3,33.6,25.2,20.6,18.0,15.8);} // Spalte2500 Table 2-3.6
                if(Ti==237){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.7
                if(Ti==238){ Spalte = new Array(430.9,430.9,429.4,418.2,402.8,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,235.0,208.9,208.0,199.5,178.5,152.0,117.3,96.0,73.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.8
                if(Ti==239){ Spalte = new Array(430.9,430.9,429.4,396.5,369.2,346.4,329.1,321.7,315.8,311.1,304.9,291.6,281.8,263.9,235.0,208.9,208.0,199.5,178.5,152.0,117.7,104.5,83.0,64.4,49.1,38.0,29.2,23.8);} // Spalte2500 Table 2-3.9
                if(Ti==2310){ Spalte = new Array(430.9,430.9,429.4,392.5,368.9,356.6,344.5,336.4,324.2,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.10
                if(Ti==2311){ Spalte = new Array(427.5,409.6,342.1,312.5,288.9,266.5,250.1,243.6,238.9,235.4,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.11
                if(Ti==2312){ Spalte = new Array(386.1,379.7,354.5,334.6,311.0,290.8,275.9,269.3,263.4,258.5,253.5,248.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.12
                if(Ti==2313){ Spalte = new Array(430.9,430.9,401.4,381.6,362.9,345.5,328.1,320.3,314.5,309.7,304.9,291.6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.13
                if(Ti==2314){ Spalte = new Array(413.7,404.6,369.0,344.3,325.7,311.6,300.9,296.4,293.1,290.6,288.1,286.9,281.8,263.9,235.0,208.9,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.14
                if(Ti==2315){ Spalte = new Array(344.7,338.7,315.0,298.9,282.7,268.9,256.2,250.5,245.2,239.4,235.6,230.6,226.8,223.1,219.4,208.9,208.0,199.5,178.5,152.0,117.7,104.5,83.0,64.4,49.1,38.0,29.2,23.8);} // Spalte2500 Table 2-3.15
                if(Ti==2316){ Spalte = new Array(413.7,403.1,362.4,340.2,321.6,306.3,293.4,287.7,282.4,276.4,271.4,266.5,261.5,256.5,235.0,208.9,208.0,182.3,145.1,114.6,91.9,75.9,63.3,50.9,39.7,32.3,26.1,21.7);} // Spalte2500 Table 2-3.16
                if(Ti==2317){ Spalte = new Array(344.7,334.4,294.2,267.0,244.7,226.9,211.5,203.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0);} // Spalte2500 Table 2-3.17
                if(Ti==2319){ Spalte = new Array(430.9,430.9,429.4,418.2,405.4,386.2,357.1,344.3,335.3,323.2,304.9,291.6,281.8,263.9,235.0,208.9,208.0,199.5,178.5,152.0,117.7,104.5,83.0,64.4,49.1,38.0,29.2,23.8);} // Spalte2500 Table 2-3.19
        
                Interpolieren();
            }
            
            TP150 = new Array(30,30,28,25,28,30,30,30,30,30,30,30,30,30,29,29,24,29,29,29,29,30,29,27,29,27,30,20,10,24,30,29,30,30,30,30,30,27,30,29,24,29,24,30);
            TP300 = new Array(77,78,72,64,72,78,78,78,78,78,78,78,78,78,75,75,63,75,75,75,75,78,75,70,75,70,78,50,25,63,78,75,78,78,78,78,77,70,78,75,63,75,63,78);
            TP400 = new Array(103,104,96,86,96,104,104,104,104,104,104,104,104,104,100,100,83,100,100,100,100,104,100,93,100,93,104,67,34,83,104,100,104,104,104,104,103,93,104,100,83,100,83,104);
            TP600 = new Array(154,156,144,128,144,156,156,156,156,156,156,156,156,156,149,149,125,149,149,149,149,156,149,140,149,140,156,100,50,125,156,149,156,156,156,156,154,140,156,149,125,149,125,156);
            TP900 = new Array(230,233,217,192,217,233,233,233,233,233,233,233,233,233,224,224,187,224,224,224,224,233,224,209,224,209,233,149,75,187,233,224,233,233,233,233,231,209,233,224,187,224,187,233);
            TP1500 = new Array(383,388,361,320,361,388,388,388,388,388,388,388,388,388,373,373,311,373,373,373,373,388,373,348,373,348,388,249,125,311,388,373,388,388,388,388,385,348,388,373,311,373,311,388);
            TP2500 = new Array(639,647,601,532,601,647,647,647,647,647,647,647,647,647,621,621,518,621,621,621,621,647,621,580,621,580,647,414,207,518,647,621,647,647,647,647,642,580,647,621,518,621,518,647);
        
            if(Ci==0){TP_bar_innerHTML = '' ; TP_psi_innerHTML = '';}
        
            if(Ci==150){TP_bar_innerHTML = TP150[TPi] + ' bar'; TP_psi_innerHTML = + Math.round(TP150[TPi]*14.5038 * 1) / 1 + ' psi';}
            if(Ci==300){TP_bar_innerHTML = TP300[TPi] + ' bar'; TP_psi_innerHTML = + Math.round(TP300[TPi]*14.5038 * 1) / 1 + ' psi';}
            if(Ci==400){TP_bar_innerHTML = TP400[TPi] + ' bar'; TP_psi_innerHTML = + Math.round(TP400[TPi]*14.5038 * 1) / 1 + ' psi';}
            if(Ci==600){TP_bar_innerHTML = TP600[TPi] + ' bar'; TP_psi_innerHTML = + Math.round(TP600[TPi]*14.5038 * 1) / 1 + ' psi';}
            if(Ci==900){TP_bar_innerHTML = TP900[TPi] + ' bar'; TP_psi_innerHTML = + Math.round(TP900[TPi]*14.5038 * 1) / 1 + ' psi';} 
            if(Ci==1500){TP_bar_innerHTML = TP1500[TPi] + ' bar'; TP_psi_innerHTML = + Math.round(TP1500[TPi]*14.5038 * 1) / 1 + ' psi';}
            if(Ci==2500){TP_bar_innerHTML = TP2500[TPi] + ' bar'; TP_psi_innerHTML = + Math.round(TP2500[TPi]*14.5038 * 1) / 1 + ' psi';}
            
        
                    
        }
        
        function Interpolieren(){
            
            TM = 0;
            Einheit = '';
            T = 0;
            i=0;
        
            TM = parseFloat(txt3.replace(/,/,"."));
            Einheit = txt4;
        
                
            if(Einheit=='°Fahrenheit'){T=(TM-32)*5/9 ; b3_innerHTML = + Math.round(T * 1) / 1 + ' °C';}
            else{T=TM; b3_innerHTML = '';}
            
            if(T<38){T=38;}
            
            Temperatur = new Array(38,50,100,150,200,250,300,325,350,375,400,425,450,475,500,538,550,575,600,625,650,675,700,725,750,775,800,816);	
            
                
            if(Ci==150||Ci==300||Ci==400||Ci==600||Ci==900||Ci==1500||Ci==2500){
                
                do{++i;}
                while(T > Temperatur[i]);
            
                ErgebnisBAR = 0;
                ErgebnisBAR = Spalte[i-1] + (Spalte[i]-Spalte[i-1]) / (Temperatur[i]-Temperatur[i-1]) * (T-Temperatur[i-1]);
            
                ErgebnisPSI = 0;
                ErgebnisPSI = ErgebnisBAR*14.5038;
                
                Ergebnis_bar_innerHTML = Math.round(ErgebnisBAR * 10) / 10 + ' bar';
                Ausgabe_Hinweis_innerHTML = '';
                Ergebnis_psi_innerHTML = + Math.round(ErgebnisPSI * 1) / 1 + ' psi';	
                    
        
                
                if(Ti==211&&T>538){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.1 is 538°C.';}
                if(Ti==212&&T>538){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.2 is 538°C.';}
                if(Ti==213&&T>538){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.3 is 538°C.';}
                if(Ti==214&&T>538){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.4 is 538°C.';}
                if(Ti==215&&T>538){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.5 is 538°C.';}
                if(Ti==217&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.7 in Class 150 is 538°C.';}
                if(Ti==217&&T>575&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.7 is 575°C.';}
                if(Ti==219&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.9 in Class 150 is 538°C.';}
                if(Ti==219&&T>650&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.9 is 650°C.';}
                if(Ti==2110&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.10 in Class 150 is 538°C.';}
                if(Ti==2110&&T>650&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.10 is 650°C.';}
                if(Ti==2111&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.11 in Class 150 is 538°C.';}
                if(Ti==2111&&T>650&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.11 is 650°C.';}
                if(Ti==2113&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.13 in Class 150 is 538°C.';}
                if(Ti==2113&&T>650&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.13 is 650°C.';}
                if(Ti==2114&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.14 in Class 150 is 538°C.';}
                if(Ti==2114&&T>650&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.14 is 650°C.';}
                if(Ti==2115&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.15 in Class 150 is 538°C.';}
                if(Ti==2115&&T>650&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.15 is 650°C.';}
                if(Ti==2117&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.17 in Class 150 is 538°C.';}
                if(Ti==2117&&T>650&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.17 is 650°C.';}
                if(Ti==2118&&T>650){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-1.18 is 650°C.';}
                if(Ti==221&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.1 in Class 150 is 538°C.';}
                if(Ti==221&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.1 is 816°C.';}
                if(Ti==222&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.2 in Class 150 is 538°C.';}
                if(Ti==222&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.2 is 816°C.';}
                if(Ti==223&&T>450){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.3 is 450°C.';}
                if(Ti==224&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.4 in Class 150 is 538°C.';}
                if(Ti==224&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.4 is 816°C.';}
                if(Ti==225&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.5 in Class 150 is 538°C.';}
                if(Ti==225&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.5 is 816°C.';}
                if(Ti==226&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.6 in Class 150 is 538°C.';}
                if(Ti==226&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.6 is 816°C.';}
                if(Ti==227&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.7 in Class 150 is 538°C.';}
                if(Ti==227&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.7 is 816°C.';}
                if(Ti==228&&T>400){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.8 is 400°C.';}
                if(Ti==229&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.9 in Class 150 is 538°C.';}
                if(Ti==229&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.9 is 816°C.';}
                if(Ti==2210&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.10 in Class 150 is 538°C.';}
                if(Ti==2210&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.10 is 816°C.';}
                if(Ti==2211&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.11 in Class 150 is 538°C.';}
                if(Ti==2211&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.11 is 816°C.';}
                if(Ti==2212&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.12 in Class 150 is 538°C.';}
                if(Ti==2212&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-2.12 is 816°C.';}
                if(Ti==231&&T>425){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.1 is 425°C.';}
                if(Ti==232&&T>325){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.2 is 325°C.';}
                if(Ti==233&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.3 in Class 150 is 538°C.';}
                if(Ti==233&&T>650&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.3 is 650°C.';}
                if(Ti==234&&T>475){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.4 is 475°C.';}
                if(Ti==235&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.5 in Class 150 is 538°C.';}
                if(Ti==235&&T>650&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.5 is 650°C.';}
                if(Ti==236&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.6 in Class 150 is 538°C.';}
                if(Ti==236&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.6 is 816°C.';}
                if(Ti==237&&T>425){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.7 is 425°C.';}
                if(Ti==238&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.8 in Class 150 is 538°C.';}
                if(Ti==238&&T>700&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.8 is 700°C.';}
                if(Ti==239&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.9 in Class 150 is 538°C.';}
                if(Ti==239&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.9 is 816°C.';}
                if(Ti==2310&&T>350){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.10 is 350°C.';}
                if(Ti==2311&&T>375){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.11 is 375°C.';}
                if(Ti==2312&&T>425){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.12 is 425°C.';}
                if(Ti==2313&&T>425){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.13 is 425°C.';}
                if(Ti==2314&&T>538){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.14 is 538°C.';}
                if(Ti==2315&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.15 in Class 150 is 538°C.';}
                if(Ti==2315&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.15 is 816°C.';}
                if(Ti==2316&&T>538&&Ci==150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.16 in Class 150 is 538°C.';}
                if(Ti==2316&&T>816&&Ci!=150){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.16 is 816°C.';}
                if(Ti==2317&&T>325){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.17 is 325°C.';}
                if(Ti==2319&&T>816){Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = 'The maximum application temperature of Table 2-3.19 is 816°C.';}
            
            }
                
            else{Ergebnis_bar_innerHTML = '';Ergebnis_psi_innerHTML = '';Ausgabe_Hinweis_innerHTML = '';}
        
        }
        
    }


    
module.exports = { ...module.exports, CisInspector };
