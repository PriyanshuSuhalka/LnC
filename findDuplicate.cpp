#include <iostream>
#include <unordered_map>

using namespace std;

void findDuplicateCharacters(const string &str)
{
    unordered_map<char, int> charCount;

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] != ' ')
        {
            charCount[str[i]]++;
        }
    }

    for (auto alphabetNumber : charCount)
    {
        if (alphabetNumber.second > 1)
        {
            cout << alphabetNumber.first << " - " << alphabetNumber.second << " times" << endl;
        }
    }
}

int main()
{
    string input = "Java programming";
    findDuplicateCharacters(input);
    return 0;
}
