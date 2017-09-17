
/*
	- static type check
	- Interface is used  for type check at compile time
	- ? indicate variable is an optional. i.e. id?: number; 
*/
export Interface Post{
	
	userId: number;
	id?: number;
	title: string;
	body: string;

}