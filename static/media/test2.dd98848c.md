
class Solution {
	public static void main(String[] args){
		Main sol=new Main();
		String arr[]=args[0].split("\\s+");
		
		
		int a=Integer.parseInt(arr[0]);
		int b=Integer.parseInt(arr[1]);
		int c=Integer.parseInt(arr[2]);
		int X=Integer.parseInt(arr[3]);
		
		
		int ans=sol.presentTo66(a,b,c,X);
		
		System.out.println("Your ans : "+ans);
	}
}

