#include<iostream>
using namespace std;
int main()
{ 
    int arr[4] = {1,2,3,4};
    int start = 0 ;
    int end = 3;
    int temp = 0;
    while (start<end)
    {
        /* code */
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end -- ;
    }
    for (int i = 0; i < 4; i++)
    {
        /* code */
        cout<<arr[i] << endl;
    }
    
    return 0;
}