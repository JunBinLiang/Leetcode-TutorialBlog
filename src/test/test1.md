
class Solution {
	public static void main(String[] args){
		Main sol=new Main();
		String s=args[0];
		String arr[]=s.split(" ");
		int A[]=new int[Integer.parseInt(arr[0])];
		for(int i=0;i<A.length;i++){
			A[i]=Integer.parseInt(arr[i+1]);
		}
		int target=Integer.parseInt(arr[arr.length-1]);
		sol.twoSum(A,target);
	}
}

