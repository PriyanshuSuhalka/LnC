#include <iostream>
using namespace std;

int findMissingPositive(int arr[], int n) {
    int missing = 1;

    while (true) {
        bool found = false;
        for (int i = 0; i < n; i++) {
            if (arr[i] == missing) {
                found = true;
                break;
            }
        }
        if (!found)
            return missing;
        
        missing++;
    }
}

int main() {
    int arr1[] = {2, 3, 7, 6, 8, -1, -10, 15};
    int n1 = sizeof(arr1) / sizeof(arr1[0]);
    cout << "Smallest missing positive: " << findMissingPositive(arr1, n1) << endl;

    int arr2[] = {2, 3, -7, 6, 8, 1, -10, 15};
    int n2 = sizeof(arr2) / sizeof(arr2[0]);
    cout << "Smallest missing positive: " << findMissingPositive(arr2, n2) << endl;

    int arr3[] = {1, 1, 0, -1, -2};
    int n3 = sizeof(arr3) / sizeof(arr3[0]);
    cout << "Smallest missing positive: " << findMissingPositive(arr3, n3) << endl;

    return 0;
}
