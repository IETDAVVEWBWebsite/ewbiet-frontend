import * as React from 'react';
import Typography from '@mui/material/Typography'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import simpleback9 from "../../Images/simpleback9.jpg"

import img1 from "../../Images/1.jpg"
import img2 from "../../Images/2.jpg"
import img3 from "../../Images/3.jpg"
import img4 from "../../Images/4.jpg"
import img5 from "../../Images/5.jpg"
import img6 from "../../Images/6.jpg"
import img7 from "../../Images/7.jpg"
import img8 from "../../Images/8.jpg"
import img9 from "../../Images/9.jpg"
import img10 from "../../Images/10.jpg"
import img11 from "../../Images/11.jpg"
import img12 from "../../Images/12.jpg"
import img13 from "../../Images/13.jpg"
import img14 from "../../Images/14.jpg"
import img15 from "../../Images/15.jpg"
import img16 from "../../Images/16.jpg"
import img17 from "../../Images/17.jpg"
import img19 from "../../Images/19.jpg"
import img21 from "../../Images/21.jpg"
import img22 from "../../Images/22.jpg"
import img23 from "../../Images/23.jpg"
import img24 from "../../Images/24.jpg"
import img25 from "../../Images/25.jpg"
import img26 from "../../Images/26.jpg"
import img27 from "../../Images/27.jpg"
import img28 from "../../Images/28.jpg"
import img29 from "../../Images/29.jpg"
import img30 from "../../Images/30.jpg"
import img31 from "../../Images/31.jpg"
import img33 from "../../Images/33.jpg"
import img34 from "../../Images/34.jpg"
import img35 from "../../Images/35.jpg"
import img36 from "../../Images/36.jpg"
import img40 from "../../Images/40.jpg"
import img41 from "../../Images/41.jpg"
import img42 from "../../Images/42.jpg"
import img43 from "../../Images/43.jpg"
import img44 from "../../Images/44.jpg"
import img45 from "../../Images/45.jpg"
import img48 from "../../Images/48.jpg"
import img49 from "../../Images/49.jpg"
import img50 from "../../Images/50.jpg"
import img51 from "../../Images/51.jpg"
import img52 from "../../Images/52.jpg"
import img53 from "../../Images/53.jpg"
import img55 from "../../Images/55.jpg"
import img58 from "../../Images/58.jpg"
import img60 from "../../Images/60.jpg"
import img61 from "../../Images/61.jpg"
import img62 from "../../Images/62.jpg"
import img63 from "../../Images/63.jpg"
import img64 from "../../Images/64.jpg"
import img65 from "../../Images/65.jpg"
import img66 from "../../Images/66.jpg"
import img67 from "../../Images/67.jpg"
import img68 from "../../Images/68.jpg"
import img69 from "../../Images/69.jpg"
import img70 from "../../Images/70.jpg"
import img74 from "../../Images/74.jpg"
import img75 from "../../Images/75.jpg"
import img76 from "../../Images/76.jpg"
import img77 from "../../Images/77.jpg"
import img78 from "../../Images/78.jpg"
import img79 from "../../Images/79.jpg"
import img80 from "../../Images/80.jpg"
import img81 from "../../Images/81.jpg"
import img83 from "../../Images/83.jpg"
import img87 from "../../Images/87.jpg"
import img89 from "../../Images/89.jpg"
import img91 from "../../Images/91.jpg"
import img92 from "../../Images/92.jpg"
import img93 from "../../Images/93.jpg"
import img94 from "../../Images/94.jpg"
import img95 from "../../Images/95.jpg"
import img96 from "../../Images/96.jpg"
import img97 from "../../Images/97.jpg"
import img98 from "../../Images/98.jpg"
import img99 from "../../Images/99.jpg"
import img100 from "../../Images/100.jpg"
import img101 from "../../Images/101.jpg"
import img102 from "../../Images/102.jpg"
import img103 from "../../Images/103.jpg"
import img104 from "../../Images/104.jpg"
import img105 from "../../Images/105.jpg"
import img107 from "../../Images/107.jpg"
import img109 from "../../Images/109.jpg"
import img110 from "../../Images/110.jpg"
import img111 from "../../Images/111.jpg"
import img112 from "../../Images/112.jpg"
import img113 from "../../Images/113.jpg"
import img114 from "../../Images/114.jpg"
import img115 from "../../Images/115.jpg"
import img116 from "../../Images/116.jpg"
import img117 from "../../Images/117.jpg"
import img119 from "../../Images/119.jpg"
import img120 from "../../Images/120.jpg"
import img121 from "../../Images/121.jpg"
import img122 from "../../Images/122.jpg"
import img123 from "../../Images/123.jpg"
import img124 from "../../Images/124.jpg"
import img125 from "../../Images/125.jpg"
import img126 from "../../Images/126.jpg"
import img127 from "../../Images/127.jpg"
import img128 from "../../Images/128.jpg"
import img129 from "../../Images/109.jpg"
import img130 from "../../Images/130.jpg"
import img131 from "../../Images/131.jpg"
import img132 from "../../Images/132.jpg"
import img133 from "../../Images/133.jpg"
import img134 from "../../Images/134.jpg"
import img136 from "../../Images/136.jpg"
import img137 from "../../Images/137.jpg"
import img138 from "../../Images/138.jpg"
import img139 from "../../Images/139.jpg"
import img140 from "../../Images/140.jpg"
import img141 from "../../Images/141.jpg"
import img143 from "../../Images/143.jpg"
import img144 from "../../Images/144.jpg"
import collar1 from "../../Images/collar1.jpg"
import collar2 from "../../Images/collar2.jpg"
import collar3 from "../../Images/collar3.jpg"
import collar4 from "../../Images/collar4.jpg"
import collar5 from "../../Images/collar5.jpg"
import collar6 from "../../Images/collar6.jpg"

const myStyle = {
  backgroundImage: `url(${simpleback9})`,
  //height: '230vh',
  //marginTop:'-70px',
  fontSize: '20px',
  backgroundSize: 'cover',
  //backgroundRepeat: 'no-repeat',
};

const gallery = () => {
  return (
    <>

      <div style={myStyle}>
        <br />
        
        <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B'  > Image Gallery </Typography>


        <MDBContainer className='overflow-hidden'>

          <MDBRow className='row-cols-1 row-cols-md-3 g-4 mb-3 ' >

          <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={collar1} alt='img1' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={collar2} alt='img1' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={collar3} alt='img1' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={collar4} alt='img1' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={collar5} alt='img1' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={collar6} alt='img1' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img1} alt='img1' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img2} alt='img2' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img3} alt='img3' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img4} alt='img4' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img5} alt='img5' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img6} alt='img6' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img7} alt='img7' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img8} alt='img8' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img9} alt='img9' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img10} alt='img10' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img11} alt='img11' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img12} alt='img12' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img13} alt='img13' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img14} alt='img14' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img15} alt='img15' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img16} alt='img16' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img17} alt='img17' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img19} alt='img19' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img21} alt='img21' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img22} alt='img22' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img23} alt='img23' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img24} alt='img24' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img25} alt='img25' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img26} alt='img26' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img27} alt='img27' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img28} alt='img28' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img29} alt='img29' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img30} alt='img23' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img31} alt='img31' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img33} alt='img33' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img34} alt='img34' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img35} alt='img35' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img36} alt='img36' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img40} alt='img40' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img41} alt='img41' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img42} alt='img42' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img43} alt='img43' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img44} alt='img44' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img45} alt='img45' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img48} alt='img48' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img49} alt='img49' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img50} alt='img50' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img51} alt='img51' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img52} alt='img52' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img53} alt='img53' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img55} alt='img55' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img58} alt='img58' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img60} alt='img60' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img61} alt='img61' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img62} alt='img62' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img63} alt='img63' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img64} alt='img64' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img65} alt='img65' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img66} alt='img66' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img67} alt='img67' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img68} alt='img68' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img69} alt='img69' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img70} alt='img70' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img74} alt='img74' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img75} alt='img75' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img76} alt='img76' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img77} alt='img77' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img78} alt='img78' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img79} alt='img79' position='top' />
              </MDBCard>
            </MDBCol>
            
            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img80} alt='img80' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img81} alt='img81' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img83} alt='img83' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img87} alt='img87' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img89} alt='img89' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img91} alt='img91' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img92} alt='img92' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img93} alt='img93' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img94} alt='img94' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img95} alt='img95' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img96} alt='img96' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img97} alt='img97' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img98} alt='img98' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img99} alt='img99' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img100} alt='img100' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img101} alt='img101' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img102} alt='img102' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img103} alt='img103' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img104} alt='img104' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img105} alt='img105' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img107} alt='img107' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img109} alt='img109' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img110} alt='img110' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img111} alt='img111' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img112} alt='img112' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img113} alt='img113' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img114} alt='img114' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img115} alt='img115' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img116} alt='img116' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img117} alt='img117' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img119} alt='img119' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img120} alt='img120' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img121} alt='img121' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img122} alt='img122' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img123} alt='img123' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img124} alt='img124' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img125} alt='img125' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img126} alt='img126' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img127} alt='img127' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img128} alt='img128' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img129} alt='img129' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img130} alt='img130' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img131} alt='img131' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img132} alt='img132' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img133} alt='img133' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img134} alt='img134' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img136} alt='img136' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img137} alt='img137' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img138} alt='img138' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img139} alt='img139' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img140} alt='img140' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img141} alt='img141' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img143} alt='img143' position='top' />
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  style={{ margin: 15 }}> 
              <MDBCardImage src={img144} alt='img144' position='top' />
              </MDBCard>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
export default gallery;
