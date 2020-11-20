
class Solution {
	public static void main(String[] args){
		Main sol=new Main();
		int A1[]=new int[]{2,7,11,15};
		int A2[]=new int[]{3,2,4};
		int A3[]=new int[]{3,3};
		
		int ans1[]=new int[]{0,1};
		int ans2[]=new int[]{1,2};
		int ans3[]=new int[]{0,1};
		List<Boolean>list=new ArrayList<>();
		try{
			list.add(same(sol.twoSum(A1,9),ans1));list.add(same(sol.twoSum(A2,6),ans2));
			list.add(same(sol.twoSum(A3,6),ans3));
			
			System.out.println();
			for(boolean a:list){
				System.out.println(a);
			}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		
	}
	
	public static boolean same(int A[],int B[]){
		if(A==null)return false;
		if(A.length!=B.length)return false;
		for(int i=0;i<A.length;i++){
			if(A[i]!=B[i])return false;
		}
		return true;
	}
}

