#include<iostream>
#include<limits.h>
using namespace std;
int main()
{
     int kLargest = INT_MIN;
     int kSmallest= INT_MAX;
    int arr[6] = { 7, 10, 4, 3, 20, 15};
    int k = 3; 

    for(int i = 0 ; i<k ; i++){
        if(arr[i] < kSmallest){
            kSmallest = arr[i];
        }
        if(arr[i] > kLargest){
            kLargest = arr[i];
        }
    }
    cout<<kLargest  << endl << kSmallest <<endl ;

    /* code */
    return 0;
}

