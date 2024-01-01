#include<iostream>
#include<limits.h>
using namespace std;
int main(){

    int arr[4] = {340,5,6,67};
    int min  = INT_MAX ;
     int max = INT_MIN ;
    for(int i = 0 ;i<4;i++){
        if(arr[i] <min){ // 340 < 
            min= arr[i];

        }
       
        if(arr[i] > max){
            max = arr[i];
        }
    }

    
  cout<<"the max value of array is " << max <<endl;
  cout<<"the min value of array is " << min << endl;
    return 0 ;
}