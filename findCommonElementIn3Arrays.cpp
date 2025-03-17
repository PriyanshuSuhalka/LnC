#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

vector<int> findCommonElements(vector<int> arr1, vector<int> arr2, vector<int> arr3)
{
    unordered_map<int, int> elementCount;
    vector<int> commonElements;

    for (int num : arr1)
    {
        elementCount[num] = 1;
    }

    for (int num : arr2)
    {
        if (elementCount[num] == 1)
        {
            elementCount[num] = 2;
        }
    }

    for (int num : arr3)
    {
        if (elementCount[num] == 2)
        {
            commonElements.push_back(num);
            elementCount[num] = -1;
        }
    }

    return commonElements;
}

int main()
{
    vector<int> arr1 = {1, 2, 3, 4, 5, 6};
    vector<int> arr2 = {1, 3, 4, 6, 7, 6};
    vector<int> arr3 = {3, 6, 4, 5, 6, 7};

    vector<int> result = findCommonElements(arr1, arr2, arr3);

    for (int num : result)
    {
        cout << num << " ";
    }

    return 0;
}
