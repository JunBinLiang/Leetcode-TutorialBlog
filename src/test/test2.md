
class Solution {
	public static void main(String[] args){
		Main sol=new Main();
		String arr[]=args[0].split("\\s+");
		
		
		int a=Integer.parseInt(args[0]);
		int b=Integer.parseInt(args[1]);
		int c=Integer.parseInt(args[2]);
		int X=Integer.parseInt(args[3]);
		
		
		int ans=sol.presentTo66(a,b,c,X);
		
		for(int i:ans){
			System.out.print("Your ans : "+ans);
		}
	}
}

