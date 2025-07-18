
let xcord_object=[];
let ycord_object=[];
let lefpos=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let toppos=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


function getCordinates(bn) {
   let gameObject;
   let gameboard ;
   let btnCrntCor_x;
   let btnCrntCor_y;
   let thisObject=document.getElementById("b"+bn); 
   (document.getElementById("Status")).innerHTML="Few steps to win....."; 
   
   gameboard = document.getElementById("board");
   btnCrntCor_x =(Math.round(((thisObject.getBoundingClientRect().left)-(gameboard.getBoundingClientRect().left))*4/(gameboard.getBoundingClientRect().width))+1);
   btnCrntCor_y =(Math.round(((thisObject.getBoundingClientRect().top)-(gameboard.getBoundingClientRect().top))*4/(gameboard.getBoundingClientRect().height))+1);
 

   for(let i =1; i<16;i++){
   
      gameObject=document.getElementById("b"+i);
      let left_board = gameObject.getBoundingClientRect().left;
      let left_object=gameboard.getBoundingClientRect().left;
      let boardwidth=gameboard.getBoundingClientRect().width;
      let top_board = gameObject.getBoundingClientRect().top;
      let top_object=gameboard.getBoundingClientRect().top;
      let boardheight=gameboard.getBoundingClientRect().height;
      
      xcord=(Math.round((left_board-left_object)*4/boardwidth)+1);
      ycord=(Math.round((top_board-top_object)*4/boardheight)+1);
      xcord_object[i-1]=(xcord);
      ycord_object[i-1]=(ycord);
   }
   
   let emptyBox_xcord =getEmptybox_xCord();
   let emptyBox_ycord=getEmptybox_yCord();
   let moveable =(isMoveable(btnCrntCor_x,btnCrntCor_y,emptyBox_xcord,emptyBox_ycord));
   
   if (moveable){
      let temp_x;
      let temp_y;
      let temp_x_new;
      let temp_y_new;

      temp_x=emptyBox_xcord;
      temp_y=emptyBox_ycord;


      // xcord_object[bn-1]=emptyBox_xcord;
      // ycord_object[bn-1]=emptyBox_ycord;
      console.log("new 1"+ lefpos[bn-1]);
      console.log("new 1"+ toppos[bn-1]);
      
      // let buttonId=document.getElementById("b"+bn);
      temp_x_new=getLeft(temp_x,btnCrntCor_x);
      temp_y_new=getTop(temp_y,btnCrntCor_y);

      console.log(temp_x_new);
      console.log(temp_y_new);

      
      thisObject.style.left=(lefpos[bn-1]+temp_x_new)+"px";
      thisObject.style.top=(toppos[bn-1]+temp_y_new)+"px";
      console.log(btnCrntCor_x +" , "+ btnCrntCor_y);
      lefpos[bn-1]=lefpos[bn-1]+temp_x_new;
      toppos[bn-1]=toppos[bn-1]+temp_y_new;

      console.log("new 2 "+ lefpos[bn-1]);
      console.log("new 2 "+ toppos[bn-1]);
      

      // buttonId.style.gridColumn="emptyBox_xcord/span 1";
      // buttonId.style.gridRow="emptyBox_ycord/span 1";
      

   }else {

   }
   // console.log(btnCrntCor_x +" , "+ btnCrntCor_y);
   // console.log((document.getElementById("b"+bn)).getBoundingClientRect().left);
   // console.log((document.getElementById("b"+bn)).getBoundingClientRect().top);
   


}
   

function isWin(){
   
}

function change2(){
   let bx14; 
   bx14 = document.getElementById("b14");
   bx14.style.left="225px";
}

function getEmptybox_xCord(){
   let emptyBox_xcord;
   let sumofxcord;
   sumofxcord=getSumOfArray(xcord_object);
   emptyBox_xcord=(40-sumofxcord);
   sumofxcord=0;
   
   return emptyBox_xcord ;

}


function getEmptybox_yCord(){
   let emptyBox_ycord;
   let sumofycord;
   sumofycord=getSumOfArray(ycord_object);
   emptyBox_ycord=(40-sumofycord);
   sumofycord=0;

   return emptyBox_ycord ;

}



function getSumOfArray(arr){
   let sum;
   sum=0
   
  
   for(let a=0;a<arr.length; a++){

      sum +=arr[a];
   }
   
   return sum;
   

}

function isMoveable(c_x,c_y,e_x,e_y){
   let currentx=c_x;
   let currenty=c_y;
   let emptyBoxx=e_x;
   let emptyBoxy=e_y;
   //let moveability;
   let difx;
   let dify;
   let moveTox;
   // let moveToy;
   difx=Math.abs(emptyBoxx-currentx);
   dify=Math.abs(emptyBoxy-currenty);

   if (((difx==1)&&(dify==0))||((difx==0)&&(dify==1))){

      return true;

   } else{
      return false;

   }

   

}
function getLeft(x,x1) {
   let button_left=(x-x1)*227;
   console.log("jump along x to"+(x-x1));
   // const initx=168.40380859375;
   // const btnwidth = 226.9921875;
   // let button_left;
   // button_left=((x_value-1)*btnwidth+initx)-838.75;
   
   return button_left;
}

function getTop(y,y1){
   let button_right=(y-y1)*227;
   console.log("jump along y to"+ (y-y1));
   // const inity=170.81689453125;
   // const btnHeight = 228.984375;
   // let button_right;
   // button_right=((y_value-1)*btnHeight+inity)-628.76953125;
   
   return button_right;

}

function testing(){




}