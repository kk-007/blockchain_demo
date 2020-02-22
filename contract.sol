pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract con {
   string str="TEST";
 uint i=0;
 uint size = 1000;
 struct Data
   {
       uint id;
       string name;
   }
   Data[] datas;
 function set(string memory _data) public {
   datas.push(Data(i,_data));
   i++;
 }

 function get() public view returns(Data[] memory) {
     return datas;
 }
}