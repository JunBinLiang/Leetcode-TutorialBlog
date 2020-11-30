
class Solution {
	public static void main(String[] args){
		Main sol=new Main();
		String arr[]=args[0].split("\\s+");
		
		
		int a=Integer.parseInt(arr[0]);
		int b=Integer.parseInt(arr[1]);
		
		
		int ans=sol.smart66Bro(a,b);
		
		System.out.println("Your ans : "+ans);
	}
}

