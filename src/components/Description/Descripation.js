import Cloud from "../../assets/svgs/Cloud-sofa.png";
import { Styleddev } from "./Descripations-style";

function Descripation(){

       return(
      <>
        <Styleddev>
            <hr/>
            <br />
          <div className="tags">
               <a href="#">Descripation</a> 
               <a href="#">Additional Information</a> 
               <a href="#">Reviews [5]</a> 
          </div>
          

           <div className="images">
               <img src= {Cloud} alt="image-1" width="37%" height="30%"/>

               <img src= {Cloud} alt="image-2" width="37%" height="30%"/>

           </div>
           <div className="boxs">
           <div className="box1"></div>
           <div className="box2"></div>
           </div>

        </Styleddev>    
      </>
          
       );


}

export default Descripation ;