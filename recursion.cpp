#include <iostream>
using namespace std;

int y = 0;
int fun1(int x)
{

	if(x>0){
		fun1(x-1);
		cout << x<<"\n";
		y++;
	}
	cout<<y<<"\n";
}

int main(){
	int x = 6;
	fun1(x);
}
