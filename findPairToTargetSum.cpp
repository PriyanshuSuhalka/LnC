#include <iostream>
#include <unordered_map>
using namespace std;

void findPairs(int nums[], int size, int target) {
    unordered_map<int, bool> numMap;

    for (int i = 0; i < size; i++) {
        int complement = target - nums[i];

        if (numMap[complement]) {
            cout << "Pair found (" << nums[i] << ", " << complement << ")\n";
        }
        numMap[nums[i]] = true;
    }
}

int main() {
    int nums[] = {8, 7, 2, 5, 3, 1};
    int target = 10;
    int size = sizeof(nums) / sizeof(nums[0]);

    findPairs(nums, size, target);
    return 0;
}
