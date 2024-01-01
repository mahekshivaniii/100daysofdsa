#include<iostream>
using namespace std;
int main(){
    int arr[5] = { 0, 23, 14, 12, 9 };
    for (int j = 0; j < 4; j++)
    {
        /* code */
        for (int i = 0; i < 4; i++)
    {
        /* code */
          if(arr[i] > arr[i+1]){
            int temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
          }
    }
    }
     
    
    for(int i = 0 ; i < 5 ; i++){
        cout<< arr[i] << endl; ;
    }
    
    return 0 ;
}