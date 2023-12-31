#include<iostream>
using namespace std;
int main (){
    // this is naive apporach
   
 int arr[4] ={5,10,20,15};
 

for (int i = 0; i < 4; i++)
{
    /* code */
    if(arr[i] < arr[i+1] && arr[i+1] > arr[i+2]){

    cout<<arr[i+1]<<endl;
}


}
return 0 ;
}