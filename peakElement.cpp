#include<iostream>
using namespace std;
int main (){
    // this is naive apporach
   
 int arr[3] ={1,2,3};
 

for (int i = 0; i < 4; i++)
{
    /* code */
    if(arr[i] < arr[i+1] && arr[i+1] > arr[i+2]){

    cout<<arr[i+1]<<endl;
}


}
return 0 ;
}